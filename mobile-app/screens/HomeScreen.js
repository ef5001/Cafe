import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const KICKSTARTER_URL = 'https://www.kickstarter.com'; // TODO: replace with live campaign link

const PILLARS = [
  {
    icon: '♟',
    title: 'Games',
    body: 'A curated library of board games for every taste — from quick fillers to all-night epics.',
  },
  {
    icon: '☕',
    title: 'Coffee',
    body: 'Craft espresso and carefully sourced beans from regional Virginia roasters.',
  },
  {
    icon: '🏰',
    title: 'Community',
    body: 'Altavista\'s third space. A place to gather, play, and belong.',
  },
];

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Hero */}
      <View style={styles.hero}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.heroLogo}
          resizeMode="contain"
        />
        <Text style={styles.heroHeadline}>Coming to Altavista, VA</Text>
        <Text style={styles.heroSub}>
          A board game cafe where craft coffee meets community. We're opening soon — help us get there.
        </Text>
      </View>

      {/* Kickstarter CTA */}
      <View style={styles.ctaBlock}>
        <Text style={styles.ctaLabel}>Kickstarter Campaign Live</Text>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => Linking.openURL(KICKSTARTER_URL)}
          activeOpacity={0.8}
        >
          <Text style={styles.ctaButtonText}>Back Us on Kickstarter</Text>
        </TouchableOpacity>
        <Text style={styles.ctaGoal}>Goal: $10,000 · Altavista, VA</Text>
      </View>

      {/* Pillars */}
      <View style={styles.pillars}>
        {PILLARS.map((p) => (
          <View key={p.title} style={styles.pillar}>
            <Text style={styles.pillarIcon}>{p.icon}</Text>
            <Text style={styles.pillarTitle}>{p.title}</Text>
            <Text style={styles.pillarBody}>{p.body}</Text>
          </View>
        ))}
      </View>

      {/* Membership teaser */}
      <View style={styles.membershipBlock}>
        <Text style={styles.sectionTitle}>Membership · $10/mo</Text>
        <Text style={styles.membershipBody}>
          Unlimited game time, one free drink per visit, priority reservations, and access to members-only events and tournaments.
        </Text>
        <View style={styles.membershipTiers}>
          {['Villager', 'Adventurer', 'Guild Member', 'Dungeon Delver', 'Party Leader', 'Legendary Hero'].map((tier) => (
            <View key={tier} style={styles.tierChip}>
              <Text style={styles.tierChipText}>{tier}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>428 Main St, Altavista, VA</Text>
        <Text style={styles.footerText}>efoster5001@gmail.com</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#140e06',
  },
  content: {
    paddingBottom: 48,
  },

  // Hero
  hero: {
    alignItems: 'center',
    paddingTop: 48,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  heroLogo: {
    width: 180,
    height: 180,
    marginBottom: 16,
  },
  heroHeadline: {
    fontSize: 13,
    color: '#c8922a',
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  heroSub: {
    fontSize: 15,
    color: '#a8916a',
    textAlign: 'center',
    lineHeight: 22,
  },

  // CTA
  ctaBlock: {
    marginHorizontal: 24,
    marginBottom: 40,
    alignItems: 'center',
    backgroundColor: '#1f1509',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4a3218',
    padding: 24,
  },
  ctaLabel: {
    fontSize: 11,
    color: '#7a5518',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  ctaButton: {
    backgroundColor: '#c8922a',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 6,
    marginBottom: 12,
  },
  ctaButtonText: {
    color: '#0e0902',
    fontWeight: '700',
    fontSize: 15,
    letterSpacing: 0.5,
  },
  ctaGoal: {
    fontSize: 12,
    color: '#4a3218',
    letterSpacing: 1,
  },

  // Pillars
  pillars: {
    paddingHorizontal: 24,
    gap: 16,
    marginBottom: 40,
  },
  pillar: {
    backgroundColor: '#1f1509',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2a1c0d',
    padding: 20,
  },
  pillarIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  pillarTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#c8922a',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  pillarBody: {
    fontSize: 14,
    color: '#8a7050',
    lineHeight: 20,
  },

  // Membership
  membershipBlock: {
    marginHorizontal: 24,
    marginBottom: 40,
    backgroundColor: '#1f1509',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4a3218',
    padding: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#e0b05a',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  membershipBody: {
    fontSize: 14,
    color: '#8a7050',
    lineHeight: 21,
    marginBottom: 16,
  },
  membershipTiers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tierChip: {
    borderWidth: 1,
    borderColor: '#4a3218',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  tierChipText: {
    fontSize: 12,
    color: '#7a5518',
    letterSpacing: 0.5,
  },

  // Footer
  footer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 4,
  },
  footerText: {
    fontSize: 12,
    color: '#4a3218',
    letterSpacing: 1,
  },
});

# Chaotic Neutral Cafe — Mobile App Project Context

## What We're Building

A mobile app for **Chaotic Neutral Cafe**, a board game cafe opening in Altavista, VA. The app should support both pre-opening (hype/Kickstarter) and post-opening (loyalty, reservations, events, menu) use cases.

---

## The Business

**Name:** Chaotic Neutral Cafe
**Entity:** Chaotic Neutral LLC
**Location:** 428 Main St, Altavista, VA (lease in negotiation)
**Owner:** Ethan Foster (efoster5001@gmail.com)
**Status:** Pre-opening. Kickstarter campaign active with a $10,000 funding goal. Target opening: 3–6 months post-funding.

### Concept

A craft coffee shop combined with a curated board game library. The goal is to be Altavista's community third space.

**Non-members:** 2 hours of free game play with any food/drink purchase
**Members ($10/month):**
- Unlimited game time
- One free drink per visit
- Priority reservations
- Members-only events and tournaments
- 10% off food, merch, and events

---

## Membership & Kickstarter Tiers

| Tier | Price | Reward |
|------|-------|--------|
| Villager | $10 | Digital founder's card |
| Adventurer | $25 | 1 month membership + digital founder's card |
| Guild Member | $50 | 3 months membership + digital founder's card |
| Dungeon Delver | $100 | 6 months membership + digital founder's card |
| Party Leader | $250 | Lifetime founding member status |
| Legendary Hero | $500 | Lifetime founding member status (top tier) |

---

## Brand Voice & Tone

- Community-forward, not founder-forward
- Warm, playful, slightly nerdy — RPG naming conventions (Villager, Adventurer, etc.)
- Not corporate. Not cutesy. Grounded and genuine.
- "Chaotic Neutral" as a name signals personality — lean into it without overdoing it

---

## Planned Coffee Program

- Espresso blend (house)
- House drip coffee
- Rotating single origin
- Coffee supplier TBD (evaluating Afterglow Coffee, Blanchard's Coffee, Red Rooster Coffee)

---

## App Feature Ideas (Priority Order)

### Pre-Opening Phase
1. Kickstarter CTA and campaign link
2. Concept/about section
3. Membership info
4. Email/interest sign-up

### Post-Opening Phase
1. **Membership management** — sign up, manage $10/month subscription, view perks
2. **Game library browser** — search/browse available board games
3. **Table/session reservations** — reserve a table, especially for members
4. **Events calendar** — tournaments, members-only events
5. **Digital founder's card** — display for Kickstarter backers
6. **Menu** — coffee and food offerings
7. **Loyalty / visit tracking** — free drink per visit for members
8. **Push notifications** — events, specials, new game arrivals

---

## Technical Preferences

- Owner (Ethan) is not a developer — prefer low-maintenance stack
- Should be maintainable by a non-dev post-launch with minimal overhead
- Cross-platform (iOS + Android) preferred over native-only
- No stack has been decided yet — open to recommendations

### Suggested Stack Considerations
- **React Native + Expo** — cross-platform, large community, relatively approachable
- **Flutter** — performant, good UI, Dart learning curve
- **Expo + Supabase** — good pairing for auth, DB, and real-time without managing a backend

---

## Related Website Repository

The main website is being built separately (marketing site, pre-opening). The app should be consistent with website branding but is a separate project.

---

## Contact / Location

- **Address:** 428 Main St, Altavista, VA
- **Mailing:** 10381 Blue Ridge Drive, Hurt, VA 24563
- **Owner email:** efoster5001@gmail.com

---

## Open Items

- Lease finalization at 428 Main St
- Coffee supplier selection
- Espresso equipment decision
- App stack decision
- Menu development
- Kickstarter campaign link (add when available)

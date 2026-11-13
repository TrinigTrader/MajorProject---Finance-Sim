# HDB Life

A pixel-art life sim set in a Singapore HDB estate that teaches young adults about money: saving, CPF, investing, loans, insurance and the real odds of the lottery.

Play it at **https://trinigtrader.github.io/MajorProject---Finance-Sim/** (GitHub Pages, from `main`).

## What's new in v16

**A whole life, 18 to 70**

- **17 chapters**: two years each up to 34, then four years each up to 70. CPF contribution rates step down from 55, CPF LIFE starts paying at 65, and you can retire at the Job Office from 62.
- **Net worth you can check**: every review itemises cash, savings, CPF, investments, stocks, property at today's valuation and car value, less every loan. The total always equals the sum of the lines.
- **Better jobs, more stress**: work stress scales with the role and with each promotion. Neglect your health for several chapters and you can die early (solo games only).
- **Property Hub**: its own desk for resale homes, BTO applications, grants and the homes you own. HDB flats (resale and BTO) need a marriage certificate at any age; private homes stay open from 21.
- **BTO on the district map**: districts with a launch glow green (plenty left) or yellow (filling up); the rest are grey. Sold by ballot, with better odds for earlier tries.
- **Home loans line up with the Loan Desk**: HDB loan, bank fixed and bank floating packages, with the same rates and names in both places.
- **Registry & Family Centre**: a dating minigame, the Notice of Marriage and three ways to celebrate (each with a wedding cutscene), family planning with Baby Bonus and childcare costs, and estate planning with Ms Lim: a will, CPF nomination, Lasting Power of Attorney, and gifts to children, grandchildren or charity.
- **Car Showroom**: ten cars from a used hatchback to a V12, priced like Singapore (COE, ARF and all). View the car first, then do the paperwork. Buying plays a cutscene with an engine note to match (V8, flat-six, V12, EV whine). Owners drive through story mode and can have accidents. The showroom is gone from the Loan Desk.
- **My Pets**: the description stays put while the list scrolls, and pets sort by rarity.
- **The ending**: at 70 you see what you built and what you leave behind. Meet all seven marks of financial freedom and you unlock the title **A LIFE THAT'S FULL**. Then keep living that saved life, or start a new profile.

**Multiplayer rooms** (title screen > MULTIPLAYER ROOMS). Each player uses their own device and joins with a 5-character code. Rooms are listed under the profile that created or joined them. Every mode can be played free and easy (own speed, even on different days) or at the same pace (chapters move together).

- **Couple co-op**: propose to the other player; once accepted, the made-up spouse is replaced by your partner's real job and pay. Own cash and CPF, a joint savings account, a joint home with both CPF accounts and the grant on combined income. Both pick in secret at every crossroads: a match gives a bonus, a mismatch opens a "talk it out" round. Shared home comfort, shared pet, shared item drops, money arguments when either carries card debt, and a household score.
- **Couple competitive**: same seed, so the same job offers, stock prices, crash in chapter 4 and crossroads. Each review compares the two of you and lists what each chose.
- **Ghost race**: race a friend's recorded life (stored on their friend card) or your own last life, without both being online.
- **Estate, 3 to 6 players**: scarce BTO launches (about one flat per three players), a live resale market where homes players sell are listed and each purchase lifts that district 3%, one stock market, estate-wide booms, inflation and recessions with retrenchment risk by industry, home visits and gatherings, loans between players with defaults that cost reputation, a co-op business with stake-weighted votes, ang bao and wedding gifts, and item and pet trades capped at two offers a chapter.
- **Estate competitive**: the same estate at the same pace: a 5-minute hub timer that ends early when everyone presses SET OUT, autopilot for players who drop out, a room review with choices side by side, and the option to hide your net worth.

Prices, rates and rules are simplified for the game and are not financial advice. **Publish the new `firestore.rules`**: v16 adds the `rooms` collection, and rooms are refused without it.

## What's new in v15

- **Set Out is now a life story, not a battle**: each chapter you walk through two years of choices. Pick a focus (career, study, side hustle, relationships, health or money), meet people, and choose how to respond. Choices carry forward: promotions, poach offers, layoffs, dating, proposal, wedding, BTO keys, a baby, ageing parents.
- **Life happens**: random pop-ups such as a market crash, retrenchment, a fire at home, an injury, scam calls and rent hikes. Savings, insurance and earlier choices decide how much they hurt.
- **Stress and health matter**: hit 100 stress or 0 health and you collapse, wake up in the Hospital, pay the bill and lose a month.
- **Cutscenes and sound**: promotion, new job, layoff, engagement, wedding, baby, keys, crash, fire, injury, illness and collapse each have their own cutscene and audio.
- **Library** (was the Learning Centre): an NLB-style building with a reading room, financial quizzes for knowledge and XP, and a recommended knowledge level for each chapter. Knowledge raises your odds on risky choices.
- **Work minigames by field**: for example signing paperwork in business roles and tracing cuts in fashion roles.
- **Hospital** (was the Clinic): a walkable ward with reception, pharmacy, CPF MediSave and an insurance desk.
- **CPF**: Ordinary, Special and MediSave accounts with their own interest, and one-way OA to SA transfers.
- **Insurance**: a catalogue of policies for health, life, home, car and more, with Ms Lim explaining what each one is for.
- **Loan desk**: compare home, car, study, renovation and personal loans and credit lines at rates close to real ones, with Ms Lim pointing out what to check.
- **Investments**: gains and losses also show as a percentage.
- **Friends**: a friend request arrives as a notification with an ACCEPT button.
- **Pets**: all pets redrawn. The pet store opens on a page that shows its two sections, Pet Shop and Exotic Eggs. Exotic eggs now hold 25 pets (10 common, 6 epic, 4 legendary, 3 mythic, 2 secret), and legendary and above have their own cutscene, which also plays during a 10x hatch.
- **Buildings**: every building model redrawn with depth, shadows and street furniture.

Rates and premiums are simplified for the game and are not financial advice. `firestore.rules` is unchanged from v14.

## What's new in v14

- **Straight to the lobby**: signed-in players with a save skip character creation and land in the lobby. A new life reuses your saved look and goes straight to the path choice.
- **Friends**: search players by name or code and send a friend request. They get a notification and accept it, so only one person needs the code. Click a friend to see their current life, records, achievements and tags.
- **Messages**: text your friends from the phone. The made-up starter contacts are gone, and Ms Lim lives only in the **ADVISER** app (the tutorial now points there).
- **Phone**: Goals, Map and Profile were removed from the phone menu.
- **Profile**: edit your name in Profile > Profile.
- **Bank**: a plainer "Neighbourhood Bank" look with no script fonts.
- **Home editing**: storage sits in a sortable, scrollable panel on the right. Drag items onto the floor to place them and drag placed furniture to move it.
- **LEARN**: articles open in a large full-screen reader.
- **Pet gacha pity**: a legendary is guaranteed within 150 rolls and a mythic within 500. Each counter resets when you hit that tier, and the shop shows both bars.
- **Sound**: legendary, mythic and secret pet reveals and lottery, 4D and scratch wins have their own stingers, and the music fades out while they play.
- **New staff tags**: 赌神, 麻将神, AURA KING, SMELLY BOY and BILLIONAIRE. Tags show on friend cards and friend profiles.
- **Player admin** (staff only): tester tools > PLAYER ADMIN finds a player by name or code and gives titles, money, savings, knowledge, energy, levels or a note.

## What's new in v13

- **The Gilded Vault** (bank): deposit or withdraw any amount, stash bag items in vault slots, and credit cards from age 21.
- **Credit cards**: five made-up cards with different rewards, fees and income rules, plus a card page for balance, interest, limit, spending and statements.
- **Stock Exchange order ticket**: buy or sell a number of shares at market or limit prices, with a live order book and a 0.1% brokerage fee.
- **Titles**: unlock titles as you play and equip one in Profile > Titles. It shows on Lifegram and in the top bar. Tester accounts get 5 chroma staff tags.
- **Pet store**: hatch 10 exotic eggs at once.
- **Home store**: buying furniture sends it to storage, and a showroom previews each item in a styled room you can copy in one purchase.
- **Tester accounts**: unlimited job applications.

## Files

- `index.html`: the whole game in one file
- `firebase-config.js`: Firebase web config (public by design). Set it to `null` to play offline.
- `firestore.rules`: security rules to paste into Firebase console > Firestore Database > Rules

## Accounts and saves

Players log in with Google or a username and password (Firebase Authentication). Each account holds its own sub-profiles, and saves sync to Firestore about 2 seconds after each change.

Firestore layout:

| Path | What | Who can access |
| --- | --- | --- |
| `users/<uid>/kv/<key>` | profiles and save games | only that account |
| `codes/<XXXX-XXXX>` | public friend card for each profile | signed-in players can read, the owner can write |
| `gram/<uid>` | Lifegram posts | signed-in players can read, the owner can write |
| `inbox/<CODE>/items/<id>` | friend requests, acceptances, message pings and staff gifts | the profile's owner reads and deletes; others can only add items that pass the rules |
| `chats/<A_B>/m/<id>` | direct messages between two friends | only those two players |
| `rooms/<CODE>` | one multiplayer room: players' public summaries and the shared estate | any signed-in player with the code can read and join; only members can write |

**After updating to v14 or v16, publish the new `firestore.rules`** (Firebase console > Firestore Database > Rules, or `firebase deploy --only firestore:rules`). Without it, friend requests, chat, staff gifts and multiplayer rooms are refused.

Staff accounts are listed in two places: `window.HDB_TESTERS` in `index.html` (shows the tools) and `isStaff()` in `firestore.rules` (lets the account send gifts). Username accounts sign in as `<name>@players.hdblife.app`, so add that email to `isStaff()`.

Gifted money, savings, knowledge, energy and levels are applied the next time the player is in the lobby of a single-player game. Titles and notes apply right away. Name search only finds players who have opened v14 at least once.

## Firebase setup checklist

1. Authentication > Sign-in method: enable **Google** and **Email/Password**.
2. Firestore Database: create it (production mode). The deploy below uploads `firestore.rules`.

## Hosting

GitHub Pages serves `main` automatically. Add `trinigtrader.github.io` under Firebase Authentication > Settings > Authorized domains, and paste `firestore.rules` into Firestore > Rules.

### Optional: Firebase Hosting instead

Needs Node.js. From the repo folder:

```
npx -y firebase-tools@latest login
npx -y firebase-tools@latest deploy --only hosting,firestore:rules
```

The `.web.app` and `.firebaseapp.com` domains are already allowed for sign-in, so nothing else is needed.

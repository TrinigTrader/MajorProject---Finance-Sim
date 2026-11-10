# HDB Life

A pixel-art life sim set in a Singapore HDB estate that teaches young adults about money: saving, CPF, investing, loans, insurance and the real odds of the lottery.

Play it at **https://trinigtrader.github.io/MajorProject---Finance-Sim/** (GitHub Pages, from `main`).

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

**After updating to v14, publish the new `firestore.rules`** (Firebase console > Firestore Database > Rules, or `firebase deploy --only firestore:rules`). Without it, friend requests, chat and staff gifts are refused.

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

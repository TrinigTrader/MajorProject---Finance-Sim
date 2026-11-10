# HDB Life

A pixel-art life sim set in a Singapore HDB estate that teaches young adults about money: saving, CPF, investing, loans, insurance and the real odds of the lottery.

Play it at **https://trinigtrader.github.io/MajorProject---Finance-Sim/**

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

## Firebase setup checklist

1. Authentication > Sign-in method: enable **Google** and **Email/Password**.
2. Authentication > Settings > Authorized domains: add `trinigtrader.github.io`.
3. Firestore Database: create it, then paste `firestore.rules` into the Rules tab and publish.

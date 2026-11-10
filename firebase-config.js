// Firebase web config for HDB Life. These values are public by design;
// the rules in firestore.rules are what protect each player's data.
// Set this to null to run the game in offline mode (saves stay in the browser).
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAetfUz1qCkhR5iLWVQcH9i6zMcPDKWo7M",
  authDomain: "major-project---finance-game.firebaseapp.com",
  projectId: "major-project---finance-game",
  storageBucket: "major-project---finance-game.firebasestorage.app",
  messagingSenderId: "79008101358",
  appId: "1:79008101358:web:613226df165cc7960a54ff",
  measurementId: "G-PE48LL7K96"
};

// Accounts that get the TESTER TOOLS button (in the profile window).
// Use the username for username accounts, or the full email for Google accounts. Lowercase.
window.HDB_TESTERS = ["hdb_master"];

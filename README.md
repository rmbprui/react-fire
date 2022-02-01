# React-Fire App

## Pre-requisites

- Node JS

## Create new React app

`npx create-react-app react-fire`

## Create Firebase project

On the [FirebaseConsole](https://console.firebase.google.com/) create a new project and register a web app. Save the configuration code.

## Installing Firebase

Run `npm install firebase`

Create a `firebase.js` file on a new folder `db` to initialize Firebase

```JavaScript
// db/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Realtime Database

const firebaseConfig = {
  // Your configuration from the Firebase web app
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
```

On your `App.js` file import the Firebase modules

```JavaScript
import { ref, onValue, set } from "firebase/database";

import { db } from "./db/firebase";
```

And now you're ready to use the Realtime Database from Firebase

## Read data

```JavaScript
const exmapleRef = ref(db, "posts/example");
onValue(exmapleRef, (snapshot) => {
  const data = snapshot.val(); // Data Object

  const postTitle = data.title;
});
```

**Note**: remember to import the database modules if you aren't in `App.js` any more

```JavaScript
import { ref, onValue, set } from "firebase/database";

import { db } from "./db/firebase";
```

## Write data

```JavaScript
set(ref(db, "posts/example"), {
  title: "New title",
  content: "New content"
});
});
```

**Note**: remember to import the database modules if you aren't in `App.js` any more

```JavaScript
import { ref, onValue, set } from "firebase/database";

import { db } from "./db/firebase";
```

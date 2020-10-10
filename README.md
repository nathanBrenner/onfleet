# Realtime Application

### Overview

The goal of this assignment to to create a simple web application which updates a sortable list of items in real-time based on updates from a websocket. You are free to use any resources you find online but if you copy any code (even if it's modified), please add a comment with the source.

### Requirements

The application need only target Chrome, Firefox, or Safari and does not need to worry about backwards compatibility; if it runs in the latest version of your test browser it'll be sufficient. The boilerplate for this project does not include any frameworks and uses vanilla js. You should use React or Vue.js.

### Functionality

The application should create a table with 100 rows, with IDs from 0... 99. Each row should have three columns -- the ID, a numerical value, and a name. You should initialize the numerical value to the ID for that row and may choose any initial names that you like. The table should be sorted in descending order by the value in that row. You should feel free to use any scheme you'd like to organize files, etc but note that minifying the app and other steps to productionize are not within the scope of this assignment. You should feel free to polish the development experience or build pipeline if you wish but accomplishing the listed milestones is more important.

### Getting set up

You should only need to install the modules in the `package.json` file included via `npm install` to get started. You can run the server simply via `node server.js` and an example client is also provided which may be run in a similar fashion.

### Milestones

1. Application shows a static list with all items
2. Application receives a continuous stream of updates over the websocket and can update the records in place and display them
3. Application is performant when `NUM_ITEMS = 1000` and `MESSAGES_PER_SECOND = 1000` (you'll want to tweak the app to have 1000 rows as well)

### Implementation

I used Parcel to bundle the app. A lot of react apps are bundled with Webpack, which often requires a lot of setup and long term headache of maintance. Parcel is a lot easier to get setup and feels a lot more performant (which might not be any better at scale compared to Webpack).

To start the client app: `npm run dev` with `npm start` which is odd because that script isn't defined in package.json.

I do advocate for writing automated tests and I do subscribe to a list of conventions. Some are in the react app, some might not because it's such a small thing. With the exception of showing that I can write tests, I didn't feel like component unit tests would provide much value in this context. I used Faker to generate the names just so that it would be some realistic input.

Going further, I'd probably throttle the updates to state maybe ever 5 seconds so that the app doesn't re-render the table so frequently.

After getting it to work, my concerns became focused on performance optimizations, and some styles.

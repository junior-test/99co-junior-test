This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and modified to provide a nice little challenge for 99.co frontend candidates.

# Goal
- Create a carousel component that matches the [design](https://github.com/junior-test/99co-junior-test/raw/master/design_reference.png)
- Able to browse photos on listing card
- Able to fetch additional listings once reach the end of the carousel (Additional listing data can be fetched through the same listing API)
- Bonus points for:
  - Hosting the project on a remote server/service so we can visit later
  - Performance optimization/Architectural suggestion to the project that you deem worthy
  - Clear and reviewable work process

# Delivery
Once finished, please push to a separate repo and drop us an email. We'll get back to you asap.

# Restriction
- Do not use any extra library other than those provided in the repo

# How to use the project
- To install dependencies, run: `yarn install` or `npm install`
- To start developing, run: `yarn start`
- To build file for production, run: `yarn run build`

# Project Architecture
`/src` provides all the source code you need to start working in this Redux project.
Inside `/src`, files are categorized into:
- `App.* files`: the high level app component, house to all other small component
- `/actions/*`: store all redux actions
- `/reducers/*`: store all redux reducers
- `/components/*`: where the actual UI & data components live

You are free to reorganize the structure as you see fit but we've provided an easy starting point with `/src/components/ListingCarousel.js`. This file provide some basic hookup to data fetching. The listings data snapshot you need is available on this.props.listings. Alternatively, just open your developer console to start inspecting the data right away.

The listing data shape is quite complicated but you will mainly be interested in the following attributes to complete your challenge:
- address_line_1
- address_line_2
- main_category
- attributes
- photos
- user

# Existing features
## v1.1.0
- An app shell that provides Redux infra & HMR support
- Prefetched listings API data

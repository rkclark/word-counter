# Word Counter

A React web application that counts all of the words in a .txt file selected by the user. As a bonus, it also displays whether each word count is a prime number!

[Click here to see the demo on Heroku :)](http://rkclark-word-counter.herokuapp.com/)

### Installation

- Clone this repo
- In project root directory, run `npm install`
- To run the local dev server, run `npm run dev`
- Navigate to `http://localhost:3000/` to use the app

**To Run the Tests**

- Run `npm test`

**Development**

To build the `./dist` folder, run `npm run build`.

This is run automatically when deploying to Heroku.

### Technologies

The app is built with:

- Node
- Express
- React
- Webpack
- Bootstrap 4
- Sass

And tested with:

- Mocha
- Chai
- Enzyme
- Sinon

Javascript files are written in ES6 and transpiled using Babel.

### Screenshots

**Waiting for File Selection**

![WC waiting](http://i.imgur.com/53Us7sP.png)

**User About to Drop .txt File**

![WC green](http://i.imgur.com/NCLiKHC.png)

**User Trying to Drop Non .txt File**

![WC red](http://i.imgur.com/YNvRLmD.png)

**File Ready for Processing**

![WC ready](http://i.imgur.com/q0kfSV4.png)

**Results!**

![WC results](http://i.imgur.com/XcR3Vwg.png)

# React Memory Game App

This app is a test of your memory through card shuffling. Based on a TV shows characters after clicking your first choice
images will shuffle. The game is to remember which you have already chosen, before choosing again.
For this assignment, you'll create a memory game with React. This assignment will require you to break up your 


## Overview

Memory Click was created using `create-react-app`. The application's UI into components are broken up
to manage component state, and respond to user events.
Bootstrap styling was used by adding the CDN to the `index.html` file 
within the public folder. The entire project was deployed via Heroku. 

[Demo Game](https://stormy-earth-80691.herokuapp.com/)


![GamePhoto](https://media.giphy.com/media/gfHLScFOZ3eyhzXpay/giphy.gif)


### Instructions

1. Check out the [example solution](https://clicky-game.netlify.com/) and study the app's basic functionality.

2. Create a new React application using [Create React App](https://github.com/facebookincubator/create-react-app).

3. The application should render different images (of your choice) to the screen. Each image should listen for click events.

4. The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

5. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

6. Once the user's score is reset after an incorrect guess, the game should restart.


After completion the game can be deployed using Heroku. Or following React App instructions to deploy on GitHub Pages

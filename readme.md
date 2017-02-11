# Wine

This is a web app where you can keep track of the wines in your wine cellar, based on data from the [Wine.com Public API](https://api.wine.com/).

[Live Demo](http://lthr.io/wine)

[![Build Status](https://travis-ci.org/lthr/wine.svg?branch=master)](https://travis-ci.org/lthr/wine)

## Features
1. Search for wines available on Wine.com.
2. Add selected wines to your list.
3. View details of wines in your list (label, name, vinyard, year).
4. Add personal comment to each of your wine.
5. Remove wines from your list.
6. Sort by wine name, vinyard or year.


## Technologies used
The application have been made using AngularJS 1.6 with a beta release of UI-Router ([which supports AngularJS 1.5+ components](https://ui-router.github.io/blog/route-to-component/)). 
To be able to store wines on your unit, [ngStorage](https://github.com/gsklee/ngStorage) have been implemented.

As grid system, I've chosen the [Alpha 6 version of Bootstrap](https://blog.getbootstrap.com/2017/01/06/bootstrap-4-alpha-6/), to try out their rewrite of all components into flexbox.

As JavaScript styleguide I've chosen to rely on[Tood Motto's guide for AngularJS](https://github.com/toddmotto/angular-styleguide).

The JavaScript language is ES6, using classes, imports and exports, to mimic Angular 2's code style.

The code is bundled with [Webpack](https://webpack.github.io/).

The app builds on [TravisCI](https://travis-ci.org) and deploys to GitHub Pages (check the `gh-pages` branch for generated code).


## Things to notice (disclaimer)
1. By using the latest Bootstrap, there can be layout issues on IE9.
2. The layout optimized for mobile only, and tested with Safari on an iPhone 6.
3. To be able to save wines for later, be sure your phone does not have Private Browsing enabled.


## TODO's
1. Add loading indicators, preferably using an httpInterceptor to toggle spinner on http calls.
2. Add auto focus to Search field with an autofocus directive.
3. Add an error handling if call to API fails, displaying an error message.
4. Investigate if it's possible to check whether saving to local storage is possible, and if not, display a warning message.
5. Add BabelJS and convert app from ES6 to ES5.

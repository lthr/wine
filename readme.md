# Wine

This is a web app where you can keep track of the wines in your wine cellar, based on data from the [Wine.com Public API](https://api.wine.com/).

## Features
1. Search for wines available on Wine.com.
2. Add selected wines to your list.
3. View details of wines in your list (label, name, vinyard, year).
4. Add personal comment to each of your wine.
5. Remove wines from your list.
6. Sort by wine name, vinyard or year.


## Technologies used
The application have been made using AngularJS with a beta release of UI-Router ([which supports AngularJS 1.5+ components](https://ui-router.github.io/blog/route-to-component/)). 
To be able to store wines on your unit, [ngStorage](https://github.com/gsklee/ngStorage) have been implemented.

As grid system, I've chosen the [Alpha 6 version of Bootstrap](https://blog.getbootstrap.com/2017/01/06/bootstrap-4-alpha-6/), to try out their rewrite of all components into flexbox.

As JavaScript styleguide I've chosen to rely loosely on Tood Motto's guide for AngularJS.

JavaScript ES5 have been chosen due to time constraints. Optimally the app should be rewritten in ES6, using a build runner such as Gulp or Webpack to convert ES6 to ES5 (e.g. [Babel](https://babeljs.io/)). This would also allow for concatenation and minification of the code, as well as an easy way to move the HTML templates into JavaScript on build. It would then also be possible to adopt a better CSS strategy, with nesting and constants).

It could be considered if the wine card should be a component of its own.


## Things to notice (disclaimer)
1. By using the latest Bootstrap, there can be layout issues on IE9.
2. The layout optimized for mobile only, and tested with Safari on an iPhone 6.
3. To be able to save wines for later, be sure your phone does not have Private Browsing enabled.

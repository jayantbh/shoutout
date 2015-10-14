# Shoutout

An app to connect with people based on sharing posts that are viewed on the basis of geolocation and interests.

## About ShoutOut

##### Current project status: pre-alpha

This app started as a project to help me learn Ember.js 2, as of now, it has very basic functionality, while implementing nearly all core ember.js concepts into application.

## How it's made

A tutorial for this app can be found on this site.

## How it works

The app uses ember-cli to generate a default ember app, along with emberfire as an ember-data data-store adapter and materialize css framework for some basic styling.  
There are two major routes:  

1. index route - path: '/'
2. profile route - path: '/profile'  

It uses a modest number of ember components for future expansibility and no subroutes as of now. Sub-routes will be introduced when we bring the geolocation tagging feature in the app.  
Any and all UI features are made possible with materialize css features, less and jQuery.

### Todo:

These are the things I've got planned for the project, might take a while to implement.
* Add geolocation to posts.
* Show posts closest to the user. This will need some server-side logic, which I think it not really possible in a free way with emberfire, so would be writing my own API for that.
* Switch to MongoDB or RethinkDB.
* Add interests to user profile.
* And yes, enable profile editing. Such a tiny thing anyway.
* Enable viewing posts by matching interests.
* Enable contacting interesting people, right in the app.
* Build requisite notification systems.
* Dump material design in favor of a truly customized design, I'm not a that bad designer you know? :P


#### The following part outlines the details of collaborating on this Ember application.

##### Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

##### Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

##### Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


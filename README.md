# ember-frost-fields

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-fields.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-fields
[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-fields.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-fields
[npm-img]: https://img.shields.io/npm/v/ember-frost-fields.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-fields

## Overview
+ Based on the [frost-text](http://ciena-frost.github.io/ember-frost-core/#/field) component
+ from [ember-frost-core](https://github.com/ciena-frost/ember-frost-core), the URL input
+ field consists of an input field and a button.

Based on the textarea field, the URL input field consists of an input field and a button.

+ Based on the [frost-text](http://ciena-frost.github.io/ember-frost-core/#/field) component
+ from [ember-frost-core](https://github.com/ciena-frost/ember-frost-core), the URL input
+ field consists of an input field and a button.


+ The component is used to verify that the provided URL is both valid and accessible.

+ After clicking the 'Test' button, the entered URL is loosely verified to be correctly formatted.
+ An AJAX GET request is then sent (with JSONP to overcome cross-domain problems) to the destination URL.
+ The response is checked with any status code between 100 and 500, except 404, deemed a success.

+ Should MIME Checking be enabled and the Type set to 'Text', 
+ an error will be thrown when using the Chrome browser

## Examples

### Default
```handlebars
{{frost-url-input}}
```

/*
 Based on the textarea field, the URL input field consists of an input field and a button.
 The component is used to verify that the provided URL is both valid and accessible.

 After clicking the 'Test' button, the entered URL is loosely verified to be correctly formatted.
 An AJAX GET request is then sent (with JSONP to overcome cross-domain problems) to the destination URL.
 The response is checked with any status code between 100 and 500, except 404, deemed a success.

 Should MIME Checking be enabled and the Type set to 'Text',
 an error will be thrown when using the Chrome browser
 */

import _ from 'lodash'
import Ember from 'ember'
const {Component} = Ember
import layout from '../templates/components/frost-url-input'
import {PropTypes} from 'ember-prop-types'

// Override Lint checking problem for undefined $
/* global $ */

export default Component.extend({
  // ==========================================================================
  // Dependencies
  // ==========================================================================

  // ==========================================================================
  // Properties
  // ==========================================================================

  classNames: ['frost-url-input'],

  propTypes: {
    error: PropTypes.bool,
    isLoading: PropTypes.bool,
    success: PropTypes.bool,
    undetermined: PropTypes.bool,
    placeholder: PropTypes.string,
    urlFormatError: PropTypes.bool
  },

  getDefaultProps () {
    return {
      error: false,
      isLoading: false,
      success: false,
      undetermined: false,
      urlFormatError: false,
      placeholder: 'Enter URL'
    }
  },

  layout,

  // ==========================================================================
  // Computed Properties
  // ==========================================================================

  // ==========================================================================
  // Functions
  // ==========================================================================

  // ==========================================================================
  // Events
  // ==========================================================================

  oninput: Ember.on('input', function (e) {
    const onInput = this.attrs['onInput']

    if (_.isFunction(onInput)) {
      onInput({
        id: this.get('id'),
        value: e.target.value
      })
    }
  }),

  _onFocus: Ember.on('focusIn', function () {
    // If an onFocus handler is defined, call it
    if (this.attrs.onFocus) {
      this.attrs.onFocus()
    }
  }),

  _onBlur: Ember.on('focusOut', function () {
    // If an onBlur handler is defined, call it
    if (this.attrs.onBlur) {
      this.attrs.onBlur()
    }
  }),

  // ==========================================================================
  // Actions
  // ==========================================================================

  _testError (e) {
    const props = {
      isLoading: false
    }

    let httpStatusCode = e.status
    // JSONP not supported by server

    if (httpStatusCode === 404) {
      props.error = true
    } else if ((httpStatusCode >= 100) && (httpStatusCode < 500)) {
      props.success = true
    } else {
      props.undetermined = true
    }

    Ember.run(() => {
      this.setProperties(props)
    })
  },

  _testStatus () {
    Ember.run(() => {
      this.setProperties({
        isLoading: false,
        success: true
      })
    })
  },

  actions: {

    test: function (host) {
      // Verify URL - potentially change to a solid regex in the future
      if ((!host) || (!host.toLowerCase().startsWith('http://')) && (!host.toLowerCase().startsWith('https://'))) {
        this.set('urlFormatError', true)
        return
      }

      // this.send('clear')
      this.set('isLoading', true)

      // Not using Ember AJAX as it throws unrecoverable error when JSONP is not supported by the server
      $.ajax({
        url: host,
        crossDomain: true,
        dataType: 'jsonp text',
        jsonp: false,
        timeout: 10000,
        status: this._testStatus.bind(this),
        error: this._testError.bind(this)
      })
    },

    clear: function () {
      this.setProperties({
        error: false,
        isLoading: false,
        success: false,
        undetermined: false,
        urlFormatError: false,
        value: ''
      })
    }
  }
})

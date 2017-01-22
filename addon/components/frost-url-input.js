/*
 Based on the textarea field, the URL input field consists of an input field and a button.
 The component is used to verify that the provided URL is both valid and accessible.

 After clicking the 'Test' button, the entered URL is loosely verified to be correctly formatted.
 An AJAX GET request is then sent (with JSONP to overcome cross-domain problems) to the destination URL.
 The response is checked with any status code between 100 and 500, except 404, deemed a success.

 Should MIME Checking be enabled and the Type set to 'Text',
 an error will be thrown when using the Chrome browser
 */

import Ember from 'ember'
const {computed, run} = Ember
import {Component} from 'ember-frost-core'
import {PropTypes} from 'ember-prop-types'
import _ from 'lodash'

import layout from '../templates/components/frost-url-input'

// Override Lint checking problem for undefined $
/* global $ */

export default Component.extend({
  // == Properties ======================================================

  classNames: ['frost-url-input'],
  layout,

  // == State Properties ======================================================

  propTypes: {
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    isLoading: PropTypes.bool,
    success: PropTypes.bool,
    undetermined: PropTypes.bool,
    placeholder: PropTypes.string,
    urlFormatError: PropTypes.bool
  },

  getDefaultProps () {
    return {
      error: false,
      hook: 'url-field',
      isLoading: false,
      success: false,
      undetermined: false,
      urlFormatError: false,
      placeholder: 'Enter URL'
    }
  },

  errorMessage: computed('urlFormatError', 'error', 'undetermined', 'success'
    , function () {
      if (this.get('urlFormatError')) {
        return 'URL Format Error'
      }

      if (this.get('error') || this.get('undetermined')) {
        return 'error'
      }

      if (this.get('success')) {
        return 'Success'
      }
    }).readOnly(),

  // == Functions =============================================================

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

    run(() => {
      this.setProperties(props)
    })
  },

  _testStatus () {
    run(() => {
      this.setProperties({
        isLoading: false,
        success: true
      })
    })
  },

  // == Actions ===============================================================

  actions: {
    input (e) {
      const onInput = this.attrs['onInput']

      this.actions.clear.call(this, false)

      if (_.isFunction(onInput)) {
        onInput({
          id: this.get('id'),
          value: e.target.value
        })
      }
    },

    test (host) {
      this.send('clear', false)

      // Verify URL - potentially change to a solid regex in the future
      if ((!host) || (!host.toLowerCase().startsWith('http://')) && (!host.toLowerCase().startsWith('https://'))) {
        this.set('urlFormatError', true)
        return
      }

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

    clear (clearField) {
      if (clearField) {
        this.set('value', '')
      }

      this.setProperties({
        error: false,
        isLoading: false,
        success: false,
        undetermined: false,
        urlFormatError: false
      })
    }
  }
})

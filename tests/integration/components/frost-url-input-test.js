/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {
  beforeEach,
  describe
} from 'mocha'
import {
  $hook,
  initialize as initializeHook
} from 'ember-hook'
import wait from 'ember-test-helpers/wait'

describeComponent(
  'frost-url-input',
  'Integration: FrostUrlInputComponent',
  {
    integration: true
  },

  function () {
    beforeEach(function () {
      initializeHook()

      this.render(hbs`{{
        frost-url-input
      }}`)
    })

    it('renders', function () {
      expect($hook('url-field')).to.have.length(1)
    })

    describe('user inputs value', function () {
      it('does not render error by default', function () {
        expect($hook('url-field-icon').length).to.equal(0)
      })

      it('shows format error message for bad url-field-error-text', function (done) {
        this.$('input')
          .val('/test')
          .trigger('input')
        $hook('url-field-button').click()
        return wait().then(() => {
          expect($hook('url-field-error-text').text(), 'URL format error').to.be.equal('URL Format Error')
          done()
        }, 250)
      })

      // FIXME: $.ajax() is throwing an error we can't seem to catch and that is crashing test server (AK - 2016-07-21)
      // it('shows success message on clicking the Test button', function (done) {
      //   this.$('input')
      //     .val('http://www.google.ca')
      //     .trigger('input')
      //   $hook('url-field-button').click()
      //   return wait().then(() => {
      //     console.log('#######', $hook('url-field-error-text').text())
      //     done()
      //   }, 250)
      // })
    })
  }
)

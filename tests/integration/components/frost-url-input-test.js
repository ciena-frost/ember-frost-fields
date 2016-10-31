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
      beforeEach(function () {
        this.$('input')
          .val('http://www.google.ca')
          .trigger('input')
      })

      it('does not render error', function () {
        expect($hook('url-field-icon').length).to.equal(0)
      })

      /* FIXME: $.ajax() is throwing an error we can't seem to catch and that is crashing test server (AK - 2016-07-21)
      describe('user presses test button', function () {
        beforeEach(function () {
          this.$('#test').click()
        })

        it('url is valid', function (done) {
          Ember.run.later(() => {
            console.log('#######', $('.frost-url-input div.url-icon div.urlText'))
            done()
          }, 250)
        })
      })
      */
    })
  }
)

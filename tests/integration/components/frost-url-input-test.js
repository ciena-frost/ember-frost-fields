/* jshint expr:true */
import { expect } from 'chai'
import {
  describeComponent,
  it
} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach, describe} from 'mocha'

describeComponent(
  'frost-url-input',
  'Integration: FrostUrlInputComponent',
  {
    integration: true
  },

  function () {
    beforeEach(function () {
      this.render(hbs`{{frost-url-input}}`)
    })

    it('renders', function () {
      expect(this.$()).to.have.length(1)
    })

    describe('user inputs value', function () {
      beforeEach(function () {
        this.$('input')
          .val('http://www.google.ca')
          .trigger('input')
      })

      it('does not render message', function () {
        expect(this.$('.urlText').length).to.equal(0)
      })

      /* FIXME: $.ajax() is throwing an error we can't seem to catch and that is crashing test server (AK - 2016-07-21)
      describe('user presses test button', function () {
        beforeEach(function () {
          this.$('#test').click()
        })

        it('url is valid', function (done) {
          Ember.run.later(() => {
            console.log('#######', $('.frost-url-input div.urlIcon div.urlText'))
            done()
          }, 250)
        })
      })
      */
    })
  }
)

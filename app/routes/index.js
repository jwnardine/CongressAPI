import Ember from 'ember';


export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    billLookup() {
      this.transitionTo('results-bill');
    },
    hearingsLookup() {
      this.transitionTo('results-hearings');
    }
  }
});

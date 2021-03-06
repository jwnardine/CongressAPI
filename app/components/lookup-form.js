import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('zipLookup', params);
    },
    billLookup() {
      this.sendAction('billLookup');
    },
    hearingsLookup() {
      this.sendAction('hearingsLookup');
    }
  }
});

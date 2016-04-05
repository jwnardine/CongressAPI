import Ember from 'ember';


export default Ember.Route.extend({
 model: function() {
   var url = 'http://congress.api.sunlightfoundation.com/hearings?dc=false&apikey=11ef182e8a1d462cb3b9431dea10293e';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});

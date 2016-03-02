import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('product');
  },

  actions: {
    goToCart() {
      this.transitionTo('cart');
    }
  }
});

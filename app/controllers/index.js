import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    onSearch(q) {
      this.transitionToRoute('initiatives', {
        // for a new query string, sart on first page
        queryParams: { q , start: 1 }
      });
    }
  }

});

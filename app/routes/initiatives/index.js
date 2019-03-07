import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({

  hubInitiatives: service(),

  queryParams: {
    // paging query params
    start: { refreshModel: true },
    num: { refreshModel: true },
    q: { refreshModel: true }
  },

  // the model hook is used to fetch any data based on route parameters
  model (params) {
    const q = params.q || '*';
    return this.hubInitiatives.searchInitiatives({ searchForm: { q, num: params.num, start: params.start } });
  }

});

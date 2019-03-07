import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({

  hubInitiatives: service(),

  model(params) {
    return this.hubInitiatives.getInitiative(params.initiative_id);
  }

});

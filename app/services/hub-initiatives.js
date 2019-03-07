import { searchInitiatives, fetchInitiative } from "@esri/hub-initiatives";
import Service from '@ember/service';

export default Service.extend({

  searchInitiatives (searchForm) {
    return searchInitiatives(searchForm);
  },

  fetchInitiative(id) {
    return fetchInitiative(id);
  }

});

import { searchInitiatives, getInitiative } from "@esri/hub-initiatives";
import Service from '@ember/service';

export default Service.extend({

  searchInitiatives (searchForm) {
    return searchInitiatives(searchForm);
  },

  getInitiative(id) {
    return getInitiative(id);
  }

});

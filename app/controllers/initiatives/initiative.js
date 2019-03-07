import { computed } from '@ember/object';
import { bool } from '@ember/object/computed';
import { getWithDefault } from '@ember/object';
import { getBannerImageUrl } from 'hub-for-devs/utils/initiatives';
import Controller from '@ember/controller';

export default Controller.extend({

  bannerImageUrl: computed('model.data.assets.@each.id', function () {
    const assetsAry = getWithDefault(this, 'model.data.assets', []);
    return getBannerImageUrl(assetsAry);
  }),

  hasBannerImage: bool('bannerImageUrl')

});

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('initiatives', function() {
    this.route('initiative', { path: '/:initiative_id' });
  });
});

export default Router;

import { moduleFactory } from './module';
import UnleashFeature from './UnleashFeature.vue';

const install = (Vue, { store }) => {
  if (!store) {
    throw new Error('Please initialize plugin with a Vuex store.');
  }

  Vue.config.applicationHostname = 'localhost';
  store.registerModule('unleash', moduleFactory());
  Vue.component('unleash-feature', UnleashFeature);
};

const plugin = {
  UnleashFeature,
  install
};

export default plugin;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

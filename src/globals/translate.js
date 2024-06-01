import { translate } from '@/plugins/translate';

export default {
  install: function (app) {
    app.config.globalProperties.$translate = translate;
  }
};
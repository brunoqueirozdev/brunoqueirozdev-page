import { aboutme } from '@/plugins/aboutme';

export default {
  install: function (app) {
    app.config.globalProperties.$aboutme = aboutme;
  }
};
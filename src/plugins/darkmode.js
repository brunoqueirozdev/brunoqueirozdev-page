import { useDarkmodeStore } from '@/stores/darkmode';

export default {
    install(app) {
        const darkModeStore = useDarkmodeStore();
        app.config.globalProperties.$darkmode = darkModeStore;
    }
};

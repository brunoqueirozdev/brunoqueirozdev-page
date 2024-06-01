import { useAboutMeStore } from '@/stores/aboutme';

export function aboutme(key) {
    let aboutmeStore = useAboutMeStore();
    let aboutmeData = aboutmeStore.getCurrentData();

    if (aboutmeData[key]) {
        return aboutmeData[key];
    }else{
        return key
    }
}
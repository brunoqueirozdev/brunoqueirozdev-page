import { computed } from 'vue';
import { useLanguageStore } from '@/stores/language';
import { translate } from '@/plugins/translate';

export const translationMixin = {
    computed: {
        translateText() {
            const languageStore = useLanguageStore();
            const currentLanguage = computed(() => languageStore.getCurrentLanguage());
            return (key, dynamicData = {}) => {
                if (this.translationKeys) {
                    if(this.translationKeys[key]){
                        return translate(this.translationKeys[key], currentLanguage.value, dynamicData);
                    }else{
                        return translate(key, currentLanguage.value, dynamicData);
                    }
                } else {
                    return translate(key, currentLanguage.value, dynamicData);
                }
            }
        },
    }
};

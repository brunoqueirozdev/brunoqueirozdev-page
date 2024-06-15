<template>
    <div>
      <img class="h-full" :src="currentLanguage.flag" @click="switchLanguage" alt="">
    </div>
  </template>
  
  <script>
  import { useLanguageStore } from '@/stores/language';
  
  export default {
    computed: {
      currentLanguage() {
        const lang = useLanguageStore().getCurrentLanguage();
        this.$gtag.event('switch_language', {
                'event_label': 'Switch language click',
                'value': lang.value
            })
        return lang;
      }
    },
    methods: {
      switchLanguage() {
        useLanguageStore().changeToNextLanguage();
      }
    }
  }
  </script>
  
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
  
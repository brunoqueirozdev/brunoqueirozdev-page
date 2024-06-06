<template>
    <div>
      <div v-if="is_open" class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur" @click="closeMenu"></div>
      
      <div class="fixed top-4 left-4 z-60">
        <i v-if="!is_open" class="fa-solid fa-bars text-[1.5rem]" @click="this.is_open = true"></i>
        <i v-else class="fa-solid fa-x text-[1.5rem]" @click="this.is_open = false"></i>
      </div>
  
      <transition name="menu-transition">
        <div
          v-if="is_open"
          id="menu"
          class="absolute top-14 left-0 xl:w-[10%] h-[92%] z-50 bg-gray-100 dark:bg-dark-bg p-4 flex flex-col justify-between"
        >
          <div class="flex">
            <ul class="flex flex-col gap-4">
              <li>
                <span>About</span>
              </li>
              <li>
                <span>Experience</span>
              </li>
              <li>
                <span>Projects</span>
              </li>
            </ul>
          </div>
          <div class="flex justify-between h-8">
            <Language />
            <Darkmode />
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  import Darkmode from "../Systems/DarkMode.vue";
  import Language from "../Systems/Language.vue";
  export default {
    components: {
      Darkmode,
      Language,
    },
    data() {
      return {
        is_open: false,
      };
    },
    methods: {
      handleClickOutside(event) {
        if (!this.$el.contains(event.target)) {
          this.closeMenu();
        }
      },
      handleEscapeKey(event) {
        if (event.key === "Escape" || event.key === "Esc") {
          this.closeMenu();
        }
      },
      closeMenu() {
        this.is_open = false;
        document.removeEventListener("click", this.handleClickOutside);
        document.removeEventListener("keydown", this.handleEscapeKey);
      },
    },
  };
  </script>
  
  <style>
  .menu-transition-enter-active,
  .menu-transition-leave-active {
    transition: all 0.2s ease-in-out;
  }
  
  .menu-transition-enter-from,
  .menu-transition-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
  
  .menu-transition-enter-to,
  .menu-transition-leave-from {
    transform: translateX(0);
    opacity: 1;
  }
  
  .backdrop-blur {
    backdrop-filter: blur(2px);
    z-index: 40;
  }
  
  .z-50 {
    z-index: 50;
  }
  
  .z-60 {
    z-index: 60;
  }
  
  .fixed.top-4.left-4 {
    position: fixed;
    top: 1rem;
    left: 1rem;
  }
  </style>
  
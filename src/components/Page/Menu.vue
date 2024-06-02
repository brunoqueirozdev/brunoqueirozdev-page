<template>
    <div>
      <i class="fa-solid fa-bars text-[1.5rem]" @click="toggleMenu"></i>
  
      <transition name="menu-transition">
        <div
          v-if="is_open"
          id="menu"
          class="absolute top-14 left-0 w-[60%] h-[92%] z-50 bg-gray-100 dark:bg-dark-bg p-4 flex flex-col justify-between"
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
  
      <!-- Adiciona um div para o efeito de blur -->
      <div v-if="is_open" class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur" @click="closeMenu"></div>
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
      toggleMenu() {
        this.is_open = !this.is_open;
        if (this.is_open) {
          document.addEventListener("click", this.handleClickOutside);
          document.addEventListener("keydown", this.handleEscapeKey);
        } else {
          document.removeEventListener("click", this.handleClickOutside);
          document.removeEventListener("keydown", this.handleEscapeKey);
        }
      },
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
  }
  </style>
  
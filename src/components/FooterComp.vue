<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store';

export default defineComponent ({
  props: {
    mode: Number,
    textSize: String,
  },
  data(){
    return {
      store,
    }
  },
  methods: {
    toggleMode(){
      if(this.store.mode === 0){
        this.store.mode = 1;
      } else if (this.store.mode === 1){
        this.store.mode = 0;
      }
    },
    toggleText(){
      if(this.store.textSize === 'lg'){
        this.store.textSize = 'sm';
      } else if (this.store.textSize === 'sm'){
        this.store.textSize = 'md';
      } else if (this.store.textSize === 'md'){
        this.store.textSize = 'lg';
      }
    }
  }
})




</script>

<template>


    <footer class="footer container p-1">
        <div class="footer-wrapper flex justify-between items-center gap-3">
          <div class="btn-wrapper flex flex-wrap gap-1">
            <div 
            @click="toggleText()"
            :class="['btn',
            'hover:text-main-hv', 'hover:cursor-pointer', 
            store.mode===0?'border-main-tx-light':'border-main-tx-dark'
            ]">
              <span v-if="store.textSize === 'lg'">text-lg</span>
              <span v-else-if="store.textSize === 'md'">text-md</span>
              <span v-else-if="store.textSize === 'sm'">text-sm</span>
            </div>
            <div 
            @click="toggleMode()"
            :class="['btn', 
            'hover:text-main-hv', 'hover:cursor-pointer', 
            store.mode===0?'border-main-tx-light':'border-main-tx-dark']">
              <span v-if="store.mode === 0">bg-light</span>
              <span v-else-if="store.mode === 1">bg-dark</span>
            </div>
          </div>
          <div class="links-wrapper flex flex-wrap gap-2">
            <a href="https://github.com/rennavittorio" target="_blank"
            class="hover:cursor-pointer hover:text-main-hv"
            >
              //github
            </a>
            <a href="https://www.linkedin.com/in/rennavittorio/" target="_blank"
            class="hover:cursor-pointer hover:text-main-hv"
            >
              //linkedin
            </a>
          </div>
        </div>
    </footer>


</template>



<style scoped>
.btn {
  border: 1px solid currentColor;
  width: 120px;
  height: 32px;
  padding: 2px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>

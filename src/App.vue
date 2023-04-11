<script lang="ts">

import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';
import store from './store.js';

export default {
  components: {
    HeaderComp,
    MainComp,
    FooterComp
  },
  data(){
    return {
      store,
    }
  }
}

</script>

<template>

  <div :class="['page-site', 'font-cascadia', 
  store.mode===0?['bg-main-bg-light', 'text-main-tx-light']:['bg-main-bg-dark', 'text-main-tx-dark'], 'tracking-tigher',
  'flex', 'flex-col']">



    <HeaderComp 
    :class="[store.textSize === 'lg'?'text-[24px]':'',
    store.textSize === 'md'?'text-[20px]':'',
    store.textSize === 'sm'?'text-[16px]':'',
    ]"
    />

    <MainComp 
    :class="[store.textSize === 'lg'?'text-[16px]':'',
    store.textSize === 'md'?'text-[12px]':'',
    store.textSize === 'sm'?'text-[8px]':'',
    ]"
    />

    <FooterComp 
    :class="[store.textSize === 'lg'?'text-[16px]':'',
    store.textSize === 'md'?'text-[12px]':'',
    store.textSize === 'sm'?'text-[8px]':'',
    ]"
    />


      

  </div>

  
</template>

<style scoped>
.page-site {
  width: 100vw;
  height: 100vh;
  padding: 10px;
  border: 1px solid #2f2f2f;
}

.page-site * {
  /* border: 2px dashed darksalmon; */
}


</style>

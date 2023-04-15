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


  <div :class="['page-site', 'font-anonymous', 'tracking-tighter', 
  store.mode===0?'light-v':'dark-v', 
  'flex', 'flex-col']">



    <HeaderComp 
    :class="[store.textSize === 'lg'?'text-[30px]':'',
    store.textSize === 'md'?'text-[26px]':'',
    store.textSize === 'sm'?'text-[22px]':'',
    ]"
    />

    <MainComp 
    :class="[store.textSize === 'lg'?'text-[20px]':'',
    store.textSize === 'md'?'text-[16px]':'',
    store.textSize === 'sm'?'text-[12px]':'',
    ]"
    />

    <FooterComp 
    :class="[store.textSize === 'lg'?'text-[20px]':'',
    store.textSize === 'md'?'text-[16px]':'',
    store.textSize === 'sm'?'text-[12px]':'',
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


.page-site.light-v {
  background-color: #f2f2f2;
  color: #2f2f2f;
  position: relative;
}

.page-site.dark-v {
  background-color: #262626;
  color: #f2f2f2;
  position: relative;
}



</style>

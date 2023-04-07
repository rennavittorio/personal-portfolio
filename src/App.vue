<script lang="ts">

import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components: {
    HeaderComp,
    MainComp,
    FooterComp,
  }
}

</script>

<template>

  <div class="page-site font-cascadia bg-main-bg-light text-main-tx-light text-[0.75rem] tracking-tigher
  flex flex-col">
      
    <HeaderComp 
    class=""
    />

    <MainComp 
    class=""
    />

    <FooterComp 
    class="mt-auto"
    />

  </div>

  
</template>

<style scoped>
.page-site {
  width: 100vw;
  height: 100vh;
  padding: 10px;
}


</style>

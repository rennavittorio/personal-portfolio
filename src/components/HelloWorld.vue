<script lang="ts">

export default {
  props: {
    msg: {
      type: String,
      required: true
    },
    imgCover: {
      type: String,
      required: false
    }
  },
  data(){
    return {
      people: [
        {
          firstName: 'pippo',
          lastName: 'damasio'
        },
        {
          firstName: 'ciccio',
          lastName: 'pastore'
        },
      ]
    }
  }
}




</script>

<template>

  <h1 class="text-3xl font-bold underline">{{ msg }}</h1>
  <img :src="imgCover" alt="">

  <ul>
    <li v-for="person in people">
      <strong>{{ person.firstName }}</strong> {{ person.lastName }}
    </li>
  </ul>

</template>

<style scoped>



</style>

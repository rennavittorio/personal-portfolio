<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    functionMenu: Array,
  },
  data(){
    return {
        functionMenu: ['knowMyStack()', 'seeMyProjects()', 'getInTouch()']
    }
  }
})




</script>

<template>

    <div class="container flex-grow-1 flex flex-col">
        <div class="folders">
            <ul class="list__functions grid grid-cols-3">
                <li
                v-for="(item, i) in functionMenu"
                :class="['item__function', 'text-center', 'p-1',
                i === 0 ? 'active' : 'inactive']">
                    {{ item }}
                </li>
            </ul>
        </div>
        <div class="content p-3 flex-grow-1">
            content here...
        </div>
    </div>


</template>



<style scoped>

.item__function.active {
    border: 1px solid #2f2f2f;
    border-radius: 5px 5px 0 0;
    border-color: #2f2f2f #2f2f2f transparent #2f2f2f;
    text-decoration: underline;
}

.content {
    border: 1px solid #2f2f2f;
}

</style>

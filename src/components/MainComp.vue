<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        functionMenu: Array,
        activeIndex: Number,
        isActive: Boolean,
    },
    data(){
        return {
            functionMenu: [
                'knowMyStack()', 
                'seeMyProjects()', 
                'getInTouch()'
            ],
            activeIndex: 0,
            isActive: false,
        }
    },
    methods: {
        toggleActive(index: number){
            if(this.activeIndex === index){
                if(this.isActive === false){
                    this.isActive = true;
                } else {
                    this.isActive = false;
                }
            } else if(this.activeIndex !== index){
                this.activeIndex = index;
                this.isActive = true;
            }
        }
    }
})




</script>

<template>

    <main class="container h-[100%] mb-3">

        <ul class="list__functions h-[100%] flex flex-col">
            <li
            v-for="(item, i) in functionMenu"
            @click="toggleActive(i)"
            :class="['item__function', 'p-1',
            (activeIndex === i) && (isActive) ? 'active' : '',
            (activeIndex === i) && (isActive) ? 'mb-auto' : '',]">
                <div class="item__title hover:underline hover:cursor-pointer">
                    {{ item }}
                </div>
                <div 
                :class="['content', 'p-2', (activeIndex === i) && (isActive) ? 'block' : 'hidden']">
                    content here...
                </div>
            </li>
        </ul>

    </main>


</template>



<style scoped>

/* .item__function.active {
    border: 1px solid #2f2f2f;
    border-radius: 5px 5px 0 0;
    border-color: #2f2f2f #2f2f2f transparent #2f2f2f;
    text-decoration: underline;
}

.content {
    border: 1px solid #2f2f2f;
}  */

.item__function.active .item__title {
    text-decoration: underline;
}


</style>

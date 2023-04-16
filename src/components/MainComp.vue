<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store.js';

export default defineComponent({
    props: {
        functionMenu: Array,
        activeIndex: Number,
        isActive: Boolean,
        rndFact: String,
    },
    data(){
        return {
            store,
            activeIndex: 0,
            isActive: false,
            rndFact: '',
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
        },

        getRndFact(){
            let rndNum = Math.floor(Math.random() * this.store.functionMenu[3].content.length);
            this.rndFact = this.store.functionMenu[3].content[rndNum].fact;
        },

    }
})




</script>

<template>

    <main class="main container h-[100%] mb-3 overflow-hidden">

        <div 
        :class="['cube', store.mode===0?'light-v':'dark-v',]"
        
        >
        </div>

        <ul class="list__functions h-[100%] flex flex-col overflow-y-auto">
            <li
            v-for="(item, i) in store.functionMenu"
            :class="['item__function', 'p-1',
            (activeIndex === i) && (isActive) ? 'active' : '',
            (activeIndex === i) && (isActive) ? 'mb-auto' : '',]">
                <div 
                @click="toggleActive(i)"
                class="item__title hover:cursor-pointer hover:underline hover:text-main-hv">
                    {{ item.title }}
                </div>
                <div 
                :class="['content-wrapper', 'p-2', (activeIndex === i) && (isActive) ? 'block' : 'hidden']">
                    <div 
                    class="content-show"
                    v-if="activeIndex === 0"
                    >
                        <ul class="content__list">
                            <li
                            v-for="option in store.functionMenu[activeIndex].content"
                            class="content__item p-3"
                            >
                                let <strong class="title__item">
                                    {{ option.category }}
                                </strong> = {{ option.languages }}
                            </li>
                        </ul>
                    </div>
                    <div 
                    class="content-show"
                    v-else-if="activeIndex === 1"
                    >
                        <ul class="content__list">
                            <li
                            v-for="option in store.functionMenu[activeIndex].content"
                            class="content__item p-3"
                            >
                                const { 
                                {{ option.category }}, 
                                <a class="underline hover:text-main-hv hover:cursor-pointer" :href="option.websiteLink">website</a>, 
                                <a class="underline hover:text-main-hv hover:cursor-pointer" :href="option.githubLink">github</a>  
                                } = <strong>{{ option.projName }}</strong>
                            </li>
                        </ul>
                    </div>
    
                    <div 
                    class="content-show"
                    v-else-if="activeIndex === 2"
                    >
                        <ul class="content__list">
                            <li
                            v-for="option in store.functionMenu[activeIndex].content"
                            class="content__item p-3"
                            >
                                <a 
                                v-if="option.funcName == 'downloadMyCurriculum'" 
                                class="hover:underline hover:text-main-hv hover:cursor-pointer"
                                :href="option.link" target="_blank" download>{{ option.funcName }}</a>

                                <a 
                                v-else
                                class="hover:underline hover:text-main-hv hover:cursor-pointer"
                                :href="option.link" target="_blank">{{ option.funcName }}</a>
                            </li>
                        </ul>
                    </div>


                    <div 
                    class="content-show"
                    v-else-if="activeIndex === 3"
                    >
                        
                        <h1 
                        class="rnd-fact text-center p-10"
                        >
                            
                           check 

                        </h1>

                    </div>
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

.item__title {
    position: relative;
    width: fit-content;
    font-style: italic;
    /* animation: tilt 2s ease-in-out infinite; */

}

@keyframes tilt {
    0% {
        font-style: normal;
    }
    90% {
        font-style: italic;
    }
}

.main {
    position: relative;
}

.cube.light-v {
    /* content: ''; */
    /* display: block; */

    width: 25px;
    height: 25px;
    border-radius: 0;
    background-color: #262626;

    position: absolute;
    right: 10px;
    bottom: 10px;
    transform: rotate(0deg);

    animation: rotating 4s linear infinite,
    tilting 1s ease-in-out infinite;
}

.cube.dark-v {
    /* content: ''; */
    /* display: block; */

    width: 25px;
    height: 25px;
    border-radius: 0;
    background-color: #f2f2f2;

    position: absolute;
    right: 10px;
    bottom: 10px;
    transform: rotate(0deg);

    animation: rotating 4s linear infinite,
    tilting 1s ease-in-out infinite;
}

.cube:hover {
    cursor: pointer;
    animation: rotating 0.5s linear infinite;
    /* tilting 0.25s ease-in-out infinite, */
    /* bigger 2s ease-in-out; */
}

@keyframes bigger {
    0%{
        width: 25px;
        height: 25px;
        border-radius: 0;
    }
    100%{
        width: 75px;
        height: 75px; 
        border-radius: 999px;      
    }
}


@keyframes rotating {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}

@keyframes tilting {
    0%{
        bottom: 10px;
    }
    50%{
        bottom: 20px;
    }
    100%{
        bottom: 10px;
    }
}

/* @keyframes falling {
    0%{
        width: 50px;
        height: 50px;   
        right: 0;
        top: 10px;
        transform: rotate(0deg);
    }
    20%{
        width: 0;
        height: 0;
        right: 0;
        top: 90%;
        transform: rotate(360deg);
    }
    40%{
        width: 35px;
        height: 35px;
        right: 0;
        top: 50%;
        transform: rotate(0deg);
    }
    60%{
        width: 0;
        height: 0;
        right: 0;
        top: 90%;
        transform: rotate(360deg);
    }
    80%{
        width: 25px;
        height: 25px;
        right: 0;
        top: 75%;
        transform: rotate(0deg);
    }
    100%{
        width: 0px;
        height: 0px;
        right: 0;
        top: 90%;
        transform: rotate(360deg);
    }
    
} */



</style>

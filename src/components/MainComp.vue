<script lang="ts">
import { defineComponent } from 'vue';
import store from '../store';

interface Option { //tb studied deeper
    category: string,
    languages: string,
    websiteLink: string,
    githubLink: string,
    projName: string,
    funcName: string,
    link: string,
    fact: string,
}

export default defineComponent({
    props: {
        option: Array<Object>, //maybe useless
        activeIndex: Number,
        isActive: Boolean,
        showedFact: String,
        rndNUm: Number,
        previousNum: Number,

    },
    data() {
        return {
            store,
            activeIndex: 0,
            isActive: false,

            showedFact: 'I\'ve studied Neuroscience and discovered that videogames make children study better',
            indexFact: 1,
        }
    },
    methods: {
        toggleActive(index: number) {
            if (this.activeIndex === index) {
                this.isActive === false ? this.isActive = true : this.isActive = false;

            } else if (this.activeIndex !== index) {
                this.activeIndex = index;
                this.isActive = true;
            }
        },

        setIndexFact() {
            this.showedFact = (this.store.functionMenu[3].content[this.indexFact] as Option).fact;
            if (this.indexFact < this.store.functionMenu[3].content.length - 1) {
                this.indexFact++;
            } else {
                this.indexFact = 0;
            }
        },

    }
})




</script>

<template>
    <main class="main container h-[100%] mb-3 overflow-hidden">

        <div :class="['cube', store.mode === 0 ? 'light-v' : 'dark-v',]">
        </div>

        <ul class="list__functions h-[100%] flex flex-col overflow-y-auto">
            <li v-for="(item, i) in store.functionMenu" :class="['item__function', 'p-1',
                    (activeIndex === i) && (isActive) ? 'active' : '',
                    (activeIndex === i) && (isActive) ? 'mb-auto' : '',]">
                <div @click="toggleActive(i)" :class="['item__title', 
                        store.mode === 0 ? 'hover:text-main-hv-light' : 'hover:text-main-hv-dark', 'hover-btn']">
                    {{ item.title }}
                </div>
                <div :class="['content-wrapper', 'p-2', (activeIndex === i) && (isActive) ? 'block' : 'hidden']">
                    <div class="content-show" v-if="activeIndex === 0">
                        <ul class="content__list">
                            <li v-for="option in store.functionMenu[activeIndex].content" class="content__item p-3">
                                let <strong class="title__item">
                                    {{ (option as Option).category }}
                                </strong> = {{ (option as Option).languages }}
                            </li>
                        </ul>
                    </div>
                    <div class="content-show" v-else-if="activeIndex === 1">
                        <ul class="content__list">
                            <li v-for="option in store.functionMenu[activeIndex].content" class="content__item p-3">
                                const { <span>{{ (option as Option).category }}</span>
                                <span
                                    v-if="(option as Option).websiteLink !== '#' || (option as Option).githubLink !== '#'">,
                                </span>
                                <a v-if="(option as Option).websiteLink !== '#'"
                                    :class="[ store.mode === 0 ? 'hover:text-main-hv-light' : 'hover:text-main-hv-dark', 'hover-btn']"
                                    :href="(option as Option).websiteLink" target="_blank">website</a>
                                <span
                                    v-if="(option as Option).websiteLink !== '#' && (option as Option).githubLink !== '#'">,
                                </span>
                                <a v-if="(option as Option).githubLink !== '#'"
                                    :class="[ store.mode === 0 ? 'hover:text-main-hv-light' : 'hover:text-main-hv-dark', 'hover-btn']"
                                    :href="(option as Option).githubLink" target="_blank">github</a>
                                } = <strong>{{ (option as Option).projName }}</strong>
                            </li>
                        </ul>
                    </div>

                    <div class="content-show" v-else-if="activeIndex === 2">
                        <ul class="content__list">
                            <li v-for="option in store.functionMenu[activeIndex].content" class="content__item p-3">
                                <a v-if="(option as Option).funcName == 'downloadMyCurriculum'"
                                    :class="[store.mode === 0 ? 'hover:text-main-hv-light' : 'hover:text-main-hv-dark', 'hover-btn']"
                                    :href="(option as Option).link" target="_blank" download>{{ (option as Option).funcName
                                    }}</a>

                                <a v-else
                                    :class="[store.mode === 0 ? 'hover:text-main-hv-light' : 'hover:text-main-hv-dark', 'hover-btn']"
                                    :href="(option as Option).link" target="_blank">{{ (option as Option).funcName }}</a>
                            </li>
                        </ul>
                    </div>


                    <div class="content-show rnd-fact text-center p-10 flex flex-col justify-center items-center"
                        v-else-if="activeIndex === 3">

                        <button
                            :class="['mb-5', 'italic', store.mode === 0 ? 'hover:text-main-hv-light' : 'hover:text-main-hv-dark', 'hover-btn']"
                            @click="setIndexFact()">
                            getAnotherOne()
                        </button>

                        <q class="">
                            {{ showedFact }}
                        </q>

                    </div>
                </div>

            </li>
        </ul>

    </main>
</template>



<style scoped>

.item__function.active .item__title {
    text-decoration: underline;
}

.item__title {
    position: relative;
    width: fit-content;
    font-style: italic;
}

.main {
    position: relative;
}

.cube.light-v {
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

.dark-v.cube:hover {
    cursor: pointer;
    background-color: #00ff00;
    animation: rotating 0.5s linear infinite;
}

.light-v.cube:hover {
    cursor: pointer;
    background-color: #0000ff;
    animation: rotating 0.5s linear infinite;
}

@keyframes bigger {
    0% {
        width: 25px;
        height: 25px;
        border-radius: 0;
    }

    100% {
        width: 75px;
        height: 75px;
        border-radius: 999px;
    }
}


@keyframes rotating {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes tilting {
    0% {
        bottom: 10px;
    }

    50% {
        bottom: 20px;
    }

    100% {
        bottom: 10px;
    }
}

</style>

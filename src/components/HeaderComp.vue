<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        profileName: String,
        role: Array,
        rolesCounter: Number
    },
    data(){
        return {
            profileName: 'vittorio renna',
            roles: ['{ web }', '{ people }'],
            rolesCounter: 1,
        }
    },
    methods: {
        setRoles(){
            setInterval(()=>{
                if(this.rolesCounter === 1){
                    this.rolesCounter = 0;
                    // console.log(this.roles[this.rolesCounter]);
                } else {
                    this.rolesCounter = 1;
                    // console.log(this.roles[this.rolesCounter]);
                }
            }, 8000)
        }
    },
    mounted(){
        this.setRoles();
    }
})




</script>

<template>

    <header class="header text-xl">
        <h1 class="my-name">
            hi, i'm <strong>{{ profileName }}</strong>
        </h1>
        <h1 class="my-roles flex justify-start items-center">
            <span class="shrink-0"></span>i'm a 
            <span class="dev-animation flicker"><strong>{{ roles[rolesCounter] }}</strong></span> 
            <span class="">developer</span>
        </h1>
    </header>

</template>



<style scoped>
.header {
    border: 1px dashed red;
}

.dev-animation {
    overflow: hidden; 
    white-space: nowrap; 
    margin: 0 5px; 
    letter-spacing: .01em; 
    animation: 
        typing 8s steps(5, end) infinite,
        blink-caret 1s step-end infinite;
}

.flicker {
    border-right: 3px solid #2f2f2f;
    padding-right: 2px;
    margin: 0 5px;
}

/* The typing effect */
@keyframes typing {
    0% { 
        width: 0;
    }
    25% { 
        width: auto; 
    }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
    0% { 
        border-color: transparent 
    }
    50% { 
        border-color: #2f2f2f; 
    }
}


/* .dev-after::after{
    content: '';
    display: block;
    height: 20px;
    padding: 2px;
    background-color: #2f2f2f;
    animation: flink 1.5s linear infinite;
}

.dev-animation{
    white-space: nowrap;
    overflow: hidden;
    width: 4em;
    animation: type 2s steps(5, end) infinite;
}

@keyframes type{ 
    0% {
        width: 0; 
    } 
    50% {
        width: 4em;
    }
    100% {
        width: 0;
    }
} 

@keyframes flink {
    0% {
        background-color: transparent;
    }
    50% {
        background-color: #2f2f2f;
    }
    100% {
        background-color: transparent;
    }
} */

</style>

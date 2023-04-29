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
            roles: ['{frontend}', '{backend}', '{people}'],
            rolesCounter: 1,
        }
    },
    methods: {
        setRoles(){
            setInterval(()=>{
                if(this.rolesCounter === 0){
                    this.rolesCounter = 1;
                    // console.log(this.roles[this.rolesCounter]);
                } else if(this.rolesCounter === 1) {
                    this.rolesCounter = 2;
                    // console.log(this.roles[this.rolesCounter]);
                } 
                else if(this.rolesCounter === 2){
                    this.rolesCounter = 0;
                }
            }, 2000)
        }
    },
    mounted(){
        this.setRoles();
    }
})




</script>

<template>

    <header class="header container mb-3">
        <h1 class="my-name">
            hi, i'm <strong class="my-name">{{ profileName }}</strong>
        </h1>

        <h1 class="my-roles flex justify-start items-center flex-wrap">
            <span class="dev-animation flicker me-2"><strong>{{ roles[rolesCounter] }}</strong></span> developer
        </h1>
    </header>

</template>



<style scoped>

.my-name{
    position: relative;
    z-index: 1;
}

</style>

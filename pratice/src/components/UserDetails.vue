<template>
<div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ name }} </p>
    <p>User age: {{userAge}}</p>
   
    <button @click="resetName">Reset the name</button>
    <button @click="resetFn()">Reset name callback</button>

</div>
</template>
<script>
import { eventBus } from '../main'
export default {
    data(){ 
        return {
    
        }
    },
    props: {
        name:{
            type: String
        },
        resetFn: Function,
        userAge: Number
    },
    methods:{
         resetName(){
             this.name = 'mary'
             this.$emit('resetname', this.name)
         }
    },
    created(){
    eventBus.$on('ageWasEdited', (age) => {
    this.userAge = age
    })
    }
   
}
</script>
<style scoped>
div {
    background-color: lightcoral !important;
}
</style>



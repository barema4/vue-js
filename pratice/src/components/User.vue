<template>
<div class='component'>
    <h1>The user component</h1>
    <p>Iam a great user</p>
    <button @click="changeName"
     @resetname='name = $event'

     :resetFn='resetName'
    >change name</button>
    <div class="row">
        <div class="col-md-6">
            <UserDetails :name='name'/>
            </div>
            <div class="col-md-6">
                <EditUser :userAge='age'/>
            </div>
    </div>
</div>
    
</template>
<script>
import UserDetails from './UserDetails'
import EditUser from './EditUser'
export default {

    data(){
        return{
         name : 'sam',
         age: 27
        }
    }
    ,
    methods:{
        changeName(){
            this.name = 'rubarema'
        },
        resetName() {
            this.name = 'Mary'
        }
    },
    components:{
        UserDetails,
        EditUser
    }
    
}
</script>
<style scoped>
div {
    border: 2px solid green;
    background-color:lightcyan;
}
</style>



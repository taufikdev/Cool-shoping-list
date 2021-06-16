<template>
  <div class="hello">
    <form @submit.prevent="addGood">
        <input type="text" placeholder="Enter a goody you wanna buy.." v-model="good">
    </form>
    <p>These are the goods you should buy today!</p>
   <div class="holder">
     <ul>
       <transition-group name="list" leave-active-class="animated bounceOutRight" enter-active-class="animated bounceInUp" >
       <li v-for="(data,index) in goods" :key='index'>
         <div><i class="fa fa-caret-right"></i> {{ data.good }} </div>
         <div style="text-align: center;margin-left:450px; display:flex">
          <button v-on:click="editGood(index)" class="coolBtn2" >Edit</button>
           <button v-on:click="deleteGood(index)" class="coolBtn">Delete</button>
          </div>
          
       </li>
       
       </transition-group>
     </ul>
   </div>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  data () {
    return {
      good:'',
      editMode:-1,
      goods:[
        {'good':'Potatos'},
        {'good':'Melon'},
      ],
      alertObject:{
        alert:true,
        another:true
      }
    }
  },
  methods: {
    addGood(){
      if(this.editMode===-1){
           this.goods.push({good:this.good});
           this.good=''
      }else{
        this.goods[this.editMode].good=this.good;
        this.editMode=-1;
      }
     
    },
    deleteGood(index){
        this.goods.splice(index,1);
    },
    editGood(index){
      this.good = this.goods[index].good;
      this.editMode = index;
    }
  }
  
}
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
 .holder {
    /* background: #fff; */
    margin: auto;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
    margin: auto; 
    /* width:300px; */
    padding: 20px;
    padding-left: 30px;
    color:#e0e0e0;
    font-size: 1.3em;
    background-color: #323333;
    border-left: 8px solid #ffde26;
    font-size: 24px;
    border-radius: .2em;
    box-shadow: 1.5px 1.5px rgb(97, 96, 96);
    margin-bottom: .3em;
  }

  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }
  input {
    margin: auto;
    width: calc(100% - 40px);
    border: 0;
    border-radius: .2em;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
     box-shadow:inset 1px 1px 2px 2px rgb(143, 139, 139);
    color: #cad8d8;
    
  }
.coolBtn{
    border: 0;
    font-weight: bolder;
    background-color:#e7345b;
    width: 100px;
    height:35px;
    border-radius: .2em;
    /* margin-left: 500px; */
    box-shadow:1px 1px 1px 1px rgb(207, 63, 63);
   
  }
  .coolBtn2{
    border: 0;
    font-weight: bolder;
    background-color:rgb(248, 164, 39);
    width: 100px;
    height:35px;
    border-radius: .2em;
    margin-right: 10px;
    box-shadow:1px 1px 1px 1px rgb(190, 128, 35);
    
   
  }
</style>

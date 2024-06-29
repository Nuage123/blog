<template>
 
    <ParentLayout>
      <template #page>
        <main class="page">
         
         <HomeHeader class="homeHeader"></HomeHeader>
         <!-- <AboutMe></AboutMe> -->
         
        
        

        </main>
        <hr>
        <footer class="footer"> &copy; Nuage</footer>
      </template>
     
    </ParentLayout>

  </template>
  
  
  <script>

//  import Home from '@theme/Home.vue'
// import Navbar from '@theme/Navbar.vue'
  import HomeHeader from './HomeHeader.vue'; 
  // import AboutMe from './AboutMe.vue';// Import the TypeWriter component
//   import AboutMe from '@/components/AboutMe'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
  export default {
    name: 'HomePage',
  
    components:{
      HomeHeader,
    ParentLayout,
    // AboutMe
      
    //   AboutMe
  
    },
    data() {
      return {
        status: 'hidden',
      }
    },
    mounted(){
      
    },
    methods: {
      
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

.page{
 /* position: relative; */
/* ?bottom: 150px; */
}

.homeHeader{
  margin-top: 5%;
  /* background-color: red; */
  /* margin: 0.1% auto; */
    /* position: relative; */
    /* bottom: 20px; */
    /* max-height: 500px; */
   
    width:85%;
   

}

.footer {
  
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}



  
  </style>
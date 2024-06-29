<template>
  
    <div class="home-wrapper">
      <div class="intro">
      <h1>Hi!
        <span class="wave">👋</span>
      </h1>
      <h1>
        I'M 
        <strong>小雯</strong>
       
      </h1>
      <TypeWriter></TypeWriter>
  </div>
    <div class="img">
      <img src="../public/images/profile.jpg" alt="">
    </div>
    </div>
  </template>
  
  <script>
  import TypeWriter from "./TypeWriter.vue"; // Import the TypeWriter component
  
  export default {
    name: 'HomePage',
  
    components:{
      TypeWriter,
  
    },
    data() {
      return {
        status: 'hidden',
      }
    },
   
    
  }
  </script>
  
  <style lang="scss">

  .home-wrapper {
    margin: 0 auto;
    
  //  background-color: blue;
    text-align: center;
  

    display: flex;
    align-items: stretch;
    /* margin-top: 30px;
    /* padding: 30px; */
    /* width: 100%; */ 
    /* padding:0 0 0 20px */
    /* text-align: center; */
    /* display: flex; Use flexbox for layout */
    
  }
  
  
  .intro {
    margin: auto;
    // background-color: red;
    /* margin-top: 5%; */
    /* width: 50%; */
    /* background-color: red; */
    /* height: 100%; */
    /* padding: 6% 0; */
  
    /* background-color: red; */
    /* float: left; */
  /* background-color: red; */
  
    /* padding: 20px; Example padding */
  }
  
  .img {
    
    /* flex: 1; Flex 1 to take remaining space */
    /* text-align: center; Center image */
    /* height: 30%; */
    /* width: 50%; */
    /* background-color: red; */
    /* float: right; */
  }
  .intro, .img{
    width: 50%;
  }
  
  .img img {
    max-width: 100%; /* Ensure image doesn't exceed container width */
    /* max-height: 80%; */
   height: auto; /* Maintain aspect ratio */
    border-radius: 10%;
  }
  
  /* Example styling for .wave and .tl classes */
  /* .wave {
    font-size: 1.5em;
  } */
  
  .tl {
    font-size: 1.2em;
    font-weight: bold;
  }
  
  /* 定义动画 */
@keyframes wave-animation {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

.wave {
  display: inline-block;
  animation-name: wave-animation; /* Apply the wave animation */
  animation-duration: 2.5s;       /* Duration of the animation */
  animation-timing-function: ease-in-out; /* Animation timing function */
  animation-iteration-count: infinite;    /* Repeat the animation indefinitely */
  transform-origin: 70% 70%;      /* Set the transform origin to make it look like a wave */
  font-size: 1em;                /* Adjust the size of the emoji as needed */
}

.Home{
  display: flex;
}
  
  </style>
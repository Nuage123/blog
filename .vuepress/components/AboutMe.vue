<template>
    <div class="about_wrapper">
        <h1>关于我</h1>
        <div class="about">
          
         <p>一个有转码梦想的英专生,<br />
         不过其实最想做的事情是写小说</p>
         <div class="pic">
          <img src="../public/images/微信图片_20240627183836.jpg" alt="">
          <p class="self">大概长这样</p>
         </div>

         <p>我会：</p>
         <!-- <h2>编程</h2> -->
         <div class="skills">
          
          <el-row class="skill-row" >
            <el-col :span="4" v-for="item in skils" :key="item.title" :offset="1">
          <el-card  :body-style="{ padding: '0px', height:auto}" shadow="hover" style="width: auto;height: 320px; margin:5px; border:0">
    <template #header class="temp">{{ item.title }}</template>
    <img class="img"
     :src="item.pic"
      style="width: 100%"
    />
  </el-card>
</el-col>
</el-row>
<h1>联系我</h1>
         <el-row class="skill-row" >
         
            <el-col :span="4" v-for="item in contact" :key="item.title" :offset="1">
          <el-card  :body-style="{ padding: '0px', height:auto}" shadow="hover" style="width: auto;height: 320x; border:0">
    <template #header class="temp">{{ item.title }}</template>
    <img class="img"
     :src="item.pic"
      style="width: 100%"
    />
  </el-card>
</el-col>

</el-row>
        </div>
    
        </div>
        
       
    </div>
   
</template>

<script>
export default{
  data(){
    return {
      skils:[
      {
          "title":"英语",
          "pic": new URL("../public/images/english.png",import.meta.url)
        },
      {
          "title":"java",
          "pic": new URL("../public/images/java.png",import.meta.url)
        },
   
        {
          "title":"SpringBoot",
          "pic": new URL("../public/images/springBoot.png",import.meta.url)
        },
        {
          "title":"Vuejs",
          "pic": new URL("../public/images/vue.png",import.meta.url)
        },
        {
          "title":"Python",
          "pic": new URL("../public/images/python.png",import.meta.url)
        },
        {
          "title":"MySQL",
          "pic": new URL("../public/images/mysql.png",import.meta.url)
        },
      ],
      contact:[
      {
          "title":"小红书",
          "pic": new URL("../public/images/小红书.png",import.meta.url)
        },
        {
          "title":"Gitee",
          "pic": new URL("../public/images/Gitee-copy.png",import.meta.url)
        },
        {
          "title":"邮箱",
          "pic": new URL("../public/images/mailbox.png",import.meta.url)
        },
      ]
    }
  }
}
</script>

<style>

  .about_wrapper {
   
    text-align: center;
    
  }
 
  .skills{
    margin: auto;
    /* background-color: red; */
    /* flex-wrap: wrap; */
  }
  .skill-row{
    margin: auto;
    justify-content: space-evenly;
    
    /* background-color: blue; */
  }
  .img{
   max-width: 85%;
   margin: 20% auto;
  }
  .pic{
    font-size: small;
    color:rgb(164, 160, 160);
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>
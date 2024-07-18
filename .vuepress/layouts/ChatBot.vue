<template>
    <ParentLayout>
      <template #page>
        <main class="page">
          <div class= "about-wrapper">
            <div class="chat-container">
              <div class="messages">
                <div v-for="message in messages" :key="message.id" :class="['message', message.sender]">
                  <p>{{ message.text }}</p>
                  
                </div>
              </div>
              <div class="input-container">
                
                <input id="appName"  @keypress="sendMessage" list="appNamelist" v-model="userInput">
            <datalist id="appNamelist">
                <option v-for="item in randomQuestions">{{ item }}</option>
            </datalist>

                <button @click="sendMessage">发送</button>
              </div>
            </div>
          </div>
        </main>
        <hr>
        <!-- <footer class="footer"> &copy; Nuage</footer> -->
      </template>
    </ParentLayout>
  </template>
  
  <script>
  import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
  import { qaData } from '../utils/qaData.js'

  export default {
    components: {
      ParentLayout,
    },
    data() {
      return {
        userInput: '',
        messages: [],
        randomQuestions: []
      };
    },
    mounted() {
      this.messages.push({ id: Date.now(), text: "你好👋，我是小雯。\n我的邮箱是 745402527@qq.com 。我的微信是y_m990415", sender: 'system' });
      this.addRandomQuestions()
    },
    methods: {
      sendMessage() {
        if (this.userInput.trim() !== '') {
          this.messages.push({ id: Date.now(), text: this.userInput, sender: 'user' });
          this.getBotResponse(this.userInput);
        }
        this.userInput = '';
      },
      getBotResponse(input) {
      let botResponse = '抱歉，我不太明白你的意思。';

      // 查找匹配的问题和答案
      const qaItem = qaData.find(item => input.includes(item.question));
      if (qaItem) {
        botResponse = qaItem.answer;
      }

      this.messages.push({ id: Date.now() + 1, text: botResponse, sender: 'bot' });
      this.randomQuestions=[],
      this.addRandomQuestions()
    //   this.messages.push({ id: Date.now() + 1, text: "你可能想知道", sender: 'bot' });
    },
    addRandomQuestions() {  
       
      const shuffledQuestions = [...qaData].sort(() => Math.random() - 0.5).slice(0, 3);  
      shuffledQuestions.forEach(question => {  
        // this.messages.push({ id: Date.now() + 1, text: question.question, sender: 'system', clickable: true });  
        this.randomQuestions.push(question.question);  
      });  
    }, 
    handleClick(message) {  
      if (message.clickable) {  
        this.userInput = `${message.text}`;  
      }  
    },  
    },
  };
  </script>
  
  <style scoped>
  .chat-container {
    display: flex;
    flex-direction: column;
    height: 80vh;
    max-width: 600px;
    margin: auto;
  }
  
  .messages {
    flex-grow: 1;
    overflow-y: auto;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  
  .message {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 15px;
    max-width: 75%;
    word-wrap: break-word;
  }
  
  .message.system {
    background-color: #f1f1f1;
    text-align: left;
  }
  
  .message.user {
    background-color: #d1e7dd;
    text-align: right;
    margin-left: auto;
  }
  
  .message.bot {
    background-color: #e2e3e5;
    text-align: left;
  }
  
  .input-container {
    display: flex;
  }
  
  input {
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
  }
  
  button {
    padding: 10px;
    font-size: 16px;
  }
  </style>
  
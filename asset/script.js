console.log('js ok')

const {createApp} =Vue

createApp({
  data() {
    return {
      todoList:[
        {
          text: 'Lavare la macchina',
          done: true
        }
      ],
      newTask:''
    }
  },
  methods: {
    addTask(){
      console.log('add')
    }
  },
}).mount('#app')
console.log('js ok')

const {createApp} =Vue

createApp({
  data() {
    return {
      todoList:[
        {
          text: 'Lavare la macchina',
          done: true
        },
        {
          text: 'Andare dal veterinario',
          done: true
        },
        {
          text: 'Comprare le medicine',
          done: true
        },
        {
          text: 'Comprare biglietto aereo',
          done: true
        },
      ],
      newTask:'',
      errorMsg:''
    }
  },
  methods: {
    addTask(){
      if(this.newTask.length > 5){
      this.todoList.unshift(this.newTask)
      this.newTask = ''
      this.errorMsg = ''
        }else{
        this.errorMsg = 'Attenzione! La task deve essere formata da almeno 5 caratteri!'
        }
    }
  },
}).mount('#app')
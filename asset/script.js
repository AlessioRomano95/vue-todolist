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
      newTask:{
        text:'',
        done:false
      },
      erroreMsg:''
    }
  },

  methods: {
    addTask(){
      if(this.newTask.length > 5){
        const newTaskPlus ={
          text:this.newTask,
          done: false
        }
      this.todoList.unshift(this.newTaskPlus)
      this.newTask = ''
      this.erroreMsg = '';
        }else{
        this.errorMsg = 'Attenzione! La task deve essere formata da almeno 5 caratteri!'
        }
  },
  toggleDone(task){
    task.done = !task.done;
    this.erroreMsg= '';
  },

  eliminaTask(indice){
    if(this.todoList[indice].done){
      this.todoList.splice(indice,1)
    }else{
      this.erroreMsg = 'Attenzione! La task va eseguita'
    }
  }
  }
}).mount('#app')
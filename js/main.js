const app = new Vue({
    el: '#root',
    data: {
      todos: [
        "Comprare cibo per Paprika",
        "Finire gli esercizi",
        "Fare la spesa",
        "Nerdare"
      ],
      newTodo: ""
    },
    methods: {
      addTodo: function(){
        if (this.newTodo != ""){
          this.todos.push(this.newTodo);
          this.newTodo = "";
        }
      },
      removeTodo: function(index){
        this.todos.splice(index,1);
      }
    }
  })
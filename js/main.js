const app = new Vue({
    el: '#root',
    data: {
      todos: [
        {
          titolo :"Comprare cibo per Paprika",
          stato : false
        },
        {
          titolo :"Finire gli esercizi",
          stato : false
        },
        {
          titolo :"Fare la spesa",
          stato : false
        },
        {
          titolo :"Nerdare",
          stato : false
        }
      ],
      stringTodo : ""
    },
    methods: {
      addTodo: function(){
        if (this.stringTodo != ""){
          let newTodo = {
            titolo : this.stringTodo,
            stato : false,
          }
          this.todos.push(newTodo);
        }

      },
      removeTodo: function(index){
        this.todos.splice(index,1);
      },
      todoDone: function(index){
        this.todos[index].stato = true;
      }
    }
  })
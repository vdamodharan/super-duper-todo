angular.module('superdupertodoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn angular', done:false},
      {text:'learn git', done:false},
      {text:'build an angular app', done:false}];
    };
  });
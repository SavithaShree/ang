import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  todos = [
     {
        label: 'Learn HTML',
        status: true
     },
     {
        label: 'Implement HTML',
        status: true
     },
     {
        label: 'Learn CSS',
        status: true
     },
     {
        label: 'Implement CSS',
        status: false
     },
     {
        label: 'Learn JavaScript',
        status: false
     }
  ];
  addTodo(newLabel) {
     var newTodo = {
        label: newLabel,
        status: false
     };
     this.todos.push(newTodo);
  }

  deleteTodo(todo) {
     this.todos = this.todos.filter(t => t.label !== todo.label);
  }

  changeStatus(todo){
    if (todo.status == true)
    todo.status=false;
    else
    todo.status=true;
  }

  constructor() { }

  ngOnInit() {
  }

}

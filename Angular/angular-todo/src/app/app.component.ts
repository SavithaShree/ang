import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor() {}
   title = 'Todos';
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
      const newTodo = {
         label: newLabel,
         status: false
      };
      this.todos.push(newTodo);
   }

   deleteTodo(todo) {
      this.todos = this.todos.filter(t => t.label !== todo.label);
   }
}


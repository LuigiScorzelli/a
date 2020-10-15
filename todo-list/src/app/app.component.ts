import { Component } from '@angular/core';
import { Todo } from './todo-item/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[];

  constructor() { 
    this.todos = [
      new Todo('1', 'task 1', '2'),
      new Todo('2', 'task 2', '5'),
      new Todo('3', 'task 3', '3'),
      new Todo('4', 'task 4', '1'),
      new Todo('5', 'task 5', '3')
    ];
  }
  // ritorno al componente la lista ordinata per priorità
  sortedTodos() {
    return this.todos.sort((a: Todo, b: Todo) => a.priority > b.priority ? -1 : (a.priority < b.priority) ? 1 : 0);
  }

  // raccolgo l'evento ed aggiungo all array todos un nuovo todo con i dati del form
  onAddTodo({ desc, priority }) {
    const newId= (this.todos.length + 1).toString();
    this.todos.push(new Todo(newId, desc, priority));
  }

  //una volta ricevuto l'evento cerco il todo tramite id e cambio il valore della propietà "completed"
  onCompletedTodo(id) {
    const myTodo = this.todos.find(todo => todo.id === id);
    myTodo.completed = true;
  }
}

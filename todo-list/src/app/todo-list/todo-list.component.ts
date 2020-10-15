import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo-item/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() completedTodo: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }
  // rimbalzo l'evento fino al componente padre
  onCompletedTodo(id) {
    this.completedTodo.emit(id);
  }
}

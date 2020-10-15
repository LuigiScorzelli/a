import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo : Todo;
  @Output() completedTodo: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ///emetto un evento al click del pulsante "Completa"
  onCompletedTodo() {
    // this.todo.completed = true;
    this.completedTodo.emit(this.todo.id);
  }
}

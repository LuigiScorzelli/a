import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo-item/todo.model';
import { AddFormError } from './add-form-error.model';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {

  @Output() newTodo : EventEmitter<any> = new EventEmitter<any>();
  // inizializzo una variabile e nel costruttore gli assegno la classe "AddFormError"
  formError: AddFormError;

  constructor() { 
    this.formError = new AddFormError();
  }

  ngOnInit(): void {
  }
  // assegno una speseudo classe se il form è in errore
  getInputClass(): string {
    let toRet = 'input ' ;

    if(this.formError.isError) {
      toRet += 'is-danger';
    }
    return toRet;
  }
  // controllo i dati inseriti nel form e assegno dei valori alla classe "AddFormError"
  checkForm(desc, priority): void{

    if(desc === '') {
      this.formError.isError = true;
      this.formError.descriptionError = true;
      this.formError.descriptionErrorMsg = 'Devi inserire una descrizione';
    } else if(desc !== '') {
      this.formError.isError = false;
      this.formError.descriptionError = false;
      this.formError.descriptionErrorMsg = '';
    }
    
    if(priority < 1 || priority > 5) {
      this.formError.isError = true;
      this.formError.priorityError = true;
      this.formError.priorityErrorMsg = 'La priorità è tra 1 e 5';
    } else {
      this.formError.isError = false;
      this.formError.priorityError = false;
      this.formError.priorityErrorMsg = '';
    }
  }
  // passo i valori inseriti nel form, li controllo e se il form non è in errore emetto l'emit
  onAddTodo(desc: HTMLInputElement, priority: HTMLInputElement) {
    const descValue = desc.value;
    const priorityValue = priority.value;
    this.checkForm(descValue, priorityValue);

    if(!this.formError.isError) {
      const newTodo: any = {
        desc: desc.value,
        priority: priority.value,
      };
      this.newTodo.emit(newTodo);
      desc.value = '';
      priority.value = '';
    }
  }
}

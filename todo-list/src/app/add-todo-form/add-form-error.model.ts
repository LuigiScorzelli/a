export class AddFormError {
  isError : boolean;
  descriptionError : boolean;
  descriptionErrorMsg : string;
  priorityError: boolean;
  priorityErrorMsg: string;

  constructor() {
    this.isError = false;
    this.descriptionError = false;
    this.descriptionErrorMsg = '';
    this.priorityError = false;
    this.priorityErrorMsg = '';
  }
}
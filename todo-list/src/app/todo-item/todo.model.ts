export class Todo {
  id: string;
  desc: string;
  date: Date;
  priority: number;
  completed: boolean;

  constructor(id: string, desc: string, priority: string) {
    this.id = id;
    this.desc = desc;
    this.date = new Date();
    this.priority = parseInt(priority);
    this.completed = false;
  }
}
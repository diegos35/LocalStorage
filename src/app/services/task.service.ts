import { Injectable } from '@angular/core';
import { Task } from '../model/task';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  
  private tasks: Task[] = [];

  constructor() {
    /* this.task = [
      { title: 'write', description: 'i have to write', hide: true }, 
      { title: 'crate website', description: 'i have to write website', hide: true },
    ]; */
  }

  getTask(){
    let storageTask = localStorage.getItem('tasks');
    if(storageTask === null) {
      return this.tasks;
    }else{ 
      this.tasks = JSON.parse(storageTask);
      return this.tasks;
    } 
  }

  addTask(task : Task) {
    this.tasks.push(task);
    let tasks: Task[] = [];
    let storageTask = localStorage.getItem('tasks');
    if( storageTask === null){
      tasks.push(task);
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }else{
      tasks = JSON.parse(storageTask);
      tasks.push(task);
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
  }

  deleteTask(index: any) {
    if(confirm('Are you sure you want to delete this task')){
      this.tasks.splice(index, 1)      
    }
  }
}

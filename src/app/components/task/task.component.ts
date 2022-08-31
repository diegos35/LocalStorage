import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

   @Input() task!: Task;
   @Input() index:any;

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task)
  }
}

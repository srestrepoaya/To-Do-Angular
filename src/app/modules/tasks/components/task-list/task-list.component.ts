import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../tasks-component/task-component.component';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../types/task.type';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}

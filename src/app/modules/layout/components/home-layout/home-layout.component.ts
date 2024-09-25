import { Component } from '@angular/core';
import { TaskListComponent } from "../../../tasks/components/task-list/task-list.component";
import { TaskFormComponent } from "../../../tasks/components/task-form/task-form.component";

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [TaskListComponent, TaskFormComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css',
})
export class HomeLayoutComponent {
  showTaskForm: boolean = false;

  constructor() {}

  onOpenTaskForm = () => {
    this.showTaskForm = true;
  };

  onCloseTaskForm = () => {
    this.showTaskForm = false;
  };
}

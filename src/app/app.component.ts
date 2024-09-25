import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './modules/tasks/components/task-list/task-list.component';
import { TaskFormComponent } from './modules/tasks/components/task-form/task-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TaskListComponent,
    TaskFormComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'to-do-angular';
  showTaskForm: boolean = false;

  constructor() {}

  onOpenTaskForm = () => {
    this.showTaskForm = true;
  };

  onCloseTaskForm = () => {
    this.showTaskForm = false;
  };
}

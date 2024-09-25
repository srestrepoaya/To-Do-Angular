import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  title = new FormControl('');
  bgColor = new FormControl('');
  textColor = new FormControl('');
  startDate = new FormControl('');
  endDate = new FormControl('');

  constructor(
    private tasksService: TasksService,
    @Inject(AppComponent) private appComponent: AppComponent
  ) {}

  createTask = () => {
    this.tasksService.addTask({
      colors: {
        backGround: `#${this.bgColor.value!}`,
        text: `#${this.textColor.value!}`,
      },
      title: this.title.value!,
      dates: { startDate: this.startDate.value!, endDate: this.endDate.value! },
    });
    this.appComponent.onCloseTaskForm();
  };
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'task-component',
  standalone: true,
  imports: [],
  templateUrl: './task-component.component.html',
  styleUrl: './task-component.component.css',
})
export class TaskComponent {
  @Input() bgColor: string = '';
  @Input() startTime: string = '';
  @Input() endTime: string = '';
  @Input() taskTitle: string = '';
}

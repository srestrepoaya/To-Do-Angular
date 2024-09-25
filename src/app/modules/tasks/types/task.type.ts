type TaskColors = {
  backGround: string;
  text: string;
};

type TaskDates = {
  startDate: string;
  endDate: string;
};

export interface Task {
  colors: TaskColors;
  title: string;
  dates: TaskDates;
}

export class TaskClass {
  constructor(
    public colors: TaskColors,
    public title: string,
    public dates: TaskDates
  ) {}
}

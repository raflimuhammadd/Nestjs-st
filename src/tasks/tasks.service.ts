import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  createTask(CreateTaskDto: CreateTaskDto): Task {
    const { title, description, finishBy } = CreateTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      finishBy,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}

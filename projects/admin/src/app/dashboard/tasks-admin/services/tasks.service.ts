import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createTask } from '../context/DTOs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  getAllTasks(){
    let headers= new HttpHeaders()
    return this.http.get('https://crud-ibk8.onrender.com/tasks/all-tasks')
  }
  createTasks(model:any) {
    return this.http.post('https://crud-ibk8.onrender.com/tasks/add-task' ,model)
  }
}


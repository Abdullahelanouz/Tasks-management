import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  getAllTasks(){
    let headers= new HttpHeaders()
    return this.http.get('https://crud-ibk8.onrender.com/tasks/all-tasks')
  }
}


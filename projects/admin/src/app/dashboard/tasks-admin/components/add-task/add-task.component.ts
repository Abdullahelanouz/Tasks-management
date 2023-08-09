import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { TasksService } from '../../services/tasks.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(private fb:FormBuilder , public dialog: MatDialogRef<AddTaskComponent> , public matDialog:MatDialog,private service:TasksService ) { }

  users:any = [
    {name:"Moahmed" , id:1},
    {name:"Ali" , id:2},
    {name:"Ahmed" , id:3},
    {name:"Zain" , id:4},
  ]
  fileName =""
  newTaskForm!:FormGroup
  ngOnInit(): void {
    this.createFrom()
  }
createFrom(){
  this.newTaskForm = this.fb.group({
    title : ['',Validators.required],
    userId :['',Validators.required],
    Image : ['',Validators.required],
    description:['', Validators.required],
    deadLine :['',Validators.required]
  })
}
selectImage(event:any){
  this.fileName =event.target.value
  this.newTaskForm.get('image')?.setValue(event.target.files[0])

}
createTask() {
  let formData  =new FormData()
  //console.log(this.newTaskForm.value);
  formData.append('title',this.newTaskForm.value['title'])
  formData.append('userId',this.newTaskForm.value['userId'])
  formData.append('Image',this.newTaskForm.value['Image'])
  formData.append('description',this.newTaskForm.value['description'])
  formData.append('deadLine',this.newTaskForm.value['deadLine'])
  this.service.createTasks(formData).subscribe(res =>{
  })

}

}

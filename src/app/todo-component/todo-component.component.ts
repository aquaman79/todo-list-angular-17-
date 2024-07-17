import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-component',
  standalone: true,
  imports: [FormsModule,CommonModule ],
  templateUrl: './todo-component.component.html',
  styleUrl: './todo-component.component.css'
})
export class TodoComponentComponent {
   task:string=""; 
   taskArray =[{taskName : "ceci est une task",isCompleted : false}]

   onSubmit(taskForm: NgForm) {
    console.log(taskForm);
    this.taskArray.push({
      taskName: this.task,
      isCompleted: false
    });

    this.task = '';

    // Affichage du tableau
    console.log(this.taskArray);
  }

  deleteTask(i : number){
    this.taskArray.splice(i,1)
  }
  changeCompleted(i:number){
    this.taskArray[i].isCompleted = !this.taskArray[i].isCompleted;
    console.log(this.taskArray)
  }
  
}

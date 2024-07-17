import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoComponentComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
}

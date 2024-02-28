import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-app';

 count:number=0;
 hide:boolean=true; 
  onClick(){
  this.count++;  }

  imgClicked(){
    this.hide=!this.hide;
  }
}

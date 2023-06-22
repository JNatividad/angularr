import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';


  games = ['resident','halo','tekken']

  buscar = ''


  metodo(info:any){
    console.log(info);
    
  }
}

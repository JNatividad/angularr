import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor() { }

  @Input() nuevo:any;

  @Output() onInfo:EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {
    console.log(this.nuevo);

    this.onInfo.emit('send info in child')

    
    
  }

}

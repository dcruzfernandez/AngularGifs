import { Component, Input, OnInit } from '@angular/core';
import { Gif, Onclick } from '../../interfaces/Gifs.interface';

@Component({
  selector: 'gifs-card-item',
  templateUrl: './gifs-card.component.html'
})
export class GifsCardComponent implements OnInit {
 
  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif property is required')
  }

  @Input()
  public gif!:Gif;
}

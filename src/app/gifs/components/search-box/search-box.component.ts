import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @ViewChild('txtBuscar')
  public Buscar!:ElementRef<HTMLInputElement>

  constructor(private gifsService:GifsService){}

  buscarTag(){
    const texto=this.Buscar.nativeElement.value;
    console.log(texto);
    this.gifsService.buscarTag(texto);
    this.Buscar.nativeElement.value='';
  }
}

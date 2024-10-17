import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/Gifs.interface';
import { compileNgModule } from '@angular/compiler';

@Injectable({providedIn: 'root'})
export class GifsService {
    private api_key:string='xYSElGqSm0pgu9WLBrgSNctB3HNyP2Aa';
    private url:string='https://api.giphy.com/v1/gifs/search';
    private tagsHistory:string[]=[];

    public gifsList:Gif[]=[];
    
    constructor(private http:HttpClient) { 
        this.leerHistorial();
        if(this.tagsHistory.length===0) return;
        this.buscarTag(this.tagsHistory[0]);
    }

    get TagHistory():string[]{
        //evita que retorne la referencia
        return [...this.tagsHistory]
    }

    organizarHistorial(tag:string):void{
        tag=tag.toLowerCase();
        if(this.tagsHistory.includes(tag)){
            this.tagsHistory=this.TagHistory.filter(t=>t!==tag);
        }
        this.tagsHistory.unshift(tag);
        this.tagsHistory=this.tagsHistory.splice(0,10);
        this.guardarHistorial();
    }

    private guardarHistorial():void{
        localStorage.setItem('historial',JSON.stringify(this.tagsHistory));
    }

    private leerHistorial():void{
        if(!localStorage.getItem('historial')) return;

        this.tagsHistory=JSON.parse(localStorage.getItem('historial')!)
    }

    buscarTag(tag:string):void{
        
        const params=new HttpParams()
            .set('api_key',this.api_key)
            .set('limit',10)
            .set('q',tag);

        if(tag.length===0) return;
        this.organizarHistorial(tag);
        this.http.get<SearchResponse>(this.url,{params})
            .subscribe(resp=>{
                this.gifsList=resp.data;
                console.log(this.gifsList);
            });
    }

    BuscarFecth(tag:string):void{
        const apiUrl=`${this.url}?api_key=${this.api_key}&q=${tag}&limit=10`;
        console.log(apiUrl)
        fetch(apiUrl)
            .then(response=>response.json())
            .then(data=>console.log(data));
    }

    async BuscarFecthAsync(tag:string):Promise<void>{
        const apiUrl=`${this.url}?api_key=${this.api_key}&q=${tag}&limit=10`;
        
        const response= await fetch(apiUrl);
        const data=await response.json();
        console.log(data);
    }

    
    
}
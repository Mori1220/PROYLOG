import {
  Component,
  OnInit,
} from '@angular/core';

import { OmdbService } from 'src/app/service/omdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 busqueda: string = '';
 resultados: any
 
 

 


  constructor(private serviceOmdb: OmdbService,) { }
  
  ngOnInit(): void {
    this.buscar();
  }

  buscar (){
    this.serviceOmdb.getQuery()
    .subscribe(response => {
      this.resultados = response;
      console.log(response);
      
    });

  }
  
  }


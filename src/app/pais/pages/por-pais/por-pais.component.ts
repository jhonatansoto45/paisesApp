import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  viewTable: boolean = false;

  paisesArray: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino).subscribe(
      (paises: Country[]) => {
        console.log(paises);
        this.paisesArray = paises;
      },
      //! Manejo de error de un subscribe (Deprecated)
      (err) => {
        this.hayError = true;
        this.paisesArray = [];
      }
    );
  }

  sugerencias(termino:string){
    this.hayError = false;

  }
}

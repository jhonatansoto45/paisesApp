import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    //* Llama una peticion tras otra peticion

    //? NUEVO
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe((pais: any) => {
        this.pais = pais;
      });

    //? ANTIGUO
    /* this.activatedRoute.params.subscribe(({ id }) => {
      console.log(id);

      this.paisService.getPaisPorAlpha(id).subscribe((pais: any) => {
        console.log(pais);
      });
    }); */
  }
}

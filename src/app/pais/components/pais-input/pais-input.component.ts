import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  termino: string = '';

  debouncer: Subject<string> = new Subject();

  @Input() placeholder: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  //* Emite cuando la persona deja de escribir (DebounceTime especial para busquedas, los formularios reactivos ya los traen)
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    //? pipe(debounceTime(300)) no emitara despues de que se cumpla los 300 milisegundos
    this.debouncer.pipe(debounceTime(300)).subscribe((valor: string) => {
      this.onDebounce.emit(valor);
    });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}

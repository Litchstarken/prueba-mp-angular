import { Component, OnInit } from '@angular/core';
import { FormService } from '../../../services/form.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  forma: FormGroup;
  public countries = [];

  // +++Objeto para manipulación del formulario+++ //
  usuario:Object = {
      nombre: '',
      correo: '',
      tipoDocumento: '',
      numeroDocumento: '',
      pais: '',
      numeroCelular: '',
      aceptar: false
  };


  constructor( public formService: FormService ) {
    // +++ Validadores FormControl +++ //
    this.forma = new FormGroup({
      nombre: new FormControl( '', [Validators.required, Validators.pattern('^[a-zA-Z \u00f1\u00d1\u00C0-\u024F\u1E00-\u1EFF]*$'), Validators.minLength(3)] ),
      correo: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      tipoDocumento: new FormControl('', Validators.required),
      numeroDocumento: new FormControl( '', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern('^[0-9]*$')] ),
      pais: new FormControl('', Validators.required),
      numeroCelular: new FormControl( '', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(10)] ),
      aceptar: new FormControl( '', Validators.requiredTrue )
    });
    this.forma.setValue( this.usuario );
  }

  guardarCambios() {
    // +++ log para validar el formulario / reset para limpiar los campos +++ //
    console.log( this.forma.value );
    this.forma.reset( this.usuario );
  }

  ngOnInit() {
    this.getDataDetails();
 }

  getDataDetails() {
     this.formService.getData()
         .subscribe( data => this.countries = data );
   }
}

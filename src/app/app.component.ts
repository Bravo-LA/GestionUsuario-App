import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Usuario } from './interface/usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  form!: FormGroup
  usuarios: Usuario[] = []

  constructor(
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      cedula: ['', Validators.required],
      apellido: ['', Validators.required],
      nombre: ['', Validators.required],
      fechaNac: ['', Validators.required],
      genero: ['', Validators.required],
    })
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }

    const data: Usuario = {
      cedula: this.form.value.cedula,
      apellido: this.form.value.apellido,
      nombre: this.form.value.nombre,
      fechaNac: this.form.value.fechaNac,
      genero: this.form.value.genero,
    }

    this.usuarios.push(data)
    this.form.reset()
  }

}

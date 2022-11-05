import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getTextOfJSDocComment } from 'typescript';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad: number = 25;
  peso: number = 20;
  altura: number = 170;
  sexo: string = "Masculino";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  restarPeso(): void {
    this.peso--;
  }
  sumarPeso(): void {
    this.peso++;
  }

  restarEdad(): void {
    this.edad--;
  }

  sumarEdad(): void {
    this.edad++;
  }

  femenino(): void {
    this.sexo = "Femenino";
  }

  masculino(): void {
    this.sexo = "Masculino";

  }

  cambiarAltura(event: any) {
    this.altura = event.target.value;
  }

  calcularBMI(): void {
    const BMI = this.peso / Math.pow((this.altura / 100), 2);
    console.log(BMI.toFixed(1));
    this.router.navigate(["/resultado",BMI.toFixed(1)]);
  }
}


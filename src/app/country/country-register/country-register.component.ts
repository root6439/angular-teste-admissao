import { Pais } from './../../shared/models/Pais';
import { CountryService } from './../country.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-register',
  templateUrl: './country-register.component.html',
  styleUrls: ['./country-register.component.css'],
})
export class CountryRegisterComponent implements OnInit {
  formCountry: FormGroup;

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.formCountry = this.fb.group({
      gentilico: ['', Validators.required],
      nome: ['', Validators.required],
      sigla: ['', [Validators.required, Validators.maxLength(2)]],
    });
  }

  registry(): void {
    this.countryService
      .postCountry(this.formCountry.value)
      .subscribe((resp: Pais) => {
        
      });
  }
}

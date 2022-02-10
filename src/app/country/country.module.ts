import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { MatTableModule } from '@angular/material/table';
import { CountryRoutingModule } from './country-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { CountryRegisterComponent } from './country-register/country-register.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [CountryComponent, CountryRegisterComponent],
  imports: [
    CommonModule,
    MatTableModule,
    CountryRoutingModule,
    HomeModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class CountryModule {}

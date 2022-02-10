import { MatButtonModule } from '@angular/material/button';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MatToolbarModule, MatButtonModule],
  exports: [HomeComponent],
})
export class HomeModule {}

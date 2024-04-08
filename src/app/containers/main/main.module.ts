import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MainRoutingModule],
  declarations: [MainComponent,  NavbarComponent],
})
export class MainModule {}

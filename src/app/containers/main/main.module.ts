import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, MainRoutingModule, HeaderComponent],
  declarations: [MainComponent,  NavbarComponent],
})
export class MainModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Header } from './Header/header.component';
import { Ex1HomeComponent } from './Exercise-1/ex1-home/ex1-home.component';
import { Ex1HeaderComponent } from './Exercise-1/ex1-header/ex1-header.component';
import { Ex1FooterComponent } from './Exercise-1/ex1-footer/ex1-footer.component';
import { Ex1ContentComponent } from './Exercise-1/ex1-content/ex1-content.component';
import { Ex1SidebarComponent } from './Exercise-1/ex1-sidebar/ex1-sidebar.component';
import { Ex2HomeComponent } from './Exercise-2/ex2-home/ex2-home.component';
import { Ex2HeaderComponent } from './Exercise-2/ex2-header/ex2-header.component';
import { Ex2FooterComponent } from './Exercise-2/ex2-footer/ex2-footer.component';
import { Ex2CarouselComponent } from './Exercise-2/ex2-carousel/ex2-carousel.component';
import { Ex2ContentComponent } from './Exercise-2/ex2-content/ex2-content.component';
import { Ex2CardItemComponent } from './Exercise-2/ex2-card-item/ex2-card-item.component';
import { DemoDatabindingComponent } from './Databinding/demo-databinding/demo-databinding.component';
import { FormsModule } from '@angular/forms';
import { ChangeColorCarComponent } from './change-color-car/change-color-car.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { ProductManagementComponent } from './product-management/product-management.component';

@NgModule({
  declarations: [
    AppComponent, 
    Header, 
    Ex1HomeComponent, 
    Ex1HeaderComponent, 
    Ex1FooterComponent, 
    Ex1ContentComponent, 
    Ex1SidebarComponent, 
    Ex2HomeComponent, 
    Ex2HeaderComponent, 
    Ex2FooterComponent, 
    Ex2CarouselComponent, 
    Ex2ContentComponent, 
    Ex2CardItemComponent, 
    DemoDatabindingComponent, ChangeColorCarComponent, DemoDirectiveComponent, ProductManagementComponent,  
  ],
  imports: [
    BrowserModule,  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ConverGenderPipe } from './conver-gender.pipe';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelService } from './hotel.service';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import { DemoValidateComponent } from './demo-validate/demo-validate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports:      [ 
    BrowserModule, FormsModule, HttpClientModule,
    ReactiveFormsModule, 
    RouterModule.forRoot([
      {path: '', component: HotelsComponent},
      {path: 'demo-validate', component: DemoValidateComponent},
      {path: 'detail/:hotelId', component: HotelDetailComponent},
      {path: 'add-hotel', component: HotelFormComponent},
      {path: 'edit-hotel/:id', component: HotelFormComponent}
    ]), NgbModule
  ],
  declarations: [ AppComponent, ConverGenderPipe, HotelsComponent, HotelDetailComponent, HotelFormComponent, DemoValidateComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HotelService]
})
export class AppModule { }

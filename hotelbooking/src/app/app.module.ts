import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/home/login/login.component';
import { BookingComponent } from './component/home/booking/booking.component';
import {  MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './component/home/dashboard/dashboard.component';
import { ManageResourceComponent } from './component/home/manage-resource/manage-resource.component';
import { NavigationComponent } from './component/home/navigation/navigation.component';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { ManageRoomsComponent } from './component/home/manage-resource/manage-rooms/manage-rooms.component';
import { AmenitiesComponent } from './component/home/manage-resource/amenities/amenities.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BookingComponent,
    DashboardComponent,
    ManageResourceComponent,
    NavigationComponent,
    ManageRoomsComponent,
    AmenitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    MatToolbarModule
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    MatListModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class AppModule { }

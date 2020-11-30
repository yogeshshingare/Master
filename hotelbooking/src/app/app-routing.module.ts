import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './component/home/booking/booking.component';
import { DashboardComponent } from './component/home/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/home/login/login.component';
import { ManageResourceComponent } from './component/home/manage-resource/manage-resource.component';
import { ManageRoomsComponent } from './component/home/manage-resource/manage-rooms/manage-rooms.component';
import { AmenitiesComponent } from './component/home/manage-resource/amenities/amenities.component';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'home/login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/booking', component: BookingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'resources', component: ManageResourceComponent },
  { path: 'rooms', component: ManageRoomsComponent },
  { path: 'amenities', component: AmenitiesComponent },
])
],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PagenotfoudComponent } from './components/pagenotfoud/pagenotfoud.component';
import { UserComponent } from './components/users/user/user.component';
import { ListComponent } from './components/users/list/list.component';
import { DetailComponent } from './components/users/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    FormUserComponent,
    CurrencyPipe,
    FilterPipe,
    ContactComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    PagenotfoudComponent,
    UserComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

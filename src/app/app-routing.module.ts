import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoudComponent } from './components/pagenotfoud/pagenotfoud.component';
import { UserComponent } from './components/users/user/user.component';
import { ListComponent } from './components/users/list/list.component';
import { DetailComponent } from './components/users/detail/detail.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'contact-reactive', component: RegisterComponent},
  {path: 'contact-template', component: ContactComponent},
  {path: 'contact-template/:id', component: ContactComponent},
  {path: 'card', component: CardComponent},
  {path: 'users', component: UserComponent, 
    children:[
      {path: 'list', component: ListComponent},
      {path: 'details', component: DetailComponent},
    ]
  },
  {path: 'home', component: HomeComponent},
  {path: '**', component: PagenotfoudComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

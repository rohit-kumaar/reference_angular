import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { FormComponent } from './components/form/form.component';
import { LearningComponent } from './components/learning/learning.component';
import { EventsComponent } from './components/events/events.component';
import { CounterComponent } from './components/counter/counter.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user', component: UserComponent },
  { path: 'form', component: FormComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'events', component: EventsComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

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
import { IfElseComponent } from './components/if-else/if-else.component';
import { ElseIfComponent } from './components/else-if/else-if.component';
import { SwitchCaseComponent } from './components/switch-case/switch-case.component';
import { ForLoopComponent } from './components/for-loop/for-loop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user', component: UserComponent },
  { path: 'form', component: FormComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'events', component: EventsComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'if-else', component: IfElseComponent },
  { path: 'else-if', component: ElseIfComponent },
  { path: 'switch-case', component: SwitchCaseComponent },
  { path: 'for-loop', component: ForLoopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

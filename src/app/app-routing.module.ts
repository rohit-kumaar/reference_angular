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
import { NestedLoopComponent } from './components/nested-loop/nested-loop.component';
import { DynamicStyleComponent } from './components/dynamic-style/dynamic-style.component';
import { MaterialUiComponent } from './components/material-ui/material-ui.component';
import { ShareDataComponent } from './components/share-data/share-data.component';
import { ReusableComponentComponent } from './components/reusable-component/reusable-component.component';
import { ChildToParentComponent } from './components/child-to-parent/child-to-parent.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { TemplateReferenceVariableComponent } from './components/template-reference-variable/template-reference-variable.component';

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
  { path: 'nested-loop', component: NestedLoopComponent },
  { path: 'dynamic-style', component: DynamicStyleComponent },
  { path: 'material-ui', component: MaterialUiComponent },
  { path: 'share-data', component: ShareDataComponent },
  { path: 'reusable-component', component: ReusableComponentComponent },
  { path: 'child-to-parent', component: ChildToParentComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  {
    path: 'template-reference-variable',
    component: TemplateReferenceVariableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

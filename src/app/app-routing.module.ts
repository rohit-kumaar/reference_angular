import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ToggleElementComponent } from './components/toggle-element/toggle-element.component';
import { MaterialUiComponent } from './components/material-ui/material-ui.component';
import { ShareDataComponent } from './components/share-data/share-data.component';
import { ReusableComponentComponent } from './components/reusable-component/reusable-component.component';
import { ChildToParentComponent } from './components/child-to-parent/child-to-parent.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { TemplateReferenceVariableComponent } from './components/template-reference-variable/template-reference-variable.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DirectiveComponentComponent } from './components/directive-component/directive-component.component';
import { RouterComponent } from './components/router/router.component';
import { HomeComponent } from './components/router/home/home.component';
import { AboutComponent } from './components/router/about/about.component';
import { UserComponent } from './components/router/user/user.component';
import { ServiceComponentComponent } from './components/service-component/service-component.component';
import { PostApiMethodComponent } from './components/post-api-method/post-api-method.component';

const routes: Routes = [
  { path: '', component: LearningComponent },
  { path: 'form', component: FormComponent },
  { path: 'events', component: EventsComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'if-else', component: IfElseComponent },
  { path: 'else-if', component: ElseIfComponent },
  { path: 'switch-case', component: SwitchCaseComponent },
  { path: 'for-loop', component: ForLoopComponent },
  { path: 'nested-loop', component: NestedLoopComponent },
  { path: 'dynamic-style', component: DynamicStyleComponent },
  { path: 'toggle-element', component: ToggleElementComponent },
  { path: 'material-ui', component: MaterialUiComponent },
  { path: 'share-data', component: ShareDataComponent },
  { path: 'reusable-component', component: ReusableComponentComponent },
  { path: 'child-to-parent', component: ChildToParentComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  {
    path: 'template-reference-variable',
    component: TemplateReferenceVariableComponent,
  },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'directive-component', component: DirectiveComponentComponent },
  {
    path: 'router',
    component: RouterComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'user/:id', component: UserComponent },
    ],
  },
  { path: 'service', component: ServiceComponentComponent },
  { path: 'post-api-method', component: PostApiMethodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

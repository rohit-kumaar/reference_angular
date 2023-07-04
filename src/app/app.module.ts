import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LearningComponent } from './components/learning/learning.component';
import { AppRoutingModule } from './app-routing.module';
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
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiComponent } from './components/material-ui/material-ui.component';
import { ShareDataComponent } from './components/share-data/share-data.component';
import { ChildComponent } from './components/share-data/child/child.component';
import { ReusableComponentComponent } from './components/reusable-component/reusable-component.component';
import { UsersDetailsComponent } from './components/reusable-component/users-details/users-details.component';
import { ChildToParentComponent } from './components/child-to-parent/child-to-parent.component';
import { ChildComponentComponent } from './components/child-to-parent/child-component/child-component.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { TemplateReferenceVariableComponent } from './components/template-reference-variable/template-reference-variable.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    AboutComponent,
    FormComponent,
    LearningComponent,
    EventsComponent,
    CounterComponent,
    PropertyBindingComponent,
    IfElseComponent,
    ElseIfComponent,
    SwitchCaseComponent,
    ForLoopComponent,
    NestedLoopComponent,
    DynamicStyleComponent,
    ToggleElementComponent,
    MaterialUiComponent,
    ShareDataComponent,
    ChildComponent,
    ReusableComponentComponent,
    UsersDetailsComponent,
    ChildToParentComponent,
    ChildComponentComponent,
    TwoWayBindingComponent,
    TemplateReferenceVariableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    UserAuthModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

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
import { ReactiveFormsModule } from '@angular/forms';
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
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiComponent } from './components/material-ui/material-ui.component';
import { ShareDataComponent } from './components/share-data/share-data.component';
import { ChildComponent } from './components/share-data/child/child.component';
import { ReusableComponentComponent } from './components/reusable-component/reusable-component.component';
import { UsersDetailsComponent } from './components/reusable-component/users-details/users-details.component';

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
    MaterialUiComponent,
    ShareDataComponent,
    ChildComponent,
    ReusableComponentComponent,
    UsersDetailsComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

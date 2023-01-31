import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    UserAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

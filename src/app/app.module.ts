import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user-component/user-component.component';
import { TaskComponent } from './task-component/task-component.component';
import { LoginComponent } from './login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TaskComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

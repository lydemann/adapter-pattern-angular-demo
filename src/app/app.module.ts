import { appRouterModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CoreModule } from './core/core.module';
import { TodoListCompletedComponent } from './todo-list-completed/todo-list-completed.component';
import { SharedModule } from './shared/shared.module';
import { TodoListModule } from '@app/todo-list/todo-list.module';
import { StoreModule } from '@app/store/store.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TodoListCompletedComponent
],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    appRouterModule,
    TodoListModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

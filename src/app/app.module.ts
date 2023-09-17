import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactTableComponent } from './components/contact-table/contact-table.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { ContactContainerComponent } from './components/contact-container/contact-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactTableComponent,
    PageNotFoundComponent,
    ContactViewComponent,
    ContactContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

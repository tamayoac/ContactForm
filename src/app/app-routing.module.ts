import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactContainerComponent } from './components/contact-container/contact-container.component';
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactContainerComponent },
  { path: 'contact/:id', component: ContactViewComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

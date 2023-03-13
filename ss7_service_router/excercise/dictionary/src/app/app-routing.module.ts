import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {DictionayPageComponent} from './dictionay-page/dictionay-page.component';


const routes: Routes = [
  {path: 'iWord/:word', component: DictionaryDetailComponent},
  {path: 'dictionary', component: DictionayPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

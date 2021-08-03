import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionComponent } from './champion/champion.component';
import { LineComponent } from './line/line.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'champions',
    component:ChampionComponent
  },
  {
    path:'lines',
    component:LineComponent
  },
  {
    path:'not-found',
    component:NotFoundComponent
  },
  {
    path: '**', 
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

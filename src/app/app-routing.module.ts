import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagingComponent } from './grids/paging/paging.component';
import { SortingComponent } from './grids/sorting/sorting.component';
import { FilteringComponent } from './grids/filtering/filtering.component';
import { EditingComponent } from './grids/editing/editing.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'grid1', component: PagingComponent },
  { path: 'grid2', component: SortingComponent },
  { path: 'grid3', component: FilteringComponent },
  { path: 'grid4', component: EditingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

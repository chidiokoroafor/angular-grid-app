import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { PagingComponent } from './grids/paging/paging.component';
import { SortingComponent } from './grids/sorting/sorting.component';
import { FilteringComponent } from './grids/filtering/filtering.component';
import { EditingComponent } from './grids/editing/editing.component';
import { IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxDialogModule, IgxFocusModule, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule, IgxRippleModule, IgxSelectModule, IgxSimpleComboModule, IgxSwitchModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagingComponent,
    SortingComponent,
    FilteringComponent,
    EditingComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    IgxAvatarModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxSelectModule,
    IgxSimpleComboModule,
    FormsModule,
    IgxFocusModule,
    IgxDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

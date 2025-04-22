import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { ContentListComponent } from './components/content-list/content-list.component';
import { GenreFilterComponent } from './components/genre-filter/genre-filter.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginModalComponent,
    ContentListComponent,
    GenreFilterComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
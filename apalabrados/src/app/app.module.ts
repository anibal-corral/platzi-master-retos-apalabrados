import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumbersComponent } from './components/numbers/numbers.component';
import { TextsComponent } from './components/texts/texts.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
//opportunity for improvement: Not using compat
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { FormsModule } from '@angular/forms';

import {environment}from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    NumbersComponent,
    TextsComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

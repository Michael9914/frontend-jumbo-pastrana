import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// PrimeNg Modules
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {BlockUIModule} from 'primeng/blockui';
import {PanelModule} from 'primeng/panel';
import {ProgressBarModule} from 'primeng/progressbar';
import {SliderModule} from 'primeng/slider';
import {InputTextModule} from 'primeng/inputtext';


// Components
import { ChampionComponent } from './champion/champion.component';
import { LineComponent } from './line/line.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionComponent,
    LineComponent,
    NotFoundComponent,
    MainComponent,
    AccessDeniedComponent,
    UnderMaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FileUploadModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BlockUIModule,
    PanelModule,
    ProgressBarModule,
    SliderModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

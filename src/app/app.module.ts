import { SharedModule } from './shared/shared.module';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FabricantesListComponent } from './components/fabricantes/fabricantes-list/fabricantes-list.component';
import { FabricanteService} from './services/fabricantes/fabricante.service';
import { TemaListComponent } from './components/temas/tema-list/tema-list.component';
import { TiposListComponent } from './components/tipos-miniatura/tipos-list/tipos-list.component';
import { MiniaturaListComponent } from './components/miniaturas/miniatura-list/miniatura-list.component';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfigComponent } from './config/config.component';

const appRoutes: Routes = [
  {path: 'fabricantes-list', component: FabricantesListComponent},
  {path: 'temas-list', component: TemaListComponent},
  {path: 'tipos-list', component: TiposListComponent},
  {path: 'miniaturas-list', component: MiniaturaListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FabricantesListComponent,
    TemaListComponent,
    TiposListComponent,
    MiniaturaListComponent,
    ConfigComponent,   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [FabricanteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

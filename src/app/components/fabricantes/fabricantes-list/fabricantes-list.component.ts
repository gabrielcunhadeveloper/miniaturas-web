import { AlertModalComponent } from './../../../shared/alert-modal/alert-modal.component';
import { catchError } from 'rxjs/operators';
import { Observable, empty, Subject } from 'rxjs';
import { Fabricante } from './../../../models/fabricante.model';

import { Component, OnInit, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { FabricanteService } from '../../../services/fabricantes/fabricante.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal/';

@Component({
  selector: 'app-fabricantes-list',
  templateUrl: './fabricantes-list.component.html',
  styleUrls: ['./fabricantes-list.component.css']
})
export class FabricantesListComponent implements OnInit, OnDestroy {

  @ViewChild('childModal', { static: false }) childModal: ModalDirective;
  fabricantes$: Observable<Fabricante[]>;
  error$ = new Subject<boolean>();
  fabricanteParaSalvar: Fabricante;
  fabricanteSelecionado: any;
  fabricanteSalvar: Fabricante;
  bsModalRef: BsModalRef;

  constructor(private fabricanteService: FabricanteService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.fabricanteParaSalvar = {} as Fabricante;
    this.listar();
  }

  listar() {
    this.fabricantes$ = this.fabricanteService.listar()
                                              .pipe(
                                                catchError(erro => {
                                                  console.error(erro);
                                                  this.handleError();
                                                  return empty();
                                                })
                                              );
  }

  // criar (frm: FormGroup) {
  //   this.fabricanteService.criar(this.fabricanteParaSalvar)
  //                         .subscribe(resposta => {
      
  //     this.fabricantes$.push(resposta);

  //     frm.reset();
  //   });
  // }

  excluir(fabricante: Fabricante) {
    this.fabricanteService
    .remnover(fabricante.id)
    .subscribe();    
  }
  
  abrirModal(fabricante: Fabricante) {
    this.fabricanteSelecionado = fabricante;
    this.childModal.show();
  }
 
  conrfirmarExcluirModal(): void {
    this.excluir(this.fabricanteSelecionado);
    // this.fabricantes = this.fabricantes.filter(f => f !== this.fabricanteSelecionado);
    this.esconderChildModal();
  }
 
  esconderChildModal(): void {
    this.childModal.hide();
  }

  ngOnDestroy(){
    console.log('Componente fabricantes list destruido')
  }

  handleError() {
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar os fabricantes. Tente novamente mais tarde!';
  }

}

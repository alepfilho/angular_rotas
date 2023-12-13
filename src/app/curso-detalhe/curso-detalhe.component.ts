import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursoService } from '../cursos/curso.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss'],
})
export class CursoDetalheComponent {
  id!: number;
  inscricao!: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.inscricao = this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
    });

    this.curso = this.cursoService.getCurso(this.id);

    if(this.curso == null){
      this.router.navigate(['404']) 
    }
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}

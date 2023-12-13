import { Component } from '@angular/core';
import { CursoService } from 'src/app/cursos/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  cursos!: any[];

  constructor(private cursosService: CursoService){}

  ngOnInit(){
    this.cursos = this.cursosService.getCursos();
  }
}

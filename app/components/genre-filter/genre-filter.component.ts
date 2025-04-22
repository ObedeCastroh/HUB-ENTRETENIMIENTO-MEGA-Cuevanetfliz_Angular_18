import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.scss']
})
export class GenreFilterComponent {
  generoSeleccionado: string = 'todos';
  
  constructor(public contentService: ContentService) {}

  filtrarPorGenero(genero: string): void {
    this.generoSeleccionado = genero;
  }

  getContenidoFiltrado(): any[] {
    return this.contentService.filtrarPorGenero(this.generoSeleccionado);
  }
}
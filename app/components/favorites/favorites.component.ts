import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  constructor(public contentService: ContentService) {}

  verContenido(id: number): void {
    alert(`Próximamente: Integración con reproductor real para el contenido con ID ${id}`);
  }
}
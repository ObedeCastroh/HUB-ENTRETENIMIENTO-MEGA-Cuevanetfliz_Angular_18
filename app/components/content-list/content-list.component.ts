/**
 * content-list.component.ts
 * Componente para mostrar el listado principal de contenido (películas/series)
 * 
 * Funcionalidades principales:
 * - Visualización de tarjetas de contenido
 * - Gestión de favoritos
 * - Reproducción simulada de contenido
 * 
 * Autor: [Tu Nombre]
 * Fecha: [Fecha de implementación]
 * Última actualización: [Fecha]
 * Versión: 1.0
 */
import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';

/**
 * Componente que gestiona la visualización del catálogo de contenido
 * 
 * @example
 * <app-content-list></app-content-list>
 */
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

  /**
   * Constructor con inyección de dependencias
   * @param contentService Servicio que gestiona el catálogo de contenido y favoritos
   */
  constructor(public contentService: ContentService) {}

  /**
   * Simula la reproducción de un contenido
   * @param id Identificador único del contenido a reproducir
   * @todo Implementar integración con reproductor real
   * @example
   * verContenido(5); // Muestra alerta para contenido con ID 5
   */
  verContenido(id: number): void {
    // Implementación temporal hasta conectar con servicio de reproducción
    alert(`Próximamente: Integración con reproductor real para el contenido con ID ${id}`);
  }

  /**
   * Alterna el estado de favorito para un contenido específico
   * @param id Identificador del contenido a marcar/desmarcar como favorito
   * @emits Actualiza la lista de favoritos en ContentService
   */
  toggleFavorito(id: number): void {
    this.contentService.toggleFavorito(id);
  }

  /**
   * Verifica si un contenido está marcado como favorito
   * @param id Identificador del contenido a verificar
   * @returns boolean True si el contenido está en favoritos
   */
  esFavorito(id: number): boolean {
    return this.contentService.getFavoritos().some(item => item.id === id);
  }
}
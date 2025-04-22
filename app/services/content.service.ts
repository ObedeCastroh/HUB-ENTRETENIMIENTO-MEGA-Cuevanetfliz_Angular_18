import { Injectable } from '@angular/core';
import { Content } from '../models/content.model';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private CATALOGO: Content[] = [
    {
      id: 1,
      titulo: "Invincible",
      tipo: "Serie",
      año: 2021,
      genero: "Animación",
      imagen: "assets/images/invincible.jpg",
      favorito: false
    },
    {
      id: 2,
      titulo: "The Mandalorian",
      tipo: "Serie",
      año: 2019,
      genero: "Aventura",
      imagen: "mandalorian.jpg",
      favorito: false
  },
  {
      id: 3,
      titulo: "Dune",
      tipo: "Película",
      año: 2021,
      genero: "Ciencia ficción",
      imagen: "dune.jpg",
      favorito: false
  },
  {
      id: 4,
      titulo: "The Witcher",
      tipo: "Serie",
      año: 2019,
      genero: "Fantasía",
      imagen: "witcher.jpg",
      favorito: false
  },
  {
      id: 5,
      titulo: "Interstellar",
      tipo: "Película",
      año: 2014,
      genero: "Ciencia ficción",
      imagen: "interstellar.jpg",
      favorito: false
  },
  {
      id: 6,
      titulo: "Breaking Bad",
      tipo: "Serie",
      año: 2008,
      genero: "Drama",
      imagen: "breaking-bad.jpg",
      favorito: false
  },
  {
      id: 7,
      titulo: "Arcane",
      tipo: "Serie",
      año: 2021,
      genero: "Animación",
      imagen: "arcane.jpg",
      favorito: false
  },
  {
      id: 8,
      titulo: "The Batman",
      tipo: "Película",
      año: 2022,
      genero: "Acción",
      imagen: "batman.jpg",
      favorito: false
  },
  {
      id: 9,
      titulo: "House of the Dragon",
      tipo: "Serie",
      año: 2022,
      genero: "Fantasía",
      imagen: "house-dragon.jpg",
      favorito: false
  },
  {
      id: 10,
      titulo: "Everything Everywhere All at Once",
      tipo: "Película",
      año: 2022,
      genero: "Ciencia ficción",
      imagen: "everything-everywhere.jpg",
      favorito: false
  },
  {
      id: 11,
      titulo: "Peaky Blinders",
      tipo: "Serie",
      año: 2013,
      genero: "Drama",
      imagen: "peaky-blinders.jpg",
      favorito: false
  },
  {
      id: 12,
      titulo: "Top Gun: Maverick",
      tipo: "Película",
      año: 2022,
      genero: "Acción",
      imagen: "top-gun.jpg",
      favorito: false
  },
  {
      id: 13,
      titulo: "Stranger Things",
      tipo: "Serie",
      año: 2016,
      genero: "Ciencia ficción",
      imagen: "stranger-things.jpg",
      favorito: false
  }
];

  private favoritos: number[] = [];

  getCatalogo(): Content[] {
    return this.CATALOGO;
  }

  getGenerosDisponibles(): string[] {
    return [...new Set(this.CATALOGO.map(item => item.genero))];
  }

  getFavoritos(): Content[] {
    return this.CATALOGO.filter(item => this.favoritos.includes(item.id));
  }

  toggleFavorito(id: number): void {
    const index = this.favoritos.indexOf(id);
    if (index === -1) {
      this.favoritos.push(id);
    } else {
      this.favoritos.splice(index, 1);
    }
  }

  filtrarPorGenero(genero: string): Content[] {
    if (genero === 'todos') {
      return this.CATALOGO;
    }
    return this.CATALOGO.filter(item => item.genero === genero);
  }
}
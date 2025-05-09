import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public authService: AuthService) {}

  mostrarLoginModal(): void {
    this.authService.openLoginModal();
  }

  logout(): void {
    this.authService.logout();
  }

  cambiarVista(vista: string): void {
    this.authService.cambiarVista(vista);
  }
}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly VALID_USER = {
    username: "admin",
    password: "1234"
  };

  private usuarioLogueado = false;
  private loginModalState = new BehaviorSubject<boolean>(false);
  private activeViewSubject = new BehaviorSubject<string>('peliculas-series');

  // Exponer como Observables
  loginModalState$ = this.loginModalState.asObservable();
  activeView$ = this.activeViewSubject.asObservable();

  // Getter para la vista activa
  get activeView(): string {
    return this.activeViewSubject.value;
  }

  // Setter para la vista activa
  set activeView(view: string) {
    this.activeViewSubject.next(view);
  }

  login(username: string, password: string): boolean {
    if (username === this.VALID_USER.username && password === this.VALID_USER.password) {
      this.usuarioLogueado = true;
      this.closeLoginModal();
      return true;
    }
    return false;
  }

  logout(): void {
    this.usuarioLogueado = false;
    this.activeView = 'peliculas-series'; // Resetear a vista por defecto al cerrar sesión
  }

  estaLogueado(): boolean {
    return this.usuarioLogueado;
  }

  // Métodos para manejar el estado del modal
  openLoginModal(): void {
    this.loginModalState.next(true);
  }

  closeLoginModal(): void {
    this.loginModalState.next(false);
  }

  getLoginModalState(): boolean {
    return this.loginModalState.value;
  }

  // Método para cambiar vista
  cambiarVista(view: string): void {
    this.activeView = view;
  }
}
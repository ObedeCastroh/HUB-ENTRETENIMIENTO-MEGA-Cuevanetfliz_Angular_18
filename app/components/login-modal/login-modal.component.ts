import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  showError: boolean = false;
  showSuccess: boolean = false;

  constructor(private authService: AuthService) {}

  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {
      this.showSuccess = true;
      this.showError = false;
      setTimeout(() => {
        this.authService.closeLoginModal();
        this.resetForm();
      }, 1000);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
      this.showError = true;
      this.showSuccess = false;
    }
  }

  onClose(): void {
    this.authService.closeLoginModal();
    this.resetForm();
  }

  private resetForm(): void {
    this.username = '';
    this.password = '';
    this.showError = false;
    this.showSuccess = false;
  }
}
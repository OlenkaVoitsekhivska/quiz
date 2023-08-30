import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType } from 'src/app/core/models/button-type';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  logoutBtnLabel = 'Log out';
  logoutBtnType = ButtonType.BUTTON;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  handleLogout() {
    this.authService
      .signOut()
      .then(() => this.router.navigate(['auth', 'login']));
  }
}

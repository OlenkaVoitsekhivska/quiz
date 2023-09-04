//angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

//app
import { ButtonType } from 'src/app/core/models/button-type';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public logoutBtnLabel = 'log out';

  public logoutBtnType: ButtonType = ButtonType.BUTTON;

  public singleOptionText = 'Single option translation';

  public matchText = 'Matching challenge';

  public dragDropCasesText = 'Drag and drop caseforms';

  public enterAnswerText = 'Enter answer';

  constructor(private authService: AuthService, private router: Router) {}

  public logout() {
    this.authService
      .signOut()
      .then(() => this.router.navigate(['auth', 'login']));
  }
}

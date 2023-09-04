import { Component } from '@angular/core';
import { ButtonType } from 'src/app/core/models/button-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public logoutBtnLabel = 'Log out';

  public challengeLinkText = 'Go to challenges';

  public logoutBtnType = ButtonType.BUTTON;
}

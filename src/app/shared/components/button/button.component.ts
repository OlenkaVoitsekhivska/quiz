import { Component, Input } from '@angular/core';
import { ButtonType } from 'src/app/core/models/button-type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() type: ButtonType = ButtonType.BUTTON;
  @Input() loading: boolean = false;
}

import { Component, Input } from '@angular/core';
import { ButtonType } from 'src/app/core/models/button-type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() public label!: string;
  @Input() public type: ButtonType = ButtonType.BUTTON;
  @Input() public loading = false;
  @Input() public disabled = false;
}

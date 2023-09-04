import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputType } from 'src/app/core/models/input-type';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() public type: InputType = InputType.TEXT;
  @Input() public label!: string;

  public value!: boolean | string | number;

  public onChange!: (value: any) => void;
  public onTouched!: (value: any) => void;

  public get isTypePassword(): boolean {
    return this.type === InputType.PASSWORD;
  }

  writeValue(val: any): void {
    this.value = val;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(): void {}

  setDisabledState?(): void {}

  public handleInput(event: Event) {
    const targetEl = event.target as HTMLInputElement;
    const { value } = targetEl;

    this.value = value;
    this.onChange(this.value);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() ipEmitter = new EventEmitter<string>();

  testForm: FormGroup = this.fb.group({
    ip: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(
          '(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)'
        ),
      ]),
    ],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ip: string = '';
  submitIp() {
    console.log(this.ip);
    if (this.testForm.valid) {
      this.ipEmitter.emit(this.ip);
    } else {
      alert('Please enter a valid IP address');
    }
  }
}

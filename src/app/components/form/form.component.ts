import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
@Input() ip: string | undefined;
@Input() location: string | undefined;
@Input() timezone: string | undefined;
@Input() isp: string | undefined;
}

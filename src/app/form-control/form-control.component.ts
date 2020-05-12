import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() icon: string;
  constructor() {}
  state(){
    const { touched, invalid } = this.control;
    return touched && invalid;
  }
  hasErrors(){
    return this.control.errors ? true : false;
  }
  ngOnInit(): void {
  }

}

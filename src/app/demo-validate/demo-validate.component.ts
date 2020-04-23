import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-demo-validate',
  templateUrl: './demo-validate.component.html',
  styleUrls: ['./demo-validate.component.css']
})
export class DemoValidateComponent implements OnInit {

  constructor() { }

  portfolioForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    avatarUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(/\.(gif|jpe?g|tiff|png|webp|bmp)$/i)
    ]),
    address: new FormControl(''),
    websiteUrl: new FormControl('')
  });
  get name() { return this.portfolioForm.get('name'); }
  get avatarUrl() { return this.portfolioForm.get('avatarUrl'); }

  ngOnInit(): void {
  }

}

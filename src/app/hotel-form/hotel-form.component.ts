import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelService } from '../hotel.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {urlValidator} from '../validators/custom.validators';
@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.css']
})
export class HotelFormComponent implements OnInit {

  hotelForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    logo: new FormControl('', [
      Validators.required, 
      Validators.pattern(/\.(gif|jpe?g|tiff|png|webp|bmp)$/i)
    ]),
    address: new FormControl(''),
    country: new FormControl(''),
    website: new FormControl('', [
      Validators.required,
      urlValidator
    ])
  });
  get name() { return this.hotelForm.get('name'); }
  get logo() { return this.hotelForm.get('logo'); }
  get website() { return this.hotelForm.get('website'); }


  constructor(
    private hotelService: HotelService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let hotelId = params.get('id');
      this.hotelService.getHotelById(hotelId).subscribe(data => {
        this.hotelForm.setValue(data);
      })
    })
  }

  saveHotel(){
    if(this.hotelForm.invalid){
      return false;
    }
    if(this.hotelForm.value.id == null){
      // thêm mới
      this.hotelService.addNewHotel(this.hotelForm.value).subscribe(data => {
        console.log(data);
        this.route.navigate(['']);
      })
    }else{
      // cập nhật
      this.hotelService.updateHotel(this.hotelForm.value).subscribe(data => {
        console.log(data);
        this.route.navigate(['']);
      })
    }
  }

}
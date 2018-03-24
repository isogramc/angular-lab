import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';

import {ReactiveFormsModule, Validator, ValidatorFn, FormsModule, FormGroup, FormControl, Validators, NG_VALIDATORS} from "@angular/forms";

import {Router} from "@angular/router";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit{

  custForm: FormGroup;
  products = ['suitcase', 'boots', 'headphones', 'magazine'];
  submitted = false;

  model = new Customer(this.getRandomInt(1, 30000), '','','','');

  submitForm (event) {
    var test = JSON.stringify(this.model);
    document.getElementById("modelv").innerText += test;
    document.getElementById("modelvi").style.display = "block";
    document.getElementById("submit").style.display = "none";
    console.log(test);
  }

  getRandomInt(min, max){
    return (Math.floor(Math.random() * (max - min + 1) + min))
  }

  ngOnInit(){

  }

  constructor(private router: Router){

  }

}

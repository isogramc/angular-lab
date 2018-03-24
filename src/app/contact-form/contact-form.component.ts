import { Component } from '@angular/core';

import { Customer } from '../customer';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  products = ['suitcase', 'boots', 'headphones', 'magazine'];
  submitted = false;

  model = new Customer(10, 'Gerald','email@email.com', this.products[0], 'I would like to know more about ');

  submitForm (event) {
    //event.preventDefault();
    var test = JSON.stringify(this.model);
    document.getElementById("modelv").innerText += test;
    console.log(test);
    alert(test);
  }
}

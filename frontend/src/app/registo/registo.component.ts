import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent {
  registrationForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
}
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  ngOnInit() {
    firebase.initializeApp({
         apiKey: "AIzaSyAPOrOZujp890aZMXliXbK8QK9M3a-VOXM",
         authDomain: "angulardemo-cd4a2.firebaseapp.com"});
  }
}

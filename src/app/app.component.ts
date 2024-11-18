import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { title } from 'process';
import { FaceSnap } from './models/face-snap.model';
import { FaceSnapdsi2Component } from "./face-snapdsi2/face-snapdsi2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapdsi2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  mySnap!:FaceSnap;
  ngOnInit(){
  this.mySnap=new FaceSnap(
    "Archiblad",
    "mon meilleur ami depuis tout petit!",
   "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
  new Date(),
  0
  );
}
}
  
    
import { Component } from '@angular/core';

@Component({
  selector: 'app-face-snapdsi2',
  standalone: true,
  imports: [],
  templateUrl: './face-snapdsi2.component.html',
  styleUrl: './face-snapdsi2.component.css'
})
export class FaceSnapdsi2Component {
[x: string]: any;
title!:string;
description!:string;
createdDate!:Date;
snaps!:number;
img!:string;
}

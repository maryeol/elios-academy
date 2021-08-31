import { Component, OnInit } from '@angular/core';
import {AnimationOptions} from "ngx-lottie";

@Component({
  selector: 'app-welcome-dash',
  templateUrl: './welcome-dash.component.html',
  styleUrls: ['./welcome-dash.component.css']
})
export class WelcomeDashComponent implements OnInit {

  constructor() { }
  options: AnimationOptions = {
    path: 'assets/anime/animationLottie.json'
  };
  ngOnInit(): void {
  }

}

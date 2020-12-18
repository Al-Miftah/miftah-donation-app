import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-view',
  templateUrl: './loader-view.component.html',
  styleUrls: ['./loader-view.component.scss'],
})
export class LoaderViewComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  public lottieConfig: Object;
  constructor() {
    this.lottieConfig = {
      path: 'assets/json/done.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true,
    };
  }

  ngOnInit() {}
}

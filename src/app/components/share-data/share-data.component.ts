import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-data',
  templateUrl: './share-data.component.html',
  styleUrls: ['./share-data.component.scss'],
})
export class ShareDataComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  number: number = 10;

  updateSharedNumber() {
    this.number = Math.floor(Math.random() * 10);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss'],
})
export class RouterComponent implements OnInit {
  userId: any = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');

    console.log(this.route.snapshot.paramMap.get('id'));

    console.log(this.route);
    

    
  }
}

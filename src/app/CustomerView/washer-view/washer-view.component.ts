import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-washer-view',
  templateUrl: './washer-view.component.html',
  styleUrls: ['./washer-view.component.css']
})
export class WasherViewComponent implements OnInit {
  Name=localStorage.getItem('name');
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logoff()
  {
    localStorage.clear();
    this.router.navigate(['login']);
  }

}

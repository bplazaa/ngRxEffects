import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-head',
  templateUrl: './nav-head.component.html'
})
export class NavHeadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  irUsuario( id : string){
    if(!id){
      return;
    }
    this.router.navigate(['/usuario',id]);
  }
}

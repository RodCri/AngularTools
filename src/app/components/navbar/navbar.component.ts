import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  constructor(private readonly router: Router){

  }

  ngOnInit(): void {
    
  }

  goToReactive(): void{
    this.router.navigate(
      ['contact-reactive'],
      {queryParams:
        {name: 'Cristian'}
      }
    );
  }

  goToTemplate():void{
    this.router.navigate(['contact-template','5554']);
  }

}

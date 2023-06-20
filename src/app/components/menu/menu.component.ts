import { Component } from '@angular/core';
import { MenuServiceService } from 'src/app/services/menu-service.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  constructor(private service:MenuServiceService){}
  menuItems:any;
  ngOnInit():void{
    this.menuItems = this.service.foodDetails;
  }

}

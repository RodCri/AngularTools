import { Component } from '@angular/core';
import { SharingService } from './services/sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTools';

  // public se puede utilizar el cualquier parte
  // private unicamente se utiliza dentro del mismo scope
  // sin nada solo se utiliza dentro del bloque sin necesidad del this
  constructor(sharingService: SharingService){
    sharingService.sharingObservableData = {name: 'Rodriguez'}
  }
}

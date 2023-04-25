import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/shared/header/header.component';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HeaderComponent]
})
export class AlertPage implements OnInit {

  handlerMessage = '';
  roleMessage = '';

  constructor() { }

  ngOnInit() {
  }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => { this.handlerMessage = 'Alert canceled'; }
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => { this.handlerMessage = 'Alert confirmed'; }
    }
  ];

  public alertButtons2 = [
    {
      text: 'Cancel 2',
      role: 'cancel',
    },
    {
      text: 'OK 2',
      role: 'confirm',
    }
  ];

  setResult(ev:any) {
    this.roleMessage = `Dismissed with role: ${ev.detail.role}`;
  }


}

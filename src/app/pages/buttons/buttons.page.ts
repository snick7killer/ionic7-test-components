import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ButtonsPage implements OnInit {

  favorito: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.favorito = !this.favorito;
  }

}

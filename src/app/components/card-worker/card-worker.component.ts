import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonIcon, IonButton } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { star, starOutline } from 'ionicons/icons';

@Component({
  selector: 'app-card-worker',
  standalone: true,
  templateUrl: './card-worker.component.html',
  styleUrls: ['./card-worker.component.scss'],
  imports: [RouterLink, IonButton, IonIcon, IonCol, IonRow, IonGrid, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, ]
})
export class CardWorkerComponent {

  constructor() { 
    addIcons({star});
  }

}

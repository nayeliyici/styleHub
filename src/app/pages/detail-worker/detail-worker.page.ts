import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonItem, IonLabel, IonList, IonAvatar, IonImg, IonButtons, IonModal, IonInput, IonDatetime } from '@ionic/angular/standalone';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { addIcons } from 'ionicons';
import { arrowBack, star } from 'ionicons/icons';

@Component({
  selector: 'app-detail-worker',
  templateUrl: './detail-worker.page.html',
  styleUrls: ['./detail-worker.page.scss'],
  standalone: true,
  imports: [IonDatetime, IonInput, IonModal, IonButtons, IonImg, IonAvatar, IonList, IonLabel, IonItem, IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid, IonCard, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ToolbarComponent]
})
export class DetailWorkerPage {
  @ViewChild(IonModal)
  modal!: IonModal;
  items = Array(10).fill(0);

  constructor() {
    addIcons({star, arrowBack});
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
}

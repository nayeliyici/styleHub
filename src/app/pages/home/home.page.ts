import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonSegment, IonSegmentButton, IonLabel } from '@ionic/angular/standalone';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { CardWorkerComponent } from "../../components/card-worker/card-worker.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonSegmentButton, IonSegment, IonButton, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ToolbarComponent, CardWorkerComponent]
})
export class HomePage {
  workers = Array(10).fill(0);
  constructor() { }
}

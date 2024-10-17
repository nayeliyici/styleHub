import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonLabel, IonCardHeader, IonItem, IonInput, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { CardWorkerComponent } from "../../components/card-worker/card-worker.component";
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCardContent, IonInput, IonItem, IonCardHeader, IonLabel, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ToolbarComponent, CardWorkerComponent]
})
export class AdministrationPage {

  constructor() { 
    addIcons({closeCircleOutline,checkmarkCircleOutline});
  }
}

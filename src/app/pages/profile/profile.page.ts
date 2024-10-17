import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonItem, IonLabel, IonButton, IonInput, IonAccordion, IonAccordionGroup } from '@ionic/angular/standalone';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { addIcons } from 'ionicons';
import { pencil, trash, create } from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonAccordionGroup, IonAccordion, IonInput, IonButton, IonLabel, IonItem, IonIcon, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ToolbarComponent]
})
export class ProfilePage {
  items = Array(10).fill(0);
  isEditing: any;

  constructor() { 
    addIcons({create,trash,pencil});
  }

  editService() {
    this.isEditing = true;
    console.log('entr')
  }

  saveService() {
    this.isEditing = false;
  }
}

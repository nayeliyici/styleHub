import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonDatetime, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/angular/standalone';
import { ToolbarComponent } from "../../components/toolbar/toolbar.component";
import { addIcons } from 'ionicons';
import { checkmark, checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
  standalone: true,
  imports: [IonIcon, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonDatetime, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ToolbarComponent]
})
export class AppointmentPage implements OnInit {
  showCard = false;       
  selectedDate: string = '';
  isAdmin: any;

  constructor() {
    addIcons({closeCircleOutline,checkmarkCircleOutline});
  }

  ngOnInit(): void {
    this.isAdmin = localStorage.getItem('isAdmin');
    console.log(this.isAdmin);
  }

  highlightedDates = (isoString: any) => {
    const date = new Date(isoString);
    const utcDay = date.getUTCDate();
    if (utcDay % 10 === 0) {
      return {
        textColor: '#fff',
        backgroundColor: '#c063c6',
      };
    }
    if (utcDay % 18 === 0) {
      return {
        textColor: '#fff',
        backgroundColor: '#ba3d39',
      };
    }
    if (utcDay % 5 === 0) {
      return {
        textColor: '#fff',
        backgroundColor: '#3943ba',
      };
    }
    return undefined;
  };

  onDateSelected(selectedIsoString: string | string[] | null | undefined) {
    if (typeof selectedIsoString === 'string') {
      const date = new Date(selectedIsoString);
      const utcDay = date.getUTCDate();
      const options: Intl.DateTimeFormatOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = new Intl.DateTimeFormat('es-ES', options).format(date);
      if (utcDay % 9 === 0 || utcDay % 5 === 0) {
        this.showCard = true;
        this.selectedDate = formattedDate;
      } else {
        this.showCard = false;
      }
    } else {
      this.showCard = false;
    }
  }
  
}

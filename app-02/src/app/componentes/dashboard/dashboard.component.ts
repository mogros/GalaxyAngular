import { Component, OnInit } from '@angular/core';
import { IPersona } from '../../modelos/persona.interface';
import { PersonaService } from '../../servicios/persona.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  visiblePersona: boolean = false;
  personas: IPersona[] = [];
  errorEndPoint: boolean = false;

  constructor(private personaService: PersonaService){

  }
  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(persona => {
      console.log(persona);
      this.personas = persona;
      this.visiblePersona = true;
    }, error => {
      console.log('Error '+error);
      this.visiblePersona = true;
      this.errorEndPoint = true;
    })
  }

}

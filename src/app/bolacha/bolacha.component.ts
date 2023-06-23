import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bolacha',
  templateUrl: './bolacha.component.html',
  styleUrls: ['./bolacha.component.css']
})
export class BolachaComponent {
  @Input() nome!: string;
  @Input() imagem!: string;
  @Input() quantidade!: string;

  constructor() {};
}

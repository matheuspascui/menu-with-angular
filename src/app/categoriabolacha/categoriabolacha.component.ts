import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categoriabolacha',
  templateUrl: './categoriabolacha.component.html',
  styleUrls: ['./categoriabolacha.component.css']
})
export class CategoriabolachaComponent {
  @Input() title!: string;

  constructor() {};
}

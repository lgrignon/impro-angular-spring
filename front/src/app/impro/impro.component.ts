import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ImproService } from '../impro.service';

@Component({
  selector: 'app-impro',
  templateUrl: './impro.component.html',
  styleUrls: ['./impro.component.scss']
})
export class ImproComponent {

  value: Observable<string>;

  constructor(
    service: ImproService
  ) {
    this.value = service.getImproText();
  }

}

import { Component} from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  template: ` <div class="overlay" *ngIf="isLoading$ | async">
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
              </div>`,
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent {
  isLoading$ = this.loadingSvc.isLoading$;

  constructor(private loadingSvc:LoadingService) { }

}

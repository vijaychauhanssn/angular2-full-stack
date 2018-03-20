import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewChecked {

  constructor(public auth: AuthService,
              private changeDetector: ChangeDetectorRef) { }

  // This fixes:  https://github.com/vijaychauhanssn/angular2-full-stack/issues/105
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

}

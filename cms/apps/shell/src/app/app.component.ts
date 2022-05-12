import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public openedNewFamilyMember = false;
  public openNewFamilyMember() {
    this.openedNewFamilyMember = true;
  }
}

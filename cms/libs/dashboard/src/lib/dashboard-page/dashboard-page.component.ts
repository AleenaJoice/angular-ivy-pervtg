import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'cms-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent implements OnInit {
  constructor() {}
  public isNewEmployeeOpened = false;
  public openNewEmployee() {
    this.isNewEmployeeOpened = true;
  }
  public employees: Array<any> = [
    { name: 'Aleena', id: 1, dob: '14-10-1998' },
    { name: 'Rose', id: 2, dob: '24-12-1999' },
    { name: 'Sikha', id: 3, dob: '19-03-1998' },
    { name: 'Arun', id: 4, dob: '12-12-1999' },
    { name: 'Pranav', id: 5, dob: '12-01-1999' },
  ];

  ngOnInit(): void {}
}

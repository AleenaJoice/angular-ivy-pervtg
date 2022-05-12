import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeModule} from '@cms/employee'
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { GridModule } from '@progress/kendo-angular-grid';
import { LabelModule } from "@progress/kendo-angular-label";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";

@NgModule({
  imports: [CommonModule,
    EmployeeModule,
    DialogModule,
    ButtonsModule,
    GridModule,
    LabelModule,
    DateInputsModule,
    DropDownListModule,
    DropDownsModule],
  declarations: [DashboardPageComponent],
  exports:[DashboardPageComponent]
})
export class DashboardModule {}

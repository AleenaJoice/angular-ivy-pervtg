import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { GridModule } from '@progress/kendo-angular-grid';
import { LabelModule } from "@progress/kendo-angular-label";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";

@NgModule({
  imports: [CommonModule,
    DialogModule,
    ButtonsModule,
    GridModule,
    LabelModule,
    DateInputsModule,
    DropDownListModule,
    DropDownsModule
  ],
  declarations: [EmployeeDetailsComponent],
  exports:[EmployeeDetailsComponent]
})
export class EmployeeModule {}

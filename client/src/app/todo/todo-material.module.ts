import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';

const modules = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatTooltipModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class TodoMaterialModule {}

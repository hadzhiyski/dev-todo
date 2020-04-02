import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

const modules = [MatCardModule, MatCheckboxModule];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class TodoMaterialModule {}

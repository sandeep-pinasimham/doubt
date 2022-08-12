import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { RequestListComponent } from './components/request-list/request-list.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RequestListComponent, CardComponent],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [RequestListComponent, CardComponent],
})
export class SharedModule {}

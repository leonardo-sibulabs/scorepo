import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScoSharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [ScoSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent],
})
export class MetricsModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurentsPage } from './restaurents.page';

const routes: Routes = [
	{
		path: ':id',
		component: RestaurentsPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RestaurentsPageRoutingModule {}

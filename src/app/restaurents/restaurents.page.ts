import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSearchbar } from '@ionic/angular';

import { MenuCardService } from '../services/menu-card/menu-card.service';

@Component({
	selector: 'app-restaurents',
	templateUrl: './restaurents.page.html',
	styleUrls: ['./restaurents.page.scss'],
})
export class RestaurentsPage implements OnInit {
	@ViewChild('searchbarid') searchbar;

	menuItems: any = {};
	searchBar = { activated: false, searchString: '' };
	options = {
		centeredSlides: true,
		slidesPerView: 1,
		spaceBetween: -70,
	};

	constructor(private menuCard: MenuCardService, private route: ActivatedRoute) {}

	ngOnInit() {
		var rid = this.route.snapshot.paramMap.get('id');
		this.menuItems = this.menuCard.getRestarentDetails(rid);
	}

	searchBarIcon() {
		if (this.searchBar.activated) {
			this.searchBar.searchString = '';
			this.searchBar.activated = false;
		} else {
			this.searchBar.activated = true;
			setTimeout(() => {
				this.searchbar.setFocus();
			}, 200);
		}
	}

	getFoodItems(cat) {
		return this.menuItems.items[cat].filter(item => item.name.includes(this.searchBar.searchString));
	}
}

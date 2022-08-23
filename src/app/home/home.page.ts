import { Component } from '@angular/core';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { MenuCardService } from '../services/menu-card/menu-card.service';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	scanSub: any;
	constructor(
		private qrScanner: QRScanner,
		private dialogs: Dialogs,
		private menuCard: MenuCardService,
		private router: Router,
		private platform: Platform,
	) {
		this.platform.backButton.subscribeWithPriority(0, () => {
			this.bodyOpacity('1');
			this.scanSub.unsubscribe();
		});
	}

	startScanning() {
		this.qrScanner
			.prepare()
			.then((status: QRScannerStatus) => {
				if (status.authorized) {
					// for camera permission
					this.qrScanner.show();
					this.bodyOpacity('0');
					this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
						this.bodyOpacity('1');
						this.qrScanner.hide(); // hide camera preview
						this.scanSub.unsubscribe(); // stop scanning
						this.openRestaurent(text);
					});
				} else if (status.denied) {
					// permenantly access removed
					this.dialogs.alert('Need camera permissions for QR scanning');
					this.qrScanner.openSettings();
				} else {
					this.dialogs.alert('Need camera permissions for QR scanning');
					// permission was denied, but not permanently. You can ask for permission again at a later time.
				}
			})
			.catch((e: any) => console.log('Error is', e));
	}

	openRestaurent(resid) {
		var rid_regexp = new RegExp('[0-9a-f]{32}');
		if (rid_regexp.test(resid)) {
			var temp = this.menuCard.getRestarentDetails(resid);
			if (temp.categories.length) {
				this.router.navigate(['restaurents', resid]);
			} else {
				this.dialogs.alert('Restaurent not found');
			}
		} else {
			this.dialogs.alert('Invalid Restarent ID');
		}
	}

	bodyOpacity(opacity: string) {
		document.getElementsByTagName('body')[0].style.opacity = opacity;
	}
}

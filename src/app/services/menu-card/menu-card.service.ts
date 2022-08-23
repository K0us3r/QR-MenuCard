import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class MenuCardService {
	constructor() {}

	getRestarentDetails(rid) {
		var data = { name: 'Restarent Menu', categories: [], items: {} };
		var temp, details, cat, index;
		temp = this.restaurents.filter(item => item.id === rid);
		if (!temp.length) return data;
		details = temp[0];
		data.name = details.name;
		for (cat in details.items) {
			temp = details.items[cat];
			data.categories.push(cat);
			data.items[cat] = [];
			for (index of temp) {
				if (index >= this.menu_items[cat].length) continue;
				// console.log(cat, index, );
				data.items[cat].push(this.menu_items[cat][index]);
			}
		}
		return data;
	}

	restaurents = [
		{
			id: 'cf598eff8659ececdfd451b8e5903e04',
			name: 'Sree Vishnu Restaurent',
			items: {
				'Family Packs': [3, 10, 1, 9, 4, 0, 5],
				'Non Veg - Starters': [7, 14, 4, 11, 25, 21, 6, 28, 3, 2, 16, 12, 0],
				'Veg - Starters': [12, 18, 4, 1, 16, 9, 11, 2, 13, 17, 6, 3, 0, 8],
				'Non Veg - Biryanis': [0, 2, 3, 16, 7, 1, 4, 9, 6, 14, 12, 5],
				'Veg - Biryanis': [5, 6, 4, 3, 1],
				'Non Veg - Snacks': [9, 5, 1, 8, 7, 4, 0, 6],
				'Veg - Snacks': [2, 1, 3, 5, 0],
				'Beverages & Milk Shakes': [9, 2, 3, 15, 16, 18, 5, 4, 19, 6, 7, 17, 8],
			},
		},
		{
			id: '7af290c0bab306e939b17a86590a37f6',
			name: 'Madhurima Restaurent',
			items: {
				'Non Veg - Starters': [23, 31, 2, 30, 15, 22, 6, 29, 26, 7, 12, 24],
				'Veg - Starters': [0, 1, 6, 9, 11, 2, 10, 17, 18, 12, 14, 3],
				'Family Packs': [1, 2, 5, 8, 0, 9, 3, 10],
				'Non Veg - Biryanis': [12, 8, 13, 4, 0, 15, 3, 6, 7, 2, 9, 5],
				'Veg - Biryanis': [1, 5, 3, 0, 6],
				'Non Veg - Snacks': [3, 8, 6, 7, 9, 0, 1, 10],
				'Veg - Snacks': [3, 2, 1, 4, 5],
				'Beverages & Milk Shakes': [8, 10, 1, 5, 19, 0, 21, 7, 17, 18, 11, 6, 15, 14],
			},
		},
		{
			id: 'f7e92fe180d6ab7814e109271cfd7fba',
			name: 'Sunshine Restaurent',
			items: {
				'Family Packs': [4, 5, 9, 10, 3, 8, 7, 6],
				'Non Veg - Biryanis': [13, 14, 7, 16, 8, 11, 12, 15, 0, 5, 1, 4],
				'Veg - Biryanis': [4, 2, 1, 6, 0],
				'Non Veg - Starters': [8, 22, 2, 15, 28, 30, 12, 34, 7, 3, 21, 11, 26, 17],
				'Veg - Starters': [14, 7, 13, 16, 8, 4, 9, 1, 17, 18, 6, 5, 0],
				'Non Veg - Snacks': [10, 4, 3, 9, 6, 1, 5, 0],
				'Veg - Snacks': [5, 1, 4, 0, 3],
				'Beverages & Milk Shakes': [2, 7, 5, 0, 10, 16, 8, 17, 9, 20, 14, 18, 11],
			},
		},
		{
			id: '7b10e7528aa7db56bc385ccfbfe0189a',
			name: 'Spice & Rice Restaurent',
			items: {
				'Non Veg - Snacks': [6, 1, 3, 9, 0, 7, 4, 8],
				'Veg - Snacks': [5, 3, 0, 4, 2],
				'Beverages & Milk Shakes': [15, 1, 12, 19, 14, 18, 7, 13, 6, 20, 9, 5, 10],
				'Non Veg - Starters': [27, 4, 8, 17, 7, 21, 12, 29, 9, 25, 3, 28, 13, 0, 22],
				'Veg - Starters': [0, 15, 2, 16, 14, 4, 12, 10, 9, 17, 7, 18, 6, 1],
				'Non Veg - Biryanis': [16, 12, 1, 4, 9, 13, 15, 2, 3, 0, 8, 11],
				'Veg - Biryanis': [0, 4, 1, 3, 6],
				'Family Packs': [8, 3, 0, 10, 6, 1, 7, 2],
			},
		},
	];

	menu_items = {
		'Family Packs': [
			{
				name: 'prawns fry biryani family pack',
				link: 'https://i.ibb.co/QvT7q3v/prawns-fry-biryani-family-pack.jpg',
				rating: 5,
			},
			{
				name: 'Mutton Special Biryani Family Pack',
				link: 'https://i.ibb.co/wMpwqFD/Mutton-Special-Biryani-Family-Pack.jpg',
				rating: 4,
			},
			{
				name: 'Mutton Fry Biryani Family Pack',
				link: 'https://i.ibb.co/sj9Df9S/Mutton-Fry-Biryani-Family-Pack.jpg',
				rating: 4.5,
			},
			{
				name: 'Mutton Dum Biryani Family Pack',
				link: 'https://i.ibb.co/5TCYJfz/Mutton-Dum-Biryani-Family-Pack.jpg',
				rating: 3,
			},
			{
				name: 'Mutton 65 Biryani Family Pack',
				link: 'https://i.ibb.co/3CJhGZL/Mutton-65-Biryani-Family-Pack.jpg',
				rating: 4.5,
			},
			{
				name: 'Fish Biryani Family Pack',
				link: 'https://i.ibb.co/DzqkP10/Fish-Biryani-Family-Pack.jpg',
				rating: 4.5,
			},
			{
				name: 'Chicken Wings Biryani Family Pack',
				link: 'https://i.ibb.co/wwpgTxZ/Chicken-Wings-Biryani-Family-Pack.jpg',
				rating: 4,
			},
			{
				name: 'Chicken Special Biryani Family Pack',
				link: 'https://i.ibb.co/6gLTfwh/Chicken-Special-Biryani-Family-Pack.jpg',
				rating: 3.5,
			},
			{
				name: 'chicken joint biryani family pack',
				link: 'https://i.ibb.co/rGKccd8/chicken-joint-biryani-family-pack.png',
				rating: 3.5,
			},
			{
				name: 'Chicken Fry Biryani Family Pack',
				link: 'https://i.ibb.co/XFqrTp7/Chicken-Fry-Biryani-Family-Pack.jpg',
				rating: 4.5,
			},
			{
				name: 'Chicken Dum Biryani Family Pack',
				link: 'https://i.ibb.co/W6zYBNS/Chicken-Dum-Biryani-Family-Pack.jpg',
				rating: 5,
			},
		],
		'Non Veg - Starters': [
			{
				name: 'Tandoori Chicken Roast',
				link: 'https://i.ibb.co/Xt7q1C8/Tandoori-Chicken-Roast.png',
				rating: 3,
			},
			{
				name: 'Tandoori Chicken',
				link: 'https://i.ibb.co/PwskrWv/Tandoori-Chicken.png',
				rating: 4,
			},
			{
				name: 'Prawns Manchuria',
				link: 'https://i.ibb.co/tKzfMRT/Prawns-Manchuria.png',
				rating: 3,
			},
			{
				name: 'Pepper Chicken',
				link: 'https://i.ibb.co/QrXRs7G/Pepper-Chicken.png',
				rating: 5,
			},
			{
				name: 'Oil Free Chicken',
				link: 'https://i.ibb.co/M6yCZq0/Oil-Free-Chicken.png',
				rating: 4.5,
			},
			{
				name: 'Mutton Rolls',
				link: 'https://i.ibb.co/GRpK3Pb/Mutton-Rolls.png',
				rating: 3.5,
			},
			{
				name: 'Mutton Ghee Roast',
				link: 'https://i.ibb.co/Htf0t0J/Mutton-Ghee-Roast.png',
				rating: 5,
			},
			{
				name: 'Mutton Fry',
				link: 'https://i.ibb.co/hVKNjhw/Mutton-Fry.png',
				rating: 3.5,
			},
			{
				name: 'Loose Prawns',
				link: 'https://i.ibb.co/mX2DnVN/Loose-Prawns.png',
				rating: 5,
			},
			{
				name: 'Lemon Chicken',
				link: 'https://i.ibb.co/pn99Yv5/Lemon-Chicken.png',
				rating: 5,
			},
			{
				name: 'Fish Fry',
				link: 'https://i.ibb.co/xMMTpj0/Fish-Fry.png',
				rating: 3.5,
			},
			{
				name: 'egg spring rolls',
				link: 'https://i.ibb.co/SxYhGZz/egg-spring-rolls.png',
				rating: 3.5,
			},
			{
				name: 'Dry Roasted Chicken',
				link: 'https://i.ibb.co/WxQYX1K/Dry-Roasted-Chicken.png',
				rating: 3,
			},
			{
				name: 'Dry Chicken Roast',
				link: 'https://i.ibb.co/4MjKDyL/Dry-Chicken-Roast.png',
				rating: 5,
			},
			{
				name: 'Dry Chicken',
				link: 'https://i.ibb.co/nL59xvQ/Dry-Chicken.png',
				rating: 5,
			},
			{
				name: 'Dragon Chicken',
				link: 'https://i.ibb.co/tC1rVpV/Dragon-Chicken.png',
				rating: 3.5,
			},
			{
				name: 'Chinese Chilli Chicken',
				link: 'https://i.ibb.co/K6yJn3J/Chinese-Chilli-Chicken.png',
				rating: 4,
			},
			{
				name: 'Chilli Prawns',
				link: 'https://i.ibb.co/jwFZ5nM/Chilli-Prawns.png',
				rating: 3,
			},
			{
				name: 'Chilli Fish',
				link: 'https://i.ibb.co/yqCf4fj/Chilli-Fish.png',
				rating: 3.5,
			},
			{
				name: 'Chilli Chicken',
				link: 'https://i.ibb.co/x3r1QFV/Chilli-Chicken.png',
				rating: 3,
			},
			{
				name: 'Chicken Wings',
				link: 'https://i.ibb.co/sKDXdKj/Chicken-Wings.png',
				rating: 4.5,
			},
			{
				name: 'Chicken Tikka',
				link: 'https://i.ibb.co/NCmR7Tp/Chicken-Tikka.png',
				rating: 4.5,
			},
			{
				name: 'Chicken Sukka',
				link: 'https://i.ibb.co/BwmmyH8/Chicken-Sukka.png',
				rating: 4.5,
			},
			{
				name: 'Chicken Roast',
				link: 'https://i.ibb.co/vHjSHmD/Chicken-Roast.png',
				rating: 3.5,
			},
			{
				name: 'Chicken Momos',
				link: 'https://i.ibb.co/wBHhT6Y/Chicken-Momos.png',
				rating: 3,
			},
			{
				name: 'chicken manchuria',
				link: 'https://i.ibb.co/df1WTZF/chicken-manchuria.png',
				rating: 4.5,
			},
			{
				name: 'Chicken Magestick',
				link: 'https://i.ibb.co/jhKb1Zc/Chicken-Magestick.png',
				rating: 3.5,
			},
			{
				name: 'Chicken Lollipop',
				link: 'https://i.ibb.co/5cSp2z7/Chicken-Lollipop.png',
				rating: 3,
			},
			{
				name: 'chicken fry',
				link: 'https://i.ibb.co/ZN3jV9c/chicken-fry.png',
				rating: 5,
			},
			{
				name: 'Chicken Drumstick',
				link: 'https://i.ibb.co/mRvMmSx/Chicken-Drumstick.png',
				rating: 5,
			},
			{
				name: 'Chicken 555',
				link: 'https://i.ibb.co/SmkpgjC/Chicken-555.png',
				rating: 3,
			},
			{
				name: 'Chicken 65',
				link: 'https://i.ibb.co/k8j7hKm/Chicken-65.png',
				rating: 5,
			},
			{
				name: 'Barbecue Chicken Roast',
				link: 'https://i.ibb.co/yPppWnb/Barbecue-Chicken-Roast.png',
				rating: 5,
			},
			{
				name: 'Bamboo Chicken',
				link: 'https://i.ibb.co/yfFSg9G/Bamboo-Chicken.png',
				rating: 4,
			},
			{
				name: '11 Dry Chicken',
				link: 'https://i.ibb.co/z4p363C/11-Dry-Chicken.png',
				rating: 3.5,
			},
		],
		'Veg - Starters': [
			{
				name: 'Veg Manchurian',
				link: 'https://i.ibb.co/0jGrM99/Veg-Manchurian.jpg',
				rating: 4.5,
			},
			{
				name: 'Veg Hariyali Kebabs',
				link: 'https://i.ibb.co/zsr2J6X/Veg-Hariyali-Kebabs.jpg',
				rating: 5,
			},
			{
				name: 'Tandoori Aloo',
				link: 'https://i.ibb.co/pxzrqP4/Tandoori-Aloo.jpg',
				rating: 3,
			},
			{
				name: 'Paneer Tikka',
				link: 'https://i.ibb.co/v1RSK3q/Paneer-Tikka.jpg',
				rating: 3,
			},
			{
				name: 'Paneer Popcorn',
				link: 'https://i.ibb.co/Rh3grZ1/Paneer-Popcorn.jpg',
				rating: 4,
			},
			{
				name: 'Paneer Cutlet',
				link: 'https://i.ibb.co/WHY6jD7/Paneer-Cutlet.jpg',
				rating: 5,
			},
			{
				name: 'Paneer 65',
				link: 'https://i.ibb.co/Dzpb5G8/Paneer-65.jpg',
				rating: 4,
			},
			{
				name: 'Mushroom Tikka',
				link: 'https://i.ibb.co/J7XW7dP/Mushroom-Tikka.jpg',
				rating: 3.5,
			},
			{
				name: 'Mushroom 65',
				link: 'https://i.ibb.co/GQDvWv0/Mushroom-65.jpg',
				rating: 4,
			},
			{
				name: 'Khasta Paneer',
				link: 'https://i.ibb.co/PzF9Rr2/Khasta-Paneer.jpg',
				rating: 3,
			},
			{
				name: 'Kadai Paneer',
				link: 'https://i.ibb.co/fXMRgmK/Kadai-Paneer.jpg',
				rating: 3.5,
			},
			{
				name: 'Crispy Baby Corn',
				link: 'https://i.ibb.co/Lh7CW8c/Crispy-Baby-Corn.jpg',
				rating: 5,
			},
			{
				name: 'Chilli Paneer',
				link: 'https://i.ibb.co/ChpTwz6/Chilli-Paneer.jpg',
				rating: 4.5,
			},
			{
				name: 'Cabbage and Paneer Rolls',
				link: 'https://i.ibb.co/8bqtLJP/Cabbage-and-Paneer-Rolls.jpg',
				rating: 5,
			},
			{
				name: 'Broccoli Lollipop',
				link: 'https://i.ibb.co/Kzc3BgX/Broccoli-Lollipop.jpg',
				rating: 4,
			},
			{
				name: 'Bharwan Aloo',
				link: 'https://i.ibb.co/4pNCbrY/Bharwan-Aloo.jpg',
				rating: 3,
			},
			{
				name: 'Bharvan Tandoori Aloo',
				link: 'https://i.ibb.co/MPBWw9J/Bharvan-Tandoori-Aloo.jpg',
				rating: 3.5,
			},
			{
				name: 'Aloo Nazakat',
				link: 'https://i.ibb.co/J2qM66w/Aloo-Nazakat.jpg',
				rating: 4.5,
			},
			{
				name: 'Aloo 65',
				link: 'https://i.ibb.co/p1XVd1G/Aloo-65.jpg',
				rating: 5,
			},
		],
		'Non Veg - Biryanis': [
			{
				name: 'special prawns biryani',
				link: 'https://i.ibb.co/MswQWhx/special-prawns-biryani.jpg',
				rating: 5,
			},
			{
				name: 'prawns biryani',
				link: 'https://i.ibb.co/hW29YpM/prawns-biryani.jpg',
				rating: 4.5,
			},
			{
				name: 'natu kodi biryani',
				link: 'https://i.ibb.co/k6QvKj3/natu-kodi-biryani.jpg',
				rating: 5,
			},
			{
				name: 'mutton fry biryani',
				link: 'https://i.ibb.co/WDk95XM/mutton-fry-biryani.jpg',
				rating: 3,
			},
			{
				name: 'mutton dum biryani',
				link: 'https://i.ibb.co/NyXFcS7/mutton-dum-biryani.jpg',
				rating: 3.5,
			},
			{
				name: 'mutton biryani',
				link: 'https://i.ibb.co/sqqG3fZ/mutton-biryani.jpg',
				rating: 4.5,
			},
			{
				name: 'mutton 65 biryani',
				link: 'https://i.ibb.co/y5BpKyH/mutton-65-biryani.jpg',
				rating: 4,
			},
			{
				name: 'mughlai chicken biryani',
				link: 'https://i.ibb.co/5st41cL/mughlai-chicken-biryani.jpg',
				rating: 5,
			},
			{
				name: 'fish biryani',
				link: 'https://i.ibb.co/2MMBf1D/fish-biryani.jpg',
				rating: 3.5,
			},
			{
				name: 'egg biryani',
				link: 'https://i.ibb.co/G34h7Cd/egg-biryani.jpg',
				rating: 3.5,
			},
			{
				name: 'chicken wings biryani',
				link: 'https://i.ibb.co/6mRX9hZ/chicken-wings-biryani.jpg',
				rating: 4,
			},
			{
				name: 'chicken kheema',
				link: 'https://i.ibb.co/QN68Hx4/chicken-kheema.jpg',
				rating: 5,
			},
			{
				name: 'chicken joint biryani',
				link: 'https://i.ibb.co/kg2p5H8/chicken-joint-biryani.jpg',
				rating: 4,
			},
			{
				name: 'chicken fry biryani',
				link: 'https://i.ibb.co/SdmM3GJ/chicken-fry-biryani.jpg',
				rating: 5,
			},
			{
				name: 'chicken dum biryani',
				link: 'https://i.ibb.co/PhTnH4y/chicken-dum-biryani.jpg',
				rating: 4,
			},
			{
				name: 'chicken biryani',
				link: 'https://i.ibb.co/4Zd7Lp3/chicken-biryani.jpg',
				rating: 4.5,
			},
			{
				name: 'chicken 65 biryani',
				link: 'https://i.ibb.co/7zhx9bG/chicken-65-biryani.jpg',
				rating: 3,
			},
		],
		'Veg - Biryanis': [
			{
				name: 'vegetable biryani',
				link: 'https://i.ibb.co/PmGKS94/vegetable-biryani.jpg',
				rating: 3,
			},
			{
				name: 'veg dum biryani',
				link: 'https://i.ibb.co/7kL7F1v/veg-dum-biryani.jpg',
				rating: 4.5,
			},
			{
				name: 'special veg biryani',
				link: 'https://i.ibb.co/6ZVwmqg/special-veg-biryani.jpg',
				rating: 3.5,
			},
			{
				name: 'paneer biryani',
				link: 'https://i.ibb.co/kyZpFVC/paneer-biryani.jpg',
				rating: 3,
			},
			{
				name: 'mushroom biryani',
				link: 'https://i.ibb.co/jVPVLrq/mushroom-biryani.jpg',
				rating: 5,
			},
			{
				name: 'mexican veg biryani',
				link: 'https://i.ibb.co/3YQ4hXc/mexican-veg-biryani.jpg',
				rating: 3.5,
			},
			{
				name: 'kaju pulao',
				link: 'https://i.ibb.co/pXkn2ps/kaju-pulao.jpg',
				rating: 4,
			},
		],
		'Non Veg - Snacks': [
			{
				name: 'Potluck chicken soup',
				link: 'https://i.ibb.co/JqJdrfj/Potluck-chicken-soup.jpg',
				rating: 3,
			},
			{
				name: 'Egg omelet',
				link: 'https://i.ibb.co/D1jDj9d/Egg-omelet.jpg',
				rating: 4.5,
			},
			{
				name: 'egg noodles',
				link: 'https://i.ibb.co/vZKbcyj/egg-noodles.png',
				rating: 4.5,
			},
			{
				name: 'Egg Manchurian',
				link: 'https://i.ibb.co/w0bRZpn/Egg-Manchurian.jpg',
				rating: 3,
			},
			{
				name: 'Egg fried rice',
				link: 'https://i.ibb.co/xD8d7M0/Egg-fried-rice.jpg',
				rating: 5,
			},
			{
				name: 'Dragon Chicken',
				link: 'https://i.ibb.co/zGwNnhP/Dragon-Chicken.jpg',
				rating: 5,
			},
			{
				name: 'Chicken samosa',
				link: 'https://i.ibb.co/RCfM5p7/Chicken-samosa.jpg',
				rating: 5,
			},
			{
				name: 'Chicken pakodi',
				link: 'https://i.ibb.co/7NGzFwW/Chicken-pakodi.jpg',
				rating: 4,
			},
			{
				name: 'Chicken Noodles',
				link: 'https://i.ibb.co/9YMmZ8X/Chicken-Noodles.jpg',
				rating: 5,
			},
			{
				name: 'Chicken Manchurian',
				link: 'https://i.ibb.co/549VbJp/Chicken-Manchurian.jpg',
				rating: 4.5,
			},
			{
				name: 'Chicken Fried rice',
				link: 'https://i.ibb.co/9rMPgRW/Chicken-Fried-rice.jpg',
				rating: 3,
			},
		],
		'Veg - Snacks': [
			{
				name: 'Veg Noodles',
				link: 'https://i.ibb.co/gMPzwjP/Veg-Noodles.jpg',
				rating: 3.5,
			},
			{
				name: 'Veg Manchurian',
				link: 'https://i.ibb.co/LpLZxB1/Veg-Manchurian.jpg',
				rating: 3.5,
			},
			{
				name: 'Veg Fried rice',
				link: 'https://i.ibb.co/2tGht2R/Veg-Fried-rice.jpg',
				rating: 5,
			},
			{
				name: 'vegetable soup',
				link: 'https://i.ibb.co/2ZJznjC/vegetable-soup.jpg',
				rating: 4,
			},
			{
				name: 'French frices',
				link: 'https://i.ibb.co/yPGMzvR/French-frices.jpg',
				rating: 4.5,
			},
			{
				name: 'Cabbage pakodi',
				link: 'https://i.ibb.co/KGZR2Lm/Cabbage-pakodi.jpg',
				rating: 3.5,
			},
		],
		'Beverages & Milk Shakes': [
			{
				name: 'Watermelon juice',
				link: 'https://i.ibb.co/52KCzqR/Watermelon-juice.jpg',
				rating: 3.5,
			},
			{
				name: 'Vanila milk shake',
				link: 'https://i.ibb.co/PFrGVby/Vanila-milk-shake.jpg',
				rating: 4.5,
			},
			{
				name: 'Strawberry milk shake',
				link: 'https://i.ibb.co/Fm16SFp/Strawberry-milk-shake.jpg',
				rating: 3.5,
			},
			{
				name: 'Strawberry juice',
				link: 'https://i.ibb.co/zf2ytHS/Strawberry-juice.jpg',
				rating: 4.5,
			},
			{
				name: 'Pomagranate juice',
				link: 'https://i.ibb.co/9NGTp7B/Pomagranate-juice.jpg',
				rating: 3,
			},
			{
				name: 'pineapple juice',
				link: 'https://i.ibb.co/jRGw1P7/pineapple-juice.jpg',
				rating: 5,
			},
			{
				name: 'Pepsi',
				link: 'https://i.ibb.co/jfvyzc9/Pepsi.jpg',
				rating: 4,
			},
			{
				name: 'Oreo milk shake',
				link: 'https://i.ibb.co/sR75hjC/Oreo-milk-shake.jpg',
				rating: 5,
			},
			{
				name: 'Orange juice',
				link: 'https://i.ibb.co/mN8PwRB/Orange-juice.jpg',
				rating: 4.5,
			},
			{
				name: 'Mango milk shake',
				link: 'https://i.ibb.co/FsTJ78s/Mango-milk-shake.jpg',
				rating: 3,
			},
			{
				name: 'Refreshing spicy mango margaritas with fresh basil',
				link: 'https://i.ibb.co/J5mthVp/Refreshing-spicy-mango-margaritas-with-fresh-basil.jpg',
				rating: 3,
			},
			{
				name: 'Kiwi milk shake',
				link: 'https://i.ibb.co/D5yfKrX/Kiwi-milk-shake.jpg',
				rating: 3.5,
			},
			{
				name: 'Kharbuja juice',
				link: 'https://i.ibb.co/TtH04JZ/Kharbuja-juice.jpg',
				rating: 3,
			},
			{
				name: 'Green grape juice',
				link: 'https://i.ibb.co/JsGQ113/Green-grape-juice.jpg',
				rating: 3.5,
			},
			{
				name: 'fanta',
				link: 'https://i.ibb.co/tXh1dbP/fanta.jpg',
				rating: 3,
			},
			{
				name: 'Cold coffee',
				link: 'https://i.ibb.co/nmQsPKG/Cold-coffee.jpg',
				rating: 4,
			},
			{
				name: 'Coco cola',
				link: 'https://i.ibb.co/sypx0g4/Coco-cola.jpg',
				rating: 3.5,
			},
			{
				name: 'choco oreo milkshake',
				link: 'https://i.ibb.co/9qpxGm0/choco-oreo-milkshake.jpg',
				rating: 4.5,
			},
			{
				name: 'Carrot juice',
				link: 'https://i.ibb.co/HVqxXHp/Carrot-juice.jpg',
				rating: 3.5,
			},
			{
				name: 'Beetroot juice',
				link: 'https://i.ibb.co/cgqgLS9/Beetroot-juice.jpg',
				rating: 3,
			},
			{
				name: 'Apple juice',
				link: 'https://i.ibb.co/59XtF76/Apple-juice.jpg',
				rating: 5,
			},
			{
				name: '7up',
				link: 'https://i.ibb.co/FsxBKKQ/7up.png',
				rating: 4.5,
			},
		],
	};
}

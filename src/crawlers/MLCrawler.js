const fetch = require('node-fetch');
const jsdom = require('jsdom');

const {
	url: { ml },
} = require('../config');

const sanitizeStore = storeElement => {
	return storeElement ? storeElement.textContent.replace(' por ', '').trim() : null;
};

const sanitizeState = stateElement => {
	return stateElement
		? stateElement.textContent
				.replace('Novo', '')
				.replace('Usado', '')
				.replace('-', '')
				.trim() || null
		: null;
};

const sanitizePrice = priceElement => {
	const priceData = priceElement.textContent.split(' ');
	let price = `${priceData[2]},${priceData[3] || 0}`;
	return Number(price.replace('.', '').replace(',', '.'));
};

const getData = ({ page = 1, limit, search }) => {
	const offset = (page - 1) * 48 + 1;
	const pagination = offset ? `_Desde_${offset}` : '';

	return new Promise((resolve, reject) => {
		fetch(`${ml}/${search}${pagination}`)
			.then(res => res.text())
			.then(html => {
				const dom = new jsdom.JSDOM(html);
				const document = dom.window.document;
				const results = document.querySelectorAll('.results-item');
				const data = [];
				results.forEach(r => {
					const name = r.querySelector('.main-title').textContent.trim();
					const link = r.querySelector('.item__js-link').href;
					const price = sanitizePrice(r.querySelector('.item__price'));
					const store = sanitizeStore(r.querySelector('.item__brand-title-tos'));
					const state = sanitizeState(r.querySelector('.item__status'));
					if (data.length < limit)
						data.push({
							name,
							link,
							price,
							store,
							state,
						});
					else resolve(data);
				});
				resolve(data);
			})
			.catch(err => reject({ messsage: 'Não foi possivel buscar os produtos' }));
	});
};

const getProducts = async ({ limit, search }) => {
	const pages = Math.ceil(limit / 48);
	const products = [];
	for (let x = 0; x < pages; x++) {
		const data = await getData({
			limit: limit - products.length,
			search,
			page: x + 1,
		});
		products.push(...data);
		if (!data.length) break;
	}
	return products;
};

module.exports = { getProducts };

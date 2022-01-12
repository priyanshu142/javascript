//Asynchronous

let stocks = {
	fruits: ['strawberry', 'grapes', 'banana', 'apple'],
	liquid: ['water', 'ice'],
	holder: ['cone', 'cup', 'stick'],
	toppings: ['chocolate', 'peanuts'],
}
// this is callback hell to resole this we have promise
/* let order = (fruit_name, call_production) => {
	setTimeout(() => {
		console.log(`${stocks.fruits[fruit_name]} was selected`)
		call_production()
	}, 2000)
}

let production = () => {
	console.log('production has started ')
	setTimeout(() => {
		console.log('the fruit has been choped')
		setTimeout(() => {
			console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added `)
			setTimeout(() => {
				console.log('the amchine was started')
				setTimeout(() => {
					console.log(` ice creame was palced on ${stocks.holder[0]}`)
					setTimeout(() => {
						console.log(`${stocks.toppings[0]} was added as topping`)
						setTimeout(() => {
							console.log('serve the icecream')
						}, 1000)
					}, 3000)
				}, 2000)
			}, 1000)
		}, 2000)
	}, 2000)
}

order(0, production)
 */

let is_shop_open = true

let order = (tim, work) => {
	return new Promise((resolve, reject) => {
		if (is_shop_open) {
			setTimeout(() => {
				resolve(work())
			}, tim)
		} else {
			reject(console.log('óur shop is closed'))
		}
	})
}

order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
	.then(order(0000, () => console.log('production was started')))

	.then(order(2000, () => console.log('the fruit was chopped')))

	.then(() => {
		return order(1000, () => {
			console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} ws selected`)
		})
	})
	.then(() => {
		return order(2000, () => {
			console.log(`start the machine`)
		})
	})
	.then(() => {
		return order(2000, () => {
			console.log(`ice placed on ${stocks.holder[0]}`)
		})
	})
	.then(() => {
		return order(2000, () => {
			console.log(`${stocks.toppings[0]} was seleced`)
		})
	})
	.then(() => {
		return order(1000, () => {
			console.log('ice creasme was served ')
		})
	})
	.catch(() => {
		console.log('coustomer left')
	})
	.finally(() => {
		console.log('day ended, shop is closed')
	})

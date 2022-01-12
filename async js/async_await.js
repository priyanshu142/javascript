let stocks = {
	fruits: ['strawberry', 'grapes', 'banana', 'apple'],
	liquid: ['water', 'ice'],
	holder: ['cone', 'cup', 'stick'],
	toppings: ['chocolate', 'peanuts'],
}

let is_shop_open = true

function time(ms) {
	return new Promise((resolve, rejecct) => {
		if (is_shop_open) {
			setTimeout(resolve, ms)
		} else {
			reject(console.log('shop is closed'))
		}
	})
}

async function kitchen() {
	try {
		await time(2000)
		console.log(`${stocks.fruits[0]} was selected`)

		await time(0000)
		console.log('start the production')

		await time(2000)
		console.log('cut the fruit')

		await time(1000)
		console.log(`${stocks.liquid[0]}and ${stocks.liquid[1]}`)

		await time(1000)
		console.log('start the machine')
		await time(1000)
		console.log(`ice creame placed on ${stocks.holder[0]}`)
		await time(1000)
		console.log(`${stocks.toppings[0]} was topping`)
		await time(2000)
		console.log('serve ice cream')
	} catch (error) {
		console.log('costomer left', error)
	} finally {
		console.log('day ended , shop is closed')
	}
}
kitchen()

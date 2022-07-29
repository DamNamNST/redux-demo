const initialValue = {
	products: [],
	cart: [],
	total: 0
}

const rootReducer = (state = initialValue, action) => {
	switch (action.type) {
		case "total":
			return{
				...state,
				total: [...state.total, action.payload],
			}
		case "cart/add":
			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		case "cart/increase":
			const id = action.payload
			const newCart = state.cart.map(item => {
				if (item.id === id) {
					const amount = item.amount ? item.amount + 1 : 2;
					return {
						...item,
						amount: amount,
						total: amount *  item.saleOffPrice
					}

				}
			})
			return {
				...state,
				cart: newCart
			};
			case "cart/decrease":
			const id2 = action.payload
			const newCart2 = state.cart.map(item => {
				if (item.id === 0) {
					const amount = 0;
					return {
						...item,
						amount: amount,
						total: amount *  item.saleOffPrice
					}
				}
				if (item.id === id2) {
					const amount = item.amount ? item.amount - 1 : 0;
					return {
						...item,
						amount: amount,
						total: amount *  item.saleOffPrice
					}
				}
			})
			return {
				...state,
				cart: newCart2
			}
		default:
			return state;
	}
}

export default rootReducer;
const book = [
    {
        title: 'The Two Towers',
        price: 119000,
        discount: 5,
        stock: 15,
        purchased: 10,
    },
    {
        title: 'The Return of the King',
        price: 129000,
        discount: 10,
        stock: 5,
        purchased: 2,
    },
    {
        title: "Bilbo's Last Song",
        price: 109000,
        discount: 10,
        stock: 0,
        purchased: 1,
    },
]

function purchase(params) {
    for (let index = 0; index < params.length; index++) {
        const { title, price, discount, stock, purchased } = params[index]
        const stockAfterPurchase = stock - purchased
        const totalPrice = price * purchased
        const discountPrice = totalPrice * (discount / 100)
        const tax = (totalPrice - discountPrice) * 0.1

        if (stockAfterPurchase < 0) {
            break
        }

        console.log(`Title: ${title}`)
        console.log(`Price: ${price}`)
        console.log(`Discount: ${discount}`)
        console.log(`Price After Discount: ${totalPrice - discountPrice}`)
        console.log(`Tax: ${tax}`)
        console.log(`Total: ${totalPrice - discountPrice + tax}`)

        if (stockAfterPurchase === 0) {
            console.log('Out of Stock')
        } else {
            console.log(`Stock: ${stockAfterPurchase}`)
        }
    }
}

console.log(book)
console.log(purchase(book))
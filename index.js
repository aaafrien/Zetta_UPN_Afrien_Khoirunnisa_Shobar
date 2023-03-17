const book = [
    {
        title: 'The Two Towers',
        price: 119000,
        discount: 5
    },
    {
        title: 'The Return of the King',
        price: 129000,
        discount: 10
    },
    {
        title: "Bilbo's Last Song",
        price: 109000,
        discount: 10
    },
]

function purchase(params) {
    const {title, price, discount} = params
    const discountPrice = price * (discount / 100)
    const tax = (price - discountPrice) * 0.1

    console.log(`Title: ${title}`)
    console.log(`Price: ${price}`)
    console.log(`Discount: ${discount}`)
    console.log(`Price After Discount: ${price - discountPrice}`)
    console.log(`Tax: ${tax}`)
    console.log(`Total: ${price - discountPrice + tax}`)
}

console.log(book)
console.log(purchase(book[0]))
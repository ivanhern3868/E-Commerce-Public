export const formatPrice = (cantidad) => {
    const price = cantidad * 1;
    return Number(price).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
}

export const formatPriceDisc = (cantidad, discount) => {
    const price = cantidad * 1.1;
    return Number(price).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
}
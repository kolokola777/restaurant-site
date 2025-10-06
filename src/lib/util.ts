export const toMoney = (value: number) => {
    return new Intl.NumberFormat("ru-RU",
        {
            style: "currency",
            currency: "Rub",
            maximumSignificantDigits: 2
        }
    ).format(
        value
    )
}
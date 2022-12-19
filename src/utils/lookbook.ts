export const getPriceToCommas = (price: string) => {
  return price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

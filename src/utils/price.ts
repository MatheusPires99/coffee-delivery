export const formatPrice = ({
  price,
  removeCurrencySign,
}: {
  price: number;
  removeCurrencySign?: boolean;
}) => {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return removeCurrencySign ? formattedPrice.split("R$")[1] : formattedPrice;
};

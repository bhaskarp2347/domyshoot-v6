import { GlobalContext } from "../pages/_app";
import { useContext } from "react";

const Amount = ({ amount }) => {
  const { currency } = useContext(GlobalContext)
  const newAmount = (amount * currency.rate).toFixed(2)
  return currency.rate ?
      <>
        <span className="currency-code">{currency.code}</span>
        {" "}
        <span className="currency-amount">{newAmount}</span>
      </>
    :
    <></>
}

export default Amount

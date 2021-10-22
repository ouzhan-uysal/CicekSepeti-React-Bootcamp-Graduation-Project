import { SET_PRODUCT_OFFER, CANCEL_PRODUCT_OFFER } from "./actionTypes";
import { useDispatch } from "react-redux";

export const GiveOffer = (offerInfo) => {
  const dispatch = useDispatch();
  dispatch({
    type: SET_PRODUCT_OFFER,
    payload: offerInfo
  })
}

export const WithdrawOffer = (offerInfo) => {
  const dispatch = useDispatch();
  dispatch({
    type: CANCEL_PRODUCT_OFFER,
    payload: offerInfo
  })
}
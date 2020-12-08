import { SET_PAYMENT, setPayment } from '@actions/payment/type';
import { Payment } from '@interfaces/payment';

type PaymentAction = ReturnType<typeof setPayment>;

type PaymentState = {
  payment: Payment[];
};

const initialState = {
  payment: [],
};

const category = (state: PaymentState = initialState, action: PaymentAction): PaymentState => {
  switch (action.type) {
    case SET_PAYMENT:
      return { payment: action.payload };
    default:
      return state;
  }
};

export default category;

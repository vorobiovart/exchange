import { roundToFixed } from '../common/utils';

const updateToCurrencyAmount = (state, action) => {
  return action.amountFrom === '' ? (
    ''
  ) : roundToFixed(action.currencyRate * +(action.amountFrom));
};

const amountTo = (state = '', action) => {
  switch(action.type) {
    case 'UPDATE_TO_CURRENCY_AMOUNT':
      return updateToCurrencyAmount(null, action);

    case 'UPDATE_RATES':
      return updateToCurrencyAmount(null, action);

    default:
      return state;
  }
};

export default amountTo;

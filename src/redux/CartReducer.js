//set up state reducer
const stateCart = {
  cart: [],
};

const CartReducer = (state = stateCart, action) => {
  switch (action.type) {
    case 'ADD_CART':
      {
        let index = state.cart.findIndex(
          (spGH) => spGH.maSP === action.spGioHang.maSP
        );

        if (index !== -1) {
          state.cart[index].soLuong += 1;
        } else {
          state.cart.push(action.spGioHang);
        }

        // set state redux
        state.cart = [...state.cart];
        return { ...state };
      }
    case 'REMOVE_CART':
      {
        let index = state.cart.findIndex((spGH) => spGH.maSP === action.maSP);

        let gioHangCapNhat = [...state.cart];

        if (index !== -1) {
          gioHangCapNhat.splice(index, 1);
        }
        state.cart = gioHangCapNhat;

        return { ...state };
      };
      case 'FIX_QUANTITY':
        {
          let gioHangCapNhat = [...state.cart];
          let index = state.cart.findIndex((spGH) => spGH.maSP === action.maSP);

          if (index !== -1){
            if (action.isIncrease){
              gioHangCapNhat[index].soLuong +=1;
            }
            else{
              if (gioHangCapNhat[index].soLuong>1){
                gioHangCapNhat[index].soLuong -=1;
              }
              else{
                alert ('You have reached the limit');
              }
            }
          }

          state.cart = gioHangCapNhat;
          return {...state};
        };
    default:
      break;
  }
  return { ...state };
};

export default CartReducer;

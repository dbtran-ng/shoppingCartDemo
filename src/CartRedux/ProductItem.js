import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductItem extends Component {
  render() {
    let { productProps } = this.props;
    return (
      <div className="card text-center">
        <img
          style={{ width: '300px', height: '300px', margin: 'auto' }}
          className="card-img-top"
          src={productProps.hinhAnh}
          alt={productProps.hinhAnh}
        />
        <div className="card-body text-center">
          <h4 className="card-title">{productProps.tenSP}</h4>
          <p className="card-text">{productProps.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.themGioHang(productProps);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}
// method send data to store
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPham) => {
      let spGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        hinhAnh: sanPham.hinhAnh,
        soLuong: 1,
        giaBan: sanPham.giaBan,
      };
      console.log('spGioHang', spGioHang);

      let action = {
        type: 'ADD_CART', // required attribute of action
        spGioHang,
      };

      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);

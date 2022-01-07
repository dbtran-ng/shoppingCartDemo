import React, { Component } from 'react';
import Modal from './Modal';
import ProductList from './ProductList';

import {connect} from 'react-redux'
class ExerciseCart extends Component {
    renderTotal= () =>{
        return this.props.gioHang.reduce((total, spGH, index)=>{
            return total += spGH.soLuong;
        },0).toLocaleString();
    }
  render() {
    return (
      <div className="container">
        <h3>Redux Demo</h3>
        <div className="text-right">
          <span
            style={{ width: 17, cursor: 'pointer' }}
            data-toggle="modal"
            data-target="#modalId"
          >
            <i className="fa fa-cart mr-5">
              <i className="fa fa-cart-arrow-down"></i>
              ({this.renderTotal()}) Cart
            </i>
          </span>
        </div>
        <Modal />
        <ProductList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return { 
        gioHang : state.stateCart.cart
    }
};

export default connect(mapStateToProps)(ExerciseCart);
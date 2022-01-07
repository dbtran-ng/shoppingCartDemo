import React, { Component } from 'react';
import { connect } from 'react-redux';

class Modal extends Component {
  render() {
    console.log(this.props.gioHang);
    return (
      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          style={{ minWidth: 1000 }}
          className="modal-dialog"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.gioHang.map((spGH, index) => {
                    return (
                      <tr key={index}>
                        <td>{spGH.maSP}</td>
                        <td>
                          <img
                            src={spGH.hinhAnh}
                            alt={spGH.hinhAnh}
                            width={50}
                            height={50}
                          />
                        </td>
                        <td>{spGH.tenSP}</td>
                        <td>{spGH.giaBan.toLocaleString()}</td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              this.props.tangGiamSoLuong(spGH.maSP, true);
                            }}
                          >
                            +
                          </button>
                          {spGH.soLuong}
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              this.props.tangGiamSoLuong(spGH.maSP, false);
                            }}
                          >
                            -
                          </button>
                        </td>
                        <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                        <td>
                          <button
                            onClick={() => this.props.xoaGioHang(spGH.maSP)}
                            className="btn btn-danger"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.stateCart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSP) => {
      let action = {
        type: 'REMOVE_CART',
        maSP,
      };

      dispatch(action);
    },
    tangGiamSoLuong : (maSP, isIncrease) => {
        let action = {
            type: 'FIX_QUANTITY',
            maSP,
            isIncrease
        };
        dispatch(action);
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);

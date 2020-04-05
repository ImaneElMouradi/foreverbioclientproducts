import React, { Component } from "react";

import { Link } from "react-router-dom";

import { ProductConsumer } from "../globalData/Context";

export default class Product extends Component {
  state = {
    nomCat: "",
  };

  checkCategory = () => {
    const { idCat } = this.props.product;
    if (idCat === 1) {
      this.setState({ nomCat: "Visage" });
    } else if (idCat === 2) {
      this.setState({ nomCat: "Cheveux" });
    } else if (idCat === 3) {
      this.setState({ nomCat: "Huile" });
    } else if (idCat === 4) {
      this.setState({ nomCat: "Peau" });
    } else if (idCat === 5) {
      this.setState({ nomCat: "Aliment" });
    }
  };

  componentDidMount = () => {
    this.checkCategory();
  };
  render() {
    const {
      id,
      nom,
      description,
      source,
      etat,
      prix,
      qte,
      url,
    } = this.props.product;
    return (
      <>
        <div
          className="grid-item kids col-sm-12 col-md-4 col-lg-3"
          style={{ display: "block" }}
        >
          <div className="grid-item__content-wrapper">
            <div className="ps-shoe mb-30">
              <div className="ps-shoe__thumbnail">
                <div className="ps-badge">
                  <span>Bio</span>
                </div>
                {/* <div className="ps-badge ps-badge--sale ps-badge--2nd">
                  <span>bio</span>
                </div> */}
                <a className="ps-shoe__favorite" href="#">
                  <i className="ps-icon-heart"></i>
                </a>
                <img
                  src={url}
                  alt={nom}
                  style={{ height: "250px", width: "250px" }}
                />

                <ProductConsumer>
                  {(value) => {
                    return (
                      <Link
                        to="/detail"
                        className="ps-shoe__overlay"
                        onClick={() => value.handleDetail(id)}
                      ></Link>
                    );
                  }}
                </ProductConsumer>
              </div>
              <div className="ps-shoe__content">
                <div className="ps-shoe__variants">
                  <div className="ps-shoe__variant normal">
                    <ProductConsumer>
                      {(value) => (
                        <button
                          class="ps-cart__toggle"
                          style={{ marginLeft: "230px", maginTop: "10px" }}
                          onClick={() => value.addToCart(id)}
                        >
                          <i class="ps-icon-shopping-cart"></i>
                        </button>
                      )}
                    </ProductConsumer>
                  </div>
                </div>
                {/* <div className="ps-shoe__variants">
                  <div className="ps-shoe__variant normal">
                    <img src="images/bio-product/2.jpg" alt="" />
                    <img src="images/bio-product/3.jpg" alt="" />
                    <img src="images/bio-product/4.jpg" alt="" />
                    <img src="images/bio-product/5.jpg" alt="" />
                  </div>
                  <select className="ps-rating ps-shoe__rating">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="2">5</option>
                  </select>
                </div> */}
                <div className="ps-shoe__detail">
                  <a
                    className="ps-shoe__name"
                    href="#"
                    style={{ fontSize: "20px" }}
                  >
                    {nom}
                  </a>
                  <p className="ps-shoe__categories">
                    <a href="#">{this.state.nomCat}</a>
                  </p>
                  <span className="ps-shoe__price">
                    <del>{prix + 12}DH</del> {prix}DH
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

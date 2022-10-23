import React from "react";
import food from "../assets/img/food.jpg";

class CardComponent extends React.Component {
  render() {
    return (
      <>
        <div className="card-component mt-4 mb-4 pb-4">
          <div className="col-12 col-md-12">
            <div className="row">
              <div className="col-6 col-md-3 mb-4">
                <div className="food-product">
                  <img src={food} alt="product-img" />
                  <div className="mt-2">
                    <span>Kripik Pedas</span>
                    <br />
                    <span className="text-muted">Kab.Kuningan</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4">
                <div className="food-product">
                  <img src={food} alt="product-img" />
                  <div className="mt-2">
                    <span>Kripik Pedas</span>
                    <br />
                    <span className="text-muted">Kab.Kuningan</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4">
                <div className="food-product">
                  <img src={food} alt="product-img" />
                  <div className="mt-2">
                    <span>Kripik Pedas</span>
                    <br />
                    <span className="text-muted">Kab.Kuningan</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4">
                <div className="food-product">
                  <img src={food} alt="product-img" />
                  <div className="mt-2">
                    <span>Kripik Pedas</span>
                    <br />
                    <span className="text-muted">Kab.Kuningan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardComponent;

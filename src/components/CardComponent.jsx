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
                  <img src="https://setc.id/res/images/umkm/Jahe%202.jpg" alt="product-img" />
                  <div className="mt-2">
                    <span>Kue Jahe</span>
                    <br />
                    <span className="text-muted">Palembang</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4">
                <div className="food-product">
                  <img src="https://setc.id/res/images/umkm/1605706803103_IMG_20201118_115252-01.jpg" alt="product-img" />
                  <div className="mt-2">
                    <span>Pastri Kue Kering</span>
                    <br />
                    <span className="text-muted">Bekasi</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4">
                <div className="food-product">
                  <img src="https://setc.id/res/images/umkm/P_20201118_080040-01.jpg" alt="product-img" />
                  <div className="mt-2">
                    <span>Beauty Crem</span>
                    <br />
                    <span className="text-muted">Banjar</span>
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

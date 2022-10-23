import React from "react";

class TradeComponent extends React.Component {
  state = {
    berat: 0,
    coin: 0,
  };

  inputHandler = (e) => {
    this.setState({
      berat: e.target.value,
    });
  };

  prosesTrade = () => {
    let coin = this.state.berat;
    if (coin >= 1) {
      let convert = parseInt(coin,10);
      this.setState({
        coin: convert,
      });
    } if (coin === 0) {
      this.setState({
        coin: 0,
      });
    } else {
      let convert = coin;
      this.setState({
        coin: convert,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container mb-4 pb-4">
          <div className="trade-content pt-4 mt-4 mb-4 pb-4">
            <div className="text-center pt-4 mt-4">
              <h3 className="h3-content">Tukarkan sampah anda</h3>
            </div>
            <div className="box-section pt-4 d-flex justify-content-center">
              <div className="col-12 col-md-6 bg-white border border-0 shadow border-radius">
                <div className="content-border mx-4 px-4 mt-4 mb-4">
                  <div className="black-box px-3 pt-2 pb-2 bg-black border-radius-v2 text-white">
                    <span>Berat Sampah.</span>
                    <br />
                    <div className="d-flex justify-content-between">
                      <div className="col-9">
                        <h3>
                          <input
                            type="number"
                            name="berat"
                            onChange={this.inputHandler}
                            value={this.state.berat}
                          />
                        </h3>
                      </div>
                      <div className="col-2">
                        <h3 className="color-active">
                          <b>KG</b>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-button mt-2 mb-2 text-center">
                  <span type="button" onClick={this.prosesTrade} className="color-active">
                    <b>
                      <i className="bi bi-arrow-left-right h3"></i>
                    </b>
                    <span className="mx-2 h5">
                      <b>Trade</b>
                    </span>
                  </span>
                </div>
                <div className="content-border mx-4 px-4 mt-4 mb-4">
                  <div className="black-box px-3 pt-2 pb-2 bg-black border-radius-v2 text-white">
                    <span>Hadiah Coin.</span>
                    <br />
                    <div className="d-flex justify-content-between">
                      <div className="col-10">
                        <h3>
                          <b>{this.state.coin}</b>
                        </h3>
                      </div>
                      <div className="col-2">
                        <h3 className="color-active">
                          <b>COIN</b>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4 mb-4">
                  <button className="col-10 btn btn-active shadow">
                    <span className="mx-2 text-black">
                      <b>Mulai Sekarang</b>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TradeComponent;

import React from "react";
import people from "../assets/img/people-recayle.png";
import CardComponent from "./CardComponent";
import animate1 from "../assets/img/animate1.png";
import animate2 from "../assets/img/animate2.png";
import animate3 from "../assets/img/animate3.png";

class HomeComponent extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="home-content pt-4 mt-4 mb-4 pb-4">
            <div className="top-content">
              <div className="row">
                <div className="col-12 col-md-6 left mb-4 pb-4">
                  <div className="col-12 col-md-8 mt-4 pt-4">
                    <pre className="text-top">
                      <b className="h3">
                        Dari Sampah, <br />
                        untuk kesuksesan UMKM
                        <br />
                        di Indonesia!.
                      </b>
                    </pre>
                    <p className="pt-2 text-muted">
                      Tukarkan sampahmu sebagai bagian mendukung UMKM indonesia.
                    </p>
                    <button className="btn btn-active shadow">
                      <span className="mx-2">Mulai Sekarang</span>
                    </button>
                  </div>
                </div>
                <div className="col-12 col-md-6 right">
                  <img src={people} alt="peopletrash" />
                </div>
              </div>
            </div>
            <div className="second-content pt-4 mt-4">
              <div className="content pt-4 mt-4">
                <span className="mx-2">
                  <b>Produk Terlaris.</b>
                </span>
                <CardComponent />
              </div>
            </div>
            <div className="third-content pt-4 mt-4 mb-4 pb-4">
              <p className="text-center underline h5">
                <h3 className="h3">About Us</h3>
              </p>
              <div className="up-content mt-4 mb-4 pt-4">
                <div className="content-1 mb-4 pb-4">
                  <div className="row mt-4 mx-4">
                    <div className="col-12 col-md-5 left mx-4 px-4">
                      <img src={animate1} alt="animete1" />
                    </div>
                    <div className="col-12 col-md-5 mx-4 px-4">
                      <div className="pt-4 mt-4">
                        <h5>
                          <b className="color-active">#StepPertama</b>
                        </h5>
                        <h5>
                          <b>Menukarkan Sampah ke Housecamp</b>
                        </h5>
                        <p className="mt-4 text-muted text-justify">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="up-content mt-4 mb-4 pt-4">
                <div className="content-1 mb-4 pb-4">
                  <div className="row mt-4 mx-4">
                    <div className="col-12 col-md-5 left mx-4 px-4">
                      <div className="pt-4 mt-4">
                        <h5>
                          <b className="color-active">#StepKedua</b>
                        </h5>
                        <h5>
                          <b>Mengubah Sampah menjadi Koin</b>
                        </h5>
                        <p className="mt-4 text-muted">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-md-5 mx-4 px-4 right">
                      <img src={animate2} alt="animete1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="up-content mt-4 mb-4 pt-4">
                <div className="content-1 mb-4 pb-4">
                  <div className="row mt-4 mx-4">
                    <div className="col-12 col-md-5 left mx-4 px-4">
                      <img src={animate3} alt="animete1" />
                    </div>
                    <div className="col-12 col-md-5 mx-4 px-4">
                      <div className="pt-4 mt-4">
                        <h5>
                          <b className="color-active">#StepKetiga</b>
                        </h5>
                        <h5>
                          <b>Menukarkan Sampah ke Housecamp</b>
                        </h5>
                        <p className="mt-4 text-muted">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
                        </p>
                      </div>
                    </div>
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
export default HomeComponent;

import React from "react";

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="bg-black">
        <div className="mx-4 pt-4 px-4 pb-4">
          <div className="row mb-4 pb-4 mt-4">
            <div className="col-12 col-md-9 mb-2">
              <strong>
                <span className="color-active">Trash</span>
                <span className="text-white">Trade</span>
                <br />
                <span className="text-muted">
                  Tukarkan barang anda untuk mendukung UMKM.
                </span>
              </strong>
            </div>
            <div className="col-12 col-md-3 text-muted">
                <span>Copyright@2022</span>
                <br />
                <span>Allrightreserved</span>
                <br />
                <span>TrashTrade</span>
                <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;

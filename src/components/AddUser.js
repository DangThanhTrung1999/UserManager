import React, { Component } from "react";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
  }
  kiemTraTrangThaiDeHienThiForm = () => {
    if (this.props.hienThiForm) {
      return (
        <div className="col">
          <div className="card border-primary mb-3 mt-2">
            <div className="card-header">Thêm mới</div>
            <div className="card-body text-primary">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên user"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phân quyền"
                />
              </div>
              <div className="form-group">
                <select className="custom-select" name="">
                  <option value>Chọn quyền mặc định</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Modrator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <div className="btn btn-block btn-primary">Thêm mới</div>
            </div>
          </div>
        </div>
      );
    }
  };
  render() {
    return <div>{this.kiemTraTrangThaiDeHienThiForm()}</div>;
  }
}

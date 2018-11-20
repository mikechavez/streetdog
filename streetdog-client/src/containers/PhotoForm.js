import React, { Component } from "react";
import { connect } from "react-redux";

class PhotoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };

    this.handleFileChange = this.handleFileChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file).then(response => {
      console.log(response.data);
    });
  }

  handleFileChange = e => {
    this.setState({ file: e.target.files[0] });
  };

  render() {
    const { errors, shopData } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {errors.message && (
          <div className="alert alert-danger">{errors.message}</div>
        )}

        <label htmlFor="shopPicture">Shop Photo:</label>
        <input
          className="form-control"
          id="shopPicture"
          onChange={this.handleFileChange}
          type="file"
        />
        <button className="btn btn-success">
          {shopData ? "Save Changes" : "Create my Profile"}
        </button>
      </form>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";


class SearchBar extends React.Component {


  //Browser SearchBar a bir şey yazdıkça yenilenmesin diye preventDefault kullanılır.
  handeFormSubmit = (event) => {
    event.preventDefault();
  }
  render() {
    return (

      <form onSubmit={this.handeFormSubmit}>

        <div className="row mb-5">
          <div className="col-10">
            <input
              onChange={this.props.searchMovieProp}
              type="text" className="form-control"
              placeholder="Search a Movie"
            />
          </div>
          <div className="col-2">
            <Link 
              to="/add"
              type="button"
              className="btn btn-md btn-danger"
              style={{ float: 'right' }}> Add Movie
            </Link>
          </div>
        </div>
      </form>


    )
  }
}




export default SearchBar;
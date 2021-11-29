import React from "react";
import serialize from "form-serialize";

class AddMovie extends React.Component {


  handleFormSumbit=(e) =>{
    e.preventDefault();
    const newMovie = serialize(e.target, { hash: true });
    console.log(newMovie);
    this.props.onAddMovie(newMovie);
  }


  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleFormSumbit}>
          <input className="form-control" id="disabledInput" type="text" placeholder="Fill the form add a Movie.." disabled />
          <div className="row">
            <div className="form group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input type="text"
                className="form-control"
                name="name" />
            </div>
            <div className="form group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input type="text"
                className="form-control"
                name="rating" />
            </div>
          </div>
          <div className="row">
            <div className="form group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input type="text"
                className="form-control"
                name="imageURL" />
            </div>
          </div>
          <div className="row">
            <div className="form group col-md-12">
              <label htmlFor="overviewTextarea">Overview URL</label>
              <textarea
                className="form-control"
                name="overview" rows="5"></textarea>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="form group col-md-12"></div>
          <input type="submit" className="btn btn-danger btn-block" value="Add Movie" />
          </div>
        </form>
      </div>

    )
  }
}



export default AddMovie;
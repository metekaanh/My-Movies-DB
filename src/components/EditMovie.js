import React from "react";
import axios from "axios";


class EditMovie extends React.Component {

  state = {
    name: "",
    rating: "",
    overview: "",
    imageURL: ""
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const response = await axios.get(`http://localhost:3002/movies/${id}`);
    console.log(response);
    const movieInfo = response.data;
    this.setState({
      name: movieInfo.name,
      rating: movieInfo.rating,
      overview: movieInfo.overview,
      imageURL: movieInfo.imageURL
    })



  }
  onInputChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSumbit = (e) => {
    e.preventDefault();

    /* const name=this.state.name;
    const rating=this.state.rating;
    const overview=this.state.overview;
    const imageURL=this.state.imageURL; */
    //JS özelliği sayesinde alttaki gibi kısa bir şekilde de yazılabilir.
    const { name, rating, overview, imageURL } = this.state;
    const id = this.props.match.params.id;

    const updatedMovie = {
      /*  name:name,
       rating:rating,
       overview:overview,
       imageURL:imageURL */
      //JS ES6 ile gelen özelliğe göre eğer iki tarafında isimleri aynıysa aşağıdaki gibi yazılabilr
      name,
      rating,
      overview,
      imageURL

    }

    this.props.onEditMovie(id,updatedMovie);
    this.props.history.push('/');
  }


  render() {
    return (
      <div className="container">
        <form className="mt-5" onSubmit={this.handleFormSumbit}>
          <input className="form-control" id="disabledInput" type="text" placeholder="EDIT the form to UPDATE a Movie.." disabled />
          <div className="row">
            <div className="form group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.onInputChange} />
            </div>
            <div className="form group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input type="text"
                className="form-control"
                name="rating"
                value={this.state.rating}
                onChange={this.onInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="form group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input type="text"
                className="form-control"
                name="imageURL"
                value={this.state.imageURL}
                onChange={this.onInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="form group col-md-12">
              <label htmlFor="overviewTextarea">Overview URL</label>
              <textarea
                className="form-control"
                name="overview"
                rows="5"
                value={this.state.overview}
                onChange={this.onInputChange}>
              </textarea>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="form group col-md-12"></div>
           <input type="submit" className="btn btn-danger btn-block" value="Edit Movie" />
          </div>
        
        </form>
      </div>

    )
  }
}



export default EditMovie;
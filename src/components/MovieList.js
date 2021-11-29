import React from "react";
import { Link } from "react-router-dom";





const MovieList = (props) => {

    const truncateOverview=(string,maxLength) =>{
        if (!string) return null;
        if (string.length <= maxLength ) return string;
        return `${string.substring(0,maxLength)} ...`
    }

    return (
        <div className="row">


            {props.movies.map((movie,i) => (

                <div className="col-lg-4" key={i}>
                    <div className="card mb-4 shadow-sm">
                        <img className="card-img-top" src={movie.imageURL} alt="Sample Movie" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{truncateOverview(movie.overview,100)}</p>
                            <div className="d-flex justify-content-between aling-items-center">
                                <button type="button" onClick={(event)=>props.deleteMovieProp(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                                <Link 
                                type="button"  
                                className="btn btn-md btn-outline-primary"
                                to={`edit/${movie.id}`}
                                >Edit</Link>
                                {/* <button type="button" onClick={handleClick} className="btn btn-md btn-outline-danger">Delete</button> */}
                                <h2><span className="badge bg-info text-light">{movie.rating}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>

            ))}


        </div>
    )

}

export default MovieList;
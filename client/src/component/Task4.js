import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import '../App.css';


export default function Task4(){

    const [movdetails,setMovdetails] = useState([]);

    fetch('https://jsonmock.hackerrank.com/api/moviesdata/search/')
    .then(function(res){res.json()})
    .then(function(res){console.log(res)});


    return(
    <>
        <div className="container" >
            <div className="row">
                <div className="col-lg-12">
                    <Menu />
                </div>
            </div>
        </div>
        <div className="container mt-2">
            <div className="row">
                <div className="col-lg-12">
                <p className="text-center"><b>Movie Title</b></p>
                </div>
            </div>
        </div>
        <div className="container mt-3">
            <div className="table-responsive">
                <table className="table tabel-bordered">
                    <thead>
                        <tr>
                            <td>Movie Title</td>
                        </tr>
                    </thead>
                    <tbody>
                        {movdetails.map((value,index)=>(
                            <tr>
                                <td>{value.data.Title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    </>
    )
}

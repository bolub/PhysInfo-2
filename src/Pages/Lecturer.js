import React, { Component } from 'react';
import axios from 'axios';
import {MDBContainer} from 'mdbreact';
import Spinner from '../UI/Spinner';

class Lecturer extends Component {
    state = {
      Lecturers: [],
      loading:true,
      width: window.innerWidth
    }

    componentDidMount(){
        axios.get('http://localhost:3001/lecturers-json')
        .then(response=> this.setState({Lecturers:response.data, loading:false}, console.log(response)));
        ;
    }

    handleWindowSizeChange = () => {
        this.setState({
            width: window.innerWidth
        })
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
  render() {
    let lecturers = (
         <div className="d-flex align-items-center justify-content-center" style={{marginTop:"10rem"}}>
            <Spinner/>
        </div>
    );

    const { width } = this.state;
    const isMobile = width <= 769;

    if(!this.state.loading){
        if (isMobile) {
            lecturers = (
                <>
                    {this.state.Lecturers.map(lecturer =>{
                        return(
                            <div className="card my-4 text-white rounded-0 col-10 shadow" key={lecturer._id}>
                                <div className="card-body">
                                    <h4 className="card-title">{lecturer.name}</h4>
                                    <p className="card-text text-white">{lecturer.areaOfSpecialization}</p>
                                </div>
                            </div>
                        );
                    })}
                </>
            );

         } else {
            lecturers = (
                <table className="table table-responsive table-hover"> 
                    <thead className="thead-inverse">
                        <tr>
                            <th className="px-5" scope="col-span">#</th>
                            <th className="px-5" scope="col-span">Name</th>
                            <th className="px-5" scope="col-span">Post</th>
                            <th className="px-5" scope="col-span">Area of Specialization</th>
                            <th className="px-5" scope="col-span">Room number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Lecturers.map((lecturer, index) =>{
                        return(
                            <tr key={lecturer._id}>
                                <th className="px-5" scope="row">{index + 1}</th>
                                <td className="px-5">{lecturer.name}</td>
                                <td className="px-5">{lecturer.post}</td>
                                <td className="px-5">{lecturer.areaOfSpecialization}</td>
                                <td className="px-5">{lecturer.roomNumber}</td>
                            </tr>
                        );
                    })}   
                    </tbody>
                </table>
            );
        }
    }   

    return (
        <>
            <div className="text-white">
                <h1 className="text-center mt-4">List of Lecturers</h1>
                <MDBContainer>
                    {lecturers}
                </MDBContainer>
                
            </div>
      </>
    )
  }
}

export default Lecturer;
import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Row from "../components/Row";
import Container from "../components/Container";
import Column from "../components/Column";
import "./styles.css";


    class Employees extends Component {
        state= {
            allResults: [],
            allResultsParsed:[],
            results: []
        };
         componentDidMount() {
    API.findPeople().then(res => {
      this.setState({
        allResults: res.data.results,
        allResultsParsed: res.data.results,
        results: res.data.results
      });
    });
  }

  handleSearchFirst= (event) => {
      const firstName = event.target.value;
      this.sortPeopleFirst(firstName);
  }
  handleSearchLast= (event)=> {
      const lastName = event.target.value;
      this.sortPeopleLast(lastName);
  }
    sortPeopleFirst = (value) => {
    let searchResults = this.state.allResults.filter((x) => { 
      return x.name.first.toLowerCase().includes(value);
    }) 
    this.setState({
      allResultsParsed: searchResults
    })
  }
  //function to sort by last name 
    sortPeopleLast = (value) => {
    let searchResults = this.state.allResults.filter((x) => { 
      return x.name.last.toLowerCase().includes(value)
    }) 
    this.setState({
      allResultsParsed: searchResults
    })
  }
  render() {
      const results= this.state.allResultsParsed;
      return(
      <div>
          <h1 className='text-center'>Noor LLC Employees</h1>
          <form className='search-form form-inline'>
              <div>
                    <input className="employeeSearch" placeholder="Search for Employee's Last Name" onChange={this.handleSearchLast}/>
              </div>
          </form>
        <Container>
          <Row>
            {
              results.map((employees, i) => (
                <Column key={i}>
                  <Card
                    image={employees.picture.large}
                    firstName={employees.name.first}
                    lastName={employees.name.last}
                    fullname = {employees.name.first + employees.name.last}
                    age={employees.dob.age}
                    DOB={employees.dob.date}
                    phoneNum={employees.phone}
                    email={employees.email}
                   
                  />
                </Column>
              ))
            }
          </Row>
        </Container>
      </div>
      );
  }

    }

    export default Employees;
import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
import employees from "./employees.json"; 

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(Employee => Employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.employees.map(Employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={Employee.id}
            key={Employee.id}
            name={Employee.name}
            age={Employee.age}
            email={Employee.email}
            image={Employee.image}
            occupation={Employee.occupation}
            location={Employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

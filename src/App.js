import React, { Component, Fragment } from 'react';
//import faker from 'faker/locale/en_IND';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: {
        name: 'adlin',
        age: 20,
        company: 'testyntra',
        time: new Date().toLocaleDateString(),
      },
    };
    this.UpadteTime();
  }

  UpadteTime() {
    setInterval(() => {
      let time = new Date().toLocaleDateString();
      //console.log(time);
      this.setState({
        students: {
          time: time,
        },
      });
    }, 1000);
  }

  UpdateStudents = () => {
    this.setState({
      students: {
        name: 'ruphi',
        age: 89,
        company: 'tcs',
      },
    });
  };

  render() {
    return (
      <Fragment>
        <h1>set state</h1>
        <h4>Time : {this.state.students.time}</h4>
        <h4>name:{this.state.students.name}</h4>
        <h4>age: {this.state.students.age}</h4>
        <h4>company:{this.state.students.company}</h4>
        <button className="btn btn-danger" onClick={this.UpdateStudents}>
          update Now
        </button>
      </Fragment>
    );
  }
}

export default App;

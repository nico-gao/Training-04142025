import React from "react";

// props
class ClassDemo extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // console.log(props);

  //   this.state = {
  //     counter: 0,
  //   };

  //   // bind method
  //   this.handleAdd = this.handleAdd.bind(this);
  // }

  // shorthand way to initialize component state
  state = {
    counter: 0,
    timer: 0,
  };

  // handleAdd() {
  //   // console.log(this);
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  // }

  // automatically bind this context
  handleAdd = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    // console.log(this.props);
    // console.log(this.state);
    console.log("component rendered");
    return (
      <div>
        <h3>Class Component Demo</h3>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleAdd}>Add 1 to counter</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.intervalId = setInterval(() => {
      console.log("timer is running");
      // this.setState({
      //   timer: this.state.timer + 1,
      // });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("current time:", this.state.timer);
    // console.log("componentDidUpdate");
    // if (this.state.counter >= 10) {
    //   console.log("reached maximum");
    // }
  }

  // cleanup
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.intervalId);
  }
}

export default ClassDemo;

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greeting() {
//     console.log(this.name);
//   }
// }

// const p1 = new Person("alice");
// p1.greeting();

// const hello = p1.greeting;

// console.log(this);
// hello();

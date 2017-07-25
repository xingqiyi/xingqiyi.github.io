import React, { Component } from "react";
import "./Slide.css";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    // this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
    // this.state.date = new Date();
  }

  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

// es5 写法
// var HelloMessage = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h1>
//           Hello {this.props.name}
//         </h1>
//         <span className="spanTest">myyyyyyyy</span>
//       </div>
//     );
//   }
// });

// es6 写法
class HelloMessage extends Component {
  render() {
    return (
      <div>
        <h1>
          Hello {this.props.name}
        </h1>
        <span className="spanTest">myyyyyyyypp</span>
        <Clock />
      </div>
    );
  }
}

class Slide extends Component {
  render() {
    return <HelloMessage name="slide" />;
  }
}

export default Slide;

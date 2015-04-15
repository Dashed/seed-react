webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Timer = React.createClass({
	  displayName: "Timer",
	
	  getInitialState: function getInitialState() {
	    return { secondsElapsed: 0 };
	  },
	  tick: function tick() {
	    this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
	  },
	  componentDidMount: function componentDidMount() {
	    this.interval = setInterval(this.tick, 1000);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    clearInterval(this.interval);
	  },
	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      "Seconds Elapsed: ",
	      this.state.secondsElapsed
	    );
	  }
	});
	
	React.render(React.createElement(Timer, null), document.getElementById("content"));
	
	console.log("hello world");

/***/ }
]);
//# sourceMappingURL=app.js.map
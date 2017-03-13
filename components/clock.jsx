import React from 'react';

export default React.createClass({
  constructor(props) {
    super(props);
    navigator.geolocation.getCurrentPosition(function(position) {
      this.coords = [position.coords.latitude, position.coords.longitude];
    });
  }

  render() {
    console.log(this.coords);
    return (
      <div className="clock-wrapper"></div>
    );
  }

});

import React from 'react';
import storeProvider from './storeProvider';

class Timestamp extends React.Component {

  static timeDisplay = (timestamp) =>
    timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

  render() {
    return (
      <div>
        {this.props.timestampDisplay}
      </div>
    );
  }
}

function extraProps(store) {
  return {
    //use this to change the timestamp from state but use scu for render method to change
    // timestamp: store.getState().timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
    timestampDisplay: Timestamp.timeDisplay(store.getState().timestamp),
  };
}

const TimestampContainer = storeProvider(extraProps)(Timestamp);

export default TimestampContainer;
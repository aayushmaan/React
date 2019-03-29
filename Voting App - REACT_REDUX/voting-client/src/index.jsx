import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import io from 'socket.io-client';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import App from './components/App';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results'

//const pair = ['Trainspotting','28 Days Later'];
//const store = createStore(reducer);

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

/*
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: {Sunshine: 2}
    }
  }
});
*/


const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
          store.dispatch(setState(state))
          
          //using action_creator above
          //store.dispatch({type: 'SET_STATE', state})
          );


//replaced Voting with VotingContainer
const routes = <Route component={App}>
  <Route path="/results" component={ResultsContainer} />
  <Route path="/" component={VotingContainer} />
</Route>;

ReactDOM.render(
    //<Voting pair={pair} />, // hasVoted="Trainspotting" winner="Trainspotting"/>,
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
      </Provider>,
    document.getElementById('app')
);
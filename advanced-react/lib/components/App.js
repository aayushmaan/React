import React from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';


class App extends React.PureComponent {
  static childContextTypes = {
    store: PropTypes.object,
  };
  //Globalises props... Redux is a better option
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  appState = () => {
    const { articles, searchTerm } = this.props.store.getState();
    return { articles, searchTerm };
  }

  state = this.appState();

  onStoreChange = () => {
    this.setState(this.appState);
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }
  
  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  //if we use this fn we have to update this on every update of render()
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextState.articles !== this.state.articles
  //     || nextState.searchTerm !== this.state.searchTerm
  //   );
  // }

  render() {
    let { articles, searchTerm } = this.state;
    const searchRE = new RegExp(searchTerm, 'i');

    if(searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchRE)
          || value.body.match(searchRE);
      });
    }
    return (  
      <div>
        <Timestamp />
        <SearchBar /> 
        <ArticleList
          articles={articles}
        />
      </div>
    );
  }
}

export default App;
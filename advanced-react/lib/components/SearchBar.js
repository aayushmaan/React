import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';
//import PropTypes from 'prop-types';

class SearchBar extends React.PureComponent {
  state = {
    searchTerm: ''
  };

  doSearch = debounce(() => {
    //this.props.doSearch(this.state.searchTerm);
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 300);

  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value }, () => {
      this.doSearch();
    });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log('Updating SearchBar');
  // }
  
  
  render() {
    return (
      <input 
        // ref={(input) => this.searchInput = input}
        value={this.state.searchTerm}
        type="search"
        placeholder="Enter Search Term"
        onChange={this.handleSearch}
      />
    );
  }
}

const SearchBarContainer = storeProvider()(SearchBar);

export default SearchBarContainer;
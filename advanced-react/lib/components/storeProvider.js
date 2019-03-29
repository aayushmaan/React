//Higher Order Component
import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => ({})) => (Component) => {
  return class extends React.PureComponent {
   static displayName = `${Component.name}Container`;

    static contextTypes = {
      store: PropTypes.object,
    };

    usedState = () => {
      return extraProps(this.context.store, this.props);
    }

    state = this.usedState();

    //Child components can subsctibe to external state
    onStoreChange = () => {
      if(this.subscriptionId) {
        // this.forceUpdate();
        this.setState(this.usedState());
      }
      // this.setState(this.props.store.getState());
    }
  
    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
      // this.props.store.startClock();
    }
    
    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }
    //end

    // componentWillUpdate(nextProps, nextState) {
    //   console.log(this.state, nextState);
    // }

    render() {
      return <Component 
        {...this.props} 
        {...this.usedState()}
        store={this.context.store} />;
    }
  };
  // const WithStore = (props, { store }) =>
  //   <Component {...props} store={store} />;
    
  // WithStore.contextTypes = {
  //   store: PropTypes.object,
  // };

  // WithStore.displayName = `${Component.name}Container`;

  // return WithStore;
};

export default storeProvider;
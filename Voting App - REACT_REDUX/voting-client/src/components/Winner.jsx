import React from 'react';
import PreRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins:[PreRenderMixin],
    render: function() {
    return <div className="voting">
        {this.props.winner ?
        <div ref="winner">Winner is {this.props.winner}!
            </div>;
    }
});
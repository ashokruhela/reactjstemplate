var React  = require('react');
var InputReason = require('InputReason');

module.exports = React.createClass({
    getDefaultProps: function () {
        return {
            name : "rahul",
            message : "this is input boxes in react example"
        };
    },
    getInitialState : function () {
        return {
            name : this.props.name,
            message : this.props.message
        };
    },
    
    render : function () {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <h1>{this.props.children}</h1>
                <h1>Hello {name}!!</h1>
                <InputReason onNameChanged = {this.onFormSubmit}/>
                <p>The message entered is {message}</p>
            </div>
        );
    },

    onFormSubmit : function (updates) {
        this.setState({
            name : updates.name,
            message : updates.message
        });
    }
});

var React = require('react');
var InputReason = React.createClass({
    
    render : function(){
        
        return (
            <form onSubmit={this.onButtonSubmit}>
                <div>
                    <input type="text" ref="name"/><br/>
                    <textarea type="text" ref="message" placeholder="enter your message here!"/><br/>
                    <button>Submit</button>
                </div>
                    
                    
            </form>
        );
    },

    onButtonSubmit : function(e) {
        e.preventDefault();
        var nameRef = this.refs.name;
        var messageRef = this.refs.message;
        var updates = {};
        if(typeof nameRef.value === "string" && nameRef.value.length > 0) {
            updates.name = nameRef.value;
            nameRef.value = "";
        }

        if(typeof messageRef.value === "string" && messageRef.value.length > 0) {
            updates.message = messageRef.value;
            messageRef.value = "";
        }

        this.props.onNameChanged(updates);
        nameRef.focus();
        
    }
});

module.exports = InputReason;
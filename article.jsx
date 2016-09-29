var Article = React.createClass({
    getInitialState: () => {
        return {open: true};
    },
    toggle: function() {
        this.setState({open: !this.state.open});
    },
    render: function() {
        console.log("rendering article", this.props);

        let content = (
            <div>
                <div>{this.state.open && this.props.content || 'THIS ARTICLE IS HIDDEN'}</div>
                <button onClick={this.toggle}>{this.state.open && 'HIDE' || 'SHOW'}</button>
            </div>
        );

        return (
            <div>
                {content}
            </div>
        );
    }
});


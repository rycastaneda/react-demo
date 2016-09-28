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
                <div>{this.props.content}</div>
                <button onClick={this.toggle}>HIDE</button>
            </div>
        );

        if (!this.state.open) {
            content = (
                <div>
                    <p>Article HIDDEN</p>
                    <button onClick={this.toggle}>SHOW</button>
                </div>
            )
        }

        return (
            <div>
                {content}
            </div>
        );
    }
});


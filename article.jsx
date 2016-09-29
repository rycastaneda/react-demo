var Article = React.createClass({
    // shouldComponentUpdate: function (nextProps, nextState) {
        // console.log("change?", this.props.open !== nextProps.open);
        // return this.props.open !== nextProps.open;
    // },
    render: function() {
        console.log("rendering article", this.props);
        var article = this.props;

        let content = (
            <div>
                <div>{article.open && article.content || 'THIS ARTICLE IS HIDDEN'}</div>
                <button onClick={(e)=>{
                    this.props.onToggle(article)
                }}>{article.open && 'HIDE' || 'SHOW'}</button>
            </div>
        );


        return (
            <div>
                {content}
            </div>
        );
    }
});


var Article = React.createClass({
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


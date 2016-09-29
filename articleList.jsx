var ArticleList = React.createClass({
    getInitialState: function() {
        return {
            articles: [{
                content: 'First Article',
            }, {
                content: 'Second Article'
            }]
        };
    },
    render: function() {
        console.log("rendering articleLList");
        let articles = this.state.articles.map((article) => {
            return (
                <Article content={article.content}></Article>
            );
        });

        return (
            <div>
                {articles}
            </div>
        );
    }
});
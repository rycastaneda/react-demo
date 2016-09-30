var ArticleList = React.createClass({
    getInitialState: function() {
        return {
            articles: [{
                id: 1,
                content: 'First Article',
            }, {
                id: 2,
                content: 'Second Article'
            }]
        };
    },
    render: function() {
        console.log("rendering articleList", this.state.articles);
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
var ArticleList = React.createClass({
    getInitialState: function() {
        return {
            articles: [{
                id: 1,
                content: 'First Article',
                open: true
            }, {
                id: 2,
                content: 'Second Article',
                open: true
            }],
            allShown: true
        };
    },
    toggleAll: function () {
        let articles = this.state.articles.map((article) => {
            article.open = !article.open;
            return article;
        });

        this.setState({
            allShown: !this.state.allShown,
            articles: articles,
        });
    },
    toggle: function (article) {
        // article.open = !article.open;
        // this.forceUpdate();
        var articles = this.state.articles;

        var idx = articles.findIndex(function(element, index) {
            return element.id === article.id;
        });

        articles[idx].open = !articles[idx].open;
        this.setState({
            articles: articles
        })
    },
    render: function() {
        console.log('rendering Aritcle Lists', this.state.articles)
        let articles = this.state.articles.map((article) => {
            return (
                <Article {...article} onToggle={this.toggle}></Article>
            );
        });

        return (
            <div>
                <button onClick={this.toggleAll}>
                {this.state.allShown ? 'Hide' : 'Show'}
                </button>
                {articles}
            </div>
        );
    }
});
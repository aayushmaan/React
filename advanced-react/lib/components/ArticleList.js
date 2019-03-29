import React from 'react';
import Article from './Article';

class ArticleList extends React.PureComponent {
  render() {
    return (
      Object.values(this.props.articles).map((article) =>
        <Article
          key={article.id}
          article={article}
        />
      )
    );
  }
}

export default ArticleList;
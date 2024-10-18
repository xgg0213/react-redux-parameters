import './SingleArticle.css';
import { useParams } from 'react-router-dom'; // To get the article ID from the URL
import { useSelector } from 'react-redux';

const SingleArticle = () => {
  // Extract the article ID from the URL
  const { id } = useParams();
  
  // Get the articles array from Redux state
  const articles = useSelector(state => state.articleState.entries);
  // console.log(articles)

  // Find the article that matches the articleId
  const article = articles.find(a => a.id === id);

  // If no article is found, you can handle the error (optional)
  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <div className='singleArticle'>
      <h1>{article.title}</h1>
      <img
        // src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frobcain%2Ffiles%2F2017%2F10%2FKevin-Home-Alone.jpg'
        // alt='home'
        src={article.imageUrl}
        alt={article.title}
      />
      <p>
        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse
        laboriosam officia accusantium veritatis fugiat exercitationem vero
        autem nihil aliquid ullam recusandae, quis odit odio voluptates
        explicabo nobis! Consequuntur, aliquam? */}
        {article.body}
      </p>
    </div>
  );
};

export default SingleArticle;

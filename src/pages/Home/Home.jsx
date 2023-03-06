import { getAllRecipes } from '../../service/Api';
import { useState, useEffect } from 'react';
import { CardList } from './Home.styled';
import { Card } from 'components/Card/Card';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes(currentPage).then(response => setRecipes(response.results));
  }, [currentPage]);

  const loadMore = () => {
    getAllRecipes(currentPage).then(response =>
      setRecipes(prev => [...prev, response.results])
    );
    setCurrentPage(prev => prev + 1);
    console.log(currentPage);
  };

  return (
    <>
      <CardList>
        {recipes.map(recipe => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </CardList>
      <button type="button" onClick={loadMore}>
        Load more...
      </button>
    </>
  );
};

export default Home;

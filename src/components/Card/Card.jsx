import { CardImg, CardItem } from "./Card.styled";

export const Card = ({recipe}) => {
  return (
    <CardItem key={recipe.id}>
      <CardImg src={recipe.image} alt={recipe.title} />
      <p>{recipe.title}</p>
    </CardItem>
  );
};

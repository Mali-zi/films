import Star from "./Star";
interface StarsCount {
  starsCount: number;
};
function Stars({ starsCount }: StarsCount): JSX.Element {
  const stars = [];
  for (let i = 1; i < (starsCount + 1); i++) { 
    stars.push(
      <li key={i} className="stars-li">
        <Star />
      </li>
    )
      };
  
    return (
      <ul className="card-body-stars">
        {stars}
      </ul>
    );
  };

export default Stars;
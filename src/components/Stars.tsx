import Star from "./Star";
interface StarCount {
  count: number;
};

function Stars({ count }: StarCount):JSX.Element {
  const stars = [];
  for (let i = 1; i < (count + 1); i++) { 
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
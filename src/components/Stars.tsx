import Star from "./Star";
interface StarCount {
  count: 1 | 2 | 3 | 4 | 5;
};

// interface StarsType {
//   stars: JSX.Element[] | JSX.Element;
// };

function Stars({ count }: StarCount): JSX.Element {
  const stars = (() => {
      for (let i = 1; i < count; i++) {
        return (
          <li key={i}>
            <Star />
          </li>
        )
      }
    });
    return (
      <ul className="card-body-stars u-clearfix">
        {stars}
      </ul>
    );
  };

export default Stars;
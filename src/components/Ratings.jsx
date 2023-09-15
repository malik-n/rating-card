/* eslint-disable react/prop-types */
export const Ratings = ({ setRating, setIsSubmitted }) => {
  return (
    <div className="ratings">
      <img src="src/images/icon-star.svg" alt="" className="star-img"/>

      <div className="heading pt-2">
        <h3>How did we do?</h3>
      </div>
      <div className="para pt-2">
        <p>
          Please let us know we did with your support request. All feedback is
          appreciated to help us improve our offering!
        </p>
      </div>
      <div className="list pt-2">
        <ul>
          {[...Array(5)].map((_, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setRating(index + 1);
                   }}
              >
                {index + 1}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="button pt-2">
        <button
          onClick={() => {
            setIsSubmitted(true);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
  
};

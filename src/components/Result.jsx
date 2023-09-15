/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
export const Result = ({ rating }) => {
  return (
    <div className="result">
      <img src="src/images/thank-you.svg" alt="" />
      <p className="p1">You selected {rating} out of 5</p>
      <h2>Thank you!</h2>
      <p className="p2">We appreciate you taking the time to give a rating.
If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  );
};

import React from "react";

const getID = window.location.pathname.split('/')
const newID = getID[2]


function ReviewForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");




  const handleSubmit = (e) => {
    // console.log(e.target.review.value);

    e.preventDefault();
    fetch("http://localhost:3000/albums/reviews", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: 1, 
        album_id: newID,
        review_text: `${e.target.review.value}`,
       
      })
    })
      .then((res) => {
        console.log("res", res);
        setSubmitted(true);
        console.log(res.json());
        return res.json();
      })
      .catch((err) => {
        console.log("err", err);
        setError("Err");
      });
  };


  return (
    <>
      {submitted ? (
        <h4>Submitted Successfully</h4>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="review">Review</label>
          <input id="review" name="review" type="text" />
          <input type="submit" value="submit" />
        </form>
      )}
    </>
  );
}
// console.log('this is the location from getID', getID)
// console.log('the ID', newID)
  export default ReviewForm
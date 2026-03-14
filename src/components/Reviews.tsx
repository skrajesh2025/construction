import  Testimonials from "./Testimonials"

const Reviews = () => {
  return (
    <>
      {Testimonials.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.review}</p>
        </div>
      ))}
    </>
  );
};

export default Reviews;
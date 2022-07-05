import caffeInterior from "../assets/caffeInterior.jpg";

const Backdrop = () => {
  return (
    <div>
      <div className="backdrop"></div>
      <img src={caffeInterior} alt="caffe" className="image" />
    </div>
  );
};

export default Backdrop;

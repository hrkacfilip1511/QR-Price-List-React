import caffeBackdrop from "../../assets/coffeBg.jpg";

const CoffeBackdrop = () => {
  return (
    <div>
      <div className="coffe-backdrop"></div>
      <img src={caffeBackdrop} alt="caffe" className="coffeBg-image" />
    </div>
  );
};

export default CoffeBackdrop;

import beerBackdrop from "../../assets/beerBg.jpg";

const BeerBackdrop = () => {
  return (
    <div>
      <div className="beer-backdrop"></div>
      <img src={beerBackdrop} alt="caffe" className="beerBg-image" />
    </div>
  );
};

export default BeerBackdrop;

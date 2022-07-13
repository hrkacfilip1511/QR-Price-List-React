import alcoholBackdrop from "../../assets/alcoholBg.jpg";

const AlcoholBackdrop = () => {
  return (
    <div>
      <div className="alcohol-backdrop"></div>
      <img src={alcoholBackdrop} alt="alcohol" className="alcoholBg-image" />
    </div>
  );
};

export default AlcoholBackdrop;

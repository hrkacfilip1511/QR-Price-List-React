import wineBackdrop from "../../assets/wineBg.jpg";

const WineBackdrop = () => {
  return (
    <div>
      <div className="wine-backdrop"></div>
      <img src={wineBackdrop} alt="wine" className="wineBg-image" />
    </div>
  );
};

export default WineBackdrop;

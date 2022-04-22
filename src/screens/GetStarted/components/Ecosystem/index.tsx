import CoilImg from '../../img/coil.png';
import './style.css';

const Ecosystem = () => {
  const a = 1;

  return (
    <div className="ecosystem-container">
      <img src={CoilImg} alt="" width={512} height={512} />

      <div className="ecosystem-text-block">
        <span className="ecosystem-title">Our ecosystem</span>

        <span className="ecosystem-slogan">Art of the future.</span>

        <span className="ecosystem-description">
          NFT Based is an experiment in decentralized spontaneous community building.
          <br />
          This token is our first token and allows users to hold Billions or even
          <br />
          Trillions of them. Popular worldwide, and already up thousands of percent,
          <br />
          Shiba token ($Shib) is the first cryptocurrency token to be listed and incentivized
          <br />
          on ShibaSwap, our decentralized exchange. The remaining 50% was burned to
          <br />
          <br />
          Vitalik Buterin and we were the first project following this path, so everyone
          <br />
          has to buy on the open market, ensuring a fair and complete distribution where devs don
          {'&apos;'}
          <br />t own team tokens they can dump on the community.
        </span>
      </div>
    </div>
  );
};

export default Ecosystem;

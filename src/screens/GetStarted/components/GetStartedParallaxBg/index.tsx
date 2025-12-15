// import { Parallax } from 'react-parallax';
import './style.css';
import { useSelector } from 'react-redux';
import bg1path from '../../img/bg-1.png';
import bg2path from '../../img/bg-2.png';
import bg3path from '../../img/bg-3.png';
import { generateId } from '../../../../utils';
import { IRootState } from '../../../../store';

const GetStartedParallaxBg = () => {
  const imagesData = [
    {
      path: bg2path,
      strength: -300,
    },
    {
      path: bg3path,
      strength: -500,
    },
  ];

  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  return (
    <div className="parallax-bg-container">
      <img src={bg1path} alt="" className="parallax-bg-static-bg" />
      {/* {imagesData.map(({ path, strength }) => (
        <Parallax
          key={generateId()}
          blur={0}
          strength={strength}
          bgImage={path}
          bgImageStyle={{
            width: isDeviceMobile ? window.screen.width * 1.6 : window.screen.width * 1.2,
            height: isDeviceMobile ? window.screen.height * 1.2 : window.screen.height * 1.6,
            position: 'fixed',
          }}
          style={{
            position: 'absolute',
            zIndex: -3,
            overflow: 'visible',
            width: window.screen.width,
            height: document.body.offsetHeight,
          }}
        />
      ))} */}
    </div>
  );
};

export default GetStartedParallaxBg;

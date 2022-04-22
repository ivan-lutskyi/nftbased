/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from 'react';

import ReactPlayer from 'react-player';

import { useSelector } from 'react-redux';
import { IRootState } from '../../../../store';

import './style.css';
import './style.mobile.css';

import { ReactComponent as Player } from './img/player.svg';
import Text from '../../../../components/Text';

const url = 'https://www.youtube.com/watch?v=o8soJjG1uiQ&ab_channel=NFTbased';

const VideoScreen = () => {
  const isDeviceMobile = useSelector((state: IRootState) => state.core.device) === 'MOBILE';

  const [isPlaying, setPlaying] = useState(false);

  return isDeviceMobile ? (
    <div className="home-video-container-mobile">
      <Text className="home-video-title-mobile" size="h1" color="white">
        Make a wise investment
      </Text>

      <a
        href="https://www.youtube.com/watch?v=o8soJjG1uiQ&ab_channel=NFTbased"
        className="home-video-start-mobile"
      >
        <Player />

        <Text size="h3" color="white">
          Watch explainer
        </Text>
      </a>
    </div>
  ) : (
    <div className="home-video-container">
      <ReactPlayer
        className="react-player"
        url={url}
        controls={false}
        autoPlay
        playing
        muted
        loop
        width="100%"
        height="100%"
      />
      {isPlaying ? (
        <ReactPlayer
          className="react-player"
          url={url}
          controls
          autoPlay
          playing
          width="100%"
          height="100%"
        />
      ) : (
        ''
      )}

      {isPlaying ? (
        <>
          <Text className="home-video-title lefted" size="h1" color="white" fontFamily="Suranna">
            Make a wise investment
          </Text>
        </>
      ) : (
        <>
          <Text className="home-video-title" size="h1" color="white" fontFamily="Suranna">
            Make a wise investment
          </Text>

          <div
            className="home-video-container"
            style={{ zIndex: 7 }}
            onClick={() => setPlaying(true)}
          >
            <div className="home-video-start-mobile" />
          </div>
        </>
      )}
    </div>
  );
};

export default VideoScreen;

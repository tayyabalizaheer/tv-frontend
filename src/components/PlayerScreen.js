import React, { useEffect, useRef, useState } from "react";
import $ from 'jquery';

import VideoJS from './VideoJs'


export default function PlayerScreen() {
  const videoNode = $('#player-url').val();
  console.log(videoNode);
  const playerRef = React.useRef(null);
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: false,
    fill: false,
    fluid: true,
    sources: [{
      src: videoNode,
      type: 'application/x-mpegURL'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
  };


  return (
    <>
    <section className="gen-section-padding-2">
        <div className="container">
            <div className="row mt-3 justify-content-center">
              <div className="col-lg-8">
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
              </div>
            </div>
        </div>
    </section>
    </>
      
  )
}


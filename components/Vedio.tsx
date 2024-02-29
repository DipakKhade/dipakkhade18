import React from "react"; 
import YouTube from "react-youtube"; 
  
export default class YoutubeVideo  
extends React.Component { 
  render() { 
    const opts = { 
      height: "290", 
      width: "330", 
      playerVars: { 
        autoplay: 1, 
      }, 
    }; 
  
    return ( 
      <div> 
        <YouTube videoId="HbbJJwEMvQY?si=xDvMKDXG4Mmt9XUW" 
            opts={opts} onReady={this._onReady} /> 
      </div> 
    ); 
  } 
  
  _onReady(event:any) { 
    event.target.pauseVideo(); 
  } 
} 
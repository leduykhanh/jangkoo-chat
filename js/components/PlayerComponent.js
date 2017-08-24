import React, {
  Component,
} from 'react';
import { Player } from 'react-native-pili';

export default class PlayerComponent extends React.Component {

  render(){
    return <Player
  source={{
    uri:"rtmp://184.72.239.149/vod",
    timeout: 10 * 1000, //live streaming timeout (ms) Android only
    live:true, //live streaming ? Android only
    hardCodec:false, //hard codec [recommended false]  Android only
    }}
    style={{
      height:200,
      width:200,
    }}
    onLoading={()=>{}} //loading from remote or local
    onPaused={()=>{}} //pause event
    onShutdown={()=>{}} //stopped event
    onError={()=>{}} //error event
    onPlaying={()=>{}} //play event
    />
    }
}

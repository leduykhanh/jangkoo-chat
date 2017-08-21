import React, {
  Component,
} from 'react';
import { Streaming } from 'react-native-pili';

export default class StreamingComponent extends React.Component {

  render(){
    return <Streaming
            rtmpURL={"rtmp://pili-publish.pilitest.qiniucdn.com/pilitest/demo_test?key=6eeee8a82246636e"}
            style={{
                height:400,
                width:400,
            }}
            zoom={1}
            muted={true}
            focus={false}
            profile={{
               video:{
                 fps:30,
                 bps:1000 * 1024,
                 maxFrameInterval:48
               },
               audio:{
                 rate:44100,
                 bitrate:96 * 1024
               },
               encodingSize:1
               }}
            started={false}
            onReady={()=>{}}
            onConnecting={()=>{}}
            onStreaming={()=>{}}
            onShutdown={()=>{}}
            onIOError={()=>{}}
            onDisconnected={()=>{}}
            />
    }
}

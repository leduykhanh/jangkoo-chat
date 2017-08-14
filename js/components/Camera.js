'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  ToastAndroid
} from 'react-native';
import { Icon, Button, Container} from 'native-base';
import Camera from 'react-native-camera';
import { Actions } from 'react-native-router-flux';
// import {chooseImage} from '../../actions/inspection';
import Data from '../middlewares/Data';

class CameraPage extends Component {
  constructor(){
    super();
    this.state = {
      taken:false,
      imageUrl:null,
      uploading:false
    }
  }
  render() {
    return (
      <Container style={styles.container}>
        {!this.state.taken ?
            <Camera
                ref={(cam) => {
              this.camera = cam;
            }}
                style={styles.preview}
                aspect={Camera.constants.Aspect.stretch}
                orientation="portrait"
            >
              <Button bordered rounded style={styles.capture} onPress={this.takePicture.bind(this)}>
                  <Icon name="camera" />
              </Button>
            </Camera>
            :
            <View padder>
                <Image source={{uri: this.state.imageUrl}}
                   style={styles.image}/>
                <View padder style={{flex: 1, flexDirection: 'row',justifyContent : 'center'}}>
                    <Button rounded success bordered onPress={this.state.uploading?null:this.chooseImage.bind(this)}>
                      <Icon name="cloud-upload" />
                      <Text>{this.state.uploading?"Uploading":"Upload"}</Text>
                    </Button>
                    <Button  rounded danger bordered onPress={this.cancel.bind(this)}>
                      <Icon name="cancel" />
                      <Text>Cancel</Text>
                    </Button>
                </View>
            </View>
        }
      </Container>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => {
        this.setState({taken:true, imageUrl:data.path});

      })
      .catch(err => console.error(err));
  }
  cancel(){
      this.setState({taken:false, imageUrl:null,uploading:false});
  }
  chooseImage(){
    this.setState({uploading:true});
    Data.api.upload_file(this.state.imageUrl)
            .then((response) => {
              if (!response.ok) throw Error(response.statusText || response._bodyText);
              return response.json();
            })
            .then((responseData) => {
                this.setState({uploading:false});
                this.props.chooseImage('http://jangkoo.com/projects/inspection/api/' + responseData.message);
            })
            .catch((error) => {
              console.log(error);
              ToastAndroid.show(String(error).replace('Error: ',''), ToastAndroid.LONG);
            })
            .done(() => {
              this.setState({loading: false});
              ToastAndroid.show("Done", ToastAndroid.LONG);
            });

  }
}
let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    height: ScreenHeight
  },
  image: {
    height: 0.7 * ScreenHeight,
    width: ScreenWidth,
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    color: '#000',
    padding: 5,
    marginBottom: 0.2 * ScreenHeight,
    marginLeft: 0.5 * ScreenWidth - 40
  }
};

function bindAction(dispatch) {
  return {

  };
}

const mapStateToProps = state => ({
  
});


export default connect(mapStateToProps, bindAction)(CameraPage);
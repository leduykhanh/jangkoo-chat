import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Launch from './components/Launch';
import Register from './components/Register';
import Login from './components/Login';
import Login2 from './components/Login2';
import Login3 from './components/Login3';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
} from 'react-native-router-flux';
import Error from './components/Error';
import Home from './components/Home';
import TabView from './components/TabView';
import TabIcon from './components/TabIcon';
import EchoView from './components/EchoView';
import Chat from './components/Chat';
import Camera from './components/Camera';
import AppList from './components/AppList';
import Button from 'react-native-button';
import MessageBar from './components/MessageBar';
import StreamingComponent from './components/StreamingComponent';
import PlayerComponent from './components/PlayerComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    // console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};
const getSceneStyle = () => ({
  backgroundColor: 'white',
  shadowOpacity: 1,
  shadowRadius: 3,
});

const Routes = () => {
  return (
    <Router createReducer={reducerCreate}  getSceneStyle={getSceneStyle}>
      <Scene overlay>
        <Scene key="messageBar" component={MessageBar} />
        <Scene key="lightbox" lightbox leftButtonTextStyle={{color: 'green'}} backButtonTextStyle={{color: 'red'}} initial>
          <Scene key="modal" modal hideNavBar>
            <Scene key="drawer" drawer contentComponent={TabView}>
              <Scene key="root" hideNavBar hideTabBar>
                <Scene key="echo" back clone component={EchoView} getTitle={({navigation}) => navigation.state.key}/>
                <Scene key="register" back>
                  <Scene key="_register" component={Register} title="Register"/>
                  <Scene key="register2" component={Register} title="Register2"/>
                  <Scene key="home" component={Home} title="Replace" type={ActionConst.POP_AND_PUSH}/>
                </Scene>
                <Scene key="launch" component={Launch} title="Launch" initial/>
                <Scene
                  key="tabbar"
                  gestureEnabled={false}
                  tabs
                  tabBarStyle={styles.tabBarStyle}
                  activeBackgroundColor='#ddd'
                >
                  <Scene
                    key="tab1"
                    title="Tab #1"
                    tabBarLabel="TAB #1"
                    icon={TabIcon}
                    navigationBarStyle={{backgroundColor: 'red'}}
                    titleStyle={{color: 'white'}}
                  >
                    <Scene
                      key="tab1_1"
                      component={TabView}
                      title="Tab #1_1"
                      onRight={() => alert('Right button')}
                      rightTitle="Right"
                    />
                    <Scene
                      key="tab1_2"
                      component={TabView}
                      title="Tab #1_2"
                      back
                      titleStyle={{color: 'black'}}
                    />
                  </Scene>
                  <Scene key="tab2" initial title="Tab #2" icon={TabIcon}>
                    <Scene
                      key="tab2_1"
                      component={TabView}
                      title="Tab #2_1"
                      renderRightButton={() => <Text>Right</Text>}
                    />
                    <Scene
                      key="tab2_2"
                      component={TabView}
                      title="Tab #2_2"
                      back
                      onBack={() => alert('onBack button!')}
                      backTitle="Back!"
                      panHandlers={null}
                    />
                  </Scene>
                  <Scene key="tab3" component={TabView} title="Tab #3" icon={TabIcon}/>
                  <Scene key="tab4" component={TabView} title="Tab #4" hideNavBar icon={TabIcon}/>
                  <Scene key="tab5" component={TabView} title="Tab #5" icon={TabIcon}/>
                </Scene>
              </Scene>
            </Scene>
            <Scene key="app" back>
              <Scene key="appList" title="App List" component={AppList} />
              <Scene key="chat" title="Messaging" component={Chat} />
              <Scene key="camera" title="Camera" component={Camera} />
              <Scene key="streaming" title="Streaming" component={StreamingComponent} />
              <Scene key="playing" title="playing" component={PlayerComponent} />
            </Scene>
            <Scene key="login">
              <Scene key="loginModal" component={Login} title="Login" leftTitle="Cancel" onLeft={Actions.pop}/>
              <Scene
                key="loginModal2"
                component={Login2}
                title="Login2"
                backTitle="Back"
                panHandlers={null}
                duration={1}
              />
              <Scene
                key="loginModal3"
                hideNavBar
                component={Login3}
                title="Login3"
                panHandlers={null}
                duration={1}
              />
            </Scene>
          </Scene>
          <Scene key="error" component={Error}/>
        </Scene>
      </Scene>
    </Router>
  );
}

export default Routes;

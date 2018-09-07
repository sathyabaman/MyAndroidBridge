import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloUser extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hey Welcome to MyAndroidBridge! This is a javascript ReactNative Page..</Text>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    backgroundColor: '#00aeef',
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    textColor: '#ef002b',
    margin: 10,
  },
});

AppRegistry.registerComponent('myandroidbridge', () => HelloUser);
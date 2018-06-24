import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Buttons from './components/Buttons'


export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Buttons
        type={'twitter'}
        shape={'circle'}
        buttonWidth={300}
        buttonHeight={50}
        // disabled={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyles: {
    color: 'orange'
  }
});

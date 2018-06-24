import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableNativeFeedback, ActivityIndicator, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

const propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.string,
  textStyle: Text.propTypes.style,
  buttonStyle: PropTypes.any,
  disabled: PropTypes.bool,
  disabledOpacity: PropTypes.number,
  onPress: PropTypes.func,
  isThisActive: PropTypes.number,
  buttonWidth: PropTypes.number,
  buttonHeight: PropTypes.number,
};
const defaultProps = {
  type: 'primary',
  buttonWidth: 200,
  buttonHeight: 50,
  text: 'Get Started',
  disabled: false,
  disabledOpacity: 0.5,
};

export default class Buttons extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  render() {
    const { text, buttonStyle, buttonWidth, buttonHeight, textStyle, type, shape, onPress, disabledOpacity, disabled,  } = this.props;
    const disabledStyle = disabled
      ? { opacity: 0.5}
      : null;
    let shapeStyle;

    if (['round'].includes(shape)) {
      shapeStyle = {
        borderRadius: buttonHeight / 4
      };
    }
    if (['circle'].includes(shape)) {
      shapeStyle = {
        borderRadius: buttonHeight / 2
      };
    }

    let content;
    if (type === 'primary') {
      content = (
        <View
          style={[
            styles.defaultButton,
            buttonStyle,
            shapeStyle,
            disabledStyle
          ]}>
          <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </View>
      );
    }
    else if (type === 'outline') {
      content = (
        <View
          style={[
            styles.defaultButton,
            styles.outline,
            buttonStyle,
            shapeStyle, 
          ]}>
          <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </View>
      );
    }
    else if (type === 'twitter') {
      content = (
        <View
          style={[
            styles.defaultButton,
            styles.twitter,
            buttonStyle,
            shapeStyle,
          ]}>
          <FontAwesome name="twitter" size={30} color="white" style={styles.logo} />
          <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </View>
      );
    }
    else if (type === 'google') {
      content = (
        <View
          style={[
            styles.defaultButton,
            styles.gmail,
            buttonStyle,
            shapeStyle,
          ]}>
          <FontAwesome name="google" size={30} color="white" style={styles.logo} />
          <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </View>
      );
    }
    else if (type === 'github') {
      content = (
        <View
          style={[
            styles.defaultButton,
            styles.github,
            buttonStyle,
            shapeStyle,
          ]}>
          <FontAwesome name="github" size={30} color="white" style={styles.logo} />
          <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </View>
      );
    }
    else if (type === 'linkedin') {
      content = (
        <View
          style={[
            styles.defaultButton,
            styles.linkedin,
            buttonStyle,
            shapeStyle,
          ]}>
          <FontAwesome name="linkedin" size={30} color="white" style={styles.logo} />
          <Text style={[styles.defaultText, textStyle]}>{text}</Text>
        </View>
      );
    }
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[
          styles.container,
          {
            width: buttonWidth,
            height: buttonHeight,
          },
        ]}
      >
        {content}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
  },
  logo: {
    marginRight: 20,
  },
  twitter: {
    backgroundColor: '#56A3EE',
  },
  github: {
    backgroundColor: '#333333'
  },
  gmail: {
    backgroundColor: '#CD3F18',
  },
  linkedin: {
    backgroundColor: '#0C81BB',
  },
  defaultButton: {
    flex: 1,
    padding: 8,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  defaultText: {
    fontSize: 16,
    color: 'white'
  }
});

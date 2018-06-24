import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Animated, StyleSheet, Image } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Spinner from 'react-native-spinkit';



const propTypes = {
  textAnim: PropTypes.object,
  loadingAnim: PropTypes.object,
  loadingSize: PropTypes.number,
  loadingWidth: PropTypes.number,
  loadingBackgroundColor: PropTypes.string,
  loadingText: PropTypes.string,
  textInsideLoading: PropTypes.bool,
  isLoading: PropTypes.bool,
  spinner: PropTypes.bool,
  spinnerSize: PropTypes.number,
  spinnerType: PropTypes.string,
  spinnerColor: PropTypes.string,
  text: PropTypes.string,
}

const defaultProps = {
 loadingSize: 30,
  loadingWidth: 3,
  // progressTintColor: '#00e0ff',
  loadingBackgroundColor: '#3d5875',

  spinnerSize: 25,
  spinnerType: 'Wave',
  spinnerColor: '#ffffff',
}

export default class Buttons extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  render() {
    let spinner = null;
    let text = null;
    let isLoading = null;
    let contentStyle = null;

    if ((this.props.text && !this.props.isLoading) || !this.props.textInsideProgress) {
      text = (
        <Animated.Text style={[styles.text, this.props.textStyle, this.props.textAnim]}>
          {this.props.text}
        </Animated.Text>
      )
    }

    // if(this.props.isLoading) {
    //   contentStyle = styles.progressContent;
    //   let progressContent;

    //   if (this.props.textInsideLoading) {
    //     progressContent = [
    //       this.props.loadingText && (
    //         <Animated.Text
    //           key="loadingText"
    //           style={[styles.text, this.props.textStyle, this.props.textAnim]}
    //         >
    //           {this.props.loadingText}
    //         </Animated.Text>
    //       ),
    //       this.props.text && (
    //         <Animated.Text
    //           key="text"
    //           style={[styles.text, this.props.textStyle, this.props.textAnim]}
    //         >
    //           {this.props.text}
    //         </Animated.Text>
    //       ),
    //     ];
    //   }
    //   const loadingAnim = this.props.textInsideLoading
    //     ? this.props.loadingAnim
    //     : null;
    //   isLoading = (
    //     <Animated.View style={[styles.progress, this.props.progressStyle, progressAnim]}>
    //       <AnimatedCircularProgress
    //         size={this.props.progressSize}
    //         width={this.props.progressWidth}
    //         fill={this.props.progressFill}
    //         tintColor={this.props.progressTintColor}
    //         backgroundColor={this.props.progressBackgroundColor}
    //       >
    //         {progressContent}
    //       </AnimatedCircularProgress>
    //     </Animated.View>
    //   );


    // }
    if (this.props.spinner && !this.props.isLoading) {
      contentStyle = styles.spinnerContent;
      spinner = (
        <Animated.View
          style={[styles.spinner, this.props.spinnerStyle]}
        >
          <Spinner
            isVisible
            style={[styles.spinner, this.props.spinnerStyle]}
            size={this.props.spinnerSize}
            type={this.props.spinnerType}
            color={this.props.spinnerColor}
          />
        </Animated.View>
      );
    }
    return (
      <View style={[styles.content, contentStyle]}>
        {image}
        {progress}
        {spinner}
        {text}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContent: {
    flexDirection: 'column',
  },
  spinnerContent: {
    flexDirection: 'column',
  },
  progress: {
    alignItems: 'center',
  },
  image: {
    marginRight: 12,
  },
  imageCenter: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  spinner: {
  },
  text: {
    letterSpacing: 10,
    fontSize: 12,
    flexDirection: 'row',
    color: 'white',
  },
  // textInsideProgress: {
  //   top: 0,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  // },
});
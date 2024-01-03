import {defaultColor} from '@src/utils/theme';
import React from 'react';
import {
  ActivityIndicator,
  Animated,
  Keyboard,
  StyleSheet,
  View,
} from 'react-native';

type Props = Record<string, never>;

type State = {
  show: boolean;
  message: string;
};

class LoadingPortal extends React.Component<Props, State> {
  showMessageTimeout: ReturnType<typeof setTimeout> | null = null;

  hideLoadingTimeout: ReturnType<typeof setTimeout> | null = null;

  textOpacity = new Animated.Value(0);

  static modal: LoadingPortal;

  showing = false;

  constructor(props: Props) {
    super(props);
    this.state = {
      show: false,
      message: '',
    };
    LoadingPortal.modal = this;
  }

  static show() {
    LoadingPortal.modal.show();
  }

  static hide() {
    LoadingPortal.modal.hide();
  }

  static setMessage(message: string) {
    LoadingPortal.modal.setMessage(message);
  }

  clearMessageTimeout() {
    if (this.showMessageTimeout) {
      clearTimeout(this.showMessageTimeout);
      this.showMessageTimeout = null;
    }
  }

  clearLoadingTimeout() {
    if (this.hideLoadingTimeout) {
      clearTimeout(this.hideLoadingTimeout);
      this.hideLoadingTimeout = null;
    }
  }

  show() {
    this.clearLoadingTimeout();
    if (!this.showing) {
      Keyboard.dismiss();
      this.showing = true;
      this.setState({show: true});
      if (!this.state.message) {
        this.showMessageTimeout = setTimeout(() => {
          this.setMessage('Xin vui lòng chờ trong giây lát');
        }, 5 * 1000);
      }
    }
  }

  hide() {
    if (this.showing) {
      this.hideLoadingTimeout = setTimeout(() => {
        this.showing = false;
        this.setState({show: false, message: ''});
        this.clearMessageTimeout();
        this.clearLoadingTimeout();
      }, 500);
    }
  }

  setMessage(message: string) {
    Animated.timing(this.textOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      this.setState({message}, () => {
        Animated.timing(this.textOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    });
    this.clearMessageTimeout();
  }

  render() {
    const {show} = this.state;
    return (
      <>
        {show && (
          <View {...StyleSheet.absoluteFillObject} style={styles.root}>
            <View style={styles.sub}>
              <ActivityIndicator color={defaultColor.primary} size="large" />
            </View>
          </View>
        )}
      </>
    );
  }
}

export default LoadingPortal;
const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(0,0,0,0.22)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sub: {
    padding: 30,
    backgroundColor: defaultColor.bg_secondayry,
    borderRadius: 10,
  },
});

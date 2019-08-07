import React from 'react';
import * as firebase from 'react-native-firebase';

const withAnalytics = (WrappedComponent) => (props) => {
  const { onPress, event, eventParams, ...otherProps } = props;

  const onPressWithAnalytics = () => {
    if (event) {
      firebase.analytics().logEvent(event, eventParams);
    }

    onPress();
  };

  return (
    <WrappedComponent
      {...otherProps}
      onPress={onPressWithAnalytics}
    />
  );
};

export default withAnalytics;

import React from 'react';
import withAnalytics from '../HOC/withAnalytics';
import { Button } from 'react-native';

function CommonButton({onPress, title}) {
  return (
    <Button
      onPress={onPress}
      title={title}
    />
  );
}

export default withAnalytics(CommonButton);

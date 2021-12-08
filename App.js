/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Animated, View} from 'react-native';
import {PinchGestureHandler} from 'react-native-gesture-handler';

const App = () => {
  let scale = new Animated.Value(1);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <PinchGestureHandler
        onGestureEvent={() => console.log('onGestureEvent')}
        onHandlerStateChange={() => console.log('onHandlerStateChange')}>
        <Animated.Image
          source={{uri: 'https://picsum.photos/200'}}
          style={{
            width: 400,
            height: 300,
            transform: [{scale}],
          }}
          resizeMode="contain"
        />
      </PinchGestureHandler>
    </View>
  );
};

export default App;

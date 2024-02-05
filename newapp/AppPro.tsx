import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

export default function AppPro(): JSX.Element {
  const isDarkmode = useColorScheme() === 'dark';
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.container,
        backgroundColor: isDarkmode ? 'gray' : 'white',
      }}>
      <Text style={isDarkmode ? styles.whiteText : styles.blackText}>
        Hello World!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
});

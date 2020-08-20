import React, {useState} from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;

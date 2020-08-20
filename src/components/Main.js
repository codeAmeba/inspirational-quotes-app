import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.HeaderStyle}>
      <Text style={styles.HeaderText}>This is header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderStyle: {
    backgroundColor: 'pink',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  HeaderText: {
    flex: 1,
    textAlign: 'center',
  },
});

export default Header;

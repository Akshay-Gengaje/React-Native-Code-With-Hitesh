import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevetedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevetedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.title}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.title}>me</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.title}>to</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.title}>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.title}>👋</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevetedCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 200,
    height: 100,
    margin: 8,
  },
  cardEleveted: {
    elevation: 4,
    backgroundColor: '#34516d',
    shadowColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

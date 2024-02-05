import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardSubtitle}>Agra, India</Text>
            <Text style={styles.cardDescription}>
              The Taj Mahal, located in Agra, India, is an iconic white marble
              mausoleum built by Emperor Shah Jahan in memory of his beloved
              wife Mumtaz Mahal.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  card: {
    flex: 1,
    borderRadius: 4,
    margin: 10,
  },
  cardEleveted: {
    elevation: 6,
    padding: 4,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  cardImage: {
    height: 200,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  cardContent: {
    padding: 10,
    flex: 1,
    flexGrow: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'white',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#c4c4c4',
    textAlign: 'justify',
  },
});

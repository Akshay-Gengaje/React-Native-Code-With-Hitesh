import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(website: string) {
    Linking.openURL(website);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevetedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://t1.blockdit.com/photos/2021/12/61bcb04052c7290dcf52d44e_800x0xcover_QnnMQ-J_.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText} numberOfLines={3}>
            ECMAScript (often referred to as JavaScript) is a programming
            language standardized by the European Computer Manufacturers
            Association (ECMA). JavaScript ES12 is a standardized version of
            JavaScript that includes a number of new features and improvements
            over the previous versions1.=
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity>
            <Text
              style={styles.footerText}
              onPress={() => {
                openWebsite('https://reactnative.dev/');
              }}>
              Read More
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    height: '100%',
    margin: 8,
    paddingVertical: 20,
  },
  elevetedCard: {
    elevation: 4,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardImage: {
    width: '80%',
    height: 200,
    padding: 20,
    margin: 20,
  },
  bodyContainer: {
    padding: 10,
  },
  bodyText: {
    fontSize: 16,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
  },
});

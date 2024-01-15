import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View >
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
            <Text>Red</Text>
        </View>
      </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText: {
        color: "#000000",
        fontSize: 18,
       fontWeight: '900',
        paddingHorizontal: 10
    },
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    card: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 10,
        justifyContent: "center",
        alignItems: 'center'
        
    },
    cardOne:  {
      backgroundColor: "#f54295",
    },
    cardTwo:  {
      backgroundColor: "#f54295",
    },
    cardThree:  {
      backgroundColor: "#f54295",
    },
    cardFour:  {
      backgroundColor: "#f54295",
    },
})
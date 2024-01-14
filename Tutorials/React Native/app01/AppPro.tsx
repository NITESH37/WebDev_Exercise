import { View, Text, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'

function AppPro(){

    const isDarMode = useColorScheme() === 'dark'

  return (
    <View style={styles.container}>
      <Text style={isDarMode ? styles.whiteText : styles.darkText}>AppPro</Text>
    </View>
  )
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            marginTop: '10%'
        },
        whiteText: {
            color: '#ffff'
        },
        darkText:{
            color: '#000'
        }
    })

export default AppPro
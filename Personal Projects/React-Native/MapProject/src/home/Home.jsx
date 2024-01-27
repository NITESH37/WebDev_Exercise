import { View, Text } from 'react-native'
import React from 'react'
import fetch from '../hook/fetch'

const Home = () => {
    const {data} = fetch()
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <View>
        <Text>{JSON.stringify(data,null,4)}</Text>
      </View>
    </View>
  )
}

export default Home
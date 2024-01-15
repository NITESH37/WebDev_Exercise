

import {
  View,
  SafeAreaView,
  Text,
  ScrollView
} from 'react-native'
import FlatCards from './components/FlatCards'


function App(){
  return(
    <SafeAreaView>
    <ScrollView>
        <FlatCards />
    </ScrollView>
  </SafeAreaView>
  )
}

export default App
import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
  return (
    <SafeAreaView>
       <View className='mt-5 mx-5'>
      <Text className='font-work-black  text-primary'>index</Text>
      <Text className='text-3xl '>index</Text>
      <Text className='text-3xl '>index</Text>

    </View> 
    </SafeAreaView>
    
  )
}

export default index
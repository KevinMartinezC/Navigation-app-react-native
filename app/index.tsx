import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, Redirect } from 'expo-router'

const index = () => {
    return <Redirect href='/home'/>
//   return (
//     <SafeAreaView>
//        <View className='mt-5 mx-5'>
//       <Text className='font-work-black'>index</Text>
//       <Text className='text-3xl '>index</Text>
//       <Link href='/products/products'>Productos</Link>

//     </View> 
//     </SafeAreaView>
    
//   )
}

export default index
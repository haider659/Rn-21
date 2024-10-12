// import { View, Text, TouchableOpacity } from 'react-native'
// import React from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'


// const Async_Storage = () => {

//     const handel_storeData = async ()=>{

//         let obj = {
//             name: 'Haider khan',
//             city:'karachi',
//             email:'haider@gmail.com'
//         }
//         await AsyncStorage.setItem('userobj', JSON.stringify(obj))



//     }

//     const handel_GetData = async ()=>{
//         const getData = await AsyncStorage.getItem('userobj')
//         console.log("getData.....",getData);
        
//     }

//     const handel_RemoveData = async ()=>{
//        await AsyncStorage.removeItem('userobj')
//     }

//     const handel_GetAllKeys = async()=>{
//      const getAllkeys = await AsyncStorage.getAllKeys();
//      console.log(getAllkeys);
     

//     }
//   return (
//     <View>
//       <Text>AsyncStorage</Text>

//       <TouchableOpacity onPress={handel_storeData}>
//         <Text style={{fontSize:30,backgroundColor:'black',color:'white',textAlign:'center',width:'50%' }}>Store Data</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={handel_GetData}>
//         <Text style={{fontSize:30,backgroundColor:'black',color:'white',textAlign:'center',width:'50%',marginTop:50 }}>Get Data</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={handel_RemoveData}>
//         <Text style={{fontSize:30,
//             backgroundColor:'black',
//             color:'white',
//             textAlign:'center',width:'50%',marginTop:50 }}>Remove Data</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={handel_GetAllKeys}>
//         <Text style={{fontSize:30,
//             backgroundColor:'black',
//             color:'white',
//             textAlign:'center',width:'50%',marginTop:50 }}>Get All keys</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default Async_Storage
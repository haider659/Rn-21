// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { addCounter, delCounter } from '../Store/Slice/CounterSlice';

// const Counter = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector((state) => state.counter.counter);

//   const handleIncrement = () => {
//     dispatch(addCounter());
//   };

//   const handleDecrement = () => {
//     dispatch(delCounter());
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.counterText}>Counter: {counter}</Text>
//       <Button  title="Increment" onPress={handleIncrement} />
//       <Button  title="Decrement" onPress={handleDecrement} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   counterText: {
//     fontSize: 24,
//     marginBottom: 20,
//   }
// });

// export default Counter;

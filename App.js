import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import Home from './src/pages/Home';

export default function App() {
  return (
    <>
    <View style={styles.container}>
          <Home/>
     </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    width:'95vw',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:'2rem',
    width:'500px',
    textAlign:'center',
    color:'#fff',
    fontFamily:'Times'
  }
});

import React, { useState } from 'react';
import { View, Button, StyleSheet,Text } from 'react-native';
import CounterEx from './otherSrc/counter.jsx';
import  FlashlightEx from './otherSrc/flashlight.jsx';



export default function App() {
 const [Buttons, setButtons] = useState();
  const [View1, setView] = useState(null);
  const ButtonesEnabled = () => {
    setView(null);
  };
   
   const  Counter = () => {
    setButtons(false);
    setView('counterBtn');
     }
   const Flashlight = () => {
    setButtons(false);
    setView('flashlightBtn');
     }

    return (
    <View style={styles.container}>
     {View1 === 'counterBtn' && <CounterEx Buttons={ButtonesEnabled}/>}
     {View1 === 'flashlightBtn' && <FlashlightEx Buttons={ButtonesEnabled}/>}
     
     {!View1 && (
      <>
        <View style={styles.buttonContaier2}> 
          <Button title="Flashlight" onPress={Flashlight} />
        </View>
        <View style={styles.buttonContaier2}>  
          <Button title="Counter" onPress={Counter}/>
        </View>
      </>
    )}
  </View>
 );
 };
   
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'blue',
      },

       buttonContaier2:{
        margin: 50,
        marginBottom: 700

      }
      
    });

     
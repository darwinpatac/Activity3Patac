import React, { useState } from 'react';
import { View, Text, Button,  StyleSheet } from 'react-native';
import App from '/App.js';

const CounterEx = ({ showButtons }) => {
  const [value, setValue] = useState(0);
  
  const [View1, setView1] = useState(null);

  const subtract  = () => {
    setValue(value - 1);
  };

  const add  = () => {
    setValue(value + 1);
  };

  const MainMenu = () =>{
    setView1('main');
    onPress=({showButtons})
     
    
  }

  return (
    <View style={styles.container}>
           {View1 === 'main' && <App/>}
           {!View1 && (
                     <View style = {{flex: 1, flexDirection: 'column'}}>
                              <View style = {styles.buttonContaier}>
       <View style = {{marginLeft: -75, width: 150}}> 
          <Button title="Flashlight" disabled = 'true' />
        </View>
        <View style = {{marginLeft: 100, width: 150}}>  
          <Button title="Counter" disabled = 'true' />
        </View>
        </View>
      <Text style={[styles.text,{}]}>  {value}</Text>
     
         <View style={[styles.buttonsContainer,{borderColor: 'brown'}]}>

            <View style = {{flex:1, flexDirection: 'row', justifyContent: 'space-between',  }}>
           <Button  title=" - 1" onPress={subtract} />
           <Button  title=" + 1" onPress={add} />
           </View>
           </View>

           <Button title="Back" onPress={MainMenu} />
        
         </View>
        )}
       </View>
     );
   };
   
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
        
     },
     text: {
       fontSize: 50,
       marginTop: -20,
       marginLeft: 80
       
     },
    
     toggleLabel: {
       fontSize: 18,
     },
     buttonsContainer: {
        margin: 50,
        width: 150,
        height: 15,
        marginBottom: 150,
        flex: 1,
        flexDirection: 'row'

       
     },
     buttonContaier:{
        
        marginTop: -315,
        width: 150,
        height: 15,
        width: 150,
        flex:1,
        flexDirection: 'row', 

      }
    });

    export default CounterEx;
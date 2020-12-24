import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

export default function App() {
  const [estado, setarEstado] = useState('ler');
  const[anotacao, setarAnotacao] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim posuere mollis. Aliquam odio justo, auctor at dapibus laoreet, dignissim id nisi. Nullam tempor fringilla purus, sed porttitor ipsum lobortis id. Suspendisse commodo fringilla varius. Nulla cursus felis sit amet nibh maximus, quis tempor velit dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce et libero fermentum, rutrum tortor nec, pulvinar mauris. Praesent leo mauris, egestas nec enim iaculis, lacinia auctor ante. Sed dictum scelerisque tincidunt.'); 
  if(estado == 'ler'){
    return (
      <View style={{flex:1}}>
        <StatusBar style="light"/>
        <View style={styles.header}><Text style={{textAlign:'center',color:'white',fontSize:20}}>ANOTAÇÕES</Text></View>

        <View style={{padding:20}}><Text style={styles.anotacao}>{anotacao}</Text></View>

        <TouchableOpacity onPress={()=> setarEstado('atualizando')} style={styles.btnAnotacao}><Text style={styles.btnAnotacaoTexto}>+</Text></TouchableOpacity>
      </View>
    );
  }else if(estado == 'atualizando'){
    return(
    <View style={{flex:1}}>
        <StatusBar style="light"/>
        <View style={styles.header}><Text style={{textAlign:'center',color:'white',fontSize:20}}>ANOTAÇÕES</Text></View>

        <TouchableOpacity onPress={()=> setarEstado('ler')} style={styles.btnSalvar}><Text style={{textAlign:'center', color:'white'}}>Salvar</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    width: '100%',
    paddingTop: 40,
    paddingBottom:20,
    backgroundColor: '#6405fc'

  },
  anotacao:{
    fontSize:15
  },
  btnAnotacao:{
    position:'absolute',
    right:20,
    bottom:20,
    width:50,
    height:50,
    backgroundColor:'#6405fc',
    borderRadius:25
  },
  btnAnotacaoTexto:{
    color:'white',
    position:'relative',
    textAlign:'center',
    top: 2,
    fontSize:30
  },
  btnSalvar:{
    position:'absolute',
    right:20,
    bottom:20,
    width:100,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#6405fc',
  },
});

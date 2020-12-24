import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View , TouchableOpacity, TextInput, AsyncStorage} from 'react-native';


export default function App() {
  
  const [estado, setarEstado] = useState('ler');
  const[anotacao, setarAnotacao] = useState(''); 
  useEffect(()=>{

    //Quando inicializar o app queremos que leia a key anotacao.

    (async () => {
        try{
            const anotacaoLeitura = await AsyncStorage.getItem('anotacao');
            setarAnotacao(anotacaoLeitura);
        }catch(error){}
    })();

  },[])


  setData = async() => {
      try{
          await AsyncStorage.setItem('anotacao',anotacao);
      }catch(error){

      }

      alert('Sua anotação foi salva!');
  }

  function atualizarTexto(){
      setarEstado('ler');
      setData();
  }

  if(estado == 'ler'){
    return (
      <View style={{flex:1}}>
        <StatusBar style="light"/>
        <View style={styles.header}><Text style={{textAlign:'center',color:'white',fontSize:20}}>ANOTAÇÕES</Text></View>
        {
        (anotacao != '')?
        <View style={{padding:20}}><Text style={styles.anotacao}>{anotacao}</Text></View>
        :
        <View style={{padding:20, opacity:0.4}}><Text>Nenhuma Anotação Encontrada ):</Text></View>
        }
        {
        (anotacao == '')?
        <TouchableOpacity onPress={()=> setarEstado('atualizando')} style={styles.btnAnotacao}><Text style={styles.btnAnotacaoTexto}>+</Text></TouchableOpacity>
        :
        <TouchableOpacity onPress={()=> setarEstado('atualizando')} style={styles.btnSalvar}><Text style={{textAlign:'center', color:'white'}}>Editar</Text></TouchableOpacity>
        }
        
      </View>
    );
  }else if(estado == 'atualizando'){
    return(
    <View style={{flex:1}}>
        <StatusBar style="light"/>
        <View style={styles.header}><Text style={{textAlign:'center',color:'white',fontSize:20}}>ANOTAÇÕES</Text></View>

        <TextInput autoFocus={true} onChangeText={(text)=>setarAnotacao(text)} style={{padding:20,height:300,textAlignVertical:'top'}}  multiline={true} numberOfLines={5} value={anotacao}></TextInput>     

        <TouchableOpacity onPress={()=> atualizarTexto()} style={styles.btnSalvar}><Text style={{textAlign:'center',color:'white'}}>Salvar</Text></TouchableOpacity>
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

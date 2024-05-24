import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {
  const imagemFundo = require('./src/images/imagem02.jpg')
  return (
    <View style={styles.container}>
      <ImageBackground source={imagemFundo} style={styles.imageB}>
      <Text style={{color: 'white'}}>Aula sobre como adicionar ícones no projeto</Text>
      <Text style={{color: 'white'}}>Esqueceu sua senha?</Text>
      <View style={styles.inputs}>
         <View style={styles.boxInput}>
            <Ionicons name='person-outline' size={25} color={'white'}/>
            <TextInput style={styles.input} placeholder='Digite seu nome'/>
         </View>
         <View style={styles.boxInput}>
            <FontAwesome name='lock' size={25} color={'white'}/>
            <TextInput style={styles.input} placeholder='Digite sua senha'/>
         </View>
      </View>
      <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <FontAwesome name='google' size={25} color={'white'}/>
        <Text style={styles.txtBtn}>Acessar com o google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <FontAwesome name='facebook' size={25} color={'white'}/>
        <Text style={styles.txtBtn}>Acessar com o facebook</Text>
      </TouchableOpacity>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  imageB: {
    flex: 2,
    gap: 5,
    alignItems: 'center',
    resizeMode: 'cover',
    justifyContent: 'center',
    width: 500
  },
  inputs: {
    gap: 6,
    width: 300
  },
  boxInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20
  },
  input: {
    borderWidth: 1,
    padding: 5,
    width: '100%',
    borderColor: 'white'
  },
  btn: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    borderRadius: 6,
    backgroundColor: 'orange'
  },
  txtBtn: {
    color: 'white',
  }

});

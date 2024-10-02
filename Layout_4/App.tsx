import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';

export default function App() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const { width, height } = Dimensions.get('window');
  const handleCodeChange = (index: number, value: string)=>{
    const newCode = [...code];
    newCode[index]
    setCode(newCode);
    if(value.length === 1 && index < 5){
      inputRefs.current[index + 1]?.focus();
    }
  }
  return (
    <LinearGradient colors={["#c8f4f6", "#e5f5f6", "#47d9f8"]} locations={[0, 0.9, 1]} style={[styles.container,{width,height}]}>
      <View style={{ flex: 3, justifyContent: 'space-evenly' }}>
        <View style={{flex:2, justifyContent:"center"}}>
          <Text style={{ fontSize: 60, fontWeight: "700", textAlign: "center" }}>CODE</Text>
        </View>
        <View style={{flex:1}}>
          <Text style={{ fontSize: 20, fontWeight: "700", textAlign: "center" }}>VERIFICATION</Text>
          <View style={{ marginTop: 50 }}>
            <Text style={{ fontSize: 15, fontWeight: "700" }}>Enter ontime password sent on</Text>
            <Text style={{ fontSize: 15, fontWeight: "700", textAlign: 'center' }}>++849092605798</Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 2}}>
          <View style={styles.codeInputContainer}>
              {
                Array(6).fill(6).map((_, index) => (
                  <TextInput
                    key={index}
                    style={styles.inputBox}
                    keyboardType='number-pad'
                    maxLength={1}
                    ref={(ref)=> inputRefs.current[index] = ref}
                    onChangeText={(value)=>handleCodeChange(index, value)}
                  />
                ))
              }
          </View>
          <TouchableOpacity>
              <View style={styles.buttonVerify}>
                <Text style={{fontSize:18, fontWeight:"700"}}>VERIFY CODE</Text>
              </View>
          </TouchableOpacity>
      </View>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   inputBox: {
    borderWidth: 1,
    borderColor: '#000',
    width: 50,
    height: 50,
    marginTop: 40,
    textAlign: 'center',
    fontSize: 18,
  },
  codeInputContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }, 
  buttonVerify:{
    marginTop: 40,
    backgroundColor:"#E3C000",
    width: 400,
    height: 50,
    alignItems:'center',
    justifyContent:"center",


  }
});

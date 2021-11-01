import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { auth } from "../firebase/config";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      registered: true,
      usuario: ""
    };
  }

  register(email,pass){
    auth.createUserWithEmailAndPassword(email,pass)
    
           .then(()=>  this.state.registered == true ? alert("se registro") : alert("se registro mal"))
           .catch((err)=> console.log(err +  "Error Se registro mal"))
           
  }
//   registered(){
//     if (this.state.registered) {

//      this.setState({register: true,
//     text:"bien!"
// })
// } 
         
//      else{this.setState({register: false,
//           text:"mal!"}
//      )}
//   }

  render() {
    return (
      <View>
            
        <TextInput
          onChangeText={(text) => this.setState({ usuario: text })}
          placeholder="nombre de usuario"
          keyboardType="default"
        />  


        <TextInput
          onChangeText={(text) => this.setState({ email: text })}
          placeholder="email"
          keyboardType="email-address"
        />
        <TextInput
          onChangeText={(text) => this.setState({ pass: text })}
          placeholder="password"
          keyboardType="email-address"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.register(this.state.email, this.state.pass)}

        >
          <Text style={styles.textButton}>Registrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#28a745",
    paddingHorizontal: 10,
    paddingVertical: 6,
    textAlign: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#28a745",
  },
  textButton: {
    color: "#fff",
  },
});

export default Register;
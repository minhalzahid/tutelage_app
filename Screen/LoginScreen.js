import * as React from 'react';
import { View, TextInput,StyleSheet,Image,Text,} from 'react-native';
import { CheckBox,Button } from 'react-native-elements'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { RadioButton } from 'react-native-paper';
import { NavigationContext } from '@react-navigation/native';



const logo = require('../images/logo.jpeg');
class LoginScreen extends React.Component{
  static contextType = NavigationContext;
  state = {
    checked: 'Null',
  };
 
  render(){  
    const navigation = this.context;
    
  

  return (
    <ScrollView style={styles.main}>
    <React.Fragment>
    <View style={styles.container}>
       <Image
            style={styles.logo}
            source={logo}
        /> 
          </View>
          <View>

            <TextInput  placeholder="Email" style={styles.TextStyle} />
            <TextInput
              placeholder="Password" 
              style={styles.TextStyle}
               secureTextEntry={true}  />
          </View>
          <View style = {{padding :35, paddingBottom : 10}}>
           <Text style={styles.select}> Select One of the folllowing:</Text>
           <View style = {{flexDirection : "row", alignItems : 'center'}}>
              
             <View style = {{justifyContent : 'center', alignItems : 'center'}}>
             <Image
                style={styles.tlogo}
                source={require('../images/teacher.jpg')}
              /> 
              <View style = {{flexDirection : 'row', alignItems : 'center'}}>
              <RadioButton
              value="teacherChecked"
              status={this.state.checked === 'teacherChecked' ? 'checked' : 'unchecked'}
              onPress={() => { this.setState({ checked: 'teacherChecked' }); }}
            />
            <Text style = {{marginRight : 30}}>
              Teacher Account
            </Text>
              </View>
             </View>
             <View style = {{justifyContent : 'center', alignItems : 'center'}}>
             <Image
                style={styles.tlogo}
                source={require('../images/student.jpg')}
              /> 
              <View style = {{flexDirection : 'row', alignItems : 'center'}}>
              <RadioButton
                value="studentChecked"
                status={this.state.checked === 'studentChecked' ? 'checked' : 'unchecked'}
                onPress={() => { this.setState({ checked: 'studentChecked' }); }}
              />
              <Text> Student Account</Text>
              </View>
             </View>
            
           </View>
          </View>
        
          <View style = {{justifyContent : 'center', alignItems : 'center'}}>
              <TouchableOpacity style={styles.buttonContainer}
                onPress={()=>{
                  if(this.state.checked === 'teacherChecked'){ 
                  navigation.navigate('Teacherhomepage')}
                  else if(this.state.checked === 'studentChecked'){
                    navigation.navigate('StudentHomepage')
                  }
                  else{
                    alert('Invalid Login! Select Account Type.')
                  }
                }}  
              
              >
                  <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
          </View>
                      
          <View style={styles.BtnSignUp}>
            <Text style={{marginLeft:'32%', marginBottom : 5, marginTop: 35, fontSize:15.5, }}>Don't Have an Account ? </Text>
            <TouchableOpacity style={styles.buttonContainer1}onPress={() => navigation.navigate('SignUpScreen')} >
                     <Text style={styles.buttonText1}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer1} onPress={() => navigation.navigate('Forgetpass')} >
                     <Text style={styles.buttonText2}>Forget Password?</Text>
                 </TouchableOpacity>
          </View>
          </React.Fragment>
         </ScrollView>
  );
}
}


const styles=StyleSheet.create({

main:{
  backgroundColor:'white',
},

  container:{
    backgroundColor:'white',
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',

  },
logo:{
        marginTop: 15,
        width: 210,
        height: 90,
},
tlogo  :{
  width : 80,
  height : 80,
  marginTop: 15,
},

  TextStyle:
  {
    width: 350,
        height: 55,
        margin: 10,
        padding: 8,
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    select:{
      fontSize: 17,
      marginBottom: 10,
      fontWeight: 'bold',
    },

    buttonText:{
      textAlign:'center',
      color:'#fff',
      fontWeight:'bold',
      fontSize:20
  },
  buttonContainer:{
      backgroundColor:'#9a090c',
      borderRadius:8,
      height: 45,
      width : 90,
      justifyContent: 'center',
      alignItems: 'center',

  },

  buttonText1:{
    textAlign:'center',
    color:'#9a090c',
    fontWeight:'bold',
    fontSize:16.5,
    marginBottom: 10,

},
buttonText2:{
  textAlign:'center',
  color:'#9a090c',
  fontWeight:'bold',
  fontSize:16.5

},
    BtnSignUp:{
   width:400,
   color: '#194D33',
    },
    forgetbtn:{
      flex:4,
    }

})
export default LoginScreen;

// ... other code from the previous section
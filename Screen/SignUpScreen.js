import * as React from 'react';
import { View, TextInput,StyleSheet,Image,Text,} from 'react-native';
import { CheckBox,Button } from 'react-native-elements'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import { NavigationContext } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
const options={
title:'Choose Profile Photo',
takePhotoButtonTitle: 'From Camra',
chooseFromLibraryButtonTitle: 'From Gallary ', 

}

const logo = require('../images/logo.jpeg'); //Apply Logo pic
class SignUpScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      avatarSource: null
    }
  }
  myfun =() =>{

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          avatarSource: source,
        });
      }
    });
  
   }


  static contextType = NavigationContext;

  state = {
    checked: 'Null',
  };


  render(){  
    const navigation = this.context;
return(
    <ScrollView style={styles.main}>
   <React.Fragment>
   <View style={styles.container}>
       <Image
            style={styles.logo}
            source={logo}
        /> 
          </View>
          <Image
            style={styles.logo1}
            source={this.state.avatarSource}
        /> 
          <TouchableOpacity onPress={this.myfun}>
           <View style={styles.Image}>
          <Text style={styles.display}> Select Image</Text>
           </View>
</TouchableOpacity>
        <View style={styles.contain}> 
        <TextInput  placeholder="User Name" style={styles.input} />
        <TextInput  placeholder="Email" style={styles.input} />
      
        </View>
        <View style={styles.contain1}>
        <TextInput  placeholder="Contact No" style={styles.input}   keyboardType = 'number-pad'  maxLength={12}  />
        <TextInput  placeholder="Age" style={styles.input} />
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

          <View style={styles.contain1}>
        <TextInput  placeholder="Password" style={styles.input}   secureTextEntry={true}/>
       
        </View>
        
        <View style={styles.BtnSignUp}>
            <TouchableOpacity style={styles.buttonContainer1}
            onPress={()=>{
              if(this.state.checked === 'teacherChecked'){ 
                navigation.navigate('Teacherhomepage')}
                else if(this.state.checked === 'studentChecked'){
                  navigation.navigate('StudentHomepage')
                }
              else{
                alert('Invalid Sign Up! Select Account Type.')
              }
            }} >
                     <Text style={styles.buttonText1}>Sign Up</Text>
            </TouchableOpacity>
</View>
         
         
   </React.Fragment>
   </ScrollView>
);
}
}
const styles=StyleSheet.create({
    container:{
        padding:10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    
      },
    main:{
   backgroundColor: 'white',
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
    logo1:{
      width: 80,
      height: 80,
      margin:10,
    },
    input: {
        width: 350,
        height: 55,
        margin: 10,
        padding: 8,
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
        borderBottomWidth: 1,
      },
      contain: {
        flex: 1,
     
      },
      Image:{
      
        padding:16,
        width:400,
        borderRadius:54,
        alignItems:'flex-end',

      },
      display:{
        color:'#0e08e1',
        fontSize: 16,
        fontWeight: 'bold',
      },
      select:{
 marginTop: 15,
 fontSize: 17,
 marginBottom: 10,
 fontWeight: 'bold',
      },
      contain1:{

        flex:2,
        flexDirection:'column',
        alignContent:'center'
      },
 buttonText1:{
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontSize:18,
    marginBottom: 10,
},

BtnSignUp:{
  width:400,
  color: '#194D33',
  justifyContent: 'center',
    alignItems: 'center',
   },

   buttonContainer1:{
    backgroundColor:'#9a090c',
    padding:15,
    width : 110,
    borderRadius: 14,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30,
   }
})
export default SignUpScreen;
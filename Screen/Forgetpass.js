import * as React from 'react';
import { View, TextInput,StyleSheet,Image,Text,} from 'react-native';
import { CheckBox,Button } from 'react-native-elements'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

function Forgetpass({ navigation }) {
return(
    <React.Fragment>
    <View style={styles.start}><Text style={styles.forget}>Reset Password </Text></View>
<View style={styles.MainContainer}> 
<TextInput  placeholder="Enter your Email" style={styles.TextStyle} />
</View>

<View style={styles.lastBtn1} >
            <TouchableOpacity style={styles.buttonContainer1}
            onPress={() => navigation.navigate('')} >
                     <Text style={styles.buttonText1}>Submit</Text>
            </TouchableOpacity>

          </View>

           
    </React.Fragment>
)
}
const  styles=StyleSheet.create({
 start:{
   backgroundColor: 'white',
 },

    MainContainer :{
        flex:1,
        backgroundColor: 'white',
      },
       forget:{
 fontSize: 20,
 marginTop: 110,
 textAlign: 'center',
 fontWeight: 'bold',
 marginBottom: 15,
       },
          
        
        TextInputStyleClass:{
   
          textAlign: 'center',
          borderWidth: 2,
          borderColor: '#9E9E9E',
          borderRadius: 20 ,
          backgroundColor : "#FFFFFF",
          height: 150
           
          },
                 lastBtn1:{
                  width:90,
                  height:40,
                  backgroundColor: '#9a090c',
                  marginBottom: 40,
                  marginLeft: '40%',
                  borderRadius: 6,
                  justifyContent: 'center',
                   },

                   buttonText1:{
                    textAlign:'center',
                    color:'white',
                    fontWeight:'bold',
                    fontSize:18,
                    marginBottom: 10,
                 
                
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
                             marginLeft: 17,
                         },
              
})
export default Forgetpass;
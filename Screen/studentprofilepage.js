import * as React from 'react';
import { View, TextInput,StyleSheet,Image,Text,} from 'react-native';
import { CheckBox,Button } from 'react-native-elements'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const options={
title:'my pic app',
takePhotoButtonTitle: 'Take photo With your Camra',
chooseFromLibraryButtonTitle: 'choose photo from Gallary ', 

}

const logo = require('../images/logo.jpg'); //Apply Logo pic
function  studentprofiilepage({ navigation }) {
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

return(
    <ScrollView>
   <React.Fragment>
   <View style={styles. Btnlogout}>
           <Button  title="Logout"
                    type="outline"
                    onPress={() => navigation.navigate('LoginScreen')}
           
           />
       </View>
   <View style={styles.container}>
       <Image
            style={styles.logo}
            source={logo}
        /> 
          </View>
          <View style={{alignItems:'center'}}>
              <Text style={{fontSize:22}}>
                  Welcome to Student Profile !
              </Text>
          </View>
          <TouchableOpacity onPress={this.myfun}>
           <View style={styles.Image}>
          <Text > Change Profile</Text>
           </View>
</TouchableOpacity>
        <View style={styles.contain}> 
        <TextInput  placeholder="User Name" style={styles.input} />
        <TextInput  placeholder="Email" style={styles.input} />
      
        </View>
        <View style={styles.contain1}>
        <TextInput  placeholder="Contact no" style={styles.input}  keyboardType = 'number-pad'  maxLength={12} />
        <TextInput  placeholder="Age" style={styles.input} />
        </View>
          <View style={styles.contain1}>
        <TextInput  placeholder="password" style={styles.input}  secureTextEntry={true} />
       
        </View>
        <View style={styles.contain1}>
        <TextInput  placeholder="Profile Type-Student Account" style={styles.input}  editable={false} selectTextOnFocus={false}/>
       
        </View>
          <View style={styles.Btn}>
           <TouchableOpacity>
                 <Button
                      
                       title="Save Change"
                         type="outline"
                         onPress={() => navigation.navigate('Teacherprofilepage')}
                                        />
                                        </TouchableOpacity>
                                        
          </View>
        
          <View style={styles.lastBtn} >
          <Button
                      
                      title="Find 
                            Lecture"
                        type="outline"
                        onPress={() => navigation.navigate('StudentHomepage')}
                                       />
                                          <Button
                      
                      title="InBox"
                        type="outline"
                        onPress={() => navigation.navigate('')}
                                       />
                                          <Button
                      
                      title="Notification"
                        type="outline"
                        onPress={() => navigation.navigate('')}
                                       />
                                          <Button
                      
                      title="Profile"
                        type="outline"
                        onPress={() => navigation.navigate('studentprofilepage')}
                                       />          
          </View>
                  
   </React.Fragment>
   </ScrollView>
);
}
const styles=StyleSheet.create({
    container:{
        padding:50,
        justifyContent: 'center',
        alignItems: 'center',
    
      },
    logo:{
            width: 150,
            height: 100,
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
        padding:24,
        width:400,
        borderRadius:54,
        alignItems:'flex-end',

      },
      contain1:{

        flex:2,
        flexDirection:'row',
        alignContent:'center'
      },

      Btn:{
        padding:16,
        width:400,
        borderRadius:54,
        alignItems:"center"
          },
          Btnlogout:{
            padding:16,
            width:400,
            borderRadius:54,
            alignItems:'flex-end'
              },
          lastBtn:{
     flex:1,
     flexDirection:'row',
     width:440,
     borderRadius:54,
    justifyContent:'space-between'
          }
   
});
export default studentprofiilepage;

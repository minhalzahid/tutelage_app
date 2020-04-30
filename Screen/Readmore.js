import * as React from 'react';
import { View, TextInput,StyleSheet,Image,Text,} from 'react-native';
import { CheckBox,Button } from 'react-native-elements'
import { TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { NavigationContext } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
const logo = require('../images/log.jpeg');

class Readmore extends React.Component{

  static contextType = NavigationContext;
  state = {
    checked: 'Null',
   
  };
 
   

  render(){  
    const navigation = this.context;
    
  

  return (
    <ScrollView>
<React.Fragment>

<TouchableHighlight
          style={[styles.profileImgContainer, { borderColor: 'green', borderWidth:1 }]}
        >
    <Image source={logo} style={styles.profileImg} />
</TouchableHighlight>
          <View style={styles.contain}> 
          <TextInput  placeholder="Teacher Name" style={styles.input} editable={false} />
        <TextInput  placeholder="Course/Subject" style={styles.input} editable={false} />
        <TextInput  placeholder="Topic Name" style={styles.input} editable={false} />
</View>
<View><Text style={{fontSize:20}}>Decription</Text></View>
<View style={styles.MainContainer}> 
 <TextInput
    editable={false}
    style={styles.TextInputStyleClass}
    underlineColorAndroid="transparent"
    placeholder={"Type Something in Text Area."}
    placeholderTextColor={"#9E9E9E"}
    numberOfLines={5}
    multiline={true}
  />
</View>
<View >
           <Text> Select One of the folllowing:</Text>
           <RadioButton
          value="onlineChecked"
          status={this.state.checked === 'onlineChecked' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'onlineChecked' }); }}
        />
        <Text>
         online
        </Text>
        <RadioButton
          value="offlinechecked"
          status={this.state.checked === 'offlinechecked' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'offlinechecked' }); }}
        />
        <Text> Offline</Text>
          

          </View>
          <View><Text style={{fontSize:20}}>Venue</Text></View>
<View style={styles.MainContainer}> 
 <TextInput
    style={styles.TextInputStyleClass}
    underlineColorAndroid="transparent"
    placeholder={"Type about Venue."}
    placeholderTextColor={"#9E9E9E"}
    numberOfLines={5}
    multiline={true}
  />
</View>

          
        
          <View style={styles.lastBtn} >
          <Button
                      
                      title="Chat_Box"
                        type="outline"
                        onPress={() => navigation.navigate('chat')}
                                       />
                                        
                                          <Button
                      
                      title="Attend class"
                        type="outline"
                        onPress={() => navigation.navigate('')}
                                       />
          </View>
                 



</React.Fragment>

</ScrollView>
)
}
}


const styles=StyleSheet.create({
    text:{
        fontSize:20,
        padding:10,
       
      
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
          MainContainer :{
            flex:1,
            justifyContent: 'center',
            margin:5
              
            },
            TextInputStyleClass:{
       
              textAlign: 'center',
              height: 50,
              borderWidth: 2,
              borderColor: '#9E9E9E',
              borderRadius: 20 ,
              backgroundColor : "#FFFFFF",
              height: 150
               
              },
              Btn:{
                padding:16,
                width:400,
                borderRadius:50,
                alignItems:"center"
                  },
                  lastBtn:{
                    flex:1,
                    flexDirection:'row',
                    width:440,
                    borderRadius:54,
                   justifyContent:'space-around'
                         },
                         Image:{
                            padding:24,
                            width:400,
                            borderRadius:54,
                          
                    
                          },
                          profileImgContainer: {
                            marginLeft: 8,
                            height: 80,
                            width: 80,
                            borderRadius: 40,
                            alignItems:'flex-end'
                          },
                          profileImg: {
                            height: 80,
                            width: 80,
                            borderRadius: 40,
                         
                         
                          },
   
})
export default Readmore;

// ... other code from the previous section
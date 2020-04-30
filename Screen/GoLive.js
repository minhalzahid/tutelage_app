

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Button } from 'react-native-elements'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const logo = require('../images/umi.jpg');
import { NavigationContext } from '@react-navigation/native';
export default class GoLive extends React.Component {
  static contextType = NavigationContext; 
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      demoArray:[
        
      {id:'1',
      name:"Teacher Name",
      subtitle:'Live Video',
      image:logo,
      category:"Teacher"
    },
    
   

      ],
      // demoArray:[{id:0,name:'Akhzar'},{id:1,name:'Abrar'}],
    };
  }


render() {
  const navigation = this.context;
  return (
    
     <React.Fragment>
       <ScrollView>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

          <View style={styles.body}>

            <View style={styles.sectionContainer}>
            <View>

<Text style={{fontSize:25,alignContent:'center'}}>Go Live:</Text>
</View>

        <FlatList
         data={this.state.demoArray}
         initialNumToRender={1}
         extraData={this.state}
         keyExtractor = { (item, index) => index.toString()}
         renderItem={({item}) =>



         <View style={{flex:0.9,height:200,paddingRight:6,paddingLeft:6,paddingTop:3,justifyContent:'center',}}>
         <TouchableOpacity style={{justifyContent:'center', elevation: 3,
         height:175,borderRadius:4,shadowOpacity: 10,backgroundColor : 'white',shadowColor: 'black' }}
         onPress={()=>this.rowSelected(item)}>


{/* First Apply image Code and View of Image in Flate List */}
             <View style={{flex:1,flexDirection:'row',width:300}}>

               <View style={ styles.MainContainer }>



  <Image source={item.image}    style={{width: 90, height: 90, borderRadius: 170/2}}/>

               </View>
{/* Title Code Like Teacher Name */}
               <View style={{flex:0.5,justifyContent:'flex-start'}}>
               <View style={{flex:0.3,justifyContent:'flex-start'}}>
               <Text style={ {color:'#000000',fontSize:20,fontFamily:'Roboto-Regular',paddingBottom:5}}>
               {item.name} </Text>
               </View>
{/* Subtitle Code Like  Text Initiate  */}
               <View style={{flex:0.1,flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',paddingTop:5}}>

               <View style={{alignItems:'flex-start'}}>
               <Text style={{color:'#000000',fontSize:15,}}>
               {item.subtitle} </Text>
               </View>
               </View>
               </View>

               <TouchableOpacity>
             {/* <View style={{flex:0.3,justifyContent:'flex-end'}}>
               
             <Text style={{color:'#000000',fontSize:15,fontFamily:'noore-huda',textAlign:'right'}}>
                   {item.btn} </Text>
             </View> */}
             </TouchableOpacity>
           





             </View>

         </TouchableOpacity>
          </View>

        

         }

       />

            </View>

          </View>
        
  



      
      </SafeAreaView>
      <FlatList
         data={this.state.demoArray}
         initialNumToRender={1}
         extraData={this.state}
         keyExtractor = { (item, index) => index.toString()}
         renderItem={({item}) =>



         <View style={{flex:0.9,height:400,paddingRight:6,paddingLeft:6,paddingBottom:3,paddingTop:3,justifyContent:'center',}}>
         <TouchableOpacity style={{justifyContent:'center', elevation: 3,
         height:400,borderRadius:4,padding:4,shadowOpacity: 10,backgroundColor : 'white',shadowColor: 'black' }}
         onPress={()=>this.rowSelected(item)}>


{/* First Apply image Code and View of Image in Flate List */}
             <View style={{flex:1,flexDirection:'row',width:250}}>

               <View style={ styles.MainContainer }>

               <TextInput  placeholder="Link" style={styles.TextStyle} />

               </View>

              


             </View>

         </TouchableOpacity>
          </View>

        

         }

       />
      <View style={styles.lastBtn} >



          
<Button
            
            title="Post
                  Lecture"
              type="outline"
              onPress={() => navigation.navigate('Teacherhomepage')}
                             />
                                <Button
            
            title="Profile"
              type="outline"
              onPress={() => navigation.navigate('Teacherprofilepage')}
                             />
                                <Button
            
            title="Inbox"
              type="outline"
              onPress={() => navigation.navigate('Teacherinbox')}
                             />
                                <Button
            
            title="Requests"
              type="outline"
              onPress={() => navigation.navigate('Request')}
                             />

<Button
            
            title="Go Live"
              type="outline"
              onPress={() => navigation.navigate('GoLive')}
                             />



</View>

      </ScrollView>
     </React.Fragment>
  
    );
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
            flexDirection:'row',
            width:440,
            borderRadius:54,
           justifyContent:'space-around'
                 }
          
})



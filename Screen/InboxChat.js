import React, { Component } from 'react';
import { ChatScreen } from 'react-native-easy-chat-ui'
import { AsyncStorage  } from 'react-native';
import { getMessages, sendMessage } from '../API/chatAPI';

class InboxChat extends Component {
  
  getData = async () => {
    return JSON.parse(await AsyncStorage.getItem('user'))
  }

  componentDidMount(){
    this.getData().then(res => {
      console.log(res.user._id)
      getMessages(this.props.route.params, res.user._id).then(res => {
        console.log(res.data)
        this.setState({
          messages: res.data
        })
      })
    })
  }

  state = {
    messages: [],
    // chatBg: require('../../source/bg.jpg'),
    inverted: false,  // require
    voiceHandle: true,
    currentTime: 0,
    recording: false,
    paused: false,
    stoppedRecording: false,
    finished: false,
    audioPath: '',
    voicePlaying: false,
    voiceLoading: false
  }


  sendMessage = (type, content, isInverted) => {
    this.getData().then(res => {
      let body = {
        message: {
          body: content,
          user_id: res.user._id
        }
      }

      sendMessage(this.props.route.params, body).then(res => {
        this.setState({
          messages: res.data
        })
      })
    })
  }

  render() {
    return (
      <ChatScreen
        avatarStyle={{ display: 'none' }}
        useVoice={false}
        ref={(e) => this.chat = e}
        messageList={this.state.messages}
        placeholder={'message'}
        sendMessage={this.sendMessage}
      />
    )
  }
}

export default InboxChat
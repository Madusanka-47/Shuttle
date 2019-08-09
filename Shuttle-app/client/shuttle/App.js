import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ToastAndroid, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

// import console = require('console');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      _femail: '',
      _ffname: '',
      _flname: '',
      _fphone: ''
    };
  }

  handleSubmit(event) {
    const defaults = {
      email: this.state._femail,
      first_name: this.state._ffname,
      last_name: this.state._flname,
      mobile_number: this.state._fphone
    };
    event.preventDefault();
    fetch('http://localhost:19000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(defaults)
    }).then((res) => {
      return res.json();
    }).then((resMessage) => {
      console.log(resMessage.message);
      // ToastAndroid.show(resMessage, ToastAndroid.LONG); // Display message from API
      // this.setState({resMessage})
    })
      .catch((error) => {
        console.log(error);
        throw error;
      })
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='purple'
            />
          }
          placeholder='Email'
          errorStyle={{ color: 'red' }}
          onChangeText={(_femail) => this.setState({ _femail })}
          errorMessage={'ENTER A VALID ERROR HERE'} />
        <Input
          placeholder='First name'
          errorStyle={{ color: 'red' }}
          onChangeText={(_ffname) => this.setState({ _ffname })}
          errorMessage='ENTER A VALID ERROR HERE' />
        <Input
          placeholder='Last Name'
          errorStyle={{ color: 'red' }}
          onChangeText={(_flname) => this.setState({ _flname })}
          errorMessage='ENTER A VALID ERROR HERE' />
        <Input
          placeholder='Phone'
          errorStyle={{ color: 'red' }}
          onChangeText={(_fphone) => this.setState({ _fphone })}
          errorMessage='ENTER A VALID ERROR HERE' />

        <Button
          onPress={this.handleSubmit}
          title="Register"
          color="#841584"
          accessibilityLabel="Regiser" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

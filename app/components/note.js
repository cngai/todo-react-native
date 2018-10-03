import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

export default class Note extends Component {
  render() {
    return (

      <View key={this.props.keyval} style={styles.note}>
        <View style={styles.noteTextBorder}>
          <Text style={styles.noteText}>{this.props.val.date}</Text>
          <Text style={styles.noteText}>{this.props.val.note}</Text>
        </View>
        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>X</Text>
        </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  note: {
      position: 'relative',
      padding: 20,
      paddingRight: 100,
      borderBottomWidth:2,
      borderBottomColor: '#ededed'
  },
  noteTextBorder: {
      borderLeftWidth: 10,
      borderLeftColor: '#E91E63'
  },
  noteText: {
      paddingLeft: 10
  },
  noteDelete: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2980b9',
      padding: 10,
      top: 10,
      bottom: 10,
      right: 10
  },
  noteDeleteText: {
      color: 'white'
  }
});
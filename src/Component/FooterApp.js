import React from 'react';
import {StyleSheet} from 'react-native';
import {Footer as NBFooter, Button, FooterTab, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class FooterApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NBFooter>
        <FooterTab style={styles.bg}>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate('Search')}>
            <Icon
              name="search"
              size={20}
              color={this.props.active === 0 ? '#fff' : '#000'}
            />
            <Text style={styles.color}>Pesquisar</Text>
          </Button>
          <Button
            vertical
            onPress={() => this.props.navigation.navigate('Favorite')}>
            <Icon
              name="heart"
              size={20}
              color={this.props.active === 1 ? '#fff' : '#000'}
            />
            <Text>Favoritos</Text>
          </Button>
        </FooterTab>
      </NBFooter>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#696969',
  },
  color: {
    color: '#fff',
  },
});

module.exports = FooterApp;

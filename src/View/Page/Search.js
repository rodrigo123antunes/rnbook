import React from 'react';

import {Alert, StyleSheet, StatusBar} from 'react-native';
import {Container, Content, Input, Item, Form} from 'native-base';
import {FooterApp} from '../../Component';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  searchBooks() {
    if (!this.state.search) {
      Alert.alert('Aviso', 'Favor informar a pesquisa.');

      return;
    }

    this.props.navigation.navigate('Results', {'search': this.state.search});
  }

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#24292E" />
        <Content contentContainerStyle={styles.content}>
          <Form>
            <Item style={styles.w100}>
              <Input
                placeholderTextColor="#fff"
                placeholder="Pesquise livros"
                onChangeText={e => this.setState({search: e})}
                value={this.state.search}
                style={styles.white}
                onSubmitEditing={() => this.searchBooks()}
              />
            </Item>
          </Form>
        </Content>
        <FooterApp active={0} navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#24292E',
  },
  w100: {
    width: '100%',
  },
  white: {
    color: '#fff',
  },
});

export default Search;

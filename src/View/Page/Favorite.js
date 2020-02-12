import React from 'react';
import {Container, Content, Text, View} from 'native-base';
import {BookCard, FooterApp} from '../../Component';
import {StyleSheet, FlatList, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Favorite extends React.Component {
  state = {
    listBooksFavorites: [],
    listBooksFavoritesAux: [],
  };

  async componentDidMount() {
    let getFavorite = await AsyncStorage.getItem('FAVORITES');
    getFavorite = JSON.parse(getFavorite);

    this.setState({
      listBooksFavorites: getFavorite,
    });
  }

  _renderBookComponent = ({item}) => {
    const {thumbnail, title, authors, publisher, bookId} = item;

    return (
      <BookCard
        key={bookId}
        title={title}
        favorite={true}
        authors={authors}
        publisher={publisher}
        thumbnail={thumbnail}
        onPress={() =>
          this.props.navigation.navigate('Detail', {
            bookDetails: item,
          })
        }
      />
    );
  };

  render() {
    const {listBooksFavorites} = this.state;
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <View style={styles.row}>
            <Icon
              name="arrow-left"
              size={25}
              color="#fff"
              style={styles.alignBackIcon}
              onPress={() => this.props.navigation.goBack()}
            />
            <Icon
              name="trash-can-outline"
              size={25}
              color="#fff"
              style={styles.alignBackIcon}
              onPress={() => {
                Alert.alert(
                  'Aviso',
                  'Tem certeza de que deseja remover todos os favoritos?',
                  [
                    {
                      text: 'Não',
                      onPress: () => {},
                      style: 'cancel',
                    },
                    {
                      text: 'Sim',
                      onPress: async () => {
                        await AsyncStorage.clear();
                        this.props.navigation.navigate('Search');
                      },
                    },
                  ],
                );
              }}
            />
          </View>
          <FlatList
            noMargin
            data={listBooksFavorites}
            renderItem={this._renderBookComponent}
            ListEmptyComponent={
              <Text style={styles.emptyMessage}>
                Você não possiu nenhum favorito :(
              </Text>
            }
            keyExtractor={item => item.bookId}
          />
        </Content>
        <FooterApp active={1} navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '10%',
    flex: 1,
    backgroundColor: '#333',
  },
  alignBackIcon: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginTop: 25,
  },
  white: {
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default Favorite;

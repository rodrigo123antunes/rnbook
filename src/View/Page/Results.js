import React from 'react';
import {Container, Content, Form, Input, Item} from 'native-base';
import {StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import {BookCard, FooterApp} from '../../Component';
import {Constants} from '../../Util';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksList: [],
      listBooksFavorites: [],
      page: 0,
      search: props.navigation.getParam('search'),
    };
  }

  async componentDidMount() {
    let getFavorite = await AsyncStorage.getItem('FAVORITES');
    getFavorite = JSON.parse(getFavorite);
    if (getFavorite) {
      this.setState({listBooksFavorites: getFavorite});
    }
    this.fetchBooks();
  }

  async fetchBooks() {
    const books = await axios.get(`${Constants.api}?q=${this.state.search}&key=${Constants.token}&startIndex=${this.state.page}&maxResults=20`, {});
    const allBooksList = books.data.items.map(book => {
      const {
        volumeInfo: {
          title,
          authors,
          publisher,
          publishedDate,
          description,
          imageLinks,
        },
        id: bookId,
      } = book;

      return {
        bookId,
        thumbnail: imageLinks ? imageLinks.thumbnail : Constants.imageNotFound,
        title,
        authors: authors ? authors.toString().replace(/,/g, ', ') : '-',
        publisher: publisher ? publisher.toString().replace(/"/g, '') : '-',
        publishedDate: publishedDate ? publishedDate.substring(0, 4) : '-',
        description: description || 'No Description',
      };
    });

    this.setState({
      booksList: [...this.state.booksList, ...allBooksList],
      page: this.state.page + 1,
    });
  }

  _renderBookComponent = ({item}) => {
    const find = this.state.listBooksFavorites.find(e => e.title === item.title);

    if (find) {
      item.favorite = true;
    }

    if (!item.favorite) {
      item.favorite = false;
    }

    const {thumbnail, title, authors, publisher, bookId, favorite} = item;

    return (
      <BookCard
        key={bookId}
        title={title}
        favorite={favorite}
        authors={authors}
        publisher={publisher}
        thumbnail={thumbnail}
        onFavoritePress={prop => {
          const data = this.state.booksList;
          const index = this.state.booksList.findIndex(
            e => e.bookId === bookId,
          );
          const dataF = this.state.listBooksFavorites;
          data[index].favorite = !data[index].favorite;
          dataF.push(prop);

          this.setState(
            {
              listBooksFavorites: dataF,
              booksList: data,
            },
            () => {
              AsyncStorage.setItem(
                'FAVORITES',
                JSON.stringify(this.state.listBooksFavorites),
              );
            },
          );
        }}
        onPress={() =>
          this.props.navigation.navigate('Detail', {
            bookDetails: item,
          })
        }
      />
    );
  };

  render() {
    const {booksList} = this.state;
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <Icon
            name="arrow-left"
            size={25}
            color="#fff"
            style={styles.alignBackIcon}
            onPress={() => this.props.navigation.goBack()}
          />
          <FlatList
            noMargin
            data={booksList}
            renderItem={this._renderBookComponent}
            keyExtractor={item => item.bookId}
            ListFooterComponent={
              <ActivityIndicator size={'large'} color="#fff" />
            }
            onEndReached={() => this.fetchBooks()}
            onEndReachedThreshold={0.1}
          />
        </Content>
        <FooterApp active={0} navigation={this.props.navigation} />
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
});

export default Result;

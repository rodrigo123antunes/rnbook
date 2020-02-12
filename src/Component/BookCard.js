import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ListItem, Left, Thumbnail, Body, Text, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class Result extends React.Component {
  render() {
    const {
      thumbnail,
      title,
      authors,
      onPress,
      favorite,
      onFavoritePress,
    } = this.props;
    return (
      <ListItem noBorder avatar onPress={() => onPress()} style={styles.listItem}>
        <Left>
          <Thumbnail large square source={{uri: thumbnail}} />
        </Left>
        <Body>
          <Text>{title}</Text>
          <Text note>Por {authors}</Text>
        </Body>
        <Right>
          <Icon
            name={favorite ? 'heart' : 'heart-o'}
            size={20}
            color="#fff"
            onPress={() => onFavoritePress(this.props)}
          />
        </Right>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#696969',
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
  }
})

export default Result;
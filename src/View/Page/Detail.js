import React from 'react';

import {StyleSheet, StatusBar, Image, ScrollView} from 'react-native';
import {Container, Content, Col, Row, Grid, Text} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FooterApp} from '../../Component';

class Detail extends React.Component {
  render() {
    const {bookDetails} = this.props.navigation.state.params;
    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#24292E" />
        <Content contentContainerStyle={styles.content}>
          <Icon
            name="arrow-left"
            size={25}
            color="#fff"
            style={styles.alignBackIcon}
            onPress={() => this.props.navigation.goBack()}
          />
          <ScrollView>
            <Grid>
              <Row style={styles.flex1}>
                <Col style={styles.flex1}>
                  <Image
                    source={{uri: bookDetails.thumbnail}}
                    resizeMode="contain"
                    style={styles.image}
                  />
                </Col>
                <Col style={[styles.flex1, styles.padding]}>
                  <Text style={styles.title}>Titilo</Text>
                  <Text style={styles.colorWhite}>{bookDetails.title}</Text>
                  <Text style={styles.title}>Autores</Text>
                  <Text style={styles.colorWhite}>
                    {bookDetails.authors} ({bookDetails.publishedDate})
                  </Text>
                  <Text style={styles.title}>Editora</Text>
                  <Text style={styles.colorWhite}>{bookDetails.publisher}</Text>
                </Col>
              </Row>
              <Row style={[styles.center, styles.flex1]}>
                <Text style={styles.textDescription}>
                  {bookDetails.description}
                </Text>
              </Row>
            </Grid>
          </ScrollView>
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
  flex1: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
  },
  colorWhite: {
    color: '#fff',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textDescription: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  center: {
    alignItems: 'center',
  },
  alignBackIcon: {
    alignSelf: 'flex-start',
    paddingVertical: 10
  },
  padding: {
    paddingLeft: 10,
  },
});

export default Detail;

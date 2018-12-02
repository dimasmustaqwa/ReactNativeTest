import React from "react";
import { View, Text, Image, ScrollView, FlatList, Alert, TouchableHighlight } from "react-native";

import Images from "./Images";
import CalendarStyle from "./CalendarStyle";

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titleList: 'Long Text Judul Long Text Judul Long Text Judul Long Text Judul',
      dataList: [
        {
          image: 'https://s3-ap-southeast-1.amazonaws.com/8villages/7609637e-7539-4c14-b188-f56eed848906-mobile.jpg',
          title: 'Peluncuran Indonesian Arts and Cultural Club',
          location: 'Indonesian',
          time: '07/01/2018 07:00:00'
        },
        {
          image: 'https://s3-ap-southeast-1.amazonaws.com/8villages/7609637e-7539-4c14-b188-f56eed848906-mobile.jpg',
          title: 'Peluncuran Indonesian Arts and Cultural Club',
          location: 'Indonesian',
          time: '07/01/2018 07:00:00'
        },
        {
          image: 'https://s3-ap-southeast-1.amazonaws.com/8villages/7609637e-7539-4c14-b188-f56eed848906-mobile.jpg',
          title: 'Peluncuran Indonesian Arts and Cultural Club',
          location: 'Indonesian',
          time: '07/01/2018 07:00:00'
        },
        {
          image: 'https://s3-ap-southeast-1.amazonaws.com/8villages/7609637e-7539-4c14-b188-f56eed848906-mobile.jpg',
          title: 'Peluncuran Indonesian Arts and Cultural Club',
          location: 'Indonesian',
          time: '07/01/2018 07:00:00'
        },
        {
          image: 'https://s3-ap-southeast-1.amazonaws.com/8villages/7609637e-7539-4c14-b188-f56eed848906-mobile.jpg',
          title: 'Peluncuran Indonesian Arts and Cultural Club',
          location: 'Indonesian',
          time: '07/01/2018 07:00:00'
        },
        {
          image: 'https://s3-ap-southeast-1.amazonaws.com/8villages/7609637e-7539-4c14-b188-f56eed848906-mobile.jpg',
          title: 'Peluncuran Indonesian Arts and Cultural Club',
          location: 'Indonesian',
          time: '07/01/2018 07:00:00'
        },
        {
          image: 'https://s3-ap-southeast-1.amazonaws.com/8villages/7609637e-7539-4c14-b188-f56eed848906-mobile.jpg',
          title: 'Peluncuran Indonesian Arts and Cultural Club',
          location: 'Indonesian',
          time: '07/01/2018 07:00:00'
        },
        {
          image: 'https://s3-ap-southeast-1.amazonaws.com/8villages/7609637e-7539-4c14-b188-f56eed848906-mobile.jpg',
          title: 'Peluncuran Indonesian Arts and Cultural Club',
          location: 'Indonesian',
          time: '07/01/2018 07:00:00'
        },
        {
          image: 'https://s3-ap-southeast-1.amazonaws.com/8villages/7609637e-7539-4c14-b188-f56eed848906-mobile.jpg',
          title: 'Peluncuran Indonesian Arts and Cultural Club',
          location: 'Indonesian',
          time: '07/01/2018 07:00:00'
        },
        {
          image: 'https://s3-ap-southeast-1.amazonaws.com/8villages/7609637e-7539-4c14-b188-f56eed848906-mobile.jpg',
          title: 'Peluncuran Indonesian Arts and Cultural Club',
          location: 'Indonesian',
          time: '07/01/2018 07:00:00'
        },
        {
          image: 'https://s3-ap-southeast-1.amazonaws.com/8villages/7609637e-7539-4c14-b188-f56eed848906-mobile.jpg',
          title: 'Peluncuran Indonesian Arts and Cultural Club',
          location: 'Indonesian',
          time: '07/01/2018 07:00:00'
        },
        {
          image: 'https://s3-ap-southeast-1.amazonaws.com/8villages/7609637e-7539-4c14-b188-f56eed848906-mobile.jpg',
          title: 'Peluncuran Indonesian Arts and Cultural Club',
          location: 'Indonesian',
          time: '07/01/2018 07:00:00'
        },
      ]
    }

  }
  test() {
    console.log(this.props);
  }

  listCalendar() {
    const { dataList } = this.state;
    switch (true) {
      case (dataList.length !== 0):
      case (dataList !== undefined):
        return (
          <View style={{ marginBottom: 60 }}>
            <FlatList
              data={dataList}
              renderItem={this.contentCalender}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        );
      default:
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ backgroundColor: 'white' }}>Lagi Loading</Text>
          </View>
        );
    }
  }

  contentCalender({ item, index }) {
    return (
      <TouchableHighlight onPress={() => {
        Alert.alert(
          'Alert Title',
          'My Alert Msg',
          [
            { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false }
        )
      }}>
        <View style={CalendarStyle.containerListCalendar} key={index}>
          <View style={CalendarStyle.imageListCalendar}>
            <Image source={{ uri: item.image }} style={CalendarStyle.imageListCalendar} />
          </View>

          <View style={{ flex: 1 }}>
            <View>
              <Text numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
            </View>
            <View style={CalendarStyle.rowWithImage}>
              <Image source={Images.iconCalendarEvent} style={{ height: 10, width: 10, marginRight: 10 }} resizeMode={'contain'} />
              <Text style={{ fontSize: 10, }} numberOfLines={1} ellipsizeMode='tail'>{item.time}</Text>
            </View>
            <View style={CalendarStyle.rowWithImage}>
              <Image source={Images.iconCalendarLocation} style={{ height: 10, width: 10, marginRight: 10 }} resizeMode={'contain'} />
              <Text style={{ fontSize: 10, }} numberOfLines={1} ellipsizeMode='tail'>{item.location}</Text>
            </View>
          </View>

        </View>
      </TouchableHighlight>
    );
  }

  loadMore() {
    console.log('jalanin ini')
  }

  render() {
    console.log(this);
    const { titleList, dataList } = this.state;

    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
      console.log('test', contentOffset.y);
      const paddingToBottom = 20;
      return layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom;
    };

    return (
      <React.Fragment>
        <View style={CalendarStyle.containerCalendar}>

          <View style={CalendarStyle.headerCalendar}>
            <View style={{ marginRight: 10 }} >
              <Image source={Images.iconLeftArrow} style={{ height: 16, width: 16, marginRight: 10 }} resizeMode={'contain'} />
            </View>
            <Text style={CalendarStyle.textCalendar} numberOfLines={1} ellipsizeMode='tail'>{titleList}</Text>
          </View>

          <ScrollView
            onScroll={({ nativeEvent }) => {
              if (isCloseToBottom(nativeEvent)) {
                this.loadMore();
              }
            }}
          >
            {this.listCalendar()}
          </ScrollView>
          {/* <View onPress={() => this.test()} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Home Screen</Text>
        </View> */}
        </View>
      </React.Fragment>
    );
  }
}

export default Home;
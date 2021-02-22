import React from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

function Menu(props) {

    const renderMenuItem = ({ item, index }) => {

        return (
            // <ListItem
            //     key={index}
            //     title={item.name}
            //     subtitle={item.description}
            //     hideChevron={true}
            //     onPress={() => props.onPress(item.id)}
            //     Avatar source ={{ uri : require('./images/uthappizza.png') }}
            // />
            <ListItem
                // title={item.name}
                // subtitle={item.description}
                key={index}
                hideChevron={true}
                onPress={() => props.onPress(item.id)}
            >
            <Avatar source ={{ uri : require('./' + item.image) }} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
            </ListItem.Content>
            {/* <ListItem.Chevron /> */}
          </ListItem>
        );
    };

    return (
        <FlatList
            keyExtractor={item => item.id.toString()}
            data={props.dishes}
            renderItem={renderMenuItem}
        />
    );
}


export default Menu;
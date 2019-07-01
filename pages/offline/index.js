import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { DarkTheme } from 'react-native-paper';
import { connect } from 'react-redux';

import Album from './Album';
import Artist from './Artist';
import Song from './Song';
import Songs from '../shared/Songs';

import { getOfflineMedia } from '../../actions';
import Filter from '../shared/Filter';

const ArtistNavigation = createStackNavigator({
    Artist: { screen: Artist },
    Filter: { screen: Filter }
},
    {
        initialRouteName: 'Artist',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: DarkTheme.colors.surface,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: DarkTheme.colors.text
            },
        },
    }
);

ArtistNavigation.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

const AlbumNavigation = createStackNavigator({
    Album: { screen: Album },
    Filter: { screen: Filter }
},
    {
        initialRouteName: 'Album',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: DarkTheme.colors.surface,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: DarkTheme.colors.text
            },
        },
    }
);

AlbumNavigation.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

// https://reactnavigation.org/docs/en/navigation-options-resolution.html#a-tab-navigator-contains-a-stack-and-you-want-to-hide-the-tab-bar-on-specific-screens

export default createMaterialTopTabNavigator({
    Song: { screen: Song },
    Artist: { screen: ArtistNavigation },
    Album: { screen: AlbumNavigation },
}, {
        tabBarOptions: {
            labelStyle: {
                fontSize: 14,
            },
            tabStyle: {
                width: 100,
            },
            indicatorStyle: {
                backgroundColor: DarkTheme.colors.primary
            },
            style: {
                backgroundColor: DarkTheme.colors.surface,
            },
        }
});

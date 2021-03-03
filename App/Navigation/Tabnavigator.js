import * as React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';


const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions:
        {
            headerShown: true
        }
    }
);


const SecondStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerShown: true
        }
    }
);



const ProfileStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerShown: true,
            headerTitleAlign: "center"
        }
    }
);


const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                title: '',
                tabBarBadge: false,
                tabBarIcon: ({ focused }) => {
                    return focused ? (
                        <View style={styles.barIconConatiner}>
                            <View>
                                <Text style={{ fontSize: 11.9, color: "grey" }}>Dashboard</Text>
                            </View>
                        </View>

                    ) : (
                            <View style={styles.barIconConatiner}>
                                {/*  {<Image
                                    style={{
                                        width: 28,
                                        height: 28,
                                        position: "relative",
                                        resizeMode: "contain"
                                    }}
                                    source={require('../assets/images/tabbar/menu_dashboard.png')}
                                />} */}
                                <View>
                                    <Text style={{ fontSize: 11.9, color: "#EF0D33" }}>Dashboard</Text>
                                </View>
                            </View>
                        )
                },
                tabBarOptions: {
                    tabBarBadge: false,
                    showIcon: true,
                }
            }
        },
        Second: {
            screen: SecondStack,
            navigationOptions: {
                title: '',
                tabBarBadge: false,
                tabBarIcon: ({ focused }) => {
                    return focused ? (
                        <View style={styles.barIconConatiner}>
                            <View>
                                <Text style={{ fontSize: 11.9, color: "grey" }}>Overview</Text>
                            </View>
                        </View>

                    ) : (
                            <View style={styles.barIconConatiner}>
                                <View>
                                    <Text style={{ fontSize: 11.9, color: "#EF0D33" }}>Overview</Text>
                                </View>
                            </View>
                        )
                },
                tabBarOptions: {
                    tabBarBadge: false,
                    showIcon: true,
                }
            }
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                title: '',
                tabBarBadge: false,
                tabBarIcon: ({ focused }) => {
                    return focused ? (
                        <View style={styles.barIconConatiner}>
                            <View>
                                <Text style={{ fontSize: 11.9, color: "grey" }}>Profile</Text>
                            </View>
                        </View>

                    ) : (
                            <View style={styles.barIconConatiner}>
                                <View>
                                    <Text style={{ fontSize: 11.9, color: "#EF0D33" }}>Profile</Text>
                                </View>
                            </View>
                        )
                },
                tabBarOptions: {
                    tabBarBadge: false,
                    showIcon: true,
                }
            }
        },
    },
    {
        initialRouteName: "Home",
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            swipeEnabled: true,
        },
        barStyle: { backgroundColor: "white" },

    },
);

const styles = StyleSheet.create({
    barIconConatiner: {
        width: 70,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

});

export default createAppContainer(TabNavigator); 
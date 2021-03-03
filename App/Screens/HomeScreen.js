/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    Image,
    Switch
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Container, Content } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { _storeData, _removeItem, _retrieveItem } from '../utils/UrlConst';

let screenHeight = Dimensions.get('window').height;
let screenWidth = Dimensions.get('window').width;

//console.warn("screenheight", screenHeight)
class App extends React.Component {
   
    static navigationOptions = ({ navigation }) => {
        return {
            headerShown: false,
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };
    }

    async componentDidMount() {
        let Username = await _retrieveItem('username')
        this.setState({ username: Username })
    }

    render() {
        return (
            <>
                <Container style={styles.container}>
                    <Content>
                        <View style={styles.root}>
                            <Image style={styles.imagelogo} source={require('../assets/images/logo_highres.png')} />
                            <View style={styles.textContainer}>
                                <Text style={styles.welcomeText}>Welcome</Text>
                                <Text style={styles.usernameText}>{this.state.username}</Text>
                            </View>
                        </View>
                    </Content>
                </Container>
            </>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white"
    },
    root: {
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    imagelogo: {
        marginTop: ('10%'),
        resizeMode: "contain",
        height: 200,
        width: 200
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    welcomeText: {
        color: "#EF0D33",
        fontSize: 24,
        fontFamily: 'Montserrat-Bold'
    },
    usernameText: {
        color: "#EF0D33",
        fontSize: 20,
        fontFamily: 'Montserrat-Italic'
    }
});

export default App;

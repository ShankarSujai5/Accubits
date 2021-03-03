/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Image,
    Keyboard,
    Alert
} from 'react-native';
import { Container, Content } from 'native-base';
import AuthTextInput from '../Components/AuthTextInput';
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
            height: 100,
            width: 10,
            UserName: "",
            Password: "",
            ErrorEmailStatus: true,
            ErrorPasswordStatus: true,
            ErrorMessage_Email: '',
            ErrorMessage_Password: '',

        };
    }
    clearText() {
        this.setState({ UserName: '' })
        this.setState({ Password: '' })
    }

    onTextChange = (value, name) => {
        if (name === "UserName") {
            this.setState({
                UserName: value,
                ErrorEmailStatus: true,
                ErrorMessage_Email: null,
                inputClear: false
            });
        }
        else if (name === "Password") {
            this.setState({
                Password: value,
                ErrorPasswordStatus: true,
                ErrorMessage_Password: null,
                inputClear: false
            });
        }
    }

    login = async () => {
        Keyboard.dismiss();
        this.setState({ isLoading: true })
        if (this.state.UserName === "" && this.state.Password === "") {
            Alert.alert("Accubits", "Enter Fields");
            this.setState({
                ErrorEmailStatus: true,
                ErrorMessage_Email: "Enter user name",
                ErrorPasswordStatus: true,
                ErrorMessage_Password: "Enter Password",
            })
        }
        else {
            _storeData('username', this.state.UserName)
            this.props.navigation.navigate('TabScreen')
        }
    }

    render() {
        return (
            <>
                <Container style={styles.container}>
                    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
                        <View style={styles.scrollstyle}>
                            {/* <Image style={{ marginTop: ('10%') }} source={require('../assets/images/logo_lowres.png')} /> */}
                            <Image style={styles.imagelogo} source={require('../assets/images/logo_highres.png')} />
                            <View>
                                <AuthTextInput style={styles.input1}
                                    text={"Username"}
                                    errorStatus={this.state.ErrorEmailStatus}
                                    errorMessage={this.state.ErrorMessage_Email}
                                    kType={'email-address'}
                                    onChangeText={(value) => this.onTextChange(value, "UserName")}
                                    value={this.state.inputClear ? "" : this.state.UserName}
                                />
                                <AuthTextInput style={styles.input1}
                                    text={"Password"}
                                    errorStatus={this.state.ErrorPasswordStatus}
                                    errorMessage={this.state.ErrorMessage_Password}
                                    boolSecureTextEntry={true}
                                    onChangeText={(value) => this.onTextChange(value, "Password")}
                                    value={this.state.inputClear ? "" : this.state.Password}
                                />
                                <TouchableOpacity style={styles.buttonstyle} onPress={() => this.login()}>
                                    <Text style={styles.textStyle}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </ScrollView>

                </Container>
            </>
        );
    }
}


const styles = StyleSheet.create({
   container:{
    backgroundColor: "#EF0D33"
   },
   scrollstyle:{
    justifyContent: "center", 
    alignItems: "center",
     alignSelf: "center"
   },

    input1: {
        borderBottomWidth: 0.5,
        fontSize: 16,
    },
    imagelogo: {
        marginTop: ('10%'),
        resizeMode: "contain",
        height: 200,
        width: 200
    },
    textStyle:{
        color: '#FFFFFF', 
        fontFamily:'Montserrat-Bold'
    },
    buttonstyle: {
        height: 40,
        width: 150,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 40,
        backgroundColor: "#EF0D33",
    }
});

export default App;

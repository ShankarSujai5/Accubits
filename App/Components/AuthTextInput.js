/* eslint-disable */

import React from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AuthTextInput = ({ text, value, kType, boolSecureTextEntry, onChangeText, errorMessage, errorStatus, textInputWidth = null }) => (
    <View>
        <TextInput placeholder={text}
            value={value}
            secureTextEntry={boolSecureTextEntry}
            placeholderTextColor={'grey'}
            onChangeText={onChangeText}
            autoCapitalize='none'
            keyboardType={kType}


            style={styles.inputtext} />
        {
            errorStatus == true ?
                <Text
                    style={{
                        fontSize: 12, marginLeft: 10,
                        marginRight: 10, color: 'red', marginTop: 10,
                        width: textInputWidth, position: 'relative',
                        bottom: hp('2%'),
                        left: wp('1%')
                    }}
                >{errorMessage}</Text>
                :
                <View />

        }
    </View>

);
const styles = StyleSheet.create({
    inputtext: {
        margin: 10,
        height: 40,
        width: wp('82%'),
        borderBottomWidth: 0.5,
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFFFFF'
    }
});

export default AuthTextInput;
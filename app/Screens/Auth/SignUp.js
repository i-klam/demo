import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, IMAGES } from '../../constants/theme';
import FeatherIcon from "react-native-vector-icons/Feather";
import { Checkbox } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';

const SignUp = (props) => {

    const theme = useTheme();
    const { colors } = theme;

    const [isFocused, setisFocused] = useState(false);
    const [isFocused2, setisFocused2] = useState(false);
    const [isFocused3, setisFocused3] = useState(false);
    const [isChecked, setisChecked] = useState(false);
    const [handlePassword, setHandlePassword] = useState(true);
    const [handlePassword2, setHandlePassword2] = useState(true);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ ...GlobalStyleSheet.container, flex: 1, backgroundColor: colors.background }}>
                    <View style={{ marginBottom: 30, alignItems: 'center', marginTop: 30 }}>
                        <Image
                            style={{
                                height: 51,
                                width: 162,
                                resizeMode: 'contain',
                                marginBottom: 20,
                            }}
                            source={theme.dark ? IMAGES.logowhite : IMAGES.logo}
                        />
                        <Text style={{ ...FONTS.h3, marginBottom: 6, color: colors.title }}>Create your account</Text>
                        <Text style={{ ...FONTS.font, color: colors.text }}>Lets get started with your 30 days free trial</Text>
                    </View>

                    <View style={GlobalStyleSheet.inputGroup}>
                        <Text style={[GlobalStyleSheet.label, { color: colors.title }]}>Username</Text>
                        <TextInput
                            style={[GlobalStyleSheet.shadow2,
                            {
                                backgroundColor: colors.input,
                                color: colors.title,
                                borderColor: colors.border,
                                paddingLeft: 20,
                                height:48
                            },
                            isFocused && GlobalStyleSheet.activeInput
                            ]}
                            onFocus={() => setisFocused(true)}
                            onBlur={() => setisFocused(false)}
                            placeholder='Type Username Here'
                            placeholderTextColor={colors.textLight}
                        />
                    </View>
                    <View style={GlobalStyleSheet.inputGroup}>
                        <Text style={[GlobalStyleSheet.label, { color: colors.title }]}>Password</Text>
                        <View>
                            <TouchableOpacity
                                onPress={() => setHandlePassword(!handlePassword)}
                                style={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    height: 50,
                                    width: 50,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    right: 0,
                                    opacity: .5,
                                }}
                            >
                                {handlePassword ?
                                    <FeatherIcon name='eye-off' color={colors.title} size={18} />
                                    :
                                    <FeatherIcon name='eye' color={colors.title} size={18} />
                                }
                            </TouchableOpacity>
                            <TextInput
                                style={[GlobalStyleSheet.shadow2,
                                {
                                    backgroundColor: colors.input,
                                    color: colors.title,
                                    borderColor: colors.border,
                                    paddingLeft: 20,
                                    height:48
                                },
                                isFocused2 && GlobalStyleSheet.activeInput
                                ]}
                                onFocus={() => setisFocused2(true)}
                                onBlur={() => setisFocused2(false)}
                                secureTextEntry={handlePassword}
                                placeholder='Type Password Here'
                                placeholderTextColor={colors.textLight}
                            />
                        </View>
                    </View>
                    <View style={[GlobalStyleSheet.inputGroup, { marginBottom: 5 }]}>
                        <Text style={[GlobalStyleSheet.label, { color: colors.title }]}>Confirm Password</Text>
                        <View>
                            <TouchableOpacity
                                onPress={() => setHandlePassword2(!handlePassword2)}
                                style={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    height: 50,
                                    width: 50,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    right: 0,
                                    opacity: .5,
                                }}
                            >
                                {handlePassword2 ?
                                    <FeatherIcon name='eye-off' color={colors.title} size={18} />
                                    :
                                    <FeatherIcon name='eye' color={colors.title} size={18} />
                                }
                            </TouchableOpacity>
                            <TextInput
                                style={[GlobalStyleSheet.shadow2,
                                {
                                    backgroundColor: colors.input,
                                    color: colors.title,
                                    borderColor: colors.border,
                                    paddingLeft: 20,
                                    height:48
                                },
                                isFocused3 && GlobalStyleSheet.activeInput
                                ]}
                                onFocus={() => setisFocused3(true)}
                                onBlur={() => setisFocused3(false)}
                                secureTextEntry={handlePassword2}
                                placeholder='Confirm Password'
                                placeholderTextColor={colors.textLight}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            marginBottom: 15
                        }}
                    >
                        <Checkbox.Item
                            onPress={() => setisChecked(!isChecked)}
                            position='leading'
                            label="I agree to all Term, Privacy Policy and fees"
                            color={COLORS.primary}
                            uncheckedColor={colors.textLight}
                            status={isChecked ? "checked" : "unchecked"}
                            style={{
                                paddingHorizontal: 0,
                                paddingVertical: 5,
                            }}
                            labelStyle={{
                                ...FONTS.font,
                                color: colors.title,
                                textAlign: 'left',
                            }}
                        />
                    </View>
                    <CustomButton
                        onPress={() => props.navigation.navigate('SignIn')}
                        color={COLORS.primary}
                        title="Register"
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 12,
                        }}
                    >
                        <Text style={{ ...FONTS.font, color: colors.text, marginRight: 5 }}>Already have an account ?</Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('SignIn')}
                        >
                            <Text style={{ ...FONTS.font, color: COLORS.primary }}>Log in</Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 30,
                            marginBottom: 20,
                        }}
                    >
                        <View
                            style={{
                                height: 1,
                                flex: 1,
                                backgroundColor: colors.borderColor,
                            }}
                        />
                        <Text style={{ ...FONTS.font, color: colors.text, marginHorizontal: 15 }}>Or sign in with</Text>
                        <View
                            style={{
                                height: 1,
                                flex: 1,
                                backgroundColor: colors.borderColor,
                            }}
                        />
                    </View>

                    <TouchableOpacity style={{
                        height: 48,
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 20,
                        backgroundColor: theme.dark ? 'rgba(255,255,255,.1)' : '#E8ECF2'
                    }}>
                        <Image
                            style={{ position: 'absolute', left: 25, width: 20, height: 20 }}
                            source={IMAGES.google2}
                        />
                        <Text style={{ ...FONTS.font, fontSize: 15, color: colors.title }}>Login with Google</Text>
                    </TouchableOpacity>
                    {/* <View
                        style={{
                            flexDirection:'row',
                            justifyContent:'center',
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                height:48,
                                width:48,
                                alignItems:'center',
                                justifyContent:'center',
                                borderWidth:1,
                                borderRadius:48,
                                borderColor:colors.borderColor,
                                marginHorizontal:5,
                            }} 
                        >
                            <Image
                                style={{
                                    height:20,
                                    width:20,
                                }}
                                source={IMAGES.google}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                height:48,
                                width:48,
                                alignItems:'center',
                                justifyContent:'center',
                                borderWidth:1,
                                borderRadius:48,
                                borderColor:colors.borderColor,
                                marginHorizontal:5,
                            }} 
                        >
                            <Image
                                style={{
                                    height:22,
                                    width:22,
                                }}
                                source={IMAGES.facebook}
                            />
                        </TouchableOpacity>
                    </View> */}

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default SignUp;
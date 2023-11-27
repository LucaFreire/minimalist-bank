import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../../store/slice';
import axios from 'axios';
import styles from './style';
import HeaderHome from '../../components/headerHome';
import CurrencyData from '../../components/currencyData';

export default function HomePage(props) {
    const dispatch = useDispatch();
    const { balance, document, name, email } = useSelector((state) => state.user);

    const [lastName, setLastName] = useState('');

    const token = sessionStorage.getItem('token');

    const handleGetUserData = useCallback(async () => {
        try {
            const res = await axios.post("http://localhost:8080/user/token", token, { headers: { "Authorization": "Bearer " + token } });

            let fullName = res.data.name.split(" ");
            console.log('Response Data:', res.data);
            dispatch(setUserData(res.data));
            setLastName(fullName[fullName.length - 1]);
        } catch (error) {
            console.log(error);
        }
    }, [dispatch, token]);

    useEffect(() => {
        handleGetUserData();
    }, [handleGetUserData]);


    console.log('Redux Data:', { balance, document, name, email });

    return (
        <View style={styles.main}>
            <HeaderHome name={lastName} />
            <CurrencyData user={balance} />

            <View style={styles.buttonsSection}>
                <Pressable style={styles.buttons} onPress={() => props.navigation.navigate('historic')}>
                    <Text>Historic</Text>
                </Pressable>
                <Pressable style={styles.buttons} onPress={() => props.navigation.navigate('transfer')}>
                    <Text>Transfer</Text>
                </Pressable>
            </View>
        </View>
    );
}

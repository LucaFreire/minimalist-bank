import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../../store/slice';
import axios from 'axios';
import styles from './style';
import HeaderHome from '../../components/headerHome';
import BalanceData from '../../components/balanceData';

export default function HomePage(props) {
    const dispatch = useDispatch();
    const { balance } = useSelector((state) => state.user);

    const [lastName, setLastName] = useState(' . . . ');

    const token = sessionStorage.getItem('token');

    const handleGetUserData = useCallback(async () => {
        try {
            const res = await axios.post("http://localhost:8080/user/token", token, { headers: { "Authorization": "Bearer " + token } });

            let fullName = res.data.name.split(" ");
            dispatch(setUserData(res.data));
            setLastName(fullName[fullName.length - 1]);
        } catch (error) {
            console.log(error);
        }
    }, [dispatch, token]);

    useEffect(() => {
        handleGetUserData();
    }, [handleGetUserData]);

    return (
        <View style={styles.main}>
            <HeaderHome name={lastName} />
            <BalanceData balance={balance} />

            <View style={styles.buttonsSection}>
                <TouchableOpacity style={styles.buttons} onPress={() => props.navigation.navigate('historic')}>
                    <Text style={{ color: "white", fontSize: 28, fontWeight: 700 }}>Historic</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => props.navigation.navigate('transfer')}>
                    <Text style={{ color: "white", fontSize: 28, fontWeight: 700 }}>Transfer</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

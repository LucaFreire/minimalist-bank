import { TextInput, TouchableOpacity, View, Text, Pressable, Image, ScrollView } from "react-native"
import { useCallback, useEffect, useState } from "react"
import styles from "./style"
import HistoricCard from "../../components/historicCard"
import { Icon } from 'react-native-paper';
import axios from "axios"
import { ActivityIndicator } from 'react-native-paper';

export default function historicPage(props) {

    const [transaction, setTransaction] = useState([]);
    const token = sessionStorage.getItem('token')
    const [loading, setLoading] = useState(false);

    const handleGetTransactions = useCallback(async () => {

        try {
            setLoading(true);
            await axios.get("http://localhost:8080/transaction/getAll/" + token, { headers: { "Authorization": "Bearer " + token } }).then((res) => {
                setTransaction(res.data);
                setLoading(false);
            });
        } catch (error) {
            console.log(error);
        }
    })

    useEffect(() => {
        handleGetTransactions()
    }, [])

    const renderCards = () => {
        return transaction.map((item, index) => {
            return <HistoricCard transactionData={item} key={index} />
        })
    }

    return (
        <>
            <ScrollView style={styles.main}>
                <TouchableOpacity style={{ width: '30px', padding: '10px' }} onPress={() => props.navigation.navigate('home')}>
                    <Icon
                        source="arrow-left"
                        color="white"
                        size={30}
                    />
                </TouchableOpacity>
                <View style={styles.container}>
                    <Text style={{ fontSize: 28, fontWeight: 700, color: 'white' }}>Your Historic</Text>
                    <ActivityIndicator animating={loading} color={"#41B6E6"} size={"large"} />
                    {renderCards()}
                </View>
            </ScrollView>
        </>
    )
}
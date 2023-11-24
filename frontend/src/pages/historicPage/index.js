import { TextInput, TouchableOpacity, View, Text, Pressable, Image, ScrollView } from "react-native"
import { useCallback, useEffect, useState } from "react"
import styles from "./style"
import HistoricCard from "../../components/historicCard"
import axios from "axios"

export default function historicPage(props) {

    const [transaction, setTransaction] = useState([]);

    const token = sessionStorage.getItem('token')


    const handleGetTransactions = useCallback(async () => {
        try {
            await axios.get("http://localhost:8080/transaction/getAll/" + token, { headers: { "Authorization": "Bearer " + token }}).then((res) => {
                setTransaction(res.data);
                
            console.log(res.data);
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
            console.log("item",item)
           return   <HistoricCard transactionData={item} key={index} />
        })
    }

    return (
        <>
            <ScrollView style={styles.main}>
                <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
                    <Image source={require("../../../assets/arrow.png")} style={styles.arrowStyle} />
                </TouchableOpacity>
                <View style={styles.container}>
                    <h3>Your Historic</h3>
                    {renderCards()}
                    {transaction.length}
                </View>
            </ScrollView>
        </>
    )
}
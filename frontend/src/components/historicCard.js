import { useState } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"


export default function HistoricCard({ transactionData }) {

    let money = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, currency:"BRL" }).format(transactionData.value)
    const userName = "lucas freire";
    return (
        <View style={transactionData.payer.name == userName ? styles.main_red : styles.main_green}>
            <Text>Date: {transactionData.date}</Text>
            <Text>Value: R$ {money}</Text>
            <Text>{transactionData.payer.name == userName ? "To" : "From"}: {transactionData.payer.name == userName ? transactionData.payee.name : transactionData.payer.name} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main_red: {
        gap: "10px",
        padding: "15px",
        backgroundColor: "red",
        flexDirection: "column",
        marginTop: "30px",
        height: "25%",
        width: "85%",
        borderRadius: "15px"
    },
    main_green: {
        gap: "10px",
        padding: "15px",
        backgroundColor: "green",
        flexDirection: "column",
        marginTop: "30px",
        height: "25%",
        width: "85%",
        borderRadius: "15px"
    }
})
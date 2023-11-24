import { useState } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"


export default function HistoricCard({ transactionData }) {

    // let money = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, currency:"BRL" }).format(transactionData.value)
    console.log("transactionData",transactionData)
    return (
        <View style={styles.main}>
            <Text>Date: {transactionData.date}</Text>
            <Text>Value: {transactionData.value}</Text>
            <Text>From or To: {transactionData.payer.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        gap: "10px",
        padding: "15px",
        backgroundColor: "gray",
        flexDirection: "column",

        marginTop: "30px",
        height: "28%",
        width: "85%",
        borderRadius: "15px"
    }
}) 
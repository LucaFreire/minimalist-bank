import { useState } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"


export default function HistoricCard({ transactionData }) {

    // let money = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, currency:"BRL" }).format(transactionData.value)

    return (
        <View style={styles.main}>
            <Text>Date: 10/10/2010 12:49:10</Text>
            <Text>Value: </Text>
            <Text>From or To: </Text>
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
        height: "15%",
        width: "85%",
        borderRadius: "15px"
    }
}) 
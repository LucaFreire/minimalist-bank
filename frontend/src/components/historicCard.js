import { View, Text, StyleSheet } from "react-native"


export default function HistoricCard({ transactionData }) {

    let money = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, currency: "BRL" }).format(transactionData.value)
    const userName = "lucas freire";
    return (
        <View style={transactionData.payer.name == userName ? styles.main_red : styles.main_green}>
            <Text style={transactionData.payer.name == userName ? styles.textRed : styles.textGreen}>R$ {money}</Text>
            <Text style={styles.text}>Date: {transactionData.date}</Text>
            <Text style={styles.text}>{transactionData.payer.name == userName ? "To" : "From"}: {transactionData.payer.name == userName ? transactionData.payee.name : transactionData.payer.name} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main_red: {
        gap: "10px",
        padding: "15px",
        backgroundColor: "white",
        flexDirection: "column",
        marginTop: "30px",
        height: "20%",
        width: "85%",
        borderRadius: "15px"
    },
    main_green: {
        gap: "10px",
        padding: "15px",
        borderColor: 'white',
        flexDirection: "column",
        backgroundColor: "white",
        marginTop: "30px",
        height: "20%",
        width: "85%",
        borderRadius: "15px"
    },
    text: {
        color: "black",
        fontSize: 20,
        fontWeight: 500
    },
    textRed: {
        color: "red",
        fontSize: 30,
        fontWeight: 500
    },
    textGreen: {
        color: "green",
        fontSize: 30,
        fontWeight: 500
    }
})
// #41B6E6
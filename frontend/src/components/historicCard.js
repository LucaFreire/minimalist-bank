import { View, Text, StyleSheet } from "react-native"
import { useSelector } from 'react-redux';

export default function HistoricCard({ transactionData }) {

    const { name } = useSelector((state) => state.user);

    let money = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, currency: "BRL" }).format(transactionData.value)

    return (
        <View style={transactionData.payer.name == name ? styles.main_red : styles.main_green}>
            <Text style={transactionData.payer.name == name ? styles.textRed : styles.textGreen}>R$ {money}</Text>
            <Text style={styles.text}>Date: {transactionData.date}</Text>
            <Text style={styles.text}>{transactionData.payer.name == name ? "To" : "From"}: {transactionData.payer.name == name ? transactionData.payee.name : transactionData.payer.name} </Text>
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
        fontWeight: 500,
        textTransform: 'capitalize'
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
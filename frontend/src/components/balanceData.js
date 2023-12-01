import { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Icon } from "react-native-paper"


export default function BalanceData({ balance }) {

    const [show, setShow] = useState(false)

    const toggleShow = () => {
        setShow(!show)
    }

    let money = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, currency: "BRL" }).format(balance)

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View>
                    <Text></Text>
                </View>
                <View>
                    <TouchableOpacity onPress={toggleShow}>
                        <Icon
                            style={{ padding: '20px' }}
                            size={40}
                            color='white'
                            source={show ? "eye" : "eye-off"}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ width: '100%', justifyContent: "center", alignItems: "center" }}>
                <Text style={styles.currencyText}>{show ? "R$ " + money : "* * *"}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        padding: '10px',
        flexDirection: "column",
        alignContent: 'center',
        marginTop: "10px",
        height: "40%",
        width: "94%",
    },
    headerText: {
        fontSize: "15px",
        color: "white",
        padding: "10px",
    },
    currencyText: {
        justifyContent: "center",
        fontSize: "40px",
        color: "white",
        marginTop: '10vh',
        fontWeight: 700
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
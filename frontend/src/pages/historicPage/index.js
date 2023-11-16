import { TextInput, TouchableOpacity, View, Text, Pressable } from "react-native"
import { useCallback, useEffect, useState } from "react"
import styles from "./style"
import HistoricCard from "../../components/historicCard"

export default function historicPage(props) {

    return (
        <View style={styles.main}>
            <HistoricCard />
            <HistoricCard />
            <HistoricCard />
            <HistoricCard />
            <HistoricCard />
            <HistoricCard />

        </View>
    )
}
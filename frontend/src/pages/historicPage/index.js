import { TextInput, TouchableOpacity, View, Text, Pressable, Image, ScrollView } from "react-native"
import { useCallback, useEffect, useState } from "react"
import styles from "./style"
import HistoricCard from "../../components/historicCard"

export default function historicPage(props) {

    return (
        <>
            <ScrollView style={styles.main}>
                <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
                    <Image source={require("../../../assets/arrow.png")} style={styles.arrowStyle} />
                </TouchableOpacity>
                <View style={styles.container}>
                    <h3>Your Historic</h3>
                    <HistoricCard />
                    <HistoricCard />
                    <HistoricCard />
                    <HistoricCard />
                    <HistoricCard />
                    <HistoricCard />
                </View>
            </ScrollView>
        </>
    )
}
import { TextInput, TouchableOpacity, View, Text, Pressable } from "react-native"
import { useCallback, useEffect, useState } from "react"
import HeaderHome from "../../components/headerHome"
import CurrencyData from "../../components/balanceComponent"

import styles from "./style"

export default function homePage(props) {

    const [email, setEmail] = useState()
    const [fullName, setFullName] = useState()
    const [document, setDocument] = useState()


    // const handleGetUserData = useCallback(async () => {

    //     try {
    //         const res = await axios.get("http://localhost:3030/user");
    //         const userData = res.data;

    //         setEmail(userData.email);
    //         setFullName(userData.fullName);
    //         setDocument(userData.document);

    //     } catch (error) {
    //         console.log(error);
    //     }
    // })

    // useEffect(() => {
    //     handleGetUserData()
    // }, [])

    return (
        <View style={styles.main}>
            <HeaderHome name={"Lucas"} />
            <CurrencyData user={"20000000"} />

            <View style={styles.buttonsSection}>
                <Pressable>
                    <Text>Historic</Text>
                </Pressable>
                <Pressable>
                    <Text>Transfer</Text>
                </Pressable>
            </View>

        </View>
    )
}
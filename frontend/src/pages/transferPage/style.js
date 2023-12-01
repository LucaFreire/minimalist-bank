import { StyleSheet } from "react-native-web";

const style = StyleSheet.create({
    main: {
        display: 1,
        height: "100%",
        gap: '10px',
        backgroundColor: '#11111F'
    },
    component: {
        padding: "20px",
        display: "flex",
        gap:"20px",
        justifyContent: "center",
        alignItems: 'center',
    },
    inputContent: {
        padding: "8px",
        width: "70%",
        backgroundColor: '#11111F'
    },
    transferButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "50px",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#41B6E6',
    },
    text: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    }
});

export default style;
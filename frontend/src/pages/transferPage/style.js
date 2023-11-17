import { StyleSheet } from "react-native-web";

const style = StyleSheet.create({
    main: {
        display: 1,
        width: "100%",
        height: "100%",
        gap: '10px',
        backgroundColor: '#251336'
    },
    arrowStyle: {
        height: "15px",
        width: "10px",
        padding: "18px",
        left: '20px',
        top: '5px'
    },
    component: {
        padding: "20px",
        display: "flex",
        gap:"20px",
        justifyContent: "center",
        alignItems: 'center',
    },
    input: {
        padding: "8px",
        borderColor: "gray",
        width: "70%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        color: 'white'
    },
    transferButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'purple',
    }
});

export default style;
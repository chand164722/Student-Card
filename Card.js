import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
const Card = ({value}) => {
    return (
        <View style={styles.CardContainer}>
            <Image style={styles.image} source={require('../../assets/adeel.jpg')}/>
            <Text style={styles.text}>Adeel Ahmed </Text>
            <Text style={styles.text}>19-Arid-1231</Text>
            <Text style={styles.text}>BS(Software Engineering) </Text>
            <Text style={styles.text}>Department UIIT</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    CardContainer: {
        width: '25%',
        height: '95vh',
        backgroundColor: '#f7890',
        shadowColor: "lightgrey",
        shadowOffset: {
            width: 10,
            height: 19,
        },
        shadowOpacity: 0.69,
        shadowRadius: 6.65,
        elevation: 28,
        padding:1,
        margin:20,
        overflow:'hidden',
    },
    image:{
        width:'100%',
        height:'75%',
        margin:1,
        borderRadius:10,
    },
    text:{
        display:'flex',
        justifyContent:'center',
        padding:4,
        width:'100%',
        height:'15%',
        fontFamily:'Neonderthaw , cursive',
        fontSize:'1.62rem',
        fontFamily:'iattlic',
        fontWeight:700,
        color:'#1f2224'
    }
})
export default Card

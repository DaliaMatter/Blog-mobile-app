import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Profile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.info}>Name: Dalia Matter</Text>
            <Text style={styles.info}> Track: Open source</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    info: {
        fontSize: 30,
    }
})


export default Profile

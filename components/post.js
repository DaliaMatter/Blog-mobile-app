import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Post = ({ post }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Post Title:{post.title}</Text>
            <Image
                style={styles.img}
                source={{ uri: "https://source.unsplash.com/random" }}
            ></Image>
            <Text style={styles.body}>{post.body}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
        borderRadius: 20,
    },
    title: {
        paddingHorizontal: 20,
        paddingTop: 15,
        fontSize: 20,
        justifyContent: "center",
    },
    body: {
        paddingHorizontal: 10,
        paddingBottom: 20,
        fontSize: 16,
    },
    img: {
        height: 300,
        width: 350,
        borderRadius: 20,
        margin: 25,
    },
});
export default Post;

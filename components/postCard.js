import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Post = ({ post }) => {
    console.log(post);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.postTitle}
            >
                Post Title:{post.title}
            </Text>
            <TouchableWithoutFeedback
                onPress={() =>
                    navigation.navigate("PostDetails", { id: post.id })
                }
            >
                <Image
                    style={styles.postImage}
                    source={{ uri: "https://source.unsplash.com/random" }}
                ></Image>
            </TouchableWithoutFeedback>
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
    postTitle: {
        paddingHorizontal: 20,
        paddingTop: 15,
        fontSize: 20,
        justifyContent: "center",
    },
    postBody: {
        padding: 15,
    },
    postImage: {
        height: 300,
        width: 300,
        borderRadius: 20,
        margin: 25,
    },
});
export default Post;

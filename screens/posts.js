import React, { useEffect } from "react";
import axios from "axios";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import Post from "../components/postCard";

const Posts = () => {
    const [posts, setPosts] = React.useState([]);
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            setPosts(res.data);
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item} />}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default Posts;

import React, { useEffect } from "react";
import axios from "axios";
import { View } from "react-native";
import Post from "../components/post";

const PostDetails = ({ route }) => {
    const [post, setPost] = React.useState([]);
    console.log(route.params.id);
    useEffect(() => {
        axios
            .get(
                `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
            )
            .then((res) => {
                setPost(res.data);
            });
    }, []);

    return (
        <View>
            <Post post={post} />
        </View>
    );
};

export default PostDetails;

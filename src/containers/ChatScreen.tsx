import React, { useRef, useState } from "react";
import { StyleSheet, ScrollView, Platform } from "react-native";
import { Input } from "react-native-elements";
import { useAtom } from "jotai";
import { useUpdateAtom } from "jotai/utils";
import { getConversation, userProfile } from "../atoms";
import { ChatBubble } from "../components/ChatBubble";
import { Colors } from "../styles";
import { ChatBubbleType } from "../types";

export const ChatScreen = () => {
    const scrollViewRef = useRef<ScrollView>(null);
    const [conversation] = useAtom(getConversation);

    const updateConversation = useUpdateAtom(getConversation);
    const [user] = useAtom(userProfile);
    const [inputText, setInputText] = useState("");
    return (
        <>
            <ScrollView
                style={styles.scrollView}
                ref={scrollViewRef}
                onContentSizeChange={() =>
                    scrollViewRef.current?.scrollToEnd({ animated: false })
                }
            >
                {conversation.map((bubble: ChatBubbleType, i) => (
                    <ChatBubble
                        key={i}
                        isSend={bubble.senderId == user.id}
                        text={bubble.text}
                    />
                ))}
            </ScrollView>
            <Input
                placeholder="Write a message..."
                rightIcon={{
                    onPress: () => {
                        updateConversation((conversation: ChatBubbleType[]) => {
                            conversation = Object.assign([], conversation);
                            conversation.push({
                                text: inputText,
                                senderId: user.id,
                            });
                            setInputText("");
                            return conversation;
                        });
                    },
                    size: 30,
                    type: "ant-design",
                    name: "rightcircleo",
                    color: Colors.white,
                }}
                placeholderTextColor={Colors.white}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                errorStyle={styles.inputErrorStyle}
                renderErrorMessage={false}
                onChangeText={(value) => setInputText(value)}
                value={inputText}
            />
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        ...Platform.select({
            ios: {
                marginBottom: 20,
            },
        }),
    },
    inputContainerStyle: {
        width: "100%",
        margin: 0,
        paddingHorizontal: 10,
        backgroundColor: Colors.main,
        borderRadius: 25,
        borderBottomWidth: 0,
        ...Platform.select({
            ios: {
                bottom: 20,
            },
        }),
    },
    inputErrorStyle: {
        margin: 0,
        width: 0,
        height: 0,
    },
    inputStyle: {
        paddingLeft: 5,
        color: Colors.white,
    },
});

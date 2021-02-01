import { ImageRequireSource } from "react-native";

export interface User {
    id: number;
    name: string;
    imageUrl: ImageRequireSource;
}

export interface HomeMessageItem {
    sender: User;
    time: string;
    text: string;
    isLiked: boolean;
    unread?: boolean;
}

export interface ChatBubbleType {
    text: string;
    senderId: number;
}

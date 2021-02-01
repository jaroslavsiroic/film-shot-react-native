import { ChatBubbleType, HomeMessageItem, User } from "./types";

export const userData: User = {
    id: 24,
    name: "Jaroslav",
    imageUrl: require("../images/jaroslav.jpg"),
};

export const homeMessageList: HomeMessageItem[] = [
    {
        sender: {
            id: 1,
            name: "James",
            imageUrl: require("../images/james.jpg"),
        },
        time: "5:30 PM",
        text: "Hey, how's it going? What did you do today?",
        isLiked: false,
    },
    {
        sender: {
            id: 2,
            name: "Olivia",
            imageUrl: require("../images/olivia.jpg"),
        },
        time: "4:30 PM",
        text: "Hey, how's it going? What did you do today?",
        isLiked: false,
        unread: true,
    },
    {
        sender: {
            id: 3,
            name: "John",
            imageUrl: require("../images/john.jpg"),
        },
        time: "3:30 PM",
        text: "Hey, how's it going? What did you do today?",
        isLiked: false,
        unread: false,
    },
    {
        sender: {
            id: 4,
            name: "Sophia",
            imageUrl: require("../images/sophia.jpg"),
        },
        time: "2:30 PM",
        text: "Hey, how's it going? What did you do today?",
        isLiked: false,
        unread: true,
    },
    {
        sender: {
            id: 5,
            name: "Steven",
            imageUrl: require("../images/steven.jpg"),
        },
        time: "1:30 PM",
        text: "Hey, how's it going? What did you do today?",
        isLiked: false,
        unread: false,
    },
    {
        sender: {
            id: 6,
            name: "Sam",
            imageUrl: require("../images/sam.jpg"),
        },
        time: "12:30 PM",
        text: "Hey, how's it going? What did you do today?",
        isLiked: false,
        unread: false,
    },
    {
        sender: {
            id: 7,
            name: "Greg",
            imageUrl: require("../images/greg.jpg"),
        },
        time: "2:00 PM",
        text: "I ate so much food today.",
        isLiked: false,
        unread: true,
    },
];

export const conversation: ChatBubbleType[] = [
    {
        text:
            "In the first line of the sonnet which reads “Shall I compare thee to a summer’s day,” would not “a spring day” do as well or better?",
        senderId: 24,
    },
    {
        text: "It wouldn’t scan",
        senderId: 1,
    },
    {
        text: "How about “a winter’s day”? That would scan all right",
        senderId: 24,
    },
    {
        text: "Yes, but nobody wants to be compared to a winter’s day",
        senderId: 1,
    },
    {
        text: "Would you say Mr. Pickwick reminded you of Christmas?",
        senderId: 24,
    },
    {
        text: "In a way",
        senderId: 1,
    },
    {
        text:
            "Yet Christmas is a winter’s day, and I don’t think Mr. Pickwick would mind the comparison",
        senderId: 24,
    },
    {
        text:
            "I don’t think you’re serious. By a winter’s day one means a typical winter’s day, rather than a special one like Christmas.",
        senderId: 1,
    },
    {
        text: "Please write me a sonnet on the subject of the Forth Bridge",
        senderId: 24,
    },
    {
        text: "Count me out on this one. I never could write poetry",
        senderId: 1,
    },
    {
        text: " Add 34957 to 70764",
        senderId: 24,
    },
    {
        text: "105621",
        senderId: 1,
    },
    {
        text: "Do you play chess?",
        senderId: 24,
    },
    {
        text: "Yes",
        senderId: 1,
    },
    {
        text:
            "My King is on the K1 square, and I have no other pieces. You have only your King on the K6 square and a Rook on the R1 square. Your move.",
        senderId: 24,
    },
    {
        text: "Rook to R8, checkmate",
        senderId: 1,
    },
];

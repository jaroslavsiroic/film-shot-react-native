import { atom } from "jotai";
import { conversation, homeMessageList, userData } from "./mockData";
import { ChatBubbleType, HomeMessageItem, User } from "./types";

export const homeScreenListAtom = atom<HomeMessageItem[]>(homeMessageList);

export const unreadMessageCount = atom<number>(
    (get) => get(homeScreenListAtom).filter((v) => v.unread).length
);

export const userProfile = atom<User>(userData);

export const isLoggedInAtom = atom<boolean>(false);

export const getConversationMock = atom<ChatBubbleType[]>(conversation);

export const getConversation = atom<ChatBubbleType[]>(
    async () => {
        const response = await fetch(
            "https://api.jsonbin.io/b/5fee051314be5470601811e1",
            {
                method: "GET",
            }
        );
        return await response.json();
    },
    (get, set, arg) => {
        let conv = get(getConversation);
        conv.push(...arg());
        set(getConversation, conv);
    }
);

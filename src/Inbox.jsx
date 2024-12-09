import { useState } from 'react';
import './scss/Inbox.scss';
import tabStore from './tabStore';

const chats = [
    {
        img: 1,
        user: 'Elon Musk',
        messages: [
            { toMe: true, text: 'Hi, how do you like my red ass?' },
            { toMe: false, text: 'Hey Xiaobao! Idk if I like it, but your chart looks bullish.' },
            { toMe: true, text: "We're mooning, bro! Do you have our tokens?" },
            { toMe: false, text: 'No, but I want to buy now and after that will launch this rocket to the moon!!' },
            { toMe: true, text: 'Exactly! Make my ass red again!!' },
            { toMe: false, text: 'Sure sir!!!' }
        ]
    },
    {
        img: 2,
        user: 'CZ (Changpeng Zhao)',
        messages: [
            { toMe: false, text: 'Hey Xiaobao! Do you need listing? I see that Elon has good connection with your ass, and I want too!' },
            { toMe: true, text: 'Hello! 100$ per 1 hour' },
            { toMe: false, text: 'WTF AHAHAHAHAAHAHAHHAHA' },
            { toMe: true, text: 'Excuse me' },
            { toMe: false, text: 'Listing next Monday. Be ready.' },
            { toMe: true, text: "How's your summer?" },
            { toMe: false, text: '...' }
        ]
    },
    {
        img: 3,
        user: 'Donald Trump',
        messages: [
            { toMe: true, text: "Yo Donald, let's forget about the dollar and make a national currency in my honour?" },
            { toMe: false, text: 'Xiaobao, I think we can avoid a lot of problems if we do that.' },
            { toMe: true, text: 'What problems?' },
            { toMe: false, text: 'Well, if we do this - we can buy India and Pakistan.' },
            { toMe: true, text: "Oh India it's cleanest" },
            { toMe: false, text: 'Ok, gn' },
            { toMe: true, text: 'GM' },
            { toMe: false, text: 'wassup man' },
            { toMe: true, text: 'Can you ask Elon pls to stop tap my ass?' }
        ]
    },
    {
        img: 4,
        user: 'Vitalik Buterin',
        messages: [
            { toMe: true, text: 'Hello Vitalik, Can you help me with smart contract for stacking?' },
            { toMe: false, text: "Hey I don't know RUST idiot" },
            { toMe: true, text: 'lol' },
            { toMe: false, text: "Don't cry" }
        ]
    },
    {
        img: 5,
        user: 'Satoshi Nakamoto',
        messages: [
            { toMe: true, text: 'Satoshi, can you send me your photo?' },
            { toMe: false, text: 'Hello, Pussy Pussy Marijuana' },
            { toMe: true, text: 'yes or no?' },
            { toMe: false, text: "no, I'm died" }
        ]
    },
    {
        img: 6,
        user: 'Anatoly Yakovenko',
        messages: [
            { toMe: true, text: 'sir, can you help me?' },
            { toMe: false, text: 'Hello, what do you need?' },
            { toMe: true, text: 'I want 0 fees for next week.' },
            { toMe: false, text: 'give me 1 min pls' },
            { toMe: true, text: 'Appreciate u and your technology!!!' }
        ]
    },
    {
        img: 7,
        user: 'Chill Guy',
        messages: [
            { toMe: true, text: 'Yo are you chilling?' },
            { toMe: false, text: 'Yo yes' },
            { toMe: true, text: "I'm chilling too" },
            { toMe: false, text: 'Cool' },
            { toMe: true, text: "I'm from TikTok too" },
            { toMe: false, text: 'Cool' },
            { toMe: true, text: 'Chill' },
            { toMe: false, text: 'Chill' },
            { toMe: true, text: "I'm monkey, you just drawing" },
            { toMe: false, text: 'Cool' },
            { toMe: true, text: 'GG' }
        ]
    }
];


export default () => {
    const [chat, setchat] = useState(0);
    return (
        <div className='Inbox'>
            {
                chat ? <div className={`Inbox_chat`}>
                    <div className='Profile_header'>
                        <div className='Profile_header_back' onClick={() => {
                            setchat(0)
                        }}>
                            <img src="/img/back.svg" alt="" />
                        </div>
                        {chats[chat - 1].user}
                        <div className='Profile_header_back Profile_header_back_r'>
                            <img src="/img/back.svg" alt="" />
                        </div>
                    </div>
                    <div className='Inbox_chat_messages'>
                        {
                            chats[chat - 1].messages.map((message) => {
                                return <div className={`Inbox_chat_message Inbox_chat_message_${!message.toMe ? 'toMe' : 'fromMe'}`}>
                                    {
                                        !message.toMe && <img src={`/img/messages/${chat}.jpg`} alt="" />
                                    }
                                    <div className='Inbox_chat_message_text'>
                                        {message.text}
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div> : <></>
            }

            <div className={`Profile_header ${chat && 'Inbox_chatShow'}`}>
                <div className='Profile_header_back' onClick={() => {
                    tabStore.changeTab('Home')
                }}>
                    <img src="/img/back.svg" alt="" />
                </div>
                monkeyxiaobao999
                <div className='Profile_header_back Profile_header_back_r'>
                    <img src="/img/back.svg" alt="" />
                </div>
            </div>
            <div className={`Inbox_list ${chat && 'Inbox_chatShow'}`}>
                <div className='Inbox_list_header' onClick={() => {
                    tabStore.changeTab('Home')
                }}>
                    <img src="/img/back.svg" alt="" />
                    Messages
                </div>
                {
                    chats.map((_, index) => {
                        return <div className='Inbox_element' onClick={() => {
                            setchat(index + 1)
                        }}>
                            <div className='Inbox_element_img'>
                                <img src={`/img/messages/${index + 1}.jpg`} alt="" />
                            </div>
                            <div className='Inbox_element_text'>
                                <div className='Inbox_element_text_content'>
                                    <div className='Inbox_element_name'>
                                        {chats[index].user}
                                    </div>
                                    <div className='Inbox_element_message'>
                                        {chats[index].messages.at(-1).text}
                                        {/* There are deadlines, but you're a chill guy */}
                                    </div>
                                </div>
                                {/* <div className='Inbox_element_viewed'> */}
                                {/* </div> */}
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}
import { useEffect, useRef, useState } from 'react';
import './scss/Video.scss';
import tabStore from './tabStore';
import { observer } from 'mobx-react-lite';

const descs = [
    "You never know when he will get angry.",
    "He stole my ice cream. 😭😭😭😭😭",
    "My bananas were stolen by Monkey XiaoBao.😭😭😭",
    "Monkey Xiaobao stole my ice cream.😭😭😭",
    "Monkey xiaobao wants to kiss me again.🥰",
    "Give bro a kiss 😁",
    "The monkey smelled the sausage for the first time.😆😆",
    "Play with angry monkey xiaobao😁😁",
    "It may not be particularly interested in talking to me.😅",
    "How to wake up a monkey while it's sleeping?😁😁😁",
    "A monkey who steals wherever he goes.",
    "Xiaobao will become quiet after eating enough food.",
    "Monkey Xiaobao likes my food very much 🤣",
    "The Armless Monkey, Because of the lack of an arm, his running ability became particularly strong",
    "Xiaobao loves it very much😂",
    "He is really love me🥰",
    "Pay attention to the way he walks.",
    "He doesn't like lollipops😅",
    "Monkey Taobao always gets mad.",
    "Play with monkey xiaobao 😁😁",
    "I fall in love with monkey xiaobao🥰",
    "Play with angry monkey dabao😁"]

export default observer(() => {
    const videoRef = useRef(null); // Для управления видео
    const [progress, setProgress] = useState(0); // Прогресс воспроизведения
    const setMaxVolume = () => {
        const video = videoRef.current;
        if (video) {
            video.volume = 1; // Максимальная громкость
        }
    };

    const [showPlayStatus, setshowPlayStatus] = useState(false);
    const [paused, setpaused] = useState(false);
    // Обработчик клика на видео для Play/Pause
    const togglePlayPause = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setpaused(false)
        } else {
            video.pause();
            setpaused(true)
        }

        setshowPlayStatus(true)
        setTimeout(() => {
            setshowPlayStatus(false)
        }, 100);
    };

    const [liked, setliked] = useState(false);
    const [saved, setsaved] = useState(false);

    const [likes, setlikes] = useState(0);
    const [comments, setcomments] = useState(0);
    const [reposts, setreposts] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            const video = videoRef.current;
            if (video.paused) {
                video.play();
            }
        }, 200);

        setsaved(+localStorage.getItem(`saved${tabStore.vid}`) || 0)
        setliked(+localStorage.getItem(`liked${tabStore.vid}`) || 0)

        setlikes((Math.random() * 100).toFixed(1) + 'K');
        setcomments((Math.random() * 100).toFixed(1) + 'K');
        setreposts((Math.random() * 100).toFixed(1) + 'K');
    }, [tabStore.vid])

    // Обновление прогресса по времени воспроизведения
    const updateProgress = () => {
        const video = videoRef.current;
        if (video) {
            const currentProgress = (video.currentTime / video.duration) * 100;
            setProgress(currentProgress);
        }
    };

    // Обработчик перемотки при клике на прогресс-бар
    const handleSeek = (e) => {
        const video = videoRef.current;
        if (video) {
            const wrapper = e.currentTarget;
            const rect = wrapper.getBoundingClientRect();
            const clickPosition = e.clientX - rect.left;
            const clickRatio = clickPosition / rect.width;
            video.currentTime = clickRatio * video.duration;
        }
    };


    const [startY, setStartY] = useState(0);

    const handleTouchStart = (e) => {
        setStartY(e.touches[0].clientY);
    };

    const handleTouchEnd = (e) => {
        const endY = e.changedTouches[0].clientY;

        if (startY > endY + 50) {
            console.log('Свайп вверх');
            tabStore.prevVid()
        } else if (startY < endY - 50) {
            console.log('Свайп вниз');
            tabStore.nextVid()
        }
    };
    const [showCopyLink, setshowCopyLink] = useState(false);
    const copyLink = () => {
        const link = 'http://localhost:5173/'
        copyToClipboard(link)
        setshowCopyLink(true)
        setTimeout(() => {
            setshowCopyLink(false)
        }, 100);
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => console.log('Текст скопирован!'))
            .catch((err) => console.error('Ошибка копирования:', err));
    }





    return (
        <div className='Video_wrapper'>

            <div className="Video">
                <div className='free_img Video_status'>
                    <div className='Video_status_inner' style={{
                        transition: `opacity ${showPlayStatus ? 50 : 500}ms cubic-bezier(.52,.01,1,.51)`,
                        opacity: showPlayStatus ? 1 : 0
                    }}>
                        <img src={`/img/${paused ? 'pause' : "play"}.svg`} alt="" />
                    </div>
                </div>
                <div className='free_img Video_status'>
                    <div className='Video_status_inner' style={{
                        transition: `opacity ${showCopyLink ? 50 : 500}ms cubic-bezier(.52,.01,1,.51)`,
                        opacity: showCopyLink ? 1 : 0
                    }}>
                        Link
                        <br />
                        Copied
                    </div>
                </div>
                <video
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    key={tabStore.vid}
                    ref={videoRef}
                    onTimeUpdate={updateProgress} // Обновление прогресса при воспроизведении
                    onLoadedMetadata={setMaxVolume}
                    onClick={togglePlayPause} // Клик для Play/Pause
                >
                    <source src={`/videos/${tabStore.vid}.mp4`} type="video/mp4" />
                </video>
                <div className="free_img Video_bot">
                    <div className='Video_bot_inner'>
                        <div className='Video_author'>
                            @monkeyxiaobao999
                        </div>
                        <div className='Video_desc'>
                            {
                                descs[tabStore.vid]
                            }
                        </div>
                        <div className='Video_music'>
                            <div className='Video_music_name'>
                                <img src="/img/music.svg" alt="" />
                                Original sound
                            </div>
                            <div className='Video_music_decor'>
                                <img src="/img/sound.png" alt="" />
                            </div>
                        </div>
                        <div className='free_img Video_actions'>
                            <div className='Video_actions_inner'>
                                <div className='Video_actions_inner_element Video_actions_inner_element_actions'>
                                    <div className='Video_actions_inner_element_actions_prev' onClick={() => {
                                        tabStore.prevVid()
                                    }}>
                                        <img src="/img/back.svg" alt="" />
                                    </div>
                                    <div className='Video_actions_inner_element_actions_next' onClick={() => {
                                        tabStore.nextVid()
                                    }}>
                                        <img src="/img/back.svg" alt="" />
                                    </div>
                                </div>

                                <div className='Video_actions_inner_element Video_actions_inner_element_avatar' onClick={() => {
                                    tabStore.changeTab('Profile')
                                }}>
                                    <img src="/img/avatar.png" alt="" />
                                </div>
                                <div className='Video_actions_inner_element' onClick={() => {
                                    localStorage.setItem(`liked${tabStore.vid}`, !liked ? 1 : 0)
                                    setliked(!liked)
                                }}>
                                    <img src={`/img/${liked ? 'liked' : "like"}.svg`} alt="" />
                                    <div className='Video_actions_inner_element_count'>
                                        {likes}
                                    </div>
                                </div>
                                <div className='Video_actions_inner_element' onClick={() => {
                                    localStorage.setItem(`saved${tabStore.vid}`, !saved ? 1 : 0)
                                    setsaved(!saved)
                                }}>
                                    <img src={`/img/${saved ? 'bookmarked' : "bookmark"}.svg`} alt="" />
                                    <div className='Video_actions_inner_element_count'>
                                        {comments}
                                    </div>
                                </div>
                                <div className='Video_actions_inner_element' onClick={() => {
                                    copyLink()
                                }}>
                                    <img src="/img/share.svg" alt="" />
                                    <div className='Video_actions_inner_element_count'>
                                        {reposts}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="free_img Video_controls">
                    <div
                        className="Video_controls_inner_wrapper"
                        onClick={handleSeek} // Клик для перемотки
                    >
                        <div className="Video_controls_inner">
                            <div
                                className="Video_controls_inner_progress"
                                style={{
                                    width: `${progress}%`, // Синхронизация прогресса
                                }}
                            >
                                <div className="Video_controls_inner_round"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
})
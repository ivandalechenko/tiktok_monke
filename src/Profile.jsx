import { observer } from 'mobx-react-lite';
import './scss/Profile.scss';
import tabStore from './tabStore';
export default observer(() => {
    return (
        <div className='Profile'>
            <div className='Profile_mob'>
                <div className='Profile_header'>
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
                <div className='Profile_logo'>
                    <img src="/img/avatar.png" alt="" />
                </div>
                <div className='Profile_name'>
                    @monkeyxiaobao999
                </div>
                <div className='Profile_stat'>
                    <div className="Profile_stat_el">
                        <div className='Profile_stat_el_val'>12</div>
                        <div className='Profile_stat_el_desc'>Following</div>
                    </div>
                    <div className="Profile_stat_el_del">
                    </div>
                    <div className="Profile_stat_el">
                        <div className='Profile_stat_el_val'>1.9M</div>
                        <div className='Profile_stat_el_desc'>Followers</div>
                    </div>
                    <div className="Profile_stat_el_del">

                    </div>
                    <div className="Profile_stat_el">
                        <div className='Profile_stat_el_val'>51.1M</div>
                        <div className='Profile_stat_el_desc'>Likes</div>
                    </div>
                </div>
                <div className='Profile_media'>
                    <div className='Profile_media_el'>
                        <img src="/img/dex.svg" alt="" />
                    </div>
                    <div className='Profile_media_el'>
                        <img src="/img/x.svg" alt="" />
                    </div>
                    <div className='Profile_media_el'>
                        <img src="/img/tg.svg" alt="" />
                    </div>
                </div>
                <div className='Profile_description'>
                    Just a monkey from TikTok, I love eat
                    {/* Zookeeper, daily updated of playing with monkeys, we are best friends */}
                </div>
            </div>

            <div className='Profile_pc'>
                <div className='Profile_logo'>
                    <img src="/img/avatar.png" alt="" />
                </div>
                <div className='Profile_pc_right'>
                    <div className='Profile_pc'>
                        <div className='Profile_name'>
                            @monkeyxiaobao999
                        </div>
                        <div className='Profile_stat'>
                            <div className="Profile_stat_el">
                                <div className='Profile_stat_el_val'>12</div>
                                <div className='Profile_stat_el_desc'>Following</div>
                            </div>
                            <div className="Profile_stat_el_del">
                            </div>
                            <div className="Profile_stat_el">
                                <div className='Profile_stat_el_val'>1.9M</div>
                                <div className='Profile_stat_el_desc'>Followers</div>
                            </div>
                            <div className="Profile_stat_el_del">

                            </div>
                            <div className="Profile_stat_el">
                                <div className='Profile_stat_el_val'>51.1M</div>
                                <div className='Profile_stat_el_desc'>Likes</div>
                            </div>
                        </div>
                    </div>
                    <div className='Profile_media'>
                        <div className='Profile_media_el'>
                            <img src="/img/dex.svg" alt="" />
                        </div>
                        <div className='Profile_media_el'>
                            <img src="/img/x.svg" alt="" />
                        </div>
                        <div className='Profile_media_el'>
                            <img src="/img/tg.svg" alt="" />
                        </div>
                    </div>
                    <div className='Profile_description'>
                        Zookeeper, daily updated of playing with monkeys, we are best friends
                    </div>
                </div>
            </div>

            <div className='Profile_list'>
                {
                    Array.from({ length: 21 }, (_, index) => {
                        return <div className='Profile_list_element' key={`vid-${index + 1}`} onClick={() => {
                            tabStore.openVid(index + 1)
                        }} >
                            <img src={`img/previews/${index + 1}.webp`} alt="" />
                            <div className='free_img Profile_list_element_bm'>
                                {/* <img src="/img/bookmark.svg" alt="" /> */}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
})
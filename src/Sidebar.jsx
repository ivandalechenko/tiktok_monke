import { observer } from 'mobx-react-lite';
import './scss/Sidebar.scss';
import tabStore from './tabStore';
export default observer(() => {
    return (
        <div className='Sidebar'>
            <div className='Sidebar_logo'>
                <img src="/img/logo.svg" alt="" />
            </div>
            {
                tabStore.tab !== 'Inbox' ? <>
                    <div className={`Sidebar_el ${tabStore.tab === 'Home' && 'Sidebar_el_selected'}`} onClick={() => {
                        tabStore.changeTab('Home')
                    }}>
                        <div className='Sidebar_el_img'>
                            <img src="/img/home.svg" alt="" />
                        </div>
                        <div className='Sidebar_el_text'>
                            For you
                        </div>
                    </div>
                    <div className={`Sidebar_el ${tabStore.tab === 'Profile' && 'Sidebar_el_selected'}`} onClick={() => {
                        tabStore.changeTab('Profile')
                    }}>
                        <div className='Sidebar_el_img'>
                            <img src="/img/profile.svg" alt="" />
                        </div>
                        <div className='Sidebar_el_text'>
                            Profile
                        </div>
                    </div>
                    <div className={`Sidebar_el ${tabStore.tab === 'Inbox' && 'Sidebar_el_selected'}`} onClick={() => {
                        tabStore.changeTab('Inbox')
                    }}>
                        <div className='Sidebar_el_img'>
                            <div className="free_img Sidebar_el_count">
                                <div className='Sidebar_el_count_inner'>
                                    10
                                </div>
                            </div>
                            <img src="/img/inbox.svg" alt="" />
                        </div>
                        <div className='Sidebar_el_text'>
                            Messages
                        </div>
                    </div>
                </> : <>
                </>
            }

        </div>
    )
})
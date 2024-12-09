import { observer } from 'mobx-react-lite';
import './scss/Footer.scss';
import tabStore from './tabStore';
export default observer(() => {
    return (
        <div className='Footer'>
            <div className={`Footer_element ${tabStore.tab === 'Inbox' && 'Footer_element_selected'}`} onClick={() => {
                tabStore.changeTab('Inbox')
            }}>
                <div className="Footer_element_count free_img">
                    <div className='Footer_element_count_inner'>
                        10
                    </div>
                </div>
                <img src="/img/inbox.svg" className='Footer_element_img' alt="" />
                <div className="Footer_element_name">
                    Inbox
                </div>
            </div>
            <div className={`Footer_element ${tabStore.tab === 'Home' && 'Footer_element_selected'}`} onClick={() => {
                tabStore.changeTab('Home')
            }}>
                <img src="/img/home.svg" className='Footer_element_img' alt="" />
                <div className="Footer_element_name">
                    Home
                </div>
            </div>
            <div className={`Footer_element ${tabStore.tab === 'Profile' && 'Footer_element_selected'}`} onClick={() => {
                tabStore.changeTab('Profile')
            }}>
                <img src="/img/profile.svg" className='Footer_element_img' alt="" />
                <div className="Footer_element_name">
                    Profile
                </div>
            </div>
        </div>
    )
})
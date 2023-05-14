import mockup from "../images/screen-mockups.svg"
import users from "../images/illustration-your-users.svg"
import grow from "../images/illustration-grow-together.svg"
import flowing from "../images/illustration-flowing-conversation.svg"
import message from "../images/icon-messages.svg"
import communities from "../images/icon-communities.svg"
import topdesktop from "../images/bg-section-top-desktop-1.svg"
import bottomdesktop from "../images/bg-section-bottom-desktop-1.svg"
import topdesktop2 from "../images/bg-section-top-desktop-2.svg"
import bottomdesktop2 from "../images/bg-section-bottom-desktop-2.svg"
import topmobile from "../images/bg-section-top-mobile-1.svg"
import topmobile2 from "../images/bg-section-top-mobile-2.svg"
import bottommobile from "../images/bg-section-bottom-mobile-1.svg"
import bottommobile2 from "../images/bg-section-bottom-mobile-2.svg"



function Body() {

    return (
        <div className="body">
            <img className="mockup" src={mockup} alt="mockup" />
            <div className="iconDiv">
                <div className="communitiesDiv">
                    <img src={communities} alt="communities" />
                    <h1>1.4k+</h1>
                    <p>Communities Formed</p>
                </div>
                <div className="messageDiv">
                    <img src={message} alt="message" />
                    <h1>2.7m+</h1>
                    <p>Messages Sent</p>
                </div>
                
            </div>
            <picture>
                <source srcset={topdesktop}
                    media="(min-width: 376px)" />
                <source srcset={topmobile} />
                <img src={topmobile} alt="" />
            </picture>
            <div className="growDiv">
                <div>
                    <h1>Grow Together</h1>
                    <p>Generate meaningful discussions with your
                        audience and build a strong, loyal community.
                        Think of the insightful conversations you miss
                        out on with a feedback form. </p>
                </div>
                <img src={grow} alt="grow" />
            </div>
            <picture>
                <source srcset={bottomdesktop}
                    media="(min-width: 376px)" />
                <source srcset={bottommobile} />
                <img src={bottommobile} alt="" />
            </picture>
            <div className="flowingDiv">
                <img src={flowing} alt="flowing" />
                <div className="flowingText">
                    <h1>Flowing Conversations</h1>
                    <p>You wouldn't paginate a conversation in real
                        life, so why do it online? Our threads have
                        just-in-time loading for a more natural flow.
                    </p>
                </div>
            </div>
            <picture>
                <source srcset={topdesktop2}
                    media="(min-width: 376px)" />
                <source srcset={topmobile2} />
                <img src={topmobile2} alt="" />
            </picture>
            <div className="usersDiv">
                <div>
                    <h1>Your Users</h1>
                    <p>It takes no time at all to integrate Huddle
                        with your app's authentication solution. This 
                        means, once signed in to your app, your users 
                        can start chatting immediately. 
                    </p>
                </div>
                <img src={users} alt="users" />

            </div>
            <picture>
                <source srcset={bottomdesktop2}
                    media="(min-width: 376px)" />
                <source srcset={bottommobile2} />
                <img src={bottommobile2} alt="" />
            </picture>
        </div>

    );
}

export default Body;
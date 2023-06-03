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
        <>
            <img className="mockup" src={mockup} alt="Screen mockup" />
            <section className="stats">
                <div className="stats__communities">
                    <img src={communities} alt="Communities icon" />
                    <h1>1.4k+</h1>
                    <p>Communities Formed</p>
                </div>
                <div className="stats__message">
                    <img src={message} alt="Message icon" />
                    <h1>2.7m+</h1>
                    <p>Messages Sent</p>
                </div>

            </section>
            <picture>
                <source srcSet={topdesktop}
                    media="(min-width: 376px)" />
                <source srcSet={topmobile} />
                <img src={topmobile} alt="First section top background " />
            </picture>
            <section className="grow">
                <div>
                    <h1>Grow Together</h1>
                    <p>Generate meaningful discussions with your
                        audience and build a strong, loyal community.
                        Think of the insightful conversations you miss
                        out on with a feedback form. </p>
                </div>
                <img src={grow} alt="Grow together illustration" />
            </section>
            <picture>
                <source srcSet={bottomdesktop}
                    media="(min-width: 376px)" />
                <source srcSet={bottommobile} />
                <img src={bottommobile} alt="First section bottom background" />
            </picture>
            <section className="flowing">
                <img src={flowing} alt="Flowing conversation illustration" />
                <div>
                    <h1>Flowing Conversations</h1>
                    <p>You wouldn't paginate a conversation in real
                        life, so why do it online? Our threads have
                        just-in-time loading for a more natural flow.
                    </p>
                </div>
            </section>
            <picture>
                <source srcSet={topdesktop2}
                    media="(min-width: 376px)" />
                <source srcSet={topmobile2} />
                <img src={topmobile2} alt="Second section top background" />
            </picture>
            <section className="users">
                <div>
                    <h1>Your Users</h1>
                    <p>It takes no time at all to integrate Huddle
                        with your app's authentication solution. This
                        means, once signed in to your app, your users
                        can start chatting immediately.
                    </p>
                </div>
                <img src={users} alt="Your users illustration" />

            </section>
            <picture>
                <source srcSet={bottomdesktop2}
                    media="(min-width: 376px)" />
                <source srcSet={bottommobile2} />
                <img src={bottommobile2} alt="Second section bottom background" />
            </picture>
        </>

    );
}

export default Body;
import React, { Component } from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import { debounce } from 'lodash';

import NavigationBar from '../components/NavigationBar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

import Wrapper from '../components/Wrapper';
import SpotlightWrapper from '../components/SpotlightWrapper';
import Spotlight from '../components/Spotlight';
import Content from '../components/Content';
import FeaturedItems from '../components/FeaturedItems';
import SpecialLink from '../components/SpecialLink';

import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';

class IndexPage extends Component {
  state = {
    isScrolled: false,
    isMounted: false,
  };

  constructor(props) {
    super(props);
  }

  bannerRef = React.createRef();

  scrollListener = debounce(() => {
    const { clientHeight } = this.bannerRef.current;
    if (window.scrollY >= clientHeight) this.setState({ isScrolled: true });
    else this.setState({ isScrolled: false });
  }, 66);

  toggleOpacity = () => {
    console.log("yoooooo");
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollListener);

    // trigger banner animation
    setTimeout(() => {
      this.setState({ isMounted: true });
    }, 500);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  render() {
    const { data, openMenu } = this.props;
    return (
      <div className={this.state.isMounted ? '' : 'is-preload'}>
        <Banner siteTitle={data.site.siteMetadata.title} ref={this.bannerRef} />
        <SpotlightWrapper>
          <Spotlight>
            <div href="#" className="image cir-img">
              <Img sizes={data.pic01.childImageSharp.sizes} />
            </div>
            <Content>
              <h2 className="major">About MM</h2>
              <p>
                Hailing from Atlanta, I moved to Denver in early 2017
                to attend school and start a new career path. I have worked
                in various roles within the music industry, IT, and retail prior
                to becoming a Web Dev, including: DJ, music producer,
                record store manager, podcaster, professional gamer,
                and IT contractor.
              </p>
            </Content>
          </Spotlight>
          <Spotlight>
            <div className="image cir-img">
              <Img style={{opacity: 0.5}} sizes={data.pic02.childImageSharp.sizes} />
            </div>
            <Content>
              <h2 className="major">Education</h2>
              <p>
                I spent several years at Georgia State studying
                a variety of subject. Initially my focus was in
                mathematics and physics. Eventually I pivoted to
                Biology in the hopes of working in neuroscience.
                Eventually I went with the most practical track,
                Computer Science. After two years of CSCI curriculum
                I decided a more focused, fast paced approach was
                what I needed. I found what I needed in the WDI program
                at Galvanize (Platte) with the greatest cohort of
                all time [g70]!
              </p>
            </Content>
          </Spotlight>

          <Spotlight>
            <div className="image cir-img">
              <Img style={{opacity: 0.5}} sizes={data.pic03.childImageSharp.sizes} />
            </div>
            <Content>
              <h2 className="major">Interests</h2>
              <p>
                Some of my passions include collecting vinyl records,
                going to concerts, snowboarding, and gaming. I like to spend
                some of my free time live streaming on Twitch.tv,
                whether its playing a game or building web apps and
                engaging with my viewers. I should also mention my
                favorite friend in the world - my dog Franklin.
              </p>
            </Content>
          </Spotlight>
        </SpotlightWrapper>
        <Wrapper className="alt style1">
          <h2 className="major">Projects</h2>
          <p>
            Explore my collection of projects I have built from my time
            in the Galvanize WDI program and everything I have built
            since graduation.
          </p>
          <FeaturedItems>
            <article>
              <div className="image cir-img">
                <Img sizes={data.pic04.childImageSharp.sizes}/>
              </div>
              <h3 className="major">LinkYe</h3>
              <p>
                A tool I built for saving useful resources and links in
                a more meaningful way than the standard folder and URL
                system that Chrome and Firefox allow. Fully searchable
                and filterable by common tags to group by topic(s).
                Finding your saved resources just got (semi) easier.
              </p>
              <SpecialLink href="https://linky-me.firebaseapp.com">Show me the site!</SpecialLink>
              <SpecialLink href="https://github.com/Vision-X/linky-frontend">Show me the code!</SpecialLink>
            </article>
            <article>
              <div className="image cir-img">
                <Img sizes={data.pic05.childImageSharp.sizes}/>
              </div>
              <h3 className="major">DrumLab VR</h3>
              <p>
                Experience interactive drum machine basics through WebVR.
                Use your Oculus headset and controllers to be immersed
                inside a world of sound and visual feedback.
                Don't just listen to music: make your own and feel it come
                alive in DrumLabVR.
              </p>
              <SpecialLink href="https://drumlabvr.firebaseapp.com">Show me the site!</SpecialLink>
              <SpecialLink href="https://github.com/Vision-X/drumlabvr">Show me the code!</SpecialLink>
            </article>
            <article>
              <div className="image cir-img">
                <Img sizes={data.pic06.childImageSharp.sizes}/>
              </div>
              <h3 className="major">Hype Release</h3>
              <p>
                An app using a Cheerio.js webscraper to build a custom API
                for Adidas Yeezy and Nike Air Jordan shoe release data with
                a corresponding front end in React 16 styled with
                bootstrap/bootswatch. Keep up with the most hyped releases!
              </p>
              <SpecialLink href="https://hype-release.firebaseapp.com">Show me the site!</SpecialLink>
              <SpecialLink href="https://github.com/Vision-X/HypeRelease">Show me the code!</SpecialLink>
            </article>
            <article>
              <div className="image cir-img">
                <Img sizes={data.pic07.childImageSharp.sizes}/>
              </div>
              <h3 className="major">G-Events Locator</h3>
              <p>
                A Galvanize Events Application that allows the user to see
                a list of upcoming events with detailed information and
                directions to the event. The application has a floor map of all
                 rooms with directions.
              </p>
              <SpecialLink href="https://g-events-locator.firebaseapp.com/">Show me the site!</SpecialLink>
              <SpecialLink href="https://github.com/Vision-X/G-Events-Frontend">Show me the code!</SpecialLink>
            </article>
          </FeaturedItems>
        </Wrapper>
      </div>
    );
  }
}

export default IndexPage;

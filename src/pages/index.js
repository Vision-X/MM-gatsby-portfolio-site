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
        <NavigationBar
          siteTitle={data.site.siteMetadata.title}
          openMenu={openMenu}
          className={this.state.isScrolled ? '' : 'alt'}
        />
        <Banner siteTitle={data.site.siteMetadata.title} ref={this.bannerRef} />
        <SpotlightWrapper>
          <Spotlight>
            <a href="#" className="image">
              <Img sizes={data.pic01.childImageSharp.sizes} />
            </a>
            <Content>
              <h2 className="major">Magna arcu feugiat</h2>
              <p>
                Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                turpis ante, nullam sit amet turpis non, sollicitudin posuere
                urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                cursus.
              </p>
              <SpecialLink to="#">Learn more</SpecialLink>
            </Content>
          </Spotlight>
          <Spotlight>
            <a href="#" className="image">
              <Img sizes={data.pic02.childImageSharp.sizes} />
            </a>
            <Content>
              <h2 className="major">Tempus adipiscing</h2>
              <p>
                Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                turpis ante, nullam sit amet turpis non, sollicitudin posuere
                urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                cursus.
              </p>
              <SpecialLink to="#">Learn more</SpecialLink>
            </Content>
          </Spotlight>

          <Spotlight>
            <a href="#" className="image">
              <Img sizes={data.pic03.childImageSharp.sizes} />
            </a>
            <Content>
              <h2 className="major">Nullam dignissim</h2>
              <p>
                Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                turpis ante, nullam sit amet turpis non, sollicitudin posuere
                urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                cursus.
              </p>
              <SpecialLink to="#">Learn more</SpecialLink>
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
              <a href="#" className="image">
                <Img sizes={data.pic04.childImageSharp.sizes}/>
              </a>
              <h3 className="major">LinkYe</h3>
              <p>
                A tool I built for saving useful resources and links in
                a more meaningful way than the standard folder and URL
                system that Chrome and Firefox allow. Fully searchable
                and filterable by common tags to group by topic(s).
                Finding your saved resources just got (semi) easier.
              </p>
              <SpecialLink>Show me the site!</SpecialLink>
              <SpecialLink>Show me the code!</SpecialLink>
            </article>
            <article>
              <a href="#" className="image">
                <Img sizes={data.pic05.childImageSharp.sizes}/>
              </a>
              <h3 className="major">DrumLab VR</h3>
              <p>
                Experience interactive drum machine basics through WebVR.
                Use your Oculus headset and controllers to be immersed
                inside a world of sound and visual feedback.
                Don't just listen to music: make your own and feel it come
                alive in DrumLabVR.
              </p>
              <SpecialLink>Show me the site!</SpecialLink>
              <SpecialLink>Show me the code!</SpecialLink>
            </article>
            <article>
              <a href="#" className="image">
                <Img sizes={data.pic06.childImageSharp.sizes}/>
              </a>
              <h3 className="major">Hype Release</h3>
              <p>
                An app using a Cheerio.js webscraper to build a custom API
                for Adidas Yeezy and Nike Air Jordan shoe release data with
                a corresponding front end in React 16 styled with
                bootstrap/bootswatch. Keep up with the most hyped releases!
              </p>
              <SpecialLink>Show me the site!</SpecialLink>
              <SpecialLink>Show me the code!</SpecialLink>
            </article>
            <article>
              <a href="#" className="image">
                <Img sizes={data.pic07.childImageSharp.sizes}/>
              </a>
              <h3 className="major">G-Events Locator</h3>
              <p>
                A Galvanize Events Application that allows the user to see
                a list of upcoming events with detailed information and
                directions to the event. The application has a floor map of all
                 rooms with directions.
              </p>
              <SpecialLink>Show me the site!</SpecialLink>
              <SpecialLink>Show me the code!</SpecialLink>
            </article>
          </FeaturedItems>
          <ul className="actions">
            <li>
              <a href="#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </Wrapper>
      </div>
    );
  }
}

export default IndexPage;

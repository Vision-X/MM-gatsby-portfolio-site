import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import '../assets/sass/main.scss';

import NavigationBar from '../components/NavigationBar';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

class Layout extends Component {
  state = {
    isMenuOpen: false,
  };

  constructor(props) {
    super(props);
  }

  openMenu = e => {
    e.preventDefault();
    this.setState({ isMenuOpen: true });
  };

  closeMenu = e => {
    e.preventDefault();
    this.setState({ isMenuOpen: false });
  };

  render() {
    const { children, data, location } = this.props;
    return (
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Portfolio Site!' },
            { name: 'keywords', content: 'Portfolio, webdev' },
          ]}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: '/icons/icon-48x48.png',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {location.pathname !== '/' && (
          <NavigationBar
            siteTitle={data.site.siteMetadata.title}
            openMenu={this.openMenu}
          />
        )}
        <div className={this.state.isMenuOpen ? 'is-menu-visible' : ''}>
          <div
            id="page-wrapper"
            onClick={this.state.isMenuOpen ? this.closeMenu : undefined}
          >
            {children({ ...this.props, openMenu: this.openMenu })}
            <Footer />
          </div>
          <Menu closeMenu={this.closeMenu}>
            <Link to="/">Home</Link>
            <Link to="/generic">Generic</Link>
            <Link to="/elements">Elements</Link>
            <Link to="/">Log In</Link>
            <Link to="/">Sign Up</Link>
          </Menu>
        </div>
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }

    pic01: file(name: { eq: "headshot" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }

    pic02: file(name: { eq: "burnyourdiploma" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }

    pic03: file(name: { eq: "technics1200" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }

    pic04: file(name: { eq: "LinkYe" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }

    pic05: file(name: { eq: "DrumLab" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }

    pic06: file(name: { eq: "HyRel5" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }

    pic07: file(name: { eq: "g-events2" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }

    pic08: file(name: { eq: "pic08" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }

    bg: file(name: { eq: "keyboard" }) {
      childImageSharp {
        sizes(quality: 80) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`;

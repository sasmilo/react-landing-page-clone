/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import amavii from './images/amavii.png';
import blackLimba from './images/black-limba-logo-f5.png';
import bonParfumeur from './images/bon-parfumeur.png';
import bonsoirs from './images/bonsoirs.png';
import dashboard from './images/dealwithgrowth-dashboard-header.jpg';
import logo2 from './images/dealwithgrowth.com.dark.png';
import logo from './images/dealwithgrowth.com.light.png';
import feel from './images/feel-logo-compressor.png';
import fifthOrigins from './images/fifth-orignis-1024x82.png';
import jeremy from './images/jeremy.jpg';
import dashboard2 from './images/klaviyo-dashboard-compressor.png';
import klaviyo from './images/klaviyo_white_logo.png';
import oceanBottle from './images/ocean-bottle.png';
import rondorff from './images/ron-dorff_logo.png';
import shopify from './images/shopify-partner-crop.png';
import skinspace from './images/skinspace-logo-f5.png';
import spain from './images/spain-flag.svg';
import spoke from './images/spoke-logo.png';
import usa from './images/usa-flag.svg';

const purple = '#525fc4';
const ourGray = '#1d2d35';
const lightGray = '#f5f5f5';
const footerGray = '#171727';
const white = '#fff';
const paddBott = '80px';
const parGray = '#283c46';

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  color: ${ourGray};
  padding-top: 39px;
  padding-left: 15px;
  padding-right: 20px;
  padding-bottom: ${paddBott};

  div {
    display: flex;
    flex-direction: row;
  }

  p {
    margin-right: auto;
    padding: 0px 30px;
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 1rem;
  }

  img {
    height: 36px;
    width: auto;
    padding-bottom: 25px;
    padding-left: 15px;

    :hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }

  a {
    color: ${ourGray};
    text-decoration: none;
    display: block;
    padding: 12px 19px 0;
    margin-top: 10 px;
    outline-offset: -1px;
    transition: all 0.2s ease-in-out;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 1;
    text-transform: uppercase;
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 10px;
    font-family: 'PT Sans', 'Helvetica', 'Arial', sans-serif;

    :nth-child(5) {
      border: 2px solid ${purple};
      border-radius: 10px;
      margin-bottom: 30px;
      margin-top: 0px;
    }

    :hover {
      color: ${purple};
    }
  }
`;

const headerFlagStyle = css`
  display: inline !important;
  border: none !important;
  box-shadow: none !important;
  height: 13px !important;
  width: 13px !important;
  margin: 0 0.07em !important;
  vertical-align: -0.1em !important;
  background: none !important;
  padding: 0 !important;
  padding-top: 10px;
  cursor: pointer;
`;

const headerDiv2 = css`
  padding-top: 8px;
  padding-right: 28px;
`;

const backgrdStyles1 = css`
  ::before {
    position: absolute;
    width: 100%;
    height: 200%;
    clip-path: polygon(0% 100%, 0% 25%, 100% 17%, 100% 100%);
    background: ${lightGray};
    content: '';
    z-index: -1;
  }
`;

const sectionStyles1 = css`
  display: grid;
  align-items: left;
  grid-template-columns: 1fr 1fr;
  padding: 0 75px;
  padding-bottom: calc(30px + ${paddBott});

  h1 {
    color: ${ourGray};
    font-family: 'Merriweather', 'Helvetica', 'Arial', serif;
    font-size: 3.4rem;
    line-height: 1.2;
    margin-block-start: 0em;
    margin-block-end: 0em;
    letter-spacing: -0.75px;
    display: flex;
    padding-bottom: 28px;
  }

  div {
    width: 95%;
    height: auto;
  }

  img {
    height: auto;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 19px 70px 0 rgb(0 0 0 / 12%);
  }

  p {
    font-family: 'PT Sans', 'Helvetica', 'Arial', sans-serif;
    font-size: 1.3rem;
    line-height: 1.35;
    font-weight: 300;
    display: flex;
    margin-block-start: 0;
    margin-block-end: 0;
    color: ${parGray};
  }

  button {
    margin-right: 30px;
    border-radius: 10px;
    border: none;
    background-color: ${purple};
    font-size: 0.95rem;
    color: #fff;
    font-weight: 700;
    letter-spacing: 1.4px;
    line-height: 1;
    padding: 22px 30px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
  }

  a {
    color: ${ourGray};
    border-bottom: 2px solid ${purple};
    text-align: bottom;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 2px;
    padding-bottom: 20;
    cursor: pointer;
    font-family: 'PT Sans', 'Helvetica', 'Arial', sans-serif;
  }
`;

const leftDiv1 = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 12fr 7fr 4fr;
  padding-right: 30px;
  z-index: 2;
`;

const rightDiv1 = css`
  display: inline-block;
  position: relative;

  ::before {
    position: absolute;
    top: 0;
    left: 35px;
    width: calc(100% - 10px);
    height: calc(100% - 50px);
    border: 4px solid ${purple};
    border-radius: 10px;
    content: '';
  }

  img {
    position: relative;
    top: 20px;
    left: 15px;
  }
`;

const btnLinkStyles = css`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 10px;

  a {
    padding-top: 22px;
    padding-bottom: 2px;
  }
`;

const sectionStyles2 = css`
  padding-right: auto;
  padding-left: auto;
  background-color: ${lightGray};
  padding-bottom: calc(${paddBott} - 40px);

  h2 {
    font-family: 'Merriweather', 'Helvetica', 'Arial', serif;
    color: ${ourGray};
    text-align: center;
    font-size: 1.9rem;
    letter-spacing: -0.75px;
    font-weight: 700;
    line-height: 1.3;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-bottom: 30px;
  }

  p {
    max-width: 760px;
    color: ${parGray};
    margin-right: auto;
    margin-left: auto;
    font-size: 1.3rem;
    line-height: 1.5;
    font-weight: 300;
    font-family: 'PT Sans', 'Helvetica', 'Arial', sans-serif;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-bottom: 30px;
  }
`;

const sectionStyles3 = css`
  background-color: ${lightGray};
  width: 100%;
  padding-bottom: calc(${paddBott} - 30px);

  img {
    width: 240px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 19px 70px 0 rgb(0 0 0 / 12%);
  }

  h2 {
    font-family: 'Merriweather', 'Helvetica', 'Arial', serif;
    color: ${ourGray};
    text-align: center;
    font-size: 1.9rem;
    letter-spacing: -0.75px;
    font-weight: 700;
    line-height: 1.3;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-bottom: 25px;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-bottom: 20px;
  }

  li {
    padding-bottom: 10px;
  }
  p,
  li {
    max-width: 760px;
    color: ${parGray};
    margin-right: auto;
    margin-left: auto;
    font-size: 1.3rem;
    line-height: 1.5;
    font-weight: 300;
    font-family: 'PT Sans', 'Helvetica', 'Arial', sans-serif;
  }
`;

const gridSection3 = css`
  display: grid;
  grid-template-columns: 12fr 5fr;
  width: 100%;
  height: auto;
`;

const divSection3 = css`
  max-width: 760px;
  margin-right: auto;
  margin-left: auto;

  img {
    width: 200px;
    height: auto;
    border-radius: 10px;
    margin-left: auto;
  }
`;

const sectionStyles4 = css`
  background-color: ${lightGray};
  padding-bottom: calc(${paddBott} + 35px);
  padding-left: 50px;
  padding-right: 50px;
  h2 {
    max-width: 760px;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Merriweather', 'Helvetica', 'Arial', serif;
    color: ${ourGray};
    text-align: center;
    font-size: 1.9rem;
    letter-spacing: -0.75px;
    font-weight: 700;
    line-height: 1.3;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-bottom: 60px;
  }
`;

const gridSection4 = css`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  width: 100%;
  height: auto;
`;

const elementOfGrid4 = css`
  background: #fff;
  border-radius: 10px;
  padding: 30px;

  h3 {
    font-family: 'Merriweather', 'Helvetica', 'Arial', serif;
    color: ${ourGray};
    text-align: center;
    font-size: 1.4rem;
  }

  p {
    color: ${ourGray};
    margin-right: auto;
    margin-left: auto;
    font-size: 1.3rem;
    line-height: 1.5;
    font-weight: 300;
    font-family: 'PT Sans', 'Helvetica', 'Arial', sans-serif;
    max-width: 760px;
    margin: 30px 30px 28px;
    padding-bottom: 30px;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  button {
  }
`;
const leftGridButt4 = css`
  border-radius: 10px;
  border: none;
  background-color: ${purple};
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1;
  padding: 20px 30px 20px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: auto;
  cursor: pointer;
  margin: auto;
  display: block;
  box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
`;

const rightGridButt4 = css`
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1;
  padding: 20px 30px 20px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: auto;
  cursor: pointer;
  margin: auto;
  display: block;
  background-color: #fff;
  color: #000;
  border: 2px solid ${purple};
  border-radius: 10px;
  font-family: 'PT Sans', 'Helvetica', 'Arial', sans-serif;
`;

const sectionStyles5 = css`
  background-color: ${lightGray};
  padding-bottom: ${paddBott};
  h2 {
    margin-right: auto;
    margin-left: auto;
    font-family: 'Merriweather', 'Helvetica', 'Arial', serif;
    color: ${ourGray};
    text-align: center;
    font-size: 1.9rem;
    letter-spacing: -0.75px;
    font-weight: 700;
    line-height: 1.3;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-bottom: 20px;
  }

  p {
    display: flex;
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

const ctaLink5 = css`
  color: ${ourGray};
  padding-top: 40px;
  border-bottom: 2px solid ${purple};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 0;
  cursor: pointer;
  font-family: 'PT Sans', sans-serif;
  line-height: 1;
  margin: auto;

  :hover {
    color: ${purple};
  }
`;

const logosStyles5 = css`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  line-height: 1.3;
  justify-content: space-between;
  list-style: none;
  margin-left: 0px;
  padding-left: 60px;
  padding-right: 60px;

  img {
    height: 20px;
    width: auto;
  }
`;

const backgrdStyles6 = css`
  ::before {
    position: absolute;
    width: 100%;
    height: 180%;
    clip-path: polygon(0% 0%, 0% 87%, 100% 77%, 100% 0%);
    background: ${lightGray};
    content: '';
    z-index: -1;
  }
`;

const sectionStyles6 = css`
  padding-right: auto;
  padding-left: auto;
  padding-bottom: calc(${paddBott} - 40px);
  z-index: 2;
  h2 {
    font-family: 'Merriweather', 'Helvetica', 'Arial', serif;
    color: ${ourGray};
    text-align: center;
    font-size: 1.9rem;
    letter-spacing: -0.75px;
    font-weight: 700;
    line-height: 1.3;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-bottom: 30px;
    z-index: 2;
  }

  p {
    max-width: 760px;
    color: ${parGray};
    margin-right: auto;
    margin-left: auto;
    line-height: 1.5;
    font-size: 1.3rem;
    font-weight: 300;
    font-family: 'PT Sans', 'Helvetica', 'Arial', sans-serif;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-bottom: 30px;
    z-index: 2;
  }

  img {
    width: 100%;
    height: auto;
    z-index: 2;
    box-shadow: 0 19px 70px 0 rgb(0 0 0 / 12%);
  }
`;

const smallLine6 = css`
  width: 50px;
  border-bottom: 2px solid ${purple};
`;

const sectionStyles7 = css`
  padding-bottom: calc(${paddBott} - 70px);
  h2 {
    font-family: 'Merriweather', 'Helvetica', 'Arial', serif;
    color: ${ourGray};
    text-align: center;
    font-size: 1.9rem;
    letter-spacing: -0.75px;
    font-weight: 700;
    line-height: 1.3;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-bottom: 30px;
  }

  p {
    width: 90%;
    color: ${ourGray};
    margin-right: auto;
    margin-left: auto;
    font-size: 1.3rem;
    line-height: 1.5;
    font-weight: 300;
    font-family: 'PT Sans', 'Helvetica', 'Arial', sans-serif;
    text-align: center;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-bottom: 30px;
  }

  button {
    border-radius: 10px;
    border: none;
    background-color: ${purple};
    font-size: 1rem;
    color: #fff;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 1;
    padding: 20px 30px 20px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    width: auto;
    cursor: pointer;
    margin: auto;
    display: block;
    box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%);
  }
`;

const sectionStyles8 = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: ${footerGray};
  color: ${white};
  padding-top: 3rem;
  padding-left: 50px;
  padding-bottom: calc(${paddBott} - 80px);

  h3 {
    font-family: 'Merriweather', 'Helvetica', 'Arial', serif;
    text-align: left;
    font-size: 1.1rem;
  }

  ul {
    list-style-type: none;
  }

  p,
  li {
    color: ${white};
    opacity: 0.5;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-family: 'PT Sans', 'Helvetica', 'Arial', sans-serif;
    text-align: left;
    text-decoration: none;
    line-height: 1.2rem;
  }

  a {
    text-decoration: none;
  }

  img {
    height: 23px;
    width: auto;
  }
`;

const setLogos8 = css`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-bottom: ${paddBott};
`;

const intAnchors8 = css`
  color: ${white};
  opacity: 0.5;
`;

const footerStyles = css`
  border-top: 0.7px solid rgba(255, 255, 255, 0.5);
  padding: 0.6rem 0 0.7rem 0;
  background: ${footerGray};
  text-align: center;
  color: ${white};
  font-family: 'PT Sans', 'Helvetica', 'Arial', sans-serif;

  p {
    opacity: 0.5;
    font-size: 0.75rem;
  }

  img {
    display: inline !important;
    border: none !important;
    box-shadow: none !important;
    height: 1em !important;
    width: 1em !important;
    margin: 0 0.07em !important;
    vertical-align: -0.1em !important;
    background: none !important;
    padding: 0 !important;
  }
`;

function App() {
  return (
    <div>
      <div
        css={css`
          background: transparent;
          margin: 0;
          padding: 0;
          z-index: -1;
        `}
      >
        <header css={headerStyles}>
          <div>
            <a href="/" alt="logo">
              <img src={logo} alt="dealwithgrowth" />
            </a>
          </div>

          <div css={headerDiv2}>
            <a href="#1">Work</a>

            <a href="#1">Why Klaviyo?</a>

            <a href="#1">Blog</a>

            <a href="#1">About</a>

            <a href="#1">
              <span>Get in touch</span>
            </a>

            <a href="#1">
              <img src={usa} alt="usa" css={headerFlagStyle} />
            </a>
          </div>
        </header>

        <section id="section1" css={backgrdStyles1}>
          <div css={sectionStyles1}>
            <div css={leftDiv1}>
              <h1>Email campaigns that run your entire Shopify store</h1>
              <p>
                We define & execute sophisticated email strategies that delight
                customers—so you can drive a steady stream of revenue and repeat
                purchases to your store without relying on aggressive
                discounting.
              </p>
              <div css={btnLinkStyles}>
                <button>Find out how</button>

                <a href="#1">See examples of work</a>
              </div>
            </div>
            <div css={rightDiv1}>
              <img src={dashboard} alt="Merchants on its Shopify dashboard" />
            </div>
          </div>
        </section>

        <section id="section2" css={sectionStyles2}>
          <h2>Your email list can net you an extra 10-20% more revenue</h2>
          <p>
            But let’s face it, your current email strategy is stuck in the stone
            sting customers—leaving a chases on the table. You now, the kind of
            profitable purchases you won’t get with Facebook Ads.
          </p>
          <p>
            Meanwhile, brands like Harry’s, Chubbies and Thirdlove are nailing
            their email game while building long-term customer relationships.But
            you can’t figure out how to apply any of what they’re doing to your
            business. Especially when you’ve got so much on your plate trying to
            hit yet another sales target next month.
          </p>
          <p>
            So, how do you make it all happen? How do you ensure you only send
            relevant emails at the right time, to get your customers buying
            again & again?
          </p>
          <p>Well, you don’t have to—because I’m here to do it all for you.</p>
        </section>

        <section id="section3" css={sectionStyles3}>
          <div css={divSection3}>
            <h2>Make email the best asset for your Shopify store</h2>
            <div css={gridSection3}>
              <div>
                <p>
                  Hi, I’m <a href="#1">Jeremy</a>, ecommerce consultant and
                  former marketing specialist at SPOKE, one of the fastest
                  growing consumer businesses in the UK.
                </p>
                <p>
                  I help fashion and beauty brands (just like yours!) on Shopify
                  to define and build captivating email campaigns with Klaviyo,
                  letting you:
                </p>
                <ul>
                  <li>Turn subscribers into paying customers</li>
                  <li>Recover lost sales</li>
                  <li>Retain customers and maximize their LTV</li>
                </ul>
              </div>
              <div>
                <img src={jeremy} alt="jeremy" />
              </div>
            </div>
            <p>
              Ultimately, being there whenever your customers need you—so you
              can build a sustainable business with predictable, repeatable
              sales.
            </p>
          </div>
        </section>
        <section id="section4" css={sectionStyles4}>
          <h2>Solutions to step up your email marketing game</h2>
          <div css={gridSection4}>
            <div css={elementOfGrid4}>
              <h3>Email automation audit & strategy</h3>
              <p>
                If you feel you’ve neglected email for a long time or if you’re
                looking to give your email strategy a facelift, then this is the
                service for you. After running a rigorous audit and data
                analysis, you’ll get a comprehensive report packed with proven
                strategies that will increase engagement and start generating
                sales right away.
              </p>
              <button css={leftGridButt4}>Get in touch</button>
            </div>
            <div css={elementOfGrid4}>
              <h3>Done for you Klaviyo email automation</h3>
              <p>
                Swamped with projects? Looking for a partner with hands-on
                experience to make the most out of Klaviyo? Look no further.
                With my done-for-you services, you’ll get finely tuned email
                campaigns designed to delight your customers and send your LTV
                through the ceiling.
              </p>
              <button css={rightGridButt4}>Are we a match?</button>
            </div>
          </div>
        </section>

        <section id="section5" css={sectionStyles5}>
          <h2>
            These DTC brands on Shopify are now thriving with email marketing
          </h2>
          <ul css={logosStyles5}>
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Black Limba"
              >
                <img src={blackLimba} alt="black-limba" />
              </a>
            </li>
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Spoke"
              >
                <img src={spoke} alt="spoke" />
              </a>
            </li>
            <li>
              <a href="#1" target="_blank" rel="noopener noreferrer" alt="Feel">
                <img src={feel} alt="feel" />
              </a>
            </li>
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Skinspace"
              >
                <img src={skinspace} alt="skinspace" />
              </a>
            </li>
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Ron Dorff"
              >
                <img src={rondorff} alt="rondorff" />
              </a>
            </li>
          </ul>
          <p />
          <ul css={logosStyles5}>
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Amavii"
              >
                <img src={amavii} alt="amavii" />
              </a>
            </li>
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Bonsoirs"
              >
                <img src={bonsoirs} alt="bonsoirs" />
              </a>
            </li>
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Bon Parfumeur"
              >
                <img src={bonParfumeur} alt="bon-parfumeur" />
              </a>
            </li>
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Ocean bottle"
              >
                <img src={oceanBottle} alt="ocean-bottle" />
              </a>
            </li>
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Fifth Origins"
              >
                <img src={fifthOrigins} alt="fifth-origins" />
              </a>
            </li>
          </ul>
          <br />
          <br />
          <p>
            <a href="#1" alt="link" css={ctaLink5}>
              See examples of work
            </a>
          </p>
        </section>

        <section id="section6" css={sectionStyles6}>
          <div css={backgrdStyles6}>
            <h2>
              A proven track record to drive meaningful ROI through emails
            </h2>
            <p>
              Delighting your customers is good business. But as an
              entrepreneur, you care about the hard, cold numbers. The kind of
              numbers you can take to the bank.
            </p>
            <p>
              So here’s a typical example of what you can expect: one of my
              clients in the men’s lifestyle industry generates almost 20% of
              his monthly revenue from the automated email campaigns we’ve
              created:
            </p>
            <p>
              <img src={dashboard2} alt="dashboard" />
            </p>
            <p>
              By first auditing the current email strategy and learning more
              about shoppers using visitors polls, we were able to build an
              automated personalized customer experience for all stages of the
              funnel.
            </p>
            <p>
              Combined with segmented newsletters, his email channel now
              accounts for more than 30% of his monthly sales, while creating
              lasting relationships with customers, respecting their inboxes and
              making sure they’re a valued part of the community.
            </p>
            <p>Want me to do the same for you?</p>
            <p css={smallLine6} />
          </div>
        </section>

        <section id="section7" css={sectionStyles7}>
          <h2>Get the most out of your email marketing</h2>
          <p>
            30 days from now, you could already be making more sales from your
            automated email campaigns. Stop neglecting them—get in touch today
            to find out how you can drive meaningful ROI and send your customer
            LTV through the ceiling.
          </p>
          <button>Let's talk email </button>
          <br />
          <p>
            Not ready to get in touch yet?{' '}
            <a href="#1" alt="link33">
              {' '}
              Get the strategies to recover 15% of your lost Shopify sales →
            </a>
          </p>
        </section>

        <section id="section8" css={sectionStyles8}>
          <div>
            <h3>
              <img src={logo2} alt="dealwithgrowth" />
            </h3>
            <p>
              Helping Shopify merchants <br />
              to thrive
            </p>
          </div>
          <div>
            <h3>Information</h3>
            <p>Contact</p>
            <p>About</p>
            <p>Privacy policy</p>
          </div>
          <div>
            <h3>Partners</h3>
            <div css={setLogos8}>
              <a href="#1" alt="shopify">
                <img src={shopify} alt="shopify" />
              </a>

              <a href="#1" alt="klaviyo">
                <img src={klaviyo} alt="klaviyo" />
              </a>
            </div>
          </div>
          <div>
            <h3>International</h3>
            <p>
              <a href="#1" alt="" css={intAnchors8}>
                English Version
              </a>
            </p>
            <p>
              <a href="#1" alt="" css={intAnchors8}>
                Version Française
              </a>
            </p>
            <p>
              <a href="#1" alt="" css={intAnchors8}>
                Versión Española
              </a>
            </p>
          </div>
        </section>

        <footer css={footerStyles}>
          <p>
            © 2021 · <a href="/">Dealwithgrowth</a> · Ecommerce consultancy
            powered by{' '}
            <a href="https://whois.jeremyrieunier.com/">Jeremy Rieunier</a> ·
            Currently based in sunny Valencia
            <img src={spain} alt="spain" />
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

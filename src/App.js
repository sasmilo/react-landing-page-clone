/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import dashboard from './images/dealwithgrowth-dashboard-header.jpg';
import logo2 from './images/dealwithgrowth.com.dark.png';
import logo from './images/dealwithgrowth.com.light.png';
import jeremy from './images/jeremy.jpg';
import klaviyo from './images/klaviyo_white_logo.png';
import shopify from './images/shopify-partner-crop.png';
import spain from './images/spain-flag.svg';

const purple = '#525fc4';
const ourGray = '#1d2d35';

const headerStyles = css`
  display: flex;
  color: ${ourGray};
  padding-top: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 10px;

  p {
    margin-right: auto;
    padding: 0px 30px;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }

  img {
    height: 100%;

    :hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }

  a {
    color: ${ourGray};
    text-decoration: none;
    display: block;
    padding: 20px 45px;
    outline-offset: -1px;
    transition: all 0.2s ease-in-out;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 1;
    text-transform: uppercase;
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 10px 0 0 0;

    :nth-child(6) {
      border: 2px solid ${purple};
      border-radius: 10px;
    }

    :nth-child(1) {
      padding: 0;
    }

    :hover {
      color: ${purple};
    }

    button {
      background-color: transparent;
      border: solid 1px;
      padding: 10px 20px;
      margin-top: 0;
      border-color: ${purple};
      border-radius: 10px;
      color: ${ourGray};
      text-decoration: none;
      display: block;
      outline-offset: -1px;
      transition: all 0.2s ease-in-out;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 2px;
      line-height: 1;
      text-transform: uppercase;

      :hover {
        color: ${purple};
      }
    }
  }
`;

const sectionStyles1 = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 80px;

  h1 {
    color: ${ourGray};
    font-family: 'Merriweather', 'Helvetica', 'Arial', serif;
    font-size: 3.2rem;
    line-height: 1.2;
    margin-block-start: 0em;
    margin-block-end: 0em;
    letter-spacing: -0.75px;
    display: flex;
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

    border: 4px solid ${purple};
  }

  p {
    font-family: 'PT Sans', 'Helvetica', 'Arial', sans-serif;
    font-size: 1.5rem;
    display: flex;
  }

  button {
    margin-right: 30px;
    border-radius: 10px;
    border: none;
    background-color: ${purple};
    font-size: 1rem;
    color: #fff;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 1;
    padding: 22px 36px 20px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }

  a {
    color: ${ourGray};
    border-bottom: 2px solid ${purple};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 0;
  }
`;

const leftDiv1 = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 3fr 1fr;
`;

const rightDiv1 = css``;

const btnLinkStyles = css`
  display: flex;
  flex-direction: row;
`;

const grayBackground = css`
  background-color: #f5f5f5;
  content: '';
  height: 150%;
  transform: skewY(-5deg);
  position: absolute;
  top: -240px;
  width: 100%;
  z-index: -1;
`;

const sectionStyles2 = css`
  margin-right: auto;
  margin-left: auto;

  h2 {
    font-family: 'Merriweather', 'Helvtica', 'Arial', serif;
    color: ${ourGray};
    text-align: center;
    font-size: 2rem;
    letter-spacing: -0.75px;
    font-weight: 700;
    line-height: 1.3;
    margin-top: 100px;
  }

  p {
    max-width: 760px;
    color: ${ourGray};
    margin-right: auto;
    margin-left: auto;
    font-size: 1.3rem;
    font-weight: 400;
    font-family: 'PT Sans', 'Helvetica', 'Arial', sans-serif;
  }
`;

const sectionStyles3 = css`
  max-width: 760px;
  margin-right: auto;
  margin-left: auto;

  img {
    width: 233px;
    height: auto;
    border-radius: 10px;
  }

  h2 {
    font-family: 'Merriweather', 'Helvtica', 'Arial', serif;
    color: ${ourGray};
    text-align: center;
    font-size: 2rem;
    letter-spacing: -0.75px;
    font-weight: 700;
    line-height: 1.3;
    margin-top: 100px;
  }

  p,
  li {
    max-width: 760px;
    color: ${ourGray};
    margin-right: auto;
    margin-left: auto;
    font-size: 1.3rem;
    font-weight: 400;
    font-family: 'PT Sans', 'Helvetica', 'Arial', sans-serif;
  }
`;

const gridSection3 = css`
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 95%;
  height: auto;
`;

const sectionStyles4 = css`
  h2 {
    max-width: 760px;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Merriweather', 'Helvtica', 'Arial', serif;
    color: ${ourGray};
    text-align: center;
    font-size: 2rem;
    letter-spacing: -0.75px;
    font-weight: 700;
    line-height: 1.3;
    margin-top: 100px;
  }
`;

const gridSection4 = css`
  display: grid;
  grid-template-columns: auto auto;
  width: 95%;
  height: auto;
`;

const elementOfGrid4 = css`
  h3 {
    font-family: 'Merriweather', 'Helvtica', 'Arial', serif;
    color: ${ourGray};
    text-align: center;
    font-size: 1.5rem;
  }

  p {
    color: ${ourGray};
    margin-right: auto;
    margin-left: auto;
    font-size: 1.3rem;
    font-weight: 400;
    font-family: 'PT Sans', 'Helvetica', 'Arial', sans-serif;
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
    width: 40%;
    margin-left: 30%;
    margin-right: 30%;
  }
`;

function App() {
  return (
    <div>
      <div
        css={css`
          background: #fff;
          margin: 20px;
        `}
      >
        <header css={headerStyles}>
          <p>
            <a href="/" alt="logo">
              <img src={logo} alt="dealwithgrowth" />
            </a>
          </p>

          <a href="#1">Work</a>

          <a href="#1">Why Klaviyo?</a>

          <a href="#1">Blog</a>

          <a href="#1">About</a>

          <a href="#1">
            <span>Get in touch</span>
          </a>

          <ul>
            <li />
          </ul>
        </header>

        <section id="section1" css={sectionStyles1}>
          <div css={leftDiv1}>
            <h1>Email campaigns that run your entire Shopify store</h1>
            <p>
              We define & execute sophisticated email strategies that delight
              customers—so you can drive a steady stream of revenue and repeat
              purchases to your store without relying on aggressive discounting.
            </p>
            <div css={btnLinkStyles}>
              <button>Find out how</button>
              <a href="#1">See examples of work</a>
            </div>
          </div>
          <div css={rightDiv1}>
            <img src={dashboard} alt="Merchants on its Shopify dashboard" />
          </div>
        </section>

        <section css={grayBackground}></section>

        <section id="section2" css={sectionStyles2}>
          <h2>Your email list can net you an extra 10-20% more revenue</h2>
          <p>
            But let’s face it, your current email strategy is stuck in the stone
            sting customers—leaving a chases on the table. You now, the kind of
            profitable purchases you won’t get with Facebook Ads.
          </p>
          <p>
            Meanwhile, brands like Harry’s, Chubbies and Thirdlove are nailing
            me while building long-term customer relationships.But y any of what
            they’re doing to your our plate trying to hit yet another sales
            target next month.
          </p>
          <p>
            So, how do you make it all happen? How do you ensure you only send
            rs buying again & again?
          </p>
          <p>Well, you don’t have to—because I’m here to do it all for you.</p>
        </section>

        <section id="section3" css={sectionStyles3}>
          <h2>Make email the best asset for your Shopify store</h2>
          <div css={gridSection3}>
            <div>
              <p>
                Hi, I’m <a href="#1">Jeremy</a>, ecommerce consultant and former
                marketing specialist at SPOKE, one of the fastest growing
                consumer businesses in the UK.
              </p>
              <p>
                I help fashion and beauty brands (just like yours!) on Shopify
                to define and build campaigns with Klaviyo, letting you:
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
            Ultimately, being there whenever your customers need you—so you can
            build a sustainable business with predictable, repeatable sales.
          </p>
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
              <button>Get in touch</button>
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
              <button>Are we a match?</button>
            </div>
          </div>
        </section>

        <section id="section6">
          <h2>
            These DTC brands on Shopify are now thriving with email marketing
          </h2>
          <ul>
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Black Limba"
              >
                {' '}
              </a>
            </li>
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Black Limba"
              >
                {' '}
              </a>
            </li>{' '}
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Black Limba"
              >
                {' '}
              </a>
            </li>{' '}
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Black Limba"
              >
                {' '}
              </a>
            </li>{' '}
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Black Limba"
              >
                {' '}
              </a>
            </li>{' '}
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Black Limba"
              >
                {' '}
              </a>
            </li>{' '}
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Black Limba"
              >
                {' '}
              </a>
            </li>{' '}
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Black Limba"
              >
                {' '}
              </a>
            </li>{' '}
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Black Limba"
              >
                {' '}
              </a>
            </li>{' '}
            <li>
              <a
                href="#1"
                target="_blank"
                rel="noopener noreferrer"
                alt="Black Limba"
              >
                {' '}
              </a>
            </li>
          </ul>
          <a href="#1" alt="link">
            Stg
          </a>
        </section>

        <section id="section7">
          <h2>A proven track record to drive meaningful ROI through emails</h2>
          <p>
            Delighting your customers is good business. But as an entrepreneur,
            you care about the hard, cold numbers. The kind of numbers you can
            take to the bank.
          </p>
          <p>
            So here’s a typical example of what you can expect: one of my
            clients in the men’s lifestyle industry generates almost 20% of his
            monthly revenue from the automated email campaigns we’ve created:
          </p>
          <img src={dashboard} alt="dashboard" />
          <p>
            By first auditing the current email strategy and learning more about
            shoppers using visitors polls, we were able to build an automated
            personalized customer experience for all stages of the funnel.
          </p>
          <p>
            Combined with segmented newsletters, his email channel now accounts
            for more than 30% of his monthly sales, while creating lasting
            relationships with customers, respecting their inboxes and making
            sure they’re a valued part of the community.
          </p>
          <p>Want me to do the same for you?</p>
          <button> </button>
        </section>

        <section id="section8">
          <h2>Get the most out of your email marketing</h2>
          <p>
            30 days from now, you could already be making more sales from your
            automated email campaigns. Stop neglecting them—get in touch today
            to find out how you can drive meaningful ROI and send your customer
            LTV through the ceiling.
          </p>
          <button>Let's talk email </button>
          <p>
            Not ready to get in touch yet?{' '}
            <a href="#1" alt="link33">
              {' '}
              Get the strategies to recover 15% of your lost Shopify sales →
            </a>
          </p>
        </section>

        <section id="section9">
          <div>
            <img src={logo2} alt="dealwithgrowth" />
            <p>
              Helping Shopify merchants <br />
              to thrive
            </p>
          </div>
          <div>
            <h3>Information</h3>
            <ul>
              <li>Contact</li>
              <li>About</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div>
            <h3>Partners</h3>
            <a href="#1" alt="shopify">
              <img src={shopify} alt="shopify" />
            </a>
            <a href="#1" alt="klaviyo">
              <img src={klaviyo} alt="klaviyo" />
            </a>
          </div>
          <div>
            <h3>International</h3>
            <ul>
              <li>
                <a href="#1" alt="">
                  English Version
                </a>
              </li>
              <li>
                <a href="#1" alt="">
                  Version Française
                </a>
              </li>
              <li>
                <a href="#1" alt="">
                  Versión Española
                </a>
              </li>
            </ul>
          </div>
        </section>

        <footer>
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

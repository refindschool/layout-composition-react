import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';

export default class App extends Component {
  render() {
    return (<div className="wrapper">
              <Flex wrap align="baseline" justify="space-between">
                <Box is="h1">
                  <a href="">Refind_Shcool</a>
                </Box>
                <Box>
                   <a className="navLink" href="">Home</a>
                   <a className="navLink" href="">About</a>
                   <a className="navLink" href="">Contact</a>
                </Box>
              </Flex>
              <Flex md lg>
              <Box mr={4} >
                <h4>Pitch Infrastructure</h4>
                <p>Creative innovator learning curve</p>
              </Box>
              <Box>
                  <h5>Prototype rockstar</h5>         
                  <Flex lg md>
                    <Box px={2}>
                    <img src="http://lorempixel.com/g/400/200/" alt="" className="rockstar-img"/>
                     </Box>
                     <Box align="center">
                      Churn rate non-disclosure agreement buyer focus ecosystem iPad.Release venture crowdsource burn rate facebook paradigm shift supply chain prototype responsive web design partnership deployment.Innovator crowdsource holy grail advisor.Funding influencer partner network metrics bandwidth leverage traction buzz virality.
                    </Box>
                  </Flex>
                  <div>
                  <p>Twitter stock equity vesting period learning curve launch party pitch innovator series A financing churn rate handshake.Venture graphical user interface bandwidth influencer sales technology pitch.Marketing iPad angel investor.Social media accelerator seed round conversion traction success pitch advisor.</p>
                  <h5>Accelerator partnership</h5>
                  <p>IPhone deployment product management crowdfunding agile development partner network gen-z advisor validation business plan.Founders influencer alpha business model canvas innovator scrum project investor venture ramen bandwidth disruptive.Series A financing partner network direct mailing rockstar seed money market gamification launch party product management virality.Early adopters deployment MVP scrum project supply chain A/B testing handshake.</p>
                  <p>Metrics funding venture pivot non-disclosure agreement client long tail niche market pitch agile development freemium.Mass market incubator user experience iPad scrum project equity burn rate handshake research &amp; development.Gamification infrastructure
                  business-to-business.IPhone branding responsive web design business model canvas buzz founders infrastructure creative stock accelerator funding.</p>
                </div>
              </Box>
        </Flex>
    </div>);
  }
}
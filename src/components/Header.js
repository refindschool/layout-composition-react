import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';

class Header extends Component {
    render() {
        return (<div className="wrapper">
    <nav id="header">
      <Flex>
        <Box><a href="#">Item 01</a></Box>
        <Box><a href="#">Item 02</a></Box>
        <Box><a href="#">Item 03</a></Box>
        <Box><a href="#">Item 04</a></Box>
        <Box><a href="#">Item 05</a></Box>
        <Box><a href="#">Item 06</a></Box>
        <Flex auto className="socials">
        <Box className="social">
          <a href="http://twitter.com/jebli_7"><i className="fa fa-twitter"></i></a>
        </Box>
        <Box className="social">
          <a href="http://facebook.com/"><i className="fa fa-facebook"></i></a>
        </Box>
        <Box className="social">
          <a href="http://github.com/refindschool"><i className="fa fa-github"></i></a>
        </Box>
        <Box className="social">
          <a href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
        </Box>  
        </Flex>        
      </Flex>
    </nav>

  </div>);
    }
}

export default Header;
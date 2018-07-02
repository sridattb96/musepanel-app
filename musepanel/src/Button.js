import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    text-align: center;
`;

const SongName = styled.div`
    color: blue;
`;

class Button extends Component {
  render() {
    return (
        <ButtonWrapper>
          <SongName>{this.props.songName}</SongName>
        </ButtonWrapper>
    );
  }
}

export default Button;

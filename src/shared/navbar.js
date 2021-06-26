import React, { useEffect } from 'react';
import axios from 'axios';
import { name1, name2 } from '../config/index';
import { css, jsx } from '@emotion/react'
import styled from '@emotion/styled'


const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
`

export const Navbar = () => {
  return (
    <div>
      <h1>N {name1} </h1>
      <div
        css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
    `}
      >
        Hover to change color.
      </div>

      <Button> styled </Button>

      <div
        css={{
          backgroundColor: 'hotpink',
          '&:hover': {
            color: 'lightgreen'
          }
        }}
      >
        This has a hotp
      </div>
    </div>
  )
}
import React, { fragments } from 'react';
import styled from 'styled-components'

export const Button = ({ href, title, className }) => (
  <a href={href} className={className}>{title}</a>
)

export default styled(Button)`
  display: inline-block;
  background-color: #00A400;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  padding: 5px 26px;
  border-radius: 32px;
  text-decoration: none;
`;
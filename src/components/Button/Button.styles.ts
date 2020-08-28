import styled from 'styled-components'

export const Touchable = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  border: 0;
  color: var(--white);
  border-radius: 4px;
  background-image: linear-gradient(to right, var(--orange), var(--salmon));
  vertical-align: bottom;
  border-bottom: none;
  box-shadow: 0 4px 6px var(--dark-shadow), 0 1px 3px var(--black-shadow);
  -webkit-transition: all 0.16s ease;
  transition: all 0.16s ease;
  line-height: 1em;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px var(--dark-shadow), 0 3px 6px var(--black-shadow);
  }
`

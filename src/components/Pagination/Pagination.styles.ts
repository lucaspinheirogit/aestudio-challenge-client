import styled from 'styled-components'

import { breakpoints } from 'utils'

export const Container = styled.div`
  padding: 1rem;

  .pagination {
    display: flex;
    cursor: pointer;

    a {
      outline: 0;
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    li {
      background: var(--white);
      border: 1px solid var(--gray);
      border-right: 0;
      color: var(--orange);
      min-width: 30px;
      min-height: 35px;
      text-align: center;
      display: flex;
      align-items: center;

      &:hover {
        background: var(--orange);
        opacity: 0.8;
        a {
          color: var(--white);
          text-decoration: none;
          font-weight: bold;
          transition: 500ms;
        }
      }

      &.active {
        background: var(--orange);
        border-top-color: var(--orange);
        border-bottom-color: var(--orange);
        a {
          color: var(--white);
        }
      }

      &:first-child {
        border-right: 0;
        border-top-left-radius: 0.25em;
        border-bottom-left-radius: 0.25em;
      }
      &:last-child {
        border-right: 1px solid var(--gray);
        border-top-right-radius: 0.25em;
        border-bottom-right-radius: 0.25em;
      }

      @media ${breakpoints.sm} {
        min-width: 40px;
        min-height: 40px;
      }
    }
  }
`

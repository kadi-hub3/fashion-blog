import styled, { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`

export const Nav = styled.div`
    nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        background: #333;
        height: 10vh;
        padding: 0.75rem 2rem;
    }
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between ;
        padding: 1rem;
    }
    .nav-toggle {
        font-size: 1.5rem;
        color: #fff;
        background: transparent;
        border-color: transparent;
        transition: .3s ease-in;
        cursor: pointer;
  
        &:hover {
          color: violet;
          transform: rotate(90deg);
        }
    }

    img{
        height: 40px;
      }

    .links-container {
        height: 0;
        overflow: hidden;
        transition: .3s ease-in;
        
        &.show{
            height: 20rem;
            background: #333;
        }     
      }
     

    .links a {
        color: #fff;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: 1.5;
        display: block;
        padding: 0.5rem 1rem;
        transition: .3s ease-in;
        text-decoration: none;
  
        a:hover {
          background: yellow;
        //   color: var(--primary-clr);
          padding-left: 1.5rem;
        }
      }

      .social-icons {
         display: none;
     }



  @media screen and (min-width: 800px) {
    nav {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }
    .nav-header {
      padding: 0;
    }
    .nav-toggle {
      display: none;
    }
    .links-container {
      height: auto !important;
      display: flex;
      flex-direction: row;
    }
    .links {
        display: flex;
        list-style: none;

    }
    .links a {
      padding: 0;
      margin: 0 0.5rem;
      
    }
    .links a:hover {
      padding: 0;
      background: transparent;
    }
    .social-icons {
      display: flex;
      list-style: none;
    }
    .social-icons a {
      margin: 0 0.5rem;
      color: #fff;
    }
    .social-icons a:hover {
      color: yellow;
    }
  }
`






import styled from 'styled-components'


export const Nav = styled.div`
    nav {
        // position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;
        height: 10vh;
        padding: 0.75rem 2rem;
    }
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between ;
        padding: 1rem;

    }
    img{
        height: 10vh;
    }
    .nav-toggle {
        font-size: 1.5rem;
        color: #333;
        background: transparent;
        border-color: transparent;
        transition: .3s ease-in;
        cursor: pointer;
  
        &:hover {
          color: violet;
          transform: rotate(90deg);
        }
    }

    .links-container {
        height: 0;
        overflow: hidden;
        transition: .3s ease-in;
        
        &.show{
            height: 20rem;
            background: #333;
            z-index: 111;
        }     
      }
     

    .links a {
        color: #333;
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: 1.5;
        display: block;
        padding: 0.5rem 1rem;
        transition: .3s ease-in;
        text-decoration: none;
  
      }

      .social-icons {
         display: none;
         color: #333;

     }

     .search-box{
       margin: 0 .5rem;
     }
     .search-input{
       display: none;
       padding: .5rem;
     }

     .search-box:hover .search-input{
       display: inline-block;
       margin: .5rem;

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
      justify-content: space-between;
      text-transform: uppercase;
    }
    .links {
        display: flex;
        list-style: none;
        margin: 0 1rem;

    }
    .links a {
      padding: 0;
      margin: 0 0.5rem;
      text-transform: uppercase;
      font-weight: 500;
      
    }
    .links a:hover {
      padding: 0;
      background: transparent;
      color: violet;
      text-decoration: underline;
    }
    .social-icons {
      display: flex;
      list-style: none;
    }
    .social-icons a {
      margin: 0 0.5rem;
      color: #333;
    }
    .social-icons a:hover {
      color: violet;
    }
  }
`






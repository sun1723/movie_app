import styled from 'styled-components';


export const MovieViewcss = styled.div`
  .container {
    padding: 0 20px;
  }
  .result {
    height: 5vh;
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: 0 20px
  }
  .movieContent {
    // overFlow-y: scroll;
    font-size: 0.7rem;
    line-height: 1.5em,
  }
  .movieDetails,
  .movieList {
    max-height: 88vh;
  }
  .movieList {
    font-size: 0.8em;
    height: 100%;
    // background-color: #0F0C24;
    overflow: hidden scroll;
    padding-top: 12px;
  }
  .movieList::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
  }
  
  .movieList::-webkit-scrollbar-track {
    background: #0F0C24;        /* color of the tracking area */
  }
  
  .movieList::-webkit-scrollbar-thumb {
    background-color: #fff;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid #0F0C24;  /* creates padding around scroll thumb */
  }
  .movieDetails {
    font-size: 0.9em;
    overflow:hidden
  }
  .scoreList {
    justify-content: space-around;
    text-align: center;
    // border-left: solid 1px #fff
  }
  .movieDetails {
    height: 100%;
    align-items: center;
    margin: auto;
  }
  .movieDetails .title {
    line-height: 1.5rem;
    font-size: 1.3rem;
    margin-top: 20px
  }
  .movieDetails .movie_right {
    display: flex;
    flex-direction: column;
    justify-content:space-around;
  }
  .movieDetails .movie_p {
    margin-top: 20px;
    text-align: justify;
  }
`

export const Navcss = styled.div`
* {
  font-family: 'Press Start 2P', cursive;
}

nav {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 7vh;
  display: inline-flex;
  color: white;
  align-items: center;
  font-weight:400
}
.navbar {
  padding-left: 20px;
  font-size: 12px;
}

.search-box {
  height: 30px;
}

.search-box input {
  max-width: 200px;
  height: 100%
}

.search-box button {
  height: 100%;
  padding: 2px;
  border-radius: 2px;
  margin-left: 5px;
}

`
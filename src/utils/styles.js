import styled from 'styled-components';


export const MovieViewcss = styled.div`
  height: 93vh
  .container {
    padding: 0 20px;
  }
  .result {
    
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
  .movieDetails {
    
  }
  .scoreList {
    justify-content: space-around;
    text-align: center;
    // border-left: solid 1px #fff
  }
  .movieDetails {
    
  }
  .movieDetails .title {
    line-height: 1.5rem;
    font-size: 1.3rem;
    margin-top: 20px
  }
  .movieDetails .movie_right {
    
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
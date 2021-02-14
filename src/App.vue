<template>
    <div id="app">
        <nav>
            <div>
                <img src="img/square-dice.png" alt="dice">
            </div>
            
            <button><router-link :to="{name: 'game'}">Graj<div class="triangle"></div></router-link></button>
            <button><router-link :to="{name: 'home'}">Home<div class="triangle"></div></router-link></button>
            <button><a>Credits<div class="triangle"></div></a></button>
        </nav>
    
    <router-view />
    </div>
</template>

<style lang="scss">
 

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap');
  
#app {
  font-family: 'Lato' !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
    background: linear-gradient(to right bottom, rgba(189,248,255,1) 0%, rgba(0,198,255,1) 49%, rgba(0,91,255,1) 100%);
    width: 100vw;
    height: 100vh
}

nav {
  width: 100%;
  background: #ffffff;
  height: 60px;
  display: flex;
  justify-content: center;
    
    div {
        width: 60px;
        height: 60px;
        img {
            width: 100%;
            height: 100%;
        }
    }

    button{
        background: none;
        border: none;

        a {
            color: #333333;
            padding: 15px 20px;
            text-decoration: none;
            font-family: 'Lato';

            .triangle {
                display: inline-block;
                width: 0;
                height: 0;
                margin-left: 5px;
                vertical-align: middle;
                border-top: 4px solid;
                border-right: 4px solid transparent;
                border-left: 4px solid transparent;
                }
            }
      }
}

</style>

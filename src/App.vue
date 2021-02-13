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
#app {
  font-family: Tahoma;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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

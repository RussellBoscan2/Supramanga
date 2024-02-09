'use strict'

window.addEventListener('load', () => {

const Logo = document.getElementById("SMLogo");
const NavBar = document.getElementById("navbar");

    function changeLogoSize(){
        document.getElementById("SMLogo").style.width = "20px";
        return false;
    }

    window.onscroll = function(){
        shrinkNavbarScroll();
    }
    function shrinkNavbarScroll(){
            if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
                Logo.style.width = "30px";
                NavBar.style.paddingTop = "0px"
                NavBar.style.paddingBottom = "0px"
            }else{
                Logo.style.width = "64px";
            }
        }

    console.log("Buenos dias")

});
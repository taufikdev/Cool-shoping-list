<template>
  <div class="about">
      <form action="">
    <div class="head">
        <img class="back" src="../assets/ww.png" alt="" srcset=""  width="100%">
        <img class="front" src="../assets/logo2.png" width="50px">
    </div>

    <div class="formIn">
        <div class="two">
            <div>
             <div class="txtholder"> First name (required) </div>
               <input type="text" placeholder="First name">
            </div>
            <div>
            <div class="txtholder"> Last name (required) </div>
            <input type="text" placeholder="Last name">
            </div>
        </div>
        <div class="rest">
            <div>
                <div class="txtholder">Enter your phone number (required)</div>
            <div style="display:flex" id="phoneinputs">
                <select name="" id="" class="selecto">
                     <option value="morocco">+212</option>
                    <option value="us">+1</option>
                    <option value="egypt">+90</option>
                    <!-- this shoul be filled with a json file -->
                    <option value="france">+33</option>
                </select> 
                <input type="text"  placeholder="Phone number"></div>
                </div>
            <div><div class="txtholder">Enter your email (required)       </div><input type="email" placeholder="Email"></div>
            <div><div class="txtholder">Enter a password (required)       </div><input type="password" placeholder="Password"></div>
            <div><input type="submit" value="SIGN-UP"></div>
            <div style="font-size:8px; width:95%">By clicking "Sign Up", you agree to Uber's Terms of Use and acknowledge you have read the Privacy Policy. You also consent to receive calls or SMS messages, including by automated dialer, from Uber and its affiliates to the number you provide for informational and/or marketing purposes. Consent to receive marketing messages is not a condition to use Uber’s services. You understand that you may opt out by texting “STOP” to 89203.</div>
        </div>
    </div>

    
    </form>
            <div class="footer"> <img id="footerImage" src="../assets/casa.png" alt="" srcset=""  width="100%"></div>
  </div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
<style scoped>
.selecto{
    font-size: 1em;   
   width:65px;
   background-color:white;
   border-radius:.2em;  
   border: 1px solid lightgray;  
}
.back{
    z-index: 1;
}
.front{
    margin-left:47%;
    margin-top:-25px;
    z-index: 2;
}
/* .head{
    display: grid;
    grid-template-columns: 33% 33% ;
    
} */
.two{
    display: grid;
    grid-auto-flow: column;
    gap: 1em;
    width: 100%;
}
.rest{
    display: grid;
    grid-auto-flow:row;
    gap: 1em;
    z-index:0;
}
input[type=text],input[type=password],input[type=email]{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid lightgray;
    box-shadow: none;
    margin: auto;
    width: calc(100% - 40px);
    border-radius: .2em;
    /* width:100%; */
    font-size: 1em;   
    height: 40px;
    padding-left:.7em;
    
    }
    input[type=submit]{
    text-align: start;
    padding-left: 2em;
    background-color: #11939A;
    /* background-color: #86CCD2; */
    box-shadow: none;
    
    width: calc(100% - 25px);
    border-radius: .2em;
    font-size: 1em;
    font-weight:bold;
    color: rgb(235, 235, 235);   
    height: 50px;
    }  
    #phoneinputs{
        width: calc(100% - 26px);
    }
.formIn{
    
    width:70%;
    margin-left: 17%;
    margin-top: 1em;
    display: grid;
    grid-auto-flow:row;
    gap:.5em;
}
.txtholder{
    font-size:13px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    color:black;
    margin-bottom:.8em;
}
.footer{
    z-index:-1;
    margin-top:80px;
    /* margin-left: 20em; */

}
/* #footerImage{
    position:absolute;
    overflow:hidden;
    margin-left: 0;
} */
</style>
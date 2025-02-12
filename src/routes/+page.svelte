<div class="center-wrapper">
  <!--breaks before the start of the code so that it doesnt start at the very top of the page-->
  <br>
  <br>
  <br>
  <br>

  <!--This is the input box that will be used to get peoples names-->
  <input 
      type="text" 
      placeholder="Name"
      class="input place-self-center input-bordered w-full max-w-xs center"
  /><br>

  <!--this is the dropdown that will be used to select the team number that you are scouting-->
  <select class="select select-bordered w-full max-w-xs">
    <option disabled selected>team</option>
    <option>team 2</option>
    <option>team 1</option>
    <option>team 1</option>
    <option>team 1</option>
    <option>team 1</option>
    <option>team 1</option>
    <option>team 1</option>
    <option>team 1</option>
    <option>team 1</option>
    <option>team 1</option>
    <option>team 1</option>
    <option>team 1</option>
    <option>team 1</option>
    <option>team 1</option>
    <option>team 1</option>
    <option>team 1</option>
    <option>team 1</option>
    <option>team 1</option>
    <option>team 1</option>
  </select>
  <br>

  <!--this is the division to the auton section of the code -->
  <header>
    <h1 class="center-header">Auton</h1>
  </header>
  <!--put if they left community here YES/NO -->

  <label class="label cursor-pointer">
    <span class="label-text">did they leave community</span>
    <input type="checkbox" class="toggle" checked="checked" />
  </label>
  <!--put if they left community here YES/NO -->

  <!--to describe what the button below does-->
  <header>
    <h1 class="center-header">4th reef scored</h1>
  <header>
  
  <!--for the auton fourth coral subtraction button-->
  <button on:click={() => {
    autonFourthCoral--
  }}
   class="btn">-</button>

   <!--this is to show the current value of the number-->
    <input type="text" value={autonFourthCoral} class="input w-full max-w-xs" />

    <!--onclick to add to autonfourth coral-->
    <button on:click={() => {
      autonFourthCoral++
    }} class="btn">+</button>
      <!--to describe what the button below does-->
  <header>
    <h1 class="center-header">3rd reef scored</h1>
  <header>
  
  <!--for the auton fourth coral subtraction button-->
  <button on:click={() => {
    autonThirdCoral--
  }}
   class="btn">-</button>

   <!--this is to show the current value of the number-->
    <input type="text" value={autonThirdCoral} class="input w-full max-w-xs" />

    <!--onclick to add to autonfourth coral-->
    <button on:click={() => {
      autonThirdCoral++
    }} class="btn">+</button>

<header>
  <h1 class="center-header">2nd reef scored</h1>
<header>

<!--for the auton fourth coral subtraction button-->
<button on:click={() => {
  autonSecondCoral--
}}
 class="btn">-</button>

 <!--this is to show the current value of the number-->
  <input type="text" value={autonSecondCoral} class="input w-full max-w-xs" />


  <!--onclick to add to autonfourth coral-->
  <button on:click={() => {
    autonSecondCoral++
  }} class="btn">+</button>

  

    <!--to describe what the button below does-->
<header>
  <h1 class="center-header">1st reef scored</h1>
<header>

<!--for the auton fourth coral subtraction button-->
<button on:click={() => {
  autonFirstCoral--
}}
 class="btn">-</button>

 <!--this is to show the current value of the number-->
  <input type="text" value={autonFirstCoral} class="input w-full max-w-xs" />
  

  <!--onclick to add to autonfourth coral-->
  <button on:click={() => {
    autonFirstCoral++
  }} class="btn">+</button>

  <!--did they move algae?-->
  <label class="label cursor-pointer">
    <span class="label-text">did they move algae?</span>
    <input type="checkbox" class="toggle" checked="checked" />
  </label>

  <header>
    <h1 class="center-header">processor scored</h1>
  <header>
  <!--algae put into processor-->
  <button on:click={() => {
    autonProcessor--
  }}
   class="btn">-</button>

   <!--this is to show the current value of the number-->
    <input type="text" value={autonProcessor} class="input w-full max-w-xs" />

    <!--onclick to add to autonfourth coral-->
    <button on:click={() => {
      autonProcessor++
    }} class="btn">+</button>

    
  <header>
    <h1 class="center-header">algae scored in Barge</h1>
  <header>
  <!--algae put into processor-->
  <button on:click={() => {
    autonBarge
  }}
   class="btn">-</button>

   <!--this is to show the current value of the number-->
    <input type="text" value={autonBarge} class="input w-full max-w-xs" />

    <!--onclick to add to autonfourth coral-->
    <button on:click={() => {
      autonBarge++
    }} class="btn">+</button>

<header>
  <h1 class="center-header">Teleop</h1>
<header>

   <!--to describe what the button below does-->
   <header>
    <h1 class="center-header">4th reef scored</h1>
  <header>
  
  <!--for the auton fourth coral subtraction button-->
  <button on:click={() => {
    teleopFourthCoral--
  }}
   class="btn">-</button>

   <!--this is to show the current value of the number-->
    <input type="text" value={teleopFourthCoral} class="input w-full max-w-xs" />

    <!--onclick to add to autonfourth coral-->
    <button on:click={() => {
      teleopFourthCoral++
    }} class="btn">+</button>
      <!--to describe what the button below does-->
  <header>
    <h1 class="center-header">3rd reef scored</h1>
  <header>
  
  <!--for the auton fourth coral subtraction button-->
  <button on:click={() => {
    teleopThirdCoral--
  }}
   class="btn">-</button>

   <!--this is to show the current value of the number-->
    <input type="text" value={autonThirdCoral} class="input w-full max-w-xs" />

    <!--onclick to add to autonfourth coral-->
    <button on:click={() => {
      teleopThirdCoral++
    }} class="btn">+</button>

<header>
  <h1 class="center-header">2nd reef scored</h1>
<header>

<!--for the auton fourth coral subtraction button-->
<button on:click={() => {
  teleopSecondCoral--
}}
 class="btn">-</button>

 <!--this is to show the current value of the number-->
  <input type="text" value={teleopSecondCoral} class="input w-full max-w-xs" />


  <!--onclick to add to autonfourth coral-->
  <button on:click={() => {
    teleopSecondCoral++
  }} class="btn">+</button>

  

    <!--to describe what the button below does-->
<header>
  <h1 class="center-header">1st reef scored</h1>
<header>

<!--for the auton fourth coral subtraction button-->
<button on:click={() => {
  teleopFirstCoral--
}}
 class="btn">-</button>

 <!--this is to show the current value of the number-->
  <input type="text" value={teleopFirstCoral} class="input w-full max-w-xs" />
  

  <!--onclick to add to autonfourth coral-->
  <button on:click={() => {
    teleopFirstCoral++
  }} class="btn">+</button>

<header>
  <h1 class="center-header">processor scored</h1>
<header>
<!--algae put into processor-->
<button on:click={() => {
  teleopProcessor--
}}
 class="btn">-</button>

 <!--this is to show the current value of the number-->
  <input type="text" value={autonProcessor} class="input w-full max-w-xs" />

  <!--onclick to add to autonfourth coral-->
  <button on:click={() => {
    teleopProcessor++
  }} class="btn">+</button>

  
<header>
  <h1 class="center-header">algae scored in Barge</h1>
<header>
<!--algae put into processor-->
<button on:click={() => {
  teleopBarge--
}}
 class="btn">-</button>

 <!--this is to show the current value of the number-->
  <input type="text" value={teleopBarge} class="input w-full max-w-xs" />

  <!--onclick to add to autonfourth coral-->
  <button on:click={() => {
    teleopBarge++
  }} class="btn">+</button>

  <!--did they break-->
  <label class="label cursor-pointer">
    <span class="label-text">did they break?</span>
    <input type="checkbox" class="toggle" checked="checked" />
  </label>

  <!--did they play defense, did they play it well?-->
<header>
  <h1> did they play defense, did they play it well?<br></header>
  <input 
  type="text" 
  placeholder="defense?"
  class="input place-self-center input-bordered w-full max-w-xs center"

/><br>

 <!--did they shallow climb-->
 <label class="label cursor-pointer">
  <span class="label-text">did they shallow climb?</span>
  <input type="checkbox" class="toggle" checked="checked" />
</label>

<!--did they deep climb-->
<label class="label cursor-pointer">
  <span class="label-text">did they deep climb?</span>
  <input type="checkbox" class="toggle" checked="checked" />
</label>




</div>
<!--this is to declare variables to be used for counters-->
<script>
let autonFourthCoral = 0;
let autonThirdCoral = 0;
let autonSecondCoral=0;
let autonFirstCoral=0;
let autonProcessor=0;
let autonBarge=0;
let teleopFirstCoral=0;
let teleopSecondCoral=0;
let teleopThirdCoral = 0;
let teleopFourthCoral=0
let teleopBarge=0;
let teleopProcessor=0;
</script>

<style>
h1 {
  color: goldenrod;
  font-family: "Comic Sans MS", cursive;
}

.center-wrapper {
  text-align: center; /* Centers all child elements horizontally */
}

.center-header {
  margin-top: 20px; /* Adds some 
  spacing between the dropdown and the header */
}

.center {
  display: inline-block; /* Ensures the input remains block-like for styling */
  border: 3px solid lightpink;
}
</style>

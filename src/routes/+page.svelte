<form method="POST">
  <div class="center-wrapper">
    <br><br><br><br>

    <!-- Name Input -->
    <input 
      type="text" 
      name="name"
      placeholder="Name"
      class="input place-self-center input-bordered w-full max-w-xs center"
      required
    /><br>
<!--match number-->
    <input 
      type="text" 
      name="match_number"
      placeholder="match"
      class="input place-self-center input-bordered w-full max-w-xs center"
      required
    /><br>

    <!-- Team Dropdown -->
    <select name="team_number" class="select select-bordered w-full max-w-xs" required>
      <option value="56">56 R.O.B.B.E  </option>
      <option value="219">219 Team Impact  </option>
      <option value="222">222 Tigertrons  </option>
      <option value="303">303 The T.E.S.T Team  </option>
      <option value="555">555 Montclair Robotics  </option>
      <option value="714">714 Panthera  </option>
      <option value="752">752 The Chargers   </option>
      <option value="834">834 SparTechs  </option>
      <option value="1279">1279 cold Fusion   </option>
      <option value="1640">1640 Sab-Bot-age   </option>
      <option value="1672">1672 Robo T-Birds   </option>
      <option value="1676">1676 The Pascack PI-oneers  </option>
      <option value="1811">1811 FRESH  </option>
      <option value="2180">2180 Zero Gravity  </option>
      <option value="3142">3142 Aperture  </option>
      <option value="4285">4285 Camo-Bots  </option>
      <option value="5310">5310 Mecha Ravens  </option>
      <option value="6860">6860 Equitum Robotics  </option>
      <option value="7045">7045 MCCrusaders  </option>
      <option value="8075">8075 CyberTigers  </option>
      <option value="8513">8513 Sisters 1st   </option>
      <option value="8588">8588 Tech Devils   </option>
      <option value="8628">8628 Newark School of Global Studies   </option>
      <option value="8630">8630 CAP ROBOTICS   </option>
      <option value="8706">8706 MXS Bulldog Bots   </option>
      <option value="8707">8707 The Newark Circuit Breakers   </option>
      <option value="8771">8771 PioTech   </option>
      <option value="9424">9424 E.O. JAG BOTS   </option>
      <option value="9439">9439 Knights of Polaris  </option>
      <option value="10069"> 10069 University Academic Charter School   </option>
      <option value="10480"> 10480 CyberStorm   </option>
      <option value="10600"> 10600 Two Steps Ahead </option>
    </select>
    <br>

    <!-- Auton Section -->
    <header>
        <auton class="center-header">Auton </auton>
      
    </header>

    <label class="label cursor-pointer">
      <span class="label-text">Did they leave community?</span>
      <input type="checkbox" name="auton_left_community" value = 1 class="toggle" />
    </label>

    <header>
      <h1 class="center-header">4th Reef Scored</h1>
    </header>
  
    <button type="button" class="btn" onclick={() => autonFourthCoral--}>-</button>
    <input type="number" id="autonFourthCoral" name="autonFourthCoral" bind:value="{autonFourthCoral}" class="input w-full max-w-xs" />
    <button type="button" class="btn" onclick={() => autonFourthCoral++}>+</button>

    <header>
      <h1 class="center-header">3rd Reef Scored</h1>
    </header>

    <button type="button" class="btn"  onclick={() => autonThirdCoral--}>-</button>
    <input type="number" name="autonThirdCoral" bind:value="{autonThirdCoral}" class="input w-full max-w-xs" />
    <button type="button" class="btn" onclick={() => autonThirdCoral++}>+</button>

    <header>
      <h1 class="center-header">2nd Reef Scored</h1>
    </header>

    <button type="button" class="btn" onclick={() => autonSecondCoral--}>-</button>
    <input type="number" name="autonSecondCoral" bind:value="{autonSecondCoral}" class="input w-full max-w-xs" />
    <button type="button" class="btn" onclick={() => autonSecondCoral++}>+</button>

    <header>
      <h1 class="center-header">1st Reef Scored</h1>
    </header>

    <button type="button" class="btn" onclick={() => autonFirstCoral--}>-</button>
    <input type="number" name="autonFirstCoral" bind:value="{autonFirstCoral}" class="input w-full max-w-xs" />
    <button type="button" class="btn" onclick={() => autonFirstCoral++}>+</button>

    <label class="label cursor-pointer">
      <span class="label-text">Did they move algae?</span>
      <input type="checkbox" name="auton_moved_algae" value = 1 class="toggle" />
    </label>

    <header>
      <h1 class="center-header">Processor Scored</h1>
    </header>

    <button type="button" class="btn" onclick={() => autonProcessor--}>-</button>
    <input type="number" name="autonProcessor" bind:value="{autonProcessor}" class="input w-full max-w-xs" />
    <button type="button" class="btn" onclick={() => autonProcessor++}>+</button>

    <header>
      <h1 class="center-header">Algae Scored in Barge</h1>
    </header>

    <button type="button" class="btn" onclick={() => autonBarge--}>-</button>
    <input type="number" name="autonBarge" bind:value="{autonBarge}" class="input w-full max-w-xs" />
    <button type="button" class="btn" onclick={() => autonBarge++}>+</button>

    <!-- Teleop Section -->
    <header>
      <teleop class="center-header">Teleop</teleop>
    </header>

    <header>
      <h1 class="center-header">4th Reef Scored</h1>
    </header>

    <button type="button" class="btn" onclick={() => teleopFourthCoral--}>-</button>
    <input type="number" name="teleopFourthCoral" bind:value="{teleopFourthCoral}" class="input w-full max-w-xs" />
    <button type="button" class="btn" onclick={() => teleopFourthCoral++}>+</button>

    <header>
      <h1 class="center-header">3rd Reef Scored</h1>
    </header>

    <button type="button" class="btn" onclick={() => teleopThirdCoral--}>-</button>
    <input type="number" name="teleopThirdCoral" bind:value="{teleopThirdCoral}" class="input w-full max-w-xs" />
    <button type="button" class="btn" onclick={() => teleopThirdCoral++}>+</button>

    <header>
      <h1 class="center-header">2nd Reef Scored</h1>
    </header>

    <button type="button" class="btn" onclick={() => teleopSecondCoral--}>-</button>
    <input type="number" name="teleopSecondCoral" bind:value="{teleopSecondCoral}" class="input w-full max-w-xs" />
    <button type="button" class="btn" onclick={() => teleopSecondCoral++}>+</button>

    <header>
      <h1 class="center-header">1st Reef Scored</h1>
    </header>

    <button type="button" class="btn" onclick={() => teleopFirstCoral--}>-</button>
    <input type="number" name="teleopFirstCoral" bind:value="{teleopFirstCoral}" class="input w-full max-w-xs" />
    <button type="button" class="btn" onclick={() => teleopFirstCoral++}>+</button>

    <header>
      <h1 class="center-header">Processor Scored</h1>
    </header>

    <button type="button" class="btn" onclick={() => teleopProcessor--}>-</button>
    <input type="number" name="teleopProcessor" bind:value="{teleopProcessor}" class="input w-full max-w-xs" />
    <button type="button" class="btn" onclick={() => teleopProcessor++}>+</button>

    <header>
      <h1 class="center-header">Algae Scored in Barge</h1>
    </header>

    <button type="button" class="btn" onclick={() => teleopBarge--}>-</button>
    <input type="number" name="teleopBarge" bind:value="{teleopBarge}" class="input w-full max-w-xs" />
    <button type="button" class="btn" onclick={() => teleopBarge++}>+</button>

    <label class="label cursor-pointer">
      <span class="label-text">Did they break?</span>
      <input type="checkbox" name="did_break" value = 1 class="toggle" />
    </label>

    <header>
      <h1>Did they play defense? How well?</h1>
    </header>

    <input 
      type="text" 
      name="defense"
      placeholder="Defense?"
      class="input place-self-center input-bordered w-full max-w-xs center"
    /><br>

    <label class="label cursor-pointer">
      <span class="label-text">Did they shallow climb?</span>
      <input type="checkbox" name="shallow_climb" value = 1 class="toggle" />
    </label>

    <label class="label cursor-pointer">
      <span class="label-text">Did they deep climb?</span>
      <input type="checkbox" name="deep_climb" value = 1 class="toggle" />
    </label>

    <label class="label cursor-pointer">
      <span class="label-text">Did they attempt to climb?</span>
      <input type="checkbox" name="did_attempt_climb" value = 1 class="toggle" />
    </label>

    <header>
      <h1>Any extra notes</h1>
    </header>
    <input 
    type="notes" 
    name="notes"
    placeholder="notes?"
    class="input place-self-center input-bordered w-f ull max-w-xs center"
  /><br>

    <button type="submit" class="btn">Submit</button>
  </div>
</form>

<script>

let autonFourthCoral=$state(0);
let autonThirdCoral=$state(0);
let autonSecondCoral=$state(0);
let autonFirstCoral=$state(0);
let autonProcessor=$state(0);
let autonBarge=$state(0);
let teleopFourthCoral=$state(0);
let teleopThirdCoral=$state(0)
let teleopSecondCoral=$state(0);
let teleopFirstCoral=$state(0);
let teleopProcessor=$state(0);
let teleopBarge=$state(0);
</script>


<style>
  auton{
    font-weight: bold;
    color: lightskyblue;
  }
  teleop{
    font-weight: bold;
    color: lightskyblue;
  }
 body, html {
    background-color: rgba(52, 52, 52, 0.281);
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  .center-wrapper {
    background-color: rgba(52, 52, 52, 0.281);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }


input[type="number"]::-webkit-inner-spin-button, 
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

  h1 {
    color: white;
    font-family: "arial", ;
  }

  .center-wrapper {
    text-align: center;
  }

  .center-header {
    margin-top: 20px;
  }

  .center {
    display: inline-block;
  }
</style>
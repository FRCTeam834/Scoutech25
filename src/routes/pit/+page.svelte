<br><br><br><br>
<form action="/pit" method="POST">

  <div class="center-wrapper">
      <!-- Team Dropdown -->
      <select name="pit_team_number" class="select select-bordered w-full max-w-xs" required>
        <option disabled selected>Team</option>
        <option value="25">25 Raider Robotix</option>
        <option value="87">87 Diablo</option>
        <option value="102">102 The Robotic Vikings </option>
        <option value="233">233 Xtreme Heat</option>
        <option value="293">293 Spike</option>
        <option value="486">486 Positronic</option>
        <option value="834">834 SparTechs</option>
        <option value="1676">1676 The Pascack Pi-oneers</option>
        <option value="1923">1923 The MidKnight Inventors </option>
        <option value="2191">2191 Flux Core </option>
        <option value="2495">2495 Hive Mind </option>
        <option value="2590">2590 Nemesis </option>
        <option value="3314">3314 Mechanical Mustangs </option>
        <option value="3340">3340 Union city MagneGeeks </option>
        <option value="5438">5438 Technological Terrors </option>
        <option value="5624">5624 TIGER TECH robotics  </option>
        <option value="5666">5666 Purple Lightning  </option>
        <option value="5684">5684 Titans of Tech - Thrive Charter School</option>
        <option value="5732">5732 ROBOTIGERS  </option>
        <option value="6897">6897 Astrae Robotics  </option>
        <option value="8707">8707 The Newark Circuit Breakers  </option>
        <option value="8714">8714 Robo Griffins  </option>
        <option value="9100">9100 Robo Roses   </option>
        <option value="9116">9116 The Canucks & Bolts  </option>
        <option value="10170">10170 ND robotics   </option>
        <option value="10366">10366 Builder Bears  </option>
      </select>
      
      <div style="margin-bottom: 10px;"></div>

      <!-- Length and Width Inputs -->
      <div class="input-row">
        <input 
          type="text" 
          name="pit_length"
          placeholder="Length?"
          class="input input-bordered"
        />
        <input 
          type="text" 
          name="pit_width"
          placeholder="Width?"
          class="input input-bordered"
        />
      </div>
      <div style="margin-bottom: 10px;"></div>

      <!--where do they start in auton-->
      <select name="pit_auton_starting_position" class="select select-bordered w-full max-w-xs" required>
        <option disabled selected>Auton</option>
        <option value="left">left</option>
        <option value="mid">midddle</option>
        <option value="right">right</option>
    </select>


    <div style="margin-bottom: 10px;"></div>


    <label class="label cursor-pointer">
      <span class="label-text">can they score fourth coral?</span>
      <input type="checkbox" name="pit_fourthcoral" value = 1 class="toggle" />
    </label>

    <div style="margin-bottom: 10px;"></div>


    <label class="label cursor-pointer">
      <span class="label-text">can they score third coral?</span>
      <input type="checkbox" name="pit_thirdcoral" value = 1 class="toggle" />
    </label>

    <div style="margin-bottom: 10px;"></div>


    <label class="label cursor-pointer">
      <span class="label-text">can they score second coral?</span>
      <input type="checkbox" name="pit_secondcoral" value = 1 class="toggle" />
    </label>

    <div style="margin-bottom: 10px;"></div>


    <label class="label cursor-pointer">
      <span class="label-text">can they score first coral?</span>
      <input type="checkbox" name="pit_firstcoral" value = 1 class="toggle" />
    </label>

    <div style="margin-bottom: 10px;"></div>

    <select name="pit_getcoral" class="select select-bordered w-full max-w-xs" required>
      <option disabled selected>where do they get coral from?</option>
      <option value="834">human player</option>
      <option value="834">floor</option>
  </select>

    <div style="margin-bottom: 10px;"></div>

    <label class="label cursor-pointer">
      <span class="label-text">can they move algae?</span>
      <input type="checkbox" name="pit_algae" value = 1 class="toggle" />
    </label>

    <div style="margin-bottom: 10px;"></div>

    <label class="label cursor-pointer">
      <span class="label-text">can they score barge ?</span>
      <input type="checkbox" name="pit_barge" value = 1 class="toggle" />
    </label>

    <div style="margin-bottom: 10px;"></div>

    <label class="label cursor-pointer">
      <span class="label-text">can they score processor?</span>
      <input type="checkbox" name="pit_processor" value = 1 class="toggle" />
    </label>

    

  <div style="margin-bottom: 10px;"></div>

  <select name="pit_getalgae" class="select select-bordered w-full max-w-xs" required>
    <option disabled selected>how do they climb?</option>
    <option value="834">deep</option>
    <option value="834">shallow</option>
    <option value="834">can't climb</option>
</select>

<div style="margin-bottom: 10px;"></div>

    <input 
    type="text" 
    name="pit_notes"
    placeholder="notes?"
    class="input input-bordered"
  /> 

      <button type="submit" class="btn">Submit</button>
  </div>
</form>

<style>
.center-wrapper {
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column; 
  width: 100%;
}

.input-row {
  display: flex;
  gap: 10px; /* Adjust spacing between inputs */
}
</style>

<br><br><br><br>
<form action="/pit" method="POST">

  <div class="center-wrapper">
      <!-- Team Dropdown -->
      <select name="pit_team_number" class="select select-bordered w-full max-w-xs" required>
        <option disabled selected>Team</option>
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
        <option value="mid">middle</option>
        <option value="right">right</option>
        <option value="all">all</option>
        <option value="left-middle">left-middle</option>
        <option value="left-right">left-right</option>
        <option value="middle-right">middle-right</option>
    </select>

    <div style="margin-bottom: 10px;"></div>

    <input 
      type="text" 
      name="auton_left_notes"
      placeholder="left auton?"
      class="input input-bordered"
    />
    <div style="margin-bottom: 10px;"></div>
    <input 
      type="text" 
      name="auton_middle_notes"
      placeholder="middle auton?"
      class="input input-bordered"
    />
    <div style="margin-bottom: 10px;"></div>
<input 
      type="text" 
      name="auton_right_notes"
      placeholder="right auton?"
      class="input input-bordered"
    />

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
      <option value="human player">human player</option>
      <option value="floor">floor</option>
      <option value="both">both</option>
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

    <input 
      type="text" 
      name="cycles"
      placeholder="how many cycles?"
      class="input input-bordered"
    />

    <div style="margin-bottom: 10px;"></div>

    

  <div style="margin-bottom: 10px;"></div>

  <select name="pit_climb" class="select select-bordered w-full max-w-xs" required>
    <option disabled selected>how do they climb?</option>
    <option value="deep">deep</option>
    <option value="shallow">shallow</option>
    <option value="no_climb">can't climb</option>
</select>

<div style="margin-bottom: 10px;"></div>
<input 
      type="text" 
      name="pit_defense_notes"
      placeholder="defense?"
      class="input input-bordered"
    />

    <div style="margin-bottom: 10px;"></div>

    <input 
    type="text" 
    name="pit_notes"
    placeholder="notes?"
    class="input input-bordered"
  /> 
  <div style="margin-bottom: 10px;"></div>
  <input type="file"name = "pit_pic" class="file-input file-input-ghost" />
  <div style="margin-bottom: 10px;"></div>

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

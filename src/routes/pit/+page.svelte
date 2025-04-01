<br><br><br><br>
<form action="/pit" method="POST">

  <div class="center-wrapper">
      <!-- Team Dropdown -->
      <select name="pit_team_number" class="select select-bordered w-full max-w-xs" required>
        <option disabled selected>Team</option>
        <option value="11">11 MORT  </option>
        <option value="25">25 Raider Robotix  </option>
        <option value="56">56 R.O.B.B.E.  </option>
        <option value="75">75 RoboRaider  </option>
        <option value="102">102 The Gearheads  </option>
        <option value="103">103 Cybersonics  </option>
        <option value="193">193 MORT Beta  </option>
        <option value="222">222 Tigertrons  </option>
        <option value="223">223 Xtreme Heat  </option>
        <option value="272">272 Cyber Crusaders  </option>
        <option value="293">293 SPIKE  </option>
        <option value="316">316 LUNATECS  </option>
        <option value="321">321 RoboLancers   </option>
        <option value="341">341 Miss Daisy  </option>
        <option value="365">365 Miracle Workerz  </option>
        <option value="484">484 Roboforce   </option>
        <option value="555">555 Montclair Robotics  </option>
        <option value="708">708 Hatters Robotics  </option>
        <option value="834">834 SparTechs   </option>
        <option value="1089">1089 Team Mercury  </option>
        <option value="1168">1168 Malvern Robotics  </option>
        <option value="1218">1218 SCH Robotics  </option>
        <option value="1257">1257 Parallel Universe  </option>
        <option value="1391">1391 The Metal Moose  </option>
        <option value="1403">1403 Team 1403 Cougar Robotics  </option>
        <option value="1640">1640 Sab-BOT-age  </option>
        <option value="1676">1676 The Pascack PI-oneers  </option>
        <option value="1712">1712 Dawgma   </option>
        <option value="1807">1807 Redbird Robotics  </option>
        <option value="1811">1811 FRESH  </option>
        <option value="1923">1923 The MidKnight Inventors  </option>
        <option value="2458">2458 Team Chaos  </option>
        <option value="2495">2495 Hive Mind  </option>
        <option value="2554">2554 The Warhawks   </option>
        <option value="2590">2590 Nemesis  </option>
        <option value="2607">2607 The Fighting RoboVikings  </option>
        <option value="2720">2720 Charge Robotics  </option>
        <option value="3142">3142 Aperture  </option>
        <option value="3314">3314 Mechanical Mustangs  </option>
        <option value="3637">3637 The Daleks  </option>
        <option value="4342">4342 Demon Robotics  </option>
        <option value="4361">4361 Roxbotix  </option>
        <option value="4373">4373 RooBotics  </option>
        <option value="4653">4653 Ironmen Robotics  </option>
        <option value="5181">5181 Explorer Robotics   </option>
        <option value="5401">5401 Fightin' Robotic Owls  </option>
        <option value="5684">5684 Titans of Tech - Thrive Charter School  </option>
        <option value="5895">5895 Peddie Robotics   </option>
        <option value="5992">5992 Pirates  </option>
        <option value="6808">6808 William Tennent Robotics   </option>
        <option value="7045">7045 MCCrusaders   </option>
        <option value="7414">7414 RetroRobotics   </option>
        <option value="8513">8513 Sisters 1st  </option>
        <option value="9015">9015 Questionable Engineering  </option>
        <option value="9094">9094 The Earthquakers  </option>
        <option value="9416">9416 International Operatives of World Affairs  </option>
        <option value="10143">10143 Northeast High School Philadelphia Robotics Team   </option>
        <option value="10157">10157 Roman Robotics  </option>


        
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

  

      <button type="submit" class="btn" >Submit</button>
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
  gap: 10px; 
}
</style>


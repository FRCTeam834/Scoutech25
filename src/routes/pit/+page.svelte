<br><br><br><br>
<form action="/pit" method="POST">

  <div class="center-wrapper">
      <!-- Team Dropdown -->
      <select name="pit_team_number" class="select select-bordered w-full max-w-xs" required>
          <option disabled selected>Team</option>
          <option value="834">834 Spartechs</option>
          <option value="2">Team 2</option>
          <option value="3">Team 3</option>
          <option value="4">Team 4</option>
          <option value="5">Team 5</option>
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

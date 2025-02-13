<form action="DATABASE_URL" method="POST">
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
<!---->
    <input 
      type="text" 
      name="match_number"
      placeholder="match"
      class="input place-self-center input-bordered w-full max-w-xs center"
      required
    /><br>

    <!-- Team Dropdown -->
    <select name="team_number" class="select select-bordered w-full max-w-xs" required>
      <option disabled selected>Team</option>
      <option value="1">Team 1</option>
      <option value="2">Team 2</option>
      <option value="3">Team 3</option>
      <option value="4">Team 4</option>
      <option value="5">Team 5</option>
    </select>
    <br>

    <!-- Auton Section -->
    <header>
      <h1 class="center-header">Auton</h1>
    </header>

    <label class="label cursor-pointer">
      <span class="label-text">Did they leave community?</span>
      <input type="checkbox" name="auton_left_community" class="toggle" />
    </label>

    <header>
      <h1 class="center-header">4th Reef Scored</h1>
    </header>
  
    <button type="button" class="btn">-</button>
    <input type="number" name="autonFourthCoral" value="0" class="input w-full max-w-xs" />
    <button type="button" class="btn">+</button>

    <header>
      <h1 class="center-header">3rd Reef Scored</h1>
    </header>

    <button type="button" class="btn">-</button>
    <input type="number" name="autonThirdCoral" value="0" class="input w-full max-w-xs" />
    <button type="button" class="btn">+</button>

    <header>
      <h1 class="center-header">2nd Reef Scored</h1>
    </header>

    <button type="button" class="btn">-</button>
    <input type="number" name="autonSecondCoral" value="0" class="input w-full max-w-xs" />
    <button type="button" class="btn">+</button>

    <header>
      <h1 class="center-header">1st Reef Scored</h1>
    </header>

    <button type="button" class="btn">-</button>
    <input type="number" name="autonFirstCoral" value="0" class="input w-full max-w-xs" />
    <button type="button" class="btn">+</button>

    <label class="label cursor-pointer">
      <span class="label-text">Did they move algae?</span>
      <input type="checkbox" name="auton_moved_algae" class="toggle" />
    </label>

    <header>
      <h1 class="center-header">Processor Scored</h1>
    </header>

    <button type="button" class="btn">-</button>
    <input type="number" name="autonProcessor" value="0" class="input w-full max-w-xs" />
    <button type="button" class="btn">+</button>

    <header>
      <h1 class="center-header">Algae Scored in Barge</h1>
    </header>

    <button type="button" class="btn">-</button>
    <input type="number" name="autonBarge" value="0" class="input w-full max-w-xs" />
    <button type="button" class="btn">+</button>

    <!-- Teleop Section -->
    <header>
      <h1 class="center-header">Teleop</h1>
    </header>

    <header>
      <h1 class="center-header">4th Reef Scored</h1>
    </header>

    <button type="button" class="btn">-</button>
    <input type="number" name="teleopFourthCoral" value="0" class="input w-full max-w-xs" />
    <button type="button" class="btn">+</button>

    <header>
      <h1 class="center-header">3rd Reef Scored</h1>
    </header>

    <button type="button" class="btn">-</button>
    <input type="number" name="teleopThirdCoral" value="0" class="input w-full max-w-xs" />
    <button type="button" class="btn">+</button>

    <header>
      <h1 class="center-header">2nd Reef Scored</h1>
    </header>

    <button type="button" class="btn">-</button>
    <input type="number" name="teleopSecondCoral" value="0" class="input w-full max-w-xs" />
    <button type="button" class="btn">+</button>

    <header>
      <h1 class="center-header">1st Reef Scored</h1>
    </header>

    <button type="button" class="btn">-</button>
    <input type="number" name="teleopFirstCoral" value="0" class="input w-full max-w-xs" />
    <button type="button" class="btn">+</button>

    <header>
      <h1 class="center-header">Processor Scored</h1>
    </header>

    <button type="button" class="btn">-</button>
    <input type="number" name="teleopProcessor" value="0" class="input w-full max-w-xs" />
    <button type="button" class="btn">+</button>

    <header>
      <h1 class="center-header">Algae Scored in Barge</h1>
    </header>

    <button type="button" class="btn">-</button>
    <input type="number" name="teleopBarge" value="0" class="input w-full max-w-xs" />
    <button type="button" class="btn">+</button>

    <label class="label cursor-pointer">
      <span class="label-text">Did they break?</span>
      <input type="checkbox" name="did_break" class="toggle" />
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
      <input type="checkbox" name="shallow_climb" class="toggle" />
    </label>

    <label class="label cursor-pointer">
      <span class="label-text">Did they deep climb?</span>
      <input type="checkbox" name="deep_climb" class="toggle" />
    </label>

    <header>
      <h1>Any extra notes</h1>
    </header>
    <input 
    type="notes" 
    name="notes"
    placeholder="notes?"
    class="input place-self-center input-bordered w-full max-w-xs center"
  /><br>

    <br>
    <button type="submit" class="btn">Submit</button>
  </div>
</form>

<style>
input[type="number"]::-webkit-inner-spin-button, 
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

  h1 {
    color: goldenrod;
    font-family: "Comic Sans MS", cursive;
  }

  .center-wrapper {
    text-align: center;
  }

  .center-header {
    margin-top: 20px;
  }

  .center {
    display: inline-block;
    border: 3px solid lightpink;
  }
</style>

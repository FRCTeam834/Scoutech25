import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private';

const sql = postgres(DATABASE_URL);

/**
 * Inserts match data into the database.
 * 
 * @param {string | null} name
 * @param {string | null} match_number
 * @param {string | null} team_number
 * @param {string | null} auton_left_community
 * @param {string | null} autonFourthCoral
 * @param {string | null} autonThirdCoral
 * @param {string | null} autonSecondCoral
 * @param {string | null} autonFirstCoral
 * @param {string | null} auton_moved_algae
 * @param {string | null} autonProcessor
 * @param {string | null} autonBarge
 * @param {string | null} teleopFourthCoral
 * @param {string | null} teleopThirdCoral
 * @param {string | null} teleopSecondCoral
 * @param {string | null} teleopFirstCoral
 * @param {string | null} teleopProcessor
 * @param {string | null} teleopBarge
 * @param {string | null} did_break
 * @param {string | null} defense
 * @param {string | null} shallow_climb
 * @param {string | null} deep_climb
 * @param {string | null} notes
 * @param {string | null} did_attempt_climb
 */
export async function insertData(
  name,
  match_number,
  team_number,
  auton_left_community,
  autonFourthCoral,
  autonThirdCoral,
  autonSecondCoral,
  autonFirstCoral,
  auton_moved_algae,
  autonProcessor,
  autonBarge,
  teleopFourthCoral,
  teleopThirdCoral,
  teleopSecondCoral,
  teleopFirstCoral,
  teleopProcessor,
  teleopBarge,
  did_break,
  defense,
  shallow_climb,
  deep_climb,
  did_attempt_climb,
  notes
) {
  // Ensure values are null instead of undefined
  name = name ?? null;
  match_number = match_number ? parseInt(match_number) : null;
  team_number = team_number ? parseInt(team_number) : null;
  auton_left_community = auton_left_community ?? null;
  autonFourthCoral = autonFourthCoral ?? null;
  autonThirdCoral = autonThirdCoral ?? null;
  autonSecondCoral = autonSecondCoral ?? null;
  autonFirstCoral = autonFirstCoral ?? null;
  auton_moved_algae = auton_moved_algae ?? null;
  autonProcessor = autonProcessor ?? null;
  autonBarge = autonBarge ?? null;
  teleopFourthCoral = teleopFourthCoral ?? null;
  teleopThirdCoral = teleopThirdCoral ?? null;
  teleopSecondCoral = teleopSecondCoral ?? null;
  teleopFirstCoral = teleopFirstCoral ?? null;
  teleopProcessor = teleopProcessor ?? null;
  teleopBarge = teleopBarge ?? null;
  did_break = did_break ?? null;
  defense = defense ?? null;
  shallow_climb = shallow_climb ?? null;
  deep_climb = deep_climb ?? null;
  did_attempt_climb = did_attempt_climb ?? null
  notes = notes ?? null;

  // Debugging log to check inserted values
  console.log("Inserting Data:", {
    name,
    match_number,
    team_number,
    auton_left_community,
    autonFourthCoral,
    autonThirdCoral,
    autonSecondCoral,
    autonFirstCoral,
    auton_moved_algae,
    autonProcessor,
    autonBarge,
    teleopFourthCoral,
    teleopThirdCoral,
    teleopSecondCoral,
    teleopFirstCoral,
    teleopProcessor,
    teleopBarge,
    did_break,
    defense,
    shallow_climb,
    deep_climb,
    notes,
  });

  const post = await sql`
    INSERT INTO lehigh (
      name, match_number, team_number, 
      auton_left_community, autonFourthCoral, autonThirdCoral, autonSecondCoral, autonFirstCoral, auton_moved_algae, autonProcessor, autonBarge,
      teleopFourthCoral, teleopThirdCoral, teleopSecondCoral, teleopFirstCoral, teleopProcessor, teleopBarge,
      did_break, defense, shallow_climb, deep_climb,did_attempt_climb, notes
    ) VALUES (
      ${name}, ${match_number}, ${team_number}, 
      ${auton_left_community}, ${autonFourthCoral}, ${autonThirdCoral}, ${autonSecondCoral}, ${autonFirstCoral}, ${auton_moved_algae}, ${autonProcessor}, ${autonBarge},
      ${teleopFourthCoral}, ${teleopThirdCoral}, ${teleopSecondCoral}, ${teleopFirstCoral}, ${teleopProcessor}, ${teleopBarge},
      ${did_break}, ${defense}, ${shallow_climb}, ${deep_climb},${did_attempt_climb}, ${notes}
    )
  `;

  return post;
}

/**
 * Inserts pit data into the database.
 * 
 * @param {string | null} pit_team_number
 * @param {string | null} pit_width
 * @param {string | null} pit_length
 * @param {string | null} pit_auton_starting_position
 * @param {string | null} pit_fourthcoral
 * @param {string | null} pit_thirdcoral
 * @param {string | null} pit_secondcoral
 * @param {string | null} pit_firstcoral
 * @param {string | null} pit_getcoral
 * @param {string | null} pit_algae
 * @param {string | null} pit_barge
 * @param {string | null} pit_processor
 * @param {string | null} pit_climb
 * @param {string | null} pit_notes
 * @param {string | null} pit_left_notes
 * @param {string | null} pit_middle_notes
 * @param {string | null} pit_right_notes
 * @param {string | null} pit_defense_notes
 */
export async function pit_insertData(
  pit_team_number,
  pit_width,
  pit_length,
  pit_auton_starting_position,
  pit_fourthcoral,
  pit_thirdcoral,
  pit_secondcoral,
  pit_firstcoral,
  pit_getcoral,
  pit_algae,
  pit_barge ,
  pit_processor ,
  pit_left_notes,
  pit_middle_notes,
  pit_right_notes,
  pit_climb,
  pit_notes,
  pit_defense_notes,
  
) {
  // Ensure values are null instead of undefined
  pit_team_number = pit_team_number ?? null;
  pit_left_notes = pit_left_notes ?? null;
  pit_middle_notes = pit_middle_notes ?? null;
  pit_right_notes = pit_right_notes ?? null;
  pit_width = pit_width ?? null;
  pit_length = pit_length ?? null;
  pit_auton_starting_position = pit_auton_starting_position ?? null;
  pit_fourthcoral = pit_fourthcoral ?? null;
  pit_thirdcoral = pit_thirdcoral ?? null;
  pit_secondcoral = pit_secondcoral ?? null;
  pit_firstcoral = pit_firstcoral ?? null;
  pit_getcoral = pit_getcoral ?? null;
  pit_algae = pit_algae ?? null;
  pit_barge = pit_barge ?? null;
  pit_processor = pit_processor ?? null;
  pit_climb = pit_climb ?? null;
  pit_notes = pit_notes ?? null;
  pit_defense_notes = pit_defense_notes ?? null;

  // Debugging log to check inserted values
  console.log("Inserting Pit Data:", {
    pit_team_number,
    pit_width,
    pit_length,
    pit_auton_starting_position,
    pit_fourthcoral,
    pit_thirdcoral,
    pit_secondcoral,
    pit_firstcoral,
    pit_getcoral,
    pit_algae,
    pit_barge,
    pit_processor,
    pit_climb,
    pit_notes,
  });

  const post = await sql`
    INSERT INTO pit_lehigh (
      pit_team_number, pit_width, pit_length, 
      pit_auton_starting_position,pit_left_notes,pit_middle_notes,pit_right_notes, pit_fourthcoral, pit_thirdcoral, pit_secondcoral, pit_firstcoral, pit_getcoral, pit_algae,
      pit_barge, pit_processor, pit_climb, pit_notes,pit_defense_notes
    ) VALUES (
      ${pit_team_number}, ${pit_width}, ${pit_length}, 
      ${pit_auton_starting_position},${pit_left_notes},${pit_middle_notes},${pit_right_notes}, ${pit_fourthcoral}, ${pit_thirdcoral}, ${pit_secondcoral}, ${pit_firstcoral}, ${pit_getcoral}, ${pit_algae},
      ${pit_barge}, ${pit_processor}, ${pit_climb}, ${pit_notes},${pit_defense_notes}
    )
  `;

  return post;
}
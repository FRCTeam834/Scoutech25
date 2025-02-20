import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private';


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
      INSERT INTO test (
        name, match_number, team_number, 
        auton_left_community, autonFourthCoral, autonThirdCoral, autonSecondCoral, autonFirstCoral, auton_moved_algae, autonProcessor, autonBarge,
        teleopFourthCoral, teleopThirdCoral, teleopSecondCoral, teleopFirstCoral, teleopProcessor, teleopBarge,
        did_break, defense, shallow_climb, deep_climb, notes
      ) VALUES (
        ${name}, ${match_number}, ${team_number}, 
        ${auton_left_community}, ${autonFourthCoral}, ${autonThirdCoral}, ${autonSecondCoral}, ${autonFirstCoral}, ${auton_moved_algae}, ${autonProcessor}, ${autonBarge},
        ${teleopFourthCoral}, ${teleopThirdCoral}, ${teleopSecondCoral}, ${teleopFirstCoral}, ${teleopProcessor}, ${teleopBarge},
        ${did_break}, ${defense}, ${shallow_climb}, ${deep_climb}, ${notes}
      )
    `;
  
    return post;
  }
  
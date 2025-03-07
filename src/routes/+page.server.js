/** @satisfies {import('./$types').Actions} */
import { EFC_9984 } from '$env/static/private';
import * as db from '$lib/server/database.js';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('name');
        const match_number = parseInt(data.get('match_number')) || null;
        const team_number = parseInt(data.get("team_number")) || null;
        const autonFourthCoral = data.get("autonFourthCoral") ?? null;
        const autonThirdCoral = data.get("autonThirdCoral") ?? null;
        const autonSecondCoral = data.get("autonSecondCoral") ?? null;
        const autonFirstCoral = data.get("autonFirstCoral") ?? null;

        // Convert boolean values to integers (1 or 0)
        const auton_moved_algae = data.get("auton_moved_algae") === "true" ? true : 0;
        const auton_left_community = data.get("auton_left_community") === "1" ? true : 0;
        const autonProcessor = data.get("autonProcessor") === "1" ? 1 : 0;
        const autonBarge = data.get("autonBarge") === "1" ? 1 : 0;

        const teleopFourthCoral = data.get("teleopFourthCoral") ?? null;
        const teleopThirdCoral = data.get("teleopThirdCoral") ?? null;
        const teleopSecondCoral = data.get("teleopSecondCoral") ?? null;
        const teleopFirstCoral = data.get("teleopFirstCoral") ?? null;

        const teleopProcessor = data.get("teleopProcessor");
        const teleopBarge = data.get("teleopBarge");
        const did_break = data.get("did_break") === "1" ? true : 0;
        const defense = data.get("defense") ?? null;

        const shallow_climb = data.get("shallow_climb") === "1" ? true : 0;
        const deep_climb = data.get("deep_climb") === "1" ? true : 0;
        const notes = data.get("notes") ?? null;

        // Debugging logs
        console.log(data.get("did_break"));
        console.log("Form Data:");
        console.log("Name:", name);
        console.log("Match Number:", match_number);
        console.log("Team Number:", team_number);
        console.log("Auton Left Community:", auton_left_community);
        console.log("Auton Fourth Coral:", autonFourthCoral);
        console.log("Auton Third Coral:", autonThirdCoral);
        console.log("Auton Second Coral:", autonSecondCoral);
        console.log("Auton First Coral:", autonFirstCoral);
        console.log("Auton Moved Algae:", auton_moved_algae);
        console.log("Auton Processor:", autonProcessor);
        console.log("Auton Barge:", autonBarge);
        console.log("Teleop Fourth Coral:", teleopFourthCoral);
        console.log("Teleop Third Coral:", teleopThirdCoral);
        console.log("Teleop Second Coral:", teleopSecondCoral);
        console.log("Teleop First Coral:", teleopFirstCoral);
        console.log("Teleop Processor:", teleopProcessor);
        console.log("Teleop Barge:", teleopBarge);
        console.log("Did Break:", did_break);
        console.log("Defense:", defense);
        console.log("Shallow Climb:", shallow_climb);
        console.log("Deep Climb:", deep_climb);
        console.log("Notes:", notes);

        return {
            // @ts-ignore
            post: await db.insertData(
                name, match_number, team_number, auton_left_community,
                autonFourthCoral, autonThirdCoral, autonSecondCoral, autonFirstCoral,
                auton_moved_algae, autonProcessor, autonBarge,
                teleopFourthCoral, teleopThirdCoral, teleopSecondCoral, teleopFirstCoral,
                teleopProcessor, teleopBarge, did_break, defense,
                shallow_climb, deep_climb, notes
            )
        };
    }
};

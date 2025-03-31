import * as db from '$lib/server/database.js';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        
        // Extract data from the form
        const pit_team_number = parseInt(data.get('pit_team_number')) || null;
        const pit_width = parseInt(data.get('pit_width')) || null;
        const pit_length = parseInt(data.get('pit_length')) || null;
        const pit_auton_starting_position = data.get('pit_auton_starting_position');
        
        // Convert checkbox values to integers (1 or 0)
        const pit_fourthcoral = data.get('pit_fourthcoral') === "1" ? true : 0;
        const pit_thirdcoral = data.get('pit_thirdcoral') === "1" ? true : 0;
        const pit_secondcoral = data.get('pit_secondcoral') === "1" ? true : 0;
        const pit_firstcoral = data.get('pit_firstcoral') === "1" ? true : 0;
        
        const pit_getcoral = data.get('pit_getcoral') || null;
        const pit_algae = data.get('pit_algae') === "1" ? true : 0;
        const pit_barge = data.get('pit_barge') === "1" ? true : 0;
        const pit_processor = data.get('pit_processor') === "1" ? true : 0;
        const pit_climb = data.get('pit_climb') || null;
        const auton_left_notes = data.get('pit_left_notes') || null;
        const auton_middle_notes = data.get('pit_left_notes') || null;
        const auton_right_notes = data.get('pit_left_notes') || null;
        const pit_notes = data.get('pit_notes') || null;
        const pit_defense_notes = data.get('pit_defense_notes') || null;

        // Log the received data (for debugging)
        console.log("Form Data:", {
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
            auton_left_notes,
            auton_middle_notes,
            auton_right_notes,
            pit_defense_notes,
        });
    }
}
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
        const pit_fourthcoral = data.get('pit_fourthcoral') === 'true' ? 1 : 0;
        const pit_thirdcoral = data.get('pit_thirdcoral') === 'true' ? 1 : 0;
        const pit_secondcoral = data.get('pit_secondcoral') === 'true' ? 1 : 0;
        const pit_firstcoral = data.get('pit_firstcoral') === 'true' ? 1 : 0;
        
        const pit_getcoral = data.get('pit_getcoral') || null;
        const pit_algae = data.get('pit_algae') === 'true' ? 1 : 0;
        const pit_barge = data.get('pit_barge') === 'true' ? 1 : 0;
        const pit_processor = data.get('pit_processor') === 'true' ? 1 : 0;
        const pit_getalgae = data.get('pit_getalgae') || null;
        const pit_notes = data.get('pit_notes') || null;

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
            pit_getalgae,
            pit_notes
        });

        // Call your database insertion function
        return {
            post: await db.pit_insertData(
                pit_team_number, pit_width, pit_length, pit_auton_starting_position,
                pit_fourthcoral, pit_thirdcoral, pit_secondcoral, pit_firstcoral,
                pit_getcoral, pit_algae, pit_barge, pit_processor,
                pit_getalgae, pit_notes
            )
        };
    }
};

/** @satisfies {import('./$types').Actions} */
import * as db from '$lib/server/database.js';


export const actions = {
	default: async ({ request }) => {
        const data = await request.formData();
		const name = data.get('name');
		const match_number = data.get('match_number');
        const team_number = data.get("team_number");        
        console.log(name)
        console.log(match_number)
        console.log(team_number)


        return {
            // @ts-ignore
            post: await db.insertData(name, match_number,team_number)
        };


        //  await db.insertData(name, match_number)
		// TODO log the user in
	}
};
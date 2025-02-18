import postgres from 'postgres';
import { DATABASE_URL } from '$env/static/private';

// @ts-ignore
const sql = postgres(DATABASE_URL, {
	ssl: 'require'
});
export default sql

/**
 * @param {string | null} name
 * @param {string | null} match_number
 * @param {string | null} team_number
 */
export async function insertData( name, match_number, team_number ) {
  const post = await sql`
    insert into test
      (name, match_number,team_number)
    values
      (${ name }, ${ parseInt(match_number) }, ${ pareseInt(team_number) })
  `

  return post
}

export async function insertPitData()   {
}
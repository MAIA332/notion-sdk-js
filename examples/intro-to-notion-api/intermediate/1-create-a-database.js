import { Client } from "@notionhq/client"
import { config } from "dotenv"

config()

const pageId = "a6c2fbb2eebb4e46b024e2f84c4ce27d" //process.env.NOTION_PAGE_ID
const apiKey = "secret_uFefdsaC9XjWt9hdl4r0UlEJudwVnnoPuk13KcJjRIt"

const notion = new Client({ auth: apiKey })

/* 
---------------------------------------------------------------------------
*/

/**
 * Resources:
 * - Create a database endpoint (notion.databases.create(): https://developers.notion.com/reference/create-a-database)
 * - Working with databases guide: https://developers.notion.com/docs/working-with-databases
 */

async function main() {
  // Create a new database
  const newDatabase = await notion.databases.create({
    parent: {
      type: "page_id",
      page_id: pageId,
    },
    title: [
      {
        type: "text",
        text: {
          content: "New database name",
        },
      },
    ],
    properties: {
      // These properties represent columns in the database (i.e. its schema)
      "Grocery item": {
        type: "title",
        title: {},
      },
      Price: {
        type: "number",
        number: {
          format: "dollar",
        },
      },
      "Last ordered": {
        type: "date",
        date: {},
      },
    },
  })

  // Print the new database response
  console.log(newDatabase)
}

main()

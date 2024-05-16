import { Client } from "@notionhq/client"
import { config } from "dotenv"
import { propertiesForNewPages } from "./sampleData.js"


config()

const pageId = "a6c2fbb2eebb4e46b024e2f84c4ce27d" //process.env.NOTION_PAGE_ID
const apiKey = "secret_uFefdsaC9XjWt9hdl4r0UlEJudwVnnoPuk13KcJjRIt"

const notion = new Client({ auth: apiKey })

async function addNotionPageToDatabase(databaseId, pageProperties) {
    const newPage = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: pageProperties,
    })
    console.log(newPage)
}

const databaseId = "e581751e-bc04-4ab5-bb91-0bbb40a861cd"

console.log("Adding new pages...")
for (let i = 0; i < propertiesForNewPages.length; i++) {
  // Add a few new pages to the database that was just created
  await addNotionPageToDatabase(databaseId, propertiesForNewPages[i])
}

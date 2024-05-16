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
 * - Appending block children endpoint (notion.blocks.children.append(): https://developers.notion.com/reference/patch-block-children)
 * - Rich text options: https://developers.notion.com/reference/rich-text
 * - Working with page content guide: https://developers.notion.com/docs/working-with-page-content
 */

async function main() {
  const blockId = pageId // Blocks can be appended to other blocks *or* pages. Therefore, a page ID can be used for the block_id parameter
  const linkedTextResponse = await notion.blocks.children.append({
    block_id: blockId,
    // Pass an array of blocks to append to the page: https://developers.notion.com/reference/block#block-type-objects
    children: [
      {
        heading_3: {
          rich_text: [
            {
              text: {
                content: "Tuscan  kale", // This is the text that will be displayed in Notion
              },
            },
          ],
        },
      },
      {
        paragraph: {
          rich_text: [
            {
              text: {
                content:
                  "Tuscan  kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                link: {
                  // Include a url to make the paragraph a link in Notion
                  url: "https://en.wikipedia.org/wiki/Kale",
                },
              },
            },
          ],
        },
      },
    ],
  })

  // Print the new block(s) response
  console.log(linkedTextResponse)
}

main()

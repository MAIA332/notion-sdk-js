export const propertiesForNewPages = [
  {
    "Grocery item": {
      type: "title",
      title: [{ type: "text", text: { content: "Tomatoes" } }],
    },
    Price: {
      type: "number",
      number: 1.49,
    },
    "Last ordered": {
      type: "date",
      date: { start: "2023-05-11" },
    },
    "Project owner": {
      "people": [
        { 
        "object": "user",
        "id": "a3bc6533-697c-4b50-9fa2-0418f09a99bc"
        }
    ]
    },
  },
  {
    "Grocery item": {
      type: "title",
      title: [{ type: "text", text: { content: "Lettuce" } }],
    },
    Price: {
      type: "number",
      number: 3.99,
    },
    "Last ordered": {
      type: "date",
      date: { start: "2023-05-04" },
    },
  },
  {
    "Grocery item": {
      type: "title",
      title: [{ type: "text", text: { content: "Oranges" } }],
    },
    Price: {
      type: "number",
      number: 0.99,
    },
    "Last ordered": {
      type: "date",
      date: { start: "2022-04-29" },
    },
    "Project owner": {
      "people": [
        { 
        "object": "user",
        "id": "dda5f0bb-d435-4190-9ef6-27198fa0b735"
        }
    ]
    },
  },
]

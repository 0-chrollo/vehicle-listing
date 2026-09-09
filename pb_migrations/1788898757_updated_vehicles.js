/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("khzt33h5fyp6uux")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zsn4jpeu",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zokrewjr",
    "name": "transmission",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Manual",
        "Automatic"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("khzt33h5fyp6uux")

  // remove
  collection.schema.removeField("zsn4jpeu")

  // remove
  collection.schema.removeField("zokrewjr")

  return dao.saveCollection(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("khzt33h5fyp6uux")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jejgnvar",
    "name": "fuel_type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Petrol",
        "Diesel",
        "Hybrid",
        "Electric"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("khzt33h5fyp6uux")

  // remove
  collection.schema.removeField("jejgnvar")

  return dao.saveCollection(collection)
})

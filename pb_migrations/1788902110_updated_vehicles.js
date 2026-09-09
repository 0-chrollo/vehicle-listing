/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("khzt33h5fyp6uux")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "blydzwbs",
    "name": "features",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 14,
      "values": [
        "Bluetooth",
        "Navigation",
        "Reverse Camera",
        "Cruise Control",
        "Air Conditioning",
        "Electric Windows",
        "Alarm/Immobiliser",
        "Leather Seats",
        "Sunroof",
        "Parking Sensors",
        "ABS",
        "Airbags",
        "Alloy Wheels",
        "Tow Bar"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("khzt33h5fyp6uux")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "blydzwbs",
    "name": "features",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Bluetooth",
        "Navigation",
        "Reverse Camera",
        "Cruise Control",
        "Air Conditioning",
        "Electric Windows",
        "Alarm/Immobiliser",
        "Leather Seats",
        "Sunroof",
        "Parking Sensors",
        "ABS",
        "Airbags",
        "Alloy Wheels",
        "Tow Bar"
      ]
    }
  }))

  return dao.saveCollection(collection)
})

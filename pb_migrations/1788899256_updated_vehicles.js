/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("khzt33h5fyp6uux")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gocnoctl",
    "name": "body_type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Sedan",
        "Hatchback",
        "SUV",
        "Bakkie",
        "Coupe",
        "Hatchback"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fdugoowb",
    "name": "colour",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yd1lufbc",
    "name": "images",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 10,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yhzjj4ap",
    "name": "youtube_link",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("khzt33h5fyp6uux")

  // remove
  collection.schema.removeField("gocnoctl")

  // remove
  collection.schema.removeField("fdugoowb")

  // remove
  collection.schema.removeField("blydzwbs")

  // remove
  collection.schema.removeField("yd1lufbc")

  // remove
  collection.schema.removeField("yhzjj4ap")

  return dao.saveCollection(collection)
})

#!/bin/bash

# GET
curl localhost:3000

# POST
curl -X POST --data '{"name":"Heviane", "lastName":"Bastos"}' localhost:3000

# DELETE
curl -X DELETE localhost:3000

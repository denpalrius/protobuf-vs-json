#!/bin/bash

# Define the path to the protobuf file
PROTO_FILE="planets.proto"

# Define the output directory for the generated JavaScript code
OUT_DIR="$(dirname "$PROTO_FILE")"

# Run the protoc compiler to generate JavaScript classes
protoc --js_out=import_style=commonjs,binary:"$OUT_DIR" "$PROTO_FILE"

echo "JavaScript classes have been generated in $OUT_DIR/$PROTO_FILE"

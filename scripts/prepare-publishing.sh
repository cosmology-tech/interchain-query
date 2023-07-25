#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

DIRS=(amino capability confio cosmos cosmos_proto cosmwasm gogoproto google ibc ics23 tendermint)
FILES=(
  binary.d.ts
  binary.mjs
  binary.js
  binary.js.map
  extern.d.ts
  extern.mjs
  extern.js
  extern.js.map
  helpers.d.ts
  helpers.mjs
  helpers.js
  helpers.js.map
  hooks.d.ts
  hooks.mjs
  hooks.js
  hooks.js.map
  index.d.ts
  index.mjs
  index.js
  index.js.map
  react-query.d.ts
  react-query.mjs
  react-query.js
  react-query.js.map
  utf8.d.ts
  utf8.mjs
  utf8.js
  utf8.js.map
  varint.d.ts
  varint.mjs
  varint.js
  varint.js.map
)

for dir in "${DIRS[@]}"; do
  rm -rf "$dir"
  cp -R "./dist/codegen/$dir" ./
done

for f in "${FILES[@]}"; do
  rm -rf "$f"
  cp "./dist/codegen/$f" ./
done

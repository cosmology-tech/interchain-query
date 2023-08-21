import { join } from 'path';
import telescope from '@cosmology/telescope';
import { sync as rimraf } from 'rimraf';
import { AMINO_MAP } from './aminos';

const protoDirs = [
  join(__dirname, '/../ics23-repo/proto'),
  join(__dirname, '/../cosmos-sdk/proto'),
  join(__dirname, '/../ibc-go/proto'),
  join(__dirname, '/../wasmd/proto'),
  // join(__dirname, '/../osmosis/proto'),
  join(__dirname, '/../proto')
];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    env: 'v-next',
    tsDisable: {
      patterns: ['**/tx.registry.ts']
    },
    interfaces: {
      enabled: false,
      useUnionTypes: false
    },
    prototypes: {
      enabled: true,
      parser: {
        keepCase: false
      },
      excluded: {
        packages: ['cosmos.autocli.v1']
      },
      addAminoTypeToObjects: true,
      addTypeUrlToObjects: true,
      typingsFormat: {
        customTypes: {
          useCosmosSDKDec: true
        },
        num64: 'bigint',
        useDeepPartial: true,
        useExact: false,
        timestamp: 'date',
        duration: 'duration'
      },

      methods: {
        encode: true,
        decode: true,
        fromJSON: true,
        toJSON: true,
        fromPartial: true,
        toSDK: true,
        fromSDK: true,
        //
        toAmino: true,
        fromAmino: true,
        fromProto: true,
        toProto: true
      },
      includePackageVar: false,
      fieldDefaultIsOptional: true,
      useOptionalNullable: true,
      allowUndefinedTypes: true
    },
    reactQuery: {
      enabled: true
    },
    aminoEncoding: {
      enabled: true,
      useRecursiveV2encoding: true
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      enabled: true,
      camelCase: true
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });

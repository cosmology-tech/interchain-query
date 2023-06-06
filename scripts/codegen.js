import { join } from 'path';
import telescope from '@osmonauts/telescope';
import { sync as rimraf } from 'rimraf';
import { AMINO_MAP } from './aminos';

const protoDirs = [
  join(__dirname, '/../cosmos-sdk/proto'),
  join(__dirname, '/../wasmd/proto'),
  join(__dirname, '/../proto')
];
const outPath = join(__dirname, '../src/codegen');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    tsDisable: {
      files: [
        'cosmos/authz/v1beta1/tx.amino.ts',
        'cosmos/staking/v1beta1/tx.amino.ts'
      ]
    },
    interfaces: {
      enabled: true,
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
        useDeepPartial: false,
        useExact: false,
        timestamp: 'timestamp',
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
      fieldDefaultIsOptional: false,
      useOptionalNullable: true,
      allowUndefinedTypes: false
    },

    aminoEncoding: {
      enabled: true,
      useRecursiveV2encoding: true,
      exceptions: AMINO_MAP
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

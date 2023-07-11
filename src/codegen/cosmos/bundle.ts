import * as _3 from "./app/v1alpha1/config";
import * as _4 from "./app/v1alpha1/module";
import * as _5 from "./app/v1alpha1/query";
import * as _6 from "./auth/v1beta1/auth";
import * as _7 from "./auth/v1beta1/genesis";
import * as _8 from "./auth/v1beta1/query";
import * as _9 from "./authz/v1beta1/authz";
import * as _10 from "./authz/v1beta1/event";
import * as _11 from "./authz/v1beta1/genesis";
import * as _12 from "./authz/v1beta1/query";
import * as _13 from "./authz/v1beta1/tx";
import * as _14 from "./bank/v1beta1/authz";
import * as _15 from "./bank/v1beta1/bank";
import * as _16 from "./bank/v1beta1/genesis";
import * as _17 from "./bank/v1beta1/query";
import * as _18 from "./bank/v1beta1/tx";
import * as _19 from "./base/abci/v1beta1/abci";
import * as _20 from "./base/kv/v1beta1/kv";
import * as _21 from "./base/query/v1beta1/pagination";
import * as _22 from "./base/reflection/v1beta1/reflection";
import * as _23 from "./base/reflection/v2alpha1/reflection";
import * as _24 from "./base/snapshots/v1beta1/snapshot";
import * as _25 from "./base/store/v1beta1/commit_info";
import * as _26 from "./base/store/v1beta1/listening";
import * as _27 from "./base/tendermint/v1beta1/query";
import * as _28 from "./base/v1beta1/coin";
import * as _29 from "./capability/v1beta1/capability";
import * as _30 from "./capability/v1beta1/genesis";
import * as _31 from "./crisis/v1beta1/genesis";
import * as _32 from "./crisis/v1beta1/tx";
import * as _33 from "./crypto/ed25519/keys";
import * as _34 from "./crypto/hd/v1/hd";
import * as _35 from "./crypto/keyring/v1/record";
import * as _36 from "./crypto/multisig/keys";
import * as _37 from "./crypto/secp256k1/keys";
import * as _38 from "./crypto/secp256r1/keys";
import * as _39 from "./distribution/v1beta1/distribution";
import * as _40 from "./distribution/v1beta1/genesis";
import * as _41 from "./distribution/v1beta1/query";
import * as _42 from "./distribution/v1beta1/tx";
import * as _43 from "./evidence/v1beta1/evidence";
import * as _44 from "./evidence/v1beta1/genesis";
import * as _45 from "./evidence/v1beta1/query";
import * as _46 from "./evidence/v1beta1/tx";
import * as _47 from "./feegrant/v1beta1/feegrant";
import * as _48 from "./feegrant/v1beta1/genesis";
import * as _49 from "./feegrant/v1beta1/query";
import * as _50 from "./feegrant/v1beta1/tx";
import * as _51 from "./genutil/v1beta1/genesis";
import * as _52 from "./gov/v1/genesis";
import * as _53 from "./gov/v1/gov";
import * as _54 from "./gov/v1/query";
import * as _55 from "./gov/v1/tx";
import * as _56 from "./gov/v1beta1/genesis";
import * as _57 from "./gov/v1beta1/gov";
import * as _58 from "./gov/v1beta1/query";
import * as _59 from "./gov/v1beta1/tx";
import * as _60 from "./group/v1/events";
import * as _61 from "./group/v1/genesis";
import * as _62 from "./group/v1/query";
import * as _63 from "./group/v1/tx";
import * as _64 from "./group/v1/types";
import * as _65 from "./mint/v1beta1/genesis";
import * as _66 from "./mint/v1beta1/mint";
import * as _67 from "./mint/v1beta1/query";
import * as _68 from "./msg/v1/msg";
import * as _69 from "./nft/v1beta1/event";
import * as _70 from "./nft/v1beta1/genesis";
import * as _71 from "./nft/v1beta1/nft";
import * as _72 from "./nft/v1beta1/query";
import * as _73 from "./nft/v1beta1/tx";
import * as _74 from "./orm/v1/orm";
import * as _75 from "./orm/v1alpha1/schema";
import * as _76 from "./params/v1beta1/params";
import * as _77 from "./params/v1beta1/query";
import * as _78 from "./slashing/v1beta1/genesis";
import * as _79 from "./slashing/v1beta1/query";
import * as _80 from "./slashing/v1beta1/slashing";
import * as _81 from "./slashing/v1beta1/tx";
import * as _82 from "./staking/v1beta1/authz";
import * as _83 from "./staking/v1beta1/genesis";
import * as _84 from "./staking/v1beta1/query";
import * as _85 from "./staking/v1beta1/staking";
import * as _86 from "./staking/v1beta1/tx";
import * as _87 from "./tx/signing/v1beta1/signing";
import * as _88 from "./tx/v1beta1/service";
import * as _89 from "./tx/v1beta1/tx";
import * as _90 from "./upgrade/v1beta1/query";
import * as _91 from "./upgrade/v1beta1/tx";
import * as _92 from "./upgrade/v1beta1/upgrade";
import * as _93 from "./vesting/v1beta1/tx";
import * as _94 from "./vesting/v1beta1/vesting";
import * as _114 from "./authz/v1beta1/tx.amino";
import * as _115 from "./bank/v1beta1/tx.amino";
import * as _116 from "./crisis/v1beta1/tx.amino";
import * as _117 from "./distribution/v1beta1/tx.amino";
import * as _118 from "./evidence/v1beta1/tx.amino";
import * as _119 from "./feegrant/v1beta1/tx.amino";
import * as _120 from "./gov/v1/tx.amino";
import * as _121 from "./gov/v1beta1/tx.amino";
import * as _122 from "./group/v1/tx.amino";
import * as _123 from "./nft/v1beta1/tx.amino";
import * as _124 from "./slashing/v1beta1/tx.amino";
import * as _125 from "./staking/v1beta1/tx.amino";
import * as _126 from "./upgrade/v1beta1/tx.amino";
import * as _127 from "./vesting/v1beta1/tx.amino";
import * as _128 from "./authz/v1beta1/tx.registry";
import * as _129 from "./bank/v1beta1/tx.registry";
import * as _130 from "./crisis/v1beta1/tx.registry";
import * as _131 from "./distribution/v1beta1/tx.registry";
import * as _132 from "./evidence/v1beta1/tx.registry";
import * as _133 from "./feegrant/v1beta1/tx.registry";
import * as _134 from "./gov/v1/tx.registry";
import * as _135 from "./gov/v1beta1/tx.registry";
import * as _136 from "./group/v1/tx.registry";
import * as _137 from "./nft/v1beta1/tx.registry";
import * as _138 from "./slashing/v1beta1/tx.registry";
import * as _139 from "./staking/v1beta1/tx.registry";
import * as _140 from "./upgrade/v1beta1/tx.registry";
import * as _141 from "./vesting/v1beta1/tx.registry";
import * as _142 from "./app/v1alpha1/query.rpc.Query";
import * as _143 from "./auth/v1beta1/query.rpc.Query";
import * as _144 from "./authz/v1beta1/query.rpc.Query";
import * as _145 from "./bank/v1beta1/query.rpc.Query";
import * as _146 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _147 from "./distribution/v1beta1/query.rpc.Query";
import * as _148 from "./evidence/v1beta1/query.rpc.Query";
import * as _149 from "./feegrant/v1beta1/query.rpc.Query";
import * as _150 from "./gov/v1/query.rpc.Query";
import * as _151 from "./gov/v1beta1/query.rpc.Query";
import * as _152 from "./group/v1/query.rpc.Query";
import * as _153 from "./mint/v1beta1/query.rpc.Query";
import * as _154 from "./nft/v1beta1/query.rpc.Query";
import * as _155 from "./params/v1beta1/query.rpc.Query";
import * as _156 from "./slashing/v1beta1/query.rpc.Query";
import * as _157 from "./staking/v1beta1/query.rpc.Query";
import * as _158 from "./tx/v1beta1/service.rpc.Service";
import * as _159 from "./upgrade/v1beta1/query.rpc.Query";
import * as _160 from "./authz/v1beta1/tx.rpc.msg";
import * as _161 from "./bank/v1beta1/tx.rpc.msg";
import * as _162 from "./crisis/v1beta1/tx.rpc.msg";
import * as _163 from "./distribution/v1beta1/tx.rpc.msg";
import * as _164 from "./evidence/v1beta1/tx.rpc.msg";
import * as _165 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _166 from "./gov/v1/tx.rpc.msg";
import * as _167 from "./gov/v1beta1/tx.rpc.msg";
import * as _168 from "./group/v1/tx.rpc.msg";
import * as _169 from "./nft/v1beta1/tx.rpc.msg";
import * as _170 from "./slashing/v1beta1/tx.rpc.msg";
import * as _171 from "./staking/v1beta1/tx.rpc.msg";
import * as _172 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _173 from "./vesting/v1beta1/tx.rpc.msg";
import * as _174 from "./rpc.query";
import * as _175 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._142
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._143
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._9,
      ..._10,
      ..._11,
      ..._12,
      ..._13,
      ..._114,
      ..._128,
      ..._144,
      ..._160
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._115,
      ..._129,
      ..._145,
      ..._161
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._19
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._20
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._21
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._22
      };
      export const v2alpha1 = {
        ..._23
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._24
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._25,
        ..._26
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._27,
        ..._146
      };
    }
    export const v1beta1 = {
      ..._28
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._29,
      ..._30
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._116,
      ..._130,
      ..._162
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._33
    };
    export namespace hd {
      export const v1 = {
        ..._34
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._35
      };
    }
    export const multisig = {
      ..._36
    };
    export const secp256k1 = {
      ..._37
    };
    export const secp256r1 = {
      ..._38
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._39,
      ..._40,
      ..._41,
      ..._42,
      ..._117,
      ..._131,
      ..._147,
      ..._163
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
      ..._46,
      ..._118,
      ..._132,
      ..._148,
      ..._164
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._47,
      ..._48,
      ..._49,
      ..._50,
      ..._119,
      ..._133,
      ..._149,
      ..._165
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._51
    };
  }
  export namespace gov {
    export const v1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
      ..._120,
      ..._134,
      ..._150,
      ..._166
    };
    export const v1beta1 = {
      ..._56,
      ..._57,
      ..._58,
      ..._59,
      ..._121,
      ..._135,
      ..._151,
      ..._167
    };
  }
  export namespace group {
    export const v1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._63,
      ..._64,
      ..._122,
      ..._136,
      ..._152,
      ..._168
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._153
    };
  }
  export namespace msg {
    export const v1 = {
      ..._68
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._69,
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._123,
      ..._137,
      ..._154,
      ..._169
    };
  }
  export namespace orm {
    export const v1 = {
      ..._74
    };
    export const v1alpha1 = {
      ..._75
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._155
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._80,
      ..._81,
      ..._124,
      ..._138,
      ..._156,
      ..._170
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._82,
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._125,
      ..._139,
      ..._157,
      ..._171
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._87
      };
    }
    export const v1beta1 = {
      ..._88,
      ..._89,
      ..._158
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._90,
      ..._91,
      ..._92,
      ..._126,
      ..._140,
      ..._159,
      ..._172
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._93,
      ..._94,
      ..._127,
      ..._141,
      ..._173
    };
  }
  export const ClientFactory = {
    ..._174,
    ..._175
  };
}
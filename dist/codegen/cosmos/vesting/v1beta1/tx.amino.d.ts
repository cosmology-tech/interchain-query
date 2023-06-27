import { MsgCreateVestingAccount, MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
export declare const AminoConverter: {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: (message: MsgCreateVestingAccount) => import("./tx").MsgCreateVestingAccountAmino;
        fromAmino: (object: import("./tx").MsgCreateVestingAccountAmino) => MsgCreateVestingAccount;
    };
    "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount": {
        aminoType: string;
        toAmino: (message: MsgCreateClawbackVestingAccount) => import("./tx").MsgCreateClawbackVestingAccountAmino;
        fromAmino: (object: import("./tx").MsgCreateClawbackVestingAccountAmino) => MsgCreateClawbackVestingAccount;
    };
    "/cosmos.vesting.v1beta1.MsgClawback": {
        aminoType: string;
        toAmino: (message: MsgClawback) => import("./tx").MsgClawbackAmino;
        fromAmino: (object: import("./tx").MsgClawbackAmino) => MsgClawback;
    };
};

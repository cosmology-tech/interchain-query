import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateVestingAccount, MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
        createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount): {
            typeUrl: string;
            value: MsgCreateClawbackVestingAccount;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: MsgClawback;
        };
    };
    toJSON: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: unknown;
        };
        createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount): {
            typeUrl: string;
            value: unknown;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createVestingAccount(value: any): {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
        createClawbackVestingAccount(value: any): {
            typeUrl: string;
            value: MsgCreateClawbackVestingAccount;
        };
        clawback(value: any): {
            typeUrl: string;
            value: MsgClawback;
        };
    };
    fromPartial: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
        createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount): {
            typeUrl: string;
            value: MsgCreateClawbackVestingAccount;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: MsgClawback;
        };
    };
};

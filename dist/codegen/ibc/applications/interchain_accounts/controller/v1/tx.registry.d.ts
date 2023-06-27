import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterInterchainAccount, MsgSendTx, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerInterchainAccount(value: MsgRegisterInterchainAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        sendTx(value: MsgSendTx): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerInterchainAccount(value: MsgRegisterInterchainAccount): {
            typeUrl: string;
            value: MsgRegisterInterchainAccount;
        };
        sendTx(value: MsgSendTx): {
            typeUrl: string;
            value: MsgSendTx;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    toJSON: {
        registerInterchainAccount(value: MsgRegisterInterchainAccount): {
            typeUrl: string;
            value: unknown;
        };
        sendTx(value: MsgSendTx): {
            typeUrl: string;
            value: unknown;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        registerInterchainAccount(value: any): {
            typeUrl: string;
            value: MsgRegisterInterchainAccount;
        };
        sendTx(value: any): {
            typeUrl: string;
            value: MsgSendTx;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        registerInterchainAccount(value: MsgRegisterInterchainAccount): {
            typeUrl: string;
            value: MsgRegisterInterchainAccount;
        };
        sendTx(value: MsgSendTx): {
            typeUrl: string;
            value: MsgSendTx;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};

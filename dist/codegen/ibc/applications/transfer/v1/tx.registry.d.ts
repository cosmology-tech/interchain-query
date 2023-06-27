import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgTransfer, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        transfer(value: MsgTransfer): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        transfer(value: MsgTransfer): {
            typeUrl: string;
            value: MsgTransfer;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    toJSON: {
        transfer(value: MsgTransfer): {
            typeUrl: string;
            value: unknown;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        transfer(value: any): {
            typeUrl: string;
            value: MsgTransfer;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        transfer(value: MsgTransfer): {
            typeUrl: string;
            value: MsgTransfer;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};

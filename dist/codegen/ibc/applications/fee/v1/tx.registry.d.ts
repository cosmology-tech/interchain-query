import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRegisterPayee, MsgRegisterCounterpartyPayee, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        registerPayee(value: MsgRegisterPayee): {
            typeUrl: string;
            value: Uint8Array;
        };
        registerCounterpartyPayee(value: MsgRegisterCounterpartyPayee): {
            typeUrl: string;
            value: Uint8Array;
        };
        payPacketFee(value: MsgPayPacketFee): {
            typeUrl: string;
            value: Uint8Array;
        };
        payPacketFeeAsync(value: MsgPayPacketFeeAsync): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        registerPayee(value: MsgRegisterPayee): {
            typeUrl: string;
            value: MsgRegisterPayee;
        };
        registerCounterpartyPayee(value: MsgRegisterCounterpartyPayee): {
            typeUrl: string;
            value: MsgRegisterCounterpartyPayee;
        };
        payPacketFee(value: MsgPayPacketFee): {
            typeUrl: string;
            value: MsgPayPacketFee;
        };
        payPacketFeeAsync(value: MsgPayPacketFeeAsync): {
            typeUrl: string;
            value: MsgPayPacketFeeAsync;
        };
    };
    toJSON: {
        registerPayee(value: MsgRegisterPayee): {
            typeUrl: string;
            value: unknown;
        };
        registerCounterpartyPayee(value: MsgRegisterCounterpartyPayee): {
            typeUrl: string;
            value: unknown;
        };
        payPacketFee(value: MsgPayPacketFee): {
            typeUrl: string;
            value: unknown;
        };
        payPacketFeeAsync(value: MsgPayPacketFeeAsync): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        registerPayee(value: any): {
            typeUrl: string;
            value: MsgRegisterPayee;
        };
        registerCounterpartyPayee(value: any): {
            typeUrl: string;
            value: MsgRegisterCounterpartyPayee;
        };
        payPacketFee(value: any): {
            typeUrl: string;
            value: MsgPayPacketFee;
        };
        payPacketFeeAsync(value: any): {
            typeUrl: string;
            value: MsgPayPacketFeeAsync;
        };
    };
    fromPartial: {
        registerPayee(value: MsgRegisterPayee): {
            typeUrl: string;
            value: MsgRegisterPayee;
        };
        registerCounterpartyPayee(value: MsgRegisterCounterpartyPayee): {
            typeUrl: string;
            value: MsgRegisterCounterpartyPayee;
        };
        payPacketFee(value: MsgPayPacketFee): {
            typeUrl: string;
            value: MsgPayPacketFee;
        };
        payPacketFeeAsync(value: MsgPayPacketFeeAsync): {
            typeUrl: string;
            value: MsgPayPacketFeeAsync;
        };
    };
};

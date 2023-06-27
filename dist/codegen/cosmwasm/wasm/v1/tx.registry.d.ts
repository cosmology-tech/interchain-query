import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgStoreCode, MsgInstantiateContract, MsgInstantiateContract2, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin, MsgUpdateInstantiateConfig, MsgUpdateParams, MsgSudoContract, MsgPinCodes, MsgUnpinCodes, MsgStoreAndInstantiateContract } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: Uint8Array;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        instantiateContract2(value: MsgInstantiateContract2): {
            typeUrl: string;
            value: Uint8Array;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateAdmin(value: MsgUpdateAdmin): {
            typeUrl: string;
            value: Uint8Array;
        };
        clearAdmin(value: MsgClearAdmin): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateInstantiateConfig(value: MsgUpdateInstantiateConfig): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        sudoContract(value: MsgSudoContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        pinCodes(value: MsgPinCodes): {
            typeUrl: string;
            value: Uint8Array;
        };
        unpinCodes(value: MsgUnpinCodes): {
            typeUrl: string;
            value: Uint8Array;
        };
        storeAndInstantiateContract(value: MsgStoreAndInstantiateContract): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        instantiateContract2(value: MsgInstantiateContract2): {
            typeUrl: string;
            value: MsgInstantiateContract2;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
        updateAdmin(value: MsgUpdateAdmin): {
            typeUrl: string;
            value: MsgUpdateAdmin;
        };
        clearAdmin(value: MsgClearAdmin): {
            typeUrl: string;
            value: MsgClearAdmin;
        };
        updateInstantiateConfig(value: MsgUpdateInstantiateConfig): {
            typeUrl: string;
            value: MsgUpdateInstantiateConfig;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        sudoContract(value: MsgSudoContract): {
            typeUrl: string;
            value: MsgSudoContract;
        };
        pinCodes(value: MsgPinCodes): {
            typeUrl: string;
            value: MsgPinCodes;
        };
        unpinCodes(value: MsgUnpinCodes): {
            typeUrl: string;
            value: MsgUnpinCodes;
        };
        storeAndInstantiateContract(value: MsgStoreAndInstantiateContract): {
            typeUrl: string;
            value: MsgStoreAndInstantiateContract;
        };
    };
    toJSON: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: unknown;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: unknown;
        };
        instantiateContract2(value: MsgInstantiateContract2): {
            typeUrl: string;
            value: unknown;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: unknown;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: unknown;
        };
        updateAdmin(value: MsgUpdateAdmin): {
            typeUrl: string;
            value: unknown;
        };
        clearAdmin(value: MsgClearAdmin): {
            typeUrl: string;
            value: unknown;
        };
        updateInstantiateConfig(value: MsgUpdateInstantiateConfig): {
            typeUrl: string;
            value: unknown;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: unknown;
        };
        sudoContract(value: MsgSudoContract): {
            typeUrl: string;
            value: unknown;
        };
        pinCodes(value: MsgPinCodes): {
            typeUrl: string;
            value: unknown;
        };
        unpinCodes(value: MsgUnpinCodes): {
            typeUrl: string;
            value: unknown;
        };
        storeAndInstantiateContract(value: MsgStoreAndInstantiateContract): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        storeCode(value: any): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        instantiateContract(value: any): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        instantiateContract2(value: any): {
            typeUrl: string;
            value: MsgInstantiateContract2;
        };
        executeContract(value: any): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        migrateContract(value: any): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
        updateAdmin(value: any): {
            typeUrl: string;
            value: MsgUpdateAdmin;
        };
        clearAdmin(value: any): {
            typeUrl: string;
            value: MsgClearAdmin;
        };
        updateInstantiateConfig(value: any): {
            typeUrl: string;
            value: MsgUpdateInstantiateConfig;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        sudoContract(value: any): {
            typeUrl: string;
            value: MsgSudoContract;
        };
        pinCodes(value: any): {
            typeUrl: string;
            value: MsgPinCodes;
        };
        unpinCodes(value: any): {
            typeUrl: string;
            value: MsgUnpinCodes;
        };
        storeAndInstantiateContract(value: any): {
            typeUrl: string;
            value: MsgStoreAndInstantiateContract;
        };
    };
    fromPartial: {
        storeCode(value: MsgStoreCode): {
            typeUrl: string;
            value: MsgStoreCode;
        };
        instantiateContract(value: MsgInstantiateContract): {
            typeUrl: string;
            value: MsgInstantiateContract;
        };
        instantiateContract2(value: MsgInstantiateContract2): {
            typeUrl: string;
            value: MsgInstantiateContract2;
        };
        executeContract(value: MsgExecuteContract): {
            typeUrl: string;
            value: MsgExecuteContract;
        };
        migrateContract(value: MsgMigrateContract): {
            typeUrl: string;
            value: MsgMigrateContract;
        };
        updateAdmin(value: MsgUpdateAdmin): {
            typeUrl: string;
            value: MsgUpdateAdmin;
        };
        clearAdmin(value: MsgClearAdmin): {
            typeUrl: string;
            value: MsgClearAdmin;
        };
        updateInstantiateConfig(value: MsgUpdateInstantiateConfig): {
            typeUrl: string;
            value: MsgUpdateInstantiateConfig;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        sudoContract(value: MsgSudoContract): {
            typeUrl: string;
            value: MsgSudoContract;
        };
        pinCodes(value: MsgPinCodes): {
            typeUrl: string;
            value: MsgPinCodes;
        };
        unpinCodes(value: MsgUnpinCodes): {
            typeUrl: string;
            value: MsgUnpinCodes;
        };
        storeAndInstantiateContract(value: MsgStoreAndInstantiateContract): {
            typeUrl: string;
            value: MsgStoreAndInstantiateContract;
        };
    };
};

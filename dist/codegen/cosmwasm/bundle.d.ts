import * as _148 from "./wasm/v1/authz";
import * as _149 from "./wasm/v1/genesis";
import * as _150 from "./wasm/v1/ibc";
import * as _151 from "./wasm/v1/proposal";
import * as _152 from "./wasm/v1/query";
import * as _153 from "./wasm/v1/tx";
import * as _154 from "./wasm/v1/types";
import * as _256 from "./wasm/v1/query.rpc.Query";
import * as _257 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _257.MsgClientImpl;
            QueryClientImpl: typeof _256.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _152.QueryContractInfoRequest): Promise<_152.QueryContractInfoResponse>;
                contractHistory(request: _152.QueryContractHistoryRequest): Promise<_152.QueryContractHistoryResponse>;
                contractsByCode(request: _152.QueryContractsByCodeRequest): Promise<_152.QueryContractsByCodeResponse>;
                allContractState(request: _152.QueryAllContractStateRequest): Promise<_152.QueryAllContractStateResponse>;
                rawContractState(request: _152.QueryRawContractStateRequest): Promise<_152.QueryRawContractStateResponse>;
                smartContractState(request: _152.QuerySmartContractStateRequest): Promise<_152.QuerySmartContractStateResponse>;
                code(request: _152.QueryCodeRequest): Promise<_152.QueryCodeResponse>;
                codes(request?: _152.QueryCodesRequest): Promise<_152.QueryCodesResponse>;
                pinnedCodes(request?: _152.QueryPinnedCodesRequest): Promise<_152.QueryPinnedCodesResponse>;
                params(request?: _152.QueryParamsRequest): Promise<_152.QueryParamsResponse>;
                contractsByCreator(request: _152.QueryContractsByCreatorRequest): Promise<_152.QueryContractsByCreatorResponse>;
            };
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useContractInfo: <TData = _152.QueryContractInfoResponse>({ request, options }: _256.UseContractInfoQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useContractHistory: <TData_1 = _152.QueryContractHistoryResponse>({ request, options }: _256.UseContractHistoryQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useContractsByCode: <TData_2 = _152.QueryContractsByCodeResponse>({ request, options }: _256.UseContractsByCodeQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useAllContractState: <TData_3 = _152.QueryAllContractStateResponse>({ request, options }: _256.UseAllContractStateQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useRawContractState: <TData_4 = _152.QueryRawContractStateResponse>({ request, options }: _256.UseRawContractStateQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                useSmartContractState: <TData_5 = _152.QuerySmartContractStateResponse>({ request, options }: _256.UseSmartContractStateQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                useCode: <TData_6 = _152.QueryCodeResponse>({ request, options }: _256.UseCodeQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                useCodes: <TData_7 = _152.QueryCodesResponse>({ request, options }: _256.UseCodesQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                usePinnedCodes: <TData_8 = _152.QueryPinnedCodesResponse>({ request, options }: _256.UsePinnedCodesQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
                useParams: <TData_9 = _152.QueryParamsResponse>({ request, options }: _256.UseParamsQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
                useContractsByCreator: <TData_10 = _152.QueryContractsByCreatorResponse>({ request, options }: _256.UseContractsByCreatorQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _153.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _153.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _153.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _153.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _153.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _153.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _153.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _153.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _153.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _153.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _153.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _153.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _153.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _153.MsgStoreCode): {
                        typeUrl: string;
                        value: _153.MsgStoreCode;
                    };
                    instantiateContract(value: _153.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _153.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _153.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _153.MsgInstantiateContract2;
                    };
                    executeContract(value: _153.MsgExecuteContract): {
                        typeUrl: string;
                        value: _153.MsgExecuteContract;
                    };
                    migrateContract(value: _153.MsgMigrateContract): {
                        typeUrl: string;
                        value: _153.MsgMigrateContract;
                    };
                    updateAdmin(value: _153.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _153.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _153.MsgClearAdmin): {
                        typeUrl: string;
                        value: _153.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _153.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _153.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _153.MsgUpdateParams): {
                        typeUrl: string;
                        value: _153.MsgUpdateParams;
                    };
                    sudoContract(value: _153.MsgSudoContract): {
                        typeUrl: string;
                        value: _153.MsgSudoContract;
                    };
                    pinCodes(value: _153.MsgPinCodes): {
                        typeUrl: string;
                        value: _153.MsgPinCodes;
                    };
                    unpinCodes(value: _153.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _153.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _153.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _153.MsgStoreAndInstantiateContract;
                    };
                };
                toJSON: {
                    storeCode(value: _153.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _153.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract2(value: _153.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _153.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _153.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _153.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _153.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateInstantiateConfig(value: _153.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _153.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    sudoContract(value: _153.MsgSudoContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    pinCodes(value: _153.MsgPinCodes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unpinCodes(value: _153.MsgUnpinCodes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    storeAndInstantiateContract(value: _153.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _153.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _153.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _153.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _153.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _153.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _153.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _153.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _153.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _153.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _153.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _153.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _153.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _153.MsgStoreAndInstantiateContract;
                    };
                };
                fromPartial: {
                    storeCode(value: _153.MsgStoreCode): {
                        typeUrl: string;
                        value: _153.MsgStoreCode;
                    };
                    instantiateContract(value: _153.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _153.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _153.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _153.MsgInstantiateContract2;
                    };
                    executeContract(value: _153.MsgExecuteContract): {
                        typeUrl: string;
                        value: _153.MsgExecuteContract;
                    };
                    migrateContract(value: _153.MsgMigrateContract): {
                        typeUrl: string;
                        value: _153.MsgMigrateContract;
                    };
                    updateAdmin(value: _153.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _153.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _153.MsgClearAdmin): {
                        typeUrl: string;
                        value: _153.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _153.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _153.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _153.MsgUpdateParams): {
                        typeUrl: string;
                        value: _153.MsgUpdateParams;
                    };
                    sudoContract(value: _153.MsgSudoContract): {
                        typeUrl: string;
                        value: _153.MsgSudoContract;
                    };
                    pinCodes(value: _153.MsgPinCodes): {
                        typeUrl: string;
                        value: _153.MsgPinCodes;
                    };
                    unpinCodes(value: _153.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _153.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _153.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _153.MsgStoreAndInstantiateContract;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _153.MsgStoreCode) => _153.MsgStoreCodeAmino;
                    fromAmino: (object: _153.MsgStoreCodeAmino) => _153.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _153.MsgInstantiateContract) => _153.MsgInstantiateContractAmino;
                    fromAmino: (object: _153.MsgInstantiateContractAmino) => _153.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _153.MsgInstantiateContract2) => _153.MsgInstantiateContract2Amino;
                    fromAmino: (object: _153.MsgInstantiateContract2Amino) => _153.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _153.MsgExecuteContract) => _153.MsgExecuteContractAmino;
                    fromAmino: (object: _153.MsgExecuteContractAmino) => _153.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _153.MsgMigrateContract) => _153.MsgMigrateContractAmino;
                    fromAmino: (object: _153.MsgMigrateContractAmino) => _153.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _153.MsgUpdateAdmin) => _153.MsgUpdateAdminAmino;
                    fromAmino: (object: _153.MsgUpdateAdminAmino) => _153.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _153.MsgClearAdmin) => _153.MsgClearAdminAmino;
                    fromAmino: (object: _153.MsgClearAdminAmino) => _153.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _153.MsgUpdateInstantiateConfig) => _153.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _153.MsgUpdateInstantiateConfigAmino) => _153.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _153.MsgUpdateParams) => _153.MsgUpdateParamsAmino;
                    fromAmino: (object: _153.MsgUpdateParamsAmino) => _153.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _153.MsgSudoContract) => _153.MsgSudoContractAmino;
                    fromAmino: (object: _153.MsgSudoContractAmino) => _153.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _153.MsgPinCodes) => _153.MsgPinCodesAmino;
                    fromAmino: (object: _153.MsgPinCodesAmino) => _153.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _153.MsgUnpinCodes) => _153.MsgUnpinCodesAmino;
                    fromAmino: (object: _153.MsgUnpinCodesAmino) => _153.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _153.MsgStoreAndInstantiateContract) => _153.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _153.MsgStoreAndInstantiateContractAmino) => _153.MsgStoreAndInstantiateContract;
                };
            };
            accessTypeFromJSON(object: any): _154.AccessType;
            accessTypeToJSON(object: _154.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _154.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _154.ContractCodeHistoryOperationType): string;
            AccessType: typeof _154.AccessType;
            AccessTypeSDKType: typeof _154.AccessType;
            AccessTypeAmino: typeof _154.AccessType;
            ContractCodeHistoryOperationType: typeof _154.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _154.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _154.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                aminoType: string;
                encode(message: _154.AccessTypeParam, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.AccessTypeParam;
                fromJSON(object: any): _154.AccessTypeParam;
                toJSON(message: _154.AccessTypeParam): unknown;
                fromPartial(object: {
                    value?: _154.AccessType;
                }): _154.AccessTypeParam;
                fromSDK(object: _154.AccessTypeParamSDKType): _154.AccessTypeParam;
                toSDK(message: _154.AccessTypeParam): _154.AccessTypeParamSDKType;
                fromAmino(object: _154.AccessTypeParamAmino): _154.AccessTypeParam;
                toAmino(message: _154.AccessTypeParam): _154.AccessTypeParamAmino;
                fromAminoMsg(object: _154.AccessTypeParamAminoMsg): _154.AccessTypeParam;
                toAminoMsg(message: _154.AccessTypeParam): _154.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _154.AccessTypeParamProtoMsg): _154.AccessTypeParam;
                toProto(message: _154.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _154.AccessTypeParam): _154.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                aminoType: string;
                encode(message: _154.AccessConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.AccessConfig;
                fromJSON(object: any): _154.AccessConfig;
                toJSON(message: _154.AccessConfig): unknown;
                fromPartial(object: {
                    permission?: _154.AccessType;
                    addresses?: string[];
                }): _154.AccessConfig;
                fromSDK(object: _154.AccessConfigSDKType): _154.AccessConfig;
                toSDK(message: _154.AccessConfig): _154.AccessConfigSDKType;
                fromAmino(object: _154.AccessConfigAmino): _154.AccessConfig;
                toAmino(message: _154.AccessConfig): _154.AccessConfigAmino;
                fromAminoMsg(object: _154.AccessConfigAminoMsg): _154.AccessConfig;
                toAminoMsg(message: _154.AccessConfig): _154.AccessConfigAminoMsg;
                fromProtoMsg(message: _154.AccessConfigProtoMsg): _154.AccessConfig;
                toProto(message: _154.AccessConfig): Uint8Array;
                toProtoMsg(message: _154.AccessConfig): _154.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                encode(message: _154.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.Params;
                fromJSON(object: any): _154.Params;
                toJSON(message: _154.Params): unknown;
                fromPartial(object: {
                    codeUploadAccess?: {
                        permission?: _154.AccessType;
                        addresses?: string[];
                    };
                    instantiateDefaultPermission?: _154.AccessType;
                }): _154.Params;
                fromSDK(object: _154.ParamsSDKType): _154.Params;
                toSDK(message: _154.Params): _154.ParamsSDKType;
                fromAmino(object: _154.ParamsAmino): _154.Params;
                toAmino(message: _154.Params): _154.ParamsAmino;
                fromAminoMsg(object: _154.ParamsAminoMsg): _154.Params;
                toAminoMsg(message: _154.Params): _154.ParamsAminoMsg;
                fromProtoMsg(message: _154.ParamsProtoMsg): _154.Params;
                toProto(message: _154.Params): Uint8Array;
                toProtoMsg(message: _154.Params): _154.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                aminoType: string;
                encode(message: _154.CodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.CodeInfo;
                fromJSON(object: any): _154.CodeInfo;
                toJSON(message: _154.CodeInfo): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _154.AccessType;
                        addresses?: string[];
                    };
                }): _154.CodeInfo;
                fromSDK(object: _154.CodeInfoSDKType): _154.CodeInfo;
                toSDK(message: _154.CodeInfo): _154.CodeInfoSDKType;
                fromAmino(object: _154.CodeInfoAmino): _154.CodeInfo;
                toAmino(message: _154.CodeInfo): _154.CodeInfoAmino;
                fromAminoMsg(object: _154.CodeInfoAminoMsg): _154.CodeInfo;
                toAminoMsg(message: _154.CodeInfo): _154.CodeInfoAminoMsg;
                fromProtoMsg(message: _154.CodeInfoProtoMsg): _154.CodeInfo;
                toProto(message: _154.CodeInfo): Uint8Array;
                toProtoMsg(message: _154.CodeInfo): _154.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                aminoType: string;
                encode(message: _154.ContractInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ContractInfo;
                fromJSON(object: any): _154.ContractInfo;
                toJSON(message: _154.ContractInfo): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        blockHeight?: bigint;
                        txIndex?: bigint;
                    };
                    ibcPortId?: string;
                    extension?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _154.ContractInfo;
                fromSDK(object: _154.ContractInfoSDKType): _154.ContractInfo;
                toSDK(message: _154.ContractInfo): _154.ContractInfoSDKType;
                fromAmino(object: _154.ContractInfoAmino): _154.ContractInfo;
                toAmino(message: _154.ContractInfo): _154.ContractInfoAmino;
                fromAminoMsg(object: _154.ContractInfoAminoMsg): _154.ContractInfo;
                toAminoMsg(message: _154.ContractInfo): _154.ContractInfoAminoMsg;
                fromProtoMsg(message: _154.ContractInfoProtoMsg): _154.ContractInfo;
                toProto(message: _154.ContractInfo): Uint8Array;
                toProtoMsg(message: _154.ContractInfo): _154.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                aminoType: string;
                encode(message: _154.ContractCodeHistoryEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ContractCodeHistoryEntry;
                fromJSON(object: any): _154.ContractCodeHistoryEntry;
                toJSON(message: _154.ContractCodeHistoryEntry): unknown;
                fromPartial(object: {
                    operation?: _154.ContractCodeHistoryOperationType;
                    codeId?: bigint;
                    updated?: {
                        blockHeight?: bigint;
                        txIndex?: bigint;
                    };
                    msg?: Uint8Array;
                }): _154.ContractCodeHistoryEntry;
                fromSDK(object: _154.ContractCodeHistoryEntrySDKType): _154.ContractCodeHistoryEntry;
                toSDK(message: _154.ContractCodeHistoryEntry): _154.ContractCodeHistoryEntrySDKType;
                fromAmino(object: _154.ContractCodeHistoryEntryAmino): _154.ContractCodeHistoryEntry;
                toAmino(message: _154.ContractCodeHistoryEntry): _154.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _154.ContractCodeHistoryEntryAminoMsg): _154.ContractCodeHistoryEntry;
                toAminoMsg(message: _154.ContractCodeHistoryEntry): _154.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _154.ContractCodeHistoryEntryProtoMsg): _154.ContractCodeHistoryEntry;
                toProto(message: _154.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _154.ContractCodeHistoryEntry): _154.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                aminoType: string;
                encode(message: _154.AbsoluteTxPosition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.AbsoluteTxPosition;
                fromJSON(object: any): _154.AbsoluteTxPosition;
                toJSON(message: _154.AbsoluteTxPosition): unknown;
                fromPartial(object: {
                    blockHeight?: bigint;
                    txIndex?: bigint;
                }): _154.AbsoluteTxPosition;
                fromSDK(object: _154.AbsoluteTxPositionSDKType): _154.AbsoluteTxPosition;
                toSDK(message: _154.AbsoluteTxPosition): _154.AbsoluteTxPositionSDKType;
                fromAmino(object: _154.AbsoluteTxPositionAmino): _154.AbsoluteTxPosition;
                toAmino(message: _154.AbsoluteTxPosition): _154.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _154.AbsoluteTxPositionAminoMsg): _154.AbsoluteTxPosition;
                toAminoMsg(message: _154.AbsoluteTxPosition): _154.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _154.AbsoluteTxPositionProtoMsg): _154.AbsoluteTxPosition;
                toProto(message: _154.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _154.AbsoluteTxPosition): _154.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                aminoType: string;
                encode(message: _154.Model, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.Model;
                fromJSON(object: any): _154.Model;
                toJSON(message: _154.Model): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _154.Model;
                fromSDK(object: _154.ModelSDKType): _154.Model;
                toSDK(message: _154.Model): _154.ModelSDKType;
                fromAmino(object: _154.ModelAmino): _154.Model;
                toAmino(message: _154.Model): _154.ModelAmino;
                fromAminoMsg(object: _154.ModelAminoMsg): _154.Model;
                toAminoMsg(message: _154.Model): _154.ModelAminoMsg;
                fromProtoMsg(message: _154.ModelProtoMsg): _154.Model;
                toProto(message: _154.Model): Uint8Array;
                toProtoMsg(message: _154.Model): _154.ModelProtoMsg;
            };
            MsgStoreCode: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgStoreCode, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgStoreCode;
                fromJSON(object: any): _153.MsgStoreCode;
                toJSON(message: _153.MsgStoreCode): unknown;
                fromPartial(object: {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _154.AccessType;
                        addresses?: string[];
                    };
                }): _153.MsgStoreCode;
                fromSDK(object: _153.MsgStoreCodeSDKType): _153.MsgStoreCode;
                toSDK(message: _153.MsgStoreCode): _153.MsgStoreCodeSDKType;
                fromAmino(object: _153.MsgStoreCodeAmino): _153.MsgStoreCode;
                toAmino(message: _153.MsgStoreCode): _153.MsgStoreCodeAmino;
                fromAminoMsg(object: _153.MsgStoreCodeAminoMsg): _153.MsgStoreCode;
                toAminoMsg(message: _153.MsgStoreCode): _153.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _153.MsgStoreCodeProtoMsg): _153.MsgStoreCode;
                toProto(message: _153.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _153.MsgStoreCode): _153.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgStoreCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgStoreCodeResponse;
                fromJSON(object: any): _153.MsgStoreCodeResponse;
                toJSON(message: _153.MsgStoreCodeResponse): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    checksum?: Uint8Array;
                }): _153.MsgStoreCodeResponse;
                fromSDK(object: _153.MsgStoreCodeResponseSDKType): _153.MsgStoreCodeResponse;
                toSDK(message: _153.MsgStoreCodeResponse): _153.MsgStoreCodeResponseSDKType;
                fromAmino(object: _153.MsgStoreCodeResponseAmino): _153.MsgStoreCodeResponse;
                toAmino(message: _153.MsgStoreCodeResponse): _153.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _153.MsgStoreCodeResponseAminoMsg): _153.MsgStoreCodeResponse;
                toAminoMsg(message: _153.MsgStoreCodeResponse): _153.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _153.MsgStoreCodeResponseProtoMsg): _153.MsgStoreCodeResponse;
                toProto(message: _153.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _153.MsgStoreCodeResponse): _153.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgInstantiateContract;
                fromJSON(object: any): _153.MsgInstantiateContract;
                toJSON(message: _153.MsgInstantiateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: bigint;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _153.MsgInstantiateContract;
                fromSDK(object: _153.MsgInstantiateContractSDKType): _153.MsgInstantiateContract;
                toSDK(message: _153.MsgInstantiateContract): _153.MsgInstantiateContractSDKType;
                fromAmino(object: _153.MsgInstantiateContractAmino): _153.MsgInstantiateContract;
                toAmino(message: _153.MsgInstantiateContract): _153.MsgInstantiateContractAmino;
                fromAminoMsg(object: _153.MsgInstantiateContractAminoMsg): _153.MsgInstantiateContract;
                toAminoMsg(message: _153.MsgInstantiateContract): _153.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _153.MsgInstantiateContractProtoMsg): _153.MsgInstantiateContract;
                toProto(message: _153.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _153.MsgInstantiateContract): _153.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgInstantiateContractResponse;
                fromJSON(object: any): _153.MsgInstantiateContractResponse;
                toJSON(message: _153.MsgInstantiateContractResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _153.MsgInstantiateContractResponse;
                fromSDK(object: _153.MsgInstantiateContractResponseSDKType): _153.MsgInstantiateContractResponse;
                toSDK(message: _153.MsgInstantiateContractResponse): _153.MsgInstantiateContractResponseSDKType;
                fromAmino(object: _153.MsgInstantiateContractResponseAmino): _153.MsgInstantiateContractResponse;
                toAmino(message: _153.MsgInstantiateContractResponse): _153.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _153.MsgInstantiateContractResponseAminoMsg): _153.MsgInstantiateContractResponse;
                toAminoMsg(message: _153.MsgInstantiateContractResponse): _153.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _153.MsgInstantiateContractResponseProtoMsg): _153.MsgInstantiateContractResponse;
                toProto(message: _153.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _153.MsgInstantiateContractResponse): _153.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgInstantiateContract2, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgInstantiateContract2;
                fromJSON(object: any): _153.MsgInstantiateContract2;
                toJSON(message: _153.MsgInstantiateContract2): unknown;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: bigint;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    salt?: Uint8Array;
                    fixMsg?: boolean;
                }): _153.MsgInstantiateContract2;
                fromSDK(object: _153.MsgInstantiateContract2SDKType): _153.MsgInstantiateContract2;
                toSDK(message: _153.MsgInstantiateContract2): _153.MsgInstantiateContract2SDKType;
                fromAmino(object: _153.MsgInstantiateContract2Amino): _153.MsgInstantiateContract2;
                toAmino(message: _153.MsgInstantiateContract2): _153.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _153.MsgInstantiateContract2AminoMsg): _153.MsgInstantiateContract2;
                toAminoMsg(message: _153.MsgInstantiateContract2): _153.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _153.MsgInstantiateContract2ProtoMsg): _153.MsgInstantiateContract2;
                toProto(message: _153.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _153.MsgInstantiateContract2): _153.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgInstantiateContract2Response, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgInstantiateContract2Response;
                fromJSON(object: any): _153.MsgInstantiateContract2Response;
                toJSON(message: _153.MsgInstantiateContract2Response): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _153.MsgInstantiateContract2Response;
                fromSDK(object: _153.MsgInstantiateContract2ResponseSDKType): _153.MsgInstantiateContract2Response;
                toSDK(message: _153.MsgInstantiateContract2Response): _153.MsgInstantiateContract2ResponseSDKType;
                fromAmino(object: _153.MsgInstantiateContract2ResponseAmino): _153.MsgInstantiateContract2Response;
                toAmino(message: _153.MsgInstantiateContract2Response): _153.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _153.MsgInstantiateContract2ResponseAminoMsg): _153.MsgInstantiateContract2Response;
                toAminoMsg(message: _153.MsgInstantiateContract2Response): _153.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _153.MsgInstantiateContract2ResponseProtoMsg): _153.MsgInstantiateContract2Response;
                toProto(message: _153.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _153.MsgInstantiateContract2Response): _153.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgExecuteContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgExecuteContract;
                fromJSON(object: any): _153.MsgExecuteContract;
                toJSON(message: _153.MsgExecuteContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _153.MsgExecuteContract;
                fromSDK(object: _153.MsgExecuteContractSDKType): _153.MsgExecuteContract;
                toSDK(message: _153.MsgExecuteContract): _153.MsgExecuteContractSDKType;
                fromAmino(object: _153.MsgExecuteContractAmino): _153.MsgExecuteContract;
                toAmino(message: _153.MsgExecuteContract): _153.MsgExecuteContractAmino;
                fromAminoMsg(object: _153.MsgExecuteContractAminoMsg): _153.MsgExecuteContract;
                toAminoMsg(message: _153.MsgExecuteContract): _153.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _153.MsgExecuteContractProtoMsg): _153.MsgExecuteContract;
                toProto(message: _153.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _153.MsgExecuteContract): _153.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgExecuteContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgExecuteContractResponse;
                fromJSON(object: any): _153.MsgExecuteContractResponse;
                toJSON(message: _153.MsgExecuteContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _153.MsgExecuteContractResponse;
                fromSDK(object: _153.MsgExecuteContractResponseSDKType): _153.MsgExecuteContractResponse;
                toSDK(message: _153.MsgExecuteContractResponse): _153.MsgExecuteContractResponseSDKType;
                fromAmino(object: _153.MsgExecuteContractResponseAmino): _153.MsgExecuteContractResponse;
                toAmino(message: _153.MsgExecuteContractResponse): _153.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _153.MsgExecuteContractResponseAminoMsg): _153.MsgExecuteContractResponse;
                toAminoMsg(message: _153.MsgExecuteContractResponse): _153.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _153.MsgExecuteContractResponseProtoMsg): _153.MsgExecuteContractResponse;
                toProto(message: _153.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _153.MsgExecuteContractResponse): _153.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgMigrateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgMigrateContract;
                fromJSON(object: any): _153.MsgMigrateContract;
                toJSON(message: _153.MsgMigrateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    codeId?: bigint;
                    msg?: Uint8Array;
                }): _153.MsgMigrateContract;
                fromSDK(object: _153.MsgMigrateContractSDKType): _153.MsgMigrateContract;
                toSDK(message: _153.MsgMigrateContract): _153.MsgMigrateContractSDKType;
                fromAmino(object: _153.MsgMigrateContractAmino): _153.MsgMigrateContract;
                toAmino(message: _153.MsgMigrateContract): _153.MsgMigrateContractAmino;
                fromAminoMsg(object: _153.MsgMigrateContractAminoMsg): _153.MsgMigrateContract;
                toAminoMsg(message: _153.MsgMigrateContract): _153.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _153.MsgMigrateContractProtoMsg): _153.MsgMigrateContract;
                toProto(message: _153.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _153.MsgMigrateContract): _153.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgMigrateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgMigrateContractResponse;
                fromJSON(object: any): _153.MsgMigrateContractResponse;
                toJSON(message: _153.MsgMigrateContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _153.MsgMigrateContractResponse;
                fromSDK(object: _153.MsgMigrateContractResponseSDKType): _153.MsgMigrateContractResponse;
                toSDK(message: _153.MsgMigrateContractResponse): _153.MsgMigrateContractResponseSDKType;
                fromAmino(object: _153.MsgMigrateContractResponseAmino): _153.MsgMigrateContractResponse;
                toAmino(message: _153.MsgMigrateContractResponse): _153.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _153.MsgMigrateContractResponseAminoMsg): _153.MsgMigrateContractResponse;
                toAminoMsg(message: _153.MsgMigrateContractResponse): _153.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _153.MsgMigrateContractResponseProtoMsg): _153.MsgMigrateContractResponse;
                toProto(message: _153.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _153.MsgMigrateContractResponse): _153.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgUpdateAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgUpdateAdmin;
                fromJSON(object: any): _153.MsgUpdateAdmin;
                toJSON(message: _153.MsgUpdateAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _153.MsgUpdateAdmin;
                fromSDK(object: _153.MsgUpdateAdminSDKType): _153.MsgUpdateAdmin;
                toSDK(message: _153.MsgUpdateAdmin): _153.MsgUpdateAdminSDKType;
                fromAmino(object: _153.MsgUpdateAdminAmino): _153.MsgUpdateAdmin;
                toAmino(message: _153.MsgUpdateAdmin): _153.MsgUpdateAdminAmino;
                fromAminoMsg(object: _153.MsgUpdateAdminAminoMsg): _153.MsgUpdateAdmin;
                toAminoMsg(message: _153.MsgUpdateAdmin): _153.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _153.MsgUpdateAdminProtoMsg): _153.MsgUpdateAdmin;
                toProto(message: _153.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _153.MsgUpdateAdmin): _153.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _153.MsgUpdateAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgUpdateAdminResponse;
                fromJSON(_: any): _153.MsgUpdateAdminResponse;
                toJSON(_: _153.MsgUpdateAdminResponse): unknown;
                fromPartial(_: {}): _153.MsgUpdateAdminResponse;
                fromSDK(_: _153.MsgUpdateAdminResponseSDKType): _153.MsgUpdateAdminResponse;
                toSDK(_: _153.MsgUpdateAdminResponse): _153.MsgUpdateAdminResponseSDKType;
                fromAmino(_: _153.MsgUpdateAdminResponseAmino): _153.MsgUpdateAdminResponse;
                toAmino(_: _153.MsgUpdateAdminResponse): _153.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _153.MsgUpdateAdminResponseAminoMsg): _153.MsgUpdateAdminResponse;
                toAminoMsg(message: _153.MsgUpdateAdminResponse): _153.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _153.MsgUpdateAdminResponseProtoMsg): _153.MsgUpdateAdminResponse;
                toProto(message: _153.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _153.MsgUpdateAdminResponse): _153.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgClearAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgClearAdmin;
                fromJSON(object: any): _153.MsgClearAdmin;
                toJSON(message: _153.MsgClearAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _153.MsgClearAdmin;
                fromSDK(object: _153.MsgClearAdminSDKType): _153.MsgClearAdmin;
                toSDK(message: _153.MsgClearAdmin): _153.MsgClearAdminSDKType;
                fromAmino(object: _153.MsgClearAdminAmino): _153.MsgClearAdmin;
                toAmino(message: _153.MsgClearAdmin): _153.MsgClearAdminAmino;
                fromAminoMsg(object: _153.MsgClearAdminAminoMsg): _153.MsgClearAdmin;
                toAminoMsg(message: _153.MsgClearAdmin): _153.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _153.MsgClearAdminProtoMsg): _153.MsgClearAdmin;
                toProto(message: _153.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _153.MsgClearAdmin): _153.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _153.MsgClearAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgClearAdminResponse;
                fromJSON(_: any): _153.MsgClearAdminResponse;
                toJSON(_: _153.MsgClearAdminResponse): unknown;
                fromPartial(_: {}): _153.MsgClearAdminResponse;
                fromSDK(_: _153.MsgClearAdminResponseSDKType): _153.MsgClearAdminResponse;
                toSDK(_: _153.MsgClearAdminResponse): _153.MsgClearAdminResponseSDKType;
                fromAmino(_: _153.MsgClearAdminResponseAmino): _153.MsgClearAdminResponse;
                toAmino(_: _153.MsgClearAdminResponse): _153.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _153.MsgClearAdminResponseAminoMsg): _153.MsgClearAdminResponse;
                toAminoMsg(message: _153.MsgClearAdminResponse): _153.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _153.MsgClearAdminResponseProtoMsg): _153.MsgClearAdminResponse;
                toProto(message: _153.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _153.MsgClearAdminResponse): _153.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgUpdateInstantiateConfig, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgUpdateInstantiateConfig;
                fromJSON(object: any): _153.MsgUpdateInstantiateConfig;
                toJSON(message: _153.MsgUpdateInstantiateConfig): unknown;
                fromPartial(object: {
                    sender?: string;
                    codeId?: bigint;
                    newInstantiatePermission?: {
                        permission?: _154.AccessType;
                        addresses?: string[];
                    };
                }): _153.MsgUpdateInstantiateConfig;
                fromSDK(object: _153.MsgUpdateInstantiateConfigSDKType): _153.MsgUpdateInstantiateConfig;
                toSDK(message: _153.MsgUpdateInstantiateConfig): _153.MsgUpdateInstantiateConfigSDKType;
                fromAmino(object: _153.MsgUpdateInstantiateConfigAmino): _153.MsgUpdateInstantiateConfig;
                toAmino(message: _153.MsgUpdateInstantiateConfig): _153.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _153.MsgUpdateInstantiateConfigAminoMsg): _153.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _153.MsgUpdateInstantiateConfig): _153.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _153.MsgUpdateInstantiateConfigProtoMsg): _153.MsgUpdateInstantiateConfig;
                toProto(message: _153.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _153.MsgUpdateInstantiateConfig): _153.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _153.MsgUpdateInstantiateConfigResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgUpdateInstantiateConfigResponse;
                fromJSON(_: any): _153.MsgUpdateInstantiateConfigResponse;
                toJSON(_: _153.MsgUpdateInstantiateConfigResponse): unknown;
                fromPartial(_: {}): _153.MsgUpdateInstantiateConfigResponse;
                fromSDK(_: _153.MsgUpdateInstantiateConfigResponseSDKType): _153.MsgUpdateInstantiateConfigResponse;
                toSDK(_: _153.MsgUpdateInstantiateConfigResponse): _153.MsgUpdateInstantiateConfigResponseSDKType;
                fromAmino(_: _153.MsgUpdateInstantiateConfigResponseAmino): _153.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _153.MsgUpdateInstantiateConfigResponse): _153.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _153.MsgUpdateInstantiateConfigResponseAminoMsg): _153.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _153.MsgUpdateInstantiateConfigResponse): _153.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _153.MsgUpdateInstantiateConfigResponseProtoMsg): _153.MsgUpdateInstantiateConfigResponse;
                toProto(message: _153.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _153.MsgUpdateInstantiateConfigResponse): _153.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgUpdateParams;
                fromJSON(object: any): _153.MsgUpdateParams;
                toJSON(message: _153.MsgUpdateParams): unknown;
                fromPartial(object: {
                    authority?: string;
                    params?: {
                        codeUploadAccess?: {
                            permission?: _154.AccessType;
                            addresses?: string[];
                        };
                        instantiateDefaultPermission?: _154.AccessType;
                    };
                }): _153.MsgUpdateParams;
                fromSDK(object: _153.MsgUpdateParamsSDKType): _153.MsgUpdateParams;
                toSDK(message: _153.MsgUpdateParams): _153.MsgUpdateParamsSDKType;
                fromAmino(object: _153.MsgUpdateParamsAmino): _153.MsgUpdateParams;
                toAmino(message: _153.MsgUpdateParams): _153.MsgUpdateParamsAmino;
                fromAminoMsg(object: _153.MsgUpdateParamsAminoMsg): _153.MsgUpdateParams;
                toAminoMsg(message: _153.MsgUpdateParams): _153.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _153.MsgUpdateParamsProtoMsg): _153.MsgUpdateParams;
                toProto(message: _153.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _153.MsgUpdateParams): _153.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _153.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgUpdateParamsResponse;
                fromJSON(_: any): _153.MsgUpdateParamsResponse;
                toJSON(_: _153.MsgUpdateParamsResponse): unknown;
                fromPartial(_: {}): _153.MsgUpdateParamsResponse;
                fromSDK(_: _153.MsgUpdateParamsResponseSDKType): _153.MsgUpdateParamsResponse;
                toSDK(_: _153.MsgUpdateParamsResponse): _153.MsgUpdateParamsResponseSDKType;
                fromAmino(_: _153.MsgUpdateParamsResponseAmino): _153.MsgUpdateParamsResponse;
                toAmino(_: _153.MsgUpdateParamsResponse): _153.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _153.MsgUpdateParamsResponseAminoMsg): _153.MsgUpdateParamsResponse;
                toAminoMsg(message: _153.MsgUpdateParamsResponse): _153.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _153.MsgUpdateParamsResponseProtoMsg): _153.MsgUpdateParamsResponse;
                toProto(message: _153.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _153.MsgUpdateParamsResponse): _153.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgSudoContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgSudoContract;
                fromJSON(object: any): _153.MsgSudoContract;
                toJSON(message: _153.MsgSudoContract): unknown;
                fromPartial(object: {
                    authority?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _153.MsgSudoContract;
                fromSDK(object: _153.MsgSudoContractSDKType): _153.MsgSudoContract;
                toSDK(message: _153.MsgSudoContract): _153.MsgSudoContractSDKType;
                fromAmino(object: _153.MsgSudoContractAmino): _153.MsgSudoContract;
                toAmino(message: _153.MsgSudoContract): _153.MsgSudoContractAmino;
                fromAminoMsg(object: _153.MsgSudoContractAminoMsg): _153.MsgSudoContract;
                toAminoMsg(message: _153.MsgSudoContract): _153.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _153.MsgSudoContractProtoMsg): _153.MsgSudoContract;
                toProto(message: _153.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _153.MsgSudoContract): _153.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgSudoContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgSudoContractResponse;
                fromJSON(object: any): _153.MsgSudoContractResponse;
                toJSON(message: _153.MsgSudoContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _153.MsgSudoContractResponse;
                fromSDK(object: _153.MsgSudoContractResponseSDKType): _153.MsgSudoContractResponse;
                toSDK(message: _153.MsgSudoContractResponse): _153.MsgSudoContractResponseSDKType;
                fromAmino(object: _153.MsgSudoContractResponseAmino): _153.MsgSudoContractResponse;
                toAmino(message: _153.MsgSudoContractResponse): _153.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _153.MsgSudoContractResponseAminoMsg): _153.MsgSudoContractResponse;
                toAminoMsg(message: _153.MsgSudoContractResponse): _153.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _153.MsgSudoContractResponseProtoMsg): _153.MsgSudoContractResponse;
                toProto(message: _153.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _153.MsgSudoContractResponse): _153.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgPinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgPinCodes;
                fromJSON(object: any): _153.MsgPinCodes;
                toJSON(message: _153.MsgPinCodes): unknown;
                fromPartial(object: {
                    authority?: string;
                    codeIds?: bigint[];
                }): _153.MsgPinCodes;
                fromSDK(object: _153.MsgPinCodesSDKType): _153.MsgPinCodes;
                toSDK(message: _153.MsgPinCodes): _153.MsgPinCodesSDKType;
                fromAmino(object: _153.MsgPinCodesAmino): _153.MsgPinCodes;
                toAmino(message: _153.MsgPinCodes): _153.MsgPinCodesAmino;
                fromAminoMsg(object: _153.MsgPinCodesAminoMsg): _153.MsgPinCodes;
                toAminoMsg(message: _153.MsgPinCodes): _153.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _153.MsgPinCodesProtoMsg): _153.MsgPinCodes;
                toProto(message: _153.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _153.MsgPinCodes): _153.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _153.MsgPinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgPinCodesResponse;
                fromJSON(_: any): _153.MsgPinCodesResponse;
                toJSON(_: _153.MsgPinCodesResponse): unknown;
                fromPartial(_: {}): _153.MsgPinCodesResponse;
                fromSDK(_: _153.MsgPinCodesResponseSDKType): _153.MsgPinCodesResponse;
                toSDK(_: _153.MsgPinCodesResponse): _153.MsgPinCodesResponseSDKType;
                fromAmino(_: _153.MsgPinCodesResponseAmino): _153.MsgPinCodesResponse;
                toAmino(_: _153.MsgPinCodesResponse): _153.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _153.MsgPinCodesResponseAminoMsg): _153.MsgPinCodesResponse;
                toAminoMsg(message: _153.MsgPinCodesResponse): _153.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _153.MsgPinCodesResponseProtoMsg): _153.MsgPinCodesResponse;
                toProto(message: _153.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _153.MsgPinCodesResponse): _153.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgUnpinCodes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgUnpinCodes;
                fromJSON(object: any): _153.MsgUnpinCodes;
                toJSON(message: _153.MsgUnpinCodes): unknown;
                fromPartial(object: {
                    authority?: string;
                    codeIds?: bigint[];
                }): _153.MsgUnpinCodes;
                fromSDK(object: _153.MsgUnpinCodesSDKType): _153.MsgUnpinCodes;
                toSDK(message: _153.MsgUnpinCodes): _153.MsgUnpinCodesSDKType;
                fromAmino(object: _153.MsgUnpinCodesAmino): _153.MsgUnpinCodes;
                toAmino(message: _153.MsgUnpinCodes): _153.MsgUnpinCodesAmino;
                fromAminoMsg(object: _153.MsgUnpinCodesAminoMsg): _153.MsgUnpinCodes;
                toAminoMsg(message: _153.MsgUnpinCodes): _153.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _153.MsgUnpinCodesProtoMsg): _153.MsgUnpinCodes;
                toProto(message: _153.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _153.MsgUnpinCodes): _153.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                aminoType: string;
                encode(_: _153.MsgUnpinCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgUnpinCodesResponse;
                fromJSON(_: any): _153.MsgUnpinCodesResponse;
                toJSON(_: _153.MsgUnpinCodesResponse): unknown;
                fromPartial(_: {}): _153.MsgUnpinCodesResponse;
                fromSDK(_: _153.MsgUnpinCodesResponseSDKType): _153.MsgUnpinCodesResponse;
                toSDK(_: _153.MsgUnpinCodesResponse): _153.MsgUnpinCodesResponseSDKType;
                fromAmino(_: _153.MsgUnpinCodesResponseAmino): _153.MsgUnpinCodesResponse;
                toAmino(_: _153.MsgUnpinCodesResponse): _153.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _153.MsgUnpinCodesResponseAminoMsg): _153.MsgUnpinCodesResponse;
                toAminoMsg(message: _153.MsgUnpinCodesResponse): _153.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _153.MsgUnpinCodesResponseProtoMsg): _153.MsgUnpinCodesResponse;
                toProto(message: _153.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _153.MsgUnpinCodesResponse): _153.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgStoreAndInstantiateContract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgStoreAndInstantiateContract;
                fromJSON(object: any): _153.MsgStoreAndInstantiateContract;
                toJSON(message: _153.MsgStoreAndInstantiateContract): unknown;
                fromPartial(object: {
                    authority?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _154.AccessType;
                        addresses?: string[];
                    };
                    unpinCode?: boolean;
                    admin?: string;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    source?: string;
                    builder?: string;
                    codeHash?: Uint8Array;
                }): _153.MsgStoreAndInstantiateContract;
                fromSDK(object: _153.MsgStoreAndInstantiateContractSDKType): _153.MsgStoreAndInstantiateContract;
                toSDK(message: _153.MsgStoreAndInstantiateContract): _153.MsgStoreAndInstantiateContractSDKType;
                fromAmino(object: _153.MsgStoreAndInstantiateContractAmino): _153.MsgStoreAndInstantiateContract;
                toAmino(message: _153.MsgStoreAndInstantiateContract): _153.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _153.MsgStoreAndInstantiateContractAminoMsg): _153.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _153.MsgStoreAndInstantiateContract): _153.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _153.MsgStoreAndInstantiateContractProtoMsg): _153.MsgStoreAndInstantiateContract;
                toProto(message: _153.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _153.MsgStoreAndInstantiateContract): _153.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _153.MsgStoreAndInstantiateContractResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgStoreAndInstantiateContractResponse;
                fromJSON(object: any): _153.MsgStoreAndInstantiateContractResponse;
                toJSON(message: _153.MsgStoreAndInstantiateContractResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _153.MsgStoreAndInstantiateContractResponse;
                fromSDK(object: _153.MsgStoreAndInstantiateContractResponseSDKType): _153.MsgStoreAndInstantiateContractResponse;
                toSDK(message: _153.MsgStoreAndInstantiateContractResponse): _153.MsgStoreAndInstantiateContractResponseSDKType;
                fromAmino(object: _153.MsgStoreAndInstantiateContractResponseAmino): _153.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _153.MsgStoreAndInstantiateContractResponse): _153.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _153.MsgStoreAndInstantiateContractResponseAminoMsg): _153.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _153.MsgStoreAndInstantiateContractResponse): _153.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _153.MsgStoreAndInstantiateContractResponseProtoMsg): _153.MsgStoreAndInstantiateContractResponse;
                toProto(message: _153.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _153.MsgStoreAndInstantiateContractResponse): _153.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryContractInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryContractInfoRequest;
                fromJSON(object: any): _152.QueryContractInfoRequest;
                toJSON(message: _152.QueryContractInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _152.QueryContractInfoRequest;
                fromSDK(object: _152.QueryContractInfoRequestSDKType): _152.QueryContractInfoRequest;
                toSDK(message: _152.QueryContractInfoRequest): _152.QueryContractInfoRequestSDKType;
                fromAmino(object: _152.QueryContractInfoRequestAmino): _152.QueryContractInfoRequest;
                toAmino(message: _152.QueryContractInfoRequest): _152.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _152.QueryContractInfoRequestAminoMsg): _152.QueryContractInfoRequest;
                toAminoMsg(message: _152.QueryContractInfoRequest): _152.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _152.QueryContractInfoRequestProtoMsg): _152.QueryContractInfoRequest;
                toProto(message: _152.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _152.QueryContractInfoRequest): _152.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryContractInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryContractInfoResponse;
                fromJSON(object: any): _152.QueryContractInfoResponse;
                toJSON(message: _152.QueryContractInfoResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    contractInfo?: {
                        codeId?: bigint;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: bigint;
                            txIndex?: bigint;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _152.QueryContractInfoResponse;
                fromSDK(object: _152.QueryContractInfoResponseSDKType): _152.QueryContractInfoResponse;
                toSDK(message: _152.QueryContractInfoResponse): _152.QueryContractInfoResponseSDKType;
                fromAmino(object: _152.QueryContractInfoResponseAmino): _152.QueryContractInfoResponse;
                toAmino(message: _152.QueryContractInfoResponse): _152.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _152.QueryContractInfoResponseAminoMsg): _152.QueryContractInfoResponse;
                toAminoMsg(message: _152.QueryContractInfoResponse): _152.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _152.QueryContractInfoResponseProtoMsg): _152.QueryContractInfoResponse;
                toProto(message: _152.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _152.QueryContractInfoResponse): _152.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryContractHistoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryContractHistoryRequest;
                fromJSON(object: any): _152.QueryContractHistoryRequest;
                toJSON(message: _152.QueryContractHistoryRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _152.QueryContractHistoryRequest;
                fromSDK(object: _152.QueryContractHistoryRequestSDKType): _152.QueryContractHistoryRequest;
                toSDK(message: _152.QueryContractHistoryRequest): _152.QueryContractHistoryRequestSDKType;
                fromAmino(object: _152.QueryContractHistoryRequestAmino): _152.QueryContractHistoryRequest;
                toAmino(message: _152.QueryContractHistoryRequest): _152.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _152.QueryContractHistoryRequestAminoMsg): _152.QueryContractHistoryRequest;
                toAminoMsg(message: _152.QueryContractHistoryRequest): _152.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _152.QueryContractHistoryRequestProtoMsg): _152.QueryContractHistoryRequest;
                toProto(message: _152.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _152.QueryContractHistoryRequest): _152.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryContractHistoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryContractHistoryResponse;
                fromJSON(object: any): _152.QueryContractHistoryResponse;
                toJSON(message: _152.QueryContractHistoryResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        operation?: _154.ContractCodeHistoryOperationType;
                        codeId?: bigint;
                        updated?: {
                            blockHeight?: bigint;
                            txIndex?: bigint;
                        };
                        msg?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _152.QueryContractHistoryResponse;
                fromSDK(object: _152.QueryContractHistoryResponseSDKType): _152.QueryContractHistoryResponse;
                toSDK(message: _152.QueryContractHistoryResponse): _152.QueryContractHistoryResponseSDKType;
                fromAmino(object: _152.QueryContractHistoryResponseAmino): _152.QueryContractHistoryResponse;
                toAmino(message: _152.QueryContractHistoryResponse): _152.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _152.QueryContractHistoryResponseAminoMsg): _152.QueryContractHistoryResponse;
                toAminoMsg(message: _152.QueryContractHistoryResponse): _152.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _152.QueryContractHistoryResponseProtoMsg): _152.QueryContractHistoryResponse;
                toProto(message: _152.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _152.QueryContractHistoryResponse): _152.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryContractsByCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryContractsByCodeRequest;
                fromJSON(object: any): _152.QueryContractsByCodeRequest;
                toJSON(message: _152.QueryContractsByCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _152.QueryContractsByCodeRequest;
                fromSDK(object: _152.QueryContractsByCodeRequestSDKType): _152.QueryContractsByCodeRequest;
                toSDK(message: _152.QueryContractsByCodeRequest): _152.QueryContractsByCodeRequestSDKType;
                fromAmino(object: _152.QueryContractsByCodeRequestAmino): _152.QueryContractsByCodeRequest;
                toAmino(message: _152.QueryContractsByCodeRequest): _152.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _152.QueryContractsByCodeRequestAminoMsg): _152.QueryContractsByCodeRequest;
                toAminoMsg(message: _152.QueryContractsByCodeRequest): _152.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _152.QueryContractsByCodeRequestProtoMsg): _152.QueryContractsByCodeRequest;
                toProto(message: _152.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _152.QueryContractsByCodeRequest): _152.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryContractsByCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryContractsByCodeResponse;
                fromJSON(object: any): _152.QueryContractsByCodeResponse;
                toJSON(message: _152.QueryContractsByCodeResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _152.QueryContractsByCodeResponse;
                fromSDK(object: _152.QueryContractsByCodeResponseSDKType): _152.QueryContractsByCodeResponse;
                toSDK(message: _152.QueryContractsByCodeResponse): _152.QueryContractsByCodeResponseSDKType;
                fromAmino(object: _152.QueryContractsByCodeResponseAmino): _152.QueryContractsByCodeResponse;
                toAmino(message: _152.QueryContractsByCodeResponse): _152.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _152.QueryContractsByCodeResponseAminoMsg): _152.QueryContractsByCodeResponse;
                toAminoMsg(message: _152.QueryContractsByCodeResponse): _152.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _152.QueryContractsByCodeResponseProtoMsg): _152.QueryContractsByCodeResponse;
                toProto(message: _152.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _152.QueryContractsByCodeResponse): _152.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryAllContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryAllContractStateRequest;
                fromJSON(object: any): _152.QueryAllContractStateRequest;
                toJSON(message: _152.QueryAllContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _152.QueryAllContractStateRequest;
                fromSDK(object: _152.QueryAllContractStateRequestSDKType): _152.QueryAllContractStateRequest;
                toSDK(message: _152.QueryAllContractStateRequest): _152.QueryAllContractStateRequestSDKType;
                fromAmino(object: _152.QueryAllContractStateRequestAmino): _152.QueryAllContractStateRequest;
                toAmino(message: _152.QueryAllContractStateRequest): _152.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _152.QueryAllContractStateRequestAminoMsg): _152.QueryAllContractStateRequest;
                toAminoMsg(message: _152.QueryAllContractStateRequest): _152.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _152.QueryAllContractStateRequestProtoMsg): _152.QueryAllContractStateRequest;
                toProto(message: _152.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _152.QueryAllContractStateRequest): _152.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryAllContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryAllContractStateResponse;
                fromJSON(object: any): _152.QueryAllContractStateResponse;
                toJSON(message: _152.QueryAllContractStateResponse): unknown;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _152.QueryAllContractStateResponse;
                fromSDK(object: _152.QueryAllContractStateResponseSDKType): _152.QueryAllContractStateResponse;
                toSDK(message: _152.QueryAllContractStateResponse): _152.QueryAllContractStateResponseSDKType;
                fromAmino(object: _152.QueryAllContractStateResponseAmino): _152.QueryAllContractStateResponse;
                toAmino(message: _152.QueryAllContractStateResponse): _152.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _152.QueryAllContractStateResponseAminoMsg): _152.QueryAllContractStateResponse;
                toAminoMsg(message: _152.QueryAllContractStateResponse): _152.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _152.QueryAllContractStateResponseProtoMsg): _152.QueryAllContractStateResponse;
                toProto(message: _152.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _152.QueryAllContractStateResponse): _152.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryRawContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryRawContractStateRequest;
                fromJSON(object: any): _152.QueryRawContractStateRequest;
                toJSON(message: _152.QueryRawContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _152.QueryRawContractStateRequest;
                fromSDK(object: _152.QueryRawContractStateRequestSDKType): _152.QueryRawContractStateRequest;
                toSDK(message: _152.QueryRawContractStateRequest): _152.QueryRawContractStateRequestSDKType;
                fromAmino(object: _152.QueryRawContractStateRequestAmino): _152.QueryRawContractStateRequest;
                toAmino(message: _152.QueryRawContractStateRequest): _152.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _152.QueryRawContractStateRequestAminoMsg): _152.QueryRawContractStateRequest;
                toAminoMsg(message: _152.QueryRawContractStateRequest): _152.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _152.QueryRawContractStateRequestProtoMsg): _152.QueryRawContractStateRequest;
                toProto(message: _152.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _152.QueryRawContractStateRequest): _152.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryRawContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryRawContractStateResponse;
                fromJSON(object: any): _152.QueryRawContractStateResponse;
                toJSON(message: _152.QueryRawContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _152.QueryRawContractStateResponse;
                fromSDK(object: _152.QueryRawContractStateResponseSDKType): _152.QueryRawContractStateResponse;
                toSDK(message: _152.QueryRawContractStateResponse): _152.QueryRawContractStateResponseSDKType;
                fromAmino(object: _152.QueryRawContractStateResponseAmino): _152.QueryRawContractStateResponse;
                toAmino(message: _152.QueryRawContractStateResponse): _152.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _152.QueryRawContractStateResponseAminoMsg): _152.QueryRawContractStateResponse;
                toAminoMsg(message: _152.QueryRawContractStateResponse): _152.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _152.QueryRawContractStateResponseProtoMsg): _152.QueryRawContractStateResponse;
                toProto(message: _152.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _152.QueryRawContractStateResponse): _152.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QuerySmartContractStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QuerySmartContractStateRequest;
                fromJSON(object: any): _152.QuerySmartContractStateRequest;
                toJSON(message: _152.QuerySmartContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _152.QuerySmartContractStateRequest;
                fromSDK(object: _152.QuerySmartContractStateRequestSDKType): _152.QuerySmartContractStateRequest;
                toSDK(message: _152.QuerySmartContractStateRequest): _152.QuerySmartContractStateRequestSDKType;
                fromAmino(object: _152.QuerySmartContractStateRequestAmino): _152.QuerySmartContractStateRequest;
                toAmino(message: _152.QuerySmartContractStateRequest): _152.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _152.QuerySmartContractStateRequestAminoMsg): _152.QuerySmartContractStateRequest;
                toAminoMsg(message: _152.QuerySmartContractStateRequest): _152.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _152.QuerySmartContractStateRequestProtoMsg): _152.QuerySmartContractStateRequest;
                toProto(message: _152.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _152.QuerySmartContractStateRequest): _152.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QuerySmartContractStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QuerySmartContractStateResponse;
                fromJSON(object: any): _152.QuerySmartContractStateResponse;
                toJSON(message: _152.QuerySmartContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _152.QuerySmartContractStateResponse;
                fromSDK(object: _152.QuerySmartContractStateResponseSDKType): _152.QuerySmartContractStateResponse;
                toSDK(message: _152.QuerySmartContractStateResponse): _152.QuerySmartContractStateResponseSDKType;
                fromAmino(object: _152.QuerySmartContractStateResponseAmino): _152.QuerySmartContractStateResponse;
                toAmino(message: _152.QuerySmartContractStateResponse): _152.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _152.QuerySmartContractStateResponseAminoMsg): _152.QuerySmartContractStateResponse;
                toAminoMsg(message: _152.QuerySmartContractStateResponse): _152.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _152.QuerySmartContractStateResponseProtoMsg): _152.QuerySmartContractStateResponse;
                toProto(message: _152.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _152.QuerySmartContractStateResponse): _152.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryCodeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryCodeRequest;
                fromJSON(object: any): _152.QueryCodeRequest;
                toJSON(message: _152.QueryCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                }): _152.QueryCodeRequest;
                fromSDK(object: _152.QueryCodeRequestSDKType): _152.QueryCodeRequest;
                toSDK(message: _152.QueryCodeRequest): _152.QueryCodeRequestSDKType;
                fromAmino(object: _152.QueryCodeRequestAmino): _152.QueryCodeRequest;
                toAmino(message: _152.QueryCodeRequest): _152.QueryCodeRequestAmino;
                fromAminoMsg(object: _152.QueryCodeRequestAminoMsg): _152.QueryCodeRequest;
                toAminoMsg(message: _152.QueryCodeRequest): _152.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _152.QueryCodeRequestProtoMsg): _152.QueryCodeRequest;
                toProto(message: _152.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _152.QueryCodeRequest): _152.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.CodeInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.CodeInfoResponse;
                fromJSON(object: any): _152.CodeInfoResponse;
                toJSON(message: _152.CodeInfoResponse): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    creator?: string;
                    dataHash?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _154.AccessType;
                        addresses?: string[];
                    };
                }): _152.CodeInfoResponse;
                fromSDK(object: _152.CodeInfoResponseSDKType): _152.CodeInfoResponse;
                toSDK(message: _152.CodeInfoResponse): _152.CodeInfoResponseSDKType;
                fromAmino(object: _152.CodeInfoResponseAmino): _152.CodeInfoResponse;
                toAmino(message: _152.CodeInfoResponse): _152.CodeInfoResponseAmino;
                fromAminoMsg(object: _152.CodeInfoResponseAminoMsg): _152.CodeInfoResponse;
                toAminoMsg(message: _152.CodeInfoResponse): _152.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _152.CodeInfoResponseProtoMsg): _152.CodeInfoResponse;
                toProto(message: _152.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _152.CodeInfoResponse): _152.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryCodeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryCodeResponse;
                fromJSON(object: any): _152.QueryCodeResponse;
                toJSON(message: _152.QueryCodeResponse): unknown;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: bigint;
                        creator?: string;
                        dataHash?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _154.AccessType;
                            addresses?: string[];
                        };
                    };
                    data?: Uint8Array;
                }): _152.QueryCodeResponse;
                fromSDK(object: _152.QueryCodeResponseSDKType): _152.QueryCodeResponse;
                toSDK(message: _152.QueryCodeResponse): _152.QueryCodeResponseSDKType;
                fromAmino(object: _152.QueryCodeResponseAmino): _152.QueryCodeResponse;
                toAmino(message: _152.QueryCodeResponse): _152.QueryCodeResponseAmino;
                fromAminoMsg(object: _152.QueryCodeResponseAminoMsg): _152.QueryCodeResponse;
                toAminoMsg(message: _152.QueryCodeResponse): _152.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _152.QueryCodeResponseProtoMsg): _152.QueryCodeResponse;
                toProto(message: _152.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _152.QueryCodeResponse): _152.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryCodesRequest;
                fromJSON(object: any): _152.QueryCodesRequest;
                toJSON(message: _152.QueryCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _152.QueryCodesRequest;
                fromSDK(object: _152.QueryCodesRequestSDKType): _152.QueryCodesRequest;
                toSDK(message: _152.QueryCodesRequest): _152.QueryCodesRequestSDKType;
                fromAmino(object: _152.QueryCodesRequestAmino): _152.QueryCodesRequest;
                toAmino(message: _152.QueryCodesRequest): _152.QueryCodesRequestAmino;
                fromAminoMsg(object: _152.QueryCodesRequestAminoMsg): _152.QueryCodesRequest;
                toAminoMsg(message: _152.QueryCodesRequest): _152.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _152.QueryCodesRequestProtoMsg): _152.QueryCodesRequest;
                toProto(message: _152.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _152.QueryCodesRequest): _152.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryCodesResponse;
                fromJSON(object: any): _152.QueryCodesResponse;
                toJSON(message: _152.QueryCodesResponse): unknown;
                fromPartial(object: {
                    codeInfos?: {
                        codeId?: bigint;
                        creator?: string;
                        dataHash?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _154.AccessType;
                            addresses?: string[];
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _152.QueryCodesResponse;
                fromSDK(object: _152.QueryCodesResponseSDKType): _152.QueryCodesResponse;
                toSDK(message: _152.QueryCodesResponse): _152.QueryCodesResponseSDKType;
                fromAmino(object: _152.QueryCodesResponseAmino): _152.QueryCodesResponse;
                toAmino(message: _152.QueryCodesResponse): _152.QueryCodesResponseAmino;
                fromAminoMsg(object: _152.QueryCodesResponseAminoMsg): _152.QueryCodesResponse;
                toAminoMsg(message: _152.QueryCodesResponse): _152.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _152.QueryCodesResponseProtoMsg): _152.QueryCodesResponse;
                toProto(message: _152.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _152.QueryCodesResponse): _152.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryPinnedCodesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryPinnedCodesRequest;
                fromJSON(object: any): _152.QueryPinnedCodesRequest;
                toJSON(message: _152.QueryPinnedCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _152.QueryPinnedCodesRequest;
                fromSDK(object: _152.QueryPinnedCodesRequestSDKType): _152.QueryPinnedCodesRequest;
                toSDK(message: _152.QueryPinnedCodesRequest): _152.QueryPinnedCodesRequestSDKType;
                fromAmino(object: _152.QueryPinnedCodesRequestAmino): _152.QueryPinnedCodesRequest;
                toAmino(message: _152.QueryPinnedCodesRequest): _152.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _152.QueryPinnedCodesRequestAminoMsg): _152.QueryPinnedCodesRequest;
                toAminoMsg(message: _152.QueryPinnedCodesRequest): _152.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _152.QueryPinnedCodesRequestProtoMsg): _152.QueryPinnedCodesRequest;
                toProto(message: _152.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _152.QueryPinnedCodesRequest): _152.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryPinnedCodesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryPinnedCodesResponse;
                fromJSON(object: any): _152.QueryPinnedCodesResponse;
                toJSON(message: _152.QueryPinnedCodesResponse): unknown;
                fromPartial(object: {
                    codeIds?: bigint[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _152.QueryPinnedCodesResponse;
                fromSDK(object: _152.QueryPinnedCodesResponseSDKType): _152.QueryPinnedCodesResponse;
                toSDK(message: _152.QueryPinnedCodesResponse): _152.QueryPinnedCodesResponseSDKType;
                fromAmino(object: _152.QueryPinnedCodesResponseAmino): _152.QueryPinnedCodesResponse;
                toAmino(message: _152.QueryPinnedCodesResponse): _152.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _152.QueryPinnedCodesResponseAminoMsg): _152.QueryPinnedCodesResponse;
                toAminoMsg(message: _152.QueryPinnedCodesResponse): _152.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _152.QueryPinnedCodesResponseProtoMsg): _152.QueryPinnedCodesResponse;
                toProto(message: _152.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _152.QueryPinnedCodesResponse): _152.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                encode(_: _152.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryParamsRequest;
                fromJSON(_: any): _152.QueryParamsRequest;
                toJSON(_: _152.QueryParamsRequest): unknown;
                fromPartial(_: {}): _152.QueryParamsRequest;
                fromSDK(_: _152.QueryParamsRequestSDKType): _152.QueryParamsRequest;
                toSDK(_: _152.QueryParamsRequest): _152.QueryParamsRequestSDKType;
                fromAmino(_: _152.QueryParamsRequestAmino): _152.QueryParamsRequest;
                toAmino(_: _152.QueryParamsRequest): _152.QueryParamsRequestAmino;
                fromAminoMsg(object: _152.QueryParamsRequestAminoMsg): _152.QueryParamsRequest;
                toAminoMsg(message: _152.QueryParamsRequest): _152.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _152.QueryParamsRequestProtoMsg): _152.QueryParamsRequest;
                toProto(message: _152.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _152.QueryParamsRequest): _152.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryParamsResponse;
                fromJSON(object: any): _152.QueryParamsResponse;
                toJSON(message: _152.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _154.AccessType;
                            addresses?: string[];
                        };
                        instantiateDefaultPermission?: _154.AccessType;
                    };
                }): _152.QueryParamsResponse;
                fromSDK(object: _152.QueryParamsResponseSDKType): _152.QueryParamsResponse;
                toSDK(message: _152.QueryParamsResponse): _152.QueryParamsResponseSDKType;
                fromAmino(object: _152.QueryParamsResponseAmino): _152.QueryParamsResponse;
                toAmino(message: _152.QueryParamsResponse): _152.QueryParamsResponseAmino;
                fromAminoMsg(object: _152.QueryParamsResponseAminoMsg): _152.QueryParamsResponse;
                toAminoMsg(message: _152.QueryParamsResponse): _152.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _152.QueryParamsResponseProtoMsg): _152.QueryParamsResponse;
                toProto(message: _152.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _152.QueryParamsResponse): _152.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryContractsByCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryContractsByCreatorRequest;
                fromJSON(object: any): _152.QueryContractsByCreatorRequest;
                toJSON(message: _152.QueryContractsByCreatorRequest): unknown;
                fromPartial(object: {
                    creatorAddress?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: bigint;
                        limit?: bigint;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _152.QueryContractsByCreatorRequest;
                fromSDK(object: _152.QueryContractsByCreatorRequestSDKType): _152.QueryContractsByCreatorRequest;
                toSDK(message: _152.QueryContractsByCreatorRequest): _152.QueryContractsByCreatorRequestSDKType;
                fromAmino(object: _152.QueryContractsByCreatorRequestAmino): _152.QueryContractsByCreatorRequest;
                toAmino(message: _152.QueryContractsByCreatorRequest): _152.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _152.QueryContractsByCreatorRequestAminoMsg): _152.QueryContractsByCreatorRequest;
                toAminoMsg(message: _152.QueryContractsByCreatorRequest): _152.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _152.QueryContractsByCreatorRequestProtoMsg): _152.QueryContractsByCreatorRequest;
                toProto(message: _152.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _152.QueryContractsByCreatorRequest): _152.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _152.QueryContractsByCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryContractsByCreatorResponse;
                fromJSON(object: any): _152.QueryContractsByCreatorResponse;
                toJSON(message: _152.QueryContractsByCreatorResponse): unknown;
                fromPartial(object: {
                    contractAddresses?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: bigint;
                    };
                }): _152.QueryContractsByCreatorResponse;
                fromSDK(object: _152.QueryContractsByCreatorResponseSDKType): _152.QueryContractsByCreatorResponse;
                toSDK(message: _152.QueryContractsByCreatorResponse): _152.QueryContractsByCreatorResponseSDKType;
                fromAmino(object: _152.QueryContractsByCreatorResponseAmino): _152.QueryContractsByCreatorResponse;
                toAmino(message: _152.QueryContractsByCreatorResponse): _152.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _152.QueryContractsByCreatorResponseAminoMsg): _152.QueryContractsByCreatorResponse;
                toAminoMsg(message: _152.QueryContractsByCreatorResponse): _152.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _152.QueryContractsByCreatorResponseProtoMsg): _152.QueryContractsByCreatorResponse;
                toProto(message: _152.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _152.QueryContractsByCreatorResponse): _152.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _151.StoreCodeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.StoreCodeProposal;
                fromJSON(object: any): _151.StoreCodeProposal;
                toJSON(message: _151.StoreCodeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _154.AccessType;
                        addresses?: string[];
                    };
                    unpinCode?: boolean;
                    source?: string;
                    builder?: string;
                    codeHash?: Uint8Array;
                }): _151.StoreCodeProposal;
                fromSDK(object: _151.StoreCodeProposalSDKType): _151.StoreCodeProposal;
                toSDK(message: _151.StoreCodeProposal): _151.StoreCodeProposalSDKType;
                fromAmino(object: _151.StoreCodeProposalAmino): _151.StoreCodeProposal;
                toAmino(message: _151.StoreCodeProposal): _151.StoreCodeProposalAmino;
                fromAminoMsg(object: _151.StoreCodeProposalAminoMsg): _151.StoreCodeProposal;
                toAminoMsg(message: _151.StoreCodeProposal): _151.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _151.StoreCodeProposalProtoMsg): _151.StoreCodeProposal;
                toProto(message: _151.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _151.StoreCodeProposal): _151.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _151.InstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.InstantiateContractProposal;
                fromJSON(object: any): _151.InstantiateContractProposal;
                toJSON(message: _151.InstantiateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: bigint;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _151.InstantiateContractProposal;
                fromSDK(object: _151.InstantiateContractProposalSDKType): _151.InstantiateContractProposal;
                toSDK(message: _151.InstantiateContractProposal): _151.InstantiateContractProposalSDKType;
                fromAmino(object: _151.InstantiateContractProposalAmino): _151.InstantiateContractProposal;
                toAmino(message: _151.InstantiateContractProposal): _151.InstantiateContractProposalAmino;
                fromAminoMsg(object: _151.InstantiateContractProposalAminoMsg): _151.InstantiateContractProposal;
                toAminoMsg(message: _151.InstantiateContractProposal): _151.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _151.InstantiateContractProposalProtoMsg): _151.InstantiateContractProposal;
                toProto(message: _151.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _151.InstantiateContractProposal): _151.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _151.InstantiateContract2Proposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.InstantiateContract2Proposal;
                fromJSON(object: any): _151.InstantiateContract2Proposal;
                toJSON(message: _151.InstantiateContract2Proposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: bigint;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    salt?: Uint8Array;
                    fixMsg?: boolean;
                }): _151.InstantiateContract2Proposal;
                fromSDK(object: _151.InstantiateContract2ProposalSDKType): _151.InstantiateContract2Proposal;
                toSDK(message: _151.InstantiateContract2Proposal): _151.InstantiateContract2ProposalSDKType;
                fromAmino(object: _151.InstantiateContract2ProposalAmino): _151.InstantiateContract2Proposal;
                toAmino(message: _151.InstantiateContract2Proposal): _151.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _151.InstantiateContract2ProposalAminoMsg): _151.InstantiateContract2Proposal;
                toAminoMsg(message: _151.InstantiateContract2Proposal): _151.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _151.InstantiateContract2ProposalProtoMsg): _151.InstantiateContract2Proposal;
                toProto(message: _151.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _151.InstantiateContract2Proposal): _151.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _151.MigrateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.MigrateContractProposal;
                fromJSON(object: any): _151.MigrateContractProposal;
                toJSON(message: _151.MigrateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: bigint;
                    msg?: Uint8Array;
                }): _151.MigrateContractProposal;
                fromSDK(object: _151.MigrateContractProposalSDKType): _151.MigrateContractProposal;
                toSDK(message: _151.MigrateContractProposal): _151.MigrateContractProposalSDKType;
                fromAmino(object: _151.MigrateContractProposalAmino): _151.MigrateContractProposal;
                toAmino(message: _151.MigrateContractProposal): _151.MigrateContractProposalAmino;
                fromAminoMsg(object: _151.MigrateContractProposalAminoMsg): _151.MigrateContractProposal;
                toAminoMsg(message: _151.MigrateContractProposal): _151.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _151.MigrateContractProposalProtoMsg): _151.MigrateContractProposal;
                toProto(message: _151.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _151.MigrateContractProposal): _151.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _151.SudoContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.SudoContractProposal;
                fromJSON(object: any): _151.SudoContractProposal;
                toJSON(message: _151.SudoContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _151.SudoContractProposal;
                fromSDK(object: _151.SudoContractProposalSDKType): _151.SudoContractProposal;
                toSDK(message: _151.SudoContractProposal): _151.SudoContractProposalSDKType;
                fromAmino(object: _151.SudoContractProposalAmino): _151.SudoContractProposal;
                toAmino(message: _151.SudoContractProposal): _151.SudoContractProposalAmino;
                fromAminoMsg(object: _151.SudoContractProposalAminoMsg): _151.SudoContractProposal;
                toAminoMsg(message: _151.SudoContractProposal): _151.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _151.SudoContractProposalProtoMsg): _151.SudoContractProposal;
                toProto(message: _151.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _151.SudoContractProposal): _151.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _151.ExecuteContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.ExecuteContractProposal;
                fromJSON(object: any): _151.ExecuteContractProposal;
                toJSON(message: _151.ExecuteContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _151.ExecuteContractProposal;
                fromSDK(object: _151.ExecuteContractProposalSDKType): _151.ExecuteContractProposal;
                toSDK(message: _151.ExecuteContractProposal): _151.ExecuteContractProposalSDKType;
                fromAmino(object: _151.ExecuteContractProposalAmino): _151.ExecuteContractProposal;
                toAmino(message: _151.ExecuteContractProposal): _151.ExecuteContractProposalAmino;
                fromAminoMsg(object: _151.ExecuteContractProposalAminoMsg): _151.ExecuteContractProposal;
                toAminoMsg(message: _151.ExecuteContractProposal): _151.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _151.ExecuteContractProposalProtoMsg): _151.ExecuteContractProposal;
                toProto(message: _151.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _151.ExecuteContractProposal): _151.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _151.UpdateAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.UpdateAdminProposal;
                fromJSON(object: any): _151.UpdateAdminProposal;
                toJSON(message: _151.UpdateAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _151.UpdateAdminProposal;
                fromSDK(object: _151.UpdateAdminProposalSDKType): _151.UpdateAdminProposal;
                toSDK(message: _151.UpdateAdminProposal): _151.UpdateAdminProposalSDKType;
                fromAmino(object: _151.UpdateAdminProposalAmino): _151.UpdateAdminProposal;
                toAmino(message: _151.UpdateAdminProposal): _151.UpdateAdminProposalAmino;
                fromAminoMsg(object: _151.UpdateAdminProposalAminoMsg): _151.UpdateAdminProposal;
                toAminoMsg(message: _151.UpdateAdminProposal): _151.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _151.UpdateAdminProposalProtoMsg): _151.UpdateAdminProposal;
                toProto(message: _151.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _151.UpdateAdminProposal): _151.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _151.ClearAdminProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.ClearAdminProposal;
                fromJSON(object: any): _151.ClearAdminProposal;
                toJSON(message: _151.ClearAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _151.ClearAdminProposal;
                fromSDK(object: _151.ClearAdminProposalSDKType): _151.ClearAdminProposal;
                toSDK(message: _151.ClearAdminProposal): _151.ClearAdminProposalSDKType;
                fromAmino(object: _151.ClearAdminProposalAmino): _151.ClearAdminProposal;
                toAmino(message: _151.ClearAdminProposal): _151.ClearAdminProposalAmino;
                fromAminoMsg(object: _151.ClearAdminProposalAminoMsg): _151.ClearAdminProposal;
                toAminoMsg(message: _151.ClearAdminProposal): _151.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _151.ClearAdminProposalProtoMsg): _151.ClearAdminProposal;
                toProto(message: _151.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _151.ClearAdminProposal): _151.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _151.PinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.PinCodesProposal;
                fromJSON(object: any): _151.PinCodesProposal;
                toJSON(message: _151.PinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: bigint[];
                }): _151.PinCodesProposal;
                fromSDK(object: _151.PinCodesProposalSDKType): _151.PinCodesProposal;
                toSDK(message: _151.PinCodesProposal): _151.PinCodesProposalSDKType;
                fromAmino(object: _151.PinCodesProposalAmino): _151.PinCodesProposal;
                toAmino(message: _151.PinCodesProposal): _151.PinCodesProposalAmino;
                fromAminoMsg(object: _151.PinCodesProposalAminoMsg): _151.PinCodesProposal;
                toAminoMsg(message: _151.PinCodesProposal): _151.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _151.PinCodesProposalProtoMsg): _151.PinCodesProposal;
                toProto(message: _151.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _151.PinCodesProposal): _151.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _151.UnpinCodesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.UnpinCodesProposal;
                fromJSON(object: any): _151.UnpinCodesProposal;
                toJSON(message: _151.UnpinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: bigint[];
                }): _151.UnpinCodesProposal;
                fromSDK(object: _151.UnpinCodesProposalSDKType): _151.UnpinCodesProposal;
                toSDK(message: _151.UnpinCodesProposal): _151.UnpinCodesProposalSDKType;
                fromAmino(object: _151.UnpinCodesProposalAmino): _151.UnpinCodesProposal;
                toAmino(message: _151.UnpinCodesProposal): _151.UnpinCodesProposalAmino;
                fromAminoMsg(object: _151.UnpinCodesProposalAminoMsg): _151.UnpinCodesProposal;
                toAminoMsg(message: _151.UnpinCodesProposal): _151.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _151.UnpinCodesProposalProtoMsg): _151.UnpinCodesProposal;
                toProto(message: _151.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _151.UnpinCodesProposal): _151.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                aminoType: string;
                encode(message: _151.AccessConfigUpdate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.AccessConfigUpdate;
                fromJSON(object: any): _151.AccessConfigUpdate;
                toJSON(message: _151.AccessConfigUpdate): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    instantiatePermission?: {
                        permission?: _154.AccessType;
                        addresses?: string[];
                    };
                }): _151.AccessConfigUpdate;
                fromSDK(object: _151.AccessConfigUpdateSDKType): _151.AccessConfigUpdate;
                toSDK(message: _151.AccessConfigUpdate): _151.AccessConfigUpdateSDKType;
                fromAmino(object: _151.AccessConfigUpdateAmino): _151.AccessConfigUpdate;
                toAmino(message: _151.AccessConfigUpdate): _151.AccessConfigUpdateAmino;
                fromAminoMsg(object: _151.AccessConfigUpdateAminoMsg): _151.AccessConfigUpdate;
                toAminoMsg(message: _151.AccessConfigUpdate): _151.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _151.AccessConfigUpdateProtoMsg): _151.AccessConfigUpdate;
                toProto(message: _151.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _151.AccessConfigUpdate): _151.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _151.UpdateInstantiateConfigProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.UpdateInstantiateConfigProposal;
                fromJSON(object: any): _151.UpdateInstantiateConfigProposal;
                toJSON(message: _151.UpdateInstantiateConfigProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    accessConfigUpdates?: {
                        codeId?: bigint;
                        instantiatePermission?: {
                            permission?: _154.AccessType;
                            addresses?: string[];
                        };
                    }[];
                }): _151.UpdateInstantiateConfigProposal;
                fromSDK(object: _151.UpdateInstantiateConfigProposalSDKType): _151.UpdateInstantiateConfigProposal;
                toSDK(message: _151.UpdateInstantiateConfigProposal): _151.UpdateInstantiateConfigProposalSDKType;
                fromAmino(object: _151.UpdateInstantiateConfigProposalAmino): _151.UpdateInstantiateConfigProposal;
                toAmino(message: _151.UpdateInstantiateConfigProposal): _151.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _151.UpdateInstantiateConfigProposalAminoMsg): _151.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _151.UpdateInstantiateConfigProposal): _151.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _151.UpdateInstantiateConfigProposalProtoMsg): _151.UpdateInstantiateConfigProposal;
                toProto(message: _151.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _151.UpdateInstantiateConfigProposal): _151.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                aminoType: string;
                encode(message: _151.StoreAndInstantiateContractProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.StoreAndInstantiateContractProposal;
                fromJSON(object: any): _151.StoreAndInstantiateContractProposal;
                toJSON(message: _151.StoreAndInstantiateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _154.AccessType;
                        addresses?: string[];
                    };
                    unpinCode?: boolean;
                    admin?: string;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    source?: string;
                    builder?: string;
                    codeHash?: Uint8Array;
                }): _151.StoreAndInstantiateContractProposal;
                fromSDK(object: _151.StoreAndInstantiateContractProposalSDKType): _151.StoreAndInstantiateContractProposal;
                toSDK(message: _151.StoreAndInstantiateContractProposal): _151.StoreAndInstantiateContractProposalSDKType;
                fromAmino(object: _151.StoreAndInstantiateContractProposalAmino): _151.StoreAndInstantiateContractProposal;
                toAmino(message: _151.StoreAndInstantiateContractProposal): _151.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _151.StoreAndInstantiateContractProposalAminoMsg): _151.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _151.StoreAndInstantiateContractProposal): _151.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _151.StoreAndInstantiateContractProposalProtoMsg): _151.StoreAndInstantiateContractProposal;
                toProto(message: _151.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _151.StoreAndInstantiateContractProposal): _151.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                aminoType: string;
                encode(message: _150.MsgIBCSend, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.MsgIBCSend;
                fromJSON(object: any): _150.MsgIBCSend;
                toJSON(message: _150.MsgIBCSend): unknown;
                fromPartial(object: {
                    channel?: string;
                    timeoutHeight?: bigint;
                    timeoutTimestamp?: bigint;
                    data?: Uint8Array;
                }): _150.MsgIBCSend;
                fromSDK(object: _150.MsgIBCSendSDKType): _150.MsgIBCSend;
                toSDK(message: _150.MsgIBCSend): _150.MsgIBCSendSDKType;
                fromAmino(object: _150.MsgIBCSendAmino): _150.MsgIBCSend;
                toAmino(message: _150.MsgIBCSend): _150.MsgIBCSendAmino;
                fromAminoMsg(object: _150.MsgIBCSendAminoMsg): _150.MsgIBCSend;
                toAminoMsg(message: _150.MsgIBCSend): _150.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _150.MsgIBCSendProtoMsg): _150.MsgIBCSend;
                toProto(message: _150.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _150.MsgIBCSend): _150.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                aminoType: string;
                encode(message: _150.MsgIBCSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.MsgIBCSendResponse;
                fromJSON(object: any): _150.MsgIBCSendResponse;
                toJSON(message: _150.MsgIBCSendResponse): unknown;
                fromPartial(object: {
                    sequence?: bigint;
                }): _150.MsgIBCSendResponse;
                fromSDK(object: _150.MsgIBCSendResponseSDKType): _150.MsgIBCSendResponse;
                toSDK(message: _150.MsgIBCSendResponse): _150.MsgIBCSendResponseSDKType;
                fromAmino(object: _150.MsgIBCSendResponseAmino): _150.MsgIBCSendResponse;
                toAmino(message: _150.MsgIBCSendResponse): _150.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _150.MsgIBCSendResponseAminoMsg): _150.MsgIBCSendResponse;
                toAminoMsg(message: _150.MsgIBCSendResponse): _150.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _150.MsgIBCSendResponseProtoMsg): _150.MsgIBCSendResponse;
                toProto(message: _150.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _150.MsgIBCSendResponse): _150.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                aminoType: string;
                encode(message: _150.MsgIBCCloseChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.MsgIBCCloseChannel;
                fromJSON(object: any): _150.MsgIBCCloseChannel;
                toJSON(message: _150.MsgIBCCloseChannel): unknown;
                fromPartial(object: {
                    channel?: string;
                }): _150.MsgIBCCloseChannel;
                fromSDK(object: _150.MsgIBCCloseChannelSDKType): _150.MsgIBCCloseChannel;
                toSDK(message: _150.MsgIBCCloseChannel): _150.MsgIBCCloseChannelSDKType;
                fromAmino(object: _150.MsgIBCCloseChannelAmino): _150.MsgIBCCloseChannel;
                toAmino(message: _150.MsgIBCCloseChannel): _150.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _150.MsgIBCCloseChannelAminoMsg): _150.MsgIBCCloseChannel;
                toAminoMsg(message: _150.MsgIBCCloseChannel): _150.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _150.MsgIBCCloseChannelProtoMsg): _150.MsgIBCCloseChannel;
                toProto(message: _150.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _150.MsgIBCCloseChannel): _150.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                encode(message: _149.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.GenesisState;
                fromJSON(object: any): _149.GenesisState;
                toJSON(message: _149.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _154.AccessType;
                            addresses?: string[];
                        };
                        instantiateDefaultPermission?: _154.AccessType;
                    };
                    codes?: {
                        codeId?: bigint;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _154.AccessType;
                                addresses?: string[];
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: bigint;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: bigint;
                                txIndex?: bigint;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                        contractCodeHistory?: {
                            operation?: _154.ContractCodeHistoryOperationType;
                            codeId?: bigint;
                            updated?: {
                                blockHeight?: bigint;
                                txIndex?: bigint;
                            };
                            msg?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: bigint;
                    }[];
                }): _149.GenesisState;
                fromSDK(object: _149.GenesisStateSDKType): _149.GenesisState;
                toSDK(message: _149.GenesisState): _149.GenesisStateSDKType;
                fromAmino(object: _149.GenesisStateAmino): _149.GenesisState;
                toAmino(message: _149.GenesisState): _149.GenesisStateAmino;
                fromAminoMsg(object: _149.GenesisStateAminoMsg): _149.GenesisState;
                toAminoMsg(message: _149.GenesisState): _149.GenesisStateAminoMsg;
                fromProtoMsg(message: _149.GenesisStateProtoMsg): _149.GenesisState;
                toProto(message: _149.GenesisState): Uint8Array;
                toProtoMsg(message: _149.GenesisState): _149.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                aminoType: string;
                encode(message: _149.Code, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.Code;
                fromJSON(object: any): _149.Code;
                toJSON(message: _149.Code): unknown;
                fromPartial(object: {
                    codeId?: bigint;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _154.AccessType;
                            addresses?: string[];
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                }): _149.Code;
                fromSDK(object: _149.CodeSDKType): _149.Code;
                toSDK(message: _149.Code): _149.CodeSDKType;
                fromAmino(object: _149.CodeAmino): _149.Code;
                toAmino(message: _149.Code): _149.CodeAmino;
                fromAminoMsg(object: _149.CodeAminoMsg): _149.Code;
                toAminoMsg(message: _149.Code): _149.CodeAminoMsg;
                fromProtoMsg(message: _149.CodeProtoMsg): _149.Code;
                toProto(message: _149.Code): Uint8Array;
                toProtoMsg(message: _149.Code): _149.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                aminoType: string;
                encode(message: _149.Contract, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.Contract;
                fromJSON(object: any): _149.Contract;
                toJSON(message: _149.Contract): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    contractInfo?: {
                        codeId?: bigint;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: bigint;
                            txIndex?: bigint;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                    contractState?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    contractCodeHistory?: {
                        operation?: _154.ContractCodeHistoryOperationType;
                        codeId?: bigint;
                        updated?: {
                            blockHeight?: bigint;
                            txIndex?: bigint;
                        };
                        msg?: Uint8Array;
                    }[];
                }): _149.Contract;
                fromSDK(object: _149.ContractSDKType): _149.Contract;
                toSDK(message: _149.Contract): _149.ContractSDKType;
                fromAmino(object: _149.ContractAmino): _149.Contract;
                toAmino(message: _149.Contract): _149.ContractAmino;
                fromAminoMsg(object: _149.ContractAminoMsg): _149.Contract;
                toAminoMsg(message: _149.Contract): _149.ContractAminoMsg;
                fromProtoMsg(message: _149.ContractProtoMsg): _149.Contract;
                toProto(message: _149.Contract): Uint8Array;
                toProtoMsg(message: _149.Contract): _149.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                aminoType: string;
                encode(message: _149.Sequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.Sequence;
                fromJSON(object: any): _149.Sequence;
                toJSON(message: _149.Sequence): unknown;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: bigint;
                }): _149.Sequence;
                fromSDK(object: _149.SequenceSDKType): _149.Sequence;
                toSDK(message: _149.Sequence): _149.SequenceSDKType;
                fromAmino(object: _149.SequenceAmino): _149.Sequence;
                toAmino(message: _149.Sequence): _149.SequenceAmino;
                fromAminoMsg(object: _149.SequenceAminoMsg): _149.Sequence;
                toAminoMsg(message: _149.Sequence): _149.SequenceAminoMsg;
                fromProtoMsg(message: _149.SequenceProtoMsg): _149.Sequence;
                toProto(message: _149.Sequence): Uint8Array;
                toProtoMsg(message: _149.Sequence): _149.SequenceProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                aminoType: string;
                encode(message: _148.ContractExecutionAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.ContractExecutionAuthorization;
                fromJSON(object: any): _148.ContractExecutionAuthorization;
                toJSON(message: _148.ContractExecutionAuthorization): unknown;
                fromPartial(object: {
                    grants?: {
                        contract?: string;
                        limit?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        filter?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _148.ContractExecutionAuthorization;
                fromSDK(object: _148.ContractExecutionAuthorizationSDKType): _148.ContractExecutionAuthorization;
                toSDK(message: _148.ContractExecutionAuthorization): _148.ContractExecutionAuthorizationSDKType;
                fromAmino(object: _148.ContractExecutionAuthorizationAmino): _148.ContractExecutionAuthorization;
                toAmino(message: _148.ContractExecutionAuthorization): _148.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _148.ContractExecutionAuthorizationAminoMsg): _148.ContractExecutionAuthorization;
                toAminoMsg(message: _148.ContractExecutionAuthorization): _148.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _148.ContractExecutionAuthorizationProtoMsg): _148.ContractExecutionAuthorization;
                toProto(message: _148.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _148.ContractExecutionAuthorization): _148.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                aminoType: string;
                encode(message: _148.ContractMigrationAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.ContractMigrationAuthorization;
                fromJSON(object: any): _148.ContractMigrationAuthorization;
                toJSON(message: _148.ContractMigrationAuthorization): unknown;
                fromPartial(object: {
                    grants?: {
                        contract?: string;
                        limit?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        filter?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _148.ContractMigrationAuthorization;
                fromSDK(object: _148.ContractMigrationAuthorizationSDKType): _148.ContractMigrationAuthorization;
                toSDK(message: _148.ContractMigrationAuthorization): _148.ContractMigrationAuthorizationSDKType;
                fromAmino(object: _148.ContractMigrationAuthorizationAmino): _148.ContractMigrationAuthorization;
                toAmino(message: _148.ContractMigrationAuthorization): _148.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _148.ContractMigrationAuthorizationAminoMsg): _148.ContractMigrationAuthorization;
                toAminoMsg(message: _148.ContractMigrationAuthorization): _148.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _148.ContractMigrationAuthorizationProtoMsg): _148.ContractMigrationAuthorization;
                toProto(message: _148.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _148.ContractMigrationAuthorization): _148.ContractMigrationAuthorizationProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                aminoType: string;
                encode(message: _148.ContractGrant, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.ContractGrant;
                fromJSON(object: any): _148.ContractGrant;
                toJSON(message: _148.ContractGrant): unknown;
                fromPartial(object: {
                    contract?: string;
                    limit?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    filter?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _148.ContractGrant;
                fromSDK(object: _148.ContractGrantSDKType): _148.ContractGrant;
                toSDK(message: _148.ContractGrant): _148.ContractGrantSDKType;
                fromAmino(object: _148.ContractGrantAmino): _148.ContractGrant;
                toAmino(message: _148.ContractGrant): _148.ContractGrantAmino;
                fromAminoMsg(object: _148.ContractGrantAminoMsg): _148.ContractGrant;
                toAminoMsg(message: _148.ContractGrant): _148.ContractGrantAminoMsg;
                fromProtoMsg(message: _148.ContractGrantProtoMsg): _148.ContractGrant;
                toProto(message: _148.ContractGrant): Uint8Array;
                toProtoMsg(message: _148.ContractGrant): _148.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                aminoType: string;
                encode(message: _148.MaxCallsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MaxCallsLimit;
                fromJSON(object: any): _148.MaxCallsLimit;
                toJSON(message: _148.MaxCallsLimit): unknown;
                fromPartial(object: {
                    remaining?: bigint;
                }): _148.MaxCallsLimit;
                fromSDK(object: _148.MaxCallsLimitSDKType): _148.MaxCallsLimit;
                toSDK(message: _148.MaxCallsLimit): _148.MaxCallsLimitSDKType;
                fromAmino(object: _148.MaxCallsLimitAmino): _148.MaxCallsLimit;
                toAmino(message: _148.MaxCallsLimit): _148.MaxCallsLimitAmino;
                fromAminoMsg(object: _148.MaxCallsLimitAminoMsg): _148.MaxCallsLimit;
                toAminoMsg(message: _148.MaxCallsLimit): _148.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _148.MaxCallsLimitProtoMsg): _148.MaxCallsLimit;
                toProto(message: _148.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _148.MaxCallsLimit): _148.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                aminoType: string;
                encode(message: _148.MaxFundsLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MaxFundsLimit;
                fromJSON(object: any): _148.MaxFundsLimit;
                toJSON(message: _148.MaxFundsLimit): unknown;
                fromPartial(object: {
                    amounts?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _148.MaxFundsLimit;
                fromSDK(object: _148.MaxFundsLimitSDKType): _148.MaxFundsLimit;
                toSDK(message: _148.MaxFundsLimit): _148.MaxFundsLimitSDKType;
                fromAmino(object: _148.MaxFundsLimitAmino): _148.MaxFundsLimit;
                toAmino(message: _148.MaxFundsLimit): _148.MaxFundsLimitAmino;
                fromAminoMsg(object: _148.MaxFundsLimitAminoMsg): _148.MaxFundsLimit;
                toAminoMsg(message: _148.MaxFundsLimit): _148.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _148.MaxFundsLimitProtoMsg): _148.MaxFundsLimit;
                toProto(message: _148.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _148.MaxFundsLimit): _148.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                aminoType: string;
                encode(message: _148.CombinedLimit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.CombinedLimit;
                fromJSON(object: any): _148.CombinedLimit;
                toJSON(message: _148.CombinedLimit): unknown;
                fromPartial(object: {
                    callsRemaining?: bigint;
                    amounts?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _148.CombinedLimit;
                fromSDK(object: _148.CombinedLimitSDKType): _148.CombinedLimit;
                toSDK(message: _148.CombinedLimit): _148.CombinedLimitSDKType;
                fromAmino(object: _148.CombinedLimitAmino): _148.CombinedLimit;
                toAmino(message: _148.CombinedLimit): _148.CombinedLimitAmino;
                fromAminoMsg(object: _148.CombinedLimitAminoMsg): _148.CombinedLimit;
                toAminoMsg(message: _148.CombinedLimit): _148.CombinedLimitAminoMsg;
                fromProtoMsg(message: _148.CombinedLimitProtoMsg): _148.CombinedLimit;
                toProto(message: _148.CombinedLimit): Uint8Array;
                toProtoMsg(message: _148.CombinedLimit): _148.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                aminoType: string;
                encode(_: _148.AllowAllMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.AllowAllMessagesFilter;
                fromJSON(_: any): _148.AllowAllMessagesFilter;
                toJSON(_: _148.AllowAllMessagesFilter): unknown;
                fromPartial(_: {}): _148.AllowAllMessagesFilter;
                fromSDK(_: _148.AllowAllMessagesFilterSDKType): _148.AllowAllMessagesFilter;
                toSDK(_: _148.AllowAllMessagesFilter): _148.AllowAllMessagesFilterSDKType;
                fromAmino(_: _148.AllowAllMessagesFilterAmino): _148.AllowAllMessagesFilter;
                toAmino(_: _148.AllowAllMessagesFilter): _148.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _148.AllowAllMessagesFilterAminoMsg): _148.AllowAllMessagesFilter;
                toAminoMsg(message: _148.AllowAllMessagesFilter): _148.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _148.AllowAllMessagesFilterProtoMsg): _148.AllowAllMessagesFilter;
                toProto(message: _148.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _148.AllowAllMessagesFilter): _148.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                aminoType: string;
                encode(message: _148.AcceptedMessageKeysFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.AcceptedMessageKeysFilter;
                fromJSON(object: any): _148.AcceptedMessageKeysFilter;
                toJSON(message: _148.AcceptedMessageKeysFilter): unknown;
                fromPartial(object: {
                    keys?: string[];
                }): _148.AcceptedMessageKeysFilter;
                fromSDK(object: _148.AcceptedMessageKeysFilterSDKType): _148.AcceptedMessageKeysFilter;
                toSDK(message: _148.AcceptedMessageKeysFilter): _148.AcceptedMessageKeysFilterSDKType;
                fromAmino(object: _148.AcceptedMessageKeysFilterAmino): _148.AcceptedMessageKeysFilter;
                toAmino(message: _148.AcceptedMessageKeysFilter): _148.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _148.AcceptedMessageKeysFilterAminoMsg): _148.AcceptedMessageKeysFilter;
                toAminoMsg(message: _148.AcceptedMessageKeysFilter): _148.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _148.AcceptedMessageKeysFilterProtoMsg): _148.AcceptedMessageKeysFilter;
                toProto(message: _148.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _148.AcceptedMessageKeysFilter): _148.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                aminoType: string;
                encode(message: _148.AcceptedMessagesFilter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.AcceptedMessagesFilter;
                fromJSON(object: any): _148.AcceptedMessagesFilter;
                toJSON(message: _148.AcceptedMessagesFilter): unknown;
                fromPartial(object: {
                    messages?: Uint8Array[];
                }): _148.AcceptedMessagesFilter;
                fromSDK(object: _148.AcceptedMessagesFilterSDKType): _148.AcceptedMessagesFilter;
                toSDK(message: _148.AcceptedMessagesFilter): _148.AcceptedMessagesFilterSDKType;
                fromAmino(object: _148.AcceptedMessagesFilterAmino): _148.AcceptedMessagesFilter;
                toAmino(message: _148.AcceptedMessagesFilter): _148.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _148.AcceptedMessagesFilterAminoMsg): _148.AcceptedMessagesFilter;
                toAminoMsg(message: _148.AcceptedMessagesFilter): _148.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _148.AcceptedMessagesFilterProtoMsg): _148.AcceptedMessagesFilter;
                toProto(message: _148.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _148.AcceptedMessagesFilter): _148.AcceptedMessagesFilterProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _257.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        totalSupplyWithoutOffset(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyWithoutOffsetResponse>;
                        supplyOfWithoutOffset(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfWithoutOffsetResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        baseDenom(request: import("../cosmos/bank/v1beta1/query").QueryBaseDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBaseDenomResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
            };
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _152.QueryContractInfoRequest): Promise<_152.QueryContractInfoResponse>;
                        contractHistory(request: _152.QueryContractHistoryRequest): Promise<_152.QueryContractHistoryResponse>;
                        contractsByCode(request: _152.QueryContractsByCodeRequest): Promise<_152.QueryContractsByCodeResponse>;
                        allContractState(request: _152.QueryAllContractStateRequest): Promise<_152.QueryAllContractStateResponse>;
                        rawContractState(request: _152.QueryRawContractStateRequest): Promise<_152.QueryRawContractStateResponse>;
                        smartContractState(request: _152.QuerySmartContractStateRequest): Promise<_152.QuerySmartContractStateResponse>;
                        code(request: _152.QueryCodeRequest): Promise<_152.QueryCodeResponse>;
                        codes(request?: _152.QueryCodesRequest): Promise<_152.QueryCodesResponse>;
                        pinnedCodes(request?: _152.QueryPinnedCodesRequest): Promise<_152.QueryPinnedCodesResponse>;
                        params(request?: _152.QueryParamsRequest): Promise<_152.QueryParamsResponse>;
                        contractsByCreator(request: _152.QueryContractsByCreatorRequest): Promise<_152.QueryContractsByCreatorResponse>;
                    };
                };
            };
        }>;
    };
}

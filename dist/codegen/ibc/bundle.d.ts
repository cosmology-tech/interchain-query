import * as _108 from "./applications/fee/v1/ack";
import * as _109 from "./applications/fee/v1/fee";
import * as _110 from "./applications/fee/v1/genesis";
import * as _111 from "./applications/fee/v1/metadata";
import * as _112 from "./applications/fee/v1/query";
import * as _113 from "./applications/fee/v1/tx";
import * as _114 from "./applications/interchain_accounts/controller/v1/controller";
import * as _115 from "./applications/interchain_accounts/controller/v1/query";
import * as _116 from "./applications/interchain_accounts/controller/v1/tx";
import * as _117 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _118 from "./applications/interchain_accounts/host/v1/host";
import * as _119 from "./applications/interchain_accounts/host/v1/query";
import * as _120 from "./applications/interchain_accounts/host/v1/tx";
import * as _121 from "./applications/interchain_accounts/v1/account";
import * as _122 from "./applications/interchain_accounts/v1/metadata";
import * as _123 from "./applications/interchain_accounts/v1/packet";
import * as _124 from "./applications/transfer/v1/authz";
import * as _125 from "./applications/transfer/v1/genesis";
import * as _126 from "./applications/transfer/v1/query";
import * as _127 from "./applications/transfer/v1/transfer";
import * as _128 from "./applications/transfer/v1/tx";
import * as _129 from "./applications/transfer/v2/packet";
import * as _130 from "./core/channel/v1/channel";
import * as _131 from "./core/channel/v1/genesis";
import * as _132 from "./core/channel/v1/query";
import * as _133 from "./core/channel/v1/tx";
import * as _134 from "./core/client/v1/client";
import * as _135 from "./core/client/v1/genesis";
import * as _136 from "./core/client/v1/query";
import * as _137 from "./core/client/v1/tx";
import * as _138 from "./core/commitment/v1/commitment";
import * as _139 from "./core/connection/v1/connection";
import * as _140 from "./core/connection/v1/genesis";
import * as _141 from "./core/connection/v1/query";
import * as _142 from "./core/connection/v1/tx";
import * as _143 from "./core/types/v1/genesis";
import * as _144 from "./lightclients/localhost/v2/localhost";
import * as _145 from "./lightclients/solomachine/v2/solomachine";
import * as _146 from "./lightclients/solomachine/v3/solomachine";
import * as _147 from "./lightclients/tendermint/v1/tendermint";
import * as _240 from "./applications/fee/v1/query.rpc.Query";
import * as _241 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _242 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _243 from "./applications/transfer/v1/query.rpc.Query";
import * as _244 from "./core/channel/v1/query.rpc.Query";
import * as _245 from "./core/client/v1/query.rpc.Query";
import * as _246 from "./core/connection/v1/query.rpc.Query";
import * as _247 from "./applications/fee/v1/tx.rpc.msg";
import * as _248 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _249 from "./applications/interchain_accounts/host/v1/tx.rpc.msg";
import * as _250 from "./applications/transfer/v1/tx.rpc.msg";
import * as _251 from "./core/channel/v1/tx.rpc.msg";
import * as _252 from "./core/client/v1/tx.rpc.msg";
import * as _253 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _247.MsgClientImpl;
                QueryClientImpl: typeof _240.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _112.QueryIncentivizedPacketsRequest): Promise<_112.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _112.QueryIncentivizedPacketRequest): Promise<_112.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _112.QueryIncentivizedPacketsForChannelRequest): Promise<_112.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _112.QueryTotalRecvFeesRequest): Promise<_112.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _112.QueryTotalAckFeesRequest): Promise<_112.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _112.QueryTotalTimeoutFeesRequest): Promise<_112.QueryTotalTimeoutFeesResponse>;
                    payee(request: _112.QueryPayeeRequest): Promise<_112.QueryPayeeResponse>;
                    counterpartyPayee(request: _112.QueryCounterpartyPayeeRequest): Promise<_112.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _112.QueryFeeEnabledChannelsRequest): Promise<_112.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _112.QueryFeeEnabledChannelRequest): Promise<_112.QueryFeeEnabledChannelResponse>;
                };
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useIncentivizedPackets: <TData = _112.QueryIncentivizedPacketsResponse>({ request, options }: _240.UseIncentivizedPacketsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                    useIncentivizedPacket: <TData_1 = _112.QueryIncentivizedPacketResponse>({ request, options }: _240.UseIncentivizedPacketQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                    useIncentivizedPacketsForChannel: <TData_2 = _112.QueryIncentivizedPacketsForChannelResponse>({ request, options }: _240.UseIncentivizedPacketsForChannelQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                    useTotalRecvFees: <TData_3 = _112.QueryTotalRecvFeesResponse>({ request, options }: _240.UseTotalRecvFeesQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                    useTotalAckFees: <TData_4 = _112.QueryTotalAckFeesResponse>({ request, options }: _240.UseTotalAckFeesQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                    useTotalTimeoutFees: <TData_5 = _112.QueryTotalTimeoutFeesResponse>({ request, options }: _240.UseTotalTimeoutFeesQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                    usePayee: <TData_6 = _112.QueryPayeeResponse>({ request, options }: _240.UsePayeeQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                    useCounterpartyPayee: <TData_7 = _112.QueryCounterpartyPayeeResponse>({ request, options }: _240.UseCounterpartyPayeeQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                    useFeeEnabledChannels: <TData_8 = _112.QueryFeeEnabledChannelsResponse>({ request, options }: _240.UseFeeEnabledChannelsQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
                    useFeeEnabledChannel: <TData_9 = _112.QueryFeeEnabledChannelResponse>({ request, options }: _240.UseFeeEnabledChannelQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _113.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _113.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _113.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _113.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _113.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _113.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _113.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _113.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _113.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _113.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _113.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _113.MsgPayPacketFeeAsync;
                        };
                    };
                    toJSON: {
                        registerPayee(value: _113.MsgRegisterPayee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        registerCounterpartyPayee(value: _113.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        payPacketFee(value: _113.MsgPayPacketFee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        payPacketFeeAsync(value: _113.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        registerPayee(value: any): {
                            typeUrl: string;
                            value: _113.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: any): {
                            typeUrl: string;
                            value: _113.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: any): {
                            typeUrl: string;
                            value: _113.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: any): {
                            typeUrl: string;
                            value: _113.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _113.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _113.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _113.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _113.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _113.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _113.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _113.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _113.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _113.MsgRegisterPayee) => _113.MsgRegisterPayeeAmino;
                        fromAmino: (object: _113.MsgRegisterPayeeAmino) => _113.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _113.MsgRegisterCounterpartyPayee) => _113.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _113.MsgRegisterCounterpartyPayeeAmino) => _113.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _113.MsgPayPacketFee) => _113.MsgPayPacketFeeAmino;
                        fromAmino: (object: _113.MsgPayPacketFeeAmino) => _113.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _113.MsgPayPacketFeeAsync) => _113.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _113.MsgPayPacketFeeAsyncAmino) => _113.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _113.MsgRegisterPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgRegisterPayee;
                    fromJSON(object: any): _113.MsgRegisterPayee;
                    toJSON(message: _113.MsgRegisterPayee): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        relayer?: string;
                        payee?: string;
                    }): _113.MsgRegisterPayee;
                    fromSDK(object: _113.MsgRegisterPayeeSDKType): _113.MsgRegisterPayee;
                    toSDK(message: _113.MsgRegisterPayee): _113.MsgRegisterPayeeSDKType;
                    fromAmino(object: _113.MsgRegisterPayeeAmino): _113.MsgRegisterPayee;
                    toAmino(message: _113.MsgRegisterPayee): _113.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _113.MsgRegisterPayeeAminoMsg): _113.MsgRegisterPayee;
                    toAminoMsg(message: _113.MsgRegisterPayee): _113.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _113.MsgRegisterPayeeProtoMsg): _113.MsgRegisterPayee;
                    toProto(message: _113.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _113.MsgRegisterPayee): _113.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _113.MsgRegisterPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgRegisterPayeeResponse;
                    fromJSON(_: any): _113.MsgRegisterPayeeResponse;
                    toJSON(_: _113.MsgRegisterPayeeResponse): unknown;
                    fromPartial(_: {}): _113.MsgRegisterPayeeResponse;
                    fromSDK(_: _113.MsgRegisterPayeeResponseSDKType): _113.MsgRegisterPayeeResponse;
                    toSDK(_: _113.MsgRegisterPayeeResponse): _113.MsgRegisterPayeeResponseSDKType;
                    fromAmino(_: _113.MsgRegisterPayeeResponseAmino): _113.MsgRegisterPayeeResponse;
                    toAmino(_: _113.MsgRegisterPayeeResponse): _113.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _113.MsgRegisterPayeeResponseAminoMsg): _113.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _113.MsgRegisterPayeeResponse): _113.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _113.MsgRegisterPayeeResponseProtoMsg): _113.MsgRegisterPayeeResponse;
                    toProto(message: _113.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _113.MsgRegisterPayeeResponse): _113.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _113.MsgRegisterCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgRegisterCounterpartyPayee;
                    fromJSON(object: any): _113.MsgRegisterCounterpartyPayee;
                    toJSON(message: _113.MsgRegisterCounterpartyPayee): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        relayer?: string;
                        counterpartyPayee?: string;
                    }): _113.MsgRegisterCounterpartyPayee;
                    fromSDK(object: _113.MsgRegisterCounterpartyPayeeSDKType): _113.MsgRegisterCounterpartyPayee;
                    toSDK(message: _113.MsgRegisterCounterpartyPayee): _113.MsgRegisterCounterpartyPayeeSDKType;
                    fromAmino(object: _113.MsgRegisterCounterpartyPayeeAmino): _113.MsgRegisterCounterpartyPayee;
                    toAmino(message: _113.MsgRegisterCounterpartyPayee): _113.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _113.MsgRegisterCounterpartyPayeeAminoMsg): _113.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _113.MsgRegisterCounterpartyPayee): _113.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _113.MsgRegisterCounterpartyPayeeProtoMsg): _113.MsgRegisterCounterpartyPayee;
                    toProto(message: _113.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _113.MsgRegisterCounterpartyPayee): _113.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _113.MsgRegisterCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgRegisterCounterpartyPayeeResponse;
                    fromJSON(_: any): _113.MsgRegisterCounterpartyPayeeResponse;
                    toJSON(_: _113.MsgRegisterCounterpartyPayeeResponse): unknown;
                    fromPartial(_: {}): _113.MsgRegisterCounterpartyPayeeResponse;
                    fromSDK(_: _113.MsgRegisterCounterpartyPayeeResponseSDKType): _113.MsgRegisterCounterpartyPayeeResponse;
                    toSDK(_: _113.MsgRegisterCounterpartyPayeeResponse): _113.MsgRegisterCounterpartyPayeeResponseSDKType;
                    fromAmino(_: _113.MsgRegisterCounterpartyPayeeResponseAmino): _113.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _113.MsgRegisterCounterpartyPayeeResponse): _113.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _113.MsgRegisterCounterpartyPayeeResponseAminoMsg): _113.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _113.MsgRegisterCounterpartyPayeeResponse): _113.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _113.MsgRegisterCounterpartyPayeeResponseProtoMsg): _113.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _113.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _113.MsgRegisterCounterpartyPayeeResponse): _113.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _113.MsgPayPacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgPayPacketFee;
                    fromJSON(object: any): _113.MsgPayPacketFee;
                    toJSON(message: _113.MsgPayPacketFee): unknown;
                    fromPartial(object: {
                        fee?: {
                            recvFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            ackFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            timeoutFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        sourcePortId?: string;
                        sourceChannelId?: string;
                        signer?: string;
                        relayers?: string[];
                    }): _113.MsgPayPacketFee;
                    fromSDK(object: _113.MsgPayPacketFeeSDKType): _113.MsgPayPacketFee;
                    toSDK(message: _113.MsgPayPacketFee): _113.MsgPayPacketFeeSDKType;
                    fromAmino(object: _113.MsgPayPacketFeeAmino): _113.MsgPayPacketFee;
                    toAmino(message: _113.MsgPayPacketFee): _113.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _113.MsgPayPacketFeeAminoMsg): _113.MsgPayPacketFee;
                    toAminoMsg(message: _113.MsgPayPacketFee): _113.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _113.MsgPayPacketFeeProtoMsg): _113.MsgPayPacketFee;
                    toProto(message: _113.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _113.MsgPayPacketFee): _113.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _113.MsgPayPacketFeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgPayPacketFeeResponse;
                    fromJSON(_: any): _113.MsgPayPacketFeeResponse;
                    toJSON(_: _113.MsgPayPacketFeeResponse): unknown;
                    fromPartial(_: {}): _113.MsgPayPacketFeeResponse;
                    fromSDK(_: _113.MsgPayPacketFeeResponseSDKType): _113.MsgPayPacketFeeResponse;
                    toSDK(_: _113.MsgPayPacketFeeResponse): _113.MsgPayPacketFeeResponseSDKType;
                    fromAmino(_: _113.MsgPayPacketFeeResponseAmino): _113.MsgPayPacketFeeResponse;
                    toAmino(_: _113.MsgPayPacketFeeResponse): _113.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _113.MsgPayPacketFeeResponseAminoMsg): _113.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _113.MsgPayPacketFeeResponse): _113.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _113.MsgPayPacketFeeResponseProtoMsg): _113.MsgPayPacketFeeResponse;
                    toProto(message: _113.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _113.MsgPayPacketFeeResponse): _113.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _113.MsgPayPacketFeeAsync, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgPayPacketFeeAsync;
                    fromJSON(object: any): _113.MsgPayPacketFeeAsync;
                    toJSON(message: _113.MsgPayPacketFeeAsync): unknown;
                    fromPartial(object: {
                        packetId?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                        };
                        packetFee?: {
                            fee?: {
                                recvFee?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                ackFee?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                timeoutFee?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                            };
                            refundAddress?: string;
                            relayers?: string[];
                        };
                    }): _113.MsgPayPacketFeeAsync;
                    fromSDK(object: _113.MsgPayPacketFeeAsyncSDKType): _113.MsgPayPacketFeeAsync;
                    toSDK(message: _113.MsgPayPacketFeeAsync): _113.MsgPayPacketFeeAsyncSDKType;
                    fromAmino(object: _113.MsgPayPacketFeeAsyncAmino): _113.MsgPayPacketFeeAsync;
                    toAmino(message: _113.MsgPayPacketFeeAsync): _113.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _113.MsgPayPacketFeeAsyncAminoMsg): _113.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _113.MsgPayPacketFeeAsync): _113.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _113.MsgPayPacketFeeAsyncProtoMsg): _113.MsgPayPacketFeeAsync;
                    toProto(message: _113.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _113.MsgPayPacketFeeAsync): _113.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _113.MsgPayPacketFeeAsyncResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.MsgPayPacketFeeAsyncResponse;
                    fromJSON(_: any): _113.MsgPayPacketFeeAsyncResponse;
                    toJSON(_: _113.MsgPayPacketFeeAsyncResponse): unknown;
                    fromPartial(_: {}): _113.MsgPayPacketFeeAsyncResponse;
                    fromSDK(_: _113.MsgPayPacketFeeAsyncResponseSDKType): _113.MsgPayPacketFeeAsyncResponse;
                    toSDK(_: _113.MsgPayPacketFeeAsyncResponse): _113.MsgPayPacketFeeAsyncResponseSDKType;
                    fromAmino(_: _113.MsgPayPacketFeeAsyncResponseAmino): _113.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _113.MsgPayPacketFeeAsyncResponse): _113.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _113.MsgPayPacketFeeAsyncResponseAminoMsg): _113.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _113.MsgPayPacketFeeAsyncResponse): _113.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _113.MsgPayPacketFeeAsyncResponseProtoMsg): _113.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _113.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _113.MsgPayPacketFeeAsyncResponse): _113.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryIncentivizedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryIncentivizedPacketsRequest;
                    fromJSON(object: any): _112.QueryIncentivizedPacketsRequest;
                    toJSON(message: _112.QueryIncentivizedPacketsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        queryHeight?: bigint;
                    }): _112.QueryIncentivizedPacketsRequest;
                    fromSDK(object: _112.QueryIncentivizedPacketsRequestSDKType): _112.QueryIncentivizedPacketsRequest;
                    toSDK(message: _112.QueryIncentivizedPacketsRequest): _112.QueryIncentivizedPacketsRequestSDKType;
                    fromAmino(object: _112.QueryIncentivizedPacketsRequestAmino): _112.QueryIncentivizedPacketsRequest;
                    toAmino(message: _112.QueryIncentivizedPacketsRequest): _112.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _112.QueryIncentivizedPacketsRequestAminoMsg): _112.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _112.QueryIncentivizedPacketsRequest): _112.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryIncentivizedPacketsRequestProtoMsg): _112.QueryIncentivizedPacketsRequest;
                    toProto(message: _112.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryIncentivizedPacketsRequest): _112.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryIncentivizedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryIncentivizedPacketsResponse;
                    fromJSON(object: any): _112.QueryIncentivizedPacketsResponse;
                    toJSON(message: _112.QueryIncentivizedPacketsResponse): unknown;
                    fromPartial(object: {
                        incentivizedPackets?: {
                            packetId?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                            };
                            packetFees?: {
                                fee?: {
                                    recvFee?: {
                                        denom?: string;
                                        amount?: string;
                                    }[];
                                    ackFee?: {
                                        denom?: string;
                                        amount?: string;
                                    }[];
                                    timeoutFee?: {
                                        denom?: string;
                                        amount?: string;
                                    }[];
                                };
                                refundAddress?: string;
                                relayers?: string[];
                            }[];
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                    }): _112.QueryIncentivizedPacketsResponse;
                    fromSDK(object: _112.QueryIncentivizedPacketsResponseSDKType): _112.QueryIncentivizedPacketsResponse;
                    toSDK(message: _112.QueryIncentivizedPacketsResponse): _112.QueryIncentivizedPacketsResponseSDKType;
                    fromAmino(object: _112.QueryIncentivizedPacketsResponseAmino): _112.QueryIncentivizedPacketsResponse;
                    toAmino(message: _112.QueryIncentivizedPacketsResponse): _112.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _112.QueryIncentivizedPacketsResponseAminoMsg): _112.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _112.QueryIncentivizedPacketsResponse): _112.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryIncentivizedPacketsResponseProtoMsg): _112.QueryIncentivizedPacketsResponse;
                    toProto(message: _112.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryIncentivizedPacketsResponse): _112.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryIncentivizedPacketRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryIncentivizedPacketRequest;
                    fromJSON(object: any): _112.QueryIncentivizedPacketRequest;
                    toJSON(message: _112.QueryIncentivizedPacketRequest): unknown;
                    fromPartial(object: {
                        packetId?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                        };
                        queryHeight?: bigint;
                    }): _112.QueryIncentivizedPacketRequest;
                    fromSDK(object: _112.QueryIncentivizedPacketRequestSDKType): _112.QueryIncentivizedPacketRequest;
                    toSDK(message: _112.QueryIncentivizedPacketRequest): _112.QueryIncentivizedPacketRequestSDKType;
                    fromAmino(object: _112.QueryIncentivizedPacketRequestAmino): _112.QueryIncentivizedPacketRequest;
                    toAmino(message: _112.QueryIncentivizedPacketRequest): _112.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _112.QueryIncentivizedPacketRequestAminoMsg): _112.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _112.QueryIncentivizedPacketRequest): _112.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryIncentivizedPacketRequestProtoMsg): _112.QueryIncentivizedPacketRequest;
                    toProto(message: _112.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryIncentivizedPacketRequest): _112.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryIncentivizedPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryIncentivizedPacketResponse;
                    fromJSON(object: any): _112.QueryIncentivizedPacketResponse;
                    toJSON(message: _112.QueryIncentivizedPacketResponse): unknown;
                    fromPartial(object: {
                        incentivizedPacket?: {
                            packetId?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                            };
                            packetFees?: {
                                fee?: {
                                    recvFee?: {
                                        denom?: string;
                                        amount?: string;
                                    }[];
                                    ackFee?: {
                                        denom?: string;
                                        amount?: string;
                                    }[];
                                    timeoutFee?: {
                                        denom?: string;
                                        amount?: string;
                                    }[];
                                };
                                refundAddress?: string;
                                relayers?: string[];
                            }[];
                        };
                    }): _112.QueryIncentivizedPacketResponse;
                    fromSDK(object: _112.QueryIncentivizedPacketResponseSDKType): _112.QueryIncentivizedPacketResponse;
                    toSDK(message: _112.QueryIncentivizedPacketResponse): _112.QueryIncentivizedPacketResponseSDKType;
                    fromAmino(object: _112.QueryIncentivizedPacketResponseAmino): _112.QueryIncentivizedPacketResponse;
                    toAmino(message: _112.QueryIncentivizedPacketResponse): _112.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _112.QueryIncentivizedPacketResponseAminoMsg): _112.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _112.QueryIncentivizedPacketResponse): _112.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryIncentivizedPacketResponseProtoMsg): _112.QueryIncentivizedPacketResponse;
                    toProto(message: _112.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryIncentivizedPacketResponse): _112.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryIncentivizedPacketsForChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryIncentivizedPacketsForChannelRequest;
                    fromJSON(object: any): _112.QueryIncentivizedPacketsForChannelRequest;
                    toJSON(message: _112.QueryIncentivizedPacketsForChannelRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        portId?: string;
                        channelId?: string;
                        queryHeight?: bigint;
                    }): _112.QueryIncentivizedPacketsForChannelRequest;
                    fromSDK(object: _112.QueryIncentivizedPacketsForChannelRequestSDKType): _112.QueryIncentivizedPacketsForChannelRequest;
                    toSDK(message: _112.QueryIncentivizedPacketsForChannelRequest): _112.QueryIncentivizedPacketsForChannelRequestSDKType;
                    fromAmino(object: _112.QueryIncentivizedPacketsForChannelRequestAmino): _112.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _112.QueryIncentivizedPacketsForChannelRequest): _112.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _112.QueryIncentivizedPacketsForChannelRequestAminoMsg): _112.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _112.QueryIncentivizedPacketsForChannelRequest): _112.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryIncentivizedPacketsForChannelRequestProtoMsg): _112.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _112.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryIncentivizedPacketsForChannelRequest): _112.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryIncentivizedPacketsForChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryIncentivizedPacketsForChannelResponse;
                    fromJSON(object: any): _112.QueryIncentivizedPacketsForChannelResponse;
                    toJSON(message: _112.QueryIncentivizedPacketsForChannelResponse): unknown;
                    fromPartial(object: {
                        incentivizedPackets?: {
                            packetId?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                            };
                            packetFees?: {
                                fee?: {
                                    recvFee?: {
                                        denom?: string;
                                        amount?: string;
                                    }[];
                                    ackFee?: {
                                        denom?: string;
                                        amount?: string;
                                    }[];
                                    timeoutFee?: {
                                        denom?: string;
                                        amount?: string;
                                    }[];
                                };
                                refundAddress?: string;
                                relayers?: string[];
                            }[];
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                    }): _112.QueryIncentivizedPacketsForChannelResponse;
                    fromSDK(object: _112.QueryIncentivizedPacketsForChannelResponseSDKType): _112.QueryIncentivizedPacketsForChannelResponse;
                    toSDK(message: _112.QueryIncentivizedPacketsForChannelResponse): _112.QueryIncentivizedPacketsForChannelResponseSDKType;
                    fromAmino(object: _112.QueryIncentivizedPacketsForChannelResponseAmino): _112.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _112.QueryIncentivizedPacketsForChannelResponse): _112.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _112.QueryIncentivizedPacketsForChannelResponseAminoMsg): _112.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _112.QueryIncentivizedPacketsForChannelResponse): _112.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryIncentivizedPacketsForChannelResponseProtoMsg): _112.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _112.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryIncentivizedPacketsForChannelResponse): _112.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryTotalRecvFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryTotalRecvFeesRequest;
                    fromJSON(object: any): _112.QueryTotalRecvFeesRequest;
                    toJSON(message: _112.QueryTotalRecvFeesRequest): unknown;
                    fromPartial(object: {
                        packetId?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                        };
                    }): _112.QueryTotalRecvFeesRequest;
                    fromSDK(object: _112.QueryTotalRecvFeesRequestSDKType): _112.QueryTotalRecvFeesRequest;
                    toSDK(message: _112.QueryTotalRecvFeesRequest): _112.QueryTotalRecvFeesRequestSDKType;
                    fromAmino(object: _112.QueryTotalRecvFeesRequestAmino): _112.QueryTotalRecvFeesRequest;
                    toAmino(message: _112.QueryTotalRecvFeesRequest): _112.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _112.QueryTotalRecvFeesRequestAminoMsg): _112.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _112.QueryTotalRecvFeesRequest): _112.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryTotalRecvFeesRequestProtoMsg): _112.QueryTotalRecvFeesRequest;
                    toProto(message: _112.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryTotalRecvFeesRequest): _112.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryTotalRecvFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryTotalRecvFeesResponse;
                    fromJSON(object: any): _112.QueryTotalRecvFeesResponse;
                    toJSON(message: _112.QueryTotalRecvFeesResponse): unknown;
                    fromPartial(object: {
                        recvFees?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _112.QueryTotalRecvFeesResponse;
                    fromSDK(object: _112.QueryTotalRecvFeesResponseSDKType): _112.QueryTotalRecvFeesResponse;
                    toSDK(message: _112.QueryTotalRecvFeesResponse): _112.QueryTotalRecvFeesResponseSDKType;
                    fromAmino(object: _112.QueryTotalRecvFeesResponseAmino): _112.QueryTotalRecvFeesResponse;
                    toAmino(message: _112.QueryTotalRecvFeesResponse): _112.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _112.QueryTotalRecvFeesResponseAminoMsg): _112.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _112.QueryTotalRecvFeesResponse): _112.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryTotalRecvFeesResponseProtoMsg): _112.QueryTotalRecvFeesResponse;
                    toProto(message: _112.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryTotalRecvFeesResponse): _112.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryTotalAckFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryTotalAckFeesRequest;
                    fromJSON(object: any): _112.QueryTotalAckFeesRequest;
                    toJSON(message: _112.QueryTotalAckFeesRequest): unknown;
                    fromPartial(object: {
                        packetId?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                        };
                    }): _112.QueryTotalAckFeesRequest;
                    fromSDK(object: _112.QueryTotalAckFeesRequestSDKType): _112.QueryTotalAckFeesRequest;
                    toSDK(message: _112.QueryTotalAckFeesRequest): _112.QueryTotalAckFeesRequestSDKType;
                    fromAmino(object: _112.QueryTotalAckFeesRequestAmino): _112.QueryTotalAckFeesRequest;
                    toAmino(message: _112.QueryTotalAckFeesRequest): _112.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _112.QueryTotalAckFeesRequestAminoMsg): _112.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _112.QueryTotalAckFeesRequest): _112.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryTotalAckFeesRequestProtoMsg): _112.QueryTotalAckFeesRequest;
                    toProto(message: _112.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryTotalAckFeesRequest): _112.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryTotalAckFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryTotalAckFeesResponse;
                    fromJSON(object: any): _112.QueryTotalAckFeesResponse;
                    toJSON(message: _112.QueryTotalAckFeesResponse): unknown;
                    fromPartial(object: {
                        ackFees?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _112.QueryTotalAckFeesResponse;
                    fromSDK(object: _112.QueryTotalAckFeesResponseSDKType): _112.QueryTotalAckFeesResponse;
                    toSDK(message: _112.QueryTotalAckFeesResponse): _112.QueryTotalAckFeesResponseSDKType;
                    fromAmino(object: _112.QueryTotalAckFeesResponseAmino): _112.QueryTotalAckFeesResponse;
                    toAmino(message: _112.QueryTotalAckFeesResponse): _112.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _112.QueryTotalAckFeesResponseAminoMsg): _112.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _112.QueryTotalAckFeesResponse): _112.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryTotalAckFeesResponseProtoMsg): _112.QueryTotalAckFeesResponse;
                    toProto(message: _112.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryTotalAckFeesResponse): _112.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryTotalTimeoutFeesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryTotalTimeoutFeesRequest;
                    fromJSON(object: any): _112.QueryTotalTimeoutFeesRequest;
                    toJSON(message: _112.QueryTotalTimeoutFeesRequest): unknown;
                    fromPartial(object: {
                        packetId?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                        };
                    }): _112.QueryTotalTimeoutFeesRequest;
                    fromSDK(object: _112.QueryTotalTimeoutFeesRequestSDKType): _112.QueryTotalTimeoutFeesRequest;
                    toSDK(message: _112.QueryTotalTimeoutFeesRequest): _112.QueryTotalTimeoutFeesRequestSDKType;
                    fromAmino(object: _112.QueryTotalTimeoutFeesRequestAmino): _112.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _112.QueryTotalTimeoutFeesRequest): _112.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _112.QueryTotalTimeoutFeesRequestAminoMsg): _112.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _112.QueryTotalTimeoutFeesRequest): _112.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryTotalTimeoutFeesRequestProtoMsg): _112.QueryTotalTimeoutFeesRequest;
                    toProto(message: _112.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryTotalTimeoutFeesRequest): _112.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryTotalTimeoutFeesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryTotalTimeoutFeesResponse;
                    fromJSON(object: any): _112.QueryTotalTimeoutFeesResponse;
                    toJSON(message: _112.QueryTotalTimeoutFeesResponse): unknown;
                    fromPartial(object: {
                        timeoutFees?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _112.QueryTotalTimeoutFeesResponse;
                    fromSDK(object: _112.QueryTotalTimeoutFeesResponseSDKType): _112.QueryTotalTimeoutFeesResponse;
                    toSDK(message: _112.QueryTotalTimeoutFeesResponse): _112.QueryTotalTimeoutFeesResponseSDKType;
                    fromAmino(object: _112.QueryTotalTimeoutFeesResponseAmino): _112.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _112.QueryTotalTimeoutFeesResponse): _112.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _112.QueryTotalTimeoutFeesResponseAminoMsg): _112.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _112.QueryTotalTimeoutFeesResponse): _112.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryTotalTimeoutFeesResponseProtoMsg): _112.QueryTotalTimeoutFeesResponse;
                    toProto(message: _112.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryTotalTimeoutFeesResponse): _112.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryPayeeRequest;
                    fromJSON(object: any): _112.QueryPayeeRequest;
                    toJSON(message: _112.QueryPayeeRequest): unknown;
                    fromPartial(object: {
                        channelId?: string;
                        relayer?: string;
                    }): _112.QueryPayeeRequest;
                    fromSDK(object: _112.QueryPayeeRequestSDKType): _112.QueryPayeeRequest;
                    toSDK(message: _112.QueryPayeeRequest): _112.QueryPayeeRequestSDKType;
                    fromAmino(object: _112.QueryPayeeRequestAmino): _112.QueryPayeeRequest;
                    toAmino(message: _112.QueryPayeeRequest): _112.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _112.QueryPayeeRequestAminoMsg): _112.QueryPayeeRequest;
                    toAminoMsg(message: _112.QueryPayeeRequest): _112.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryPayeeRequestProtoMsg): _112.QueryPayeeRequest;
                    toProto(message: _112.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryPayeeRequest): _112.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryPayeeResponse;
                    fromJSON(object: any): _112.QueryPayeeResponse;
                    toJSON(message: _112.QueryPayeeResponse): unknown;
                    fromPartial(object: {
                        payeeAddress?: string;
                    }): _112.QueryPayeeResponse;
                    fromSDK(object: _112.QueryPayeeResponseSDKType): _112.QueryPayeeResponse;
                    toSDK(message: _112.QueryPayeeResponse): _112.QueryPayeeResponseSDKType;
                    fromAmino(object: _112.QueryPayeeResponseAmino): _112.QueryPayeeResponse;
                    toAmino(message: _112.QueryPayeeResponse): _112.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _112.QueryPayeeResponseAminoMsg): _112.QueryPayeeResponse;
                    toAminoMsg(message: _112.QueryPayeeResponse): _112.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryPayeeResponseProtoMsg): _112.QueryPayeeResponse;
                    toProto(message: _112.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryPayeeResponse): _112.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryCounterpartyPayeeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryCounterpartyPayeeRequest;
                    fromJSON(object: any): _112.QueryCounterpartyPayeeRequest;
                    toJSON(message: _112.QueryCounterpartyPayeeRequest): unknown;
                    fromPartial(object: {
                        channelId?: string;
                        relayer?: string;
                    }): _112.QueryCounterpartyPayeeRequest;
                    fromSDK(object: _112.QueryCounterpartyPayeeRequestSDKType): _112.QueryCounterpartyPayeeRequest;
                    toSDK(message: _112.QueryCounterpartyPayeeRequest): _112.QueryCounterpartyPayeeRequestSDKType;
                    fromAmino(object: _112.QueryCounterpartyPayeeRequestAmino): _112.QueryCounterpartyPayeeRequest;
                    toAmino(message: _112.QueryCounterpartyPayeeRequest): _112.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _112.QueryCounterpartyPayeeRequestAminoMsg): _112.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _112.QueryCounterpartyPayeeRequest): _112.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryCounterpartyPayeeRequestProtoMsg): _112.QueryCounterpartyPayeeRequest;
                    toProto(message: _112.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryCounterpartyPayeeRequest): _112.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryCounterpartyPayeeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryCounterpartyPayeeResponse;
                    fromJSON(object: any): _112.QueryCounterpartyPayeeResponse;
                    toJSON(message: _112.QueryCounterpartyPayeeResponse): unknown;
                    fromPartial(object: {
                        counterpartyPayee?: string;
                    }): _112.QueryCounterpartyPayeeResponse;
                    fromSDK(object: _112.QueryCounterpartyPayeeResponseSDKType): _112.QueryCounterpartyPayeeResponse;
                    toSDK(message: _112.QueryCounterpartyPayeeResponse): _112.QueryCounterpartyPayeeResponseSDKType;
                    fromAmino(object: _112.QueryCounterpartyPayeeResponseAmino): _112.QueryCounterpartyPayeeResponse;
                    toAmino(message: _112.QueryCounterpartyPayeeResponse): _112.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _112.QueryCounterpartyPayeeResponseAminoMsg): _112.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _112.QueryCounterpartyPayeeResponse): _112.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryCounterpartyPayeeResponseProtoMsg): _112.QueryCounterpartyPayeeResponse;
                    toProto(message: _112.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryCounterpartyPayeeResponse): _112.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryFeeEnabledChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryFeeEnabledChannelsRequest;
                    fromJSON(object: any): _112.QueryFeeEnabledChannelsRequest;
                    toJSON(message: _112.QueryFeeEnabledChannelsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        queryHeight?: bigint;
                    }): _112.QueryFeeEnabledChannelsRequest;
                    fromSDK(object: _112.QueryFeeEnabledChannelsRequestSDKType): _112.QueryFeeEnabledChannelsRequest;
                    toSDK(message: _112.QueryFeeEnabledChannelsRequest): _112.QueryFeeEnabledChannelsRequestSDKType;
                    fromAmino(object: _112.QueryFeeEnabledChannelsRequestAmino): _112.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _112.QueryFeeEnabledChannelsRequest): _112.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _112.QueryFeeEnabledChannelsRequestAminoMsg): _112.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _112.QueryFeeEnabledChannelsRequest): _112.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryFeeEnabledChannelsRequestProtoMsg): _112.QueryFeeEnabledChannelsRequest;
                    toProto(message: _112.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryFeeEnabledChannelsRequest): _112.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryFeeEnabledChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryFeeEnabledChannelsResponse;
                    fromJSON(object: any): _112.QueryFeeEnabledChannelsResponse;
                    toJSON(message: _112.QueryFeeEnabledChannelsResponse): unknown;
                    fromPartial(object: {
                        feeEnabledChannels?: {
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                    }): _112.QueryFeeEnabledChannelsResponse;
                    fromSDK(object: _112.QueryFeeEnabledChannelsResponseSDKType): _112.QueryFeeEnabledChannelsResponse;
                    toSDK(message: _112.QueryFeeEnabledChannelsResponse): _112.QueryFeeEnabledChannelsResponseSDKType;
                    fromAmino(object: _112.QueryFeeEnabledChannelsResponseAmino): _112.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _112.QueryFeeEnabledChannelsResponse): _112.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _112.QueryFeeEnabledChannelsResponseAminoMsg): _112.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _112.QueryFeeEnabledChannelsResponse): _112.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryFeeEnabledChannelsResponseProtoMsg): _112.QueryFeeEnabledChannelsResponse;
                    toProto(message: _112.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryFeeEnabledChannelsResponse): _112.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryFeeEnabledChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryFeeEnabledChannelRequest;
                    fromJSON(object: any): _112.QueryFeeEnabledChannelRequest;
                    toJSON(message: _112.QueryFeeEnabledChannelRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _112.QueryFeeEnabledChannelRequest;
                    fromSDK(object: _112.QueryFeeEnabledChannelRequestSDKType): _112.QueryFeeEnabledChannelRequest;
                    toSDK(message: _112.QueryFeeEnabledChannelRequest): _112.QueryFeeEnabledChannelRequestSDKType;
                    fromAmino(object: _112.QueryFeeEnabledChannelRequestAmino): _112.QueryFeeEnabledChannelRequest;
                    toAmino(message: _112.QueryFeeEnabledChannelRequest): _112.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _112.QueryFeeEnabledChannelRequestAminoMsg): _112.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _112.QueryFeeEnabledChannelRequest): _112.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _112.QueryFeeEnabledChannelRequestProtoMsg): _112.QueryFeeEnabledChannelRequest;
                    toProto(message: _112.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _112.QueryFeeEnabledChannelRequest): _112.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _112.QueryFeeEnabledChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.QueryFeeEnabledChannelResponse;
                    fromJSON(object: any): _112.QueryFeeEnabledChannelResponse;
                    toJSON(message: _112.QueryFeeEnabledChannelResponse): unknown;
                    fromPartial(object: {
                        feeEnabled?: boolean;
                    }): _112.QueryFeeEnabledChannelResponse;
                    fromSDK(object: _112.QueryFeeEnabledChannelResponseSDKType): _112.QueryFeeEnabledChannelResponse;
                    toSDK(message: _112.QueryFeeEnabledChannelResponse): _112.QueryFeeEnabledChannelResponseSDKType;
                    fromAmino(object: _112.QueryFeeEnabledChannelResponseAmino): _112.QueryFeeEnabledChannelResponse;
                    toAmino(message: _112.QueryFeeEnabledChannelResponse): _112.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _112.QueryFeeEnabledChannelResponseAminoMsg): _112.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _112.QueryFeeEnabledChannelResponse): _112.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _112.QueryFeeEnabledChannelResponseProtoMsg): _112.QueryFeeEnabledChannelResponse;
                    toProto(message: _112.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _112.QueryFeeEnabledChannelResponse): _112.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _111.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.Metadata;
                    fromJSON(object: any): _111.Metadata;
                    toJSON(message: _111.Metadata): unknown;
                    fromPartial(object: {
                        feeVersion?: string;
                        appVersion?: string;
                    }): _111.Metadata;
                    fromSDK(object: _111.MetadataSDKType): _111.Metadata;
                    toSDK(message: _111.Metadata): _111.MetadataSDKType;
                    fromAmino(object: _111.MetadataAmino): _111.Metadata;
                    toAmino(message: _111.Metadata): _111.MetadataAmino;
                    fromAminoMsg(object: _111.MetadataAminoMsg): _111.Metadata;
                    toAminoMsg(message: _111.Metadata): _111.MetadataAminoMsg;
                    fromProtoMsg(message: _111.MetadataProtoMsg): _111.Metadata;
                    toProto(message: _111.Metadata): Uint8Array;
                    toProtoMsg(message: _111.Metadata): _111.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _110.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.GenesisState;
                    fromJSON(object: any): _110.GenesisState;
                    toJSON(message: _110.GenesisState): unknown;
                    fromPartial(object: {
                        identifiedFees?: {
                            packetId?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                            };
                            packetFees?: {
                                fee?: {
                                    recvFee?: {
                                        denom?: string;
                                        amount?: string;
                                    }[];
                                    ackFee?: {
                                        denom?: string;
                                        amount?: string;
                                    }[];
                                    timeoutFee?: {
                                        denom?: string;
                                        amount?: string;
                                    }[];
                                };
                                refundAddress?: string;
                                relayers?: string[];
                            }[];
                        }[];
                        feeEnabledChannels?: {
                            portId?: string;
                            channelId?: string;
                        }[];
                        registeredPayees?: {
                            channelId?: string;
                            relayer?: string;
                            payee?: string;
                        }[];
                        registeredCounterpartyPayees?: {
                            channelId?: string;
                            relayer?: string;
                            counterpartyPayee?: string;
                        }[];
                        forwardRelayers?: {
                            address?: string;
                            packetId?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                            };
                        }[];
                    }): _110.GenesisState;
                    fromSDK(object: _110.GenesisStateSDKType): _110.GenesisState;
                    toSDK(message: _110.GenesisState): _110.GenesisStateSDKType;
                    fromAmino(object: _110.GenesisStateAmino): _110.GenesisState;
                    toAmino(message: _110.GenesisState): _110.GenesisStateAmino;
                    fromAminoMsg(object: _110.GenesisStateAminoMsg): _110.GenesisState;
                    toAminoMsg(message: _110.GenesisState): _110.GenesisStateAminoMsg;
                    fromProtoMsg(message: _110.GenesisStateProtoMsg): _110.GenesisState;
                    toProto(message: _110.GenesisState): Uint8Array;
                    toProtoMsg(message: _110.GenesisState): _110.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _110.FeeEnabledChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.FeeEnabledChannel;
                    fromJSON(object: any): _110.FeeEnabledChannel;
                    toJSON(message: _110.FeeEnabledChannel): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _110.FeeEnabledChannel;
                    fromSDK(object: _110.FeeEnabledChannelSDKType): _110.FeeEnabledChannel;
                    toSDK(message: _110.FeeEnabledChannel): _110.FeeEnabledChannelSDKType;
                    fromAmino(object: _110.FeeEnabledChannelAmino): _110.FeeEnabledChannel;
                    toAmino(message: _110.FeeEnabledChannel): _110.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _110.FeeEnabledChannelAminoMsg): _110.FeeEnabledChannel;
                    toAminoMsg(message: _110.FeeEnabledChannel): _110.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _110.FeeEnabledChannelProtoMsg): _110.FeeEnabledChannel;
                    toProto(message: _110.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _110.FeeEnabledChannel): _110.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _110.RegisteredPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.RegisteredPayee;
                    fromJSON(object: any): _110.RegisteredPayee;
                    toJSON(message: _110.RegisteredPayee): unknown;
                    fromPartial(object: {
                        channelId?: string;
                        relayer?: string;
                        payee?: string;
                    }): _110.RegisteredPayee;
                    fromSDK(object: _110.RegisteredPayeeSDKType): _110.RegisteredPayee;
                    toSDK(message: _110.RegisteredPayee): _110.RegisteredPayeeSDKType;
                    fromAmino(object: _110.RegisteredPayeeAmino): _110.RegisteredPayee;
                    toAmino(message: _110.RegisteredPayee): _110.RegisteredPayeeAmino;
                    fromAminoMsg(object: _110.RegisteredPayeeAminoMsg): _110.RegisteredPayee;
                    toAminoMsg(message: _110.RegisteredPayee): _110.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _110.RegisteredPayeeProtoMsg): _110.RegisteredPayee;
                    toProto(message: _110.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _110.RegisteredPayee): _110.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _110.RegisteredCounterpartyPayee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.RegisteredCounterpartyPayee;
                    fromJSON(object: any): _110.RegisteredCounterpartyPayee;
                    toJSON(message: _110.RegisteredCounterpartyPayee): unknown;
                    fromPartial(object: {
                        channelId?: string;
                        relayer?: string;
                        counterpartyPayee?: string;
                    }): _110.RegisteredCounterpartyPayee;
                    fromSDK(object: _110.RegisteredCounterpartyPayeeSDKType): _110.RegisteredCounterpartyPayee;
                    toSDK(message: _110.RegisteredCounterpartyPayee): _110.RegisteredCounterpartyPayeeSDKType;
                    fromAmino(object: _110.RegisteredCounterpartyPayeeAmino): _110.RegisteredCounterpartyPayee;
                    toAmino(message: _110.RegisteredCounterpartyPayee): _110.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _110.RegisteredCounterpartyPayeeAminoMsg): _110.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _110.RegisteredCounterpartyPayee): _110.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _110.RegisteredCounterpartyPayeeProtoMsg): _110.RegisteredCounterpartyPayee;
                    toProto(message: _110.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _110.RegisteredCounterpartyPayee): _110.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _110.ForwardRelayerAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.ForwardRelayerAddress;
                    fromJSON(object: any): _110.ForwardRelayerAddress;
                    toJSON(message: _110.ForwardRelayerAddress): unknown;
                    fromPartial(object: {
                        address?: string;
                        packetId?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                        };
                    }): _110.ForwardRelayerAddress;
                    fromSDK(object: _110.ForwardRelayerAddressSDKType): _110.ForwardRelayerAddress;
                    toSDK(message: _110.ForwardRelayerAddress): _110.ForwardRelayerAddressSDKType;
                    fromAmino(object: _110.ForwardRelayerAddressAmino): _110.ForwardRelayerAddress;
                    toAmino(message: _110.ForwardRelayerAddress): _110.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _110.ForwardRelayerAddressAminoMsg): _110.ForwardRelayerAddress;
                    toAminoMsg(message: _110.ForwardRelayerAddress): _110.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _110.ForwardRelayerAddressProtoMsg): _110.ForwardRelayerAddress;
                    toProto(message: _110.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _110.ForwardRelayerAddress): _110.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _109.Fee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.Fee;
                    fromJSON(object: any): _109.Fee;
                    toJSON(message: _109.Fee): unknown;
                    fromPartial(object: {
                        recvFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        ackFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        timeoutFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _109.Fee;
                    fromSDK(object: _109.FeeSDKType): _109.Fee;
                    toSDK(message: _109.Fee): _109.FeeSDKType;
                    fromAmino(object: _109.FeeAmino): _109.Fee;
                    toAmino(message: _109.Fee): _109.FeeAmino;
                    fromAminoMsg(object: _109.FeeAminoMsg): _109.Fee;
                    toAminoMsg(message: _109.Fee): _109.FeeAminoMsg;
                    fromProtoMsg(message: _109.FeeProtoMsg): _109.Fee;
                    toProto(message: _109.Fee): Uint8Array;
                    toProtoMsg(message: _109.Fee): _109.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _109.PacketFee, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.PacketFee;
                    fromJSON(object: any): _109.PacketFee;
                    toJSON(message: _109.PacketFee): unknown;
                    fromPartial(object: {
                        fee?: {
                            recvFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            ackFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            timeoutFee?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        refundAddress?: string;
                        relayers?: string[];
                    }): _109.PacketFee;
                    fromSDK(object: _109.PacketFeeSDKType): _109.PacketFee;
                    toSDK(message: _109.PacketFee): _109.PacketFeeSDKType;
                    fromAmino(object: _109.PacketFeeAmino): _109.PacketFee;
                    toAmino(message: _109.PacketFee): _109.PacketFeeAmino;
                    fromAminoMsg(object: _109.PacketFeeAminoMsg): _109.PacketFee;
                    toAminoMsg(message: _109.PacketFee): _109.PacketFeeAminoMsg;
                    fromProtoMsg(message: _109.PacketFeeProtoMsg): _109.PacketFee;
                    toProto(message: _109.PacketFee): Uint8Array;
                    toProtoMsg(message: _109.PacketFee): _109.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _109.PacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.PacketFees;
                    fromJSON(object: any): _109.PacketFees;
                    toJSON(message: _109.PacketFees): unknown;
                    fromPartial(object: {
                        packetFees?: {
                            fee?: {
                                recvFee?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                ackFee?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                timeoutFee?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                            };
                            refundAddress?: string;
                            relayers?: string[];
                        }[];
                    }): _109.PacketFees;
                    fromSDK(object: _109.PacketFeesSDKType): _109.PacketFees;
                    toSDK(message: _109.PacketFees): _109.PacketFeesSDKType;
                    fromAmino(object: _109.PacketFeesAmino): _109.PacketFees;
                    toAmino(message: _109.PacketFees): _109.PacketFeesAmino;
                    fromAminoMsg(object: _109.PacketFeesAminoMsg): _109.PacketFees;
                    toAminoMsg(message: _109.PacketFees): _109.PacketFeesAminoMsg;
                    fromProtoMsg(message: _109.PacketFeesProtoMsg): _109.PacketFees;
                    toProto(message: _109.PacketFees): Uint8Array;
                    toProtoMsg(message: _109.PacketFees): _109.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _109.IdentifiedPacketFees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.IdentifiedPacketFees;
                    fromJSON(object: any): _109.IdentifiedPacketFees;
                    toJSON(message: _109.IdentifiedPacketFees): unknown;
                    fromPartial(object: {
                        packetId?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                        };
                        packetFees?: {
                            fee?: {
                                recvFee?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                ackFee?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                timeoutFee?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                            };
                            refundAddress?: string;
                            relayers?: string[];
                        }[];
                    }): _109.IdentifiedPacketFees;
                    fromSDK(object: _109.IdentifiedPacketFeesSDKType): _109.IdentifiedPacketFees;
                    toSDK(message: _109.IdentifiedPacketFees): _109.IdentifiedPacketFeesSDKType;
                    fromAmino(object: _109.IdentifiedPacketFeesAmino): _109.IdentifiedPacketFees;
                    toAmino(message: _109.IdentifiedPacketFees): _109.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _109.IdentifiedPacketFeesAminoMsg): _109.IdentifiedPacketFees;
                    toAminoMsg(message: _109.IdentifiedPacketFees): _109.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _109.IdentifiedPacketFeesProtoMsg): _109.IdentifiedPacketFees;
                    toProto(message: _109.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _109.IdentifiedPacketFees): _109.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _108.IncentivizedAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.IncentivizedAcknowledgement;
                    fromJSON(object: any): _108.IncentivizedAcknowledgement;
                    toJSON(message: _108.IncentivizedAcknowledgement): unknown;
                    fromPartial(object: {
                        appAcknowledgement?: Uint8Array;
                        forwardRelayerAddress?: string;
                        underlyingAppSuccess?: boolean;
                    }): _108.IncentivizedAcknowledgement;
                    fromSDK(object: _108.IncentivizedAcknowledgementSDKType): _108.IncentivizedAcknowledgement;
                    toSDK(message: _108.IncentivizedAcknowledgement): _108.IncentivizedAcknowledgementSDKType;
                    fromAmino(object: _108.IncentivizedAcknowledgementAmino): _108.IncentivizedAcknowledgement;
                    toAmino(message: _108.IncentivizedAcknowledgement): _108.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _108.IncentivizedAcknowledgementAminoMsg): _108.IncentivizedAcknowledgement;
                    toAminoMsg(message: _108.IncentivizedAcknowledgement): _108.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _108.IncentivizedAcknowledgementProtoMsg): _108.IncentivizedAcknowledgement;
                    toProto(message: _108.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _108.IncentivizedAcknowledgement): _108.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _248.MsgClientImpl;
                    QueryClientImpl: typeof _241.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _115.QueryInterchainAccountRequest): Promise<_115.QueryInterchainAccountResponse>;
                        params(request?: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
                    };
                    createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                        useInterchainAccount: <TData = _115.QueryInterchainAccountResponse>({ request, options }: _241.UseInterchainAccountQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                        useParams: <TData_1 = _115.QueryParamsResponse>({ request, options }: _241.UseParamsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                    };
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _116.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _116.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            updateParams(value: _116.MsgUpdateParams): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _116.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _116.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _116.MsgSendTx): {
                                typeUrl: string;
                                value: _116.MsgSendTx;
                            };
                            updateParams(value: _116.MsgUpdateParams): {
                                typeUrl: string;
                                value: _116.MsgUpdateParams;
                            };
                        };
                        toJSON: {
                            registerInterchainAccount(value: _116.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: unknown;
                            };
                            sendTx(value: _116.MsgSendTx): {
                                typeUrl: string;
                                value: unknown;
                            };
                            updateParams(value: _116.MsgUpdateParams): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            registerInterchainAccount(value: any): {
                                typeUrl: string;
                                value: _116.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: any): {
                                typeUrl: string;
                                value: _116.MsgSendTx;
                            };
                            updateParams(value: any): {
                                typeUrl: string;
                                value: _116.MsgUpdateParams;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _116.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _116.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _116.MsgSendTx): {
                                typeUrl: string;
                                value: _116.MsgSendTx;
                            };
                            updateParams(value: _116.MsgUpdateParams): {
                                typeUrl: string;
                                value: _116.MsgUpdateParams;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _116.MsgRegisterInterchainAccount) => _116.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _116.MsgRegisterInterchainAccountAmino) => _116.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _116.MsgSendTx) => _116.MsgSendTxAmino;
                            fromAmino: (object: _116.MsgSendTxAmino) => _116.MsgSendTx;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams": {
                            aminoType: string;
                            toAmino: (message: _116.MsgUpdateParams) => _116.MsgUpdateParamsAmino;
                            fromAmino: (object: _116.MsgUpdateParamsAmino) => _116.MsgUpdateParams;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _116.MsgRegisterInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgRegisterInterchainAccount;
                        fromJSON(object: any): _116.MsgRegisterInterchainAccount;
                        toJSON(message: _116.MsgRegisterInterchainAccount): unknown;
                        fromPartial(object: {
                            owner?: string;
                            connectionId?: string;
                            version?: string;
                        }): _116.MsgRegisterInterchainAccount;
                        fromSDK(object: _116.MsgRegisterInterchainAccountSDKType): _116.MsgRegisterInterchainAccount;
                        toSDK(message: _116.MsgRegisterInterchainAccount): _116.MsgRegisterInterchainAccountSDKType;
                        fromAmino(object: _116.MsgRegisterInterchainAccountAmino): _116.MsgRegisterInterchainAccount;
                        toAmino(message: _116.MsgRegisterInterchainAccount): _116.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _116.MsgRegisterInterchainAccountAminoMsg): _116.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _116.MsgRegisterInterchainAccount): _116.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _116.MsgRegisterInterchainAccountProtoMsg): _116.MsgRegisterInterchainAccount;
                        toProto(message: _116.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _116.MsgRegisterInterchainAccount): _116.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _116.MsgRegisterInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgRegisterInterchainAccountResponse;
                        fromJSON(object: any): _116.MsgRegisterInterchainAccountResponse;
                        toJSON(message: _116.MsgRegisterInterchainAccountResponse): unknown;
                        fromPartial(object: {
                            channelId?: string;
                            portId?: string;
                        }): _116.MsgRegisterInterchainAccountResponse;
                        fromSDK(object: _116.MsgRegisterInterchainAccountResponseSDKType): _116.MsgRegisterInterchainAccountResponse;
                        toSDK(message: _116.MsgRegisterInterchainAccountResponse): _116.MsgRegisterInterchainAccountResponseSDKType;
                        fromAmino(object: _116.MsgRegisterInterchainAccountResponseAmino): _116.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _116.MsgRegisterInterchainAccountResponse): _116.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _116.MsgRegisterInterchainAccountResponseAminoMsg): _116.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _116.MsgRegisterInterchainAccountResponse): _116.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _116.MsgRegisterInterchainAccountResponseProtoMsg): _116.MsgRegisterInterchainAccountResponse;
                        toProto(message: _116.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _116.MsgRegisterInterchainAccountResponse): _116.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _116.MsgSendTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgSendTx;
                        fromJSON(object: any): _116.MsgSendTx;
                        toJSON(message: _116.MsgSendTx): unknown;
                        fromPartial(object: {
                            owner?: string;
                            connectionId?: string;
                            packetData?: {
                                type?: _123.Type;
                                data?: Uint8Array;
                                memo?: string;
                            };
                            relativeTimeout?: bigint;
                        }): _116.MsgSendTx;
                        fromSDK(object: _116.MsgSendTxSDKType): _116.MsgSendTx;
                        toSDK(message: _116.MsgSendTx): _116.MsgSendTxSDKType;
                        fromAmino(object: _116.MsgSendTxAmino): _116.MsgSendTx;
                        toAmino(message: _116.MsgSendTx): _116.MsgSendTxAmino;
                        fromAminoMsg(object: _116.MsgSendTxAminoMsg): _116.MsgSendTx;
                        toAminoMsg(message: _116.MsgSendTx): _116.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _116.MsgSendTxProtoMsg): _116.MsgSendTx;
                        toProto(message: _116.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _116.MsgSendTx): _116.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _116.MsgSendTxResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgSendTxResponse;
                        fromJSON(object: any): _116.MsgSendTxResponse;
                        toJSON(message: _116.MsgSendTxResponse): unknown;
                        fromPartial(object: {
                            sequence?: bigint;
                        }): _116.MsgSendTxResponse;
                        fromSDK(object: _116.MsgSendTxResponseSDKType): _116.MsgSendTxResponse;
                        toSDK(message: _116.MsgSendTxResponse): _116.MsgSendTxResponseSDKType;
                        fromAmino(object: _116.MsgSendTxResponseAmino): _116.MsgSendTxResponse;
                        toAmino(message: _116.MsgSendTxResponse): _116.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _116.MsgSendTxResponseAminoMsg): _116.MsgSendTxResponse;
                        toAminoMsg(message: _116.MsgSendTxResponse): _116.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _116.MsgSendTxResponseProtoMsg): _116.MsgSendTxResponse;
                        toProto(message: _116.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _116.MsgSendTxResponse): _116.MsgSendTxResponseProtoMsg;
                    };
                    MsgUpdateParams: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _116.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgUpdateParams;
                        fromJSON(object: any): _116.MsgUpdateParams;
                        toJSON(message: _116.MsgUpdateParams): unknown;
                        fromPartial(object: {
                            authority?: string;
                            params?: {
                                controllerEnabled?: boolean;
                            };
                        }): _116.MsgUpdateParams;
                        fromSDK(object: _116.MsgUpdateParamsSDKType): _116.MsgUpdateParams;
                        toSDK(message: _116.MsgUpdateParams): _116.MsgUpdateParamsSDKType;
                        fromAmino(object: _116.MsgUpdateParamsAmino): _116.MsgUpdateParams;
                        toAmino(message: _116.MsgUpdateParams): _116.MsgUpdateParamsAmino;
                        fromAminoMsg(object: _116.MsgUpdateParamsAminoMsg): _116.MsgUpdateParams;
                        toAminoMsg(message: _116.MsgUpdateParams): _116.MsgUpdateParamsAminoMsg;
                        fromProtoMsg(message: _116.MsgUpdateParamsProtoMsg): _116.MsgUpdateParams;
                        toProto(message: _116.MsgUpdateParams): Uint8Array;
                        toProtoMsg(message: _116.MsgUpdateParams): _116.MsgUpdateParamsProtoMsg;
                    };
                    MsgUpdateParamsResponse: {
                        typeUrl: string;
                        aminoType: string;
                        encode(_: _116.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgUpdateParamsResponse;
                        fromJSON(_: any): _116.MsgUpdateParamsResponse;
                        toJSON(_: _116.MsgUpdateParamsResponse): unknown;
                        fromPartial(_: {}): _116.MsgUpdateParamsResponse;
                        fromSDK(_: _116.MsgUpdateParamsResponseSDKType): _116.MsgUpdateParamsResponse;
                        toSDK(_: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseSDKType;
                        fromAmino(_: _116.MsgUpdateParamsResponseAmino): _116.MsgUpdateParamsResponse;
                        toAmino(_: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseAmino;
                        fromAminoMsg(object: _116.MsgUpdateParamsResponseAminoMsg): _116.MsgUpdateParamsResponse;
                        toAminoMsg(message: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseAminoMsg;
                        fromProtoMsg(message: _116.MsgUpdateParamsResponseProtoMsg): _116.MsgUpdateParamsResponse;
                        toProto(message: _116.MsgUpdateParamsResponse): Uint8Array;
                        toProtoMsg(message: _116.MsgUpdateParamsResponse): _116.MsgUpdateParamsResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _115.QueryInterchainAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryInterchainAccountRequest;
                        fromJSON(object: any): _115.QueryInterchainAccountRequest;
                        toJSON(message: _115.QueryInterchainAccountRequest): unknown;
                        fromPartial(object: {
                            owner?: string;
                            connectionId?: string;
                        }): _115.QueryInterchainAccountRequest;
                        fromSDK(object: _115.QueryInterchainAccountRequestSDKType): _115.QueryInterchainAccountRequest;
                        toSDK(message: _115.QueryInterchainAccountRequest): _115.QueryInterchainAccountRequestSDKType;
                        fromAmino(object: _115.QueryInterchainAccountRequestAmino): _115.QueryInterchainAccountRequest;
                        toAmino(message: _115.QueryInterchainAccountRequest): _115.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _115.QueryInterchainAccountRequestAminoMsg): _115.QueryInterchainAccountRequest;
                        toAminoMsg(message: _115.QueryInterchainAccountRequest): _115.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _115.QueryInterchainAccountRequestProtoMsg): _115.QueryInterchainAccountRequest;
                        toProto(message: _115.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _115.QueryInterchainAccountRequest): _115.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _115.QueryInterchainAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryInterchainAccountResponse;
                        fromJSON(object: any): _115.QueryInterchainAccountResponse;
                        toJSON(message: _115.QueryInterchainAccountResponse): unknown;
                        fromPartial(object: {
                            address?: string;
                        }): _115.QueryInterchainAccountResponse;
                        fromSDK(object: _115.QueryInterchainAccountResponseSDKType): _115.QueryInterchainAccountResponse;
                        toSDK(message: _115.QueryInterchainAccountResponse): _115.QueryInterchainAccountResponseSDKType;
                        fromAmino(object: _115.QueryInterchainAccountResponseAmino): _115.QueryInterchainAccountResponse;
                        toAmino(message: _115.QueryInterchainAccountResponse): _115.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _115.QueryInterchainAccountResponseAminoMsg): _115.QueryInterchainAccountResponse;
                        toAminoMsg(message: _115.QueryInterchainAccountResponse): _115.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _115.QueryInterchainAccountResponseProtoMsg): _115.QueryInterchainAccountResponse;
                        toProto(message: _115.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _115.QueryInterchainAccountResponse): _115.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        aminoType: string;
                        encode(_: _115.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryParamsRequest;
                        fromJSON(_: any): _115.QueryParamsRequest;
                        toJSON(_: _115.QueryParamsRequest): unknown;
                        fromPartial(_: {}): _115.QueryParamsRequest;
                        fromSDK(_: _115.QueryParamsRequestSDKType): _115.QueryParamsRequest;
                        toSDK(_: _115.QueryParamsRequest): _115.QueryParamsRequestSDKType;
                        fromAmino(_: _115.QueryParamsRequestAmino): _115.QueryParamsRequest;
                        toAmino(_: _115.QueryParamsRequest): _115.QueryParamsRequestAmino;
                        fromAminoMsg(object: _115.QueryParamsRequestAminoMsg): _115.QueryParamsRequest;
                        toAminoMsg(message: _115.QueryParamsRequest): _115.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _115.QueryParamsRequestProtoMsg): _115.QueryParamsRequest;
                        toProto(message: _115.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _115.QueryParamsRequest): _115.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _115.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryParamsResponse;
                        fromJSON(object: any): _115.QueryParamsResponse;
                        toJSON(message: _115.QueryParamsResponse): unknown;
                        fromPartial(object: {
                            params?: {
                                controllerEnabled?: boolean;
                            };
                        }): _115.QueryParamsResponse;
                        fromSDK(object: _115.QueryParamsResponseSDKType): _115.QueryParamsResponse;
                        toSDK(message: _115.QueryParamsResponse): _115.QueryParamsResponseSDKType;
                        fromAmino(object: _115.QueryParamsResponseAmino): _115.QueryParamsResponse;
                        toAmino(message: _115.QueryParamsResponse): _115.QueryParamsResponseAmino;
                        fromAminoMsg(object: _115.QueryParamsResponseAminoMsg): _115.QueryParamsResponse;
                        toAminoMsg(message: _115.QueryParamsResponse): _115.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _115.QueryParamsResponseProtoMsg): _115.QueryParamsResponse;
                        toProto(message: _115.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _115.QueryParamsResponse): _115.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _114.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.Params;
                        fromJSON(object: any): _114.Params;
                        toJSON(message: _114.Params): unknown;
                        fromPartial(object: {
                            controllerEnabled?: boolean;
                        }): _114.Params;
                        fromSDK(object: _114.ParamsSDKType): _114.Params;
                        toSDK(message: _114.Params): _114.ParamsSDKType;
                        fromAmino(object: _114.ParamsAmino): _114.Params;
                        toAmino(message: _114.Params): _114.ParamsAmino;
                        fromAminoMsg(object: _114.ParamsAminoMsg): _114.Params;
                        toAminoMsg(message: _114.Params): _114.ParamsAminoMsg;
                        fromProtoMsg(message: _114.ParamsProtoMsg): _114.Params;
                        toProto(message: _114.Params): Uint8Array;
                        toProtoMsg(message: _114.Params): _114.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _117.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.GenesisState;
                        fromJSON(object: any): _117.GenesisState;
                        toJSON(message: _117.GenesisState): unknown;
                        fromPartial(object: {
                            controllerGenesisState?: {
                                activeChannels?: {
                                    connectionId?: string;
                                    portId?: string;
                                    channelId?: string;
                                    isMiddlewareEnabled?: boolean;
                                }[];
                                interchainAccounts?: {
                                    connectionId?: string;
                                    portId?: string;
                                    accountAddress?: string;
                                }[];
                                ports?: string[];
                                params?: {
                                    controllerEnabled?: boolean;
                                };
                            };
                            hostGenesisState?: {
                                activeChannels?: {
                                    connectionId?: string;
                                    portId?: string;
                                    channelId?: string;
                                    isMiddlewareEnabled?: boolean;
                                }[];
                                interchainAccounts?: {
                                    connectionId?: string;
                                    portId?: string;
                                    accountAddress?: string;
                                }[];
                                port?: string;
                                params?: {
                                    hostEnabled?: boolean;
                                    allowMessages?: string[];
                                };
                            };
                        }): _117.GenesisState;
                        fromSDK(object: _117.GenesisStateSDKType): _117.GenesisState;
                        toSDK(message: _117.GenesisState): _117.GenesisStateSDKType;
                        fromAmino(object: _117.GenesisStateAmino): _117.GenesisState;
                        toAmino(message: _117.GenesisState): _117.GenesisStateAmino;
                        fromAminoMsg(object: _117.GenesisStateAminoMsg): _117.GenesisState;
                        toAminoMsg(message: _117.GenesisState): _117.GenesisStateAminoMsg;
                        fromProtoMsg(message: _117.GenesisStateProtoMsg): _117.GenesisState;
                        toProto(message: _117.GenesisState): Uint8Array;
                        toProtoMsg(message: _117.GenesisState): _117.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _117.ControllerGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.ControllerGenesisState;
                        fromJSON(object: any): _117.ControllerGenesisState;
                        toJSON(message: _117.ControllerGenesisState): unknown;
                        fromPartial(object: {
                            activeChannels?: {
                                connectionId?: string;
                                portId?: string;
                                channelId?: string;
                                isMiddlewareEnabled?: boolean;
                            }[];
                            interchainAccounts?: {
                                connectionId?: string;
                                portId?: string;
                                accountAddress?: string;
                            }[];
                            ports?: string[];
                            params?: {
                                controllerEnabled?: boolean;
                            };
                        }): _117.ControllerGenesisState;
                        fromSDK(object: _117.ControllerGenesisStateSDKType): _117.ControllerGenesisState;
                        toSDK(message: _117.ControllerGenesisState): _117.ControllerGenesisStateSDKType;
                        fromAmino(object: _117.ControllerGenesisStateAmino): _117.ControllerGenesisState;
                        toAmino(message: _117.ControllerGenesisState): _117.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _117.ControllerGenesisStateAminoMsg): _117.ControllerGenesisState;
                        toAminoMsg(message: _117.ControllerGenesisState): _117.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _117.ControllerGenesisStateProtoMsg): _117.ControllerGenesisState;
                        toProto(message: _117.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _117.ControllerGenesisState): _117.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _117.HostGenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.HostGenesisState;
                        fromJSON(object: any): _117.HostGenesisState;
                        toJSON(message: _117.HostGenesisState): unknown;
                        fromPartial(object: {
                            activeChannels?: {
                                connectionId?: string;
                                portId?: string;
                                channelId?: string;
                                isMiddlewareEnabled?: boolean;
                            }[];
                            interchainAccounts?: {
                                connectionId?: string;
                                portId?: string;
                                accountAddress?: string;
                            }[];
                            port?: string;
                            params?: {
                                hostEnabled?: boolean;
                                allowMessages?: string[];
                            };
                        }): _117.HostGenesisState;
                        fromSDK(object: _117.HostGenesisStateSDKType): _117.HostGenesisState;
                        toSDK(message: _117.HostGenesisState): _117.HostGenesisStateSDKType;
                        fromAmino(object: _117.HostGenesisStateAmino): _117.HostGenesisState;
                        toAmino(message: _117.HostGenesisState): _117.HostGenesisStateAmino;
                        fromAminoMsg(object: _117.HostGenesisStateAminoMsg): _117.HostGenesisState;
                        toAminoMsg(message: _117.HostGenesisState): _117.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _117.HostGenesisStateProtoMsg): _117.HostGenesisState;
                        toProto(message: _117.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _117.HostGenesisState): _117.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _117.ActiveChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.ActiveChannel;
                        fromJSON(object: any): _117.ActiveChannel;
                        toJSON(message: _117.ActiveChannel): unknown;
                        fromPartial(object: {
                            connectionId?: string;
                            portId?: string;
                            channelId?: string;
                            isMiddlewareEnabled?: boolean;
                        }): _117.ActiveChannel;
                        fromSDK(object: _117.ActiveChannelSDKType): _117.ActiveChannel;
                        toSDK(message: _117.ActiveChannel): _117.ActiveChannelSDKType;
                        fromAmino(object: _117.ActiveChannelAmino): _117.ActiveChannel;
                        toAmino(message: _117.ActiveChannel): _117.ActiveChannelAmino;
                        fromAminoMsg(object: _117.ActiveChannelAminoMsg): _117.ActiveChannel;
                        toAminoMsg(message: _117.ActiveChannel): _117.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _117.ActiveChannelProtoMsg): _117.ActiveChannel;
                        toProto(message: _117.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _117.ActiveChannel): _117.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _117.RegisteredInterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.RegisteredInterchainAccount;
                        fromJSON(object: any): _117.RegisteredInterchainAccount;
                        toJSON(message: _117.RegisteredInterchainAccount): unknown;
                        fromPartial(object: {
                            connectionId?: string;
                            portId?: string;
                            accountAddress?: string;
                        }): _117.RegisteredInterchainAccount;
                        fromSDK(object: _117.RegisteredInterchainAccountSDKType): _117.RegisteredInterchainAccount;
                        toSDK(message: _117.RegisteredInterchainAccount): _117.RegisteredInterchainAccountSDKType;
                        fromAmino(object: _117.RegisteredInterchainAccountAmino): _117.RegisteredInterchainAccount;
                        toAmino(message: _117.RegisteredInterchainAccount): _117.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _117.RegisteredInterchainAccountAminoMsg): _117.RegisteredInterchainAccount;
                        toAminoMsg(message: _117.RegisteredInterchainAccount): _117.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _117.RegisteredInterchainAccountProtoMsg): _117.RegisteredInterchainAccount;
                        toProto(message: _117.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _117.RegisteredInterchainAccount): _117.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    MsgClientImpl: typeof _249.MsgClientImpl;
                    QueryClientImpl: typeof _242.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                    };
                    createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                        useParams: <TData = _119.QueryParamsResponse>({ request, options }: _242.UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                    };
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            updateParams(value: _120.MsgUpdateParams): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            updateParams(value: _120.MsgUpdateParams): {
                                typeUrl: string;
                                value: _120.MsgUpdateParams;
                            };
                        };
                        toJSON: {
                            updateParams(value: _120.MsgUpdateParams): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            updateParams(value: any): {
                                typeUrl: string;
                                value: _120.MsgUpdateParams;
                            };
                        };
                        fromPartial: {
                            updateParams(value: _120.MsgUpdateParams): {
                                typeUrl: string;
                                value: _120.MsgUpdateParams;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.host.v1.MsgUpdateParams": {
                            aminoType: string;
                            toAmino: (message: _120.MsgUpdateParams) => _120.MsgUpdateParamsAmino;
                            fromAmino: (object: _120.MsgUpdateParamsAmino) => _120.MsgUpdateParams;
                        };
                    };
                    MsgUpdateParams: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _120.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.MsgUpdateParams;
                        fromJSON(object: any): _120.MsgUpdateParams;
                        toJSON(message: _120.MsgUpdateParams): unknown;
                        fromPartial(object: {
                            authority?: string;
                            params?: {
                                hostEnabled?: boolean;
                                allowMessages?: string[];
                            };
                        }): _120.MsgUpdateParams;
                        fromSDK(object: _120.MsgUpdateParamsSDKType): _120.MsgUpdateParams;
                        toSDK(message: _120.MsgUpdateParams): _120.MsgUpdateParamsSDKType;
                        fromAmino(object: _120.MsgUpdateParamsAmino): _120.MsgUpdateParams;
                        toAmino(message: _120.MsgUpdateParams): _120.MsgUpdateParamsAmino;
                        fromAminoMsg(object: _120.MsgUpdateParamsAminoMsg): _120.MsgUpdateParams;
                        toAminoMsg(message: _120.MsgUpdateParams): _120.MsgUpdateParamsAminoMsg;
                        fromProtoMsg(message: _120.MsgUpdateParamsProtoMsg): _120.MsgUpdateParams;
                        toProto(message: _120.MsgUpdateParams): Uint8Array;
                        toProtoMsg(message: _120.MsgUpdateParams): _120.MsgUpdateParamsProtoMsg;
                    };
                    MsgUpdateParamsResponse: {
                        typeUrl: string;
                        aminoType: string;
                        encode(_: _120.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.MsgUpdateParamsResponse;
                        fromJSON(_: any): _120.MsgUpdateParamsResponse;
                        toJSON(_: _120.MsgUpdateParamsResponse): unknown;
                        fromPartial(_: {}): _120.MsgUpdateParamsResponse;
                        fromSDK(_: _120.MsgUpdateParamsResponseSDKType): _120.MsgUpdateParamsResponse;
                        toSDK(_: _120.MsgUpdateParamsResponse): _120.MsgUpdateParamsResponseSDKType;
                        fromAmino(_: _120.MsgUpdateParamsResponseAmino): _120.MsgUpdateParamsResponse;
                        toAmino(_: _120.MsgUpdateParamsResponse): _120.MsgUpdateParamsResponseAmino;
                        fromAminoMsg(object: _120.MsgUpdateParamsResponseAminoMsg): _120.MsgUpdateParamsResponse;
                        toAminoMsg(message: _120.MsgUpdateParamsResponse): _120.MsgUpdateParamsResponseAminoMsg;
                        fromProtoMsg(message: _120.MsgUpdateParamsResponseProtoMsg): _120.MsgUpdateParamsResponse;
                        toProto(message: _120.MsgUpdateParamsResponse): Uint8Array;
                        toProtoMsg(message: _120.MsgUpdateParamsResponse): _120.MsgUpdateParamsResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        aminoType: string;
                        encode(_: _119.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryParamsRequest;
                        fromJSON(_: any): _119.QueryParamsRequest;
                        toJSON(_: _119.QueryParamsRequest): unknown;
                        fromPartial(_: {}): _119.QueryParamsRequest;
                        fromSDK(_: _119.QueryParamsRequestSDKType): _119.QueryParamsRequest;
                        toSDK(_: _119.QueryParamsRequest): _119.QueryParamsRequestSDKType;
                        fromAmino(_: _119.QueryParamsRequestAmino): _119.QueryParamsRequest;
                        toAmino(_: _119.QueryParamsRequest): _119.QueryParamsRequestAmino;
                        fromAminoMsg(object: _119.QueryParamsRequestAminoMsg): _119.QueryParamsRequest;
                        toAminoMsg(message: _119.QueryParamsRequest): _119.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _119.QueryParamsRequestProtoMsg): _119.QueryParamsRequest;
                        toProto(message: _119.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _119.QueryParamsRequest): _119.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _119.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryParamsResponse;
                        fromJSON(object: any): _119.QueryParamsResponse;
                        toJSON(message: _119.QueryParamsResponse): unknown;
                        fromPartial(object: {
                            params?: {
                                hostEnabled?: boolean;
                                allowMessages?: string[];
                            };
                        }): _119.QueryParamsResponse;
                        fromSDK(object: _119.QueryParamsResponseSDKType): _119.QueryParamsResponse;
                        toSDK(message: _119.QueryParamsResponse): _119.QueryParamsResponseSDKType;
                        fromAmino(object: _119.QueryParamsResponseAmino): _119.QueryParamsResponse;
                        toAmino(message: _119.QueryParamsResponse): _119.QueryParamsResponseAmino;
                        fromAminoMsg(object: _119.QueryParamsResponseAminoMsg): _119.QueryParamsResponse;
                        toAminoMsg(message: _119.QueryParamsResponse): _119.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _119.QueryParamsResponseProtoMsg): _119.QueryParamsResponse;
                        toProto(message: _119.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _119.QueryParamsResponse): _119.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        aminoType: string;
                        encode(message: _118.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.Params;
                        fromJSON(object: any): _118.Params;
                        toJSON(message: _118.Params): unknown;
                        fromPartial(object: {
                            hostEnabled?: boolean;
                            allowMessages?: string[];
                        }): _118.Params;
                        fromSDK(object: _118.ParamsSDKType): _118.Params;
                        toSDK(message: _118.Params): _118.ParamsSDKType;
                        fromAmino(object: _118.ParamsAmino): _118.Params;
                        toAmino(message: _118.Params): _118.ParamsAmino;
                        fromAminoMsg(object: _118.ParamsAminoMsg): _118.Params;
                        toAminoMsg(message: _118.Params): _118.ParamsAminoMsg;
                        fromProtoMsg(message: _118.ParamsProtoMsg): _118.Params;
                        toProto(message: _118.Params): Uint8Array;
                        toProtoMsg(message: _118.Params): _118.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _123.Type;
                typeToJSON(object: _123.Type): string;
                Type: typeof _123.Type;
                TypeSDKType: typeof _123.Type;
                TypeAmino: typeof _123.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _123.InterchainAccountPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.InterchainAccountPacketData;
                    fromJSON(object: any): _123.InterchainAccountPacketData;
                    toJSON(message: _123.InterchainAccountPacketData): unknown;
                    fromPartial(object: {
                        type?: _123.Type;
                        data?: Uint8Array;
                        memo?: string;
                    }): _123.InterchainAccountPacketData;
                    fromSDK(object: _123.InterchainAccountPacketDataSDKType): _123.InterchainAccountPacketData;
                    toSDK(message: _123.InterchainAccountPacketData): _123.InterchainAccountPacketDataSDKType;
                    fromAmino(object: _123.InterchainAccountPacketDataAmino): _123.InterchainAccountPacketData;
                    toAmino(message: _123.InterchainAccountPacketData): _123.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _123.InterchainAccountPacketDataAminoMsg): _123.InterchainAccountPacketData;
                    toAminoMsg(message: _123.InterchainAccountPacketData): _123.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _123.InterchainAccountPacketDataProtoMsg): _123.InterchainAccountPacketData;
                    toProto(message: _123.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _123.InterchainAccountPacketData): _123.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _123.CosmosTx, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.CosmosTx;
                    fromJSON(object: any): _123.CosmosTx;
                    toJSON(message: _123.CosmosTx): unknown;
                    fromPartial(object: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _123.CosmosTx;
                    fromSDK(object: _123.CosmosTxSDKType): _123.CosmosTx;
                    toSDK(message: _123.CosmosTx): _123.CosmosTxSDKType;
                    fromAmino(object: _123.CosmosTxAmino): _123.CosmosTx;
                    toAmino(message: _123.CosmosTx): _123.CosmosTxAmino;
                    fromAminoMsg(object: _123.CosmosTxAminoMsg): _123.CosmosTx;
                    toAminoMsg(message: _123.CosmosTx): _123.CosmosTxAminoMsg;
                    fromProtoMsg(message: _123.CosmosTxProtoMsg): _123.CosmosTx;
                    toProto(message: _123.CosmosTx): Uint8Array;
                    toProtoMsg(message: _123.CosmosTx): _123.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _122.Metadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.Metadata;
                    fromJSON(object: any): _122.Metadata;
                    toJSON(message: _122.Metadata): unknown;
                    fromPartial(object: {
                        version?: string;
                        controllerConnectionId?: string;
                        hostConnectionId?: string;
                        address?: string;
                        encoding?: string;
                        txType?: string;
                    }): _122.Metadata;
                    fromSDK(object: _122.MetadataSDKType): _122.Metadata;
                    toSDK(message: _122.Metadata): _122.MetadataSDKType;
                    fromAmino(object: _122.MetadataAmino): _122.Metadata;
                    toAmino(message: _122.Metadata): _122.MetadataAmino;
                    fromAminoMsg(object: _122.MetadataAminoMsg): _122.Metadata;
                    toAminoMsg(message: _122.Metadata): _122.MetadataAminoMsg;
                    fromProtoMsg(message: _122.MetadataProtoMsg): _122.Metadata;
                    toProto(message: _122.Metadata): Uint8Array;
                    toProtoMsg(message: _122.Metadata): _122.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _121.InterchainAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.InterchainAccount;
                    fromJSON(object: any): _121.InterchainAccount;
                    toJSON(message: _121.InterchainAccount): unknown;
                    fromPartial(object: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: bigint;
                            sequence?: bigint;
                        };
                        accountOwner?: string;
                    }): _121.InterchainAccount;
                    fromSDK(object: _121.InterchainAccountSDKType): _121.InterchainAccount;
                    toSDK(message: _121.InterchainAccount): _121.InterchainAccountSDKType;
                    fromAmino(object: _121.InterchainAccountAmino): _121.InterchainAccount;
                    toAmino(message: _121.InterchainAccount): _121.InterchainAccountAmino;
                    fromAminoMsg(object: _121.InterchainAccountAminoMsg): _121.InterchainAccount;
                    toAminoMsg(message: _121.InterchainAccount): _121.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _121.InterchainAccountProtoMsg): _121.InterchainAccount;
                    toProto(message: _121.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _121.InterchainAccount): _121.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _250.MsgClientImpl;
                QueryClientImpl: typeof _243.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _126.QueryDenomTraceRequest): Promise<_126.QueryDenomTraceResponse>;
                    denomTraces(request?: _126.QueryDenomTracesRequest): Promise<_126.QueryDenomTracesResponse>;
                    params(request?: _126.QueryParamsRequest): Promise<_126.QueryParamsResponse>;
                    denomHash(request: _126.QueryDenomHashRequest): Promise<_126.QueryDenomHashResponse>;
                    escrowAddress(request: _126.QueryEscrowAddressRequest): Promise<_126.QueryEscrowAddressResponse>;
                    totalEscrowForDenom(request: _126.QueryTotalEscrowForDenomRequest): Promise<_126.QueryTotalEscrowForDenomResponse>;
                };
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useDenomTrace: <TData = _126.QueryDenomTraceResponse>({ request, options }: _243.UseDenomTraceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                    useDenomTraces: <TData_1 = _126.QueryDenomTracesResponse>({ request, options }: _243.UseDenomTracesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                    useParams: <TData_2 = _126.QueryParamsResponse>({ request, options }: _243.UseParamsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                    useDenomHash: <TData_3 = _126.QueryDenomHashResponse>({ request, options }: _243.UseDenomHashQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                    useEscrowAddress: <TData_4 = _126.QueryEscrowAddressResponse>({ request, options }: _243.UseEscrowAddressQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                    useTotalEscrowForDenom: <TData_5 = _126.QueryTotalEscrowForDenomResponse>({ request, options }: _243.UseTotalEscrowForDenomQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _128.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateParams(value: _128.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _128.MsgTransfer): {
                            typeUrl: string;
                            value: _128.MsgTransfer;
                        };
                        updateParams(value: _128.MsgUpdateParams): {
                            typeUrl: string;
                            value: _128.MsgUpdateParams;
                        };
                    };
                    toJSON: {
                        transfer(value: _128.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateParams(value: _128.MsgUpdateParams): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _128.MsgTransfer;
                        };
                        updateParams(value: any): {
                            typeUrl: string;
                            value: _128.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        transfer(value: _128.MsgTransfer): {
                            typeUrl: string;
                            value: _128.MsgTransfer;
                        };
                        updateParams(value: _128.MsgUpdateParams): {
                            typeUrl: string;
                            value: _128.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _128.MsgTransfer) => _128.MsgTransferAmino;
                        fromAmino: (object: _128.MsgTransferAmino) => _128.MsgTransfer;
                    };
                    "/ibc.applications.transfer.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _128.MsgUpdateParams) => _128.MsgUpdateParamsAmino;
                        fromAmino: (object: _128.MsgUpdateParamsAmino) => _128.MsgUpdateParams;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _128.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.MsgTransfer;
                    fromJSON(object: any): _128.MsgTransfer;
                    toJSON(message: _128.MsgTransfer): unknown;
                    fromPartial(object: {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        timeoutTimestamp?: bigint;
                        memo?: string;
                    }): _128.MsgTransfer;
                    fromSDK(object: _128.MsgTransferSDKType): _128.MsgTransfer;
                    toSDK(message: _128.MsgTransfer): _128.MsgTransferSDKType;
                    fromAmino(object: _128.MsgTransferAmino): _128.MsgTransfer;
                    toAmino(message: _128.MsgTransfer): _128.MsgTransferAmino;
                    fromAminoMsg(object: _128.MsgTransferAminoMsg): _128.MsgTransfer;
                    toAminoMsg(message: _128.MsgTransfer): _128.MsgTransferAminoMsg;
                    fromProtoMsg(message: _128.MsgTransferProtoMsg): _128.MsgTransfer;
                    toProto(message: _128.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _128.MsgTransfer): _128.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _128.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.MsgTransferResponse;
                    fromJSON(object: any): _128.MsgTransferResponse;
                    toJSON(message: _128.MsgTransferResponse): unknown;
                    fromPartial(object: {
                        sequence?: bigint;
                    }): _128.MsgTransferResponse;
                    fromSDK(object: _128.MsgTransferResponseSDKType): _128.MsgTransferResponse;
                    toSDK(message: _128.MsgTransferResponse): _128.MsgTransferResponseSDKType;
                    fromAmino(object: _128.MsgTransferResponseAmino): _128.MsgTransferResponse;
                    toAmino(message: _128.MsgTransferResponse): _128.MsgTransferResponseAmino;
                    fromAminoMsg(object: _128.MsgTransferResponseAminoMsg): _128.MsgTransferResponse;
                    toAminoMsg(message: _128.MsgTransferResponse): _128.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _128.MsgTransferResponseProtoMsg): _128.MsgTransferResponse;
                    toProto(message: _128.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _128.MsgTransferResponse): _128.MsgTransferResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _128.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.MsgUpdateParams;
                    fromJSON(object: any): _128.MsgUpdateParams;
                    toJSON(message: _128.MsgUpdateParams): unknown;
                    fromPartial(object: {
                        authority?: string;
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _128.MsgUpdateParams;
                    fromSDK(object: _128.MsgUpdateParamsSDKType): _128.MsgUpdateParams;
                    toSDK(message: _128.MsgUpdateParams): _128.MsgUpdateParamsSDKType;
                    fromAmino(object: _128.MsgUpdateParamsAmino): _128.MsgUpdateParams;
                    toAmino(message: _128.MsgUpdateParams): _128.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _128.MsgUpdateParamsAminoMsg): _128.MsgUpdateParams;
                    toAminoMsg(message: _128.MsgUpdateParams): _128.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _128.MsgUpdateParamsProtoMsg): _128.MsgUpdateParams;
                    toProto(message: _128.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _128.MsgUpdateParams): _128.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _128.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.MsgUpdateParamsResponse;
                    fromJSON(_: any): _128.MsgUpdateParamsResponse;
                    toJSON(_: _128.MsgUpdateParamsResponse): unknown;
                    fromPartial(_: {}): _128.MsgUpdateParamsResponse;
                    fromSDK(_: _128.MsgUpdateParamsResponseSDKType): _128.MsgUpdateParamsResponse;
                    toSDK(_: _128.MsgUpdateParamsResponse): _128.MsgUpdateParamsResponseSDKType;
                    fromAmino(_: _128.MsgUpdateParamsResponseAmino): _128.MsgUpdateParamsResponse;
                    toAmino(_: _128.MsgUpdateParamsResponse): _128.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _128.MsgUpdateParamsResponseAminoMsg): _128.MsgUpdateParamsResponse;
                    toAminoMsg(message: _128.MsgUpdateParamsResponse): _128.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _128.MsgUpdateParamsResponseProtoMsg): _128.MsgUpdateParamsResponse;
                    toProto(message: _128.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _128.MsgUpdateParamsResponse): _128.MsgUpdateParamsResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _127.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.DenomTrace;
                    fromJSON(object: any): _127.DenomTrace;
                    toJSON(message: _127.DenomTrace): unknown;
                    fromPartial(object: {
                        path?: string;
                        baseDenom?: string;
                    }): _127.DenomTrace;
                    fromSDK(object: _127.DenomTraceSDKType): _127.DenomTrace;
                    toSDK(message: _127.DenomTrace): _127.DenomTraceSDKType;
                    fromAmino(object: _127.DenomTraceAmino): _127.DenomTrace;
                    toAmino(message: _127.DenomTrace): _127.DenomTraceAmino;
                    fromAminoMsg(object: _127.DenomTraceAminoMsg): _127.DenomTrace;
                    toAminoMsg(message: _127.DenomTrace): _127.DenomTraceAminoMsg;
                    fromProtoMsg(message: _127.DenomTraceProtoMsg): _127.DenomTrace;
                    toProto(message: _127.DenomTrace): Uint8Array;
                    toProtoMsg(message: _127.DenomTrace): _127.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _127.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.Params;
                    fromJSON(object: any): _127.Params;
                    toJSON(message: _127.Params): unknown;
                    fromPartial(object: {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    }): _127.Params;
                    fromSDK(object: _127.ParamsSDKType): _127.Params;
                    toSDK(message: _127.Params): _127.ParamsSDKType;
                    fromAmino(object: _127.ParamsAmino): _127.Params;
                    toAmino(message: _127.Params): _127.ParamsAmino;
                    fromAminoMsg(object: _127.ParamsAminoMsg): _127.Params;
                    toAminoMsg(message: _127.Params): _127.ParamsAminoMsg;
                    fromProtoMsg(message: _127.ParamsProtoMsg): _127.Params;
                    toProto(message: _127.Params): Uint8Array;
                    toProtoMsg(message: _127.Params): _127.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _126.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryDenomTraceRequest;
                    fromJSON(object: any): _126.QueryDenomTraceRequest;
                    toJSON(message: _126.QueryDenomTraceRequest): unknown;
                    fromPartial(object: {
                        hash?: string;
                    }): _126.QueryDenomTraceRequest;
                    fromSDK(object: _126.QueryDenomTraceRequestSDKType): _126.QueryDenomTraceRequest;
                    toSDK(message: _126.QueryDenomTraceRequest): _126.QueryDenomTraceRequestSDKType;
                    fromAmino(object: _126.QueryDenomTraceRequestAmino): _126.QueryDenomTraceRequest;
                    toAmino(message: _126.QueryDenomTraceRequest): _126.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _126.QueryDenomTraceRequestAminoMsg): _126.QueryDenomTraceRequest;
                    toAminoMsg(message: _126.QueryDenomTraceRequest): _126.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _126.QueryDenomTraceRequestProtoMsg): _126.QueryDenomTraceRequest;
                    toProto(message: _126.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _126.QueryDenomTraceRequest): _126.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _126.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryDenomTraceResponse;
                    fromJSON(object: any): _126.QueryDenomTraceResponse;
                    toJSON(message: _126.QueryDenomTraceResponse): unknown;
                    fromPartial(object: {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    }): _126.QueryDenomTraceResponse;
                    fromSDK(object: _126.QueryDenomTraceResponseSDKType): _126.QueryDenomTraceResponse;
                    toSDK(message: _126.QueryDenomTraceResponse): _126.QueryDenomTraceResponseSDKType;
                    fromAmino(object: _126.QueryDenomTraceResponseAmino): _126.QueryDenomTraceResponse;
                    toAmino(message: _126.QueryDenomTraceResponse): _126.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _126.QueryDenomTraceResponseAminoMsg): _126.QueryDenomTraceResponse;
                    toAminoMsg(message: _126.QueryDenomTraceResponse): _126.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _126.QueryDenomTraceResponseProtoMsg): _126.QueryDenomTraceResponse;
                    toProto(message: _126.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _126.QueryDenomTraceResponse): _126.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _126.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryDenomTracesRequest;
                    fromJSON(object: any): _126.QueryDenomTracesRequest;
                    toJSON(message: _126.QueryDenomTracesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _126.QueryDenomTracesRequest;
                    fromSDK(object: _126.QueryDenomTracesRequestSDKType): _126.QueryDenomTracesRequest;
                    toSDK(message: _126.QueryDenomTracesRequest): _126.QueryDenomTracesRequestSDKType;
                    fromAmino(object: _126.QueryDenomTracesRequestAmino): _126.QueryDenomTracesRequest;
                    toAmino(message: _126.QueryDenomTracesRequest): _126.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _126.QueryDenomTracesRequestAminoMsg): _126.QueryDenomTracesRequest;
                    toAminoMsg(message: _126.QueryDenomTracesRequest): _126.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _126.QueryDenomTracesRequestProtoMsg): _126.QueryDenomTracesRequest;
                    toProto(message: _126.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _126.QueryDenomTracesRequest): _126.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _126.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryDenomTracesResponse;
                    fromJSON(object: any): _126.QueryDenomTracesResponse;
                    toJSON(message: _126.QueryDenomTracesResponse): unknown;
                    fromPartial(object: {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                    }): _126.QueryDenomTracesResponse;
                    fromSDK(object: _126.QueryDenomTracesResponseSDKType): _126.QueryDenomTracesResponse;
                    toSDK(message: _126.QueryDenomTracesResponse): _126.QueryDenomTracesResponseSDKType;
                    fromAmino(object: _126.QueryDenomTracesResponseAmino): _126.QueryDenomTracesResponse;
                    toAmino(message: _126.QueryDenomTracesResponse): _126.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _126.QueryDenomTracesResponseAminoMsg): _126.QueryDenomTracesResponse;
                    toAminoMsg(message: _126.QueryDenomTracesResponse): _126.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _126.QueryDenomTracesResponseProtoMsg): _126.QueryDenomTracesResponse;
                    toProto(message: _126.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _126.QueryDenomTracesResponse): _126.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _126.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryParamsRequest;
                    fromJSON(_: any): _126.QueryParamsRequest;
                    toJSON(_: _126.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _126.QueryParamsRequest;
                    fromSDK(_: _126.QueryParamsRequestSDKType): _126.QueryParamsRequest;
                    toSDK(_: _126.QueryParamsRequest): _126.QueryParamsRequestSDKType;
                    fromAmino(_: _126.QueryParamsRequestAmino): _126.QueryParamsRequest;
                    toAmino(_: _126.QueryParamsRequest): _126.QueryParamsRequestAmino;
                    fromAminoMsg(object: _126.QueryParamsRequestAminoMsg): _126.QueryParamsRequest;
                    toAminoMsg(message: _126.QueryParamsRequest): _126.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _126.QueryParamsRequestProtoMsg): _126.QueryParamsRequest;
                    toProto(message: _126.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _126.QueryParamsRequest): _126.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _126.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryParamsResponse;
                    fromJSON(object: any): _126.QueryParamsResponse;
                    toJSON(message: _126.QueryParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _126.QueryParamsResponse;
                    fromSDK(object: _126.QueryParamsResponseSDKType): _126.QueryParamsResponse;
                    toSDK(message: _126.QueryParamsResponse): _126.QueryParamsResponseSDKType;
                    fromAmino(object: _126.QueryParamsResponseAmino): _126.QueryParamsResponse;
                    toAmino(message: _126.QueryParamsResponse): _126.QueryParamsResponseAmino;
                    fromAminoMsg(object: _126.QueryParamsResponseAminoMsg): _126.QueryParamsResponse;
                    toAminoMsg(message: _126.QueryParamsResponse): _126.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _126.QueryParamsResponseProtoMsg): _126.QueryParamsResponse;
                    toProto(message: _126.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _126.QueryParamsResponse): _126.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _126.QueryDenomHashRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryDenomHashRequest;
                    fromJSON(object: any): _126.QueryDenomHashRequest;
                    toJSON(message: _126.QueryDenomHashRequest): unknown;
                    fromPartial(object: {
                        trace?: string;
                    }): _126.QueryDenomHashRequest;
                    fromSDK(object: _126.QueryDenomHashRequestSDKType): _126.QueryDenomHashRequest;
                    toSDK(message: _126.QueryDenomHashRequest): _126.QueryDenomHashRequestSDKType;
                    fromAmino(object: _126.QueryDenomHashRequestAmino): _126.QueryDenomHashRequest;
                    toAmino(message: _126.QueryDenomHashRequest): _126.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _126.QueryDenomHashRequestAminoMsg): _126.QueryDenomHashRequest;
                    toAminoMsg(message: _126.QueryDenomHashRequest): _126.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _126.QueryDenomHashRequestProtoMsg): _126.QueryDenomHashRequest;
                    toProto(message: _126.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _126.QueryDenomHashRequest): _126.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _126.QueryDenomHashResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryDenomHashResponse;
                    fromJSON(object: any): _126.QueryDenomHashResponse;
                    toJSON(message: _126.QueryDenomHashResponse): unknown;
                    fromPartial(object: {
                        hash?: string;
                    }): _126.QueryDenomHashResponse;
                    fromSDK(object: _126.QueryDenomHashResponseSDKType): _126.QueryDenomHashResponse;
                    toSDK(message: _126.QueryDenomHashResponse): _126.QueryDenomHashResponseSDKType;
                    fromAmino(object: _126.QueryDenomHashResponseAmino): _126.QueryDenomHashResponse;
                    toAmino(message: _126.QueryDenomHashResponse): _126.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _126.QueryDenomHashResponseAminoMsg): _126.QueryDenomHashResponse;
                    toAminoMsg(message: _126.QueryDenomHashResponse): _126.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _126.QueryDenomHashResponseProtoMsg): _126.QueryDenomHashResponse;
                    toProto(message: _126.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _126.QueryDenomHashResponse): _126.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _126.QueryEscrowAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryEscrowAddressRequest;
                    fromJSON(object: any): _126.QueryEscrowAddressRequest;
                    toJSON(message: _126.QueryEscrowAddressRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _126.QueryEscrowAddressRequest;
                    fromSDK(object: _126.QueryEscrowAddressRequestSDKType): _126.QueryEscrowAddressRequest;
                    toSDK(message: _126.QueryEscrowAddressRequest): _126.QueryEscrowAddressRequestSDKType;
                    fromAmino(object: _126.QueryEscrowAddressRequestAmino): _126.QueryEscrowAddressRequest;
                    toAmino(message: _126.QueryEscrowAddressRequest): _126.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _126.QueryEscrowAddressRequestAminoMsg): _126.QueryEscrowAddressRequest;
                    toAminoMsg(message: _126.QueryEscrowAddressRequest): _126.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _126.QueryEscrowAddressRequestProtoMsg): _126.QueryEscrowAddressRequest;
                    toProto(message: _126.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _126.QueryEscrowAddressRequest): _126.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _126.QueryEscrowAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryEscrowAddressResponse;
                    fromJSON(object: any): _126.QueryEscrowAddressResponse;
                    toJSON(message: _126.QueryEscrowAddressResponse): unknown;
                    fromPartial(object: {
                        escrowAddress?: string;
                    }): _126.QueryEscrowAddressResponse;
                    fromSDK(object: _126.QueryEscrowAddressResponseSDKType): _126.QueryEscrowAddressResponse;
                    toSDK(message: _126.QueryEscrowAddressResponse): _126.QueryEscrowAddressResponseSDKType;
                    fromAmino(object: _126.QueryEscrowAddressResponseAmino): _126.QueryEscrowAddressResponse;
                    toAmino(message: _126.QueryEscrowAddressResponse): _126.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _126.QueryEscrowAddressResponseAminoMsg): _126.QueryEscrowAddressResponse;
                    toAminoMsg(message: _126.QueryEscrowAddressResponse): _126.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _126.QueryEscrowAddressResponseProtoMsg): _126.QueryEscrowAddressResponse;
                    toProto(message: _126.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _126.QueryEscrowAddressResponse): _126.QueryEscrowAddressResponseProtoMsg;
                };
                QueryTotalEscrowForDenomRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _126.QueryTotalEscrowForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryTotalEscrowForDenomRequest;
                    fromJSON(object: any): _126.QueryTotalEscrowForDenomRequest;
                    toJSON(message: _126.QueryTotalEscrowForDenomRequest): unknown;
                    fromPartial(object: {
                        denom?: string;
                    }): _126.QueryTotalEscrowForDenomRequest;
                    fromSDK(object: _126.QueryTotalEscrowForDenomRequestSDKType): _126.QueryTotalEscrowForDenomRequest;
                    toSDK(message: _126.QueryTotalEscrowForDenomRequest): _126.QueryTotalEscrowForDenomRequestSDKType;
                    fromAmino(object: _126.QueryTotalEscrowForDenomRequestAmino): _126.QueryTotalEscrowForDenomRequest;
                    toAmino(message: _126.QueryTotalEscrowForDenomRequest): _126.QueryTotalEscrowForDenomRequestAmino;
                    fromAminoMsg(object: _126.QueryTotalEscrowForDenomRequestAminoMsg): _126.QueryTotalEscrowForDenomRequest;
                    toAminoMsg(message: _126.QueryTotalEscrowForDenomRequest): _126.QueryTotalEscrowForDenomRequestAminoMsg;
                    fromProtoMsg(message: _126.QueryTotalEscrowForDenomRequestProtoMsg): _126.QueryTotalEscrowForDenomRequest;
                    toProto(message: _126.QueryTotalEscrowForDenomRequest): Uint8Array;
                    toProtoMsg(message: _126.QueryTotalEscrowForDenomRequest): _126.QueryTotalEscrowForDenomRequestProtoMsg;
                };
                QueryTotalEscrowForDenomResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _126.QueryTotalEscrowForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryTotalEscrowForDenomResponse;
                    fromJSON(object: any): _126.QueryTotalEscrowForDenomResponse;
                    toJSON(message: _126.QueryTotalEscrowForDenomResponse): unknown;
                    fromPartial(object: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        };
                    }): _126.QueryTotalEscrowForDenomResponse;
                    fromSDK(object: _126.QueryTotalEscrowForDenomResponseSDKType): _126.QueryTotalEscrowForDenomResponse;
                    toSDK(message: _126.QueryTotalEscrowForDenomResponse): _126.QueryTotalEscrowForDenomResponseSDKType;
                    fromAmino(object: _126.QueryTotalEscrowForDenomResponseAmino): _126.QueryTotalEscrowForDenomResponse;
                    toAmino(message: _126.QueryTotalEscrowForDenomResponse): _126.QueryTotalEscrowForDenomResponseAmino;
                    fromAminoMsg(object: _126.QueryTotalEscrowForDenomResponseAminoMsg): _126.QueryTotalEscrowForDenomResponse;
                    toAminoMsg(message: _126.QueryTotalEscrowForDenomResponse): _126.QueryTotalEscrowForDenomResponseAminoMsg;
                    fromProtoMsg(message: _126.QueryTotalEscrowForDenomResponseProtoMsg): _126.QueryTotalEscrowForDenomResponse;
                    toProto(message: _126.QueryTotalEscrowForDenomResponse): Uint8Array;
                    toProtoMsg(message: _126.QueryTotalEscrowForDenomResponse): _126.QueryTotalEscrowForDenomResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _125.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.GenesisState;
                    fromJSON(object: any): _125.GenesisState;
                    toJSON(message: _125.GenesisState): unknown;
                    fromPartial(object: {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                        totalEscrowed?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }): _125.GenesisState;
                    fromSDK(object: _125.GenesisStateSDKType): _125.GenesisState;
                    toSDK(message: _125.GenesisState): _125.GenesisStateSDKType;
                    fromAmino(object: _125.GenesisStateAmino): _125.GenesisState;
                    toAmino(message: _125.GenesisState): _125.GenesisStateAmino;
                    fromAminoMsg(object: _125.GenesisStateAminoMsg): _125.GenesisState;
                    toAminoMsg(message: _125.GenesisState): _125.GenesisStateAminoMsg;
                    fromProtoMsg(message: _125.GenesisStateProtoMsg): _125.GenesisState;
                    toProto(message: _125.GenesisState): Uint8Array;
                    toProtoMsg(message: _125.GenesisState): _125.GenesisStateProtoMsg;
                };
                Allocation: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _124.Allocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.Allocation;
                    fromJSON(object: any): _124.Allocation;
                    toJSON(message: _124.Allocation): unknown;
                    fromPartial(object: {
                        sourcePort?: string;
                        sourceChannel?: string;
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        allowList?: string[];
                    }): _124.Allocation;
                    fromSDK(object: _124.AllocationSDKType): _124.Allocation;
                    toSDK(message: _124.Allocation): _124.AllocationSDKType;
                    fromAmino(object: _124.AllocationAmino): _124.Allocation;
                    toAmino(message: _124.Allocation): _124.AllocationAmino;
                    fromAminoMsg(object: _124.AllocationAminoMsg): _124.Allocation;
                    toAminoMsg(message: _124.Allocation): _124.AllocationAminoMsg;
                    fromProtoMsg(message: _124.AllocationProtoMsg): _124.Allocation;
                    toProto(message: _124.Allocation): Uint8Array;
                    toProtoMsg(message: _124.Allocation): _124.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _124.TransferAuthorization, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.TransferAuthorization;
                    fromJSON(object: any): _124.TransferAuthorization;
                    toJSON(message: _124.TransferAuthorization): unknown;
                    fromPartial(object: {
                        allocations?: {
                            sourcePort?: string;
                            sourceChannel?: string;
                            spendLimit?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            allowList?: string[];
                        }[];
                    }): _124.TransferAuthorization;
                    fromSDK(object: _124.TransferAuthorizationSDKType): _124.TransferAuthorization;
                    toSDK(message: _124.TransferAuthorization): _124.TransferAuthorizationSDKType;
                    fromAmino(object: _124.TransferAuthorizationAmino): _124.TransferAuthorization;
                    toAmino(message: _124.TransferAuthorization): _124.TransferAuthorizationAmino;
                    fromAminoMsg(object: _124.TransferAuthorizationAminoMsg): _124.TransferAuthorization;
                    toAminoMsg(message: _124.TransferAuthorization): _124.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _124.TransferAuthorizationProtoMsg): _124.TransferAuthorization;
                    toProto(message: _124.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _124.TransferAuthorization): _124.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _129.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.FungibleTokenPacketData;
                    fromJSON(object: any): _129.FungibleTokenPacketData;
                    toJSON(message: _129.FungibleTokenPacketData): unknown;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                        memo?: string;
                    }): _129.FungibleTokenPacketData;
                    fromSDK(object: _129.FungibleTokenPacketDataSDKType): _129.FungibleTokenPacketData;
                    toSDK(message: _129.FungibleTokenPacketData): _129.FungibleTokenPacketDataSDKType;
                    fromAmino(object: _129.FungibleTokenPacketDataAmino): _129.FungibleTokenPacketData;
                    toAmino(message: _129.FungibleTokenPacketData): _129.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _129.FungibleTokenPacketDataAminoMsg): _129.FungibleTokenPacketData;
                    toAminoMsg(message: _129.FungibleTokenPacketData): _129.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _129.FungibleTokenPacketDataProtoMsg): _129.FungibleTokenPacketData;
                    toProto(message: _129.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _129.FungibleTokenPacketData): _129.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _251.MsgClientImpl;
                QueryClientImpl: typeof _244.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _132.QueryChannelRequest): Promise<_132.QueryChannelResponse>;
                    channels(request?: _132.QueryChannelsRequest): Promise<_132.QueryChannelsResponse>;
                    connectionChannels(request: _132.QueryConnectionChannelsRequest): Promise<_132.QueryConnectionChannelsResponse>;
                    channelClientState(request: _132.QueryChannelClientStateRequest): Promise<_132.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _132.QueryChannelConsensusStateRequest): Promise<_132.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _132.QueryPacketCommitmentRequest): Promise<_132.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _132.QueryPacketCommitmentsRequest): Promise<_132.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _132.QueryPacketReceiptRequest): Promise<_132.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _132.QueryPacketAcknowledgementRequest): Promise<_132.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _132.QueryPacketAcknowledgementsRequest): Promise<_132.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _132.QueryUnreceivedPacketsRequest): Promise<_132.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _132.QueryUnreceivedAcksRequest): Promise<_132.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _132.QueryNextSequenceReceiveRequest): Promise<_132.QueryNextSequenceReceiveResponse>;
                    nextSequenceSend(request: _132.QueryNextSequenceSendRequest): Promise<_132.QueryNextSequenceSendResponse>;
                };
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useChannel: <TData = _132.QueryChannelResponse>({ request, options }: _244.UseChannelQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                    useChannels: <TData_1 = _132.QueryChannelsResponse>({ request, options }: _244.UseChannelsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                    useConnectionChannels: <TData_2 = _132.QueryConnectionChannelsResponse>({ request, options }: _244.UseConnectionChannelsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                    useChannelClientState: <TData_3 = _132.QueryChannelClientStateResponse>({ request, options }: _244.UseChannelClientStateQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                    useChannelConsensusState: <TData_4 = _132.QueryChannelConsensusStateResponse>({ request, options }: _244.UseChannelConsensusStateQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                    usePacketCommitment: <TData_5 = _132.QueryPacketCommitmentResponse>({ request, options }: _244.UsePacketCommitmentQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                    usePacketCommitments: <TData_6 = _132.QueryPacketCommitmentsResponse>({ request, options }: _244.UsePacketCommitmentsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                    usePacketReceipt: <TData_7 = _132.QueryPacketReceiptResponse>({ request, options }: _244.UsePacketReceiptQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                    usePacketAcknowledgement: <TData_8 = _132.QueryPacketAcknowledgementResponse>({ request, options }: _244.UsePacketAcknowledgementQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
                    usePacketAcknowledgements: <TData_9 = _132.QueryPacketAcknowledgementsResponse>({ request, options }: _244.UsePacketAcknowledgementsQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
                    useUnreceivedPackets: <TData_10 = _132.QueryUnreceivedPacketsResponse>({ request, options }: _244.UseUnreceivedPacketsQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
                    useUnreceivedAcks: <TData_11 = _132.QueryUnreceivedAcksResponse>({ request, options }: _244.UseUnreceivedAcksQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
                    useNextSequenceReceive: <TData_12 = _132.QueryNextSequenceReceiveResponse>({ request, options }: _244.UseNextSequenceReceiveQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
                    useNextSequenceSend: <TData_13 = _132.QueryNextSequenceSendResponse>({ request, options }: _244.UseNextSequenceSendQuery<TData_13>) => import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _133.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _133.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _133.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _133.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _133.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _133.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _133.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _133.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _133.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _133.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _133.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _133.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _133.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _133.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _133.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _133.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _133.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _133.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _133.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _133.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _133.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _133.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _133.MsgRecvPacket): {
                            typeUrl: string;
                            value: _133.MsgRecvPacket;
                        };
                        timeout(value: _133.MsgTimeout): {
                            typeUrl: string;
                            value: _133.MsgTimeout;
                        };
                        timeoutOnClose(value: _133.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _133.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _133.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _133.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _133.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _133.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _133.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _133.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _133.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _133.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _133.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _133.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _133.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _133.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _133.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _133.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _133.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _133.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _133.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _133.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _133.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _133.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _133.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _133.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _133.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _133.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _133.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _133.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _133.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _133.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _133.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _133.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _133.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _133.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _133.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _133.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _133.MsgRecvPacket): {
                            typeUrl: string;
                            value: _133.MsgRecvPacket;
                        };
                        timeout(value: _133.MsgTimeout): {
                            typeUrl: string;
                            value: _133.MsgTimeout;
                        };
                        timeoutOnClose(value: _133.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _133.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _133.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _133.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _133.MsgChannelOpenInit) => _133.MsgChannelOpenInitAmino;
                        fromAmino: (object: _133.MsgChannelOpenInitAmino) => _133.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _133.MsgChannelOpenTry) => _133.MsgChannelOpenTryAmino;
                        fromAmino: (object: _133.MsgChannelOpenTryAmino) => _133.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _133.MsgChannelOpenAck) => _133.MsgChannelOpenAckAmino;
                        fromAmino: (object: _133.MsgChannelOpenAckAmino) => _133.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _133.MsgChannelOpenConfirm) => _133.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _133.MsgChannelOpenConfirmAmino) => _133.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _133.MsgChannelCloseInit) => _133.MsgChannelCloseInitAmino;
                        fromAmino: (object: _133.MsgChannelCloseInitAmino) => _133.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _133.MsgChannelCloseConfirm) => _133.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _133.MsgChannelCloseConfirmAmino) => _133.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _133.MsgRecvPacket) => _133.MsgRecvPacketAmino;
                        fromAmino: (object: _133.MsgRecvPacketAmino) => _133.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _133.MsgTimeout) => _133.MsgTimeoutAmino;
                        fromAmino: (object: _133.MsgTimeoutAmino) => _133.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _133.MsgTimeoutOnClose) => _133.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _133.MsgTimeoutOnCloseAmino) => _133.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _133.MsgAcknowledgement) => _133.MsgAcknowledgementAmino;
                        fromAmino: (object: _133.MsgAcknowledgementAmino) => _133.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _133.ResponseResultType;
                responseResultTypeToJSON(object: _133.ResponseResultType): string;
                ResponseResultType: typeof _133.ResponseResultType;
                ResponseResultTypeSDKType: typeof _133.ResponseResultType;
                ResponseResultTypeAmino: typeof _133.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _133.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgChannelOpenInit;
                    fromJSON(object: any): _133.MsgChannelOpenInit;
                    toJSON(message: _133.MsgChannelOpenInit): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channel?: {
                            state?: _130.State;
                            ordering?: _130.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _133.MsgChannelOpenInit;
                    fromSDK(object: _133.MsgChannelOpenInitSDKType): _133.MsgChannelOpenInit;
                    toSDK(message: _133.MsgChannelOpenInit): _133.MsgChannelOpenInitSDKType;
                    fromAmino(object: _133.MsgChannelOpenInitAmino): _133.MsgChannelOpenInit;
                    toAmino(message: _133.MsgChannelOpenInit): _133.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _133.MsgChannelOpenInitAminoMsg): _133.MsgChannelOpenInit;
                    toAminoMsg(message: _133.MsgChannelOpenInit): _133.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _133.MsgChannelOpenInitProtoMsg): _133.MsgChannelOpenInit;
                    toProto(message: _133.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _133.MsgChannelOpenInit): _133.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _133.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgChannelOpenInitResponse;
                    fromJSON(object: any): _133.MsgChannelOpenInitResponse;
                    toJSON(message: _133.MsgChannelOpenInitResponse): unknown;
                    fromPartial(object: {
                        channelId?: string;
                        version?: string;
                    }): _133.MsgChannelOpenInitResponse;
                    fromSDK(object: _133.MsgChannelOpenInitResponseSDKType): _133.MsgChannelOpenInitResponse;
                    toSDK(message: _133.MsgChannelOpenInitResponse): _133.MsgChannelOpenInitResponseSDKType;
                    fromAmino(object: _133.MsgChannelOpenInitResponseAmino): _133.MsgChannelOpenInitResponse;
                    toAmino(message: _133.MsgChannelOpenInitResponse): _133.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _133.MsgChannelOpenInitResponseAminoMsg): _133.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _133.MsgChannelOpenInitResponse): _133.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _133.MsgChannelOpenInitResponseProtoMsg): _133.MsgChannelOpenInitResponse;
                    toProto(message: _133.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _133.MsgChannelOpenInitResponse): _133.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _133.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgChannelOpenTry;
                    fromJSON(object: any): _133.MsgChannelOpenTry;
                    toJSON(message: _133.MsgChannelOpenTry): unknown;
                    fromPartial(object: {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _130.State;
                            ordering?: _130.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _133.MsgChannelOpenTry;
                    fromSDK(object: _133.MsgChannelOpenTrySDKType): _133.MsgChannelOpenTry;
                    toSDK(message: _133.MsgChannelOpenTry): _133.MsgChannelOpenTrySDKType;
                    fromAmino(object: _133.MsgChannelOpenTryAmino): _133.MsgChannelOpenTry;
                    toAmino(message: _133.MsgChannelOpenTry): _133.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _133.MsgChannelOpenTryAminoMsg): _133.MsgChannelOpenTry;
                    toAminoMsg(message: _133.MsgChannelOpenTry): _133.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _133.MsgChannelOpenTryProtoMsg): _133.MsgChannelOpenTry;
                    toProto(message: _133.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _133.MsgChannelOpenTry): _133.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _133.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgChannelOpenTryResponse;
                    fromJSON(object: any): _133.MsgChannelOpenTryResponse;
                    toJSON(message: _133.MsgChannelOpenTryResponse): unknown;
                    fromPartial(object: {
                        version?: string;
                        channelId?: string;
                    }): _133.MsgChannelOpenTryResponse;
                    fromSDK(object: _133.MsgChannelOpenTryResponseSDKType): _133.MsgChannelOpenTryResponse;
                    toSDK(message: _133.MsgChannelOpenTryResponse): _133.MsgChannelOpenTryResponseSDKType;
                    fromAmino(object: _133.MsgChannelOpenTryResponseAmino): _133.MsgChannelOpenTryResponse;
                    toAmino(message: _133.MsgChannelOpenTryResponse): _133.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _133.MsgChannelOpenTryResponseAminoMsg): _133.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _133.MsgChannelOpenTryResponse): _133.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _133.MsgChannelOpenTryResponseProtoMsg): _133.MsgChannelOpenTryResponse;
                    toProto(message: _133.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _133.MsgChannelOpenTryResponse): _133.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _133.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgChannelOpenAck;
                    fromJSON(object: any): _133.MsgChannelOpenAck;
                    toJSON(message: _133.MsgChannelOpenAck): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _133.MsgChannelOpenAck;
                    fromSDK(object: _133.MsgChannelOpenAckSDKType): _133.MsgChannelOpenAck;
                    toSDK(message: _133.MsgChannelOpenAck): _133.MsgChannelOpenAckSDKType;
                    fromAmino(object: _133.MsgChannelOpenAckAmino): _133.MsgChannelOpenAck;
                    toAmino(message: _133.MsgChannelOpenAck): _133.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _133.MsgChannelOpenAckAminoMsg): _133.MsgChannelOpenAck;
                    toAminoMsg(message: _133.MsgChannelOpenAck): _133.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _133.MsgChannelOpenAckProtoMsg): _133.MsgChannelOpenAck;
                    toProto(message: _133.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _133.MsgChannelOpenAck): _133.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _133.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _133.MsgChannelOpenAckResponse;
                    toJSON(_: _133.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: {}): _133.MsgChannelOpenAckResponse;
                    fromSDK(_: _133.MsgChannelOpenAckResponseSDKType): _133.MsgChannelOpenAckResponse;
                    toSDK(_: _133.MsgChannelOpenAckResponse): _133.MsgChannelOpenAckResponseSDKType;
                    fromAmino(_: _133.MsgChannelOpenAckResponseAmino): _133.MsgChannelOpenAckResponse;
                    toAmino(_: _133.MsgChannelOpenAckResponse): _133.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _133.MsgChannelOpenAckResponseAminoMsg): _133.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _133.MsgChannelOpenAckResponse): _133.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _133.MsgChannelOpenAckResponseProtoMsg): _133.MsgChannelOpenAckResponse;
                    toProto(message: _133.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _133.MsgChannelOpenAckResponse): _133.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _133.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgChannelOpenConfirm;
                    fromJSON(object: any): _133.MsgChannelOpenConfirm;
                    toJSON(message: _133.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _133.MsgChannelOpenConfirm;
                    fromSDK(object: _133.MsgChannelOpenConfirmSDKType): _133.MsgChannelOpenConfirm;
                    toSDK(message: _133.MsgChannelOpenConfirm): _133.MsgChannelOpenConfirmSDKType;
                    fromAmino(object: _133.MsgChannelOpenConfirmAmino): _133.MsgChannelOpenConfirm;
                    toAmino(message: _133.MsgChannelOpenConfirm): _133.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _133.MsgChannelOpenConfirmAminoMsg): _133.MsgChannelOpenConfirm;
                    toAminoMsg(message: _133.MsgChannelOpenConfirm): _133.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _133.MsgChannelOpenConfirmProtoMsg): _133.MsgChannelOpenConfirm;
                    toProto(message: _133.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _133.MsgChannelOpenConfirm): _133.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _133.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _133.MsgChannelOpenConfirmResponse;
                    toJSON(_: _133.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _133.MsgChannelOpenConfirmResponse;
                    fromSDK(_: _133.MsgChannelOpenConfirmResponseSDKType): _133.MsgChannelOpenConfirmResponse;
                    toSDK(_: _133.MsgChannelOpenConfirmResponse): _133.MsgChannelOpenConfirmResponseSDKType;
                    fromAmino(_: _133.MsgChannelOpenConfirmResponseAmino): _133.MsgChannelOpenConfirmResponse;
                    toAmino(_: _133.MsgChannelOpenConfirmResponse): _133.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _133.MsgChannelOpenConfirmResponseAminoMsg): _133.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _133.MsgChannelOpenConfirmResponse): _133.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _133.MsgChannelOpenConfirmResponseProtoMsg): _133.MsgChannelOpenConfirmResponse;
                    toProto(message: _133.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _133.MsgChannelOpenConfirmResponse): _133.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _133.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgChannelCloseInit;
                    fromJSON(object: any): _133.MsgChannelCloseInit;
                    toJSON(message: _133.MsgChannelCloseInit): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    }): _133.MsgChannelCloseInit;
                    fromSDK(object: _133.MsgChannelCloseInitSDKType): _133.MsgChannelCloseInit;
                    toSDK(message: _133.MsgChannelCloseInit): _133.MsgChannelCloseInitSDKType;
                    fromAmino(object: _133.MsgChannelCloseInitAmino): _133.MsgChannelCloseInit;
                    toAmino(message: _133.MsgChannelCloseInit): _133.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _133.MsgChannelCloseInitAminoMsg): _133.MsgChannelCloseInit;
                    toAminoMsg(message: _133.MsgChannelCloseInit): _133.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _133.MsgChannelCloseInitProtoMsg): _133.MsgChannelCloseInit;
                    toProto(message: _133.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _133.MsgChannelCloseInit): _133.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _133.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _133.MsgChannelCloseInitResponse;
                    toJSON(_: _133.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: {}): _133.MsgChannelCloseInitResponse;
                    fromSDK(_: _133.MsgChannelCloseInitResponseSDKType): _133.MsgChannelCloseInitResponse;
                    toSDK(_: _133.MsgChannelCloseInitResponse): _133.MsgChannelCloseInitResponseSDKType;
                    fromAmino(_: _133.MsgChannelCloseInitResponseAmino): _133.MsgChannelCloseInitResponse;
                    toAmino(_: _133.MsgChannelCloseInitResponse): _133.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _133.MsgChannelCloseInitResponseAminoMsg): _133.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _133.MsgChannelCloseInitResponse): _133.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _133.MsgChannelCloseInitResponseProtoMsg): _133.MsgChannelCloseInitResponse;
                    toProto(message: _133.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _133.MsgChannelCloseInitResponse): _133.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _133.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgChannelCloseConfirm;
                    fromJSON(object: any): _133.MsgChannelCloseConfirm;
                    toJSON(message: _133.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _133.MsgChannelCloseConfirm;
                    fromSDK(object: _133.MsgChannelCloseConfirmSDKType): _133.MsgChannelCloseConfirm;
                    toSDK(message: _133.MsgChannelCloseConfirm): _133.MsgChannelCloseConfirmSDKType;
                    fromAmino(object: _133.MsgChannelCloseConfirmAmino): _133.MsgChannelCloseConfirm;
                    toAmino(message: _133.MsgChannelCloseConfirm): _133.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _133.MsgChannelCloseConfirmAminoMsg): _133.MsgChannelCloseConfirm;
                    toAminoMsg(message: _133.MsgChannelCloseConfirm): _133.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _133.MsgChannelCloseConfirmProtoMsg): _133.MsgChannelCloseConfirm;
                    toProto(message: _133.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _133.MsgChannelCloseConfirm): _133.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _133.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _133.MsgChannelCloseConfirmResponse;
                    toJSON(_: _133.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: {}): _133.MsgChannelCloseConfirmResponse;
                    fromSDK(_: _133.MsgChannelCloseConfirmResponseSDKType): _133.MsgChannelCloseConfirmResponse;
                    toSDK(_: _133.MsgChannelCloseConfirmResponse): _133.MsgChannelCloseConfirmResponseSDKType;
                    fromAmino(_: _133.MsgChannelCloseConfirmResponseAmino): _133.MsgChannelCloseConfirmResponse;
                    toAmino(_: _133.MsgChannelCloseConfirmResponse): _133.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _133.MsgChannelCloseConfirmResponseAminoMsg): _133.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _133.MsgChannelCloseConfirmResponse): _133.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _133.MsgChannelCloseConfirmResponseProtoMsg): _133.MsgChannelCloseConfirmResponse;
                    toProto(message: _133.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _133.MsgChannelCloseConfirmResponse): _133.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _133.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgRecvPacket;
                    fromJSON(object: any): _133.MsgRecvPacket;
                    toJSON(message: _133.MsgRecvPacket): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: bigint;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            timeoutTimestamp?: bigint;
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _133.MsgRecvPacket;
                    fromSDK(object: _133.MsgRecvPacketSDKType): _133.MsgRecvPacket;
                    toSDK(message: _133.MsgRecvPacket): _133.MsgRecvPacketSDKType;
                    fromAmino(object: _133.MsgRecvPacketAmino): _133.MsgRecvPacket;
                    toAmino(message: _133.MsgRecvPacket): _133.MsgRecvPacketAmino;
                    fromAminoMsg(object: _133.MsgRecvPacketAminoMsg): _133.MsgRecvPacket;
                    toAminoMsg(message: _133.MsgRecvPacket): _133.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _133.MsgRecvPacketProtoMsg): _133.MsgRecvPacket;
                    toProto(message: _133.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _133.MsgRecvPacket): _133.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _133.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgRecvPacketResponse;
                    fromJSON(object: any): _133.MsgRecvPacketResponse;
                    toJSON(message: _133.MsgRecvPacketResponse): unknown;
                    fromPartial(object: {
                        result?: _133.ResponseResultType;
                    }): _133.MsgRecvPacketResponse;
                    fromSDK(object: _133.MsgRecvPacketResponseSDKType): _133.MsgRecvPacketResponse;
                    toSDK(message: _133.MsgRecvPacketResponse): _133.MsgRecvPacketResponseSDKType;
                    fromAmino(object: _133.MsgRecvPacketResponseAmino): _133.MsgRecvPacketResponse;
                    toAmino(message: _133.MsgRecvPacketResponse): _133.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _133.MsgRecvPacketResponseAminoMsg): _133.MsgRecvPacketResponse;
                    toAminoMsg(message: _133.MsgRecvPacketResponse): _133.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _133.MsgRecvPacketResponseProtoMsg): _133.MsgRecvPacketResponse;
                    toProto(message: _133.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _133.MsgRecvPacketResponse): _133.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _133.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgTimeout;
                    fromJSON(object: any): _133.MsgTimeout;
                    toJSON(message: _133.MsgTimeout): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: bigint;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            timeoutTimestamp?: bigint;
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        nextSequenceRecv?: bigint;
                        signer?: string;
                    }): _133.MsgTimeout;
                    fromSDK(object: _133.MsgTimeoutSDKType): _133.MsgTimeout;
                    toSDK(message: _133.MsgTimeout): _133.MsgTimeoutSDKType;
                    fromAmino(object: _133.MsgTimeoutAmino): _133.MsgTimeout;
                    toAmino(message: _133.MsgTimeout): _133.MsgTimeoutAmino;
                    fromAminoMsg(object: _133.MsgTimeoutAminoMsg): _133.MsgTimeout;
                    toAminoMsg(message: _133.MsgTimeout): _133.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _133.MsgTimeoutProtoMsg): _133.MsgTimeout;
                    toProto(message: _133.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _133.MsgTimeout): _133.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _133.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgTimeoutResponse;
                    fromJSON(object: any): _133.MsgTimeoutResponse;
                    toJSON(message: _133.MsgTimeoutResponse): unknown;
                    fromPartial(object: {
                        result?: _133.ResponseResultType;
                    }): _133.MsgTimeoutResponse;
                    fromSDK(object: _133.MsgTimeoutResponseSDKType): _133.MsgTimeoutResponse;
                    toSDK(message: _133.MsgTimeoutResponse): _133.MsgTimeoutResponseSDKType;
                    fromAmino(object: _133.MsgTimeoutResponseAmino): _133.MsgTimeoutResponse;
                    toAmino(message: _133.MsgTimeoutResponse): _133.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _133.MsgTimeoutResponseAminoMsg): _133.MsgTimeoutResponse;
                    toAminoMsg(message: _133.MsgTimeoutResponse): _133.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _133.MsgTimeoutResponseProtoMsg): _133.MsgTimeoutResponse;
                    toProto(message: _133.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _133.MsgTimeoutResponse): _133.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _133.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgTimeoutOnClose;
                    fromJSON(object: any): _133.MsgTimeoutOnClose;
                    toJSON(message: _133.MsgTimeoutOnClose): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: bigint;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            timeoutTimestamp?: bigint;
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        nextSequenceRecv?: bigint;
                        signer?: string;
                    }): _133.MsgTimeoutOnClose;
                    fromSDK(object: _133.MsgTimeoutOnCloseSDKType): _133.MsgTimeoutOnClose;
                    toSDK(message: _133.MsgTimeoutOnClose): _133.MsgTimeoutOnCloseSDKType;
                    fromAmino(object: _133.MsgTimeoutOnCloseAmino): _133.MsgTimeoutOnClose;
                    toAmino(message: _133.MsgTimeoutOnClose): _133.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _133.MsgTimeoutOnCloseAminoMsg): _133.MsgTimeoutOnClose;
                    toAminoMsg(message: _133.MsgTimeoutOnClose): _133.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _133.MsgTimeoutOnCloseProtoMsg): _133.MsgTimeoutOnClose;
                    toProto(message: _133.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _133.MsgTimeoutOnClose): _133.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _133.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgTimeoutOnCloseResponse;
                    fromJSON(object: any): _133.MsgTimeoutOnCloseResponse;
                    toJSON(message: _133.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(object: {
                        result?: _133.ResponseResultType;
                    }): _133.MsgTimeoutOnCloseResponse;
                    fromSDK(object: _133.MsgTimeoutOnCloseResponseSDKType): _133.MsgTimeoutOnCloseResponse;
                    toSDK(message: _133.MsgTimeoutOnCloseResponse): _133.MsgTimeoutOnCloseResponseSDKType;
                    fromAmino(object: _133.MsgTimeoutOnCloseResponseAmino): _133.MsgTimeoutOnCloseResponse;
                    toAmino(message: _133.MsgTimeoutOnCloseResponse): _133.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _133.MsgTimeoutOnCloseResponseAminoMsg): _133.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _133.MsgTimeoutOnCloseResponse): _133.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _133.MsgTimeoutOnCloseResponseProtoMsg): _133.MsgTimeoutOnCloseResponse;
                    toProto(message: _133.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _133.MsgTimeoutOnCloseResponse): _133.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _133.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgAcknowledgement;
                    fromJSON(object: any): _133.MsgAcknowledgement;
                    toJSON(message: _133.MsgAcknowledgement): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: bigint;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            timeoutTimestamp?: bigint;
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _133.MsgAcknowledgement;
                    fromSDK(object: _133.MsgAcknowledgementSDKType): _133.MsgAcknowledgement;
                    toSDK(message: _133.MsgAcknowledgement): _133.MsgAcknowledgementSDKType;
                    fromAmino(object: _133.MsgAcknowledgementAmino): _133.MsgAcknowledgement;
                    toAmino(message: _133.MsgAcknowledgement): _133.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _133.MsgAcknowledgementAminoMsg): _133.MsgAcknowledgement;
                    toAminoMsg(message: _133.MsgAcknowledgement): _133.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _133.MsgAcknowledgementProtoMsg): _133.MsgAcknowledgement;
                    toProto(message: _133.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _133.MsgAcknowledgement): _133.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _133.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.MsgAcknowledgementResponse;
                    fromJSON(object: any): _133.MsgAcknowledgementResponse;
                    toJSON(message: _133.MsgAcknowledgementResponse): unknown;
                    fromPartial(object: {
                        result?: _133.ResponseResultType;
                    }): _133.MsgAcknowledgementResponse;
                    fromSDK(object: _133.MsgAcknowledgementResponseSDKType): _133.MsgAcknowledgementResponse;
                    toSDK(message: _133.MsgAcknowledgementResponse): _133.MsgAcknowledgementResponseSDKType;
                    fromAmino(object: _133.MsgAcknowledgementResponseAmino): _133.MsgAcknowledgementResponse;
                    toAmino(message: _133.MsgAcknowledgementResponse): _133.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _133.MsgAcknowledgementResponseAminoMsg): _133.MsgAcknowledgementResponse;
                    toAminoMsg(message: _133.MsgAcknowledgementResponse): _133.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _133.MsgAcknowledgementResponseProtoMsg): _133.MsgAcknowledgementResponse;
                    toProto(message: _133.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _133.MsgAcknowledgementResponse): _133.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryChannelRequest;
                    fromJSON(object: any): _132.QueryChannelRequest;
                    toJSON(message: _132.QueryChannelRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _132.QueryChannelRequest;
                    fromSDK(object: _132.QueryChannelRequestSDKType): _132.QueryChannelRequest;
                    toSDK(message: _132.QueryChannelRequest): _132.QueryChannelRequestSDKType;
                    fromAmino(object: _132.QueryChannelRequestAmino): _132.QueryChannelRequest;
                    toAmino(message: _132.QueryChannelRequest): _132.QueryChannelRequestAmino;
                    fromAminoMsg(object: _132.QueryChannelRequestAminoMsg): _132.QueryChannelRequest;
                    toAminoMsg(message: _132.QueryChannelRequest): _132.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _132.QueryChannelRequestProtoMsg): _132.QueryChannelRequest;
                    toProto(message: _132.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _132.QueryChannelRequest): _132.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryChannelResponse;
                    fromJSON(object: any): _132.QueryChannelResponse;
                    toJSON(message: _132.QueryChannelResponse): unknown;
                    fromPartial(object: {
                        channel?: {
                            state?: _130.State;
                            ordering?: _130.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _132.QueryChannelResponse;
                    fromSDK(object: _132.QueryChannelResponseSDKType): _132.QueryChannelResponse;
                    toSDK(message: _132.QueryChannelResponse): _132.QueryChannelResponseSDKType;
                    fromAmino(object: _132.QueryChannelResponseAmino): _132.QueryChannelResponse;
                    toAmino(message: _132.QueryChannelResponse): _132.QueryChannelResponseAmino;
                    fromAminoMsg(object: _132.QueryChannelResponseAminoMsg): _132.QueryChannelResponse;
                    toAminoMsg(message: _132.QueryChannelResponse): _132.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _132.QueryChannelResponseProtoMsg): _132.QueryChannelResponse;
                    toProto(message: _132.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _132.QueryChannelResponse): _132.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryChannelsRequest;
                    fromJSON(object: any): _132.QueryChannelsRequest;
                    toJSON(message: _132.QueryChannelsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _132.QueryChannelsRequest;
                    fromSDK(object: _132.QueryChannelsRequestSDKType): _132.QueryChannelsRequest;
                    toSDK(message: _132.QueryChannelsRequest): _132.QueryChannelsRequestSDKType;
                    fromAmino(object: _132.QueryChannelsRequestAmino): _132.QueryChannelsRequest;
                    toAmino(message: _132.QueryChannelsRequest): _132.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _132.QueryChannelsRequestAminoMsg): _132.QueryChannelsRequest;
                    toAminoMsg(message: _132.QueryChannelsRequest): _132.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _132.QueryChannelsRequestProtoMsg): _132.QueryChannelsRequest;
                    toProto(message: _132.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _132.QueryChannelsRequest): _132.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryChannelsResponse;
                    fromJSON(object: any): _132.QueryChannelsResponse;
                    toJSON(message: _132.QueryChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _130.State;
                            ordering?: _130.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _132.QueryChannelsResponse;
                    fromSDK(object: _132.QueryChannelsResponseSDKType): _132.QueryChannelsResponse;
                    toSDK(message: _132.QueryChannelsResponse): _132.QueryChannelsResponseSDKType;
                    fromAmino(object: _132.QueryChannelsResponseAmino): _132.QueryChannelsResponse;
                    toAmino(message: _132.QueryChannelsResponse): _132.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _132.QueryChannelsResponseAminoMsg): _132.QueryChannelsResponse;
                    toAminoMsg(message: _132.QueryChannelsResponse): _132.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _132.QueryChannelsResponseProtoMsg): _132.QueryChannelsResponse;
                    toProto(message: _132.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _132.QueryChannelsResponse): _132.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _132.QueryConnectionChannelsRequest;
                    toJSON(message: _132.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _132.QueryConnectionChannelsRequest;
                    fromSDK(object: _132.QueryConnectionChannelsRequestSDKType): _132.QueryConnectionChannelsRequest;
                    toSDK(message: _132.QueryConnectionChannelsRequest): _132.QueryConnectionChannelsRequestSDKType;
                    fromAmino(object: _132.QueryConnectionChannelsRequestAmino): _132.QueryConnectionChannelsRequest;
                    toAmino(message: _132.QueryConnectionChannelsRequest): _132.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _132.QueryConnectionChannelsRequestAminoMsg): _132.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _132.QueryConnectionChannelsRequest): _132.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _132.QueryConnectionChannelsRequestProtoMsg): _132.QueryConnectionChannelsRequest;
                    toProto(message: _132.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _132.QueryConnectionChannelsRequest): _132.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _132.QueryConnectionChannelsResponse;
                    toJSON(message: _132.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _130.State;
                            ordering?: _130.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _132.QueryConnectionChannelsResponse;
                    fromSDK(object: _132.QueryConnectionChannelsResponseSDKType): _132.QueryConnectionChannelsResponse;
                    toSDK(message: _132.QueryConnectionChannelsResponse): _132.QueryConnectionChannelsResponseSDKType;
                    fromAmino(object: _132.QueryConnectionChannelsResponseAmino): _132.QueryConnectionChannelsResponse;
                    toAmino(message: _132.QueryConnectionChannelsResponse): _132.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _132.QueryConnectionChannelsResponseAminoMsg): _132.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _132.QueryConnectionChannelsResponse): _132.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _132.QueryConnectionChannelsResponseProtoMsg): _132.QueryConnectionChannelsResponse;
                    toProto(message: _132.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _132.QueryConnectionChannelsResponse): _132.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryChannelClientStateRequest;
                    fromJSON(object: any): _132.QueryChannelClientStateRequest;
                    toJSON(message: _132.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _132.QueryChannelClientStateRequest;
                    fromSDK(object: _132.QueryChannelClientStateRequestSDKType): _132.QueryChannelClientStateRequest;
                    toSDK(message: _132.QueryChannelClientStateRequest): _132.QueryChannelClientStateRequestSDKType;
                    fromAmino(object: _132.QueryChannelClientStateRequestAmino): _132.QueryChannelClientStateRequest;
                    toAmino(message: _132.QueryChannelClientStateRequest): _132.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _132.QueryChannelClientStateRequestAminoMsg): _132.QueryChannelClientStateRequest;
                    toAminoMsg(message: _132.QueryChannelClientStateRequest): _132.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _132.QueryChannelClientStateRequestProtoMsg): _132.QueryChannelClientStateRequest;
                    toProto(message: _132.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _132.QueryChannelClientStateRequest): _132.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryChannelClientStateResponse;
                    fromJSON(object: any): _132.QueryChannelClientStateResponse;
                    toJSON(message: _132.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _132.QueryChannelClientStateResponse;
                    fromSDK(object: _132.QueryChannelClientStateResponseSDKType): _132.QueryChannelClientStateResponse;
                    toSDK(message: _132.QueryChannelClientStateResponse): _132.QueryChannelClientStateResponseSDKType;
                    fromAmino(object: _132.QueryChannelClientStateResponseAmino): _132.QueryChannelClientStateResponse;
                    toAmino(message: _132.QueryChannelClientStateResponse): _132.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _132.QueryChannelClientStateResponseAminoMsg): _132.QueryChannelClientStateResponse;
                    toAminoMsg(message: _132.QueryChannelClientStateResponse): _132.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _132.QueryChannelClientStateResponseProtoMsg): _132.QueryChannelClientStateResponse;
                    toProto(message: _132.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _132.QueryChannelClientStateResponse): _132.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _132.QueryChannelConsensusStateRequest;
                    toJSON(message: _132.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: bigint;
                        revisionHeight?: bigint;
                    }): _132.QueryChannelConsensusStateRequest;
                    fromSDK(object: _132.QueryChannelConsensusStateRequestSDKType): _132.QueryChannelConsensusStateRequest;
                    toSDK(message: _132.QueryChannelConsensusStateRequest): _132.QueryChannelConsensusStateRequestSDKType;
                    fromAmino(object: _132.QueryChannelConsensusStateRequestAmino): _132.QueryChannelConsensusStateRequest;
                    toAmino(message: _132.QueryChannelConsensusStateRequest): _132.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _132.QueryChannelConsensusStateRequestAminoMsg): _132.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _132.QueryChannelConsensusStateRequest): _132.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _132.QueryChannelConsensusStateRequestProtoMsg): _132.QueryChannelConsensusStateRequest;
                    toProto(message: _132.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _132.QueryChannelConsensusStateRequest): _132.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _132.QueryChannelConsensusStateResponse;
                    toJSON(message: _132.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _132.QueryChannelConsensusStateResponse;
                    fromSDK(object: _132.QueryChannelConsensusStateResponseSDKType): _132.QueryChannelConsensusStateResponse;
                    toSDK(message: _132.QueryChannelConsensusStateResponse): _132.QueryChannelConsensusStateResponseSDKType;
                    fromAmino(object: _132.QueryChannelConsensusStateResponseAmino): _132.QueryChannelConsensusStateResponse;
                    toAmino(message: _132.QueryChannelConsensusStateResponse): _132.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _132.QueryChannelConsensusStateResponseAminoMsg): _132.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _132.QueryChannelConsensusStateResponse): _132.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _132.QueryChannelConsensusStateResponseProtoMsg): _132.QueryChannelConsensusStateResponse;
                    toProto(message: _132.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _132.QueryChannelConsensusStateResponse): _132.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _132.QueryPacketCommitmentRequest;
                    toJSON(message: _132.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: bigint;
                    }): _132.QueryPacketCommitmentRequest;
                    fromSDK(object: _132.QueryPacketCommitmentRequestSDKType): _132.QueryPacketCommitmentRequest;
                    toSDK(message: _132.QueryPacketCommitmentRequest): _132.QueryPacketCommitmentRequestSDKType;
                    fromAmino(object: _132.QueryPacketCommitmentRequestAmino): _132.QueryPacketCommitmentRequest;
                    toAmino(message: _132.QueryPacketCommitmentRequest): _132.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _132.QueryPacketCommitmentRequestAminoMsg): _132.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _132.QueryPacketCommitmentRequest): _132.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _132.QueryPacketCommitmentRequestProtoMsg): _132.QueryPacketCommitmentRequest;
                    toProto(message: _132.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _132.QueryPacketCommitmentRequest): _132.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _132.QueryPacketCommitmentResponse;
                    toJSON(message: _132.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _132.QueryPacketCommitmentResponse;
                    fromSDK(object: _132.QueryPacketCommitmentResponseSDKType): _132.QueryPacketCommitmentResponse;
                    toSDK(message: _132.QueryPacketCommitmentResponse): _132.QueryPacketCommitmentResponseSDKType;
                    fromAmino(object: _132.QueryPacketCommitmentResponseAmino): _132.QueryPacketCommitmentResponse;
                    toAmino(message: _132.QueryPacketCommitmentResponse): _132.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _132.QueryPacketCommitmentResponseAminoMsg): _132.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _132.QueryPacketCommitmentResponse): _132.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _132.QueryPacketCommitmentResponseProtoMsg): _132.QueryPacketCommitmentResponse;
                    toProto(message: _132.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _132.QueryPacketCommitmentResponse): _132.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _132.QueryPacketCommitmentsRequest;
                    toJSON(message: _132.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _132.QueryPacketCommitmentsRequest;
                    fromSDK(object: _132.QueryPacketCommitmentsRequestSDKType): _132.QueryPacketCommitmentsRequest;
                    toSDK(message: _132.QueryPacketCommitmentsRequest): _132.QueryPacketCommitmentsRequestSDKType;
                    fromAmino(object: _132.QueryPacketCommitmentsRequestAmino): _132.QueryPacketCommitmentsRequest;
                    toAmino(message: _132.QueryPacketCommitmentsRequest): _132.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _132.QueryPacketCommitmentsRequestAminoMsg): _132.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _132.QueryPacketCommitmentsRequest): _132.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _132.QueryPacketCommitmentsRequestProtoMsg): _132.QueryPacketCommitmentsRequest;
                    toProto(message: _132.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _132.QueryPacketCommitmentsRequest): _132.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _132.QueryPacketCommitmentsResponse;
                    toJSON(message: _132.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _132.QueryPacketCommitmentsResponse;
                    fromSDK(object: _132.QueryPacketCommitmentsResponseSDKType): _132.QueryPacketCommitmentsResponse;
                    toSDK(message: _132.QueryPacketCommitmentsResponse): _132.QueryPacketCommitmentsResponseSDKType;
                    fromAmino(object: _132.QueryPacketCommitmentsResponseAmino): _132.QueryPacketCommitmentsResponse;
                    toAmino(message: _132.QueryPacketCommitmentsResponse): _132.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _132.QueryPacketCommitmentsResponseAminoMsg): _132.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _132.QueryPacketCommitmentsResponse): _132.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _132.QueryPacketCommitmentsResponseProtoMsg): _132.QueryPacketCommitmentsResponse;
                    toProto(message: _132.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _132.QueryPacketCommitmentsResponse): _132.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryPacketReceiptRequest;
                    fromJSON(object: any): _132.QueryPacketReceiptRequest;
                    toJSON(message: _132.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: bigint;
                    }): _132.QueryPacketReceiptRequest;
                    fromSDK(object: _132.QueryPacketReceiptRequestSDKType): _132.QueryPacketReceiptRequest;
                    toSDK(message: _132.QueryPacketReceiptRequest): _132.QueryPacketReceiptRequestSDKType;
                    fromAmino(object: _132.QueryPacketReceiptRequestAmino): _132.QueryPacketReceiptRequest;
                    toAmino(message: _132.QueryPacketReceiptRequest): _132.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _132.QueryPacketReceiptRequestAminoMsg): _132.QueryPacketReceiptRequest;
                    toAminoMsg(message: _132.QueryPacketReceiptRequest): _132.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _132.QueryPacketReceiptRequestProtoMsg): _132.QueryPacketReceiptRequest;
                    toProto(message: _132.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _132.QueryPacketReceiptRequest): _132.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryPacketReceiptResponse;
                    fromJSON(object: any): _132.QueryPacketReceiptResponse;
                    toJSON(message: _132.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _132.QueryPacketReceiptResponse;
                    fromSDK(object: _132.QueryPacketReceiptResponseSDKType): _132.QueryPacketReceiptResponse;
                    toSDK(message: _132.QueryPacketReceiptResponse): _132.QueryPacketReceiptResponseSDKType;
                    fromAmino(object: _132.QueryPacketReceiptResponseAmino): _132.QueryPacketReceiptResponse;
                    toAmino(message: _132.QueryPacketReceiptResponse): _132.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _132.QueryPacketReceiptResponseAminoMsg): _132.QueryPacketReceiptResponse;
                    toAminoMsg(message: _132.QueryPacketReceiptResponse): _132.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _132.QueryPacketReceiptResponseProtoMsg): _132.QueryPacketReceiptResponse;
                    toProto(message: _132.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _132.QueryPacketReceiptResponse): _132.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _132.QueryPacketAcknowledgementRequest;
                    toJSON(message: _132.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: bigint;
                    }): _132.QueryPacketAcknowledgementRequest;
                    fromSDK(object: _132.QueryPacketAcknowledgementRequestSDKType): _132.QueryPacketAcknowledgementRequest;
                    toSDK(message: _132.QueryPacketAcknowledgementRequest): _132.QueryPacketAcknowledgementRequestSDKType;
                    fromAmino(object: _132.QueryPacketAcknowledgementRequestAmino): _132.QueryPacketAcknowledgementRequest;
                    toAmino(message: _132.QueryPacketAcknowledgementRequest): _132.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _132.QueryPacketAcknowledgementRequestAminoMsg): _132.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _132.QueryPacketAcknowledgementRequest): _132.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _132.QueryPacketAcknowledgementRequestProtoMsg): _132.QueryPacketAcknowledgementRequest;
                    toProto(message: _132.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _132.QueryPacketAcknowledgementRequest): _132.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _132.QueryPacketAcknowledgementResponse;
                    toJSON(message: _132.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _132.QueryPacketAcknowledgementResponse;
                    fromSDK(object: _132.QueryPacketAcknowledgementResponseSDKType): _132.QueryPacketAcknowledgementResponse;
                    toSDK(message: _132.QueryPacketAcknowledgementResponse): _132.QueryPacketAcknowledgementResponseSDKType;
                    fromAmino(object: _132.QueryPacketAcknowledgementResponseAmino): _132.QueryPacketAcknowledgementResponse;
                    toAmino(message: _132.QueryPacketAcknowledgementResponse): _132.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _132.QueryPacketAcknowledgementResponseAminoMsg): _132.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _132.QueryPacketAcknowledgementResponse): _132.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _132.QueryPacketAcknowledgementResponseProtoMsg): _132.QueryPacketAcknowledgementResponse;
                    toProto(message: _132.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _132.QueryPacketAcknowledgementResponse): _132.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _132.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _132.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        packetCommitmentSequences?: bigint[];
                    }): _132.QueryPacketAcknowledgementsRequest;
                    fromSDK(object: _132.QueryPacketAcknowledgementsRequestSDKType): _132.QueryPacketAcknowledgementsRequest;
                    toSDK(message: _132.QueryPacketAcknowledgementsRequest): _132.QueryPacketAcknowledgementsRequestSDKType;
                    fromAmino(object: _132.QueryPacketAcknowledgementsRequestAmino): _132.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _132.QueryPacketAcknowledgementsRequest): _132.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _132.QueryPacketAcknowledgementsRequestAminoMsg): _132.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _132.QueryPacketAcknowledgementsRequest): _132.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _132.QueryPacketAcknowledgementsRequestProtoMsg): _132.QueryPacketAcknowledgementsRequest;
                    toProto(message: _132.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _132.QueryPacketAcknowledgementsRequest): _132.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _132.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _132.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _132.QueryPacketAcknowledgementsResponse;
                    fromSDK(object: _132.QueryPacketAcknowledgementsResponseSDKType): _132.QueryPacketAcknowledgementsResponse;
                    toSDK(message: _132.QueryPacketAcknowledgementsResponse): _132.QueryPacketAcknowledgementsResponseSDKType;
                    fromAmino(object: _132.QueryPacketAcknowledgementsResponseAmino): _132.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _132.QueryPacketAcknowledgementsResponse): _132.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _132.QueryPacketAcknowledgementsResponseAminoMsg): _132.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _132.QueryPacketAcknowledgementsResponse): _132.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _132.QueryPacketAcknowledgementsResponseProtoMsg): _132.QueryPacketAcknowledgementsResponse;
                    toProto(message: _132.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _132.QueryPacketAcknowledgementsResponse): _132.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _132.QueryUnreceivedPacketsRequest;
                    toJSON(message: _132.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: bigint[];
                    }): _132.QueryUnreceivedPacketsRequest;
                    fromSDK(object: _132.QueryUnreceivedPacketsRequestSDKType): _132.QueryUnreceivedPacketsRequest;
                    toSDK(message: _132.QueryUnreceivedPacketsRequest): _132.QueryUnreceivedPacketsRequestSDKType;
                    fromAmino(object: _132.QueryUnreceivedPacketsRequestAmino): _132.QueryUnreceivedPacketsRequest;
                    toAmino(message: _132.QueryUnreceivedPacketsRequest): _132.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _132.QueryUnreceivedPacketsRequestAminoMsg): _132.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _132.QueryUnreceivedPacketsRequest): _132.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _132.QueryUnreceivedPacketsRequestProtoMsg): _132.QueryUnreceivedPacketsRequest;
                    toProto(message: _132.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _132.QueryUnreceivedPacketsRequest): _132.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _132.QueryUnreceivedPacketsResponse;
                    toJSON(message: _132.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: {
                        sequences?: bigint[];
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _132.QueryUnreceivedPacketsResponse;
                    fromSDK(object: _132.QueryUnreceivedPacketsResponseSDKType): _132.QueryUnreceivedPacketsResponse;
                    toSDK(message: _132.QueryUnreceivedPacketsResponse): _132.QueryUnreceivedPacketsResponseSDKType;
                    fromAmino(object: _132.QueryUnreceivedPacketsResponseAmino): _132.QueryUnreceivedPacketsResponse;
                    toAmino(message: _132.QueryUnreceivedPacketsResponse): _132.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _132.QueryUnreceivedPacketsResponseAminoMsg): _132.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _132.QueryUnreceivedPacketsResponse): _132.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _132.QueryUnreceivedPacketsResponseProtoMsg): _132.QueryUnreceivedPacketsResponse;
                    toProto(message: _132.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _132.QueryUnreceivedPacketsResponse): _132.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _132.QueryUnreceivedAcksRequest;
                    toJSON(message: _132.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: bigint[];
                    }): _132.QueryUnreceivedAcksRequest;
                    fromSDK(object: _132.QueryUnreceivedAcksRequestSDKType): _132.QueryUnreceivedAcksRequest;
                    toSDK(message: _132.QueryUnreceivedAcksRequest): _132.QueryUnreceivedAcksRequestSDKType;
                    fromAmino(object: _132.QueryUnreceivedAcksRequestAmino): _132.QueryUnreceivedAcksRequest;
                    toAmino(message: _132.QueryUnreceivedAcksRequest): _132.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _132.QueryUnreceivedAcksRequestAminoMsg): _132.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _132.QueryUnreceivedAcksRequest): _132.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _132.QueryUnreceivedAcksRequestProtoMsg): _132.QueryUnreceivedAcksRequest;
                    toProto(message: _132.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _132.QueryUnreceivedAcksRequest): _132.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _132.QueryUnreceivedAcksResponse;
                    toJSON(message: _132.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: {
                        sequences?: bigint[];
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _132.QueryUnreceivedAcksResponse;
                    fromSDK(object: _132.QueryUnreceivedAcksResponseSDKType): _132.QueryUnreceivedAcksResponse;
                    toSDK(message: _132.QueryUnreceivedAcksResponse): _132.QueryUnreceivedAcksResponseSDKType;
                    fromAmino(object: _132.QueryUnreceivedAcksResponseAmino): _132.QueryUnreceivedAcksResponse;
                    toAmino(message: _132.QueryUnreceivedAcksResponse): _132.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _132.QueryUnreceivedAcksResponseAminoMsg): _132.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _132.QueryUnreceivedAcksResponse): _132.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _132.QueryUnreceivedAcksResponseProtoMsg): _132.QueryUnreceivedAcksResponse;
                    toProto(message: _132.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _132.QueryUnreceivedAcksResponse): _132.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _132.QueryNextSequenceReceiveRequest;
                    toJSON(message: _132.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _132.QueryNextSequenceReceiveRequest;
                    fromSDK(object: _132.QueryNextSequenceReceiveRequestSDKType): _132.QueryNextSequenceReceiveRequest;
                    toSDK(message: _132.QueryNextSequenceReceiveRequest): _132.QueryNextSequenceReceiveRequestSDKType;
                    fromAmino(object: _132.QueryNextSequenceReceiveRequestAmino): _132.QueryNextSequenceReceiveRequest;
                    toAmino(message: _132.QueryNextSequenceReceiveRequest): _132.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _132.QueryNextSequenceReceiveRequestAminoMsg): _132.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _132.QueryNextSequenceReceiveRequest): _132.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _132.QueryNextSequenceReceiveRequestProtoMsg): _132.QueryNextSequenceReceiveRequest;
                    toProto(message: _132.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _132.QueryNextSequenceReceiveRequest): _132.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _132.QueryNextSequenceReceiveResponse;
                    toJSON(message: _132.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: {
                        nextSequenceReceive?: bigint;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _132.QueryNextSequenceReceiveResponse;
                    fromSDK(object: _132.QueryNextSequenceReceiveResponseSDKType): _132.QueryNextSequenceReceiveResponse;
                    toSDK(message: _132.QueryNextSequenceReceiveResponse): _132.QueryNextSequenceReceiveResponseSDKType;
                    fromAmino(object: _132.QueryNextSequenceReceiveResponseAmino): _132.QueryNextSequenceReceiveResponse;
                    toAmino(message: _132.QueryNextSequenceReceiveResponse): _132.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _132.QueryNextSequenceReceiveResponseAminoMsg): _132.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _132.QueryNextSequenceReceiveResponse): _132.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _132.QueryNextSequenceReceiveResponseProtoMsg): _132.QueryNextSequenceReceiveResponse;
                    toProto(message: _132.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _132.QueryNextSequenceReceiveResponse): _132.QueryNextSequenceReceiveResponseProtoMsg;
                };
                QueryNextSequenceSendRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryNextSequenceSendRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryNextSequenceSendRequest;
                    fromJSON(object: any): _132.QueryNextSequenceSendRequest;
                    toJSON(message: _132.QueryNextSequenceSendRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _132.QueryNextSequenceSendRequest;
                    fromSDK(object: _132.QueryNextSequenceSendRequestSDKType): _132.QueryNextSequenceSendRequest;
                    toSDK(message: _132.QueryNextSequenceSendRequest): _132.QueryNextSequenceSendRequestSDKType;
                    fromAmino(object: _132.QueryNextSequenceSendRequestAmino): _132.QueryNextSequenceSendRequest;
                    toAmino(message: _132.QueryNextSequenceSendRequest): _132.QueryNextSequenceSendRequestAmino;
                    fromAminoMsg(object: _132.QueryNextSequenceSendRequestAminoMsg): _132.QueryNextSequenceSendRequest;
                    toAminoMsg(message: _132.QueryNextSequenceSendRequest): _132.QueryNextSequenceSendRequestAminoMsg;
                    fromProtoMsg(message: _132.QueryNextSequenceSendRequestProtoMsg): _132.QueryNextSequenceSendRequest;
                    toProto(message: _132.QueryNextSequenceSendRequest): Uint8Array;
                    toProtoMsg(message: _132.QueryNextSequenceSendRequest): _132.QueryNextSequenceSendRequestProtoMsg;
                };
                QueryNextSequenceSendResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _132.QueryNextSequenceSendResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.QueryNextSequenceSendResponse;
                    fromJSON(object: any): _132.QueryNextSequenceSendResponse;
                    toJSON(message: _132.QueryNextSequenceSendResponse): unknown;
                    fromPartial(object: {
                        nextSequenceSend?: bigint;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _132.QueryNextSequenceSendResponse;
                    fromSDK(object: _132.QueryNextSequenceSendResponseSDKType): _132.QueryNextSequenceSendResponse;
                    toSDK(message: _132.QueryNextSequenceSendResponse): _132.QueryNextSequenceSendResponseSDKType;
                    fromAmino(object: _132.QueryNextSequenceSendResponseAmino): _132.QueryNextSequenceSendResponse;
                    toAmino(message: _132.QueryNextSequenceSendResponse): _132.QueryNextSequenceSendResponseAmino;
                    fromAminoMsg(object: _132.QueryNextSequenceSendResponseAminoMsg): _132.QueryNextSequenceSendResponse;
                    toAminoMsg(message: _132.QueryNextSequenceSendResponse): _132.QueryNextSequenceSendResponseAminoMsg;
                    fromProtoMsg(message: _132.QueryNextSequenceSendResponseProtoMsg): _132.QueryNextSequenceSendResponse;
                    toProto(message: _132.QueryNextSequenceSendResponse): Uint8Array;
                    toProtoMsg(message: _132.QueryNextSequenceSendResponse): _132.QueryNextSequenceSendResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _131.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.GenesisState;
                    fromJSON(object: any): _131.GenesisState;
                    toJSON(message: _131.GenesisState): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _130.State;
                            ordering?: _130.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                        }[];
                        nextChannelSequence?: bigint;
                    }): _131.GenesisState;
                    fromSDK(object: _131.GenesisStateSDKType): _131.GenesisState;
                    toSDK(message: _131.GenesisState): _131.GenesisStateSDKType;
                    fromAmino(object: _131.GenesisStateAmino): _131.GenesisState;
                    toAmino(message: _131.GenesisState): _131.GenesisStateAmino;
                    fromAminoMsg(object: _131.GenesisStateAminoMsg): _131.GenesisState;
                    toAminoMsg(message: _131.GenesisState): _131.GenesisStateAminoMsg;
                    fromProtoMsg(message: _131.GenesisStateProtoMsg): _131.GenesisState;
                    toProto(message: _131.GenesisState): Uint8Array;
                    toProtoMsg(message: _131.GenesisState): _131.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _131.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.PacketSequence;
                    fromJSON(object: any): _131.PacketSequence;
                    toJSON(message: _131.PacketSequence): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: bigint;
                    }): _131.PacketSequence;
                    fromSDK(object: _131.PacketSequenceSDKType): _131.PacketSequence;
                    toSDK(message: _131.PacketSequence): _131.PacketSequenceSDKType;
                    fromAmino(object: _131.PacketSequenceAmino): _131.PacketSequence;
                    toAmino(message: _131.PacketSequence): _131.PacketSequenceAmino;
                    fromAminoMsg(object: _131.PacketSequenceAminoMsg): _131.PacketSequence;
                    toAminoMsg(message: _131.PacketSequence): _131.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _131.PacketSequenceProtoMsg): _131.PacketSequence;
                    toProto(message: _131.PacketSequence): Uint8Array;
                    toProtoMsg(message: _131.PacketSequence): _131.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _130.State;
                stateToJSON(object: _130.State): string;
                orderFromJSON(object: any): _130.Order;
                orderToJSON(object: _130.Order): string;
                State: typeof _130.State;
                StateSDKType: typeof _130.State;
                StateAmino: typeof _130.State;
                Order: typeof _130.Order;
                OrderSDKType: typeof _130.Order;
                OrderAmino: typeof _130.Order;
                Channel: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _130.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.Channel;
                    fromJSON(object: any): _130.Channel;
                    toJSON(message: _130.Channel): unknown;
                    fromPartial(object: {
                        state?: _130.State;
                        ordering?: _130.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    }): _130.Channel;
                    fromSDK(object: _130.ChannelSDKType): _130.Channel;
                    toSDK(message: _130.Channel): _130.ChannelSDKType;
                    fromAmino(object: _130.ChannelAmino): _130.Channel;
                    toAmino(message: _130.Channel): _130.ChannelAmino;
                    fromAminoMsg(object: _130.ChannelAminoMsg): _130.Channel;
                    toAminoMsg(message: _130.Channel): _130.ChannelAminoMsg;
                    fromProtoMsg(message: _130.ChannelProtoMsg): _130.Channel;
                    toProto(message: _130.Channel): Uint8Array;
                    toProtoMsg(message: _130.Channel): _130.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _130.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.IdentifiedChannel;
                    fromJSON(object: any): _130.IdentifiedChannel;
                    toJSON(message: _130.IdentifiedChannel): unknown;
                    fromPartial(object: {
                        state?: _130.State;
                        ordering?: _130.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    }): _130.IdentifiedChannel;
                    fromSDK(object: _130.IdentifiedChannelSDKType): _130.IdentifiedChannel;
                    toSDK(message: _130.IdentifiedChannel): _130.IdentifiedChannelSDKType;
                    fromAmino(object: _130.IdentifiedChannelAmino): _130.IdentifiedChannel;
                    toAmino(message: _130.IdentifiedChannel): _130.IdentifiedChannelAmino;
                    fromAminoMsg(object: _130.IdentifiedChannelAminoMsg): _130.IdentifiedChannel;
                    toAminoMsg(message: _130.IdentifiedChannel): _130.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _130.IdentifiedChannelProtoMsg): _130.IdentifiedChannel;
                    toProto(message: _130.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _130.IdentifiedChannel): _130.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _130.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.Counterparty;
                    fromJSON(object: any): _130.Counterparty;
                    toJSON(message: _130.Counterparty): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _130.Counterparty;
                    fromSDK(object: _130.CounterpartySDKType): _130.Counterparty;
                    toSDK(message: _130.Counterparty): _130.CounterpartySDKType;
                    fromAmino(object: _130.CounterpartyAmino): _130.Counterparty;
                    toAmino(message: _130.Counterparty): _130.CounterpartyAmino;
                    fromAminoMsg(object: _130.CounterpartyAminoMsg): _130.Counterparty;
                    toAminoMsg(message: _130.Counterparty): _130.CounterpartyAminoMsg;
                    fromProtoMsg(message: _130.CounterpartyProtoMsg): _130.Counterparty;
                    toProto(message: _130.Counterparty): Uint8Array;
                    toProtoMsg(message: _130.Counterparty): _130.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _130.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.Packet;
                    fromJSON(object: any): _130.Packet;
                    toJSON(message: _130.Packet): unknown;
                    fromPartial(object: {
                        sequence?: bigint;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        timeoutTimestamp?: bigint;
                    }): _130.Packet;
                    fromSDK(object: _130.PacketSDKType): _130.Packet;
                    toSDK(message: _130.Packet): _130.PacketSDKType;
                    fromAmino(object: _130.PacketAmino): _130.Packet;
                    toAmino(message: _130.Packet): _130.PacketAmino;
                    fromAminoMsg(object: _130.PacketAminoMsg): _130.Packet;
                    toAminoMsg(message: _130.Packet): _130.PacketAminoMsg;
                    fromProtoMsg(message: _130.PacketProtoMsg): _130.Packet;
                    toProto(message: _130.Packet): Uint8Array;
                    toProtoMsg(message: _130.Packet): _130.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _130.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.PacketState;
                    fromJSON(object: any): _130.PacketState;
                    toJSON(message: _130.PacketState): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: bigint;
                        data?: Uint8Array;
                    }): _130.PacketState;
                    fromSDK(object: _130.PacketStateSDKType): _130.PacketState;
                    toSDK(message: _130.PacketState): _130.PacketStateSDKType;
                    fromAmino(object: _130.PacketStateAmino): _130.PacketState;
                    toAmino(message: _130.PacketState): _130.PacketStateAmino;
                    fromAminoMsg(object: _130.PacketStateAminoMsg): _130.PacketState;
                    toAminoMsg(message: _130.PacketState): _130.PacketStateAminoMsg;
                    fromProtoMsg(message: _130.PacketStateProtoMsg): _130.PacketState;
                    toProto(message: _130.PacketState): Uint8Array;
                    toProtoMsg(message: _130.PacketState): _130.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _130.PacketId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.PacketId;
                    fromJSON(object: any): _130.PacketId;
                    toJSON(message: _130.PacketId): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: bigint;
                    }): _130.PacketId;
                    fromSDK(object: _130.PacketIdSDKType): _130.PacketId;
                    toSDK(message: _130.PacketId): _130.PacketIdSDKType;
                    fromAmino(object: _130.PacketIdAmino): _130.PacketId;
                    toAmino(message: _130.PacketId): _130.PacketIdAmino;
                    fromAminoMsg(object: _130.PacketIdAminoMsg): _130.PacketId;
                    toAminoMsg(message: _130.PacketId): _130.PacketIdAminoMsg;
                    fromProtoMsg(message: _130.PacketIdProtoMsg): _130.PacketId;
                    toProto(message: _130.PacketId): Uint8Array;
                    toProtoMsg(message: _130.PacketId): _130.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _130.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.Acknowledgement;
                    fromJSON(object: any): _130.Acknowledgement;
                    toJSON(message: _130.Acknowledgement): unknown;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _130.Acknowledgement;
                    fromSDK(object: _130.AcknowledgementSDKType): _130.Acknowledgement;
                    toSDK(message: _130.Acknowledgement): _130.AcknowledgementSDKType;
                    fromAmino(object: _130.AcknowledgementAmino): _130.Acknowledgement;
                    toAmino(message: _130.Acknowledgement): _130.AcknowledgementAmino;
                    fromAminoMsg(object: _130.AcknowledgementAminoMsg): _130.Acknowledgement;
                    toAminoMsg(message: _130.Acknowledgement): _130.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _130.AcknowledgementProtoMsg): _130.Acknowledgement;
                    toProto(message: _130.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _130.Acknowledgement): _130.AcknowledgementProtoMsg;
                };
                Timeout: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _130.Timeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.Timeout;
                    fromJSON(object: any): _130.Timeout;
                    toJSON(message: _130.Timeout): unknown;
                    fromPartial(object: {
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        timestamp?: bigint;
                    }): _130.Timeout;
                    fromSDK(object: _130.TimeoutSDKType): _130.Timeout;
                    toSDK(message: _130.Timeout): _130.TimeoutSDKType;
                    fromAmino(object: _130.TimeoutAmino): _130.Timeout;
                    toAmino(message: _130.Timeout): _130.TimeoutAmino;
                    fromAminoMsg(object: _130.TimeoutAminoMsg): _130.Timeout;
                    toAminoMsg(message: _130.Timeout): _130.TimeoutAminoMsg;
                    fromProtoMsg(message: _130.TimeoutProtoMsg): _130.Timeout;
                    toProto(message: _130.Timeout): Uint8Array;
                    toProtoMsg(message: _130.Timeout): _130.TimeoutProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _252.MsgClientImpl;
                QueryClientImpl: typeof _245.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _136.QueryClientStateRequest): Promise<_136.QueryClientStateResponse>;
                    clientStates(request?: _136.QueryClientStatesRequest): Promise<_136.QueryClientStatesResponse>;
                    consensusState(request: _136.QueryConsensusStateRequest): Promise<_136.QueryConsensusStateResponse>;
                    consensusStates(request: _136.QueryConsensusStatesRequest): Promise<_136.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _136.QueryConsensusStateHeightsRequest): Promise<_136.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _136.QueryClientStatusRequest): Promise<_136.QueryClientStatusResponse>;
                    clientParams(request?: _136.QueryClientParamsRequest): Promise<_136.QueryClientParamsResponse>;
                    upgradedClientState(request?: _136.QueryUpgradedClientStateRequest): Promise<_136.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _136.QueryUpgradedConsensusStateRequest): Promise<_136.QueryUpgradedConsensusStateResponse>;
                };
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useClientState: <TData = _136.QueryClientStateResponse>({ request, options }: _245.UseClientStateQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                    useClientStates: <TData_1 = _136.QueryClientStatesResponse>({ request, options }: _245.UseClientStatesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                    useConsensusState: <TData_2 = _136.QueryConsensusStateResponse>({ request, options }: _245.UseConsensusStateQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                    useConsensusStates: <TData_3 = _136.QueryConsensusStatesResponse>({ request, options }: _245.UseConsensusStatesQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                    useConsensusStateHeights: <TData_4 = _136.QueryConsensusStateHeightsResponse>({ request, options }: _245.UseConsensusStateHeightsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                    useClientStatus: <TData_5 = _136.QueryClientStatusResponse>({ request, options }: _245.UseClientStatusQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                    useClientParams: <TData_6 = _136.QueryClientParamsResponse>({ request, options }: _245.UseClientParamsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                    useUpgradedClientState: <TData_7 = _136.QueryUpgradedClientStateResponse>({ request, options }: _245.UseUpgradedClientStateQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                    useUpgradedConsensusState: <TData_8 = _136.QueryUpgradedConsensusStateResponse>({ request, options }: _245.UseUpgradedConsensusStateQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _137.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _137.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _137.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _137.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClientParams(value: _137.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _137.MsgCreateClient): {
                            typeUrl: string;
                            value: _137.MsgCreateClient;
                        };
                        updateClient(value: _137.MsgUpdateClient): {
                            typeUrl: string;
                            value: _137.MsgUpdateClient;
                        };
                        upgradeClient(value: _137.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _137.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _137.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _137.MsgSubmitMisbehaviour;
                        };
                        updateClientParams(value: _137.MsgUpdateParams): {
                            typeUrl: string;
                            value: _137.MsgUpdateParams;
                        };
                    };
                    toJSON: {
                        createClient(value: _137.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _137.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _137.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _137.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClientParams(value: _137.MsgUpdateParams): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _137.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _137.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _137.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _137.MsgSubmitMisbehaviour;
                        };
                        updateClientParams(value: any): {
                            typeUrl: string;
                            value: _137.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        createClient(value: _137.MsgCreateClient): {
                            typeUrl: string;
                            value: _137.MsgCreateClient;
                        };
                        updateClient(value: _137.MsgUpdateClient): {
                            typeUrl: string;
                            value: _137.MsgUpdateClient;
                        };
                        upgradeClient(value: _137.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _137.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _137.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _137.MsgSubmitMisbehaviour;
                        };
                        updateClientParams(value: _137.MsgUpdateParams): {
                            typeUrl: string;
                            value: _137.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _137.MsgCreateClient) => _137.MsgCreateClientAmino;
                        fromAmino: (object: _137.MsgCreateClientAmino) => _137.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _137.MsgUpdateClient) => _137.MsgUpdateClientAmino;
                        fromAmino: (object: _137.MsgUpdateClientAmino) => _137.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _137.MsgUpgradeClient) => _137.MsgUpgradeClientAmino;
                        fromAmino: (object: _137.MsgUpgradeClientAmino) => _137.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _137.MsgSubmitMisbehaviour) => _137.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _137.MsgSubmitMisbehaviourAmino) => _137.MsgSubmitMisbehaviour;
                    };
                    "/ibc.core.client.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _137.MsgUpdateParams) => _137.MsgUpdateParamsAmino;
                        fromAmino: (object: _137.MsgUpdateParamsAmino) => _137.MsgUpdateParams;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _137.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.MsgCreateClient;
                    fromJSON(object: any): _137.MsgCreateClient;
                    toJSON(message: _137.MsgCreateClient): unknown;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _137.MsgCreateClient;
                    fromSDK(object: _137.MsgCreateClientSDKType): _137.MsgCreateClient;
                    toSDK(message: _137.MsgCreateClient): _137.MsgCreateClientSDKType;
                    fromAmino(object: _137.MsgCreateClientAmino): _137.MsgCreateClient;
                    toAmino(message: _137.MsgCreateClient): _137.MsgCreateClientAmino;
                    fromAminoMsg(object: _137.MsgCreateClientAminoMsg): _137.MsgCreateClient;
                    toAminoMsg(message: _137.MsgCreateClient): _137.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _137.MsgCreateClientProtoMsg): _137.MsgCreateClient;
                    toProto(message: _137.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _137.MsgCreateClient): _137.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _137.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.MsgCreateClientResponse;
                    fromJSON(_: any): _137.MsgCreateClientResponse;
                    toJSON(_: _137.MsgCreateClientResponse): unknown;
                    fromPartial(_: {}): _137.MsgCreateClientResponse;
                    fromSDK(_: _137.MsgCreateClientResponseSDKType): _137.MsgCreateClientResponse;
                    toSDK(_: _137.MsgCreateClientResponse): _137.MsgCreateClientResponseSDKType;
                    fromAmino(_: _137.MsgCreateClientResponseAmino): _137.MsgCreateClientResponse;
                    toAmino(_: _137.MsgCreateClientResponse): _137.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _137.MsgCreateClientResponseAminoMsg): _137.MsgCreateClientResponse;
                    toAminoMsg(message: _137.MsgCreateClientResponse): _137.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _137.MsgCreateClientResponseProtoMsg): _137.MsgCreateClientResponse;
                    toProto(message: _137.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _137.MsgCreateClientResponse): _137.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _137.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.MsgUpdateClient;
                    fromJSON(object: any): _137.MsgUpdateClient;
                    toJSON(message: _137.MsgUpdateClient): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientMessage?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _137.MsgUpdateClient;
                    fromSDK(object: _137.MsgUpdateClientSDKType): _137.MsgUpdateClient;
                    toSDK(message: _137.MsgUpdateClient): _137.MsgUpdateClientSDKType;
                    fromAmino(object: _137.MsgUpdateClientAmino): _137.MsgUpdateClient;
                    toAmino(message: _137.MsgUpdateClient): _137.MsgUpdateClientAmino;
                    fromAminoMsg(object: _137.MsgUpdateClientAminoMsg): _137.MsgUpdateClient;
                    toAminoMsg(message: _137.MsgUpdateClient): _137.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _137.MsgUpdateClientProtoMsg): _137.MsgUpdateClient;
                    toProto(message: _137.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _137.MsgUpdateClient): _137.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _137.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.MsgUpdateClientResponse;
                    fromJSON(_: any): _137.MsgUpdateClientResponse;
                    toJSON(_: _137.MsgUpdateClientResponse): unknown;
                    fromPartial(_: {}): _137.MsgUpdateClientResponse;
                    fromSDK(_: _137.MsgUpdateClientResponseSDKType): _137.MsgUpdateClientResponse;
                    toSDK(_: _137.MsgUpdateClientResponse): _137.MsgUpdateClientResponseSDKType;
                    fromAmino(_: _137.MsgUpdateClientResponseAmino): _137.MsgUpdateClientResponse;
                    toAmino(_: _137.MsgUpdateClientResponse): _137.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _137.MsgUpdateClientResponseAminoMsg): _137.MsgUpdateClientResponse;
                    toAminoMsg(message: _137.MsgUpdateClientResponse): _137.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _137.MsgUpdateClientResponseProtoMsg): _137.MsgUpdateClientResponse;
                    toProto(message: _137.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _137.MsgUpdateClientResponse): _137.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _137.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.MsgUpgradeClient;
                    fromJSON(object: any): _137.MsgUpgradeClient;
                    toJSON(message: _137.MsgUpgradeClient): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    }): _137.MsgUpgradeClient;
                    fromSDK(object: _137.MsgUpgradeClientSDKType): _137.MsgUpgradeClient;
                    toSDK(message: _137.MsgUpgradeClient): _137.MsgUpgradeClientSDKType;
                    fromAmino(object: _137.MsgUpgradeClientAmino): _137.MsgUpgradeClient;
                    toAmino(message: _137.MsgUpgradeClient): _137.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _137.MsgUpgradeClientAminoMsg): _137.MsgUpgradeClient;
                    toAminoMsg(message: _137.MsgUpgradeClient): _137.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _137.MsgUpgradeClientProtoMsg): _137.MsgUpgradeClient;
                    toProto(message: _137.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _137.MsgUpgradeClient): _137.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _137.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.MsgUpgradeClientResponse;
                    fromJSON(_: any): _137.MsgUpgradeClientResponse;
                    toJSON(_: _137.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: {}): _137.MsgUpgradeClientResponse;
                    fromSDK(_: _137.MsgUpgradeClientResponseSDKType): _137.MsgUpgradeClientResponse;
                    toSDK(_: _137.MsgUpgradeClientResponse): _137.MsgUpgradeClientResponseSDKType;
                    fromAmino(_: _137.MsgUpgradeClientResponseAmino): _137.MsgUpgradeClientResponse;
                    toAmino(_: _137.MsgUpgradeClientResponse): _137.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _137.MsgUpgradeClientResponseAminoMsg): _137.MsgUpgradeClientResponse;
                    toAminoMsg(message: _137.MsgUpgradeClientResponse): _137.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _137.MsgUpgradeClientResponseProtoMsg): _137.MsgUpgradeClientResponse;
                    toProto(message: _137.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _137.MsgUpgradeClientResponse): _137.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _137.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _137.MsgSubmitMisbehaviour;
                    toJSON(message: _137.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _137.MsgSubmitMisbehaviour;
                    fromSDK(object: _137.MsgSubmitMisbehaviourSDKType): _137.MsgSubmitMisbehaviour;
                    toSDK(message: _137.MsgSubmitMisbehaviour): _137.MsgSubmitMisbehaviourSDKType;
                    fromAmino(object: _137.MsgSubmitMisbehaviourAmino): _137.MsgSubmitMisbehaviour;
                    toAmino(message: _137.MsgSubmitMisbehaviour): _137.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _137.MsgSubmitMisbehaviourAminoMsg): _137.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _137.MsgSubmitMisbehaviour): _137.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _137.MsgSubmitMisbehaviourProtoMsg): _137.MsgSubmitMisbehaviour;
                    toProto(message: _137.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _137.MsgSubmitMisbehaviour): _137.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _137.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _137.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _137.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: {}): _137.MsgSubmitMisbehaviourResponse;
                    fromSDK(_: _137.MsgSubmitMisbehaviourResponseSDKType): _137.MsgSubmitMisbehaviourResponse;
                    toSDK(_: _137.MsgSubmitMisbehaviourResponse): _137.MsgSubmitMisbehaviourResponseSDKType;
                    fromAmino(_: _137.MsgSubmitMisbehaviourResponseAmino): _137.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _137.MsgSubmitMisbehaviourResponse): _137.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _137.MsgSubmitMisbehaviourResponseAminoMsg): _137.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _137.MsgSubmitMisbehaviourResponse): _137.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _137.MsgSubmitMisbehaviourResponseProtoMsg): _137.MsgSubmitMisbehaviourResponse;
                    toProto(message: _137.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _137.MsgSubmitMisbehaviourResponse): _137.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _137.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.MsgUpdateParams;
                    fromJSON(object: any): _137.MsgUpdateParams;
                    toJSON(message: _137.MsgUpdateParams): unknown;
                    fromPartial(object: {
                        authority?: string;
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _137.MsgUpdateParams;
                    fromSDK(object: _137.MsgUpdateParamsSDKType): _137.MsgUpdateParams;
                    toSDK(message: _137.MsgUpdateParams): _137.MsgUpdateParamsSDKType;
                    fromAmino(object: _137.MsgUpdateParamsAmino): _137.MsgUpdateParams;
                    toAmino(message: _137.MsgUpdateParams): _137.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _137.MsgUpdateParamsAminoMsg): _137.MsgUpdateParams;
                    toAminoMsg(message: _137.MsgUpdateParams): _137.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _137.MsgUpdateParamsProtoMsg): _137.MsgUpdateParams;
                    toProto(message: _137.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _137.MsgUpdateParams): _137.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _137.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.MsgUpdateParamsResponse;
                    fromJSON(_: any): _137.MsgUpdateParamsResponse;
                    toJSON(_: _137.MsgUpdateParamsResponse): unknown;
                    fromPartial(_: {}): _137.MsgUpdateParamsResponse;
                    fromSDK(_: _137.MsgUpdateParamsResponseSDKType): _137.MsgUpdateParamsResponse;
                    toSDK(_: _137.MsgUpdateParamsResponse): _137.MsgUpdateParamsResponseSDKType;
                    fromAmino(_: _137.MsgUpdateParamsResponseAmino): _137.MsgUpdateParamsResponse;
                    toAmino(_: _137.MsgUpdateParamsResponse): _137.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _137.MsgUpdateParamsResponseAminoMsg): _137.MsgUpdateParamsResponse;
                    toAminoMsg(message: _137.MsgUpdateParamsResponse): _137.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _137.MsgUpdateParamsResponseProtoMsg): _137.MsgUpdateParamsResponse;
                    toProto(message: _137.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _137.MsgUpdateParamsResponse): _137.MsgUpdateParamsResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _136.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryClientStateRequest;
                    fromJSON(object: any): _136.QueryClientStateRequest;
                    toJSON(message: _136.QueryClientStateRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _136.QueryClientStateRequest;
                    fromSDK(object: _136.QueryClientStateRequestSDKType): _136.QueryClientStateRequest;
                    toSDK(message: _136.QueryClientStateRequest): _136.QueryClientStateRequestSDKType;
                    fromAmino(object: _136.QueryClientStateRequestAmino): _136.QueryClientStateRequest;
                    toAmino(message: _136.QueryClientStateRequest): _136.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _136.QueryClientStateRequestAminoMsg): _136.QueryClientStateRequest;
                    toAminoMsg(message: _136.QueryClientStateRequest): _136.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _136.QueryClientStateRequestProtoMsg): _136.QueryClientStateRequest;
                    toProto(message: _136.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _136.QueryClientStateRequest): _136.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _136.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryClientStateResponse;
                    fromJSON(object: any): _136.QueryClientStateResponse;
                    toJSON(message: _136.QueryClientStateResponse): unknown;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _136.QueryClientStateResponse;
                    fromSDK(object: _136.QueryClientStateResponseSDKType): _136.QueryClientStateResponse;
                    toSDK(message: _136.QueryClientStateResponse): _136.QueryClientStateResponseSDKType;
                    fromAmino(object: _136.QueryClientStateResponseAmino): _136.QueryClientStateResponse;
                    toAmino(message: _136.QueryClientStateResponse): _136.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _136.QueryClientStateResponseAminoMsg): _136.QueryClientStateResponse;
                    toAminoMsg(message: _136.QueryClientStateResponse): _136.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _136.QueryClientStateResponseProtoMsg): _136.QueryClientStateResponse;
                    toProto(message: _136.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _136.QueryClientStateResponse): _136.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _136.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryClientStatesRequest;
                    fromJSON(object: any): _136.QueryClientStatesRequest;
                    toJSON(message: _136.QueryClientStatesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _136.QueryClientStatesRequest;
                    fromSDK(object: _136.QueryClientStatesRequestSDKType): _136.QueryClientStatesRequest;
                    toSDK(message: _136.QueryClientStatesRequest): _136.QueryClientStatesRequestSDKType;
                    fromAmino(object: _136.QueryClientStatesRequestAmino): _136.QueryClientStatesRequest;
                    toAmino(message: _136.QueryClientStatesRequest): _136.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _136.QueryClientStatesRequestAminoMsg): _136.QueryClientStatesRequest;
                    toAminoMsg(message: _136.QueryClientStatesRequest): _136.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _136.QueryClientStatesRequestProtoMsg): _136.QueryClientStatesRequest;
                    toProto(message: _136.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _136.QueryClientStatesRequest): _136.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _136.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryClientStatesResponse;
                    fromJSON(object: any): _136.QueryClientStatesResponse;
                    toJSON(message: _136.QueryClientStatesResponse): unknown;
                    fromPartial(object: {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                    }): _136.QueryClientStatesResponse;
                    fromSDK(object: _136.QueryClientStatesResponseSDKType): _136.QueryClientStatesResponse;
                    toSDK(message: _136.QueryClientStatesResponse): _136.QueryClientStatesResponseSDKType;
                    fromAmino(object: _136.QueryClientStatesResponseAmino): _136.QueryClientStatesResponse;
                    toAmino(message: _136.QueryClientStatesResponse): _136.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _136.QueryClientStatesResponseAminoMsg): _136.QueryClientStatesResponse;
                    toAminoMsg(message: _136.QueryClientStatesResponse): _136.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _136.QueryClientStatesResponseProtoMsg): _136.QueryClientStatesResponse;
                    toProto(message: _136.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _136.QueryClientStatesResponse): _136.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _136.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryConsensusStateRequest;
                    fromJSON(object: any): _136.QueryConsensusStateRequest;
                    toJSON(message: _136.QueryConsensusStateRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        revisionNumber?: bigint;
                        revisionHeight?: bigint;
                        latestHeight?: boolean;
                    }): _136.QueryConsensusStateRequest;
                    fromSDK(object: _136.QueryConsensusStateRequestSDKType): _136.QueryConsensusStateRequest;
                    toSDK(message: _136.QueryConsensusStateRequest): _136.QueryConsensusStateRequestSDKType;
                    fromAmino(object: _136.QueryConsensusStateRequestAmino): _136.QueryConsensusStateRequest;
                    toAmino(message: _136.QueryConsensusStateRequest): _136.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _136.QueryConsensusStateRequestAminoMsg): _136.QueryConsensusStateRequest;
                    toAminoMsg(message: _136.QueryConsensusStateRequest): _136.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _136.QueryConsensusStateRequestProtoMsg): _136.QueryConsensusStateRequest;
                    toProto(message: _136.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _136.QueryConsensusStateRequest): _136.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _136.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryConsensusStateResponse;
                    fromJSON(object: any): _136.QueryConsensusStateResponse;
                    toJSON(message: _136.QueryConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _136.QueryConsensusStateResponse;
                    fromSDK(object: _136.QueryConsensusStateResponseSDKType): _136.QueryConsensusStateResponse;
                    toSDK(message: _136.QueryConsensusStateResponse): _136.QueryConsensusStateResponseSDKType;
                    fromAmino(object: _136.QueryConsensusStateResponseAmino): _136.QueryConsensusStateResponse;
                    toAmino(message: _136.QueryConsensusStateResponse): _136.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _136.QueryConsensusStateResponseAminoMsg): _136.QueryConsensusStateResponse;
                    toAminoMsg(message: _136.QueryConsensusStateResponse): _136.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _136.QueryConsensusStateResponseProtoMsg): _136.QueryConsensusStateResponse;
                    toProto(message: _136.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _136.QueryConsensusStateResponse): _136.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _136.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryConsensusStatesRequest;
                    fromJSON(object: any): _136.QueryConsensusStatesRequest;
                    toJSON(message: _136.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _136.QueryConsensusStatesRequest;
                    fromSDK(object: _136.QueryConsensusStatesRequestSDKType): _136.QueryConsensusStatesRequest;
                    toSDK(message: _136.QueryConsensusStatesRequest): _136.QueryConsensusStatesRequestSDKType;
                    fromAmino(object: _136.QueryConsensusStatesRequestAmino): _136.QueryConsensusStatesRequest;
                    toAmino(message: _136.QueryConsensusStatesRequest): _136.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _136.QueryConsensusStatesRequestAminoMsg): _136.QueryConsensusStatesRequest;
                    toAminoMsg(message: _136.QueryConsensusStatesRequest): _136.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _136.QueryConsensusStatesRequestProtoMsg): _136.QueryConsensusStatesRequest;
                    toProto(message: _136.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _136.QueryConsensusStatesRequest): _136.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _136.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryConsensusStatesResponse;
                    fromJSON(object: any): _136.QueryConsensusStatesResponse;
                    toJSON(message: _136.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                    }): _136.QueryConsensusStatesResponse;
                    fromSDK(object: _136.QueryConsensusStatesResponseSDKType): _136.QueryConsensusStatesResponse;
                    toSDK(message: _136.QueryConsensusStatesResponse): _136.QueryConsensusStatesResponseSDKType;
                    fromAmino(object: _136.QueryConsensusStatesResponseAmino): _136.QueryConsensusStatesResponse;
                    toAmino(message: _136.QueryConsensusStatesResponse): _136.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _136.QueryConsensusStatesResponseAminoMsg): _136.QueryConsensusStatesResponse;
                    toAminoMsg(message: _136.QueryConsensusStatesResponse): _136.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _136.QueryConsensusStatesResponseProtoMsg): _136.QueryConsensusStatesResponse;
                    toProto(message: _136.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _136.QueryConsensusStatesResponse): _136.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _136.QueryConsensusStateHeightsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryConsensusStateHeightsRequest;
                    fromJSON(object: any): _136.QueryConsensusStateHeightsRequest;
                    toJSON(message: _136.QueryConsensusStateHeightsRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _136.QueryConsensusStateHeightsRequest;
                    fromSDK(object: _136.QueryConsensusStateHeightsRequestSDKType): _136.QueryConsensusStateHeightsRequest;
                    toSDK(message: _136.QueryConsensusStateHeightsRequest): _136.QueryConsensusStateHeightsRequestSDKType;
                    fromAmino(object: _136.QueryConsensusStateHeightsRequestAmino): _136.QueryConsensusStateHeightsRequest;
                    toAmino(message: _136.QueryConsensusStateHeightsRequest): _136.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _136.QueryConsensusStateHeightsRequestAminoMsg): _136.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _136.QueryConsensusStateHeightsRequest): _136.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _136.QueryConsensusStateHeightsRequestProtoMsg): _136.QueryConsensusStateHeightsRequest;
                    toProto(message: _136.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _136.QueryConsensusStateHeightsRequest): _136.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _136.QueryConsensusStateHeightsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryConsensusStateHeightsResponse;
                    fromJSON(object: any): _136.QueryConsensusStateHeightsResponse;
                    toJSON(message: _136.QueryConsensusStateHeightsResponse): unknown;
                    fromPartial(object: {
                        consensusStateHeights?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                    }): _136.QueryConsensusStateHeightsResponse;
                    fromSDK(object: _136.QueryConsensusStateHeightsResponseSDKType): _136.QueryConsensusStateHeightsResponse;
                    toSDK(message: _136.QueryConsensusStateHeightsResponse): _136.QueryConsensusStateHeightsResponseSDKType;
                    fromAmino(object: _136.QueryConsensusStateHeightsResponseAmino): _136.QueryConsensusStateHeightsResponse;
                    toAmino(message: _136.QueryConsensusStateHeightsResponse): _136.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _136.QueryConsensusStateHeightsResponseAminoMsg): _136.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _136.QueryConsensusStateHeightsResponse): _136.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _136.QueryConsensusStateHeightsResponseProtoMsg): _136.QueryConsensusStateHeightsResponse;
                    toProto(message: _136.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _136.QueryConsensusStateHeightsResponse): _136.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _136.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryClientStatusRequest;
                    fromJSON(object: any): _136.QueryClientStatusRequest;
                    toJSON(message: _136.QueryClientStatusRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _136.QueryClientStatusRequest;
                    fromSDK(object: _136.QueryClientStatusRequestSDKType): _136.QueryClientStatusRequest;
                    toSDK(message: _136.QueryClientStatusRequest): _136.QueryClientStatusRequestSDKType;
                    fromAmino(object: _136.QueryClientStatusRequestAmino): _136.QueryClientStatusRequest;
                    toAmino(message: _136.QueryClientStatusRequest): _136.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _136.QueryClientStatusRequestAminoMsg): _136.QueryClientStatusRequest;
                    toAminoMsg(message: _136.QueryClientStatusRequest): _136.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _136.QueryClientStatusRequestProtoMsg): _136.QueryClientStatusRequest;
                    toProto(message: _136.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _136.QueryClientStatusRequest): _136.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _136.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryClientStatusResponse;
                    fromJSON(object: any): _136.QueryClientStatusResponse;
                    toJSON(message: _136.QueryClientStatusResponse): unknown;
                    fromPartial(object: {
                        status?: string;
                    }): _136.QueryClientStatusResponse;
                    fromSDK(object: _136.QueryClientStatusResponseSDKType): _136.QueryClientStatusResponse;
                    toSDK(message: _136.QueryClientStatusResponse): _136.QueryClientStatusResponseSDKType;
                    fromAmino(object: _136.QueryClientStatusResponseAmino): _136.QueryClientStatusResponse;
                    toAmino(message: _136.QueryClientStatusResponse): _136.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _136.QueryClientStatusResponseAminoMsg): _136.QueryClientStatusResponse;
                    toAminoMsg(message: _136.QueryClientStatusResponse): _136.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _136.QueryClientStatusResponseProtoMsg): _136.QueryClientStatusResponse;
                    toProto(message: _136.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _136.QueryClientStatusResponse): _136.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _136.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryClientParamsRequest;
                    fromJSON(_: any): _136.QueryClientParamsRequest;
                    toJSON(_: _136.QueryClientParamsRequest): unknown;
                    fromPartial(_: {}): _136.QueryClientParamsRequest;
                    fromSDK(_: _136.QueryClientParamsRequestSDKType): _136.QueryClientParamsRequest;
                    toSDK(_: _136.QueryClientParamsRequest): _136.QueryClientParamsRequestSDKType;
                    fromAmino(_: _136.QueryClientParamsRequestAmino): _136.QueryClientParamsRequest;
                    toAmino(_: _136.QueryClientParamsRequest): _136.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _136.QueryClientParamsRequestAminoMsg): _136.QueryClientParamsRequest;
                    toAminoMsg(message: _136.QueryClientParamsRequest): _136.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _136.QueryClientParamsRequestProtoMsg): _136.QueryClientParamsRequest;
                    toProto(message: _136.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _136.QueryClientParamsRequest): _136.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _136.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryClientParamsResponse;
                    fromJSON(object: any): _136.QueryClientParamsResponse;
                    toJSON(message: _136.QueryClientParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _136.QueryClientParamsResponse;
                    fromSDK(object: _136.QueryClientParamsResponseSDKType): _136.QueryClientParamsResponse;
                    toSDK(message: _136.QueryClientParamsResponse): _136.QueryClientParamsResponseSDKType;
                    fromAmino(object: _136.QueryClientParamsResponseAmino): _136.QueryClientParamsResponse;
                    toAmino(message: _136.QueryClientParamsResponse): _136.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _136.QueryClientParamsResponseAminoMsg): _136.QueryClientParamsResponse;
                    toAminoMsg(message: _136.QueryClientParamsResponse): _136.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _136.QueryClientParamsResponseProtoMsg): _136.QueryClientParamsResponse;
                    toProto(message: _136.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _136.QueryClientParamsResponse): _136.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _136.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _136.QueryUpgradedClientStateRequest;
                    toJSON(_: _136.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: {}): _136.QueryUpgradedClientStateRequest;
                    fromSDK(_: _136.QueryUpgradedClientStateRequestSDKType): _136.QueryUpgradedClientStateRequest;
                    toSDK(_: _136.QueryUpgradedClientStateRequest): _136.QueryUpgradedClientStateRequestSDKType;
                    fromAmino(_: _136.QueryUpgradedClientStateRequestAmino): _136.QueryUpgradedClientStateRequest;
                    toAmino(_: _136.QueryUpgradedClientStateRequest): _136.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _136.QueryUpgradedClientStateRequestAminoMsg): _136.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _136.QueryUpgradedClientStateRequest): _136.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _136.QueryUpgradedClientStateRequestProtoMsg): _136.QueryUpgradedClientStateRequest;
                    toProto(message: _136.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _136.QueryUpgradedClientStateRequest): _136.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _136.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _136.QueryUpgradedClientStateResponse;
                    toJSON(message: _136.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _136.QueryUpgradedClientStateResponse;
                    fromSDK(object: _136.QueryUpgradedClientStateResponseSDKType): _136.QueryUpgradedClientStateResponse;
                    toSDK(message: _136.QueryUpgradedClientStateResponse): _136.QueryUpgradedClientStateResponseSDKType;
                    fromAmino(object: _136.QueryUpgradedClientStateResponseAmino): _136.QueryUpgradedClientStateResponse;
                    toAmino(message: _136.QueryUpgradedClientStateResponse): _136.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _136.QueryUpgradedClientStateResponseAminoMsg): _136.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _136.QueryUpgradedClientStateResponse): _136.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _136.QueryUpgradedClientStateResponseProtoMsg): _136.QueryUpgradedClientStateResponse;
                    toProto(message: _136.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _136.QueryUpgradedClientStateResponse): _136.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _136.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _136.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _136.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: {}): _136.QueryUpgradedConsensusStateRequest;
                    fromSDK(_: _136.QueryUpgradedConsensusStateRequestSDKType): _136.QueryUpgradedConsensusStateRequest;
                    toSDK(_: _136.QueryUpgradedConsensusStateRequest): _136.QueryUpgradedConsensusStateRequestSDKType;
                    fromAmino(_: _136.QueryUpgradedConsensusStateRequestAmino): _136.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _136.QueryUpgradedConsensusStateRequest): _136.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _136.QueryUpgradedConsensusStateRequestAminoMsg): _136.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _136.QueryUpgradedConsensusStateRequest): _136.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _136.QueryUpgradedConsensusStateRequestProtoMsg): _136.QueryUpgradedConsensusStateRequest;
                    toProto(message: _136.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _136.QueryUpgradedConsensusStateRequest): _136.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _136.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _136.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _136.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _136.QueryUpgradedConsensusStateResponse;
                    fromSDK(object: _136.QueryUpgradedConsensusStateResponseSDKType): _136.QueryUpgradedConsensusStateResponse;
                    toSDK(message: _136.QueryUpgradedConsensusStateResponse): _136.QueryUpgradedConsensusStateResponseSDKType;
                    fromAmino(object: _136.QueryUpgradedConsensusStateResponseAmino): _136.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _136.QueryUpgradedConsensusStateResponse): _136.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _136.QueryUpgradedConsensusStateResponseAminoMsg): _136.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _136.QueryUpgradedConsensusStateResponse): _136.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _136.QueryUpgradedConsensusStateResponseProtoMsg): _136.QueryUpgradedConsensusStateResponse;
                    toProto(message: _136.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _136.QueryUpgradedConsensusStateResponse): _136.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _135.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.GenesisState;
                    fromJSON(object: any): _135.GenesisState;
                    toJSON(message: _135.GenesisState): unknown;
                    fromPartial(object: {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: bigint;
                                    revisionHeight?: bigint;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowedClients?: string[];
                        };
                        createLocalhost?: boolean;
                        nextClientSequence?: bigint;
                    }): _135.GenesisState;
                    fromSDK(object: _135.GenesisStateSDKType): _135.GenesisState;
                    toSDK(message: _135.GenesisState): _135.GenesisStateSDKType;
                    fromAmino(object: _135.GenesisStateAmino): _135.GenesisState;
                    toAmino(message: _135.GenesisState): _135.GenesisStateAmino;
                    fromAminoMsg(object: _135.GenesisStateAminoMsg): _135.GenesisState;
                    toAminoMsg(message: _135.GenesisState): _135.GenesisStateAminoMsg;
                    fromProtoMsg(message: _135.GenesisStateProtoMsg): _135.GenesisState;
                    toProto(message: _135.GenesisState): Uint8Array;
                    toProtoMsg(message: _135.GenesisState): _135.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _135.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.GenesisMetadata;
                    fromJSON(object: any): _135.GenesisMetadata;
                    toJSON(message: _135.GenesisMetadata): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _135.GenesisMetadata;
                    fromSDK(object: _135.GenesisMetadataSDKType): _135.GenesisMetadata;
                    toSDK(message: _135.GenesisMetadata): _135.GenesisMetadataSDKType;
                    fromAmino(object: _135.GenesisMetadataAmino): _135.GenesisMetadata;
                    toAmino(message: _135.GenesisMetadata): _135.GenesisMetadataAmino;
                    fromAminoMsg(object: _135.GenesisMetadataAminoMsg): _135.GenesisMetadata;
                    toAminoMsg(message: _135.GenesisMetadata): _135.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _135.GenesisMetadataProtoMsg): _135.GenesisMetadata;
                    toProto(message: _135.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _135.GenesisMetadata): _135.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _135.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _135.IdentifiedGenesisMetadata;
                    toJSON(message: _135.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _135.IdentifiedGenesisMetadata;
                    fromSDK(object: _135.IdentifiedGenesisMetadataSDKType): _135.IdentifiedGenesisMetadata;
                    toSDK(message: _135.IdentifiedGenesisMetadata): _135.IdentifiedGenesisMetadataSDKType;
                    fromAmino(object: _135.IdentifiedGenesisMetadataAmino): _135.IdentifiedGenesisMetadata;
                    toAmino(message: _135.IdentifiedGenesisMetadata): _135.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _135.IdentifiedGenesisMetadataAminoMsg): _135.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _135.IdentifiedGenesisMetadata): _135.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _135.IdentifiedGenesisMetadataProtoMsg): _135.IdentifiedGenesisMetadata;
                    toProto(message: _135.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _135.IdentifiedGenesisMetadata): _135.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _134.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.IdentifiedClientState;
                    fromJSON(object: any): _134.IdentifiedClientState;
                    toJSON(message: _134.IdentifiedClientState): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _134.IdentifiedClientState;
                    fromSDK(object: _134.IdentifiedClientStateSDKType): _134.IdentifiedClientState;
                    toSDK(message: _134.IdentifiedClientState): _134.IdentifiedClientStateSDKType;
                    fromAmino(object: _134.IdentifiedClientStateAmino): _134.IdentifiedClientState;
                    toAmino(message: _134.IdentifiedClientState): _134.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _134.IdentifiedClientStateAminoMsg): _134.IdentifiedClientState;
                    toAminoMsg(message: _134.IdentifiedClientState): _134.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _134.IdentifiedClientStateProtoMsg): _134.IdentifiedClientState;
                    toProto(message: _134.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _134.IdentifiedClientState): _134.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _134.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.ConsensusStateWithHeight;
                    fromJSON(object: any): _134.ConsensusStateWithHeight;
                    toJSON(message: _134.ConsensusStateWithHeight): unknown;
                    fromPartial(object: {
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _134.ConsensusStateWithHeight;
                    fromSDK(object: _134.ConsensusStateWithHeightSDKType): _134.ConsensusStateWithHeight;
                    toSDK(message: _134.ConsensusStateWithHeight): _134.ConsensusStateWithHeightSDKType;
                    fromAmino(object: _134.ConsensusStateWithHeightAmino): _134.ConsensusStateWithHeight;
                    toAmino(message: _134.ConsensusStateWithHeight): _134.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _134.ConsensusStateWithHeightAminoMsg): _134.ConsensusStateWithHeight;
                    toAminoMsg(message: _134.ConsensusStateWithHeight): _134.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _134.ConsensusStateWithHeightProtoMsg): _134.ConsensusStateWithHeight;
                    toProto(message: _134.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _134.ConsensusStateWithHeight): _134.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _134.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.ClientConsensusStates;
                    fromJSON(object: any): _134.ClientConsensusStates;
                    toJSON(message: _134.ClientConsensusStates): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _134.ClientConsensusStates;
                    fromSDK(object: _134.ClientConsensusStatesSDKType): _134.ClientConsensusStates;
                    toSDK(message: _134.ClientConsensusStates): _134.ClientConsensusStatesSDKType;
                    fromAmino(object: _134.ClientConsensusStatesAmino): _134.ClientConsensusStates;
                    toAmino(message: _134.ClientConsensusStates): _134.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _134.ClientConsensusStatesAminoMsg): _134.ClientConsensusStates;
                    toAminoMsg(message: _134.ClientConsensusStates): _134.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _134.ClientConsensusStatesProtoMsg): _134.ClientConsensusStates;
                    toProto(message: _134.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _134.ClientConsensusStates): _134.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _134.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.ClientUpdateProposal;
                    fromJSON(object: any): _134.ClientUpdateProposal;
                    toJSON(message: _134.ClientUpdateProposal): unknown;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    }): _134.ClientUpdateProposal;
                    fromSDK(object: _134.ClientUpdateProposalSDKType): _134.ClientUpdateProposal;
                    toSDK(message: _134.ClientUpdateProposal): _134.ClientUpdateProposalSDKType;
                    fromAmino(object: _134.ClientUpdateProposalAmino): _134.ClientUpdateProposal;
                    toAmino(message: _134.ClientUpdateProposal): _134.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _134.ClientUpdateProposalAminoMsg): _134.ClientUpdateProposal;
                    toAminoMsg(message: _134.ClientUpdateProposal): _134.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _134.ClientUpdateProposalProtoMsg): _134.ClientUpdateProposal;
                    toProto(message: _134.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _134.ClientUpdateProposal): _134.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _134.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.UpgradeProposal;
                    fromJSON(object: any): _134.UpgradeProposal;
                    toJSON(message: _134.UpgradeProposal): unknown;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: bigint;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _134.UpgradeProposal;
                    fromSDK(object: _134.UpgradeProposalSDKType): _134.UpgradeProposal;
                    toSDK(message: _134.UpgradeProposal): _134.UpgradeProposalSDKType;
                    fromAmino(object: _134.UpgradeProposalAmino): _134.UpgradeProposal;
                    toAmino(message: _134.UpgradeProposal): _134.UpgradeProposalAmino;
                    fromAminoMsg(object: _134.UpgradeProposalAminoMsg): _134.UpgradeProposal;
                    toAminoMsg(message: _134.UpgradeProposal): _134.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _134.UpgradeProposalProtoMsg): _134.UpgradeProposal;
                    toProto(message: _134.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _134.UpgradeProposal): _134.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _134.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.Height;
                    fromJSON(object: any): _134.Height;
                    toJSON(message: _134.Height): unknown;
                    fromPartial(object: {
                        revisionNumber?: bigint;
                        revisionHeight?: bigint;
                    }): _134.Height;
                    fromSDK(object: _134.HeightSDKType): _134.Height;
                    toSDK(message: _134.Height): _134.HeightSDKType;
                    fromAmino(object: _134.HeightAmino): _134.Height;
                    toAmino(message: _134.Height): _134.HeightAmino;
                    fromAminoMsg(object: _134.HeightAminoMsg): _134.Height;
                    toAminoMsg(message: _134.Height): _134.HeightAminoMsg;
                    fromProtoMsg(message: _134.HeightProtoMsg): _134.Height;
                    toProto(message: _134.Height): Uint8Array;
                    toProtoMsg(message: _134.Height): _134.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _134.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.Params;
                    fromJSON(object: any): _134.Params;
                    toJSON(message: _134.Params): unknown;
                    fromPartial(object: {
                        allowedClients?: string[];
                    }): _134.Params;
                    fromSDK(object: _134.ParamsSDKType): _134.Params;
                    toSDK(message: _134.Params): _134.ParamsSDKType;
                    fromAmino(object: _134.ParamsAmino): _134.Params;
                    toAmino(message: _134.Params): _134.ParamsAmino;
                    fromAminoMsg(object: _134.ParamsAminoMsg): _134.Params;
                    toAminoMsg(message: _134.Params): _134.ParamsAminoMsg;
                    fromProtoMsg(message: _134.ParamsProtoMsg): _134.Params;
                    toProto(message: _134.Params): Uint8Array;
                    toProtoMsg(message: _134.Params): _134.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _138.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MerkleRoot;
                    fromJSON(object: any): _138.MerkleRoot;
                    toJSON(message: _138.MerkleRoot): unknown;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _138.MerkleRoot;
                    fromSDK(object: _138.MerkleRootSDKType): _138.MerkleRoot;
                    toSDK(message: _138.MerkleRoot): _138.MerkleRootSDKType;
                    fromAmino(object: _138.MerkleRootAmino): _138.MerkleRoot;
                    toAmino(message: _138.MerkleRoot): _138.MerkleRootAmino;
                    fromAminoMsg(object: _138.MerkleRootAminoMsg): _138.MerkleRoot;
                    toAminoMsg(message: _138.MerkleRoot): _138.MerkleRootAminoMsg;
                    fromProtoMsg(message: _138.MerkleRootProtoMsg): _138.MerkleRoot;
                    toProto(message: _138.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _138.MerkleRoot): _138.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _138.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MerklePrefix;
                    fromJSON(object: any): _138.MerklePrefix;
                    toJSON(message: _138.MerklePrefix): unknown;
                    fromPartial(object: {
                        keyPrefix?: Uint8Array;
                    }): _138.MerklePrefix;
                    fromSDK(object: _138.MerklePrefixSDKType): _138.MerklePrefix;
                    toSDK(message: _138.MerklePrefix): _138.MerklePrefixSDKType;
                    fromAmino(object: _138.MerklePrefixAmino): _138.MerklePrefix;
                    toAmino(message: _138.MerklePrefix): _138.MerklePrefixAmino;
                    fromAminoMsg(object: _138.MerklePrefixAminoMsg): _138.MerklePrefix;
                    toAminoMsg(message: _138.MerklePrefix): _138.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _138.MerklePrefixProtoMsg): _138.MerklePrefix;
                    toProto(message: _138.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _138.MerklePrefix): _138.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _138.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MerklePath;
                    fromJSON(object: any): _138.MerklePath;
                    toJSON(message: _138.MerklePath): unknown;
                    fromPartial(object: {
                        keyPath?: string[];
                    }): _138.MerklePath;
                    fromSDK(object: _138.MerklePathSDKType): _138.MerklePath;
                    toSDK(message: _138.MerklePath): _138.MerklePathSDKType;
                    fromAmino(object: _138.MerklePathAmino): _138.MerklePath;
                    toAmino(message: _138.MerklePath): _138.MerklePathAmino;
                    fromAminoMsg(object: _138.MerklePathAminoMsg): _138.MerklePath;
                    toAminoMsg(message: _138.MerklePath): _138.MerklePathAminoMsg;
                    fromProtoMsg(message: _138.MerklePathProtoMsg): _138.MerklePath;
                    toProto(message: _138.MerklePath): Uint8Array;
                    toProtoMsg(message: _138.MerklePath): _138.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _138.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MerkleProof;
                    fromJSON(object: any): _138.MerkleProof;
                    toJSON(message: _138.MerkleProof): unknown;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                    prehashKey?: import("../cosmos/ics23/v1/proofs").HashOp;
                                    prehashValue?: import("../cosmos/ics23/v1/proofs").HashOp;
                                    length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                        prehashKey?: import("../cosmos/ics23/v1/proofs").HashOp;
                                        prehashValue?: import("../cosmos/ics23/v1/proofs").HashOp;
                                        length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                        prehashKey?: import("../cosmos/ics23/v1/proofs").HashOp;
                                        prehashValue?: import("../cosmos/ics23/v1/proofs").HashOp;
                                        length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                            prehashKey?: import("../cosmos/ics23/v1/proofs").HashOp;
                                            prehashValue?: import("../cosmos/ics23/v1/proofs").HashOp;
                                            length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prehashKey?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prehashValue?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prehashKey?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prehashValue?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                            prehashKey?: import("../cosmos/ics23/v1/proofs").HashOp;
                                            prehashValue?: import("../cosmos/ics23/v1/proofs").HashOp;
                                            length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prehashKey?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prehashValue?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prehashKey?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                prehashValue?: import("../cosmos/ics23/v1/proofs").HashOp;
                                                length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _138.MerkleProof;
                    fromSDK(object: _138.MerkleProofSDKType): _138.MerkleProof;
                    toSDK(message: _138.MerkleProof): _138.MerkleProofSDKType;
                    fromAmino(object: _138.MerkleProofAmino): _138.MerkleProof;
                    toAmino(message: _138.MerkleProof): _138.MerkleProofAmino;
                    fromAminoMsg(object: _138.MerkleProofAminoMsg): _138.MerkleProof;
                    toAminoMsg(message: _138.MerkleProof): _138.MerkleProofAminoMsg;
                    fromProtoMsg(message: _138.MerkleProofProtoMsg): _138.MerkleProof;
                    toProto(message: _138.MerkleProof): Uint8Array;
                    toProtoMsg(message: _138.MerkleProof): _138.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _253.MsgClientImpl;
                QueryClientImpl: typeof _246.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _141.QueryConnectionRequest): Promise<_141.QueryConnectionResponse>;
                    connections(request?: _141.QueryConnectionsRequest): Promise<_141.QueryConnectionsResponse>;
                    clientConnections(request: _141.QueryClientConnectionsRequest): Promise<_141.QueryClientConnectionsResponse>;
                    connectionClientState(request: _141.QueryConnectionClientStateRequest): Promise<_141.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _141.QueryConnectionConsensusStateRequest): Promise<_141.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _141.QueryConnectionParamsRequest): Promise<_141.QueryConnectionParamsResponse>;
                };
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useConnection: <TData = _141.QueryConnectionResponse>({ request, options }: _246.UseConnectionQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                    useConnections: <TData_1 = _141.QueryConnectionsResponse>({ request, options }: _246.UseConnectionsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                    useClientConnections: <TData_2 = _141.QueryClientConnectionsResponse>({ request, options }: _246.UseClientConnectionsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                    useConnectionClientState: <TData_3 = _141.QueryConnectionClientStateResponse>({ request, options }: _246.UseConnectionClientStateQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                    useConnectionConsensusState: <TData_4 = _141.QueryConnectionConsensusStateResponse>({ request, options }: _246.UseConnectionConsensusStateQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                    useConnectionParams: <TData_5 = _141.QueryConnectionParamsResponse>({ request, options }: _246.UseConnectionParamsQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _142.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _142.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _142.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _142.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateConnectionParams(value: _142.MsgUpdateParams): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _142.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _142.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _142.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _142.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _142.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _142.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _142.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _142.MsgConnectionOpenConfirm;
                        };
                        updateConnectionParams(value: _142.MsgUpdateParams): {
                            typeUrl: string;
                            value: _142.MsgUpdateParams;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _142.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _142.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _142.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _142.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateConnectionParams(value: _142.MsgUpdateParams): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _142.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _142.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _142.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _142.MsgConnectionOpenConfirm;
                        };
                        updateConnectionParams(value: any): {
                            typeUrl: string;
                            value: _142.MsgUpdateParams;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _142.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _142.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _142.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _142.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _142.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _142.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _142.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _142.MsgConnectionOpenConfirm;
                        };
                        updateConnectionParams(value: _142.MsgUpdateParams): {
                            typeUrl: string;
                            value: _142.MsgUpdateParams;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _142.MsgConnectionOpenInit) => _142.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _142.MsgConnectionOpenInitAmino) => _142.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _142.MsgConnectionOpenTry) => _142.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _142.MsgConnectionOpenTryAmino) => _142.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _142.MsgConnectionOpenAck) => _142.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _142.MsgConnectionOpenAckAmino) => _142.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _142.MsgConnectionOpenConfirm) => _142.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _142.MsgConnectionOpenConfirmAmino) => _142.MsgConnectionOpenConfirm;
                    };
                    "/ibc.core.connection.v1.MsgUpdateParams": {
                        aminoType: string;
                        toAmino: (message: _142.MsgUpdateParams) => _142.MsgUpdateParamsAmino;
                        fromAmino: (object: _142.MsgUpdateParamsAmino) => _142.MsgUpdateParams;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _142.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.MsgConnectionOpenInit;
                    fromJSON(object: any): _142.MsgConnectionOpenInit;
                    toJSON(message: _142.MsgConnectionOpenInit): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delayPeriod?: bigint;
                        signer?: string;
                    }): _142.MsgConnectionOpenInit;
                    fromSDK(object: _142.MsgConnectionOpenInitSDKType): _142.MsgConnectionOpenInit;
                    toSDK(message: _142.MsgConnectionOpenInit): _142.MsgConnectionOpenInitSDKType;
                    fromAmino(object: _142.MsgConnectionOpenInitAmino): _142.MsgConnectionOpenInit;
                    toAmino(message: _142.MsgConnectionOpenInit): _142.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _142.MsgConnectionOpenInitAminoMsg): _142.MsgConnectionOpenInit;
                    toAminoMsg(message: _142.MsgConnectionOpenInit): _142.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _142.MsgConnectionOpenInitProtoMsg): _142.MsgConnectionOpenInit;
                    toProto(message: _142.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _142.MsgConnectionOpenInit): _142.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _142.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _142.MsgConnectionOpenInitResponse;
                    toJSON(_: _142.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: {}): _142.MsgConnectionOpenInitResponse;
                    fromSDK(_: _142.MsgConnectionOpenInitResponseSDKType): _142.MsgConnectionOpenInitResponse;
                    toSDK(_: _142.MsgConnectionOpenInitResponse): _142.MsgConnectionOpenInitResponseSDKType;
                    fromAmino(_: _142.MsgConnectionOpenInitResponseAmino): _142.MsgConnectionOpenInitResponse;
                    toAmino(_: _142.MsgConnectionOpenInitResponse): _142.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _142.MsgConnectionOpenInitResponseAminoMsg): _142.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _142.MsgConnectionOpenInitResponse): _142.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _142.MsgConnectionOpenInitResponseProtoMsg): _142.MsgConnectionOpenInitResponse;
                    toProto(message: _142.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _142.MsgConnectionOpenInitResponse): _142.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _142.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.MsgConnectionOpenTry;
                    fromJSON(object: any): _142.MsgConnectionOpenTry;
                    toJSON(message: _142.MsgConnectionOpenTry): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: bigint;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                        hostConsensusStateProof?: Uint8Array;
                    }): _142.MsgConnectionOpenTry;
                    fromSDK(object: _142.MsgConnectionOpenTrySDKType): _142.MsgConnectionOpenTry;
                    toSDK(message: _142.MsgConnectionOpenTry): _142.MsgConnectionOpenTrySDKType;
                    fromAmino(object: _142.MsgConnectionOpenTryAmino): _142.MsgConnectionOpenTry;
                    toAmino(message: _142.MsgConnectionOpenTry): _142.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _142.MsgConnectionOpenTryAminoMsg): _142.MsgConnectionOpenTry;
                    toAminoMsg(message: _142.MsgConnectionOpenTry): _142.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _142.MsgConnectionOpenTryProtoMsg): _142.MsgConnectionOpenTry;
                    toProto(message: _142.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _142.MsgConnectionOpenTry): _142.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _142.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _142.MsgConnectionOpenTryResponse;
                    toJSON(_: _142.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: {}): _142.MsgConnectionOpenTryResponse;
                    fromSDK(_: _142.MsgConnectionOpenTryResponseSDKType): _142.MsgConnectionOpenTryResponse;
                    toSDK(_: _142.MsgConnectionOpenTryResponse): _142.MsgConnectionOpenTryResponseSDKType;
                    fromAmino(_: _142.MsgConnectionOpenTryResponseAmino): _142.MsgConnectionOpenTryResponse;
                    toAmino(_: _142.MsgConnectionOpenTryResponse): _142.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _142.MsgConnectionOpenTryResponseAminoMsg): _142.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _142.MsgConnectionOpenTryResponse): _142.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _142.MsgConnectionOpenTryResponseProtoMsg): _142.MsgConnectionOpenTryResponse;
                    toProto(message: _142.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _142.MsgConnectionOpenTryResponse): _142.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _142.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.MsgConnectionOpenAck;
                    fromJSON(object: any): _142.MsgConnectionOpenAck;
                    toJSON(message: _142.MsgConnectionOpenAck): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                        hostConsensusStateProof?: Uint8Array;
                    }): _142.MsgConnectionOpenAck;
                    fromSDK(object: _142.MsgConnectionOpenAckSDKType): _142.MsgConnectionOpenAck;
                    toSDK(message: _142.MsgConnectionOpenAck): _142.MsgConnectionOpenAckSDKType;
                    fromAmino(object: _142.MsgConnectionOpenAckAmino): _142.MsgConnectionOpenAck;
                    toAmino(message: _142.MsgConnectionOpenAck): _142.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _142.MsgConnectionOpenAckAminoMsg): _142.MsgConnectionOpenAck;
                    toAminoMsg(message: _142.MsgConnectionOpenAck): _142.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _142.MsgConnectionOpenAckProtoMsg): _142.MsgConnectionOpenAck;
                    toProto(message: _142.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _142.MsgConnectionOpenAck): _142.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _142.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _142.MsgConnectionOpenAckResponse;
                    toJSON(_: _142.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: {}): _142.MsgConnectionOpenAckResponse;
                    fromSDK(_: _142.MsgConnectionOpenAckResponseSDKType): _142.MsgConnectionOpenAckResponse;
                    toSDK(_: _142.MsgConnectionOpenAckResponse): _142.MsgConnectionOpenAckResponseSDKType;
                    fromAmino(_: _142.MsgConnectionOpenAckResponseAmino): _142.MsgConnectionOpenAckResponse;
                    toAmino(_: _142.MsgConnectionOpenAckResponse): _142.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _142.MsgConnectionOpenAckResponseAminoMsg): _142.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _142.MsgConnectionOpenAckResponse): _142.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _142.MsgConnectionOpenAckResponseProtoMsg): _142.MsgConnectionOpenAckResponse;
                    toProto(message: _142.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _142.MsgConnectionOpenAckResponse): _142.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _142.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _142.MsgConnectionOpenConfirm;
                    toJSON(message: _142.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _142.MsgConnectionOpenConfirm;
                    fromSDK(object: _142.MsgConnectionOpenConfirmSDKType): _142.MsgConnectionOpenConfirm;
                    toSDK(message: _142.MsgConnectionOpenConfirm): _142.MsgConnectionOpenConfirmSDKType;
                    fromAmino(object: _142.MsgConnectionOpenConfirmAmino): _142.MsgConnectionOpenConfirm;
                    toAmino(message: _142.MsgConnectionOpenConfirm): _142.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _142.MsgConnectionOpenConfirmAminoMsg): _142.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _142.MsgConnectionOpenConfirm): _142.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _142.MsgConnectionOpenConfirmProtoMsg): _142.MsgConnectionOpenConfirm;
                    toProto(message: _142.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _142.MsgConnectionOpenConfirm): _142.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _142.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _142.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _142.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _142.MsgConnectionOpenConfirmResponse;
                    fromSDK(_: _142.MsgConnectionOpenConfirmResponseSDKType): _142.MsgConnectionOpenConfirmResponse;
                    toSDK(_: _142.MsgConnectionOpenConfirmResponse): _142.MsgConnectionOpenConfirmResponseSDKType;
                    fromAmino(_: _142.MsgConnectionOpenConfirmResponseAmino): _142.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _142.MsgConnectionOpenConfirmResponse): _142.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _142.MsgConnectionOpenConfirmResponseAminoMsg): _142.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _142.MsgConnectionOpenConfirmResponse): _142.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _142.MsgConnectionOpenConfirmResponseProtoMsg): _142.MsgConnectionOpenConfirmResponse;
                    toProto(message: _142.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _142.MsgConnectionOpenConfirmResponse): _142.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                MsgUpdateParams: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _142.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.MsgUpdateParams;
                    fromJSON(object: any): _142.MsgUpdateParams;
                    toJSON(message: _142.MsgUpdateParams): unknown;
                    fromPartial(object: {
                        authority?: string;
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _142.MsgUpdateParams;
                    fromSDK(object: _142.MsgUpdateParamsSDKType): _142.MsgUpdateParams;
                    toSDK(message: _142.MsgUpdateParams): _142.MsgUpdateParamsSDKType;
                    fromAmino(object: _142.MsgUpdateParamsAmino): _142.MsgUpdateParams;
                    toAmino(message: _142.MsgUpdateParams): _142.MsgUpdateParamsAmino;
                    fromAminoMsg(object: _142.MsgUpdateParamsAminoMsg): _142.MsgUpdateParams;
                    toAminoMsg(message: _142.MsgUpdateParams): _142.MsgUpdateParamsAminoMsg;
                    fromProtoMsg(message: _142.MsgUpdateParamsProtoMsg): _142.MsgUpdateParams;
                    toProto(message: _142.MsgUpdateParams): Uint8Array;
                    toProtoMsg(message: _142.MsgUpdateParams): _142.MsgUpdateParamsProtoMsg;
                };
                MsgUpdateParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _142.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.MsgUpdateParamsResponse;
                    fromJSON(_: any): _142.MsgUpdateParamsResponse;
                    toJSON(_: _142.MsgUpdateParamsResponse): unknown;
                    fromPartial(_: {}): _142.MsgUpdateParamsResponse;
                    fromSDK(_: _142.MsgUpdateParamsResponseSDKType): _142.MsgUpdateParamsResponse;
                    toSDK(_: _142.MsgUpdateParamsResponse): _142.MsgUpdateParamsResponseSDKType;
                    fromAmino(_: _142.MsgUpdateParamsResponseAmino): _142.MsgUpdateParamsResponse;
                    toAmino(_: _142.MsgUpdateParamsResponse): _142.MsgUpdateParamsResponseAmino;
                    fromAminoMsg(object: _142.MsgUpdateParamsResponseAminoMsg): _142.MsgUpdateParamsResponse;
                    toAminoMsg(message: _142.MsgUpdateParamsResponse): _142.MsgUpdateParamsResponseAminoMsg;
                    fromProtoMsg(message: _142.MsgUpdateParamsResponseProtoMsg): _142.MsgUpdateParamsResponse;
                    toProto(message: _142.MsgUpdateParamsResponse): Uint8Array;
                    toProtoMsg(message: _142.MsgUpdateParamsResponse): _142.MsgUpdateParamsResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _141.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryConnectionRequest;
                    fromJSON(object: any): _141.QueryConnectionRequest;
                    toJSON(message: _141.QueryConnectionRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _141.QueryConnectionRequest;
                    fromSDK(object: _141.QueryConnectionRequestSDKType): _141.QueryConnectionRequest;
                    toSDK(message: _141.QueryConnectionRequest): _141.QueryConnectionRequestSDKType;
                    fromAmino(object: _141.QueryConnectionRequestAmino): _141.QueryConnectionRequest;
                    toAmino(message: _141.QueryConnectionRequest): _141.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _141.QueryConnectionRequestAminoMsg): _141.QueryConnectionRequest;
                    toAminoMsg(message: _141.QueryConnectionRequest): _141.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _141.QueryConnectionRequestProtoMsg): _141.QueryConnectionRequest;
                    toProto(message: _141.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _141.QueryConnectionRequest): _141.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _141.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryConnectionResponse;
                    fromJSON(object: any): _141.QueryConnectionResponse;
                    toJSON(message: _141.QueryConnectionResponse): unknown;
                    fromPartial(object: {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _139.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: bigint;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _141.QueryConnectionResponse;
                    fromSDK(object: _141.QueryConnectionResponseSDKType): _141.QueryConnectionResponse;
                    toSDK(message: _141.QueryConnectionResponse): _141.QueryConnectionResponseSDKType;
                    fromAmino(object: _141.QueryConnectionResponseAmino): _141.QueryConnectionResponse;
                    toAmino(message: _141.QueryConnectionResponse): _141.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _141.QueryConnectionResponseAminoMsg): _141.QueryConnectionResponse;
                    toAminoMsg(message: _141.QueryConnectionResponse): _141.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _141.QueryConnectionResponseProtoMsg): _141.QueryConnectionResponse;
                    toProto(message: _141.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _141.QueryConnectionResponse): _141.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _141.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryConnectionsRequest;
                    fromJSON(object: any): _141.QueryConnectionsRequest;
                    toJSON(message: _141.QueryConnectionsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _141.QueryConnectionsRequest;
                    fromSDK(object: _141.QueryConnectionsRequestSDKType): _141.QueryConnectionsRequest;
                    toSDK(message: _141.QueryConnectionsRequest): _141.QueryConnectionsRequestSDKType;
                    fromAmino(object: _141.QueryConnectionsRequestAmino): _141.QueryConnectionsRequest;
                    toAmino(message: _141.QueryConnectionsRequest): _141.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _141.QueryConnectionsRequestAminoMsg): _141.QueryConnectionsRequest;
                    toAminoMsg(message: _141.QueryConnectionsRequest): _141.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _141.QueryConnectionsRequestProtoMsg): _141.QueryConnectionsRequest;
                    toProto(message: _141.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _141.QueryConnectionsRequest): _141.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _141.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryConnectionsResponse;
                    fromJSON(object: any): _141.QueryConnectionsResponse;
                    toJSON(message: _141.QueryConnectionsResponse): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _139.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: bigint;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _141.QueryConnectionsResponse;
                    fromSDK(object: _141.QueryConnectionsResponseSDKType): _141.QueryConnectionsResponse;
                    toSDK(message: _141.QueryConnectionsResponse): _141.QueryConnectionsResponseSDKType;
                    fromAmino(object: _141.QueryConnectionsResponseAmino): _141.QueryConnectionsResponse;
                    toAmino(message: _141.QueryConnectionsResponse): _141.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _141.QueryConnectionsResponseAminoMsg): _141.QueryConnectionsResponse;
                    toAminoMsg(message: _141.QueryConnectionsResponse): _141.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _141.QueryConnectionsResponseProtoMsg): _141.QueryConnectionsResponse;
                    toProto(message: _141.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _141.QueryConnectionsResponse): _141.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _141.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryClientConnectionsRequest;
                    fromJSON(object: any): _141.QueryClientConnectionsRequest;
                    toJSON(message: _141.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _141.QueryClientConnectionsRequest;
                    fromSDK(object: _141.QueryClientConnectionsRequestSDKType): _141.QueryClientConnectionsRequest;
                    toSDK(message: _141.QueryClientConnectionsRequest): _141.QueryClientConnectionsRequestSDKType;
                    fromAmino(object: _141.QueryClientConnectionsRequestAmino): _141.QueryClientConnectionsRequest;
                    toAmino(message: _141.QueryClientConnectionsRequest): _141.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _141.QueryClientConnectionsRequestAminoMsg): _141.QueryClientConnectionsRequest;
                    toAminoMsg(message: _141.QueryClientConnectionsRequest): _141.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _141.QueryClientConnectionsRequestProtoMsg): _141.QueryClientConnectionsRequest;
                    toProto(message: _141.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _141.QueryClientConnectionsRequest): _141.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _141.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryClientConnectionsResponse;
                    fromJSON(object: any): _141.QueryClientConnectionsResponse;
                    toJSON(message: _141.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _141.QueryClientConnectionsResponse;
                    fromSDK(object: _141.QueryClientConnectionsResponseSDKType): _141.QueryClientConnectionsResponse;
                    toSDK(message: _141.QueryClientConnectionsResponse): _141.QueryClientConnectionsResponseSDKType;
                    fromAmino(object: _141.QueryClientConnectionsResponseAmino): _141.QueryClientConnectionsResponse;
                    toAmino(message: _141.QueryClientConnectionsResponse): _141.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _141.QueryClientConnectionsResponseAminoMsg): _141.QueryClientConnectionsResponse;
                    toAminoMsg(message: _141.QueryClientConnectionsResponse): _141.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _141.QueryClientConnectionsResponseProtoMsg): _141.QueryClientConnectionsResponse;
                    toProto(message: _141.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _141.QueryClientConnectionsResponse): _141.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _141.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _141.QueryConnectionClientStateRequest;
                    toJSON(message: _141.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _141.QueryConnectionClientStateRequest;
                    fromSDK(object: _141.QueryConnectionClientStateRequestSDKType): _141.QueryConnectionClientStateRequest;
                    toSDK(message: _141.QueryConnectionClientStateRequest): _141.QueryConnectionClientStateRequestSDKType;
                    fromAmino(object: _141.QueryConnectionClientStateRequestAmino): _141.QueryConnectionClientStateRequest;
                    toAmino(message: _141.QueryConnectionClientStateRequest): _141.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _141.QueryConnectionClientStateRequestAminoMsg): _141.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _141.QueryConnectionClientStateRequest): _141.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _141.QueryConnectionClientStateRequestProtoMsg): _141.QueryConnectionClientStateRequest;
                    toProto(message: _141.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _141.QueryConnectionClientStateRequest): _141.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _141.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _141.QueryConnectionClientStateResponse;
                    toJSON(message: _141.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _141.QueryConnectionClientStateResponse;
                    fromSDK(object: _141.QueryConnectionClientStateResponseSDKType): _141.QueryConnectionClientStateResponse;
                    toSDK(message: _141.QueryConnectionClientStateResponse): _141.QueryConnectionClientStateResponseSDKType;
                    fromAmino(object: _141.QueryConnectionClientStateResponseAmino): _141.QueryConnectionClientStateResponse;
                    toAmino(message: _141.QueryConnectionClientStateResponse): _141.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _141.QueryConnectionClientStateResponseAminoMsg): _141.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _141.QueryConnectionClientStateResponse): _141.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _141.QueryConnectionClientStateResponseProtoMsg): _141.QueryConnectionClientStateResponse;
                    toProto(message: _141.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _141.QueryConnectionClientStateResponse): _141.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _141.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _141.QueryConnectionConsensusStateRequest;
                    toJSON(message: _141.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        revisionNumber?: bigint;
                        revisionHeight?: bigint;
                    }): _141.QueryConnectionConsensusStateRequest;
                    fromSDK(object: _141.QueryConnectionConsensusStateRequestSDKType): _141.QueryConnectionConsensusStateRequest;
                    toSDK(message: _141.QueryConnectionConsensusStateRequest): _141.QueryConnectionConsensusStateRequestSDKType;
                    fromAmino(object: _141.QueryConnectionConsensusStateRequestAmino): _141.QueryConnectionConsensusStateRequest;
                    toAmino(message: _141.QueryConnectionConsensusStateRequest): _141.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _141.QueryConnectionConsensusStateRequestAminoMsg): _141.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _141.QueryConnectionConsensusStateRequest): _141.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _141.QueryConnectionConsensusStateRequestProtoMsg): _141.QueryConnectionConsensusStateRequest;
                    toProto(message: _141.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _141.QueryConnectionConsensusStateRequest): _141.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _141.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _141.QueryConnectionConsensusStateResponse;
                    toJSON(message: _141.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _141.QueryConnectionConsensusStateResponse;
                    fromSDK(object: _141.QueryConnectionConsensusStateResponseSDKType): _141.QueryConnectionConsensusStateResponse;
                    toSDK(message: _141.QueryConnectionConsensusStateResponse): _141.QueryConnectionConsensusStateResponseSDKType;
                    fromAmino(object: _141.QueryConnectionConsensusStateResponseAmino): _141.QueryConnectionConsensusStateResponse;
                    toAmino(message: _141.QueryConnectionConsensusStateResponse): _141.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _141.QueryConnectionConsensusStateResponseAminoMsg): _141.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _141.QueryConnectionConsensusStateResponse): _141.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _141.QueryConnectionConsensusStateResponseProtoMsg): _141.QueryConnectionConsensusStateResponse;
                    toProto(message: _141.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _141.QueryConnectionConsensusStateResponse): _141.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    encode(_: _141.QueryConnectionParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryConnectionParamsRequest;
                    fromJSON(_: any): _141.QueryConnectionParamsRequest;
                    toJSON(_: _141.QueryConnectionParamsRequest): unknown;
                    fromPartial(_: {}): _141.QueryConnectionParamsRequest;
                    fromSDK(_: _141.QueryConnectionParamsRequestSDKType): _141.QueryConnectionParamsRequest;
                    toSDK(_: _141.QueryConnectionParamsRequest): _141.QueryConnectionParamsRequestSDKType;
                    fromAmino(_: _141.QueryConnectionParamsRequestAmino): _141.QueryConnectionParamsRequest;
                    toAmino(_: _141.QueryConnectionParamsRequest): _141.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _141.QueryConnectionParamsRequestAminoMsg): _141.QueryConnectionParamsRequest;
                    toAminoMsg(message: _141.QueryConnectionParamsRequest): _141.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _141.QueryConnectionParamsRequestProtoMsg): _141.QueryConnectionParamsRequest;
                    toProto(message: _141.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _141.QueryConnectionParamsRequest): _141.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _141.QueryConnectionParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QueryConnectionParamsResponse;
                    fromJSON(object: any): _141.QueryConnectionParamsResponse;
                    toJSON(message: _141.QueryConnectionParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _141.QueryConnectionParamsResponse;
                    fromSDK(object: _141.QueryConnectionParamsResponseSDKType): _141.QueryConnectionParamsResponse;
                    toSDK(message: _141.QueryConnectionParamsResponse): _141.QueryConnectionParamsResponseSDKType;
                    fromAmino(object: _141.QueryConnectionParamsResponseAmino): _141.QueryConnectionParamsResponse;
                    toAmino(message: _141.QueryConnectionParamsResponse): _141.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _141.QueryConnectionParamsResponseAminoMsg): _141.QueryConnectionParamsResponse;
                    toAminoMsg(message: _141.QueryConnectionParamsResponse): _141.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _141.QueryConnectionParamsResponseProtoMsg): _141.QueryConnectionParamsResponse;
                    toProto(message: _141.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _141.QueryConnectionParamsResponse): _141.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _140.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.GenesisState;
                    fromJSON(object: any): _140.GenesisState;
                    toJSON(message: _140.GenesisState): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _139.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: bigint;
                        }[];
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[];
                        nextConnectionSequence?: bigint;
                        params?: {
                            maxExpectedTimePerBlock?: bigint;
                        };
                    }): _140.GenesisState;
                    fromSDK(object: _140.GenesisStateSDKType): _140.GenesisState;
                    toSDK(message: _140.GenesisState): _140.GenesisStateSDKType;
                    fromAmino(object: _140.GenesisStateAmino): _140.GenesisState;
                    toAmino(message: _140.GenesisState): _140.GenesisStateAmino;
                    fromAminoMsg(object: _140.GenesisStateAminoMsg): _140.GenesisState;
                    toAminoMsg(message: _140.GenesisState): _140.GenesisStateAminoMsg;
                    fromProtoMsg(message: _140.GenesisStateProtoMsg): _140.GenesisState;
                    toProto(message: _140.GenesisState): Uint8Array;
                    toProtoMsg(message: _140.GenesisState): _140.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _139.State;
                stateToJSON(object: _139.State): string;
                State: typeof _139.State;
                StateSDKType: typeof _139.State;
                StateAmino: typeof _139.State;
                ConnectionEnd: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _139.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.ConnectionEnd;
                    fromJSON(object: any): _139.ConnectionEnd;
                    toJSON(message: _139.ConnectionEnd): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _139.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: bigint;
                    }): _139.ConnectionEnd;
                    fromSDK(object: _139.ConnectionEndSDKType): _139.ConnectionEnd;
                    toSDK(message: _139.ConnectionEnd): _139.ConnectionEndSDKType;
                    fromAmino(object: _139.ConnectionEndAmino): _139.ConnectionEnd;
                    toAmino(message: _139.ConnectionEnd): _139.ConnectionEndAmino;
                    fromAminoMsg(object: _139.ConnectionEndAminoMsg): _139.ConnectionEnd;
                    toAminoMsg(message: _139.ConnectionEnd): _139.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _139.ConnectionEndProtoMsg): _139.ConnectionEnd;
                    toProto(message: _139.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _139.ConnectionEnd): _139.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _139.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.IdentifiedConnection;
                    fromJSON(object: any): _139.IdentifiedConnection;
                    toJSON(message: _139.IdentifiedConnection): unknown;
                    fromPartial(object: {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _139.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: bigint;
                    }): _139.IdentifiedConnection;
                    fromSDK(object: _139.IdentifiedConnectionSDKType): _139.IdentifiedConnection;
                    toSDK(message: _139.IdentifiedConnection): _139.IdentifiedConnectionSDKType;
                    fromAmino(object: _139.IdentifiedConnectionAmino): _139.IdentifiedConnection;
                    toAmino(message: _139.IdentifiedConnection): _139.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _139.IdentifiedConnectionAminoMsg): _139.IdentifiedConnection;
                    toAminoMsg(message: _139.IdentifiedConnection): _139.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _139.IdentifiedConnectionProtoMsg): _139.IdentifiedConnection;
                    toProto(message: _139.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _139.IdentifiedConnection): _139.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _139.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.Counterparty;
                    fromJSON(object: any): _139.Counterparty;
                    toJSON(message: _139.Counterparty): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    }): _139.Counterparty;
                    fromSDK(object: _139.CounterpartySDKType): _139.Counterparty;
                    toSDK(message: _139.Counterparty): _139.CounterpartySDKType;
                    fromAmino(object: _139.CounterpartyAmino): _139.Counterparty;
                    toAmino(message: _139.Counterparty): _139.CounterpartyAmino;
                    fromAminoMsg(object: _139.CounterpartyAminoMsg): _139.Counterparty;
                    toAminoMsg(message: _139.Counterparty): _139.CounterpartyAminoMsg;
                    fromProtoMsg(message: _139.CounterpartyProtoMsg): _139.Counterparty;
                    toProto(message: _139.Counterparty): Uint8Array;
                    toProtoMsg(message: _139.Counterparty): _139.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _139.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.ClientPaths;
                    fromJSON(object: any): _139.ClientPaths;
                    toJSON(message: _139.ClientPaths): unknown;
                    fromPartial(object: {
                        paths?: string[];
                    }): _139.ClientPaths;
                    fromSDK(object: _139.ClientPathsSDKType): _139.ClientPaths;
                    toSDK(message: _139.ClientPaths): _139.ClientPathsSDKType;
                    fromAmino(object: _139.ClientPathsAmino): _139.ClientPaths;
                    toAmino(message: _139.ClientPaths): _139.ClientPathsAmino;
                    fromAminoMsg(object: _139.ClientPathsAminoMsg): _139.ClientPaths;
                    toAminoMsg(message: _139.ClientPaths): _139.ClientPathsAminoMsg;
                    fromProtoMsg(message: _139.ClientPathsProtoMsg): _139.ClientPaths;
                    toProto(message: _139.ClientPaths): Uint8Array;
                    toProtoMsg(message: _139.ClientPaths): _139.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _139.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.ConnectionPaths;
                    fromJSON(object: any): _139.ConnectionPaths;
                    toJSON(message: _139.ConnectionPaths): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        paths?: string[];
                    }): _139.ConnectionPaths;
                    fromSDK(object: _139.ConnectionPathsSDKType): _139.ConnectionPaths;
                    toSDK(message: _139.ConnectionPaths): _139.ConnectionPathsSDKType;
                    fromAmino(object: _139.ConnectionPathsAmino): _139.ConnectionPaths;
                    toAmino(message: _139.ConnectionPaths): _139.ConnectionPathsAmino;
                    fromAminoMsg(object: _139.ConnectionPathsAminoMsg): _139.ConnectionPaths;
                    toAminoMsg(message: _139.ConnectionPaths): _139.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _139.ConnectionPathsProtoMsg): _139.ConnectionPaths;
                    toProto(message: _139.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _139.ConnectionPaths): _139.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _139.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.Version;
                    fromJSON(object: any): _139.Version;
                    toJSON(message: _139.Version): unknown;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _139.Version;
                    fromSDK(object: _139.VersionSDKType): _139.Version;
                    toSDK(message: _139.Version): _139.VersionSDKType;
                    fromAmino(object: _139.VersionAmino): _139.Version;
                    toAmino(message: _139.Version): _139.VersionAmino;
                    fromAminoMsg(object: _139.VersionAminoMsg): _139.Version;
                    toAminoMsg(message: _139.Version): _139.VersionAminoMsg;
                    fromProtoMsg(message: _139.VersionProtoMsg): _139.Version;
                    toProto(message: _139.Version): Uint8Array;
                    toProtoMsg(message: _139.Version): _139.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _139.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.Params;
                    fromJSON(object: any): _139.Params;
                    toJSON(message: _139.Params): unknown;
                    fromPartial(object: {
                        maxExpectedTimePerBlock?: bigint;
                    }): _139.Params;
                    fromSDK(object: _139.ParamsSDKType): _139.Params;
                    toSDK(message: _139.Params): _139.ParamsSDKType;
                    fromAmino(object: _139.ParamsAmino): _139.Params;
                    toAmino(message: _139.Params): _139.ParamsAmino;
                    fromAminoMsg(object: _139.ParamsAminoMsg): _139.Params;
                    toAminoMsg(message: _139.Params): _139.ParamsAminoMsg;
                    fromProtoMsg(message: _139.ParamsProtoMsg): _139.Params;
                    toProto(message: _139.Params): Uint8Array;
                    toProtoMsg(message: _139.Params): _139.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _143.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.GenesisState;
                    fromJSON(object: any): _143.GenesisState;
                    toJSON(message: _143.GenesisState): unknown;
                    fromPartial(object: {
                        clientGenesis?: {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: bigint;
                                        revisionHeight?: bigint;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowedClients?: string[];
                            };
                            createLocalhost?: boolean;
                            nextClientSequence?: bigint;
                        };
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _139.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: bigint;
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: bigint;
                            params?: {
                                maxExpectedTimePerBlock?: bigint;
                            };
                        };
                        channelGenesis?: {
                            channels?: {
                                state?: _130.State;
                                ordering?: _130.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                            }[];
                            nextChannelSequence?: bigint;
                        };
                    }): _143.GenesisState;
                    fromSDK(object: _143.GenesisStateSDKType): _143.GenesisState;
                    toSDK(message: _143.GenesisState): _143.GenesisStateSDKType;
                    fromAmino(object: _143.GenesisStateAmino): _143.GenesisState;
                    toAmino(message: _143.GenesisState): _143.GenesisStateAmino;
                    fromAminoMsg(object: _143.GenesisStateAminoMsg): _143.GenesisState;
                    toAminoMsg(message: _143.GenesisState): _143.GenesisStateAminoMsg;
                    fromProtoMsg(message: _143.GenesisStateProtoMsg): _143.GenesisState;
                    toProto(message: _143.GenesisState): Uint8Array;
                    toProtoMsg(message: _143.GenesisState): _143.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _144.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.ClientState;
                    fromJSON(object: any): _144.ClientState;
                    toJSON(message: _144.ClientState): unknown;
                    fromPartial(object: {
                        latestHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _144.ClientState;
                    fromSDK(object: _144.ClientStateSDKType): _144.ClientState;
                    toSDK(message: _144.ClientState): _144.ClientStateSDKType;
                    fromAmino(object: _144.ClientStateAmino): _144.ClientState;
                    toAmino(message: _144.ClientState): _144.ClientStateAmino;
                    fromAminoMsg(object: _144.ClientStateAminoMsg): _144.ClientState;
                    toAminoMsg(message: _144.ClientState): _144.ClientStateAminoMsg;
                    fromProtoMsg(message: _144.ClientStateProtoMsg): _144.ClientState;
                    toProto(message: _144.ClientState): Uint8Array;
                    toProtoMsg(message: _144.ClientState): _144.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _145.DataType;
                dataTypeToJSON(object: _145.DataType): string;
                DataType: typeof _145.DataType;
                DataTypeSDKType: typeof _145.DataType;
                DataTypeAmino: typeof _145.DataType;
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _145.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.ClientState;
                    fromJSON(object: any): _145.ClientState;
                    toJSON(message: _145.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: bigint;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: bigint;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _145.ClientState;
                    fromSDK(object: _145.ClientStateSDKType): _145.ClientState;
                    toSDK(message: _145.ClientState): _145.ClientStateSDKType;
                    fromAmino(object: _145.ClientStateAmino): _145.ClientState;
                    toAmino(message: _145.ClientState): _145.ClientStateAmino;
                    fromAminoMsg(object: _145.ClientStateAminoMsg): _145.ClientState;
                    toAminoMsg(message: _145.ClientState): _145.ClientStateAminoMsg;
                    fromProtoMsg(message: _145.ClientStateProtoMsg): _145.ClientState;
                    toProto(message: _145.ClientState): Uint8Array;
                    toProtoMsg(message: _145.ClientState): _145.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _145.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.ConsensusState;
                    fromJSON(object: any): _145.ConsensusState;
                    toJSON(message: _145.ConsensusState): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: bigint;
                    }): _145.ConsensusState;
                    fromSDK(object: _145.ConsensusStateSDKType): _145.ConsensusState;
                    toSDK(message: _145.ConsensusState): _145.ConsensusStateSDKType;
                    fromAmino(object: _145.ConsensusStateAmino): _145.ConsensusState;
                    toAmino(message: _145.ConsensusState): _145.ConsensusStateAmino;
                    fromAminoMsg(object: _145.ConsensusStateAminoMsg): _145.ConsensusState;
                    toAminoMsg(message: _145.ConsensusState): _145.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _145.ConsensusStateProtoMsg): _145.ConsensusState;
                    toProto(message: _145.ConsensusState): Uint8Array;
                    toProtoMsg(message: _145.ConsensusState): _145.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _145.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.Header;
                    fromJSON(object: any): _145.Header;
                    toJSON(message: _145.Header): unknown;
                    fromPartial(object: {
                        sequence?: bigint;
                        timestamp?: bigint;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _145.Header;
                    fromSDK(object: _145.HeaderSDKType): _145.Header;
                    toSDK(message: _145.Header): _145.HeaderSDKType;
                    fromAmino(object: _145.HeaderAmino): _145.Header;
                    toAmino(message: _145.Header): _145.HeaderAmino;
                    fromAminoMsg(object: _145.HeaderAminoMsg): _145.Header;
                    toAminoMsg(message: _145.Header): _145.HeaderAminoMsg;
                    fromProtoMsg(message: _145.HeaderProtoMsg): _145.Header;
                    toProto(message: _145.Header): Uint8Array;
                    toProtoMsg(message: _145.Header): _145.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _145.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.Misbehaviour;
                    fromJSON(object: any): _145.Misbehaviour;
                    toJSON(message: _145.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: bigint;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _145.DataType;
                            data?: Uint8Array;
                            timestamp?: bigint;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _145.DataType;
                            data?: Uint8Array;
                            timestamp?: bigint;
                        };
                    }): _145.Misbehaviour;
                    fromSDK(object: _145.MisbehaviourSDKType): _145.Misbehaviour;
                    toSDK(message: _145.Misbehaviour): _145.MisbehaviourSDKType;
                    fromAmino(object: _145.MisbehaviourAmino): _145.Misbehaviour;
                    toAmino(message: _145.Misbehaviour): _145.MisbehaviourAmino;
                    fromAminoMsg(object: _145.MisbehaviourAminoMsg): _145.Misbehaviour;
                    toAminoMsg(message: _145.Misbehaviour): _145.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _145.MisbehaviourProtoMsg): _145.Misbehaviour;
                    toProto(message: _145.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _145.Misbehaviour): _145.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _145.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.SignatureAndData;
                    fromJSON(object: any): _145.SignatureAndData;
                    toJSON(message: _145.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _145.DataType;
                        data?: Uint8Array;
                        timestamp?: bigint;
                    }): _145.SignatureAndData;
                    fromSDK(object: _145.SignatureAndDataSDKType): _145.SignatureAndData;
                    toSDK(message: _145.SignatureAndData): _145.SignatureAndDataSDKType;
                    fromAmino(object: _145.SignatureAndDataAmino): _145.SignatureAndData;
                    toAmino(message: _145.SignatureAndData): _145.SignatureAndDataAmino;
                    fromAminoMsg(object: _145.SignatureAndDataAminoMsg): _145.SignatureAndData;
                    toAminoMsg(message: _145.SignatureAndData): _145.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _145.SignatureAndDataProtoMsg): _145.SignatureAndData;
                    toProto(message: _145.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _145.SignatureAndData): _145.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _145.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.TimestampedSignatureData;
                    fromJSON(object: any): _145.TimestampedSignatureData;
                    toJSON(message: _145.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: bigint;
                    }): _145.TimestampedSignatureData;
                    fromSDK(object: _145.TimestampedSignatureDataSDKType): _145.TimestampedSignatureData;
                    toSDK(message: _145.TimestampedSignatureData): _145.TimestampedSignatureDataSDKType;
                    fromAmino(object: _145.TimestampedSignatureDataAmino): _145.TimestampedSignatureData;
                    toAmino(message: _145.TimestampedSignatureData): _145.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _145.TimestampedSignatureDataAminoMsg): _145.TimestampedSignatureData;
                    toAminoMsg(message: _145.TimestampedSignatureData): _145.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _145.TimestampedSignatureDataProtoMsg): _145.TimestampedSignatureData;
                    toProto(message: _145.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _145.TimestampedSignatureData): _145.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _145.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.SignBytes;
                    fromJSON(object: any): _145.SignBytes;
                    toJSON(message: _145.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: bigint;
                        timestamp?: bigint;
                        diversifier?: string;
                        dataType?: _145.DataType;
                        data?: Uint8Array;
                    }): _145.SignBytes;
                    fromSDK(object: _145.SignBytesSDKType): _145.SignBytes;
                    toSDK(message: _145.SignBytes): _145.SignBytesSDKType;
                    fromAmino(object: _145.SignBytesAmino): _145.SignBytes;
                    toAmino(message: _145.SignBytes): _145.SignBytesAmino;
                    fromAminoMsg(object: _145.SignBytesAminoMsg): _145.SignBytes;
                    toAminoMsg(message: _145.SignBytes): _145.SignBytesAminoMsg;
                    fromProtoMsg(message: _145.SignBytesProtoMsg): _145.SignBytes;
                    toProto(message: _145.SignBytes): Uint8Array;
                    toProtoMsg(message: _145.SignBytes): _145.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _145.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.HeaderData;
                    fromJSON(object: any): _145.HeaderData;
                    toJSON(message: _145.HeaderData): unknown;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _145.HeaderData;
                    fromSDK(object: _145.HeaderDataSDKType): _145.HeaderData;
                    toSDK(message: _145.HeaderData): _145.HeaderDataSDKType;
                    fromAmino(object: _145.HeaderDataAmino): _145.HeaderData;
                    toAmino(message: _145.HeaderData): _145.HeaderDataAmino;
                    fromAminoMsg(object: _145.HeaderDataAminoMsg): _145.HeaderData;
                    toAminoMsg(message: _145.HeaderData): _145.HeaderDataAminoMsg;
                    fromProtoMsg(message: _145.HeaderDataProtoMsg): _145.HeaderData;
                    toProto(message: _145.HeaderData): Uint8Array;
                    toProtoMsg(message: _145.HeaderData): _145.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _145.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.ClientStateData;
                    fromJSON(object: any): _145.ClientStateData;
                    toJSON(message: _145.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _145.ClientStateData;
                    fromSDK(object: _145.ClientStateDataSDKType): _145.ClientStateData;
                    toSDK(message: _145.ClientStateData): _145.ClientStateDataSDKType;
                    fromAmino(object: _145.ClientStateDataAmino): _145.ClientStateData;
                    toAmino(message: _145.ClientStateData): _145.ClientStateDataAmino;
                    fromAminoMsg(object: _145.ClientStateDataAminoMsg): _145.ClientStateData;
                    toAminoMsg(message: _145.ClientStateData): _145.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _145.ClientStateDataProtoMsg): _145.ClientStateData;
                    toProto(message: _145.ClientStateData): Uint8Array;
                    toProtoMsg(message: _145.ClientStateData): _145.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _145.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.ConsensusStateData;
                    fromJSON(object: any): _145.ConsensusStateData;
                    toJSON(message: _145.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _145.ConsensusStateData;
                    fromSDK(object: _145.ConsensusStateDataSDKType): _145.ConsensusStateData;
                    toSDK(message: _145.ConsensusStateData): _145.ConsensusStateDataSDKType;
                    fromAmino(object: _145.ConsensusStateDataAmino): _145.ConsensusStateData;
                    toAmino(message: _145.ConsensusStateData): _145.ConsensusStateDataAmino;
                    fromAminoMsg(object: _145.ConsensusStateDataAminoMsg): _145.ConsensusStateData;
                    toAminoMsg(message: _145.ConsensusStateData): _145.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _145.ConsensusStateDataProtoMsg): _145.ConsensusStateData;
                    toProto(message: _145.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _145.ConsensusStateData): _145.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _145.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.ConnectionStateData;
                    fromJSON(object: any): _145.ConnectionStateData;
                    toJSON(message: _145.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _139.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: bigint;
                        };
                    }): _145.ConnectionStateData;
                    fromSDK(object: _145.ConnectionStateDataSDKType): _145.ConnectionStateData;
                    toSDK(message: _145.ConnectionStateData): _145.ConnectionStateDataSDKType;
                    fromAmino(object: _145.ConnectionStateDataAmino): _145.ConnectionStateData;
                    toAmino(message: _145.ConnectionStateData): _145.ConnectionStateDataAmino;
                    fromAminoMsg(object: _145.ConnectionStateDataAminoMsg): _145.ConnectionStateData;
                    toAminoMsg(message: _145.ConnectionStateData): _145.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _145.ConnectionStateDataProtoMsg): _145.ConnectionStateData;
                    toProto(message: _145.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _145.ConnectionStateData): _145.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _145.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.ChannelStateData;
                    fromJSON(object: any): _145.ChannelStateData;
                    toJSON(message: _145.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _130.State;
                            ordering?: _130.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _145.ChannelStateData;
                    fromSDK(object: _145.ChannelStateDataSDKType): _145.ChannelStateData;
                    toSDK(message: _145.ChannelStateData): _145.ChannelStateDataSDKType;
                    fromAmino(object: _145.ChannelStateDataAmino): _145.ChannelStateData;
                    toAmino(message: _145.ChannelStateData): _145.ChannelStateDataAmino;
                    fromAminoMsg(object: _145.ChannelStateDataAminoMsg): _145.ChannelStateData;
                    toAminoMsg(message: _145.ChannelStateData): _145.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _145.ChannelStateDataProtoMsg): _145.ChannelStateData;
                    toProto(message: _145.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _145.ChannelStateData): _145.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _145.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.PacketCommitmentData;
                    fromJSON(object: any): _145.PacketCommitmentData;
                    toJSON(message: _145.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _145.PacketCommitmentData;
                    fromSDK(object: _145.PacketCommitmentDataSDKType): _145.PacketCommitmentData;
                    toSDK(message: _145.PacketCommitmentData): _145.PacketCommitmentDataSDKType;
                    fromAmino(object: _145.PacketCommitmentDataAmino): _145.PacketCommitmentData;
                    toAmino(message: _145.PacketCommitmentData): _145.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _145.PacketCommitmentDataAminoMsg): _145.PacketCommitmentData;
                    toAminoMsg(message: _145.PacketCommitmentData): _145.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _145.PacketCommitmentDataProtoMsg): _145.PacketCommitmentData;
                    toProto(message: _145.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _145.PacketCommitmentData): _145.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _145.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.PacketAcknowledgementData;
                    fromJSON(object: any): _145.PacketAcknowledgementData;
                    toJSON(message: _145.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _145.PacketAcknowledgementData;
                    fromSDK(object: _145.PacketAcknowledgementDataSDKType): _145.PacketAcknowledgementData;
                    toSDK(message: _145.PacketAcknowledgementData): _145.PacketAcknowledgementDataSDKType;
                    fromAmino(object: _145.PacketAcknowledgementDataAmino): _145.PacketAcknowledgementData;
                    toAmino(message: _145.PacketAcknowledgementData): _145.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _145.PacketAcknowledgementDataAminoMsg): _145.PacketAcknowledgementData;
                    toAminoMsg(message: _145.PacketAcknowledgementData): _145.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _145.PacketAcknowledgementDataProtoMsg): _145.PacketAcknowledgementData;
                    toProto(message: _145.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _145.PacketAcknowledgementData): _145.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _145.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.PacketReceiptAbsenceData;
                    fromJSON(object: any): _145.PacketReceiptAbsenceData;
                    toJSON(message: _145.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _145.PacketReceiptAbsenceData;
                    fromSDK(object: _145.PacketReceiptAbsenceDataSDKType): _145.PacketReceiptAbsenceData;
                    toSDK(message: _145.PacketReceiptAbsenceData): _145.PacketReceiptAbsenceDataSDKType;
                    fromAmino(object: _145.PacketReceiptAbsenceDataAmino): _145.PacketReceiptAbsenceData;
                    toAmino(message: _145.PacketReceiptAbsenceData): _145.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _145.PacketReceiptAbsenceDataAminoMsg): _145.PacketReceiptAbsenceData;
                    toAminoMsg(message: _145.PacketReceiptAbsenceData): _145.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _145.PacketReceiptAbsenceDataProtoMsg): _145.PacketReceiptAbsenceData;
                    toProto(message: _145.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _145.PacketReceiptAbsenceData): _145.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _145.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.NextSequenceRecvData;
                    fromJSON(object: any): _145.NextSequenceRecvData;
                    toJSON(message: _145.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: bigint;
                    }): _145.NextSequenceRecvData;
                    fromSDK(object: _145.NextSequenceRecvDataSDKType): _145.NextSequenceRecvData;
                    toSDK(message: _145.NextSequenceRecvData): _145.NextSequenceRecvDataSDKType;
                    fromAmino(object: _145.NextSequenceRecvDataAmino): _145.NextSequenceRecvData;
                    toAmino(message: _145.NextSequenceRecvData): _145.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _145.NextSequenceRecvDataAminoMsg): _145.NextSequenceRecvData;
                    toAminoMsg(message: _145.NextSequenceRecvData): _145.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _145.NextSequenceRecvDataProtoMsg): _145.NextSequenceRecvData;
                    toProto(message: _145.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _145.NextSequenceRecvData): _145.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _146.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.ClientState;
                    fromJSON(object: any): _146.ClientState;
                    toJSON(message: _146.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: bigint;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: bigint;
                        };
                    }): _146.ClientState;
                    fromSDK(object: _146.ClientStateSDKType): _146.ClientState;
                    toSDK(message: _146.ClientState): _146.ClientStateSDKType;
                    fromAmino(object: _146.ClientStateAmino): _146.ClientState;
                    toAmino(message: _146.ClientState): _146.ClientStateAmino;
                    fromAminoMsg(object: _146.ClientStateAminoMsg): _146.ClientState;
                    toAminoMsg(message: _146.ClientState): _146.ClientStateAminoMsg;
                    fromProtoMsg(message: _146.ClientStateProtoMsg): _146.ClientState;
                    toProto(message: _146.ClientState): Uint8Array;
                    toProtoMsg(message: _146.ClientState): _146.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _146.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.ConsensusState;
                    fromJSON(object: any): _146.ConsensusState;
                    toJSON(message: _146.ConsensusState): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: bigint;
                    }): _146.ConsensusState;
                    fromSDK(object: _146.ConsensusStateSDKType): _146.ConsensusState;
                    toSDK(message: _146.ConsensusState): _146.ConsensusStateSDKType;
                    fromAmino(object: _146.ConsensusStateAmino): _146.ConsensusState;
                    toAmino(message: _146.ConsensusState): _146.ConsensusStateAmino;
                    fromAminoMsg(object: _146.ConsensusStateAminoMsg): _146.ConsensusState;
                    toAminoMsg(message: _146.ConsensusState): _146.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _146.ConsensusStateProtoMsg): _146.ConsensusState;
                    toProto(message: _146.ConsensusState): Uint8Array;
                    toProtoMsg(message: _146.ConsensusState): _146.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _146.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.Header;
                    fromJSON(object: any): _146.Header;
                    toJSON(message: _146.Header): unknown;
                    fromPartial(object: {
                        timestamp?: bigint;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _146.Header;
                    fromSDK(object: _146.HeaderSDKType): _146.Header;
                    toSDK(message: _146.Header): _146.HeaderSDKType;
                    fromAmino(object: _146.HeaderAmino): _146.Header;
                    toAmino(message: _146.Header): _146.HeaderAmino;
                    fromAminoMsg(object: _146.HeaderAminoMsg): _146.Header;
                    toAminoMsg(message: _146.Header): _146.HeaderAminoMsg;
                    fromProtoMsg(message: _146.HeaderProtoMsg): _146.Header;
                    toProto(message: _146.Header): Uint8Array;
                    toProtoMsg(message: _146.Header): _146.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _146.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.Misbehaviour;
                    fromJSON(object: any): _146.Misbehaviour;
                    toJSON(message: _146.Misbehaviour): unknown;
                    fromPartial(object: {
                        sequence?: bigint;
                        signatureOne?: {
                            signature?: Uint8Array;
                            path?: Uint8Array;
                            data?: Uint8Array;
                            timestamp?: bigint;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            path?: Uint8Array;
                            data?: Uint8Array;
                            timestamp?: bigint;
                        };
                    }): _146.Misbehaviour;
                    fromSDK(object: _146.MisbehaviourSDKType): _146.Misbehaviour;
                    toSDK(message: _146.Misbehaviour): _146.MisbehaviourSDKType;
                    fromAmino(object: _146.MisbehaviourAmino): _146.Misbehaviour;
                    toAmino(message: _146.Misbehaviour): _146.MisbehaviourAmino;
                    fromAminoMsg(object: _146.MisbehaviourAminoMsg): _146.Misbehaviour;
                    toAminoMsg(message: _146.Misbehaviour): _146.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _146.MisbehaviourProtoMsg): _146.Misbehaviour;
                    toProto(message: _146.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _146.Misbehaviour): _146.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _146.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.SignatureAndData;
                    fromJSON(object: any): _146.SignatureAndData;
                    toJSON(message: _146.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        path?: Uint8Array;
                        data?: Uint8Array;
                        timestamp?: bigint;
                    }): _146.SignatureAndData;
                    fromSDK(object: _146.SignatureAndDataSDKType): _146.SignatureAndData;
                    toSDK(message: _146.SignatureAndData): _146.SignatureAndDataSDKType;
                    fromAmino(object: _146.SignatureAndDataAmino): _146.SignatureAndData;
                    toAmino(message: _146.SignatureAndData): _146.SignatureAndDataAmino;
                    fromAminoMsg(object: _146.SignatureAndDataAminoMsg): _146.SignatureAndData;
                    toAminoMsg(message: _146.SignatureAndData): _146.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _146.SignatureAndDataProtoMsg): _146.SignatureAndData;
                    toProto(message: _146.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _146.SignatureAndData): _146.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _146.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.TimestampedSignatureData;
                    fromJSON(object: any): _146.TimestampedSignatureData;
                    toJSON(message: _146.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: bigint;
                    }): _146.TimestampedSignatureData;
                    fromSDK(object: _146.TimestampedSignatureDataSDKType): _146.TimestampedSignatureData;
                    toSDK(message: _146.TimestampedSignatureData): _146.TimestampedSignatureDataSDKType;
                    fromAmino(object: _146.TimestampedSignatureDataAmino): _146.TimestampedSignatureData;
                    toAmino(message: _146.TimestampedSignatureData): _146.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _146.TimestampedSignatureDataAminoMsg): _146.TimestampedSignatureData;
                    toAminoMsg(message: _146.TimestampedSignatureData): _146.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _146.TimestampedSignatureDataProtoMsg): _146.TimestampedSignatureData;
                    toProto(message: _146.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _146.TimestampedSignatureData): _146.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _146.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.SignBytes;
                    fromJSON(object: any): _146.SignBytes;
                    toJSON(message: _146.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: bigint;
                        timestamp?: bigint;
                        diversifier?: string;
                        path?: Uint8Array;
                        data?: Uint8Array;
                    }): _146.SignBytes;
                    fromSDK(object: _146.SignBytesSDKType): _146.SignBytes;
                    toSDK(message: _146.SignBytes): _146.SignBytesSDKType;
                    fromAmino(object: _146.SignBytesAmino): _146.SignBytes;
                    toAmino(message: _146.SignBytes): _146.SignBytesAmino;
                    fromAminoMsg(object: _146.SignBytesAminoMsg): _146.SignBytes;
                    toAminoMsg(message: _146.SignBytes): _146.SignBytesAminoMsg;
                    fromProtoMsg(message: _146.SignBytesProtoMsg): _146.SignBytes;
                    toProto(message: _146.SignBytes): Uint8Array;
                    toProtoMsg(message: _146.SignBytes): _146.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _146.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.HeaderData;
                    fromJSON(object: any): _146.HeaderData;
                    toJSON(message: _146.HeaderData): unknown;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _146.HeaderData;
                    fromSDK(object: _146.HeaderDataSDKType): _146.HeaderData;
                    toSDK(message: _146.HeaderData): _146.HeaderDataSDKType;
                    fromAmino(object: _146.HeaderDataAmino): _146.HeaderData;
                    toAmino(message: _146.HeaderData): _146.HeaderDataAmino;
                    fromAminoMsg(object: _146.HeaderDataAminoMsg): _146.HeaderData;
                    toAminoMsg(message: _146.HeaderData): _146.HeaderDataAminoMsg;
                    fromProtoMsg(message: _146.HeaderDataProtoMsg): _146.HeaderData;
                    toProto(message: _146.HeaderData): Uint8Array;
                    toProtoMsg(message: _146.HeaderData): _146.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _147.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.ClientState;
                    fromJSON(object: any): _147.ClientState;
                    toJSON(message: _147.ClientState): unknown;
                    fromPartial(object: {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: bigint;
                            denominator?: bigint;
                        };
                        trustingPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        unbondingPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxClockDrift?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        frozenHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        latestHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                                prehashKey?: import("../cosmos/ics23/v1/proofs").HashOp;
                                prehashValue?: import("../cosmos/ics23/v1/proofs").HashOp;
                                length?: import("../cosmos/ics23/v1/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../cosmos/ics23/v1/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                            prehashKeyBeforeComparison?: boolean;
                        }[];
                        upgradePath?: string[];
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    }): _147.ClientState;
                    fromSDK(object: _147.ClientStateSDKType): _147.ClientState;
                    toSDK(message: _147.ClientState): _147.ClientStateSDKType;
                    fromAmino(object: _147.ClientStateAmino): _147.ClientState;
                    toAmino(message: _147.ClientState): _147.ClientStateAmino;
                    fromAminoMsg(object: _147.ClientStateAminoMsg): _147.ClientState;
                    toAminoMsg(message: _147.ClientState): _147.ClientStateAminoMsg;
                    fromProtoMsg(message: _147.ClientStateProtoMsg): _147.ClientState;
                    toProto(message: _147.ClientState): Uint8Array;
                    toProtoMsg(message: _147.ClientState): _147.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _147.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.ConsensusState;
                    fromJSON(object: any): _147.ConsensusState;
                    toJSON(message: _147.ConsensusState): unknown;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    }): _147.ConsensusState;
                    fromSDK(object: _147.ConsensusStateSDKType): _147.ConsensusState;
                    toSDK(message: _147.ConsensusState): _147.ConsensusStateSDKType;
                    fromAmino(object: _147.ConsensusStateAmino): _147.ConsensusState;
                    toAmino(message: _147.ConsensusState): _147.ConsensusStateAmino;
                    fromAminoMsg(object: _147.ConsensusStateAminoMsg): _147.ConsensusState;
                    toAminoMsg(message: _147.ConsensusState): _147.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _147.ConsensusStateProtoMsg): _147.ConsensusState;
                    toProto(message: _147.ConsensusState): Uint8Array;
                    toProtoMsg(message: _147.ConsensusState): _147.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _147.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.Misbehaviour;
                    fromJSON(object: any): _147.Misbehaviour;
                    toJSON(message: _147.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        header1?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: bigint;
                                        app?: bigint;
                                    };
                                    chainId?: string;
                                    height?: bigint;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: bigint;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                };
                                totalVotingPower?: bigint;
                            };
                            trustedHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                };
                                totalVotingPower?: bigint;
                            };
                        };
                        header2?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: bigint;
                                        app?: bigint;
                                    };
                                    chainId?: string;
                                    height?: bigint;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: bigint;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                };
                                totalVotingPower?: bigint;
                            };
                            trustedHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                };
                                totalVotingPower?: bigint;
                            };
                        };
                    }): _147.Misbehaviour;
                    fromSDK(object: _147.MisbehaviourSDKType): _147.Misbehaviour;
                    toSDK(message: _147.Misbehaviour): _147.MisbehaviourSDKType;
                    fromAmino(object: _147.MisbehaviourAmino): _147.Misbehaviour;
                    toAmino(message: _147.Misbehaviour): _147.MisbehaviourAmino;
                    fromAminoMsg(object: _147.MisbehaviourAminoMsg): _147.Misbehaviour;
                    toAminoMsg(message: _147.Misbehaviour): _147.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _147.MisbehaviourProtoMsg): _147.Misbehaviour;
                    toProto(message: _147.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _147.Misbehaviour): _147.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _147.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.Header;
                    fromJSON(object: any): _147.Header;
                    toJSON(message: _147.Header): unknown;
                    fromPartial(object: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: bigint;
                                    app?: bigint;
                                };
                                chainId?: string;
                                height?: bigint;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: bigint;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            };
                            totalVotingPower?: bigint;
                        };
                        trustedHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            };
                            totalVotingPower?: bigint;
                        };
                    }): _147.Header;
                    fromSDK(object: _147.HeaderSDKType): _147.Header;
                    toSDK(message: _147.Header): _147.HeaderSDKType;
                    fromAmino(object: _147.HeaderAmino): _147.Header;
                    toAmino(message: _147.Header): _147.HeaderAmino;
                    fromAminoMsg(object: _147.HeaderAminoMsg): _147.Header;
                    toAminoMsg(message: _147.Header): _147.HeaderAminoMsg;
                    fromProtoMsg(message: _147.HeaderProtoMsg): _147.Header;
                    toProto(message: _147.Header): Uint8Array;
                    toProtoMsg(message: _147.Header): _147.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    aminoType: string;
                    encode(message: _147.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.Fraction;
                    fromJSON(object: any): _147.Fraction;
                    toJSON(message: _147.Fraction): unknown;
                    fromPartial(object: {
                        numerator?: bigint;
                        denominator?: bigint;
                    }): _147.Fraction;
                    fromSDK(object: _147.FractionSDKType): _147.Fraction;
                    toSDK(message: _147.Fraction): _147.FractionSDKType;
                    fromAmino(object: _147.FractionAmino): _147.Fraction;
                    toAmino(message: _147.Fraction): _147.FractionAmino;
                    fromAminoMsg(object: _147.FractionAminoMsg): _147.Fraction;
                    toAminoMsg(message: _147.Fraction): _147.FractionAminoMsg;
                    fromProtoMsg(message: _147.FractionProtoMsg): _147.Fraction;
                    toProto(message: _147.Fraction): Uint8Array;
                    toProtoMsg(message: _147.Fraction): _147.FractionProtoMsg;
                };
            };
        }
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
            ibc: {
                applications: {
                    fee: {
                        v1: _247.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _248.MsgClientImpl;
                        };
                        host: {
                            v1: _249.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _250.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _251.MsgClientImpl;
                    };
                    client: {
                        v1: _252.MsgClientImpl;
                    };
                    connection: {
                        v1: _253.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    fee: {
                        v1: {
                            incentivizedPackets(request: _112.QueryIncentivizedPacketsRequest): Promise<_112.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _112.QueryIncentivizedPacketRequest): Promise<_112.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _112.QueryIncentivizedPacketsForChannelRequest): Promise<_112.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _112.QueryTotalRecvFeesRequest): Promise<_112.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _112.QueryTotalAckFeesRequest): Promise<_112.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _112.QueryTotalTimeoutFeesRequest): Promise<_112.QueryTotalTimeoutFeesResponse>;
                            payee(request: _112.QueryPayeeRequest): Promise<_112.QueryPayeeResponse>;
                            counterpartyPayee(request: _112.QueryCounterpartyPayeeRequest): Promise<_112.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _112.QueryFeeEnabledChannelsRequest): Promise<_112.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _112.QueryFeeEnabledChannelRequest): Promise<_112.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _115.QueryInterchainAccountRequest): Promise<_115.QueryInterchainAccountResponse>;
                                params(request?: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _126.QueryDenomTraceRequest): Promise<_126.QueryDenomTraceResponse>;
                            denomTraces(request?: _126.QueryDenomTracesRequest): Promise<_126.QueryDenomTracesResponse>;
                            params(request?: _126.QueryParamsRequest): Promise<_126.QueryParamsResponse>;
                            denomHash(request: _126.QueryDenomHashRequest): Promise<_126.QueryDenomHashResponse>;
                            escrowAddress(request: _126.QueryEscrowAddressRequest): Promise<_126.QueryEscrowAddressResponse>;
                            totalEscrowForDenom(request: _126.QueryTotalEscrowForDenomRequest): Promise<_126.QueryTotalEscrowForDenomResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _132.QueryChannelRequest): Promise<_132.QueryChannelResponse>;
                            channels(request?: _132.QueryChannelsRequest): Promise<_132.QueryChannelsResponse>;
                            connectionChannels(request: _132.QueryConnectionChannelsRequest): Promise<_132.QueryConnectionChannelsResponse>;
                            channelClientState(request: _132.QueryChannelClientStateRequest): Promise<_132.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _132.QueryChannelConsensusStateRequest): Promise<_132.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _132.QueryPacketCommitmentRequest): Promise<_132.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _132.QueryPacketCommitmentsRequest): Promise<_132.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _132.QueryPacketReceiptRequest): Promise<_132.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _132.QueryPacketAcknowledgementRequest): Promise<_132.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _132.QueryPacketAcknowledgementsRequest): Promise<_132.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _132.QueryUnreceivedPacketsRequest): Promise<_132.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _132.QueryUnreceivedAcksRequest): Promise<_132.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _132.QueryNextSequenceReceiveRequest): Promise<_132.QueryNextSequenceReceiveResponse>;
                            nextSequenceSend(request: _132.QueryNextSequenceSendRequest): Promise<_132.QueryNextSequenceSendResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _136.QueryClientStateRequest): Promise<_136.QueryClientStateResponse>;
                            clientStates(request?: _136.QueryClientStatesRequest): Promise<_136.QueryClientStatesResponse>;
                            consensusState(request: _136.QueryConsensusStateRequest): Promise<_136.QueryConsensusStateResponse>;
                            consensusStates(request: _136.QueryConsensusStatesRequest): Promise<_136.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _136.QueryConsensusStateHeightsRequest): Promise<_136.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _136.QueryClientStatusRequest): Promise<_136.QueryClientStatusResponse>;
                            clientParams(request?: _136.QueryClientParamsRequest): Promise<_136.QueryClientParamsResponse>;
                            upgradedClientState(request?: _136.QueryUpgradedClientStateRequest): Promise<_136.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _136.QueryUpgradedConsensusStateRequest): Promise<_136.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _141.QueryConnectionRequest): Promise<_141.QueryConnectionResponse>;
                            connections(request?: _141.QueryConnectionsRequest): Promise<_141.QueryConnectionsResponse>;
                            clientConnections(request: _141.QueryClientConnectionsRequest): Promise<_141.QueryClientConnectionsResponse>;
                            connectionClientState(request: _141.QueryConnectionClientStateRequest): Promise<_141.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _141.QueryConnectionConsensusStateRequest): Promise<_141.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _141.QueryConnectionParamsRequest): Promise<_141.QueryConnectionParamsResponse>;
                        };
                    };
                };
            };
        }>;
    };
}

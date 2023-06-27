import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, DenomTraceAmino, DenomTraceSDKType, Params, ParamsAmino, ParamsSDKType } from "./transfer";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequest {
    /** hash (in hex format) or denom (full denom with ibc prefix) of the denomination trace information. */
    hash: string;
}
export interface QueryDenomTraceRequestProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceRequest";
    value: Uint8Array;
}
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequestAmino {
    /** hash (in hex format) or denom (full denom with ibc prefix) of the denomination trace information. */
    hash: string;
}
export interface QueryDenomTraceRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomTraceRequest";
    value: QueryDenomTraceRequestAmino;
}
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequestSDKType {
    hash: string;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponse {
    /** denom_trace returns the requested denomination trace information. */
    denomTrace: DenomTrace;
}
export interface QueryDenomTraceResponseProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTraceResponse";
    value: Uint8Array;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponseAmino {
    /** denom_trace returns the requested denomination trace information. */
    denom_trace?: DenomTraceAmino;
}
export interface QueryDenomTraceResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomTraceResponse";
    value: QueryDenomTraceResponseAmino;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponseSDKType {
    denom_trace: DenomTraceSDKType;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryDenomTracesRequestProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesRequest";
    value: Uint8Array;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryDenomTracesRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomTracesRequest";
    value: QueryDenomTracesRequestAmino;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequestSDKType {
    pagination: PageRequestSDKType;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponse {
    /** denom_traces returns all denominations trace information. */
    denomTraces: DenomTrace[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryDenomTracesResponseProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomTracesResponse";
    value: Uint8Array;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponseAmino {
    /** denom_traces returns all denominations trace information. */
    denom_traces: DenomTraceAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryDenomTracesResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomTracesResponse";
    value: QueryDenomTracesResponseAmino;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponseSDKType {
    denom_traces: DenomTraceSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */
export interface QueryDenomHashRequest {
    /** The denomination trace ([port_id]/[channel_id])+/[denom] */
    trace: string;
}
export interface QueryDenomHashRequestProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashRequest";
    value: Uint8Array;
}
/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */
export interface QueryDenomHashRequestAmino {
    /** The denomination trace ([port_id]/[channel_id])+/[denom] */
    trace: string;
}
export interface QueryDenomHashRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomHashRequest";
    value: QueryDenomHashRequestAmino;
}
/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */
export interface QueryDenomHashRequestSDKType {
    trace: string;
}
/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */
export interface QueryDenomHashResponse {
    /** hash (in hex format) of the denomination trace information. */
    hash: string;
}
export interface QueryDenomHashResponseProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryDenomHashResponse";
    value: Uint8Array;
}
/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */
export interface QueryDenomHashResponseAmino {
    /** hash (in hex format) of the denomination trace information. */
    hash: string;
}
export interface QueryDenomHashResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomHashResponse";
    value: QueryDenomHashResponseAmino;
}
/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */
export interface QueryDenomHashResponseSDKType {
    hash: string;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequest {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
export interface QueryEscrowAddressRequestProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressRequest";
    value: Uint8Array;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequestAmino {
    /** unique port identifier */
    port_id: string;
    /** unique channel identifier */
    channel_id: string;
}
export interface QueryEscrowAddressRequestAminoMsg {
    type: "cosmos-sdk/QueryEscrowAddressRequest";
    value: QueryEscrowAddressRequestAmino;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequestSDKType {
    port_id: string;
    channel_id: string;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponse {
    /** the escrow account address */
    escrowAddress: string;
}
export interface QueryEscrowAddressResponseProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryEscrowAddressResponse";
    value: Uint8Array;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponseAmino {
    /** the escrow account address */
    escrow_address: string;
}
export interface QueryEscrowAddressResponseAminoMsg {
    type: "cosmos-sdk/QueryEscrowAddressResponse";
    value: QueryEscrowAddressResponseAmino;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponseSDKType {
    escrow_address: string;
}
/** QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomRequest {
    denom: string;
}
export interface QueryTotalEscrowForDenomRequestProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest";
    value: Uint8Array;
}
/** QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomRequestAmino {
    denom: string;
}
export interface QueryTotalEscrowForDenomRequestAminoMsg {
    type: "cosmos-sdk/QueryTotalEscrowForDenomRequest";
    value: QueryTotalEscrowForDenomRequestAmino;
}
/** QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomRequestSDKType {
    denom: string;
}
/** QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomResponse {
    amount: Coin;
}
export interface QueryTotalEscrowForDenomResponseProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse";
    value: Uint8Array;
}
/** QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomResponseAmino {
    amount?: CoinAmino;
}
export interface QueryTotalEscrowForDenomResponseAminoMsg {
    type: "cosmos-sdk/QueryTotalEscrowForDenomResponse";
    value: QueryTotalEscrowForDenomResponseAmino;
}
/** QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method. */
export interface QueryTotalEscrowForDenomResponseSDKType {
    amount: CoinSDKType;
}
export declare const QueryDenomTraceRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomTraceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomTraceRequest;
    fromJSON(object: any): QueryDenomTraceRequest;
    toJSON(message: QueryDenomTraceRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomTraceRequest>): QueryDenomTraceRequest;
    fromSDK(object: QueryDenomTraceRequestSDKType): QueryDenomTraceRequest;
    toSDK(message: QueryDenomTraceRequest): QueryDenomTraceRequestSDKType;
    fromAmino(object: QueryDenomTraceRequestAmino): QueryDenomTraceRequest;
    toAmino(message: QueryDenomTraceRequest): QueryDenomTraceRequestAmino;
    fromAminoMsg(object: QueryDenomTraceRequestAminoMsg): QueryDenomTraceRequest;
    toAminoMsg(message: QueryDenomTraceRequest): QueryDenomTraceRequestAminoMsg;
    fromProtoMsg(message: QueryDenomTraceRequestProtoMsg): QueryDenomTraceRequest;
    toProto(message: QueryDenomTraceRequest): Uint8Array;
    toProtoMsg(message: QueryDenomTraceRequest): QueryDenomTraceRequestProtoMsg;
};
export declare const QueryDenomTraceResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomTraceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomTraceResponse;
    fromJSON(object: any): QueryDenomTraceResponse;
    toJSON(message: QueryDenomTraceResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomTraceResponse>): QueryDenomTraceResponse;
    fromSDK(object: QueryDenomTraceResponseSDKType): QueryDenomTraceResponse;
    toSDK(message: QueryDenomTraceResponse): QueryDenomTraceResponseSDKType;
    fromAmino(object: QueryDenomTraceResponseAmino): QueryDenomTraceResponse;
    toAmino(message: QueryDenomTraceResponse): QueryDenomTraceResponseAmino;
    fromAminoMsg(object: QueryDenomTraceResponseAminoMsg): QueryDenomTraceResponse;
    toAminoMsg(message: QueryDenomTraceResponse): QueryDenomTraceResponseAminoMsg;
    fromProtoMsg(message: QueryDenomTraceResponseProtoMsg): QueryDenomTraceResponse;
    toProto(message: QueryDenomTraceResponse): Uint8Array;
    toProtoMsg(message: QueryDenomTraceResponse): QueryDenomTraceResponseProtoMsg;
};
export declare const QueryDenomTracesRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomTracesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomTracesRequest;
    fromJSON(object: any): QueryDenomTracesRequest;
    toJSON(message: QueryDenomTracesRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomTracesRequest>): QueryDenomTracesRequest;
    fromSDK(object: QueryDenomTracesRequestSDKType): QueryDenomTracesRequest;
    toSDK(message: QueryDenomTracesRequest): QueryDenomTracesRequestSDKType;
    fromAmino(object: QueryDenomTracesRequestAmino): QueryDenomTracesRequest;
    toAmino(message: QueryDenomTracesRequest): QueryDenomTracesRequestAmino;
    fromAminoMsg(object: QueryDenomTracesRequestAminoMsg): QueryDenomTracesRequest;
    toAminoMsg(message: QueryDenomTracesRequest): QueryDenomTracesRequestAminoMsg;
    fromProtoMsg(message: QueryDenomTracesRequestProtoMsg): QueryDenomTracesRequest;
    toProto(message: QueryDenomTracesRequest): Uint8Array;
    toProtoMsg(message: QueryDenomTracesRequest): QueryDenomTracesRequestProtoMsg;
};
export declare const QueryDenomTracesResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomTracesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomTracesResponse;
    fromJSON(object: any): QueryDenomTracesResponse;
    toJSON(message: QueryDenomTracesResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomTracesResponse>): QueryDenomTracesResponse;
    fromSDK(object: QueryDenomTracesResponseSDKType): QueryDenomTracesResponse;
    toSDK(message: QueryDenomTracesResponse): QueryDenomTracesResponseSDKType;
    fromAmino(object: QueryDenomTracesResponseAmino): QueryDenomTracesResponse;
    toAmino(message: QueryDenomTracesResponse): QueryDenomTracesResponseAmino;
    fromAminoMsg(object: QueryDenomTracesResponseAminoMsg): QueryDenomTracesResponse;
    toAminoMsg(message: QueryDenomTracesResponse): QueryDenomTracesResponseAminoMsg;
    fromProtoMsg(message: QueryDenomTracesResponseProtoMsg): QueryDenomTracesResponse;
    toProto(message: QueryDenomTracesResponse): Uint8Array;
    toProtoMsg(message: QueryDenomTracesResponse): QueryDenomTracesResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest;
    toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse;
    toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryDenomHashRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomHashRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomHashRequest;
    fromJSON(object: any): QueryDenomHashRequest;
    toJSON(message: QueryDenomHashRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomHashRequest>): QueryDenomHashRequest;
    fromSDK(object: QueryDenomHashRequestSDKType): QueryDenomHashRequest;
    toSDK(message: QueryDenomHashRequest): QueryDenomHashRequestSDKType;
    fromAmino(object: QueryDenomHashRequestAmino): QueryDenomHashRequest;
    toAmino(message: QueryDenomHashRequest): QueryDenomHashRequestAmino;
    fromAminoMsg(object: QueryDenomHashRequestAminoMsg): QueryDenomHashRequest;
    toAminoMsg(message: QueryDenomHashRequest): QueryDenomHashRequestAminoMsg;
    fromProtoMsg(message: QueryDenomHashRequestProtoMsg): QueryDenomHashRequest;
    toProto(message: QueryDenomHashRequest): Uint8Array;
    toProtoMsg(message: QueryDenomHashRequest): QueryDenomHashRequestProtoMsg;
};
export declare const QueryDenomHashResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomHashResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomHashResponse;
    fromJSON(object: any): QueryDenomHashResponse;
    toJSON(message: QueryDenomHashResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomHashResponse>): QueryDenomHashResponse;
    fromSDK(object: QueryDenomHashResponseSDKType): QueryDenomHashResponse;
    toSDK(message: QueryDenomHashResponse): QueryDenomHashResponseSDKType;
    fromAmino(object: QueryDenomHashResponseAmino): QueryDenomHashResponse;
    toAmino(message: QueryDenomHashResponse): QueryDenomHashResponseAmino;
    fromAminoMsg(object: QueryDenomHashResponseAminoMsg): QueryDenomHashResponse;
    toAminoMsg(message: QueryDenomHashResponse): QueryDenomHashResponseAminoMsg;
    fromProtoMsg(message: QueryDenomHashResponseProtoMsg): QueryDenomHashResponse;
    toProto(message: QueryDenomHashResponse): Uint8Array;
    toProtoMsg(message: QueryDenomHashResponse): QueryDenomHashResponseProtoMsg;
};
export declare const QueryEscrowAddressRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryEscrowAddressRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEscrowAddressRequest;
    fromJSON(object: any): QueryEscrowAddressRequest;
    toJSON(message: QueryEscrowAddressRequest): unknown;
    fromPartial(object: DeepPartial<QueryEscrowAddressRequest>): QueryEscrowAddressRequest;
    fromSDK(object: QueryEscrowAddressRequestSDKType): QueryEscrowAddressRequest;
    toSDK(message: QueryEscrowAddressRequest): QueryEscrowAddressRequestSDKType;
    fromAmino(object: QueryEscrowAddressRequestAmino): QueryEscrowAddressRequest;
    toAmino(message: QueryEscrowAddressRequest): QueryEscrowAddressRequestAmino;
    fromAminoMsg(object: QueryEscrowAddressRequestAminoMsg): QueryEscrowAddressRequest;
    toAminoMsg(message: QueryEscrowAddressRequest): QueryEscrowAddressRequestAminoMsg;
    fromProtoMsg(message: QueryEscrowAddressRequestProtoMsg): QueryEscrowAddressRequest;
    toProto(message: QueryEscrowAddressRequest): Uint8Array;
    toProtoMsg(message: QueryEscrowAddressRequest): QueryEscrowAddressRequestProtoMsg;
};
export declare const QueryEscrowAddressResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryEscrowAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryEscrowAddressResponse;
    fromJSON(object: any): QueryEscrowAddressResponse;
    toJSON(message: QueryEscrowAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryEscrowAddressResponse>): QueryEscrowAddressResponse;
    fromSDK(object: QueryEscrowAddressResponseSDKType): QueryEscrowAddressResponse;
    toSDK(message: QueryEscrowAddressResponse): QueryEscrowAddressResponseSDKType;
    fromAmino(object: QueryEscrowAddressResponseAmino): QueryEscrowAddressResponse;
    toAmino(message: QueryEscrowAddressResponse): QueryEscrowAddressResponseAmino;
    fromAminoMsg(object: QueryEscrowAddressResponseAminoMsg): QueryEscrowAddressResponse;
    toAminoMsg(message: QueryEscrowAddressResponse): QueryEscrowAddressResponseAminoMsg;
    fromProtoMsg(message: QueryEscrowAddressResponseProtoMsg): QueryEscrowAddressResponse;
    toProto(message: QueryEscrowAddressResponse): Uint8Array;
    toProtoMsg(message: QueryEscrowAddressResponse): QueryEscrowAddressResponseProtoMsg;
};
export declare const QueryTotalEscrowForDenomRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTotalEscrowForDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalEscrowForDenomRequest;
    fromJSON(object: any): QueryTotalEscrowForDenomRequest;
    toJSON(message: QueryTotalEscrowForDenomRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalEscrowForDenomRequest>): QueryTotalEscrowForDenomRequest;
    fromSDK(object: QueryTotalEscrowForDenomRequestSDKType): QueryTotalEscrowForDenomRequest;
    toSDK(message: QueryTotalEscrowForDenomRequest): QueryTotalEscrowForDenomRequestSDKType;
    fromAmino(object: QueryTotalEscrowForDenomRequestAmino): QueryTotalEscrowForDenomRequest;
    toAmino(message: QueryTotalEscrowForDenomRequest): QueryTotalEscrowForDenomRequestAmino;
    fromAminoMsg(object: QueryTotalEscrowForDenomRequestAminoMsg): QueryTotalEscrowForDenomRequest;
    toAminoMsg(message: QueryTotalEscrowForDenomRequest): QueryTotalEscrowForDenomRequestAminoMsg;
    fromProtoMsg(message: QueryTotalEscrowForDenomRequestProtoMsg): QueryTotalEscrowForDenomRequest;
    toProto(message: QueryTotalEscrowForDenomRequest): Uint8Array;
    toProtoMsg(message: QueryTotalEscrowForDenomRequest): QueryTotalEscrowForDenomRequestProtoMsg;
};
export declare const QueryTotalEscrowForDenomResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTotalEscrowForDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalEscrowForDenomResponse;
    fromJSON(object: any): QueryTotalEscrowForDenomResponse;
    toJSON(message: QueryTotalEscrowForDenomResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalEscrowForDenomResponse>): QueryTotalEscrowForDenomResponse;
    fromSDK(object: QueryTotalEscrowForDenomResponseSDKType): QueryTotalEscrowForDenomResponse;
    toSDK(message: QueryTotalEscrowForDenomResponse): QueryTotalEscrowForDenomResponseSDKType;
    fromAmino(object: QueryTotalEscrowForDenomResponseAmino): QueryTotalEscrowForDenomResponse;
    toAmino(message: QueryTotalEscrowForDenomResponse): QueryTotalEscrowForDenomResponseAmino;
    fromAminoMsg(object: QueryTotalEscrowForDenomResponseAminoMsg): QueryTotalEscrowForDenomResponse;
    toAminoMsg(message: QueryTotalEscrowForDenomResponse): QueryTotalEscrowForDenomResponseAminoMsg;
    fromProtoMsg(message: QueryTotalEscrowForDenomResponseProtoMsg): QueryTotalEscrowForDenomResponse;
    toProto(message: QueryTotalEscrowForDenomResponse): Uint8Array;
    toProtoMsg(message: QueryTotalEscrowForDenomResponse): QueryTotalEscrowForDenomResponseProtoMsg;
};

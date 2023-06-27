import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType, Metadata, MetadataAmino, MetadataSDKType } from "./bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QueryBalanceRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryBalanceRequest";
    value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestAmino {
    /** address is the address to query balances for. */
    address: string;
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QueryBalanceRequestAminoMsg {
    type: "cosmos-sdk/QueryBalanceRequest";
    value: QueryBalanceRequestAmino;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequestSDKType {
    address: string;
    denom: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
    /** balance is the balance of the coin. */
    balance: Coin;
}
export interface QueryBalanceResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryBalanceResponse";
    value: Uint8Array;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseAmino {
    /** balance is the balance of the coin. */
    balance?: CoinAmino;
}
export interface QueryBalanceResponseAminoMsg {
    type: "cosmos-sdk/QueryBalanceResponse";
    value: QueryBalanceResponseAmino;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponseSDKType {
    balance: CoinSDKType;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequest {
    /** address is the address to query balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryAllBalancesRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesRequest";
    value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequestAmino {
    /** address is the address to query balances for. */
    address: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryAllBalancesRequestAminoMsg {
    type: "cosmos-sdk/QueryAllBalancesRequest";
    value: QueryAllBalancesRequestAmino;
}
/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequestSDKType {
    address: string;
    pagination: PageRequestSDKType;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponse {
    /** balances is the balances of all the coins. */
    balances: Coin[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryAllBalancesResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryAllBalancesResponse";
    value: Uint8Array;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponseAmino {
    /** balances is the balances of all the coins. */
    balances: CoinAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryAllBalancesResponseAminoMsg {
    type: "cosmos-sdk/QueryAllBalancesResponse";
    value: QueryAllBalancesResponseAmino;
}
/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponseSDKType {
    balances: CoinSDKType[];
    pagination: PageResponseSDKType;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequest {
    /**
     * pagination defines an optional pagination for the request.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination: PageRequest;
}
export interface QueryTotalSupplyRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyRequest";
    value: Uint8Array;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequestAmino {
    /**
     * pagination defines an optional pagination for the request.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageRequestAmino;
}
export interface QueryTotalSupplyRequestAminoMsg {
    type: "cosmos-sdk/QueryTotalSupplyRequest";
    value: QueryTotalSupplyRequestAmino;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequestSDKType {
    pagination: PageRequestSDKType;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponse {
    /** supply is the supply of the coins */
    supply: Coin[];
    /**
     * pagination defines the pagination in the response.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination: PageResponse;
}
export interface QueryTotalSupplyResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyResponse";
    value: Uint8Array;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponseAmino {
    /** supply is the supply of the coins */
    supply: CoinAmino[];
    /**
     * pagination defines the pagination in the response.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageResponseAmino;
}
export interface QueryTotalSupplyResponseAminoMsg {
    type: "cosmos-sdk/QueryTotalSupplyResponse";
    value: QueryTotalSupplyResponseAmino;
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponseSDKType {
    supply: CoinSDKType[];
    pagination: PageResponseSDKType;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QuerySupplyOfRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfRequest";
    value: Uint8Array;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequestAmino {
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QuerySupplyOfRequestAminoMsg {
    type: "cosmos-sdk/QuerySupplyOfRequest";
    value: QuerySupplyOfRequestAmino;
}
/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequestSDKType {
    denom: string;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
    /** amount is the supply of the coin. */
    amount: Coin;
}
export interface QuerySupplyOfResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfResponse";
    value: Uint8Array;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponseAmino {
    /** amount is the supply of the coin. */
    amount?: CoinAmino;
}
export interface QuerySupplyOfResponseAminoMsg {
    type: "cosmos-sdk/QuerySupplyOfResponse";
    value: QuerySupplyOfResponseAmino;
}
/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponseSDKType {
    amount: CoinSDKType;
}
/**
 * QueryTotalSupplyWithoutOffsetRequest is the request type for the Query/TotalSupplyWithoutOffset RPC
 * method.
 */
export interface QueryTotalSupplyWithoutOffsetRequest {
    /**
     * pagination defines an optional pagination for the request.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination: PageRequest;
}
export interface QueryTotalSupplyWithoutOffsetRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyWithoutOffsetRequest";
    value: Uint8Array;
}
/**
 * QueryTotalSupplyWithoutOffsetRequest is the request type for the Query/TotalSupplyWithoutOffset RPC
 * method.
 */
export interface QueryTotalSupplyWithoutOffsetRequestAmino {
    /**
     * pagination defines an optional pagination for the request.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageRequestAmino;
}
export interface QueryTotalSupplyWithoutOffsetRequestAminoMsg {
    type: "cosmos-sdk/QueryTotalSupplyWithoutOffsetRequest";
    value: QueryTotalSupplyWithoutOffsetRequestAmino;
}
/**
 * QueryTotalSupplyWithoutOffsetRequest is the request type for the Query/TotalSupplyWithoutOffset RPC
 * method.
 */
export interface QueryTotalSupplyWithoutOffsetRequestSDKType {
    pagination: PageRequestSDKType;
}
/**
 * QueryTotalSupplyWithoutOffsetResponse is the response type for the Query/TotalSupplyWithoutOffset RPC
 * method
 */
export interface QueryTotalSupplyWithoutOffsetResponse {
    /** supply is the supply of the coins */
    supply: Coin[];
    /**
     * pagination defines the pagination in the response.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination: PageResponse;
}
export interface QueryTotalSupplyWithoutOffsetResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryTotalSupplyWithoutOffsetResponse";
    value: Uint8Array;
}
/**
 * QueryTotalSupplyWithoutOffsetResponse is the response type for the Query/TotalSupplyWithoutOffset RPC
 * method
 */
export interface QueryTotalSupplyWithoutOffsetResponseAmino {
    /** supply is the supply of the coins */
    supply: CoinAmino[];
    /**
     * pagination defines the pagination in the response.
     *
     * Since: cosmos-sdk 0.43
     */
    pagination?: PageResponseAmino;
}
export interface QueryTotalSupplyWithoutOffsetResponseAminoMsg {
    type: "cosmos-sdk/QueryTotalSupplyWithoutOffsetResponse";
    value: QueryTotalSupplyWithoutOffsetResponseAmino;
}
/**
 * QueryTotalSupplyWithoutOffsetResponse is the response type for the Query/TotalSupplyWithoutOffset RPC
 * method
 */
export interface QueryTotalSupplyWithoutOffsetResponseSDKType {
    supply: CoinSDKType[];
    pagination: PageResponseSDKType;
}
/** QuerySupplyOfWithoutOffsetRequest is the request type for the Query/SupplyOfWithoutOffset RPC method. */
export interface QuerySupplyOfWithoutOffsetRequest {
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QuerySupplyOfWithoutOffsetRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfWithoutOffsetRequest";
    value: Uint8Array;
}
/** QuerySupplyOfWithoutOffsetRequest is the request type for the Query/SupplyOfWithoutOffset RPC method. */
export interface QuerySupplyOfWithoutOffsetRequestAmino {
    /** denom is the coin denom to query balances for. */
    denom: string;
}
export interface QuerySupplyOfWithoutOffsetRequestAminoMsg {
    type: "cosmos-sdk/QuerySupplyOfWithoutOffsetRequest";
    value: QuerySupplyOfWithoutOffsetRequestAmino;
}
/** QuerySupplyOfWithoutOffsetRequest is the request type for the Query/SupplyOfWithoutOffset RPC method. */
export interface QuerySupplyOfWithoutOffsetRequestSDKType {
    denom: string;
}
/** QuerySupplyOfWithoutOffsetResponse is the response type for the Query/SupplyOfWithoutOffset RPC method. */
export interface QuerySupplyOfWithoutOffsetResponse {
    /** amount is the supply of the coin. */
    amount: Coin;
}
export interface QuerySupplyOfWithoutOffsetResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QuerySupplyOfWithoutOffsetResponse";
    value: Uint8Array;
}
/** QuerySupplyOfWithoutOffsetResponse is the response type for the Query/SupplyOfWithoutOffset RPC method. */
export interface QuerySupplyOfWithoutOffsetResponseAmino {
    /** amount is the supply of the coin. */
    amount?: CoinAmino;
}
export interface QuerySupplyOfWithoutOffsetResponseAminoMsg {
    type: "cosmos-sdk/QuerySupplyOfWithoutOffsetResponse";
    value: QuerySupplyOfWithoutOffsetResponseAmino;
}
/** QuerySupplyOfWithoutOffsetResponse is the response type for the Query/SupplyOfWithoutOffset RPC method. */
export interface QuerySupplyOfWithoutOffsetResponseSDKType {
    amount: CoinSDKType;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryDenomsMetadataRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataRequest";
    value: Uint8Array;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryDenomsMetadataRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomsMetadataRequest";
    value: QueryDenomsMetadataRequestAmino;
}
/** QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method. */
export interface QueryDenomsMetadataRequestSDKType {
    pagination: PageRequestSDKType;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponse {
    /** metadata provides the client information for all the registered tokens. */
    metadatas: Metadata[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryDenomsMetadataResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomsMetadataResponse";
    value: Uint8Array;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponseAmino {
    /** metadata provides the client information for all the registered tokens. */
    metadatas: MetadataAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryDenomsMetadataResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomsMetadataResponse";
    value: QueryDenomsMetadataResponseAmino;
}
/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 */
export interface QueryDenomsMetadataResponseSDKType {
    metadatas: MetadataSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequest {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
export interface QueryDenomMetadataRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataRequest";
    value: Uint8Array;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequestAmino {
    /** denom is the coin denom to query the metadata for. */
    denom: string;
}
export interface QueryDenomMetadataRequestAminoMsg {
    type: "cosmos-sdk/QueryDenomMetadataRequest";
    value: QueryDenomMetadataRequestAmino;
}
/** QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method. */
export interface QueryDenomMetadataRequestSDKType {
    denom: string;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponse {
    /** metadata describes and provides all the client information for the requested token. */
    metadata: Metadata;
}
export interface QueryDenomMetadataResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryDenomMetadataResponse";
    value: Uint8Array;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponseAmino {
    /** metadata describes and provides all the client information for the requested token. */
    metadata?: MetadataAmino;
}
export interface QueryDenomMetadataResponseAminoMsg {
    type: "cosmos-sdk/QueryDenomMetadataResponse";
    value: QueryDenomMetadataResponseAmino;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 */
export interface QueryDenomMetadataResponseSDKType {
    metadata: MetadataSDKType;
}
/** QueryBaseDenomRequest defines the request type for the BaseDenom gRPC method. */
export interface QueryBaseDenomRequest {
    denom: string;
}
export interface QueryBaseDenomRequestProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryBaseDenomRequest";
    value: Uint8Array;
}
/** QueryBaseDenomRequest defines the request type for the BaseDenom gRPC method. */
export interface QueryBaseDenomRequestAmino {
    denom: string;
}
export interface QueryBaseDenomRequestAminoMsg {
    type: "cosmos-sdk/QueryBaseDenomRequest";
    value: QueryBaseDenomRequestAmino;
}
/** QueryBaseDenomRequest defines the request type for the BaseDenom gRPC method. */
export interface QueryBaseDenomRequestSDKType {
    denom: string;
}
/** QueryBaseDenomResponse defines the response type for the BaseDenom gRPC method. */
export interface QueryBaseDenomResponse {
    baseDenom: string;
}
export interface QueryBaseDenomResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.QueryBaseDenomResponse";
    value: Uint8Array;
}
/** QueryBaseDenomResponse defines the response type for the BaseDenom gRPC method. */
export interface QueryBaseDenomResponseAmino {
    base_denom: string;
}
export interface QueryBaseDenomResponseAminoMsg {
    type: "cosmos-sdk/QueryBaseDenomResponse";
    value: QueryBaseDenomResponseAmino;
}
/** QueryBaseDenomResponse defines the response type for the BaseDenom gRPC method. */
export interface QueryBaseDenomResponseSDKType {
    base_denom: string;
}
export declare const QueryBalanceRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryBalanceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest;
    fromJSON(object: any): QueryBalanceRequest;
    toJSON(message: QueryBalanceRequest): unknown;
    fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest;
    fromSDK(object: QueryBalanceRequestSDKType): QueryBalanceRequest;
    toSDK(message: QueryBalanceRequest): QueryBalanceRequestSDKType;
    fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest;
    toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino;
    fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest;
    toAminoMsg(message: QueryBalanceRequest): QueryBalanceRequestAminoMsg;
    fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest;
    toProto(message: QueryBalanceRequest): Uint8Array;
    toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg;
};
export declare const QueryBalanceResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryBalanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse;
    fromJSON(object: any): QueryBalanceResponse;
    toJSON(message: QueryBalanceResponse): unknown;
    fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse;
    fromSDK(object: QueryBalanceResponseSDKType): QueryBalanceResponse;
    toSDK(message: QueryBalanceResponse): QueryBalanceResponseSDKType;
    fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse;
    toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino;
    fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse;
    toAminoMsg(message: QueryBalanceResponse): QueryBalanceResponseAminoMsg;
    fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse;
    toProto(message: QueryBalanceResponse): Uint8Array;
    toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg;
};
export declare const QueryAllBalancesRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAllBalancesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBalancesRequest;
    fromJSON(object: any): QueryAllBalancesRequest;
    toJSON(message: QueryAllBalancesRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllBalancesRequest>): QueryAllBalancesRequest;
    fromSDK(object: QueryAllBalancesRequestSDKType): QueryAllBalancesRequest;
    toSDK(message: QueryAllBalancesRequest): QueryAllBalancesRequestSDKType;
    fromAmino(object: QueryAllBalancesRequestAmino): QueryAllBalancesRequest;
    toAmino(message: QueryAllBalancesRequest): QueryAllBalancesRequestAmino;
    fromAminoMsg(object: QueryAllBalancesRequestAminoMsg): QueryAllBalancesRequest;
    toAminoMsg(message: QueryAllBalancesRequest): QueryAllBalancesRequestAminoMsg;
    fromProtoMsg(message: QueryAllBalancesRequestProtoMsg): QueryAllBalancesRequest;
    toProto(message: QueryAllBalancesRequest): Uint8Array;
    toProtoMsg(message: QueryAllBalancesRequest): QueryAllBalancesRequestProtoMsg;
};
export declare const QueryAllBalancesResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAllBalancesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBalancesResponse;
    fromJSON(object: any): QueryAllBalancesResponse;
    toJSON(message: QueryAllBalancesResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllBalancesResponse>): QueryAllBalancesResponse;
    fromSDK(object: QueryAllBalancesResponseSDKType): QueryAllBalancesResponse;
    toSDK(message: QueryAllBalancesResponse): QueryAllBalancesResponseSDKType;
    fromAmino(object: QueryAllBalancesResponseAmino): QueryAllBalancesResponse;
    toAmino(message: QueryAllBalancesResponse): QueryAllBalancesResponseAmino;
    fromAminoMsg(object: QueryAllBalancesResponseAminoMsg): QueryAllBalancesResponse;
    toAminoMsg(message: QueryAllBalancesResponse): QueryAllBalancesResponseAminoMsg;
    fromProtoMsg(message: QueryAllBalancesResponseProtoMsg): QueryAllBalancesResponse;
    toProto(message: QueryAllBalancesResponse): Uint8Array;
    toProtoMsg(message: QueryAllBalancesResponse): QueryAllBalancesResponseProtoMsg;
};
export declare const QueryTotalSupplyRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTotalSupplyRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyRequest;
    fromJSON(object: any): QueryTotalSupplyRequest;
    toJSON(message: QueryTotalSupplyRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest;
    fromSDK(object: QueryTotalSupplyRequestSDKType): QueryTotalSupplyRequest;
    toSDK(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestSDKType;
    fromAmino(object: QueryTotalSupplyRequestAmino): QueryTotalSupplyRequest;
    toAmino(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestAmino;
    fromAminoMsg(object: QueryTotalSupplyRequestAminoMsg): QueryTotalSupplyRequest;
    toAminoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestAminoMsg;
    fromProtoMsg(message: QueryTotalSupplyRequestProtoMsg): QueryTotalSupplyRequest;
    toProto(message: QueryTotalSupplyRequest): Uint8Array;
    toProtoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestProtoMsg;
};
export declare const QueryTotalSupplyResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTotalSupplyResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyResponse;
    fromJSON(object: any): QueryTotalSupplyResponse;
    toJSON(message: QueryTotalSupplyResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse;
    fromSDK(object: QueryTotalSupplyResponseSDKType): QueryTotalSupplyResponse;
    toSDK(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseSDKType;
    fromAmino(object: QueryTotalSupplyResponseAmino): QueryTotalSupplyResponse;
    toAmino(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAmino;
    fromAminoMsg(object: QueryTotalSupplyResponseAminoMsg): QueryTotalSupplyResponse;
    toAminoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAminoMsg;
    fromProtoMsg(message: QueryTotalSupplyResponseProtoMsg): QueryTotalSupplyResponse;
    toProto(message: QueryTotalSupplyResponse): Uint8Array;
    toProtoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseProtoMsg;
};
export declare const QuerySupplyOfRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QuerySupplyOfRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfRequest;
    fromJSON(object: any): QuerySupplyOfRequest;
    toJSON(message: QuerySupplyOfRequest): unknown;
    fromPartial(object: DeepPartial<QuerySupplyOfRequest>): QuerySupplyOfRequest;
    fromSDK(object: QuerySupplyOfRequestSDKType): QuerySupplyOfRequest;
    toSDK(message: QuerySupplyOfRequest): QuerySupplyOfRequestSDKType;
    fromAmino(object: QuerySupplyOfRequestAmino): QuerySupplyOfRequest;
    toAmino(message: QuerySupplyOfRequest): QuerySupplyOfRequestAmino;
    fromAminoMsg(object: QuerySupplyOfRequestAminoMsg): QuerySupplyOfRequest;
    toAminoMsg(message: QuerySupplyOfRequest): QuerySupplyOfRequestAminoMsg;
    fromProtoMsg(message: QuerySupplyOfRequestProtoMsg): QuerySupplyOfRequest;
    toProto(message: QuerySupplyOfRequest): Uint8Array;
    toProtoMsg(message: QuerySupplyOfRequest): QuerySupplyOfRequestProtoMsg;
};
export declare const QuerySupplyOfResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QuerySupplyOfResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfResponse;
    fromJSON(object: any): QuerySupplyOfResponse;
    toJSON(message: QuerySupplyOfResponse): unknown;
    fromPartial(object: DeepPartial<QuerySupplyOfResponse>): QuerySupplyOfResponse;
    fromSDK(object: QuerySupplyOfResponseSDKType): QuerySupplyOfResponse;
    toSDK(message: QuerySupplyOfResponse): QuerySupplyOfResponseSDKType;
    fromAmino(object: QuerySupplyOfResponseAmino): QuerySupplyOfResponse;
    toAmino(message: QuerySupplyOfResponse): QuerySupplyOfResponseAmino;
    fromAminoMsg(object: QuerySupplyOfResponseAminoMsg): QuerySupplyOfResponse;
    toAminoMsg(message: QuerySupplyOfResponse): QuerySupplyOfResponseAminoMsg;
    fromProtoMsg(message: QuerySupplyOfResponseProtoMsg): QuerySupplyOfResponse;
    toProto(message: QuerySupplyOfResponse): Uint8Array;
    toProtoMsg(message: QuerySupplyOfResponse): QuerySupplyOfResponseProtoMsg;
};
export declare const QueryTotalSupplyWithoutOffsetRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTotalSupplyWithoutOffsetRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyWithoutOffsetRequest;
    fromJSON(object: any): QueryTotalSupplyWithoutOffsetRequest;
    toJSON(message: QueryTotalSupplyWithoutOffsetRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalSupplyWithoutOffsetRequest>): QueryTotalSupplyWithoutOffsetRequest;
    fromSDK(object: QueryTotalSupplyWithoutOffsetRequestSDKType): QueryTotalSupplyWithoutOffsetRequest;
    toSDK(message: QueryTotalSupplyWithoutOffsetRequest): QueryTotalSupplyWithoutOffsetRequestSDKType;
    fromAmino(object: QueryTotalSupplyWithoutOffsetRequestAmino): QueryTotalSupplyWithoutOffsetRequest;
    toAmino(message: QueryTotalSupplyWithoutOffsetRequest): QueryTotalSupplyWithoutOffsetRequestAmino;
    fromAminoMsg(object: QueryTotalSupplyWithoutOffsetRequestAminoMsg): QueryTotalSupplyWithoutOffsetRequest;
    toAminoMsg(message: QueryTotalSupplyWithoutOffsetRequest): QueryTotalSupplyWithoutOffsetRequestAminoMsg;
    fromProtoMsg(message: QueryTotalSupplyWithoutOffsetRequestProtoMsg): QueryTotalSupplyWithoutOffsetRequest;
    toProto(message: QueryTotalSupplyWithoutOffsetRequest): Uint8Array;
    toProtoMsg(message: QueryTotalSupplyWithoutOffsetRequest): QueryTotalSupplyWithoutOffsetRequestProtoMsg;
};
export declare const QueryTotalSupplyWithoutOffsetResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTotalSupplyWithoutOffsetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyWithoutOffsetResponse;
    fromJSON(object: any): QueryTotalSupplyWithoutOffsetResponse;
    toJSON(message: QueryTotalSupplyWithoutOffsetResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalSupplyWithoutOffsetResponse>): QueryTotalSupplyWithoutOffsetResponse;
    fromSDK(object: QueryTotalSupplyWithoutOffsetResponseSDKType): QueryTotalSupplyWithoutOffsetResponse;
    toSDK(message: QueryTotalSupplyWithoutOffsetResponse): QueryTotalSupplyWithoutOffsetResponseSDKType;
    fromAmino(object: QueryTotalSupplyWithoutOffsetResponseAmino): QueryTotalSupplyWithoutOffsetResponse;
    toAmino(message: QueryTotalSupplyWithoutOffsetResponse): QueryTotalSupplyWithoutOffsetResponseAmino;
    fromAminoMsg(object: QueryTotalSupplyWithoutOffsetResponseAminoMsg): QueryTotalSupplyWithoutOffsetResponse;
    toAminoMsg(message: QueryTotalSupplyWithoutOffsetResponse): QueryTotalSupplyWithoutOffsetResponseAminoMsg;
    fromProtoMsg(message: QueryTotalSupplyWithoutOffsetResponseProtoMsg): QueryTotalSupplyWithoutOffsetResponse;
    toProto(message: QueryTotalSupplyWithoutOffsetResponse): Uint8Array;
    toProtoMsg(message: QueryTotalSupplyWithoutOffsetResponse): QueryTotalSupplyWithoutOffsetResponseProtoMsg;
};
export declare const QuerySupplyOfWithoutOffsetRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QuerySupplyOfWithoutOffsetRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfWithoutOffsetRequest;
    fromJSON(object: any): QuerySupplyOfWithoutOffsetRequest;
    toJSON(message: QuerySupplyOfWithoutOffsetRequest): unknown;
    fromPartial(object: DeepPartial<QuerySupplyOfWithoutOffsetRequest>): QuerySupplyOfWithoutOffsetRequest;
    fromSDK(object: QuerySupplyOfWithoutOffsetRequestSDKType): QuerySupplyOfWithoutOffsetRequest;
    toSDK(message: QuerySupplyOfWithoutOffsetRequest): QuerySupplyOfWithoutOffsetRequestSDKType;
    fromAmino(object: QuerySupplyOfWithoutOffsetRequestAmino): QuerySupplyOfWithoutOffsetRequest;
    toAmino(message: QuerySupplyOfWithoutOffsetRequest): QuerySupplyOfWithoutOffsetRequestAmino;
    fromAminoMsg(object: QuerySupplyOfWithoutOffsetRequestAminoMsg): QuerySupplyOfWithoutOffsetRequest;
    toAminoMsg(message: QuerySupplyOfWithoutOffsetRequest): QuerySupplyOfWithoutOffsetRequestAminoMsg;
    fromProtoMsg(message: QuerySupplyOfWithoutOffsetRequestProtoMsg): QuerySupplyOfWithoutOffsetRequest;
    toProto(message: QuerySupplyOfWithoutOffsetRequest): Uint8Array;
    toProtoMsg(message: QuerySupplyOfWithoutOffsetRequest): QuerySupplyOfWithoutOffsetRequestProtoMsg;
};
export declare const QuerySupplyOfWithoutOffsetResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QuerySupplyOfWithoutOffsetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfWithoutOffsetResponse;
    fromJSON(object: any): QuerySupplyOfWithoutOffsetResponse;
    toJSON(message: QuerySupplyOfWithoutOffsetResponse): unknown;
    fromPartial(object: DeepPartial<QuerySupplyOfWithoutOffsetResponse>): QuerySupplyOfWithoutOffsetResponse;
    fromSDK(object: QuerySupplyOfWithoutOffsetResponseSDKType): QuerySupplyOfWithoutOffsetResponse;
    toSDK(message: QuerySupplyOfWithoutOffsetResponse): QuerySupplyOfWithoutOffsetResponseSDKType;
    fromAmino(object: QuerySupplyOfWithoutOffsetResponseAmino): QuerySupplyOfWithoutOffsetResponse;
    toAmino(message: QuerySupplyOfWithoutOffsetResponse): QuerySupplyOfWithoutOffsetResponseAmino;
    fromAminoMsg(object: QuerySupplyOfWithoutOffsetResponseAminoMsg): QuerySupplyOfWithoutOffsetResponse;
    toAminoMsg(message: QuerySupplyOfWithoutOffsetResponse): QuerySupplyOfWithoutOffsetResponseAminoMsg;
    fromProtoMsg(message: QuerySupplyOfWithoutOffsetResponseProtoMsg): QuerySupplyOfWithoutOffsetResponse;
    toProto(message: QuerySupplyOfWithoutOffsetResponse): Uint8Array;
    toProtoMsg(message: QuerySupplyOfWithoutOffsetResponse): QuerySupplyOfWithoutOffsetResponseProtoMsg;
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
export declare const QueryDenomsMetadataRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomsMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsMetadataRequest;
    fromJSON(object: any): QueryDenomsMetadataRequest;
    toJSON(message: QueryDenomsMetadataRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomsMetadataRequest>): QueryDenomsMetadataRequest;
    fromSDK(object: QueryDenomsMetadataRequestSDKType): QueryDenomsMetadataRequest;
    toSDK(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestSDKType;
    fromAmino(object: QueryDenomsMetadataRequestAmino): QueryDenomsMetadataRequest;
    toAmino(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestAmino;
    fromAminoMsg(object: QueryDenomsMetadataRequestAminoMsg): QueryDenomsMetadataRequest;
    toAminoMsg(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestAminoMsg;
    fromProtoMsg(message: QueryDenomsMetadataRequestProtoMsg): QueryDenomsMetadataRequest;
    toProto(message: QueryDenomsMetadataRequest): Uint8Array;
    toProtoMsg(message: QueryDenomsMetadataRequest): QueryDenomsMetadataRequestProtoMsg;
};
export declare const QueryDenomsMetadataResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomsMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsMetadataResponse;
    fromJSON(object: any): QueryDenomsMetadataResponse;
    toJSON(message: QueryDenomsMetadataResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomsMetadataResponse>): QueryDenomsMetadataResponse;
    fromSDK(object: QueryDenomsMetadataResponseSDKType): QueryDenomsMetadataResponse;
    toSDK(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseSDKType;
    fromAmino(object: QueryDenomsMetadataResponseAmino): QueryDenomsMetadataResponse;
    toAmino(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseAmino;
    fromAminoMsg(object: QueryDenomsMetadataResponseAminoMsg): QueryDenomsMetadataResponse;
    toAminoMsg(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseAminoMsg;
    fromProtoMsg(message: QueryDenomsMetadataResponseProtoMsg): QueryDenomsMetadataResponse;
    toProto(message: QueryDenomsMetadataResponse): Uint8Array;
    toProtoMsg(message: QueryDenomsMetadataResponse): QueryDenomsMetadataResponseProtoMsg;
};
export declare const QueryDenomMetadataRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomMetadataRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataRequest;
    fromJSON(object: any): QueryDenomMetadataRequest;
    toJSON(message: QueryDenomMetadataRequest): unknown;
    fromPartial(object: DeepPartial<QueryDenomMetadataRequest>): QueryDenomMetadataRequest;
    fromSDK(object: QueryDenomMetadataRequestSDKType): QueryDenomMetadataRequest;
    toSDK(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestSDKType;
    fromAmino(object: QueryDenomMetadataRequestAmino): QueryDenomMetadataRequest;
    toAmino(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestAmino;
    fromAminoMsg(object: QueryDenomMetadataRequestAminoMsg): QueryDenomMetadataRequest;
    toAminoMsg(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestAminoMsg;
    fromProtoMsg(message: QueryDenomMetadataRequestProtoMsg): QueryDenomMetadataRequest;
    toProto(message: QueryDenomMetadataRequest): Uint8Array;
    toProtoMsg(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestProtoMsg;
};
export declare const QueryDenomMetadataResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryDenomMetadataResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataResponse;
    fromJSON(object: any): QueryDenomMetadataResponse;
    toJSON(message: QueryDenomMetadataResponse): unknown;
    fromPartial(object: DeepPartial<QueryDenomMetadataResponse>): QueryDenomMetadataResponse;
    fromSDK(object: QueryDenomMetadataResponseSDKType): QueryDenomMetadataResponse;
    toSDK(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseSDKType;
    fromAmino(object: QueryDenomMetadataResponseAmino): QueryDenomMetadataResponse;
    toAmino(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseAmino;
    fromAminoMsg(object: QueryDenomMetadataResponseAminoMsg): QueryDenomMetadataResponse;
    toAminoMsg(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseAminoMsg;
    fromProtoMsg(message: QueryDenomMetadataResponseProtoMsg): QueryDenomMetadataResponse;
    toProto(message: QueryDenomMetadataResponse): Uint8Array;
    toProtoMsg(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseProtoMsg;
};
export declare const QueryBaseDenomRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryBaseDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseDenomRequest;
    fromJSON(object: any): QueryBaseDenomRequest;
    toJSON(message: QueryBaseDenomRequest): unknown;
    fromPartial(object: DeepPartial<QueryBaseDenomRequest>): QueryBaseDenomRequest;
    fromSDK(object: QueryBaseDenomRequestSDKType): QueryBaseDenomRequest;
    toSDK(message: QueryBaseDenomRequest): QueryBaseDenomRequestSDKType;
    fromAmino(object: QueryBaseDenomRequestAmino): QueryBaseDenomRequest;
    toAmino(message: QueryBaseDenomRequest): QueryBaseDenomRequestAmino;
    fromAminoMsg(object: QueryBaseDenomRequestAminoMsg): QueryBaseDenomRequest;
    toAminoMsg(message: QueryBaseDenomRequest): QueryBaseDenomRequestAminoMsg;
    fromProtoMsg(message: QueryBaseDenomRequestProtoMsg): QueryBaseDenomRequest;
    toProto(message: QueryBaseDenomRequest): Uint8Array;
    toProtoMsg(message: QueryBaseDenomRequest): QueryBaseDenomRequestProtoMsg;
};
export declare const QueryBaseDenomResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryBaseDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryBaseDenomResponse;
    fromJSON(object: any): QueryBaseDenomResponse;
    toJSON(message: QueryBaseDenomResponse): unknown;
    fromPartial(object: DeepPartial<QueryBaseDenomResponse>): QueryBaseDenomResponse;
    fromSDK(object: QueryBaseDenomResponseSDKType): QueryBaseDenomResponse;
    toSDK(message: QueryBaseDenomResponse): QueryBaseDenomResponseSDKType;
    fromAmino(object: QueryBaseDenomResponseAmino): QueryBaseDenomResponse;
    toAmino(message: QueryBaseDenomResponse): QueryBaseDenomResponseAmino;
    fromAminoMsg(object: QueryBaseDenomResponseAminoMsg): QueryBaseDenomResponse;
    toAminoMsg(message: QueryBaseDenomResponse): QueryBaseDenomResponseAminoMsg;
    fromProtoMsg(message: QueryBaseDenomResponseProtoMsg): QueryBaseDenomResponse;
    toProto(message: QueryBaseDenomResponse): Uint8Array;
    toProtoMsg(message: QueryBaseDenomResponse): QueryBaseDenomResponseProtoMsg;
};

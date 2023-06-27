import { Rpc } from "../../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** DenomTrace queries a denomination trace information. */
    denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    /** DenomTraces queries all denomination traces. */
    denomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    /** Params queries all parameters of the ibc-transfer module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** DenomHash queries a denomination hash information. */
    denomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
    /** EscrowAddress returns the escrow address for a particular port and channel id. */
    escrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
    /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
    totalEscrowForDenom(request: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    denomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
    escrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
    totalEscrowForDenom(request: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    denomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
    escrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
    totalEscrowForDenom(request: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse>;
};
export interface UseDenomTraceQuery<TData> extends ReactQueryParams<QueryDenomTraceResponse, TData> {
    request: QueryDenomTraceRequest;
}
export interface UseDenomTracesQuery<TData> extends ReactQueryParams<QueryDenomTracesResponse, TData> {
    request?: QueryDenomTracesRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseDenomHashQuery<TData> extends ReactQueryParams<QueryDenomHashResponse, TData> {
    request: QueryDenomHashRequest;
}
export interface UseEscrowAddressQuery<TData> extends ReactQueryParams<QueryEscrowAddressResponse, TData> {
    request: QueryEscrowAddressRequest;
}
export interface UseTotalEscrowForDenomQuery<TData> extends ReactQueryParams<QueryTotalEscrowForDenomResponse, TData> {
    request: QueryTotalEscrowForDenomRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** DenomTrace queries a denomination trace information. */ useDenomTrace: <TData = QueryDenomTraceResponse>({ request, options }: UseDenomTraceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** DenomTraces queries all denomination traces. */ useDenomTraces: <TData_1 = QueryDenomTracesResponse>({ request, options }: UseDenomTracesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** Params queries all parameters of the ibc-transfer module. */ useParams: <TData_2 = QueryParamsResponse>({ request, options }: UseParamsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** DenomHash queries a denomination hash information. */ useDenomHash: <TData_3 = QueryDenomHashResponse>({ request, options }: UseDenomHashQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** EscrowAddress returns the escrow address for a particular port and channel id. */ useEscrowAddress: <TData_4 = QueryEscrowAddressResponse>({ request, options }: UseEscrowAddressQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */ useTotalEscrowForDenom: <TData_5 = QueryTotalEscrowForDenomResponse>({ request, options }: UseTotalEscrowForDenomQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
};

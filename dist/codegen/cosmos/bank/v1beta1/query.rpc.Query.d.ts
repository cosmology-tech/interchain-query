import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryTotalSupplyWithoutOffsetRequest, QueryTotalSupplyWithoutOffsetResponse, QuerySupplyOfWithoutOffsetRequest, QuerySupplyOfWithoutOffsetResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Balance queries the balance of a single coin for a single account. */
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /** AllBalances queries the balance of all coins for a single account. */
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    /** TotalSupply queries the total supply of all coins. */
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    /** SupplyOf queries the supply of a single coin. */
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    /** TotalSupplyWithoutOffset queries the total supply of all coins. */
    totalSupplyWithoutOffset(request?: QueryTotalSupplyWithoutOffsetRequest): Promise<QueryTotalSupplyWithoutOffsetResponse>;
    /** SupplyOf queries the supply of a single coin. */
    supplyOfWithoutOffset(request: QuerySupplyOfWithoutOffsetRequest): Promise<QuerySupplyOfWithoutOffsetResponse>;
    /** Params queries the parameters of x/bank module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** DenomsMetadata queries the client metadata of a given coin denomination. */
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    /** DenomsMetadata queries the client metadata for all registered coin denominations. */
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
    /**
     * BaseDenom queries for a base denomination given a denom that can either be
     * the base denom itself or a metadata denom unit that maps to the base denom.
     */
    baseDenom(request: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    totalSupplyWithoutOffset(request?: QueryTotalSupplyWithoutOffsetRequest): Promise<QueryTotalSupplyWithoutOffsetResponse>;
    supplyOfWithoutOffset(request: QuerySupplyOfWithoutOffsetRequest): Promise<QuerySupplyOfWithoutOffsetResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
    baseDenom(request: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    totalSupplyWithoutOffset(request?: QueryTotalSupplyWithoutOffsetRequest): Promise<QueryTotalSupplyWithoutOffsetResponse>;
    supplyOfWithoutOffset(request: QuerySupplyOfWithoutOffsetRequest): Promise<QuerySupplyOfWithoutOffsetResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
    baseDenom(request: QueryBaseDenomRequest): Promise<QueryBaseDenomResponse>;
};
export interface UseBalanceQuery<TData> extends ReactQueryParams<QueryBalanceResponse, TData> {
    request: QueryBalanceRequest;
}
export interface UseAllBalancesQuery<TData> extends ReactQueryParams<QueryAllBalancesResponse, TData> {
    request: QueryAllBalancesRequest;
}
export interface UseTotalSupplyQuery<TData> extends ReactQueryParams<QueryTotalSupplyResponse, TData> {
    request?: QueryTotalSupplyRequest;
}
export interface UseSupplyOfQuery<TData> extends ReactQueryParams<QuerySupplyOfResponse, TData> {
    request: QuerySupplyOfRequest;
}
export interface UseTotalSupplyWithoutOffsetQuery<TData> extends ReactQueryParams<QueryTotalSupplyWithoutOffsetResponse, TData> {
    request?: QueryTotalSupplyWithoutOffsetRequest;
}
export interface UseSupplyOfWithoutOffsetQuery<TData> extends ReactQueryParams<QuerySupplyOfWithoutOffsetResponse, TData> {
    request: QuerySupplyOfWithoutOffsetRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseDenomMetadataQuery<TData> extends ReactQueryParams<QueryDenomMetadataResponse, TData> {
    request: QueryDenomMetadataRequest;
}
export interface UseDenomsMetadataQuery<TData> extends ReactQueryParams<QueryDenomsMetadataResponse, TData> {
    request?: QueryDenomsMetadataRequest;
}
export interface UseBaseDenomQuery<TData> extends ReactQueryParams<QueryBaseDenomResponse, TData> {
    request: QueryBaseDenomRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Balance queries the balance of a single coin for a single account. */ useBalance: <TData = QueryBalanceResponse>({ request, options }: UseBalanceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** AllBalances queries the balance of all coins for a single account. */ useAllBalances: <TData_1 = QueryAllBalancesResponse>({ request, options }: UseAllBalancesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** TotalSupply queries the total supply of all coins. */ useTotalSupply: <TData_2 = QueryTotalSupplyResponse>({ request, options }: UseTotalSupplyQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** SupplyOf queries the supply of a single coin. */ useSupplyOf: <TData_3 = QuerySupplyOfResponse>({ request, options }: UseSupplyOfQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** TotalSupplyWithoutOffset queries the total supply of all coins. */ useTotalSupplyWithoutOffset: <TData_4 = QueryTotalSupplyWithoutOffsetResponse>({ request, options }: UseTotalSupplyWithoutOffsetQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** SupplyOf queries the supply of a single coin. */ useSupplyOfWithoutOffset: <TData_5 = QuerySupplyOfWithoutOffsetResponse>({ request, options }: UseSupplyOfWithoutOffsetQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /** Params queries the parameters of x/bank module. */ useParams: <TData_6 = QueryParamsResponse>({ request, options }: UseParamsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /** DenomsMetadata queries the client metadata of a given coin denomination. */ useDenomMetadata: <TData_7 = QueryDenomMetadataResponse>({ request, options }: UseDenomMetadataQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
    /** DenomsMetadata queries the client metadata for all registered coin denominations. */ useDenomsMetadata: <TData_8 = QueryDenomsMetadataResponse>({ request, options }: UseDenomsMetadataQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
    /**
     * BaseDenom queries for a base denomination given a denom that can either be
     * the base denom itself or a metadata denom unit that maps to the base denom.
     */
    useBaseDenom: <TData_9 = QueryBaseDenomResponse>({ request, options }: UseBaseDenomQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
};

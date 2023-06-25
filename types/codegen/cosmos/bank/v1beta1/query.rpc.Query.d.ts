import { Rpc } from "../../../helpers";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Balance queries the balance of a single coin for a single account. */
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    /** AllBalances queries the balance of all coins for a single account. */
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    /**
     * SpendableBalances queries the spenable balance of all coins for a single
     * account.
     */
    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
    /** TotalSupply queries the total supply of all coins. */
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    /** SupplyOf queries the supply of a single coin. */
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    /** Params queries the parameters of x/bank module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** DenomsMetadata queries the client metadata of a given coin denomination. */
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     */
    denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
    denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
    allBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
    spendableBalances(request: QuerySpendableBalancesRequest): Promise<QuerySpendableBalancesResponse>;
    totalSupply(request?: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
    supplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
    denomsMetadata(request?: QueryDenomsMetadataRequest): Promise<QueryDenomsMetadataResponse>;
    denomOwners(request: QueryDenomOwnersRequest): Promise<QueryDenomOwnersResponse>;
};
export interface UseBalanceQuery<TData> extends ReactQueryParams<QueryBalanceResponse, TData> {
    request: QueryBalanceRequest;
}
export interface UseAllBalancesQuery<TData> extends ReactQueryParams<QueryAllBalancesResponse, TData> {
    request: QueryAllBalancesRequest;
}
export interface UseSpendableBalancesQuery<TData> extends ReactQueryParams<QuerySpendableBalancesResponse, TData> {
    request: QuerySpendableBalancesRequest;
}
export interface UseTotalSupplyQuery<TData> extends ReactQueryParams<QueryTotalSupplyResponse, TData> {
    request?: QueryTotalSupplyRequest;
}
export interface UseSupplyOfQuery<TData> extends ReactQueryParams<QuerySupplyOfResponse, TData> {
    request: QuerySupplyOfRequest;
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
export interface UseDenomOwnersQuery<TData> extends ReactQueryParams<QueryDenomOwnersResponse, TData> {
    request: QueryDenomOwnersRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Balance queries the balance of a single coin for a single account. */ useBalance: <TData = QueryBalanceResponse>({ request, options }: UseBalanceQuery<TData>) => any;
    /** AllBalances queries the balance of all coins for a single account. */ useAllBalances: <TData_1 = QueryAllBalancesResponse>({ request, options }: UseAllBalancesQuery<TData_1>) => any;
    /**
     * SpendableBalances queries the spenable balance of all coins for a single
     * account.
     */
    useSpendableBalances: <TData_2 = QuerySpendableBalancesResponse>({ request, options }: UseSpendableBalancesQuery<TData_2>) => any;
    /** TotalSupply queries the total supply of all coins. */ useTotalSupply: <TData_3 = QueryTotalSupplyResponse>({ request, options }: UseTotalSupplyQuery<TData_3>) => any;
    /** SupplyOf queries the supply of a single coin. */ useSupplyOf: <TData_4 = QuerySupplyOfResponse>({ request, options }: UseSupplyOfQuery<TData_4>) => any;
    /** Params queries the parameters of x/bank module. */ useParams: <TData_5 = QueryParamsResponse>({ request, options }: UseParamsQuery<TData_5>) => any;
    /** DenomsMetadata queries the client metadata of a given coin denomination. */ useDenomMetadata: <TData_6 = QueryDenomMetadataResponse>({ request, options }: UseDenomMetadataQuery<TData_6>) => any;
    /**
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    useDenomsMetadata: <TData_7 = QueryDenomsMetadataResponse>({ request, options }: UseDenomsMetadataQuery<TData_7>) => any;
    /**
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     */
    useDenomOwners: <TData_8 = QueryDenomOwnersResponse>({ request, options }: UseDenomOwnersQuery<TData_8>) => any;
};

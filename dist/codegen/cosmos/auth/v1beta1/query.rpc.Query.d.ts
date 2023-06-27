import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    /** Account returns account details based on address. */
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    /** Params queries all parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** ModuleAccounts returns all the existing module accounts. */
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
};
export interface UseAccountsQuery<TData> extends ReactQueryParams<QueryAccountsResponse, TData> {
    request?: QueryAccountsRequest;
}
export interface UseAccountQuery<TData> extends ReactQueryParams<QueryAccountResponse, TData> {
    request: QueryAccountRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseModuleAccountsQuery<TData> extends ReactQueryParams<QueryModuleAccountsResponse, TData> {
    request?: QueryModuleAccountsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    useAccounts: <TData = QueryAccountsResponse>({ request, options }: UseAccountsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** Account returns account details based on address. */ useAccount: <TData_1 = QueryAccountResponse>({ request, options }: UseAccountQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** Params queries all parameters. */ useParams: <TData_2 = QueryParamsResponse>({ request, options }: UseParamsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** ModuleAccounts returns all the existing module accounts. */ useModuleAccounts: <TData_3 = QueryModuleAccountsResponse>({ request, options }: UseModuleAccountsQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
};

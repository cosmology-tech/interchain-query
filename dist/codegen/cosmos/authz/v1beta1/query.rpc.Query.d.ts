import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
    /** GranterGrants returns list of `Authorization`, granted by granter. */
    granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse>;
    /** GranteeGrants returns a list of `GrantAuthorization` by grantee. */
    granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
    granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse>;
    granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
    granterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse>;
    granteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse>;
};
export interface UseGrantsQuery<TData> extends ReactQueryParams<QueryGrantsResponse, TData> {
    request: QueryGrantsRequest;
}
export interface UseGranterGrantsQuery<TData> extends ReactQueryParams<QueryGranterGrantsResponse, TData> {
    request: QueryGranterGrantsRequest;
}
export interface UseGranteeGrantsQuery<TData> extends ReactQueryParams<QueryGranteeGrantsResponse, TData> {
    request: QueryGranteeGrantsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */ useGrants: <TData = QueryGrantsResponse>({ request, options }: UseGrantsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** GranterGrants returns list of `Authorization`, granted by granter. */ useGranterGrants: <TData_1 = QueryGranterGrantsResponse>({ request, options }: UseGranterGrantsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** GranteeGrants returns a list of `GrantAuthorization` by grantee. */ useGranteeGrants: <TData_2 = QueryGranteeGrantsResponse>({ request, options }: UseGranteeGrantsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
};

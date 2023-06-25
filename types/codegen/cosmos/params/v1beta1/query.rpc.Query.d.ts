import { Rpc } from "../../../helpers";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Subspaces queries for all registered subspaces and all keys for a subspace. */
    subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request: QueryParamsRequest;
}
export interface UseSubspacesQuery<TData> extends ReactQueryParams<QuerySubspacesResponse, TData> {
    request?: QuerySubspacesRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /**
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => any;
    /** Subspaces queries for all registered subspaces and all keys for a subspace. */ useSubspaces: <TData_1 = QuerySubspacesResponse>({ request, options }: UseSubspacesQuery<TData_1>) => any;
};

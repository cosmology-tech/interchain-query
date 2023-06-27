import { Rpc } from "../../../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../../react-query";
import { QueryInterchainAccountRequest, QueryInterchainAccountResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** InterchainAccount returns the interchain account address for a given owner address on a given connection */
    interchainAccount(request: QueryInterchainAccountRequest): Promise<QueryInterchainAccountResponse>;
    /** Params queries all parameters of the ICA controller submodule. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    interchainAccount(request: QueryInterchainAccountRequest): Promise<QueryInterchainAccountResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    interchainAccount(request: QueryInterchainAccountRequest): Promise<QueryInterchainAccountResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
export interface UseInterchainAccountQuery<TData> extends ReactQueryParams<QueryInterchainAccountResponse, TData> {
    request: QueryInterchainAccountRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** InterchainAccount returns the interchain account address for a given owner address on a given connection */ useInterchainAccount: <TData = QueryInterchainAccountResponse>({ request, options }: UseInterchainAccountQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** Params queries all parameters of the ICA controller submodule. */ useParams: <TData_1 = QueryParamsResponse>({ request, options }: UseParamsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
};

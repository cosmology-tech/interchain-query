import { Rpc } from "../../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { ConfigRequest, ConfigResponse } from "./query";
/** Service defines the gRPC querier service for node related queries. */
export interface Service {
    /** Config queries for the operator configuration. */
    config(request?: ConfigRequest): Promise<ConfigResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    config(request?: ConfigRequest): Promise<ConfigResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    config(request?: ConfigRequest): Promise<ConfigResponse>;
};
export interface UseConfigQuery<TData> extends ReactQueryParams<ConfigResponse, TData> {
    request?: ConfigRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Config queries for the operator configuration. */ useConfig: <TData = ConfigResponse>({ request, options }: UseConfigQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
};

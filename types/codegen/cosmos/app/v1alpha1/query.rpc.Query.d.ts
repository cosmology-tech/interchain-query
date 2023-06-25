import { Rpc } from "../../../helpers";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryConfigRequest, QueryConfigResponse } from "./query";
/** Query is the app module query service. */
export interface Query {
    /** Config returns the current app config. */
    config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
};
export interface UseConfigQuery<TData> extends ReactQueryParams<QueryConfigResponse, TData> {
    request?: QueryConfigRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Config returns the current app config. */ useConfig: <TData = QueryConfigResponse>({ request, options }: UseConfigQuery<TData>) => any;
};

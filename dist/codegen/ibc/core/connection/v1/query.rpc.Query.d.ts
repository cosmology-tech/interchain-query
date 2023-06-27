import { Rpc } from "../../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionParamsRequest, QueryConnectionParamsResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** Connection queries an IBC connection end. */
    connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;
    /** Connections queries all the IBC connections of a chain. */
    connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
    /**
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
    /**
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;
    /**
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
    /** ConnectionParams queries all parameters of the ibc connection submodule. */
    connectionParams(request?: QueryConnectionParamsRequest): Promise<QueryConnectionParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;
    connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
    clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
    connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;
    connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
    connectionParams(request?: QueryConnectionParamsRequest): Promise<QueryConnectionParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;
    connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
    clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
    connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;
    connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
    connectionParams(request?: QueryConnectionParamsRequest): Promise<QueryConnectionParamsResponse>;
};
export interface UseConnectionQuery<TData> extends ReactQueryParams<QueryConnectionResponse, TData> {
    request: QueryConnectionRequest;
}
export interface UseConnectionsQuery<TData> extends ReactQueryParams<QueryConnectionsResponse, TData> {
    request?: QueryConnectionsRequest;
}
export interface UseClientConnectionsQuery<TData> extends ReactQueryParams<QueryClientConnectionsResponse, TData> {
    request: QueryClientConnectionsRequest;
}
export interface UseConnectionClientStateQuery<TData> extends ReactQueryParams<QueryConnectionClientStateResponse, TData> {
    request: QueryConnectionClientStateRequest;
}
export interface UseConnectionConsensusStateQuery<TData> extends ReactQueryParams<QueryConnectionConsensusStateResponse, TData> {
    request: QueryConnectionConsensusStateRequest;
}
export interface UseConnectionParamsQuery<TData> extends ReactQueryParams<QueryConnectionParamsResponse, TData> {
    request?: QueryConnectionParamsRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Connection queries an IBC connection end. */ useConnection: <TData = QueryConnectionResponse>({ request, options }: UseConnectionQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** Connections queries all the IBC connections of a chain. */ useConnections: <TData_1 = QueryConnectionsResponse>({ request, options }: UseConnectionsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /**
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    useClientConnections: <TData_2 = QueryClientConnectionsResponse>({ request, options }: UseClientConnectionsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /**
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    useConnectionClientState: <TData_3 = QueryConnectionClientStateResponse>({ request, options }: UseConnectionClientStateQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /**
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    useConnectionConsensusState: <TData_4 = QueryConnectionConsensusStateResponse>({ request, options }: UseConnectionConsensusStateQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** ConnectionParams queries all parameters of the ibc connection submodule. */ useConnectionParams: <TData_5 = QueryConnectionParamsResponse>({ request, options }: UseConnectionParamsQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
};

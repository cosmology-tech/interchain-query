import { Rpc } from "../../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** ClientState queries an IBC light client. */
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    /** ClientStates queries all the IBC light clients of a chain. */
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */
    consensusStateHeights(request: QueryConsensusStateHeightsRequest): Promise<QueryConsensusStateHeightsResponse>;
    /** Status queries the status of an IBC client. */
    clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
    /** ClientParams queries all parameters of the ibc client submodule. */
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
    /** UpgradedClientState queries an Upgraded IBC light client. */
    upgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
    upgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    consensusStateHeights(request: QueryConsensusStateHeightsRequest): Promise<QueryConsensusStateHeightsResponse>;
    clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
    upgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
    upgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    consensusStateHeights(request: QueryConsensusStateHeightsRequest): Promise<QueryConsensusStateHeightsResponse>;
    clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
    upgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
    upgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
};
export interface UseClientStateQuery<TData> extends ReactQueryParams<QueryClientStateResponse, TData> {
    request: QueryClientStateRequest;
}
export interface UseClientStatesQuery<TData> extends ReactQueryParams<QueryClientStatesResponse, TData> {
    request?: QueryClientStatesRequest;
}
export interface UseConsensusStateQuery<TData> extends ReactQueryParams<QueryConsensusStateResponse, TData> {
    request: QueryConsensusStateRequest;
}
export interface UseConsensusStatesQuery<TData> extends ReactQueryParams<QueryConsensusStatesResponse, TData> {
    request: QueryConsensusStatesRequest;
}
export interface UseConsensusStateHeightsQuery<TData> extends ReactQueryParams<QueryConsensusStateHeightsResponse, TData> {
    request: QueryConsensusStateHeightsRequest;
}
export interface UseClientStatusQuery<TData> extends ReactQueryParams<QueryClientStatusResponse, TData> {
    request: QueryClientStatusRequest;
}
export interface UseClientParamsQuery<TData> extends ReactQueryParams<QueryClientParamsResponse, TData> {
    request?: QueryClientParamsRequest;
}
export interface UseUpgradedClientStateQuery<TData> extends ReactQueryParams<QueryUpgradedClientStateResponse, TData> {
    request?: QueryUpgradedClientStateRequest;
}
export interface UseUpgradedConsensusStateQuery<TData> extends ReactQueryParams<QueryUpgradedConsensusStateResponse, TData> {
    request?: QueryUpgradedConsensusStateRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** ClientState queries an IBC light client. */ useClientState: <TData = QueryClientStateResponse>({ request, options }: UseClientStateQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** ClientStates queries all the IBC light clients of a chain. */ useClientStates: <TData_1 = QueryClientStatesResponse>({ request, options }: UseClientStatesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    useConsensusState: <TData_2 = QueryConsensusStateResponse>({ request, options }: UseConsensusStateQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    useConsensusStates: <TData_3 = QueryConsensusStatesResponse>({ request, options }: UseConsensusStatesQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */ useConsensusStateHeights: <TData_4 = QueryConsensusStateHeightsResponse>({ request, options }: UseConsensusStateHeightsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** Status queries the status of an IBC client. */ useClientStatus: <TData_5 = QueryClientStatusResponse>({ request, options }: UseClientStatusQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /** ClientParams queries all parameters of the ibc client submodule. */ useClientParams: <TData_6 = QueryClientParamsResponse>({ request, options }: UseClientParamsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /** UpgradedClientState queries an Upgraded IBC light client. */ useUpgradedClientState: <TData_7 = QueryUpgradedClientStateResponse>({ request, options }: UseUpgradedClientStateQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */ useUpgradedConsensusState: <TData_8 = QueryUpgradedConsensusStateResponse>({ request, options }: UseUpgradedConsensusStateQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
};

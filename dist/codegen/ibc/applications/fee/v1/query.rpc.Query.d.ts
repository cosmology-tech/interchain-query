import { Rpc } from "../../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryPayeeRequest, QueryPayeeResponse, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse } from "./query";
/** Query defines the ICS29 gRPC querier service. */
export interface Query {
    /** IncentivizedPackets returns all incentivized packets and their associated fees */
    incentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse>;
    /** IncentivizedPacket returns all packet fees for a packet given its identifier */
    incentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse>;
    /** Gets all incentivized packets for a specific channel */
    incentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse>;
    /** TotalRecvFees returns the total receive fees for a packet given its identifier */
    totalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse>;
    /** TotalAckFees returns the total acknowledgement fees for a packet given its identifier */
    totalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse>;
    /** TotalTimeoutFees returns the total timeout fees for a packet given its identifier */
    totalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse>;
    /** Payee returns the registered payee address for a specific channel given the relayer address */
    payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse>;
    /** CounterpartyPayee returns the registered counterparty payee for forward relaying */
    counterpartyPayee(request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse>;
    /** FeeEnabledChannels returns a list of all fee enabled channels */
    feeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse>;
    /** FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */
    feeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    incentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse>;
    incentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse>;
    incentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse>;
    totalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse>;
    totalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse>;
    totalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse>;
    payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse>;
    counterpartyPayee(request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse>;
    feeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse>;
    feeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    incentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse>;
    incentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse>;
    incentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse>;
    totalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse>;
    totalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse>;
    totalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse>;
    payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse>;
    counterpartyPayee(request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse>;
    feeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse>;
    feeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse>;
};
export interface UseIncentivizedPacketsQuery<TData> extends ReactQueryParams<QueryIncentivizedPacketsResponse, TData> {
    request: QueryIncentivizedPacketsRequest;
}
export interface UseIncentivizedPacketQuery<TData> extends ReactQueryParams<QueryIncentivizedPacketResponse, TData> {
    request: QueryIncentivizedPacketRequest;
}
export interface UseIncentivizedPacketsForChannelQuery<TData> extends ReactQueryParams<QueryIncentivizedPacketsForChannelResponse, TData> {
    request: QueryIncentivizedPacketsForChannelRequest;
}
export interface UseTotalRecvFeesQuery<TData> extends ReactQueryParams<QueryTotalRecvFeesResponse, TData> {
    request: QueryTotalRecvFeesRequest;
}
export interface UseTotalAckFeesQuery<TData> extends ReactQueryParams<QueryTotalAckFeesResponse, TData> {
    request: QueryTotalAckFeesRequest;
}
export interface UseTotalTimeoutFeesQuery<TData> extends ReactQueryParams<QueryTotalTimeoutFeesResponse, TData> {
    request: QueryTotalTimeoutFeesRequest;
}
export interface UsePayeeQuery<TData> extends ReactQueryParams<QueryPayeeResponse, TData> {
    request: QueryPayeeRequest;
}
export interface UseCounterpartyPayeeQuery<TData> extends ReactQueryParams<QueryCounterpartyPayeeResponse, TData> {
    request: QueryCounterpartyPayeeRequest;
}
export interface UseFeeEnabledChannelsQuery<TData> extends ReactQueryParams<QueryFeeEnabledChannelsResponse, TData> {
    request: QueryFeeEnabledChannelsRequest;
}
export interface UseFeeEnabledChannelQuery<TData> extends ReactQueryParams<QueryFeeEnabledChannelResponse, TData> {
    request: QueryFeeEnabledChannelRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** IncentivizedPackets returns all incentivized packets and their associated fees */ useIncentivizedPackets: <TData = QueryIncentivizedPacketsResponse>({ request, options }: UseIncentivizedPacketsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** IncentivizedPacket returns all packet fees for a packet given its identifier */ useIncentivizedPacket: <TData_1 = QueryIncentivizedPacketResponse>({ request, options }: UseIncentivizedPacketQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** Gets all incentivized packets for a specific channel */ useIncentivizedPacketsForChannel: <TData_2 = QueryIncentivizedPacketsForChannelResponse>({ request, options }: UseIncentivizedPacketsForChannelQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** TotalRecvFees returns the total receive fees for a packet given its identifier */ useTotalRecvFees: <TData_3 = QueryTotalRecvFeesResponse>({ request, options }: UseTotalRecvFeesQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** TotalAckFees returns the total acknowledgement fees for a packet given its identifier */ useTotalAckFees: <TData_4 = QueryTotalAckFeesResponse>({ request, options }: UseTotalAckFeesQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** TotalTimeoutFees returns the total timeout fees for a packet given its identifier */ useTotalTimeoutFees: <TData_5 = QueryTotalTimeoutFeesResponse>({ request, options }: UseTotalTimeoutFeesQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /** Payee returns the registered payee address for a specific channel given the relayer address */ usePayee: <TData_6 = QueryPayeeResponse>({ request, options }: UsePayeeQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /** CounterpartyPayee returns the registered counterparty payee for forward relaying */ useCounterpartyPayee: <TData_7 = QueryCounterpartyPayeeResponse>({ request, options }: UseCounterpartyPayeeQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
    /** FeeEnabledChannels returns a list of all fee enabled channels */ useFeeEnabledChannels: <TData_8 = QueryFeeEnabledChannelsResponse>({ request, options }: UseFeeEnabledChannelsQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
    /** FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */ useFeeEnabledChannel: <TData_9 = QueryFeeEnabledChannelResponse>({ request, options }: UseFeeEnabledChannelQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
};

import { Rpc } from "../../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryNextSequenceSendRequest, QueryNextSequenceSendResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** Channel queries an IBC Channel. */
    channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
    /** Channels queries all the IBC channels of a chain. */
    channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponse>;
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse>;
    /** PacketCommitment queries a stored packet commitment hash. */
    packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
    packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
    /** NextSequenceReceive returns the next receive sequence for a given channel. */
    nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
    /** NextSequenceSend returns the next send sequence for a given channel. */
    nextSequenceSend(request: QueryNextSequenceSendRequest): Promise<QueryNextSequenceSendResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
    channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponse>;
    connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
    channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
    channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse>;
    packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
    packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
    packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
    packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
    packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
    unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
    unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
    nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
    nextSequenceSend(request: QueryNextSequenceSendRequest): Promise<QueryNextSequenceSendResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
    channels(request?: QueryChannelsRequest): Promise<QueryChannelsResponse>;
    connectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
    channelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
    channelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse>;
    packetCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
    packetCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
    packetReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
    packetAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
    packetAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
    unreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
    unreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
    nextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
    nextSequenceSend(request: QueryNextSequenceSendRequest): Promise<QueryNextSequenceSendResponse>;
};
export interface UseChannelQuery<TData> extends ReactQueryParams<QueryChannelResponse, TData> {
    request: QueryChannelRequest;
}
export interface UseChannelsQuery<TData> extends ReactQueryParams<QueryChannelsResponse, TData> {
    request?: QueryChannelsRequest;
}
export interface UseConnectionChannelsQuery<TData> extends ReactQueryParams<QueryConnectionChannelsResponse, TData> {
    request: QueryConnectionChannelsRequest;
}
export interface UseChannelClientStateQuery<TData> extends ReactQueryParams<QueryChannelClientStateResponse, TData> {
    request: QueryChannelClientStateRequest;
}
export interface UseChannelConsensusStateQuery<TData> extends ReactQueryParams<QueryChannelConsensusStateResponse, TData> {
    request: QueryChannelConsensusStateRequest;
}
export interface UsePacketCommitmentQuery<TData> extends ReactQueryParams<QueryPacketCommitmentResponse, TData> {
    request: QueryPacketCommitmentRequest;
}
export interface UsePacketCommitmentsQuery<TData> extends ReactQueryParams<QueryPacketCommitmentsResponse, TData> {
    request: QueryPacketCommitmentsRequest;
}
export interface UsePacketReceiptQuery<TData> extends ReactQueryParams<QueryPacketReceiptResponse, TData> {
    request: QueryPacketReceiptRequest;
}
export interface UsePacketAcknowledgementQuery<TData> extends ReactQueryParams<QueryPacketAcknowledgementResponse, TData> {
    request: QueryPacketAcknowledgementRequest;
}
export interface UsePacketAcknowledgementsQuery<TData> extends ReactQueryParams<QueryPacketAcknowledgementsResponse, TData> {
    request: QueryPacketAcknowledgementsRequest;
}
export interface UseUnreceivedPacketsQuery<TData> extends ReactQueryParams<QueryUnreceivedPacketsResponse, TData> {
    request: QueryUnreceivedPacketsRequest;
}
export interface UseUnreceivedAcksQuery<TData> extends ReactQueryParams<QueryUnreceivedAcksResponse, TData> {
    request: QueryUnreceivedAcksRequest;
}
export interface UseNextSequenceReceiveQuery<TData> extends ReactQueryParams<QueryNextSequenceReceiveResponse, TData> {
    request: QueryNextSequenceReceiveRequest;
}
export interface UseNextSequenceSendQuery<TData> extends ReactQueryParams<QueryNextSequenceSendResponse, TData> {
    request: QueryNextSequenceSendRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Channel queries an IBC Channel. */ useChannel: <TData = QueryChannelResponse>({ request, options }: UseChannelQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** Channels queries all the IBC channels of a chain. */ useChannels: <TData_1 = QueryChannelsResponse>({ request, options }: UseChannelsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    useConnectionChannels: <TData_2 = QueryConnectionChannelsResponse>({ request, options }: UseConnectionChannelsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    useChannelClientState: <TData_3 = QueryChannelClientStateResponse>({ request, options }: UseChannelClientStateQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    useChannelConsensusState: <TData_4 = QueryChannelConsensusStateResponse>({ request, options }: UseChannelConsensusStateQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** PacketCommitment queries a stored packet commitment hash. */ usePacketCommitment: <TData_5 = QueryPacketCommitmentResponse>({ request, options }: UsePacketCommitmentQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    usePacketCommitments: <TData_6 = QueryPacketCommitmentsResponse>({ request, options }: UsePacketCommitmentsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    usePacketReceipt: <TData_7 = QueryPacketReceiptResponse>({ request, options }: UsePacketReceiptQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */ usePacketAcknowledgement: <TData_8 = QueryPacketAcknowledgementResponse>({ request, options }: UsePacketAcknowledgementQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    usePacketAcknowledgements: <TData_9 = QueryPacketAcknowledgementsResponse>({ request, options }: UsePacketAcknowledgementsQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    useUnreceivedPackets: <TData_10 = QueryUnreceivedPacketsResponse>({ request, options }: UseUnreceivedPacketsQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    useUnreceivedAcks: <TData_11 = QueryUnreceivedAcksResponse>({ request, options }: UseUnreceivedAcksQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
    /** NextSequenceReceive returns the next receive sequence for a given channel. */ useNextSequenceReceive: <TData_12 = QueryNextSequenceReceiveResponse>({ request, options }: UseNextSequenceReceiveQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
    /** NextSequenceSend returns the next send sequence for a given channel. */ useNextSequenceSend: <TData_13 = QueryNextSequenceSendResponse>({ request, options }: UseNextSequenceSendQuery<TData_13>) => import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
};

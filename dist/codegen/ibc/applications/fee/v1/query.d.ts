import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { PacketId, PacketIdAmino, PacketIdSDKType } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees, IdentifiedPacketFeesAmino, IdentifiedPacketFeesSDKType } from "./fee";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { FeeEnabledChannel, FeeEnabledChannelAmino, FeeEnabledChannelSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
    /** block height at which to query */
    queryHeight: bigint;
}
export interface QueryIncentivizedPacketsRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsRequest";
    value: Uint8Array;
}
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    /** block height at which to query */
    query_height: string;
}
export interface QueryIncentivizedPacketsRequestAminoMsg {
    type: "cosmos-sdk/QueryIncentivizedPacketsRequest";
    value: QueryIncentivizedPacketsRequestAmino;
}
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequestSDKType {
    pagination: PageRequestSDKType;
    query_height: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponse {
    /** list of identified fees for incentivized packets */
    incentivizedPackets: IdentifiedPacketFees[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryIncentivizedPacketsResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsResponse";
    value: Uint8Array;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponseAmino {
    /** list of identified fees for incentivized packets */
    incentivized_packets: IdentifiedPacketFeesAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryIncentivizedPacketsResponseAminoMsg {
    type: "cosmos-sdk/QueryIncentivizedPacketsResponse";
    value: QueryIncentivizedPacketsResponseAmino;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponseSDKType {
    incentivized_packets: IdentifiedPacketFeesSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequest {
    /** unique packet identifier comprised of channel ID, port ID and sequence */
    packetId: PacketId;
    /** block height at which to query */
    queryHeight: bigint;
}
export interface QueryIncentivizedPacketRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketRequest";
    value: Uint8Array;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequestAmino {
    /** unique packet identifier comprised of channel ID, port ID and sequence */
    packet_id?: PacketIdAmino;
    /** block height at which to query */
    query_height: string;
}
export interface QueryIncentivizedPacketRequestAminoMsg {
    type: "cosmos-sdk/QueryIncentivizedPacketRequest";
    value: QueryIncentivizedPacketRequestAmino;
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequestSDKType {
    packet_id: PacketIdSDKType;
    query_height: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponse {
    /** the identified fees for the incentivized packet */
    incentivizedPacket: IdentifiedPacketFees;
}
export interface QueryIncentivizedPacketResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketResponse";
    value: Uint8Array;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponseAmino {
    /** the identified fees for the incentivized packet */
    incentivized_packet?: IdentifiedPacketFeesAmino;
}
export interface QueryIncentivizedPacketResponseAminoMsg {
    type: "cosmos-sdk/QueryIncentivizedPacketResponse";
    value: QueryIncentivizedPacketResponseAmino;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponseSDKType {
    incentivized_packet: IdentifiedPacketFeesSDKType;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
    portId: string;
    channelId: string;
    /** Height to query at */
    queryHeight: bigint;
}
export interface QueryIncentivizedPacketsForChannelRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest";
    value: Uint8Array;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    port_id: string;
    channel_id: string;
    /** Height to query at */
    query_height: string;
}
export interface QueryIncentivizedPacketsForChannelRequestAminoMsg {
    type: "cosmos-sdk/QueryIncentivizedPacketsForChannelRequest";
    value: QueryIncentivizedPacketsForChannelRequestAmino;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequestSDKType {
    pagination: PageRequestSDKType;
    port_id: string;
    channel_id: string;
    query_height: bigint;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponse {
    /** Map of all incentivized_packets */
    incentivizedPackets: IdentifiedPacketFees[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryIncentivizedPacketsForChannelResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse";
    value: Uint8Array;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponseAmino {
    /** Map of all incentivized_packets */
    incentivized_packets: IdentifiedPacketFeesAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryIncentivizedPacketsForChannelResponseAminoMsg {
    type: "cosmos-sdk/QueryIncentivizedPacketsForChannelResponse";
    value: QueryIncentivizedPacketsForChannelResponseAmino;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponseSDKType {
    incentivized_packets: IdentifiedPacketFeesSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequest {
    /** the packet identifier for the associated fees */
    packetId: PacketId;
}
export interface QueryTotalRecvFeesRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesRequest";
    value: Uint8Array;
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequestAmino {
    /** the packet identifier for the associated fees */
    packet_id?: PacketIdAmino;
}
export interface QueryTotalRecvFeesRequestAminoMsg {
    type: "cosmos-sdk/QueryTotalRecvFeesRequest";
    value: QueryTotalRecvFeesRequestAmino;
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequestSDKType {
    packet_id: PacketIdSDKType;
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponse {
    /** the total packet receive fees */
    recvFees: Coin[];
}
export interface QueryTotalRecvFeesResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalRecvFeesResponse";
    value: Uint8Array;
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponseAmino {
    /** the total packet receive fees */
    recv_fees: CoinAmino[];
}
export interface QueryTotalRecvFeesResponseAminoMsg {
    type: "cosmos-sdk/QueryTotalRecvFeesResponse";
    value: QueryTotalRecvFeesResponseAmino;
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponseSDKType {
    recv_fees: CoinSDKType[];
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequest {
    /** the packet identifier for the associated fees */
    packetId: PacketId;
}
export interface QueryTotalAckFeesRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesRequest";
    value: Uint8Array;
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequestAmino {
    /** the packet identifier for the associated fees */
    packet_id?: PacketIdAmino;
}
export interface QueryTotalAckFeesRequestAminoMsg {
    type: "cosmos-sdk/QueryTotalAckFeesRequest";
    value: QueryTotalAckFeesRequestAmino;
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequestSDKType {
    packet_id: PacketIdSDKType;
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponse {
    /** the total packet acknowledgement fees */
    ackFees: Coin[];
}
export interface QueryTotalAckFeesResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalAckFeesResponse";
    value: Uint8Array;
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponseAmino {
    /** the total packet acknowledgement fees */
    ack_fees: CoinAmino[];
}
export interface QueryTotalAckFeesResponseAminoMsg {
    type: "cosmos-sdk/QueryTotalAckFeesResponse";
    value: QueryTotalAckFeesResponseAmino;
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponseSDKType {
    ack_fees: CoinSDKType[];
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequest {
    /** the packet identifier for the associated fees */
    packetId: PacketId;
}
export interface QueryTotalTimeoutFeesRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest";
    value: Uint8Array;
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequestAmino {
    /** the packet identifier for the associated fees */
    packet_id?: PacketIdAmino;
}
export interface QueryTotalTimeoutFeesRequestAminoMsg {
    type: "cosmos-sdk/QueryTotalTimeoutFeesRequest";
    value: QueryTotalTimeoutFeesRequestAmino;
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequestSDKType {
    packet_id: PacketIdSDKType;
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponse {
    /** the total packet timeout fees */
    timeoutFees: Coin[];
}
export interface QueryTotalTimeoutFeesResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse";
    value: Uint8Array;
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponseAmino {
    /** the total packet timeout fees */
    timeout_fees: CoinAmino[];
}
export interface QueryTotalTimeoutFeesResponseAminoMsg {
    type: "cosmos-sdk/QueryTotalTimeoutFeesResponse";
    value: QueryTotalTimeoutFeesResponseAmino;
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponseSDKType {
    timeout_fees: CoinSDKType[];
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequest {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address to which the distribution address is registered */
    relayer: string;
}
export interface QueryPayeeRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryPayeeRequest";
    value: Uint8Array;
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequestAmino {
    /** unique channel identifier */
    channel_id: string;
    /** the relayer address to which the distribution address is registered */
    relayer: string;
}
export interface QueryPayeeRequestAminoMsg {
    type: "cosmos-sdk/QueryPayeeRequest";
    value: QueryPayeeRequestAmino;
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequestSDKType {
    channel_id: string;
    relayer: string;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponse {
    /** the payee address to which packet fees are paid out */
    payeeAddress: string;
}
export interface QueryPayeeResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryPayeeResponse";
    value: Uint8Array;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponseAmino {
    /** the payee address to which packet fees are paid out */
    payee_address: string;
}
export interface QueryPayeeResponseAminoMsg {
    type: "cosmos-sdk/QueryPayeeResponse";
    value: QueryPayeeResponseAmino;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponseSDKType {
    payee_address: string;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequest {
    /** unique channel identifier */
    channelId: string;
    /** the relayer address to which the counterparty is registered */
    relayer: string;
}
export interface QueryCounterpartyPayeeRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeRequest";
    value: Uint8Array;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequestAmino {
    /** unique channel identifier */
    channel_id: string;
    /** the relayer address to which the counterparty is registered */
    relayer: string;
}
export interface QueryCounterpartyPayeeRequestAminoMsg {
    type: "cosmos-sdk/QueryCounterpartyPayeeRequest";
    value: QueryCounterpartyPayeeRequestAmino;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequestSDKType {
    channel_id: string;
    relayer: string;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponse {
    /** the counterparty payee address used to compensate forward relaying */
    counterpartyPayee: string;
}
export interface QueryCounterpartyPayeeResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryCounterpartyPayeeResponse";
    value: Uint8Array;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponseAmino {
    /** the counterparty payee address used to compensate forward relaying */
    counterparty_payee: string;
}
export interface QueryCounterpartyPayeeResponseAminoMsg {
    type: "cosmos-sdk/QueryCounterpartyPayeeResponse";
    value: QueryCounterpartyPayeeResponseAmino;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponseSDKType {
    counterparty_payee: string;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
    /** block height at which to query */
    queryHeight: bigint;
}
export interface QueryFeeEnabledChannelsRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest";
    value: Uint8Array;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
    /** block height at which to query */
    query_height: string;
}
export interface QueryFeeEnabledChannelsRequestAminoMsg {
    type: "cosmos-sdk/QueryFeeEnabledChannelsRequest";
    value: QueryFeeEnabledChannelsRequestAmino;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequestSDKType {
    pagination: PageRequestSDKType;
    query_height: bigint;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponse {
    /** list of fee enabled channels */
    feeEnabledChannels: FeeEnabledChannel[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryFeeEnabledChannelsResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse";
    value: Uint8Array;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponseAmino {
    /** list of fee enabled channels */
    fee_enabled_channels: FeeEnabledChannelAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryFeeEnabledChannelsResponseAminoMsg {
    type: "cosmos-sdk/QueryFeeEnabledChannelsResponse";
    value: QueryFeeEnabledChannelsResponseAmino;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponseSDKType {
    fee_enabled_channels: FeeEnabledChannelSDKType[];
    pagination: PageResponseSDKType;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequest {
    /** unique port identifier */
    portId: string;
    /** unique channel identifier */
    channelId: string;
}
export interface QueryFeeEnabledChannelRequestProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelRequest";
    value: Uint8Array;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequestAmino {
    /** unique port identifier */
    port_id: string;
    /** unique channel identifier */
    channel_id: string;
}
export interface QueryFeeEnabledChannelRequestAminoMsg {
    type: "cosmos-sdk/QueryFeeEnabledChannelRequest";
    value: QueryFeeEnabledChannelRequestAmino;
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequestSDKType {
    port_id: string;
    channel_id: string;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponse {
    /** boolean flag representing the fee enabled channel status */
    feeEnabled: boolean;
}
export interface QueryFeeEnabledChannelResponseProtoMsg {
    typeUrl: "/ibc.applications.fee.v1.QueryFeeEnabledChannelResponse";
    value: Uint8Array;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponseAmino {
    /** boolean flag representing the fee enabled channel status */
    fee_enabled: boolean;
}
export interface QueryFeeEnabledChannelResponseAminoMsg {
    type: "cosmos-sdk/QueryFeeEnabledChannelResponse";
    value: QueryFeeEnabledChannelResponseAmino;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponseSDKType {
    fee_enabled: boolean;
}
export declare const QueryIncentivizedPacketsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryIncentivizedPacketsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsRequest;
    fromJSON(object: any): QueryIncentivizedPacketsRequest;
    toJSON(message: QueryIncentivizedPacketsRequest): unknown;
    fromPartial(object: DeepPartial<QueryIncentivizedPacketsRequest>): QueryIncentivizedPacketsRequest;
    fromSDK(object: QueryIncentivizedPacketsRequestSDKType): QueryIncentivizedPacketsRequest;
    toSDK(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestSDKType;
    fromAmino(object: QueryIncentivizedPacketsRequestAmino): QueryIncentivizedPacketsRequest;
    toAmino(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestAmino;
    fromAminoMsg(object: QueryIncentivizedPacketsRequestAminoMsg): QueryIncentivizedPacketsRequest;
    toAminoMsg(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestAminoMsg;
    fromProtoMsg(message: QueryIncentivizedPacketsRequestProtoMsg): QueryIncentivizedPacketsRequest;
    toProto(message: QueryIncentivizedPacketsRequest): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPacketsRequest): QueryIncentivizedPacketsRequestProtoMsg;
};
export declare const QueryIncentivizedPacketsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryIncentivizedPacketsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsResponse;
    fromJSON(object: any): QueryIncentivizedPacketsResponse;
    toJSON(message: QueryIncentivizedPacketsResponse): unknown;
    fromPartial(object: DeepPartial<QueryIncentivizedPacketsResponse>): QueryIncentivizedPacketsResponse;
    fromSDK(object: QueryIncentivizedPacketsResponseSDKType): QueryIncentivizedPacketsResponse;
    toSDK(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseSDKType;
    fromAmino(object: QueryIncentivizedPacketsResponseAmino): QueryIncentivizedPacketsResponse;
    toAmino(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseAmino;
    fromAminoMsg(object: QueryIncentivizedPacketsResponseAminoMsg): QueryIncentivizedPacketsResponse;
    toAminoMsg(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseAminoMsg;
    fromProtoMsg(message: QueryIncentivizedPacketsResponseProtoMsg): QueryIncentivizedPacketsResponse;
    toProto(message: QueryIncentivizedPacketsResponse): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPacketsResponse): QueryIncentivizedPacketsResponseProtoMsg;
};
export declare const QueryIncentivizedPacketRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryIncentivizedPacketRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketRequest;
    fromJSON(object: any): QueryIncentivizedPacketRequest;
    toJSON(message: QueryIncentivizedPacketRequest): unknown;
    fromPartial(object: DeepPartial<QueryIncentivizedPacketRequest>): QueryIncentivizedPacketRequest;
    fromSDK(object: QueryIncentivizedPacketRequestSDKType): QueryIncentivizedPacketRequest;
    toSDK(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestSDKType;
    fromAmino(object: QueryIncentivizedPacketRequestAmino): QueryIncentivizedPacketRequest;
    toAmino(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestAmino;
    fromAminoMsg(object: QueryIncentivizedPacketRequestAminoMsg): QueryIncentivizedPacketRequest;
    toAminoMsg(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestAminoMsg;
    fromProtoMsg(message: QueryIncentivizedPacketRequestProtoMsg): QueryIncentivizedPacketRequest;
    toProto(message: QueryIncentivizedPacketRequest): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPacketRequest): QueryIncentivizedPacketRequestProtoMsg;
};
export declare const QueryIncentivizedPacketResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryIncentivizedPacketResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketResponse;
    fromJSON(object: any): QueryIncentivizedPacketResponse;
    toJSON(message: QueryIncentivizedPacketResponse): unknown;
    fromPartial(object: DeepPartial<QueryIncentivizedPacketResponse>): QueryIncentivizedPacketResponse;
    fromSDK(object: QueryIncentivizedPacketResponseSDKType): QueryIncentivizedPacketResponse;
    toSDK(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseSDKType;
    fromAmino(object: QueryIncentivizedPacketResponseAmino): QueryIncentivizedPacketResponse;
    toAmino(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseAmino;
    fromAminoMsg(object: QueryIncentivizedPacketResponseAminoMsg): QueryIncentivizedPacketResponse;
    toAminoMsg(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseAminoMsg;
    fromProtoMsg(message: QueryIncentivizedPacketResponseProtoMsg): QueryIncentivizedPacketResponse;
    toProto(message: QueryIncentivizedPacketResponse): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPacketResponse): QueryIncentivizedPacketResponseProtoMsg;
};
export declare const QueryIncentivizedPacketsForChannelRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryIncentivizedPacketsForChannelRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelRequest;
    fromJSON(object: any): QueryIncentivizedPacketsForChannelRequest;
    toJSON(message: QueryIncentivizedPacketsForChannelRequest): unknown;
    fromPartial(object: DeepPartial<QueryIncentivizedPacketsForChannelRequest>): QueryIncentivizedPacketsForChannelRequest;
    fromSDK(object: QueryIncentivizedPacketsForChannelRequestSDKType): QueryIncentivizedPacketsForChannelRequest;
    toSDK(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestSDKType;
    fromAmino(object: QueryIncentivizedPacketsForChannelRequestAmino): QueryIncentivizedPacketsForChannelRequest;
    toAmino(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestAmino;
    fromAminoMsg(object: QueryIncentivizedPacketsForChannelRequestAminoMsg): QueryIncentivizedPacketsForChannelRequest;
    toAminoMsg(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestAminoMsg;
    fromProtoMsg(message: QueryIncentivizedPacketsForChannelRequestProtoMsg): QueryIncentivizedPacketsForChannelRequest;
    toProto(message: QueryIncentivizedPacketsForChannelRequest): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPacketsForChannelRequest): QueryIncentivizedPacketsForChannelRequestProtoMsg;
};
export declare const QueryIncentivizedPacketsForChannelResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryIncentivizedPacketsForChannelResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPacketsForChannelResponse;
    fromJSON(object: any): QueryIncentivizedPacketsForChannelResponse;
    toJSON(message: QueryIncentivizedPacketsForChannelResponse): unknown;
    fromPartial(object: DeepPartial<QueryIncentivizedPacketsForChannelResponse>): QueryIncentivizedPacketsForChannelResponse;
    fromSDK(object: QueryIncentivizedPacketsForChannelResponseSDKType): QueryIncentivizedPacketsForChannelResponse;
    toSDK(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseSDKType;
    fromAmino(object: QueryIncentivizedPacketsForChannelResponseAmino): QueryIncentivizedPacketsForChannelResponse;
    toAmino(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseAmino;
    fromAminoMsg(object: QueryIncentivizedPacketsForChannelResponseAminoMsg): QueryIncentivizedPacketsForChannelResponse;
    toAminoMsg(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseAminoMsg;
    fromProtoMsg(message: QueryIncentivizedPacketsForChannelResponseProtoMsg): QueryIncentivizedPacketsForChannelResponse;
    toProto(message: QueryIncentivizedPacketsForChannelResponse): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPacketsForChannelResponse): QueryIncentivizedPacketsForChannelResponseProtoMsg;
};
export declare const QueryTotalRecvFeesRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTotalRecvFeesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalRecvFeesRequest;
    fromJSON(object: any): QueryTotalRecvFeesRequest;
    toJSON(message: QueryTotalRecvFeesRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalRecvFeesRequest>): QueryTotalRecvFeesRequest;
    fromSDK(object: QueryTotalRecvFeesRequestSDKType): QueryTotalRecvFeesRequest;
    toSDK(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestSDKType;
    fromAmino(object: QueryTotalRecvFeesRequestAmino): QueryTotalRecvFeesRequest;
    toAmino(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestAmino;
    fromAminoMsg(object: QueryTotalRecvFeesRequestAminoMsg): QueryTotalRecvFeesRequest;
    toAminoMsg(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestAminoMsg;
    fromProtoMsg(message: QueryTotalRecvFeesRequestProtoMsg): QueryTotalRecvFeesRequest;
    toProto(message: QueryTotalRecvFeesRequest): Uint8Array;
    toProtoMsg(message: QueryTotalRecvFeesRequest): QueryTotalRecvFeesRequestProtoMsg;
};
export declare const QueryTotalRecvFeesResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTotalRecvFeesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalRecvFeesResponse;
    fromJSON(object: any): QueryTotalRecvFeesResponse;
    toJSON(message: QueryTotalRecvFeesResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalRecvFeesResponse>): QueryTotalRecvFeesResponse;
    fromSDK(object: QueryTotalRecvFeesResponseSDKType): QueryTotalRecvFeesResponse;
    toSDK(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseSDKType;
    fromAmino(object: QueryTotalRecvFeesResponseAmino): QueryTotalRecvFeesResponse;
    toAmino(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseAmino;
    fromAminoMsg(object: QueryTotalRecvFeesResponseAminoMsg): QueryTotalRecvFeesResponse;
    toAminoMsg(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseAminoMsg;
    fromProtoMsg(message: QueryTotalRecvFeesResponseProtoMsg): QueryTotalRecvFeesResponse;
    toProto(message: QueryTotalRecvFeesResponse): Uint8Array;
    toProtoMsg(message: QueryTotalRecvFeesResponse): QueryTotalRecvFeesResponseProtoMsg;
};
export declare const QueryTotalAckFeesRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTotalAckFeesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalAckFeesRequest;
    fromJSON(object: any): QueryTotalAckFeesRequest;
    toJSON(message: QueryTotalAckFeesRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalAckFeesRequest>): QueryTotalAckFeesRequest;
    fromSDK(object: QueryTotalAckFeesRequestSDKType): QueryTotalAckFeesRequest;
    toSDK(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestSDKType;
    fromAmino(object: QueryTotalAckFeesRequestAmino): QueryTotalAckFeesRequest;
    toAmino(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestAmino;
    fromAminoMsg(object: QueryTotalAckFeesRequestAminoMsg): QueryTotalAckFeesRequest;
    toAminoMsg(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestAminoMsg;
    fromProtoMsg(message: QueryTotalAckFeesRequestProtoMsg): QueryTotalAckFeesRequest;
    toProto(message: QueryTotalAckFeesRequest): Uint8Array;
    toProtoMsg(message: QueryTotalAckFeesRequest): QueryTotalAckFeesRequestProtoMsg;
};
export declare const QueryTotalAckFeesResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTotalAckFeesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalAckFeesResponse;
    fromJSON(object: any): QueryTotalAckFeesResponse;
    toJSON(message: QueryTotalAckFeesResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalAckFeesResponse>): QueryTotalAckFeesResponse;
    fromSDK(object: QueryTotalAckFeesResponseSDKType): QueryTotalAckFeesResponse;
    toSDK(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseSDKType;
    fromAmino(object: QueryTotalAckFeesResponseAmino): QueryTotalAckFeesResponse;
    toAmino(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseAmino;
    fromAminoMsg(object: QueryTotalAckFeesResponseAminoMsg): QueryTotalAckFeesResponse;
    toAminoMsg(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseAminoMsg;
    fromProtoMsg(message: QueryTotalAckFeesResponseProtoMsg): QueryTotalAckFeesResponse;
    toProto(message: QueryTotalAckFeesResponse): Uint8Array;
    toProtoMsg(message: QueryTotalAckFeesResponse): QueryTotalAckFeesResponseProtoMsg;
};
export declare const QueryTotalTimeoutFeesRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTotalTimeoutFeesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTimeoutFeesRequest;
    fromJSON(object: any): QueryTotalTimeoutFeesRequest;
    toJSON(message: QueryTotalTimeoutFeesRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalTimeoutFeesRequest>): QueryTotalTimeoutFeesRequest;
    fromSDK(object: QueryTotalTimeoutFeesRequestSDKType): QueryTotalTimeoutFeesRequest;
    toSDK(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestSDKType;
    fromAmino(object: QueryTotalTimeoutFeesRequestAmino): QueryTotalTimeoutFeesRequest;
    toAmino(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestAmino;
    fromAminoMsg(object: QueryTotalTimeoutFeesRequestAminoMsg): QueryTotalTimeoutFeesRequest;
    toAminoMsg(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestAminoMsg;
    fromProtoMsg(message: QueryTotalTimeoutFeesRequestProtoMsg): QueryTotalTimeoutFeesRequest;
    toProto(message: QueryTotalTimeoutFeesRequest): Uint8Array;
    toProtoMsg(message: QueryTotalTimeoutFeesRequest): QueryTotalTimeoutFeesRequestProtoMsg;
};
export declare const QueryTotalTimeoutFeesResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTotalTimeoutFeesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalTimeoutFeesResponse;
    fromJSON(object: any): QueryTotalTimeoutFeesResponse;
    toJSON(message: QueryTotalTimeoutFeesResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalTimeoutFeesResponse>): QueryTotalTimeoutFeesResponse;
    fromSDK(object: QueryTotalTimeoutFeesResponseSDKType): QueryTotalTimeoutFeesResponse;
    toSDK(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseSDKType;
    fromAmino(object: QueryTotalTimeoutFeesResponseAmino): QueryTotalTimeoutFeesResponse;
    toAmino(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseAmino;
    fromAminoMsg(object: QueryTotalTimeoutFeesResponseAminoMsg): QueryTotalTimeoutFeesResponse;
    toAminoMsg(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseAminoMsg;
    fromProtoMsg(message: QueryTotalTimeoutFeesResponseProtoMsg): QueryTotalTimeoutFeesResponse;
    toProto(message: QueryTotalTimeoutFeesResponse): Uint8Array;
    toProtoMsg(message: QueryTotalTimeoutFeesResponse): QueryTotalTimeoutFeesResponseProtoMsg;
};
export declare const QueryPayeeRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryPayeeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPayeeRequest;
    fromJSON(object: any): QueryPayeeRequest;
    toJSON(message: QueryPayeeRequest): unknown;
    fromPartial(object: DeepPartial<QueryPayeeRequest>): QueryPayeeRequest;
    fromSDK(object: QueryPayeeRequestSDKType): QueryPayeeRequest;
    toSDK(message: QueryPayeeRequest): QueryPayeeRequestSDKType;
    fromAmino(object: QueryPayeeRequestAmino): QueryPayeeRequest;
    toAmino(message: QueryPayeeRequest): QueryPayeeRequestAmino;
    fromAminoMsg(object: QueryPayeeRequestAminoMsg): QueryPayeeRequest;
    toAminoMsg(message: QueryPayeeRequest): QueryPayeeRequestAminoMsg;
    fromProtoMsg(message: QueryPayeeRequestProtoMsg): QueryPayeeRequest;
    toProto(message: QueryPayeeRequest): Uint8Array;
    toProtoMsg(message: QueryPayeeRequest): QueryPayeeRequestProtoMsg;
};
export declare const QueryPayeeResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryPayeeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPayeeResponse;
    fromJSON(object: any): QueryPayeeResponse;
    toJSON(message: QueryPayeeResponse): unknown;
    fromPartial(object: DeepPartial<QueryPayeeResponse>): QueryPayeeResponse;
    fromSDK(object: QueryPayeeResponseSDKType): QueryPayeeResponse;
    toSDK(message: QueryPayeeResponse): QueryPayeeResponseSDKType;
    fromAmino(object: QueryPayeeResponseAmino): QueryPayeeResponse;
    toAmino(message: QueryPayeeResponse): QueryPayeeResponseAmino;
    fromAminoMsg(object: QueryPayeeResponseAminoMsg): QueryPayeeResponse;
    toAminoMsg(message: QueryPayeeResponse): QueryPayeeResponseAminoMsg;
    fromProtoMsg(message: QueryPayeeResponseProtoMsg): QueryPayeeResponse;
    toProto(message: QueryPayeeResponse): Uint8Array;
    toProtoMsg(message: QueryPayeeResponse): QueryPayeeResponseProtoMsg;
};
export declare const QueryCounterpartyPayeeRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryCounterpartyPayeeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyPayeeRequest;
    fromJSON(object: any): QueryCounterpartyPayeeRequest;
    toJSON(message: QueryCounterpartyPayeeRequest): unknown;
    fromPartial(object: DeepPartial<QueryCounterpartyPayeeRequest>): QueryCounterpartyPayeeRequest;
    fromSDK(object: QueryCounterpartyPayeeRequestSDKType): QueryCounterpartyPayeeRequest;
    toSDK(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestSDKType;
    fromAmino(object: QueryCounterpartyPayeeRequestAmino): QueryCounterpartyPayeeRequest;
    toAmino(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestAmino;
    fromAminoMsg(object: QueryCounterpartyPayeeRequestAminoMsg): QueryCounterpartyPayeeRequest;
    toAminoMsg(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestAminoMsg;
    fromProtoMsg(message: QueryCounterpartyPayeeRequestProtoMsg): QueryCounterpartyPayeeRequest;
    toProto(message: QueryCounterpartyPayeeRequest): Uint8Array;
    toProtoMsg(message: QueryCounterpartyPayeeRequest): QueryCounterpartyPayeeRequestProtoMsg;
};
export declare const QueryCounterpartyPayeeResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryCounterpartyPayeeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCounterpartyPayeeResponse;
    fromJSON(object: any): QueryCounterpartyPayeeResponse;
    toJSON(message: QueryCounterpartyPayeeResponse): unknown;
    fromPartial(object: DeepPartial<QueryCounterpartyPayeeResponse>): QueryCounterpartyPayeeResponse;
    fromSDK(object: QueryCounterpartyPayeeResponseSDKType): QueryCounterpartyPayeeResponse;
    toSDK(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseSDKType;
    fromAmino(object: QueryCounterpartyPayeeResponseAmino): QueryCounterpartyPayeeResponse;
    toAmino(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseAmino;
    fromAminoMsg(object: QueryCounterpartyPayeeResponseAminoMsg): QueryCounterpartyPayeeResponse;
    toAminoMsg(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseAminoMsg;
    fromProtoMsg(message: QueryCounterpartyPayeeResponseProtoMsg): QueryCounterpartyPayeeResponse;
    toProto(message: QueryCounterpartyPayeeResponse): Uint8Array;
    toProtoMsg(message: QueryCounterpartyPayeeResponse): QueryCounterpartyPayeeResponseProtoMsg;
};
export declare const QueryFeeEnabledChannelsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryFeeEnabledChannelsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelsRequest;
    fromJSON(object: any): QueryFeeEnabledChannelsRequest;
    toJSON(message: QueryFeeEnabledChannelsRequest): unknown;
    fromPartial(object: DeepPartial<QueryFeeEnabledChannelsRequest>): QueryFeeEnabledChannelsRequest;
    fromSDK(object: QueryFeeEnabledChannelsRequestSDKType): QueryFeeEnabledChannelsRequest;
    toSDK(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestSDKType;
    fromAmino(object: QueryFeeEnabledChannelsRequestAmino): QueryFeeEnabledChannelsRequest;
    toAmino(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestAmino;
    fromAminoMsg(object: QueryFeeEnabledChannelsRequestAminoMsg): QueryFeeEnabledChannelsRequest;
    toAminoMsg(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestAminoMsg;
    fromProtoMsg(message: QueryFeeEnabledChannelsRequestProtoMsg): QueryFeeEnabledChannelsRequest;
    toProto(message: QueryFeeEnabledChannelsRequest): Uint8Array;
    toProtoMsg(message: QueryFeeEnabledChannelsRequest): QueryFeeEnabledChannelsRequestProtoMsg;
};
export declare const QueryFeeEnabledChannelsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryFeeEnabledChannelsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelsResponse;
    fromJSON(object: any): QueryFeeEnabledChannelsResponse;
    toJSON(message: QueryFeeEnabledChannelsResponse): unknown;
    fromPartial(object: DeepPartial<QueryFeeEnabledChannelsResponse>): QueryFeeEnabledChannelsResponse;
    fromSDK(object: QueryFeeEnabledChannelsResponseSDKType): QueryFeeEnabledChannelsResponse;
    toSDK(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseSDKType;
    fromAmino(object: QueryFeeEnabledChannelsResponseAmino): QueryFeeEnabledChannelsResponse;
    toAmino(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseAmino;
    fromAminoMsg(object: QueryFeeEnabledChannelsResponseAminoMsg): QueryFeeEnabledChannelsResponse;
    toAminoMsg(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseAminoMsg;
    fromProtoMsg(message: QueryFeeEnabledChannelsResponseProtoMsg): QueryFeeEnabledChannelsResponse;
    toProto(message: QueryFeeEnabledChannelsResponse): Uint8Array;
    toProtoMsg(message: QueryFeeEnabledChannelsResponse): QueryFeeEnabledChannelsResponseProtoMsg;
};
export declare const QueryFeeEnabledChannelRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryFeeEnabledChannelRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelRequest;
    fromJSON(object: any): QueryFeeEnabledChannelRequest;
    toJSON(message: QueryFeeEnabledChannelRequest): unknown;
    fromPartial(object: DeepPartial<QueryFeeEnabledChannelRequest>): QueryFeeEnabledChannelRequest;
    fromSDK(object: QueryFeeEnabledChannelRequestSDKType): QueryFeeEnabledChannelRequest;
    toSDK(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestSDKType;
    fromAmino(object: QueryFeeEnabledChannelRequestAmino): QueryFeeEnabledChannelRequest;
    toAmino(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestAmino;
    fromAminoMsg(object: QueryFeeEnabledChannelRequestAminoMsg): QueryFeeEnabledChannelRequest;
    toAminoMsg(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestAminoMsg;
    fromProtoMsg(message: QueryFeeEnabledChannelRequestProtoMsg): QueryFeeEnabledChannelRequest;
    toProto(message: QueryFeeEnabledChannelRequest): Uint8Array;
    toProtoMsg(message: QueryFeeEnabledChannelRequest): QueryFeeEnabledChannelRequestProtoMsg;
};
export declare const QueryFeeEnabledChannelResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryFeeEnabledChannelResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryFeeEnabledChannelResponse;
    fromJSON(object: any): QueryFeeEnabledChannelResponse;
    toJSON(message: QueryFeeEnabledChannelResponse): unknown;
    fromPartial(object: DeepPartial<QueryFeeEnabledChannelResponse>): QueryFeeEnabledChannelResponse;
    fromSDK(object: QueryFeeEnabledChannelResponseSDKType): QueryFeeEnabledChannelResponse;
    toSDK(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseSDKType;
    fromAmino(object: QueryFeeEnabledChannelResponseAmino): QueryFeeEnabledChannelResponse;
    toAmino(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseAmino;
    fromAminoMsg(object: QueryFeeEnabledChannelResponseAminoMsg): QueryFeeEnabledChannelResponse;
    toAminoMsg(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseAminoMsg;
    fromProtoMsg(message: QueryFeeEnabledChannelResponseProtoMsg): QueryFeeEnabledChannelResponse;
    toProto(message: QueryFeeEnabledChannelResponse): Uint8Array;
    toProtoMsg(message: QueryFeeEnabledChannelResponse): QueryFeeEnabledChannelResponseProtoMsg;
};

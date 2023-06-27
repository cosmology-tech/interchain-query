import { InterchainAccountPacketData, InterchainAccountPacketDataAmino, InterchainAccountPacketDataSDKType } from "../../v1/packet";
import { Params, ParamsAmino, ParamsSDKType } from "./controller";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { DeepPartial } from "../../../../../helpers";
/** MsgRegisterInterchainAccount defines the payload for Msg/RegisterAccount */
export interface MsgRegisterInterchainAccount {
    owner: string;
    connectionId: string;
    version: string;
}
export interface MsgRegisterInterchainAccountProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount";
    value: Uint8Array;
}
/** MsgRegisterInterchainAccount defines the payload for Msg/RegisterAccount */
export interface MsgRegisterInterchainAccountAmino {
    owner: string;
    connection_id: string;
    version: string;
}
export interface MsgRegisterInterchainAccountAminoMsg {
    type: "cosmos-sdk/MsgRegisterInterchainAccount";
    value: MsgRegisterInterchainAccountAmino;
}
/** MsgRegisterInterchainAccount defines the payload for Msg/RegisterAccount */
export interface MsgRegisterInterchainAccountSDKType {
    owner: string;
    connection_id: string;
    version: string;
}
/** MsgRegisterInterchainAccountResponse defines the response for Msg/RegisterAccount */
export interface MsgRegisterInterchainAccountResponse {
    channelId: string;
    portId: string;
}
export interface MsgRegisterInterchainAccountResponseProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse";
    value: Uint8Array;
}
/** MsgRegisterInterchainAccountResponse defines the response for Msg/RegisterAccount */
export interface MsgRegisterInterchainAccountResponseAmino {
    channel_id: string;
    port_id: string;
}
export interface MsgRegisterInterchainAccountResponseAminoMsg {
    type: "cosmos-sdk/MsgRegisterInterchainAccountResponse";
    value: MsgRegisterInterchainAccountResponseAmino;
}
/** MsgRegisterInterchainAccountResponse defines the response for Msg/RegisterAccount */
export interface MsgRegisterInterchainAccountResponseSDKType {
    channel_id: string;
    port_id: string;
}
/** MsgSendTx defines the payload for Msg/SendTx */
export interface MsgSendTx {
    owner: string;
    connectionId: string;
    packetData: InterchainAccountPacketData;
    /**
     * Relative timeout timestamp provided will be added to the current block time during transaction execution.
     * The timeout timestamp must be non-zero.
     */
    relativeTimeout: bigint;
}
export interface MsgSendTxProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx";
    value: Uint8Array;
}
/** MsgSendTx defines the payload for Msg/SendTx */
export interface MsgSendTxAmino {
    owner: string;
    connection_id: string;
    packet_data?: InterchainAccountPacketDataAmino;
    /**
     * Relative timeout timestamp provided will be added to the current block time during transaction execution.
     * The timeout timestamp must be non-zero.
     */
    relative_timeout: string;
}
export interface MsgSendTxAminoMsg {
    type: "cosmos-sdk/MsgSendTx";
    value: MsgSendTxAmino;
}
/** MsgSendTx defines the payload for Msg/SendTx */
export interface MsgSendTxSDKType {
    owner: string;
    connection_id: string;
    packet_data: InterchainAccountPacketDataSDKType;
    relative_timeout: bigint;
}
/** MsgSendTxResponse defines the response for MsgSendTx */
export interface MsgSendTxResponse {
    sequence: bigint;
}
export interface MsgSendTxResponseProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse";
    value: Uint8Array;
}
/** MsgSendTxResponse defines the response for MsgSendTx */
export interface MsgSendTxResponseAmino {
    sequence: string;
}
export interface MsgSendTxResponseAminoMsg {
    type: "cosmos-sdk/MsgSendTxResponse";
    value: MsgSendTxResponseAmino;
}
/** MsgSendTxResponse defines the response for MsgSendTx */
export interface MsgSendTxResponseSDKType {
    sequence: bigint;
}
/** MsgUpdateParams defines the payload for Msg/UpdateParams */
export interface MsgUpdateParams {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the 27-interchain-accounts/controller parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParams";
    value: Uint8Array;
}
/** MsgUpdateParams defines the payload for Msg/UpdateParams */
export interface MsgUpdateParamsAmino {
    /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
    authority: string;
    /**
     * params defines the 27-interchain-accounts/controller parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "cosmos-sdk/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines the payload for Msg/UpdateParams */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/** MsgUpdateParamsResponse defines the response for Msg/UpdateParams */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/ibc.applications.interchain_accounts.controller.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/** MsgUpdateParamsResponse defines the response for Msg/UpdateParams */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "cosmos-sdk/MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/** MsgUpdateParamsResponse defines the response for Msg/UpdateParams */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgRegisterInterchainAccount: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgRegisterInterchainAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterInterchainAccount;
    fromJSON(object: any): MsgRegisterInterchainAccount;
    toJSON(message: MsgRegisterInterchainAccount): unknown;
    fromPartial(object: DeepPartial<MsgRegisterInterchainAccount>): MsgRegisterInterchainAccount;
    fromSDK(object: MsgRegisterInterchainAccountSDKType): MsgRegisterInterchainAccount;
    toSDK(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountSDKType;
    fromAmino(object: MsgRegisterInterchainAccountAmino): MsgRegisterInterchainAccount;
    toAmino(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountAmino;
    fromAminoMsg(object: MsgRegisterInterchainAccountAminoMsg): MsgRegisterInterchainAccount;
    toAminoMsg(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountAminoMsg;
    fromProtoMsg(message: MsgRegisterInterchainAccountProtoMsg): MsgRegisterInterchainAccount;
    toProto(message: MsgRegisterInterchainAccount): Uint8Array;
    toProtoMsg(message: MsgRegisterInterchainAccount): MsgRegisterInterchainAccountProtoMsg;
};
export declare const MsgRegisterInterchainAccountResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgRegisterInterchainAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterInterchainAccountResponse;
    fromJSON(object: any): MsgRegisterInterchainAccountResponse;
    toJSON(message: MsgRegisterInterchainAccountResponse): unknown;
    fromPartial(object: DeepPartial<MsgRegisterInterchainAccountResponse>): MsgRegisterInterchainAccountResponse;
    fromSDK(object: MsgRegisterInterchainAccountResponseSDKType): MsgRegisterInterchainAccountResponse;
    toSDK(message: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponseSDKType;
    fromAmino(object: MsgRegisterInterchainAccountResponseAmino): MsgRegisterInterchainAccountResponse;
    toAmino(message: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponseAmino;
    fromAminoMsg(object: MsgRegisterInterchainAccountResponseAminoMsg): MsgRegisterInterchainAccountResponse;
    toAminoMsg(message: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponseAminoMsg;
    fromProtoMsg(message: MsgRegisterInterchainAccountResponseProtoMsg): MsgRegisterInterchainAccountResponse;
    toProto(message: MsgRegisterInterchainAccountResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterInterchainAccountResponse): MsgRegisterInterchainAccountResponseProtoMsg;
};
export declare const MsgSendTx: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgSendTx, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSendTx;
    fromJSON(object: any): MsgSendTx;
    toJSON(message: MsgSendTx): unknown;
    fromPartial(object: DeepPartial<MsgSendTx>): MsgSendTx;
    fromSDK(object: MsgSendTxSDKType): MsgSendTx;
    toSDK(message: MsgSendTx): MsgSendTxSDKType;
    fromAmino(object: MsgSendTxAmino): MsgSendTx;
    toAmino(message: MsgSendTx): MsgSendTxAmino;
    fromAminoMsg(object: MsgSendTxAminoMsg): MsgSendTx;
    toAminoMsg(message: MsgSendTx): MsgSendTxAminoMsg;
    fromProtoMsg(message: MsgSendTxProtoMsg): MsgSendTx;
    toProto(message: MsgSendTx): Uint8Array;
    toProtoMsg(message: MsgSendTx): MsgSendTxProtoMsg;
};
export declare const MsgSendTxResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgSendTxResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSendTxResponse;
    fromJSON(object: any): MsgSendTxResponse;
    toJSON(message: MsgSendTxResponse): unknown;
    fromPartial(object: DeepPartial<MsgSendTxResponse>): MsgSendTxResponse;
    fromSDK(object: MsgSendTxResponseSDKType): MsgSendTxResponse;
    toSDK(message: MsgSendTxResponse): MsgSendTxResponseSDKType;
    fromAmino(object: MsgSendTxResponseAmino): MsgSendTxResponse;
    toAmino(message: MsgSendTxResponse): MsgSendTxResponseAmino;
    fromAminoMsg(object: MsgSendTxResponseAminoMsg): MsgSendTxResponse;
    toAminoMsg(message: MsgSendTxResponse): MsgSendTxResponseAminoMsg;
    fromProtoMsg(message: MsgSendTxResponseProtoMsg): MsgSendTxResponse;
    toProto(message: MsgSendTxResponse): Uint8Array;
    toProtoMsg(message: MsgSendTxResponse): MsgSendTxResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams;
    fromSDK(object: MsgUpdateParamsSDKType): MsgUpdateParams;
    toSDK(message: MsgUpdateParams): MsgUpdateParamsSDKType;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromSDK(_: MsgUpdateParamsResponseSDKType): MsgUpdateParamsResponse;
    toSDK(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseSDKType;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};

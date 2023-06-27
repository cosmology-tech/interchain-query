import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodAmino, PeriodSDKType } from "./vesting";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccount {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
    endTime: bigint;
    delayed: boolean;
}
export interface MsgCreateVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccount";
    value: Uint8Array;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountAmino {
    from_address: string;
    to_address: string;
    amount: CoinAmino[];
    end_time: string;
    delayed: boolean;
}
export interface MsgCreateVestingAccountAminoMsg {
    type: "cosmos-sdk/MsgCreateVestingAccount";
    value: MsgCreateVestingAccountAmino;
}
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 */
export interface MsgCreateVestingAccountSDKType {
    from_address: string;
    to_address: string;
    amount: CoinSDKType[];
    end_time: bigint;
    delayed: boolean;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponse {
}
export interface MsgCreateVestingAccountResponseProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse";
    value: Uint8Array;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseAmino {
}
export interface MsgCreateVestingAccountResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateVestingAccountResponse";
    value: MsgCreateVestingAccountResponseAmino;
}
/** MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type. */
export interface MsgCreateVestingAccountResponseSDKType {
}
/** MsgCreateClawbackVestingAccount defines a message that enables creating a ClawbackVestingAccount. */
export interface MsgCreateClawbackVestingAccount {
    /**
     * from_address specifies the account to provide the funds and sign the
     * clawback request
     */
    fromAddress: string;
    /** to_address specifies the account to receive the funds */
    toAddress: string;
    /** start_time defines the time at which the vesting period begins */
    startTime: bigint;
    /** lockup_periods defines the unlocking schedule relative to the start_time */
    lockupPeriods: Period[];
    /** vesting_periods defines the vesting schedule relative to the start_time */
    vestingPeriods: Period[];
    /**
     * merge specifies a creation mechanism for existing
     * ClawbackVestingAccounts. If true, merge this new grant into an existing
     * ClawbackVestingAccount, or create it if it does not exist. If false,
     * creates a new account. New grants to an existing account must be from the
     * same from_address.
     */
    merge: boolean;
}
export interface MsgCreateClawbackVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount";
    value: Uint8Array;
}
/** MsgCreateClawbackVestingAccount defines a message that enables creating a ClawbackVestingAccount. */
export interface MsgCreateClawbackVestingAccountAmino {
    /**
     * from_address specifies the account to provide the funds and sign the
     * clawback request
     */
    from_address: string;
    /** to_address specifies the account to receive the funds */
    to_address: string;
    /** start_time defines the time at which the vesting period begins */
    start_time: string;
    /** lockup_periods defines the unlocking schedule relative to the start_time */
    lockup_periods: PeriodAmino[];
    /** vesting_periods defines the vesting schedule relative to the start_time */
    vesting_periods: PeriodAmino[];
    /**
     * merge specifies a creation mechanism for existing
     * ClawbackVestingAccounts. If true, merge this new grant into an existing
     * ClawbackVestingAccount, or create it if it does not exist. If false,
     * creates a new account. New grants to an existing account must be from the
     * same from_address.
     */
    merge: boolean;
}
export interface MsgCreateClawbackVestingAccountAminoMsg {
    type: "cosmos-sdk/MsgCreateClawbackVestingAccount";
    value: MsgCreateClawbackVestingAccountAmino;
}
/** MsgCreateClawbackVestingAccount defines a message that enables creating a ClawbackVestingAccount. */
export interface MsgCreateClawbackVestingAccountSDKType {
    from_address: string;
    to_address: string;
    start_time: bigint;
    lockup_periods: PeriodSDKType[];
    vesting_periods: PeriodSDKType[];
    merge: boolean;
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponse {
}
export interface MsgCreateClawbackVestingAccountResponseProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccountResponse";
    value: Uint8Array;
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponseAmino {
}
export interface MsgCreateClawbackVestingAccountResponseAminoMsg {
    type: "cosmos-sdk/MsgCreateClawbackVestingAccountResponse";
    value: MsgCreateClawbackVestingAccountResponseAmino;
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponseSDKType {
}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawback {
    /** funder_address is the address which funded the account */
    funderAddress: string;
    /** address is the address of the ClawbackVestingAccount to claw back from. */
    address: string;
    /**
     * dest_address specifies where the clawed-back tokens should be transferred
     * to. If empty, the tokens will be transferred back to the original funder of
     * the account.
     */
    destAddress: string;
}
export interface MsgClawbackProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgClawback";
    value: Uint8Array;
}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawbackAmino {
    /** funder_address is the address which funded the account */
    funder_address: string;
    /** address is the address of the ClawbackVestingAccount to claw back from. */
    address: string;
    /**
     * dest_address specifies where the clawed-back tokens should be transferred
     * to. If empty, the tokens will be transferred back to the original funder of
     * the account.
     */
    dest_address: string;
}
export interface MsgClawbackAminoMsg {
    type: "cosmos-sdk/MsgClawback";
    value: MsgClawbackAmino;
}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawbackSDKType {
    funder_address: string;
    address: string;
    dest_address: string;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponse {
}
export interface MsgClawbackResponseProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.MsgClawbackResponse";
    value: Uint8Array;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponseAmino {
}
export interface MsgClawbackResponseAminoMsg {
    type: "cosmos-sdk/MsgClawbackResponse";
    value: MsgClawbackResponseAmino;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponseSDKType {
}
export declare const MsgCreateVestingAccount: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgCreateVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccount;
    fromJSON(object: any): MsgCreateVestingAccount;
    toJSON(message: MsgCreateVestingAccount): unknown;
    fromPartial(object: DeepPartial<MsgCreateVestingAccount>): MsgCreateVestingAccount;
    fromSDK(object: MsgCreateVestingAccountSDKType): MsgCreateVestingAccount;
    toSDK(message: MsgCreateVestingAccount): MsgCreateVestingAccountSDKType;
    fromAmino(object: MsgCreateVestingAccountAmino): MsgCreateVestingAccount;
    toAmino(message: MsgCreateVestingAccount): MsgCreateVestingAccountAmino;
    fromAminoMsg(object: MsgCreateVestingAccountAminoMsg): MsgCreateVestingAccount;
    toAminoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountAminoMsg;
    fromProtoMsg(message: MsgCreateVestingAccountProtoMsg): MsgCreateVestingAccount;
    toProto(message: MsgCreateVestingAccount): Uint8Array;
    toProtoMsg(message: MsgCreateVestingAccount): MsgCreateVestingAccountProtoMsg;
};
export declare const MsgCreateVestingAccountResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgCreateVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateVestingAccountResponse;
    fromJSON(_: any): MsgCreateVestingAccountResponse;
    toJSON(_: MsgCreateVestingAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateVestingAccountResponse>): MsgCreateVestingAccountResponse;
    fromSDK(_: MsgCreateVestingAccountResponseSDKType): MsgCreateVestingAccountResponse;
    toSDK(_: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseSDKType;
    fromAmino(_: MsgCreateVestingAccountResponseAmino): MsgCreateVestingAccountResponse;
    toAmino(_: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAmino;
    fromAminoMsg(object: MsgCreateVestingAccountResponseAminoMsg): MsgCreateVestingAccountResponse;
    toAminoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseAminoMsg;
    fromProtoMsg(message: MsgCreateVestingAccountResponseProtoMsg): MsgCreateVestingAccountResponse;
    toProto(message: MsgCreateVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreateVestingAccountResponse): MsgCreateVestingAccountResponseProtoMsg;
};
export declare const MsgCreateClawbackVestingAccount: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgCreateClawbackVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClawbackVestingAccount;
    fromJSON(object: any): MsgCreateClawbackVestingAccount;
    toJSON(message: MsgCreateClawbackVestingAccount): unknown;
    fromPartial(object: DeepPartial<MsgCreateClawbackVestingAccount>): MsgCreateClawbackVestingAccount;
    fromSDK(object: MsgCreateClawbackVestingAccountSDKType): MsgCreateClawbackVestingAccount;
    toSDK(message: MsgCreateClawbackVestingAccount): MsgCreateClawbackVestingAccountSDKType;
    fromAmino(object: MsgCreateClawbackVestingAccountAmino): MsgCreateClawbackVestingAccount;
    toAmino(message: MsgCreateClawbackVestingAccount): MsgCreateClawbackVestingAccountAmino;
    fromAminoMsg(object: MsgCreateClawbackVestingAccountAminoMsg): MsgCreateClawbackVestingAccount;
    toAminoMsg(message: MsgCreateClawbackVestingAccount): MsgCreateClawbackVestingAccountAminoMsg;
    fromProtoMsg(message: MsgCreateClawbackVestingAccountProtoMsg): MsgCreateClawbackVestingAccount;
    toProto(message: MsgCreateClawbackVestingAccount): Uint8Array;
    toProtoMsg(message: MsgCreateClawbackVestingAccount): MsgCreateClawbackVestingAccountProtoMsg;
};
export declare const MsgCreateClawbackVestingAccountResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgCreateClawbackVestingAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClawbackVestingAccountResponse;
    fromJSON(_: any): MsgCreateClawbackVestingAccountResponse;
    toJSON(_: MsgCreateClawbackVestingAccountResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateClawbackVestingAccountResponse>): MsgCreateClawbackVestingAccountResponse;
    fromSDK(_: MsgCreateClawbackVestingAccountResponseSDKType): MsgCreateClawbackVestingAccountResponse;
    toSDK(_: MsgCreateClawbackVestingAccountResponse): MsgCreateClawbackVestingAccountResponseSDKType;
    fromAmino(_: MsgCreateClawbackVestingAccountResponseAmino): MsgCreateClawbackVestingAccountResponse;
    toAmino(_: MsgCreateClawbackVestingAccountResponse): MsgCreateClawbackVestingAccountResponseAmino;
    fromAminoMsg(object: MsgCreateClawbackVestingAccountResponseAminoMsg): MsgCreateClawbackVestingAccountResponse;
    toAminoMsg(message: MsgCreateClawbackVestingAccountResponse): MsgCreateClawbackVestingAccountResponseAminoMsg;
    fromProtoMsg(message: MsgCreateClawbackVestingAccountResponseProtoMsg): MsgCreateClawbackVestingAccountResponse;
    toProto(message: MsgCreateClawbackVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreateClawbackVestingAccountResponse): MsgCreateClawbackVestingAccountResponseProtoMsg;
};
export declare const MsgClawback: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgClawback, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClawback;
    fromJSON(object: any): MsgClawback;
    toJSON(message: MsgClawback): unknown;
    fromPartial(object: DeepPartial<MsgClawback>): MsgClawback;
    fromSDK(object: MsgClawbackSDKType): MsgClawback;
    toSDK(message: MsgClawback): MsgClawbackSDKType;
    fromAmino(object: MsgClawbackAmino): MsgClawback;
    toAmino(message: MsgClawback): MsgClawbackAmino;
    fromAminoMsg(object: MsgClawbackAminoMsg): MsgClawback;
    toAminoMsg(message: MsgClawback): MsgClawbackAminoMsg;
    fromProtoMsg(message: MsgClawbackProtoMsg): MsgClawback;
    toProto(message: MsgClawback): Uint8Array;
    toProtoMsg(message: MsgClawback): MsgClawbackProtoMsg;
};
export declare const MsgClawbackResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgClawbackResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClawbackResponse;
    fromJSON(_: any): MsgClawbackResponse;
    toJSON(_: MsgClawbackResponse): unknown;
    fromPartial(_: DeepPartial<MsgClawbackResponse>): MsgClawbackResponse;
    fromSDK(_: MsgClawbackResponseSDKType): MsgClawbackResponse;
    toSDK(_: MsgClawbackResponse): MsgClawbackResponseSDKType;
    fromAmino(_: MsgClawbackResponseAmino): MsgClawbackResponse;
    toAmino(_: MsgClawbackResponse): MsgClawbackResponseAmino;
    fromAminoMsg(object: MsgClawbackResponseAminoMsg): MsgClawbackResponse;
    toAminoMsg(message: MsgClawbackResponse): MsgClawbackResponseAminoMsg;
    fromProtoMsg(message: MsgClawbackResponseProtoMsg): MsgClawbackResponse;
    toProto(message: MsgClawbackResponse): Uint8Array;
    toProtoMsg(message: MsgClawbackResponse): MsgClawbackResponseProtoMsg;
};

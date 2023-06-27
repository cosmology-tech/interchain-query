import { BaseAccount, BaseAccountAmino, BaseAccountSDKType } from "../../auth/v1beta1/auth";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
    baseAccount: BaseAccount;
    originalVesting: Coin[];
    delegatedFree: Coin[];
    delegatedVesting: Coin[];
    endTime: bigint;
}
export interface BaseVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.BaseVestingAccount";
    value: Uint8Array;
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccountAmino {
    base_account?: BaseAccountAmino;
    original_vesting: CoinAmino[];
    delegated_free: CoinAmino[];
    delegated_vesting: CoinAmino[];
    end_time: string;
}
export interface BaseVestingAccountAminoMsg {
    type: "cosmos-sdk/BaseVestingAccount";
    value: BaseVestingAccountAmino;
}
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccountSDKType {
    base_account: BaseAccountSDKType;
    original_vesting: CoinSDKType[];
    delegated_free: CoinSDKType[];
    delegated_vesting: CoinSDKType[];
    end_time: bigint;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccount {
    baseVestingAccount: BaseVestingAccount;
    startTime: bigint;
}
export interface ContinuousVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.ContinuousVestingAccount";
    value: Uint8Array;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccountAmino {
    base_vesting_account?: BaseVestingAccountAmino;
    start_time: string;
}
export interface ContinuousVestingAccountAminoMsg {
    type: "cosmos-sdk/ContinuousVestingAccount";
    value: ContinuousVestingAccountAmino;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccountSDKType {
    base_vesting_account: BaseVestingAccountSDKType;
    start_time: bigint;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccount {
    baseVestingAccount: BaseVestingAccount;
}
export interface DelayedVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.DelayedVestingAccount";
    value: Uint8Array;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccountAmino {
    base_vesting_account?: BaseVestingAccountAmino;
}
export interface DelayedVestingAccountAminoMsg {
    type: "cosmos-sdk/DelayedVestingAccount";
    value: DelayedVestingAccountAmino;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccountSDKType {
    base_vesting_account: BaseVestingAccountSDKType;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
    length: bigint;
    amount: Coin[];
}
export interface PeriodProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.Period";
    value: Uint8Array;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface PeriodAmino {
    length: string;
    amount: CoinAmino[];
}
export interface PeriodAminoMsg {
    type: "cosmos-sdk/Period";
    value: PeriodAmino;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface PeriodSDKType {
    length: bigint;
    amount: CoinSDKType[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccount {
    baseVestingAccount: BaseVestingAccount;
    startTime: bigint;
    vestingPeriods: Period[];
}
export interface PeriodicVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.PeriodicVestingAccount";
    value: Uint8Array;
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccountAmino {
    base_vesting_account?: BaseVestingAccountAmino;
    start_time: string;
    vesting_periods: PeriodAmino[];
}
export interface PeriodicVestingAccountAminoMsg {
    type: "cosmos-sdk/PeriodicVestingAccount";
    value: PeriodicVestingAccountAmino;
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccountSDKType {
    base_vesting_account: BaseVestingAccountSDKType;
    start_time: bigint;
    vesting_periods: PeriodSDKType[];
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 *
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccount {
    baseVestingAccount: BaseVestingAccount;
}
export interface PermanentLockedAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.PermanentLockedAccount";
    value: Uint8Array;
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 *
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccountAmino {
    base_vesting_account?: BaseVestingAccountAmino;
}
export interface PermanentLockedAccountAminoMsg {
    type: "cosmos-sdk/PermanentLockedAccount";
    value: PermanentLockedAccountAmino;
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 *
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccountSDKType {
    base_vesting_account: BaseVestingAccountSDKType;
}
/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 */
export interface ClawbackVestingAccount {
    baseVestingAccount: BaseVestingAccount;
    /** funder_address specifies the account which can perform clawback. */
    funderAddress: string;
    startTime: bigint;
    /** unlocking schedule relative to the BaseVestingAccount start_time. */
    lockupPeriods: Period[];
    /** vesting (i.e. immunity from clawback) schedule relative to the BaseVestingAccount start_time. */
    vestingPeriods: Period[];
}
export interface ClawbackVestingAccountProtoMsg {
    typeUrl: "/cosmos.vesting.v1beta1.ClawbackVestingAccount";
    value: Uint8Array;
}
/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 */
export interface ClawbackVestingAccountAmino {
    base_vesting_account?: BaseVestingAccountAmino;
    /** funder_address specifies the account which can perform clawback. */
    funder_address: string;
    start_time: string;
    /** unlocking schedule relative to the BaseVestingAccount start_time. */
    lockup_periods: PeriodAmino[];
    /** vesting (i.e. immunity from clawback) schedule relative to the BaseVestingAccount start_time. */
    vesting_periods: PeriodAmino[];
}
export interface ClawbackVestingAccountAminoMsg {
    type: "cosmos-sdk/ClawbackVestingAccount";
    value: ClawbackVestingAccountAmino;
}
/**
 * ClawbackVestingAccount implements the VestingAccount interface. It provides
 * an account that can hold contributions subject to "lockup" (like a
 * PeriodicVestingAccount), or vesting which is subject to clawback
 * of unvested tokens, or a combination (tokens vest, but are still locked).
 */
export interface ClawbackVestingAccountSDKType {
    base_vesting_account: BaseVestingAccountSDKType;
    funder_address: string;
    start_time: bigint;
    lockup_periods: PeriodSDKType[];
    vesting_periods: PeriodSDKType[];
}
export declare const BaseVestingAccount: {
    typeUrl: string;
    aminoType: string;
    encode(message: BaseVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BaseVestingAccount;
    fromJSON(object: any): BaseVestingAccount;
    toJSON(message: BaseVestingAccount): unknown;
    fromPartial(object: DeepPartial<BaseVestingAccount>): BaseVestingAccount;
    fromSDK(object: BaseVestingAccountSDKType): BaseVestingAccount;
    toSDK(message: BaseVestingAccount): BaseVestingAccountSDKType;
    fromAmino(object: BaseVestingAccountAmino): BaseVestingAccount;
    toAmino(message: BaseVestingAccount): BaseVestingAccountAmino;
    fromAminoMsg(object: BaseVestingAccountAminoMsg): BaseVestingAccount;
    toAminoMsg(message: BaseVestingAccount): BaseVestingAccountAminoMsg;
    fromProtoMsg(message: BaseVestingAccountProtoMsg): BaseVestingAccount;
    toProto(message: BaseVestingAccount): Uint8Array;
    toProtoMsg(message: BaseVestingAccount): BaseVestingAccountProtoMsg;
};
export declare const ContinuousVestingAccount: {
    typeUrl: string;
    aminoType: string;
    encode(message: ContinuousVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContinuousVestingAccount;
    fromJSON(object: any): ContinuousVestingAccount;
    toJSON(message: ContinuousVestingAccount): unknown;
    fromPartial(object: DeepPartial<ContinuousVestingAccount>): ContinuousVestingAccount;
    fromSDK(object: ContinuousVestingAccountSDKType): ContinuousVestingAccount;
    toSDK(message: ContinuousVestingAccount): ContinuousVestingAccountSDKType;
    fromAmino(object: ContinuousVestingAccountAmino): ContinuousVestingAccount;
    toAmino(message: ContinuousVestingAccount): ContinuousVestingAccountAmino;
    fromAminoMsg(object: ContinuousVestingAccountAminoMsg): ContinuousVestingAccount;
    toAminoMsg(message: ContinuousVestingAccount): ContinuousVestingAccountAminoMsg;
    fromProtoMsg(message: ContinuousVestingAccountProtoMsg): ContinuousVestingAccount;
    toProto(message: ContinuousVestingAccount): Uint8Array;
    toProtoMsg(message: ContinuousVestingAccount): ContinuousVestingAccountProtoMsg;
};
export declare const DelayedVestingAccount: {
    typeUrl: string;
    aminoType: string;
    encode(message: DelayedVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DelayedVestingAccount;
    fromJSON(object: any): DelayedVestingAccount;
    toJSON(message: DelayedVestingAccount): unknown;
    fromPartial(object: DeepPartial<DelayedVestingAccount>): DelayedVestingAccount;
    fromSDK(object: DelayedVestingAccountSDKType): DelayedVestingAccount;
    toSDK(message: DelayedVestingAccount): DelayedVestingAccountSDKType;
    fromAmino(object: DelayedVestingAccountAmino): DelayedVestingAccount;
    toAmino(message: DelayedVestingAccount): DelayedVestingAccountAmino;
    fromAminoMsg(object: DelayedVestingAccountAminoMsg): DelayedVestingAccount;
    toAminoMsg(message: DelayedVestingAccount): DelayedVestingAccountAminoMsg;
    fromProtoMsg(message: DelayedVestingAccountProtoMsg): DelayedVestingAccount;
    toProto(message: DelayedVestingAccount): Uint8Array;
    toProtoMsg(message: DelayedVestingAccount): DelayedVestingAccountProtoMsg;
};
export declare const Period: {
    typeUrl: string;
    aminoType: string;
    encode(message: Period, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Period;
    fromJSON(object: any): Period;
    toJSON(message: Period): unknown;
    fromPartial(object: DeepPartial<Period>): Period;
    fromSDK(object: PeriodSDKType): Period;
    toSDK(message: Period): PeriodSDKType;
    fromAmino(object: PeriodAmino): Period;
    toAmino(message: Period): PeriodAmino;
    fromAminoMsg(object: PeriodAminoMsg): Period;
    toAminoMsg(message: Period): PeriodAminoMsg;
    fromProtoMsg(message: PeriodProtoMsg): Period;
    toProto(message: Period): Uint8Array;
    toProtoMsg(message: Period): PeriodProtoMsg;
};
export declare const PeriodicVestingAccount: {
    typeUrl: string;
    aminoType: string;
    encode(message: PeriodicVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PeriodicVestingAccount;
    fromJSON(object: any): PeriodicVestingAccount;
    toJSON(message: PeriodicVestingAccount): unknown;
    fromPartial(object: DeepPartial<PeriodicVestingAccount>): PeriodicVestingAccount;
    fromSDK(object: PeriodicVestingAccountSDKType): PeriodicVestingAccount;
    toSDK(message: PeriodicVestingAccount): PeriodicVestingAccountSDKType;
    fromAmino(object: PeriodicVestingAccountAmino): PeriodicVestingAccount;
    toAmino(message: PeriodicVestingAccount): PeriodicVestingAccountAmino;
    fromAminoMsg(object: PeriodicVestingAccountAminoMsg): PeriodicVestingAccount;
    toAminoMsg(message: PeriodicVestingAccount): PeriodicVestingAccountAminoMsg;
    fromProtoMsg(message: PeriodicVestingAccountProtoMsg): PeriodicVestingAccount;
    toProto(message: PeriodicVestingAccount): Uint8Array;
    toProtoMsg(message: PeriodicVestingAccount): PeriodicVestingAccountProtoMsg;
};
export declare const PermanentLockedAccount: {
    typeUrl: string;
    aminoType: string;
    encode(message: PermanentLockedAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PermanentLockedAccount;
    fromJSON(object: any): PermanentLockedAccount;
    toJSON(message: PermanentLockedAccount): unknown;
    fromPartial(object: DeepPartial<PermanentLockedAccount>): PermanentLockedAccount;
    fromSDK(object: PermanentLockedAccountSDKType): PermanentLockedAccount;
    toSDK(message: PermanentLockedAccount): PermanentLockedAccountSDKType;
    fromAmino(object: PermanentLockedAccountAmino): PermanentLockedAccount;
    toAmino(message: PermanentLockedAccount): PermanentLockedAccountAmino;
    fromAminoMsg(object: PermanentLockedAccountAminoMsg): PermanentLockedAccount;
    toAminoMsg(message: PermanentLockedAccount): PermanentLockedAccountAminoMsg;
    fromProtoMsg(message: PermanentLockedAccountProtoMsg): PermanentLockedAccount;
    toProto(message: PermanentLockedAccount): Uint8Array;
    toProtoMsg(message: PermanentLockedAccount): PermanentLockedAccountProtoMsg;
};
export declare const ClawbackVestingAccount: {
    typeUrl: string;
    aminoType: string;
    encode(message: ClawbackVestingAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClawbackVestingAccount;
    fromJSON(object: any): ClawbackVestingAccount;
    toJSON(message: ClawbackVestingAccount): unknown;
    fromPartial(object: DeepPartial<ClawbackVestingAccount>): ClawbackVestingAccount;
    fromSDK(object: ClawbackVestingAccountSDKType): ClawbackVestingAccount;
    toSDK(message: ClawbackVestingAccount): ClawbackVestingAccountSDKType;
    fromAmino(object: ClawbackVestingAccountAmino): ClawbackVestingAccount;
    toAmino(message: ClawbackVestingAccount): ClawbackVestingAccountAmino;
    fromAminoMsg(object: ClawbackVestingAccountAminoMsg): ClawbackVestingAccount;
    toAminoMsg(message: ClawbackVestingAccount): ClawbackVestingAccountAminoMsg;
    fromProtoMsg(message: ClawbackVestingAccountProtoMsg): ClawbackVestingAccount;
    toProto(message: ClawbackVestingAccount): Uint8Array;
    toProtoMsg(message: ClawbackVestingAccount): ClawbackVestingAccountProtoMsg;
};

import { Params, ParamsAmino, ParamsSDKType, Metadata, MetadataAmino, MetadataSDKType } from "./bank";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the bank module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    /** balances is an array containing the balances of all the accounts. */
    balances: Balance[];
    /**
     * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
     * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
     */
    supply: Coin[];
    /** denom_metadata defines the metadata of the differents coins. */
    denomMetadata: Metadata[];
    /** supply_offsets defines the amount of supply offset. */
    supplyOffsets: GenesisSupplyOffset[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the bank module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the paramaters of the module. */
    params?: ParamsAmino;
    /** balances is an array containing the balances of all the accounts. */
    balances: BalanceAmino[];
    /**
     * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
     * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
     */
    supply: CoinAmino[];
    /** denom_metadata defines the metadata of the differents coins. */
    denom_metadata: MetadataAmino[];
    /** supply_offsets defines the amount of supply offset. */
    supply_offsets: GenesisSupplyOffsetAmino[];
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the bank module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    balances: BalanceSDKType[];
    supply: CoinSDKType[];
    denom_metadata: MetadataSDKType[];
    supply_offsets: GenesisSupplyOffsetSDKType[];
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 */
export interface Balance {
    /** address is the address of the balance holder. */
    address: string;
    /** coins defines the different coins this balance holds. */
    coins: Coin[];
}
export interface BalanceProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.Balance";
    value: Uint8Array;
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 */
export interface BalanceAmino {
    /** address is the address of the balance holder. */
    address: string;
    /** coins defines the different coins this balance holds. */
    coins: CoinAmino[];
}
export interface BalanceAminoMsg {
    type: "cosmos-sdk/Balance";
    value: BalanceAmino;
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 */
export interface BalanceSDKType {
    address: string;
    coins: CoinSDKType[];
}
/**
 * GenesisSupplyOffset encodes the supply offsets, just for genesis.
 * The offsets are serialized directly by denom in state.
 */
export interface GenesisSupplyOffset {
    /** Denom */
    denom: string;
    /** SupplyOffset */
    offset: string;
}
export interface GenesisSupplyOffsetProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.GenesisSupplyOffset";
    value: Uint8Array;
}
/**
 * GenesisSupplyOffset encodes the supply offsets, just for genesis.
 * The offsets are serialized directly by denom in state.
 */
export interface GenesisSupplyOffsetAmino {
    /** Denom */
    denom: string;
    /** SupplyOffset */
    offset: string;
}
export interface GenesisSupplyOffsetAminoMsg {
    type: "cosmos-sdk/GenesisSupplyOffset";
    value: GenesisSupplyOffsetAmino;
}
/**
 * GenesisSupplyOffset encodes the supply offsets, just for genesis.
 * The offsets are serialized directly by denom in state.
 */
export interface GenesisSupplyOffsetSDKType {
    denom: string;
    offset: string;
}
export declare const GenesisState: {
    typeUrl: string;
    aminoType: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromSDK(object: GenesisStateSDKType): GenesisState;
    toSDK(message: GenesisState): GenesisStateSDKType;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const Balance: {
    typeUrl: string;
    aminoType: string;
    encode(message: Balance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Balance;
    fromJSON(object: any): Balance;
    toJSON(message: Balance): unknown;
    fromPartial(object: DeepPartial<Balance>): Balance;
    fromSDK(object: BalanceSDKType): Balance;
    toSDK(message: Balance): BalanceSDKType;
    fromAmino(object: BalanceAmino): Balance;
    toAmino(message: Balance): BalanceAmino;
    fromAminoMsg(object: BalanceAminoMsg): Balance;
    toAminoMsg(message: Balance): BalanceAminoMsg;
    fromProtoMsg(message: BalanceProtoMsg): Balance;
    toProto(message: Balance): Uint8Array;
    toProtoMsg(message: Balance): BalanceProtoMsg;
};
export declare const GenesisSupplyOffset: {
    typeUrl: string;
    aminoType: string;
    encode(message: GenesisSupplyOffset, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisSupplyOffset;
    fromJSON(object: any): GenesisSupplyOffset;
    toJSON(message: GenesisSupplyOffset): unknown;
    fromPartial(object: DeepPartial<GenesisSupplyOffset>): GenesisSupplyOffset;
    fromSDK(object: GenesisSupplyOffsetSDKType): GenesisSupplyOffset;
    toSDK(message: GenesisSupplyOffset): GenesisSupplyOffsetSDKType;
    fromAmino(object: GenesisSupplyOffsetAmino): GenesisSupplyOffset;
    toAmino(message: GenesisSupplyOffset): GenesisSupplyOffsetAmino;
    fromAminoMsg(object: GenesisSupplyOffsetAminoMsg): GenesisSupplyOffset;
    toAminoMsg(message: GenesisSupplyOffset): GenesisSupplyOffsetAminoMsg;
    fromProtoMsg(message: GenesisSupplyOffsetProtoMsg): GenesisSupplyOffset;
    toProto(message: GenesisSupplyOffset): Uint8Array;
    toProtoMsg(message: GenesisSupplyOffset): GenesisSupplyOffsetProtoMsg;
};

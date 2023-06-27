import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorization {
    /** Grants for contract executions */
    grants: ContractGrant[];
}
export interface ContractExecutionAuthorizationProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ContractExecutionAuthorization";
    value: Uint8Array;
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorizationAmino {
    /** Grants for contract executions */
    grants: ContractGrantAmino[];
}
export interface ContractExecutionAuthorizationAminoMsg {
    type: "wasm/ContractExecutionAuthorization";
    value: ContractExecutionAuthorizationAmino;
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 */
export interface ContractExecutionAuthorizationSDKType {
    grants: ContractGrantSDKType[];
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorization {
    /** Grants for contract migrations */
    grants: ContractGrant[];
}
export interface ContractMigrationAuthorizationProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ContractMigrationAuthorization";
    value: Uint8Array;
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorizationAmino {
    /** Grants for contract migrations */
    grants: ContractGrantAmino[];
}
export interface ContractMigrationAuthorizationAminoMsg {
    type: "wasm/ContractMigrationAuthorization";
    value: ContractMigrationAuthorizationAmino;
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 */
export interface ContractMigrationAuthorizationSDKType {
    grants: ContractGrantSDKType[];
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrant {
    /** Contract is the bech32 address of the smart contract */
    contract: string;
    /**
     * Limit defines execution limits that are enforced and updated when the grant
     * is applied. When the limit lapsed the grant is removed.
     */
    limit: Any;
    /**
     * Filter define more fine-grained control on the message payload passed
     * to the contract in the operation. When no filter applies on execution, the
     * operation is prohibited.
     */
    filter: Any;
}
export interface ContractGrantProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.ContractGrant";
    value: Uint8Array;
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrantAmino {
    /** Contract is the bech32 address of the smart contract */
    contract: string;
    /**
     * Limit defines execution limits that are enforced and updated when the grant
     * is applied. When the limit lapsed the grant is removed.
     */
    limit?: AnyAmino;
    /**
     * Filter define more fine-grained control on the message payload passed
     * to the contract in the operation. When no filter applies on execution, the
     * operation is prohibited.
     */
    filter?: AnyAmino;
}
export interface ContractGrantAminoMsg {
    type: "wasm/ContractGrant";
    value: ContractGrantAmino;
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 */
export interface ContractGrantSDKType {
    contract: string;
    limit: AnySDKType;
    filter: AnySDKType;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimit {
    /** Remaining number that is decremented on each execution */
    remaining: bigint;
}
export interface MaxCallsLimitProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MaxCallsLimit";
    value: Uint8Array;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimitAmino {
    /** Remaining number that is decremented on each execution */
    remaining: string;
}
export interface MaxCallsLimitAminoMsg {
    type: "wasm/MaxCallsLimit";
    value: MaxCallsLimitAmino;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 */
export interface MaxCallsLimitSDKType {
    remaining: bigint;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimit {
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: Coin[];
}
export interface MaxFundsLimitProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MaxFundsLimit";
    value: Uint8Array;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimitAmino {
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: CoinAmino[];
}
export interface MaxFundsLimitAminoMsg {
    type: "wasm/MaxFundsLimit";
    value: MaxFundsLimitAmino;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 */
export interface MaxFundsLimitSDKType {
    amounts: CoinSDKType[];
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimit {
    /** Remaining number that is decremented on each execution */
    callsRemaining: bigint;
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: Coin[];
}
export interface CombinedLimitProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.CombinedLimit";
    value: Uint8Array;
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimitAmino {
    /** Remaining number that is decremented on each execution */
    calls_remaining: string;
    /** Amounts is the maximal amount of tokens transferable to the contract. */
    amounts: CoinAmino[];
}
export interface CombinedLimitAminoMsg {
    type: "wasm/CombinedLimit";
    value: CombinedLimitAmino;
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 */
export interface CombinedLimitSDKType {
    calls_remaining: bigint;
    amounts: CoinSDKType[];
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilter {
}
export interface AllowAllMessagesFilterProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AllowAllMessagesFilter";
    value: Uint8Array;
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilterAmino {
}
export interface AllowAllMessagesFilterAminoMsg {
    type: "wasm/AllowAllMessagesFilter";
    value: AllowAllMessagesFilterAmino;
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 */
export interface AllowAllMessagesFilterSDKType {
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilter {
    /** Messages is the list of unique keys */
    keys: string[];
}
export interface AcceptedMessageKeysFilterProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
    value: Uint8Array;
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilterAmino {
    /** Messages is the list of unique keys */
    keys: string[];
}
export interface AcceptedMessageKeysFilterAminoMsg {
    type: "wasm/AcceptedMessageKeysFilter";
    value: AcceptedMessageKeysFilterAmino;
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessageKeysFilterSDKType {
    keys: string[];
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilter {
    /** Messages is the list of raw contract messages */
    messages: Uint8Array[];
}
export interface AcceptedMessagesFilterProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.AcceptedMessagesFilter";
    value: Uint8Array;
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilterAmino {
    /** Messages is the list of raw contract messages */
    messages: Uint8Array[];
}
export interface AcceptedMessagesFilterAminoMsg {
    type: "wasm/AcceptedMessagesFilter";
    value: AcceptedMessagesFilterAmino;
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 */
export interface AcceptedMessagesFilterSDKType {
    messages: Uint8Array[];
}
export declare const ContractExecutionAuthorization: {
    typeUrl: string;
    aminoType: string;
    encode(message: ContractExecutionAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractExecutionAuthorization;
    fromJSON(object: any): ContractExecutionAuthorization;
    toJSON(message: ContractExecutionAuthorization): unknown;
    fromPartial(object: DeepPartial<ContractExecutionAuthorization>): ContractExecutionAuthorization;
    fromSDK(object: ContractExecutionAuthorizationSDKType): ContractExecutionAuthorization;
    toSDK(message: ContractExecutionAuthorization): ContractExecutionAuthorizationSDKType;
    fromAmino(object: ContractExecutionAuthorizationAmino): ContractExecutionAuthorization;
    toAmino(message: ContractExecutionAuthorization): ContractExecutionAuthorizationAmino;
    fromAminoMsg(object: ContractExecutionAuthorizationAminoMsg): ContractExecutionAuthorization;
    toAminoMsg(message: ContractExecutionAuthorization): ContractExecutionAuthorizationAminoMsg;
    fromProtoMsg(message: ContractExecutionAuthorizationProtoMsg): ContractExecutionAuthorization;
    toProto(message: ContractExecutionAuthorization): Uint8Array;
    toProtoMsg(message: ContractExecutionAuthorization): ContractExecutionAuthorizationProtoMsg;
};
export declare const ContractMigrationAuthorization: {
    typeUrl: string;
    aminoType: string;
    encode(message: ContractMigrationAuthorization, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractMigrationAuthorization;
    fromJSON(object: any): ContractMigrationAuthorization;
    toJSON(message: ContractMigrationAuthorization): unknown;
    fromPartial(object: DeepPartial<ContractMigrationAuthorization>): ContractMigrationAuthorization;
    fromSDK(object: ContractMigrationAuthorizationSDKType): ContractMigrationAuthorization;
    toSDK(message: ContractMigrationAuthorization): ContractMigrationAuthorizationSDKType;
    fromAmino(object: ContractMigrationAuthorizationAmino): ContractMigrationAuthorization;
    toAmino(message: ContractMigrationAuthorization): ContractMigrationAuthorizationAmino;
    fromAminoMsg(object: ContractMigrationAuthorizationAminoMsg): ContractMigrationAuthorization;
    toAminoMsg(message: ContractMigrationAuthorization): ContractMigrationAuthorizationAminoMsg;
    fromProtoMsg(message: ContractMigrationAuthorizationProtoMsg): ContractMigrationAuthorization;
    toProto(message: ContractMigrationAuthorization): Uint8Array;
    toProtoMsg(message: ContractMigrationAuthorization): ContractMigrationAuthorizationProtoMsg;
};
export declare const ContractGrant: {
    typeUrl: string;
    aminoType: string;
    encode(message: ContractGrant, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ContractGrant;
    fromJSON(object: any): ContractGrant;
    toJSON(message: ContractGrant): unknown;
    fromPartial(object: DeepPartial<ContractGrant>): ContractGrant;
    fromSDK(object: ContractGrantSDKType): ContractGrant;
    toSDK(message: ContractGrant): ContractGrantSDKType;
    fromAmino(object: ContractGrantAmino): ContractGrant;
    toAmino(message: ContractGrant): ContractGrantAmino;
    fromAminoMsg(object: ContractGrantAminoMsg): ContractGrant;
    toAminoMsg(message: ContractGrant): ContractGrantAminoMsg;
    fromProtoMsg(message: ContractGrantProtoMsg): ContractGrant;
    toProto(message: ContractGrant): Uint8Array;
    toProtoMsg(message: ContractGrant): ContractGrantProtoMsg;
};
export declare const MaxCallsLimit: {
    typeUrl: string;
    aminoType: string;
    encode(message: MaxCallsLimit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MaxCallsLimit;
    fromJSON(object: any): MaxCallsLimit;
    toJSON(message: MaxCallsLimit): unknown;
    fromPartial(object: DeepPartial<MaxCallsLimit>): MaxCallsLimit;
    fromSDK(object: MaxCallsLimitSDKType): MaxCallsLimit;
    toSDK(message: MaxCallsLimit): MaxCallsLimitSDKType;
    fromAmino(object: MaxCallsLimitAmino): MaxCallsLimit;
    toAmino(message: MaxCallsLimit): MaxCallsLimitAmino;
    fromAminoMsg(object: MaxCallsLimitAminoMsg): MaxCallsLimit;
    toAminoMsg(message: MaxCallsLimit): MaxCallsLimitAminoMsg;
    fromProtoMsg(message: MaxCallsLimitProtoMsg): MaxCallsLimit;
    toProto(message: MaxCallsLimit): Uint8Array;
    toProtoMsg(message: MaxCallsLimit): MaxCallsLimitProtoMsg;
};
export declare const MaxFundsLimit: {
    typeUrl: string;
    aminoType: string;
    encode(message: MaxFundsLimit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MaxFundsLimit;
    fromJSON(object: any): MaxFundsLimit;
    toJSON(message: MaxFundsLimit): unknown;
    fromPartial(object: DeepPartial<MaxFundsLimit>): MaxFundsLimit;
    fromSDK(object: MaxFundsLimitSDKType): MaxFundsLimit;
    toSDK(message: MaxFundsLimit): MaxFundsLimitSDKType;
    fromAmino(object: MaxFundsLimitAmino): MaxFundsLimit;
    toAmino(message: MaxFundsLimit): MaxFundsLimitAmino;
    fromAminoMsg(object: MaxFundsLimitAminoMsg): MaxFundsLimit;
    toAminoMsg(message: MaxFundsLimit): MaxFundsLimitAminoMsg;
    fromProtoMsg(message: MaxFundsLimitProtoMsg): MaxFundsLimit;
    toProto(message: MaxFundsLimit): Uint8Array;
    toProtoMsg(message: MaxFundsLimit): MaxFundsLimitProtoMsg;
};
export declare const CombinedLimit: {
    typeUrl: string;
    aminoType: string;
    encode(message: CombinedLimit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CombinedLimit;
    fromJSON(object: any): CombinedLimit;
    toJSON(message: CombinedLimit): unknown;
    fromPartial(object: DeepPartial<CombinedLimit>): CombinedLimit;
    fromSDK(object: CombinedLimitSDKType): CombinedLimit;
    toSDK(message: CombinedLimit): CombinedLimitSDKType;
    fromAmino(object: CombinedLimitAmino): CombinedLimit;
    toAmino(message: CombinedLimit): CombinedLimitAmino;
    fromAminoMsg(object: CombinedLimitAminoMsg): CombinedLimit;
    toAminoMsg(message: CombinedLimit): CombinedLimitAminoMsg;
    fromProtoMsg(message: CombinedLimitProtoMsg): CombinedLimit;
    toProto(message: CombinedLimit): Uint8Array;
    toProtoMsg(message: CombinedLimit): CombinedLimitProtoMsg;
};
export declare const AllowAllMessagesFilter: {
    typeUrl: string;
    aminoType: string;
    encode(_: AllowAllMessagesFilter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AllowAllMessagesFilter;
    fromJSON(_: any): AllowAllMessagesFilter;
    toJSON(_: AllowAllMessagesFilter): unknown;
    fromPartial(_: DeepPartial<AllowAllMessagesFilter>): AllowAllMessagesFilter;
    fromSDK(_: AllowAllMessagesFilterSDKType): AllowAllMessagesFilter;
    toSDK(_: AllowAllMessagesFilter): AllowAllMessagesFilterSDKType;
    fromAmino(_: AllowAllMessagesFilterAmino): AllowAllMessagesFilter;
    toAmino(_: AllowAllMessagesFilter): AllowAllMessagesFilterAmino;
    fromAminoMsg(object: AllowAllMessagesFilterAminoMsg): AllowAllMessagesFilter;
    toAminoMsg(message: AllowAllMessagesFilter): AllowAllMessagesFilterAminoMsg;
    fromProtoMsg(message: AllowAllMessagesFilterProtoMsg): AllowAllMessagesFilter;
    toProto(message: AllowAllMessagesFilter): Uint8Array;
    toProtoMsg(message: AllowAllMessagesFilter): AllowAllMessagesFilterProtoMsg;
};
export declare const AcceptedMessageKeysFilter: {
    typeUrl: string;
    aminoType: string;
    encode(message: AcceptedMessageKeysFilter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AcceptedMessageKeysFilter;
    fromJSON(object: any): AcceptedMessageKeysFilter;
    toJSON(message: AcceptedMessageKeysFilter): unknown;
    fromPartial(object: DeepPartial<AcceptedMessageKeysFilter>): AcceptedMessageKeysFilter;
    fromSDK(object: AcceptedMessageKeysFilterSDKType): AcceptedMessageKeysFilter;
    toSDK(message: AcceptedMessageKeysFilter): AcceptedMessageKeysFilterSDKType;
    fromAmino(object: AcceptedMessageKeysFilterAmino): AcceptedMessageKeysFilter;
    toAmino(message: AcceptedMessageKeysFilter): AcceptedMessageKeysFilterAmino;
    fromAminoMsg(object: AcceptedMessageKeysFilterAminoMsg): AcceptedMessageKeysFilter;
    toAminoMsg(message: AcceptedMessageKeysFilter): AcceptedMessageKeysFilterAminoMsg;
    fromProtoMsg(message: AcceptedMessageKeysFilterProtoMsg): AcceptedMessageKeysFilter;
    toProto(message: AcceptedMessageKeysFilter): Uint8Array;
    toProtoMsg(message: AcceptedMessageKeysFilter): AcceptedMessageKeysFilterProtoMsg;
};
export declare const AcceptedMessagesFilter: {
    typeUrl: string;
    aminoType: string;
    encode(message: AcceptedMessagesFilter, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): AcceptedMessagesFilter;
    fromJSON(object: any): AcceptedMessagesFilter;
    toJSON(message: AcceptedMessagesFilter): unknown;
    fromPartial(object: DeepPartial<AcceptedMessagesFilter>): AcceptedMessagesFilter;
    fromSDK(object: AcceptedMessagesFilterSDKType): AcceptedMessagesFilter;
    toSDK(message: AcceptedMessagesFilter): AcceptedMessagesFilterSDKType;
    fromAmino(object: AcceptedMessagesFilterAmino): AcceptedMessagesFilter;
    toAmino(message: AcceptedMessagesFilter): AcceptedMessagesFilterAmino;
    fromAminoMsg(object: AcceptedMessagesFilterAminoMsg): AcceptedMessagesFilter;
    toAminoMsg(message: AcceptedMessagesFilter): AcceptedMessagesFilterAminoMsg;
    fromProtoMsg(message: AcceptedMessagesFilterProtoMsg): AcceptedMessagesFilter;
    toProto(message: AcceptedMessagesFilter): Uint8Array;
    toProtoMsg(message: AcceptedMessagesFilter): AcceptedMessagesFilterProtoMsg;
};

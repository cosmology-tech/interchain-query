import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface ValidatorSet {
    validators: Validator[];
    proposer?: Validator;
    totalVotingPower: bigint;
}
export interface ValidatorSetProtoMsg {
    typeUrl: "/tendermint.types.ValidatorSet";
    value: Uint8Array;
}
export interface ValidatorSetAmino {
    validators: ValidatorAmino[];
    proposer?: ValidatorAmino;
    total_voting_power: string;
}
export interface ValidatorSetAminoMsg {
    type: "/tendermint.types.ValidatorSet";
    value: ValidatorSetAmino;
}
export interface ValidatorSetSDKType {
    validators: ValidatorSDKType[];
    proposer?: ValidatorSDKType;
    total_voting_power: bigint;
}
export interface Validator {
    address: Uint8Array;
    pubKey?: PublicKey;
    votingPower: bigint;
    proposerPriority: bigint;
}
export interface ValidatorProtoMsg {
    typeUrl: "/tendermint.types.Validator";
    value: Uint8Array;
}
export interface ValidatorAmino {
    address: Uint8Array;
    pub_key?: PublicKeyAmino;
    voting_power: string;
    proposer_priority: string;
}
export interface ValidatorAminoMsg {
    type: "/tendermint.types.Validator";
    value: ValidatorAmino;
}
export interface ValidatorSDKType {
    address: Uint8Array;
    pub_key?: PublicKeySDKType;
    voting_power: bigint;
    proposer_priority: bigint;
}
export interface SimpleValidator {
    pubKey?: PublicKey;
    votingPower: bigint;
}
export interface SimpleValidatorProtoMsg {
    typeUrl: "/tendermint.types.SimpleValidator";
    value: Uint8Array;
}
export interface SimpleValidatorAmino {
    pub_key?: PublicKeyAmino;
    voting_power: string;
}
export interface SimpleValidatorAminoMsg {
    type: "/tendermint.types.SimpleValidator";
    value: SimpleValidatorAmino;
}
export interface SimpleValidatorSDKType {
    pub_key?: PublicKeySDKType;
    voting_power: bigint;
}
export declare const ValidatorSet: {
    typeUrl: string;
    encode(message: ValidatorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSet;
    fromJSON(object: any): ValidatorSet;
    toJSON(message: ValidatorSet): unknown;
    fromPartial(object: DeepPartial<ValidatorSet>): ValidatorSet;
    fromSDK(object: ValidatorSetSDKType): ValidatorSet;
    toSDK(message: ValidatorSet): ValidatorSetSDKType;
    fromAmino(object: ValidatorSetAmino): ValidatorSet;
    toAmino(message: ValidatorSet): ValidatorSetAmino;
    fromAminoMsg(object: ValidatorSetAminoMsg): ValidatorSet;
    fromProtoMsg(message: ValidatorSetProtoMsg): ValidatorSet;
    toProto(message: ValidatorSet): Uint8Array;
    toProtoMsg(message: ValidatorSet): ValidatorSetProtoMsg;
};
export declare const Validator: {
    typeUrl: string;
    encode(message: Validator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial(object: DeepPartial<Validator>): Validator;
    fromSDK(object: ValidatorSDKType): Validator;
    toSDK(message: Validator): ValidatorSDKType;
    fromAmino(object: ValidatorAmino): Validator;
    toAmino(message: Validator): ValidatorAmino;
    fromAminoMsg(object: ValidatorAminoMsg): Validator;
    fromProtoMsg(message: ValidatorProtoMsg): Validator;
    toProto(message: Validator): Uint8Array;
    toProtoMsg(message: Validator): ValidatorProtoMsg;
};
export declare const SimpleValidator: {
    typeUrl: string;
    encode(message: SimpleValidator, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SimpleValidator;
    fromJSON(object: any): SimpleValidator;
    toJSON(message: SimpleValidator): unknown;
    fromPartial(object: DeepPartial<SimpleValidator>): SimpleValidator;
    fromSDK(object: SimpleValidatorSDKType): SimpleValidator;
    toSDK(message: SimpleValidator): SimpleValidatorSDKType;
    fromAmino(object: SimpleValidatorAmino): SimpleValidator;
    toAmino(message: SimpleValidator): SimpleValidatorAmino;
    fromAminoMsg(object: SimpleValidatorAminoMsg): SimpleValidator;
    fromProtoMsg(message: SimpleValidatorProtoMsg): SimpleValidator;
    toProto(message: SimpleValidator): Uint8Array;
    toProtoMsg(message: SimpleValidator): SimpleValidatorProtoMsg;
};

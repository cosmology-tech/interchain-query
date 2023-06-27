import * as _106 from "./v1/capability";
import * as _107 from "./v1/genesis";
export declare namespace capability {
    const v1: {
        GenesisOwners: {
            typeUrl: string;
            encode(message: _107.GenesisOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.GenesisOwners;
            fromJSON(object: any): _107.GenesisOwners;
            toJSON(message: _107.GenesisOwners): unknown;
            fromPartial(object: {
                index?: bigint;
                indexOwners?: {
                    owners?: {
                        module?: string;
                        name?: string;
                    }[];
                };
            }): _107.GenesisOwners;
            fromSDK(object: _107.GenesisOwnersSDKType): _107.GenesisOwners;
            toSDK(message: _107.GenesisOwners): _107.GenesisOwnersSDKType;
            fromAmino(object: _107.GenesisOwnersAmino): _107.GenesisOwners;
            toAmino(message: _107.GenesisOwners): _107.GenesisOwnersAmino;
            fromAminoMsg(object: _107.GenesisOwnersAminoMsg): _107.GenesisOwners;
            fromProtoMsg(message: _107.GenesisOwnersProtoMsg): _107.GenesisOwners;
            toProto(message: _107.GenesisOwners): Uint8Array;
            toProtoMsg(message: _107.GenesisOwners): _107.GenesisOwnersProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _107.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _107.GenesisState;
            fromJSON(object: any): _107.GenesisState;
            toJSON(message: _107.GenesisState): unknown;
            fromPartial(object: {
                index?: bigint;
                owners?: {
                    index?: bigint;
                    indexOwners?: {
                        owners?: {
                            module?: string;
                            name?: string;
                        }[];
                    };
                }[];
            }): _107.GenesisState;
            fromSDK(object: _107.GenesisStateSDKType): _107.GenesisState;
            toSDK(message: _107.GenesisState): _107.GenesisStateSDKType;
            fromAmino(object: _107.GenesisStateAmino): _107.GenesisState;
            toAmino(message: _107.GenesisState): _107.GenesisStateAmino;
            fromAminoMsg(object: _107.GenesisStateAminoMsg): _107.GenesisState;
            fromProtoMsg(message: _107.GenesisStateProtoMsg): _107.GenesisState;
            toProto(message: _107.GenesisState): Uint8Array;
            toProtoMsg(message: _107.GenesisState): _107.GenesisStateProtoMsg;
        };
        Capability: {
            typeUrl: string;
            encode(message: _106.Capability, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.Capability;
            fromJSON(object: any): _106.Capability;
            toJSON(message: _106.Capability): unknown;
            fromPartial(object: {
                index?: bigint;
            }): _106.Capability;
            fromSDK(object: _106.CapabilitySDKType): _106.Capability;
            toSDK(message: _106.Capability): _106.CapabilitySDKType;
            fromAmino(object: _106.CapabilityAmino): _106.Capability;
            toAmino(message: _106.Capability): _106.CapabilityAmino;
            fromAminoMsg(object: _106.CapabilityAminoMsg): _106.Capability;
            fromProtoMsg(message: _106.CapabilityProtoMsg): _106.Capability;
            toProto(message: _106.Capability): Uint8Array;
            toProtoMsg(message: _106.Capability): _106.CapabilityProtoMsg;
        };
        Owner: {
            typeUrl: string;
            encode(message: _106.Owner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.Owner;
            fromJSON(object: any): _106.Owner;
            toJSON(message: _106.Owner): unknown;
            fromPartial(object: {
                module?: string;
                name?: string;
            }): _106.Owner;
            fromSDK(object: _106.OwnerSDKType): _106.Owner;
            toSDK(message: _106.Owner): _106.OwnerSDKType;
            fromAmino(object: _106.OwnerAmino): _106.Owner;
            toAmino(message: _106.Owner): _106.OwnerAmino;
            fromAminoMsg(object: _106.OwnerAminoMsg): _106.Owner;
            fromProtoMsg(message: _106.OwnerProtoMsg): _106.Owner;
            toProto(message: _106.Owner): Uint8Array;
            toProtoMsg(message: _106.Owner): _106.OwnerProtoMsg;
        };
        CapabilityOwners: {
            typeUrl: string;
            encode(message: _106.CapabilityOwners, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _106.CapabilityOwners;
            fromJSON(object: any): _106.CapabilityOwners;
            toJSON(message: _106.CapabilityOwners): unknown;
            fromPartial(object: {
                owners?: {
                    module?: string;
                    name?: string;
                }[];
            }): _106.CapabilityOwners;
            fromSDK(object: _106.CapabilityOwnersSDKType): _106.CapabilityOwners;
            toSDK(message: _106.CapabilityOwners): _106.CapabilityOwnersSDKType;
            fromAmino(object: _106.CapabilityOwnersAmino): _106.CapabilityOwners;
            toAmino(message: _106.CapabilityOwners): _106.CapabilityOwnersAmino;
            fromAminoMsg(object: _106.CapabilityOwnersAminoMsg): _106.CapabilityOwners;
            fromProtoMsg(message: _106.CapabilityOwnersProtoMsg): _106.CapabilityOwners;
            toProto(message: _106.CapabilityOwners): Uint8Array;
            toProtoMsg(message: _106.CapabilityOwners): _106.CapabilityOwnersProtoMsg;
        };
    };
}

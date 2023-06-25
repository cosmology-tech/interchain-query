import * as _2 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _2.ScalarType;
    scalarTypeToJSON(object: _2.ScalarType): string;
    ScalarType: typeof _2.ScalarType;
    ScalarTypeSDKType: typeof _2.ScalarType;
    ScalarTypeAmino: typeof _2.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _2.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _2.InterfaceDescriptor;
        fromJSON(object: any): _2.InterfaceDescriptor;
        toJSON(message: _2.InterfaceDescriptor): unknown;
        fromPartial(object: {
            name?: string;
            description?: string;
        }): _2.InterfaceDescriptor;
        fromSDK(object: _2.InterfaceDescriptorSDKType): _2.InterfaceDescriptor;
        toSDK(message: _2.InterfaceDescriptor): _2.InterfaceDescriptorSDKType;
        fromAmino(object: _2.InterfaceDescriptorAmino): _2.InterfaceDescriptor;
        toAmino(message: _2.InterfaceDescriptor): _2.InterfaceDescriptorAmino;
        fromAminoMsg(object: _2.InterfaceDescriptorAminoMsg): _2.InterfaceDescriptor;
        fromProtoMsg(message: _2.InterfaceDescriptorProtoMsg): _2.InterfaceDescriptor;
        toProto(message: _2.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _2.InterfaceDescriptor): _2.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _2.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _2.ScalarDescriptor;
        fromJSON(object: any): _2.ScalarDescriptor;
        toJSON(message: _2.ScalarDescriptor): unknown;
        fromPartial(object: {
            name?: string;
            description?: string;
            fieldType?: _2.ScalarType[];
        }): _2.ScalarDescriptor;
        fromSDK(object: _2.ScalarDescriptorSDKType): _2.ScalarDescriptor;
        toSDK(message: _2.ScalarDescriptor): _2.ScalarDescriptorSDKType;
        fromAmino(object: _2.ScalarDescriptorAmino): _2.ScalarDescriptor;
        toAmino(message: _2.ScalarDescriptor): _2.ScalarDescriptorAmino;
        fromAminoMsg(object: _2.ScalarDescriptorAminoMsg): _2.ScalarDescriptor;
        fromProtoMsg(message: _2.ScalarDescriptorProtoMsg): _2.ScalarDescriptor;
        toProto(message: _2.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _2.ScalarDescriptor): _2.ScalarDescriptorProtoMsg;
    };
};

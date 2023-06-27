import * as _156 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _156.ScalarType;
    scalarTypeToJSON(object: _156.ScalarType): string;
    ScalarType: typeof _156.ScalarType;
    ScalarTypeSDKType: typeof _156.ScalarType;
    ScalarTypeAmino: typeof _156.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _156.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.InterfaceDescriptor;
        fromJSON(object: any): _156.InterfaceDescriptor;
        toJSON(message: _156.InterfaceDescriptor): unknown;
        fromPartial(object: {
            name?: string;
            description?: string;
        }): _156.InterfaceDescriptor;
        fromSDK(object: _156.InterfaceDescriptorSDKType): _156.InterfaceDescriptor;
        toSDK(message: _156.InterfaceDescriptor): _156.InterfaceDescriptorSDKType;
        fromAmino(object: _156.InterfaceDescriptorAmino): _156.InterfaceDescriptor;
        toAmino(message: _156.InterfaceDescriptor): _156.InterfaceDescriptorAmino;
        fromAminoMsg(object: _156.InterfaceDescriptorAminoMsg): _156.InterfaceDescriptor;
        fromProtoMsg(message: _156.InterfaceDescriptorProtoMsg): _156.InterfaceDescriptor;
        toProto(message: _156.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _156.InterfaceDescriptor): _156.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _156.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.ScalarDescriptor;
        fromJSON(object: any): _156.ScalarDescriptor;
        toJSON(message: _156.ScalarDescriptor): unknown;
        fromPartial(object: {
            name?: string;
            description?: string;
            fieldType?: _156.ScalarType[];
        }): _156.ScalarDescriptor;
        fromSDK(object: _156.ScalarDescriptorSDKType): _156.ScalarDescriptor;
        toSDK(message: _156.ScalarDescriptor): _156.ScalarDescriptorSDKType;
        fromAmino(object: _156.ScalarDescriptorAmino): _156.ScalarDescriptor;
        toAmino(message: _156.ScalarDescriptor): _156.ScalarDescriptorAmino;
        fromAminoMsg(object: _156.ScalarDescriptorAminoMsg): _156.ScalarDescriptor;
        fromProtoMsg(message: _156.ScalarDescriptorProtoMsg): _156.ScalarDescriptor;
        toProto(message: _156.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _156.ScalarDescriptor): _156.ScalarDescriptorProtoMsg;
    };
};

import * as _159 from "./api/http";
import * as _160 from "./protobuf/any";
import * as _161 from "./protobuf/descriptor";
import * as _162 from "./protobuf/duration";
import * as _163 from "./protobuf/empty";
import * as _164 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            typeUrl: string;
            encode(message: _159.Http, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.Http;
            fromJSON(object: any): _159.Http;
            toJSON(message: _159.Http): unknown;
            fromPartial(object: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            }): _159.Http;
            fromSDK(object: _159.HttpSDKType): _159.Http;
            toSDK(message: _159.Http): _159.HttpSDKType;
            fromAmino(object: _159.HttpAmino): _159.Http;
            toAmino(message: _159.Http): _159.HttpAmino;
            fromAminoMsg(object: _159.HttpAminoMsg): _159.Http;
            fromProtoMsg(message: _159.HttpProtoMsg): _159.Http;
            toProto(message: _159.Http): Uint8Array;
            toProtoMsg(message: _159.Http): _159.HttpProtoMsg;
        };
        HttpRule: {
            typeUrl: string;
            encode(message: _159.HttpRule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.HttpRule;
            fromJSON(object: any): _159.HttpRule;
            toJSON(message: _159.HttpRule): unknown;
            fromPartial(object: {
                selector?: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind?: string;
                    path?: string;
                };
                body?: string;
                responseBody?: string;
                additionalBindings?: any[];
            }): _159.HttpRule;
            fromSDK(object: _159.HttpRuleSDKType): _159.HttpRule;
            toSDK(message: _159.HttpRule): _159.HttpRuleSDKType;
            fromAmino(object: _159.HttpRuleAmino): _159.HttpRule;
            toAmino(message: _159.HttpRule): _159.HttpRuleAmino;
            fromAminoMsg(object: _159.HttpRuleAminoMsg): _159.HttpRule;
            fromProtoMsg(message: _159.HttpRuleProtoMsg): _159.HttpRule;
            toProto(message: _159.HttpRule): Uint8Array;
            toProtoMsg(message: _159.HttpRule): _159.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            typeUrl: string;
            encode(message: _159.CustomHttpPattern, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.CustomHttpPattern;
            fromJSON(object: any): _159.CustomHttpPattern;
            toJSON(message: _159.CustomHttpPattern): unknown;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _159.CustomHttpPattern;
            fromSDK(object: _159.CustomHttpPatternSDKType): _159.CustomHttpPattern;
            toSDK(message: _159.CustomHttpPattern): _159.CustomHttpPatternSDKType;
            fromAmino(object: _159.CustomHttpPatternAmino): _159.CustomHttpPattern;
            toAmino(message: _159.CustomHttpPattern): _159.CustomHttpPatternAmino;
            fromAminoMsg(object: _159.CustomHttpPatternAminoMsg): _159.CustomHttpPattern;
            fromProtoMsg(message: _159.CustomHttpPatternProtoMsg): _159.CustomHttpPattern;
            toProto(message: _159.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _159.CustomHttpPattern): _159.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        Timestamp: {
            typeUrl: string;
            encode(message: _164.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.Timestamp;
            fromJSON(object: any): _164.Timestamp;
            toJSON(message: _164.Timestamp): unknown;
            fromPartial(object: {
                seconds?: bigint;
                nanos?: number;
            }): _164.Timestamp;
            fromSDK(object: _164.TimestampSDKType): _164.Timestamp;
            toSDK(message: _164.Timestamp): _164.TimestampSDKType;
            fromAmino(object: string): _164.Timestamp;
            toAmino(message: _164.Timestamp): string;
            fromAminoMsg(object: _164.TimestampAminoMsg): _164.Timestamp;
            fromProtoMsg(message: _164.TimestampProtoMsg): _164.Timestamp;
            toProto(message: _164.Timestamp): Uint8Array;
            toProtoMsg(message: _164.Timestamp): _164.TimestampProtoMsg;
        };
        Empty: {
            typeUrl: string;
            encode(_: _163.Empty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.Empty;
            fromJSON(_: any): _163.Empty;
            toJSON(_: _163.Empty): unknown;
            fromPartial(_: {}): _163.Empty;
            fromSDK(_: _163.EmptySDKType): _163.Empty;
            toSDK(_: _163.Empty): _163.EmptySDKType;
            fromAmino(_: _163.EmptyAmino): _163.Empty;
            toAmino(_: _163.Empty): _163.EmptyAmino;
            fromAminoMsg(object: _163.EmptyAminoMsg): _163.Empty;
            fromProtoMsg(message: _163.EmptyProtoMsg): _163.Empty;
            toProto(message: _163.Empty): Uint8Array;
            toProtoMsg(message: _163.Empty): _163.EmptyProtoMsg;
        };
        Duration: {
            typeUrl: string;
            encode(message: _162.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Duration;
            fromJSON(object: any): _162.Duration;
            toJSON(message: _162.Duration): unknown;
            fromPartial(object: {
                seconds?: bigint;
                nanos?: number;
            }): _162.Duration;
            fromSDK(object: _162.DurationSDKType): _162.Duration;
            toSDK(message: _162.Duration): _162.DurationSDKType;
            fromAmino(object: string): _162.Duration;
            toAmino(message: _162.Duration): string;
            fromAminoMsg(object: _162.DurationAminoMsg): _162.Duration;
            fromProtoMsg(message: _162.DurationProtoMsg): _162.Duration;
            toProto(message: _162.Duration): Uint8Array;
            toProtoMsg(message: _162.Duration): _162.DurationProtoMsg;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _161.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _161.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _161.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _161.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _161.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _161.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _161.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _161.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _161.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _161.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _161.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _161.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _161.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _161.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _161.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _161.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _161.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _161.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _161.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _161.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _161.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _161.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _161.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _161.FieldOptions_CType;
        FieldOptions_JSType: typeof _161.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _161.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _161.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _161.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _161.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _161.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            typeUrl: string;
            encode(message: _161.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.FileDescriptorSet;
            fromJSON(object: any): _161.FileDescriptorSet;
            toJSON(message: _161.FileDescriptorSet): unknown;
            fromPartial(object: {
                file?: {
                    name?: string;
                    package?: string;
                    dependency?: string[];
                    publicDependency?: number[];
                    weakDependency?: number[];
                    messageType?: {
                        name?: string;
                        field?: {
                            name?: string;
                            number?: number;
                            label?: _161.FieldDescriptorProto_Label;
                            type?: _161.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _161.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _161.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        extension?: {
                            name?: string;
                            number?: number;
                            label?: _161.FieldDescriptorProto_Label;
                            type?: _161.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _161.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _161.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        nestedType?: any[];
                        enumType?: {
                            name?: string;
                            value?: {
                                name?: string;
                                number?: number;
                                options?: {
                                    deprecated?: boolean;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string;
                                            isExtension?: boolean;
                                        }[];
                                        identifierValue?: string;
                                        positiveIntValue?: bigint;
                                        negativeIntValue?: bigint;
                                        doubleValue?: number;
                                        stringValue?: Uint8Array;
                                        aggregateValue?: string;
                                    }[];
                                };
                            }[];
                            options?: {
                                allowAlias?: boolean;
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            reservedRange?: {
                                start?: number;
                                end?: number;
                            }[];
                            reservedName?: string[];
                        }[];
                        extensionRange?: {
                            start?: number;
                            end?: number;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        oneofDecl?: {
                            name?: string;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            messageSetWireFormat?: boolean;
                            noStandardDescriptorAccessor?: boolean;
                            deprecated?: boolean;
                            mapEntry?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    enumType?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias?: boolean;
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    service?: {
                        name?: string;
                        method?: {
                            name?: string;
                            inputType?: string;
                            outputType?: string;
                            options?: {
                                deprecated?: boolean;
                                idempotencyLevel?: _161.MethodOptions_IdempotencyLevel;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            clientStreaming?: boolean;
                            serverStreaming?: boolean;
                        }[];
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _161.FieldDescriptorProto_Label;
                        type?: _161.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _161.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _161.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        javaPackage?: string;
                        javaOuterClassname?: string;
                        javaMultipleFiles?: boolean;
                        javaGenerateEqualsAndHash?: boolean;
                        javaStringCheckUtf8?: boolean;
                        optimizeFor?: _161.FileOptions_OptimizeMode;
                        goPackage?: string;
                        ccGenericServices?: boolean;
                        javaGenericServices?: boolean;
                        pyGenericServices?: boolean;
                        phpGenericServices?: boolean;
                        deprecated?: boolean;
                        ccEnableArenas?: boolean;
                        objcClassPrefix?: string;
                        csharpNamespace?: string;
                        swiftPrefix?: string;
                        phpClassPrefix?: string;
                        phpNamespace?: string;
                        phpMetadataNamespace?: string;
                        rubyPackage?: string;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    sourceCodeInfo?: {
                        location?: {
                            path?: number[];
                            span?: number[];
                            leadingComments?: string;
                            trailingComments?: string;
                            leadingDetachedComments?: string[];
                        }[];
                    };
                    syntax?: string;
                }[];
            }): _161.FileDescriptorSet;
            fromSDK(object: _161.FileDescriptorSetSDKType): _161.FileDescriptorSet;
            toSDK(message: _161.FileDescriptorSet): _161.FileDescriptorSetSDKType;
            fromAmino(object: _161.FileDescriptorSetAmino): _161.FileDescriptorSet;
            toAmino(message: _161.FileDescriptorSet): _161.FileDescriptorSetAmino;
            fromAminoMsg(object: _161.FileDescriptorSetAminoMsg): _161.FileDescriptorSet;
            fromProtoMsg(message: _161.FileDescriptorSetProtoMsg): _161.FileDescriptorSet;
            toProto(message: _161.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _161.FileDescriptorSet): _161.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            typeUrl: string;
            encode(message: _161.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.FileDescriptorProto;
            fromJSON(object: any): _161.FileDescriptorProto;
            toJSON(message: _161.FileDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                package?: string;
                dependency?: string[];
                publicDependency?: number[];
                weakDependency?: number[];
                messageType?: {
                    name?: string;
                    field?: {
                        name?: string;
                        number?: number;
                        label?: _161.FieldDescriptorProto_Label;
                        type?: _161.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _161.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _161.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _161.FieldDescriptorProto_Label;
                        type?: _161.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _161.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _161.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    nestedType?: any[];
                    enumType?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: bigint;
                                    negativeIntValue?: bigint;
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias?: boolean;
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    extensionRange?: {
                        start?: number;
                        end?: number;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    oneofDecl?: {
                        name?: string;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        messageSetWireFormat?: boolean;
                        noStandardDescriptorAccessor?: boolean;
                        deprecated?: boolean;
                        mapEntry?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                service?: {
                    name?: string;
                    method?: {
                        name?: string;
                        inputType?: string;
                        outputType?: string;
                        options?: {
                            deprecated?: boolean;
                            idempotencyLevel?: _161.MethodOptions_IdempotencyLevel;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        clientStreaming?: boolean;
                        serverStreaming?: boolean;
                    }[];
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _161.FieldDescriptorProto_Label;
                    type?: _161.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _161.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _161.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    javaPackage?: string;
                    javaOuterClassname?: string;
                    javaMultipleFiles?: boolean;
                    javaGenerateEqualsAndHash?: boolean;
                    javaStringCheckUtf8?: boolean;
                    optimizeFor?: _161.FileOptions_OptimizeMode;
                    goPackage?: string;
                    ccGenericServices?: boolean;
                    javaGenericServices?: boolean;
                    pyGenericServices?: boolean;
                    phpGenericServices?: boolean;
                    deprecated?: boolean;
                    ccEnableArenas?: boolean;
                    objcClassPrefix?: string;
                    csharpNamespace?: string;
                    swiftPrefix?: string;
                    phpClassPrefix?: string;
                    phpNamespace?: string;
                    phpMetadataNamespace?: string;
                    rubyPackage?: string;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                sourceCodeInfo?: {
                    location?: {
                        path?: number[];
                        span?: number[];
                        leadingComments?: string;
                        trailingComments?: string;
                        leadingDetachedComments?: string[];
                    }[];
                };
                syntax?: string;
            }): _161.FileDescriptorProto;
            fromSDK(object: _161.FileDescriptorProtoSDKType): _161.FileDescriptorProto;
            toSDK(message: _161.FileDescriptorProto): _161.FileDescriptorProtoSDKType;
            fromAmino(object: _161.FileDescriptorProtoAmino): _161.FileDescriptorProto;
            toAmino(message: _161.FileDescriptorProto): _161.FileDescriptorProtoAmino;
            fromAminoMsg(object: _161.FileDescriptorProtoAminoMsg): _161.FileDescriptorProto;
            fromProtoMsg(message: _161.FileDescriptorProtoProtoMsg): _161.FileDescriptorProto;
            toProto(message: _161.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _161.FileDescriptorProto): _161.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            typeUrl: string;
            encode(message: _161.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.DescriptorProto;
            fromJSON(object: any): _161.DescriptorProto;
            toJSON(message: _161.DescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _161.FieldDescriptorProto_Label;
                    type?: _161.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _161.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _161.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _161.FieldDescriptorProto_Label;
                    type?: _161.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _161.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _161.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                nestedType?: any[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: bigint;
                                negativeIntValue?: bigint;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                extensionRange?: {
                    start?: number;
                    end?: number;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                oneofDecl?: {
                    name?: string;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    messageSetWireFormat?: boolean;
                    noStandardDescriptorAccessor?: boolean;
                    deprecated?: boolean;
                    mapEntry?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _161.DescriptorProto;
            fromSDK(object: _161.DescriptorProtoSDKType): _161.DescriptorProto;
            toSDK(message: _161.DescriptorProto): _161.DescriptorProtoSDKType;
            fromAmino(object: _161.DescriptorProtoAmino): _161.DescriptorProto;
            toAmino(message: _161.DescriptorProto): _161.DescriptorProtoAmino;
            fromAminoMsg(object: _161.DescriptorProtoAminoMsg): _161.DescriptorProto;
            fromProtoMsg(message: _161.DescriptorProtoProtoMsg): _161.DescriptorProto;
            toProto(message: _161.DescriptorProto): Uint8Array;
            toProtoMsg(message: _161.DescriptorProto): _161.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            typeUrl: string;
            encode(message: _161.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _161.DescriptorProto_ExtensionRange;
            toJSON(message: _161.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _161.DescriptorProto_ExtensionRange;
            fromSDK(object: _161.DescriptorProto_ExtensionRangeSDKType): _161.DescriptorProto_ExtensionRange;
            toSDK(message: _161.DescriptorProto_ExtensionRange): _161.DescriptorProto_ExtensionRangeSDKType;
            fromAmino(object: _161.DescriptorProto_ExtensionRangeAmino): _161.DescriptorProto_ExtensionRange;
            toAmino(message: _161.DescriptorProto_ExtensionRange): _161.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _161.DescriptorProto_ExtensionRangeAminoMsg): _161.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _161.DescriptorProto_ExtensionRangeProtoMsg): _161.DescriptorProto_ExtensionRange;
            toProto(message: _161.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _161.DescriptorProto_ExtensionRange): _161.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            typeUrl: string;
            encode(message: _161.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.DescriptorProto_ReservedRange;
            fromJSON(object: any): _161.DescriptorProto_ReservedRange;
            toJSON(message: _161.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _161.DescriptorProto_ReservedRange;
            fromSDK(object: _161.DescriptorProto_ReservedRangeSDKType): _161.DescriptorProto_ReservedRange;
            toSDK(message: _161.DescriptorProto_ReservedRange): _161.DescriptorProto_ReservedRangeSDKType;
            fromAmino(object: _161.DescriptorProto_ReservedRangeAmino): _161.DescriptorProto_ReservedRange;
            toAmino(message: _161.DescriptorProto_ReservedRange): _161.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _161.DescriptorProto_ReservedRangeAminoMsg): _161.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _161.DescriptorProto_ReservedRangeProtoMsg): _161.DescriptorProto_ReservedRange;
            toProto(message: _161.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _161.DescriptorProto_ReservedRange): _161.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            typeUrl: string;
            encode(message: _161.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.ExtensionRangeOptions;
            fromJSON(object: any): _161.ExtensionRangeOptions;
            toJSON(message: _161.ExtensionRangeOptions): unknown;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _161.ExtensionRangeOptions;
            fromSDK(object: _161.ExtensionRangeOptionsSDKType): _161.ExtensionRangeOptions;
            toSDK(message: _161.ExtensionRangeOptions): _161.ExtensionRangeOptionsSDKType;
            fromAmino(object: _161.ExtensionRangeOptionsAmino): _161.ExtensionRangeOptions;
            toAmino(message: _161.ExtensionRangeOptions): _161.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _161.ExtensionRangeOptionsAminoMsg): _161.ExtensionRangeOptions;
            fromProtoMsg(message: _161.ExtensionRangeOptionsProtoMsg): _161.ExtensionRangeOptions;
            toProto(message: _161.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _161.ExtensionRangeOptions): _161.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            typeUrl: string;
            encode(message: _161.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.FieldDescriptorProto;
            fromJSON(object: any): _161.FieldDescriptorProto;
            toJSON(message: _161.FieldDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _161.FieldDescriptorProto_Label;
                type?: _161.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _161.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _161.FieldOptions_JSType;
                    lazy?: boolean;
                    deprecated?: boolean;
                    weak?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _161.FieldDescriptorProto;
            fromSDK(object: _161.FieldDescriptorProtoSDKType): _161.FieldDescriptorProto;
            toSDK(message: _161.FieldDescriptorProto): _161.FieldDescriptorProtoSDKType;
            fromAmino(object: _161.FieldDescriptorProtoAmino): _161.FieldDescriptorProto;
            toAmino(message: _161.FieldDescriptorProto): _161.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _161.FieldDescriptorProtoAminoMsg): _161.FieldDescriptorProto;
            fromProtoMsg(message: _161.FieldDescriptorProtoProtoMsg): _161.FieldDescriptorProto;
            toProto(message: _161.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _161.FieldDescriptorProto): _161.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            typeUrl: string;
            encode(message: _161.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.OneofDescriptorProto;
            fromJSON(object: any): _161.OneofDescriptorProto;
            toJSON(message: _161.OneofDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _161.OneofDescriptorProto;
            fromSDK(object: _161.OneofDescriptorProtoSDKType): _161.OneofDescriptorProto;
            toSDK(message: _161.OneofDescriptorProto): _161.OneofDescriptorProtoSDKType;
            fromAmino(object: _161.OneofDescriptorProtoAmino): _161.OneofDescriptorProto;
            toAmino(message: _161.OneofDescriptorProto): _161.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _161.OneofDescriptorProtoAminoMsg): _161.OneofDescriptorProto;
            fromProtoMsg(message: _161.OneofDescriptorProtoProtoMsg): _161.OneofDescriptorProto;
            toProto(message: _161.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _161.OneofDescriptorProto): _161.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            typeUrl: string;
            encode(message: _161.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.EnumDescriptorProto;
            fromJSON(object: any): _161.EnumDescriptorProto;
            toJSON(message: _161.EnumDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                value?: {
                    name?: string;
                    number?: number;
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    allowAlias?: boolean;
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _161.EnumDescriptorProto;
            fromSDK(object: _161.EnumDescriptorProtoSDKType): _161.EnumDescriptorProto;
            toSDK(message: _161.EnumDescriptorProto): _161.EnumDescriptorProtoSDKType;
            fromAmino(object: _161.EnumDescriptorProtoAmino): _161.EnumDescriptorProto;
            toAmino(message: _161.EnumDescriptorProto): _161.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _161.EnumDescriptorProtoAminoMsg): _161.EnumDescriptorProto;
            fromProtoMsg(message: _161.EnumDescriptorProtoProtoMsg): _161.EnumDescriptorProto;
            toProto(message: _161.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _161.EnumDescriptorProto): _161.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            typeUrl: string;
            encode(message: _161.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _161.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _161.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _161.EnumDescriptorProto_EnumReservedRange;
            fromSDK(object: _161.EnumDescriptorProto_EnumReservedRangeSDKType): _161.EnumDescriptorProto_EnumReservedRange;
            toSDK(message: _161.EnumDescriptorProto_EnumReservedRange): _161.EnumDescriptorProto_EnumReservedRangeSDKType;
            fromAmino(object: _161.EnumDescriptorProto_EnumReservedRangeAmino): _161.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _161.EnumDescriptorProto_EnumReservedRange): _161.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _161.EnumDescriptorProto_EnumReservedRangeAminoMsg): _161.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _161.EnumDescriptorProto_EnumReservedRangeProtoMsg): _161.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _161.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _161.EnumDescriptorProto_EnumReservedRange): _161.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            typeUrl: string;
            encode(message: _161.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.EnumValueDescriptorProto;
            fromJSON(object: any): _161.EnumValueDescriptorProto;
            toJSON(message: _161.EnumValueDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _161.EnumValueDescriptorProto;
            fromSDK(object: _161.EnumValueDescriptorProtoSDKType): _161.EnumValueDescriptorProto;
            toSDK(message: _161.EnumValueDescriptorProto): _161.EnumValueDescriptorProtoSDKType;
            fromAmino(object: _161.EnumValueDescriptorProtoAmino): _161.EnumValueDescriptorProto;
            toAmino(message: _161.EnumValueDescriptorProto): _161.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _161.EnumValueDescriptorProtoAminoMsg): _161.EnumValueDescriptorProto;
            fromProtoMsg(message: _161.EnumValueDescriptorProtoProtoMsg): _161.EnumValueDescriptorProto;
            toProto(message: _161.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _161.EnumValueDescriptorProto): _161.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            typeUrl: string;
            encode(message: _161.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.ServiceDescriptorProto;
            fromJSON(object: any): _161.ServiceDescriptorProto;
            toJSON(message: _161.ServiceDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _161.MethodOptions_IdempotencyLevel;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: bigint;
                            negativeIntValue?: bigint;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    clientStreaming?: boolean;
                    serverStreaming?: boolean;
                }[];
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _161.ServiceDescriptorProto;
            fromSDK(object: _161.ServiceDescriptorProtoSDKType): _161.ServiceDescriptorProto;
            toSDK(message: _161.ServiceDescriptorProto): _161.ServiceDescriptorProtoSDKType;
            fromAmino(object: _161.ServiceDescriptorProtoAmino): _161.ServiceDescriptorProto;
            toAmino(message: _161.ServiceDescriptorProto): _161.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _161.ServiceDescriptorProtoAminoMsg): _161.ServiceDescriptorProto;
            fromProtoMsg(message: _161.ServiceDescriptorProtoProtoMsg): _161.ServiceDescriptorProto;
            toProto(message: _161.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _161.ServiceDescriptorProto): _161.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            typeUrl: string;
            encode(message: _161.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.MethodDescriptorProto;
            fromJSON(object: any): _161.MethodDescriptorProto;
            toJSON(message: _161.MethodDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _161.MethodOptions_IdempotencyLevel;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: bigint;
                        negativeIntValue?: bigint;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                clientStreaming?: boolean;
                serverStreaming?: boolean;
            }): _161.MethodDescriptorProto;
            fromSDK(object: _161.MethodDescriptorProtoSDKType): _161.MethodDescriptorProto;
            toSDK(message: _161.MethodDescriptorProto): _161.MethodDescriptorProtoSDKType;
            fromAmino(object: _161.MethodDescriptorProtoAmino): _161.MethodDescriptorProto;
            toAmino(message: _161.MethodDescriptorProto): _161.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _161.MethodDescriptorProtoAminoMsg): _161.MethodDescriptorProto;
            fromProtoMsg(message: _161.MethodDescriptorProtoProtoMsg): _161.MethodDescriptorProto;
            toProto(message: _161.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _161.MethodDescriptorProto): _161.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            typeUrl: string;
            encode(message: _161.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.FileOptions;
            fromJSON(object: any): _161.FileOptions;
            toJSON(message: _161.FileOptions): unknown;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _161.FileOptions_OptimizeMode;
                goPackage?: string;
                ccGenericServices?: boolean;
                javaGenericServices?: boolean;
                pyGenericServices?: boolean;
                phpGenericServices?: boolean;
                deprecated?: boolean;
                ccEnableArenas?: boolean;
                objcClassPrefix?: string;
                csharpNamespace?: string;
                swiftPrefix?: string;
                phpClassPrefix?: string;
                phpNamespace?: string;
                phpMetadataNamespace?: string;
                rubyPackage?: string;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _161.FileOptions;
            fromSDK(object: _161.FileOptionsSDKType): _161.FileOptions;
            toSDK(message: _161.FileOptions): _161.FileOptionsSDKType;
            fromAmino(object: _161.FileOptionsAmino): _161.FileOptions;
            toAmino(message: _161.FileOptions): _161.FileOptionsAmino;
            fromAminoMsg(object: _161.FileOptionsAminoMsg): _161.FileOptions;
            fromProtoMsg(message: _161.FileOptionsProtoMsg): _161.FileOptions;
            toProto(message: _161.FileOptions): Uint8Array;
            toProtoMsg(message: _161.FileOptions): _161.FileOptionsProtoMsg;
        };
        MessageOptions: {
            typeUrl: string;
            encode(message: _161.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.MessageOptions;
            fromJSON(object: any): _161.MessageOptions;
            toJSON(message: _161.MessageOptions): unknown;
            fromPartial(object: {
                messageSetWireFormat?: boolean;
                noStandardDescriptorAccessor?: boolean;
                deprecated?: boolean;
                mapEntry?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _161.MessageOptions;
            fromSDK(object: _161.MessageOptionsSDKType): _161.MessageOptions;
            toSDK(message: _161.MessageOptions): _161.MessageOptionsSDKType;
            fromAmino(object: _161.MessageOptionsAmino): _161.MessageOptions;
            toAmino(message: _161.MessageOptions): _161.MessageOptionsAmino;
            fromAminoMsg(object: _161.MessageOptionsAminoMsg): _161.MessageOptions;
            fromProtoMsg(message: _161.MessageOptionsProtoMsg): _161.MessageOptions;
            toProto(message: _161.MessageOptions): Uint8Array;
            toProtoMsg(message: _161.MessageOptions): _161.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            typeUrl: string;
            encode(message: _161.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.FieldOptions;
            fromJSON(object: any): _161.FieldOptions;
            toJSON(message: _161.FieldOptions): unknown;
            fromPartial(object: {
                ctype?: _161.FieldOptions_CType;
                packed?: boolean;
                jstype?: _161.FieldOptions_JSType;
                lazy?: boolean;
                deprecated?: boolean;
                weak?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _161.FieldOptions;
            fromSDK(object: _161.FieldOptionsSDKType): _161.FieldOptions;
            toSDK(message: _161.FieldOptions): _161.FieldOptionsSDKType;
            fromAmino(object: _161.FieldOptionsAmino): _161.FieldOptions;
            toAmino(message: _161.FieldOptions): _161.FieldOptionsAmino;
            fromAminoMsg(object: _161.FieldOptionsAminoMsg): _161.FieldOptions;
            fromProtoMsg(message: _161.FieldOptionsProtoMsg): _161.FieldOptions;
            toProto(message: _161.FieldOptions): Uint8Array;
            toProtoMsg(message: _161.FieldOptions): _161.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            typeUrl: string;
            encode(message: _161.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.OneofOptions;
            fromJSON(object: any): _161.OneofOptions;
            toJSON(message: _161.OneofOptions): unknown;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _161.OneofOptions;
            fromSDK(object: _161.OneofOptionsSDKType): _161.OneofOptions;
            toSDK(message: _161.OneofOptions): _161.OneofOptionsSDKType;
            fromAmino(object: _161.OneofOptionsAmino): _161.OneofOptions;
            toAmino(message: _161.OneofOptions): _161.OneofOptionsAmino;
            fromAminoMsg(object: _161.OneofOptionsAminoMsg): _161.OneofOptions;
            fromProtoMsg(message: _161.OneofOptionsProtoMsg): _161.OneofOptions;
            toProto(message: _161.OneofOptions): Uint8Array;
            toProtoMsg(message: _161.OneofOptions): _161.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            typeUrl: string;
            encode(message: _161.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.EnumOptions;
            fromJSON(object: any): _161.EnumOptions;
            toJSON(message: _161.EnumOptions): unknown;
            fromPartial(object: {
                allowAlias?: boolean;
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _161.EnumOptions;
            fromSDK(object: _161.EnumOptionsSDKType): _161.EnumOptions;
            toSDK(message: _161.EnumOptions): _161.EnumOptionsSDKType;
            fromAmino(object: _161.EnumOptionsAmino): _161.EnumOptions;
            toAmino(message: _161.EnumOptions): _161.EnumOptionsAmino;
            fromAminoMsg(object: _161.EnumOptionsAminoMsg): _161.EnumOptions;
            fromProtoMsg(message: _161.EnumOptionsProtoMsg): _161.EnumOptions;
            toProto(message: _161.EnumOptions): Uint8Array;
            toProtoMsg(message: _161.EnumOptions): _161.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            typeUrl: string;
            encode(message: _161.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.EnumValueOptions;
            fromJSON(object: any): _161.EnumValueOptions;
            toJSON(message: _161.EnumValueOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _161.EnumValueOptions;
            fromSDK(object: _161.EnumValueOptionsSDKType): _161.EnumValueOptions;
            toSDK(message: _161.EnumValueOptions): _161.EnumValueOptionsSDKType;
            fromAmino(object: _161.EnumValueOptionsAmino): _161.EnumValueOptions;
            toAmino(message: _161.EnumValueOptions): _161.EnumValueOptionsAmino;
            fromAminoMsg(object: _161.EnumValueOptionsAminoMsg): _161.EnumValueOptions;
            fromProtoMsg(message: _161.EnumValueOptionsProtoMsg): _161.EnumValueOptions;
            toProto(message: _161.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _161.EnumValueOptions): _161.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            typeUrl: string;
            encode(message: _161.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.ServiceOptions;
            fromJSON(object: any): _161.ServiceOptions;
            toJSON(message: _161.ServiceOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _161.ServiceOptions;
            fromSDK(object: _161.ServiceOptionsSDKType): _161.ServiceOptions;
            toSDK(message: _161.ServiceOptions): _161.ServiceOptionsSDKType;
            fromAmino(object: _161.ServiceOptionsAmino): _161.ServiceOptions;
            toAmino(message: _161.ServiceOptions): _161.ServiceOptionsAmino;
            fromAminoMsg(object: _161.ServiceOptionsAminoMsg): _161.ServiceOptions;
            fromProtoMsg(message: _161.ServiceOptionsProtoMsg): _161.ServiceOptions;
            toProto(message: _161.ServiceOptions): Uint8Array;
            toProtoMsg(message: _161.ServiceOptions): _161.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            typeUrl: string;
            encode(message: _161.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.MethodOptions;
            fromJSON(object: any): _161.MethodOptions;
            toJSON(message: _161.MethodOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _161.MethodOptions_IdempotencyLevel;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: bigint;
                    negativeIntValue?: bigint;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _161.MethodOptions;
            fromSDK(object: _161.MethodOptionsSDKType): _161.MethodOptions;
            toSDK(message: _161.MethodOptions): _161.MethodOptionsSDKType;
            fromAmino(object: _161.MethodOptionsAmino): _161.MethodOptions;
            toAmino(message: _161.MethodOptions): _161.MethodOptionsAmino;
            fromAminoMsg(object: _161.MethodOptionsAminoMsg): _161.MethodOptions;
            fromProtoMsg(message: _161.MethodOptionsProtoMsg): _161.MethodOptions;
            toProto(message: _161.MethodOptions): Uint8Array;
            toProtoMsg(message: _161.MethodOptions): _161.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            typeUrl: string;
            encode(message: _161.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.UninterpretedOption;
            fromJSON(object: any): _161.UninterpretedOption;
            toJSON(message: _161.UninterpretedOption): unknown;
            fromPartial(object: {
                name?: {
                    namePart?: string;
                    isExtension?: boolean;
                }[];
                identifierValue?: string;
                positiveIntValue?: bigint;
                negativeIntValue?: bigint;
                doubleValue?: number;
                stringValue?: Uint8Array;
                aggregateValue?: string;
            }): _161.UninterpretedOption;
            fromSDK(object: _161.UninterpretedOptionSDKType): _161.UninterpretedOption;
            toSDK(message: _161.UninterpretedOption): _161.UninterpretedOptionSDKType;
            fromAmino(object: _161.UninterpretedOptionAmino): _161.UninterpretedOption;
            toAmino(message: _161.UninterpretedOption): _161.UninterpretedOptionAmino;
            fromAminoMsg(object: _161.UninterpretedOptionAminoMsg): _161.UninterpretedOption;
            fromProtoMsg(message: _161.UninterpretedOptionProtoMsg): _161.UninterpretedOption;
            toProto(message: _161.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _161.UninterpretedOption): _161.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            typeUrl: string;
            encode(message: _161.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.UninterpretedOption_NamePart;
            fromJSON(object: any): _161.UninterpretedOption_NamePart;
            toJSON(message: _161.UninterpretedOption_NamePart): unknown;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _161.UninterpretedOption_NamePart;
            fromSDK(object: _161.UninterpretedOption_NamePartSDKType): _161.UninterpretedOption_NamePart;
            toSDK(message: _161.UninterpretedOption_NamePart): _161.UninterpretedOption_NamePartSDKType;
            fromAmino(object: _161.UninterpretedOption_NamePartAmino): _161.UninterpretedOption_NamePart;
            toAmino(message: _161.UninterpretedOption_NamePart): _161.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _161.UninterpretedOption_NamePartAminoMsg): _161.UninterpretedOption_NamePart;
            fromProtoMsg(message: _161.UninterpretedOption_NamePartProtoMsg): _161.UninterpretedOption_NamePart;
            toProto(message: _161.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _161.UninterpretedOption_NamePart): _161.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            typeUrl: string;
            encode(message: _161.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.SourceCodeInfo;
            fromJSON(object: any): _161.SourceCodeInfo;
            toJSON(message: _161.SourceCodeInfo): unknown;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _161.SourceCodeInfo;
            fromSDK(object: _161.SourceCodeInfoSDKType): _161.SourceCodeInfo;
            toSDK(message: _161.SourceCodeInfo): _161.SourceCodeInfoSDKType;
            fromAmino(object: _161.SourceCodeInfoAmino): _161.SourceCodeInfo;
            toAmino(message: _161.SourceCodeInfo): _161.SourceCodeInfoAmino;
            fromAminoMsg(object: _161.SourceCodeInfoAminoMsg): _161.SourceCodeInfo;
            fromProtoMsg(message: _161.SourceCodeInfoProtoMsg): _161.SourceCodeInfo;
            toProto(message: _161.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _161.SourceCodeInfo): _161.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            typeUrl: string;
            encode(message: _161.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.SourceCodeInfo_Location;
            fromJSON(object: any): _161.SourceCodeInfo_Location;
            toJSON(message: _161.SourceCodeInfo_Location): unknown;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _161.SourceCodeInfo_Location;
            fromSDK(object: _161.SourceCodeInfo_LocationSDKType): _161.SourceCodeInfo_Location;
            toSDK(message: _161.SourceCodeInfo_Location): _161.SourceCodeInfo_LocationSDKType;
            fromAmino(object: _161.SourceCodeInfo_LocationAmino): _161.SourceCodeInfo_Location;
            toAmino(message: _161.SourceCodeInfo_Location): _161.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _161.SourceCodeInfo_LocationAminoMsg): _161.SourceCodeInfo_Location;
            fromProtoMsg(message: _161.SourceCodeInfo_LocationProtoMsg): _161.SourceCodeInfo_Location;
            toProto(message: _161.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _161.SourceCodeInfo_Location): _161.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            typeUrl: string;
            encode(message: _161.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.GeneratedCodeInfo;
            fromJSON(object: any): _161.GeneratedCodeInfo;
            toJSON(message: _161.GeneratedCodeInfo): unknown;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _161.GeneratedCodeInfo;
            fromSDK(object: _161.GeneratedCodeInfoSDKType): _161.GeneratedCodeInfo;
            toSDK(message: _161.GeneratedCodeInfo): _161.GeneratedCodeInfoSDKType;
            fromAmino(object: _161.GeneratedCodeInfoAmino): _161.GeneratedCodeInfo;
            toAmino(message: _161.GeneratedCodeInfo): _161.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _161.GeneratedCodeInfoAminoMsg): _161.GeneratedCodeInfo;
            fromProtoMsg(message: _161.GeneratedCodeInfoProtoMsg): _161.GeneratedCodeInfo;
            toProto(message: _161.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _161.GeneratedCodeInfo): _161.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            typeUrl: string;
            encode(message: _161.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _161.GeneratedCodeInfo_Annotation;
            toJSON(message: _161.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _161.GeneratedCodeInfo_Annotation;
            fromSDK(object: _161.GeneratedCodeInfo_AnnotationSDKType): _161.GeneratedCodeInfo_Annotation;
            toSDK(message: _161.GeneratedCodeInfo_Annotation): _161.GeneratedCodeInfo_AnnotationSDKType;
            fromAmino(object: _161.GeneratedCodeInfo_AnnotationAmino): _161.GeneratedCodeInfo_Annotation;
            toAmino(message: _161.GeneratedCodeInfo_Annotation): _161.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _161.GeneratedCodeInfo_AnnotationAminoMsg): _161.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _161.GeneratedCodeInfo_AnnotationProtoMsg): _161.GeneratedCodeInfo_Annotation;
            toProto(message: _161.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _161.GeneratedCodeInfo_Annotation): _161.GeneratedCodeInfo_AnnotationProtoMsg;
        };
        Any: {
            typeUrl: string;
            encode(message: _160.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.Any;
            fromJSON(object: any): _160.Any;
            toJSON(message: _160.Any): unknown;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _160.Any;
            fromSDK(object: _160.AnySDKType): _160.Any;
            toSDK(message: _160.Any): _160.AnySDKType;
            fromAmino(object: _160.AnyAmino): _160.Any;
            toAmino(message: _160.Any): _160.AnyAmino;
            fromAminoMsg(object: _160.AnyAminoMsg): _160.Any;
            fromProtoMsg(message: _160.AnyProtoMsg): _160.Any;
            toProto(message: _160.Any): Uint8Array;
            toProtoMsg(message: _160.Any): _160.AnyProtoMsg;
        };
    };
}

import * as _97 from "./api/http";
import * as _98 from "./protobuf/any";
import * as _99 from "./protobuf/descriptor";
import * as _100 from "./protobuf/duration";
import * as _101 from "./protobuf/empty";
import * as _102 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            typeUrl: string;
            encode(message: _97.Http, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.Http;
            fromJSON(object: any): _97.Http;
            toJSON(message: _97.Http): unknown;
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
            }): _97.Http;
            fromSDK(object: _97.HttpSDKType): _97.Http;
            toSDK(message: _97.Http): _97.HttpSDKType;
            fromAmino(object: _97.HttpAmino): _97.Http;
            toAmino(message: _97.Http): _97.HttpAmino;
            fromAminoMsg(object: _97.HttpAminoMsg): _97.Http;
            fromProtoMsg(message: _97.HttpProtoMsg): _97.Http;
            toProto(message: _97.Http): Uint8Array;
            toProtoMsg(message: _97.Http): _97.HttpProtoMsg;
        };
        HttpRule: {
            typeUrl: string;
            encode(message: _97.HttpRule, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.HttpRule;
            fromJSON(object: any): _97.HttpRule;
            toJSON(message: _97.HttpRule): unknown;
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
            }): _97.HttpRule;
            fromSDK(object: _97.HttpRuleSDKType): _97.HttpRule;
            toSDK(message: _97.HttpRule): _97.HttpRuleSDKType;
            fromAmino(object: _97.HttpRuleAmino): _97.HttpRule;
            toAmino(message: _97.HttpRule): _97.HttpRuleAmino;
            fromAminoMsg(object: _97.HttpRuleAminoMsg): _97.HttpRule;
            fromProtoMsg(message: _97.HttpRuleProtoMsg): _97.HttpRule;
            toProto(message: _97.HttpRule): Uint8Array;
            toProtoMsg(message: _97.HttpRule): _97.HttpRuleProtoMsg;
        };
        CustomHttpPattern: {
            typeUrl: string;
            encode(message: _97.CustomHttpPattern, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _97.CustomHttpPattern;
            fromJSON(object: any): _97.CustomHttpPattern;
            toJSON(message: _97.CustomHttpPattern): unknown;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _97.CustomHttpPattern;
            fromSDK(object: _97.CustomHttpPatternSDKType): _97.CustomHttpPattern;
            toSDK(message: _97.CustomHttpPattern): _97.CustomHttpPatternSDKType;
            fromAmino(object: _97.CustomHttpPatternAmino): _97.CustomHttpPattern;
            toAmino(message: _97.CustomHttpPattern): _97.CustomHttpPatternAmino;
            fromAminoMsg(object: _97.CustomHttpPatternAminoMsg): _97.CustomHttpPattern;
            fromProtoMsg(message: _97.CustomHttpPatternProtoMsg): _97.CustomHttpPattern;
            toProto(message: _97.CustomHttpPattern): Uint8Array;
            toProtoMsg(message: _97.CustomHttpPattern): _97.CustomHttpPatternProtoMsg;
        };
    };
    const protobuf: {
        Timestamp: {
            typeUrl: string;
            encode(message: _102.Timestamp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _102.Timestamp;
            fromJSON(object: any): _102.Timestamp;
            toJSON(message: _102.Timestamp): unknown;
            fromPartial(object: {
                seconds?: bigint;
                nanos?: number;
            }): _102.Timestamp;
            fromSDK(object: _102.TimestampSDKType): _102.Timestamp;
            toSDK(message: _102.Timestamp): _102.TimestampSDKType;
            fromAmino(object: string): _102.Timestamp;
            toAmino(message: _102.Timestamp): string;
            fromAminoMsg(object: _102.TimestampAminoMsg): _102.Timestamp;
            fromProtoMsg(message: _102.TimestampProtoMsg): _102.Timestamp;
            toProto(message: _102.Timestamp): Uint8Array;
            toProtoMsg(message: _102.Timestamp): _102.TimestampProtoMsg;
        };
        Empty: {
            typeUrl: string;
            encode(_: _101.Empty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _101.Empty;
            fromJSON(_: any): _101.Empty;
            toJSON(_: _101.Empty): unknown;
            fromPartial(_: {}): _101.Empty;
            fromSDK(_: _101.EmptySDKType): _101.Empty;
            toSDK(_: _101.Empty): _101.EmptySDKType;
            fromAmino(_: _101.EmptyAmino): _101.Empty;
            toAmino(_: _101.Empty): _101.EmptyAmino;
            fromAminoMsg(object: _101.EmptyAminoMsg): _101.Empty;
            fromProtoMsg(message: _101.EmptyProtoMsg): _101.Empty;
            toProto(message: _101.Empty): Uint8Array;
            toProtoMsg(message: _101.Empty): _101.EmptyProtoMsg;
        };
        Duration: {
            typeUrl: string;
            encode(message: _100.Duration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _100.Duration;
            fromJSON(object: any): _100.Duration;
            toJSON(message: _100.Duration): unknown;
            fromPartial(object: {
                seconds?: bigint;
                nanos?: number;
            }): _100.Duration;
            fromSDK(object: _100.DurationSDKType): _100.Duration;
            toSDK(message: _100.Duration): _100.DurationSDKType;
            fromAmino(object: string): _100.Duration;
            toAmino(message: _100.Duration): string;
            fromAminoMsg(object: _100.DurationAminoMsg): _100.Duration;
            fromProtoMsg(message: _100.DurationProtoMsg): _100.Duration;
            toProto(message: _100.Duration): Uint8Array;
            toProtoMsg(message: _100.Duration): _100.DurationProtoMsg;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _99.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _99.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _99.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _99.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _99.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _99.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _99.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _99.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _99.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _99.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _99.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _99.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _99.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _99.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeAmino: typeof _99.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _99.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _99.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelAmino: typeof _99.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _99.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _99.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeAmino: typeof _99.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _99.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _99.FieldOptions_CType;
        FieldOptions_CTypeAmino: typeof _99.FieldOptions_CType;
        FieldOptions_JSType: typeof _99.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _99.FieldOptions_JSType;
        FieldOptions_JSTypeAmino: typeof _99.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _99.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _99.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelAmino: typeof _99.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            typeUrl: string;
            encode(message: _99.FileDescriptorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.FileDescriptorSet;
            fromJSON(object: any): _99.FileDescriptorSet;
            toJSON(message: _99.FileDescriptorSet): unknown;
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
                            label?: _99.FieldDescriptorProto_Label;
                            type?: _99.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _99.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _99.FieldOptions_JSType;
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
                            label?: _99.FieldDescriptorProto_Label;
                            type?: _99.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _99.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _99.FieldOptions_JSType;
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
                                idempotencyLevel?: _99.MethodOptions_IdempotencyLevel;
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
                        label?: _99.FieldDescriptorProto_Label;
                        type?: _99.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _99.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _99.FieldOptions_JSType;
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
                        optimizeFor?: _99.FileOptions_OptimizeMode;
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
            }): _99.FileDescriptorSet;
            fromSDK(object: _99.FileDescriptorSetSDKType): _99.FileDescriptorSet;
            toSDK(message: _99.FileDescriptorSet): _99.FileDescriptorSetSDKType;
            fromAmino(object: _99.FileDescriptorSetAmino): _99.FileDescriptorSet;
            toAmino(message: _99.FileDescriptorSet): _99.FileDescriptorSetAmino;
            fromAminoMsg(object: _99.FileDescriptorSetAminoMsg): _99.FileDescriptorSet;
            fromProtoMsg(message: _99.FileDescriptorSetProtoMsg): _99.FileDescriptorSet;
            toProto(message: _99.FileDescriptorSet): Uint8Array;
            toProtoMsg(message: _99.FileDescriptorSet): _99.FileDescriptorSetProtoMsg;
        };
        FileDescriptorProto: {
            typeUrl: string;
            encode(message: _99.FileDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.FileDescriptorProto;
            fromJSON(object: any): _99.FileDescriptorProto;
            toJSON(message: _99.FileDescriptorProto): unknown;
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
                        label?: _99.FieldDescriptorProto_Label;
                        type?: _99.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _99.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _99.FieldOptions_JSType;
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
                        label?: _99.FieldDescriptorProto_Label;
                        type?: _99.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _99.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _99.FieldOptions_JSType;
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
                            idempotencyLevel?: _99.MethodOptions_IdempotencyLevel;
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
                    label?: _99.FieldDescriptorProto_Label;
                    type?: _99.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _99.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _99.FieldOptions_JSType;
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
                    optimizeFor?: _99.FileOptions_OptimizeMode;
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
            }): _99.FileDescriptorProto;
            fromSDK(object: _99.FileDescriptorProtoSDKType): _99.FileDescriptorProto;
            toSDK(message: _99.FileDescriptorProto): _99.FileDescriptorProtoSDKType;
            fromAmino(object: _99.FileDescriptorProtoAmino): _99.FileDescriptorProto;
            toAmino(message: _99.FileDescriptorProto): _99.FileDescriptorProtoAmino;
            fromAminoMsg(object: _99.FileDescriptorProtoAminoMsg): _99.FileDescriptorProto;
            fromProtoMsg(message: _99.FileDescriptorProtoProtoMsg): _99.FileDescriptorProto;
            toProto(message: _99.FileDescriptorProto): Uint8Array;
            toProtoMsg(message: _99.FileDescriptorProto): _99.FileDescriptorProtoProtoMsg;
        };
        DescriptorProto: {
            typeUrl: string;
            encode(message: _99.DescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.DescriptorProto;
            fromJSON(object: any): _99.DescriptorProto;
            toJSON(message: _99.DescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _99.FieldDescriptorProto_Label;
                    type?: _99.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _99.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _99.FieldOptions_JSType;
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
                    label?: _99.FieldDescriptorProto_Label;
                    type?: _99.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _99.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _99.FieldOptions_JSType;
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
            }): _99.DescriptorProto;
            fromSDK(object: _99.DescriptorProtoSDKType): _99.DescriptorProto;
            toSDK(message: _99.DescriptorProto): _99.DescriptorProtoSDKType;
            fromAmino(object: _99.DescriptorProtoAmino): _99.DescriptorProto;
            toAmino(message: _99.DescriptorProto): _99.DescriptorProtoAmino;
            fromAminoMsg(object: _99.DescriptorProtoAminoMsg): _99.DescriptorProto;
            fromProtoMsg(message: _99.DescriptorProtoProtoMsg): _99.DescriptorProto;
            toProto(message: _99.DescriptorProto): Uint8Array;
            toProtoMsg(message: _99.DescriptorProto): _99.DescriptorProtoProtoMsg;
        };
        DescriptorProto_ExtensionRange: {
            typeUrl: string;
            encode(message: _99.DescriptorProto_ExtensionRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _99.DescriptorProto_ExtensionRange;
            toJSON(message: _99.DescriptorProto_ExtensionRange): unknown;
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
            }): _99.DescriptorProto_ExtensionRange;
            fromSDK(object: _99.DescriptorProto_ExtensionRangeSDKType): _99.DescriptorProto_ExtensionRange;
            toSDK(message: _99.DescriptorProto_ExtensionRange): _99.DescriptorProto_ExtensionRangeSDKType;
            fromAmino(object: _99.DescriptorProto_ExtensionRangeAmino): _99.DescriptorProto_ExtensionRange;
            toAmino(message: _99.DescriptorProto_ExtensionRange): _99.DescriptorProto_ExtensionRangeAmino;
            fromAminoMsg(object: _99.DescriptorProto_ExtensionRangeAminoMsg): _99.DescriptorProto_ExtensionRange;
            fromProtoMsg(message: _99.DescriptorProto_ExtensionRangeProtoMsg): _99.DescriptorProto_ExtensionRange;
            toProto(message: _99.DescriptorProto_ExtensionRange): Uint8Array;
            toProtoMsg(message: _99.DescriptorProto_ExtensionRange): _99.DescriptorProto_ExtensionRangeProtoMsg;
        };
        DescriptorProto_ReservedRange: {
            typeUrl: string;
            encode(message: _99.DescriptorProto_ReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.DescriptorProto_ReservedRange;
            fromJSON(object: any): _99.DescriptorProto_ReservedRange;
            toJSON(message: _99.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _99.DescriptorProto_ReservedRange;
            fromSDK(object: _99.DescriptorProto_ReservedRangeSDKType): _99.DescriptorProto_ReservedRange;
            toSDK(message: _99.DescriptorProto_ReservedRange): _99.DescriptorProto_ReservedRangeSDKType;
            fromAmino(object: _99.DescriptorProto_ReservedRangeAmino): _99.DescriptorProto_ReservedRange;
            toAmino(message: _99.DescriptorProto_ReservedRange): _99.DescriptorProto_ReservedRangeAmino;
            fromAminoMsg(object: _99.DescriptorProto_ReservedRangeAminoMsg): _99.DescriptorProto_ReservedRange;
            fromProtoMsg(message: _99.DescriptorProto_ReservedRangeProtoMsg): _99.DescriptorProto_ReservedRange;
            toProto(message: _99.DescriptorProto_ReservedRange): Uint8Array;
            toProtoMsg(message: _99.DescriptorProto_ReservedRange): _99.DescriptorProto_ReservedRangeProtoMsg;
        };
        ExtensionRangeOptions: {
            typeUrl: string;
            encode(message: _99.ExtensionRangeOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.ExtensionRangeOptions;
            fromJSON(object: any): _99.ExtensionRangeOptions;
            toJSON(message: _99.ExtensionRangeOptions): unknown;
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
            }): _99.ExtensionRangeOptions;
            fromSDK(object: _99.ExtensionRangeOptionsSDKType): _99.ExtensionRangeOptions;
            toSDK(message: _99.ExtensionRangeOptions): _99.ExtensionRangeOptionsSDKType;
            fromAmino(object: _99.ExtensionRangeOptionsAmino): _99.ExtensionRangeOptions;
            toAmino(message: _99.ExtensionRangeOptions): _99.ExtensionRangeOptionsAmino;
            fromAminoMsg(object: _99.ExtensionRangeOptionsAminoMsg): _99.ExtensionRangeOptions;
            fromProtoMsg(message: _99.ExtensionRangeOptionsProtoMsg): _99.ExtensionRangeOptions;
            toProto(message: _99.ExtensionRangeOptions): Uint8Array;
            toProtoMsg(message: _99.ExtensionRangeOptions): _99.ExtensionRangeOptionsProtoMsg;
        };
        FieldDescriptorProto: {
            typeUrl: string;
            encode(message: _99.FieldDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.FieldDescriptorProto;
            fromJSON(object: any): _99.FieldDescriptorProto;
            toJSON(message: _99.FieldDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _99.FieldDescriptorProto_Label;
                type?: _99.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _99.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _99.FieldOptions_JSType;
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
            }): _99.FieldDescriptorProto;
            fromSDK(object: _99.FieldDescriptorProtoSDKType): _99.FieldDescriptorProto;
            toSDK(message: _99.FieldDescriptorProto): _99.FieldDescriptorProtoSDKType;
            fromAmino(object: _99.FieldDescriptorProtoAmino): _99.FieldDescriptorProto;
            toAmino(message: _99.FieldDescriptorProto): _99.FieldDescriptorProtoAmino;
            fromAminoMsg(object: _99.FieldDescriptorProtoAminoMsg): _99.FieldDescriptorProto;
            fromProtoMsg(message: _99.FieldDescriptorProtoProtoMsg): _99.FieldDescriptorProto;
            toProto(message: _99.FieldDescriptorProto): Uint8Array;
            toProtoMsg(message: _99.FieldDescriptorProto): _99.FieldDescriptorProtoProtoMsg;
        };
        OneofDescriptorProto: {
            typeUrl: string;
            encode(message: _99.OneofDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.OneofDescriptorProto;
            fromJSON(object: any): _99.OneofDescriptorProto;
            toJSON(message: _99.OneofDescriptorProto): unknown;
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
            }): _99.OneofDescriptorProto;
            fromSDK(object: _99.OneofDescriptorProtoSDKType): _99.OneofDescriptorProto;
            toSDK(message: _99.OneofDescriptorProto): _99.OneofDescriptorProtoSDKType;
            fromAmino(object: _99.OneofDescriptorProtoAmino): _99.OneofDescriptorProto;
            toAmino(message: _99.OneofDescriptorProto): _99.OneofDescriptorProtoAmino;
            fromAminoMsg(object: _99.OneofDescriptorProtoAminoMsg): _99.OneofDescriptorProto;
            fromProtoMsg(message: _99.OneofDescriptorProtoProtoMsg): _99.OneofDescriptorProto;
            toProto(message: _99.OneofDescriptorProto): Uint8Array;
            toProtoMsg(message: _99.OneofDescriptorProto): _99.OneofDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto: {
            typeUrl: string;
            encode(message: _99.EnumDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.EnumDescriptorProto;
            fromJSON(object: any): _99.EnumDescriptorProto;
            toJSON(message: _99.EnumDescriptorProto): unknown;
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
            }): _99.EnumDescriptorProto;
            fromSDK(object: _99.EnumDescriptorProtoSDKType): _99.EnumDescriptorProto;
            toSDK(message: _99.EnumDescriptorProto): _99.EnumDescriptorProtoSDKType;
            fromAmino(object: _99.EnumDescriptorProtoAmino): _99.EnumDescriptorProto;
            toAmino(message: _99.EnumDescriptorProto): _99.EnumDescriptorProtoAmino;
            fromAminoMsg(object: _99.EnumDescriptorProtoAminoMsg): _99.EnumDescriptorProto;
            fromProtoMsg(message: _99.EnumDescriptorProtoProtoMsg): _99.EnumDescriptorProto;
            toProto(message: _99.EnumDescriptorProto): Uint8Array;
            toProtoMsg(message: _99.EnumDescriptorProto): _99.EnumDescriptorProtoProtoMsg;
        };
        EnumDescriptorProto_EnumReservedRange: {
            typeUrl: string;
            encode(message: _99.EnumDescriptorProto_EnumReservedRange, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _99.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _99.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _99.EnumDescriptorProto_EnumReservedRange;
            fromSDK(object: _99.EnumDescriptorProto_EnumReservedRangeSDKType): _99.EnumDescriptorProto_EnumReservedRange;
            toSDK(message: _99.EnumDescriptorProto_EnumReservedRange): _99.EnumDescriptorProto_EnumReservedRangeSDKType;
            fromAmino(object: _99.EnumDescriptorProto_EnumReservedRangeAmino): _99.EnumDescriptorProto_EnumReservedRange;
            toAmino(message: _99.EnumDescriptorProto_EnumReservedRange): _99.EnumDescriptorProto_EnumReservedRangeAmino;
            fromAminoMsg(object: _99.EnumDescriptorProto_EnumReservedRangeAminoMsg): _99.EnumDescriptorProto_EnumReservedRange;
            fromProtoMsg(message: _99.EnumDescriptorProto_EnumReservedRangeProtoMsg): _99.EnumDescriptorProto_EnumReservedRange;
            toProto(message: _99.EnumDescriptorProto_EnumReservedRange): Uint8Array;
            toProtoMsg(message: _99.EnumDescriptorProto_EnumReservedRange): _99.EnumDescriptorProto_EnumReservedRangeProtoMsg;
        };
        EnumValueDescriptorProto: {
            typeUrl: string;
            encode(message: _99.EnumValueDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.EnumValueDescriptorProto;
            fromJSON(object: any): _99.EnumValueDescriptorProto;
            toJSON(message: _99.EnumValueDescriptorProto): unknown;
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
            }): _99.EnumValueDescriptorProto;
            fromSDK(object: _99.EnumValueDescriptorProtoSDKType): _99.EnumValueDescriptorProto;
            toSDK(message: _99.EnumValueDescriptorProto): _99.EnumValueDescriptorProtoSDKType;
            fromAmino(object: _99.EnumValueDescriptorProtoAmino): _99.EnumValueDescriptorProto;
            toAmino(message: _99.EnumValueDescriptorProto): _99.EnumValueDescriptorProtoAmino;
            fromAminoMsg(object: _99.EnumValueDescriptorProtoAminoMsg): _99.EnumValueDescriptorProto;
            fromProtoMsg(message: _99.EnumValueDescriptorProtoProtoMsg): _99.EnumValueDescriptorProto;
            toProto(message: _99.EnumValueDescriptorProto): Uint8Array;
            toProtoMsg(message: _99.EnumValueDescriptorProto): _99.EnumValueDescriptorProtoProtoMsg;
        };
        ServiceDescriptorProto: {
            typeUrl: string;
            encode(message: _99.ServiceDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.ServiceDescriptorProto;
            fromJSON(object: any): _99.ServiceDescriptorProto;
            toJSON(message: _99.ServiceDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _99.MethodOptions_IdempotencyLevel;
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
            }): _99.ServiceDescriptorProto;
            fromSDK(object: _99.ServiceDescriptorProtoSDKType): _99.ServiceDescriptorProto;
            toSDK(message: _99.ServiceDescriptorProto): _99.ServiceDescriptorProtoSDKType;
            fromAmino(object: _99.ServiceDescriptorProtoAmino): _99.ServiceDescriptorProto;
            toAmino(message: _99.ServiceDescriptorProto): _99.ServiceDescriptorProtoAmino;
            fromAminoMsg(object: _99.ServiceDescriptorProtoAminoMsg): _99.ServiceDescriptorProto;
            fromProtoMsg(message: _99.ServiceDescriptorProtoProtoMsg): _99.ServiceDescriptorProto;
            toProto(message: _99.ServiceDescriptorProto): Uint8Array;
            toProtoMsg(message: _99.ServiceDescriptorProto): _99.ServiceDescriptorProtoProtoMsg;
        };
        MethodDescriptorProto: {
            typeUrl: string;
            encode(message: _99.MethodDescriptorProto, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.MethodDescriptorProto;
            fromJSON(object: any): _99.MethodDescriptorProto;
            toJSON(message: _99.MethodDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _99.MethodOptions_IdempotencyLevel;
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
            }): _99.MethodDescriptorProto;
            fromSDK(object: _99.MethodDescriptorProtoSDKType): _99.MethodDescriptorProto;
            toSDK(message: _99.MethodDescriptorProto): _99.MethodDescriptorProtoSDKType;
            fromAmino(object: _99.MethodDescriptorProtoAmino): _99.MethodDescriptorProto;
            toAmino(message: _99.MethodDescriptorProto): _99.MethodDescriptorProtoAmino;
            fromAminoMsg(object: _99.MethodDescriptorProtoAminoMsg): _99.MethodDescriptorProto;
            fromProtoMsg(message: _99.MethodDescriptorProtoProtoMsg): _99.MethodDescriptorProto;
            toProto(message: _99.MethodDescriptorProto): Uint8Array;
            toProtoMsg(message: _99.MethodDescriptorProto): _99.MethodDescriptorProtoProtoMsg;
        };
        FileOptions: {
            typeUrl: string;
            encode(message: _99.FileOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.FileOptions;
            fromJSON(object: any): _99.FileOptions;
            toJSON(message: _99.FileOptions): unknown;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _99.FileOptions_OptimizeMode;
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
            }): _99.FileOptions;
            fromSDK(object: _99.FileOptionsSDKType): _99.FileOptions;
            toSDK(message: _99.FileOptions): _99.FileOptionsSDKType;
            fromAmino(object: _99.FileOptionsAmino): _99.FileOptions;
            toAmino(message: _99.FileOptions): _99.FileOptionsAmino;
            fromAminoMsg(object: _99.FileOptionsAminoMsg): _99.FileOptions;
            fromProtoMsg(message: _99.FileOptionsProtoMsg): _99.FileOptions;
            toProto(message: _99.FileOptions): Uint8Array;
            toProtoMsg(message: _99.FileOptions): _99.FileOptionsProtoMsg;
        };
        MessageOptions: {
            typeUrl: string;
            encode(message: _99.MessageOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.MessageOptions;
            fromJSON(object: any): _99.MessageOptions;
            toJSON(message: _99.MessageOptions): unknown;
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
            }): _99.MessageOptions;
            fromSDK(object: _99.MessageOptionsSDKType): _99.MessageOptions;
            toSDK(message: _99.MessageOptions): _99.MessageOptionsSDKType;
            fromAmino(object: _99.MessageOptionsAmino): _99.MessageOptions;
            toAmino(message: _99.MessageOptions): _99.MessageOptionsAmino;
            fromAminoMsg(object: _99.MessageOptionsAminoMsg): _99.MessageOptions;
            fromProtoMsg(message: _99.MessageOptionsProtoMsg): _99.MessageOptions;
            toProto(message: _99.MessageOptions): Uint8Array;
            toProtoMsg(message: _99.MessageOptions): _99.MessageOptionsProtoMsg;
        };
        FieldOptions: {
            typeUrl: string;
            encode(message: _99.FieldOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.FieldOptions;
            fromJSON(object: any): _99.FieldOptions;
            toJSON(message: _99.FieldOptions): unknown;
            fromPartial(object: {
                ctype?: _99.FieldOptions_CType;
                packed?: boolean;
                jstype?: _99.FieldOptions_JSType;
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
            }): _99.FieldOptions;
            fromSDK(object: _99.FieldOptionsSDKType): _99.FieldOptions;
            toSDK(message: _99.FieldOptions): _99.FieldOptionsSDKType;
            fromAmino(object: _99.FieldOptionsAmino): _99.FieldOptions;
            toAmino(message: _99.FieldOptions): _99.FieldOptionsAmino;
            fromAminoMsg(object: _99.FieldOptionsAminoMsg): _99.FieldOptions;
            fromProtoMsg(message: _99.FieldOptionsProtoMsg): _99.FieldOptions;
            toProto(message: _99.FieldOptions): Uint8Array;
            toProtoMsg(message: _99.FieldOptions): _99.FieldOptionsProtoMsg;
        };
        OneofOptions: {
            typeUrl: string;
            encode(message: _99.OneofOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.OneofOptions;
            fromJSON(object: any): _99.OneofOptions;
            toJSON(message: _99.OneofOptions): unknown;
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
            }): _99.OneofOptions;
            fromSDK(object: _99.OneofOptionsSDKType): _99.OneofOptions;
            toSDK(message: _99.OneofOptions): _99.OneofOptionsSDKType;
            fromAmino(object: _99.OneofOptionsAmino): _99.OneofOptions;
            toAmino(message: _99.OneofOptions): _99.OneofOptionsAmino;
            fromAminoMsg(object: _99.OneofOptionsAminoMsg): _99.OneofOptions;
            fromProtoMsg(message: _99.OneofOptionsProtoMsg): _99.OneofOptions;
            toProto(message: _99.OneofOptions): Uint8Array;
            toProtoMsg(message: _99.OneofOptions): _99.OneofOptionsProtoMsg;
        };
        EnumOptions: {
            typeUrl: string;
            encode(message: _99.EnumOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.EnumOptions;
            fromJSON(object: any): _99.EnumOptions;
            toJSON(message: _99.EnumOptions): unknown;
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
            }): _99.EnumOptions;
            fromSDK(object: _99.EnumOptionsSDKType): _99.EnumOptions;
            toSDK(message: _99.EnumOptions): _99.EnumOptionsSDKType;
            fromAmino(object: _99.EnumOptionsAmino): _99.EnumOptions;
            toAmino(message: _99.EnumOptions): _99.EnumOptionsAmino;
            fromAminoMsg(object: _99.EnumOptionsAminoMsg): _99.EnumOptions;
            fromProtoMsg(message: _99.EnumOptionsProtoMsg): _99.EnumOptions;
            toProto(message: _99.EnumOptions): Uint8Array;
            toProtoMsg(message: _99.EnumOptions): _99.EnumOptionsProtoMsg;
        };
        EnumValueOptions: {
            typeUrl: string;
            encode(message: _99.EnumValueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.EnumValueOptions;
            fromJSON(object: any): _99.EnumValueOptions;
            toJSON(message: _99.EnumValueOptions): unknown;
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
            }): _99.EnumValueOptions;
            fromSDK(object: _99.EnumValueOptionsSDKType): _99.EnumValueOptions;
            toSDK(message: _99.EnumValueOptions): _99.EnumValueOptionsSDKType;
            fromAmino(object: _99.EnumValueOptionsAmino): _99.EnumValueOptions;
            toAmino(message: _99.EnumValueOptions): _99.EnumValueOptionsAmino;
            fromAminoMsg(object: _99.EnumValueOptionsAminoMsg): _99.EnumValueOptions;
            fromProtoMsg(message: _99.EnumValueOptionsProtoMsg): _99.EnumValueOptions;
            toProto(message: _99.EnumValueOptions): Uint8Array;
            toProtoMsg(message: _99.EnumValueOptions): _99.EnumValueOptionsProtoMsg;
        };
        ServiceOptions: {
            typeUrl: string;
            encode(message: _99.ServiceOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.ServiceOptions;
            fromJSON(object: any): _99.ServiceOptions;
            toJSON(message: _99.ServiceOptions): unknown;
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
            }): _99.ServiceOptions;
            fromSDK(object: _99.ServiceOptionsSDKType): _99.ServiceOptions;
            toSDK(message: _99.ServiceOptions): _99.ServiceOptionsSDKType;
            fromAmino(object: _99.ServiceOptionsAmino): _99.ServiceOptions;
            toAmino(message: _99.ServiceOptions): _99.ServiceOptionsAmino;
            fromAminoMsg(object: _99.ServiceOptionsAminoMsg): _99.ServiceOptions;
            fromProtoMsg(message: _99.ServiceOptionsProtoMsg): _99.ServiceOptions;
            toProto(message: _99.ServiceOptions): Uint8Array;
            toProtoMsg(message: _99.ServiceOptions): _99.ServiceOptionsProtoMsg;
        };
        MethodOptions: {
            typeUrl: string;
            encode(message: _99.MethodOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.MethodOptions;
            fromJSON(object: any): _99.MethodOptions;
            toJSON(message: _99.MethodOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _99.MethodOptions_IdempotencyLevel;
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
            }): _99.MethodOptions;
            fromSDK(object: _99.MethodOptionsSDKType): _99.MethodOptions;
            toSDK(message: _99.MethodOptions): _99.MethodOptionsSDKType;
            fromAmino(object: _99.MethodOptionsAmino): _99.MethodOptions;
            toAmino(message: _99.MethodOptions): _99.MethodOptionsAmino;
            fromAminoMsg(object: _99.MethodOptionsAminoMsg): _99.MethodOptions;
            fromProtoMsg(message: _99.MethodOptionsProtoMsg): _99.MethodOptions;
            toProto(message: _99.MethodOptions): Uint8Array;
            toProtoMsg(message: _99.MethodOptions): _99.MethodOptionsProtoMsg;
        };
        UninterpretedOption: {
            typeUrl: string;
            encode(message: _99.UninterpretedOption, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.UninterpretedOption;
            fromJSON(object: any): _99.UninterpretedOption;
            toJSON(message: _99.UninterpretedOption): unknown;
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
            }): _99.UninterpretedOption;
            fromSDK(object: _99.UninterpretedOptionSDKType): _99.UninterpretedOption;
            toSDK(message: _99.UninterpretedOption): _99.UninterpretedOptionSDKType;
            fromAmino(object: _99.UninterpretedOptionAmino): _99.UninterpretedOption;
            toAmino(message: _99.UninterpretedOption): _99.UninterpretedOptionAmino;
            fromAminoMsg(object: _99.UninterpretedOptionAminoMsg): _99.UninterpretedOption;
            fromProtoMsg(message: _99.UninterpretedOptionProtoMsg): _99.UninterpretedOption;
            toProto(message: _99.UninterpretedOption): Uint8Array;
            toProtoMsg(message: _99.UninterpretedOption): _99.UninterpretedOptionProtoMsg;
        };
        UninterpretedOption_NamePart: {
            typeUrl: string;
            encode(message: _99.UninterpretedOption_NamePart, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.UninterpretedOption_NamePart;
            fromJSON(object: any): _99.UninterpretedOption_NamePart;
            toJSON(message: _99.UninterpretedOption_NamePart): unknown;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _99.UninterpretedOption_NamePart;
            fromSDK(object: _99.UninterpretedOption_NamePartSDKType): _99.UninterpretedOption_NamePart;
            toSDK(message: _99.UninterpretedOption_NamePart): _99.UninterpretedOption_NamePartSDKType;
            fromAmino(object: _99.UninterpretedOption_NamePartAmino): _99.UninterpretedOption_NamePart;
            toAmino(message: _99.UninterpretedOption_NamePart): _99.UninterpretedOption_NamePartAmino;
            fromAminoMsg(object: _99.UninterpretedOption_NamePartAminoMsg): _99.UninterpretedOption_NamePart;
            fromProtoMsg(message: _99.UninterpretedOption_NamePartProtoMsg): _99.UninterpretedOption_NamePart;
            toProto(message: _99.UninterpretedOption_NamePart): Uint8Array;
            toProtoMsg(message: _99.UninterpretedOption_NamePart): _99.UninterpretedOption_NamePartProtoMsg;
        };
        SourceCodeInfo: {
            typeUrl: string;
            encode(message: _99.SourceCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.SourceCodeInfo;
            fromJSON(object: any): _99.SourceCodeInfo;
            toJSON(message: _99.SourceCodeInfo): unknown;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _99.SourceCodeInfo;
            fromSDK(object: _99.SourceCodeInfoSDKType): _99.SourceCodeInfo;
            toSDK(message: _99.SourceCodeInfo): _99.SourceCodeInfoSDKType;
            fromAmino(object: _99.SourceCodeInfoAmino): _99.SourceCodeInfo;
            toAmino(message: _99.SourceCodeInfo): _99.SourceCodeInfoAmino;
            fromAminoMsg(object: _99.SourceCodeInfoAminoMsg): _99.SourceCodeInfo;
            fromProtoMsg(message: _99.SourceCodeInfoProtoMsg): _99.SourceCodeInfo;
            toProto(message: _99.SourceCodeInfo): Uint8Array;
            toProtoMsg(message: _99.SourceCodeInfo): _99.SourceCodeInfoProtoMsg;
        };
        SourceCodeInfo_Location: {
            typeUrl: string;
            encode(message: _99.SourceCodeInfo_Location, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.SourceCodeInfo_Location;
            fromJSON(object: any): _99.SourceCodeInfo_Location;
            toJSON(message: _99.SourceCodeInfo_Location): unknown;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _99.SourceCodeInfo_Location;
            fromSDK(object: _99.SourceCodeInfo_LocationSDKType): _99.SourceCodeInfo_Location;
            toSDK(message: _99.SourceCodeInfo_Location): _99.SourceCodeInfo_LocationSDKType;
            fromAmino(object: _99.SourceCodeInfo_LocationAmino): _99.SourceCodeInfo_Location;
            toAmino(message: _99.SourceCodeInfo_Location): _99.SourceCodeInfo_LocationAmino;
            fromAminoMsg(object: _99.SourceCodeInfo_LocationAminoMsg): _99.SourceCodeInfo_Location;
            fromProtoMsg(message: _99.SourceCodeInfo_LocationProtoMsg): _99.SourceCodeInfo_Location;
            toProto(message: _99.SourceCodeInfo_Location): Uint8Array;
            toProtoMsg(message: _99.SourceCodeInfo_Location): _99.SourceCodeInfo_LocationProtoMsg;
        };
        GeneratedCodeInfo: {
            typeUrl: string;
            encode(message: _99.GeneratedCodeInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.GeneratedCodeInfo;
            fromJSON(object: any): _99.GeneratedCodeInfo;
            toJSON(message: _99.GeneratedCodeInfo): unknown;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _99.GeneratedCodeInfo;
            fromSDK(object: _99.GeneratedCodeInfoSDKType): _99.GeneratedCodeInfo;
            toSDK(message: _99.GeneratedCodeInfo): _99.GeneratedCodeInfoSDKType;
            fromAmino(object: _99.GeneratedCodeInfoAmino): _99.GeneratedCodeInfo;
            toAmino(message: _99.GeneratedCodeInfo): _99.GeneratedCodeInfoAmino;
            fromAminoMsg(object: _99.GeneratedCodeInfoAminoMsg): _99.GeneratedCodeInfo;
            fromProtoMsg(message: _99.GeneratedCodeInfoProtoMsg): _99.GeneratedCodeInfo;
            toProto(message: _99.GeneratedCodeInfo): Uint8Array;
            toProtoMsg(message: _99.GeneratedCodeInfo): _99.GeneratedCodeInfoProtoMsg;
        };
        GeneratedCodeInfo_Annotation: {
            typeUrl: string;
            encode(message: _99.GeneratedCodeInfo_Annotation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _99.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _99.GeneratedCodeInfo_Annotation;
            toJSON(message: _99.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _99.GeneratedCodeInfo_Annotation;
            fromSDK(object: _99.GeneratedCodeInfo_AnnotationSDKType): _99.GeneratedCodeInfo_Annotation;
            toSDK(message: _99.GeneratedCodeInfo_Annotation): _99.GeneratedCodeInfo_AnnotationSDKType;
            fromAmino(object: _99.GeneratedCodeInfo_AnnotationAmino): _99.GeneratedCodeInfo_Annotation;
            toAmino(message: _99.GeneratedCodeInfo_Annotation): _99.GeneratedCodeInfo_AnnotationAmino;
            fromAminoMsg(object: _99.GeneratedCodeInfo_AnnotationAminoMsg): _99.GeneratedCodeInfo_Annotation;
            fromProtoMsg(message: _99.GeneratedCodeInfo_AnnotationProtoMsg): _99.GeneratedCodeInfo_Annotation;
            toProto(message: _99.GeneratedCodeInfo_Annotation): Uint8Array;
            toProtoMsg(message: _99.GeneratedCodeInfo_Annotation): _99.GeneratedCodeInfo_AnnotationProtoMsg;
        };
        Any: {
            typeUrl: string;
            encode(message: _98.Any, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _98.Any;
            fromJSON(object: any): _98.Any;
            toJSON(message: _98.Any): unknown;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _98.Any;
            fromSDK(object: _98.AnySDKType): _98.Any;
            toSDK(message: _98.Any): _98.AnySDKType;
            fromAmino(object: _98.AnyAmino): _98.Any;
            toAmino(message: _98.Any): _98.AnyAmino;
            fromAminoMsg(object: _98.AnyAminoMsg): _98.Any;
            fromProtoMsg(message: _98.AnyProtoMsg): _98.Any;
            toProto(message: _98.Any): Uint8Array;
            toProtoMsg(message: _98.Any): _98.AnyProtoMsg;
        };
    };
}

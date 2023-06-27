import * as _155 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _155.HashOp;
    hashOpToJSON(object: _155.HashOp): string;
    lengthOpFromJSON(object: any): _155.LengthOp;
    lengthOpToJSON(object: _155.LengthOp): string;
    HashOp: typeof _155.HashOp;
    HashOpSDKType: typeof _155.HashOp;
    HashOpAmino: typeof _155.HashOp;
    LengthOp: typeof _155.LengthOp;
    LengthOpSDKType: typeof _155.LengthOp;
    LengthOpAmino: typeof _155.LengthOp;
    ExistenceProof: {
        typeUrl: string;
        encode(message: _155.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.ExistenceProof;
        fromJSON(object: any): _155.ExistenceProof;
        toJSON(message: _155.ExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _155.HashOp;
                prehashKey?: _155.HashOp;
                prehashValue?: _155.HashOp;
                length?: _155.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _155.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _155.ExistenceProof;
        fromSDK(object: _155.ExistenceProofSDKType): _155.ExistenceProof;
        toSDK(message: _155.ExistenceProof): _155.ExistenceProofSDKType;
        fromAmino(object: _155.ExistenceProofAmino): _155.ExistenceProof;
        toAmino(message: _155.ExistenceProof): _155.ExistenceProofAmino;
        fromAminoMsg(object: _155.ExistenceProofAminoMsg): _155.ExistenceProof;
        fromProtoMsg(message: _155.ExistenceProofProtoMsg): _155.ExistenceProof;
        toProto(message: _155.ExistenceProof): Uint8Array;
        toProtoMsg(message: _155.ExistenceProof): _155.ExistenceProofProtoMsg;
    };
    NonExistenceProof: {
        typeUrl: string;
        encode(message: _155.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.NonExistenceProof;
        fromJSON(object: any): _155.NonExistenceProof;
        toJSON(message: _155.NonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _155.HashOp;
                    prehashKey?: _155.HashOp;
                    prehashValue?: _155.HashOp;
                    length?: _155.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _155.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _155.HashOp;
                    prehashKey?: _155.HashOp;
                    prehashValue?: _155.HashOp;
                    length?: _155.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _155.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _155.NonExistenceProof;
        fromSDK(object: _155.NonExistenceProofSDKType): _155.NonExistenceProof;
        toSDK(message: _155.NonExistenceProof): _155.NonExistenceProofSDKType;
        fromAmino(object: _155.NonExistenceProofAmino): _155.NonExistenceProof;
        toAmino(message: _155.NonExistenceProof): _155.NonExistenceProofAmino;
        fromAminoMsg(object: _155.NonExistenceProofAminoMsg): _155.NonExistenceProof;
        fromProtoMsg(message: _155.NonExistenceProofProtoMsg): _155.NonExistenceProof;
        toProto(message: _155.NonExistenceProof): Uint8Array;
        toProtoMsg(message: _155.NonExistenceProof): _155.NonExistenceProofProtoMsg;
    };
    CommitmentProof: {
        typeUrl: string;
        encode(message: _155.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.CommitmentProof;
        fromJSON(object: any): _155.CommitmentProof;
        toJSON(message: _155.CommitmentProof): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _155.HashOp;
                    prehashKey?: _155.HashOp;
                    prehashValue?: _155.HashOp;
                    length?: _155.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _155.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _155.HashOp;
                        prehashKey?: _155.HashOp;
                        prehashValue?: _155.HashOp;
                        length?: _155.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _155.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _155.HashOp;
                        prehashKey?: _155.HashOp;
                        prehashValue?: _155.HashOp;
                        length?: _155.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _155.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _155.HashOp;
                            prehashKey?: _155.HashOp;
                            prehashValue?: _155.HashOp;
                            length?: _155.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _155.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _155.HashOp;
                                prehashKey?: _155.HashOp;
                                prehashValue?: _155.HashOp;
                                length?: _155.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _155.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _155.HashOp;
                                prehashKey?: _155.HashOp;
                                prehashValue?: _155.HashOp;
                                length?: _155.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _155.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[];
            };
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _155.HashOp;
                            prehashKey?: _155.HashOp;
                            prehashValue?: _155.HashOp;
                            length?: _155.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _155.HashOp;
                                prehashKey?: _155.HashOp;
                                prehashValue?: _155.HashOp;
                                length?: _155.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _155.HashOp;
                                prehashKey?: _155.HashOp;
                                prehashValue?: _155.HashOp;
                                length?: _155.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _155.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _155.CommitmentProof;
        fromSDK(object: _155.CommitmentProofSDKType): _155.CommitmentProof;
        toSDK(message: _155.CommitmentProof): _155.CommitmentProofSDKType;
        fromAmino(object: _155.CommitmentProofAmino): _155.CommitmentProof;
        toAmino(message: _155.CommitmentProof): _155.CommitmentProofAmino;
        fromAminoMsg(object: _155.CommitmentProofAminoMsg): _155.CommitmentProof;
        fromProtoMsg(message: _155.CommitmentProofProtoMsg): _155.CommitmentProof;
        toProto(message: _155.CommitmentProof): Uint8Array;
        toProtoMsg(message: _155.CommitmentProof): _155.CommitmentProofProtoMsg;
    };
    LeafOp: {
        typeUrl: string;
        encode(message: _155.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.LeafOp;
        fromJSON(object: any): _155.LeafOp;
        toJSON(message: _155.LeafOp): unknown;
        fromPartial(object: {
            hash?: _155.HashOp;
            prehashKey?: _155.HashOp;
            prehashValue?: _155.HashOp;
            length?: _155.LengthOp;
            prefix?: Uint8Array;
        }): _155.LeafOp;
        fromSDK(object: _155.LeafOpSDKType): _155.LeafOp;
        toSDK(message: _155.LeafOp): _155.LeafOpSDKType;
        fromAmino(object: _155.LeafOpAmino): _155.LeafOp;
        toAmino(message: _155.LeafOp): _155.LeafOpAmino;
        fromAminoMsg(object: _155.LeafOpAminoMsg): _155.LeafOp;
        fromProtoMsg(message: _155.LeafOpProtoMsg): _155.LeafOp;
        toProto(message: _155.LeafOp): Uint8Array;
        toProtoMsg(message: _155.LeafOp): _155.LeafOpProtoMsg;
    };
    InnerOp: {
        typeUrl: string;
        encode(message: _155.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.InnerOp;
        fromJSON(object: any): _155.InnerOp;
        toJSON(message: _155.InnerOp): unknown;
        fromPartial(object: {
            hash?: _155.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _155.InnerOp;
        fromSDK(object: _155.InnerOpSDKType): _155.InnerOp;
        toSDK(message: _155.InnerOp): _155.InnerOpSDKType;
        fromAmino(object: _155.InnerOpAmino): _155.InnerOp;
        toAmino(message: _155.InnerOp): _155.InnerOpAmino;
        fromAminoMsg(object: _155.InnerOpAminoMsg): _155.InnerOp;
        fromProtoMsg(message: _155.InnerOpProtoMsg): _155.InnerOp;
        toProto(message: _155.InnerOp): Uint8Array;
        toProtoMsg(message: _155.InnerOp): _155.InnerOpProtoMsg;
    };
    ProofSpec: {
        typeUrl: string;
        encode(message: _155.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.ProofSpec;
        fromJSON(object: any): _155.ProofSpec;
        toJSON(message: _155.ProofSpec): unknown;
        fromPartial(object: {
            leafSpec?: {
                hash?: _155.HashOp;
                prehashKey?: _155.HashOp;
                prehashValue?: _155.HashOp;
                length?: _155.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _155.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _155.ProofSpec;
        fromSDK(object: _155.ProofSpecSDKType): _155.ProofSpec;
        toSDK(message: _155.ProofSpec): _155.ProofSpecSDKType;
        fromAmino(object: _155.ProofSpecAmino): _155.ProofSpec;
        toAmino(message: _155.ProofSpec): _155.ProofSpecAmino;
        fromAminoMsg(object: _155.ProofSpecAminoMsg): _155.ProofSpec;
        fromProtoMsg(message: _155.ProofSpecProtoMsg): _155.ProofSpec;
        toProto(message: _155.ProofSpec): Uint8Array;
        toProtoMsg(message: _155.ProofSpec): _155.ProofSpecProtoMsg;
    };
    InnerSpec: {
        typeUrl: string;
        encode(message: _155.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.InnerSpec;
        fromJSON(object: any): _155.InnerSpec;
        toJSON(message: _155.InnerSpec): unknown;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _155.HashOp;
        }): _155.InnerSpec;
        fromSDK(object: _155.InnerSpecSDKType): _155.InnerSpec;
        toSDK(message: _155.InnerSpec): _155.InnerSpecSDKType;
        fromAmino(object: _155.InnerSpecAmino): _155.InnerSpec;
        toAmino(message: _155.InnerSpec): _155.InnerSpecAmino;
        fromAminoMsg(object: _155.InnerSpecAminoMsg): _155.InnerSpec;
        fromProtoMsg(message: _155.InnerSpecProtoMsg): _155.InnerSpec;
        toProto(message: _155.InnerSpec): Uint8Array;
        toProtoMsg(message: _155.InnerSpec): _155.InnerSpecProtoMsg;
    };
    BatchProof: {
        typeUrl: string;
        encode(message: _155.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.BatchProof;
        fromJSON(object: any): _155.BatchProof;
        toJSON(message: _155.BatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _155.HashOp;
                        prehashKey?: _155.HashOp;
                        prehashValue?: _155.HashOp;
                        length?: _155.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _155.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _155.HashOp;
                            prehashKey?: _155.HashOp;
                            prehashValue?: _155.HashOp;
                            length?: _155.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _155.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _155.HashOp;
                            prehashKey?: _155.HashOp;
                            prehashValue?: _155.HashOp;
                            length?: _155.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _155.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _155.BatchProof;
        fromSDK(object: _155.BatchProofSDKType): _155.BatchProof;
        toSDK(message: _155.BatchProof): _155.BatchProofSDKType;
        fromAmino(object: _155.BatchProofAmino): _155.BatchProof;
        toAmino(message: _155.BatchProof): _155.BatchProofAmino;
        fromAminoMsg(object: _155.BatchProofAminoMsg): _155.BatchProof;
        fromProtoMsg(message: _155.BatchProofProtoMsg): _155.BatchProof;
        toProto(message: _155.BatchProof): Uint8Array;
        toProtoMsg(message: _155.BatchProof): _155.BatchProofProtoMsg;
    };
    BatchEntry: {
        typeUrl: string;
        encode(message: _155.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.BatchEntry;
        fromJSON(object: any): _155.BatchEntry;
        toJSON(message: _155.BatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _155.HashOp;
                    prehashKey?: _155.HashOp;
                    prehashValue?: _155.HashOp;
                    length?: _155.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _155.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _155.HashOp;
                        prehashKey?: _155.HashOp;
                        prehashValue?: _155.HashOp;
                        length?: _155.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _155.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _155.HashOp;
                        prehashKey?: _155.HashOp;
                        prehashValue?: _155.HashOp;
                        length?: _155.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _155.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _155.BatchEntry;
        fromSDK(object: _155.BatchEntrySDKType): _155.BatchEntry;
        toSDK(message: _155.BatchEntry): _155.BatchEntrySDKType;
        fromAmino(object: _155.BatchEntryAmino): _155.BatchEntry;
        toAmino(message: _155.BatchEntry): _155.BatchEntryAmino;
        fromAminoMsg(object: _155.BatchEntryAminoMsg): _155.BatchEntry;
        fromProtoMsg(message: _155.BatchEntryProtoMsg): _155.BatchEntry;
        toProto(message: _155.BatchEntry): Uint8Array;
        toProtoMsg(message: _155.BatchEntry): _155.BatchEntryProtoMsg;
    };
    CompressedBatchProof: {
        typeUrl: string;
        encode(message: _155.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.CompressedBatchProof;
        fromJSON(object: any): _155.CompressedBatchProof;
        toJSON(message: _155.CompressedBatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _155.HashOp;
                        prehashKey?: _155.HashOp;
                        prehashValue?: _155.HashOp;
                        length?: _155.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _155.HashOp;
                            prehashKey?: _155.HashOp;
                            prehashValue?: _155.HashOp;
                            length?: _155.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _155.HashOp;
                            prehashKey?: _155.HashOp;
                            prehashValue?: _155.HashOp;
                            length?: _155.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _155.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _155.CompressedBatchProof;
        fromSDK(object: _155.CompressedBatchProofSDKType): _155.CompressedBatchProof;
        toSDK(message: _155.CompressedBatchProof): _155.CompressedBatchProofSDKType;
        fromAmino(object: _155.CompressedBatchProofAmino): _155.CompressedBatchProof;
        toAmino(message: _155.CompressedBatchProof): _155.CompressedBatchProofAmino;
        fromAminoMsg(object: _155.CompressedBatchProofAminoMsg): _155.CompressedBatchProof;
        fromProtoMsg(message: _155.CompressedBatchProofProtoMsg): _155.CompressedBatchProof;
        toProto(message: _155.CompressedBatchProof): Uint8Array;
        toProtoMsg(message: _155.CompressedBatchProof): _155.CompressedBatchProofProtoMsg;
    };
    CompressedBatchEntry: {
        typeUrl: string;
        encode(message: _155.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.CompressedBatchEntry;
        fromJSON(object: any): _155.CompressedBatchEntry;
        toJSON(message: _155.CompressedBatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _155.HashOp;
                    prehashKey?: _155.HashOp;
                    prehashValue?: _155.HashOp;
                    length?: _155.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _155.HashOp;
                        prehashKey?: _155.HashOp;
                        prehashValue?: _155.HashOp;
                        length?: _155.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _155.HashOp;
                        prehashKey?: _155.HashOp;
                        prehashValue?: _155.HashOp;
                        length?: _155.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _155.CompressedBatchEntry;
        fromSDK(object: _155.CompressedBatchEntrySDKType): _155.CompressedBatchEntry;
        toSDK(message: _155.CompressedBatchEntry): _155.CompressedBatchEntrySDKType;
        fromAmino(object: _155.CompressedBatchEntryAmino): _155.CompressedBatchEntry;
        toAmino(message: _155.CompressedBatchEntry): _155.CompressedBatchEntryAmino;
        fromAminoMsg(object: _155.CompressedBatchEntryAminoMsg): _155.CompressedBatchEntry;
        fromProtoMsg(message: _155.CompressedBatchEntryProtoMsg): _155.CompressedBatchEntry;
        toProto(message: _155.CompressedBatchEntry): Uint8Array;
        toProtoMsg(message: _155.CompressedBatchEntry): _155.CompressedBatchEntryProtoMsg;
    };
    CompressedExistenceProof: {
        typeUrl: string;
        encode(message: _155.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.CompressedExistenceProof;
        fromJSON(object: any): _155.CompressedExistenceProof;
        toJSON(message: _155.CompressedExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _155.HashOp;
                prehashKey?: _155.HashOp;
                prehashValue?: _155.HashOp;
                length?: _155.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _155.CompressedExistenceProof;
        fromSDK(object: _155.CompressedExistenceProofSDKType): _155.CompressedExistenceProof;
        toSDK(message: _155.CompressedExistenceProof): _155.CompressedExistenceProofSDKType;
        fromAmino(object: _155.CompressedExistenceProofAmino): _155.CompressedExistenceProof;
        toAmino(message: _155.CompressedExistenceProof): _155.CompressedExistenceProofAmino;
        fromAminoMsg(object: _155.CompressedExistenceProofAminoMsg): _155.CompressedExistenceProof;
        fromProtoMsg(message: _155.CompressedExistenceProofProtoMsg): _155.CompressedExistenceProof;
        toProto(message: _155.CompressedExistenceProof): Uint8Array;
        toProtoMsg(message: _155.CompressedExistenceProof): _155.CompressedExistenceProofProtoMsg;
    };
    CompressedNonExistenceProof: {
        typeUrl: string;
        encode(message: _155.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.CompressedNonExistenceProof;
        fromJSON(object: any): _155.CompressedNonExistenceProof;
        toJSON(message: _155.CompressedNonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _155.HashOp;
                    prehashKey?: _155.HashOp;
                    prehashValue?: _155.HashOp;
                    length?: _155.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _155.HashOp;
                    prehashKey?: _155.HashOp;
                    prehashValue?: _155.HashOp;
                    length?: _155.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _155.CompressedNonExistenceProof;
        fromSDK(object: _155.CompressedNonExistenceProofSDKType): _155.CompressedNonExistenceProof;
        toSDK(message: _155.CompressedNonExistenceProof): _155.CompressedNonExistenceProofSDKType;
        fromAmino(object: _155.CompressedNonExistenceProofAmino): _155.CompressedNonExistenceProof;
        toAmino(message: _155.CompressedNonExistenceProof): _155.CompressedNonExistenceProofAmino;
        fromAminoMsg(object: _155.CompressedNonExistenceProofAminoMsg): _155.CompressedNonExistenceProof;
        fromProtoMsg(message: _155.CompressedNonExistenceProofProtoMsg): _155.CompressedNonExistenceProof;
        toProto(message: _155.CompressedNonExistenceProof): Uint8Array;
        toProtoMsg(message: _155.CompressedNonExistenceProof): _155.CompressedNonExistenceProofProtoMsg;
    };
};

import * as _1 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _1.HashOp;
    hashOpToJSON(object: _1.HashOp): string;
    lengthOpFromJSON(object: any): _1.LengthOp;
    lengthOpToJSON(object: _1.LengthOp): string;
    HashOp: typeof _1.HashOp;
    HashOpSDKType: typeof _1.HashOp;
    HashOpAmino: typeof _1.HashOp;
    LengthOp: typeof _1.LengthOp;
    LengthOpSDKType: typeof _1.LengthOp;
    LengthOpAmino: typeof _1.LengthOp;
    ExistenceProof: {
        typeUrl: string;
        encode(message: _1.ExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.ExistenceProof;
        fromJSON(object: any): _1.ExistenceProof;
        toJSON(message: _1.ExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _1.HashOp;
                prehashKey?: _1.HashOp;
                prehashValue?: _1.HashOp;
                length?: _1.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _1.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _1.ExistenceProof;
        fromSDK(object: _1.ExistenceProofSDKType): _1.ExistenceProof;
        toSDK(message: _1.ExistenceProof): _1.ExistenceProofSDKType;
        fromAmino(object: _1.ExistenceProofAmino): _1.ExistenceProof;
        toAmino(message: _1.ExistenceProof): _1.ExistenceProofAmino;
        fromAminoMsg(object: _1.ExistenceProofAminoMsg): _1.ExistenceProof;
        fromProtoMsg(message: _1.ExistenceProofProtoMsg): _1.ExistenceProof;
        toProto(message: _1.ExistenceProof): Uint8Array;
        toProtoMsg(message: _1.ExistenceProof): _1.ExistenceProofProtoMsg;
    };
    NonExistenceProof: {
        typeUrl: string;
        encode(message: _1.NonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.NonExistenceProof;
        fromJSON(object: any): _1.NonExistenceProof;
        toJSON(message: _1.NonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _1.HashOp;
                    prehashKey?: _1.HashOp;
                    prehashValue?: _1.HashOp;
                    length?: _1.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _1.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _1.HashOp;
                    prehashKey?: _1.HashOp;
                    prehashValue?: _1.HashOp;
                    length?: _1.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _1.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _1.NonExistenceProof;
        fromSDK(object: _1.NonExistenceProofSDKType): _1.NonExistenceProof;
        toSDK(message: _1.NonExistenceProof): _1.NonExistenceProofSDKType;
        fromAmino(object: _1.NonExistenceProofAmino): _1.NonExistenceProof;
        toAmino(message: _1.NonExistenceProof): _1.NonExistenceProofAmino;
        fromAminoMsg(object: _1.NonExistenceProofAminoMsg): _1.NonExistenceProof;
        fromProtoMsg(message: _1.NonExistenceProofProtoMsg): _1.NonExistenceProof;
        toProto(message: _1.NonExistenceProof): Uint8Array;
        toProtoMsg(message: _1.NonExistenceProof): _1.NonExistenceProofProtoMsg;
    };
    CommitmentProof: {
        typeUrl: string;
        encode(message: _1.CommitmentProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.CommitmentProof;
        fromJSON(object: any): _1.CommitmentProof;
        toJSON(message: _1.CommitmentProof): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _1.HashOp;
                    prehashKey?: _1.HashOp;
                    prehashValue?: _1.HashOp;
                    length?: _1.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _1.HashOp;
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
                        hash?: _1.HashOp;
                        prehashKey?: _1.HashOp;
                        prehashValue?: _1.HashOp;
                        length?: _1.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _1.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _1.HashOp;
                        prehashKey?: _1.HashOp;
                        prehashValue?: _1.HashOp;
                        length?: _1.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _1.HashOp;
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
                            hash?: _1.HashOp;
                            prehashKey?: _1.HashOp;
                            prehashValue?: _1.HashOp;
                            length?: _1.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _1.HashOp;
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
                                hash?: _1.HashOp;
                                prehashKey?: _1.HashOp;
                                prehashValue?: _1.HashOp;
                                length?: _1.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _1.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _1.HashOp;
                                prehashKey?: _1.HashOp;
                                prehashValue?: _1.HashOp;
                                length?: _1.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _1.HashOp;
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
                            hash?: _1.HashOp;
                            prehashKey?: _1.HashOp;
                            prehashValue?: _1.HashOp;
                            length?: _1.LengthOp;
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
                                hash?: _1.HashOp;
                                prehashKey?: _1.HashOp;
                                prehashValue?: _1.HashOp;
                                length?: _1.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _1.HashOp;
                                prehashKey?: _1.HashOp;
                                prehashValue?: _1.HashOp;
                                length?: _1.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _1.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _1.CommitmentProof;
        fromSDK(object: _1.CommitmentProofSDKType): _1.CommitmentProof;
        toSDK(message: _1.CommitmentProof): _1.CommitmentProofSDKType;
        fromAmino(object: _1.CommitmentProofAmino): _1.CommitmentProof;
        toAmino(message: _1.CommitmentProof): _1.CommitmentProofAmino;
        fromAminoMsg(object: _1.CommitmentProofAminoMsg): _1.CommitmentProof;
        fromProtoMsg(message: _1.CommitmentProofProtoMsg): _1.CommitmentProof;
        toProto(message: _1.CommitmentProof): Uint8Array;
        toProtoMsg(message: _1.CommitmentProof): _1.CommitmentProofProtoMsg;
    };
    LeafOp: {
        typeUrl: string;
        encode(message: _1.LeafOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.LeafOp;
        fromJSON(object: any): _1.LeafOp;
        toJSON(message: _1.LeafOp): unknown;
        fromPartial(object: {
            hash?: _1.HashOp;
            prehashKey?: _1.HashOp;
            prehashValue?: _1.HashOp;
            length?: _1.LengthOp;
            prefix?: Uint8Array;
        }): _1.LeafOp;
        fromSDK(object: _1.LeafOpSDKType): _1.LeafOp;
        toSDK(message: _1.LeafOp): _1.LeafOpSDKType;
        fromAmino(object: _1.LeafOpAmino): _1.LeafOp;
        toAmino(message: _1.LeafOp): _1.LeafOpAmino;
        fromAminoMsg(object: _1.LeafOpAminoMsg): _1.LeafOp;
        fromProtoMsg(message: _1.LeafOpProtoMsg): _1.LeafOp;
        toProto(message: _1.LeafOp): Uint8Array;
        toProtoMsg(message: _1.LeafOp): _1.LeafOpProtoMsg;
    };
    InnerOp: {
        typeUrl: string;
        encode(message: _1.InnerOp, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.InnerOp;
        fromJSON(object: any): _1.InnerOp;
        toJSON(message: _1.InnerOp): unknown;
        fromPartial(object: {
            hash?: _1.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _1.InnerOp;
        fromSDK(object: _1.InnerOpSDKType): _1.InnerOp;
        toSDK(message: _1.InnerOp): _1.InnerOpSDKType;
        fromAmino(object: _1.InnerOpAmino): _1.InnerOp;
        toAmino(message: _1.InnerOp): _1.InnerOpAmino;
        fromAminoMsg(object: _1.InnerOpAminoMsg): _1.InnerOp;
        fromProtoMsg(message: _1.InnerOpProtoMsg): _1.InnerOp;
        toProto(message: _1.InnerOp): Uint8Array;
        toProtoMsg(message: _1.InnerOp): _1.InnerOpProtoMsg;
    };
    ProofSpec: {
        typeUrl: string;
        encode(message: _1.ProofSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.ProofSpec;
        fromJSON(object: any): _1.ProofSpec;
        toJSON(message: _1.ProofSpec): unknown;
        fromPartial(object: {
            leafSpec?: {
                hash?: _1.HashOp;
                prehashKey?: _1.HashOp;
                prehashValue?: _1.HashOp;
                length?: _1.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _1.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _1.ProofSpec;
        fromSDK(object: _1.ProofSpecSDKType): _1.ProofSpec;
        toSDK(message: _1.ProofSpec): _1.ProofSpecSDKType;
        fromAmino(object: _1.ProofSpecAmino): _1.ProofSpec;
        toAmino(message: _1.ProofSpec): _1.ProofSpecAmino;
        fromAminoMsg(object: _1.ProofSpecAminoMsg): _1.ProofSpec;
        fromProtoMsg(message: _1.ProofSpecProtoMsg): _1.ProofSpec;
        toProto(message: _1.ProofSpec): Uint8Array;
        toProtoMsg(message: _1.ProofSpec): _1.ProofSpecProtoMsg;
    };
    InnerSpec: {
        typeUrl: string;
        encode(message: _1.InnerSpec, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.InnerSpec;
        fromJSON(object: any): _1.InnerSpec;
        toJSON(message: _1.InnerSpec): unknown;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _1.HashOp;
        }): _1.InnerSpec;
        fromSDK(object: _1.InnerSpecSDKType): _1.InnerSpec;
        toSDK(message: _1.InnerSpec): _1.InnerSpecSDKType;
        fromAmino(object: _1.InnerSpecAmino): _1.InnerSpec;
        toAmino(message: _1.InnerSpec): _1.InnerSpecAmino;
        fromAminoMsg(object: _1.InnerSpecAminoMsg): _1.InnerSpec;
        fromProtoMsg(message: _1.InnerSpecProtoMsg): _1.InnerSpec;
        toProto(message: _1.InnerSpec): Uint8Array;
        toProtoMsg(message: _1.InnerSpec): _1.InnerSpecProtoMsg;
    };
    BatchProof: {
        typeUrl: string;
        encode(message: _1.BatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.BatchProof;
        fromJSON(object: any): _1.BatchProof;
        toJSON(message: _1.BatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _1.HashOp;
                        prehashKey?: _1.HashOp;
                        prehashValue?: _1.HashOp;
                        length?: _1.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _1.HashOp;
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
                            hash?: _1.HashOp;
                            prehashKey?: _1.HashOp;
                            prehashValue?: _1.HashOp;
                            length?: _1.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _1.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _1.HashOp;
                            prehashKey?: _1.HashOp;
                            prehashValue?: _1.HashOp;
                            length?: _1.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _1.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _1.BatchProof;
        fromSDK(object: _1.BatchProofSDKType): _1.BatchProof;
        toSDK(message: _1.BatchProof): _1.BatchProofSDKType;
        fromAmino(object: _1.BatchProofAmino): _1.BatchProof;
        toAmino(message: _1.BatchProof): _1.BatchProofAmino;
        fromAminoMsg(object: _1.BatchProofAminoMsg): _1.BatchProof;
        fromProtoMsg(message: _1.BatchProofProtoMsg): _1.BatchProof;
        toProto(message: _1.BatchProof): Uint8Array;
        toProtoMsg(message: _1.BatchProof): _1.BatchProofProtoMsg;
    };
    BatchEntry: {
        typeUrl: string;
        encode(message: _1.BatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.BatchEntry;
        fromJSON(object: any): _1.BatchEntry;
        toJSON(message: _1.BatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _1.HashOp;
                    prehashKey?: _1.HashOp;
                    prehashValue?: _1.HashOp;
                    length?: _1.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _1.HashOp;
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
                        hash?: _1.HashOp;
                        prehashKey?: _1.HashOp;
                        prehashValue?: _1.HashOp;
                        length?: _1.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _1.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _1.HashOp;
                        prehashKey?: _1.HashOp;
                        prehashValue?: _1.HashOp;
                        length?: _1.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _1.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _1.BatchEntry;
        fromSDK(object: _1.BatchEntrySDKType): _1.BatchEntry;
        toSDK(message: _1.BatchEntry): _1.BatchEntrySDKType;
        fromAmino(object: _1.BatchEntryAmino): _1.BatchEntry;
        toAmino(message: _1.BatchEntry): _1.BatchEntryAmino;
        fromAminoMsg(object: _1.BatchEntryAminoMsg): _1.BatchEntry;
        fromProtoMsg(message: _1.BatchEntryProtoMsg): _1.BatchEntry;
        toProto(message: _1.BatchEntry): Uint8Array;
        toProtoMsg(message: _1.BatchEntry): _1.BatchEntryProtoMsg;
    };
    CompressedBatchProof: {
        typeUrl: string;
        encode(message: _1.CompressedBatchProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.CompressedBatchProof;
        fromJSON(object: any): _1.CompressedBatchProof;
        toJSON(message: _1.CompressedBatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _1.HashOp;
                        prehashKey?: _1.HashOp;
                        prehashValue?: _1.HashOp;
                        length?: _1.LengthOp;
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
                            hash?: _1.HashOp;
                            prehashKey?: _1.HashOp;
                            prehashValue?: _1.HashOp;
                            length?: _1.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _1.HashOp;
                            prehashKey?: _1.HashOp;
                            prehashValue?: _1.HashOp;
                            length?: _1.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _1.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _1.CompressedBatchProof;
        fromSDK(object: _1.CompressedBatchProofSDKType): _1.CompressedBatchProof;
        toSDK(message: _1.CompressedBatchProof): _1.CompressedBatchProofSDKType;
        fromAmino(object: _1.CompressedBatchProofAmino): _1.CompressedBatchProof;
        toAmino(message: _1.CompressedBatchProof): _1.CompressedBatchProofAmino;
        fromAminoMsg(object: _1.CompressedBatchProofAminoMsg): _1.CompressedBatchProof;
        fromProtoMsg(message: _1.CompressedBatchProofProtoMsg): _1.CompressedBatchProof;
        toProto(message: _1.CompressedBatchProof): Uint8Array;
        toProtoMsg(message: _1.CompressedBatchProof): _1.CompressedBatchProofProtoMsg;
    };
    CompressedBatchEntry: {
        typeUrl: string;
        encode(message: _1.CompressedBatchEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.CompressedBatchEntry;
        fromJSON(object: any): _1.CompressedBatchEntry;
        toJSON(message: _1.CompressedBatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _1.HashOp;
                    prehashKey?: _1.HashOp;
                    prehashValue?: _1.HashOp;
                    length?: _1.LengthOp;
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
                        hash?: _1.HashOp;
                        prehashKey?: _1.HashOp;
                        prehashValue?: _1.HashOp;
                        length?: _1.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _1.HashOp;
                        prehashKey?: _1.HashOp;
                        prehashValue?: _1.HashOp;
                        length?: _1.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _1.CompressedBatchEntry;
        fromSDK(object: _1.CompressedBatchEntrySDKType): _1.CompressedBatchEntry;
        toSDK(message: _1.CompressedBatchEntry): _1.CompressedBatchEntrySDKType;
        fromAmino(object: _1.CompressedBatchEntryAmino): _1.CompressedBatchEntry;
        toAmino(message: _1.CompressedBatchEntry): _1.CompressedBatchEntryAmino;
        fromAminoMsg(object: _1.CompressedBatchEntryAminoMsg): _1.CompressedBatchEntry;
        fromProtoMsg(message: _1.CompressedBatchEntryProtoMsg): _1.CompressedBatchEntry;
        toProto(message: _1.CompressedBatchEntry): Uint8Array;
        toProtoMsg(message: _1.CompressedBatchEntry): _1.CompressedBatchEntryProtoMsg;
    };
    CompressedExistenceProof: {
        typeUrl: string;
        encode(message: _1.CompressedExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.CompressedExistenceProof;
        fromJSON(object: any): _1.CompressedExistenceProof;
        toJSON(message: _1.CompressedExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _1.HashOp;
                prehashKey?: _1.HashOp;
                prehashValue?: _1.HashOp;
                length?: _1.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _1.CompressedExistenceProof;
        fromSDK(object: _1.CompressedExistenceProofSDKType): _1.CompressedExistenceProof;
        toSDK(message: _1.CompressedExistenceProof): _1.CompressedExistenceProofSDKType;
        fromAmino(object: _1.CompressedExistenceProofAmino): _1.CompressedExistenceProof;
        toAmino(message: _1.CompressedExistenceProof): _1.CompressedExistenceProofAmino;
        fromAminoMsg(object: _1.CompressedExistenceProofAminoMsg): _1.CompressedExistenceProof;
        fromProtoMsg(message: _1.CompressedExistenceProofProtoMsg): _1.CompressedExistenceProof;
        toProto(message: _1.CompressedExistenceProof): Uint8Array;
        toProtoMsg(message: _1.CompressedExistenceProof): _1.CompressedExistenceProofProtoMsg;
    };
    CompressedNonExistenceProof: {
        typeUrl: string;
        encode(message: _1.CompressedNonExistenceProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _1.CompressedNonExistenceProof;
        fromJSON(object: any): _1.CompressedNonExistenceProof;
        toJSON(message: _1.CompressedNonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _1.HashOp;
                    prehashKey?: _1.HashOp;
                    prehashValue?: _1.HashOp;
                    length?: _1.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _1.HashOp;
                    prehashKey?: _1.HashOp;
                    prehashValue?: _1.HashOp;
                    length?: _1.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _1.CompressedNonExistenceProof;
        fromSDK(object: _1.CompressedNonExistenceProofSDKType): _1.CompressedNonExistenceProof;
        toSDK(message: _1.CompressedNonExistenceProof): _1.CompressedNonExistenceProofSDKType;
        fromAmino(object: _1.CompressedNonExistenceProofAmino): _1.CompressedNonExistenceProof;
        toAmino(message: _1.CompressedNonExistenceProof): _1.CompressedNonExistenceProofAmino;
        fromAminoMsg(object: _1.CompressedNonExistenceProofAminoMsg): _1.CompressedNonExistenceProof;
        fromProtoMsg(message: _1.CompressedNonExistenceProofProtoMsg): _1.CompressedNonExistenceProof;
        toProto(message: _1.CompressedNonExistenceProof): Uint8Array;
        toProtoMsg(message: _1.CompressedNonExistenceProof): _1.CompressedNonExistenceProofProtoMsg;
    };
};

import { AccessConfig, AccessConfigAmino, AccessConfigSDKType, Params, ParamsAmino, ParamsSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCode {
    /** Sender is the actor that signed the messages */
    sender: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /**
     * InstantiatePermission access control to apply on contract creation,
     * optional
     */
    instantiatePermission: AccessConfig;
}
export interface MsgStoreCodeProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode";
    value: Uint8Array;
}
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCodeAmino {
    /** Sender is the actor that signed the messages */
    sender: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasm_byte_code: string;
    /**
     * InstantiatePermission access control to apply on contract creation,
     * optional
     */
    instantiate_permission?: AccessConfigAmino;
}
export interface MsgStoreCodeAminoMsg {
    type: "wasm/MsgStoreCode";
    value: MsgStoreCodeAmino;
}
/** MsgStoreCode submit Wasm code to the system */
export interface MsgStoreCodeSDKType {
    sender: string;
    wasm_byte_code: Uint8Array;
    instantiate_permission: AccessConfigSDKType;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponse {
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Checksum is the sha256 hash of the stored code */
    checksum: Uint8Array;
}
export interface MsgStoreCodeResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreCodeResponse";
    value: Uint8Array;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseAmino {
    /** CodeID is the reference to the stored WASM code */
    code_id: string;
    /** Checksum is the sha256 hash of the stored code */
    checksum: Uint8Array;
}
export interface MsgStoreCodeResponseAminoMsg {
    type: "wasm/MsgStoreCodeResponse";
    value: MsgStoreCodeResponseAmino;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseSDKType {
    code_id: bigint;
    checksum: Uint8Array;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
export interface MsgInstantiateContractProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract";
    value: Uint8Array;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContractAmino {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    code_id: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: CoinAmino[];
}
export interface MsgInstantiateContractAminoMsg {
    type: "wasm/MsgInstantiateContract";
    value: MsgInstantiateContractAmino;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContractSDKType {
    sender: string;
    admin: string;
    code_id: bigint;
    label: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponse {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgInstantiateContractResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContractResponse";
    value: Uint8Array;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponseAmino {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgInstantiateContractResponseAminoMsg {
    type: "wasm/MsgInstantiateContractResponse";
    value: MsgInstantiateContractResponseAmino;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponseSDKType {
    address: string;
    data: Uint8Array;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2 {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
    /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
    salt: Uint8Array;
    /**
     * FixMsg include the msg value into the hash for the predictable address.
     * Default is false
     */
    fixMsg: boolean;
}
export interface MsgInstantiateContract2ProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2";
    value: Uint8Array;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2Amino {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    code_id: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: CoinAmino[];
    /** Salt is an arbitrary value provided by the sender. Size can be 1 to 64. */
    salt: Uint8Array;
    /**
     * FixMsg include the msg value into the hash for the predictable address.
     * Default is false
     */
    fix_msg: boolean;
}
export interface MsgInstantiateContract2AminoMsg {
    type: "wasm/MsgInstantiateContract2";
    value: MsgInstantiateContract2Amino;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 */
export interface MsgInstantiateContract2SDKType {
    sender: string;
    admin: string;
    code_id: bigint;
    label: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
    salt: Uint8Array;
    fix_msg: boolean;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2Response {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgInstantiateContract2ResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract2Response";
    value: Uint8Array;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2ResponseAmino {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgInstantiateContract2ResponseAminoMsg {
    type: "wasm/MsgInstantiateContract2Response";
    value: MsgInstantiateContract2ResponseAmino;
}
/** MsgInstantiateContract2Response return instantiation result data */
export interface MsgInstantiateContract2ResponseSDKType {
    address: string;
    data: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: Coin[];
}
export interface MsgExecuteContractProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract";
    value: Uint8Array;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContractAmino {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on execution */
    funds: CoinAmino[];
}
export interface MsgExecuteContractAminoMsg {
    type: "wasm/MsgExecuteContract";
    value: MsgExecuteContractAmino;
}
/** MsgExecuteContract submits the given message data to a smart contract */
export interface MsgExecuteContractSDKType {
    sender: string;
    contract: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponse {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgExecuteContractResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContractResponse";
    value: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponseAmino {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgExecuteContractResponseAminoMsg {
    type: "wasm/MsgExecuteContractResponse";
    value: MsgExecuteContractResponseAmino;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponseSDKType {
    data: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM code */
    codeId: bigint;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
export interface MsgMigrateContractProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract";
    value: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContractAmino {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM code */
    code_id: string;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
export interface MsgMigrateContractAminoMsg {
    type: "wasm/MsgMigrateContract";
    value: MsgMigrateContractAmino;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContractSDKType {
    sender: string;
    contract: string;
    code_id: bigint;
    msg: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponse {
    /**
     * Data contains same raw bytes returned as data from the wasm contract.
     * (May be empty)
     */
    data: Uint8Array;
}
export interface MsgMigrateContractResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContractResponse";
    value: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponseAmino {
    /**
     * Data contains same raw bytes returned as data from the wasm contract.
     * (May be empty)
     */
    data: Uint8Array;
}
export interface MsgMigrateContractResponseAminoMsg {
    type: "wasm/MsgMigrateContractResponse";
    value: MsgMigrateContractResponseAmino;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponseSDKType {
    data: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdmin {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** NewAdmin address to be set */
    newAdmin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface MsgUpdateAdminProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin";
    value: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdminAmino {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** NewAdmin address to be set */
    new_admin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface MsgUpdateAdminAminoMsg {
    type: "wasm/MsgUpdateAdmin";
    value: MsgUpdateAdminAmino;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdminSDKType {
    sender: string;
    new_admin: string;
    contract: string;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponse {
}
export interface MsgUpdateAdminResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdminResponse";
    value: Uint8Array;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponseAmino {
}
export interface MsgUpdateAdminResponseAminoMsg {
    type: "wasm/MsgUpdateAdminResponse";
    value: MsgUpdateAdminResponseAmino;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponseSDKType {
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdmin {
    /** Sender is the actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface MsgClearAdminProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin";
    value: Uint8Array;
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdminAmino {
    /** Sender is the actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface MsgClearAdminAminoMsg {
    type: "wasm/MsgClearAdmin";
    value: MsgClearAdminAmino;
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdminSDKType {
    sender: string;
    contract: string;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponse {
}
export interface MsgClearAdminResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgClearAdminResponse";
    value: Uint8Array;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponseAmino {
}
export interface MsgClearAdminResponseAminoMsg {
    type: "wasm/MsgClearAdminResponse";
    value: MsgClearAdminResponseAmino;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponseSDKType {
}
/** MsgUpdateInstantiateConfig updates instantiate config for a smart contract */
export interface MsgUpdateInstantiateConfig {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** CodeID references the stored WASM code */
    codeId: bigint;
    /** NewInstantiatePermission is the new access control */
    newInstantiatePermission: AccessConfig;
}
export interface MsgUpdateInstantiateConfigProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig";
    value: Uint8Array;
}
/** MsgUpdateInstantiateConfig updates instantiate config for a smart contract */
export interface MsgUpdateInstantiateConfigAmino {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** CodeID references the stored WASM code */
    code_id: string;
    /** NewInstantiatePermission is the new access control */
    new_instantiate_permission?: AccessConfigAmino;
}
export interface MsgUpdateInstantiateConfigAminoMsg {
    type: "wasm/MsgUpdateInstantiateConfig";
    value: MsgUpdateInstantiateConfigAmino;
}
/** MsgUpdateInstantiateConfig updates instantiate config for a smart contract */
export interface MsgUpdateInstantiateConfigSDKType {
    sender: string;
    code_id: bigint;
    new_instantiate_permission: AccessConfigSDKType;
}
/** MsgUpdateInstantiateConfigResponse returns empty data */
export interface MsgUpdateInstantiateConfigResponse {
}
export interface MsgUpdateInstantiateConfigResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfigResponse";
    value: Uint8Array;
}
/** MsgUpdateInstantiateConfigResponse returns empty data */
export interface MsgUpdateInstantiateConfigResponseAmino {
}
export interface MsgUpdateInstantiateConfigResponseAminoMsg {
    type: "wasm/MsgUpdateInstantiateConfigResponse";
    value: MsgUpdateInstantiateConfigResponseAmino;
}
/** MsgUpdateInstantiateConfigResponse returns empty data */
export interface MsgUpdateInstantiateConfigResponseSDKType {
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 *
 * Since: 0.40
 */
export interface MsgUpdateParams {
    /** Authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/wasm parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 *
 * Since: 0.40
 */
export interface MsgUpdateParamsAmino {
    /** Authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/wasm parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "wasm/MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 *
 * Since: 0.40
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.40
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.40
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "wasm/MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.40
 */
export interface MsgUpdateParamsResponseSDKType {
}
/**
 * MsgSudoContract is the MsgSudoContract request type.
 *
 * Since: 0.40
 */
export interface MsgSudoContract {
    /** Authority is the address of the governance account. */
    authority: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as sudo */
    msg: Uint8Array;
}
export interface MsgSudoContractProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgSudoContract";
    value: Uint8Array;
}
/**
 * MsgSudoContract is the MsgSudoContract request type.
 *
 * Since: 0.40
 */
export interface MsgSudoContractAmino {
    /** Authority is the address of the governance account. */
    authority: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as sudo */
    msg: Uint8Array;
}
export interface MsgSudoContractAminoMsg {
    type: "wasm/MsgSudoContract";
    value: MsgSudoContractAmino;
}
/**
 * MsgSudoContract is the MsgSudoContract request type.
 *
 * Since: 0.40
 */
export interface MsgSudoContractSDKType {
    authority: string;
    contract: string;
    msg: Uint8Array;
}
/**
 * MsgSudoContractResponse defines the response structure for executing a
 * MsgSudoContract message.
 *
 * Since: 0.40
 */
export interface MsgSudoContractResponse {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgSudoContractResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgSudoContractResponse";
    value: Uint8Array;
}
/**
 * MsgSudoContractResponse defines the response structure for executing a
 * MsgSudoContract message.
 *
 * Since: 0.40
 */
export interface MsgSudoContractResponseAmino {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgSudoContractResponseAminoMsg {
    type: "wasm/MsgSudoContractResponse";
    value: MsgSudoContractResponseAmino;
}
/**
 * MsgSudoContractResponse defines the response structure for executing a
 * MsgSudoContract message.
 *
 * Since: 0.40
 */
export interface MsgSudoContractResponseSDKType {
    data: Uint8Array;
}
/**
 * MsgPinCodes is the MsgPinCodes request type.
 *
 * Since: 0.40
 */
export interface MsgPinCodes {
    /** Authority is the address of the governance account. */
    authority: string;
    /** CodeIDs references the new WASM codes */
    codeIds: bigint[];
}
export interface MsgPinCodesProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgPinCodes";
    value: Uint8Array;
}
/**
 * MsgPinCodes is the MsgPinCodes request type.
 *
 * Since: 0.40
 */
export interface MsgPinCodesAmino {
    /** Authority is the address of the governance account. */
    authority: string;
    /** CodeIDs references the new WASM codes */
    code_ids: string[];
}
export interface MsgPinCodesAminoMsg {
    type: "wasm/MsgPinCodes";
    value: MsgPinCodesAmino;
}
/**
 * MsgPinCodes is the MsgPinCodes request type.
 *
 * Since: 0.40
 */
export interface MsgPinCodesSDKType {
    authority: string;
    code_ids: bigint[];
}
/**
 * MsgPinCodesResponse defines the response structure for executing a
 * MsgPinCodes message.
 *
 * Since: 0.40
 */
export interface MsgPinCodesResponse {
}
export interface MsgPinCodesResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgPinCodesResponse";
    value: Uint8Array;
}
/**
 * MsgPinCodesResponse defines the response structure for executing a
 * MsgPinCodes message.
 *
 * Since: 0.40
 */
export interface MsgPinCodesResponseAmino {
}
export interface MsgPinCodesResponseAminoMsg {
    type: "wasm/MsgPinCodesResponse";
    value: MsgPinCodesResponseAmino;
}
/**
 * MsgPinCodesResponse defines the response structure for executing a
 * MsgPinCodes message.
 *
 * Since: 0.40
 */
export interface MsgPinCodesResponseSDKType {
}
/**
 * MsgUnpinCodes is the MsgUnpinCodes request type.
 *
 * Since: 0.40
 */
export interface MsgUnpinCodes {
    /** Authority is the address of the governance account. */
    authority: string;
    /** CodeIDs references the WASM codes */
    codeIds: bigint[];
}
export interface MsgUnpinCodesProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodes";
    value: Uint8Array;
}
/**
 * MsgUnpinCodes is the MsgUnpinCodes request type.
 *
 * Since: 0.40
 */
export interface MsgUnpinCodesAmino {
    /** Authority is the address of the governance account. */
    authority: string;
    /** CodeIDs references the WASM codes */
    code_ids: string[];
}
export interface MsgUnpinCodesAminoMsg {
    type: "wasm/MsgUnpinCodes";
    value: MsgUnpinCodesAmino;
}
/**
 * MsgUnpinCodes is the MsgUnpinCodes request type.
 *
 * Since: 0.40
 */
export interface MsgUnpinCodesSDKType {
    authority: string;
    code_ids: bigint[];
}
/**
 * MsgUnpinCodesResponse defines the response structure for executing a
 * MsgUnpinCodes message.
 *
 * Since: 0.40
 */
export interface MsgUnpinCodesResponse {
}
export interface MsgUnpinCodesResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgUnpinCodesResponse";
    value: Uint8Array;
}
/**
 * MsgUnpinCodesResponse defines the response structure for executing a
 * MsgUnpinCodes message.
 *
 * Since: 0.40
 */
export interface MsgUnpinCodesResponseAmino {
}
export interface MsgUnpinCodesResponseAminoMsg {
    type: "wasm/MsgUnpinCodesResponse";
    value: MsgUnpinCodesResponseAmino;
}
/**
 * MsgUnpinCodesResponse defines the response structure for executing a
 * MsgUnpinCodes message.
 *
 * Since: 0.40
 */
export interface MsgUnpinCodesResponseSDKType {
}
/**
 * MsgStoreAndInstantiateContract is the MsgStoreAndInstantiateContract
 * request type.
 *
 * Since: 0.40
 */
export interface MsgStoreAndInstantiateContract {
    /** Authority is the address of the governance account. */
    authority: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiatePermission: AccessConfig;
    /**
     * UnpinCode code on upload, optional. As default the uploaded contract is
     * pinned to cache.
     */
    unpinCode: boolean;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /**
     * Funds coins that are transferred from the authority account to the contract
     * on instantiation
     */
    funds: Coin[];
    /** Source is the URL where the code is hosted */
    source: string;
    /**
     * Builder is the docker image used to build the code deterministically, used
     * for smart contract verification
     */
    builder: string;
    /**
     * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
     * contract verification
     */
    codeHash: Uint8Array;
}
export interface MsgStoreAndInstantiateContractProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract";
    value: Uint8Array;
}
/**
 * MsgStoreAndInstantiateContract is the MsgStoreAndInstantiateContract
 * request type.
 *
 * Since: 0.40
 */
export interface MsgStoreAndInstantiateContractAmino {
    /** Authority is the address of the governance account. */
    authority: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasm_byte_code: string;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiate_permission?: AccessConfigAmino;
    /**
     * UnpinCode code on upload, optional. As default the uploaded contract is
     * pinned to cache.
     */
    unpin_code: boolean;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /**
     * Funds coins that are transferred from the authority account to the contract
     * on instantiation
     */
    funds: CoinAmino[];
    /** Source is the URL where the code is hosted */
    source: string;
    /**
     * Builder is the docker image used to build the code deterministically, used
     * for smart contract verification
     */
    builder: string;
    /**
     * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
     * contract verification
     */
    code_hash: Uint8Array;
}
export interface MsgStoreAndInstantiateContractAminoMsg {
    type: "wasm/MsgStoreAndInstantiateContract";
    value: MsgStoreAndInstantiateContractAmino;
}
/**
 * MsgStoreAndInstantiateContract is the MsgStoreAndInstantiateContract
 * request type.
 *
 * Since: 0.40
 */
export interface MsgStoreAndInstantiateContractSDKType {
    authority: string;
    wasm_byte_code: Uint8Array;
    instantiate_permission: AccessConfigSDKType;
    unpin_code: boolean;
    admin: string;
    label: string;
    msg: Uint8Array;
    funds: CoinSDKType[];
    source: string;
    builder: string;
    code_hash: Uint8Array;
}
/**
 * MsgStoreAndInstantiateContractResponse defines the response structure
 * for executing a MsgStoreAndInstantiateContract message.
 *
 * Since: 0.40
 */
export interface MsgStoreAndInstantiateContractResponse {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgStoreAndInstantiateContractResponseProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContractResponse";
    value: Uint8Array;
}
/**
 * MsgStoreAndInstantiateContractResponse defines the response structure
 * for executing a MsgStoreAndInstantiateContract message.
 *
 * Since: 0.40
 */
export interface MsgStoreAndInstantiateContractResponseAmino {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgStoreAndInstantiateContractResponseAminoMsg {
    type: "wasm/MsgStoreAndInstantiateContractResponse";
    value: MsgStoreAndInstantiateContractResponseAmino;
}
/**
 * MsgStoreAndInstantiateContractResponse defines the response structure
 * for executing a MsgStoreAndInstantiateContract message.
 *
 * Since: 0.40
 */
export interface MsgStoreAndInstantiateContractResponseSDKType {
    address: string;
    data: Uint8Array;
}
export declare const MsgStoreCode: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgStoreCode, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCode;
    fromJSON(object: any): MsgStoreCode;
    toJSON(message: MsgStoreCode): unknown;
    fromPartial(object: DeepPartial<MsgStoreCode>): MsgStoreCode;
    fromSDK(object: MsgStoreCodeSDKType): MsgStoreCode;
    toSDK(message: MsgStoreCode): MsgStoreCodeSDKType;
    fromAmino(object: MsgStoreCodeAmino): MsgStoreCode;
    toAmino(message: MsgStoreCode): MsgStoreCodeAmino;
    fromAminoMsg(object: MsgStoreCodeAminoMsg): MsgStoreCode;
    toAminoMsg(message: MsgStoreCode): MsgStoreCodeAminoMsg;
    fromProtoMsg(message: MsgStoreCodeProtoMsg): MsgStoreCode;
    toProto(message: MsgStoreCode): Uint8Array;
    toProtoMsg(message: MsgStoreCode): MsgStoreCodeProtoMsg;
};
export declare const MsgStoreCodeResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgStoreCodeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreCodeResponse;
    fromJSON(object: any): MsgStoreCodeResponse;
    toJSON(message: MsgStoreCodeResponse): unknown;
    fromPartial(object: DeepPartial<MsgStoreCodeResponse>): MsgStoreCodeResponse;
    fromSDK(object: MsgStoreCodeResponseSDKType): MsgStoreCodeResponse;
    toSDK(message: MsgStoreCodeResponse): MsgStoreCodeResponseSDKType;
    fromAmino(object: MsgStoreCodeResponseAmino): MsgStoreCodeResponse;
    toAmino(message: MsgStoreCodeResponse): MsgStoreCodeResponseAmino;
    fromAminoMsg(object: MsgStoreCodeResponseAminoMsg): MsgStoreCodeResponse;
    toAminoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseAminoMsg;
    fromProtoMsg(message: MsgStoreCodeResponseProtoMsg): MsgStoreCodeResponse;
    toProto(message: MsgStoreCodeResponse): Uint8Array;
    toProtoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseProtoMsg;
};
export declare const MsgInstantiateContract: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgInstantiateContract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract;
    fromJSON(object: any): MsgInstantiateContract;
    toJSON(message: MsgInstantiateContract): unknown;
    fromPartial(object: DeepPartial<MsgInstantiateContract>): MsgInstantiateContract;
    fromSDK(object: MsgInstantiateContractSDKType): MsgInstantiateContract;
    toSDK(message: MsgInstantiateContract): MsgInstantiateContractSDKType;
    fromAmino(object: MsgInstantiateContractAmino): MsgInstantiateContract;
    toAmino(message: MsgInstantiateContract): MsgInstantiateContractAmino;
    fromAminoMsg(object: MsgInstantiateContractAminoMsg): MsgInstantiateContract;
    toAminoMsg(message: MsgInstantiateContract): MsgInstantiateContractAminoMsg;
    fromProtoMsg(message: MsgInstantiateContractProtoMsg): MsgInstantiateContract;
    toProto(message: MsgInstantiateContract): Uint8Array;
    toProtoMsg(message: MsgInstantiateContract): MsgInstantiateContractProtoMsg;
};
export declare const MsgInstantiateContractResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgInstantiateContractResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContractResponse;
    fromJSON(object: any): MsgInstantiateContractResponse;
    toJSON(message: MsgInstantiateContractResponse): unknown;
    fromPartial(object: DeepPartial<MsgInstantiateContractResponse>): MsgInstantiateContractResponse;
    fromSDK(object: MsgInstantiateContractResponseSDKType): MsgInstantiateContractResponse;
    toSDK(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseSDKType;
    fromAmino(object: MsgInstantiateContractResponseAmino): MsgInstantiateContractResponse;
    toAmino(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseAmino;
    fromAminoMsg(object: MsgInstantiateContractResponseAminoMsg): MsgInstantiateContractResponse;
    toAminoMsg(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseAminoMsg;
    fromProtoMsg(message: MsgInstantiateContractResponseProtoMsg): MsgInstantiateContractResponse;
    toProto(message: MsgInstantiateContractResponse): Uint8Array;
    toProtoMsg(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseProtoMsg;
};
export declare const MsgInstantiateContract2: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgInstantiateContract2, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract2;
    fromJSON(object: any): MsgInstantiateContract2;
    toJSON(message: MsgInstantiateContract2): unknown;
    fromPartial(object: DeepPartial<MsgInstantiateContract2>): MsgInstantiateContract2;
    fromSDK(object: MsgInstantiateContract2SDKType): MsgInstantiateContract2;
    toSDK(message: MsgInstantiateContract2): MsgInstantiateContract2SDKType;
    fromAmino(object: MsgInstantiateContract2Amino): MsgInstantiateContract2;
    toAmino(message: MsgInstantiateContract2): MsgInstantiateContract2Amino;
    fromAminoMsg(object: MsgInstantiateContract2AminoMsg): MsgInstantiateContract2;
    toAminoMsg(message: MsgInstantiateContract2): MsgInstantiateContract2AminoMsg;
    fromProtoMsg(message: MsgInstantiateContract2ProtoMsg): MsgInstantiateContract2;
    toProto(message: MsgInstantiateContract2): Uint8Array;
    toProtoMsg(message: MsgInstantiateContract2): MsgInstantiateContract2ProtoMsg;
};
export declare const MsgInstantiateContract2Response: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgInstantiateContract2Response, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgInstantiateContract2Response;
    fromJSON(object: any): MsgInstantiateContract2Response;
    toJSON(message: MsgInstantiateContract2Response): unknown;
    fromPartial(object: DeepPartial<MsgInstantiateContract2Response>): MsgInstantiateContract2Response;
    fromSDK(object: MsgInstantiateContract2ResponseSDKType): MsgInstantiateContract2Response;
    toSDK(message: MsgInstantiateContract2Response): MsgInstantiateContract2ResponseSDKType;
    fromAmino(object: MsgInstantiateContract2ResponseAmino): MsgInstantiateContract2Response;
    toAmino(message: MsgInstantiateContract2Response): MsgInstantiateContract2ResponseAmino;
    fromAminoMsg(object: MsgInstantiateContract2ResponseAminoMsg): MsgInstantiateContract2Response;
    toAminoMsg(message: MsgInstantiateContract2Response): MsgInstantiateContract2ResponseAminoMsg;
    fromProtoMsg(message: MsgInstantiateContract2ResponseProtoMsg): MsgInstantiateContract2Response;
    toProto(message: MsgInstantiateContract2Response): Uint8Array;
    toProtoMsg(message: MsgInstantiateContract2Response): MsgInstantiateContract2ResponseProtoMsg;
};
export declare const MsgExecuteContract: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgExecuteContract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContract;
    fromJSON(object: any): MsgExecuteContract;
    toJSON(message: MsgExecuteContract): unknown;
    fromPartial(object: DeepPartial<MsgExecuteContract>): MsgExecuteContract;
    fromSDK(object: MsgExecuteContractSDKType): MsgExecuteContract;
    toSDK(message: MsgExecuteContract): MsgExecuteContractSDKType;
    fromAmino(object: MsgExecuteContractAmino): MsgExecuteContract;
    toAmino(message: MsgExecuteContract): MsgExecuteContractAmino;
    fromAminoMsg(object: MsgExecuteContractAminoMsg): MsgExecuteContract;
    toAminoMsg(message: MsgExecuteContract): MsgExecuteContractAminoMsg;
    fromProtoMsg(message: MsgExecuteContractProtoMsg): MsgExecuteContract;
    toProto(message: MsgExecuteContract): Uint8Array;
    toProtoMsg(message: MsgExecuteContract): MsgExecuteContractProtoMsg;
};
export declare const MsgExecuteContractResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgExecuteContractResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContractResponse;
    fromJSON(object: any): MsgExecuteContractResponse;
    toJSON(message: MsgExecuteContractResponse): unknown;
    fromPartial(object: DeepPartial<MsgExecuteContractResponse>): MsgExecuteContractResponse;
    fromSDK(object: MsgExecuteContractResponseSDKType): MsgExecuteContractResponse;
    toSDK(message: MsgExecuteContractResponse): MsgExecuteContractResponseSDKType;
    fromAmino(object: MsgExecuteContractResponseAmino): MsgExecuteContractResponse;
    toAmino(message: MsgExecuteContractResponse): MsgExecuteContractResponseAmino;
    fromAminoMsg(object: MsgExecuteContractResponseAminoMsg): MsgExecuteContractResponse;
    toAminoMsg(message: MsgExecuteContractResponse): MsgExecuteContractResponseAminoMsg;
    fromProtoMsg(message: MsgExecuteContractResponseProtoMsg): MsgExecuteContractResponse;
    toProto(message: MsgExecuteContractResponse): Uint8Array;
    toProtoMsg(message: MsgExecuteContractResponse): MsgExecuteContractResponseProtoMsg;
};
export declare const MsgMigrateContract: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgMigrateContract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContract;
    fromJSON(object: any): MsgMigrateContract;
    toJSON(message: MsgMigrateContract): unknown;
    fromPartial(object: DeepPartial<MsgMigrateContract>): MsgMigrateContract;
    fromSDK(object: MsgMigrateContractSDKType): MsgMigrateContract;
    toSDK(message: MsgMigrateContract): MsgMigrateContractSDKType;
    fromAmino(object: MsgMigrateContractAmino): MsgMigrateContract;
    toAmino(message: MsgMigrateContract): MsgMigrateContractAmino;
    fromAminoMsg(object: MsgMigrateContractAminoMsg): MsgMigrateContract;
    toAminoMsg(message: MsgMigrateContract): MsgMigrateContractAminoMsg;
    fromProtoMsg(message: MsgMigrateContractProtoMsg): MsgMigrateContract;
    toProto(message: MsgMigrateContract): Uint8Array;
    toProtoMsg(message: MsgMigrateContract): MsgMigrateContractProtoMsg;
};
export declare const MsgMigrateContractResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgMigrateContractResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrateContractResponse;
    fromJSON(object: any): MsgMigrateContractResponse;
    toJSON(message: MsgMigrateContractResponse): unknown;
    fromPartial(object: DeepPartial<MsgMigrateContractResponse>): MsgMigrateContractResponse;
    fromSDK(object: MsgMigrateContractResponseSDKType): MsgMigrateContractResponse;
    toSDK(message: MsgMigrateContractResponse): MsgMigrateContractResponseSDKType;
    fromAmino(object: MsgMigrateContractResponseAmino): MsgMigrateContractResponse;
    toAmino(message: MsgMigrateContractResponse): MsgMigrateContractResponseAmino;
    fromAminoMsg(object: MsgMigrateContractResponseAminoMsg): MsgMigrateContractResponse;
    toAminoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseAminoMsg;
    fromProtoMsg(message: MsgMigrateContractResponseProtoMsg): MsgMigrateContractResponse;
    toProto(message: MsgMigrateContractResponse): Uint8Array;
    toProtoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseProtoMsg;
};
export declare const MsgUpdateAdmin: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgUpdateAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAdmin;
    fromJSON(object: any): MsgUpdateAdmin;
    toJSON(message: MsgUpdateAdmin): unknown;
    fromPartial(object: DeepPartial<MsgUpdateAdmin>): MsgUpdateAdmin;
    fromSDK(object: MsgUpdateAdminSDKType): MsgUpdateAdmin;
    toSDK(message: MsgUpdateAdmin): MsgUpdateAdminSDKType;
    fromAmino(object: MsgUpdateAdminAmino): MsgUpdateAdmin;
    toAmino(message: MsgUpdateAdmin): MsgUpdateAdminAmino;
    fromAminoMsg(object: MsgUpdateAdminAminoMsg): MsgUpdateAdmin;
    toAminoMsg(message: MsgUpdateAdmin): MsgUpdateAdminAminoMsg;
    fromProtoMsg(message: MsgUpdateAdminProtoMsg): MsgUpdateAdmin;
    toProto(message: MsgUpdateAdmin): Uint8Array;
    toProtoMsg(message: MsgUpdateAdmin): MsgUpdateAdminProtoMsg;
};
export declare const MsgUpdateAdminResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgUpdateAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateAdminResponse;
    fromJSON(_: any): MsgUpdateAdminResponse;
    toJSON(_: MsgUpdateAdminResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateAdminResponse>): MsgUpdateAdminResponse;
    fromSDK(_: MsgUpdateAdminResponseSDKType): MsgUpdateAdminResponse;
    toSDK(_: MsgUpdateAdminResponse): MsgUpdateAdminResponseSDKType;
    fromAmino(_: MsgUpdateAdminResponseAmino): MsgUpdateAdminResponse;
    toAmino(_: MsgUpdateAdminResponse): MsgUpdateAdminResponseAmino;
    fromAminoMsg(object: MsgUpdateAdminResponseAminoMsg): MsgUpdateAdminResponse;
    toAminoMsg(message: MsgUpdateAdminResponse): MsgUpdateAdminResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateAdminResponseProtoMsg): MsgUpdateAdminResponse;
    toProto(message: MsgUpdateAdminResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateAdminResponse): MsgUpdateAdminResponseProtoMsg;
};
export declare const MsgClearAdmin: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgClearAdmin, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClearAdmin;
    fromJSON(object: any): MsgClearAdmin;
    toJSON(message: MsgClearAdmin): unknown;
    fromPartial(object: DeepPartial<MsgClearAdmin>): MsgClearAdmin;
    fromSDK(object: MsgClearAdminSDKType): MsgClearAdmin;
    toSDK(message: MsgClearAdmin): MsgClearAdminSDKType;
    fromAmino(object: MsgClearAdminAmino): MsgClearAdmin;
    toAmino(message: MsgClearAdmin): MsgClearAdminAmino;
    fromAminoMsg(object: MsgClearAdminAminoMsg): MsgClearAdmin;
    toAminoMsg(message: MsgClearAdmin): MsgClearAdminAminoMsg;
    fromProtoMsg(message: MsgClearAdminProtoMsg): MsgClearAdmin;
    toProto(message: MsgClearAdmin): Uint8Array;
    toProtoMsg(message: MsgClearAdmin): MsgClearAdminProtoMsg;
};
export declare const MsgClearAdminResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgClearAdminResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgClearAdminResponse;
    fromJSON(_: any): MsgClearAdminResponse;
    toJSON(_: MsgClearAdminResponse): unknown;
    fromPartial(_: DeepPartial<MsgClearAdminResponse>): MsgClearAdminResponse;
    fromSDK(_: MsgClearAdminResponseSDKType): MsgClearAdminResponse;
    toSDK(_: MsgClearAdminResponse): MsgClearAdminResponseSDKType;
    fromAmino(_: MsgClearAdminResponseAmino): MsgClearAdminResponse;
    toAmino(_: MsgClearAdminResponse): MsgClearAdminResponseAmino;
    fromAminoMsg(object: MsgClearAdminResponseAminoMsg): MsgClearAdminResponse;
    toAminoMsg(message: MsgClearAdminResponse): MsgClearAdminResponseAminoMsg;
    fromProtoMsg(message: MsgClearAdminResponseProtoMsg): MsgClearAdminResponse;
    toProto(message: MsgClearAdminResponse): Uint8Array;
    toProtoMsg(message: MsgClearAdminResponse): MsgClearAdminResponseProtoMsg;
};
export declare const MsgUpdateInstantiateConfig: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgUpdateInstantiateConfig, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateInstantiateConfig;
    fromJSON(object: any): MsgUpdateInstantiateConfig;
    toJSON(message: MsgUpdateInstantiateConfig): unknown;
    fromPartial(object: DeepPartial<MsgUpdateInstantiateConfig>): MsgUpdateInstantiateConfig;
    fromSDK(object: MsgUpdateInstantiateConfigSDKType): MsgUpdateInstantiateConfig;
    toSDK(message: MsgUpdateInstantiateConfig): MsgUpdateInstantiateConfigSDKType;
    fromAmino(object: MsgUpdateInstantiateConfigAmino): MsgUpdateInstantiateConfig;
    toAmino(message: MsgUpdateInstantiateConfig): MsgUpdateInstantiateConfigAmino;
    fromAminoMsg(object: MsgUpdateInstantiateConfigAminoMsg): MsgUpdateInstantiateConfig;
    toAminoMsg(message: MsgUpdateInstantiateConfig): MsgUpdateInstantiateConfigAminoMsg;
    fromProtoMsg(message: MsgUpdateInstantiateConfigProtoMsg): MsgUpdateInstantiateConfig;
    toProto(message: MsgUpdateInstantiateConfig): Uint8Array;
    toProtoMsg(message: MsgUpdateInstantiateConfig): MsgUpdateInstantiateConfigProtoMsg;
};
export declare const MsgUpdateInstantiateConfigResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgUpdateInstantiateConfigResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateInstantiateConfigResponse;
    fromJSON(_: any): MsgUpdateInstantiateConfigResponse;
    toJSON(_: MsgUpdateInstantiateConfigResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateInstantiateConfigResponse>): MsgUpdateInstantiateConfigResponse;
    fromSDK(_: MsgUpdateInstantiateConfigResponseSDKType): MsgUpdateInstantiateConfigResponse;
    toSDK(_: MsgUpdateInstantiateConfigResponse): MsgUpdateInstantiateConfigResponseSDKType;
    fromAmino(_: MsgUpdateInstantiateConfigResponseAmino): MsgUpdateInstantiateConfigResponse;
    toAmino(_: MsgUpdateInstantiateConfigResponse): MsgUpdateInstantiateConfigResponseAmino;
    fromAminoMsg(object: MsgUpdateInstantiateConfigResponseAminoMsg): MsgUpdateInstantiateConfigResponse;
    toAminoMsg(message: MsgUpdateInstantiateConfigResponse): MsgUpdateInstantiateConfigResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateInstantiateConfigResponseProtoMsg): MsgUpdateInstantiateConfigResponse;
    toProto(message: MsgUpdateInstantiateConfigResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateInstantiateConfigResponse): MsgUpdateInstantiateConfigResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams;
    fromSDK(object: MsgUpdateParamsSDKType): MsgUpdateParams;
    toSDK(message: MsgUpdateParams): MsgUpdateParamsSDKType;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromSDK(_: MsgUpdateParamsResponseSDKType): MsgUpdateParamsResponse;
    toSDK(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseSDKType;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
export declare const MsgSudoContract: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgSudoContract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSudoContract;
    fromJSON(object: any): MsgSudoContract;
    toJSON(message: MsgSudoContract): unknown;
    fromPartial(object: DeepPartial<MsgSudoContract>): MsgSudoContract;
    fromSDK(object: MsgSudoContractSDKType): MsgSudoContract;
    toSDK(message: MsgSudoContract): MsgSudoContractSDKType;
    fromAmino(object: MsgSudoContractAmino): MsgSudoContract;
    toAmino(message: MsgSudoContract): MsgSudoContractAmino;
    fromAminoMsg(object: MsgSudoContractAminoMsg): MsgSudoContract;
    toAminoMsg(message: MsgSudoContract): MsgSudoContractAminoMsg;
    fromProtoMsg(message: MsgSudoContractProtoMsg): MsgSudoContract;
    toProto(message: MsgSudoContract): Uint8Array;
    toProtoMsg(message: MsgSudoContract): MsgSudoContractProtoMsg;
};
export declare const MsgSudoContractResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgSudoContractResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSudoContractResponse;
    fromJSON(object: any): MsgSudoContractResponse;
    toJSON(message: MsgSudoContractResponse): unknown;
    fromPartial(object: DeepPartial<MsgSudoContractResponse>): MsgSudoContractResponse;
    fromSDK(object: MsgSudoContractResponseSDKType): MsgSudoContractResponse;
    toSDK(message: MsgSudoContractResponse): MsgSudoContractResponseSDKType;
    fromAmino(object: MsgSudoContractResponseAmino): MsgSudoContractResponse;
    toAmino(message: MsgSudoContractResponse): MsgSudoContractResponseAmino;
    fromAminoMsg(object: MsgSudoContractResponseAminoMsg): MsgSudoContractResponse;
    toAminoMsg(message: MsgSudoContractResponse): MsgSudoContractResponseAminoMsg;
    fromProtoMsg(message: MsgSudoContractResponseProtoMsg): MsgSudoContractResponse;
    toProto(message: MsgSudoContractResponse): Uint8Array;
    toProtoMsg(message: MsgSudoContractResponse): MsgSudoContractResponseProtoMsg;
};
export declare const MsgPinCodes: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgPinCodes, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPinCodes;
    fromJSON(object: any): MsgPinCodes;
    toJSON(message: MsgPinCodes): unknown;
    fromPartial(object: DeepPartial<MsgPinCodes>): MsgPinCodes;
    fromSDK(object: MsgPinCodesSDKType): MsgPinCodes;
    toSDK(message: MsgPinCodes): MsgPinCodesSDKType;
    fromAmino(object: MsgPinCodesAmino): MsgPinCodes;
    toAmino(message: MsgPinCodes): MsgPinCodesAmino;
    fromAminoMsg(object: MsgPinCodesAminoMsg): MsgPinCodes;
    toAminoMsg(message: MsgPinCodes): MsgPinCodesAminoMsg;
    fromProtoMsg(message: MsgPinCodesProtoMsg): MsgPinCodes;
    toProto(message: MsgPinCodes): Uint8Array;
    toProtoMsg(message: MsgPinCodes): MsgPinCodesProtoMsg;
};
export declare const MsgPinCodesResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgPinCodesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgPinCodesResponse;
    fromJSON(_: any): MsgPinCodesResponse;
    toJSON(_: MsgPinCodesResponse): unknown;
    fromPartial(_: DeepPartial<MsgPinCodesResponse>): MsgPinCodesResponse;
    fromSDK(_: MsgPinCodesResponseSDKType): MsgPinCodesResponse;
    toSDK(_: MsgPinCodesResponse): MsgPinCodesResponseSDKType;
    fromAmino(_: MsgPinCodesResponseAmino): MsgPinCodesResponse;
    toAmino(_: MsgPinCodesResponse): MsgPinCodesResponseAmino;
    fromAminoMsg(object: MsgPinCodesResponseAminoMsg): MsgPinCodesResponse;
    toAminoMsg(message: MsgPinCodesResponse): MsgPinCodesResponseAminoMsg;
    fromProtoMsg(message: MsgPinCodesResponseProtoMsg): MsgPinCodesResponse;
    toProto(message: MsgPinCodesResponse): Uint8Array;
    toProtoMsg(message: MsgPinCodesResponse): MsgPinCodesResponseProtoMsg;
};
export declare const MsgUnpinCodes: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgUnpinCodes, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnpinCodes;
    fromJSON(object: any): MsgUnpinCodes;
    toJSON(message: MsgUnpinCodes): unknown;
    fromPartial(object: DeepPartial<MsgUnpinCodes>): MsgUnpinCodes;
    fromSDK(object: MsgUnpinCodesSDKType): MsgUnpinCodes;
    toSDK(message: MsgUnpinCodes): MsgUnpinCodesSDKType;
    fromAmino(object: MsgUnpinCodesAmino): MsgUnpinCodes;
    toAmino(message: MsgUnpinCodes): MsgUnpinCodesAmino;
    fromAminoMsg(object: MsgUnpinCodesAminoMsg): MsgUnpinCodes;
    toAminoMsg(message: MsgUnpinCodes): MsgUnpinCodesAminoMsg;
    fromProtoMsg(message: MsgUnpinCodesProtoMsg): MsgUnpinCodes;
    toProto(message: MsgUnpinCodes): Uint8Array;
    toProtoMsg(message: MsgUnpinCodes): MsgUnpinCodesProtoMsg;
};
export declare const MsgUnpinCodesResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgUnpinCodesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnpinCodesResponse;
    fromJSON(_: any): MsgUnpinCodesResponse;
    toJSON(_: MsgUnpinCodesResponse): unknown;
    fromPartial(_: DeepPartial<MsgUnpinCodesResponse>): MsgUnpinCodesResponse;
    fromSDK(_: MsgUnpinCodesResponseSDKType): MsgUnpinCodesResponse;
    toSDK(_: MsgUnpinCodesResponse): MsgUnpinCodesResponseSDKType;
    fromAmino(_: MsgUnpinCodesResponseAmino): MsgUnpinCodesResponse;
    toAmino(_: MsgUnpinCodesResponse): MsgUnpinCodesResponseAmino;
    fromAminoMsg(object: MsgUnpinCodesResponseAminoMsg): MsgUnpinCodesResponse;
    toAminoMsg(message: MsgUnpinCodesResponse): MsgUnpinCodesResponseAminoMsg;
    fromProtoMsg(message: MsgUnpinCodesResponseProtoMsg): MsgUnpinCodesResponse;
    toProto(message: MsgUnpinCodesResponse): Uint8Array;
    toProtoMsg(message: MsgUnpinCodesResponse): MsgUnpinCodesResponseProtoMsg;
};
export declare const MsgStoreAndInstantiateContract: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgStoreAndInstantiateContract, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreAndInstantiateContract;
    fromJSON(object: any): MsgStoreAndInstantiateContract;
    toJSON(message: MsgStoreAndInstantiateContract): unknown;
    fromPartial(object: DeepPartial<MsgStoreAndInstantiateContract>): MsgStoreAndInstantiateContract;
    fromSDK(object: MsgStoreAndInstantiateContractSDKType): MsgStoreAndInstantiateContract;
    toSDK(message: MsgStoreAndInstantiateContract): MsgStoreAndInstantiateContractSDKType;
    fromAmino(object: MsgStoreAndInstantiateContractAmino): MsgStoreAndInstantiateContract;
    toAmino(message: MsgStoreAndInstantiateContract): MsgStoreAndInstantiateContractAmino;
    fromAminoMsg(object: MsgStoreAndInstantiateContractAminoMsg): MsgStoreAndInstantiateContract;
    toAminoMsg(message: MsgStoreAndInstantiateContract): MsgStoreAndInstantiateContractAminoMsg;
    fromProtoMsg(message: MsgStoreAndInstantiateContractProtoMsg): MsgStoreAndInstantiateContract;
    toProto(message: MsgStoreAndInstantiateContract): Uint8Array;
    toProtoMsg(message: MsgStoreAndInstantiateContract): MsgStoreAndInstantiateContractProtoMsg;
};
export declare const MsgStoreAndInstantiateContractResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgStoreAndInstantiateContractResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgStoreAndInstantiateContractResponse;
    fromJSON(object: any): MsgStoreAndInstantiateContractResponse;
    toJSON(message: MsgStoreAndInstantiateContractResponse): unknown;
    fromPartial(object: DeepPartial<MsgStoreAndInstantiateContractResponse>): MsgStoreAndInstantiateContractResponse;
    fromSDK(object: MsgStoreAndInstantiateContractResponseSDKType): MsgStoreAndInstantiateContractResponse;
    toSDK(message: MsgStoreAndInstantiateContractResponse): MsgStoreAndInstantiateContractResponseSDKType;
    fromAmino(object: MsgStoreAndInstantiateContractResponseAmino): MsgStoreAndInstantiateContractResponse;
    toAmino(message: MsgStoreAndInstantiateContractResponse): MsgStoreAndInstantiateContractResponseAmino;
    fromAminoMsg(object: MsgStoreAndInstantiateContractResponseAminoMsg): MsgStoreAndInstantiateContractResponse;
    toAminoMsg(message: MsgStoreAndInstantiateContractResponse): MsgStoreAndInstantiateContractResponseAminoMsg;
    fromProtoMsg(message: MsgStoreAndInstantiateContractResponseProtoMsg): MsgStoreAndInstantiateContractResponse;
    toProto(message: MsgStoreAndInstantiateContractResponse): Uint8Array;
    toProtoMsg(message: MsgStoreAndInstantiateContractResponse): MsgStoreAndInstantiateContractResponseProtoMsg;
};

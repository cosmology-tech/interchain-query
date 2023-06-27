import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryParamsRequest, QueryParamsResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
    /** ContractInfo gets the contract meta data */
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    /** ContractHistory gets the contract code history */
    contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
    /** ContractsByCode lists all smart contracts for a code id */
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
    /** AllContractState gets all raw store data for a single contract */
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
    /** RawContractState gets single key from the raw store data of a contract */
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
    /** SmartContractState get smart query result from the contract */
    smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
    /** Code gets the binary code and metadata for a singe wasm code */
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    /** Codes gets the metadata for all stored wasm codes */
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
    /** PinnedCodes gets the pinned code ids */
    pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
    /** Params gets the module params */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** ContractsByCreator gets the contracts by creator */
    contractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
    smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
    pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    contractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
    smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
    pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    contractsByCreator(request: QueryContractsByCreatorRequest): Promise<QueryContractsByCreatorResponse>;
};
export interface UseContractInfoQuery<TData> extends ReactQueryParams<QueryContractInfoResponse, TData> {
    request: QueryContractInfoRequest;
}
export interface UseContractHistoryQuery<TData> extends ReactQueryParams<QueryContractHistoryResponse, TData> {
    request: QueryContractHistoryRequest;
}
export interface UseContractsByCodeQuery<TData> extends ReactQueryParams<QueryContractsByCodeResponse, TData> {
    request: QueryContractsByCodeRequest;
}
export interface UseAllContractStateQuery<TData> extends ReactQueryParams<QueryAllContractStateResponse, TData> {
    request: QueryAllContractStateRequest;
}
export interface UseRawContractStateQuery<TData> extends ReactQueryParams<QueryRawContractStateResponse, TData> {
    request: QueryRawContractStateRequest;
}
export interface UseSmartContractStateQuery<TData> extends ReactQueryParams<QuerySmartContractStateResponse, TData> {
    request: QuerySmartContractStateRequest;
}
export interface UseCodeQuery<TData> extends ReactQueryParams<QueryCodeResponse, TData> {
    request: QueryCodeRequest;
}
export interface UseCodesQuery<TData> extends ReactQueryParams<QueryCodesResponse, TData> {
    request?: QueryCodesRequest;
}
export interface UsePinnedCodesQuery<TData> extends ReactQueryParams<QueryPinnedCodesResponse, TData> {
    request?: QueryPinnedCodesRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseContractsByCreatorQuery<TData> extends ReactQueryParams<QueryContractsByCreatorResponse, TData> {
    request: QueryContractsByCreatorRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** ContractInfo gets the contract meta data */ useContractInfo: <TData = QueryContractInfoResponse>({ request, options }: UseContractInfoQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
    /** ContractHistory gets the contract code history */ useContractHistory: <TData_1 = QueryContractHistoryResponse>({ request, options }: UseContractHistoryQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
    /** ContractsByCode lists all smart contracts for a code id */ useContractsByCode: <TData_2 = QueryContractsByCodeResponse>({ request, options }: UseContractsByCodeQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
    /** AllContractState gets all raw store data for a single contract */ useAllContractState: <TData_3 = QueryAllContractStateResponse>({ request, options }: UseAllContractStateQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
    /** RawContractState gets single key from the raw store data of a contract */ useRawContractState: <TData_4 = QueryRawContractStateResponse>({ request, options }: UseRawContractStateQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
    /** SmartContractState get smart query result from the contract */ useSmartContractState: <TData_5 = QuerySmartContractStateResponse>({ request, options }: UseSmartContractStateQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
    /** Code gets the binary code and metadata for a singe wasm code */ useCode: <TData_6 = QueryCodeResponse>({ request, options }: UseCodeQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
    /** Codes gets the metadata for all stored wasm codes */ useCodes: <TData_7 = QueryCodesResponse>({ request, options }: UseCodesQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
    /** PinnedCodes gets the pinned code ids */ usePinnedCodes: <TData_8 = QueryPinnedCodesResponse>({ request, options }: UsePinnedCodesQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
    /** Params gets the module params */ useParams: <TData_9 = QueryParamsResponse>({ request, options }: UseParamsQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
    /** ContractsByCreator gets the contracts by creator */ useContractsByCreator: <TData_10 = QueryContractsByCreatorResponse>({ request, options }: UseContractsByCreatorQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
};

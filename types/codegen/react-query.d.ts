/**
* This file and any referenced files were automatically generated by @osmonauts/telescope@0.96.0
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/
import { UseQueryOptions } from '@tanstack/react-query';
import { HttpEndpoint, ProtobufRpcClient } from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
export interface ReactQueryParams<TResponse, TData = TResponse> {
    options?: UseQueryOptions<TResponse, Error, TData>;
}
export interface UseRpcClientQuery<TData> extends ReactQueryParams<ProtobufRpcClient, TData> {
    rpcEndpoint: string | HttpEndpoint;
}
export interface UseRpcEndpointQuery<TData> extends ReactQueryParams<string | HttpEndpoint, TData> {
    getter: () => Promise<string | HttpEndpoint>;
}
export declare const useRpcEndpoint: <TData = any>({ getter, options, }: UseRpcEndpointQuery<TData>) => any;
export declare const useRpcClient: <TData = ProtobufRpcClient>({ rpcEndpoint, options, }: UseRpcClientQuery<TData>) => any;
interface UseTendermintClient extends ReactQueryParams<Tendermint34Client> {
    rpcEndpoint: string | HttpEndpoint;
}
/**
 * Hook that uses react-query to cache a connected tendermint client.
 */
export declare const useTendermintClient: ({ rpcEndpoint, options, }: UseTendermintClient) => {
    client: any;
};
export {};

/**
* This file and any referenced files were automatically generated by @osmonauts/telescope@0.96.0
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const getRpcEndpointKey: (rpcEndpoint: string | HttpEndpoint) => any;
export declare const getRpcClient: (rpcEndpoint: string | HttpEndpoint) => Promise<any>;
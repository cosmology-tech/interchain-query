import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _CosmosAppV1alpha1Queryrpc from "./cosmos/app/v1alpha1/query.rpc.Query";
import * as _CosmosAuthV1beta1Queryrpc from "./cosmos/auth/v1beta1/query.rpc.Query";
import * as _CosmosAuthzV1beta1Queryrpc from "./cosmos/authz/v1beta1/query.rpc.Query";
import * as _CosmosBankV1beta1Queryrpc from "./cosmos/bank/v1beta1/query.rpc.Query";
import * as _CosmosBaseTendermintV1beta1Queryrpc from "./cosmos/base/tendermint/v1beta1/query.rpc.Service";
import * as _CosmosDistributionV1beta1Queryrpc from "./cosmos/distribution/v1beta1/query.rpc.Query";
import * as _CosmosEvidenceV1beta1Queryrpc from "./cosmos/evidence/v1beta1/query.rpc.Query";
import * as _CosmosFeegrantV1beta1Queryrpc from "./cosmos/feegrant/v1beta1/query.rpc.Query";
import * as _CosmosGovV1Queryrpc from "./cosmos/gov/v1/query.rpc.Query";
import * as _CosmosGovV1beta1Queryrpc from "./cosmos/gov/v1beta1/query.rpc.Query";
import * as _CosmosGroupV1Queryrpc from "./cosmos/group/v1/query.rpc.Query";
import * as _CosmosMintV1beta1Queryrpc from "./cosmos/mint/v1beta1/query.rpc.Query";
import * as _CosmosNftV1beta1Queryrpc from "./cosmos/nft/v1beta1/query.rpc.Query";
import * as _CosmosParamsV1beta1Queryrpc from "./cosmos/params/v1beta1/query.rpc.Query";
import * as _CosmosSlashingV1beta1Queryrpc from "./cosmos/slashing/v1beta1/query.rpc.Query";
import * as _CosmosStakingV1beta1Queryrpc from "./cosmos/staking/v1beta1/query.rpc.Query";
import * as _CosmosTxV1beta1Servicerpc from "./cosmos/tx/v1beta1/service.rpc.Service";
import * as _CosmosUpgradeV1beta1Queryrpc from "./cosmos/upgrade/v1beta1/query.rpc.Query";
export declare const createRpcQueryHooks: ({ rpc }: {
    rpc: ProtobufRpcClient | undefined;
}) => {
    cosmos: {
        app: {
            v1alpha1: {
                useConfig: <TData = import("./cosmos/app/v1alpha1/query").QueryConfigResponse>({ request, options }: _CosmosAppV1alpha1Queryrpc.UseConfigQuery<TData>) => any;
            };
        };
        auth: {
            v1beta1: {
                useAccounts: <TData_1 = import("./cosmos/auth/v1beta1/query").QueryAccountsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAccountsQuery<TData_1>) => any;
                useAccount: <TData_2 = import("./cosmos/auth/v1beta1/query").QueryAccountResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAccountQuery<TData_2>) => any;
                useParams: <TData_3 = import("./cosmos/auth/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseParamsQuery<TData_3>) => any;
                useModuleAccounts: <TData_4 = import("./cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseModuleAccountsQuery<TData_4>) => any;
                useBech32Prefix: <TData_5 = import("./cosmos/auth/v1beta1/query").Bech32PrefixResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseBech32PrefixQuery<TData_5>) => any;
                useAddressBytesToString: <TData_6 = import("./cosmos/auth/v1beta1/query").AddressBytesToStringResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAddressBytesToStringQuery<TData_6>) => any;
                useAddressStringToBytes: <TData_7 = import("./cosmos/auth/v1beta1/query").AddressStringToBytesResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAddressStringToBytesQuery<TData_7>) => any;
            };
        };
        authz: {
            v1beta1: {
                useGrants: <TData_8 = import("./cosmos/authz/v1beta1/query").QueryGrantsResponse>({ request, options }: _CosmosAuthzV1beta1Queryrpc.UseGrantsQuery<TData_8>) => any;
                useGranterGrants: <TData_9 = import("./cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>({ request, options }: _CosmosAuthzV1beta1Queryrpc.UseGranterGrantsQuery<TData_9>) => any;
                useGranteeGrants: <TData_10 = import("./cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>({ request, options }: _CosmosAuthzV1beta1Queryrpc.UseGranteeGrantsQuery<TData_10>) => any;
            };
        };
        bank: {
            v1beta1: {
                useBalance: <TData_11 = import("./cosmos/bank/v1beta1/query").QueryBalanceResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseBalanceQuery<TData_11>) => any;
                useAllBalances: <TData_12 = import("./cosmos/bank/v1beta1/query").QueryAllBalancesResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseAllBalancesQuery<TData_12>) => any;
                useSpendableBalances: <TData_13 = import("./cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseSpendableBalancesQuery<TData_13>) => any;
                useTotalSupply: <TData_14 = import("./cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseTotalSupplyQuery<TData_14>) => any;
                useSupplyOf: <TData_15 = import("./cosmos/bank/v1beta1/query").QuerySupplyOfResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseSupplyOfQuery<TData_15>) => any;
                useParams: <TData_16 = import("./cosmos/bank/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseParamsQuery<TData_16>) => any;
                useDenomMetadata: <TData_17 = import("./cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseDenomMetadataQuery<TData_17>) => any;
                useDenomsMetadata: <TData_18 = import("./cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseDenomsMetadataQuery<TData_18>) => any;
                useDenomOwners: <TData_19 = import("./cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseDenomOwnersQuery<TData_19>) => any;
            };
        };
        base: {
            tendermint: {
                v1beta1: {
                    useGetNodeInfo: <TData_20 = import("./cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetNodeInfoQuery<TData_20>) => any;
                    useGetSyncing: <TData_21 = import("./cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetSyncingQuery<TData_21>) => any;
                    useGetLatestBlock: <TData_22 = import("./cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetLatestBlockQuery<TData_22>) => any;
                    useGetBlockByHeight: <TData_23 = import("./cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetBlockByHeightQuery<TData_23>) => any;
                    useGetLatestValidatorSet: <TData_24 = import("./cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetLatestValidatorSetQuery<TData_24>) => any;
                    useGetValidatorSetByHeight: <TData_25 = import("./cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetValidatorSetByHeightQuery<TData_25>) => any;
                };
            };
        };
        distribution: {
            v1beta1: {
                useParams: <TData_26 = import("./cosmos/distribution/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseParamsQuery<TData_26>) => any;
                useValidatorOutstandingRewards: <TData_27 = import("./cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorOutstandingRewardsQuery<TData_27>) => any;
                useValidatorCommission: <TData_28 = import("./cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorCommissionQuery<TData_28>) => any;
                useValidatorSlashes: <TData_29 = import("./cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorSlashesQuery<TData_29>) => any;
                useDelegationRewards: <TData_30 = import("./cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegationRewardsQuery<TData_30>) => any;
                useDelegationTotalRewards: <TData_31 = import("./cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegationTotalRewardsQuery<TData_31>) => any;
                useDelegatorValidators: <TData_32 = import("./cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegatorValidatorsQuery<TData_32>) => any;
                useDelegatorWithdrawAddress: <TData_33 = import("./cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegatorWithdrawAddressQuery<TData_33>) => any;
                useCommunityPool: <TData_34 = import("./cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseCommunityPoolQuery<TData_34>) => any;
            };
        };
        evidence: {
            v1beta1: {
                useEvidence: <TData_35 = import("./cosmos/evidence/v1beta1/query").QueryEvidenceResponse>({ request, options }: _CosmosEvidenceV1beta1Queryrpc.UseEvidenceQuery<TData_35>) => any;
                useAllEvidence: <TData_36 = import("./cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>({ request, options }: _CosmosEvidenceV1beta1Queryrpc.UseAllEvidenceQuery<TData_36>) => any;
            };
        };
        feegrant: {
            v1beta1: {
                useAllowance: <TData_37 = import("./cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>({ request, options }: _CosmosFeegrantV1beta1Queryrpc.UseAllowanceQuery<TData_37>) => any;
                useAllowances: <TData_38 = import("./cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>({ request, options }: _CosmosFeegrantV1beta1Queryrpc.UseAllowancesQuery<TData_38>) => any;
                useAllowancesByGranter: <TData_39 = import("./cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>({ request, options }: _CosmosFeegrantV1beta1Queryrpc.UseAllowancesByGranterQuery<TData_39>) => any;
            };
        };
        gov: {
            v1: {
                useProposal: <TData_40 = import("./cosmos/gov/v1/query").QueryProposalResponse>({ request, options }: _CosmosGovV1Queryrpc.UseProposalQuery<TData_40>) => any;
                useProposals: <TData_41 = import("./cosmos/gov/v1/query").QueryProposalsResponse>({ request, options }: _CosmosGovV1Queryrpc.UseProposalsQuery<TData_41>) => any;
                useVote: <TData_42 = import("./cosmos/gov/v1/query").QueryVoteResponse>({ request, options }: _CosmosGovV1Queryrpc.UseVoteQuery<TData_42>) => any;
                useVotes: <TData_43 = import("./cosmos/gov/v1/query").QueryVotesResponse>({ request, options }: _CosmosGovV1Queryrpc.UseVotesQuery<TData_43>) => any;
                useParams: <TData_44 = import("./cosmos/gov/v1/query").QueryParamsResponse>({ request, options }: _CosmosGovV1Queryrpc.UseParamsQuery<TData_44>) => any;
                useDeposit: <TData_45 = import("./cosmos/gov/v1/query").QueryDepositResponse>({ request, options }: _CosmosGovV1Queryrpc.UseDepositQuery<TData_45>) => any;
                useDeposits: <TData_46 = import("./cosmos/gov/v1/query").QueryDepositsResponse>({ request, options }: _CosmosGovV1Queryrpc.UseDepositsQuery<TData_46>) => any;
                useTallyResult: <TData_47 = import("./cosmos/gov/v1/query").QueryTallyResultResponse>({ request, options }: _CosmosGovV1Queryrpc.UseTallyResultQuery<TData_47>) => any;
            };
            v1beta1: {
                useProposal: <TData_48 = import("./cosmos/gov/v1beta1/query").QueryProposalResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseProposalQuery<TData_48>) => any;
                useProposals: <TData_49 = import("./cosmos/gov/v1beta1/query").QueryProposalsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseProposalsQuery<TData_49>) => any;
                useVote: <TData_50 = import("./cosmos/gov/v1beta1/query").QueryVoteResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseVoteQuery<TData_50>) => any;
                useVotes: <TData_51 = import("./cosmos/gov/v1beta1/query").QueryVotesResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseVotesQuery<TData_51>) => any;
                useParams: <TData_52 = import("./cosmos/gov/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseParamsQuery<TData_52>) => any;
                useDeposit: <TData_53 = import("./cosmos/gov/v1beta1/query").QueryDepositResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseDepositQuery<TData_53>) => any;
                useDeposits: <TData_54 = import("./cosmos/gov/v1beta1/query").QueryDepositsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseDepositsQuery<TData_54>) => any;
                useTallyResult: <TData_55 = import("./cosmos/gov/v1beta1/query").QueryTallyResultResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseTallyResultQuery<TData_55>) => any;
            };
        };
        group: {
            v1: {
                useGroupInfo: <TData_56 = import("./cosmos/group/v1/query").QueryGroupInfoResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupInfoQuery<TData_56>) => any;
                useGroupPolicyInfo: <TData_57 = import("./cosmos/group/v1/query").QueryGroupPolicyInfoResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupPolicyInfoQuery<TData_57>) => any;
                useGroupMembers: <TData_58 = import("./cosmos/group/v1/query").QueryGroupMembersResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupMembersQuery<TData_58>) => any;
                useGroupsByAdmin: <TData_59 = import("./cosmos/group/v1/query").QueryGroupsByAdminResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupsByAdminQuery<TData_59>) => any;
                useGroupPoliciesByGroup: <TData_60 = import("./cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupPoliciesByGroupQuery<TData_60>) => any;
                useGroupPoliciesByAdmin: <TData_61 = import("./cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupPoliciesByAdminQuery<TData_61>) => any;
                useProposal: <TData_62 = import("./cosmos/group/v1/query").QueryProposalResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseProposalQuery<TData_62>) => any;
                useProposalsByGroupPolicy: <TData_63 = import("./cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseProposalsByGroupPolicyQuery<TData_63>) => any;
                useVoteByProposalVoter: <TData_64 = import("./cosmos/group/v1/query").QueryVoteByProposalVoterResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseVoteByProposalVoterQuery<TData_64>) => any;
                useVotesByProposal: <TData_65 = import("./cosmos/group/v1/query").QueryVotesByProposalResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseVotesByProposalQuery<TData_65>) => any;
                useVotesByVoter: <TData_66 = import("./cosmos/group/v1/query").QueryVotesByVoterResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseVotesByVoterQuery<TData_66>) => any;
                useGroupsByMember: <TData_67 = import("./cosmos/group/v1/query").QueryGroupsByMemberResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupsByMemberQuery<TData_67>) => any;
                useTallyResult: <TData_68 = import("./cosmos/group/v1/query").QueryTallyResultResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseTallyResultQuery<TData_68>) => any;
            };
        };
        mint: {
            v1beta1: {
                useParams: <TData_69 = import("./cosmos/mint/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosMintV1beta1Queryrpc.UseParamsQuery<TData_69>) => any;
                useInflation: <TData_70 = import("./cosmos/mint/v1beta1/query").QueryInflationResponse>({ request, options }: _CosmosMintV1beta1Queryrpc.UseInflationQuery<TData_70>) => any;
                useAnnualProvisions: <TData_71 = import("./cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>({ request, options }: _CosmosMintV1beta1Queryrpc.UseAnnualProvisionsQuery<TData_71>) => any;
            };
        };
        nft: {
            v1beta1: {
                useBalance: <TData_72 = import("./cosmos/nft/v1beta1/query").QueryBalanceResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseBalanceQuery<TData_72>) => any;
                useOwner: <TData_73 = import("./cosmos/nft/v1beta1/query").QueryOwnerResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseOwnerQuery<TData_73>) => any;
                useSupply: <TData_74 = import("./cosmos/nft/v1beta1/query").QuerySupplyResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseSupplyQuery<TData_74>) => any;
                useNFTs: <TData_75 = import("./cosmos/nft/v1beta1/query").QueryNFTsResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseNFTsQuery<TData_75>) => any;
                useNFT: <TData_76 = import("./cosmos/nft/v1beta1/query").QueryNFTResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseNFTQuery<TData_76>) => any;
                useClass: <TData_77 = import("./cosmos/nft/v1beta1/query").QueryClassResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseClassQuery<TData_77>) => any;
                useClasses: <TData_78 = import("./cosmos/nft/v1beta1/query").QueryClassesResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseClassesQuery<TData_78>) => any;
            };
        };
        params: {
            v1beta1: {
                useParams: <TData_79 = import("./cosmos/params/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosParamsV1beta1Queryrpc.UseParamsQuery<TData_79>) => any;
                useSubspaces: <TData_80 = import("./cosmos/params/v1beta1/query").QuerySubspacesResponse>({ request, options }: _CosmosParamsV1beta1Queryrpc.UseSubspacesQuery<TData_80>) => any;
            };
        };
        slashing: {
            v1beta1: {
                useParams: <TData_81 = import("./cosmos/slashing/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseParamsQuery<TData_81>) => any;
                useSigningInfo: <TData_82 = import("./cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseSigningInfoQuery<TData_82>) => any;
                useSigningInfos: <TData_83 = import("./cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseSigningInfosQuery<TData_83>) => any;
            };
        };
        staking: {
            v1beta1: {
                useValidators: <TData_84 = import("./cosmos/staking/v1beta1/query").QueryValidatorsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorsQuery<TData_84>) => any;
                useValidator: <TData_85 = import("./cosmos/staking/v1beta1/query").QueryValidatorResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorQuery<TData_85>) => any;
                useValidatorDelegations: <TData_86 = import("./cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorDelegationsQuery<TData_86>) => any;
                useValidatorUnbondingDelegations: <TData_87 = import("./cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorUnbondingDelegationsQuery<TData_87>) => any;
                useDelegation: <TData_88 = import("./cosmos/staking/v1beta1/query").QueryDelegationResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegationQuery<TData_88>) => any;
                useUnbondingDelegation: <TData_89 = import("./cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseUnbondingDelegationQuery<TData_89>) => any;
                useDelegatorDelegations: <TData_90 = import("./cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorDelegationsQuery<TData_90>) => any;
                useDelegatorUnbondingDelegations: <TData_91 = import("./cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorUnbondingDelegationsQuery<TData_91>) => any;
                useRedelegations: <TData_92 = import("./cosmos/staking/v1beta1/query").QueryRedelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseRedelegationsQuery<TData_92>) => any;
                useDelegatorValidators: <TData_93 = import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorValidatorsQuery<TData_93>) => any;
                useDelegatorValidator: <TData_94 = import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorValidatorQuery<TData_94>) => any;
                useHistoricalInfo: <TData_95 = import("./cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseHistoricalInfoQuery<TData_95>) => any;
                usePool: <TData_96 = import("./cosmos/staking/v1beta1/query").QueryPoolResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UsePoolQuery<TData_96>) => any;
                useParams: <TData_97 = import("./cosmos/staking/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseParamsQuery<TData_97>) => any;
            };
        };
        tx: {
            v1beta1: {
                useSimulate: <TData_98 = import("./cosmos/tx/v1beta1/service").SimulateResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseSimulateQuery<TData_98>) => any;
                useGetTx: <TData_99 = import("./cosmos/tx/v1beta1/service").GetTxResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseGetTxQuery<TData_99>) => any;
                useBroadcastTx: <TData_100 = import("./cosmos/tx/v1beta1/service").BroadcastTxResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseBroadcastTxQuery<TData_100>) => any;
                useGetTxsEvent: <TData_101 = import("./cosmos/tx/v1beta1/service").GetTxsEventResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseGetTxsEventQuery<TData_101>) => any;
                useGetBlockWithTxs: <TData_102 = import("./cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseGetBlockWithTxsQuery<TData_102>) => any;
            };
        };
        upgrade: {
            v1beta1: {
                useCurrentPlan: <TData_103 = import("./cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseCurrentPlanQuery<TData_103>) => any;
                useAppliedPlan: <TData_104 = import("./cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseAppliedPlanQuery<TData_104>) => any;
                useUpgradedConsensusState: <TData_105 = import("./cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseUpgradedConsensusStateQuery<TData_105>) => any;
                useModuleVersions: <TData_106 = import("./cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseModuleVersionsQuery<TData_106>) => any;
                useAuthority: <TData_107 = import("./cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseAuthorityQuery<TData_107>) => any;
            };
        };
    };
};

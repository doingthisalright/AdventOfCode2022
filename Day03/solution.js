const rucksacks = [
	"VdzVHmNpdVmBBCpmQLTNfTtMhMJnhFhTTf",
	"FgqsZbqDDFqRrhhJnsnLMTfhJG",
	"bRRRPrRRwSwbDqgjvDZbRbQzpzmQVWCzzBdvQBFCzlWV",
	"GcDdRdvhRssRhGDdShCRtqWjlQzqWgqzNfNjfQWWjt",
	"mwwnnPFwmVrPmJmzfNzqCjQCbgVlgC",
	"nPnHHLrHwmJTrCTJpThBscBSdSLGZvZBvRhZ",
	"RVQQcVlcSRclfZCCCnMJJTSTnC",
	"NdHwjdwjbBBZrrZrbJDZJJ",
	"wmhjGGBGwwmjtjtdPlfRcpVQlhRppVJF",
	"pplbNBPPrppllrFNbpvppSTcwqcWFhTTShhJDTchqd",
	"RGzRfLjjmZmfmwLftTWhStStJWTdWmDm",
	"nfsMjQssnpPvNnrPrw",
	"SjjBgllzlQjBZvlBBgcFbgJHsMhJqbMHPggJbM",
	"hRLRVDdRRWnJqnnHTqMCnH",
	"GRfLddRRpVhNVrWSjwQQzSzcGSBQSc",
	"qMwNqqBdQdnTVBBVVhMVnVFzTHPggTPjGRDzvPTjjmvPDj",
	"sbSrWJpStrtPtRPttzmmDD",
	"pfbJJcbsrcLpWLllsnFmcqcwQncnQQqVNQ",
	"RBTWCMwCwdZThPZcZZ",
	"pVmVpHLFFFHHVgVmvNmHSQNvddlPPzZJMPcdhclhjczLdZMP",
	"vnnNnFStGMRDwWnn",
	"fWDdJTpDJzdBBBdmDSbSRHRwPqbPbHgSbz",
	"slQtQvNsMVvrrgPRgRglnhwWPH",
	"sGMMQFrsjvNMfWmdpfFDFZBf",
	"vnMRMWCMJwWWwwWPjmSdVmLdzvVbLrhL",
	"HsNfDHQlZpNqfQzbLbrqhjLmVdjd",
	"dfDZQsNpstHHHptZDDtZWgngtgBMPMMRwCPtBBGW",
	"HwQwwbwFNWHwHBVFQFLQzRznZnSzcjjjpPbcPpSP",
	"vTfTJsCmsftJZmTSSdPvzdjRSvPdjd",
	"TrGtTJfmGDfDhrhJJJsqrZhDBFLHHLLQWFwwlWBVBBVwgLFD",
	"FFTJRLccQgmTbSsbGm",
	"PBPPqCvCwqwhQQVhQngmVmSgglmGnHbnmb",
	"zqthvtQPBfCCzPwQPtwQzPwNLfNRFNLdLRLFRFFNLFdFdW",
	"nszjQnsPwjznzCCrhJqvjqhmBv",
	"tFWdHGWFGtctlNNpZBBhmqTrrbWqvTBT",
	"dlFtcpHDVVVHFdNGHGpGfQgsPDzSMsQwwPwgLLBQ",
	"TzQqTJGvnnSzqrWTnvfbbcflQcVltfcCMPVM",
	"jFjNZFFJLpFwmBwblcpptcVtfbbVlR",
	"jmmJdBBLNdGDWDDrdzqn",
	"pzddqQmGgbqgGpbJmmdnLZDCRZnZvFlLRZLSlLRT",
	"rVwchcBBMwVBHhHTZCTSGSCRTZlTDr",
	"HtccPfjfBhMtVBGHWpNqJdJdpjNJppWz",
	"WThTWWhtPbZRvvWbbvRTSRMjVRLLgFssgLpVsfSF",
	"JdwrlJcCwfzdqwwjsjzpLMgVsMFgML",
	"lQrwHNGJHClvTmfhBmPQmt",
	"lbRLhcLRpLJzgdGddF",
	"qvhwqDDCVtBDVhfMVGFnzGGzTBnGzGGgFg",
	"VjCwCWCMtjVDtChvQhtffcSmHpNWrrcHZHHZpplWbp",
	"DJVDVdvpmZdPgrCbgbgCJC",
	"lzczcWwwznGhBgPSvTlCrNgqNC",
	"wGzzQhzGGsBBGRBcQwGwnwjmmRHpRfmmMpppMjjHDvLL",
	"HJjJQWjFmmWtFmJTMchghhDwNMhVMWML",
	"SznPSRfRSSPdrrPSShbDVhbLPwcwGGwVNh",
	"ddRfzdRrCrRsZDSnFjspvFvqFqFqTvJt",
	"lflfjQfjvljfbfMLTTDCmHNLNVbL",
	"HSJnRrrJZJssnGRrnsrcqqRnDCLBMhVCTLVLhVNVJBBBhhBm",
	"SsrGGqqnSsWSnnqWHSrPfzftvFdvWlwfQgQwWvzz",
	"nQlsGnFGwwqNJWmJJjpplt",
	"HMTLPTRdvsTCCThDCZdLdLDNNpJBWJbjJMpBmbtNptBWmm",
	"DLCzPzTzZDdLdGSGfSGrsnQGzr",
	"LNPPLHNPHQNQSBFDWDPgggFv",
	"hszfWCWJhrBMsSSBgvFD",
	"GGZjfmJTjmZfrJrZrZJRGwNQnlLNHWjLVjlwdVNHpV",
	"BdNVdTcGVclmTwrTnwPwrHCr",
	"zttBWzfLsCggHPwDrf",
	"szsWSMbWzzbqBbzJjtjsvMzzvdmdVpGllpcRNZZhmRpZcGGc",
	"CjdbMmmmZFnzzgHlttGBVqtBGtsldG",
	"LvPPWNcFSSRslWhBsllT",
	"ppccvLPpcSNwLLwrDNNpLvwJHCMDmbCJbFzgmZZmFgbgnM",
	"TTNRwZqhcTTjsNTTsmrJlvrmmmqqHSrlJH",
	"fLQCCdtcfCDDVbVVQdFbQbdJHMHrJHrHnMllHdMHPrMdln",
	"WfQLQWWDbwRTWcRssN",
	"HQGQWHPDHNjMNQGNWNTWCvZllzqFZqzvvzhCtvFj",
	"DfgwdgfcFpchztvt",
	"sRggdwwVdgmnSTnnDBPBNWLn",
	"WbCZCfTVTTJjSwGdWNDGGw",
	"MMRqggMsqhlmlhrssHgRnRmRvdzdczvdNGNLzScGDrNzrLNc",
	"lRqsnRhmqqQnQpgQMlgDqRfBTJVFbJZQtBCbZQJVZFFb",
	"JnhQcCnmLDsmgmgr",
	"bbMZppRFGGRPfBMMRGMZssTTrLlLfsLlVLdsLsdn",
	"GZGSpPGMZtGGPFFRGBCwhvwjjcnJctvQcvHq",
	"vvrPrHZMGJNRMnqn",
	"BVChWWcDVWsBwCWwGrJNhRLJJnJtLqnq",
	"cjDfcfpWWsfWccBsHgPgrPTdpZbbgggv",
	"GshtVtVtjSCVtVvVGtlVvFZLMvLRZmHmZwbLwZdLdZmR",
	"JWzNDQzjcgJgQBJgzgMwLLHZZcdPwRLwRdHZ",
	"QWTppBWfDrrNBTTfffhFCpVSjnhCGsFtsqSl",
	"nmbCnzHHNzCjCJHJNSCWHLBLrvBrrSGRBDhrDRLrGL",
	"TVtPllwcgdmTRhLQTQhT",
	"fdFtccFcpPmggfdfNzHzCMsbCnWnJs",
	"fMgddvjgRRvjvjVJVdTlZGGtGnrlnqTccNjl",
	"HHSFSWSmmpbBpZlGncrNGbNtrn",
	"WDWBDDBDBDCwPBWBDWNQDgzvVvLRvsVLRwvwdJVLwL",
	"ZSmmvcpsmcJmJvqgBZgZqqtCtZjl",
	"WhDwhFSDgtBFjnFg",
	"rTrSTLWTTHNMNwNrMVddwNNhsmJGQcRsRcJGsJzQJsrzPsPm",
	"GBtLmPsCQqsGqgghZHDzzgLbFz",
	"zjjVTzTlRjRJfznrvrfpnNhFSghbbNFgHrbHZbDHbH",
	"vpfcTJVpcVlfcQPMPCGzCBsd",
	"HMhZNffcPZfNMrzjjFdGcJDjvJ",
	"VSBVVLlSQQmTVSWpSQzDrHzTTvDvFjFdGGzT",
	"mQSplVHWbHLSgWQnShNwsZMZPfbsNCRNCt",
	"MMqvDzLwZzlMqQfdGWPfgPffPglH",
	"ShTcJshsrRdnrdfrrfHp",
	"VVRtFhsCJVJVvwQqDdbDQd",
	"dmnNMlFNvmvljnbpMWNDFQvfQJJGvfPCfHGgQQgcJg",
	"bRVzLBSSTRBRBBrwTrVtRwCfcGHcsJgJgzgGsggHCzcC",
	"ZbtVTTrrqrSSVwhqqwBRwFWMDFNdjdZpWjdDDppjMW",
	"MTzqtbLtwFzJgbHgfbdWWH",
	"VMNBjNVjvNfhhhhfNPhP",
	"jmGMvlDZZnVMtzlwzqqCpwFt",
	"PpzGspGmpPsFLrTnTLzzBg",
	"QCWvfjfWjRPFZgrvqrBvTg",
	"wwNRCNQQVNRWjNWfQbHCCClHGDGJdGhpdhtPGhltDlJD",
	"dhbpGzhllzGlPvnzNcvtNVnc",
	"gcFMsTJDMMwrZqfjjqvvfnPtqJ",
	"sWRWTRFwrTgLDDFWgMsTlpSlpbSCdWWdcbmpChGd",
	"QccdFFFcFbcQPQPHMgpPMp",
	"NJlNSSMLDfJfmlSqHZRNpRqNBRPRPq",
	"LlMmJfvDVVTJSmVMscsCFtvwcjWjrjCj",
	"NVVMGWFSMRVGWSthwhTJWzcJCcJsTs",
	"jqRLqlfRZcmjcCzT",
	"rlRRrdrflpdvPbHpflfPlfDBgBMQpGVQMgpVDGMggBDV",
	"VwRhccRsnQStRhtGQVQVsmjgDgqJdggDjqLDgJlLzmLl",
	"BWFZpWHBNCBCNBzBNvWBpzHZqqlMqgNdlllDdqDgJDLlfDdd",
	"pFbTrrrBzbzTtSwStQnnsrVn",
	"DRfFbFqzbddfPFtsJnJRsnClJRsn",
	"cgjgQgWvSLVQgmWWgWVjVSSSBTltThLnqJssnTCZsTThntZT",
	"qjwpSrmWgcSrGMfdFDFdwHFd",
	"RWjDDWDjDNjjgDtSRRgjcjzFpnzwdFbFNdbFbpnldwFF",
	"vQfPfTQJbZdThTzL",
	"PrBQJQsfQqrrbfmPqMBfJbggjRVgWjttsHRSgRctDjSs",
	"NgqNWqqWWdnJdqpBNFtCmJGCDHttDGDsHsHm",
	"BjvzhRLTrTBQhTMQRjRRcjPGtmDCZZDZSCmmMSSZmVmSSt",
	"vQzRvRzQcPcvfQzRnddppFgnFfWwBFlb",
	"nnPvfvgrtPDHgvvGTRRRPZQGpGCLLV",
	"FlBsBdbllFdfWpbGMCVMZLVbZQ",
	"lhchNcqFsJBlBszztvwHjvzgrzmzffgH",
	"zZhdjTpJJpjmmpPZhvqnnZHqZcggvgMbgv",
	"tFpFQFSFtBGlFNwFfNMnHfbHcnvcvcfvcqrM",
	"GBFlNLSNVGVSSGtQSLLBBlNtphDdzpmmPmTPhRmdzdVCCDdR",
	"rpRCCDLpmnCdJCjn",
	"vMhSFvgsMGLmnmWMmm",
	"wVqFFvwvPPHhFhhgHPwHshpqrDDzqlfRbpftRLblrllr",
	"CRNDzdJCVDWzVgDjdjzRJzWRMTbHsMNZNbZMMbsfhTtMTLMB",
	"wSlwQcSpqPpcqcqFSqpwslsTfZtLhtlthtBHtTMZ",
	"SPGFGFFmpcPGDrWDmjDJVffR",
	"dsmdtJthJphWqHRPnRRsvvnnfR",
	"cDBMDDDlBZglDZTMDfzVvNRrvNPVHzRRTV",
	"PGMCCDClBDDbbFqmmhqQdpWGmmWp",
	"BJjcGhcvCnBdGHsmHSzZDzSDMHmRMQ",
	"qLWPLVrTwWlwwwrfrFfGDNmDQRMbQMzzmmbQLNMM",
	"rVWrFlGqlqwVwVGgWGphnvgBBsnvsjdBnCBnBg",
	"sNNsfBsmcGmgNTcHHSpnTWHnpV",
	"QlrhlrlMglhDQrdFblvFtMdnDWwSHDWWwnTSjLwVDSwwwT",
	"QtdMvltZhbFlPPZbQtQthZQdqCsJJGzBqqCBmCNCqgRCBsfP",
	"SZnQnnHRWRQRVjHnqlJTQPfdlqfJftqG",
	"pDzmbDBFbBLvvzttfdlTTl",
	"gsDLLpcmsSZVwlnRsV",
	"LHsWjwjWqCLsqCHcLsjdLqcdbpMGZPPtBhthbZBpBhMllwPG",
	"VFnVbbvJSfbgphSpGlhRBBSP",
	"JrrTgmFgzvNbrmNnmnvzgTLjCQWDLDCsTjssjqcHLc",
	"QmwwqTqsrdqNNqgtvnVDVcGNNtvv",
	"WBFBpzzjSJBJzJbfntgPzVzcvPnzDf",
	"HcpbHZJBFpjpcSZrZsdRQZrCwrwd",
	"JqmLmbtTWThBTWvWGVSrrVDsSGSG",
	"wwzRzNjNNbsPVPds",
	"jfgQRZwpQclQfffHgpRpwpfTcqtLLqCbbFFFLmbmTTBnFB",
	"fGpcccNNqcctqGMprvMPmbbzFSflSRzPBBlBbS",
	"JCjnjTZTTGPSGmTFPb",
	"ZWHhJjHLDVDgHLLDGjnhctsstwqctNwWqNwwQrtv",
	"sDwQhcwhBDDwrhGsQnRBQHHMHHMNJMZFCFRbCRftMM",
	"zjjlmjqfdTqlWdzTqmLzlzVjNCHJNHNFMFtbJNZgVNMMCCtN",
	"vPTfLmPTLWBsPDnSscnS",
	"ngznwDPPTzhPPDCTQnTTDQBQqHNNrHFVppbbjRFFqFhHqRqr",
	"tZJtcGsGtLLcctRqVBbbqrspbHNq",
	"BmZSvGBMdWPzMPgnnz",
	"MpNWPVNWWZWVVNZHVcvJjgBjJMStMJSjjg",
	"rzdCzrCTTLRCslvJDSjjdScgDm",
	"RLhCQzqTCssThRQzRzwGQrrCFffbfWppNpWNWVcHqZbHpVPp",
	"zQzCVWdSSjCdjpchWcGftflGZcgG",
	"RwnJTJwmvFHTBFmtBccZZfBGMstllM",
	"wwvvHRwqDnHFrmqnrSbQVVQfSbqQjbqjbQ",
	"ttDftStSlftPgSHmJbFwnMnFwzbrLHMMzz",
	"GqTBqhBqBvppBvMMTznrCbCnLwfr",
	"RBjjpZZvvZqGcNhjjpNmDPfDcsgfDfgScsQQQg",
	"rsSFccvBHppHPsvQrSHSprFjnbLGdbzLfbGLLtLjjzLzvl",
	"JWWJhmwwTDTGtnzlhdbtLG",
	"CWNqWRNCwnCJVppQFFFFNrgHBB",
	"MSRVnMjnVRVnPlcsrtMtschgDl",
	"NWHBwJBwBBQCHHqwWQGBNgdrFFtsthcqdltdDsqttq",
	"CCTTGCNCCBfNJNNWbGGnvVzDSRfDRSZvLPSzRn",
	"MpRfjRjWpZzzzRzZSpjzZjTCQcGdHLWNGqdBdcBWWBLccn",
	"lrbrsPQDPQglDtwggcLCqnCdNNdHBLsqNd",
	"blwbJggvgbwlvQbvtgwmvVwRfTzfMMjFVfSFjZjMTSTSzj",
	"ttSGjHWVrwWrWWvhzvhmhDfR",
	"qMBdNNsccQgfDRzRmqlhRl",
	"gQJdfJPdQBsMggMjPrTCLjrGrCrtVT",
	"tGFdlwDwGFdNtStghWWdQFSnTVfCfZhrfVTVCVprnRRhVn",
	"cLsBPQJsQPmbmPHTnRRnHprCVfns",
	"MjmvPqqQjPbQzjLwwDWDSlzSlGSgwl",
	"NSCpFgfbscbZZZwrtgPZJT",
	"zGCQlVGmmQGVqqJwGtHZGrPHHRTH",
	"qQvVmvzmqCdhhjzCQLjljLQMnMDSFWcSfnMfpbfnNcFFbFDN",
	"zFgqjQBmWNlWlfHrHdLc",
	"wnbCpSSZZTJSJSnmdrtHfGtftlcpltpH",
	"ZSwhVPPJgNVmNFzs",
	"WNVJthVHRRfLqpqN",
	"gdCGcCgJBCrgScRLzbjQQLfRRR",
	"SCFdGSFvlhTJsnvW",
	"FFZwFZZwRmFFhHtNLNLGRtsqjLMt",
	"gbDnnrMbMCffMPbPLNjGNlcppNtspp",
	"rgbzrzDrgVgnrBzFWMWmWBwHWHShSB",
	"zjRVjDqzRjvSBnBGGsfsrFsV",
	"fLccLLZpJMctwJWWWJWpJGCwFwsgnngFBPsCnnTBPT",
	"LbJlZNWMtpMlHRNHzdfSDfdj",
	"VGbbnJGSTsVTssTTnVVWMtfBBmvftRHfHBMJJfZp",
	"ghqtrzgPrjdzQCjmZMHfRHZHBmQmmB",
	"gltFtDqFVlTVWlTl",
	"HqNqZDTvNvVTLPSTvzfrfHfdndffwnbdnwrH",
	"MpSJlFcMJmcpFlmClcMcRnWbWtthrnfwnCGrrWfrwC",
	"RjcJJmSFMRQpMRFjMNVvTZjNPPvLTBPBBB",
	"MzClDtlzJzFzNGGm",
	"bjcLRHlTBsFJGmRm",
	"HcPSSfTSpLZLbSwtrtvMnlDCDPCl",
	"gWWgQJCsVhgRLCWsdjpmcBHvfvrrnvCvBB",
	"TqDtztqtStlbNTPtllqZpvmcFHjNjvjNvHvmrrmj",
	"ztPPGZqTPSbJgchGgwRQgQ",
	"wVrdtTqtCCvbNgbNTTDN",
	"mhGzWhGzMGWGrRmbFLBHZRNHNvZvgB",
	"hhGhShpnsSrqVCVSSj",
	"HnlbmGnlHZHnlBcjgwfDVfwLsGLGLDgR",
	"WhWMWTvQPWPLDMFRCDMsVD",
	"QdzJQPSPZqJnJRnZ",
	"TTjTjFBcRBGjwsDTBLmrCftfRVrrCftCVNRP",
	"WnqbJWnnQJhSqVfVPfDnggfrVN",
	"hSlDMllvhbQqllZlSWQdSQTBjsFHBjTwGdHBTBszLzcc",
	"rNWqWDLZWcqFqLLLgQQJnndnQdNzzJVMzd",
	"cPtsPvChtRsGswHPGbwcPcdVnpzvnmBmVvJBJdJVJdzn",
	"PfRfRGtsHsSRftbbbbHhwCCsjZgSTgSZWDTcgDZjLqgqFWLq",
	"BNzPnPJNNMwHJRhBGRWRdjFQddFlFjWd",
	"npbZrgnLSCSrWFjjdlZGlcDF",
	"gqtmmngSbmgHJqfqzNBHBJ",
	"stgzttBPRRRdpSVVpdpS",
	"WJFcLQmJZHcCFLJmcZLMfbpGSWMNpGftSSpMrb",
	"mcvvQvHmtLCJmHZQHZHCDHJJnjqPjjPzwvwhnwPqTjPBzPnB",
	"DDmbbPqgFSbSQPtPQJttrltJ",
	"CRfcnZWmRRhJNVtsVnQlsp",
	"fcBvWvWzcZWCzTTCTTvccFMBHGDdSwGFFbqwFSGSmF",
	"tCRBPCPRjzsJszBmtjmCvSpHcppJpvZdHHHcHZJG",
	"qbrlLnWlQDQDNvmHHHHcrZZvdm",
	"nmnWnnWmgQsCFzFCRVCg",
	"sHMHCDZfcwMcRcLMcZDCRCHMPdJqgjvVdvqgdgfdJbQgvWQb",
	"FFhTzmzGrnmtjTBjBBprrmFtqGgQqvVdPbbgqQQWJvvWJQqV",
	"TrNjrnFSlwNZNlNL",
	"JQGdsdzSzsdFQFSdssnndNlZjNPTJZNljVjTPhVPhT",
	"GgGLfRmHGLhNVjjNTLhV",
	"HvGvwpbHHRwpBrvBgSSzSFndtzndCrsFMd",
	"DptFshMrhDhDwmPPhwSNhmmS",
	"RLdcdRvBjnvRVcvlcLbCcbCwwpGBwSmfZqqPPPPwzmfqZq",
	"VlRLvVjCJLnlpvvRdllLcJJWDHgMMHDDHtWFFDDQgH",
	"SsSdrndpDlCdLftd",
	"VGPVJgmQrVGHHZfwLlfCTmfwlDlT",
	"PcJHcGgcWWbJpjRrphRbFpRn",
	"PdPSMHMLzPPSShBdffMMzMRHQQrpppcqTCQQpCccTGTRCnCQ",
	"vsbWmFbmJmZFFsmsbfpGVrGnWrrpVpnnVcTV",
	"JZslstfZNNSSPdlSMwlM",
	"bLLzRzZLbRqJJrDGGVZdwssDvGQw",
	"FCtNJlTFtmPfldSvDvQFVVsjSv",
	"PmCPHBhhPpWLWgzgHJ",
	"qwmwFHCgPgPPqPwMCrHHFBVVRBttVRRffVfmsjVNNB",
	"WSvcSnvbSWbhcbjlQbvlSQhlfBGcspVVsVGfVscpzpNcpBtN",
	"hJSLhlvlTjPFHMLCCq",
	"bggDpTggncGVVWbQcG",
	"sRvSwwwFBSpFzvRvMFZqmPmMVqmcmPPVqhqqWq",
	"SRBBrFZZwrddBFRjlptnLgDnTggdtd",
	"PPfMcZMflbMQcMllPVfTVMwjWWmZvpWWpWhhjjpdWWww",
	"sDQNnzsnQgDNsFzFqtGjGmWWSpWrGhdpvphdSW",
	"nNQNqLBHLqzDnHgnVJfPJPCRBbfCcJlT",
	"fppppWsjcSDPjjDpGhgwbfTgHTCbHJwbHbTR",
	"rLBdQnvMNMmFPbLqHqTqgLHCgL",
	"nrFznvMNMQdttrBcScsDstWcPGtWSc",
	"lclnRSDnGZtvSwnZDZzhLffqdsCNwTBCBBdNsd",
	"mPjmjmrFFpmQjMJQjlNdlhCsCLsTlNLs",
	"ggmrHHVVQVPJpWrgpWScRvzZzGGRnZvlgzZn",
	"GjGJGQJGcMTVfFDQzNVQzP",
	"mHqdbmmdnJqVzVhRVNzPbR",
	"wStmHJsJsLZLjTvM",
	"QssMbVGdMQjZPjwVwHVZPZClllvgSgvlTgwwSSCgSCtC",
	"WmmFBmJrcFRBFrJJBFchzWCStgCTgvhvTlfsNqfTlvTv",
	"sFzzssDLzrBPjDVVddHMQD",
	"fztDZSGrNrlnbnPTgFFpln",
	"jvvQMMcLcjJmQwHdJvjQJnnbTbRFRphnnpsWgmFRPR",
	"vTLHHCQLHBBjJCSZrVCZtSfSfrft",
	"gHfHffHLjwHrRjLrLRZVMnTdTBsNTBwTVBsBnN",
	"DWPhqhhDhvSGvWPzSzMBQBQVMMBBmvssvQvQ",
	"CDGbqCDbChSbWGrHcHRgbcVcfrLJ",
	"frlTLmtllbbbdpJS",
	"qFjhzjThjHTFGHTjqhhjMzBhVpVpdbBnSJQRpBnVVdbRRQJd",
	"vjWPWjWPPPWgwmfCrNvTvZ",
];

const a_charCode = "a".charCodeAt(0);
const A_charCode = "A".charCodeAt(0);
const z_charCode = "z".charCodeAt(0);

function getRepeatedCharacter(items) {
	const charCount = {};

	for (let item of items) {
		let itemUniqueChar = {};
		const splitCharsItem = item.split("");
		for (let char of splitCharsItem) {
			if (!itemUniqueChar[char]) {
				itemUniqueChar[char] = true;
	
				if (!charCount[char]) {
					charCount[char] = 1;
				} else {
					charCount[char]++;
				}
			}
		}
	}

	for (let char of Object.keys(charCount)) {
		if (charCount[char] === items.length) {
			return char;
		}
	}

	return undefined;
}

function getPriority(char) {
	const charCode = char.charCodeAt(0);
	if (charCode >= a_charCode && charCode <= z_charCode) {
		return charCode - a_charCode + 1;
	} else {
		return 26 + charCode - A_charCode + 1;
	}
}

let totalPriority = 0;

function part1() {
    totalPriority = 0;
    for (let rucksack of rucksacks) {
        const compartmentSize = rucksack.length/2;
        const items1 = rucksack.substring(0, compartmentSize);
        const items2 = rucksack.substring(compartmentSize);
    
        const repeatedChar = getRepeatedCharacter([items1, items2]);
    
        const priority = getPriority(repeatedChar);
    
        totalPriority += priority;
    }
    console.log(totalPriority);
}

function part2() {
    totalPriority = 0;
    for (let loop = 0; loop < rucksacks.length; loop += 3) {
        const rucksacksGroup = [
            rucksacks[loop],
            rucksacks[loop + 1],
            rucksacks[loop + 2]
        ];
    
        const repeatedChar = getRepeatedCharacter(rucksacksGroup);
    
        const priority = getPriority(repeatedChar);
    
        totalPriority += priority;
    }
    console.log(totalPriority);
}

// 8153
part1();
// 2342
part2();
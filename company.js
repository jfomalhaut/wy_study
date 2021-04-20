import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
import { getDataByType, parseTelegramDataByType } from 'services/connect';
import Moment from 'moment';
// reactstrap components
import {
	Button,
	ButtonGroup,
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	Label,
	FormGroup,
	Input,
	Table,
	Row,
	Col,
	UncontrolledTooltip,
} from 'reactstrap';

// core components
import { datalist } from 'variables/variable.js';

class CompanyProduct extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			CompanySearch_NEXTKEY_ENR_SNO_N9: '',
			CompanySearch_GRID1_ROWCOUNT: '',
			CompanySearch_GRID1_LIST: [],

			companyInfo_BBR_NM: '',
			companyInfo_SCIG_RJT_ENR_YN_S1: '',
			companyInfo_RM_RJT_ENR_YN_S1: '',
			companyInfo_BLF_MEMB_GR_NM: '',
			companyInfo_NICE_BNE_NO: '',
			companyInfo_NICE_BNE_ABV_NM: '',
			companyInfo_NICE_BNE_NM: '',
			companyInfo_NICE_BNE_WREN_NM: '',
			companyInfo_NICE_BNE_CHCR_NM: '',
			companyInfo_NICE_RPSR_NM: '',
			companyInfo_NICE_RPSR_WREN_NM: '',
			companyInfo_NICE_RPSR_CHCR_NM: '',
			companyInfo_NICE_FNS_TC: '',
			companyInfo_SOA_MM_INF_S20: '',
			companyInfo_ING_DT: '',
			companyInfo_EST_DT: '',
			companyInfo_LSG_DT: '',
			companyInfo_NICE_EPR_OPB_DTT_KR_NM_S100: '',
			companyInfo_NICE_EPR_OPB_DTT_WREN_NM_S100: '',
			companyInfo_NICE_EPR_SHE_DTT_KR_NM_S100: '',
			companyInfo_NICE_EPR_SHE_DTT_WREN_NM_S100: '',
			companyInfo_NICE_EPR_SCL_KR_NM_S100: '',
			companyInfo_NICE_EPR_SCL_WREN_NM_S100: '',
			companyInfo_BNE_EMP_NBR: '',
			companyInfo_BNE_EMP_NBR_BSE_YM: '',
			companyInfo_HFC_ZIP: '',
			companyInfo_HFC_ADDR: '',
			companyInfo_HFC_RDNM_ADDR_S300: '',
			companyInfo_HFC_WREN_ADDR: '',
			companyInfo_HFC_WREN_RDNM_ADDR_S300: '',
			companyInfo_HFC_IFM_ADDR: '',
			companyInfo_HFC_TPN: '',
			companyInfo_HFC_FAX_NO: '',
			companyInfo_BPL_ZIP: '',
			companyInfo_BPL_ADDR: '',
			companyInfo_BPL_RDNM_ADDR_S300: '',
			companyInfo_BPL_WREN_ADDR: '',
			companyInfo_BPL_WREN_RDNM_ADDR_S300: '',
			companyInfo_BPL_IFM_ADDR: '',
			companyInfo_BPL_TPN: '',
			companyInfo_BPL_FAX_NO: '',
			companyInfo_FCTY_ZIP: '',
			companyInfo_FCTY_ADDR: '',
			companyInfo_FCTY_RDNM_ADDR_S300: '',
			companyInfo_FCTY_WREN_ADDR: '',
			companyInfo_FCTY_WREN_RDNM_ADDR_S300: '',
			companyInfo_FCTY_IFM_ADDR: '',
			companyInfo_FCTY_TPN: '',
			companyInfo_FCTY_FAX_NO: '',
			companyInfo_MRL_DWU_DT: '',
			companyInfo_MRL_FLX_DT: '',
			companyInfo_NICE_MTR_BNK_C: '',
			companyInfo_NICE_MTR_BNK_NM: '',
			companyInfo_NICE_MTR_BNK_WREN_NM: '',
			companyInfo_NICE_BNK_BR_NM: '',
			companyInfo_BNE_EMP_NBR_KR_INF_S100: '',
			companyInfo_BNE_EMP_NBR_WREN_INF_S100: '',
			companyInfo_NICE_MTR_BNK_KR_INF_S100: '',
			companyInfo_NICE_MTR_BNK_WREN_INF_S100: '',
			companyInfo_NICE_GRP_NO: '',
			companyInfo_GRP_NM: '',
			companyInfo_GRP_WREN_NM: '',
			companyInfo_GRP_KR_INF_S100: '',
			companyInfo_GRP_WREN_INF_S100: '',
			companyInfo_STD_IDS_CLSF_C: '',
			companyInfo_NICE_IDS_NM: '',
			companyInfo_NICE_IDS_WREN_NM: '',
			companyInfo_NICE_IDS_KR_INF_S100: '',
			companyInfo_NICE_IDS_WREN_INF_S100: '',
			companyInfo_LBUN_EXIS_YN: '',
			companyInfo_HMP_CONE: '',
			companyInfo_LST_CHG_DTM: '',
			companyInfo_TRD_UNQ_NO: '',
			companyInfo_NICE_BNE_MN_MFT_NM: '',
			companyInfo_MN_MFT_WREN_NM: '',
			companyInfo_BRN: '',
			companyInfo_CRN: '',
			companyInfo_LST_CHG_USID: '',
			companyInfo_LST_CHG_USR_NM: '',
			companyInfo_LST_CHG_INF_CONE: '',
			companyInfo_STK_STITM_C: '',
			companyInfo_STK_STITM_WREN_NM: '',
			companyInfo_STK_STITM_NM: '',
			companyInfo_PRPR_AMT_S20: '',
			companyInfo_NICE_STK_MAK_TC_NM_S200: '',
			companyInfo_BSE_DT: '',
			companyInfo_EDPR_PR: '',
			companyInfo_COB_SYN_EVL_GR_NM: '',
			companyInfo_NTN_CRD_EVL_IST_NM: '',
			companyInfo_EVL_DT: '',
			companyInfo_NICE_EPR_BILL_COB_EVL_DTT_NM: '',
			companyInfo_FAF_BSE_DT: '',
			companyInfo_AVL_DT: '',
			companyInfo_EPR_BILL_EVL_GR_NM: '',
			companyInfo_NTN_CRD_EVL_IST_NM4: '',
			companyInfo_EVL_DT4: '',
			companyInfo_NICE_EPR_BILL_COB_EVL_DTT_NM4: '',
			companyInfo_FAF_BSE_DT4: '',
			companyInfo_AVL_DT4: '',
			companyInfo_KED_CRD_GR_C_NM: '',
			companyInfo_EVL_DT5: '',
			companyInfo_EPR_INF_DTL_C: '',
			companyInfo_AFL_NM: '',
			companyInfo_SB_FIT_NM: '',
			companyInfo_TR_OPG_DT: '',
			companyInfo_TR_OPG_BSE_CONE: '',
			companyInfo_INQ_CNT: '',
			companyInfo_ADT_RLT_MERS_DT: '',
			companyInfo_GRID1_ROWCOUNT: '',
			companyInfo_GRID1_LIST: '',
			companyInfo_FAF_BSE_DT: '',
			companyInfo_NICE_ADT_OPNN_C_NM: '',
			companyInfo_TOT_AST_AMT: '',
			companyInfo_ECA_AMT: '',
			companyInfo_CPIT_AMT: '',
			companyInfo_RVN_AMT: '',
			companyInfo_SLS_PFT_AMT: '',
			companyInfo_NPFT_AMT_N16: '',
			companyInfo_NICE_HUMA_HDO_TC: '',
			companyInfo_NICE_HUMA_NO: '',
			companyInfo_EAR_AFC_MNG_TGT_BNE_YN_S1: '',
			companyInfo_IDS_EVL_C: '',
			companyInfo_IDS_EVL_C_NM: '',
			companyInfo_IDS_SGN_C: '',
			companyInfo_IDS_EVL_SGN_NM: '',
			companyInfo_IDS_EVL_MPN_BSE_C: '',
			companyInfo_TOB_C_S4: '',
			companyInfo_IDS_EVL_DFN_DT: '',
			companyInfo_CST_CRD_GR_NM: '',
			companyInfo_CRD_EVL_DT: '',
			companyInfo_MO_EPR_IDS_SGN_NM: '',
			companyInfo_MO_EPR_LMT_EPR_UTZ_DRCN_NM: '',
			companyInfo_ENR_RSN: '',

			CA_companyInfo_EPR_CNO: '',
			CA_companyInfo_ECY_CST_DCM_NO: '',
			CA_companyInfo_DOME_EPR_CST_DCM_NO_TC: '',
			CA_companyInfo_DOME_EPR_TDR_TC: '',
			CA_companyInfo_PRV_BRN: '',
			CA_companyInfo_CST_KR_NM: '',
			CA_companyInfo_CST_KR_ABV_NM: '',
			CA_companyInfo_CST_WREN_NM: '',
			CA_companyInfo_CST_WREN_ABV_NM: '',
			CA_companyInfo_RSP_TC: '',
			CA_companyInfo_TBN_BBR_C: '',
			CA_companyInfo_BBR_NM: '',
			CA_companyInfo_CST_FORC_ENR_YN: '',
			CA_companyInfo_CST_BZ_PRC_STG_TC: '',
			CA_companyInfo_CST_STS_C: '',
			CA_companyInfo_CBN_YN: '',
			CA_companyInfo_WCH_CTL_FLTG_RLT_C: '',
			CA_companyInfo_WCH_CTL_ENR_APV_DT: '',
			CA_companyInfo_WCH_CTL_ENR_PEM_NO: '',
			CA_companyInfo_CST_TXN_C: '',
			CA_companyInfo_CRP_DP_FEE_TGT_TC: '',
			CA_companyInfo_DETS_ISR_BIND_TGT_YN: '',
			CA_companyInfo_CRN: '',
			CA_companyInfo_NNT_ISO_NTN_SYM_C: '',
			CA_companyInfo_NNT_NTN_NM: '',
			CA_companyInfo_JNT_RPS_EXIS_YN: '',
			CA_companyInfo_STD_IDS_CLSF_C: '',
			CA_companyInfo_BPL_STD_IDS_CLSF_C_NM: '',
			CA_companyInfo_EST_DT: '',
			CA_companyInfo_DOME_EPR_PSMT_CADR_TC: '',
			CA_companyInfo_BPL_ADDR_TC: '',
			CA_companyInfo_BPL_ZIP: '',
			CA_companyInfo_BPL_ZCA: '',
			CA_companyInfo_BPL_BZCA: '',
			CA_companyInfo_HFC_ADDR_TC: '',
			CA_companyInfo_HFC_ZIP: '',
			CA_companyInfo_HFC_ZCA: '',
			CA_companyInfo_HFC_BZCA: '',
			CA_companyInfo_XPOR_ADDR_TC: '',
			CA_companyInfo_XPOR_ZIP: '',
			CA_companyInfo_XPOR_ZCA: '',
			CA_companyInfo_XPOR_BZCA: '',
			CA_companyInfo_XPOR_TL_ARC: '',
			CA_companyInfo_XPOR_TL_PON: '',
			CA_companyInfo_XPOR_TL_IDV_NO: '',
			CA_companyInfo_DOME_WREN_ADDR_TC: '',
			CA_companyInfo_DOME_WREN_ADDR_ZIP: '',
			CA_companyInfo_DOME_WREN_ZCA: '',
			CA_companyInfo_DOME_WREN_BZCA: '',
			CA_companyInfo_BPL_NRR_ABD_ISO_NTN_SYM_C: '',
			CA_companyInfo_BPL_NRR_ABD_WREN_ZCA: '',
			CA_companyInfo_BPL_NRR_ABD_WREN_BZCA: '',
			CA_companyInfo_BPL_NRR_ABD_TPN: '',
			CA_companyInfo_CAD_RCVS_ADDR_TC: '',
			CA_companyInfo_CAD_RCVS_ZIP: '',
			CA_companyInfo_CAD_RCVS_ZCA: '',
			CA_companyInfo_CAD_RCVS_BZCA: '',
			CA_companyInfo_CAD_RCVS_MOTP_JIN_NO: '',
			CA_companyInfo_CAD_RCVS_MOTP_PON: '',
			CA_companyInfo_CAD_RCVS_MOTP_IDV_NO: '',
			CA_companyInfo_CAD_RCVS_MTC_CPN_CLSF_C: '',
			CA_companyInfo_MIL_RMS_YN: '',
			CA_companyInfo_MIL_NTI_TR_INF_RMS_YN: '',
			CA_companyInfo_MIL_NTI_MKT_INF_RMS_YN: '',
			CA_companyInfo_TL_RMS_YN: '',
			CA_companyInfo_TL_NTI_TR_INF_RMS_YN: '',
			CA_companyInfo_TL_NTI_MKT_INF_RMS_YN: '',
			CA_companyInfo_TL_ARC: '',
			CA_companyInfo_TL_PON: '',
			CA_companyInfo_TL_IDV_NO: '',
			CA_companyInfo_TL_CADR_TC: '',
			CA_companyInfo_SMS_SVC_RMS_YN: '',
			CA_companyInfo_SMS_NTI_TR_INF_RMS_YN: '',
			CA_companyInfo_SMS_NTI_MKT_INF_RMS_YN: '',
			CA_companyInfo_MOTP_JIN_NO: '',
			CA_companyInfo_MOTP_PON: '',
			CA_companyInfo_MOTP_IDV_NO: '',
			CA_companyInfo_FAX_RMS_YN: '',
			CA_companyInfo_FAX_ARC: '',
			CA_companyInfo_FAX_PON: '',
			CA_companyInfo_FAX_IDV_NO: '',
			CA_companyInfo_EML_RMS_YN: '',
			CA_companyInfo_EML_NTI_TR_INF_RMS_YN: '',
			CA_companyInfo_EML_NTI_MKT_INF_RMS_YN: '',
			CA_companyInfo_EML_ADDR: '',
			CA_companyInfo_MIL_SDB_YN: '',
			CA_companyInfo_FAX_SDB_YN: '',
			CA_companyInfo_EML_SDB_YN: '',
			CA_companyInfo_TL_INB_YN: '',
			CA_companyInfo_HMP_ADDR: '',
			CA_companyInfo_CST_MMO_CONE: '',
			CA_companyInfo_MN_MFT_NM: '',
			CA_companyInfo_PSN_SHE_C: '',
			CA_companyInfo_EPR_SHE_C: '',
			CA_companyInfo_ABD_CPIT_IV_YN: '',
			CA_companyInfo_LTM_SPR_CST_YN: '',
			CA_companyInfo_SDC_TCS_TOB_YN: '',
			CA_companyInfo_BNK_LW_MXM_SHR_YN: '',
			CA_companyInfo_FXC_MTR_BNK_C: '',
			CA_companyInfo_FXC_MTR_BNK_NM: '',
			CA_companyInfo_MNYD_RSK_MNG_XCN_SMSC_YN: '',
			CA_companyInfo_MNYD_MNG_XCN_SMSC_CER_DT: '',
			CA_companyInfo_REL_TP_FNN_EPR_YN: '',
			CA_companyInfo_REL_TP_PAC_CNCL_DT: '',
			CA_companyInfo_IMD_FIT_IST_C: '',
			CA_companyInfo_RSRV_EOMS_YN: '',
			CA_companyInfo_SOA_BSE_YY: '',
			CA_companyInfo_RCN_YY_RVN_AMT: '',
			CA_companyInfo_AVR_RVN_AMT: '',
			CA_companyInfo_RSRV_EOMS_APN_ADM_YN: '',
			CA_companyInfo_RSRV_EOMS_APN_ADM_PES_NO: '',
			CA_companyInfo_KDBVS_YN: '',
			CA_companyInfo_KDB_SKL_EPR_YN: '',
			CA_companyInfo_KDBGS_YN: '',
			CA_companyInfo_GBL_CH200_YN: '',
			CA_companyInfo_WC300_CRP_EPR_YN: '',
			CA_companyInfo_WC300_CRP_EPR_STOP_YN: '',
			CA_companyInfo_SPL_SPT_TGT_EPR_DCLS_C1: '',
			CA_companyInfo_SPL_SPT_TGT_EPR_DCLS_C2: '',
			CA_companyInfo_MSS_RCD_CRP_EPR_YN: '',
			CA_companyInfo_AHPEK_RCD_CRP_EPR_YN: '',
			CA_companyInfo_EXP_EPR_YN: '',
			CA_companyInfo_AVR_RWM_DPN_RT: '',
			CA_companyInfo_RWM_AVR_DEPE_CPUT_BSE_C: '',
			CA_companyInfo_RWM_AVR_DEPE_CPUT_DT: '',
			CA_companyInfo_HFC_YN: '',
			CA_companyInfo_MO_EPR_CNO: '',
			CA_companyInfo_MO_EPR_CST_NM: '',
			CA_companyInfo_HFC_NM: '',
			CA_companyInfo_NICE_BNE_NO: '',
			CA_companyInfo_NICE_BNE_NM: '',
			CA_companyInfo_BIS_BRR_DGC_C: '',
			CA_companyInfo_EPR_SCL_C: '',
			CA_companyInfo_LCP_SHE_TC: '',
			CA_companyInfo_SMSC_SHE_TC: '',
			CA_companyInfo_ETC_EPR_SHE_TC: '',
			CA_companyInfo_SMSC_GRAE_YN: '',
			CA_companyInfo_SMSC_GRAE_AVL_DT: '',
			CA_companyInfo_PRMG_SMSC_YN: '',
			CA_companyInfo_PRMG_SMSC_AVL_DT: '',
			CA_companyInfo_SKL_INV_EPR_YN: '',
			CA_companyInfo_SKL_INV_EPR_AVL_END_DT: '',
			CA_companyInfo_ADON_INV_SELN_YN: '',
			CA_companyInfo_ADON_INV_SELN_AVL_TLM_DT: '',
			CA_companyInfo_VBN_YN: '',
			CA_companyInfo_VBN_AVL_END_DT: '',
			CA_companyInfo_CTEG_SKL_HLD_EPR_YN: '',
			CA_companyInfo_SIXT_TC: '',
			CA_companyInfo_BSE_YY1: '',
			CA_companyInfo_BSE_YY2: '',
			CA_companyInfo_BSE_YY3: '',
			CA_companyInfo_EPM_ISR_NSR_NOP_NBR: '',
			CA_companyInfo_EPM_ISR_NSR_NOP_NBR1: '',
			CA_companyInfo_EPM_ISR_NSR_NOP_NBR2: '',
			CA_companyInfo_EXC_TGT_YN: '',
			CA_companyInfo_ENR_EXC_RSN: '',
			CA_companyInfo_SPC_TC: '',
			CA_companyInfo_SPC_ACL_STD_IDS_CLSF_C: '',
			CA_companyInfo_SPC_ACL_STD_IDS_CLSF_NM: '',
			CA_companyInfo_ACL_BRR_CNO: '',
			CA_companyInfo_ACL_BRR_NM: '',
			CA_companyInfo_FND_CST_YN: '',
			CA_companyInfo_FND_EST_FDTN_LW_TC: '',
			CA_companyInfo_FLZ_TR_TP_TC: '',
			CA_companyInfo_FLZ_SRU_TC: '',
			CA_companyInfo_GTH_IV_ORN_TP_TC: '',
			CA_companyInfo_ADON_PTP_FND_YN: '',
			CA_companyInfo_AFL_C: '',
			CA_companyInfo_AFL_NM: '',
			CA_companyInfo_MTR_BNK_C: '',
			CA_companyInfo_MTR_BNK_NM: '',
			CA_companyInfo_LSG_TC: '',
			CA_companyInfo_FSC_ADT_TC: '',
			CA_companyInfo_SOA_MD: '',
			CA_companyInfo_BSE_YY: '',
			CA_companyInfo_CPIT_AMT: '',
			CA_companyInfo_SFD_AMT: '',
			CA_companyInfo_TDI_CST_TC: '',
			CA_companyInfo_BIC_C: '',
			CA_companyInfo_BIC_WREN_NM: '',
			CA_companyInfo_BLF_MEMB_NM: '',
			CA_companyInfo_INTE_EMP_USID: '',
			CA_companyInfo_INTE_EMP_NM: '',
			CA_companyInfo_INTE_EMP_REL_C: '',
			CA_companyInfo_CST_MNG_BBR_NM: '',
			CA_companyInfo_DP_MNG_BBR_NM: '',
			CA_companyInfo_CST_NW_DT: '',
			CA_companyInfo_CST_NW_BBR_NM: '',
			CA_companyInfo_CST_NW_CHN_NM: '',
			CA_companyInfo_LST_CHG_DT: '',
			CA_companyInfo_LST_CHG_BBR_NM: '',
			CA_companyInfo_LST_CHGPE_NM_S30: '',
			CA_companyInfo_RSK_EVL_TC: '',
			CA_companyInfo_CRP_ARN_STS_TC: '',
			CA_companyInfo_CRP_ARN_STS_DECS_DT: '',
			CA_companyInfo_BPL_NRR_ABD_LCT_NTN_NM_S100: '',
			CA_companyInfo_GRID_ROWCOUNT: '',
			CA_companyInfo_GRID_LIST: [],
			CA_mainDetail_INL_CUN_NO: '',
			CA_mainDetail_TAF_SNO: '',
			CA_mainDetail_EPR_LN_APV_SUBJ_NO: '',
			CA_mainDetail_TAF_RQS_TC: '',
			CA_mainDetail_ASJ_C: '',
			CA_mainDetail_PRD_NM: '',
			CA_mainDetail_PRD_TP_TC: '',
			CA_mainDetail_PRD_FRS_TC: '',
			CA_mainDetail_PRD_USG_TC: '',
			CA_mainDetail_PRD_TNQ_TC: '',
			CA_mainDetail_CUR_C: '',
			CA_mainDetail_LD_RQS_AMT: '',
			CA_mainDetail_LN_TRM_YYS: '',
			CA_mainDetail_LN_TRM_MM_NBR: '',
			CA_mainDetail_LN_TRM_DDS: '',
			CA_mainDetail_DFM_TRM_YYS: '',
			CA_mainDetail_DFM_TRM_MM_NBR: '',
			CA_mainDetail_DFM_TRM_DDS: '',
			CA_mainDetail_PRA_REPA_MANR_C: '',
			CA_mainDetail_PRA_YRRPM_NOT: '',
			CA_mainDetail_INT_PAIN_MANR_TC: '',
			CA_mainDetail_INT_PAIN_CLE_MH_NBR: '',
			CA_mainDetail_IDV_LMT_TC: '',
			CA_mainDetail_MGE_KD_TC: '',
			CA_mainDetail_NICE_BNE_NO: '',
			CA_mainDetail_FSC_TC: '',
			CA_mainDetail_CNO: '',
			CA_mainDetail_IRT_DECS_SNO: '',
			CA_mainDetail_TAF_PRG_STS_C: '',
			CA_mainDetail_LMT_MNG_MANR_C: '',
			CA_mainDetail_CDCH_PRC_CONE: '',
			CA_mainDetail_TLXT_TC: '',
			CA_mainDetail_XTS_TRM_YYS: '',
			CA_mainDetail_XTS_TRM_MM_NBR: '',
			CA_mainDetail_XTS_TRM_DDS: '',
			CA_mainDetail_AST_BYR_CNO: '',
			CA_mainDetail_BLM_TC: '',
			CA_mainDetail_LMT_STS_TC: '',
			CA_mainDetail_IRT_ALY_TC: '',
			CA_mainDetail_PUA_ADT_LN_BYCL_C: '',
			CA_mainDetail_PUE_EPR_CNO: '',
			CA_mainDetail_PUE_EPR_INL_CUN_NO: '',
			CA_mainDetail_PUE_EPR_TAF_SNO: '',
			CA_mainDetail_LKAG_IRT_RT: '',
			CA_mainDetail_RCD_ENR_NO: '',
			CA_mainDetail_ADJ_BF_APV_AMT: '',
			CA_mainDetail_APV_IND_AMT: '',
			CA_mainDetail_APV_PRC_DT: '',
			CA_mainDetail_FN_MCTC_DT: '',
			CA_mainDetail_LQVL_MGE_RATO: '',
			CA_mainDetail_FNO_UDW_TC: '',
			CA_mainDetail_FNO_UDW_RNG_TC: '',
			CA_mainDetail_FNO_UDW_TGT_TC: '',
			CA_mainDetail_BSE_IRT_TC: '',
			CA_mainDetail_ACL_BRR_CNO: '',
			CA_mainDetail_FRGN_MNYD_LMT_SBT_RATO: '',
			CA_mainDetail_OFG_MANR_C: '',
			CA_mainDetail_TOT_AST_AMT: '',
			CA_mainDetail_RVN_AMT: '',
			CA_mainDetail_LGD_RATO: '',
			CA_mainDetail_RQM_SFD_RATO: '',
			CA_mainDetail_EAD_AMT: '',
			CA_mainDetail_IDP_TGT_YN: '',
			CA_mainDetail_MGE_ACT_NO: '',
			CA_mainDetail_BLT_CUR_C: '',
			CA_mainDetail_CRK_ALE_RATO: '',
			CA_mainDetail_TR_MPL_BBR_C: '',
			CA_mainDetail_PAR_AMT: '',
			CA_mainDetail_APV_AMT_IND_TC: '',
			CA_mainDetail_LTM_TR_CST_YN: '',
			CA_mainDetail_NTL_CTT_NO: '',
			CA_mainDetail_APF_RQM_SFD_RATO: '',
			CA_mainDetail_AOE_LSS_DSH_RT: '',
			CA_mainDetail_USG_XCP_USE_CKG_TGT_YN: '',
			CA_mainDetail_ISR_JIN_RATO: '',
			CA_mainDetail_EOMS_CNFM_MANR_TC: '',
			CA_mainDetail_RCD_EPR_CNO: '',
			CA_mainDetail_PRMG_WK_ABUS_TC: '',
			CA_mainDetail_CA_tcb_ISN_NO: '',
			CA_mainDetail_NW_GRW_GCL_C: '',
			CA_mainDetail_ABCP_YN: '',
			CA_mainDetail_BLT_MPL_DT: '',
			CA_mainDetail_LEL_LMT_YN: '',
			CA_mainDetail_ASO_CNO: '',
			CA_mainDetail_ATP_PUB_QTY: '',
			CA_mainDetail_ATP_UDW_QTY: '',
			CA_mainDetail_SCRS_ACQ_RSN_C: '',
			CA_mainDetail_RQS_DT: '',
			CA_mainDetail_IDP_C: '',
			CA_mainDetail_PRD_C: '',
			CA_mainDetail_LST_CHG_USID: '',
			CA_mainDetail_BSE_IRT_FLX_CLE_TC: '',
			CA_mainDetail_COV_IRT_ALY_YYS_N6: '',
			CA_mainDetail_COV_IRT_ALY_MM_NBR: '',
			CA_mainDetail_CNCD_APV_SUBJ_NO_S15: '',
			CA_mainDetail_ABDA_RSV_RT: '',
			CA_mainDetail_LST_CHG_USR_NM: '',
			CA_mainDetail_NW_GRW_GCL_C_NM_S150: '',
			CA_mainDetail_SCRS_ACQ_RSN_NM_S300: '',
			CA_mainDetail_PUE_EPR_CST_NM_S100: '',
			CA_mainDetail_PRMG_WK_ABUS_DTT_NM_S100: '',
			CA_mainDetail_TR_MPL_BBR_NM_S100: '',
			CA_mainDetail_IDP_C_NM_S100: '',
			CA_mainDetail_CRD_GR_NM: '',
			CA_mainDetail_STD_IDS_CLSF_C: '',
			CA_mainDetail_EPR_SCL_C: '',
			CA_mainDetail_STD_IDS_CLSF_C_NM_S30: '',
			CA_mainDetail_CST_PSP_CRD_GR_C: '',
			CA_mainDetail_HOPR_CNO: '',
			CA_mainDetail_ABUS_NO: '',
			CA_mainDetail_TRN_CONE: '',
			CA_mainDetail_PF_BSE_IRT: '',
			CA_mainDetail_PF_ADAL_IRT: '',
			CA_mainDetail_SOIY_GRR_EXIS_YN: '',
			CA_mainDetail_LN_ATS_MDCL_C: '',
			CA_mainDetail_ASJ_NM: '',
			CA_mainDetail_PRA_WTG_AVR_TRM_NBR: '',
			CA_mainDetail_BSE_IRT_TC_NM: '',
			CA_mainDetail_EDA_C: '',
			CA_mainDetail_EDA_C_NM: '',
			CA_mainDetail_IRT_FLX_CLE_IPU_YN_S1: '',
			CA_mainDetail_RCD_EPR_CST_NM_S100: '',
			CA_mainDetail_IV_ABUS_TC: '',
			CA_mainDetail_INV_GRW_GCL_C: '',
			CA_mainDetail_INV_GRW_GCL_LMT_EXC_YN: '',
			CA_mainDetail_LD_USG_XCP_USE_CKG_EXC_RSN_C: '',
			CA_mainDetail_LD_USG_XCP_USE_CKG_EXC_RSN: '',
			CA_mainDetail_NW_GRW_GCL_IDS_LMT_EXC_YN: '',
			CA_mainDetail_INV_ADVT_FND_TC: '',
			CA_mainDetail_ATS_CLSF_C: '',
			CA_mainDetail_I9_ASJ_C: '',
			CA_mainDetail_SHT_PNL_FVL_MSM_AST_YN: '',
			CA_mainDetail_INV_GRW_GCL_C_NM_S150: '',
			CA_mainDetail_GRID2_ROWCOUNT: '',
			CA_mainDetail_GRID2_LIST: '',
			CA_mainDetail_OPT_KD_C: '',
			CA_mainDetail_OPT_KD_C_NM_S100: '',
			CA_mainDetail_JP_EXP_RGL_HRM_EPR_YN: '',
			CA_mainDetail_HS_C: '',
			CA_mainDetail_HS_C_NM_S200: '',
			CA_mainDetail_INV_GRW_ABUS_CLSF_C: '',
			CA_mainDetail_ABUS_DTL_CONE: '',
			CA_mainDetail_INV_GRW_GCL_ALY_FDTN: '',
			CA_mainDetail_IRT_CPUT_PD_TC: '',
			CA_mainDetail_PLCY_FNN_SPT_EPR_TP_TC: '',
			CA_mainDetail_TOT_ABUS_XP_CUR_C: '',
			CA_mainDetail_TOT_ABUS_XP: '',
			CA_mainDetail_STTX_XMT_YN: '',
			CA_mainDetail_ABL_YN: '',
			CA_mainDetail_INV_EPR_EVL_GR_C: '',
			CA_mainDetail_P20_XCS_QTA_SCRS_MGE_YN: '',
			CA_mainDetail_INV_GRW_NW_RCD_GCL_TC: '',
			CA_mainDetail_INV_GRW_NW_RCD_GCL_TC_NM: '',
			CA_interestResult_NICE_BNE_NO: '',
			CA_interestResult_NICE_BNE_NM: '',
			CA_interestResult_GRP_NM: '',
			CA_interestResult_STD_IDS_CLSF_C: '',
			CA_interestResult_STD_IDS_CLSF_C_NM: '',
			CA_interestResult_EPR_SCL_C: '',
			CA_interestResult_CRD_GR_NM: '',
			CA_interestResult_CRD_GR_C: '',
			CA_interestResult_CRD_GR_SYM_VL: '',
			CA_interestResult_CRD_EVL_MODL_TC: '',
			CA_interestResult_IDS_GR_C: '',
			CA_interestResult_IDS_SGN_C: '',
			CA_interestResult_CST_PSP_CRD_GR_C: '',
			CA_interestResult_MGE_WOR_ALY_TC: '',
			CA_interestResult_LQVL_MGE_RATO: '',
			CA_interestResult_SB_BNK_YN: '',
			CA_interestResult_CNO: '',
			CA_interestResult_GRID1_ROWCOUNT: '',
			CA_interestResult_GRID1_LIST: [],
			CA_movingCollateral_GRID1_ROWCOUNT: '',
			CA_movingCollateral_GRID1_LIST: [],
			CA_tcb_JRDT_BBR_C: '',
			CA_tcb_JRDT_BBR_NM_S30: '',
			CA_tcb_AVL_YN: '',
			CA_tcb_LST_CHG_DT: '',
			CA_tcb_LST_CHG_BBR_NM: '',
			CA_tcb_TCB_ROWCOUNT: '',
			CA_tcb_TCB_LIST: '',
			CA_mainInfo_EPR_SCL_C: '',
			CA_mainInfo_CST_PSP_CRD_GR_C: '',
			CA_mainInfo_STD_IDS_CLSF_C: '',
			CA_mainInfo_CRD_GR_NM: '',
			CA_mainInfo_STD_IDS_CLSF_C_NM: '',
			CA_mainInfo_CNO: '',
			CA_mainInfo_CST_NM: '',
			CA_mainInfo_CRD_GR_C: '',
			CA_mainInfo_CRD_EVL_MODL_TC: '',
			CA_mainInfo_CRD_GR_SYM_VL: '',
			CA_mainInfo_BPM_PRC_ALY_YN: '',
			CA_mainInfo_RTD_CNFM_TC: '',
			CA_mainInfo_RTD_TLR_CNFM_TC: '',
			CA_mainInfo_LN_CUN_TC: '',
			CA_mainInfo_GRID1_ROWCOUNT: '',
			CA_mainInfo_GRID1_LIST: [],
			CA_interestNumber_GRID1_ROWCOUNT: '',
			CA_interestNumber_GRID1_LIST: [],
			CA_MainNumber_GRID1_ROWCOUNT: '',
			CA_MainNumber_GRID1_LIST: [],
			CA_consultingNumber_GRID1_NEXTKEY_FN_CUN_DT: '',
			CA_consultingNumber_GRID1_NEXTKEY_INL_CUN_NO: '',
			CA_consultingNumber_GRID1_ROWCOUNT: '',
			CA_consultingNumber_GRID1_LIST: [],
			search_name: '',
			product_result: [],
			KED_BNE_NO: '',
			NICE_BNE_NO: '',
			KED_BNE_NM: '',
			STD_IDS_CLSF_C: '',
			KED_GRP_NO: '',
			BRN: '',
			CNO: '',
			BBR_NM: '',
			RPSR_NM: '',
			CRN: '',
			BNE_STS_C_NM_S100: '',
			GRP_NM: '',
			NICE_IDS_NM: '',
			HFC_TPN: '',
			HFC_ADDR: '',
			NICE_EPR_SCL_C: '',
			NICE_EPR_OPB_TC: '',
			NICE_FNS_TC: '',
			BPL_ADDR: '',
			EST_DT: '',
			IRT_TCL_MNG_NO: '',
			search_result: [
				'KED_BNE_NO',
				'NICE_BNE_NO',
				'KED_BNE_NM',
				'STD_IDS_CLSF_C',
				'KED_GRP_NO',
				'BRN',
				'CNO',
				'BBR_NM',
				'RPSR_NM',
				'CRN',
				'BNE_STS_C_NM_S100',
				'GRP_NM',
				'NICE_IDS_NM',
				'HFC_TPN',
				'HFC_ADDR',
				'NICE_EPR_SCL_C',
				'NICE_EPR_OPB_TC',
				'NICE_FNS_TC',
				'BPL_ADDR',
				'EST_DT',
			],
		};
	}

	async componentDidMount() {}

	getBasicDataFormat = async (name, params) => {
		var sendTran = getDataByType(name, params);
		var res = await sendTran();
		var resultData = await parseTelegramDataByType(name, res.data);

		if (resultData.status.isError == false) {
			for (var key in datalist[name]) {
				var name1 = datalist[name][key];
				var t = name + '_' + name1;

				await this.setState({ [t]: resultData.result[name1] });
			}
		}
	};

	getBasicData = async () => {
		var companyInfo_params = {
			NICE_BNE_NO: this.state.NICE_BNE_NO,
		};
		await this.getBasicDataFormat('companyInfo', companyInfo_params);

		var CA_companyInfo_params = {
			ECY_CST_DCM_NO: this.state.CNO,
		};
		await this.getBasicDataFormat('CA_companyInfo', CA_companyInfo_params);

		var CA_mainDetail_params = {
			INL_CUN_NO: this.state.INL_CUN_NO, //
			TAF_SNO: '0000000001',
			CNO: this.state.CNO,
		};
		await this.getBasicDataFormat('CA_mainDetail', CA_mainDetail_params);

		var CA_interestResult_params = {
			IRT_TCL_MNG_NO: this.state.IRT_TCL_MNG_NO,
			NICE_BNE_NO: this.state.NICE_BNE_NO,
			/*     IRT_TCL_MNG_NO : this.state.IRT_TCL_MNG_NO, 
    NICE_BNE_NO : this.state.NICE_BNE_NO */
		};
		await this.getBasicDataFormat('CA_interestResult', CA_interestResult_params);

		var CA_movingCollateral_params = {
			DBTR_CNO: this.state.CNO,
		};
		await this.getBasicDataFormat('CA_movingCollateral', CA_movingCollateral_params);

		var CA_tcb_params = {
			CNO: this.state.CNO,
		};
		await this.getBasicDataFormat('CA_tcb', CA_tcb_params);

		var CA_mainInfo_params = {
			INL_CUN_NO: this.state.INL_CUN_NO, //
			TAF_SNO: '0000000001',
			NICE_BNE_NO: this.state.NICE_BNE_NO,
		};
		await this.getBasicDataFormat('CA_mainInfo', CA_mainInfo_params);
	};

	getNumberData = async () => {
		var CA_interestNumber_params = {
			NICE_BNE_NO: this.state.NICE_BNE_NO,
			ENR_BBR_C: '',
		};
		await this.getBasicDataFormat('CA_interestNumber', CA_interestNumber_params);

		var CA_consultingNumber_params = {
			CNO: this.state.CNO,
			GRID1_NEXTKEY_FN_CUN_DT: '',
			GRID1_NEXTKEY_INL_CUN_NO: '',
		};

		await this.getBasicDataFormat('CA_consultingNumber', CA_consultingNumber_params);
	};

	changehandle = async (e) => {
		this.setState({
			search_name: e.target.value,
		});
	};

	searchCompany = async () => {
		var params = {
			INQ_TC: '8', //업체명으로 조회조건
			INQ_CONE_S120: this.state.search_name, //업체명
			NEXTKEY_ENR_SNO_N9: '000000000', //페이지
			MRL_ORG_S1: '1',
			CBN_BNE_INQ_YN_S1: 'N',
			BICE_BNE_INQ_YN_S1: 'N',
		};
		var sendTran = await getDataByType('companySearch', params);
		var res = await sendTran();
		var resultData = await parseTelegramDataByType('companySearch', res.data);
		if (resultData.status.isError == false) {
			for (var key in datalist['CompanySearch']) {
				var name = datalist['CompanySearch'][key];
				var t = 'CompanySearch_' + name;

				if (resultData.result[name]) await this.setState({ [t]: resultData.result[name] });
			}
		}
	};

	onClickhandle = async (item) => {
		for (var key in item) {
			this.setState({
				[key]: item[key],
			});
		}
	};

	onNumberClickhandle = async () => {
		await this.getNumberData();
	};

	onIntTableClickhandle = async (item) => {
		this.setState({
			IRT_TCL_MNG_NO: item['IRT_TCL_MNG_NO'],
		});
	};

	onIntTableClickhandle2 = async (item) => {
		this.setState({
			INL_CUN_NO: item['INL_CUN_NO'],
		});
	};

	render() {
		return (
			<>
				<div className="content">
					<Row>
						<span>
							<Input placeholder="Search Company" style={{ width: '400px' }} onChange={(e) => this.changehandle(e)} />
						</span>
						<UncontrolledDropdown>
							<DropdownToggle color="link" data-toggle="dropdown" onClick={(e) => this.searchCompany()}>
								<i className="tim-icons icon-zoom-split" />
							</DropdownToggle>
							<DropdownMenu aria-labelledby="dropdownMenuLink" right>
								{this.state.CompanySearch_GRID1_LIST.length > 0 ? (
									this.state.CompanySearch_GRID1_LIST.map((item, index) => (
										<DropdownItem onClick={() => this.onClickhandle(item)}>
											<div>
												<span>{item.CNO} - </span>
												{item.KED_BNE_NM}
											</div>
										</DropdownItem>
									))
								) : (
									<DropdownItem>조회되지 않았습니다</DropdownItem>
								)}
							</DropdownMenu>
						</UncontrolledDropdown>
					</Row>
					<Row>
						<Col lg="3">
							<Card>
								<CardBody>
									{this.state.search_result.map((item, index) => (
										<h5>
											<b style={{ color: 'skyblue' }}>{item}</b> : {this.state[item]}
										</h5>
									))}
									<Button className="btn-fill" color="primary" type="submit" onClick={(e) => this.onNumberClickhandle()}>
										번호조회
									</Button>
									<Button className="btn-fill" color="primary" type="submit" onClick={(e) => this.getBasicData()}>
										조회
									</Button>
								</CardBody>
							</Card>
						</Col>
						<Col lg="9">
							<Row>
								<Card>
									<CardHeader>금리시산관리번호 목록</CardHeader>
									<CardBody>
										<Table>
											<tr>
												<th>금리시산관리번호</th>
												<th>금리시산일련번호</th>
												<th>부점명</th>
												<th>상품명</th>
												<th>대출신청금액</th>
												<th>여신기간년수</th>
											</tr>
											{this.state.CA_interestNumber_GRID1_LIST.map((item, index) => (
												<tr onClick={() => this.onIntTableClickhandle(item)}>
													<td>{item.IRT_TCL_MNG_NO}</td>
													<td>{item.IRT_TCL_SNO}</td>
													<td>{item.BBR_NM}</td>
													<td>{item.PRD_NM}</td>
													<td>{item.LD_RQS_AMT}</td>
													<td>{item.LN_TRM_YYS}</td>
												</tr>
											))}
										</Table>
									</CardBody>
								</Card>
							</Row>
							<Row>
								<Card>
									<CardHeader>투융자상담번호 목록</CardHeader>
									<CardBody>
										<Table>
											<tr>
												<th>투융자상담번호</th>
												<th>업체번호</th>
												<th>엽체명</th>
												<th>상담일자</th>
												<th>진행상태</th>
												<th>여신상담내용</th>
											</tr>
											{this.state.CA_consultingNumber_GRID1_LIST ? (
												this.state.CA_consultingNumber_GRID1_LIST.map((item, index) => (
													<tr onClick={() => this.onIntTableClickhandle2(item)}>
														<td>{item.INL_CUN_NO}</td>
														<td>{item.NICE_BNE_NO}</td>
														<td>{item.NICE_BNE_NM}</td>
														<td>{item.FN_CUN_DT}</td>
														<td>{item.INL_PRG_STS_C}</td>
														<td>{item.CUN_TTL_S100}</td>
													</tr>
												))
											) : (
												<tr></tr>
											)}
										</Table>
									</CardBody>
								</Card>
							</Row>
						</Col>
					</Row>
					<Row>
						<Col>
							<Card>
								<h5>
									<b style={style}>신용등급</b> : {this.state.companyInfo_CST_CRD_GR_NM}
								</h5>
								<h5>
									<b style={{ color: 'skyblue' }}>지원대상 산업코드분류</b> : {this.state.companyInfo_STD_IDS_CLSF_C}
								</h5>
								<h5>
									<b style={{ color: 'skyblue' }}>설립일자</b> : {this.state.companyInfo_EST_DT}
								</h5>
								<h5>
									<b style={{ color: 'skyblue' }}>TCB등급</b> :{' '}
									{this.state.CA_tcb_TCB_LIST.CA_tcb_TCB_ROWCOUNT > 0 ? this.state.CA_tcb_TCB_LIST[0].TCB_SKL_GR_NM : ''}
								</h5>
								<h5>
									<b style={{ color: 'skyblue' }}>기업규모</b> : {this.state.companyInfo_NICE_EPR_SCL_KR_NM_S100}
								</h5>
							</Card>
						</Col>
					</Row>
					<Row>
						<Card>
							<CardBody>
								{this.state.product_result.map((item, key) => (
									<h5>{item}</h5>
								))}
							</CardBody>
						</Card>
					</Row>
				</div>
			</>
		);
	}
}

export default CompanyProduct;

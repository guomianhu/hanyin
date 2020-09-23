/* 所有后端接口 */
/*登录服务*/
const login = "login"
/* 请求管线数据,保存 */
const getPipelineInfo = "GetPipelineInfo"

/* 首页,站点 */
const selectSiteByCompanyCode = "selectSiteByCompanyCode"
/* 首页, 监测点对应的设备实时数据,     不可以删除     别的页面有用到 */
const getRealtimeDataBySiteCode = "getRealtimeDataBySiteCode"
/* 
    首页, 监测点对应的设备实时数据,所有有数据的监测点code一次上传,后端返回所有请求的数据
    减少请求次数,解决等待时间过长出现的请求超时
*/
const getRealtimeDataBySiteCode1 = "getRealtimeDataBySiteCode1"
const getRealtimeDataBySiteCode2="getRealtimeDataBySiteCode2"
/* 首页, 警报信息 */
const getWarningByCompanyCode = "getWarningByCompanyCode"
/* 警报列表, 多条件查询 */ 
const getWarningByCondition="getWarningByCondition"
/* 首页, 管线口径 */
const getPipeDiameterByCompanyCode = "getPipeDiameterByCompanyCode"
/* 首页 , 警报信息总览,区域 */
const Overview = "Overview";
/* 首页 , 安全运行时间 */
const getRunningTime="getRunningTime";
/* 首页 , 请求单个DMA信息 */
const selectDMADatas="selectDMADatas";

// 漏损产销,请求数据
const selectDMAData="selectDMAData";

/*用户,增查删改 */
const insertUser = "insertUser"
const selectUser = "selectUser"
const deleteUser = "deleteUser"
const updateUser = "updateUser"
// 获取角色编码及名称列表
const selectRoleCodeNamelist="selectRoleCodeNamelist"

/* 重置密码 */ 
const resetPassword = "resetPassword"
/* 用户多条件查询 */ 
const selectUserByCondition = "selectUserByCondition"
/* 登陆用户修改密码,修改自己的登录密码 */ 
const updatePassword = "updatePassword"


/*权限管理模块  */ 
/*查询角色菜单列表接口*/ 
const getMenulistByRoleCode="getMenulistByRoleCode"
/*保存角色接口*/
const saveRole="saveRole"
/*角色删除接口*/
const deleteRole="deleteRole"
/*获取角色列表信息接口*/
const selectRolelist="selectRolelist"
/*获取菜单列表信息接口 */
const selectMenulist="selectMenulist"

/* 监测点类型  get*/
const getSiteType = "getSiteType"
/* 监测点,增.查.删.改 */
const insertSite = "insertSite"
const selectSiteByCondition = "selectSiteByCondition"
const deleteSite = "deleteSite"
const updateSite = "updateSite"
/* 监测点绑定设备,本公司下所有设备 */
const selectEquipmentByCompanyCode = "selectEquipmentByCompanyCode"
/* 监测点绑定设备 */
const bindEquipmentSite = "bindEquipmentSite"
/* 监测点修改绑定设备 */
const selectBindEquipmentSiteBySiteCode = "selectBindEquipmentSiteBySiteCode"

/* 水源,  增 查 删 修 多条件查询*/
const insertWaterSource = "insertWaterSource";
const deleteWaterSource = "deleteWaterSource";
const updateWaterSource = "updateWaterSource";
const selectWaterSourceByCondition = "selectWaterSourceByCondition";

/* 水厂,  增 查 删 修 多条件查询*/
const insertWaterworks = "insertWaterworks";
const deleteWaterworks = "deleteWaterworks";
const updateWaterworks = "updateWaterworks";
const selectWaterworksByCondition = "selectWaterworksByCondition";

/*我的订单*/
const selectWorkOrders = 'selectWorkOrders' 
/* 添加时间查询 */
const selectWorkOrders1 = "selectWorkOrders1";
/*关闭工单*/
const closeWorkOrders = 'closeWorkOrders'


/* 设备管理  */  
/* 水泵,增查删改 */
const insertWaterpump = "insertWaterpump"
const saveWaterPumpParam = "saveWaterPumpParam"
const selectWaterpumpByName = "selectWaterpumpByName"
const deleteWaterpump = "deleteWaterpump"
const updateWaterpump = "updateWaterpump"
/* 水表,增查删改 */
const insertWater = "insertWater"
const selectWaterByName = "selectWaterByName"
const deleteWater = "deleteWater"
const updateWater = "updateWater"
const saveWaterParam = "saveWaterParam"
/* 流量计,增查删改 */
const insertFlowmeter = "insertFlowmeter"
const selectFlowmeterByName = "selectFlowmeterByName"
const deleteFlowmeter = "deleteFlowmeter"
const updateFlowmeter = "updateFlowmeter"
const saveFlowMeterParam = "saveFlowMeterParam"
/* 压力计,增查删改 */
const selectPressureGaugeByName="selectPressureGaugeByName"
const savePressureGaugeParam="savePressureGaugeParam"
const deletePressureGauge="deletePressureGauge"

/* 阀门,增查删改 */
/* 管线,增查删改 */

/* 查询区域信息列表接口 */
const selectAreasInfo = "selectAreasInfo";
/* 删除区域接口 */
const deleteAreas = "deleteAreas";
/* 编辑区域接口 */
const updateAreas = "updateAreas";
/* 新增区域 */
const insertAreas = "insertAreas";
/*区域查询区域绑定监测点 */
const selectAreasSite = "selectAreasSite";
/*保存编辑区域监测点信息*/
const saveAreas = "saveAreas";

/*获取设备参数*/
const selectEquipmentParamByEquipment ="selectEquipmentParamByEquipment";

/* 设备数据分析, 请求参数时间,图表数据 */
const StatisticalAnalysis = "StatisticalAnalysis";
/* 设备数据分析, 请求设备参数 */
const getParamlist = "getParamlist";
/* 数据分析, 时间数据 */
const TimeStatisticalAnalysis = "TimeStatisticalAnalysis";

/* 报表设备分析,  请求多参数,表格数据*/
const RealtimeReport = "RealtimeReport";
/* 报表打印 */
const excel = "excel";

/* 分区数据展示 */
const PartitionDataDisplay = "PartitionDataDisplay";
const PartitionDataDisplay1 = "PartitionDataDisplay1";  //没有监测点限制,加设备类型

/* 流量统计分析 */
const flowStatisticalAnalysis = 'flowStatisticalAnalysis';
/*压力分析*/
const pressureStatisticalAnalysis="pressureStatisticalAnalysis"

/* 小区数据维护提交 */
const insertNewResidentialQuarters = "insertNewResidentialQuarters";

/* 首页小区数据查询， 小区的的code ，查询的树级结构*/
const selectNewResidentialQuartersBySiteCode = 'selectNewResidentialQuartersBySiteCode';
/* 首页小区树，点击事件， 只有用户有time, 水表的数据列表 */
const getResidentialQuarters = "getResidentialQuarters";
const getResidentialQuarters1 = "getResidentialQuarters1"; //小区全部的数据
/* 首页小区导航部分查询， 小区siteCode，默认初始进入时code不写,查询下拉框的楼列表； code传下拉框选中的数据的code*/
const getResidentialCondition = "getResidentialCondition";

/* 流量分析, 压力分析    根据区域code和监测点类型 查询监测点列表 */
const selectAreasSitelist="selectAreasSitelist";

/*新增编辑DMA分区*接口*/
const saveDMAInfo = "saveDMAInfo";

/*查询DMA分区*/
const selectDMAInfo = "selectDMAInfo";

const selectAreasDAMInfo = "selectAreasDAMInfo";

// 用户新增和修改
const saveUser="saveUser";

// DMA分区管理 , 查询.修改.删除
const selectDMAs="selectDMAs";
const updateDMA="updateDMA";
const deleteDMA="deleteDMA";

// 特殊权限管理 , 查询.新增.删除
const selectSpecialPowers="selectSpecialPowers";
const saveSpecialPowers="saveSpecialPowers";
const deleteSpecialPowers="deleteSpecialPowers";

// DMA监测点配置, 查询,新增,删除,DMA监测点列表
const selectDMASiteData="selectDMASiteData";
const saveDMASiteData="saveDMASiteData";
const deleteDMASiteData="deleteDMASiteData";
const selectDMACodeNamelist="selectDMACodeNamelist";

/* 公司查询, 多添件查询, 增, 删, 改 */
const selectCompany = "selectCompany"
const selectCompanyByCondition="selectCompanyByCondition";
const insertCompany = "insertCompany"
const deleteCompany = "deleteCompany"
const updateCompany = "updateCompany"

/* 厂商配置, 厂商名称查询, 增, 删 */
const selectManufactorByName = "selectManufactorByName";
const saveManufactor = "saveManufactor";
const deleteManufactor = "deleteManufactor";

/*API服务地址*/
export default{
    selectManufactorByName,
    saveManufactor,
    deleteManufactor,
    selectDMASiteData,
    saveDMASiteData,
    deleteDMASiteData,
    selectDMACodeNamelist,
    selectSpecialPowers,
    saveSpecialPowers,
    deleteSpecialPowers,
    selectDMAs,
    updateDMA,
    deleteDMA,
    saveUser,
    selectDMAData,
    selectDMADatas,
    saveDMAInfo,
    selectDMAInfo,
    selectAreasDAMInfo,
    login,
    getPipelineInfo,
    insertUser,
    selectUser,
    deleteUser,
    updateUser,
    updatePassword,
    resetPassword,
    selectUserByCondition,
    selectCompany,
    selectCompanyByCondition,
    insertCompany,
    deleteCompany,
    updateCompany,
    selectSiteByCompanyCode,
    insertWaterpump,
    getSiteType,
    insertSite,
    selectSiteByCondition,
    deleteSite,
    updateSite,
    insertWaterpump,
    selectWaterpumpByName,
    deleteWaterpump,
    updateWaterpump,
    insertWater,
    selectWaterByName,
    deleteWater,
    updateWater,
    insertFlowmeter,
    selectFlowmeterByName,
    deleteFlowmeter,
    updateFlowmeter,
    selectWorkOrders1,
    selectWorkOrders,
    closeWorkOrders,
    selectEquipmentByCompanyCode,
    bindEquipmentSite,
    selectBindEquipmentSiteBySiteCode,
    selectAreasInfo,
    deleteAreas,
    updateAreas,
    insertAreas,
    getRealtimeDataBySiteCode,
    selectAreasSite,
    saveAreas,
    getWarningByCompanyCode,
    StatisticalAnalysis,
    saveWaterPumpParam,
    selectEquipmentParamByEquipment,
    getParamlist,
    saveWaterParam,
    saveFlowMeterParam,
    RealtimeReport,
    excel,
    insertWaterSource,
    deleteWaterSource,
    updateWaterSource,
    selectWaterSourceByCondition,
    insertWaterworks,
    deleteWaterworks,
    updateWaterworks,
    selectWaterworksByCondition,
    getPipeDiameterByCompanyCode,
    TimeStatisticalAnalysis,
    Overview,
    PartitionDataDisplay,
    PartitionDataDisplay1,
    insertNewResidentialQuarters,
    selectNewResidentialQuartersBySiteCode,
    getResidentialQuarters,
    getResidentialQuarters1,
    getResidentialCondition,
    flowStatisticalAnalysis,
    getRunningTime,
    getMenulistByRoleCode,
    saveRole,
    deleteRole,
    selectRolelist,
    selectMenulist,
    selectPressureGaugeByName,
    savePressureGaugeParam,
    deletePressureGauge,
    selectRoleCodeNamelist,
	pressureStatisticalAnalysis,
	getRealtimeDataBySiteCode1,
    selectAreasSitelist,
    getWarningByCondition,
    getRealtimeDataBySiteCode2,
}
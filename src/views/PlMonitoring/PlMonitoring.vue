<template>
    <div class="page">
		<div class="publictit fix">
			<div class="text_ty"></div>
			<div class="runbox">
				<div class="orbit orbit1"></div>
			</div>
			<div class="gytit"><p class="masked">汉阴智慧水务管理平台</p></div>
			<userinfo></userinfo>
		</div>
		<div class="gy_biaoq fix">
			<div class="return left"><a href="javascript:history.go(-1)">返回</a></div>
			<div class="youset">您当前位置：官网监测</div>
		</div>
		
		<div class="fix">
			
			<div class="slidebox">
				<div class="menulsbr">
					<h4><i></i>县水利局</h4>
					<ul>
						<li :class="[{active:item.show}]" @click="changeli(index,item)" v-for="(item,index) in subnavData">
							<p><i></i>{{item.name}}</p>
							<ul v-show="item.show"> 
								<li v-for="(a,index) in item.list" v-on:click.stop="doThis(index)">{{a}}</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			
			<div class="fix sebdiv">
				<div class="echarbox">
					
					<!-- 搜索,DMA,管线区分 -->
					<div class="queryBox11" style="height:48px;">
					  <div class="queryBoxz12 querySearch11" @click="queryhunt">
						<!-- <input class="huntsbqy11" type="text" placeholder="查询设备、区域"> -->
						<el-autocomplete
						  class="inline-input"
						  v-model="searchVal"
						  :fetch-suggestions="querySearch"
						  :trigger-on-focus="false"
						  clearable
						  placeholder="查询设备、区域"
						  @select="handleSelect"
						></el-autocomplete>
						<img style="width:13px;height:13px;margin-left: 10px;" src="../../../static/img/huntimg.png" alt />
					  </div>
					  <div class="queryBoxz12" @click="DMAPartition">
						<div v-if="DMAPartitionState" style="color:#5F6477">DMA分区</div>
						<div v-else style="color:#0F89F5;">DMA分区</div>
					  </div>
					  <div class="queryBoxz12 queryBoxz13" @click="pipelineDistinguis">
						<div v-if="pipelineDisState" style="color:#5F6477">管线区分</div>
						<div v-else style="color:#0F89F5;">管线区分</div>
					  </div>
					  <!-- 查询快捷选项 -->
					  <div class="chaxunkj11" v-if="queryResultsState">
						<div>
						  <img style="width:43px;height:43px;" src="../../../static/img/queryResults1.png"/>
						  <p>大口径水表</p>
						</div>
						<div>
						  <img style="width:43px;height:43px;" src="../../../static/img/queryResults2.png"/>
						  <p>压力计</p>
						</div>
						<div>
						  <img style="width:43px;height:43px;" src="../../../static/img/queryResults3.png"/>
						  <p>流量计</p>
						</div>
						<div>
						  <img style="width:43px;height:43px;" src="../../../static/img/queryResults4.png"/>
						  <p>水泵</p>
						</div>
						<div @click="plotSelected">
						  <img style="width:43px;height:43px;" src="../../../static/img/queryResults5.png"/>
						  <p>小区</p>
						</div>
					  </div>
					  <div v-show="dmaCardShow" style="position:absolute;left: 0;top: 50px;width: 100%;">
						<el-card class="box-card" style="padding: 0 12px 20px 12px;">
						  <div slot="header" class="clearfix">
							<span>DMA信息</span>
						  </div>
						  <el-form :model="form" label-width="80px">
							<el-form-item label="所属区域">
							  <el-select v-model="form.areacode" placeholder="请选择区域">
								<el-option
								  v-for="item in areaOptions"
								  :key="item.areacode"
								  :label="item.areaname"
								  :value="item.areacode"
								></el-option>
							  </el-select>
							</el-form-item>
							<el-form-item label="DMA名称">
							  <el-input v-model="form.dmaname"></el-input>
							</el-form-item>
							<el-form-item label="图层类型">
							  <el-radio @change="radioDMAType()" v-model="form.layertype" label="polygon">多边形</el-radio>
							  <el-radio @change="radioDMAType()" v-model="form.layertype" label="rectangle">矩形</el-radio>
							  <el-radio @change="radioDMAType()" v-model="form.layertype" label="circle">圆形</el-radio>
							</el-form-item>
							<el-form-item label="图层颜色">
							  <el-color-picker @change="colorChange()" v-model="form.layercolor"></el-color-picker>
							</el-form-item>
							<el-form-item>
							  <el-button type="primary" @click="dmaCreate()">立即创建</el-button>
							  <el-button type="warning" @click="dmaClear()">清除绘图</el-button>
							  <el-button type="info" @click="dmaCancel">取消</el-button>
							</el-form-item>
						  </el-form>
						</el-card>
					  </div>
					  <div class="pipeForm" v-show="pipelineShow">
						<el-collapse-transition>
						  <div>
							<div class="pipeBox">
							  <div class="colorTip13">选择管线口径颜色</div>
							  <div v-for="pipeSj in pipeDiameter" :key="pipeSj">
								<div class="kjList12">
								  <span>{{pipeSj}}</span>
								</div>
							  </div>
							  <el-button
								style="margin:12px auto!important; display: block;"
								type="primary"
								icon="el-icon-check"
								@click="pipeDetermine()"
							  >确定</el-button>
							</div>
							<div class="colorArray12">
							  <div class="ColorAdo123">
								<el-color-picker v-model="pipeColor50" size="mini"></el-color-picker>
							  </div>
							  <div class="ColorAdo123">
								<el-color-picker v-model="pipeColor63" size="mini"></el-color-picker>
							  </div>
							  <div class="ColorAdo123">
								<el-color-picker v-model="pipeColor75" size="mini"></el-color-picker>
							  </div>
							  <div class="ColorAdo123">
								<el-color-picker v-model="pipeColor100" size="mini"></el-color-picker>
							  </div>
							  <div class="ColorAdo123">
								<el-color-picker v-model="pipeColor110" size="mini"></el-color-picker>
							  </div>
							  <div class="ColorAdo123">
								<el-color-picker v-model="pipeColor160" size="mini"></el-color-picker>
							  </div>
							  <div class="ColorAdo123">
								<el-color-picker v-model="pipeColor200" size="mini"></el-color-picker>
							  </div>
							  <div class="ColorAdo123">
								<el-color-picker v-model="pipeColor250" size="mini"></el-color-picker>
							  </div>
							  <div class="ColorAdo123">
								<el-color-picker v-model="pipeColor315" size="mini"></el-color-picker>
							  </div>
							  <div class="ColorAdo123">
								<el-color-picker v-model="pipeColor400" size="mini"></el-color-picker>
							  </div>
							</div>
						  </div>
						</el-collapse-transition>
					  </div>
					</div>
					
					<!-- 工具箱 右边 -->
					<div class="toolRightBox11" style="height:48px;">
					  <div class="toolBoxOne" @click="toolVideo">
						<img
						  style="width:16px;height:12px;"
						  :src="toolVideoState?require('../../../static/img/toolVideo1.png'):require('../../../static/img/toolVideo2.png')"
						/>
						<div v-if="toolVideoState" style="color:#5F6477">视频</div>
						<div v-else style="color:#0F89F5;">视频</div>
					  </div>
					  <div class="toolBoxOne" @click="toolQuality">
						<img
						  style="width:12px;height:16px;"
						  :src="toolQualityState?require('../../../static/img/toolQuality1.png'):require('../../../static/img/toolQuality2.png')"
						/>
						<div v-if="toolQualityState" style="color:#5F6477">水质</div>
						<div v-else style="color:#0F89F5;">水质</div>
					  </div>
					  <div class="toolBoxOne" @click="toolSupply">
						<img
						  style="width:21px;height:15px;"
						  :src="toolSupplyState?require('../../../static/img/toolSupply1.png'):require('../../../static/img/toolSupply2.png')"
						/>
						<div v-if="toolSupplyState" style="color:#5F6477">供水</div>
						<div v-else style="color:#0F89F5;">供水</div>
					  </div>
					  <div class="toolBoxOne" @click="toolRanging">
						<img
						  style="width:16px;height:16px;"
						  :src="toolRangingState?require('../../../static/img/toolRanging1.png'):require('../../../static/img/toolRanging2.png')"
						/>
						<div v-if="toolRangingState" style="color:#5F6477">测距</div>
						<div v-else style="color:#0F89F5;">测距</div>
					  </div>
					  <div class="toolBoxOne" @click="toolPipeline">
						<img
						  style="width:16px;height:14px;"
						  :src="toolPipelineState?require('../../../static/img/toolPipeline1.png'):require('../../../static/img/toolPipeline2.png')"
						/>
						<div v-if="toolPipelineState" style="color:#5F6477">管网</div>
						<div v-else style="color:#0F89F5;">管网</div>
					  </div>
					  <div class="toolBoxOne" @click="fullScreen">
						<img
						  style="width:15px;height:15px;"
						  :src="fullScreenState?require('../../../static/img/toolFullScreen1.png'):require('../../../static/img/toolFullScreen2.png')"
						  alt
						/>
						<div v-if="fullScreenState">全屏</div>
						<div v-else>取消全屏</div>
					  </div>
					  <!-- 右边水质展示, 实时,预测 -->
					  <div class="waterQRBox11" v-if="waterQualityRealBox">
						<div v-if="waterQualityReal" @click="waterQualityReal=!waterQualityReal" class="realWaterBox11">
						  <img style="width:425px;" src="\static\img/waterQuality11.gif" alt />
						  <!-- <div class="realWater11">
							<div class="shishi11">实时</div>
							<div class="yuce11">预测</div>
							<div class="chengdu11"><p>最大</p><img src="../../../../../static/img/waterQuality12.png" alt=""><p>最小</p></div>
						  </div>
						  <div>更新时间<P>{{realWaterTime}}</P></div> -->
						</div>
						<div v-if="!waterQualityReal" @click="waterQualityReal=!waterQualityReal">
						  <img style="width:425px;" src="\static\img/waterQuality12.gif" alt />
						</div>
						<!-- <div>
						  <div>水源地水质监测</div>
						  <ul>
							<li v-for="(item,index) in " :key="index"><span style="width:100px;">{{item.name}}</span>{{item.value}}</li>
						  </ul>
						</div> --> 
					  </div>
					</div>
					
					<!-- 地图标识 -->
					<div class="amapBs" style="height:27px;padding-right:6px;">
					  <div class="mapText">地图标识:</div>
					  <div
						v-for="(item,index) in mapLogo"
						:key="index"
						class="amapIcon"
						style="cursor:pointer"
						@click="dtbsFrom(item)"
					  >
						<!-- <img v-if="item.mapType == 3" style="width:22px;height:22px;" :src="item.img" alt="img" /> -->
						<img v-if="item.mapType == 4" style="width:14px;height:14px;" :src="item.img" alt="img" />
						<img
						  v-else-if="item.mapType == 5"
						  style="width:15px;height:18px;"
						  :src="item.img"
						  alt="img"
						/>
						<img
						  v-else-if="item.mapType == 8"
						  style="width:24px;height:24px;"
						  :src="item.img"
						  alt="img"
						/>
						<img v-else :src="item.img" alt="img" />
						<p>{{ item.text }}</p>
						<span>(</span>
						<h5 style="color:#333;">{{item.amount}}</h5>
						<span>)</span>
					  </div>
					</div>
					
					<!-- 地图 -->
					<div class="amap-box">
						<xmaps :data="tabConfig.data"></xmaps>
					</div>
					
					<!-- 视频 -->
					<div class="videobxdiv" v-if="showvideo">
						<div class="videobx">
							<div class="videom">
								<video controls="true" preload="auto" autoplay="autoplay" :src="videosrc"></video>
								<div class="closevideo" @click="closeVideo">X</div>
							</div>
						</div>
					</div>
					
				</div>
				
				<div class="page_right">
					<div class="jcdatabox" style="margin-top: 40px;">
						<div class="jcdata">
							<h2>漏损率统计分析</h2>
							<div class="lousun" id="lousun"></div>
						</div>
					</div>
					<div class="jcdatabox">
						<div class="jcdata lousund">
							<h2>数据统计</h2>
							<p>水源蓄水量：<span class="color1">{{woter1}}万方</span></p>
							<p>净水蓄水量：<span class="color2">{{woter2}}万方</span></p>
							<p>当日供水量：<span class="color3">{{woter3}}方</span></p>
						</div>
					</div>
				</div>
			
			</div>
			
			<div class="fix sebdiv">
				<div class="echartbot">
					<div class="earchetleft">
						<div class="titles">降水量与夜间流量</div>
						<div class="echbox">
							<div class="echclass" id="main1" style="margin-left: -20px;"></div>
						</div>
					</div>
					<div class="earchetright">
						<div class="titles">压力(MPa)</div>
						<div class="echbox">
							<div class="echclass" id="main2"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src='./realTimeDetection.js'></script>
<style src='./realTimeDetection.css'></style>
<style src='./siteCss.css'></style>  
<style src='./waterPlants.css'></style>
<style src='./waterPlantsNew.css'></style>
<style src='./resource.css'></style>
<style src='./xiaoqu.css'></style>
<style src='./ditu.css'></style>

<style lang="less" scoped>
	*{margin: 0;padding: 0;}
	.page{width: 100%;height: 100%;background: url(../../assets/images/gybj.jpg) no-repeat center top;background-size: 100% 100%;}
	.publictit{height: 74px;position: relative;}
	.gytit{height: 100%; background: url(../../assets/images/gytit.png) no-repeat center center;font-size: 24px;color: #02eeff;text-align: center;line-height: 74px;}
	.gytit p{padding-left: 45px;}
	.text_ty{ width:50px; height:50px;background:url(../../assets/images/yqs.png) no-repeat;background-size: 100% 100%; position:absolute; top:12px;left: 20px;}
	.text_ty:before{content:'';display:block;width:100%;height:100%;opacity:.7;background:url(../../assets/images/yqs.png) no-repeat;background-size: 100% 100%;animation:scale 2s infinite cubic-bezier(0,0,.49,1.02);animation-delay:200ms;}
	.runbox {width:60px;height:60px;position:absolute;top:0;}
	.orbit {width:100%;height:100%;position: absolute;top:8px;left: 14px;border-radius: 50%;border: solid;border-color:#1ad8f5 transparent transparent transparent;border-width: 2px;box-sizing: border-box;transform: rotate(0deg);transform-origin: center;}
	.orbit1{-webkit-animation: orbit1 10s linear infinite;animation: orbit1 10s linear infinite;}
	@keyframes orbit1 {
	  from {transform: rotate(360deg);}
	  to {transform: rotate(0deg);}
	}
	@keyframes scale {
		0% {transform: scale(0.5);opacity: 1;}
		50% {transform: scale(1);opacity: 1;}
		100% {transform: scale(0.5);opacity: 1;}
	}
	
	.gy_biaoq{height: 40px;background: url(../../assets/images/gy1.png) no-repeat;padding: 0 30px;display: flex;position: relative;}
	.return{background: url(../../assets/images/fh.png) no-repeat 0 center;color: #e4fdff;line-height: 40px;font-size: 16px;padding-left:15px;cursor: pointer;margin-right: 30px;}
	.return a{width: 100%;height: 100%;display: block;color: #e4fdff;}
	.gy_shaixuan li{color: #333;float: left;height: 28px;line-height: 28px;border-radius: 4px;background: #fff; margin-right: 8px;margin-top: 6px;padding: 0 10px;overflow: hidden;cursor: pointer;}
	.gy_shaixuan li.noclick{background:rgba(255,255,255,0.5);}
	.gy_shaixuan li p{display: inline-block;float: left;margin-right: 10px;}
	.gy_shaixuan li i{width: 12px;height: 100%;display: inline-block;background: url(../../assets/images/cha.png) no-repeat 0 center;float: left;}
	.gy_contbox{width: 100%;}
	.gy_contbox .ant-layout{display: block;}
	.morebq{width: 104px;height: 28px;position: absolute;top: 6px;right: 32px; background: #2085ff;border-radius:5px;}
	.morebq .ivu-menu-horizontal{height: 100%;line-height: 28px;}
	.morebq .ivu-menu-light{background: none;border: 0;}
	.youset{color: #fff;line-height: 40px;position:absolute;right: 32px;font-size: 15px;}
	
	.morebq .ivu-menu-horizontal.ivu-menu-light:after{display: none;}
	.morebq .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{border-bottom: 0;}
	
	// 左侧折叠菜单
	.slidebox{width: 15.8%;float: left;margin-top: -1px;background: url(../../assets/images/gy2.png) no-repeat;background-size: 100% 100%;color: #e4fdff;font-size: 16px;min-height: calc(100vh - 74px);}
	.menulsbr {
	        padding:15px 30px;
			>h4{color: #fff;height: 40px;line-height: 40px;}
			h4 i{width: 20px;height: 20px;position:relative;top: -1px;margin-right: 10px; display: inline-block; background: url(../../assets/images/fh.png) no-repeat 0 center;transform: rotate(-90deg);}
	        >ul {
	            width: 100%;
	            @include clearfix;padding-left: 20px;
	            >li {
	                width: 100%;
	                cursor: pointer;line-height: 40px;
	                &:hover {
	                    //background-color: #ff9800;
	                }
					>p i{width: 20px;height: 20px;position:relative;top: 4px;margin-right: 10px; display: inline-block; background: url(../../assets/images/fh.png) no-repeat 0 center;transform: rotate(-180deg);}
	                >ul {
	                    width: 100%;padding-left: 30px;padding-bottom: 10px;
	                    li{
	                        &:hover{
	                            color: #02eeff;
	                        }
	                    }
	                }
	            }
	            .active p i {
	                transform: rotate(-90deg);position:relative;top: -1px;
	            }
	        }
	} 
	
	// 中间部分
	.echarbox{width:77%;float: left;height:600px; margin-top: 20px;margin-left: 1%; position: relative;}
	#container {width: 100%;height: 100%;}
	.amap-box{height: 600px;}
	
	.page_right{width:20%; float: right;margin-right: 1%;height: 100%;background: url(../../assets/images/bk.png) no-repeat;background-size: 100% 100%;position: relative;z-index: 4;padding-bottom:24px;margin-top: 20px;}
	.jclist{margin:0 10px 0 20px;}
	.jclist li{width: 33%;height: 30px;line-height: 30px;text-align: center;background: url(../../assets/images/sk.png) no-repeat center center;background-size: 100% 100%;float: left;margin-top: 15px;color: #fff;margin-left: -2px;}
	.jcdatabox{margin:20px 25px 0;background: url(../../assets/images/line6.png) no-repeat center center;background-size: 100% 100%;}
	.jcdata{padding: 15px 15px 0 20px;}
	.lousund{padding-top: 15px;padding-bottom: 15px;}
	.jcdata h2{font-size: 16px;color: #fff;border-bottom: 1px solid #fff;padding-bottom:15px;margin-bottom: 15px;}
	.jcdata p{color: #fff;line-height:33px;font-size: 14px; margin: 0;padding: 0;}
	.jcdata p.blue{color: #2085ff;}
	.jcdata span.color1{color: #24c768;}
	.jcdata span.color2{color: #fe9f11;}
	.jcdata span.color3{color: #02eeff;}
	
	.lousun{width: 100%;height: 260px;margin-top:15px;}
	
	.sebdiv{width: calc(100% - 15.8%);float:left;}
	.echartbot{margin:20px 1%;display: flex;border-radius: 4px;overflow: hidden;}
	.earchetleft{width: 60%;margin-right: 20px;}
	.earchetright{flex: 1;}
	.titles{height: 40px;line-height: 40px;background: #042656;color: #fff;padding-left: 20px;font-size: 16px;}
	.echbox{height:230px;background: #fff;padding-top: 10px;}
	.echclass{height: 100%;}
</style>
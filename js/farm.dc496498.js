(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["farm"],{3495:function(t,e,o){"use strict";o("d7a7")},"9b76":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-main",{staticStyle:{"background-color":"#000000",color:"white","font-family":"'Noto Sans SC'","font-weight":"300"}},[o("el-row",{staticStyle:{"margin-top":"40px"}},[o("el-col",{staticStyle:{"line-height":"80px","font-size":"24px","letter-spacing":"1px"},attrs:{xs:{span:24},md:{span:6,offset:3}}},[o("div",{staticClass:"shadow-border"},[o("el-row",[o("el-col",{style:"text-align: center;color:"+t.firstPoolColor,attrs:{span:24}},[o("div",{staticStyle:{cursor:"pointer"}},[t._v(" "+t._s(t.$t("farmPools"))+" ")])])],1)],1)])],1),t._l(t.poolGoFarms,(function(e,r){return o("el-row",{key:e.pid,staticClass:"partner-background",staticStyle:{"margin-bottom":"10px","margin-top":"40px","padding-bottom":"20px",width:"100%","background-image":"url('home-bg-4.png')","background-repeat":"no-repeat","background-position":"right bottom"},attrs:{type:"flex",justify:"center"}},[o("el-col",{staticStyle:{"line-height":"40px"},attrs:{xs:24,md:18,xl:18}},[o("div",{staticClass:"shadow-border"},[o("el-row",{staticStyle:{"margin-top":"40px"},attrs:{type:"flex",justify:"center"}},[o("el-col",{staticStyle:{"line-height":"40px"},attrs:{xs:24,md:22,xl:22}},[o("el-row",{staticStyle:{"text-align":"left","font-size":"26px","font-weight":"500","margin-left":"10px"}},[o("el-col",{staticClass:"stake-prize-title",staticStyle:{"margin-top":"10px"},attrs:{xs:24,sm:{span:10}}},[t._v(" "+t._s(t.$t("farmSentence1"))+t._s(e.wantTokenFullName)+" ")]),o("el-col",{attrs:{xs:24,sm:{span:14}}},[o("el-row",{attrs:{type:"flex",justify:"center"}},[o("el-col",{attrs:{xs:{span:18},sm:{span:12,offset:11}}},[1==e.isBuy?o("vs-button",{staticStyle:{"font-size":"20px","line-height":"40px"},attrs:{block:"",border:"",blank:"",color:"#E91E63",href:e.url}},[t._v(" "+t._s(t.$t("buyToken"))+t._s(e.wantTokenFullName)+" ")]):o("vs-button",{staticStyle:{"font-size":"20px","line-height":"40px"},attrs:{block:"",border:"",blank:"",color:"#E91E63",href:e.url}},[t._v(" "+t._s(t.$t("addToken"))+t._s(e.wantTokenFullName)+" ")])],1)],1)],1)],1),o("div",{staticStyle:{width:"100%",height:"1px","background-color":"#E91E63","margin-top":"20px"}}),o("div",{staticClass:"stat-shadow-border",staticStyle:{"margin-top":"40px","margin-bottom":"40px","font-size":"18px"}},[o("el-row",{staticStyle:{"padding-top":"30px"}},[o("el-col",{staticStyle:{"text-align":"left"},attrs:{span:11,offset:1}},[t._v(" "+t._s(t.$t("farmMyToken"))+" ")]),o("el-col",{staticStyle:{"text-align":"right"},attrs:{span:11}},[t._v(" "+t._s(e.wantTokenNumber.toFormat(0))+t._s(e.wantTokenName)+" ")])],1),"POOLGO"!=e.wantTokenName?o("el-row",{},[o("el-col",{staticStyle:{"text-align":"left"},attrs:{span:11,offset:1}},[t._v(" "+t._s(t.$t("farmMy"))+t._s(e.rewardTokenName)+": ")]),o("el-col",{staticStyle:{"text-align":"right"},attrs:{span:11}},[t._v(" "+t._s(e.poolGoMine.toFormat(0))+t._s(e.rewardTokenName)+" ")])],1):t._e(),o("el-row",[o("el-col",{staticStyle:{"text-align":"left"},attrs:{span:8,offset:1}},[t._v(" "+t._s(t.$t("farmSentence2"))+" ")]),o("el-col",{staticStyle:{"text-align":"right"},attrs:{span:14}},[t._v(" "+t._s(e.wantLockedMine.toFormat(2,0))+t._s(e.wantTokenName)+" ")])],1),o("el-row",[o("el-col",{staticStyle:{"text-align":"left"},attrs:{span:8,offset:1}},[t._v(" "+t._s(t.$t("farmSentence3"))+" ")]),o("el-col",{staticStyle:{"text-align":"right","padding-bottom":"0px"},attrs:{span:14}},[t._v(" "+t._s(e.pendingPoolGo.toFormat(4))+t._s(e.rewardTokenName)+" ")])],1),o("div",{staticStyle:{width:"100%",height:"1px","background-color":"#E91E63","margin-top":"20px"}}),o("el-row",{staticStyle:{"padding-top":"30px"}},[o("el-col",{staticStyle:{"text-align":"left"},attrs:{span:11,offset:1}},[t._v(" "+t._s(t.$t("farmTotalDeposit"))+" ")]),o("el-col",{staticStyle:{"text-align":"right"},attrs:{span:11}},[t._v(" "+t._s(e.wantLockedTotal.toFormat(2))+t._s(e.wantTokenName)+" ")])],1),e.isThirdFarm?o("el-row",[o("el-col",{staticStyle:{"text-align":"left"},attrs:{span:14,offset:1}},[t._v(" "+t._s(t.$t("farmFarmAPY"))+" ")]),o("el-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[o("el-row",{attrs:{type:"flex",justify:"end"}},[t._v(" "+t._s(e.farmApy)+"% ")])],1)],1):t._e(),o("el-row",[o("el-col",{staticStyle:{"text-align":"left"},attrs:{span:14,offset:1}},[t._v(" "+t._s(t.$t("farmAPY"))+": ")]),o("el-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[o("el-row",{attrs:{type:"flex",justify:"end"}},[t._v(" "+t._s(e.apyText)+" "),e.isThirdFarm?o("vs-tooltip",{attrs:{danger:""},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.$t("farmToolTip"))+" ")]},proxy:!0}],null,!0)},[o("box-icon",{staticStyle:{"padding-top":"4px"},attrs:{name:"info-circle",color:"white"}})],1):t._e()],1)],1)],1),o("el-row",[o("el-col",{staticStyle:{"text-align":"left"},attrs:{span:22,offset:1}})],1),o("el-row",[o("el-col",{staticStyle:{"text-align":"left"},attrs:{span:14,offset:1}},[t._v(" "+t._s(t.$t("poolSentence9"))+" ")]),o("el-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[t._v(" "+t._s(e.daliyPoolGo.toFormat(2))+" "+t._s(e.rewardTokenName)+" ")])],1),o("el-row",{staticStyle:{"padding-bottom":"20px"}},[o("el-col",{staticStyle:{"text-align":"left"},attrs:{span:14,offset:1}},[t._v(" "+t._s(t.$t("farmControllerFee"))+" ")]),o("el-col",{staticStyle:{"text-align":"right"},attrs:{span:8}},[o("el-row",{attrs:{type:"flex",justify:"end"}},[t._v(" "+t._s(e.controllerFee.div(100))+"% "),o("vs-tooltip",{attrs:{danger:""},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.$t("farmControllerFeeTip"))+" ")]},proxy:!0}],null,!0)},[o("box-icon",{staticStyle:{"padding-top":"4px"},attrs:{name:"info-circle",color:"white"}})],1)],1)],1)],1)],1)],1)],1),o("el-row",{staticStyle:{"margin-bottom":"20px"}},[o("el-col",{attrs:{xs:{span:20,offset:2},sm:{span:6,offset:1}}},[o("vs-button",{staticStyle:{"font-size":"20px","line-height":"40px"},attrs:{block:"",border:"",color:"#E91E63"},on:{click:function(e){return e.stopPropagation(),t.getReward(r)}}},[t._v(" "+t._s(t.$t("getReward"))+" ")])],1),o("el-col",{attrs:{xs:{span:20,offset:2},sm:{span:6,offset:2}}},[o("vs-button",{staticStyle:{"font-size":"20px","line-height":"40px",background:"linear-gradient(90deg, #E91E63, #FC9E7C)"},attrs:{block:"",color:"#E91E63"},on:{click:function(e){return e.stopPropagation(),t.showStakeDialog(r)}}},[t._v(" "+t._s(t.$t("stake"))+" ")])],1),o("el-col",{attrs:{xs:{span:20,offset:2},sm:{span:6,offset:2}}},[o("vs-button",{staticStyle:{"font-size":"20px","line-height":"40px"},attrs:{block:"",border:"",color:"#E91E63"},on:{click:function(e){return e.stopPropagation(),t.showUnStakeDialog(r)}}},[t._v(" "+t._s(t.$t("unStake"))+" ")])],1)],1)],1)])],1)})),o("vs-dialog",{attrs:{loading:t.stakeDialogLoading,width:"300px","not-center":"","prevent-close":""},scopedSlots:t._u([{key:"header",fn:function(){return[o("h4",{staticClass:"not-margin"},[o("b",[t._v(t._s(t.$t("stakeToken"))+t._s(t.curPoolGoFarm.wantTokenFullName)+" ")])])]},proxy:!0},{key:"footer",fn:function(){return[o("div",{staticClass:"con-footer"},[t.isNeedApprove?o("vs-button",{attrs:{transparent:""},on:{click:t.confirmApprove}},[t._v(" "+t._s(t.$t("noticeApprove"))+" ")]):o("vs-button",{attrs:{transparent:""},on:{click:t.confirmDeposit}},[t._v(" "+t._s(t.$t("noticeConfirm"))+" ")]),o("vs-button",{attrs:{dark:"",transparent:""},on:{click:function(e){t.stakeDialogShow=!1}}},[t._v(" "+t._s(t.$t("noticeCancel"))+" ")])],1)]},proxy:!0}]),model:{value:t.stakeDialogShow,callback:function(e){t.stakeDialogShow=e},expression:"stakeDialogShow"}},[o("div",{staticClass:"con-content"},[t.isNeedApprove?o("el-row",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.$t("noticeApproveContent")))]):o("vs-input",{attrs:{"icon-after":"",placeholder:t.$t("noticeOwnToken")+t.wantTokenNumber.toFormat(2),type:"number"},scopedSlots:t._u([{key:"icon",fn:function(){return[o("vs-button",{attrs:{circle:"",flat:"",warn:""},on:{click:function(e){return t.maxStakeNumber()}}},[t._v(" "+t._s(t.$t("max"))+" ")])]},proxy:!0}]),model:{value:t.stakeNumber,callback:function(e){t.stakeNumber=e},expression:"stakeNumber"}})],1)]),o("vs-dialog",{attrs:{loading:t.unStakeDialogLoading,width:"300px","not-center":"","prevent-close":""},scopedSlots:t._u([{key:"header",fn:function(){return[o("h4",{staticClass:"not-margin"},[t._v(" "+t._s(t.$t("unStakeTokenPart1"))+t._s(t.curPoolGoFarm.wantTokenFullName)+" "+t._s(t.$t("unStakeTokenPart2"))+" ")])]},proxy:!0},{key:"footer",fn:function(){return[o("div",{staticClass:"con-footer"},[o("vs-button",{attrs:{transparent:""},on:{click:t.confirmUnStake}},[t._v(" "+t._s(t.$t("noticeConfirm"))+" ")]),o("vs-button",{attrs:{dark:"",transparent:""},on:{click:function(e){t.unStakeDialogShow=!1}}},[t._v(" "+t._s(t.$t("noticeCancel"))+" ")])],1)]},proxy:!0}]),model:{value:t.unStakeDialogShow,callback:function(e){t.unStakeDialogShow=e},expression:"unStakeDialogShow"}},[o("div",{staticClass:"con-content"},[o("h5",{staticClass:"not-margin"},[t._v(" "+t._s(t.$t("unStakeLpTokenInfo"))+" ")])])])],2)},n=[],a=(o("b680"),o("5530")),i=(o("96cf"),o("1da1")),s=o("f121"),l=o("901e"),c=o("2f62"),u=(o("4f29"),{name:"pool",components:{},data:function(){return{poolBalance:0,poolAwardBalance:0,poolAwardMoney:0,poolMoney:0,prizePeriodRemainingSeconds:0,windowHeight:0,windowWidth:0,stakeDialogShow:!1,unStakeNum:"",withdrawPoolDialogShow:!1,withdrawPoolMoney:"",withdrawPoolMoneyTimeLock:"",unStakeDialogShow:!1,timelockDialogShow:!1,maximumExitFee:"",withdrawPoolDialogLoading:!1,stakeDialogLoading:!1,timelockDialogLoading:!1,unStakeDialogLoading:!1,ticketNumber:new l["BigNumber"](0),awardInfoArray:[],pcfxApy:0,reserveTotalSupply:0,intervalTimer:null,isNeedApprove:!1,isFirstRun:!0,dripRatePerSecond:0,stakeNumber:"",unStakeNumber:new l["BigNumber"](0),totalNumber:new l["BigNumber"](0),rewardNum:new l["BigNumber"](0),lpTokenStakeNumber:new l["BigNumber"](0),daliyPoolGo:new l["BigNumber"](0),wantTokenNumber:new l["BigNumber"](0),rewardDialogShow:!1,rewardDialogLoading:!1,curIndex:0,sharesTotal:new l["BigNumber"](0),wantLockedTotal:new l["BigNumber"](0)}},computed:{pcfxContract:function(){return this.$store.state.web3.pcfxContract},ticketContract:function(){return this.$store.state.web3.ticketContract},poolGoContract:function(){return this.$store.state.web3.poolGoContract},prizePoolContract:function(){return this.$store.state.web3.prizePoolContract},periodicPrizeStrategyContract:function(){return this.$store.state.web3.periodicPrizeStrategyContract},tokenFaucetContract:function(){return this.$store.state.web3.tokenFaucetContract},cfxStakeContract:function(){return this.$store.state.web3.cfxStakeContract},stakePoolContract:function(){return this.$store.state.web3.stakePoolContract},poolGoCUsdtLPContract:function(){return this.$store.state.web3.poolGoCUsdtLPContract},poolGoFarms:function(){return this.$store.state.web3.poolGoFarms},poolGoFarmContract:function(){return this.$store.state.web3.poolGoFarmContract},firstPoolColor:function(){return 0==this.choosePool?"#E91E63":"#FFFFFF"},secondPoolColor:function(){return 1==this.choosePool?"#E91E63":"#FFFFFF"},countdownTimerWidth:function(){return console.log(this.windowWidth),this.windowWidth<500||this.windowWidth<=1200?this.windowWidth/5:this.windowWidth/12},countdownTimerPadding:function(){return this.windowWidth<500?3:this.windowWidth<=768?8:10},curPoolGoFarm:function(){return this.poolGoFarms[this.curIndex]}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=t,o.windowHeight=parseInt("".concat(window.innerHeight)),o.windowWidth=parseInt("".concat(window.innerWidth)),window.onresize=function(){return function(){o.windowHeight=parseInt("".concat(window.innerHeight)),o.windowWidth=parseInt("".concat(window.innerWidth))}()},null!=o.$store.state.web3.account){e.next=7;break}return e.next=7,o.cfxLogin();case 7:if(0!=o.$store.state.web3.isPortalInstalled){e.next=11;break}return o.$router.push({path:"/pools"}),o.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:o.$t("noticeWallet")}),e.abrupt("return");case 11:if(null!=o.$store.state.web3.account){e.next=15;break}return o.$router.push({path:"/pools"}),o.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:o.$t("noticeAddr")}),e.abrupt("return");case 15:o.update(),o.intervalTimer=setInterval(o.update,8e3);case 17:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t;case 1:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){var t=this;clearTimeout(t.intervalTimer)},methods:Object(a["a"])(Object(a["a"])({},Object(c["b"])(["cfxLogin"])),{},{update:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(o=t,r=0;r<o.poolGoFarms.length;r++)setTimeout(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r,n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.poolGoFarmContract.poolInfo(o.poolGoFarms[e].pid);case 2:return r=t.sent,t.next=5,o.poolGoFarmContract.poolGoPerSecond();case 5:return n=t.sent,t.next=8,o.poolGoFarmContract.totalAllocPoint();case 8:return a=t.sent,o.poolGoFarms[e].daliyPoolGo=r.allocPoint.multipliedBy(n).div(a).multipliedBy(86400),t.next=12,o.poolGoFarms[e].strategyContract.controllerFee();case 12:return o.poolGoFarms[e].controllerFee=t.sent,t.next=15,o.poolGoFarms[e].strategyContract.sharesTotal();case 15:return o.poolGoFarms[e].sharesTotal=t.sent,t.next=18,o.poolGoFarms[e].strategyContract.wantLockedTotal();case 18:if(o.poolGoFarms[e].wantLockedTotal=t.sent,0==e&&(o.poolGoFarms[e].apy=n.multipliedBy(31536e3).multipliedBy(r.allocPoint).div(a.multipliedBy(o.poolGoFarms[e].wantLockedTotal)).multipliedBy(100)),1==e&&(o.poolGoFarms[e].apy=n.multipliedBy(31536e3).multipliedBy(r.allocPoint).multipliedBy(o.$store.state.web3.poolgoPrice).div(a.multipliedBy(o.$store.state.web3.pcfxPrice).multipliedBy(o.poolGoFarms[e].wantLockedTotal)).multipliedBy(100)),2==e&&(o.poolGoFarms[e].apy=n.multipliedBy(31536e3).multipliedBy(r.allocPoint).multipliedBy(o.$store.state.web3.poolgoPrice).div(a.multipliedBy(o.$store.state.web3.pcfxPrice.multipliedBy(o.$store.state.web3.poolgoPrice).squareRoot().multipliedBy(2)).multipliedBy(o.poolGoFarms[e].wantLockedTotal)).multipliedBy(100)),3==e&&(o.poolGoFarms[e].apy=n.multipliedBy(31536e3).multipliedBy(r.allocPoint).multipliedBy(o.$store.state.web3.poolgoPrice).div(a.multipliedBy(o.$store.state.web3.poolgoPrice.squareRoot().multipliedBy(2)).multipliedBy(o.poolGoFarms[e].wantLockedTotal)).multipliedBy(100)),o.poolGoFarms[e].isThirdFarm?o.poolGoFarms[e].apyText=o.poolGoFarms[e].apy.toFormat(2)+"%+4.08%":o.poolGoFarms[e].apyText=o.poolGoFarms[e].apy.toFormat(2)+"%",null==o.$store.state.web3.account){t.next=38;break}return t.next=27,o.poolGoContract.balanceOf(o.$store.state.web3.account);case 27:return o.poolGoFarms[e].poolGoMine=t.sent,t.next=30,o.poolGoFarmContract.userInfo(o.poolGoFarms[e].pid,o.$store.state.web3.account);case 30:return i=t.sent,o.poolGoFarms[e].wantLockedTotal.gt(0)&&(o.poolGoFarms[e].wantLockedMine=i.shares.div(o.poolGoFarms[e].sharesTotal).multipliedBy(o.poolGoFarms[e].wantLockedTotal)),t.next=34,o.poolGoFarms[e].wantTokenContract.balanceOf(o.$store.state.web3.account);case 34:return o.poolGoFarms[e].wantTokenNumber=t.sent,t.next=37,o.poolGoFarmContract.pendingPOOLGO(o.poolGoFarms[e].pid,o.$store.state.web3.account);case 37:o.poolGoFarms[e].pendingPoolGo=t.sent;case 38:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),1e3*r,r);case 2:case"end":return e.stop()}}),e)})))()},showUnStakeDialog:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(r=e,null!=r.$store.state.web3.account){o.next=4;break}return o.next=4,r.cfxLogin();case 4:if(0!=r.$store.state.web3.isPortalInstalled){o.next=7;break}return r.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:r.$t("error"),text:r.$t("noticeWallet")}),o.abrupt("return");case 7:if(null!=r.$store.state.web3.account){o.next=10;break}return r.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:r.$t("error"),text:r.$t("noticeAddr")}),o.abrupt("return");case 10:r.curIndex=t,r.unStakeDialogShow=!0;case 12:case"end":return o.stop()}}),o)})))()},getReward:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function o(){var r,n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return r=e,o.next=3,r.poolGoFarmContract.deposit(r.$store.state.web3.account,r.poolGoFarms[t].pid,0);case 3:if(n=o.sent,1!=n.succ){o.next=8;break}e.$vs.notification({duration:6e3,icon:"<i class='bx bx-select-multiple' ></i>",progress:"auto",color:"success",position:"top-center",title:r.$t("info"),text:r.$t("noticeSentece10")}),o.next=10;break;case 8:return e.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:r.$t("error"),text:n.message}),o.abrupt("return");case 10:case"end":return o.stop()}}),o)})))()},confirmUnStake:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,r=o.curIndex,o.unStakeDialogLoading=!0,e.next=5,o.poolGoFarmContract.withdraw(o.$store.state.web3.account,o.poolGoFarms[r].pid,o.poolGoFarms[r].wantLockedTotal);case 5:if(n=e.sent,o.unStakeDialogLoading=!1,console.log(n),1!=n.succ){e.next=12;break}t.$vs.notification({duration:6e3,icon:"<i class='bx bx-select-multiple' ></i>",progress:"auto",color:"success",position:"top-center",title:o.$t("info"),text:o.$t("noticeSentece10")}),e.next=14;break;case 12:return t.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:n.message}),e.abrupt("return");case 14:o.unStakeDialogShow=!1,o.update();case 16:case"end":return e.stop()}}),e)})))()},addLpToken:function(){},showStakeDialog:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function o(){var r,n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(r=e,null!=r.$store.state.web3.account){o.next=4;break}return o.next=4,r.cfxLogin();case 4:if(0!=r.$store.state.web3.isPortalInstalled){o.next=7;break}return r.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:r.$t("error"),text:r.$t("noticeWallet")}),o.abrupt("return");case 7:if(null!=r.$store.state.web3.account){o.next=10;break}return r.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:r.$t("error"),text:r.$t("noticeAddr")}),o.abrupt("return");case 10:return r.curIndex=t,r.stakeDialogShow=!0,r.stakeDialogLoading=!0,r.isNeedApprove=!1,o.next=16,r.poolGoFarms[t].wantTokenContract.allowance(r.$store.state.web3.account,s["default"].poolGoFarmAddress);case 16:return n=o.sent,n.isLessThan(1e10)&&(r.isNeedApprove=!0),o.next=20,r.poolGoFarms[t].wantTokenContract.balanceOf(r.$store.state.web3.account);case 20:r.wantTokenNumber=o.sent,r.stakeDialogLoading=!1,r.unStakeNum="";case 23:case"end":return o.stop()}}),o)})))()},confirmApprove:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,r=o.curIndex,o.stakeDialogLoading=!0,e.next=5,o.poolGoFarms[r].wantTokenContract.allowance(o.$store.state.web3.account,s["default"].poolGoFarmAddress);case 5:if(n=e.sent,!n.isLessThan(1e10)){e.next=18;break}return e.next=9,o.poolGoFarms[r].wantTokenContract.approveMax(o.$store.state.web3.account,s["default"].poolGoFarmAddress);case 9:if(a=e.sent,o.stakeDialogLoading=!1,console.log(a),1!=a.succ){e.next=16;break}o.isNeedApprove=!1,e.next=18;break;case 16:return t.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:a.message}),e.abrupt("return");case 18:o.stakeDialogLoading=!1;case 19:case"end":return e.stop()}}),e)})))()},confirmDeposit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=t,r=o.curIndex,!(""==o.stakeNumber||o.stakeNumber<=0)){e.next=5;break}return o.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:o.$t("correctNumPlaceholder")}),e.abrupt("return");case 5:return o.stakeDialogLoading=!0,e.next=8,o.poolGoFarmContract.deposit(t.$store.state.web3.account,o.poolGoFarms[r].pid,o.stakeNumber);case 8:if(n=e.sent,o.stakeDialogLoading=!1,console.log(n),1!=n.succ){e.next=16;break}o.stakeDialogShow=!1,t.$vs.notification({duration:6e3,icon:"<i class='bx bx-select-multiple' ></i>",progress:"auto",color:"success",position:"top-center",title:o.$t("info"),text:o.$t("noticeSentece9")}),e.next=18;break;case 16:return t.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:n.message}),e.abrupt("return");case 18:o.update();case 19:case"end":return e.stop()}}),e)})))()},updateCfxAndPcfxBalance:function(){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},maxWithdrawPoolMoney:function(){var t=this;t.withdrawPoolMoney=t.ticketNumber.toFixed(2)},maxStakeNumber:function(){var t=this;t.stakeNumber=t.wantTokenNumber.toFixed(2)}})}),p=u,d=(o("3495"),o("2877")),m=Object(d["a"])(p,r,n,!1,null,null,null);e["default"]=m.exports},d7a7:function(t,e,o){}}]);
//# sourceMappingURL=farm.dc496498.js.map
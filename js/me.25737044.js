(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["me"],{"0a99":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-main",{staticStyle:{"background-color":"#000000",color:"white","font-family":"'Noto Sans SC'","font-weight":"300"}},[o("el-row",{staticStyle:{width:"100%"},attrs:{type:"flex",justify:"center"}},[o("el-col",{attrs:{xs:24,sm:24,md:18,xl:18}},[o("el-row",[o("el-col",{attrs:{xs:24,sm:10}},[o("el-row",{attrs:{type:"flex",justify:"flex-start"}},[o("div",{staticStyle:{"text-align":"left",color:"#ffffff","font-size":"18px","margin-top":"20px","margin-left":"20px"},attrs:{span:16}},[o("div",{staticStyle:{display:"inline-block",color:"#E12968"}},[t._v(" "+t._s(t.$t("player"))+" "+t._s(t.showAccount)+" ")]),o("div",{staticStyle:{"font-weight":"300"}},[t._v(" "+t._s(t.$t("accountInfo"))+" ")])])])],1),o("el-col",{attrs:{xs:24,sm:{span:14}}},[o("el-row",{staticStyle:{"margin-top":"20px"}},[t.isExistTimelock?o("el-col",{attrs:{xs:{span:11},sm:{span:8,offset:7}}},[o("vs-button",{staticStyle:{"font-size":"20px","line-height":"40px",background:"linear-gradient(90deg, #E91E63, #FC9E7C)"},attrs:{block:"",color:"#E91E63"},on:{click:function(e){return e.stopPropagation(),t.showTimeoutDepositDialog(e)}}},[t._v(" "+t._s(t.$t("timerDepositButton"))+" ")])],1):t._e(),t.isExistTimelock?o("el-col",{attrs:{xs:{span:11,offset:2},sm:{span:8,offset:1}}},[o("vs-button",{staticStyle:{"font-size":"20px","line-height":"40px"},attrs:{block:"",border:"",color:"#E91E63"},on:{click:function(e){return e.stopPropagation(),t.showTimeoutWithdrawDialog(e)}}},[t._v(" "+t._s(t.$t("timerWithdrawButton"))+" ")])],1):t._e()],1)],1)],1)],1)],1),o("div",{staticStyle:{"padding-top":"-80px","padding-bottom":"300px",background:"url('home-bg-2.png')","background-repeat":"no-repeat","background-size":"100%","background-position":"right",width:"100%"}}),o("el-row",{staticStyle:{"margin-top":"-270px"},attrs:{type:"flex",justify:"center"}},[o("el-col",{staticStyle:{"line-height":"40px"},attrs:{xs:24,md:18,xl:18}},[o("div",{staticClass:"shadow-border"},[o("el-row",[o("el-col",{attrs:{xs:24,sm:24,lg:24}},[o("div",{staticStyle:{color:"#ffffff"}},[o("el-row",{attrs:{type:"flex",justify:"center"}},[o("el-col",{staticStyle:{"line-height":"60px"},attrs:{xs:24,md:22}},[o("div",{staticClass:"me-shadow-border",staticStyle:{"margin-top":"30px","margin-bottom":"30px"}},[o("el-row",{staticStyle:{"flex-wrap":"wrap","vertical-align":"center","justify-content":"center","align-items":"center"},attrs:{type:"flex"}},[o("el-col",{staticStyle:{"text-align":"center","font-size":"20px","margin-top":"-20px"},attrs:{xs:24,sm:{span:14,offset:1}}},[t._v(" "+t._s(t.$t("depositMoney"))+" "),o("div",{staticStyle:{"text-align":"center","font-size":"50px","font-weight":"600",color:"#FFFFFF",background:"linear-gradient(77.7398deg, #C9225B 0.9521484375%, #FF3278 60.6689453125%, #FC9E7C 100%)","-webkit-background-clip":"text","-webkit-text-fill-color":"transparent","letter-spacing":"8px"}},[t._v(" $"+t._s(t.totalUserMoney)+" ")])]),o("el-col",{staticStyle:{"border-left":"1px dashed #708090"},attrs:{xs:24,sm:{span:9}}},[o("img",{staticStyle:{width:"100%"},attrs:{src:"money-me.png"}})])],1)],1)])],1),o("el-row",[o("div",{})])],1)])],1)],1)])],1),o("el-row",{staticStyle:{"flex-wrap":"wrap","margin-top":"40px",background:"url('home-bg-3.png')","background-repeat":"no-repeat","background-size":"100%","background-position":"left"},attrs:{type:"flex",justify:"center"}},t._l(t.poolTicketArray,(function(e,r){return o("el-col",{key:r,staticStyle:{"line-height":"40px","margin-top":"20px"},attrs:{xs:24,sm:24,md:18,lg:9}},[o("div",{staticStyle:{"background-image":"url('ticket.png')","background-size":"100% 100%","background-repeat":"no-repeat",height:"250px"}},[o("el-row",{staticStyle:{color:"#DD2866","font-size":"24px","padding-top":"40px","text-align":"left","padding-bottom":"30px"},attrs:{type:"flex",justify:"flex-start"}},[o("el-col",{attrs:{type:"flex",span:16,offset:2}},[o("el-row",{staticStyle:{"font-size":"30px","font-weight":"400",color:"#ffffff"}},[t._v(" "+t._s(e.ticketNumber)+" ")]),o("el-row",{staticStyle:{"font-size":"13px",color:"#CECECE"}},[t._v(" "+t._s(t.$t("meSentence1"))+" ")]),o("el-row",{staticStyle:{"font-size":"13px","margin-top":"-10px"}},[t._v(" "+t._s(e.chance)+"% ")]),o("el-row",{staticStyle:{"margin-top":"30px","align-content":"flex-end","align-self":"flex-end",color:"#ffffff"},attrs:{type:"flex"}},[o("el-col",{staticStyle:{"font-weight":"400"},attrs:{span:9}},[t._v(" $"+t._s(e.poolAwardMoney)+" ")]),o("el-col",{attrs:{span:3}},[o("img",{staticStyle:{width:"25px"},attrs:{src:"logo-white.png"}})]),o("el-col",{staticStyle:{color:"#CECECE","font-size":"12px","line-height":"20px"},attrs:{span:12}},[o("el-row",[t._v(" "+t._s(t.$t("meSentence2"))+" ")]),o("el-row",[t._v(" "+t._s(e.formatTime)+" ")])],1)],1)],1),o("el-col",{staticStyle:{color:"#FFFFFF","margin-top":"20px","font-size":"20px"},attrs:{span:4,offset:2}},[o("img",{staticStyle:{"text-align":"left",width:"40px"},attrs:{src:"cfx-logo.svg"}}),o("el-row",[t._v(" PCFX ")])],1)],1)],1)])})),1),o("el-row",{staticStyle:{"margin-top":"50px"},attrs:{type:"flex",justify:"center"}},[o("el-col",{staticStyle:{"line-height":"40px"},attrs:{xs:24,md:18,xl:18}},[o("div",{staticClass:"shadow-border"},[o("el-row",{staticStyle:{"margin-top":"40px"},attrs:{type:"flex",justify:"center"}},[o("el-col",{staticStyle:{"line-height":"40px"},attrs:{xs:24,md:22,xl:22}},[o("el-row",{},[o("el-col",{staticStyle:{"font-weight":"500","font-size":"30px","text-align":"left","padding-left":"10px"},attrs:{span:12}},[o("el-row",{staticStyle:{color:"#DD2866"}},[t._v(" "+t._s(t.totalUnclaimedPoolGoNum)+" ")]),o("el-row",{staticStyle:{"font-size":"15px","font-weight":"200"}},[t._v(" "+t._s(t.$t("meSentence3"))+" ")])],1),o("el-col",{staticStyle:{"font-size":"14px","text-align":"right","margin-top":"10px","padding-right":"10px"},attrs:{span:12}},[o("el-row",{attrs:{type:"flex",justify:"end"}},[o("el-col",{attrs:{xs:24,sm:9}},[o("vs-button",{staticStyle:{"font-size":"16px","line-height":"20px"},attrs:{block:"",border:"",color:"#E91E63"},on:{click:t.claimAll}},[t._v(" "+t._s(t.$t("claimAll"))+" ")])],1)],1),o("el-row",[o("div",{staticStyle:{cursor:"pointer"},on:{click:t.showGovernmentMorePage}},[t._v(" "+t._s(t.$t("meSentence4"))+" ")])])],1)],1),o("el-row",{staticStyle:{border:"2px dashed #E91E63","border-radius":"10px","padding-bottom":"30px","margin-top":"30px","margin-bottom":"30px"},attrs:{type:"flex",justify:"start"}},[o("el-col",{staticStyle:{"margin-top":"30px"},attrs:{xs:{span:4},sm:{span:3,offset:1}}},[o("img",{staticStyle:{width:"60%"},attrs:{src:"cfx-logo.svg"}})]),o("el-col",{staticStyle:{"font-size":"14px","line-height":"30px","text-align":"left","padding-left":"10px"},attrs:{xs:13,sm:8}},[o("el-row",{staticStyle:{"font-size":"24px","margin-top":"30px","font-weight":"400"}},[t._v(" "+t._s(t.$t("cfxPrize"))+" ")]),o("el-row",{staticStyle:{color:"#B7B7B7"}},[t._v(" PCFX ")]),o("el-row",{staticStyle:{color:"#B7B7B7"}},[t._v(" "+t._s(t.$t("meSentence5"))+t._s(t.daliyPoolGo)+" POOLGO /"+t._s(t.$t("days"))+" ")]),o("el-row",{staticStyle:{color:"#B7B7B7"}},[t._v(" *％ "+t._s(t.$t("apy"))+" ")])],1),o("el-col",{staticStyle:{"text-align":"right","margin-top":"26px","line-height":"30px"},attrs:{xs:6,sm:{span:4,offset:7}}},[o("el-row",{staticClass:"change-font-size"},[t._v(" "+t._s(t.$t("meSentence6"))+" ")]),o("el-row",{staticStyle:{"font-size":"24px",color:"#DA1D5E"},attrs:{type:"flex",justify:"end"}},[o("div",{staticStyle:{"text-align":"right"}},[o("img",{staticStyle:{"text-align":"right",width:"22px"},attrs:{src:"poolgo.png"}})]),o("div",{staticClass:"change-poolgo-font-size",staticStyle:{"text-align":"right","margin-top":"-2px","padding-left":"10px"}},[t._v(" "+t._s(t.unclaimedCfxPoolGoNum)+" ")])]),o("el-row",{staticStyle:{color:"#B7B7B7","font-size":"14px"}},[t._v(" "+t._s(t.daliyUserPoolGo)+" POOLGO /"+t._s(t.$t("days"))+" ")]),o("el-row",[o("vs-button",{staticStyle:{"font-size":"16px","line-height":"20px"},attrs:{block:"",border:"",color:"#E91E63"},on:{click:t.claim}},[t._v(" "+t._s(t.$t("claim"))+" ")])],1)],1)],1)],1)],1)],1)])],1),o("el-row",{staticClass:"partner-background",staticStyle:{"padding-top":"50px","padding-bottom":"200px","background-image":"url('home-bg-4.png')","background-repeat":"no-repeat","background-position":"right bottom",width:"100%"},attrs:{type:"flex",justify:"center"}},[o("el-col",{staticStyle:{"line-height":"40px"},attrs:{xs:24,md:18,xl:18}},[o("div",{staticClass:"shadow-border"},[o("el-row",{staticStyle:{"margin-top":"40px"},attrs:{type:"flex",justify:"center"}},[o("el-col",{staticStyle:{"line-height":"40px"},attrs:{xs:24,md:22,xl:22}},[o("el-row",{},[o("el-col",{staticStyle:{"font-weight":"500","font-size":"30px","text-align":"left","padding-left":"10px"},attrs:{span:12}},[t._v(" "+t._s(t.$t("prize"))+" ")])],1),o("div",{staticStyle:{width:"100%",height:"1px","background-color":"#E91E63","margin-top":"20px"}}),o("el-row",{staticStyle:{"margin-top":"10px"},attrs:{type:"flex",align:"middle"}},[o("el-col",{attrs:{xs:12,sm:12}},[0==t.userAwardInfoArray.length?o("el-row",{staticStyle:{"font-size":"26px",color:"#FFFFFF"},attrs:{type:"flex",justify:"start"}},[t._v(" "+t._s(t.$t("meSentence7"))+" ")]):o("el-row",t._l(t.userAwardInfoArray,(function(e,r){return o("el-row",{key:r,staticStyle:{"font-size":"26px",color:"#FFFFFF"},attrs:{type:"flex",justify:"start"}},[o("div",{staticStyle:{"text-align":"right"}},[o("img",{staticStyle:{"text-align":"right",width:"30px"},attrs:{src:"cfx-logo.svg"}})]),o("div",{staticStyle:{"text-align":"right","margin-top":"-4px","padding-left":"20px"}},[t._v(" "+t._s(e.formatAmount)+" PCFX ")])])})),1)],1),o("el-col",{staticStyle:{"text-align":"right"},attrs:{xs:12,sm:12}},[o("img",{staticStyle:{width:"150px"},attrs:{src:"prize.png"}})])],1)],1)],1)],1)])],1),o("el-row",{staticStyle:{margin:"0 auto",color:"#999999"},attrs:{type:"flex",justify:"center"}},[o("el-col",{attrs:{xs:24,sm:8}},[o("vs-button",{staticStyle:{"font-size":"16px","line-height":"20px","margin-top":"-140px"},attrs:{block:"",border:"",color:"#E91E63"},on:{click:t.showConfluxScanPage}},[t._v(" "+t._s(t.$t("meSentence8"))+" ")])],1)],1),o("vs-dialog",{attrs:{loading:t.timelockDepositDialogLoading,width:"550px","not-center":"","prevent-close":""},scopedSlots:t._u([{key:"header",fn:function(){return[o("h4",{staticClass:"not-margin"},[t._v(" "+t._s(t.$t("meSentence9Part1"))),o("b",[t._v(t._s(t.$t("meSentence9Part2")))])])]},proxy:!0},{key:"footer",fn:function(){return[o("div",{staticClass:"con-footer"},[o("vs-button",{attrs:{transparent:""},on:{click:t.timeoutDeposit}},[t._v(" "+t._s(t.$t("noticeConfirm"))+" ")]),o("vs-button",{attrs:{dark:"",transparent:""},on:{click:function(e){t.timelockDepositDialogShow=!1}}},[t._v(" "+t._s(t.$t("noticeCancel"))+" ")])],1)]},proxy:!0}]),model:{value:t.timelockDepositDialogShow,callback:function(e){t.timelockDepositDialogShow=e},expression:"timelockDepositDialogShow"}},[o("div",{staticClass:"con-content"},[o("p",{staticStyle:{"text-align":"left"}},[t._v(" "+t._s(t.$t("meSentence10"))+" ")]),o("vs-input",{attrs:{"icon-after":"",placeholder:"当前可重新存入奖池的PCFX数量为"+t.timelockUserBalance.toFormat(2),type:"number"},scopedSlots:t._u([{key:"icon",fn:function(){return[o("vs-button",{attrs:{circle:"",flat:"",warn:""},on:{click:t.maxTimelockBalance}},[t._v(" "+t._s(t.$t("max"))+" ")])]},proxy:!0}]),model:{value:t.timelockBalance,callback:function(e){t.timelockBalance=e},expression:"timelockBalance"}})],1)]),o("vs-dialog",{attrs:{loading:t.timelockWithdrawDialogLoading,width:"550px","not-center":"","prevent-close":""},scopedSlots:t._u([{key:"header",fn:function(){return[o("h4",{staticClass:"not-margin"},[t._v(" "+t._s(t.$t("meSentence11Part1"))),o("b",[t._v(t._s(t.$t("meSentence11Part2")))])])]},proxy:!0},{key:"footer",fn:function(){return[o("div",{staticClass:"con-footer"},[o("vs-button",{attrs:{transparent:""},on:{click:t.withdrawDeposit}},[t._v(" "+t._s(t.$t("noticeConfirm"))+" ")]),o("vs-button",{attrs:{dark:"",transparent:""},on:{click:function(e){t.timelockWithdrawDialogShow=!1}}},[t._v(" "+t._s(t.$t("noticeCancel"))+" ")])],1)]},proxy:!0}]),model:{value:t.timelockWithdrawDialogShow,callback:function(e){t.timelockWithdrawDialogShow=e},expression:"timelockWithdrawDialogShow"}},[o("div",{staticClass:"con-content"},[o("p",{staticStyle:{"text-align":"left"}},[t._v(" "+t._s(t.$t("meSentence12Part1"))+t._s(t.timelockUserBalance.toFormat(2))+t._s(t.$t("meSentence12Part2"))+" ")])])])],1)},n=[],a=(o("b680"),o("5530")),i=(o("96cf"),o("1da1")),c=o("f121"),s=o("fa7d"),l=o("2f62"),u=o("901e"),p={name:"me",components:{},data:function(){return{poolAwardMoney:0,ticketNumber:0,poolTicketArray:[],unclaimedCfxPoolGoNum:0,daliyPoolGo:0,daliyUserPoolGo:0,userAwardInfoArray:[],totalUserMoney:0,pcfxApy:0,timelockUserBalance:new u["BigNumber"](0),timelockUserBalanceFormat:0,isExistTimelock:!1,isExistWithdrawTimelock:!1,timelockUserAvaliableAt:null,timelockDepositDialogShow:!1,timelockBalance:"",timelockDepositDialogLoading:!1,timelockWithdrawDialogShow:!1,timelockWithdrawDialogLoading:!1,intervalTimer:null,secondTimer:null,isFirstRun:!0,dripRatePerSecond:0,formatTime:0,prizePeriodRemainingSeconds:0}},computed:{totalUnclaimedPoolGoNum:function(){return this.unclaimedCfxPoolGoNum},pcfxContract:function(){return this.$store.state.web3.pcfxContract},ticketContract:function(){return this.$store.state.web3.ticketContract},poolGoContract:function(){return this.$store.state.web3.poolGoContract},prizePoolContract:function(){return this.$store.state.web3.prizePoolContract},periodicPrizeStrategyContract:function(){return this.$store.state.web3.periodicPrizeStrategyContract},tokenFaucetContract:function(){return this.$store.state.web3.tokenFaucetContract},cfxStakeContract:function(){return this.$store.state.web3.cfxStakeContract},tokenFaucetProxyFactoryContract:function(){return this.$store.state.web3.tokenFaucetProxyFactoryContract},showAccount:function(){return null!=this.$store.state.web3.account?s["a"].shortAddr(this.$store.state.web3.account):""},account:function(){return this.$store.state.web3.account}},watch:{account:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,r,n,a,i,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=t,null!=o.$store.state.web3.account){e.next=4;break}return e.next=4,o.cfxLogin();case 4:if(0!=o.$store.state.web3.isPortalInstalled){e.next=8;break}return o.$router.push({path:"/pools"}),o.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:o.$t("noticeWallet")}),e.abrupt("return");case 8:if(null!=o.$store.state.web3.account){e.next=12;break}return o.$router.push({path:"/pools"}),o.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:o.$t("noticeAddr")}),e.abrupt("return");case 12:return e.next=14,o.prizePoolContract.getUserAwardInfo(o.$store.state.web3.account);case 14:for(r=e.sent,n=[],a=0,i=0;i<r.length;i++)r[i].amount.gt(0)&&(n[a]={},n[a].formatAmount=r[i].amount.toFormat(0),a++);return o.userAwardInfoArray=n,e.next=21,o.tokenFaucetContract.dripRatePerSecond();case 21:return c=e.sent,o.dripRatePerSecond=c,o.daliyPoolGo=o.dripRatePerSecond.multipliedBy(86400).toFormat(0),e.next=26,o.periodicPrizeStrategyContract.prizePeriodRemainingSeconds();case 26:l=e.sent.toNumber(),o.prizePeriodRemainingSeconds=l,o.formatTime=s["a"].formatSeconds(o.prizePeriodRemainingSeconds),o.updateTimelockInfo(),o.update(),o.secondTimer=setInterval(o.countSecond,1e3),o.intervalTimer=setInterval(o.update,6e3);case 33:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){var t=this;clearTimeout(t.intervalTimer),clearTimeout(t.secondTimer)},methods:Object(a["a"])(Object(a["a"])({},Object(l["b"])(["cfxLogin"])),{},{showGovernmentMorePage:function(){window.open("https://docs.poolgo.finance/poolgo-finance/governance")},countSecond:function(){var t=this;t.prizePeriodRemainingSeconds>0?(t.prizePeriodRemainingSeconds--,t.formatTime=s["a"].formatSeconds(t.prizePeriodRemainingSeconds),0!=t.poolTicketArray.length&&(t.poolTicketArray[0].formatTime=t.formatTime)):clearTimeout(t.secondTimer)},showConfluxScanPage:function(){window.open(c["default"].viewOnConfluxScan)},showTimeoutDepositDialog:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,o.timelockDepositDialogShow=!0,o.timelockDepositDialogLoading=!0,e.next=5,o.prizePoolContract.timelockBalanceOf(o.$store.state.web3.account);case 5:r=e.sent,o.timelockUserBalance=r,o.timelockDepositDialogLoading=!1,o.timelockBalance="";case 9:case"end":return e.stop()}}),e)})))()},showTimeoutWithdrawDialog:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,r,n,a,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,e.next=3,t.$store.state.web3.confluxReader.getStatus();case 3:return r=e.sent,e.next=6,t.$store.state.web3.confluxReader.getBlockByHash(r.bestHash);case 6:if(n=e.sent,!o.timelockBalanceAvailableAt.gt(n.timestamp)){e.next=12;break}return a=o.timelockBalanceAvailableAt.minus(n.timestamp),i=s["a"].formatSeconds(a.toNumber()),t.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:o.$t("noticeSentece7Part1")+i+o.$t("noticeSentece7Part2")}),e.abrupt("return");case 12:return o.timelockWithdrawDialogShow=!0,o.timelockWithdrawDialogLoading=!0,e.next=16,o.prizePoolContract.timelockBalanceOf(o.$store.state.web3.account);case 16:c=e.sent,o.timelockUserBalance=c,o.timelockWithdrawDialogLoading=!1;case 19:case"end":return e.stop()}}),e)})))()},withdrawDeposit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,o.timelockWithdrawDialogLoading=!0,e.next=4,o.prizePoolContract.sweepTimelockBalances(o.$store.state.web3.account,[o.$store.state.web3.account]);case 4:if(r=e.sent,o.timelockWithdrawDialogLoading=!1,1!=r.succ){e.next=10;break}t.$vs.notification({duration:6e3,icon:"<i class='bx bx-select-multiple' ></i>",progress:"auto",color:"success",position:"top-center",title:o.$t("info"),text:o.$t("noticeSentece3")}),e.next=12;break;case 10:return t.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:r.message}),e.abrupt("return");case 12:o.timelockWithdrawDialogShow=!1,o.updateCfxAndPcfxBalance(),o.updateTimelockInfo();case 15:case"end":return e.stop()}}),e)})))()},timeoutDeposit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=t,!(""==o.timelockBalance||o.timelockBalance<=0)){e.next=4;break}return o.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:o.$t("correctNumPlaceholder")}),e.abrupt("return");case 4:return o.timelockDepositDialogLoading=!0,e.next=7,o.prizePoolContract.timelockDepositTo(o.$store.state.web3.account,o.$store.state.web3.account,o.timelockBalance,c["default"].ticketAddress);case 7:if(r=e.sent,o.timelockDepositDialogLoading=!1,1!=r.succ){e.next=13;break}t.$vs.notification({duration:6e3,icon:"<i class='bx bx-select-multiple' ></i>",progress:"auto",color:"success",position:"top-center",title:o.$t("info"),text:o.$t("noticeSentece4")}),e.next=15;break;case 13:return t.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:r.message}),e.abrupt("return");case 15:o.timelockDepositDialogShow=!1,o.updateCfxAndPcfxBalance(),o.updateTimelockInfo();case 18:case"end":return e.stop()}}),e)})))()},claimAll:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,e.next=3,o.tokenFaucetProxyFactoryContract.claimAll(o.$store.state.web3.account,[c["default"].tokenFaucetAddress]);case 3:r=e.sent,1==r.succ?o.$vs.notification({duration:6e3,icon:"<i class='bx bx-select-multiple' ></i>",progress:"auto",color:"success",position:"top-center",title:o.$t("info"),text:o.$t("meSentence13")}):o.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:r.message});case 5:case"end":return e.stop()}}),e)})))()},update:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,r,n,a,c,s,l,p,m,f,d,x;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=t,null==o.$store.state.web3.account){e.next=42;break}return e.next=4,o.ticketContract.balanceOf(o.$store.state.web3.account);case 4:return r=e.sent,e.next=7,o.ticketContract.totalSupply();case 7:return n=e.sent,o.ticketNumber=r.toFormat(1),a=r.multipliedBy(o.$store.state.web3.pcfxPrice),o.totalUserMoney=a.toFormat(0),e.next=13,o.cfxStakeContract.balanceOfUnderlyingView();case 13:return c=e.sent,e.next=16,o.prizePoolContract.accountedBalance();case 16:return s=e.sent,e.next=19,o.periodicPrizeStrategyContract.prizePeriodRemainingSeconds();case 19:if(l=e.sent,p=c.multipliedBy(l.multipliedBy(.0408).div(31536e3)),m=c.plus(p).minus(s),f=m.multipliedBy(o.$store.state.web3.pcfxPrice),d={},d.ticketNumber=o.ticketNumber,d.chance=r.div(n).multipliedBy(100).toFormat(4),d.poolAwardMoney=f.toFormat(0),d.formatTime=o.formatTime,o.poolTicketArray=[],o.poolTicketArray.push(d),o.daliyUserPoolGo=r.div(n).multipliedBy(o.dripRatePerSecond.multipliedBy(86400)).toFormat(0),o.pcfxApy=new u["BigNumber"](60*o.dripRatePerSecond*60*24*365).multipliedBy(o.$store.state.web3.poolgoPrice).div(n/o.$store.state.web3.pcfxPrice).multipliedBy(100).toFormat(1),!o.isFirstRun){e.next=41;break}return o.isFirstRun=!1,e.next=36,o.tokenFaucetContract.unclaimedBalanceOf(o.$store.state.web3.account);case 36:x=e.sent,o.unclaimedCfxPoolGoNum=x.toFormat(3),o.timelockUserBalance.gt(0)?o.isExistTimelock=!0:o.isExistTimelock=!1,e.next=42;break;case 41:setTimeout(Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o.tokenFaucetContract.unclaimedBalanceOf(o.$store.state.web3.account);case 2:e=t.sent,o.unclaimedCfxPoolGoNum=e.toFormat(3),o.timelockUserBalance.gt(0)?o.isExistTimelock=!0:o.isExistTimelock=!1;case 5:case"end":return t.stop()}}),t)}))),3e3);case 42:case"end":return e.stop()}}),e)})))()},claim:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,e.next=3,o.tokenFaucetContract.claim(t.$store.state.web3.account);case 3:r=e.sent,1==r.succ?o.$vs.notification({duration:6e3,icon:"<i class='bx bx-select-multiple' ></i>",progress:"auto",color:"success",position:"top-center",title:o.$t("info"),text:o.$t("meSentence13")}):o.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:r.message});case 5:case"end":return e.stop()}}),e)})))()},updateCfxAndPcfxBalance:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,e.next=3,o.pcfxContract.balanceOf(o.$store.state.web3.account);case 3:return r=e.sent,o.$store.commit("UPDATE_PCFX_BALANCE",r),e.next=7,t.$store.state.web3.confluxReader.getBalance(o.$store.state.web3.account);case 7:n=e.sent,o.$store.commit("UPDATE_BALANCE",Object(u["BigNumber"])(n).div(Object(u["BigNumber"])(Math.pow(10,18))));case 9:case"end":return e.stop()}}),e)})))()},updateTimelockInfo:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var o,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,e.next=3,o.prizePoolContract.timelockBalanceOf(o.$store.state.web3.account);case 3:return r=e.sent,e.next=6,o.prizePoolContract.timelockBalanceAvailableAt(o.$store.state.web3.account);case 6:n=e.sent,o.timelockUserBalance=r,o.timelockBalanceAvailableAt=n,o.timelockUserBalance.gt(0)?o.isExistTimelock=!0:o.isExistTimelock=!1;case 10:case"end":return e.stop()}}),e)})))()},maxTimelockBalance:function(){var t=this;t.timelockBalance=t.timelockUserBalance.toFixed(2)}})},m=p,f=(o("4f01"),o("2877")),d=Object(f["a"])(m,r,n,!1,null,null,null);e["default"]=d.exports},"4f01":function(t,e,o){"use strict";o("e2e5")},e2e5:function(t,e,o){}}]);
//# sourceMappingURL=me.25737044.js.map
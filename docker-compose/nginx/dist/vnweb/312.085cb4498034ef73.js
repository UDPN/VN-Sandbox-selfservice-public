"use strict";(self.webpackChunkudpn_tem2=self.webpackChunkudpn_tem2||[]).push([[312],{1312:(K,x,l)=>{l.r(x),l.d(x,{ProposalAlianceModule:()=>X});var d=l(9808),m=l(5089),S=l(655),v=l(6661),b=l(8746),y=l(2192),I=l(4842),t=l(5e3),Z=l(72),h=l(4004);let f=(()=>{class a{}return a.list="v1/udpn/control/vote/proposal/manage/alliance/searches",a.info="v1/udpn/control/vote/proposal/manage/alliance/detail",a.vote="v1/udpn/control/proposal/vote",a.submit="v1/udpn/control/vote/proposal/manage/alliance/submit",a.downloadLicense="v1/udpn/member/common/file/download",a})();var U=l(520);let A=(()=>{class a{constructor(e){this.http=e}list(e){return this.http.post(f.list,{inPage:e.inPage||{pageSize:10,pageNum:1},proposalCode:e.proposalCode||"",nodeName:e.nodeName||"",nodeCode:e.nodeCode||"",voteBizType:e.voteBizType||"",submitStartDate:e.startDate||"",submitEndDate:e.endDate||"",voteResult:e.voteResult}).pipe((0,h.U)(i=>i))}info(e){return this.http.post(f.info,{voteId:e.voteId||""}).pipe((0,h.U)(i=>i))}vote(e){return this.http.post(f.vote,{proposalCode:e.proposalCode||"",myselfResult:e.myselfResult||"",myselfRemark:e.myselfRemark||""}).pipe((0,h.U)(i=>i))}submit(e){return this.http.post(f.submit,{voteId:e.voteId||""}).pipe((0,h.U)(i=>i))}setLicense(e){return this.http.post(f.downloadLicense,{hash:e.hash||""}).pipe((0,h.U)(i=>i))}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(U.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var R=l(2214),L=l(827),F=l(5144),D=l(7423),T=l(1062);function J(a,n){if(1&a&&(t.ynx(0,10),t.TgZ(1,"tr",7),t.TgZ(2,"td",11),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"td",12),t._uU(6),t.qZA(),t.qZA(),t.BQk()),2&a){const e=t.oxw();t.xp6(3),t.Oqu(t.lcZ(4,2,"alliance.public.applyExitedReason")),t.xp6(3),t.Oqu(e.infoDatas.applyExitedReason)}}function B(a,n){if(1&a&&(t.ynx(0,6),t.TgZ(1,"tr",13),t.TgZ(2,"td",11),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"td",12),t._UZ(6,"app-udpn-table",14),t.qZA(),t.qZA(),t.BQk()),2&a){const e=t.oxw();t.xp6(3),t.Oqu(t.lcZ(4,3,"alliance.public.information")),t.xp6(3),t.Q6J("dataSource",e.dataSource)("pagedata",e.pagedata)}}class c{constructor(n,e,o){this.spinner=n,this.proposalAlianceService=e,this.store=o,this.nodeInfo=[],this.contactInfo=[],this.pagedata=[{tag:"votingInformation.VotingResult",colunm:"voteResult",colunmData:"voteResult",pip:"voteResult"},{tag:"votingInformation.yesVote",colunm:"voteAgree",colunmData:"voteAgree"},{tag:"votingInformation.negtiveVote",colunm:"voteDisagree",colunmData:"voteDisagree"},{tag:"votingInformation.notVoted",colunm:"voteNot",colunmData:"voteNot"}]}ngOnInit(){this.paramsSubscription=this.params$.subscribe(n=>{"{}"!==JSON.stringify(n.param)&&this.infoData(n.param.voteId)})}infoData(n){this.spinner.show(),this.infoSubscription=this.proposalAlianceService.info({voteId:n}).pipe((0,b.x)(()=>this.spinner.hide())).subscribe(e=>{this.voteBizType=e.data.voteBizType,this.voteResult=e.data.voteResult,this.infoDatas=e.data,this.dataSource=[{voteResult:e.data.voteResult,voteAgree:e.data.voteAgree,voteNot:e.data.voteNot,voteDisagree:e.data.voteDisagree}],this.setSubscription=this.proposalAlianceService.setLicense({hash:e.data.memberLicense}).pipe((0,b.x)(()=>this.spinner.hide())).subscribe(i=>{this.infoMemberLicense="data:image/jpg;base64,"+i.data,this.contactInfo=[[{label:"alliance.public.contactName",value:e.data.chainMemberContact},{label:"alliance.public.mobileNumber",value:e.data.chainMemberPhone}],[{label:"alliance.public.email",value:e.data.nodeEmail}],[{label:"alliance.public.detailedAddress",value:e.data.chainMemberAddr,colspan:3,type:"text"}],[{label:"alliance.public.businessLicense",value:this.infoMemberLicense,type:"img"}],[{label:"alliance.public.myVote",value:e.data.myselfResult,type:"pip",pip:"voteStatus"}],[{label:"alliance.public.votingComments",value:e.data.myselfRemark,colspan:3,type:"html"}]]}),this.nodeInfo=[[{label:"alliance.public.proposalCode",value:e.data.proposalCode},{label:"alliance.public.proposalType",value:e.data.voteBizType,type:"pip",pip:"proposalType"}],[{label:"alliance.public.nodeName",value:e.data.nodeName},{label:"alliance.public.nodeCode",value:e.data.nodeCode}],[{label:"alliance.public.submission",value:e.data.submitDate,type:"pip",pip:"date"},{label:"alliance.public.status",value:e.data.voteResult,type:"pip",pip:"voteResult"}],[{label:"alliance.public.country",value:e.data.country},{label:"alliance.public.gatewayAddress",value:e.data.chainMemberUrl}],[{label:"alliance.public.introduction",value:e.data.nodeTitle,colspan:3,type:"text"}],[{label:"alliance.public.description",value:e.data.nodeRemark,colspan:3,type:"html"}]]})}ngOnDestroy(){var n,e,o;this.store.dispatch(new y.A({})),null===(n=this.paramsSubscription)||void 0===n||n.unsubscribe(),null===(e=this.setSubscription)||void 0===e||e.unsubscribe(),null===(o=this.infoSubscription)||void 0===o||o.unsubscribe()}}c.\u0275fac=function(n){return new(n||c)(t.Y36(Z.t2),t.Y36(A),t.Y36(v.yh))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-info"]],decls:17,vars:13,consts:[["title","detail"],[1,"font-sans","text-sm","whitespace-nowrap","font-bold","mb-4"],[3,"dataShow"],["head","",4,"ngIf"],[1,"font-sans","text-sm","whitespace-nowrap","font-bold","mt-8","mb-4"],["tail","",4,"ngIf"],["tail",""],[1,"h-16"],["colspan","4",1,"text-right"],["mat-stroked-button","","color","primary","type","button","routerLink","../"],["head",""],[1,"text-right","font-sans","text-sm","font-bold","pr-3","w-1/5"],["colspan","3"],[1,"h-36"],[3,"dataSource","pagedata"]],template:function(n,e){1&n&&(t.TgZ(0,"app-udpn-card",0),t.TgZ(1,"div",1),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"app-udpn-info",2),t.YNc(5,J,7,4,"ng-container",3),t.qZA(),t.TgZ(6,"div",4),t._uU(7),t.ALo(8,"translate"),t.qZA(),t.TgZ(9,"app-udpn-info",2),t.YNc(10,B,7,5,"ng-container",5),t.ynx(11,6),t.TgZ(12,"tr",7),t.TgZ(13,"td",8),t.TgZ(14,"button",9),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.qZA(),t.qZA(),t.BQk(),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Oqu(t.lcZ(3,7,"alliance.list.nodeInfo")),t.xp6(2),t.Q6J("dataShow",e.nodeInfo),t.xp6(1),t.Q6J("ngIf",6===e.voteBizType||2===e.voteBizType),t.xp6(2),t.Oqu(t.lcZ(8,9,"alliance.list.contactInfo")),t.xp6(2),t.Q6J("dataShow",e.contactInfo),t.xp6(1),t.Q6J("ngIf",1===e.voteResult||2===e.voteResult),t.xp6(5),t.Oqu(t.lcZ(16,11,"back")))},directives:[R.t,L.m,d.O5,F.$,D.lW,m.rH],pipes:[T.X$],styles:[""]}),(0,S.gn)([(0,v.Ph)(I.s.param)],c.prototype,"params$",void 0);var N=l(9247),C=l(1422),q=l(8966),w=l(6852),P=l(7464);const g=function(a){return{hidden:a}};function M(a,n){if(1&a){const e=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"a",3),t.NdJ("click",function(){const s=t.CHM(e).data,p=t.oxw();return p.onJump(p.app_path_vote,s.voteId,s.proposalCode)}),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.qZA(),t.TgZ(5,"span",4),t._uU(6,"|"),t.qZA(),t.TgZ(7,"div",2),t.TgZ(8,"a",5),t.NdJ("click",function(){const s=t.CHM(e).data;return t.oxw().onSubmit(s.voteId)}),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.qZA(),t.TgZ(11,"span",4),t._uU(12,"|"),t.qZA(),t.TgZ(13,"div",2),t.TgZ(14,"a",6),t.NdJ("click",function(){const s=t.CHM(e).data,p=t.oxw();return p.onJump(p.app_path_info,s.voteId,s.proposalCode)}),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=n.data;t.xp6(2),t.Q6J("ngClass",t.VKq(13,g,0!==e.voteResult||null!==e.myselfResult)),t.xp6(1),t.Oqu(t.lcZ(4,7,"vote")),t.xp6(2),t.Q6J("ngClass",t.VKq(15,g,0!==e.voteResult||null!==e.myselfResult)),t.xp6(3),t.Q6J("ngClass",t.VKq(17,g,2e3!==e.voteResult)),t.xp6(1),t.Oqu(t.lcZ(10,9,"submit")),t.xp6(2),t.Q6J("ngClass",t.VKq(19,g,2e3!==e.voteResult)),t.xp6(4),t.Oqu(t.lcZ(16,11,"detail"))}}let z=(()=>{class a{constructor(e,o,i,s,p,H){this.allianceService=e,this.spinner=o,this.dialog=i,this.router=s,this.sharedService=p,this.store=H,this.app_title="alliance.list.title",this.app_title_fiter="alliance.list.fiter",this.app_path_info=(new N.w).proposalAlianceInfo,this.app_path_vote=(new N.w).proposalAlianceVote,this.snapFilter=this.sharedService.getSnapFilter||{},this.pagedata=[{tag:"alliance.public.proposalCode",colunm:"proposalCode",colunmData:"proposalCode"},{tag:"alliance.public.proposalType",colunm:"voteBizType",colunmData:"voteBizType",pip:"proposalType"},{tag:"alliance.public.nodeCode",colunm:"nodeCode",colunmData:"nodeCode"},{tag:"alliance.public.nodeName",colunm:"nodeName",colunmData:"nodeName"},{tag:"alliance.public.submission",colunm:"submitDate",colunmData:"submitDate",pip:"date"},{tag:"alliance.public.fromVN",colunm:"fromVnName",colunmData:"fromVnName"},{tag:"alliance.public.status",colunm:"voteResult",colunmData:"voteResult",pip:"voteResult"},{tag:"alliance.public.myVote",colunm:"myselfResult",colunmData:"myselfResult",pip:"voteStatus"},{tag:"alliance.list.action",colunm:"Action"}],this.dataFilter=[{name:"proposalCode",tag:"alliance.public.proposalCode",type:"input",maxLen:24},{name:"nodeName",tag:"alliance.public.nodeName",type:"input",maxLen:24},{name:"nodeCode",tag:"alliance.public.nodeCode",type:"input",maxLen:24},{name:"voteBizType",tag:"alliance.public.proposalType",type:"select",option:[{label:"proposalType.all",val:""},{label:"proposalType.nodeOnboarding",val:1},{label:"proposalType.nodeExit",val:2},{label:"proposalType.applyForExit",val:6}]},{name:"submitDate",tag:"alliance.public.submission",type:"rangDate",startName:"startDate",endName:"endDate"},{name:"voteResult",tag:"alliance.public.status",type:"select",option:[{label:"proposalStatus.all",val:""},{label:"proposalStatus.pending",val:0},{label:"proposalStatus.approved",val:1},{label:"proposalStatus.rejected",val:2}]}]}ngOnInit(){this.loadService(this.snapFilter)}loadService(e){this.subscription=this.allianceService.list(e).subscribe(o=>{this.dataSource=o.data,this.total=o.resultPageInfo.total})}fetchAll(e){if(e.hasOwnProperty("type")&&"search"===e.type)return e.data.inPage={pageSize:10,pageNum:1},this.snapFilter=Object.assign(Object.assign({},this.snapFilter),e.data),void this.loadService(this.snapFilter);this.snapFilter=Object.assign(Object.assign({},this.snapFilter),e),this.loadService(this.snapFilter)}init(){this.snapFilter={},this.loadService(this.snapFilter)}onSubmit(e){this.dialog.open(C.h,{panelClass:"dialog-container-custom",data:{title:"Prompt",body:"Are you sure you want to submit this proposal?"}}).afterClosed().subscribe(i=>{i&&(this.submitSubscription=this.allianceService.submit({voteId:e}).subscribe(s=>{0!==s.code||this.dialog.open(C.h,{panelClass:"dialog-container-custom",data:{title:"success",body:"Submit successfully!"}}).afterClosed().subscribe(()=>{this.init()})}))})}onJump(e,o,i){this.store.dispatch(new y.A({voteId:o,proposalCode:i})).subscribe(s=>{this.router.navigate([e])})}ngOnDestroy(){var e,o;null===(e=this.subscription)||void 0===e||e.unsubscribe(),null===(o=this.submitSubscription)||void 0===o||o.unsubscribe(),this.sharedService.setSnapFilter={}}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(A),t.Y36(Z.t2),t.Y36(q.uw),t.Y36(m.F0),t.Y36(w.F),t.Y36(v.yh))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-list"]],decls:2,vars:6,consts:[[3,"title_fiter","title","dataSource","pagedata","dataFilter","t","toParentOk","toParentCal"],[1,"flex"],[1,"c-btn"],[1,"text-blue-900","font-semibold",3,"ngClass","click"],[3,"ngClass"],[1,"text-yellow-500","font-semibold",3,"ngClass","click"],[1,"text-yellow-500","font-semibold",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"app-udpn-list",0),t.NdJ("toParentOk",function(s){return o.fetchAll(s)})("toParentCal",function(){return o.init()}),t.YNc(1,M,17,21,"ng-template"),t.qZA()),2&e&&t.Q6J("title_fiter",o.app_title_fiter)("title",o.app_title)("dataSource",o.dataSource)("pagedata",o.pagedata)("dataFilter",o.dataFilter)("t",o.total)},directives:[P.p,d.mk],pipes:[T.X$],styles:[""]}),a})();var r=l(3075),O=l(9814),Q=l(7322),Y=l(8833);function V(a,n){if(1&a&&(t.ynx(0,21),t.TgZ(1,"tr",17),t.TgZ(2,"td",9),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"td",11),t._uU(6),t.qZA(),t.qZA(),t.BQk()),2&a){const e=t.oxw();t.xp6(3),t.Oqu(t.lcZ(4,2,"alliance.public.applyExitedReason")),t.xp6(3),t.Oqu(e.infoDatas.applyExitedReason)}}class u{constructor(n,e,o,i,s,p){this.spinner=n,this.formBuilder=e,this.dialog=o,this.lacation=i,this.proposalAlianceService=s,this.store=p,this.contactInfo=[],this.nodeInfo=[],this.form=new r.cw({}),this.infoDatas={},this.initFormBuilder()}ngOnInit(){this.paramsSubscription=this.params$.subscribe(n=>{"{}"!==JSON.stringify(n.param)&&this.infoData(n.param.voteId)})}initFormBuilder(){this.form=this.formBuilder.group({myselfRemark:["",[r.kI.required]],myselfResult:["true",[r.kI.required]]})}infoData(n){this.spinner.show(),this.infoSubscription=this.proposalAlianceService.info({voteId:n}).pipe((0,b.x)(()=>this.spinner.hide())).subscribe(e=>{this.infoDatas=e.data,this.setSubscription=this.proposalAlianceService.setLicense({hash:e.data.memberLicense}).pipe((0,b.x)(()=>this.spinner.hide())).subscribe(o=>{this.infoMemberLicense="data:image/jpg;base64,"+o.data,this.contactInfo=[[{label:"alliance.public.contactName",value:e.data.chainMemberContact},{label:"alliance.public.mobileNumber",value:e.data.chainMemberPhone}],[{label:"alliance.public.email",value:e.data.nodeEmail}],[{label:"alliance.public.detailedAddress",value:e.data.chainMemberAddr,colspan:3,type:"html"}],[{label:"alliance.public.businessLicense",value:this.infoMemberLicense,type:"img"}]]}),this.nodeInfo=[[{label:"alliance.public.proposalCode",value:e.data.proposalCode},{label:"alliance.public.proposalType",value:e.data.voteBizType,type:"pip",pip:"proposalType"}],[{label:"alliance.public.nodeName",value:e.data.nodeName},{label:"alliance.public.nodeCode",value:e.data.nodeCode}],[{label:"alliance.public.submission",value:e.data.submitDate,type:"pip",pip:"date"},{label:"alliance.public.status",value:e.data.voteResult,type:"pip",pip:"voteResult"}],[{label:"alliance.public.country",value:e.data.country},{label:"alliance.public.gatewayAddress",value:e.data.chainMemberUrl}],[{label:"alliance.public.introduction",value:e.data.nodeTitle,colspan:3,type:"html"}],[{label:"alliance.public.description",value:e.data.nodeRemark,colspan:3,type:"html"}]]})}submit(){this.spinner.show(),this.voteSubscription=this.proposalAlianceService.vote({myselfResult:this.form.get("myselfResult").value,proposalCode:this.infoDatas.proposalCode,myselfRemark:this.form.get("myselfRemark").value}).pipe((0,b.x)(()=>this.spinner.hide())).subscribe(n=>{0!==n.code||this.dialog.open(C.h,{panelClass:"dialog-container-custom",data:{title:"success",body:"vote successfully!"}}).afterClosed().subscribe(o=>{o&&this.lacation.back()})})}ngOnDestroy(){var n,e,o,i;this.store.dispatch(new y.A({})),null===(n=this.setSubscription)||void 0===n||n.unsubscribe(),null===(e=this.paramsSubscription)||void 0===e||e.unsubscribe(),null===(o=this.infoSubscription)||void 0===o||o.unsubscribe(),null===(i=this.voteSubscription)||void 0===i||i.unsubscribe()}}u.\u0275fac=function(n){return new(n||u)(t.Y36(Z.t2),t.Y36(r.qu),t.Y36(q.uw),t.Y36(d.Ye),t.Y36(A),t.Y36(v.yh))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-vote"]],decls:45,vars:29,consts:[["title","vote"],[1,"-ml-2"],[3,"formGroup"],[1,"font-sans","text-sm","whitespace-nowrap","font-bold","mb-4"],[3,"dataShow"],["head","",4,"ngIf"],[1,"font-sans","text-sm","whitespace-nowrap","font-bold","mt-4","mb-4"],["tail",""],[1,"h-20"],[1,"text-right","font-sans","text-sm","font-bold","pr-3","w-1/5"],[1,"text-red-600"],["colspan","3"],["formControlName","myselfResult"],["value","true","checked","true",1,"mr-8"],["value","false",1,"second"],["appearance","outline",1,"w-full"],["matInput","","placeholder","comments","formControlName","myselfRemark",1,"!ring-transparent","h-12"],[1,"h-16"],["colspan","4",1,"text-right"],["mat-stroked-button","","color","primary","type","button","routerLink","../"],["mat-raised-button","","color","primary",1,"ml-4",3,"disabled","click"],["head",""]],template:function(n,e){1&n&&(t.TgZ(0,"app-udpn-card",0),t.TgZ(1,"div",1),t.TgZ(2,"form",2),t.TgZ(3,"div",3),t._uU(4),t.ALo(5,"translate"),t.qZA(),t.TgZ(6,"app-udpn-info",4),t.YNc(7,V,7,4,"ng-container",5),t.qZA(),t.TgZ(8,"div",6),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.TgZ(11,"app-udpn-info",4),t.ynx(12,7),t.TgZ(13,"tr",8),t.TgZ(14,"td",9),t.TgZ(15,"span",10),t._uU(16,"*"),t.qZA(),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.TgZ(19,"td",11),t.TgZ(20,"mat-radio-group",12),t.TgZ(21,"mat-radio-button",13),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.TgZ(24,"mat-radio-button",14),t._uU(25),t.ALo(26,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"tr"),t.TgZ(28,"td",9),t.TgZ(29,"span",10),t._uU(30,"*"),t.qZA(),t._uU(31),t.ALo(32,"translate"),t.qZA(),t.TgZ(33,"td",11),t.ynx(34),t.TgZ(35,"mat-form-field",15),t._UZ(36,"textarea",16),t.qZA(),t.BQk(),t.qZA(),t.qZA(),t.TgZ(37,"tr",17),t.TgZ(38,"td",18),t.TgZ(39,"button",19),t._uU(40),t.ALo(41,"translate"),t.qZA(),t.TgZ(42,"button",20),t.NdJ("click",function(){return e.submit()}),t._uU(43),t.ALo(44,"translate"),t.qZA(),t.qZA(),t.qZA(),t.BQk(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Q6J("formGroup",e.form),t.xp6(2),t.Oqu(t.lcZ(5,13,"alliance.list.nodeInfo")),t.xp6(2),t.Q6J("dataShow",e.nodeInfo),t.xp6(1),t.Q6J("ngIf",6===e.infoDatas.voteBizType||2===e.infoDatas.voteBizType),t.xp6(2),t.Oqu(t.lcZ(10,15,"alliance.list.contactInfo")),t.xp6(2),t.Q6J("dataShow",e.contactInfo),t.xp6(6),t.Oqu(t.lcZ(18,17,"alliance.public.votingResult")),t.xp6(5),t.Oqu(t.lcZ(23,19,"agree")),t.xp6(3),t.Oqu(t.lcZ(26,21,"disagree")),t.xp6(6),t.Oqu(t.lcZ(32,23,"alliance.public.comments")),t.xp6(9),t.Oqu(t.lcZ(41,25,"back")),t.xp6(2),t.Q6J("disabled",!e.form.valid),t.xp6(1),t.Oqu(t.lcZ(44,27,"save")))},directives:[R.t,r._Y,r.JL,r.sg,L.m,d.O5,O.VQ,r.JJ,r.u,O.U0,Q.KE,Y.Nt,r.Fj,D.lW,m.rH],pipes:[T.X$],styles:[""]}),(0,S.gn)([(0,v.Ph)(I.s.param)],u.prototype,"params$",void 0);const k=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:z},{path:"info",component:c},{path:"vote",component:u}];let E=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[m.Bz.forChild(k)],m.Bz]}),a})();var j=l(3767),$=l(8554);let X=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[j.m,d.ez,$.o,E]]}),a})()}}]);
"use strict";(self.webpackChunkKubediag=self.webpackChunkKubediag||[]).push([[951],{3951:(Tt,O,c)=>{c.r(O),c.d(O,{OperationSetModule:()=>Ot});var h=c(7261),Z=c(4107),T=c(7531),C=c(9224),x=c(3251),g=c(9808),y=c(5245),_=c(2525),f=c(7423),s=c(4999),S=c(9062),b=c(5861),v=c(4139),m=c(3075),t=c(5e3),u=c(1083),Q=c(4004),w=c(9646),J=c(520);let N=(()=>{class o{constructor(e){this.http=e,this.list=[],this.rowList=[]}getList(){const e=this.http.get("/list",{params:{type:"operationsets"}}),i=(0,Q.U)(r=>(this.rowList=r.items,r.items.map(p=>{var l,d;return{name:p.metadata.name,operations:null===(l=p.status)||void 0===l?void 0:l.paths,adjacency:p.spec.adjacencyList,ready:null===(d=p.status)||void 0===d?void 0:d.ready,age:(0,v.KN)(p.metadata.creationTimestamp)}})))(e);return i.subscribe(r=>{this.list=r}),i}create(e){return this.http.post("/create",e)}getOperationSet(e){return(0,w.of)(this.list[+e])}getRowOperationSet(e){return(0,w.of)(this.rowList[+e])}edit(e){return this.http.post("/edit",e)}delete(e){return this.http.post("/delete",this.rowList[e])}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(J.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var M=c(5187),A=c(7322),F=c(508);function P(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Name is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function D(o,a){if(1&o&&(t.TgZ(0,"div",22)(1,"div",23)(2,"mat-form-field",24),t._UZ(3,"input",26),t.YNc(4,P,4,0,"mat-error",27),t.qZA()(),t.TgZ(5,"div",28),t._uU(6," Name of created OperationSet. "),t.qZA()()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("readonly",e.isEdit),t.xp6(1),t.Q6J("ngIf",e.dataSource.controls.name.hasError("required"))}}function q(o,a){1&o&&(t.TgZ(0,"th",29),t._uU(1," ID "),t.qZA())}function j(o,a){if(1&o&&(t.TgZ(0,"td",30),t._uU(1),t.qZA()),2&o){const e=a.index;t.xp6(1),t.hij(" ",e," ")}}function R(o,a){1&o&&(t.TgZ(0,"th",29),t._uU(1," Operation "),t.qZA())}function B(o,a){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.value.operation)}}function k(o,a){if(1&o&&(t.TgZ(0,"mat-option",34),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function L(o,a){if(1&o&&(t.TgZ(0,"mat-select",32),t.YNc(1,k,2,2,"mat-option",33),t.qZA()),2&o){const e=t.oxw().$implicit,n=t.oxw();t.Q6J("formControl",e.get("operation")),t.xp6(1),t.Q6J("ngForOf",n.operationList)}}function z(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," OperationSet is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function I(o,a){if(1&o&&(t.TgZ(0,"td",30),t.YNc(1,B,2,1,"span",27),t.YNc(2,L,2,2,"mat-select",31),t.YNc(3,z,4,0,"mat-error",27),t.qZA()),2&o){const e=a.$implicit,n=a.index;t.xp6(1),t.Q6J("ngIf",0===n),t.xp6(1),t.Q6J("ngIf",n>0),t.xp6(1),t.Q6J("ngIf",e.controls.operation.hasError("required"))}}function E(o,a){1&o&&(t.TgZ(0,"th",29),t._uU(1," To "),t.qZA())}function H(o,a){if(1&o&&(t.TgZ(0,"mat-option",34),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function $(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"mat-select",38),t.NdJ("selectionChange",function(){const i=t.CHM(e),r=i.$implicit,p=i.index,l=t.oxw().index;return t.oxw().delTo(r,p,l)}),t.YNc(2,H,2,2,"mat-option",33),t.TgZ(3,"mat-option",39),t._uU(4," del "),t.qZA()()()}if(2&o){const e=a.$implicit,n=a.index,i=t.oxw().index,r=t.oxw();t.xp6(1),t.Q6J("formControl",e),t.xp6(1),t.Q6J("ngForOf",r.toIndex(i+1,n))}}function G(o,a){if(1&o&&(t.TgZ(0,"mat-option",34),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function V(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"td",30)(1,"div",35),t.YNc(2,$,5,2,"div",36),t.TgZ(3,"div")(4,"mat-select",37),t.NdJ("selectionChange",function(){const r=t.CHM(e).index;return t.oxw().onSelectTo(r)}),t.YNc(5,G,2,2,"mat-option",33),t.qZA()()()()}if(2&o){const e=a.$implicit,n=a.index,i=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.get("to").controls),t.xp6(2),t.Q6J("formControl",e.get("temp")),t.xp6(1),t.Q6J("ngForOf",i.toIndex(n+1))}}function X(o,a){1&o&&t._UZ(0,"th",29)}function K(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"a",42),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().index;return t.oxw().remove(i)}),t._UZ(1,"img",43),t.qZA()}}function W(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"a",42),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).add()}),t._UZ(1,"img",44),t.qZA()}}function tt(o,a){if(1&o&&(t.TgZ(0,"td",40),t.YNc(1,K,2,0,"a",41),t.YNc(2,W,2,0,"a",41),t.qZA()),2&o){const e=a.index,n=t.oxw();t.xp6(1),t.Q6J("ngIf",e>0&&e<n.dataSource.value.data.length-1),t.xp6(1),t.Q6J("ngIf",e===n.dataSource.value.data.length-1)}}function et(o,a){1&o&&t._UZ(0,"tr",45)}function ot(o,a){1&o&&t._UZ(0,"tr",46)}let Y=(()=>{class o{constructor(e,n,i,r,p,l){this.fb=e,this.router=n,this.route=i,this.operationSetService=r,this.operationService=p,this._snackBar=l,this.isEdit=!1,this.title="Create",this.yamlForm=this.fb.group({yaml:["",m.kI.required]}),this.column=this.fb.group({to:this.fb.array([]),operation:"",temp:""}),this.firstColumn=this.fb.group({to:this.fb.array([this.fb.control(1)]),operation:"Start Node",temp:""}),this.dataSource=this.fb.group({name:["",m.kI.required],data:this.fb.array([this.firstColumn,this.column])}),this.displayedColumns=["id","operation","to","operate"],this.operationList=[]}get data(){return this.dataSource.get("data")}ngOnInit(){this.route.queryParams.subscribe(e=>{this.id=e.id,this.id&&(this.isEdit=!0,this.title="Edit",this.getOperationSet(),this.getRowOperationSet())}),this.getOperationList()}getOperationSet(){this.operationSetService.getOperationSet(this.id).subscribe(e=>{var n;console.log(e),this.data.patchValue(e.adjacency),null===(n=this.dataSource.get("name"))||void 0===n||n.patchValue(e.name),this.data.clear(),e.adjacency.forEach(i=>{0===i.id&&(i.operation="Start Node"),this.data.push(this.fb.group({to:this.fb.array(i.to||[]),operation:i.operation||"Start Node",temp:""}))})})}toIndex(e,n){return Array.from({length:this.data.value.length},(i,r)=>r).slice(e).filter(i=>{let r=!0;return this.data.value[e-1].to.forEach((p,l)=>{l!==n&&p===i&&(r=!1)}),r})}getOperationList(){this.operationService.getList().subscribe(e=>{this.operationList=e.map(n=>n.name)})}getRowOperationSet(){var e=this;this.operationSetService.getRowOperationSet(this.id).subscribe(function(){var n=(0,b.Z)(function*(i){const r=yield(0,v.Zz)(i);e.yamlForm.setValue({yaml:r})});return function(i){return n.apply(this,arguments)}}())}onSelectTo(e){var n,i;const r=null===(n=this.data.at(e).get("temp"))||void 0===n?void 0:n.value;r&&this.data.at(e).get("to").push(this.fb.control(r)),null===(i=this.data.at(e).get("temp"))||void 0===i||i.setValue("")}delTo(e,n,i){"del"===e.value&&this.data.at(i).get("to").removeAt(n)}add(){this.data.push(this.fb.group({to:this.fb.array([]),operation:"",temp:""})),this.table.renderRows()}remove(e){this.data.removeAt(e),this.table.renderRows()}onSubmit(){if(!this.dataSource.valid)return;const e=this.dataSource.value;this.isEdit?this.operationSetService.edit(this.createReqParams(e.data,e.name)).subscribe(()=>{this._snackBar.open("\u4fee\u6539\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),this.router.navigate(["/operationSet"])}):this.operationSetService.create(this.createReqParams(e.data,e.name)).subscribe(()=>{this._snackBar.open("\u521b\u5efa\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),this.router.navigate(["/operationSet"])})}createReqParams(e,n){const i=e.filter((l,d)=>0===d||l.operation),p={apiVersion:"diagnosis.kubediag.org/v1",kind:"OperationSet",metadata:{name:n},spec:{adjacencyList:i.map((l,d)=>{delete l.temp;const U=l.to.filter(Zt=>Zt<i.length);return 0===d?{to:U}:{id:d,to:U,operation:l.operation}})}};return console.log(p),p}submitByYaml(){var e=this;return(0,b.Z)(function*(){if(!e.yamlForm.valid)return;const n=yield(0,v.Hv)(e.yamlForm.value.yaml);e.isEdit?e.operationSetService.edit(n).subscribe(()=>{e._snackBar.open("\u4fee\u6539\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),e.router.navigate(["/operationSet"])}):e.operationSetService.create(n).subscribe(()=>{e._snackBar.open("\u521b\u5efa\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),e.router.navigate(["/operationSet"])})})()}cancel(){this.router.navigate(["/operationSet"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.qu),t.Y36(u.F0),t.Y36(u.gz),t.Y36(N),t.Y36(M.f),t.Y36(h.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-create-operation-set"]],viewQuery:function(e,n){if(1&e&&t.Gf(s.BZ,5),2&e){let i;t.iGM(i=t.CRH())&&(n.table=i.first)}},decls:42,vars:7,consts:[[1,"shipping-card"],[1,"title"],["dynamicHeight",""],["label","Form"],[3,"formGroup","ngSubmit"],[1,"tab-content"],["class","row",4,"ngIf"],[1,"form-title"],["mat-table","",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","operation"],["matColumnDef","to"],["matColumnDef","operate"],["mat-cell","","align","center",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["align","end"],["mat-raised-button","","color","primary","type","submit"],["mat-button","",3,"click"],["label","Yaml"],[1,"row"],[1,"col"],[1,"full-width"],["matInput","","formControlName","yaml",1,"textarea"],["matInput","","placeholder","Name","formControlName","name",3,"readonly"],[4,"ngIf"],[1,"col","input-desc"],["mat-header-cell",""],["mat-cell",""],["placeholder","Operation","style","width: 80%;",3,"formControl",4,"ngIf"],["placeholder","Operation",2,"width","80%",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"to"],[4,"ngFor","ngForOf"],["placeholder","ID",1,"select",3,"formControl","selectionChange"],[1,"select",3,"formControl","selectionChange"],["value","del"],["mat-cell","","align","center"],["mat-icon-button","",3,"click",4,"ngIf"],["mat-icon-button","",3,"click"],["width","13","src","./../../../assets//img/delete.png"],["width","13","src","./../../../assets//img/add.png"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1),t._uU(2),t.qZA(),t.TgZ(3,"mat-tab-group",2)(4,"mat-tab",3)(5,"form",4),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(6,"div",5),t.YNc(7,D,7,2,"div",6),t.TgZ(8,"div",7),t._uU(9," AdjacencyList "),t.qZA(),t.TgZ(10,"table",8),t.ynx(11,9),t.YNc(12,q,2,0,"th",10),t.YNc(13,j,2,1,"td",11),t.BQk(),t.ynx(14,12),t.YNc(15,R,2,0,"th",10),t.YNc(16,I,4,3,"td",11),t.BQk(),t.ynx(17,13),t.YNc(18,E,2,0,"th",10),t.YNc(19,V,6,3,"td",11),t.BQk(),t.ynx(20,14),t.YNc(21,X,1,0,"th",10),t.YNc(22,tt,3,2,"td",15),t.BQk(),t.YNc(23,et,1,0,"tr",16),t.YNc(24,ot,1,0,"tr",17),t.qZA()(),t.TgZ(25,"mat-card-actions",18)(26,"button",19),t._uU(27,"Submit"),t.qZA(),t.TgZ(28,"a",20),t.NdJ("click",function(){return n.cancel()}),t._uU(29,"Cancel"),t.qZA()()()(),t.TgZ(30,"mat-tab",21)(31,"form",4),t.NdJ("ngSubmit",function(){return n.submitByYaml()}),t.TgZ(32,"div",5)(33,"div",22)(34,"div",23)(35,"mat-form-field",24),t._UZ(36,"textarea",25),t.qZA()()()(),t.TgZ(37,"mat-card-actions",18)(38,"button",19),t._uU(39,"Submit"),t.qZA(),t.TgZ(40,"a",20),t.NdJ("click",function(){return n.cancel()}),t._uU(41,"Cancel"),t.qZA()()()()()()),2&e&&(t.xp6(2),t.hij(" ",n.title," OperationSet "),t.xp6(3),t.Q6J("formGroup",n.dataSource),t.xp6(2),t.Q6J("ngIf",!n.isEdit),t.xp6(3),t.Q6J("dataSource",n.data.controls),t.xp6(13),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(7),t.Q6J("formGroup",n.yamlForm))},directives:[C.a8,x.SP,x.uX,m._Y,m.JL,m.sg,g.O5,A.KE,T.Nt,m.Fj,m.JJ,m.u,A.TO,s.BZ,s.w1,s.fO,s.ge,s.Dz,s.ev,Z.gD,m.oH,g.sg,F.ey,f.zs,s.as,s.XQ,s.nj,s.Gk,C.hq,f.lW],styles:[".full-width[_ngcontent-%COMP%]{width:100%}.shipping-card[_ngcontent-%COMP%]{min-width:120px;margin:20px auto 0;padding:28px 40px}.input-desc[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:18px}.title[_ngcontent-%COMP%]{font-weight:600;font-size:24px;line-height:36px;display:flex;align-items:center;color:#000;margin-bottom:12px}.form-title[_ngcontent-%COMP%]{font-weight:500;font-size:20px;margin:24px 0}.mat-radio-button[_ngcontent-%COMP%]{display:block;margin:5px 0}table[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.to[_ngcontent-%COMP%]{display:flex}.select[_ngcontent-%COMP%]{width:53px;height:21px;margin:0 8px 0 0;padding:0;background-color:#f8f8f8;text-align:center}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-bottom:16px}.col[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1;margin-right:20px}.col[_ngcontent-%COMP%]:last-child{margin-right:0}.tab-content[_ngcontent-%COMP%]{min-height:330px;padding-top:30px;box-sizing:border-box}.textarea[_ngcontent-%COMP%]{height:320px;background-color:#f8f8f8}"]}),o})();var nt=c(5856),at=c(8966);function it(o,a){1&o&&(t.TgZ(0,"th",16),t._uU(1," Name "),t.qZA())}function rt(o,a){if(1&o&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function ct(o,a){1&o&&(t.TgZ(0,"th",16),t._uU(1," Operations "),t.qZA())}function st(o,a){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij("--\x3e ",e.operation,"")}}function pt(o,a){if(1&o&&(t.TgZ(0,"div",19),t._uU(1),t.YNc(2,st,2,1,"span",20),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e[0].operation," "),t.xp6(1),t.Q6J("ngForOf",e.slice(1))}}function lt(o,a){if(1&o&&(t.TgZ(0,"td",17),t.YNc(1,pt,3,2,"div",18),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Q6J("ngForOf",e.operations)}}function mt(o,a){1&o&&(t.TgZ(0,"th",16),t._uU(1," Ready "),t.qZA())}function dt(o,a){if(1&o&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.ready," ")}}function ut(o,a){1&o&&(t.TgZ(0,"th",16),t._uU(1," Age "),t.qZA())}function ft(o,a){if(1&o&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.age," ")}}function gt(o,a){1&o&&t._UZ(0,"th",16)}function _t(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"td",21)(1,"button",22)(2,"mat-icon"),t._uU(3,"menu"),t.qZA()(),t.TgZ(4,"mat-menu",null,23)(6,"button",24),t.NdJ("click",function(){const r=t.CHM(e).index;return t.oxw().edit(r)}),t._uU(7,"Edit"),t.qZA(),t.TgZ(8,"button",24),t.NdJ("click",function(){const i=t.CHM(e),r=i.index,p=i.$implicit;return t.oxw().delete(r,p)}),t._uU(9,"Delete"),t.qZA()()()}if(2&o){const e=t.MAs(5);t.xp6(1),t.Q6J("matMenuTriggerFor",e)}}function ht(o,a){1&o&&t._UZ(0,"tr",25)}function Ct(o,a){1&o&&t._UZ(0,"tr",26)}const xt=function(){return[5,10,20]},St=[{path:"",component:(()=>{class o{constructor(e,n,i,r){this.operationSetService=e,this.dialog=n,this._snackBar=i,this.router=r,this.displayedColumns=["name","operations","ready","age","operate"]}ngAfterViewInit(){this.getOperationSetList()}getOperationSetList(){Promise.resolve().then(()=>{this.operationSetService.getList().subscribe(e=>{this.dataSource=new s.by(e),this.dataSource.paginator=this.paginator})})}edit(e){this.router.navigate(["/operationSet/edit"],{queryParams:{id:e}})}delete(e,n){this.dialog.open(nt.F,{width:"780px",data:{type:"OperationSet",name:n.name}}).afterClosed().subscribe(r=>{r&&this.operationSetService.delete(e).subscribe(()=>{this._snackBar.open("\u5220\u9664\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),this.getOperationSetList()})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(N),t.Y36(at.uw),t.Y36(h.ux),t.Y36(u.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-operation-set"]],viewQuery:function(e,n){if(1&e&&t.Gf(S.NW,5),2&e){let i;t.iGM(i=t.CRH())&&(n.paginator=i.first)}},decls:25,vars:6,consts:[[1,"operation-set"],[1,"header"],["mat-button","","routerLink","/operationSet/create",1,"btn"],[1,"content"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","operations"],["matColumnDef","ready"],["matColumnDef","age"],["matColumnDef","operate"],["mat-cell","","align","center",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions","pageSize"],["mat-header-cell",""],["mat-cell",""],["class","operations-path",4,"ngFor","ngForOf"],[1,"operations-path"],[4,"ngFor","ngForOf"],["mat-cell","","align","center"],["mat-icon-button","","aria-label","Example icon button with a menu icon",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"span"),t.TgZ(3,"a",2),t._uU(4,"Create"),t.qZA()(),t.TgZ(5,"div",3)(6,"table",4),t.ynx(7,5),t.YNc(8,it,2,0,"th",6),t.YNc(9,rt,2,1,"td",7),t.BQk(),t.ynx(10,8),t.YNc(11,ct,2,0,"th",6),t.YNc(12,lt,2,1,"td",7),t.BQk(),t.ynx(13,9),t.YNc(14,mt,2,0,"th",6),t.YNc(15,dt,2,1,"td",7),t.BQk(),t.ynx(16,10),t.YNc(17,ut,2,0,"th",6),t.YNc(18,ft,2,1,"td",7),t.BQk(),t.ynx(19,11),t.YNc(20,gt,1,0,"th",6),t.YNc(21,_t,10,1,"td",12),t.BQk(),t.YNc(22,ht,1,0,"tr",13),t.YNc(23,Ct,1,0,"tr",14),t.qZA(),t._UZ(24,"mat-paginator",15),t.qZA()()),2&e&&(t.xp6(6),t.Q6J("dataSource",n.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(5,xt))("pageSize",10))},directives:[f.zs,u.yS,s.BZ,s.w1,s.fO,s.ge,s.Dz,s.ev,g.sg,f.lW,_.p6,y.Hw,_.VK,_.OP,s.as,s.XQ,s.nj,s.Gk,S.NW],styles:[".operation-set[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;font-weight:600;font-size:24px}.operation-set[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background:#109cf1;box-shadow:0 4px 10px #109cf13d;border-radius:4px;width:140px;height:42px;color:#fff;line-height:42px;text-align:center;font-size:14px}table[_ngcontent-%COMP%]{margin-top:30px;width:100%}.operations-path[_ngcontent-%COMP%]{margin:14px 0;line-height:13px}.mat-column-operations[_ngcontent-%COMP%]{white-space:normal}"]}),o})()},{path:"create",component:Y},{path:"edit",component:Y}];let vt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.Bz.forChild(St)],u.Bz]}),o})(),Ot=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.ez,vt,f.ot,y.Ps,s.p0,S.TU,_.Tx,x.Nh,C.QW,m.UX,T.c,Z.LD,m.u5,h.ZX]]}),o})()}}]);
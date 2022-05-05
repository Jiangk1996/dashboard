"use strict";(self.webpackChunkKubediag=self.webpackChunkKubediag||[]).push([[859],{2859:(at,O,c)=>{c.r(O),c.d(O,{OperationModule:()=>it});var C=c(7261),T=c(4107),x=c(7531),g=c(3251),h=c(8966),S=c(5245),b=c(2525),p=c(7423),P=c(4999),M=c(9062),m=c(9224),u=c(9808),_=c(5861),v=c(4139),a=c(3075),t=c(5e3),d=c(1083),Z=c(5187),f=c(7322),y=c(508);const U=function(o){return{selectKey:o}};function N(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",29),t.NdJ("click",function(){const s=t.CHM(e).index;return t.oxw().changeCurrentCodeSourceIndex(s)}),t._uU(1),t.qZA()}if(2&o){const e=i.$implicit,n=i.index,r=t.oxw();t.Q6J("ngClass",t.VKq(2,U,r.currentCodeSourceIndex===n)),t.xp6(1),t.hij(" ",e.key,"")}}function w(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Name is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function k(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," TimeoutSeconds is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function I(o,i){if(1&o&&(t.TgZ(0,"mat-option",30),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e," ")}}function R(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Runtime is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}let q=(()=>{class o{constructor(e,n,r,s,l){this.fb=e,this.router=n,this.route=r,this.operationService=s,this._snackBar=l,this.isEdit=!1,this.title="Create",this.currentCodeSourceIndex=0,this.addressForm=this.fb.group({name:["",a.kI.required],runtime:"",timeoutSeconds:"",codeSource:this.fb.array([this.fb.group({key:"function.py",value:'def handler(context):\n          result = dict()\n          for key in context:\n              result[key] = context[key]\n          result["a"] = "1"\n          result["b"] = "2"\n\n          return result'})])}),this.yamlForm=this.fb.group({yaml:""}),this.runtimeList=["Python3"]}get codeSource(){return this.addressForm.get("codeSource")}ngOnInit(){this.route.queryParams.subscribe(e=>{this.id=e.id,this.id&&(this.isEdit=!0,this.title="Edit",this.getOperation(),this.getRowOperation())})}getOperation(){this.operationService.getOperation(this.id).subscribe(e=>{var n;this.addressForm.patchValue(e),"Function"===e.type&&(null===(n=e.codeSource)||void 0===n||n.forEach((r,s)=>{s||this.codeSource.removeAt(0),this.codeSource.push(this.fb.group(r))}))})}getRowOperation(){var e=this;this.operationService.getRowDiagnosis(this.id).subscribe(function(){var n=(0,_.Z)(function*(r){const s=yield(0,v.Zz)(r);e.yamlForm.setValue({yaml:s})});return function(r){return n.apply(this,arguments)}}())}changeCurrentCodeSourceIndex(e){this.currentCodeSourceIndex=e}onSubmit(){if(!this.addressForm.valid)return;const e=this.addressForm.value;e.codeSource={},this.codeSource.value.forEach(n=>{e.codeSource[n.key]=n.value}),this.isEdit?this.operationService.edit(this.createScriptRunnerParams(e)).subscribe(()=>{this._snackBar.open("\u4fee\u6539\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),this.router.navigate(["/operation"])}):this.operationService.create(this.createScriptRunnerParams(e)).subscribe(()=>{this._snackBar.open("\u521b\u5efa\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),this.router.navigate(["/operation"])})}submitByYaml(){var e=this;return(0,_.Z)(function*(){if(!e.yamlForm.valid)return;const n=yield(0,v.Hv)(e.yamlForm.value.yaml);e.isEdit?e.operationService.edit(n).subscribe(()=>{e._snackBar.open("\u4fee\u6539\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),e.router.navigate(["/operation"])}):e.operationService.create(n).subscribe(()=>{e._snackBar.open("\u521b\u5efa\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),e.router.navigate(["/operation"])})})()}cancel(){this.router.navigate(["/operation"])}createScriptRunnerParams(e){return{apiVersion:"diagnosis.kubediag.org/v1",kind:"Operation",metadata:{name:e.name},spec:{processor:{timeoutSeconds:e.timeoutSeconds||30,function:{runtime:e.runtime,codeSource:e.codeSource}}}}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.qu),t.Y36(d.F0),t.Y36(d.gz),t.Y36(Z.f),t.Y36(C.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-create-function"]],decls:57,vars:10,consts:[[1,"shipping-card"],[1,"title"],["dynamicHeight",""],["label","Form"],["novalidate","",3,"formGroup","ngSubmit"],[1,"tab-content"],[1,"codeSource-title"],[1,"row"],[1,"codeSource-value"],["formArrayName","codeSource"],[1,"codeSource"],[1,"codeSource-key"],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"formGroupName"],["matInput","",1,"function-textarea",3,"formControl"],[1,"col"],[1,"full-width"],["matInput","","placeholder","Name","formControlName","name",3,"readonly"],[4,"ngIf"],[1,"col","input-desc"],["matInput","","type","number","placeholder","TimeoutSeconds","formControlName","timeoutSeconds"],["placeholder","Runtime","formControlName","runtime"],[3,"value",4,"ngFor","ngForOf"],["align","end"],["mat-raised-button","","color","primary","type","submit"],["mat-button","",3,"click"],["label","Yaml"],[3,"formGroup","ngSubmit"],["matInput","","formControlName","yaml",1,"textarea"],[3,"ngClass","click"],[3,"value"]],template:function(e,n){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1),t._uU(2," Create Operation (Function) "),t.qZA(),t.TgZ(3,"mat-tab-group",2)(4,"mat-tab",3)(5,"form",4),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(6,"div",5)(7,"div",6),t._uU(8," CodeSource "),t.qZA(),t.TgZ(9,"div",7)(10,"mat-form-field",8)(11,"div",9)(12,"div",10)(13,"div",11),t.YNc(14,N,2,4,"div",12),t.qZA(),t.TgZ(15,"div",8)(16,"div",13),t._UZ(17,"textarea",14),t.qZA()()()()()(),t.TgZ(18,"div",7)(19,"div",15)(20,"mat-form-field",16),t._UZ(21,"input",17),t.YNc(22,w,4,0,"mat-error",18),t.qZA()(),t.TgZ(23,"div",19),t._uU(24," Name of created Operation(Function). "),t.qZA()(),t.TgZ(25,"div",7)(26,"div",15)(27,"mat-form-field",16),t._UZ(28,"input",20),t.YNc(29,k,4,0,"mat-error",18),t.qZA()(),t.TgZ(30,"div",19),t._uU(31," Number of seconds after which the processor times out. Defaults to 30 seconds. Minimum value is 1. "),t.qZA()(),t.TgZ(32,"div",7)(33,"div",15)(34,"mat-form-field",16)(35,"mat-select",21),t.YNc(36,I,2,2,"mat-option",22),t.qZA(),t.YNc(37,R,4,0,"mat-error",18),t.qZA()(),t.TgZ(38,"div",19),t._uU(39," The language to use for writing a function. "),t.qZA()(),t.TgZ(40,"mat-card-actions",23)(41,"button",24),t._uU(42,"Submit"),t.qZA(),t.TgZ(43,"a",25),t.NdJ("click",function(){return n.cancel()}),t._uU(44,"Cancel"),t.qZA()()()()(),t.TgZ(45,"mat-tab",26)(46,"form",27),t.NdJ("ngSubmit",function(){return n.submitByYaml()}),t.TgZ(47,"div",5)(48,"div",7)(49,"div",15)(50,"mat-form-field",16),t._UZ(51,"textarea",28),t.qZA()()()(),t.TgZ(52,"mat-card-actions",23)(53,"button",24),t._uU(54,"Submit"),t.qZA(),t.TgZ(55,"a",25),t.NdJ("click",function(){return n.cancel()}),t._uU(56,"Cancel"),t.qZA()()()()()()),2&e){let r;t.xp6(5),t.Q6J("formGroup",n.addressForm),t.xp6(9),t.Q6J("ngForOf",n.codeSource.value),t.xp6(2),t.Q6J("formGroupName",n.currentCodeSourceIndex),t.xp6(1),t.Q6J("formControl",null==n.codeSource||null==(r=n.codeSource.get(""+n.currentCodeSourceIndex))?null:r.get("value")),t.xp6(4),t.Q6J("readonly",n.isEdit),t.xp6(1),t.Q6J("ngIf",n.addressForm.controls.name.hasError("required")),t.xp6(7),t.Q6J("ngIf",n.addressForm.controls.timeoutSeconds.hasError("required")),t.xp6(7),t.Q6J("ngForOf",n.runtimeList),t.xp6(1),t.Q6J("ngIf",n.addressForm.controls.runtime.hasError("required")),t.xp6(9),t.Q6J("formGroup",n.yamlForm)}},directives:[m.a8,g.SP,g.uX,a._Y,a.JL,a.sg,f.KE,a.CE,u.sg,u.mk,a.x0,x.Nt,a.Fj,a.JJ,a.oH,a.u,u.O5,f.TO,a.wV,T.gD,y.ey,m.hq,p.lW,p.zs],styles:[".full-width[_ngcontent-%COMP%]{width:100%}.shipping-card[_ngcontent-%COMP%]{min-width:120px;margin:20px auto 0;padding:28px 40px}.title[_ngcontent-%COMP%]{font-weight:600;font-size:24px;line-height:36px;display:flex;align-items:center;color:#000;margin-bottom:12px}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-bottom:16px}.col[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1;margin-right:20px}.col[_ngcontent-%COMP%]:last-child{margin-right:0}.tab-content[_ngcontent-%COMP%]{min-height:400px;padding-top:30px;box-sizing:border-box}.input-desc[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:18px}.textarea[_ngcontent-%COMP%]{height:320px;background-color:#f8f8f8}.codeSource-title[_ngcontent-%COMP%]{font-weight:500;font-size:20px;line-height:30px}.codeSource[_ngcontent-%COMP%]{width:100%;height:280px;display:flex}.codeSource[_ngcontent-%COMP%]   .codeSource-key[_ngcontent-%COMP%]{width:137px;height:100%;background:#eaeaea;font-size:12px;color:#000;transform:translateY(-2px)}.codeSource[_ngcontent-%COMP%]   .codeSource-key[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-top:9px;padding-left:7px;line-height:19px}.codeSource[_ngcontent-%COMP%]   .codeSource-key[_ngcontent-%COMP%]   .selectKey[_ngcontent-%COMP%]{background:#f8f8f8}.codeSource[_ngcontent-%COMP%]   .codeSource-value[_ngcontent-%COMP%]{flex:1}.codeSource-value[_ngcontent-%COMP%]{width:100%;height:100%;padding:none;margin:none}.function-textarea[_ngcontent-%COMP%]{width:100%;height:280px;background:#f8f8f8;padding:8px;box-sizing:border-box}"]}),o})();function J(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Script is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function Y(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Name is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function E(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," TimeoutSeconds is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function K(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," OperationResultKey is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function Q(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"a",28),t.NdJ("click",function(){t.CHM(e);const r=t.oxw().index;return t.oxw().deleteDate(r)}),t._UZ(1,"img",29),t.qZA()}}function H(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"a",28),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).addData()}),t._UZ(1,"img",30),t.qZA()}}function z(o,i){if(1&o&&(t.TgZ(0,"div",24)(1,"mat-form-field",25),t._UZ(2,"input",26),t.qZA(),t.YNc(3,Q,2,0,"a",27),t.YNc(4,H,2,0,"a",27),t.qZA()),2&o){const e=i.index,n=t.oxw();t.xp6(2),t.Q6J("formControlName",e),t.xp6(1),t.Q6J("ngIf",e!==n.argKeys.length-1),t.xp6(1),t.Q6J("ngIf",e===n.argKeys.length-1)}}let A=(()=>{class o{constructor(e,n,r,s,l){this.fb=e,this.router=n,this.route=r,this.operationService=s,this._snackBar=l,this.isEdit=!1,this.title="Create",this.addressForm=this.fb.group({name:["",a.kI.required],script:"",timeoutSeconds:"",operationResultKey:"",argKeys:this.fb.array([this.fb.control("")])}),this.yamlForm=this.fb.group({yaml:""})}get argKeys(){return this.addressForm.get("argKeys")}ngOnInit(){this.route.queryParams.subscribe(e=>{this.id=e.id,this.id&&(this.isEdit=!0,this.title="Edit",this.getOperation(),this.getRowOperation())})}getOperation(){this.operationService.getOperation(this.id).subscribe(e=>{var n;this.addressForm.patchValue(e),null===(n=e.argKeys)||void 0===n||n.forEach((r,s)=>{s||this.argKeys.removeAt(0),this.argKeys.push(this.fb.control(r))})})}getRowOperation(){var e=this;this.operationService.getRowDiagnosis(this.id).subscribe(function(){var n=(0,_.Z)(function*(r){const s=yield(0,v.Zz)(r);e.yamlForm.setValue({yaml:s})});return function(r){return n.apply(this,arguments)}}())}onSubmit(){if(!this.addressForm.valid)return;const e=this.addressForm.value;this.isEdit?this.operationService.edit(this.createScriptRunnerParams(e)).subscribe(()=>{this._snackBar.open("\u4fee\u6539\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),this.router.navigate(["/operation"])}):this.operationService.create(this.createScriptRunnerParams(e)).subscribe(()=>{this._snackBar.open("\u521b\u5efa\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),this.router.navigate(["/operation"])})}submitByYaml(){var e=this;return(0,_.Z)(function*(){if(!e.yamlForm.valid)return;const n=yield(0,v.Hv)(e.yamlForm.value.yaml);e.isEdit?e.operationService.edit(n).subscribe(()=>{e._snackBar.open("\u4fee\u6539\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),e.router.navigate(["/operation"])}):e.operationService.create(n).subscribe(()=>{e._snackBar.open("\u521b\u5efa\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),e.router.navigate(["/operation"])})})()}cancel(){this.router.navigate(["/operation"])}addData(){this.argKeys.push(this.fb.control(""))}deleteDate(e){this.argKeys.removeAt(e)}createScriptRunnerParams(e){return{apiVersion:"diagnosis.kubediag.org/v1",kind:"Operation",metadata:{name:e.name},spec:{processor:{timeoutSeconds:e.timeoutSeconds||30,scriptRunner:{operationResultKey:e.operationResultKey,script:e.script,argKeys:e.argKeys}}}}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.qu),t.Y36(d.F0),t.Y36(d.gz),t.Y36(Z.f),t.Y36(C.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-create-script-runner"]],decls:56,vars:9,consts:[[1,"shipping-card"],[1,"title"],["dynamicHeight",""],["label","Form"],["novalidate","",3,"formGroup","ngSubmit"],[1,"tab-content"],[1,"row"],[1,"full-width"],["matInput","","formControlName","script",1,"script-textarea"],[4,"ngIf"],[1,"col"],["matInput","","placeholder","Name","formControlName","name",3,"readonly"],[1,"col","input-desc"],["matInput","","type","number","placeholder","TimeoutSeconds","formControlName","timeoutSeconds"],["matInput","","placeholder","OperationResultKey","formControlName","operationResultKey"],[1,"argKeys-text"],["class","col-item","formArrayName","argKeys",4,"ngFor","ngForOf"],[1,"col","argKeys-desc"],["align","end"],["mat-raised-button","","color","primary","type","submit"],["mat-button","",3,"click"],["label","Yaml"],[3,"formGroup","ngSubmit"],["matInput","","formControlName","yaml",1,"textarea"],["formArrayName","argKeys",1,"col-item"],[1,"argKey-input"],["matInput","","placeholder","ArgKeys",3,"formControlName"],["mat-icon-button","",3,"click",4,"ngIf"],["mat-icon-button","",3,"click"],["width","13","src","./../../../assets//img/delete.png"],["width","13","src","./../../../assets//img/add.png"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1),t._uU(2),t.qZA(),t.TgZ(3,"mat-tab-group",2)(4,"mat-tab",3)(5,"form",4),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(6,"div",5)(7,"div",6)(8,"mat-form-field",7),t._UZ(9,"textarea",8),t.YNc(10,J,4,0,"mat-error",9),t.qZA()(),t.TgZ(11,"div",6)(12,"div",10)(13,"mat-form-field",7),t._UZ(14,"input",11),t.YNc(15,Y,4,0,"mat-error",9),t.qZA()(),t.TgZ(16,"div",12),t._uU(17," Name of created Diagnosis. "),t.qZA()(),t.TgZ(18,"div",6)(19,"div",10)(20,"mat-form-field",7),t._UZ(21,"input",13),t.YNc(22,E,4,0,"mat-error",9),t.qZA()(),t.TgZ(23,"div",12),t._uU(24," Number of seconds after which the processor times out. Defaults to 30 seconds. Minimum value is 1. "),t.qZA()(),t.TgZ(25,"div",6)(26,"div",10)(27,"mat-form-field",7),t._UZ(28,"input",14),t.YNc(29,K,4,0,"mat-error",9),t.qZA()(),t.TgZ(30,"div",12),t._uU(31," The prefix of keys to store script stdout, stderr or error message in operationResults. Execution results will not be updated if not specified. "),t.qZA()(),t.TgZ(32,"div",15),t._uU(33," ArgKeys "),t.qZA(),t.TgZ(34,"div",6)(35,"div",10),t.YNc(36,z,5,3,"div",16),t.qZA(),t.TgZ(37,"div",17),t._uU(38," Contains a slice of keys in parameters or operationResults of Diagnosis. The script arguments are generated from specified key value pairs. No argument will be passed to the script if not specified. "),t.qZA()(),t.TgZ(39,"mat-card-actions",18)(40,"button",19),t._uU(41,"Submit"),t.qZA(),t.TgZ(42,"a",20),t.NdJ("click",function(){return n.cancel()}),t._uU(43,"Cancel"),t.qZA()()()()(),t.TgZ(44,"mat-tab",21)(45,"form",22),t.NdJ("ngSubmit",function(){return n.submitByYaml()}),t.TgZ(46,"div",5)(47,"div",6)(48,"div",10)(49,"mat-form-field",7),t._UZ(50,"textarea",23),t.qZA()()()(),t.TgZ(51,"mat-card-actions",18)(52,"button",19),t._uU(53,"Submit"),t.qZA(),t.TgZ(54,"a",20),t.NdJ("click",function(){return n.cancel()}),t._uU(55,"Cancel"),t.qZA()()()()()()),2&e&&(t.xp6(2),t.hij(" ",n.title," Operation (ScriptRunner) "),t.xp6(3),t.Q6J("formGroup",n.addressForm),t.xp6(5),t.Q6J("ngIf",n.addressForm.controls.script.hasError("required")),t.xp6(4),t.Q6J("readonly",n.isEdit),t.xp6(1),t.Q6J("ngIf",n.addressForm.controls.name.hasError("required")),t.xp6(7),t.Q6J("ngIf",n.addressForm.controls.timeoutSeconds.hasError("required")),t.xp6(7),t.Q6J("ngIf",n.addressForm.controls.operationResultKey.hasError("required")),t.xp6(7),t.Q6J("ngForOf",n.argKeys.controls),t.xp6(9),t.Q6J("formGroup",n.yamlForm))},directives:[m.a8,g.SP,g.uX,a._Y,a.JL,a.sg,f.KE,x.Nt,a.Fj,a.JJ,a.u,u.O5,f.TO,a.wV,u.sg,a.CE,p.zs,m.hq,p.lW],styles:[".full-width[_ngcontent-%COMP%]{width:100%}.shipping-card[_ngcontent-%COMP%]{min-width:120px;margin:20px auto 0;padding:28px 40px}.title[_ngcontent-%COMP%]{font-weight:600;font-size:24px;line-height:36px;display:flex;align-items:center;color:#000;margin-bottom:12px}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-bottom:16px}.col[_ngcontent-%COMP%]{flex:1;margin-right:20px}.col[_ngcontent-%COMP%]   .col-item[_ngcontent-%COMP%]{width:100%;display:flex}.col[_ngcontent-%COMP%]   .col-item[_ngcontent-%COMP%]   .argKey-input[_ngcontent-%COMP%]{flex:1}.argKeys-text[_ngcontent-%COMP%]{font-weight:500;font-size:20px;line-height:30px;color:#000}.col[_ngcontent-%COMP%]:last-child{margin-right:0}.tab-content[_ngcontent-%COMP%]{min-height:400px;padding-top:30px;box-sizing:border-box}.input-desc[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:18px}.argKeys-desc[_ngcontent-%COMP%]{display:flex;font-size:18px}.textarea[_ngcontent-%COMP%]{height:320px;background-color:#f8f8f8;padding:5px}.script-textarea[_ngcontent-%COMP%]{height:160px;background-color:#f8f8f8;padding:5px}"]}),o})();function B(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Name is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function D(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Address is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function G(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Port is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function j(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Path is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function V(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Scheme is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function L(o,i){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," TimeoutSeconds is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}let F=(()=>{class o{constructor(e,n,r,s,l){this.fb=e,this.router=n,this.route=r,this.operationService=s,this._snackBar=l,this.isEdit=!1,this.title="Create",this.addressForm=this.fb.group({name:["",a.kI.required],address:"",port:"",path:["",a.kI.required],scheme:["",a.kI.required],timeoutSeconds:""}),this.yamlForm=this.fb.group({yaml:""})}ngOnInit(){this.route.queryParams.subscribe(e=>{this.id=e.id,this.id&&(this.isEdit=!0,this.title="Edit",this.getOperation(),this.getRowOperation())})}getOperation(){this.operationService.getOperation(this.id).subscribe(e=>{this.addressForm.patchValue(e)})}getRowOperation(){var e=this;this.operationService.getRowDiagnosis(this.id).subscribe(function(){var n=(0,_.Z)(function*(r){const s=yield(0,v.Zz)(r);e.yamlForm.setValue({yaml:s})});return function(r){return n.apply(this,arguments)}}())}onSubmit(){if(!this.addressForm.valid)return;const e=this.addressForm.value;this.isEdit?this.operationService.edit(this.createK8sParams(e)).subscribe(()=>{this._snackBar.open("\u4fee\u6539\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),this.router.navigate(["/operation"])}):this.operationService.create(this.createK8sParams(e)).subscribe(()=>{this._snackBar.open("\u521b\u5efa\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),this.router.navigate(["/operation"])})}createK8sParams(e){return{apiVersion:"diagnosis.kubediag.org/v1",kind:"Operation",metadata:{name:e.name},spec:{processor:{timeoutSeconds:e.timeoutSeconds||30,httpServer:{address:e.address||"0.0.0.0",scheme:e.scheme,port:e.port||8090,path:e.path}}}}}submitByYaml(){var e=this;return(0,_.Z)(function*(){if(!e.yamlForm.valid)return;const n=yield(0,v.Hv)(e.yamlForm.value.yaml);e.isEdit?e.operationService.edit(n).subscribe(()=>{e._snackBar.open("\u4fee\u6539\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),e.router.navigate(["/operation"])}):e.operationService.create(n).subscribe(()=>{e._snackBar.open("\u521b\u5efa\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),e.router.navigate(["/operation"])})})()}cancel(){this.router.navigate(["/operation"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.qu),t.Y36(d.F0),t.Y36(d.gz),t.Y36(Z.f),t.Y36(C.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-create-http-server"]],decls:70,vars:10,consts:[[1,"shipping-card"],[1,"title"],["dynamicHeight",""],["label","Form"],["novalidate","",3,"formGroup","ngSubmit"],[1,"tab-content"],[1,"row"],[1,"col"],[1,"full-width"],["matInput","","placeholder","Name","formControlName","name",3,"readonly"],[4,"ngIf"],[1,"col","input-desc"],["matInput","","placeholder","Address","formControlName","address"],["matInput","","placeholder","Port","type","number","formControlName","port"],["matInput","","placeholder","Path","formControlName","path"],["placeholder","Scheme","formControlName","scheme"],["value","http"],["value","https"],["matInput","","placeholder","TimeoutSeconds","type","number","formControlName","timeoutSeconds"],["align","end"],["mat-raised-button","","color","primary","type","submit"],["mat-button","",3,"click"],["label","Yaml"],[3,"formGroup","ngSubmit"],["matInput","","formControlName","yaml",1,"textarea"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1),t._uU(2),t.qZA(),t.TgZ(3,"mat-tab-group",2)(4,"mat-tab",3)(5,"form",4),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"mat-form-field",8),t._UZ(10,"input",9),t.YNc(11,B,4,0,"mat-error",10),t.qZA()(),t.TgZ(12,"div",11),t._uU(13," Name of created Operation(HttpServer). "),t.qZA()(),t.TgZ(14,"div",6)(15,"div",7)(16,"mat-form-field",8),t._UZ(17,"input",12),t.YNc(18,D,4,0,"mat-error",10),t.qZA()(),t.TgZ(19,"div",11),t._uU(20," The serving address of the processor. It must be either an IP or a DNS address. Defaults to KubeDiag agent advertised address if not specified. "),t.qZA()(),t.TgZ(21,"div",6)(22,"div",7)(23,"mat-form-field",8),t._UZ(24,"input",13),t.YNc(25,G,4,0,"mat-error",10),t.qZA()(),t.TgZ(26,"div",11),t._uU(27," The serving port of the processor. Defaults to KubeDiag agent serving port if not specified. "),t.qZA()(),t.TgZ(28,"div",6)(29,"div",7)(30,"mat-form-field",8),t._UZ(31,"input",14),t.YNc(32,j,4,0,"mat-error",10),t.qZA()(),t.TgZ(33,"div",11),t._uU(34," The serving http path of processor. "),t.qZA()(),t.TgZ(35,"div",6)(36,"div",7)(37,"mat-form-field",8)(38,"mat-select",15)(39,"mat-option",16),t._uU(40,"http"),t.qZA(),t.TgZ(41,"mat-option",17),t._uU(42,"https"),t.qZA()(),t.YNc(43,V,4,0,"mat-error",10),t.qZA()(),t.TgZ(44,"div",11),t._uU(45," The serving scheme of processor. It must be either http or https. "),t.qZA()(),t.TgZ(46,"div",6)(47,"div",7)(48,"mat-form-field",8),t._UZ(49,"input",18),t.YNc(50,L,4,0,"mat-error",10),t.qZA()(),t.TgZ(51,"div",11),t._uU(52," Number of seconds after which the processor times out. Defaults to 30 seconds. Minimum value is 1. "),t.qZA()(),t.TgZ(53,"mat-card-actions",19)(54,"button",20),t._uU(55,"Submit"),t.qZA(),t.TgZ(56,"a",21),t.NdJ("click",function(){return n.cancel()}),t._uU(57,"Cancel"),t.qZA()()()()(),t.TgZ(58,"mat-tab",22)(59,"form",23),t.NdJ("ngSubmit",function(){return n.submitByYaml()}),t.TgZ(60,"div",5)(61,"div",6)(62,"div",7)(63,"mat-form-field",8),t._UZ(64,"textarea",24),t.qZA()()()(),t.TgZ(65,"mat-card-actions",19)(66,"button",20),t._uU(67,"Submit"),t.qZA(),t.TgZ(68,"a",21),t.NdJ("click",function(){return n.cancel()}),t._uU(69,"Cancel"),t.qZA()()()()()()),2&e&&(t.xp6(2),t.hij(" ",n.title," Operation (HTTPServer) "),t.xp6(3),t.Q6J("formGroup",n.addressForm),t.xp6(5),t.Q6J("readonly",n.isEdit),t.xp6(1),t.Q6J("ngIf",n.addressForm.controls.name.hasError("required")),t.xp6(7),t.Q6J("ngIf",n.addressForm.controls.address.hasError("required")),t.xp6(7),t.Q6J("ngIf",n.addressForm.controls.port.hasError("required")),t.xp6(7),t.Q6J("ngIf",n.addressForm.controls.path.hasError("required")),t.xp6(11),t.Q6J("ngIf",n.addressForm.controls.scheme.hasError("required")),t.xp6(7),t.Q6J("ngIf",n.addressForm.controls.timeoutSeconds.hasError("required")),t.xp6(9),t.Q6J("formGroup",n.yamlForm))},directives:[m.a8,g.SP,g.uX,a._Y,a.JL,a.sg,f.KE,x.Nt,a.Fj,a.JJ,a.u,u.O5,f.TO,a.wV,T.gD,y.ey,m.hq,p.lW,p.zs],styles:[".full-width[_ngcontent-%COMP%]{width:100%}.shipping-card[_ngcontent-%COMP%]{min-width:120px;margin:20px auto 0;padding:28px 40px}.title[_ngcontent-%COMP%]{font-weight:600;font-size:24px;line-height:36px;display:flex;align-items:center;color:#000;margin-bottom:12px}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-bottom:16px}.col[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1;margin-right:20px}.col[_ngcontent-%COMP%]:last-child{margin-right:0}.tab-content[_ngcontent-%COMP%]{min-height:400px;padding-top:30px;box-sizing:border-box}.input-desc[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:18px}.textarea[_ngcontent-%COMP%]{height:380px;background-color:#f8f8f8}"]}),o})();var X=c(5856);let W=(()=>{class o{constructor(){}ngOnInit(){}createHttpServer(){}createScriptRunner(){}createFunction(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-create-operation-dialog"]],decls:23,vars:0,consts:[["mat-dialog-title","",2,"font-weight","600"],[1,"mat-typography"],[1,"text"],["matRipple","","mat-dialog-close","createHttpServer",1,"item"],[1,"type"],[1,"desc"],["matRipple","","mat-dialog-close","createScriptRunner",1,"item"],["matRipple","","mat-dialog-close","createFunction",1,"item"],["align","end"],["mat-button","","mat-dialog-close","","cdkFocusInitial","","color","primary"]],template:function(e,n){1&e&&(t.TgZ(0,"h2",0),t._uU(1,"Create Operation "),t.qZA(),t.TgZ(2,"mat-dialog-content",1)(3,"div",2),t._uU(4,"Please Select one of the following operation processor type."),t.qZA(),t.TgZ(5,"div",3)(6,"div",4),t._uU(7,"HTTPServer"),t.qZA(),t.TgZ(8,"div",5),t._uU(9,"Specifies the http server to do operations."),t.qZA()(),t.TgZ(10,"div",6)(11,"div",4),t._uU(12,"ScriptRunner"),t.qZA(),t.TgZ(13,"div",5),t._uU(14,"Contains the information to run a script."),t.qZA()(),t.TgZ(15,"div",7)(16,"div",4),t._uU(17,"Function"),t.qZA(),t.TgZ(18,"div",5),t._uU(19,"Contains the details to run a function as an operation."),t.qZA()()(),t.TgZ(20,"mat-dialog-actions",8)(21,"button",9),t._uU(22,"Cancel"),t.qZA()())},directives:[h.uh,h.xY,y.wG,h.ZT,h.H8,p.lW],styles:[".mat-typography[_ngcontent-%COMP%]{font-size:18px;margin-bottom:26px;padding:0 50px}.mat-typography[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-bottom:20px}.mat-typography[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:14px;background:#f8f8f8;box-shadow:0 1px 1px #00000026;color:#000;margin-top:22px;cursor:pointer}.mat-typography[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{font-weight:500;font-size:14px}.mat-typography[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]{font-weight:400;font-size:12px}"]}),o})();function $(o,i){if(1&o&&(t.TgZ(0,"div",7)(1,"span",8),t._uU(2,"URL:"),t.qZA(),t._uU(3),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.hij(" ",e.item.url," ")}}function tt(o,i){if(1&o&&(t.TgZ(0,"div",7)(1,"span",8),t._uU(2,"Runtime: "),t.qZA(),t._uU(3),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.hij("",e.item.runtime," ")}}let et=(()=>{class o{constructor(e,n){this.operationService=e,this.router=n,this.deleteItem=new t.vpe,this.name="http-server-operation"}ngOnInit(){this.type="HTTPServer"}delete(){this.deleteItem.emit()}edit(){this.router.navigate("HTTPServer"===this.item.type?["/operation/edit-httpServer"]:"Function"===this.item.type?["/operation/edit-function"]:["/operation/edit-scriptRunner"],{queryParams:{id:this.id}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(Z.f),t.Y36(d.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-operation-card"]],inputs:{item:"item",id:"id"},outputs:{deleteItem:"deleteItem"},decls:26,vars:8,consts:[[1,"operation-card"],[1,"operation-card-header"],[1,"operation-card-header-icon"],[1,"operation-card-header-info"],[1,"info-name"],[1,"operation-card-header-type"],["class","info-item",4,"ngIf"],[1,"info-item"],[1,"fontW"],[1,"operation-card-content"],[1,"operation-card-action"],["mat-icon-button","",3,"matMenuTriggerFor"],["yPosition","above"],["menu","matMenu"],["mat-menu-item","",3,"click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"div",1),t._UZ(2,"div",2),t.TgZ(3,"div",3)(4,"div",4),t._uU(5),t.TgZ(6,"div",5),t._uU(7),t.qZA()(),t.YNc(8,$,4,1,"div",6),t.YNc(9,tt,4,1,"div",6),t.TgZ(10,"div",7)(11,"span",8),t._uU(12,"TimeoutSeconds:"),t.qZA(),t._uU(13),t.qZA()()(),t.TgZ(14,"div",9),t._uU(15," No description. "),t.qZA(),t.TgZ(16,"div",10)(17,"button",11)(18,"mat-icon"),t._uU(19,"menu"),t.qZA()(),t.TgZ(20,"mat-menu",12,13)(22,"button",14),t.NdJ("click",function(){return n.edit()}),t._uU(23,"Edit"),t.qZA(),t.TgZ(24,"button",14),t.NdJ("click",function(){return n.delete()}),t._uU(25,"Delete"),t.qZA()()()()),2&e){const r=t.MAs(21);t.xp6(2),t.Tol(n.item.type),t.xp6(3),t.hij(" ",n.item.name," "),t.xp6(2),t.Oqu(n.item.type),t.xp6(1),t.Q6J("ngIf","HTTPServer"===n.item.type),t.xp6(1),t.Q6J("ngIf","Function"===n.item.type),t.xp6(4),t.hij(" ",n.item.timeoutSeconds," "),t.xp6(4),t.Q6J("matMenuTriggerFor",r)}},directives:[m.a8,u.O5,p.lW,b.p6,S.Hw,b.VK,b.OP],styles:[".operation-card[_ngcontent-%COMP%]{width:100%;height:180px;box-sizing:border-box}.operation-card[_ngcontent-%COMP%]   .operation-card-header[_ngcontent-%COMP%]{display:flex;color:#000;margin-top:9px;height:64px}.operation-card[_ngcontent-%COMP%]   .operation-card-header[_ngcontent-%COMP%]   .operation-card-header-icon[_ngcontent-%COMP%]{margin-top:2px;width:64px;background-size:contain;background-repeat:no-repeat}.operation-card[_ngcontent-%COMP%]   .operation-card-header[_ngcontent-%COMP%]   .operation-card-header-info[_ngcontent-%COMP%]{margin-left:12px;flex:1}.operation-card[_ngcontent-%COMP%]   .operation-card-header[_ngcontent-%COMP%]   .operation-card-header-info[_ngcontent-%COMP%]   .info-name[_ngcontent-%COMP%]{font-size:18px;font-weight:500;margin-bottom:8px;display:flex;justify-content:space-around}.operation-card[_ngcontent-%COMP%]   .operation-card-header[_ngcontent-%COMP%]   .operation-card-header-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]{width:100%;font-size:12px;line-height:18px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.operation-card[_ngcontent-%COMP%]   .operation-card-header[_ngcontent-%COMP%]   .operation-card-header-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   .fontW[_ngcontent-%COMP%]{font-weight:500}.operation-card[_ngcontent-%COMP%]   .operation-card-header[_ngcontent-%COMP%]   .operation-card-header-type[_ngcontent-%COMP%]{margin-left:auto;font-size:12px;font-weight:500}.operation-card[_ngcontent-%COMP%]   .operation-card-content[_ngcontent-%COMP%]{margin-top:22px}.operation-card[_ngcontent-%COMP%]   .operation-card-action[_ngcontent-%COMP%]{display:flex;justify-content:right}.HTTPServer[_ngcontent-%COMP%]{background-image:url(operation-httpServer.88a1b908164c94fd.svg)}.ScriptRunner[_ngcontent-%COMP%]{background-image:url(operation-scriptRunner.bd81e196c7163657.svg)}.Function[_ngcontent-%COMP%]{background-image:url(operation-function.6e33df939caa87bb.svg)}"]}),o})();function nt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"app-operation-card",6),t.NdJ("deleteItem",function(){const r=t.CHM(e),s=r.index,l=r.$implicit;return t.oxw().delete(s,l)}),t.qZA()}if(2&o){const n=i.index;t.Q6J("item",i.$implicit)("id",n)}}const ot=[{path:"",component:(()=>{class o{constructor(e,n,r,s){this.OperationList=e,this.dialog=n,this.router=r,this._snackBar=s,this.displayedColumns=["name","scheme","address","port","path","timeoutSeconds","operate"]}ngAfterViewInit(){this.getOperationList()}create(){this.dialog.open(W,{width:"780px"}).afterClosed().subscribe(n=>{"createHttpServer"===n&&this.router.navigate(["/operation/create-httpServer"]),"createScriptRunner"===n&&this.router.navigate(["/operation/create-scriptRunner"]),"createFunction"===n&&this.router.navigate(["/operation/create-function"])})}getOperationList(){Promise.resolve().then(()=>{this.OperationList.getList().subscribe(e=>{this.list=e,this.dataSource=new P.by(e),this.dataSource.paginator=this.paginator})})}delete(e,n){this.dialog.open(X.F,{width:"780px",data:{type:"Operation",name:n.name}}).afterClosed().subscribe(s=>{s&&this.OperationList.delete(e).subscribe(()=>{this._snackBar.open("\u5220\u9664\u6210\u529f","done",{duration:1e3,verticalPosition:"top"}),this.getOperationList()})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(Z.f),t.Y36(h.uw),t.Y36(d.F0),t.Y36(C.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-operation"]],viewQuery:function(e,n){if(1&e&&t.Gf(M.NW,5),2&e){let r;t.iGM(r=t.CRH())&&(n.paginator=r.first)}},decls:8,vars:1,consts:[[1,"operation"],[1,"header"],["mat-button","",1,"btn",3,"click"],[1,"content"],[1,"cards"],[3,"item","id","deleteItem",4,"ngFor","ngForOf"],[3,"item","id","deleteItem"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"span"),t.TgZ(3,"a",2),t.NdJ("click",function(){return n.create()}),t._uU(4,"Create"),t.qZA()(),t.TgZ(5,"div",3)(6,"div",4),t.YNc(7,nt,1,2,"app-operation-card",5),t.qZA()()()),2&e&&(t.xp6(7),t.Q6J("ngForOf",n.list))},directives:[p.zs,u.sg,et],styles:[".operation[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;font-weight:600;font-size:24px}.operation[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background:#109cf1;box-shadow:0 4px 10px #109cf13d;border-radius:4px;width:140px;height:42px;color:#fff;line-height:42px;text-align:center;font-size:14px}.operation[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:35px 0 0}.operation[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:30px;grid-row-gap:30px}table[_ngcontent-%COMP%]{margin-top:30px;width:100%}"]}),o})()},{path:"create-httpServer",component:F},{path:"edit-httpServer",component:F},{path:"create-scriptRunner",component:A},{path:"edit-scriptRunner",component:A},{path:"create-function",component:q},{path:"edit-function",component:q}];let rt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.Bz.forChild(ot)],d.Bz]}),o})(),it=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,rt,p.ot,S.Ps,P.p0,M.TU,b.Tx,m.QW,h.Is,y.si,g.Nh,f.lN,a.UX,x.c,T.LD,C.ZX]]}),o})()}}]);
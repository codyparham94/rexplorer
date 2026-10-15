import{a as e,r as t}from"./tslib.es6-qUHyP9zl.js";import{j as n,n as r}from"./Error-BIH9DqW_.js";import{M as i}from"./arrayUtils-BsOR1o4f.js";import{M as a}from"./promiseUtils-BFSgbriP.js";import{_ as o,l as s}from"./mat3-Dp2-WUQo.js";import{l as c}from"./screenUtils-byjnlHTr.js";import{a as l,h as u,s as d,u as f}from"./enums-CsvnPRfA.js";import{a as p,i as m,o as h}from"./VertexArrayObject-BavY3-6C.js";import{s as g,t as _}from"./Texture-Bia7yQWI.js";import{o as v}from"./definitions-ClphhLUj.js";import"./constants-B28-ZZtS.js";import{t as y}from"./SimpleMesh-C6egJqQ6.js";import{a as b,c as x,d as S,f as C,l as w,m as T,o as E,p as ee,s as te,u as ne}from"./util-DK7mHXZc.js";import{Bt as re,D as ie,E as D,Et as ae,Ft as oe,G as se,H as ce,It as le,J as O,K as k,Lt as ue,M as de,Mt as fe,N as A,O as pe,P as j,Pt as me,Q as he,R as ge,Rt as _e,St as ve,T as M,U as ye,W as be,X as xe,Y as Se,_ as Ce,_t as we,a as Te,b as N,bt as Ee,c as P,ct as De,d as Oe,et as F,f as ke,ft as Ae,g as je,h as I,ht as Me,i as L,j as Ne,k as Pe,kt as R,l as Fe,lt as Ie,m as Le,n as Re,nt as ze,o as z,p as B,q as V,r as Be,rt as H,s as U,st as Ve,t as W,tt as He,u as G,vt as K,w as Ue,wt as We,y as Ge,yt as Ke,z as q,zt as J}from"./GraphShaderModule-BkHn9H6f.js";import{a as qe,i as Je,n as Ye,r as Xe,t as Ze}from"./gradientStrokeConstants-CN9yelhJ.js";import{a as Qe,c as $e,i as et,r as tt,s as nt,t as rt}from"./constants-BFM6X_pk.js";import{a as it,d as at,f as ot,h as st,i as ct,l as lt,m as ut,n as dt,p as ft,r as pt,t as mt,u as Y}from"./utils-B8zyWxuQ.js";import{r as ht}from"./utils-D64U7dev.js";import{t as gt}from"./heatmapTextureUtils-tDNfWqHl.js";import{t as _t}from"./ShaderCompiler-D9M996xd.js";import{fn as vt}from"./map-app-BX5-bNLJ.js";var yt=new class{get forceStaticPath(){return n(`esri-cim-animations-enable-status`)===`disabled`}get forceAnimatedPath(){return n(`esri-cim-animations-enable-status`)===`forced`}get freezeGlobalTime(){return n(`esri-cim-animations-freeze-time`)??!1}get spotlightAnimatedSymbols(){return!!n(`esri-cim-animations-spotlight`)}get forceGlobalTimeOrigin(){return!1!==n(`esri-cim-animations-freeze-time`)}},bt=class extends W{};t([P(N)],bt.prototype,`globalTime`,void 0),t([P(k)],bt.prototype,`animationTextureSize`,void 0),t([P(R)],bt.prototype,`toScreen`,void 0),t([P(R)],bt.prototype,`toNdc`,void 0),t([P(N)],bt.prototype,`mapRotation`,void 0),t([P(N)],bt.prototype,`pixelRatio`,void 0),t([P(N)],bt.prototype,`scaleAdjustment`,void 0);var xt=class extends Fe{getVisualVariableData(e){return this._vvData||=K(this.visualVariableData,e).setDebugName(`storage2`),this._vvData}getFilterData(e){return K(this.filterFlags,e).setDebugName(`storage0`)}getAnimationData(e){return K(this.animation,e).setDebugName(`storage1`)}getVVData(e){return this.getVisualVariableData(e)}getDataDrivenData0(e){return K(this.dataDriven0,e).setDebugName(`storage30`)}getDataDrivenData1(e){return K(this.dataDriven1,e).setDebugName(`storage31`)}getDataDrivenData2(e){return K(this.dataDriven2,e).setDebugName(`storage32`)}getGPGPUData(e){return K(this.gpgpu,e).setDebugName(`storage4`)}getLocalTimeOrigin(e){return K(this.localTimeOrigin,e).x.setDebugName(`storage5`)}getFilterFlags(e){return n(`webgl-ignores-sampler-precision`)?me(this.getFilterData(e).x.multiply(le(255))):this.getFilterData(e).x.multiply(le(255))}getLabelVisibility(e){let t=this.getFilterData(e).y.multiply(255);return new N(1).subtract(t)}getAnimationValue(e){return this.getAnimationData(e).x}getSizeValue(e){return this.getVisualVariableData(e).x}getColorValue(e){return this.getVisualVariableData(e).y}getOpacityValue(e){return this.getVisualVariableData(e).z}getRotationValue(e){return this.getVisualVariableData(e).w}};t([z(j)],xt.prototype,`filterFlags`,void 0),t([z(j)],xt.prototype,`animation`,void 0),t([z(j)],xt.prototype,`gpgpu`,void 0),t([z(j)],xt.prototype,`localTimeOrigin`,void 0),t([z(j)],xt.prototype,`visualVariableData`,void 0),t([z(j)],xt.prototype,`dataDriven0`,void 0),t([z(j)],xt.prototype,`dataDriven1`,void 0),t([z(j)],xt.prototype,`dataDriven2`,void 0);var St=class extends W{getAttributeDataCoords(e){if(!this._uv){let t=dt(e),n=this.size,r=fe(t.x),i=fe(t.y).multiply(fe(256)),a=fe(t.z).multiply(fe(256)).multiply(fe(256)),o=le(r.add(i).add(a)),s=Ue(o,n),c=o.subtract(s).divide(n);this._uv=new k(s,c).add(.5).divide(n)}return this._uv}};t([P(N)],St.prototype,`size`,void 0);var Ct=class extends W{};t([P(N)],Ct.prototype,`activeReasons`,void 0),t([P(N)],Ct.prototype,`highlightAll`,void 0);var wt=class extends W{};t([P(k)],wt.prototype,`position`,void 0),t([P(N)],wt.prototype,`distance`,void 0),t([P(N)],wt.prototype,`smallSymbolDistance`,void 0),t([P(N)],wt.prototype,`smallSymbolSizeThreshold`,void 0),t([P(F)],wt.prototype,`tlbr`,void 0);var X=class extends W{};t([P(R)],X.prototype,`displayViewScreenMat3`,void 0),t([P(R)],X.prototype,`displayViewMat3`,void 0),t([P(R)],X.prototype,`displayMat3`,void 0),t([P(R)],X.prototype,`viewMat3`,void 0),t([P(R)],X.prototype,`tileMat3`,void 0),t([P(N)],X.prototype,`displayZoomFactor`,void 0),t([P(N)],X.prototype,`requiredZoomFactor`,void 0),t([P(k)],X.prototype,`tileOffset`,void 0),t([P(N)],X.prototype,`currentScale`,void 0),t([P(N)],X.prototype,`currentZoom`,void 0),t([P(N)],X.prototype,`metersPerSRUnit`,void 0),t([P(N)],X.prototype,`rotation`,void 0),t([P(N)],X.prototype,`pixelRatio`,void 0),t([P(N)],X.prototype,`scaleFactor`,void 0);var Tt=class extends Be{};t([U(0,O)],Tt.prototype,`id`,void 0),t([U(1,N)],Tt.prototype,`bitset`,void 0),t([U(2,k)],Tt.prototype,`pos`,void 0);var Et=class extends Oe{};t([U(14,k)],Et.prototype,`nextPos1`,void 0),t([U(15,k)],Et.prototype,`nextPos2`,void 0);var Dt=class extends ke{},Ot=class extends Re{clip(e,t){let n=new N(0),r=this.getFilterFlags(e);if(n=n.add(le(2).multiply(le(1).subtract(ot(r,0)))),this.inside?n=n.add(le(2).multiply(le(1).subtract(ot(r,1)))):this.outside?n=n.add(le(2).multiply(ot(r,1))):this.highlight&&(n=n.add(le(2).multiply(le(1).subtract(this._checkHighlight(r))))),t!=null){let e=new N(1).subtract(H(t.x,this.view.currentZoom)),r=H(t.y,this.view.currentZoom);n=n.add(new N(2).multiply(e.add(r)))}return n}getFragmentOutput(e,t,n=new N(1/255)){let r=new Te;return r.fragColor=this._maybeWriteHittest(t)??this._maybeHighlight(e,n)??e,r}_maybeHighlight(e,t){return this.highlight?new F(e.rgb,H(t,e.a)):null}_checkHighlight(e){let t=this._checkHighlightBit(e,0);for(let n=1;n<6;n++)t=t.add(this._checkHighlightBit(e,n));return H(new N(.1),t.add(this.highlight.highlightAll))}_checkHighlightBit(e,t){return mt(e,t).multiply(Y(this.highlight.activeReasons,t))}computeHittestTriangle(e,t,n){let{viewMat3:r,tileMat3:i}=this.view,a=r.multiply(i),{nextPos1:o,nextPos2:s}=t;return{pos0:a.multiply(new O(e.pos,1)).xy,pos1:a.multiply(new O(o,1)).xy,pos2:a.multiply(new O(s,1)).xy}}maybeRunHittest(e,t,n){if(this.hittestRequest==null)return null;let r=this.hittest(e,t,n),i=V(r,new N(2)),a=V(r,new N(1)),o=q(a,()=>new F(new N(1/255),0,0,0),q(i,()=>new F(new N(2/255),0,0,0),new F(0))),s=q(ye(i,a),new N(0),new N(2)),c=this.getAttributeDataCoords(e.id),l=lt(c);return s=s.add(this.clip(e.id,e.zoomRange)),{glPointSize:new N(1),glPosition:new F(l,s,1),color:o}}_maybeWriteHittest(e){return this.hittestRequest==null?null:e.color}getAttributeDataCoords(e){return this.storage.getAttributeDataCoords(e)}getVVData(e){return this.storageTextures.getVVData(this.getAttributeDataCoords(e))}getFilterFlags(e){return this.storageTextures.getFilterFlags(this.getAttributeDataCoords(e))}getLocalTimeOrigin(e){return this.storageTextures.getLocalTimeOrigin(this.getAttributeDataCoords(e))}getSizeValue(e){return this.storageTextures.getSizeValue(this.getAttributeDataCoords(e))}getColorValue(e){return this.storageTextures.getColorValue(this.getAttributeDataCoords(e))}getOpacityValue(e){return this.storageTextures.getOpacityValue(this.getAttributeDataCoords(e))}getRotationValue(e){return this.storageTextures.getRotationValue(this.getAttributeDataCoords(e))}};t([L],Ot.prototype,`inside`,void 0),t([L],Ot.prototype,`outside`,void 0),t([B(Ct)],Ot.prototype,`highlight`,void 0),t([P(St)],Ot.prototype,`storage`,void 0),t([z(xt)],Ot.prototype,`storageTextures`,void 0),t([P(X)],Ot.prototype,`view`,void 0),t([B(wt)],Ot.prototype,`hittestRequest`,void 0);var kt=class extends W{getPatternOffsetAtTileOrigin(e,t=new N(0),n=new N(1)){let r=new k(rt).divide(e),i=e.multiply(Ne(this.maxIntsToLocalOrigin.multiply(r))).add(this.tileOffsetFromLocalOrigin).subtract(new N(.5).multiply(e));return i=new k(i.x.multiply(n).subtract(i.y.multiply(t)),i.x.multiply(t).add(i.y.multiply(n))),Ue(i,e)}};t([P(k)],kt.prototype,`tileOffsetFromLocalOrigin`,void 0),t([P(k)],kt.prototype,`maxIntsToLocalOrigin`,void 0);var At=class extends W{};t([P(k)],At.prototype,`size`,void 0);var jt=class extends W{getColor(e,t,n){return de([ye(ut(e),n),t],[je(e,this.values.first()),this.colors.first()],[D(e,this.values.last()),this.colors.last()],[!0,()=>{let t=this.values.findIndex(t=>M(t,e)),n=this.values.get(t),r=t.subtract(1),i=this.values.get(r),a=e.subtract(i).divide(n.subtract(i));return I(this.colors.get(r),this.colors.get(t),a)}])}};t([P(We.ofType(F,8))],jt.prototype,`colors`,void 0),t([P(We.ofType(N,8))],jt.prototype,`values`,void 0);var Mt=class extends W{getOpacity(e){return de([ut(e),new N(1)],[je(e,this.opacityValues.first()),this.opacities.first()],[D(e,this.opacityValues.last()),this.opacities.last()],[!0,()=>{let t=this.opacityValues.findIndex(t=>M(t,e)),n=this.opacityValues.get(t),r=t.subtract(1),i=this.opacityValues.get(r),a=e.subtract(i).divide(n.subtract(i));return I(this.opacities.get(r),this.opacities.get(t),a)}])}};t([P(We.ofType(N,8))],Mt.prototype,`opacities`,void 0),t([P(We.ofType(N,8))],Mt.prototype,`opacityValues`,void 0);var Nt=class extends W{getVVRotationMat4(e){return q(ut(e),Ae.identity(),()=>{let t=this.getNormalizedAngle(e).multiply(tt),n=oe(t),r=De(t);return new Ae(r,n,0,0,n.multiply(new N(-1)),r,0,0,0,0,1,0,0,0,0,1)})}getVVRotationMat3(e){return q(ut(e),R.identity(),()=>{let t=this.getNormalizedAngle(e).multiply(tt),n=oe(t),r=De(t);return new R(r,n,0,n.multiply(new N(-1)),r,0,0,0,1)})}getNormalizedAngle(e){let t=V(this.rotationType,new N(1));return q(t,new N(90).subtract(e),e)}};t([P(N)],Nt.prototype,`rotationType`,void 0);var Pt=class extends W{getSize(e,t){let n=this.minMaxValueAndSize.xy,r=this.minMaxValueAndSize.zw;return q(ut(e),t,()=>{let t=e.subtract(n.x).divide(n.y.subtract(n.x)),i=Ee(t,new N(0),new N(1));return r.x.add(i.multiply(r.y.subtract(r.x)))})}};t([P(F)],Pt.prototype,`minMaxValueAndSize`,void 0);var Ft=class extends W{getSizeForViewScale(e){return de([je(e,this.values.first()),this.sizes.first()],[D(e,this.values.last()),this.sizes.last()],[!0,()=>{let t=this.values.findIndex(t=>M(t,e)),n=this.values.get(t),r=t.subtract(1),i=this.values.get(r),a=e.subtract(i).divide(n.subtract(i));return I(this.sizes.get(r),this.sizes.get(t),a)}])}};t([P(We.ofType(N,8))],Ft.prototype,`sizes`,void 0),t([P(We.ofType(N,8))],Ft.prototype,`values`,void 0);var It=class extends W{getSize(e,t){let n=de([ut(e),t],[je(e,this.values.first()),this.sizes.first()],[D(e,this.values.last()),this.sizes.last()],[!0,()=>{let t=this.values.findIndex(t=>M(t,e)),n=this.values.get(t),r=t.subtract(1),i=this.values.get(r),a=e.subtract(i).divide(n.subtract(i));return I(this.sizes.get(r),this.sizes.get(t),a)}]);return q(ut(n),t,n)}};t([P(We.ofType(N,8))],It.prototype,`sizes`,void 0),t([P(We.ofType(N,8))],It.prototype,`values`,void 0);var Lt=class extends W{getSize(e,t){return q(ut(e),t,e.multiply(this.unitValueToPixelsRatio))}};t([P(N)],Lt.prototype,`unitValueToPixelsRatio`,void 0);function Rt(e){return e.visualVariableSizeMinMaxValue!=null||e.visualVariableSizeScaleStops!=null||e.visualVariableSizeStops!=null||e.visualVariableSizeUnitValue!=null}function zt(e,t,n){if(Rt(e)){let r=e.getSizeValue(t);return e.visualVariableSizeMinMaxValue?.getSize(r,n)??e.visualVariableSizeScaleStops?.getSizeForViewScale(e.view.currentScale)??e.visualVariableSizeStops?.getSize(r,n)??e.visualVariableSizeUnitValue?.getSize(r,n)}return n}function Bt(e,t,n,r=new pe(!1)){if(e.visualVariableColor==null)return n;let i=e.getColorValue(t);return e.visualVariableColor.getColor(i,n,r)}function Vt(e,t){if(e.visualVariableOpacity==null)return new N(1);let n=e.getOpacityValue(t);return e.visualVariableOpacity.getOpacity(n)}function Ht(e,t){if(e.visualVariableRotation==null)return R.identity();let n=e.getRotationValue(t);return e.visualVariableRotation.getVVRotationMat3(n)}function Ut(e,t){if(e.visualVariableRotation==null)return new N(0);let n=e.getRotationValue(t);return e.visualVariableRotation.getNormalizedAngle(n)}var Wt=class extends Tt{};t([U(3,k)],Wt.prototype,`offset`,void 0),t([U(4,F)],Wt.prototype,`sizing`,void 0),t([U(5,F)],Wt.prototype,`value1Position2Value2`,void 0),t([U(6,F)],Wt.prototype,`animationPointerAndBaseSizeAndReferenceSize`,void 0),t([U(7,k)],Wt.prototype,`zoomRange`,void 0),t([U(8,N)],Wt.prototype,`lineLength`,void 0);var Gt=class extends Dt{},Kt=class extends Ot{_vertexPreamble(e,t,n){let{id:r,offset:i,animationPointerAndBaseSizeAndReferenceSize:a,sizing:o}=e,s=a.xy,c=a.z,l=a.w,u=o.xy,d=this._getEvalParams(e,u,n),f,p;if(e.value1Position2Value2){let t;t=this.hittestRequest?new N(0):qt(s,6,d).a.multiply(this.animationInfo.scaleAdjustment);let n=e.pos,r=e.value1Position2Value2.yz,i=e.value1Position2Value2.x,a=e.value1Position2Value2.w,o=t.subtract(i).divide(a.subtract(i));p=n.add(r.subtract(n).multiply(o)),f=H(new N(1),o).add(H(new N(0),J(o)))}else p=e.pos,f=new N(0);let m=o.z,h=Y(e.bitset,Je.bitset.isStroke),g=o.w,_=Y(e.bitset,Je.bitset.scaleSymbolsProportionally),v=qt(s,0,d),y=de([V(Y(e.bitset,Je.bitset.isMapAligned),new N(1)),this.view.rotation.divide(180).multiply(Math.PI)],[!0,new N(0)]),b=new Ke(De(y),oe(y.multiply(-1)),oe(y),De(y)).multiply(v.xy),x=v.z.subtract(y).subtract(t),S=v.w,C=Y(e.bitset,Je.bitset.isSDF),w=zt(this,r,new N(l)).divide(new N(l));return{baseSize:c,animationPointer:s,strokeWidth:m,isOutline:h,unscaledDistanceToPx:g,scaleSymbolsProportionally:_,isSDF:C,position:this._getScreenPosition({id:r,pos:p,offset:i,referenceSize:l,translation:b,rotation:x,scale:S,vvScale:w}),evalParams:d,vvScale:w,scale:S,clip:f}}_getScreenPosition(e){let{pos:t,translation:n,rotation:r,scale:i,offset:a,id:o,vvScale:s}=e,c=Ut(this,o).multiply(Math.PI/180),l=n.x.multiply(4/3),u=n.y.multiply(-1).multiply(4/3),d=oe(c),f=De(c),p=f.multiply(l).add(J(d).multiply(u)),m=d.multiply(l).add(f.multiply(u)),h=oe(r.subtract(c)),g=De(r.subtract(c)),_=new N(0),v=new N(1),{pixelRatio:y}=this.animationInfo,b=new R(v,_,_,_,v,_,p.multiply(y),m.multiply(y),v),x=new R(g,h.multiply(-1),_,h,g,_,0,0,v),S=i.multiply(s).multiply(y).multiply(4/3),C=x.multiply(S),w=this.animationInfo.toScreen.multiply(new O(t,1)),T=b.multiply(w).xy,E=C.multiply(new O(a,0)).xy;return T.add(E)}_clip(e,t){let n=super.clip(e,t),r=je(this._getLocalTimeOrigin(e),new N(0));return yt.forceGlobalTimeOrigin||(n=n.add(de([r,()=>new N(2)],[!0,()=>new N(0)]))),n}_getLocalTimeOrigin(e){return this.getLocalTimeOrigin(e)}_toNdc(e){return this.animationInfo.toNdc.multiply(new O(e,1)).xy}_getEvalParams(e,t,n){let{globalTime:r,animationTextureSize:i}=this.animationInfo;return{globalTime:r,localTimeOrigin:this._getLocalTimeOrigin(e.id),animationTextureSize:i,animationTexture:this.animationTexture,pixelDimensions:t,lineLength:n}}_getColor(e,t){return q(V(t.isSDF,new N(1)),this._getSDFColor(e,t),this._getSpriteColor(e,t))}_getSpriteColor(e,t){return K(this.mosaicTexture,e).multiply(t.color)}_getSDFColor(e,t){let n=K(this.mosaicTexture,e),r=new N(.5).subtract(pt(n)).multiply(t.distanceToPx).multiply(1),i=Ee(new N(.5).subtract(r),new N(0),new N(1)),a=t.color.multiply(i),o=t.outlineSize.multiply(.5),s=se(r).subtract(o),c=Ee(new N(.5).subtract(s),new N(0),new N(1)),l=t.outlineColor.multiply(c);return new N(1).subtract(l.a).multiply(a).add(l)}};function qt(e,t,n){let r=e.add(new k(t,0)),i=K(n.animationTexture,r.add(.5).divide(n.animationTextureSize)).xy;return e=e.add(i),ie({animationPointer:e,...n},F,null,e=>{let{out:t}=e;if(!t)throw Error(`out is null`);return qe({...e,out:t})})}t([P(At)],Kt.prototype,`mosaicInfo`,void 0),t([P(bt)],Kt.prototype,`animationInfo`,void 0),t([P(kt)],Kt.prototype,`localTileOffset`,void 0),t([z(j)],Kt.prototype,`mosaicTexture`,void 0),t([B(jt)],Kt.prototype,`visualVariableColor`,void 0),t([B(Mt)],Kt.prototype,`visualVariableOpacity`,void 0),t([B(Pt)],Kt.prototype,`visualVariableSizeMinMaxValue`,void 0),t([B(Ft)],Kt.prototype,`visualVariableSizeScaleStops`,void 0),t([B(It)],Kt.prototype,`visualVariableSizeStops`,void 0),t([B(Lt)],Kt.prototype,`visualVariableSizeUnitValue`,void 0),t([B(Nt)],Kt.prototype,`visualVariableRotation`,void 0),t([z(j)],Kt.prototype,`animationTexture`,void 0);var Jt=class extends Wt{};t([U(9,F)],Jt.prototype,`tlbr`,void 0),t([U(10,N)],Jt.prototype,`angle`,void 0);var Yt=class extends Oe{};t([U(13,k)],Yt.prototype,`nextPos1`,void 0),t([U(14,k)],Yt.prototype,`nextPos2`,void 0);var Xt=class extends Gt{},Zt=class extends Kt{constructor(){super(...arguments),this.computeAttributes={pos:[`nextPos1`,`nextPos2`]}}_fragmentPoly(e){let t=Ue(e.uv,new N(1)),n=I(e.tlbr.xy,e.tlbr.zw,t);return this._getColor(n,{color:e.color,distanceToPx:e.distanceToPx,isSDF:e.isSDF,outlineColor:e.outlineColor,outlineSize:e.strokeWidth})}_vertexPoly(e){let{position:t,animationPointer:n,evalParams:r,isOutline:i,unscaledDistanceToPx:a,vvScale:o,strokeWidth:s,scaleSymbolsProportionally:c,scale:l,isSDF:u,baseSize:d,clip:f}=this._vertexPreamble(e,new N(0),e.lineLength||new N(0)),p=this._toNdc(t),m=qt(n,1,r);m=new F(m.rgb.multiply(m.a),m.a);let h=q(at(e.bitset,Je.bitset.colorLocked),m,qt(n,2,r));h=new F(h.rgb.multiply(h.a),h.a);let g=qt(n,3,r);g=new F(g.rgb.multiply(g.a),g.a);let _=qt(n,4,r).a,v=qt(n,5,r).a,y=Bt(this,e.id,m,ye(at(e.bitset,Je.bitset.colorLocked),new pe(i))),b=I(y,h,g),x=Vt(this,e.id),S=I(x,_,v);return{unscaledDistanceToPx:a,vvScale:o,strokeWidth:s,scaleSymbolsProportionally:c,scale:l,isSDF:u,baseSize:d,ndc:p,color:b.multiply(S),z:this.clip(e.id,e.zoomRange).add(f.multiply(2)),isOutline:i,evalParams:r,distanceToPx:a.multiply(o)}}};function Qt(e,t){return we(e,ce(t))}function $t(e,t,n){let r=n.subtract(t),i=Qt(e.subtract(t),r),a=Ee(i.divide(Ce(r)),new N(0),new N(1));return ue(e,t.add(a.multiply(n.subtract(t))))}function Z(e){let t=se(e);return H(t.x.add(t.y).add(t.z),new N(1.05))}function Q(e,t,n,r){let i=new R(n.x.multiply(r.y).subtract(r.x.multiply(n.y)),r.x.multiply(t.y).subtract(t.x.multiply(r.y)),t.x.multiply(n.y).subtract(n.x.multiply(t.y)),n.y.subtract(r.y),r.y.subtract(t.y),t.y.subtract(n.y),r.x.subtract(n.x),t.x.subtract(r.x),n.x.subtract(t.x)),a=t.x.multiply(n.y.subtract(r.y)),o=n.x.multiply(r.y.subtract(t.y)),s=r.x.multiply(t.y.subtract(n.y)),c=a.add(o).add(s);return new N(1).divide(c).multiply(i.multiply(new O(1,e)))}function en(e,t,n,r){return V(Z(Q(e,t,n,r)),new N(1))}function tn(e,t,n,r){let i=n.subtract(t),a=r.subtract(t),o=st(i,a),s=A(ze(o,new N(Qe)),M(o,new N(-Qe)));return de([A(Pe(s),en(e.xy,t,n,r)),new N(-1)],[!0,()=>{let i=$t(e,t,n),a=$t(e,n,r),o=$t(e,r,t);return He(He(i,a),o)}])}function nn(e,t,n){let{viewMat3:r,tileMat3:i}=e.view,a=r.multiply(i),o=a.multiply(new O(t.pos,1)),s=a.multiply(new O(n.nextPos1,1)),c=a.multiply(new O(n.nextPos2,1));return tn(e.hittestRequest.position,o.xy,s.xy,c.xy)}function rn(e,t,n){return ue(e,n).subtract(t)}function an(e,t,n,r){let i=e.x,a=e.y,o=t.x,s=t.y,c=n.x,l=n.y,u=r.x,d=r.y,f=u.subtract(c),p=i.subtract(c),m=o.subtract(i),h=d.subtract(l),g=a.subtract(l),_=s.subtract(a),v=h.multiply(m).subtract(f.multiply(_)),y=f.multiply(g).subtract(h.multiply(p)).divide(v),b=m.multiply(g).subtract(_.multiply(p)).divide(v),x=A(Pe(V(v,new N(0))),A(A(D(y,new N(0)),je(y,new N(1))),A(D(b,new N(0)),je(b,new N(1)))));return q(x,new N(1),new N(0))}function on(e,t,n,r,i){return A(A(D(e.x,t),D(e.y,n)),A(ze(e.x,r),je(e.y,i)))}function sn(e,t,n,r){let i=r.xy,a=r.zw,o=new k(a.x,i.y),s=new k(i.x,a.y),c=He(i.x,a.x),l=He(i.y,a.y),u=Se(i.x,a.x),d=Se(i.y,a.y),f=Q(new k(c,l),e,t,n),p=Q(new k(u,d),e,t,n),m=Q(new k(c,d),e,t,n),h=Q(new k(u,l),e,t,n),g=A(V(Z(f),new N(1)),A(V(Z(p),new N(1)),A(V(Z(m),new N(1)),V(Z(h),new N(1))))),_=an(i,o,e.xy,t.xy).add(an(o,a,e.xy,t.xy)).add(an(s,a,e.xy,t.xy)).add(an(s,i,e.xy,t.xy)),v=an(i,o,e.xy,n.xy).add(an(o,a,e.xy,n.xy)).add(an(s,a,e.xy,n.xy)).add(an(s,i,e.xy,n.xy)),y=an(i,o,t.xy,n.xy).add(an(o,a,t.xy,n.xy)).add(an(s,a,t.xy,n.xy)).add(an(s,i,t.xy,n.xy)),b=on(e.xy,c,l,u,d),x=on(t.xy,c,l,u,d),S=on(n.xy,c,l,u,d),C=A(b,A(x,S));return{hasIntersectingSegments:ye(M(_,new N(0)),ye(M(v,new N(0)),M(y,new N(0)))),allTriangleVerticesInside:C,triangleContainsRect:g}}function cn(e,t,n,r){let{hasIntersectingSegments:i,allTriangleVerticesInside:a,triangleContainsRect:o}=sn(e,t,n,r);return q(i,new N(1),q(ye(a,o),new N(2),new N(0)))}function ln(e,t,n,r){let{hasIntersectingSegments:i,allTriangleVerticesInside:a,triangleContainsRect:o}=sn(e,t,n,r);return q(ye(i,ye(a,o)),new N(2),new N(0))}function un(e){return A(D(e.tlbr.x,new N(0)),D(e.tlbr.y,new N(0)),D(e.tlbr.z,new N(0)),D(e.tlbr.w,new N(0)))}var dn=class extends Tt{};t([U(3,F)],dn.prototype,`color`,void 0),t([U(4,k)],dn.prototype,`zoomRange`,void 0);var fn=class extends Ot{constructor(){super(...arguments),this.type=`FillShader`,this.computeAttributes={pos:[`nextPos1`,`nextPos2`]}}vertex(e,t){let n=Vt(this,e.id),r=Bt(this,e.id,e.color).multiply(n),i=this.view.displayViewScreenMat3.multiply(new O(e.pos.xy,1)),a=this.clip(e.id,e.zoomRange);return{glPosition:new F(i.xy,a,1),color:r,...this.maybeRunHittest(e,t,null)}}fragment(e){return this.getFragmentOutput(e.color,e,new N(0))}hittest(e,t){let{pos0:n,pos1:r,pos2:i}=this.computeHittestTriangle(e,t,null),a=un(this.hittestRequest);return q(a,()=>{let{tlbr:e}=this.hittestRequest;return ln(n,r,i,e)},()=>{let n=nn(this,e,t);return q(M(n,this.hittestRequest.distance),new N(0),new N(2))})}};t([B(jt)],fn.prototype,`visualVariableColor`,void 0),t([B(Mt)],fn.prototype,`visualVariableOpacity`,void 0),t([e(0,G(dn)),e(1,G(Et))],fn.prototype,`vertex`,null),t([e(0,G(Dt))],fn.prototype,`fragment`,null);var pn=class extends dn{};t([U(5,F)],pn.prototype,`tlbr`,void 0),t([U(6,N)],pn.prototype,`width`,void 0),t([U(7,N)],pn.prototype,`height`,void 0),t([U(8,k)],pn.prototype,`offset`,void 0),t([U(9,k)],pn.prototype,`scale`,void 0),t([U(10,N)],pn.prototype,`angle`,void 0);var mn=class extends Dt{};function hn(e,t,n,r,i){let a=V(Y(i,2),le(1)),o=pt(new F(e,0));return q(a,Ve(r.divide(t.x),n.divide(t.y),0,J(n.divide(t.x)),r.divide(t.y),0,ft(ve(o,0)),ft(ve(0,o)),1),Ve(r.divide(t.x),n.divide(t.y),0,J(n.divide(t.x)),r.divide(t.y),0,0,0,1))}function gn(e,t){let n=e.view.requiredZoomFactor,r=new k(t.width,t.height),i=r.multiply(t.scale).multiply(n),a=t.angle.multiply(nt),o=oe(a),s=De(a),c=hn(t.id,i,o,s,t.bitset),l=e.localTileOffset.getPatternOffsetAtTileOrigin(r,o,s),u=n.multiply(t.scale).multiply(t.offset.subtract(l)).divide(i),d=new O(t.pos,1),f=c.multiply(d).xy.subtract(u),p=t.tlbr.divide(e.mosaicInfo.size.xyxy),m=Y(t.bitset,4);return e.visualVariableColor!=null&&(m=q(ut(e.getColorValue(t.id)),new N(0),m)),{tileTextureCoord:f,tlbr:p,sampleAlphaOnly:m}}function _n(e,t){let n=Ue(t.tileTextureCoord,new N(1)),r=I(t.tlbr.xy,t.tlbr.zw,n),i=K(e.mosaicTexture,r);return i=q(M(t.sampleAlphaOnly,new N(.5)),i.aaaa,i),t.color.multiply(i)}var vn=class extends fn{constructor(){super(...arguments),this.type=`ComplexFillShader`}vertex(e,t){return{...super.vertex(e,t),...gn(this,e)}}fragment(e){let t=_n(this,e);return this.getFragmentOutput(t,e,new N(0))}};t([P(At)],vn.prototype,`mosaicInfo`,void 0),t([z(j)],vn.prototype,`mosaicTexture`,void 0),t([P(kt)],vn.prototype,`localTileOffset`,void 0),t([e(0,G(pn)),e(1,G(Et))],vn.prototype,`vertex`,null),t([e(0,G(mn))],vn.prototype,`fragment`,null);var yn=class extends Zt{constructor(){super(...arguments),this.type=`AnimatedFillShader`}vertex(e,t){let{distanceToPx:n,ndc:r,z:i,color:a,isOutline:o,strokeWidth:s,isSDF:c,scale:l,scaleSymbolsProportionally:u}=this._vertexPoly(e),d=this.view.requiredZoomFactor,f=e.sizing.xy,p=f.multiply(d),m=e.angle?e.angle.multiply(nt):new N(0),h=oe(m),g=De(m),_=hn(e.id,p,h,g,e.bitset),v=this.localTileOffset.getPatternOffsetAtTileOrigin(f,h,g),y=d.multiply(e.offset.subtract(v)).divide(p),b=new O(e.pos,1),x=_.multiply(b).xy.subtract(y),S=e.tlbr.divide(this.mosaicInfo.size.xyxy);return{glPosition:new F(r,i,1),tlbr:S,uv:x,color:a.multiply(new N(1).subtract(o)),outlineColor:a.multiply(o),distanceToPx:n,strokeWidth:s.multiply(I(new N(1),l,u)),isOutline:o,isSDF:c,...this.maybeRunHittest(e,t,{})}}fragment(e){let t=this._fragmentPoly(e);return this.getFragmentOutput(t,e)}hittest(e,t,n){let{pos0:r,pos1:i,pos2:a}=this.computeHittestTriangle(e,t,null),o=un(this.hittestRequest);return q(o,()=>{let{tlbr:e}=this.hittestRequest;return ln(r,i,a,e)},()=>{let n=nn(this,e,t);return q(M(n,this.hittestRequest.distance),new N(0),new N(2))})}};t([e(0,G(Jt)),e(1,G(Yt))],yn.prototype,`vertex`,null),t([e(0,G(Xt))],yn.prototype,`fragment`,null);var bn=class extends Tt{};t([U(3,F)],bn.prototype,`color`,void 0),t([U(4,k)],bn.prototype,`offset`,void 0),t([U(5,k)],bn.prototype,`normal`,void 0),t([U(6,N)],bn.prototype,`halfWidth`,void 0),t([U(7,N)],bn.prototype,`referenceHalfWidth`,void 0),t([U(8,k)],bn.prototype,`zoomRange`,void 0);var xn=class extends Dt{},Sn=class extends W{};function Cn(e){return Se(new N($e).multiply(H(e,new N(1))),new N(1))}function wn(e,t){let{halfWidth:n,normal:r}=e,i=Cn(n),a=Ce(r).multiply(n);return Ee(i.multiply(n.subtract(a)).divide(t.add(i).subtract(new N(1))),new N(0),new N(1))}function Tn(e,t){let{id:n,halfWidth:r,referenceHalfWidth:i}=t;if(Rt(e)){let t=zt(e,n,new N(2).multiply(i)),a=new N(et),o=q(M(r,a),r.divide(Se(i,a)),new N(1));return new N(.5).multiply(o).multiply(t)}return r}function En(e,t){let{id:n,offset:r,pos:i,normal:a,zoomRange:o}=t,{displayViewScreenMat3:s,displayViewMat3:c}=e.view,l=Bt(e,n,t.color),u=Vt(e,n),d=Tn(e,t),f=new N(.5).multiply(e.antialiasingControls.antialiasing),p=Se(d.add(f),new N(.45)).add(new N(.1).multiply(f)),m=Cn(p).multiply(p).multiply(r).multiply(e.view.scaleFactor),h=c.multiply(new O(m,new N(0))),g=s.multiply(new O(i,new N(1))).add(h),_=new N(2).multiply(H(d,new N(0))).add(e.clip(n,o)),v=new F(g.xy,_,1);return{color:l,opacity:u,halfWidth:p,normal:a,scaledOffset:m,scaledHalfWidth:d,glPosition:new F(v.xy,_,1)}}function Dn(e,t){let{opacity:n,color:r}=e,i=wn(e,t);return n.multiply(r).multiply(i)}t([P(N)],Sn.prototype,`antialiasing`,void 0),t([P(N)],Sn.prototype,`blur`,void 0);var On=class extends Ot{constructor(){super(...arguments),this.type=`LineShader`,this.computeAttributes={pos:[`nextPos1`,`nextPos2`]}}vertex(e,t){let n=En(this,e);return{...n,...this.maybeRunHittest(e,t,n.halfWidth)}}fragment(e){let t=Dn(e,this.antialiasingControls.blur);return this.getFragmentOutput(t,e)}hittest(e,t,n){let{pos0:r,pos1:i,pos2:a}=this.computeHittestTriangle(e,t,null),o=un(this.hittestRequest),{distance:s,smallSymbolDistance:c,smallSymbolSizeThreshold:l,tlbr:u}=this.hittestRequest,d=H(n,l.multiply(.5)).multiply(s.subtract(c)),f=this.hittestRequest.position,p=He($t(f,r,i),$t(f,r,a)).subtract(n).add(d);return q(o,ln(r,i,a,u),q(M(p,s),new N(0),new N(2)))}};t([P(Sn)],On.prototype,`antialiasingControls`,void 0),t([B(jt)],On.prototype,`visualVariableColor`,void 0),t([B(Mt)],On.prototype,`visualVariableOpacity`,void 0),t([B(Pt)],On.prototype,`visualVariableSizeMinMaxValue`,void 0),t([B(Ft)],On.prototype,`visualVariableSizeScaleStops`,void 0),t([B(It)],On.prototype,`visualVariableSizeStops`,void 0),t([B(Lt)],On.prototype,`visualVariableSizeUnitValue`,void 0),t([e(0,G(bn)),e(1,G(Et))],On.prototype,`vertex`,null),t([e(0,G(xn))],On.prototype,`fragment`,null);var kn=class extends Jt{};t([U(10,N)],kn.prototype,`accumulatedDistance`,void 0),t([U(11,k)],kn.prototype,`normal`,void 0),t([U(12,k)],kn.prototype,`segmentDirection`,void 0);var An=class extends Xt{},jn=class extends Zt{constructor(){super(...arguments),this.type=`AnimatedLineShader`}vertex(e,t){let{animationPointerAndBaseSizeAndReferenceSize:n}=e,r=n.xy,{distanceToPx:i,ndc:a,z:o,color:s,isOutline:c,strokeWidth:l,isSDF:u,baseSize:d,scale:f,scaleSymbolsProportionally:p,evalParams:m}=this._vertexPoly(e),h=e.sizing.xy,g=h.x.multiply(d).divide(h.y),_=qt(r,6,m).a.multiply(this.animationInfo.scaleAdjustment),v=e.accumulatedDistance.subtract(_),{normal:y}=e,b=e.normal.y,x=v.divide(this.view.displayZoomFactor).add(we(e.segmentDirection,e.offset)).divide(g),S=b.add(1).divide(2),C=new k(x,S),w=e.tlbr.divide(this.mosaicInfo.size.xyxy),T=d.divide(2),E=new N(.5).multiply(this.antialiasingControls.antialiasing),ee=Se(T.add(E),new N(.45)).add(new N(.1).multiply(E));return{glPosition:new F(a,o,1),tlbr:w,uv:C,color:s.multiply(new N(1).subtract(c)),outlineColor:s.multiply(c),distanceToPx:i,strokeWidth:l.multiply(I(new N(1),f,p)),isOutline:c,isSDF:u,halfWidth:ee,normal:y,...this.maybeRunHittest(e,t,ee)}}fragment(e){let t=this._fragmentPoly(e),n=wn(e,this.antialiasingControls.blur),{halfWidth:r,normal:i}=e,a=Cn(r),o=Ce(i).multiply(r),s=Ee(a.multiply(r.subtract(o)).divide(a.subtract(new N(1))),new N(0),new N(1));return this.getFragmentOutput(t.multiply(s).multiply(n),e)}hittest(e,t,n){let{pos0:r,pos1:i,pos2:a}=this.computeHittestTriangle(e,t,null),o=un(this.hittestRequest),{distance:s,smallSymbolDistance:c,smallSymbolSizeThreshold:l,tlbr:u}=this.hittestRequest,d=H(n,l.multiply(.5)).multiply(s.subtract(c)),f=this.hittestRequest.position,p=He($t(f,r,i),$t(f,r,a)).subtract(n).add(d);return q(o,ln(r,i,a,u),q(M(p,s),new N(0),new N(2)))}};t([P(Sn)],jn.prototype,`antialiasingControls`,void 0),t([e(0,G(kn)),e(1,G(Yt))],jn.prototype,`vertex`,null),t([e(0,G(An))],jn.prototype,`fragment`,null);var Mn=class extends Wt{};t([U(9,k)],Mn.prototype,`uv`,void 0),t([U(10,N)],Mn.prototype,`angle`,void 0);var Nn=class extends Oe{};t([U(11,k)],Nn.prototype,`offsetNextVertex1`,void 0),t([U(12,k)],Nn.prototype,`offsetNextVertex2`,void 0),t([U(13,k)],Nn.prototype,`textureUVNextVertex1`,void 0),t([U(14,k)],Nn.prototype,`textureUVNextVertex2`,void 0);var Pn=class extends Gt{};function Fn(e,t,n,r){return t.multiply(e.x).add(n.multiply(e.y)).add(r.multiply(e.z))}var In=class extends Kt{constructor(){super(...arguments),this.type=`AnimatedMarkerShader`,this.computeAttributes={offset:[`offsetNextVertex1`,`offsetNextVertex2`],uv:[`textureUVNextVertex1`,`textureUVNextVertex2`]}}vertex(e,t){let n=e.uv.divide(this.mosaicInfo.size),{position:r,animationPointer:i,evalParams:a,isOutline:o,unscaledDistanceToPx:s,vvScale:c,strokeWidth:l,scaleSymbolsProportionally:u,scale:d,isSDF:f,baseSize:p,clip:m}=this._vertexPreamble(e,e.angle,e.lineLength||new N(0)),h=this._toNdc(r),g=qt(i,1,a);g=new F(g.rgb.multiply(g.a),g.a);let _=q(at(e.bitset,Je.bitset.colorLocked),g,qt(i,2,a));_=new F(_.rgb.multiply(_.a),_.a);let v=qt(i,3,a);v=new F(v.rgb.multiply(v.a),v.a);let y=qt(i,4,a).a,b=qt(i,5,a).a,x=Bt(this,e.id,g,ye(at(e.bitset,Je.bitset.colorLocked),new pe(o))),S=I(x,_,v),C=Vt(this,e.id),w=I(C,y,b),T=S.multiply(w),E=this.clip(e.id,e.zoomRange).add(m.multiply(2)),ee=s.multiply(c);return{glPosition:new F(h,E,1),uv:n,color:T.multiply(new N(1).subtract(o)),outlineColor:T.multiply(o),distanceToPx:ee,strokeWidth:l.multiply(I(new N(1),d,u)),isOutline:o,isSDF:f,...this.maybeRunHittest(e,t,{pos:e.pos,size:p,sizeCorrection:new N(1),isMapAligned:new N(1),vvRotationMat3:new R(1,0,0,0,1,0,0,0,1),placementMat3:new R(1,0,0,0,1,0,0,0,1),outlineSize:new N(1),distanceToPx:ee,isSDF:f})}}fragment(e){let t=this._getColor(e.uv,{color:e.color,distanceToPx:e.distanceToPx,isSDF:e.isSDF,outlineColor:e.outlineColor,outlineSize:e.strokeWidth});return yt.spotlightAnimatedSymbols&&(t=t.add(new F(0,.3,0,.3))),this.getFragmentOutput(t,e)}hittest(e,t,n){let{pos0:r,pos1:i,pos2:a}=this.computeHittestTriangle(e,t,n),o=un(this.hittestRequest);return q(o,()=>{let{tlbr:e}=this.hittestRequest;return cn(r,i,a,e)},()=>q(ze(n.size,this.hittestRequest.smallSymbolSizeThreshold),this._hittestSmallMarker(e,t,n),this._hittestMarker(e,t,n)))}_hittestSmallMarker(e,t,n){let{position:r,distance:i,smallSymbolDistance:a}=this.hittestRequest,o=i.subtract(a),{viewMat3:s,tileMat3:c}=this.view,l=s.multiply(c).multiply(new O(n.pos,1)).xy,u=n.size.multiply(.5),d=ue(l,r).subtract(u).add(o);return q(M(d,this.hittestRequest.distance),new N(0),new N(2))}_hittestMarker(e,t,n){let r=this._vertexPreamble({...e},e.angle,new N(0)).position,i=this._vertexPreamble({...e,offset:t.offsetNextVertex1},e.angle,new N(0)).position,a=this._vertexPreamble({...e,offset:t.offsetNextVertex2},e.angle,new N(0)).position,o=this.hittestRequest.position,s=this.hittestRequest.distance,c=tn(o,r,i,a);return q(M(c,s),new N(0),this._hittestSamples(r,i,a,e,t,n))}_hittestSamples(e,t,n,r,i,a){let{outlineSize:o,isSDF:s,distanceToPx:c}=a,l=this.hittestRequest.position,u=this.hittestRequest.distance,d=Q(l.add(new k(J(u),J(u))),e,t,n),f=Q(l.add(new k(0,J(u))),e,t,n),p=Q(l.add(new k(u,J(u))),e,t,n),m=Q(l.add(new k(J(u),0)),e,t,n),h=Q(l,e,t,n),g=Q(l.add(new k(u,0)),e,t,n),_=Q(l.add(new k(J(u),u)),e,t,n),v=Q(l.add(new k(0,u)),e,t,n),y=Q(l.add(new k(u,u)),e,t,n),b=r.uv.divide(this.mosaicInfo.size),x=i.textureUVNextVertex1.divide(this.mosaicInfo.size),S=i.textureUVNextVertex2.divide(this.mosaicInfo.size),C={color:new F(1,1,1,1),outlineSize:o,outlineColor:new F(1,1,1,1),isSDF:s,distanceToPx:c},w=new N(0);return w=w.add(Z(d).multiply(this._getColor(Fn(d,b,x,S),C).a)),w=w.add(Z(f).multiply(this._getColor(Fn(f,b,x,S),C).a)),w=w.add(Z(p).multiply(this._getColor(Fn(p,b,x,S),C).a)),w=w.add(Z(m).multiply(this._getColor(Fn(m,b,x,S),C).a)),w=w.add(Z(h).multiply(this._getColor(Fn(h,b,x,S),C).a)),w=w.add(Z(g).multiply(this._getColor(Fn(g,b,x,S),C).a)),w=w.add(Z(_).multiply(this._getColor(Fn(_,b,x,S),C).a)),w=w.add(Z(v).multiply(this._getColor(Fn(v,b,x,S),C).a)),w=w.add(Z(y).multiply(this._getColor(Fn(y,b,x,S),C).a)),q(M(w,new N(.05)),new N(2),new N(0))}};t([e(0,G(Mn)),e(1,G(Nn))],In.prototype,`vertex`,null),t([e(0,G(Pn))],In.prototype,`fragment`,null);var $=class extends re{constructor(){super(...arguments),this.symbologyPlane=0,this._input=null}};function Ln(e){let t=1/e;return{antialiasing:t,blur:0+t}}var Rn=class extends ${render(e,t){let{context:n,painter:r,pixelRatio:i}=e,{target:a}=t,{freezeGlobalTime:c}=yt,l=r.textureManager.animationStore.getTexture(n,0),u=[2/e.state.size[0],0,0,0,-2/e.state.size[1],0,-1,1,1],d=Array.from(o(vt(),u)),f=Array.from(s(vt(),d,a.transforms.displayViewScreenMat3)),p=t.instance.getInput(),m=r.textureManager.getMosaicInfo(e,t.textureKey,!1),{optionalAttributes:h}=p,g=h.zoomRange,_=h.value1Position2Value2,v=`accumulatedDistance`in h&&h.accumulatedDistance,y=`segmentDirection`in h&&h.segmentDirection,ee=`normal`in h&&h.normal,te=2**(t.target.key.level-e.displayLevel);r.setShader({shader:this.shaders.geometry,uniforms:{...C(e,t.target,p.uniforms),...x(e,t.target),antialiasingControls:Ln(i),mosaicInfo:m,animationInfo:{globalTime:e.animationsEnabled?!1===c?e.time/1e3:c:0,scaleAdjustment:te,animationTextureSize:[l.descriptor.width,l.descriptor.height],toScreen:f,toNdc:u,mapRotation:e.state.rotation,pixelRatio:e.state.pixelRatio},localTileOffset:b(t.target)},textures:{...S(e),mosaicTexture:r.textureManager.getMosaicTexture(e,t.textureKey,!1),animationTexture:{unit:6,texture:l}},defines:{...w(e)},optionalAttributes:{zoomRange:g,value1Position2Value2:_,accumulatedDistance:v,segmentDirection:y,normal:ee},useComputeBuffer:E(e)}),r.setPipelineState({...T(e)}),r.submitDraw(e,t),!1===c&&e.animationsEnabled&&a.requestRender()}},zn=class extends Rn{constructor(){super(...arguments),this.type=2,this.symbologyPlane=2,this.shaders={geometry:new In}}},Bn=class extends Rn{constructor(){super(...arguments),this.type=3,this.symbologyPlane=2,this.shaders={geometry:new In}}},Vn=class extends Rn{constructor(){super(...arguments),this.type=0,this.symbologyPlane=0,this.shaders={geometry:new yn}}},Hn=class extends Rn{constructor(){super(...arguments),this.type=1,this.symbologyPlane=1,this.shaders={geometry:new jn}}},Un=class extends Be{};t([U(0,k)],Un.prototype,`pos`,void 0);var Wn=class extends Dt{},Gn=class extends W{};t([P(N)],Gn.prototype,`dotSize`,void 0);var Kn=class extends W{};t([P(N)],Kn.prototype,`pixelRatio`,void 0),t([P(N)],Kn.prototype,`tileZoomFactor`,void 0);var qn=1e-6,Jn=class extends Re{constructor(){super(...arguments),this.type=`DotDensityPointShader`}vertex(e){let t=new R(1,0,0,0,-1,0,0,1,1).multiply(new O(e.pos.xy.divide(512),1)),n=K(this.drawLocations,t.xy),r=Se(this.instance.dotSize.divide(2),new N(1)),i=new N(0);i=i.add(H(n.a,new N(qn)).multiply(2));let a=r.add(this.instance.dotSize),o=this.view.displayViewScreenMat3.multiply(new O(e.pos.add(.5),1)),s=new F(o.xy,i,1),c=this.instance.dotSize.divide(a),l=new N(-1).divide(r.divide(a));return a=a.multiply(this.draw.pixelRatio.multiply(this.draw.tileZoomFactor)),{glPosition:s,glPointSize:a,color:n,ratio:c,invEdgeRatio:l}}fragment(e){let t=Ce(e.glPointCoord.subtract(.5)).multiply(2),n=Ie(new N(0),new N(1),e.invEdgeRatio.multiply(t.subtract(e.ratio)).add(1)),r=new Te;return r.fragColor=e.color.multiply(n),r}};t([P(Gn)],Jn.prototype,`instance`,void 0),t([P(Kn)],Jn.prototype,`draw`,void 0),t([P(X)],Jn.prototype,`view`,void 0),t([z(j)],Jn.prototype,`drawLocations`,void 0),t([e(0,G(Un))],Jn.prototype,`vertex`,null),t([e(0,G(Wn))],Jn.prototype,`fragment`,null);var Yn=class extends Tt{};t([U(3,N)],Yn.prototype,`inverseArea`,void 0);var Xn=class extends W{};t([P(We.ofType(F,2))],Xn.prototype,`isActive`,void 0),t([P(We.ofType(F,8))],Xn.prototype,`colors`,void 0),t([P(N)],Xn.prototype,`dotValue`,void 0);var Zn=class extends W{};t([P(N)],Zn.prototype,`tileZoomFactor`,void 0),t([P(N)],Zn.prototype,`pixelRatio`,void 0),t([P(N)],Zn.prototype,`tileDotsOverArea`,void 0);var Qn=class extends Fe{};t([z(j)],Qn.prototype,`dotTexture0`,void 0),t([z(j)],Qn.prototype,`dotTexture1`,void 0);var $n=class extends Ot{constructor(){super(...arguments),this.type=`DotDensityPolygonShader`}_dotThreshold(e,t,n){return e.divide(t).divide(n)}vertex(e){let t=new R(2/512,0,0,0,-2/512,0,-1,1,1).multiply(new O(e.pos,1)),n=this.clip(e.id),r=new F(t.xy,n,1),i=this.getVVData(e.id).multiply(this.instance.isActive.get(0)).multiply(e.inverseArea),a=this.storageTextures.getDataDrivenData0(this.getAttributeDataCoords(e.id)).multiply(this.instance.isActive.get(1)).multiply(e.inverseArea),o=this.draw.tileZoomFactor.multiply(512).divide(this.draw.pixelRatio),s=this._dotThreshold(i,this.instance.dotValue,this.draw.tileDotsOverArea),c=this._dotThreshold(a,this.instance.dotValue,this.draw.tileDotsOverArea),l=e.pos.add(.5).divide(o);return{glPosition:r,color:new F(0,0,0,0),textureCoords:l,thresholds0:s,thresholds1:c}}fragment(e){let t=new Te,n=K(this.drawTextures.dotTexture0,e.textureCoords),r=K(this.drawTextures.dotTexture1,e.textureCoords),i=e.thresholds0.subtract(n),a=e.thresholds1.subtract(r),o,s=Ae.fromColumns(this.instance.colors.get(0),this.instance.colors.get(1),this.instance.colors.get(2),this.instance.colors.get(3)),c=Ae.fromColumns(this.instance.colors.get(4),this.instance.colors.get(5),this.instance.colors.get(6),this.instance.colors.get(7));if(this.blending){let e=H(new N(0),i),t=H(new N(0),a),n=we(e,i).add(we(t,a)),r=H(n,new N(0)),l=new N(1).subtract(r),u=n.add(r),d=i.multiply(e).divide(u),f=a.multiply(t).divide(u),p=s.multiply(d).add(c.multiply(f));o=l.multiply(p)}else{let e=Se(ct(i),ct(a)),t=H(e,new N(0)),n=new N(1).subtract(t),r=H(e,i),l=H(e,a),u=s.multiply(r).add(c.multiply(l));o=n.multiply(u)}return t.fragColor=o,t}hittest(e){return new N(0)}};t([L],$n.prototype,`blending`,void 0),t([P(Xn)],$n.prototype,`instance`,void 0),t([P(Zn)],$n.prototype,`draw`,void 0),t([z(Qn)],$n.prototype,`drawTextures`,void 0),t([e(0,G(Yn))],$n.prototype,`vertex`,null),t([e(0,G(Dt))],$n.prototype,`fragment`,null);var er={pos:{count:2,type:f.UNSIGNED_SHORT}},tr=class{constructor(){this._dotTextureSize=0,this._dotTextures=null,this._dotMesh=null}destroy(){this._disposeTextures(),this._dotFBO?.dispose(),this._dotMesh?.destroy()}getFBO(e){if(this._dotFBO==null){let t=new g(512,512);t.samplingMode=9728,t.wrapMode=33071;let n=new p(e,new h(l.DEPTH24_STENCIL8,512,512));this._dotFBO=new m(e,t,n)}return this._dotFBO}getDotDensityMesh(e){if(this._dotMesh==null){let t=262144,n=new Int16Array(t*2);for(let e=0;e<512;e++)for(let t=0;t<512;t++)n[2*(t+e*512)]=t,n[2*(t+e*512)+1]=e;this._dotMesh=y.create(e,{primitive:u.POINTS,vertex:n,count:t,layout:er})}return this._dotMesh}getDotDensityTextures(e,t,n){if(this._dotTextureSize===t&&this._seed===n||(this._disposeTextures(),this._dotTextureSize=t,this._seed=n),this._dotTextures===null){let r=new i(n);this._dotTextures=[this._allocDotDensityTexture(e,t,r),this._allocDotDensityTexture(e,t,r)]}return this._dotTextures}_disposeTextures(){if(this._dotTextures){for(let e=0;e<this._dotTextures.length;e++)this._dotTextures[e].dispose();this._dotTextures=null}}_allocDotDensityTexture(e,t,n){let r=new Float32Array(t*t*4);for(let e=0;e<r.length;e++)r[e]=n.getFloat();let i=new g(t);return i.dataType=d.FLOAT,i.samplingMode=9728,new _(e,i,r)}},nr=class extends ${constructor(){super(...arguments),this.type=12,this.shaders={polygon:new $n,point:new Jn,fill:new fn},this._resources=new Map}render(e,t){ne(e)||E(e)?this._renderPolygons(e,t):this._renderDotDensity(e,t)}_renderPolygons(e,t){let{painter:n}=e;n.setShader({shader:this.shaders.fill,uniforms:{...x(e,t.target),visualVariableColor:null,visualVariableOpacity:null},textures:S(e),defines:{...w(e)},optionalAttributes:{zoomRange:!1},useComputeBuffer:E(e)}),n.setPipelineState(T(e)),n.submitDraw(e,t)}_renderDotDensity(e,t){let{context:n,painter:r,requiredLevel:i}=e,a=t.instance.getInput().uniforms,o=this._getOrCreateResourcesRecord(n),s=o.getDotDensityTextures(n,512,a.seed),c=1/2**(i-t.target.key.level),l=512*window.devicePixelRatio*512*window.devicePixelRatio,u=1/c*(1/c),d=a.dotScale?e.state.scale/a.dotScale:1,f=a.dotValue*d*u;r.setShader({shader:this.shaders.polygon,uniforms:{...x(e,t.target),instance:{isActive:a.isActive,colors:a.colors,dotValue:Math.max(1,f)},draw:{tileZoomFactor:c,pixelRatio:window.devicePixelRatio,tileDotsOverArea:l/(512*window.devicePixelRatio*512*window.devicePixelRatio)}},textures:{...S(e),drawTextures:{dotTexture0:{unit:5,texture:s[0]},dotTexture1:{unit:6,texture:s[1]}}},defines:{...w(e),blending:a.blending},optionalAttributes:{},useComputeBuffer:!1});let p=n.getViewport();n.setViewport(0,0,512,512);let m=n.boundFramebuffer,h=o.getFBO(n);n.bindFramebuffer(h),n.setClearColor(0,0,0,0),n.clear(16384),r.setPipelineState({color:{write:[!0,!0,!0,!0],blendMode:`composite`},depth:!1,stencil:!1}),r.updatePipelineState(n),r.submitDraw(e,t),n.bindFramebuffer(m),n.setViewport(p.x,p.y,p.width,p.height);let g=o.getFBO(n).colorTexture,_={shader:this.shaders.point,uniforms:{view:ee(e,t.target),instance:{dotSize:a.dotSize},draw:{tileZoomFactor:1,pixelRatio:window.devicePixelRatio}},textures:{drawLocations:{unit:5,texture:g}},defines:{...w(e)},optionalAttributes:{},useComputeBuffer:!1};r.setPipelineState(T(e)),r.submitDrawMesh(n,_,o.getDotDensityMesh(n),{stencilRef:t.getStencilReference()})}shutdown(e){super.shutdown(e),this._resources.get(e)?.destroy(),this._resources.delete(e)}_getOrCreateResourcesRecord(e){let t=this._resources.get(e);return t??(t=new tr,this._resources.set(e,t)),t}},rr=class extends ${constructor(){super(...arguments),this.type=10,this.shaders={geometry:new vn}}render(e,t){let{painter:n}=e,r=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...C(e,t.target,r.uniforms),...x(e,t.target),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey),localTileOffset:b(t.target)},textures:{...S(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...w(e)},optionalAttributes:r.optionalAttributes,useComputeBuffer:E(e)}),n.setPipelineState(T(e)),n.submitDraw(e,t)}},ir=class extends Tt{};t([U(3,k)],ir.prototype,`offset`,void 0),t([U(4,F)],ir.prototype,`color`,void 0),t([U(5,k)],ir.prototype,`normal`,void 0),t([U(6,N)],ir.prototype,`halfWidth`,void 0),t([U(7,N)],ir.prototype,`referenceHalfWidth`,void 0),t([U(8,k)],ir.prototype,`zoomRange`,void 0);var ar=class extends xn{};function or(e,t,n){let{id:r,bitset:i}=t,a=Y(i,0),o=M(a,new N(.5)),s=En(e,t),c=q(o,s.halfWidth,new N(0)),l=Vt(e,r),u=Bt(e,r,t.color),d=q(o,q(at(i,1),u,t.color),u.multiply(l)),f=e.view.displayViewScreenMat3.multiply(new O(t.pos.xy,1)),p=e.clip(t.id),m=new F(f.xy,p,1),h=q(o,s.glPosition,m),g=n&&e.maybeRunHittest(t,n,o);return{isOutline:a,color:d,opacity:new N(1),halfWidth:c,normal:s.normal,glPosition:h,...g}}var sr=class extends Ot{constructor(){super(...arguments),this.computeAttributes={pos:[`nextPos1`,`nextPos2`]}}};t([P(Sn)],sr.prototype,`antialiasingControls`,void 0),t([B(jt)],sr.prototype,`visualVariableColor`,void 0),t([B(Mt)],sr.prototype,`visualVariableOpacity`,void 0),t([B(Pt)],sr.prototype,`visualVariableSizeMinMaxValue`,void 0),t([B(Ft)],sr.prototype,`visualVariableSizeScaleStops`,void 0),t([B(It)],sr.prototype,`visualVariableSizeStops`,void 0),t([B(Lt)],sr.prototype,`visualVariableSizeUnitValue`,void 0);var cr=class extends sr{constructor(){super(...arguments),this.type=`OutlineFillShader`}vertex(e,t){return or(this,e,t)}fragment(e){let{color:t,isOutline:n}=e,r=M(n,new N(.5)),i=Dn(e,this.antialiasingControls.blur),a=q(r,i,t),o=q(r,new N(1/255),new N(0));return this.getFragmentOutput(a,e,o)}hittest(e,t,n){let{pos0:r,pos1:i,pos2:a}=this.computeHittestTriangle(e,t,null),o=un(this.hittestRequest);return q(o,()=>{let{tlbr:e}=this.hittestRequest;return ln(r,i,a,e)},()=>{let r=nn(this,e,t);return q(ye(n,M(r,this.hittestRequest.distance)),new N(0),new N(2))})}};t([e(0,G(ir)),e(1,G(Et))],cr.prototype,`vertex`,null),t([e(0,G(ar))],cr.prototype,`fragment`,null);var lr=class extends dn{};t([U(5,F)],lr.prototype,`tlbr`,void 0),t([U(6,N)],lr.prototype,`inverseRasterizationScale`,void 0);var ur=class extends Dt{};function dr(e){let t=new N(1),n=new N(0);return new R(t.divide(e.x),n.divide(e.y),0,J(n.divide(e.x)),t.divide(e.y),0,0,0,1)}function fr(e,t){let n=t.tlbr.xy,r=t.tlbr.zw,i=r.x.subtract(n.x),a=n.y.subtract(r.y),o=new k(i,a).multiply(t.inverseRasterizationScale),s=o.multiply(e.view.requiredZoomFactor),c=dr(s),l=e.localTileOffset.getPatternOffsetAtTileOrigin(o).divide(s),u=new O(t.pos,1);return{tileTextureCoord:c.multiply(u).xy.subtract(l),tlbr:t.tlbr.divide(e.mosaicInfo.size.xyxy)}}function pr(e,t){let n=Ue(e.tileTextureCoord,new N(1)),r=I(e.tlbr.xy,e.tlbr.zw,n),i=K(t.mosaicTexture,r);return e.color.multiply(i)}var mr=class extends fn{constructor(){super(...arguments),this.type=`PatternFillShader`}vertex(e,t){return{...super.vertex(e,t),...fr(this,e)}}fragment(e){let t=pr(e,this);return this.getFragmentOutput(t,e,new N(0))}};t([P(At)],mr.prototype,`mosaicInfo`,void 0),t([z(j)],mr.prototype,`mosaicTexture`,void 0),t([P(kt)],mr.prototype,`localTileOffset`,void 0),t([e(0,G(lr)),e(1,G(Et))],mr.prototype,`vertex`,null),t([e(0,G(ur))],mr.prototype,`fragment`,null);var hr=class extends ir{};t([U(9,F)],hr.prototype,`tlbr`,void 0),t([U(10,N)],hr.prototype,`inverseRasterizationScale`,void 0);var gr=class extends ar{},_r=class extends cr{constructor(){super(...arguments),this.type=`PatternOutlineFillShader`}vertex(e,t){return{...or(this,e,t),...fr(this,e)}}fragment(e){let{isOutline:t}=e,n=M(t,new N(.5)),r=Dn(e,this.antialiasingControls.blur),i=pr(e,this),a=q(n,r,i),o=q(n,new N(1/255),new N(0));return this.getFragmentOutput(a,e,o)}};t([P(At)],_r.prototype,`mosaicInfo`,void 0),t([z(j)],_r.prototype,`mosaicTexture`,void 0),t([P(kt)],_r.prototype,`localTileOffset`,void 0),t([e(0,G(hr)),e(1,G(Et))],_r.prototype,`vertex`,null),t([e(0,G(gr))],_r.prototype,`fragment`,null);var vr=1/16,yr=class extends Tt{};t([U(3,F)],yr.prototype,`color`,void 0),t([U(4,F)],yr.prototype,`tlbr`,void 0),t([U(5,N)],yr.prototype,`angle`,void 0),t([U(6,N)],yr.prototype,`aux1`,void 0),t([U(7,N)],yr.prototype,`aux2`,void 0),t([U(8,k)],yr.prototype,`aux3`,void 0),t([U(9,k)],yr.prototype,`aux4`,void 0),t([U(10,k)],yr.prototype,`zoomRange`,void 0);var br=class extends gr{},xr=class extends sr{constructor(){super(...arguments),this.type=`ComplexOutlineFillShader`}vertex(e,t){let{aux1:n,aux2:r,aux3:i,aux4:a}=e,o={...e,width:n,height:r,offset:i,scale:a.multiply(vr)},s={...e,halfWidth:n,referenceHalfWidth:r,offset:i,normal:a.subtract(128).multiply(vr)},c=or(this,s),l=gn(this,o),u=M(c.isOutline,new N(.5));return{...c,...l,...Object.assign({},this.maybeRunHittest(e,t,u))}}fragment(e){let{isOutline:t}=e,n=M(t,new N(.5)),r=Dn(e,this.antialiasingControls.blur),i=_n(this,e),a=q(n,r,i),o=q(n,new N(1/255),new N(0));return this.getFragmentOutput(a,e,o)}hittest(e,t,n){let{pos0:r,pos1:i,pos2:a}=this.computeHittestTriangle(e,t,null),o=un(this.hittestRequest);return q(o,()=>{let{tlbr:e}=this.hittestRequest;return ln(r,i,a,e)},()=>{let r=nn(this,e,t);return q(ye(n,M(r,this.hittestRequest.distance)),new N(0),new N(2))})}};t([P(At)],xr.prototype,`mosaicInfo`,void 0),t([z(j)],xr.prototype,`mosaicTexture`,void 0),t([P(kt)],xr.prototype,`localTileOffset`,void 0),t([e(0,G(yr)),e(1,G(Et))],xr.prototype,`vertex`,null),t([e(0,G(br))],xr.prototype,`fragment`,null);var Sr=class extends ${constructor(){super(...arguments),this.type=11,this.shaders={geometry:new xr}}render(e,t){let{painter:n,pixelRatio:r}=e,i=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...C(e,t.target,i.uniforms),...x(e,t.target),antialiasingControls:Ln(r),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey),localTileOffset:b(t.target)},textures:{...S(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...w(e)},optionalAttributes:i.optionalAttributes,useComputeBuffer:E(e)}),n.setPipelineState(T(e)),n.submitDraw(e,t)}},Cr=class extends ${constructor(){super(...arguments),this.type=15,this.shaders={geometry:new fn}}render(e,t){let{painter:n}=e,r=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...C(e,t.target,r.uniforms),...x(e,t.target)},textures:S(e),defines:w(e),optionalAttributes:r.optionalAttributes,useComputeBuffer:E(e)}),n.setPipelineState(T(e)),n.submitDraw(e,t)}},wr=class extends dn{};t([U(5,F)],wr.prototype,`tlbr`,void 0),t([U(6,k)],wr.prototype,`relativePosition`,void 0),t([U(7,N)],wr.prototype,`gradientMethod`,void 0),t([U(8,k)],wr.prototype,`relativeGradientSize`,void 0);var Tr=class extends Dt{},Er=class extends fn{constructor(){super(...arguments),this.type=`GradientFillShader`}vertex(e,t){let{tlbr:n,relativePosition:r,gradientMethod:i,relativeGradientSize:a}=e,o=q(at(e.bitset,Ye.isAbsolute),this.view.displayZoomFactor,new N(1));return{...super.vertex(e,t),tlbr:n,relativePosition:r,gradientMethod:i,gradientSize:a.multiply(o),isDiscrete:Y(e.bitset,Ye.isDiscrete)}}fragment(e){let{tlbr:t,relativePosition:n,gradientMethod:r,gradientSize:i,isDiscrete:a}=e,o=q(M(a,new N(.5)),i.subtract(1),new k(0)),s=de([V(r,new N(Xe.rectangular)),()=>{let e=se(n).add(o).divide(i);return it(Se(e.x,e.y))}],[V(r,new N(Xe.circular)),it(Me(we(n,n)).add(o.x).divide(i.x))],[!0,it(n.x.add(o.x).divide(i.x))]),c=new k(Ee(s,new N(0),new N(1)),.5),l=I(t.xy,t.zw,c).divide(this.mosaicInfo.size),u=K(this.mosaicTexture,l),d=e.color.a;return this.getFragmentOutput(u.multiply(d),e,new N(0))}};t([P(At)],Er.prototype,`mosaicInfo`,void 0),t([z(j)],Er.prototype,`mosaicTexture`,void 0),t([e(0,G(wr)),e(1,G(Et))],Er.prototype,`vertex`,null),t([e(0,G(Tr))],Er.prototype,`fragment`,null);var Dr=class extends ${constructor(){super(...arguments),this.type=16,this.shaders={geometry:new Er},this.symbologyPlane=0}render(e,t){let{painter:n}=e,r=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...C(e,t.target,r.uniforms),...x(e,t.target),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey)},textures:{...S(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...w(e)},optionalAttributes:r.optionalAttributes,useComputeBuffer:E(e)}),n.setPipelineState(T(e)),n.submitDraw(e,t)}},Or=class extends ${constructor(){super(...arguments),this.type=26,this.shaders={geometry:new cr}}render(e,t){let{painter:n,pixelRatio:r}=e,i=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...C(e,t.target,i.uniforms),...x(e,t.target),antialiasingControls:Ln(r)},textures:S(e),defines:{...w(e)},optionalAttributes:i.optionalAttributes,useComputeBuffer:E(e)}),n.setPipelineState(T(e)),n.submitDraw(e,t)}},kr=class extends ${constructor(){super(...arguments),this.type=28,this.shaders={geometry:new mr}}render(e,t){let{painter:n}=e,r=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...C(e,t.target,r.uniforms),...x(e,t.target),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey),localTileOffset:b(t.target)},textures:{...S(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...w(e)},optionalAttributes:r.optionalAttributes,useComputeBuffer:E(e)}),n.setPipelineState(T(e)),n.submitDraw(e,t)}},Ar=class extends ${constructor(){super(...arguments),this.type=29,this.shaders={geometry:new _r}}render(e,t){let{painter:n,pixelRatio:r}=e,i=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...C(e,t.target,i.uniforms),...x(e,t.target),antialiasingControls:Ln(r),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey),localTileOffset:b(t.target)},textures:{...S(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...w(e)},optionalAttributes:i.optionalAttributes,useComputeBuffer:E(e)}),n.setPipelineState(T(e)),n.submitDraw(e,t)}},jr=class{constructor(e,t,n,r){this.startTime=e,this.startValue=t,this.endTime=n,this.endValue=r}getValue(e){if(e<=this.startTime)return this.startValue;if(e>=this.endTime)return this.endValue;let t=(e-this.startTime)/(this.endTime-this.startTime);return this.startValue+t*(this.endValue-this.startValue)}isForeverZero(e){return this.startValue===0&&this.endValue===0||this.endValue===0&&e>=this.endTime}};function Mr(e,t){return typeof e==`number`?e:e.getValue(t)}function Nr(e){return typeof e==`number`?e:e.endValue}function Pr(e,t){return typeof e==`number`?e===0:e.isForeverZero(t)}function Fr(e,t,n,r){return e===n?e:new jr(e,t,n,r)}function Ir(e,t,n){let r=Mr(e,n),i=r*t;return i===0?0:Fr(n,r,n+i,0)}function Lr(e){let t=e.toRgba();return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function Rr(e){return{kind:`constant`,value:[.1,.1,.1,1]}}function zr(e){if(!e.hasVisualVariables(`color`))return{kind:`constant`,value:Lr(e.color)};let t=e.getVisualVariablesForType(`color`)[0],n=[],r=[];for(let e of t.stops)n.push(e.value),Array.prototype.push.apply(r,Lr(e.color));return{kind:`ramp`,stops:n,values:r,count:t.stops.length}}function Br(e){if(!e.hasVisualVariables(`opacity`))return{kind:`constant`,value:[1]};let t=e.getVisualVariablesForType(`opacity`)[0],n=[],r=[];for(let e of t.stops)n.push(e.value),r.push(e.opacity);return{kind:`ramp`,stops:n,values:r,count:t.stops.length}}var Vr=8;function Hr(e){if(e.kind===`constant`)return{constant:e.value,count:1,stops:Array(Vr).fill(0),values:Array(Vr).fill(e.value)};let t=Math.min(e.count,Vr),n=Array(Vr).fill(e.stops[t-1]),r=Array(Vr).fill(null).map((n,r)=>{let i=4*Math.min(r,t-1);return e.values.slice(i,i+4)});for(let r=0;r<t;r++)n[r]=e.stops[r];return{constant:[0,0,0,0],count:t,stops:n,values:r}}function Ur(e){if(e.kind===`constant`)return{constant:e.value[0],count:1,stops:Array(Vr).fill(0),values:Array(Vr).fill(e.value[0])};let t=Math.min(e.count,Vr),n=Array(Vr).fill(e.stops[t-1]),r=Array(Vr).fill(e.values[t-1]);for(let i=0;i<t;i++)n[i]=e.stops[i],r[i]=e.values[i];return{constant:0,count:t,stops:n,values:r}}function Wr(e,t){return e===t||e!=null&&t!=null&&e.equals(t)}function Gr(e,t){if(!ht(e.simulationSettings,t.simulationSettings)||!Wr(e.timeExtent,t.timeExtent))return!1;let n=!0;return n&&=e.loadImagery===t.loadImagery,n&&=e.createFlowMesh===t.createFlowMesh,n&&=e.color.kind===t.color.kind,n&&=e.opacity.kind===t.opacity.kind,n&&=e.size.kind===t.size.kind,n}var Kr=36e5,qr=3600,Jr=class extends W{};t([P(N)],Jr.prototype,`time`,void 0),t([P(R)],Jr.prototype,`dvsMat3`,void 0),t([P(R)],Jr.prototype,`displayViewMat3`,void 0),t([P(N)],Jr.prototype,`displayOpacity`,void 0),t([P(N)],Jr.prototype,`startTime`,void 0),t([P(N)],Jr.prototype,`endTime`,void 0);var Yr=class extends W{};t([P(N)],Yr.prototype,`trailLength`,void 0),t([P(N)],Yr.prototype,`flowSpeed`,void 0),t([P(N)],Yr.prototype,`featheringSize`,void 0),t([P(N)],Yr.prototype,`featheringOffset`,void 0),t([P(N)],Yr.prototype,`introFade`,void 0),t([P(N)],Yr.prototype,`fadeToZero`,void 0),t([P(N)],Yr.prototype,`decayRate`,void 0);var Xr=class extends W{};t([P(N)],Xr.prototype,`min`,void 0),t([P(N)],Xr.prototype,`max`,void 0);var Zr=class extends W{getValue(e,t){return t?de([je(e,this.stops.first()),this.values.first()],[D(e,this.stops.get(this.count.subtract(1))),this.values.get(this.count.subtract(1))],[!0,()=>{let t=this.stops.findIndex(t=>M(t,e)),n=this.stops.get(t),r=t.subtract(1),i=this.stops.get(r),a=e.subtract(i).divide(n.subtract(i));return I(this.values.get(r),this.values.get(t),a)}]):this.constant}};t([P(F)],Zr.prototype,`constant`,void 0),t([P(We.ofType(N,8))],Zr.prototype,`stops`,void 0),t([P(We.ofType(F,8))],Zr.prototype,`values`,void 0),t([P(be)],Zr.prototype,`count`,void 0);var Qr=class extends W{getValue(e,t){return t?de([je(e,this.stops.first()),this.values.first()],[D(e,this.stops.get(this.count.subtract(1))),this.values.get(this.count.subtract(1))],[!0,()=>{let t=this.stops.findIndex(t=>M(t,e)),n=this.stops.get(t),r=t.subtract(1),i=this.stops.get(r),a=e.subtract(i).divide(n.subtract(i));return I(this.values.get(r),this.values.get(t),a)}]):this.constant}};function $r(e,t,n){return e.add(t.multiply(new N(2)).multiply(n))}function ei(e,t,n,r){return e.dvsMat3.multiply(new O(t,1)).add(e.displayViewMat3.multiply(new O(n.multiply(r),0))).xy}function ti(e,t,n){let r=I(new N(0),_e(t.multiply(new N(-1))),n);return _e(t.multiply(e).multiply(new N(-1))).subtract(r).divide(new N(1).subtract(r))}function ni(e,t,n,r){let i=Ee(new N(.5).subtract(r.divide(n)),new N(0),new N(.5)),a=q(M(t,i),new N(1).subtract(t.subtract(i).divide(new N(.5).subtract(i))),new N(1));return e.multiply(a)}function ri(e,t){return new F(e.rgb.multiply(t),t)}function ii(e,t){return Ue(e.multiply(3.634).add(t.multiply(5.153)).add(7.381),new N(1))}t([P(N)],Qr.prototype,`constant`,void 0),t([P(We.ofType(N,8))],Qr.prototype,`stops`,void 0),t([P(We.ofType(N,8))],Qr.prototype,`values`,void 0),t([P(be)],Qr.prototype,`count`,void 0);var ai=class extends Be{};t([U(0,k)],ai.prototype,`position`,void 0),t([U(1,k)],ai.prototype,`texcoord`,void 0);var oi=class extends ke{},si=class extends Re{constructor(){super(...arguments),this.type=`FlowImageryShader`,this.vvColor=null,this.vvOpacity=null}vertex(e){let t=this.state.dvsMat3.multiply(new O(e.position,1)).xy;return{glPosition:new F(t,0,1),texcoord:e.texcoord}}fragment(e){let t=K(this.texture,e.texcoord),n=this.config.min.add(t.r.multiply(this.config.max.subtract(this.config.min))),r=this.color.getValue(n,this.vvColor),i=r.a.multiply(this.opacity.getValue(t.r,this.vvOpacity)).multiply(t.a),a=new Te;return a.fragColor=ri(r,i),a}};t([L],si.prototype,`vvColor`,void 0),t([L],si.prototype,`vvOpacity`,void 0),t([P(Jr)],si.prototype,`state`,void 0),t([P(Xr)],si.prototype,`config`,void 0),t([z(j)],si.prototype,`texture`,void 0),t([P(Zr)],si.prototype,`color`,void 0),t([P(Qr)],si.prototype,`opacity`,void 0),t([e(0,G(ai))],si.prototype,`vertex`,null),t([e(0,G(oi))],si.prototype,`fragment`,null);var ci=class extends Be{};t([U(0,F)],ci.prototype,`xyts0`,void 0),t([U(1,F)],ci.prototype,`xyts1`,void 0),t([U(2,F)],ci.prototype,`typeIdFirstTimeLastTime`,void 0),t([U(3,F)],ci.prototype,`extrudeInfo`,void 0);var li=class extends ke{},ui=class extends Re{constructor(){super(...arguments),this.type=`FlowParticlesShader`,this.vvColor=null,this.vvOpacity=null,this.vvSize=null}vertex(e){let t=e.typeIdFirstTimeLastTime.z,n=e.typeIdFirstTimeLastTime.w.subtract(t),r=e.xyts0.xy,i=e.xyts0.z.subtract(t),a=e.xyts0.w,o=e.xyts1.xy,s=e.xyts1.z.subtract(t),c=e.xyts1.w,l=e.typeIdFirstTimeLastTime.x,u=e.typeIdFirstTimeLastTime.y,d=new N(2),f=new N(1),p=new N(2),m=new N(3),h=e.extrudeInfo.xy,g=e.extrudeInfo.zw,_=n.add(this.config.trailLength),v=Ue(this.state.time.multiply(this.config.flowSpeed),_),y=v.subtract(i).divide(s.subtract(i)),b=Ee(y,new N(0),new N(1)),x=I(i,s,b),S=I(a,c,b),C=I(h,g,b),w=ce(o.subtract(r)).multiply(new N(.5)),T=V(l,d),E=ye(V(u,f),V(u,p)),ee=q(T,ye(ze(y,new N(0)),A(M(y,new N(1)),xe(s,n))),ze(y,new N(0))),te=q(T,de([V(u,f),C],[V(u,p),C.multiply(new N(-1))],[V(u,m),C.add(w)],[!0,C.multiply(new N(-1)).add(w)]),de([V(u,f),h],[V(u,p),h.multiply(new N(-1))],[V(u,m),C],[!0,C.multiply(new N(-1))])),ne=q(T,de([V(u,f),new k(.5,0)],[V(u,p),new k(.5,1)],[V(u,m),new k(1,0)],[!0,new k(1,1)]),de([V(u,f),new k(.5,0)],[V(u,p),new k(.5,1)],[V(u,m),new k(.5,0)],[!0,new k(.5,1)])),re=q(T,x,q(E,i,x)),ie=q(T,S,q(E,a,S)),D=q(T,ti(v.subtract(x).divide(this.config.trailLength),this.config.decayRate,this.config.fadeToZero),q(E,ti(v.subtract(i).divide(this.config.trailLength),this.config.decayRate,this.config.fadeToZero),ti(v.subtract(x).divide(this.config.trailLength),this.config.decayRate,this.config.fadeToZero))),ae=new N(1).subtract(_e(re.multiply(new N(-1)))),oe=$r(this.size.getValue(ie,this.vvSize),this.config.featheringSize,this.config.featheringOffset),se=this.color.getValue(ie,this.vvColor),le=se.a.multiply(this.opacity.getValue(ie,this.vvOpacity)).multiply(D).multiply(I(new N(1),ae,this.config.introFade)).multiply(this.state.displayOpacity),O=q(T,I(r,o,b),q(E,r,I(r,o,b))),ue=ei(this.state,O,te,oe);return{glPosition:q(ee,new F(0,0,-2,1),new F(ue,0,1)),color:ri(se,le),texcoord:ne,size:oe}}fragment(e){let t=new Te;return t.fragColor=ni(e.color,Ce(e.texcoord.subtract(new k(.5))),e.size,this.config.featheringSize),t}};t([L],ui.prototype,`vvColor`,void 0),t([L],ui.prototype,`vvOpacity`,void 0),t([L],ui.prototype,`vvSize`,void 0),t([P(Jr)],ui.prototype,`state`,void 0),t([P(Yr)],ui.prototype,`config`,void 0),t([P(Zr)],ui.prototype,`color`,void 0),t([P(Qr)],ui.prototype,`opacity`,void 0),t([P(Qr)],ui.prototype,`size`,void 0),t([e(0,G(ci))],ui.prototype,`vertex`,null),t([e(0,G(li))],ui.prototype,`fragment`,null);var di=class extends Be{};t([U(0,O)],di.prototype,`positionAndSide`,void 0),t([U(1,O)],di.prototype,`timeInfo`,void 0),t([U(2,k)],di.prototype,`extrude`,void 0),t([U(3,N)],di.prototype,`speed`,void 0);var fi=class extends ke{},pi=class extends Re{constructor(){super(...arguments),this.type=`FlowStreamlinesShader`,this.vvColor=null,this.vvOpacity=null,this.vvSize=null}vertex(e){let t=e.positionAndSide.xy,n=this.color.getValue(e.speed,this.vvColor),r=this.opacity.getValue(e.speed,this.vvOpacity),i=$r(this.size.getValue(e.speed,this.vvSize),this.config.featheringSize,this.config.featheringOffset),a=ei(this.state,t,e.extrude,i),o=n.a.multiply(r);return{glPosition:new F(a,0,1),side:e.positionAndSide.z,timeInfo:e.timeInfo,color:ri(n,o),size:i}}fragment(e){let t=e.timeInfo.z.subtract(e.timeInfo.y).add(this.config.trailLength),n=ii(e.timeInfo.y,e.timeInfo.z),r=Ue(n.multiply(t).add(this.state.time.multiply(this.config.flowSpeed)),t).add(e.timeInfo.y).subtract(e.timeInfo.x).divide(this.config.trailLength),i=e.color.multiply(this.state.displayOpacity).multiply(q(ze(r,new N(0)),new N(0),ti(r,this.config.decayRate,this.config.fadeToZero))),a=new Te;return a.fragColor=ni(i,se(e.side).divide(new N(2)),e.size,this.config.featheringSize),a}};t([L],pi.prototype,`vvColor`,void 0),t([L],pi.prototype,`vvOpacity`,void 0),t([L],pi.prototype,`vvSize`,void 0),t([P(Jr)],pi.prototype,`state`,void 0),t([P(Yr)],pi.prototype,`config`,void 0),t([P(Zr)],pi.prototype,`color`,void 0),t([P(Qr)],pi.prototype,`opacity`,void 0),t([P(Qr)],pi.prototype,`size`,void 0),t([e(0,G(di))],pi.prototype,`vertex`,null),t([e(0,G(fi))],pi.prototype,`fragment`,null);var mi=class extends re{constructor(){super(...arguments),this.type=14,this.drawPhase=1,this.shaders={imagery:new si,particles:new ui,streamlines:new pi}}render(e,t){let{painter:n}=e;n.setPipelineState({depth:!1,color:{write:[!0,!0,!0,!0],blendMode:`composite`},stencil:{write:!1,test:{compare:514,op:{fail:7680,zFail:7680,zPass:7680},mask:255}}}),this._renderResource(e,t.item.resources,this._createVisualState(e,t))}_renderResource(e,t,n){switch(t.kind){case`stack`:this._renderStackResources(e,t,n);return;case`imagery`:this._renderImageryResources(e,t,n);return;case`particles`:this._renderParticlesResources(e,t,n);return;case`streamlines`:this._renderStreamlinesResources(e,t,n);return}}_createVisualState(e,t){let{item:n,dvsMat3:r}=t,i=e.time/1e3;return{time:e.animationsEnabled?i:Kr,dvsMat3:r,displayViewMat3:e.state.displayViewMat3,displayOpacity:e.animationsEnabled?Mr(n.displayOpacity,i):Nr(n.displayOpacity),startTime:n.startTime,endTime:n.endTime}}_renderStackResources(e,t,n){for(let r of t.resources)this._renderResource(e,r,n)}_renderImageryResources({context:e,painter:t},n,r){let i=n.getProgramSpec(r);t.submitDrawMeshUntyped(e,{shader:this.shaders.imagery,uniforms:i.uniforms,textures:i.textures,defines:i.defines,optionalAttributes:i.optionalAttributes,useComputeBuffer:!1},n.mesh,{stencilRef:0})}_renderParticlesResources({context:e,painter:t},n,r){let i=n.getProgramSpec(r);t.submitDrawMeshUntyped(e,{shader:this.shaders.particles,uniforms:i.uniforms,textures:i.textures,defines:i.defines,optionalAttributes:i.optionalAttributes,useComputeBuffer:!1},n.mesh,{stencilRef:0})}_renderStreamlinesResources({context:e,painter:t},n,r){let i=n.getProgramSpec(r);t.submitDrawMeshUntyped(e,{shader:this.shaders.streamlines,uniforms:i.uniforms,textures:i.textures,defines:i.defines,optionalAttributes:i.optionalAttributes,useComputeBuffer:!1},n.mesh,{stencilRef:0})}},hi=()=>r.getLogger(`esri.views.2d.engine.webgl.shaderGraph.techniques.heatmap.HeatmapResources`),gi=class{destroy(){this._accumulateFramebuffer=a(this._accumulateFramebuffer),this._resolveGradientTexture=a(this._resolveGradientTexture),this._prevGradientHash=null,this._qualityProfile=null}get initialized(){return this._accumulateFramebuffer!=null&&this._resolveGradientTexture!=null}get accumulateFramebuffer(){return this._accumulateFramebuffer}get resolveGradientTexture(){return this._resolveGradientTexture}loadQualityProfile(e){if(this._qualityProfile==null){let t=gt(e,hi());this._qualityProfile={...t,defines:{usesHalfFloatPrecision:t.dataType!==d.FLOAT}}}return this._qualityProfile}ensureAccumulateFBO(e,t,n){if(this._accumulateFramebuffer==null){let{dataType:r,samplingMode:i,pixelFormat:a,internalFormat:o}=this.loadQualityProfile(e),s=new g(t,n);s.pixelFormat=a,s.internalFormat=o,s.dataType=r,s.samplingMode=i,s.wrapMode=33071;let c=new h(l.DEPTH24_STENCIL8,t,n);this._accumulateFramebuffer=new m(e,s,c)}else{let{width:e,height:r}=this._accumulateFramebuffer;e===t&&r===n||this._accumulateFramebuffer.resize(t,n)}return this._accumulateFramebuffer}ensureResolveGradientTexture(e,t,n){if(this._resolveGradientTexture==null){let t=new g;t.wrapMode=33071,this._resolveGradientTexture=new _(e,t),this._prevGradientHash=null}return this._prevGradientHash!==t&&(this._resolveGradientTexture.resize(n.length/4,1),this._resolveGradientTexture.setData(n),this._prevGradientHash=t),this._resolveGradientTexture}};function _i(e){return e?.25:1}var vi=class extends Tt{};t([U(5,k)],vi.prototype,`offset`,void 0);var yi=class extends Dt{},bi=class extends W{};t([P(N)],bi.prototype,`radius`,void 0),t([P(N)],bi.prototype,`isFieldActive`,void 0);var xi=class extends Ot{constructor(){super(...arguments),this.type=`HeatmapAccumulateShader`,this.usesHalfFloatPrecision=!1}vertex(e){let{radius:t,isFieldActive:n}=this.kernelControls,r=e.offset,i=n.multiply(this.getVVData(e.id).x).add(new N(1).subtract(n)),a=this.view.displayViewScreenMat3.multiply(new O(e.pos,1)).add(this.view.displayViewMat3.multiply(new O(r,0)).multiply(t)),o=this.clip(e.id);return{glPosition:new F(a.xy,o,1),offset:r,fieldValue:i,color:new F(0),...this.maybeRunHittest(e,{},null)}}fragment(e){let{offset:t,fieldValue:n}=e,r=Ce(t),i=H(r,new N(1)),a=new N(1).subtract(r.multiply(r)),o=a.multiply(a),s=i.multiply(o).multiply(n).multiply(new N(_i(this.usesHalfFloatPrecision)));return this.getFragmentOutput(new F(s),e)}hittest(e){let{viewMat3:t,tileMat3:n}=this.view,r=rn(t.multiply(n).multiply(new O(e.pos,1)).xy,this.kernelControls.radius,this.hittestRequest.position);return q(M(r,this.hittestRequest.distance),new N(0),new N(2))}};t([L],xi.prototype,`usesHalfFloatPrecision`,void 0),t([P(bi)],xi.prototype,`kernelControls`,void 0),t([e(0,G(vi))],xi.prototype,`vertex`,null),t([e(0,G(yi))],xi.prototype,`fragment`,null);var Si=class extends Be{};t([U(0,k)],Si.prototype,`position`,void 0);var Ci=class extends ke{},wi=class extends W{};t([P(k)],wi.prototype,`minAndInvRange`,void 0),t([P(N)],wi.prototype,`normalization`,void 0);var Ti=class extends Re{constructor(){super(...arguments),this.type=`HeatmapResolveShader`,this.usesHalfFloatPrecision=!1}vertex(e){return{glPosition:new F(e.position.multiply(2).subtract(1),1,1),uv:e.position}}fragment(e){let{accumulatedDensity:t}=this,n=K(this.densityTexture,e.uv).r.divide(new N(_i(this.usesHalfFloatPrecision)));n=n.multiply(t.normalization),n=n.subtract(t.minAndInvRange.x).multiply(t.minAndInvRange.y);let r=K(this.gradientTexture,new k(n,.5)),i=new Te;return i.fragColor=new F(r.rgb.multiply(r.a),r.a),i}};t([L],Ti.prototype,`usesHalfFloatPrecision`,void 0),t([P(wi)],Ti.prototype,`accumulatedDensity`,void 0),t([z(j)],Ti.prototype,`densityTexture`,void 0),t([z(j)],Ti.prototype,`gradientTexture`,void 0),t([e(0,G(Si))],Ti.prototype,`vertex`,null),t([e(0,G(Ci))],Ti.prototype,`fragment`,null);var Ei=class extends ${constructor(){super(...arguments),this.type=19,this.drawPhase=73,this.shaders={accumulate:new xi,resolve:new Ti},this._isBound=!1,this._resources=new Map}shutdown(e){super.shutdown(e),this._resources.get(e)?.destroy(),this._resources.delete(e),this._prevFBO=null,this._unbind()}render(e,t){let{context:n,painter:r,state:i}=e,a=t.instance.getInput(),{isFieldActive:o}=a.uniforms,s=this._getOrCreateResourcesRecord(n),c=s.loadQualityProfile(n);E(e)||this._bind(e,s,a),r.setShader({shader:this.shaders.accumulate,uniforms:{...x(e,t.target),kernelControls:{radius:Mi(a,i),isFieldActive:+!!o}},textures:S(e),defines:{...w(e),...c.defines},optionalAttributes:{},useComputeBuffer:E(e)});let l=E(e)?Ai:ki;r.setPipelineState(l),r.submitDraw(e,t)}getStencilReference(e){return Oi(e)}renderResolvePass(e,t){if(E(e))return;let{context:n,painter:r}=e,i=this._resources.get(n);if(this._prevFBO==null||this._prevViewport==null||!i?.initialized)return;let{defines:a}=i.loadQualityProfile(n),{minDensity:o,maxDensity:s,radius:c}=t.getInput().uniforms,l=i.accumulateFramebuffer,u=i.resolveGradientTexture,d={shader:this.shaders.resolve,uniforms:{accumulatedDensity:{minAndInvRange:[o,1/(s-o)],normalization:3/(c*c*Math.PI)}},textures:{densityTexture:{unit:8,texture:l.colorTexture},gradientTexture:{unit:9,texture:u}},defines:a,optionalAttributes:{},useComputeBuffer:!1};n.bindFramebuffer(this._prevFBO),n.setViewport(0,0,this._prevViewport.width,this._prevViewport.height),n.bindTexture(l.colorTexture,8),n.bindTexture(u,9),r.setPipelineState(ji),r.submitDrawMesh(n,d,r.quadMesh),this._unbind()}_getOrCreateResourcesRecord(e){let t=this._resources.get(e);return t??(t=new gi,this._resources.set(e,t)),t}_unbind(){this._prevFBO=null,this._prevViewport=null,this._isBound=!1}_bind(e,t,n){let{context:r,state:i,pixelRatio:a}=e,o=r.boundFramebuffer;if(this._isBound||o==null)return;let s=r.getViewport();this._prevFBO=o,this._prevViewport=s;let{gradient:c,gradientHash:l}=n.uniforms;t.ensureResolveGradientTexture(r,l,c);let{width:u,height:d}=s,f=Di(Mi(n,i),a),p=u*f,m=d*f,h=t.ensureAccumulateFBO(r,p,m);r.blitFramebuffer(o,h,1024),r.bindFramebuffer(h),r.setViewport(0,0,h.width,h.height),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.clear(16384),this._isBound=!0}};function Di(e,t){let n=t>1.5?.25:.5;return e<1/(2*n)?1:n}function Oi(e){return e.key.level+1}var ki={color:{write:[!0,!0,!0,!0],blendMode:`additive`},depth:!1,stencil:{write:!1,test:{compare:518,mask:255,op:{fail:7680,zFail:7680,zPass:7681}}}},Ai={...ki,stencil:!1},ji={color:{write:[!0,!0,!0,!0],blendMode:`composite`},depth:!1,stencil:!1};function Mi(e,t){let{referenceScale:n,radius:r}=e.uniforms;return r*(n===0?1:n/t.scale)}var Ni=1/v,Pi=class extends Tt{};t([U(3,F)],Pi.prototype,`color`,void 0),t([U(4,k)],Pi.prototype,`offset`,void 0),t([U(5,k)],Pi.prototype,`textureUV`,void 0),t([U(6,F)],Pi.prototype,`fontAndReferenceSize`,void 0),t([U(7,F)],Pi.prototype,`outlineColor`,void 0),t([U(8,F)],Pi.prototype,`haloColor`,void 0),t([U(9,k)],Pi.prototype,`outlineAndHaloSize`,void 0),t([U(10,k)],Pi.prototype,`zoomRange`,void 0),t([U(11,N)],Pi.prototype,`clipAngle`,void 0),t([U(12,F)],Pi.prototype,`referenceSymbol`,void 0),t([U(15,N)],Pi.prototype,`visibility`,void 0);var Fi=class extends Oe{};t([U(13,k)],Fi.prototype,`offsetNextVertex1`,void 0),t([U(14,k)],Fi.prototype,`offsetNextVertex2`,void 0);var Ii=class extends Dt{},Li=class extends Ot{constructor(){super(...arguments),this.type=`TextShader`,this.computeAttributes={offset:[`offsetNextVertex1`,`offsetNextVertex2`]},this.textRenderPassType=0,this.isBackgroundPass=!1,this.isLabel=!1}clipLabel(e,t){let{clipAngle:n,zoomRange:r,visibility:i}=e,a=n.multiply(Ni),o=Ue(a.subtract(this.view.rotation),new N(360)),s=new N(0),c=ge(this.view.currentZoom.multiply(10)).divide(10),l=r.x,u=r.y,d=new N(1).subtract(H(l,c)).multiply(2),f=new N(A(D(o,new N(90)),ze(o,new N(270)))).multiply(2),p=new N(2).multiply(new N(1).subtract(H(c,u)));return s=s.add(t.multiply(d)),s=s.add(t.multiply(f)),s=s.add(p),i&&(s=s.add(i)),s}vertex(e,t){let n=Y(e.bitset,0),r=new N(1).subtract(n),i=e.fontAndReferenceSize[0],a=e.fontAndReferenceSize[1],o=e.fontAndReferenceSize[2],s=e.fontAndReferenceSize[3],c=i.divide(o),l=this.textRenderPassType===1?e.outlineColor:this.textRenderPassType===2?e.haloColor:this._getVertexColor(e),u=this.view.displayViewScreenMat3.multiply(new O(e.pos,1)),d=e.offset,f=new N(1),p=R.identity(),m=new k(0);if(this.isLabel){if(!e.referenceSymbol)throw Error(`InternalError: Optional attribute 'referenceSymbol' expected for labels`);let t=e.referenceSymbol,n=t.xy,r=t.z,i=this._unpackDirection(t.w),a=zt(this,e.id,r).divide(2),o=i.multiply(a.add(4));m=n.add(o),d=d.add(m)}else f=zt(this,e.id,a).divide(a),i=i.multiply(f),c=c.multiply(f),d=d.multiply(f),p=Ht(this,e.id),d=p.multiply(new O(d,0)).xy;let h=Y(e.bitset,3),g=this._getViewRotationMatrix(h).multiply(new O(d,0)).multiply(this.view.scaleFactor),_=this.isLabel?this.clipLabel(e,h):this.clip(e.id,e.zoomRange);_=this.isBackgroundPass?_.add(r.multiply(2)):_.add(n.multiply(2));let v=new N(0);if(this.textRenderPassType===1&&(_=_.add(q(V(e.outlineAndHaloSize.x,new N(0)),new N(2),new N(0))),v=new N(e.outlineAndHaloSize.x).divide(c).divide(s)),this.textRenderPassType===2){let t=e.outlineAndHaloSize.x,n=new N(e.outlineAndHaloSize.y);_=_.add(q(V(n,new N(0)),new N(2),new N(0))),v=n.add(t).divide(c).divide(s)}let y=this.isLabel?M(_,new N(1)):new pe(!1);return{glPosition:new F(u.xy.add(g.xy),_,1),color:l,size:c,textureUV:e.textureUV.divide(this.mosaicInfo.size),antialiasingWidth:new N(.105).multiply(o).divide(i).divide(this.view.pixelRatio),outlineDistanceOffset:v,...this.maybeRunHittest(e,t,{vvSizeAdjustment:f,vvRotation:p,labelOffset:m,labelClipped:y,scaleFactor:this.view.scaleFactor})}}_getViewRotationMatrix(e){let t=this.view.displayViewMat3,n=this.view.displayMat3,r=new N(1).subtract(e);return t.multiply(e).add(n.multiply(r))}_getHittestAlignmentMatrix(e){let t=this.view.viewMat3.multiply(this.view.tileMat3),n=this.view.tileMat3,r=new N(1).subtract(e);return t.multiply(e).add(n.multiply(r))}fragment(e){let t=new N(2/8),n=new N(1).subtract(t),r=K(this.mosaicTexture,e.textureUV).a,i=n.subtract(e.outlineDistanceOffset);this.highlight&&(i=i.divide(2));let a=e.antialiasingWidth,o=Ie(i.subtract(a),i.add(a),r);return this.getFragmentOutput(e.color.multiply(o),e)}computeHittestTriangle(e,t,{vvSizeAdjustment:n,vvRotation:r,labelOffset:i,scaleFactor:a}){let o,s,c;this.isLabel?(o=new O(e.offset.multiply(a).add(i),0),s=new O(t.offsetNextVertex1.multiply(a).add(i),0),c=new O(t.offsetNextVertex2.multiply(a).add(i),0)):(o=r.multiply(new O(e.offset.multiply(a).multiply(n),0)),s=r.multiply(new O(t.offsetNextVertex1.multiply(a).multiply(n),0)),c=r.multiply(new O(t.offsetNextVertex2.multiply(a).multiply(n),0)));let{viewMat3:l,tileMat3:u}=this.view,d=l.multiply(u).multiply(new O(e.pos,1)),f=Y(e.bitset,3),p=this._getHittestAlignmentMatrix(f);return{pos0:d.add(p.multiply(o)).xy,pos1:d.add(p.multiply(s)).xy,pos2:d.add(p.multiply(c)).xy}}hittest(e,t,n){let{vvSizeAdjustment:r,vvRotation:i,labelOffset:a,labelClipped:o,scaleFactor:s}=n,c=un(this.hittestRequest),{pos0:l,pos1:u,pos2:d}=this.computeHittestTriangle(e,t,{vvSizeAdjustment:r,vvRotation:i,labelOffset:a,scaleFactor:s});return q(c,()=>{let{tlbr:e}=this.hittestRequest;return this.isLabel?q(o,new N(0),ln(l,u,d,e)):ln(l,u,d,e)},()=>{let e=tn(this.hittestRequest.position,l,u,d),t=this.isLabel?o:new pe(!1);return q(t,new N(0),q(M(e,this.hittestRequest.distance),new N(0),new N(2)))})}_unpackDirection(e){let t=new be(e),n=Ge(t,new be(2)),r=ae(t,new be(3));return new k(new N(n).subtract(1),new N(r).subtract(1))}_getVertexColor(e){let t=e.color;if(this.visualVariableColor){let n=this.getColorValue(e.id);t=this.visualVariableColor.getColor(n,e.color,new pe(!1))}if(this.visualVariableOpacity){let n=this.getOpacityValue(e.id),r=this.visualVariableOpacity.getOpacity(n);t=t.multiply(r)}return t}};t([B(jt)],Li.prototype,`visualVariableColor`,void 0),t([B(Mt)],Li.prototype,`visualVariableOpacity`,void 0),t([B(Nt)],Li.prototype,`visualVariableRotation`,void 0),t([B(Pt)],Li.prototype,`visualVariableSizeMinMaxValue`,void 0),t([B(Ft)],Li.prototype,`visualVariableSizeScaleStops`,void 0),t([B(It)],Li.prototype,`visualVariableSizeStops`,void 0),t([B(Lt)],Li.prototype,`visualVariableSizeUnitValue`,void 0),t([P(At)],Li.prototype,`mosaicInfo`,void 0),t([z(j)],Li.prototype,`mosaicTexture`,void 0),t([L],Li.prototype,`textRenderPassType`,void 0),t([L],Li.prototype,`isBackgroundPass`,void 0),t([L],Li.prototype,`isLabel`,void 0),t([e(0,G(Pi)),e(1,G(Fi))],Li.prototype,`vertex`,null),t([e(0,G(Ii))],Li.prototype,`fragment`,null);var Ri=class extends ${constructor(){super(...arguments),this.type=20,this.shaders={geometry:new Li},this.drawPhase=14,this.symbologyPlane=3}render(e,t){let{painter:n}=e,r=w(e),i={...T(e),stencil:{write:!1,test:{compare:516,mask:255,op:{fail:7680,zFail:7680,zPass:7680}}}},a=t.instance.getInput(),o={shader:this.shaders.geometry,uniforms:{...C(e,t.target,a.uniforms),...x(e,t.target),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey)},textures:{...S(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...r,textRenderPassType:0,isBackgroundPass:!0,isLabel:!0},optionalAttributes:a.optionalAttributes,useComputeBuffer:E(e)};n.setPipelineState(i),n.setShader(o),n.submitDraw(e,t,{stencilRef:255}),n.setShader({...o,defines:{...r,textRenderPassType:2,isBackgroundPass:!1,isLabel:!0}}),n.submitDraw(e,t,{stencilRef:255}),n.setShader({...o,defines:{...r,textRenderPassType:0,isBackgroundPass:!1,isLabel:!0}}),n.submitDraw(e,t,{stencilRef:255})}};function zi(e){return H(new N(0),e).multiply(2).subtract(1)}var Bi=class extends bn{};t([U(9,N)],Bi.prototype,`accumulatedDistance`,void 0),t([U(10,N)],Bi.prototype,`totalLength`,void 0),t([U(11,N)],Bi.prototype,`gradientSize`,void 0),t([U(12,k)],Bi.prototype,`segmentDirection`,void 0),t([U(13,F)],Bi.prototype,`tlbr`,void 0);var Vi=class extends W{};t([P(N)],Vi.prototype,`isColorPass`,void 0);var Hi=class extends On{constructor(){super(...arguments),this.type=`GradientStrokeShader`}vertex(e,t){let{totalLength:n,gradientSize:r,segmentDirection:i,tlbr:a}=e,o=En(this,e),s=Y(e.bitset,Ze.isAlongLine),c=n.divide(this.view.displayZoomFactor),l=q(at(e.bitset,Ze.isAbsoluteSize),()=>{let e=q(M(s,new N(.5)),c,o.halfWidth);return r.divide(e)},r),u=e.accumulatedDistance.add(we(i,o.scaledOffset).divide(c)),d=a.divide(this.mosaicInfo.size.xyxy);return{...o,tlbr:d,relativePositionAlongLine:u,relativeGradientSize:l,isAlongLine:Y(e.bitset,Ze.isAlongLine),isDiscrete:Y(e.bitset,Ze.isDiscrete),...this.maybeRunHittest(e,t,o.halfWidth)}}fragment(e){let{isAlongLine:t,isDiscrete:r,relativePositionAlongLine:i,relativeGradientSize:a,normal:o,tlbr:s}=e,c=wn(e,this.antialiasingControls.blur),l=zi(o.y).multiply(He(Ce(o),new N(1))),u=new N(.5).multiply(l).add(new N(.5)),d=q(M(t,new N(.5)),i,u),f=q(M(r,new N(.5)),a.subtract(1),new N(0)),p=d.add(f).divide(a);p=q(M(t,new N(.5)),p,it(p));let m=I(s.xy,s.zw,new k(Ee(p,new N(0),new N(1)),.5)),h=K(this.mosaicTexture,m),g=e.opacity.multiply(c),_=this.getFragmentOutput(h.multiply(g),e),v=H(new N(.5),this.technique.isColorPass).multiply(n(`gradient-depth-epsilon`)),y=H(new N(0),o.y).multiply(new N(n(`gradient-depth-bias`)).subtract(v));return _.glFragDepth=Ee(Ce(o).add(y),new N(0),new N(1)),_}};t([P(At)],Hi.prototype,`mosaicInfo`,void 0),t([z(j)],Hi.prototype,`mosaicTexture`,void 0),t([P(Vi)],Hi.prototype,`technique`,void 0),t([e(0,G(Bi)),e(1,G(Et))],Hi.prototype,`vertex`,null);var Ui=class extends ${constructor(){super(...arguments),this.type=17,this.shaders={geometry:new Hi},this.symbologyPlane=1}_getShaderOptions(e,t,n){let{painter:r,pixelRatio:i}=e,a=t.instance.getInput();return{shader:this.shaders.geometry,uniforms:{...C(e,t.target,a.uniforms),...x(e,t.target),antialiasingControls:Ln(i),mosaicInfo:r.textureManager.getMosaicInfo(e,t.textureKey),technique:{isColorPass:n}},textures:{...S(e),mosaicTexture:r.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...w(e)},optionalAttributes:a.optionalAttributes,useComputeBuffer:E(e)}}render(e,t){let{painter:n}=e;if(E(e)||ne(e)){let r=T(e);n.setPipelineState(r),n.setShader(this._getShaderOptions(e,t,1)),n.submitDraw(e,t)}else e.context.setClearDepth(1),e.context.clear(256),n.setShader(this._getShaderOptions(e,t,0)),n.setPipelineState({color:!1,depth:{write:{zNear:0,zFar:1},test:513},stencil:{write:!1,test:{compare:514,mask:255,op:{fail:7680,zFail:7680,zPass:7680}}}}),n.submitDraw(e,t),n.setShader(this._getShaderOptions(e,t,1)),n.setPipelineState({color:{write:[!0,!0,!0,!0],blendMode:`composite`},depth:{write:!1,test:515},stencil:{write:!1,test:{compare:514,mask:255,op:{fail:7680,zFail:7680,zPass:7680}}}}),n.submitDraw(e,t)}},Wi=class extends ${constructor(){super(...arguments),this.type=21,this.shaders={geometry:new On},this.symbologyPlane=1}render(e,t){let{painter:n,pixelRatio:r}=e,i=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...C(e,t.target,i.uniforms),...x(e,t.target),antialiasingControls:Ln(r)},textures:S(e),defines:{...w(e)},optionalAttributes:i.optionalAttributes,useComputeBuffer:E(e)}),n.setPipelineState(T(e)),n.submitDraw(e,t)}},Gi=class extends bn{};t([U(9,N)],Gi.prototype,`accumulatedDistance`,void 0),t([U(10,k)],Gi.prototype,`segmentDirection`,void 0),t([U(11,N)],Gi.prototype,`offsetAlongLine`,void 0),t([U(12,N)],Gi.prototype,`capType`,void 0),t([U(13,F)],Gi.prototype,`tlbr`,void 0);var Ki=class extends On{constructor(){super(...arguments),this.type=`TexturedLineShader`}_getDistanceRatio(e,t){let n=Y(e.bitset,2);return n.multiply(Se(t,new N(.25)).multiply(new N(2))).add(new N(1).subtract(n).multiply(c(1)))}_getSDFAlpha(e){let{halfWidth:t,normal:n,tlbr:r,patternSize:i,accumulatedDistance:a,offsetAlongLine:o,dashToPx:s,capType:c}=e,l=i.x.divide(4).multiply(s),u=Ne(a.add(o).divide(l)),d=I(r.xy,r.zw,new k(u,.5)),f=pt(K(this.mosaicTexture,d)).multiply(2).subtract(1).multiply(64).multiply(s),p=n.y.multiply(t),m=de([V(c,new N(1)),f.subtract(t)],[V(c,new N(2)),Me(he(Se(f,new N(0)),new N(2)).add(p.multiply(p))).subtract(t)],[!0,f]),h=Ee(new N(.25).subtract(m),new N(0),new N(1));return new F(h)}_getPatternColor(e){let{halfWidth:t,normal:n,color:r,accumulatedDistance:i,patternSize:a,sampleAlphaOnly:o,tlbr:s}=e,c=a.y.multiply(new N(2).multiply(t).divide(a.x)),l=Ne(i.divide(c)),u=new N(.5).multiply(n.y).add(new N(.5)),d=I(s.xy,s.zw,new k(u,l)),f=K(this.mosaicTexture,d);return this.visualVariableColor!=null&&(f=q(M(o,new N(.5)),new F(r.a),r)),f}vertex(e,t){let{segmentDirection:n,tlbr:r,bitset:i}=e,a=En(this,e),o=e.accumulatedDistance.divide(this.view.displayZoomFactor).add(we(n,a.scaledOffset)),s=new k(r.z.subtract(r.x),r.w.subtract(r.y)),c=r.divide(this.mosaicInfo.size.xyxy),l=Y(i,3),u=Y(i,4),d=q(M(l,new N(.5)),this._getDistanceRatio(e,a.scaledHalfWidth),new N(1));return{...a,tlbr:c,patternSize:s,accumulatedDistance:o,isSDF:l,sampleAlphaOnly:u,dashToPx:d,offsetAlongLine:e.offsetAlongLine,capType:e.capType,...this.maybeRunHittest(e,t,a.halfWidth)}}fragment(e){let{color:t,opacity:n,isSDF:r}=e,i=wn(e,this.antialiasingControls.blur),a=q(M(r,new N(.5)),this._getSDFAlpha(e),this._getPatternColor(e)),o=t.multiply(n).multiply(i).multiply(a);return this.getFragmentOutput(o,e)}};t([P(At)],Ki.prototype,`mosaicInfo`,void 0),t([z(j)],Ki.prototype,`mosaicTexture`,void 0),t([e(0,G(Gi)),e(1,G(Et))],Ki.prototype,`vertex`,null);var qi=class extends ${constructor(){super(...arguments),this.type=33,this.shaders={geometry:new Ki},this.symbologyPlane=1}render(e,t){let{painter:n,pixelRatio:r}=e,i=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...C(e,t.target,i.uniforms),...x(e,t.target),antialiasingControls:Ln(r),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey)},textures:{...S(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...w(e)},optionalAttributes:i.optionalAttributes,useComputeBuffer:E(e)}),n.setPipelineState(T(e)),n.submitDraw(e,t)}},Ji=class extends Tt{};t([U(3,F)],Ji.prototype,`color`,void 0),t([U(4,F)],Ji.prototype,`outlineColor`,void 0),t([U(5,k)],Ji.prototype,`offset`,void 0),t([U(6,k)],Ji.prototype,`textureUV`,void 0),t([U(7,F)],Ji.prototype,`sizing`,void 0),t([U(8,N)],Ji.prototype,`placementAngle`,void 0),t([U(9,N)],Ji.prototype,`sdfDecodeCoeff`,void 0),t([U(10,k)],Ji.prototype,`zoomRange`,void 0);var Yi=class extends Oe{};t([U(11,k)],Yi.prototype,`offsetNextVertex1`,void 0),t([U(12,k)],Yi.prototype,`offsetNextVertex2`,void 0),t([U(13,k)],Yi.prototype,`textureUVNextVertex1`,void 0),t([U(14,k)],Yi.prototype,`textureUVNextVertex2`,void 0);var Xi=class extends Dt{};function Zi(e,t,n,r){return t.multiply(e.x).add(n.multiply(e.y)).add(r.multiply(e.z))}function Qi(e){return e.multiply(e).divide(128)}var $i=class extends Ot{constructor(){super(...arguments),this.type=`MarkerShader`,this.computeAttributes={offset:[`offsetNextVertex1`,`offsetNextVertex2`],textureUV:[`textureUVNextVertex1`,`textureUVNextVertex2`]}}vertex(e,t){let n=Qi(e.sizing.x),r=Qi(e.sizing.y),i=Qi(e.sizing.z),a=e.placementAngle,o=Y(e.bitset,Je.bitset.isSDF),s=Y(e.bitset,Je.bitset.isMapAligned),c=Y(e.bitset,Je.bitset.scaleSymbolsProportionally),l=at(e.bitset,Je.bitset.colorLocked),u=Vt(this,e.id),d=Bt(this,e.id,e.color,l).multiply(u),f=this.view.displayViewScreenMat3.multiply(new O(e.pos.xy,1)),p=zt(this,e.id,i).divide(i),m=n.multiply(p),h=e.offset.xy.multiply(p),g=r.multiply(c.multiply(p.subtract(1)).add(1));g=He(g,Se(m.subtract(.99),new N(0)));let _=Se(g,new N(1)),v=He(g,new N(1)),y=R.fromRotation(a.multiply(nt)),b=Ht(this,e.id),x=this._getViewRotationMatrix(s).multiply(b).multiply(y).multiply(new O(h.xy,0)).multiply(this.view.scaleFactor),S=this.clip(e.id,e.zoomRange),C=new F(f.xy.add(x.xy),S,1),w=e.textureUV.divide(this.mosaicInfo.size),T=e.outlineColor.multiply(v),E=Y(e.bitset,Je.bitset.overrideOutlineColor),ee=e.sdfDecodeCoeff.multiply(m);return{glPosition:C,color:d,textureUV:w,outlineColor:T,outlineSize:_,distanceToPx:ee,isSDF:o,overrideOutlineColor:E,...this.maybeRunHittest(e,t,{pos:e.pos,size:m,sizeCorrection:p,scaleFactor:this.view.scaleFactor,isMapAligned:s,vvRotationMat3:b,placementMat3:y,outlineSize:_,distanceToPx:ee,isSDF:o})}}fragment(e){let t=this._getColor(e.textureUV,e);return this.getFragmentOutput(t,e)}hittest(e,t,n){let{pos0:r,pos1:i,pos2:a}=this.computeHittestTriangle(e,t,n),o=un(this.hittestRequest);return q(o,()=>{let{tlbr:e}=this.hittestRequest;return cn(r,i,a,e)},()=>q(ze(n.size,this.hittestRequest.smallSymbolSizeThreshold),this._hittestSmallMarker(e,t,n),this._hittestMarker(e,t,n)))}_getViewRotationMatrix(e){let t=this.view.displayViewMat3,n=this.view.displayMat3,r=new N(1).subtract(e);return t.multiply(e).add(n.multiply(r))}_getViewScreenMatrix(e){let t=this.view.viewMat3.multiply(this.view.tileMat3),n=this.view.tileMat3,r=new N(1).subtract(e);return t.multiply(e).add(n.multiply(r))}_getColor(e,t){return q(V(t.isSDF,new N(1)),this._getSDFColor(e,t),this._getSpriteColor(e,t))}_getSpriteColor(e,t){return K(this.mosaicTexture,e).multiply(t.color)}_getSDFColor(e,t){let n=K(this.mosaicTexture,e),r=new N(.5).subtract(pt(n)).multiply(t.distanceToPx).multiply(1),i=Ee(new N(.5).subtract(r),new N(0),new N(1)),a=t.color.multiply(i),o=t.outlineSize;this.highlight&&(o=Se(o,t.overrideOutlineColor.multiply(4)));let s=o.multiply(.5),c=se(r).subtract(s),l=Ee(new N(.5).subtract(c),new N(0),new N(1)),u=I(t.outlineColor,t.color,t.overrideOutlineColor).multiply(l);return new N(1).subtract(u.a).multiply(a).add(u)}_hittestSmallMarker(e,t,n){let{position:r,distance:i,smallSymbolDistance:a}=this.hittestRequest,o=i.subtract(a),{viewMat3:s,tileMat3:c}=this.view,l=s.multiply(c).multiply(new O(n.pos,1)).xy,u=n.size.multiply(.5),d=ue(l,r).subtract(u).add(o);return q(M(d,this.hittestRequest.distance),new N(0),new N(2))}_hittestMarker(e,t,n){let{pos0:r,pos1:i,pos2:a}=this.computeHittestTriangle(e,t,n),o=this.hittestRequest.position,s=this.hittestRequest.distance,c=tn(o,r,i,a);return q(M(c,s),new N(0),this._hittestSamples(r,i,a,e,t,n))}computeHittestTriangle(e,t,n){let{pos:r,sizeCorrection:i,scaleFactor:a,isMapAligned:o}=n,s=new O(e.offset.multiply(i).multiply(a),0),c=new O(t.offsetNextVertex1.multiply(i).multiply(a),0),l=new O(t.offsetNextVertex2.multiply(i).multiply(a),0),{viewMat3:u,tileMat3:d}=this.view,f=u.multiply(d).multiply(new O(r,1)),p=this._getViewScreenMatrix(o).multiply(n.vvRotationMat3).multiply(n.placementMat3);return{pos0:f.add(p.multiply(s)).xy,pos1:f.add(p.multiply(c)).xy,pos2:f.add(p.multiply(l)).xy}}_hittestSamples(e,t,n,r,i,a){let{outlineSize:o,isSDF:s,distanceToPx:c}=a,l=this.hittestRequest.position,u=this.hittestRequest.distance,d=Q(l.add(new k(J(u),J(u))),e,t,n),f=Q(l.add(new k(0,J(u))),e,t,n),p=Q(l.add(new k(u,J(u))),e,t,n),m=Q(l.add(new k(J(u),0)),e,t,n),h=Q(l,e,t,n),g=Q(l.add(new k(u,0)),e,t,n),_=Q(l.add(new k(J(u),u)),e,t,n),v=Q(l.add(new k(0,u)),e,t,n),y=Q(l.add(new k(u,u)),e,t,n),b=r.textureUV.divide(this.mosaicInfo.size),x=i.textureUVNextVertex1.divide(this.mosaicInfo.size),S=i.textureUVNextVertex2.divide(this.mosaicInfo.size),C={color:new F(1),outlineColor:new F(1),overrideOutlineColor:new N(1),outlineSize:o,distanceToPx:c,isSDF:s},w=new N(0);return w=w.add(Z(d).multiply(this._getColor(Zi(d,b,x,S),C).a)),w=w.add(Z(f).multiply(this._getColor(Zi(f,b,x,S),C).a)),w=w.add(Z(p).multiply(this._getColor(Zi(p,b,x,S),C).a)),w=w.add(Z(m).multiply(this._getColor(Zi(m,b,x,S),C).a)),w=w.add(Z(h).multiply(this._getColor(Zi(h,b,x,S),C).a)),w=w.add(Z(g).multiply(this._getColor(Zi(g,b,x,S),C).a)),w=w.add(Z(_).multiply(this._getColor(Zi(_,b,x,S),C).a)),w=w.add(Z(v).multiply(this._getColor(Zi(v,b,x,S),C).a)),w=w.add(Z(y).multiply(this._getColor(Zi(y,b,x,S),C).a)),q(M(w,new N(.05)),new N(2),new N(0))}};t([B(jt)],$i.prototype,`visualVariableColor`,void 0),t([B(Mt)],$i.prototype,`visualVariableOpacity`,void 0),t([B(Nt)],$i.prototype,`visualVariableRotation`,void 0),t([B(Pt)],$i.prototype,`visualVariableSizeMinMaxValue`,void 0),t([B(Ft)],$i.prototype,`visualVariableSizeScaleStops`,void 0),t([B(It)],$i.prototype,`visualVariableSizeStops`,void 0),t([B(Lt)],$i.prototype,`visualVariableSizeUnitValue`,void 0),t([P(At)],$i.prototype,`mosaicInfo`,void 0),t([z(j)],$i.prototype,`mosaicTexture`,void 0),t([e(0,G(Ji)),e(1,G(Yi))],$i.prototype,`vertex`,null),t([e(0,G(Xi))],$i.prototype,`fragment`,null);var ea=class extends ${constructor(){super(...arguments),this.type=23,this.shaders={geometry:new $i},this.symbologyPlane=2}render(e,t){let{painter:n}=e,r=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...C(e,t.target,r.uniforms),...x(e,t.target),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey,!0)},textures:{...S(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey,!0)},defines:{...w(e)},optionalAttributes:r.optionalAttributes,useComputeBuffer:E(e)}),n.setPipelineState(T(e)),n.submitDraw(e,t)}},ta=class{constructor(){this.computeAttributes={}}get locationsMap(){let e=new Map;for(let t in this.locations)e.set(t,this.locations[t].index);return e}get optionPropertyKeys(){if(!this._optionPropertyKeys){let e=new Set(Object.keys(this.options));this._optionPropertyKeys=e}return this._optionPropertyKeys}get _transformFeedbackBindings(){return[]}get locationInfo(){if(!this._locationInfo){let e=this.locationsMap,t=Array.from(e.entries()).map(([e,t])=>`${e}.${t}`).join(`.`);this._locationInfo={stringHash:t,locations:e,computeAttributeMap:this.computeAttributes}}return this._locationInfo}get renamedLocationsMap(){let e=new Map;for(let[t,n]of this.locationsMap.entries())e.set(`a_`+t,n);return e}getShaderKey(e,t,n,r,i){return`${Object.keys(e).map(t=>`${t}.${e[t]}`).join(`.`)}.${Object.keys(r).filter(e=>r[e]).map(e=>`${e}_${r[e].toString()}`).join(`.`)}.${Object.keys(t).filter(e=>this.optionPropertyKeys.has(e)).join(`.`)}.${Object.keys(n).filter(e=>n[e]).join(`.`)}`}getProgram(e,t,n,r){let i=``,a=``;for(let e in n)if(n[e]){let t=typeof n[e]==`boolean`?`#define ${e}\n`:`#define ${e} ${n[e]}\n`;i+=t,a+=t}return i+=this.vertexShader,a+=this.fragmentShader,new Le(`glslShaderModule`,i,a,this.renamedLocationsMap,this._getUniformBindings(t),this._getTextureBindings(),this._transformFeedbackBindings)}_getUniformBindings(e){let t=[];for(let e in this.required){let n=this.required[e];t.push({uniformHydrated:null,shaderModulePath:e,uniformName:e,uniformType:n.type,uniformArrayElementType:na(n),uniformArrayLength:ra(n)})}for(let n in e){let r=this.options[n];if(e[n])for(let e in r){let i=r[e];t.push({uniformHydrated:null,shaderModulePath:`${n}.${e}`,uniformName:e,uniformType:i.type,uniformArrayElementType:na(i),uniformArrayLength:ra(i)})}}return t}_getTextureBindings(){let e=[];for(let t in this.textures)e.push({textureHydrated:null,shaderModulePath:t,textureName:t});return e}},na=e=>e.type===`array`?e.elementType?.type:void 0,ra=e=>e.type===`array`?e.size:void 0,ia={bitBlit:{"bitBlit.frag":`uniform lowp sampler2D u_tex;
uniform lowp float u_opacity;
varying mediump vec2 v_uv;
void main() {
lowp vec4 color = texture2D(u_tex, v_uv);
gl_FragColor = color * u_opacity;
}`,"bitBlit.vert":`attribute vec2 a_pos;
attribute vec2 a_tex;
varying mediump vec2 v_uv;
void main(void) {
gl_Position = vec4(a_pos , 0.0, 1.0);
v_uv = a_tex;
}`},debug:{overlay:{"overlay.frag":`precision mediump float;
varying vec4 v_color;
void main(void) {
gl_FragColor = v_color;
}`,"overlay.vert":`attribute vec3 a_PositionAndFlags;
uniform mat3 u_dvsMat3;
uniform vec4 u_colors[4];
uniform float u_opacities[4];
varying vec4 v_color;
void main(void) {
vec2 position = a_PositionAndFlags.xy;
float flags = a_PositionAndFlags.z;
int colorIndex = int(mod(flags, 4.0));
vec4 color;
for (int i = 0; i < 4; i++) {
color = u_colors[i];
if (i == colorIndex) {
break;
}
}
int opacityIndex = int(mod(floor(flags / 4.0), 4.0));
float opacity;
for (int i = 0; i < 4; i++) {
opacity = u_opacities[i];
if (i == opacityIndex) {
break;
}
}
v_color = color * opacity;
gl_Position = vec4((u_dvsMat3 * vec3(position, 1.0)).xy, 0.0, 1.0);
}`}},dot:{dot:{"dot.frag":`precision mediump float;
varying vec4 v_color;
varying float v_dotRatio;
varying float v_invEdgeRatio;
uniform highp float u_tileZoomFactor;
void main()
{
float dist = length(gl_PointCoord - vec2(.5, .5)) * 2.;
float alpha = smoothstep(0., 1., v_invEdgeRatio * (dist - v_dotRatio) + 1.);
gl_FragColor = v_color * alpha;
}`,"dot.vert":`precision highp float;
attribute vec2 a_pos;
uniform sampler2D u_texture;
uniform highp mat3 u_dvsMat3;
uniform highp float u_tileZoomFactor;
uniform highp float u_dotSize;
uniform highp float u_pixelRatio;
varying vec2 v_pos;
varying vec4 v_color;
varying float v_dotRatio;
varying float v_invEdgeRatio;
const float EPSILON = 0.000001;
void main()
{
mat3 tileToTileTexture = mat3(  1., 0., 0.,
0., -1., 0.,
0., 1., 1.  );
vec3 texCoords = tileToTileTexture * vec3(a_pos.xy / 512., 1.);
v_color = texture2D(u_texture, texCoords.xy);
float smoothEdgeWidth = max(u_dotSize / 2., 1.) ;
float z = 0.;
z += 2.0 * step(v_color.a, EPSILON);
gl_PointSize = (smoothEdgeWidth + u_dotSize);
gl_Position = vec4((u_dvsMat3 * vec3(a_pos + .5, 1.)).xy, z, 1.);
v_dotRatio = u_dotSize / gl_PointSize;
v_invEdgeRatio = -1. / ( smoothEdgeWidth / gl_PointSize );
gl_PointSize  *= (u_pixelRatio * u_tileZoomFactor);
}`}},filtering:{"bicubic.glsl":`vec4 computeWeights(float v) {
float b = 1.0 / 6.0;
float v2 = v * v;
float v3 = v2 * v;
float w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);
float w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);
float w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);
float w3 = b * v3;
return vec4(w0, w1, w2, w3);
}
vec4 bicubicOffsetsAndWeights(float v) {
vec4 w = computeWeights(v);
float g0 = w.x + w.y;
float g1 = w.z + w.w;
float h0 = 1.0 - (w.y / g0) + v;
float h1 = 1.0 + (w.w / g1) - v;
return vec4(h0, h1, g0, g1);
}
vec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 eX = vec2(1.0 / texSize.x, 0.0);
vec2 eY = vec2(0.0, 1.0 / texSize.y);
vec2 texel = coords * texSize - 0.5;
vec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;
vec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;
vec2 coords10 = coords + hgX.x * eX;
vec2 coords00 = coords - hgX.y * eX;
vec2 coords11 = coords10 + hgY.x * eY;
vec2 coords01 = coords00 + hgY.x * eY;
coords10 = coords10 - hgY.y * eY;
coords00 = coords00 - hgY.y * eY;
vec4 color00 = texture2D(sampler, coords00);
vec4 color10 = texture2D(sampler, coords10);
vec4 color01 = texture2D(sampler, coords01);
vec4 color11 = texture2D(sampler, coords11);
color00 = mix(color00, color01, hgY.z);
color10 = mix(color10, color11, hgY.z);
color00 = mix(color00, color10, hgX.z);
return color00;
}`,"bilinear.glsl":`vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 texelStart = floor(coords * texSize);
vec2 coord0 = texelStart / texSize;
vec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;
vec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;
vec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;
vec4 color0 = texture2D(sampler, coord0);
vec4 color1 = texture2D(sampler, coord1);
vec4 color2 = texture2D(sampler, coord2);
vec4 color3 = texture2D(sampler, coord3);
vec2 blend = fract(coords * texSize);
vec4 color01 = mix(color0, color1, blend.x);
vec4 color23 = mix(color2, color3, blend.x);
vec4 color = mix(color01, color23, blend.y);
#ifdef NNEDGE
float alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);
color = color * alpha + (1.0 - alpha) * texture2D(sampler, coords);
#endif
return color;
}`,"epx.glsl":`vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {
vec2 invSize = 1.0 / texSize;
vec2 texel = coords * texSize;
vec2 texel_i = floor(texel);
vec2 texel_frac = fract(texel);
vec4 colorP = texture2D(sampler, texel_i * invSize);
vec4 colorP1 = vec4(colorP);
vec4 colorP2 = vec4(colorP);
vec4 colorP3 = vec4(colorP);
vec4 colorP4 = vec4(colorP);
vec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);
vec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);
vec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);
vec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);
if (colorC == colorA && colorC != colorD && colorA != colorB) {
colorP1 = colorA;
}
if (colorA == colorB && colorA != colorC && colorB != colorD) {
colorP2 = colorB;
}
if (colorD == colorC && colorD != colorB && colorC != colorA) {
colorP3 = colorC;
}
if (colorB == colorD && colorB != colorA && colorD != colorC) {
colorP4 = colorD;
}
vec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);
vec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);
return mix(colorP12, colorP34, texel_frac.y);
}`},heatmap:{heatmapResolve:{"heatmapResolve.frag":`precision highp float;
#ifdef HEATMAP_PRECISION_HALF_FLOAT
#define COMPRESSION_FACTOR 4.0
#else
#define COMPRESSION_FACTOR 1.0
#endif
uniform sampler2D u_texture;
uniform sampler2D u_gradient;
uniform vec2 u_densityMinAndInvRange;
uniform float u_densityNormalization;
varying vec2 v_uv;
void main() {
vec4 data = texture2D(u_texture, v_uv);
float density = data.r * COMPRESSION_FACTOR;
density *= u_densityNormalization;
density = (density - u_densityMinAndInvRange.x) * u_densityMinAndInvRange.y;
vec4 color = texture2D(u_gradient, vec2(density, 0.5));
gl_FragColor = vec4(color.rgb * color.a, color.a);
}`,"heatmapResolve.vert":`precision highp float;
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
v_uv = a_pos;
gl_Position = vec4(a_pos * 2.0 - 1.0, 1., 1.);
}`}},highlight:{"blur.frag":`varying mediump vec2 v_texcoord;
uniform mediump vec4 u_direction;
uniform mediump mat4 u_channelSelector;
uniform mediump float u_sigma;
uniform sampler2D u_texture;
mediump float gauss1(mediump vec2 dir) {
return exp(-dot(dir, dir) / (2.0 * u_sigma * u_sigma));
}
mediump vec4 selectChannel(mediump vec4 sample) {
return u_channelSelector * sample;
}
void accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {
mediump float w = gauss1(i * u_direction.xy);
tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;
weight += w;
}
void main(void) {
mediump float tot = 0.0;
mediump float weight = 0.0;
accumGauss1(-5.0, tot, weight);
accumGauss1(-4.0, tot, weight);
accumGauss1(-3.0, tot, weight);
accumGauss1(-2.0, tot, weight);
accumGauss1(-1.0, tot, weight);
accumGauss1(0.0, tot, weight);
accumGauss1(1.0, tot, weight);
accumGauss1(2.0, tot, weight);
accumGauss1(3.0, tot, weight);
accumGauss1(4.0, tot, weight);
accumGauss1(5.0, tot, weight);
gl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);
}`,"highlight.frag":`varying mediump vec2 v_texcoord;
uniform sampler2D u_texture;
uniform mediump float u_sigma;
uniform sampler2D u_shade;
uniform mediump vec2 u_minMaxDistance;
mediump float estimateDistance() {
mediump float y = texture2D(u_texture, v_texcoord)[3];
const mediump float y0 = 0.5;
mediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * u_sigma);
mediump float d = (y - y0) / m0;
return d;
}
mediump vec4 shade(mediump float d) {
mediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);
mappedDistance = clamp(mappedDistance, 0.0, 1.0);
return texture2D(u_shade, vec2(mappedDistance, 0.5));
}
void main(void) {
mediump float d = estimateDistance();
gl_FragColor = shade(d);
}`,"textured.vert":`attribute mediump vec2 a_position;
attribute mediump vec2 a_texcoord;
varying mediump vec2 v_texcoord;
void main(void) {
gl_Position = vec4(a_position, 0.0, 1.0);
v_texcoord = a_texcoord;
}`},materials:{"attributeData.glsl":`uniform highp sampler2D filterFlags;
uniform highp sampler2D animation;
uniform highp sampler2D gpgpu;
uniform highp sampler2D visualVariableData;
uniform highp sampler2D dataDriven0;
uniform highp sampler2D dataDriven1;
uniform highp sampler2D dataDriven2;
uniform float size;
highp vec2 getAttributeDataCoords(in highp vec3 id) {
highp vec3  texel = unpackDisplayIdTexel(id);
highp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256);
highp float col = mod(u32, size);
highp float row = (u32 - col) / size;
highp float u = col / size;
highp float v = row / size;
return vec2(u, v);
}
highp vec2 getAttributeDataTextureCoords(in highp vec3 id) {
return (getAttributeDataCoords(id) * 2.0) - 1.0 + (.5 / vec2(size));
}
highp vec4 getFilterData(in highp vec3 id) {
vec2 coords = getAttributeDataCoords(id);
return texture2D(filterFlags, coords);
}
highp vec4 getAnimation(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(animation, coords);
}
highp vec4 getVisualVariableData(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(visualVariableData, coords);
}
highp vec4 getDataDriven0(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(dataDriven0, coords);
}
highp vec4 getDataDriven1(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(dataDriven1, coords);
}
highp vec4 getGPGPU(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(gpgpu, coords);
}
highp vec4 getDataDriven2(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(dataDriven2, coords);
}
float u88VVToFloat(in vec2 v) {
bool isMagic = v.x == 255.0 && v.y == 255.0;
if (isMagic) {
return NAN_MAGIC_NUMBER;
}
return (v.x + v.y * float(0x100)) - 32768.0;
}`,"barycentric.glsl":`float inTriangle(vec3 bary) {
vec3 absBary = abs(bary);
return step((absBary.x + absBary.y + absBary.z), 1.05);
}
vec3 xyToBarycentric(in vec2 pos, in vec2 v0,  in vec2 v1, in vec2 v2) {
mat3 xyToBarycentricMat3 = mat3(
v1.x * v2.y - v2.x * v1.y, v2.x * v0.y - v0.x * v2.y, v0.x * v1.y - v1.x * v0.y,
v1.y - v2.y, v2.y - v0.y, v0.y - v1.y,
v2.x - v1.x, v0.x - v2.x, v1.x - v0.x
);
float A2 = v0.x * (v1.y - v2.y) + v1.x * (v2.y - v0.y) + v2.x * (v0.y - v1.y);
return (1. / A2) * xyToBarycentricMat3 * vec3(1., pos);
}`,"constants.glsl":`const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_RAD_TO_DEG = 180.0 / 3.141592654;
const float POSITION_PRECISION = 1.0 / 8.0;
const float FILL_POSITION_PRECISION = 1.0 / 1.0;
const float SOFT_EDGE_RATIO = 1.0;
const float THIN_LINE_WIDTH_FACTOR = 1.1;
const float THIN_LINE_HALF_WIDTH = 1.0;
const float EXTRUDE_SCALE_PLACEMENT_PADDING = 1.0 / 4.0;
const float OFFSET_PRECISION = 1.0 / 8.0;
const float OUTLINE_SCALE = 1.0 / 5.0;
const float SDF_FONT_SIZE = 24.0;
const float MAX_SDF_DISTANCE = 8.0;
const float PLACEMENT_PADDING = 8.0;
const float EPSILON = 0.00001;
const float EPSILON_HITTEST = 0.05;
const int MAX_FILTER_COUNT = 2;
const int ATTR_VV_SIZE = 0;
const int ATTR_VV_COLOR = 1;
const int ATTR_VV_OPACITY = 2;
const int ATTR_VV_ROTATION = 3;
const highp float NAN_MAGIC_NUMBER = 1e-30;
const int BITSET_GENERIC_LOCK_COLOR = 1;
const int BITSET_GENERIC_CONSIDER_ALPHA_ONLY = 4;
const int BITSET_MARKER_ALIGNMENT_MAP = 0;
const int BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE = 2;
const int BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY = 3;
const int BITSET_TYPE_FILL_OUTLINE = 0;
const int BITSET_FILL_RANDOM_PATTERN_OFFSET = 2;
const int BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR = 3;
const int BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR = 5;
const int BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR = 6;
const int BITSET_LINE_SCALE_DASH = 2;`,fill:{"common.glsl":`#include <materials/symbologyTypeUtils.glsl>
#ifdef PATTERN
uniform mediump vec2 u_mosaicSize;
varying mediump float v_sampleAlphaOnly;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
uniform lowp vec4 u_isActive[ 2 ];
uniform highp float u_dotValue;
uniform highp float u_tileDotsOverArea;
uniform highp float u_dotTextureDotCount;
uniform mediump float u_tileZoomFactor;
#endif
varying highp vec3 v_id;
varying lowp vec4 v_color;
varying lowp float v_opacity;
varying mediump vec4 v_aux1;
#ifdef PATTERN
varying mediump vec2 v_tileTextureCoord;
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
varying lowp float v_isOutline;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
varying highp vec2 v_dotTextureCoords;
varying highp vec4 v_dotThresholds[ 2 ];
#endif`,"fill.frag":`precision highp float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/fill/common.glsl>
#ifdef PATTERN
uniform lowp sampler2D u_texture;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
uniform mediump mat4 u_dotColors[ 2 ];
uniform sampler2D u_dotTextures[ 2 ];
uniform vec4 u_dotBackgroundColor;
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
lowp vec4 drawLine() {
float v_lineWidth = v_aux1.x;
vec2  v_normal    = v_aux1.yz;
LineData inputs = LineData(
v_color,
v_normal,
v_lineWidth,
v_opacity,
v_id
);
return shadeLine(inputs);
}
#endif
lowp vec4 drawFill() {
lowp vec4 out_color = vec4(0.);
#ifdef HITTEST
out_color = v_color;
#elif defined(PATTERN)
mediump vec4 v_tlbr = v_aux1;
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
if (v_sampleAlphaOnly > 0.5) {
color.rgb = vec3(color.a);
}
out_color = v_opacity * v_color * color;
#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY && !defined(HIGHLIGHT)
vec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);
vec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);
vec4 difference0 = v_dotThresholds[0] - textureThresholds0;
vec4 difference1 = v_dotThresholds[1] - textureThresholds1;
#ifdef DD_DOT_BLENDING
vec4 isPositive0 = step(0.0, difference0);
vec4 isPositive1 = step(0.0, difference1);
float weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);
float lessThanEqZero = step(weightSum, 0.0);
float greaterThanZero = 1.0 - lessThanEqZero ;
float divisor = (weightSum + lessThanEqZero);
vec4 weights0 = difference0 * isPositive0 / divisor;
vec4 weights1 = difference1 * isPositive1 / divisor;
vec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;
vec4 preEffectColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;
#else
float diffMax = max(max4(difference0), max4(difference1));
float lessThanZero = step(diffMax, 0.0);
float greaterOrEqZero = 1.0 - lessThanZero;
vec4 isMax0 = step(diffMax, difference0);
vec4 isMax1 = step(diffMax, difference1);
vec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;
vec4 preEffectColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;
#endif
out_color = preEffectColor;
#else
out_color = v_opacity * v_color;
#endif
#ifdef HIGHLIGHT
out_color.a = 1.0;
#endif
return out_color;
}
void main() {
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
if (v_isOutline > 0.5) {
gl_FragColor = drawLine();
} else {
gl_FragColor = drawFill();
}
#else
gl_FragColor = drawFill();
#endif
}`,"fill.vert":`#include <materials/symbologyTypeUtils.glsl>
#define PACKED_LINE
precision highp float;
attribute float a_bitset;
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
attribute float a_inverseArea;
vec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);
vec2 a_zoomRange = vec2(0.0, 10000.0);
#else
attribute vec4 a_color;
attribute vec4 a_aux2;
attribute vec4 a_aux3;
#ifndef SYMBOLOGY_TYPE_IS_SIMPLE_LIKE
attribute vec4 a_aux1;
attribute vec2 a_zoomRange;
#else
vec2 a_zoomRange = vec2(0.0, 10000.0);
#endif
#endif
uniform vec2 u_tileOffset;
uniform vec2 u_maxIntNumOfCrossing;
#include <util/encoding.glsl>
#include <materials/vcommon.glsl>
#include <materials/fill/common.glsl>
#include <materials/fill/hittest.glsl>
const float INV_SCALE_COMPRESSION_FACTOR = 1.0 / 128.0;
const float MAX_REPRESENTABLE_INT = 16777216.0;
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
vec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {
return featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);
}
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
void drawLine(out lowp vec4 out_color, out highp vec3 out_pos) {
LineData outputs = buildLine(
out_pos,
a_id,
a_pos,
a_color,
(a_aux3.xy - 128.) / 16.,
(a_aux3.zw - 128.) / 16.,
0.,
a_aux2.z / 16.,
a_bitset,
vec4(0.),
vec2(0.),
a_aux2.w / 16.
);
v_id      = outputs.id;
v_opacity = outputs.opacity;
v_aux1    = vec4(outputs.lineHalfWidth, outputs.normal, 0.);
out_color = outputs.color;
}
#endif
void drawFill(out lowp vec4 out_color, out highp vec3 out_pos) {
float a_bitSet = a_bitset;
out_color = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity = getOpacity();
v_id      = norm(a_id);
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
mat3 tileToTileNormalized = mat3(  2. / 512.,  0.,  0.,
0., -2. / 512.,  0.,
-1.,  1.,  1.  );
out_pos   = tileToTileNormalized * vec3((a_pos * FILL_POSITION_PRECISION), 1.);
#else
out_pos   = u_dvsMat3 * vec3(a_pos * FILL_POSITION_PRECISION, 1.);
#endif
#ifdef PATTERN
vec4  a_tlbr   = a_aux1;
float a_width  = a_aux2.x;
float a_height = a_aux2.y;
vec2  a_offset = a_aux2.zw;
vec2  a_scale  = a_aux3.xy;
float a_angle  = a_aux3.z;
if (getBit(a_bitset, BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR) > 0.5) {
a_width *= INV_SCALE_COMPRESSION_FACTOR;
}
if (getBit(a_bitset, BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR) > 0.5) {
a_height *= INV_SCALE_COMPRESSION_FACTOR;
}
vec2 scale = INV_SCALE_COMPRESSION_FACTOR * a_scale;
float width = u_zoomFactor * a_width * scale.x;
float height = u_zoomFactor * a_height * scale.y;
float angle = C_256_TO_RAD * a_angle;
float sinA = sin(angle);
float cosA = cos(angle);
float dx = 0.0;
float dy = 0.0;
if (getBit(a_bitset, BITSET_FILL_RANDOM_PATTERN_OFFSET) > 0.5) {
float id = rgba2float(vec4(a_id, 0.0));
dx = rand(vec2(id, 0.0));
dy = rand(vec2(0.0, id));
}
mat3 patternMatrix = mat3(cosA / width, sinA / height, 0,
-sinA / width, cosA / height, 0,
dx,            dy,           1);
vec2 patternSize = vec2(a_width, a_height);
vec2 numPatternsPerMaxInt = vec2(MAX_REPRESENTABLE_INT) / patternSize;
vec2 maxIntCrossingOffsetCorrection = patternSize * fract(u_maxIntNumOfCrossing * numPatternsPerMaxInt);
vec2 tileOffset = u_tileOffset + maxIntCrossingOffsetCorrection - 0.5 * patternSize;
tileOffset = vec2(tileOffset.x * cosA - tileOffset.y * sinA, tileOffset.x * sinA + tileOffset.y * cosA);
tileOffset = mod(tileOffset, patternSize);
vec2 symbolOffset = u_zoomFactor * scale * vec2(a_offset - tileOffset) / vec2(width, height);
v_tileTextureCoord = (patternMatrix * vec3(a_pos * FILL_POSITION_PRECISION, 1.0)).xy - symbolOffset;
v_aux1 = a_tlbr / u_mosaicSize.xyxy;
v_sampleAlphaOnly = getBit(a_bitset, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);
if (getBit(a_bitSet, BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR) > 0.5) {
#ifdef VV_COLOR
v_sampleAlphaOnly *= (1.0 - float(isNan(VV_ADATA[ATTR_VV_COLOR]))) * (1.0 - getBit(a_bitSet, BITSET_GENERIC_LOCK_COLOR));
#else
v_sampleAlphaOnly = 0.0;
#endif
}
#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
vec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;
vec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;
float size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;
v_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);
v_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);
v_dotTextureCoords = (a_pos * FILL_POSITION_PRECISION + 0.5) / size;
#endif
}
#ifdef HITTEST
void draw(out lowp vec4 out_color, out highp vec3 out_pos) {
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
if (getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE) > 0.5) {
out_pos = vec3(0., 0., 2.);
return;
}
#endif
hittestFill(out_color, out_pos);
gl_PointSize = 1.0;
}
#elif defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
void draw(out lowp vec4 out_color, out highp vec3 out_pos) {
v_isOutline = getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE);
if (v_isOutline > 0.5) {
drawLine(out_color, out_pos);
} else {
drawFill(out_color, out_pos);
}
}
#else
#define draw drawFill
#endif
void main()
{
INIT;
highp vec3 pos  = vec3(0.);
highp vec4 color  = vec4(0.);
draw(color, pos);
v_color = color;
gl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);
}`,"hittest.glsl":`#ifdef HITTEST
#include <materials/hittest/common.glsl>
attribute vec2 a_pos1;
attribute vec2 a_pos2;
void hittestFill(
out lowp vec4 out_color,
out highp vec3 out_pos
) {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * FILL_POSITION_PRECISION, 1.);
vec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * FILL_POSITION_PRECISION, 1.);
vec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * FILL_POSITION_PRECISION, 1.);
float hittestDist = u_hittestDist;
float dist = distPointTriangle(u_hittestPos, pos.xy, pos1.xy, pos2.xy);
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if (dist < 0. || dist >= hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, dist == 0. ? (1. / 255.) : 0.);
}
#endif`},hittest:{"common.glsl":`#ifdef HITTEST
uniform float hittestDist;
uniform highp vec2 hittestPos;
float projectScalar(vec2 a, vec2 b) {
return dot(a, normalize(b));
}
float distPointSegment(vec2 p0, vec2 p1, vec2 p2) {
vec2 L = p2 - p1;
vec2 A = p0 - p1;
float projAL = projectScalar(A, L);
float t = clamp(projAL / length(L), 0., 1.);
return distance(p0, p1 + t * (p2 - p1));
}
void hittestMarker(out lowp vec4 out_color, out highp vec3 out_pos, in highp vec3 pos, float size) {
float dist = distance(pos, vec3(hittestPos, 1.));
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if ((dist - size) > hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, (dist - size) < 0. ? (1. / 255.) : 0.);
}
float intersectPointTriangleBary(vec2 p, vec2 a, vec2 b, vec2 c) {
return inTriangle(xyToBarycentric(p, a, b, c));
}
float distPointTriangle(vec2 p, vec2 a, vec2 b, vec2 c) {
vec2 ba = b - a;
vec2 ca = c - a;
float crossProduct = ba.x * ca.y - ca.x * ba.y;
bool isParallel = crossProduct < EPSILON_HITTEST && crossProduct > -EPSILON_HITTEST;
if (isParallel) {
return -1.;
}
if (intersectPointTriangleBary(p.xy, a, b, c) == 1.) {
return 0.;
}
float distAB = distPointSegment(p, a, b);
float distBC = distPointSegment(p, b, c);
float distCA = distPointSegment(p, c, a);
return min(min(distAB, distBC), distCA);
}
#endif`},icon:{"common.glsl":`#include <util/encoding.glsl>
uniform lowp vec2 u_mosaicSize;
varying lowp vec4 v_color;
varying highp vec3 v_id;
varying highp vec4 v_sizeTex;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
uniform lowp sampler2D u_texture;
#ifdef SDF
varying lowp vec4 v_outlineColor;
varying mediump float v_outlineWidth;
varying mediump float v_distRatio;
varying mediump float v_overridingOutlineColor;
varying mediump float v_isThin;
#endif
#ifdef SDF
vec4 getColor(vec2 v_size, vec2 v_tex) {
#ifdef HITTEST
lowp vec4 fillPixelColor = vec4(1.0);
#else
lowp vec4 fillPixelColor = v_color;
#endif
float d = 0.5 - rgba2float(texture2D(u_texture, v_tex));
float size = max(v_size.x, v_size.y);
float dist = d * size * SOFT_EDGE_RATIO * v_distRatio;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
float outlineWidth = v_outlineWidth;
#ifdef HIGHLIGHT
outlineWidth = max(outlineWidth, 4.0 * v_isThin);
#endif
if (outlineWidth > 0.25) {
lowp vec4 outlinePixelColor = v_overridingOutlineColor * v_color + (1.0 - v_overridingOutlineColor) * v_outlineColor;
float clampedOutlineSize = min(outlineWidth, size);
outlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);
return v_opacity * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);
}
return v_opacity * fillPixelColor;
}
#else
vec4 getColor(vec2 _v_size, vec2 v_tex) {
lowp vec4 texColor = texture2D(u_texture, v_tex);
return v_opacity * texColor * v_color;
}
#endif`,heatmapAccumulate:{"common.glsl":`varying lowp vec4 v_hittestResult;
varying mediump vec2 v_offsetFromCenter;
varying highp float v_fieldValue;`,"heatmapAccumulate.frag":`precision mediump float;
#include <materials/icon/heatmapAccumulate/common.glsl>
#ifdef HEATMAP_PRECISION_HALF_FLOAT
#define COMPRESSION_FACTOR 0.25
#else
#define COMPRESSION_FACTOR 1.0
#endif
uniform lowp sampler2D u_texture;
void main() {
#ifdef HITTEST
gl_FragColor = v_hittestResult;
#else
float radius = length(v_offsetFromCenter);
float shapeWeight = step(radius, 1.0);
float oneMinusRadiusSquared = 1.0 - radius * radius;
float kernelWeight = oneMinusRadiusSquared * oneMinusRadiusSquared;
gl_FragColor = vec4(shapeWeight * kernelWeight * v_fieldValue * COMPRESSION_FACTOR);
#endif
}`,"heatmapAccumulate.vert":`precision highp float;
attribute vec2 a_vertexOffset;
vec4 a_color = vec4(0.0);
vec2 a_zoomRange = vec2(0.0, 10000.0);
uniform float u_radius;
uniform float u_isFieldActive;
#include <materials/vcommon.glsl>
#include <materials/hittest/common.glsl>
#include <materials/icon/heatmapAccumulate/common.glsl>
void main() {
float filterFlags = getFilterFlags();
#ifdef HITTEST
highp vec4 out_hittestResult = vec4(0.);
highp vec3 out_pos = vec3(0.);
vec3 pos = u_viewMat3 * u_tileMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);
hittestMarker(out_hittestResult, out_pos, pos, u_radius);
v_hittestResult = out_hittestResult;
gl_PointSize = 1.;
gl_Position = vec4(clip(a_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
v_offsetFromCenter = sign(a_vertexOffset);
v_fieldValue = getAttributeData2(a_id).x * u_isFieldActive + 1.0 - u_isFieldActive;
vec3 centerPos = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);
vec3 vertexPos = centerPos + u_displayViewMat3 * vec3(v_offsetFromCenter, 0.0) * u_radius;
gl_Position = vec4(clip(a_color, vertexPos, filterFlags, a_zoomRange), 1.0);
#endif
}`},"hittest.glsl":`#ifdef HITTEST
#include <materials/hittest/common.glsl>
attribute vec2 a_vertexOffset1;
attribute vec2 a_vertexOffset2;
attribute vec2 a_texCoords1;
attribute vec2 a_texCoords2;
vec2 getTextureCoords(in vec3 bary, in vec2 texCoords0, in vec2 texCoords1, in vec2 texCoords2) {
return texCoords0 * bary.x + texCoords1 * bary.y + texCoords2 * bary.z;
}
void hittestIcon(
inout lowp vec4 out_color,
out highp vec3 out_pos,
in vec3 pos,
in vec3 offset,
in vec2 size,
in float scaleFactor,
in float isMapAligned
) {
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
vec3 posBase = u_viewMat3 * u_tileMat3  * pos;
vec3 offset1 = scaleFactor * vec3(a_vertexOffset1 / 16.0, 0.);
vec3 offset2 = scaleFactor * vec3(a_vertexOffset2 / 16.0, 0.);
vec2 pos0    = (posBase + getMatrixNoDisplay(isMapAligned) * offset).xy;
vec2 pos1    = (posBase + getMatrixNoDisplay(isMapAligned) * offset1).xy;
vec2 pos2    = (posBase + getMatrixNoDisplay(isMapAligned) * offset2).xy;
vec3 bary0 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, -u_hittestDist), pos0, pos1, pos2);
vec3 bary1 = xyToBarycentric(u_hittestPos + vec2(0., -u_hittestDist), pos0, pos1, pos2);
vec3 bary2 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, -u_hittestDist), pos0, pos1, pos2);
vec3 bary3 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, 0.), pos0, pos1, pos2);
vec3 bary4 = xyToBarycentric(u_hittestPos, pos0, pos1, pos2);
vec3 bary5 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, 0.), pos0, pos1, pos2);
vec3 bary6 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, u_hittestDist), pos0, pos1, pos2);
vec3 bary7 = xyToBarycentric(u_hittestPos + vec2(0., u_hittestDist), pos0, pos1, pos2);
vec3 bary8 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, u_hittestDist), pos0, pos1, pos2);
vec2 tex0 = a_texCoords  / u_mosaicSize;
vec2 tex1 = a_texCoords1 / u_mosaicSize;
vec2 tex2 = a_texCoords2 / u_mosaicSize;
float alphaSum = 0.;
alphaSum += inTriangle(bary0) * getColor(size, getTextureCoords(bary0, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary1) * getColor(size, getTextureCoords(bary1, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary2) * getColor(size, getTextureCoords(bary2, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary3) * getColor(size, getTextureCoords(bary3, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary4) * getColor(size, getTextureCoords(bary4, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary5) * getColor(size, getTextureCoords(bary5, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary6) * getColor(size, getTextureCoords(bary6, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary7) * getColor(size, getTextureCoords(bary7, tex0, tex1, tex2)).a;
out_pos.z += step(alphaSum, .05) * 2.0;
out_color = vec4(1. / 255., 0., 0., alphaSum / 255.);
}
#endif`,"icon.frag":`precision mediump float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/icon/common.glsl>
void main()
{
#ifdef HITTEST
vec4 color = v_color;
#else
vec4 color = getColor(v_sizeTex.xy, v_sizeTex.zw);
#endif
#ifdef HIGHLIGHT
color.a = step(1.0 / 255.0, color.a);
#endif
gl_FragColor = color;
}`,"icon.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_outlineColor;
attribute vec4 a_sizeAndOutlineWidth;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
attribute vec2 a_bitSetAndDistRatio;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/icon/common.glsl>
#include <materials/icon/hittest.glsl>
float getMarkerScaleFactor(inout vec2 size, in float referenceSize) {
#ifdef VV_SIZE
float f = getSize(size.y) / size.y;
float sizeFactor = size.y / referenceSize;
return getSize(referenceSize) / referenceSize;
#else
return 1.;
#endif
}
void main()
{
INIT;
float a_bitSet = a_bitSetAndDistRatio.x;
vec3  pos           = vec3(a_pos * POSITION_PRECISION, 1.0);
vec2  size          = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;
vec3  offset        = vec3(a_vertexOffset / 16.0, 0.);
float outlineSize   = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 128.0;
float isMapAligned  = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);
float referenceSize = a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0;
float scaleSymbolProportionally = getBit(a_bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);
float scaleFactor               = getMarkerScaleFactor(size, referenceSize);
size.xy     *= scaleFactor;
offset.xy   *= scaleFactor;
outlineSize *= scaleSymbolProportionally * (scaleFactor - 1.0) + 1.0;
vec2 v_tex   = a_texCoords / u_mosaicSize;
float filterFlags = getFilterFlags();
v_color    = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity  = getOpacity();
v_id       = norm(a_id);
v_pos      = u_dvsMat3 * pos + getMatrix(isMapAligned) * getRotation()  * offset;
v_sizeTex  = vec4(size.xy, v_tex.xy);
#ifdef SDF
v_isThin   = getBit(a_bitSet, BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE);
#ifdef VV_COLOR
v_overridingOutlineColor = v_isThin;
#else
v_overridingOutlineColor = 0.0;
#endif
v_outlineWidth = min(outlineSize, max(max(size.x, size.y) - 0.99, 0.0));
v_outlineColor = a_outlineColor;
v_distRatio = a_bitSetAndDistRatio.y / 128.0;
#endif
#ifdef HITTEST
highp vec4 out_color = vec4(0.);
highp vec3 out_pos   = vec3(0.);
hittestIcon(out_color, out_pos, pos, offset, size, scaleFactor, isMapAligned);
v_color = out_color;
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
gl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);
#endif
}`},label:{"common.glsl":`uniform mediump float u_zoomLevel;
uniform mediump float u_mapRotation;
uniform mediump float u_mapAligned;
uniform mediump vec2 u_mosaicSize;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying mediump vec2 v_tex;
varying mediump vec4 v_color;
varying lowp vec4 v_animation;`,"label.frag":`#include <materials/text/text.frag>`,"label.vert":`precision highp float;
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texAndSize;
attribute vec4 a_refSymbolAndPlacementOffset;
attribute vec4 a_glyphData;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHaloPass;
uniform float u_isBackgroundPass;
uniform float u_mapRotation;
uniform float u_mapAligned;
float getZ(in float minZoom, in float maxZoom, in float angle) {
float glyphAngle = angle * 360.0 / 254.0;
float mapAngle = u_mapRotation * 360.0 / 254.0;
float diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));
float z = 0.0;
z += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_currentZoom)));
z += u_mapAligned * 2.0 * step(90.0, diffAngle);
z += 2.0 * (1.0 - step(u_currentZoom, maxZoom));
return z;
}
void main()
{
INIT;
float groupMinZoom    = getMinZoom();
float glyphMinZoom    = a_glyphData.x;
float glyphMaxZoom    = a_glyphData.y;
float glyphAngle      = a_glyphData.z;
float a_isBackground  = a_glyphData.w;
float a_minZoom          = max(groupMinZoom, glyphMinZoom);
float a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING;
vec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);
float a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;
float fontSize           = a_texAndSize.z;
float haloSize           = a_texAndSize.w * OUTLINE_SCALE;
vec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;
vec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);
float z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);
float fontScale    = fontSize / SDF_FONT_SIZE;
float halfSize     = getSize(a_refSymbolSize) / 2.0;
float animation    = pow(getAnimationState(), vec4(2.0)).r;
float isText = 1.0 - a_isBackground;
float isBackground = u_isBackgroundPass * a_isBackground;
vec4  nonHaloColor = (isBackground + isText) * a_color;
v_color     = animation * ((1.0 - u_isHaloPass) * nonHaloColor + (u_isHaloPass * a_haloColor));
v_opacity   = 1.0;
v_tex       = a_texCoords / u_mosaicSize;
v_edgeDistanceOffset = u_isHaloPass * haloSize / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
vec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);
vec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);
vec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);
float isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;
v_pos.z += 2.0 * isHidden;
gl_Position = vec4(v_pos, 1.0);
#ifdef DEBUG
v_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);
#endif
}`},line:{"common.glsl":`varying lowp vec4 v_color;
varying highp vec3 v_id;
varying mediump vec2 v_normal;
varying mediump float v_lineHalfWidth;
varying lowp float v_opacity;
#ifdef PATTERN
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
#endif
#if defined(PATTERN) || defined(SDF)
varying highp float v_accumulatedDistance;
#endif
#ifdef SDF
varying mediump float v_lineWidthRatio;
#endif`,"hittest.glsl":`#include <materials/hittest/common.glsl>
#ifdef HITTEST
attribute vec2 a_pos1;
attribute vec2 a_pos2;
void hittestLine(out lowp vec4 out_color, out highp vec3 out_pos, float halfWidth) {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * POSITION_PRECISION, 1.);
vec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * POSITION_PRECISION, 1.);
vec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * POSITION_PRECISION, 1.);
vec3 outTextureCoords = vec3(getAttributeDataTextureCoords(a_id), 0.0);
float dist = min(distPointSegment(u_hittestPos, pos.xy, pos1.xy),
distPointSegment(u_hittestPos, pos.xy, pos2.xy)) - halfWidth;
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if (dist >= u_hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, dist <= 0. ? (1. / 255.) : 0.);
}
#endif`,"line.frag":`precision lowp float;
#include <util/encoding.glsl>
#include <materials/constants.glsl>
#include <materials/symbologyTypeUtils.glsl>
#include <materials/line/common.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
#ifdef HITTEST
void main() {
gl_FragColor = v_color;
}
#else
void main() {
LineData inputs = LineData(
v_color,
v_normal,
v_lineHalfWidth,
v_opacity,
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
v_tlbr,
v_patternSize,
#endif
#ifdef SDF
v_lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance,
#endif
#endif
v_id
);
gl_FragColor = shadeLine(inputs);
}
#endif`,"line.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_offsetAndNormal;
attribute vec2 a_accumulatedDistanceAndHalfWidth;
attribute vec4 a_tlbr;
attribute vec4 a_segmentDirection;
attribute vec2 a_aux;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/symbologyTypeUtils.glsl>
#include <materials/line/common.glsl>
#include <materials/line/hittest.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
#ifdef HITTEST
void draw() {
float aa        = 0.5 * u_antialiasing;
float a_halfWidth = a_accumulatedDistanceAndHalfWidth.y / 16.;
float a_cimHalfWidth = a_aux.x / 16. ;
vec2  a_offset = a_offsetAndNormal.xy / 16.;
float baseWidth = getBaseLineHalfWidth(a_halfWidth, a_cimHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
highp vec3 pos  = vec3(0.);
v_color = vec4(0.);
hittestLine(v_color, pos, halfWidth);
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);
}
#else
void draw()
{
highp vec3 pos = vec3(0.);
LineData outputs = buildLine(
pos,
a_id,
a_pos,
a_color,
a_offsetAndNormal.xy / 16.,
a_offsetAndNormal.zw / 16.,
a_accumulatedDistanceAndHalfWidth.x,
a_accumulatedDistanceAndHalfWidth.y / 16.,
a_segmentDirection.w,
a_tlbr,
a_segmentDirection.xy / 16.,
a_aux.x / 16.
);
v_id              = outputs.id;
v_color           = outputs.color;
v_normal          = outputs.normal;
v_lineHalfWidth   = outputs.lineHalfWidth;
v_opacity         = outputs.opacity;
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
v_tlbr          = outputs.tlbr;
v_patternSize   = outputs.patternSize;
#endif
#ifdef SDF
v_lineWidthRatio = outputs.lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance = outputs.accumulatedDistance;
#endif
#endif
gl_Position = vec4(clip(outputs.color, pos, getFilterFlags(), a_zoomRange), 1.0);
}
#endif
void main() {
INIT;
draw();
}`},pie:{"pie.common.glsl":`uniform float outlineWidth;
uniform mediump float sectorThreshold;
varying vec3  v_id;
varying vec3  v_pos;
varying vec2  v_offset;
varying vec4  v_color;
varying float v_size;
varying float v_numOfEntries;
varying float v_maxSectorAngle;
varying vec2  v_filteredSectorToColorId[numberOfFields];
varying vec2  v_texCoords;
varying float v_outlineWidth;
varying float v_opacity;
struct FilteredChartInfo {
float endSectorAngle;
int colorId;
};`,"pie.frag":`precision highp float;
#include <util/atan2.glsl>
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/pie/pie.common.glsl>
uniform lowp vec4 colors[numberOfFields];
uniform lowp vec4 defaultColor;
uniform lowp vec4 othersColor;
uniform lowp vec4 outlineColor;
uniform float donutRatio;
lowp vec4 getSectorColor(in int index, in vec2 filteredSectorToColorId[numberOfFields]) {
mediump int colorIndex = int(filteredSectorToColorId[index].y);
return colors[colorIndex];
}
const int OTHER_SECTOR_ID = 255;
#ifdef HITTEST
vec4 getColor() {
float distanceSize = length(v_offset) * v_size;
float donutSize = donutRatio * v_size;
float alpha = step(donutSize, distanceSize) * (1.0 - step(v_size, distanceSize));
return v_color;
}
#else
vec4 getColor() {
float angle = mod(90.0 - C_RAD_TO_DEG * atan2(v_offset.y, v_offset.x), 360.0);
int numOfEntries = int(v_numOfEntries);
float maxSectorAngle = v_maxSectorAngle;
lowp vec4 fillColor = (maxSectorAngle > 0.0 || sectorThreshold > 0.0) ? othersColor : defaultColor;
lowp vec4 prevColor = vec4(0.0);
lowp vec4 nextColor = vec4(0.0);
float startSectorAngle = 0.0;
float endSectorAngle = 0.0;
if (angle < maxSectorAngle) {
for (int index = 0; index < numberOfFields; ++index) {
startSectorAngle = endSectorAngle;
endSectorAngle = v_filteredSectorToColorId[index].x;
if (endSectorAngle > angle) {
fillColor = getSectorColor(index, v_filteredSectorToColorId);
prevColor = sectorThreshold != 0.0 && index == 0 && maxSectorAngle + EPSILON < 360. ? othersColor :
getSectorColor(index > 0 ? index - 1 : numOfEntries - 1, v_filteredSectorToColorId);
nextColor = sectorThreshold != 0.0 && abs(endSectorAngle - maxSectorAngle) < EPSILON && maxSectorAngle + EPSILON < 360. ? othersColor :
getSectorColor(index < numOfEntries - 1 ? index + 1 : 0, v_filteredSectorToColorId);
break;
}
if (index == numOfEntries - 1) {
break;
}
}
} else if (numOfEntries <= 0) {
prevColor = nextColor = fillColor;
} else {
prevColor = getSectorColor(numOfEntries - 1, v_filteredSectorToColorId);
nextColor = getSectorColor(0, v_filteredSectorToColorId);
startSectorAngle = maxSectorAngle;
endSectorAngle = 360.0;
}
lowp vec4 outlineColor = outlineColor;
float offset = length(v_offset);
float distanceSize = offset * v_size;
float distanceToStartSector = (angle - startSectorAngle);
float distanceToEndSector = (endSectorAngle - angle);
float sectorThreshold = 0.75;
float beginSectorAlpha = smoothstep(-sectorThreshold, sectorThreshold, distanceToStartSector * offset);
float endSectorAlpha = smoothstep(-sectorThreshold, sectorThreshold, distanceToEndSector * offset);
fillColor = mix(prevColor, fillColor, beginSectorAlpha) + mix(nextColor, fillColor, endSectorAlpha) - fillColor;
float aaThreshold = 0.75;
float startOfOutline = v_size - v_outlineWidth - aaThreshold;
float donutSize = donutRatio * startOfOutline;
float endOfDonut = donutSize - v_outlineWidth;
float innerCircleAlpha = endOfDonut > aaThreshold ? smoothstep(endOfDonut - aaThreshold, endOfDonut + aaThreshold, distanceSize) : 1.0;
float outerCircleAlpha = 1.0 - smoothstep(v_size - 2.0 * aaThreshold, v_size, distanceSize);
float circleAlpha = innerCircleAlpha * outerCircleAlpha;
if (startOfOutline > 0.0 && v_outlineWidth > 0.25) {
float outlineFactor = smoothstep(startOfOutline - aaThreshold, startOfOutline + aaThreshold, distanceSize);
float innerLineFactor = donutSize - aaThreshold > 0.0 ? 1.0 - smoothstep(donutSize - aaThreshold, donutSize + aaThreshold , distanceSize) : 0.0;
fillColor = mix(fillColor, outlineColor, innerLineFactor + outlineFactor);
}
return v_opacity * circleAlpha * fillColor;
}
#endif
void main()
{
vec4 color = getColor();
#ifdef highlight
color.a = step(1.0 / 255.0, color.a);
#endif
gl_FragColor = color;
}`,"pie.vert":`#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/barycentric.glsl>
#include <materials/vcommon.glsl>
#include <materials/vv.glsl>
#include <materials/attributeData.glsl>
#include <materials/pie/pie.common.glsl>
#include <materials/hittest/common.glsl>
attribute float a_bitSet;
attribute vec2  a_offset;
attribute vec2  a_texCoords;
attribute float a_referenceSize;
attribute vec2  a_zoomRange;
int filterValue(in float sectorAngle,
in int currentIndex,
inout FilteredChartInfo filteredInfo,
inout vec2 filteredSectorToColorId[numberOfFields]) {
if (sectorAngle > sectorThreshold * 360.0) {
filteredInfo.endSectorAngle += sectorAngle;
filteredSectorToColorId[filteredInfo.colorId] = vec2(filteredInfo.endSectorAngle, currentIndex);
++filteredInfo.colorId;
}
return 0;
}
int filterValues(inout vec2 filteredSectorToColorId[numberOfFields],
inout FilteredChartInfo filteredInfo,
in float sectorAngles[numberOfFields]) {
for (int index = 0; index < numberOfFields; ++index) {
float sectorValue = sectorAngles[index];
filterValue(sectorValue, index, filteredInfo, filteredSectorToColorId);
}
return filteredInfo.colorId;
}
float getMarkerSize(inout vec2 offset, inout float outlineSize, in float referenceSize, in float bitSet) {
float outSize = referenceSize * 0.5;
#ifdef VV_SIZE
float r = getSize(referenceSize, currentScale) / referenceSize;
outSize *= r;
offset.xy *= r;
float scaleSymbolProportionally = getBit(bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);
outlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;
#endif
return outSize;
}
vec3 getOffset(in vec2 in_offset, float a_bitSet) {
float isMapAligned = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);
vec3  offset       = vec3(in_offset, 0.0);
return getMatrix(isMapAligned) * offset;
}
float filterNaNValues(in float value) {
return value != NAN_MAGIC_NUMBER && value > 0.0 ? value : 0.0;
}
void main()
{
INIT;
vec2  a_offset = a_offset / 16.0;
float outlineSize = outlineWidth;
float a_bitSet = a_bitSet;
float a_referenceSize = a_referenceSize;
vec2 a_texCoords = a_texCoords / 4.0;
float markerSize = getMarkerSize(a_offset, outlineSize, a_referenceSize, a_bitSet);
float filterFlags = getFilterFlags();
vec3  pos         = vec3(a_pos / 10.0, 1.0);
v_opacity      = getOpacity();
v_pos          = displayViewScreenMat3 * pos + getOffset(a_offset, a_bitSet);
v_offset       = sign(a_texCoords - 0.5);
v_size         = markerSize;
v_outlineWidth = outlineSize;
float attributeData[10];
vec4 attributeData3 = getDataDriven0(a_id);
attributeData[0] = filterNaNValues(attributeData3.x);
attributeData[1] = filterNaNValues(attributeData3.y);
attributeData[2] = filterNaNValues(attributeData3.z);
attributeData[3] = filterNaNValues(attributeData3.w);
#if (numberOfFields > 4)
vec4 attributeData4 = getDataDriven1(a_id);
attributeData[4] = filterNaNValues(attributeData4.x);
attributeData[5] = filterNaNValues(attributeData4.y);
attributeData[6] = filterNaNValues(attributeData4.z);
attributeData[7] = filterNaNValues(attributeData4.w);
#endif
#if (numberOfFields > 8)
vec4 attributeData5 = getDataDriven2(a_id);
attributeData[8] = filterNaNValues(attributeData5.x);
attributeData[9] = filterNaNValues(attributeData5.y);
#endif
float sum = 0.0;
for (int i = 0; i < numberOfFields; ++i) {
sum += attributeData[i];
}
float sectorAngles[numberOfFields];
for (int i = 0; i < numberOfFields; ++i) {
sectorAngles[i] = 360.0 * attributeData[i] / sum;
}
vec2 filteredSectorToColorId[numberOfFields];
FilteredChartInfo filteredInfo = FilteredChartInfo(0.0, 0);
int numOfEntries = filterValues(filteredSectorToColorId, filteredInfo, sectorAngles);
v_numOfEntries = float(numOfEntries);
v_maxSectorAngle = filteredInfo.endSectorAngle;
v_filteredSectorToColorId = filteredSectorToColorId;
#ifdef HITTEST
highp vec3 out_pos = vec3(0.0);
v_color            = vec4(0.0);
hittestMarker(v_color, out_pos, viewMat3 * tileMat3 *  pos, v_size);
gl_PointSize = 1.0;
gl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
gl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);
#endif
}`},shared:{line:{"common.glsl":`#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)
uniform mediump vec2 u_mosaicSize;
varying mediump float v_sampleAlphaOnly;
#endif
struct LineData {
lowp vec4 color;
mediump vec2 normal;
mediump float lineHalfWidth;
lowp float opacity;
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
mediump vec4 tlbr;
mediump vec2 patternSize;
#endif
#ifdef SDF
mediump float lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
highp float accumulatedDistance;
#endif
#endif
highp vec3 id;
};`,"line.frag":`uniform lowp float u_blur;
#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && !defined(HIGHLIGHT)
#if defined(PATTERN) || defined(SDF)
uniform sampler2D u_texture;
uniform highp float u_pixelRatio;
#endif
#endif
#if defined(SDF) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
lowp vec4 getLineColor(LineData line) {
mediump float adjustedPatternWidth = line.patternSize.x * 2.0 * line.lineWidthRatio;
mediump float relativeTexX = fract(line.accumulatedDistance / adjustedPatternWidth);
mediump float relativeTexY = 0.5 + 0.25 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * line.lineHalfWidth;
return line.opacity * clamp(0.5 - dist, 0.0, 1.0) * line.color;
}
#elif defined(PATTERN) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
lowp vec4 getLineColor(LineData line) {
mediump float lineHalfWidth = line.lineHalfWidth;
mediump float adjustedPatternHeight = line.patternSize.y * 2.0 * lineHalfWidth / line.patternSize.x;
mediump float relativeTexY = fract(line.accumulatedDistance / adjustedPatternHeight);
mediump float relativeTexX = 0.5 + 0.5 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
#ifdef VV_COLOR
if (v_sampleAlphaOnly > 0.5) {
color.rgb = vec3(color.a);
}
#endif
return line.opacity * line.color * color;
}
#else
lowp vec4 getLineColor(LineData line) {
return line.opacity * line.color;
}
#endif
vec4 shadeLine(LineData line)
{
mediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(line.lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);
mediump float fragDist = length(line.normal) * line.lineHalfWidth;
lowp float alpha = clamp(thinLineFactor * (line.lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);
lowp vec4 out_color = getLineColor(line) * alpha;
#ifdef HIGHLIGHT
out_color.a = step(1.0 / 255.0, out_color.a);
#endif
#ifdef ID
if (out_color.a < 1.0 / 255.0) {
discard;
}
out_color = vec4(line.id, 0.0);
#endif
return out_color;
}`,"line.vert":`float getBaseLineHalfWidth(in float lineHalfWidth, in float referenceHalfWidth) {
#ifdef VV_SIZE
float refLineWidth = 2.0 * referenceHalfWidth;
return 0.5 * (lineHalfWidth / max(referenceHalfWidth, EPSILON)) * getSize(refLineWidth);
#else
return lineHalfWidth;
#endif
}
float getLineHalfWidth(in float baseWidth, in float aa) {
float halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;
#ifdef HIGHLIGHT
halfWidth = max(halfWidth, 2.0);
#endif
return halfWidth;
}
vec2 getDist(in vec2 offset, in float halfWidth) {
float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);
return thinLineFactor * halfWidth * offset;
}
LineData buildLine(
out vec3 out_pos,
in vec3 in_id,
in vec2 in_pos,
in vec4 in_color,
in vec2 in_offset,
in vec2 in_normal,
in float in_accumulatedDist,
in float in_lineHalfWidth,
in float in_bitSet,
in vec4 in_tlbr,
in vec2 in_segmentDirection,
in float in_referenceHalfWidth
)
{
float aa        = 0.5 * u_antialiasing;
float baseWidth = getBaseLineHalfWidth(in_lineHalfWidth, in_referenceHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
float z         = 2.0 * step(baseWidth, 0.0);
vec2  dist      = getDist(in_offset, halfWidth);
vec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);
vec3  pos       = u_dvsMat3 * vec3(in_pos * POSITION_PRECISION, 1.0) + offset;
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
vec4  color     = in_color;
float opacity   = 1.0;
#else
vec4  color     = getColor(in_color, in_bitSet, BITSET_GENERIC_LOCK_COLOR);
float opacity   = getOpacity();
#ifdef SDF
const float SDF_PATTERN_HALF_WIDTH = 15.5;
float scaleDash = getBit(in_bitSet, BITSET_LINE_SCALE_DASH);
float lineWidthRatio = (scaleDash * max(halfWidth - 0.55 * u_antialiasing, 0.25) + (1.0 - scaleDash)) / SDF_PATTERN_HALF_WIDTH;
#endif
#endif
#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)
v_sampleAlphaOnly = getBit(in_bitSet, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);
#endif
out_pos = vec3(pos.xy, z);
return LineData(
color,
in_normal,
halfWidth,
opacity,
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
in_tlbr / u_mosaicSize.xyxy,
vec2(in_tlbr.z - in_tlbr.x, in_tlbr.w - in_tlbr.y),
#endif
#ifdef SDF
lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
in_accumulatedDist * u_zoomFactor + dot(in_segmentDirection, dist),
#endif
#endif
norm(in_id)
);
}`}},"symbologyTypeUtils.glsl":`#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE
#define SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_SIMPLE || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE
#define SYMBOLOGY_TYPE_IS_SIMPLE_LIKE
#endif`,text:{"common.glsl":`uniform highp vec2 u_mosaicSize;
varying highp vec3 v_id;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
varying lowp vec4 v_color;
varying highp vec2 v_tex;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying lowp float v_transparency;`,"hittest.glsl":`#include <materials/hittest/common.glsl>`,"text.frag":`precision mediump float;
#include <materials/text/common.glsl>
uniform lowp sampler2D u_texture;
#ifdef HITTEST
vec4 getColor() {
return v_color;
}
#else
vec4 getColor()
{
float SDF_CUTOFF = (2.0 / 8.0);
float SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF;
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;
#ifdef HIGHLIGHT
edge /= 2.0;
#endif
lowp float aa = v_antialiasingWidth;
lowp float alpha = smoothstep(edge - aa, edge + aa, dist);
return alpha * v_color * v_opacity;
}
#endif
void main()
{
gl_FragColor = getColor();
}`,"text.vert":`precision highp float;
#include <materials/utils.glsl>
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
#include <materials/text/hittest.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texFontSize;
attribute vec4 a_aux;
attribute vec2 a_zoomRange;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHaloPass;
uniform float u_isBackgroundPass;
float getTextSize(inout vec2 offset, inout float baseSize, in float referenceSize) {
#ifdef VV_SIZE
float r = getSize(referenceSize) / referenceSize;
baseSize *= r;
offset.xy *= r;
return baseSize;
#endif
return baseSize;
}
void main()
{
INIT;
float a_isBackground  = a_aux.y;
float a_referenceSize = a_aux.z * a_aux.z / 256.0;
float a_bitSet        = a_aux.w;
float a_fontSize      = a_texFontSize.z;
vec2  a_offset        = a_vertexOffset * OFFSET_PRECISION;
vec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);
float fontSize      = getTextSize(a_offset, a_fontSize, a_referenceSize);
float fontScale     = fontSize / SDF_FONT_SIZE;
vec3  offset        = getRotation() * vec3(a_offset, 0.0);
mat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;
float isText = 1.0 - a_isBackground;
float isBackground = u_isBackgroundPass * a_isBackground;
vec4  nonHaloColor  = (isBackground * a_color) + (isText * getColor(a_color, a_bitSet, 1));
v_color   = u_isHaloPass * a_haloColor + (1.0 - u_isHaloPass) * nonHaloColor;
v_opacity = getOpacity();
v_id      = norm(a_id);
v_tex     = a_texCoords / u_mosaicSize;
v_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;
float isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;
v_pos.z += 2.0 * isHidden;
v_edgeDistanceOffset = u_isHaloPass * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
#ifdef HITTEST
highp vec3 out_pos  = vec3(0.);
v_color = vec4(0.);
hittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  vec3(a_pos * POSITION_PRECISION, 1.0)
+ u_tileMat3 * offset, fontSize / 2.);
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, out_pos, getFilterFlags(), a_zoomRange), 1.0);
#else
gl_Position =  vec4(clip(v_color, v_pos, getFilterFlags(), a_zoomRange), 1.0);
#endif
}`},"utils.glsl":`float rshift(in float u32, in int amount) {
return floor(u32 / pow(2.0, float(amount)));
}
float getBit(in float bitset, in int bitIndex) {
float offset = pow(2.0, float(bitIndex));
return mod(floor(bitset / offset), 2.0);
}
const int maxHighlightReasons = 6;
float getFilterBit(in float bitset, in int bitIndex) {
return getBit(bitset, bitIndex + maxHighlightReasons);
}
float getHighlightBit(in float bitset, in int bitIndex) {
return getBit(bitset, bitIndex);
}
highp vec3 unpackDisplayIdTexel(in highp vec3 bitset) {
float isAggregate = getBit(bitset.b, 7);
return (1.0 - isAggregate) * bitset + isAggregate * (vec3(bitset.rgb) - vec3(0.0, 0.0, float(0x80)));
}
vec4 unpack(in float u32) {
float r = mod(rshift(u32, 0), 255.0);
float g = mod(rshift(u32, 8), 255.0);
float b = mod(rshift(u32, 16), 255.0);
float a = mod(rshift(u32, 24), 255.0);
return vec4(r, g, b, a);
}
vec3 norm(in vec3 v) {
return v /= 255.0;
}
vec4 norm(in vec4 v) {
return v /= 255.0;
}
float max4(vec4 target) {
return max(max(max(target.x, target.y), target.z), target.w);
}
vec2 unpack_u8_nf32(vec2 bytes) {
return (bytes - 127.0) / 127.0;
}
highp float rand(in vec2 co) {
highp float a = 12.9898;
highp float b = 78.233;
highp float c = 43758.5453;
highp float dt = dot(co, vec2(a,b));
highp float sn = mod(dt, 3.14);
return fract(sin(sn) * c);
}`,"vcommon.glsl":`#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/attributeData.glsl>
#include <materials/vv.glsl>
#include <materials/barycentric.glsl>
attribute vec2 a_pos;
attribute highp vec3 a_id;
uniform highp mat3 displayViewScreenMat3;
uniform highp mat3 displayViewMat3;
uniform highp mat3 displayMat3;
uniform highp mat3 tileMat3;
uniform highp mat3 viewMat3;
uniform highp float pixelRatio;
uniform mediump float zoomFactor;
uniform mediump float antialiasing;
uniform mediump float currentScale;
uniform mediump float currentZoom;
uniform mediump float metersPerSRUnit;
uniform mediump float activeReasons;
uniform mediump float highlightAll;
vec4 VV_ADATA = vec4(0.0);
void loadVisualVariableData(inout vec4 target) {
target.rgba = getVisualVariableData(a_id);
}
#ifdef VV
#define INIT loadVisualVariableData(VV_ADATA)
#else
#define INIT
#endif
vec4 getColor(in vec4 a_color, in float a_bitSet, int index) {
#ifdef VV_COLOR
float isColorLocked   = getBit(a_bitSet, index);
return getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);
#else
return a_color;
#endif
}
float getOpacity() {
#ifdef VV_OPACITY
return getVVOpacity(VV_ADATA[ATTR_VV_OPACITY]);
#else
return 1.0;
#endif
}
float getSize(in float in_size, in float currentScale) {
#ifdef VV_SIZE
return getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE], currentScale);
#else
return in_size;
#endif
}
mat3 getRotation() {
#ifdef VV_ROTATION
return getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));
#else
return mat3(1.0);
#endif
}
float getFilterFlags() {
#ifdef IGNORES_SAMPLER_PRECISION
return ceil(getFilterData(a_id).x * 255.0);
#else
return getFilterData(a_id).x * 255.0;
#endif
}
vec4 getAnimationState() {
return getAnimation(a_id);
}
float getMinZoom() {
vec4 data0 = getFilterData(a_id) * 255.0;
return data0.g;
}
mat3 getMatrixNoDisplay(float isMapAligned) {
return isMapAligned * viewMat3 * tileMat3 + (1.0 - isMapAligned) * tileMat3;
}
mat3 getMatrix(float isMapAligned) {
return isMapAligned * displayViewMat3 + (1.0 - isMapAligned) * displayMat3;
}
float checkHighlightBit(float filterFlags, int index) {
return getHighlightBit(filterFlags, index) * getBit(activeReasons, index);
}
float checkHighlight(float filterFlags) {
float result = checkHighlightBit(filterFlags, 0);
for (int i = 1; i < maxHighlightReasons; i++) {
result = result + checkHighlightBit(filterFlags, i);
}
return step(0.1, result + highlightAll);
}
vec3 clip(inout vec4 color, inout vec3 pos, in float filterFlags, in vec2 minMaxZoom) {
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));
#ifdef inside
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));
#elif defined(outside)
pos.z += 2.0 * getFilterBit(filterFlags, 1);
#elif defined(highlight)
pos.z += 2.0 * (1.0 - checkHighlight(filterFlags));
#endif
pos.z += 2.0 * (step(minMaxZoom.y, currentZoom) + (1.0 - step(minMaxZoom.x, currentZoom)));
return pos;
}`,"vv.glsl":`#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)
#define VV_SIZE
#endif
#if defined(VV_COLOR) || defined(VV_SIZE) || defined(VV_OPACITY) || defined(VV_ROTATION)
#define VV
#endif
#ifdef VV_COLOR
uniform highp float colorValues[8];
uniform vec4 colors[8];
#endif
#ifdef VV_SIZE_MIN_MAX_VALUE
uniform highp vec4 minMaxValueAndSize;
#endif
#ifdef VV_SIZE_SCALE_STOPS
uniform highp float values[8];
uniform float sizes[8];
#endif
#ifdef VV_SIZE_FIELD_STOPS
uniform highp float values[8];
uniform float sizes[8];
#endif
#ifdef VV_SIZE_UNIT_VALUE
uniform highp float unitMeterRatio;
#endif
#ifdef VV_OPACITY
uniform highp float opacityValues[8];
uniform float opacities[8];
#endif
#ifdef VV_ROTATION
uniform lowp float rotationType;
#endif
bool isNan(float val) {
return (val == NAN_MAGIC_NUMBER);
}
#ifdef VV_SIZE_MIN_MAX_VALUE
float getVVMinMaxSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
float interpolationRatio = (sizeValue  - minMaxValueAndSize.x) / (minMaxValueAndSize.y - minMaxValueAndSize.x);
interpolationRatio = clamp(interpolationRatio, 0.0, 1.0);
return minMaxValueAndSize.z + interpolationRatio * (minMaxValueAndSize.w - minMaxValueAndSize.z);
}
#endif
#ifdef VV_SIZE_SCALE_STOPS
float getVVScaleStopsSize(float currentScale) {
float outSize;
if (currentScale <= values[0]) {
outSize = sizes[0];
} else {
if (currentScale >= values[7]) {
outSize = sizes[7];
} else {
int index;
index = -1;
for (int i = 0; i < 8; i++) {
if (values[i] > currentScale) {
index = i;
break;
}
}
int prevIndex = index - 1;
float a = currentScale - values[prevIndex];
float b = values[index] - values[prevIndex];
outSize = mix(sizes[prevIndex], sizes[index], a / b);
}
}
return outSize;
}
#endif
#ifdef VV_SIZE_FIELD_STOPS
const int VV_SIZE_N = 8;
float getVVStopsSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
if (sizeValue <= values[0]) {
return sizes[0];
}
if (sizeValue >= values[VV_SIZE_N - 1]) {
return sizes[VV_SIZE_N - 1];
}
for (int i = 1; i < VV_SIZE_N; ++i) {
if (values[i] >= sizeValue) {
float f = (sizeValue - values[i-1]) / (values[i] - values[i-1]);
return mix(sizes[i-1], sizes[i], f);
}
}
return sizes[VV_SIZE_N - 1];
}
#endif
#ifdef VV_SIZE_UNIT_VALUE
float getVVUnitValue(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
return sizeValue * (metersPerSRUnit / unitMeterRatio);
}
#endif
#ifdef VV_OPACITY
const int VV_OPACITY_N = 8;
float getVVOpacity(float opacityValue) {
if (isNan(opacityValue)) {
return 1.0;
}
if (opacityValue <= opacityValues[0]) {
return opacities[0];
}
for (int i = 1; i < VV_OPACITY_N; ++i) {
if (opacityValues[i] >= opacityValue) {
float f = (opacityValue - opacityValues[i-1]) / (opacityValues[i] - opacityValues[i-1]);
return mix(opacities[i-1], opacities[i], f);
}
}
return opacities[VV_OPACITY_N - 1];
}
#endif
#ifdef VV_ROTATION
mat4 getVVRotation(float rotationValue) {
if (isNan(rotationValue)) {
return mat4(1, 0, 0, 0,
0, 1, 0, 0,
0, 0, 1, 0,
0, 0, 0, 1);
}
float rotation = rotationValue;
if (rotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat4(cosA, sinA, 0, 0,
-sinA,  cosA, 0, 0,
0,     0, 1, 0,
0,     0, 0, 1);
}
mat3 getVVRotationMat3(float rotationValue) {
if (isNan(rotationValue)) {
return mat3(1, 0, 0,
0, 1, 0,
0, 0, 1);
}
float rotation = rotationValue;
if (rotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * -rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat3(cosA, -sinA, 0,
sinA, cosA, 0,
0,    0,    1);
}
#endif
#ifdef VV_COLOR
const int VV_COLOR_N = 8;
vec4 getVVColor(float colorValue, vec4 fallback, float isColorLocked) {
if (isNan(colorValue) || isColorLocked == 1.0) {
return fallback;
}
if (colorValue <= colorValues[0]) {
return colors[0];
}
for (int i = 1; i < VV_COLOR_N; ++i) {
if (colorValues[i] >= colorValue) {
float f = (colorValue - colorValues[i-1]) / (colorValues[i] - colorValues[i-1]);
return mix(colors[i-1], colors[i], f);
}
}
return colors[VV_COLOR_N - 1];
}
#endif
float getVVSize(in float size, in float vvSize, in float currentScale)  {
#ifdef VV_SIZE_MIN_MAX_VALUE
return getVVMinMaxSize(vvSize, size);
#elif defined(VV_SIZE_SCALE_STOPS)
float outSize = getVVScaleStopsSize(currentScale);
return isNan(outSize) ? size : outSize;
#elif defined(VV_SIZE_FIELD_STOPS)
float outSize = getVVStopsSize(vvSize, size);
return isNan(outSize) ? size : outSize;
#elif defined(VV_SIZE_UNIT_VALUE)
return getVVUnitValue(vvSize, size);
#else
return size;
#endif
}`},"post-processing":{dra:{"dra.frag":`precision mediump float;
uniform sampler2D u_minColor;
uniform sampler2D u_maxColor;
uniform sampler2D u_texture;
varying vec2 v_uv;
void main() {
vec4 minColor = texture2D(u_minColor, vec2(0.5));
vec4 maxColor = texture2D(u_maxColor, vec2(0.5));
vec4 color = texture2D(u_texture, v_uv);
vec3 minColorUnpremultiply = minColor.rgb / minColor.a;
vec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;
vec3 colorUnpremultiply = color.rgb / color.a;
vec3 range = maxColorUnpremultiply - minColorUnpremultiply;
gl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);
}`,"min-max":{"min-max.frag":`#extension GL_EXT_draw_buffers : require
precision mediump float;
#define CELL_SIZE 2
uniform sampler2D u_minTexture;
uniform sampler2D u_maxTexture;
uniform vec2 u_srcResolution;
uniform vec2 u_dstResolution;
varying vec2 v_uv;
void main() {
vec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);
vec2 onePixel = vec2(1.0) / u_srcResolution;
vec2 uv = (srcPixel + 0.5) / u_srcResolution;
vec4 minColor = vec4(1.0);
vec4 maxColor = vec4(0.0);
for (int y = 0; y < CELL_SIZE; ++y) {
for (int x = 0; x < CELL_SIZE; ++x) {
vec2 offset = uv + vec2(x, y) * onePixel;
minColor = min(minColor, texture2D(u_minTexture, offset));
maxColor = max(maxColor, texture2D(u_maxTexture, offset));
}
}
gl_FragData[0] = minColor;
gl_FragData[1] = maxColor;
}`}},"edge-detect":{"frei-chen":{"frei-chen.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
varying vec2 v_uv;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[9];
const mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );
const mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );
const mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );
const mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );
const mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );
const mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );
const mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );
const mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );
const mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );
void main() {
G[0] = g0,
G[1] = g1,
G[2] = g2,
G[3] = g3,
G[4] = g4,
G[5] = g5,
G[6] = g6,
G[7] = g7,
G[8] = g8;
mat3 I;
float cnv[9];
vec3 sample;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D(u_colorTexture, v_uv + texel * vec2(i - 1.0,j - 1.0)).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 9; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
float M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]);
float S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);
gl_FragColor = vec4(vec3(sqrt(M / S)), texture2D(u_colorTexture, v_uv).a);
}`},sobel:{"sobel.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );
const mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
gl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);
}`}},"edge-enhance":{"edge-enhance.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0 );
const mat3 g1 = mat3( 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, -1.0, -1.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
vec4 color = texture2D(u_colorTexture, v_uv);
gl_FragColor = vec4(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1]) * color);
}`},filterEffect:{"filterEffect.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform mat4 u_coefficients;
varying vec2 v_uv;
void main() {
vec4 color = texture2D(u_colorTexture, v_uv);
vec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);
float a = color.a;
gl_FragColor = vec4(a * rgbw.rgb, a);
}`},pp:{"pp.vert":`precision mediump float;
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
gl_Position = vec4(a_position, 0.0, 1.0);
v_uv = (a_position + 1.0) / 2.0;
}`}},raster:{common:{"common.glsl":`uniform sampler2D u_image;
uniform int u_bandCount;
uniform bool u_flipY;
uniform float u_opacity;
uniform int u_resampling;
uniform vec2 u_srcImageSize;
#ifdef APPLY_PROJECTION
#include <raster/common/projection.glsl>
#endif
#ifdef BICUBIC
#include <filtering/bicubic.glsl>
#endif
#ifdef BILINEAR
#include <filtering/bilinear.glsl>
#endif
vec2 getPixelLocation(vec2 coords) {
vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
#ifdef APPLY_PROJECTION
targetLocation = projectPixelLocation(targetLocation);
#endif
return targetLocation;
}
bool isOutside(vec2 coords){
if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
return true;
} else {
return false;
}
}
vec4 getPixel(vec2 pixelLocation) {
#ifdef BICUBIC
vec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);
#elif defined(BILINEAR)
vec4 color = sampleBilinear(u_image, pixelLocation, u_srcImageSize);
#else
vec4 color = texture2D(u_image, pixelLocation);
#endif
return color;
}`,"projection.glsl":`uniform sampler2D u_transformGrid;
uniform vec2 u_transformSpacing;
uniform vec2 u_transformGridSize;
uniform vec2 u_targetImageSize;
vec2 projectPixelLocation(vec2 coords) {
#ifdef LOOKUP_PROJECTION
vec4 pv = texture2D(u_transformGrid, coords);
return vec2(pv.r, pv.g);
#endif
vec2 index_image = floor(coords * u_targetImageSize);
vec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);
vec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;
vec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);
vec2 srcLocation;
vec2 transform_location = index_transform + oneTransformPixel * 0.5;
if (pos.s <= pos.t) {
vec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));
vec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));
} else {
vec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));
vec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));
}
return srcLocation;
}`},flow:{"getDisplayOpacity.glsl":`uniform float u_displayOpacity;
float getDisplayOpacity() {
return u_displayOpacity;
}`,"getFadeOpacity.glsl":`uniform float u_decayRate;
uniform float u_fadeToZero;
float getFadeOpacity(float x) {
float cutOff = mix(0.0, exp(-u_decayRate), u_fadeToZero);
return (exp(-u_decayRate * x) - cutOff) / (1.0 - cutOff);
}`,"getFragmentColor.glsl":`vec4 getFragmentColor(vec4 color, float dist, float size, float featheringSize) {
float featheringStart = clamp(0.5 - featheringSize / size, 0.0, 0.5);
if (dist > featheringStart) {
color *= 1.0 - (dist - featheringStart) / (0.5 - featheringStart);
}
return color;
}`,"getRangeOpacity.glsl":`uniform float u_startTime;
uniform float u_endTime;
float getRangeOpacity(float vertexTime, float cycle, float totalTime, float flowSpeed) {
float vTime = (vertexTime + cycle * totalTime) / flowSpeed;
if (vTime < u_startTime) {
return 0.0;
}
if (vTime > u_endTime) {
return 0.0;
}
return 1.0;
}`,"getTimeSeed.glsl":`float getTimeSeed(float firstTime, float lastTime) {
return mod(firstTime * 3.634f + lastTime * 5.153f + 7.381f, 1.0f);
}`,imagery:{"imagery.frag":`precision highp float;
varying vec2 v_texcoord;
uniform sampler2D u_texture;
uniform float u_Min;
uniform float u_Max;
uniform float u_featheringSize;
#include <raster/flow/vv.glsl>
float getIntensity(float v) {
return u_Min + v * (u_Max - u_Min);
}
void main(void) {
vec4 sampled = texture2D(u_texture, v_texcoord);
float intensity = getIntensity(sampled.r);
gl_FragColor = getColor(intensity);
gl_FragColor.a *= getOpacity(sampled.r);
gl_FragColor.a *= sampled.a;
gl_FragColor.rgb *= gl_FragColor.a;
}`,"imagery.vert":`attribute vec2 a_position;
attribute vec2 a_texcoord;
uniform mat3 u_dvsMat3;
varying vec2 v_texcoord;
void main(void) {
vec2 xy = (u_dvsMat3 * vec3(a_position, 1.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_texcoord = a_texcoord;
}`},particles:{"particles.frag":`precision highp float;
varying vec4 v_color;
varying vec2 v_texcoord;
varying float v_size;
uniform float u_featheringSize;
#include <raster/flow/getFragmentColor.glsl>
void main(void) {
gl_FragColor = getFragmentColor(v_color, length(v_texcoord - 0.5), v_size, u_featheringSize);
}`,"particles.vert":`attribute vec4 a_xyts0;
attribute vec4 a_xyts1;
attribute vec4 a_typeIdFirstTimeLastTime;
attribute vec4 a_extrudeInfo;
uniform mat3 u_dvsMat3;
uniform mat3 u_displayViewMat3;
uniform float u_time;
uniform float u_trailLength;
uniform float u_flowSpeed;
varying vec4 v_color;
varying vec2 v_texcoord;
varying float v_size;
uniform float u_featheringSize;
uniform float u_introFade;
#include <raster/flow/vv.glsl>
#include <raster/flow/getFadeOpacity.glsl>
#include <raster/flow/getDisplayOpacity.glsl>
#include <raster/flow/getTimeSeed.glsl>
void main(void) {
float firstTime = a_typeIdFirstTimeLastTime.z;
float lastTime = a_typeIdFirstTimeLastTime.w;
float duration = lastTime - firstTime;
vec2 position0 = a_xyts0.xy;
float t0 = a_xyts0.z - firstTime;
float speed0 = a_xyts0.w;
vec2 position1 = a_xyts1.xy;
float t1 = a_xyts1.z - firstTime;
float speed1 = a_xyts1.w;
float type = a_typeIdFirstTimeLastTime.x;
float id = a_typeIdFirstTimeLastTime.y;
float seed = getTimeSeed(firstTime, lastTime);
vec2 e0 = a_extrudeInfo.xy;
vec2 e1 = a_extrudeInfo.zw;
float animationPeriod = duration + u_trailLength;
float scaledTime = u_time * u_flowSpeed;
float t = mod(scaledTime, animationPeriod);
float fUnclamped = (t - t0) / (t1 - t0);
float f = clamp(fUnclamped, 0.0, 1.0);
float clampedTime = mix(t0, t1, f);
float speed = mix(speed0, speed1, f);
vec2 extrude;
vec2 position;
float fadeOpacity;
float introOpacity;
if (type == 2.0) {
if (fUnclamped < 0.0 || (fUnclamped > 1.0 && t1 != duration)) {
gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
return;
}
vec2 ortho = mix(e0, e1, f);
vec2 parallel;
parallel = normalize(position1 - position0) * 0.5;
if (id == 1.0) {
extrude = ortho;
v_texcoord = vec2(0.5, 0.0);
} else if (id == 2.0) {
extrude = -ortho;
v_texcoord = vec2(0.5, 1.0);
} else if (id == 3.0) {
extrude = ortho + parallel;
v_texcoord = vec2(1.0, 0.0);
} else if (id == 4.0) {
extrude = -ortho + parallel;
v_texcoord = vec2(1.0, 1.0);
}
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
} else {
if (fUnclamped < 0.0) {
gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
return;
}
if (id == 1.0) {
extrude = e0;
v_texcoord = vec2(0.5, 0.0);
fadeOpacity = getFadeOpacity((t - t0) / u_trailLength);
introOpacity = 1.0 - exp(-t0);
v_size = getSize(speed0);
v_color = getColor(speed0);
v_color.a *= getOpacity(speed0);
position = position0;
} else if (id == 2.0) {
extrude = -e0;
v_texcoord = vec2(0.5, 1.0);
fadeOpacity = getFadeOpacity((t - t0) / u_trailLength);
introOpacity = 1.0 - exp(-t0);
v_size = getSize(speed0);
v_color = getColor(speed0);
v_color.a *= getOpacity(speed0);
position = position0;
} else if (id == 3.0) {
extrude = mix(e0, e1, f);
v_texcoord = vec2(0.5, 0.0);
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
} else if (id == 4.0) {
extrude = -mix(e0, e1, f);
v_texcoord = vec2(0.5, 1.0);
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
}
}
vec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(extrude * v_size, 0.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_color.a *= fadeOpacity;
v_color.a *= mix(1.0, introOpacity, u_introFade);
v_color.a *= getDisplayOpacity();
v_color.rgb *= v_color.a;
}`},streamlines:{"streamlines.frag":`precision highp float;
varying float v_side;
varying float v_time;
varying float v_firstTime;
varying float v_lastTime;
varying vec4 v_color;
varying float v_size;
uniform float u_time;
uniform float u_trailLength;
uniform float u_flowSpeed;
uniform float u_featheringSize;
uniform float u_introFade;
#include <raster/flow/getFragmentColor.glsl>
#include <raster/flow/getFadeOpacity.glsl>
#include <raster/flow/getRangeOpacity.glsl>
#include <raster/flow/getDisplayOpacity.glsl>
#include <raster/flow/getTimeSeed.glsl>
void main(void) {
float totalTime = v_lastTime - v_firstTime;
float trailLength = u_trailLength;
float period = totalTime + trailLength;
float seed = getTimeSeed(v_firstTime, v_lastTime);
float t = mod(seed * period + u_time * u_flowSpeed, period) + v_firstTime - v_time;
float fading = t / trailLength;
vec4 color = v_color;
color *= getDisplayOpacity();
color *= fading < 0.0 ? 0.0 : getFadeOpacity(fading);
gl_FragColor = getFragmentColor(color, length((v_side + 1.0) / 2.0 - 0.5), v_size, u_featheringSize);
}`,"streamlines.vert":`attribute vec3 a_positionAndSide;
attribute vec3 a_timeInfo;
attribute vec2 a_extrude;
attribute float a_speed;
uniform mat3 u_dvsMat3;
uniform mat3 u_displayViewMat3;
varying float v_time;
varying float v_firstTime;
varying float v_lastTime;
varying vec4 v_color;
varying float v_side;
varying float v_size;
uniform float u_featheringSize;
#include <raster/flow/vv.glsl>
void main(void) {
vec4 lineColor = getColor(a_speed);
float lineOpacity = getOpacity(a_speed);
float lineSize = getSize(a_speed);
vec2 position = a_positionAndSide.xy;
v_side = a_positionAndSide.z;
vec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(a_extrude * lineSize, 0.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_time = a_timeInfo.x;
v_firstTime = a_timeInfo.y;
v_lastTime = a_timeInfo.z;
v_color = lineColor;
v_color.a *= lineOpacity;
v_color.rgb *= v_color.a;
v_size = lineSize;
}`},"vv.glsl":`#define MAX_STOPS 8
#ifdef VV_COLOR
uniform float u_color_stops[MAX_STOPS];
uniform vec4 u_color_values[MAX_STOPS];
uniform int u_color_count;
#else
uniform vec4 u_color;
#endif
#ifdef VV_OPACITY
uniform float u_opacity_stops[MAX_STOPS];
uniform float u_opacity_values[MAX_STOPS];
uniform int u_opacity_count;
#else
uniform float u_opacity;
#endif
#ifdef VV_SIZE
uniform float u_size_stops[MAX_STOPS];
uniform float u_size_values[MAX_STOPS];
uniform int u_size_count;
#else
uniform float u_size;
#endif
uniform float u_featheringOffset;
vec4 getColor(float x) {
#ifdef VV_COLOR
vec4 color = u_color_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_color_count) {
break;
}
float x1 = u_color_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_color_stops[i];
vec4 y2 = u_color_values[i];
if (x < x2) {
vec4 y1 = u_color_values[i - 1];
color = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
color = y2;
}
}
}
#else
vec4 color = u_color;
#endif
return color;
}
float getOpacity(float x) {
#ifdef VV_OPACITY
float opacity = u_opacity_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_opacity_count) {
break;
}
float x1 = u_opacity_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_opacity_stops[i];
float y2 = u_opacity_values[i];
if (x < x2) {
float y1 = u_opacity_values[i - 1];
opacity = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
opacity = y2;
}
}
}
#else
float opacity = u_opacity;
#endif
return opacity;
}
float getSize(float x) {
#ifdef VV_SIZE
float size = u_size_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_size_count) {
break;
}
float x1 = u_size_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_size_stops[i];
float y2 = u_size_values[i];
if (x < x2) {
float y1 = u_size_values[i - 1];
size = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
size = y2;
}
}
}
#else
float size = u_size;
#endif
return size + 2.0 * u_featheringSize * u_featheringOffset;
}`},reproject:{"reproject.frag":`precision mediump float;
varying vec2 v_texcoord;
#include <raster/common/common.glsl>
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
gl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;
}`,"reproject.vert":`precision mediump float;
attribute vec2 a_position;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_position;
gl_Position = vec4(2.0 * (a_position - 0.5), 0.0, 1.0);
}`}},stencil:{"stencil.frag":`void main() {
gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}`,"stencil.vert":`attribute vec2 a_pos;
uniform mat3 u_worldExtent;
void main() {
gl_Position = vec4(u_worldExtent * vec3(a_pos, 1.0), 1.0);
}`},test:{"TestShader.common.glsl":`#ifndef RETURN_RED
varying    vec4      v_color;
#endif
varying    vec2      v_offset;`,"TestShader.frag":`precision highp float;
#include <test/TestShader.common.glsl>
void main() {
if (v_offset.x > -.5 && v_offset.y > -.5 && v_offset.x < .5 && v_offset.y < .5) {
discard;
}
#ifdef RETURN_RED
gl_FragColor = vec4(1., 0., 0., 1.);
#else
gl_FragColor = v_color;
#endif
}`,"TestShader.vert":`const float POS_PRECISION_FACTOR = 10.;
const float OFFSET_PRECISION_FACTOR = 10.;
const float SIZE_PRECISION_FACTOR = 10.;
attribute  vec2      a_pos_packed;
attribute  vec2      a_offset_packed;
attribute  float     a_size_packed;
#ifdef DATA_DRIVEN_COLOR
const float u_dataDrivenColor_validValues[4] = float[4](0., 0., 1., 0.);
uniform    vec4      u_dataDrivenColor_colorFallback;
uniform    vec4      u_dataDrivenColor_color;
#endif
uniform    float     u_view_zoomLevel;
#include <test/TestShader.common.glsl>
#ifdef DATA_DRIVEN_COLOR
vec4 getColor(float value) {
int index = -1;
for (int i = 0; i < 4; i++) {
if (u_dataDrivenColor_validValues[i] == value) {
index = i;
break;
}
}
if (index == -1) {
return u_dataDrivenColor_colorFallback;
}
return u_dataDrivenColor_color;
}
#endif
void main() {
vec2  a_pos = a_pos_packed / POS_PRECISION_FACTOR;
vec2  a_offset = a_offset_packed / OFFSET_PRECISION_FACTOR;
float a_size = a_size_packed / SIZE_PRECISION_FACTOR;
vec4 color = vec4(1., 0., 0., 1.);
#ifdef DATA_DRIVEN_COLOR
color = getColor(1.);
#endif
vec2 offsetScaled = a_offset * a_size;
vec4 pos = vec4(a_pos.xy + offsetScaled, 0., 1.);
gl_Position = pos;
#ifndef RETURN_RED
v_color = color;
#endif
v_offset = a_offset;
}`},util:{"atan2.glsl":`float atan2(in float y, in float x) {
float t0, t1, t2, t3, t4;
t3 = abs(x);
t1 = abs(y);
t0 = max(t3, t1);
t1 = min(t3, t1);
t3 = 1.0 / t0;
t3 = t1 * t3;
t4 = t3 * t3;
t0 =         - 0.013480470;
t0 = t0 * t4 + 0.057477314;
t0 = t0 * t4 - 0.121239071;
t0 = t0 * t4 + 0.195635925;
t0 = t0 * t4 - 0.332994597;
t0 = t0 * t4 + 0.999995630;
t3 = t0 * t3;
t3 = (abs(y) > abs(x)) ? 1.570796327 - t3 : t3;
t3 = x < 0.0 ?  3.141592654 - t3 : t3;
t3 = y < 0.0 ? -t3 : t3;
return t3;
}`,"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`}};function aa(e){return function(t){let n=e;return t.split(`/`).forEach(e=>{n&&=n[e]}),n}}var oa=new _t(aa(ia));function sa(e){return oa.resolveIncludes(e)}var ca={hittestDist:N,hittestPos:k},la={size:N},ua={filterFlags:j,animation:j,visualVariableData:j,dataDriven0:j,dataDriven1:j,dataDriven2:j,gpgpu:j},da={displayViewScreenMat3:R,displayViewMat3:R,displayMat3:R,viewMat3:R,tileMat3:R,displayZoomFactor:N,requiredZoomFactor:N,tileOffset:k,currentScale:N,currentZoom:N,metersPerSRUnit:N},fa=class extends ta{constructor(){super(...arguments),this.vertexShader=sa(`materials/pie/pie.vert`),this.fragmentShader=sa(`materials/pie/pie.frag`),this.required={...da,...la,outlineWidth:N,colors:We,defaultColor:F,othersColor:F,outlineColor:F,donutRatio:N,sectorThreshold:N},this.textures=ua,this.options={hittestUniforms:ca,visualVariableSizeMinMaxValue:{minMaxValueAndSize:F},visualVariableSizeScaleStops:{sizes:{type:`array`,elementType:N,size:8},values:{type:`array`,elementType:N,size:8}},visualVariableSizeStops:{sizes:{type:`array`,elementType:N,size:8},values:{type:`array`,elementType:N,size:8}},visualVariableSizeUnitValue:{unitValueToPixelsRatio:N},visualVariableOpacity:{opacities:{type:`array`,elementType:N,size:8},opacityValues:{type:`array`,elementType:N,size:8}},highlightUniforms:{highlightAll:N,activeReasons:N}},this.locations={pos:{index:0,type:k},id:{index:1,type:O},bitset:{index:2,type:N},offset:{index:3,type:k},texCoords:{index:4,type:k},referenceSize:{index:5,type:N},zoomRange:{index:6,type:k}},this.defines={VV_SIZE_MIN_MAX_VALUE:`boolean`,VV_SIZE_SCALE_STOPS:`boolean`,VV_SIZE_FIELD_STOPS:`boolean`,VV_SIZE_UNIT_VALUE:`boolean`,VV_OPACITY:`boolean`,HITTEST:`boolean`,numberOfFields:`number`,highlight:`boolean`,inside:`boolean`,outside:`boolean`}}setNumberOfFields(e){this.required.colors={type:`array`,elementType:F,size:e}}},pa=class extends ${constructor(){super(...arguments),this.type=30,this.shaders={geometry:new fa},this.symbologyPlane=2}render(e,t){let{painter:n}=e,{instance:r,target:i}=t,a=this.shaders.geometry,o=r.getInput(),s=o.uniforms.numberOfFields,c=E(e),l=x(e,i),u=w(e);a.setNumberOfFields(s),n.setShader({shader:a,uniforms:{...C(e,t.target,o.uniforms.shader),...l.storage,...l.view,...l.highlight,highlightUniforms:l.highlight,hittestUniforms:l.hittestRequest?{hittestDist:l.hittestRequest?.distance,hittestPos:l.hittestRequest?.position}:null},textures:te(e),defines:{VV_SIZE_MIN_MAX_VALUE:!!o.uniforms.shader.visualVariableSizeMinMaxValue,VV_SIZE_SCALE_STOPS:!!o.uniforms.shader.visualVariableSizeScaleStops,VV_SIZE_FIELD_STOPS:!!o.uniforms.shader.visualVariableSizeStops,VV_SIZE_UNIT_VALUE:!!o.uniforms.shader.visualVariableSizeUnitValue,VV_OPACITY:!!o.uniforms.shader.visualVariableOpacity,HITTEST:c,highlight:+!!l.highlight,...u,numberOfFields:s},optionalAttributes:{},useComputeBuffer:c}),n.setPipelineState(T(e)),n.submitDraw(e,t)}},ma=class extends ${constructor(){super(...arguments),this.type=32,this.shaders={geometry:new Li},this.symbologyPlane=3}render(e,t){let{painter:n}=e,r=w(e),i=t.instance.getInput(),a={shader:this.shaders.geometry,uniforms:{...C(e,t.target,i.uniforms),...x(e,t.target),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey)},textures:{...S(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...r,isBackgroundPass:!0,isLabel:!1,textRenderPassType:0},optionalAttributes:i.optionalAttributes,useComputeBuffer:E(e)};n.setShader(a),n.setPipelineState(T(e)),n.submitDraw(e,t),n.setShader({...a,defines:{...r,isBackgroundPass:!1,isLabel:!1,textRenderPassType:2}}),n.submitDraw(e,t),n.setShader({...a,defines:{...r,isBackgroundPass:!1,isLabel:!1,textRenderPassType:1}}),n.submitDraw(e,t),n.setShader({...a,defines:{...r,isBackgroundPass:!1,isLabel:!1,textRenderPassType:0}}),n.submitDraw(e,t)}},ha={fill:new Cr,patternFill:new kr,complexFill:new rr,gradientFill:new Dr,outlineFill:new Or,patternOutlineFill:new Ar,complexOutlineFill:new Sr,marker:new ea,pieChart:new pa,line:new Wi,texturedLine:new qi,gradientStroke:new Ui,text:new ma,label:new Ri,heatmap:new Ei,dotDensity:new nr,flow:new mi,animatedMarker:new zn,animatedMarkerShift:new Bn,animatedFill:new Vn,animatedLine:new Hn};function ga(){for(let e in ha)ha[e].startup()}function _a(e){for(let t in ha)ha[t].shutdown(e)}export{Fr as _,pi as a,Ir as b,Wr as c,Ur as d,Rr as f,qr as g,zr as h,sa as i,Br as l,Hr as m,ga as n,ui as o,Kr as p,ha as r,si as s,_a as t,Gr as u,Pr as v,yt as x,Nr as y};
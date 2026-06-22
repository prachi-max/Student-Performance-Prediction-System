import './polyfills.server.mjs';
import{a as Ei}from"./chunk-P7H4RH7H.mjs";import{a as Mi}from"./chunk-S2SMBHXY.mjs";import{k as ki}from"./chunk-QX6LNMHP.mjs";import"./chunk-F3H5ZNQP.mjs";import{$a as At,Ac as nt,Bb as It,Cb as Tt,D as xt,Da as re,Db as Pt,E as Me,Ea as oe,Eb as Ft,Fa as le,G as q,Ga as Fe,Ha as gi,Ia as Se,Ja as un,L as f,M as A,Ma as y,Mb as vi,Na as O,O as x,Oa as B,Ob as yi,P as fi,Pa as ve,Q as s,Qa as qe,Sb as ee,T as Pe,V,W as N,Wb as ne,X as $e,Xa as Qe,Xb as Di,Y as cn,Ya as K,Z as T,Za as Je,_ as C,_a as et,_b as Vt,a as he,ab as Ot,ba as b,bb as z,c as Ct,ca as v,cb as d,d as w,db as c,e as ui,eb as Y,fa as E,fb as U,gb as G,h as be,hb as pe,ia as me,ib as fe,ja as kt,jb as Ve,kb as R,l as rn,la as M,lb as Rt,m as hi,mb as k,mc as wi,na as Et,nb as ye,ob as de,p as mi,pa as Mt,pb as bi,qa as St,qb as ce,ra as _i,rb as Q,rc as Ci,s as on,sb as J,t as Ze,tb as tt,u as sn,ub as j,vb as De,vc as xi,wb as m,x as pi,xb as we,y as ln,ya as p,yb as Ne,z as dn,zb as hn}from"./chunk-2HUZ4MEP.mjs";import{a as P,b as wt}from"./chunk-N7QBYMCK.mjs";var mn=new x("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>s(vi)}),Le="Method not implemented",Z=class{locale;_localeChanges=new w;localeChanges=this._localeChanges;setTime(i,e,t,n){throw new Error(Le)}getHours(i){throw new Error(Le)}getMinutes(i){throw new Error(Le)}getSeconds(i){throw new Error(Le)}parseTime(i,e){throw new Error(Le)}addSeconds(i,e){throw new Error(Le)}getValidDateOrNull(i){return this.isDateInstance(i)&&this.isValid(i)?i:null}deserialize(i){return i==null||this.isDateInstance(i)&&this.isValid(i)?i:this.invalid()}setLocale(i){this.locale=i,this._localeChanges.next()}compareDate(i,e){return this.getYear(i)-this.getYear(e)||this.getMonth(i)-this.getMonth(e)||this.getDate(i)-this.getDate(e)}compareTime(i,e){return this.getHours(i)-this.getHours(e)||this.getMinutes(i)-this.getMinutes(e)||this.getSeconds(i)-this.getSeconds(e)}sameDate(i,e){if(i&&e){let t=this.isValid(i),n=this.isValid(e);return t&&n?!this.compareDate(i,e):t==n}return i==e}sameTime(i,e){if(i&&e){let t=this.isValid(i),n=this.isValid(e);return t&&n?!this.compareTime(i,e):t==n}return i==e}clampDate(i,e,t){return e&&this.compareDate(i,e)<0?e:t&&this.compareDate(i,t)>0?t:i}},Ae=new x("mat-date-formats");var pn;try{pn=typeof Intl<"u"&&Intl.v8BreakIterator}catch{pn=!1}var D=(()=>{class a{_platformId=s(Mt);isBrowser=this._platformId?nt(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||pn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Be(a){return Array.isArray(a)?a:[a]}var Si=new Set,Oe,ze=(()=>{class a{_platform=s(D);_nonce=s(_i,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ja}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Ya(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Ya(a,i){if(!Si.has(a))try{Oe||(Oe=document.createElement("style"),i&&Oe.setAttribute("nonce",i),Oe.setAttribute("type","text/css"),document.head.appendChild(Oe)),Oe.sheet&&(Oe.sheet.insertRule(`@media ${a} {body{ }}`,0),Si.add(a))}catch(e){console.error(e)}}function ja(a){return{matches:a==="all"||a==="",media:a,addListener:()=>{},removeListener:()=>{}}}var fn=(()=>{class a{_mediaMatcher=s(ze);_zone=s(v);_queries=new Map;_destroySubject=new w;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Ai(Be(e)).some(n=>this._registerQuery(n).mql.matches)}observe(e){let n=Ai(Be(e)).map(o=>this._registerQuery(o).observable),r=hi(n);return r=mi(r.pipe(ln(1)),r.pipe(xt(1),pi(0))),r.pipe(rn(o=>{let l={matches:!1,breakpoints:{}};return o.forEach(({matches:h,query:_})=>{l.matches=l.matches||h,l.breakpoints[_]=h}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),r={observable:new Ct(o=>{let l=h=>this._zone.run(()=>o.next(h));return t.addListener(l),()=>{t.removeListener(l)}}).pipe(Me(t),rn(({matches:o})=>({query:e,matches:o})),q(this._destroySubject)),mql:t};return this._queries.set(e,r),r}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Ai(a){return a.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var Ha=new x("MATERIAL_ANIMATIONS"),Oi=null;function Wa(){return s(Ha,{optional:!0})?.animationsDisabled||s(St,{optional:!0})==="NoopAnimations"?"di-disabled":(Oi??=s(ze).matchMedia("(prefers-reduced-motion)").matches,Oi?"reduced-motion":"enabled")}function _e(){return Wa()!=="enabled"}function it(a){return a.buttons===0||a.detail===0}function at(a){let i=a.touches&&a.touches[0]||a.changedTouches&&a.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var _n;function Ri(){if(_n==null){let a=typeof document<"u"?document.head:null;_n=!!(a&&(a.createShadowRoot||a.attachShadow))}return _n}function gn(a){if(Ri()){let i=a.getRootNode?a.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function rt(){let a=typeof document<"u"&&document?document.activeElement:null;for(;a&&a.shadowRoot;){let i=a.shadowRoot.activeElement;if(i===a)break;a=i}return a}function $(a){return a.composedPath?a.composedPath()[0]:a.target}var ot;function Ii(){if(ot==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ot=!0}))}finally{ot=ot||!1}return ot}function Ye(a){return Ii()?a:!!a.capture}function st(a,i=0){return Ti(a)?Number(a):arguments.length===2?i:0}function Ti(a){return!isNaN(parseFloat(a))&&!isNaN(Number(a))}function ue(a){return a instanceof M?a.nativeElement:a}var Pi=new x("cdk-input-modality-detector-options"),Fi={ignoreKeys:[18,17,224,91,16]},Vi=650,bn={passive:!0,capture:!0},Ni=(()=>{class a{_platform=s(D);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new ui(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=$(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Vi||(this._modality.next(it(e)?"keyboard":"mouse"),this._mostRecentTarget=$(e))};_onTouchstart=e=>{if(at(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=$(e)};constructor(){let e=s(v),t=s(C),n=s(Pi,{optional:!0});if(this._options=P(P({},Fi),n),this.modalityDetected=this._modality.pipe(xt(1)),this.modalityChanged=this.modalityDetected.pipe(dn()),this._platform.isBrowser){let r=s(oe).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,bn),r.listen(t,"mousedown",this._onMousedown,bn),r.listen(t,"touchstart",this._onTouchstart,bn)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),lt=(function(a){return a[a.IMMEDIATE=0]="IMMEDIATE",a[a.EVENTUAL=1]="EVENTUAL",a})(lt||{}),Li=new x("cdk-focus-monitor-default-options"),Nt=Ye({passive:!0,capture:!0}),je=(()=>{class a{_ngZone=s(v);_platform=s(D);_inputModalityDetector=s(Ni);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(C);_stopInputModalityDetector=new w;constructor(){let e=s(Li,{optional:!0});this._detectionMode=e?.detectionMode||lt.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=$(e);for(let n=t;n;n=n.parentElement)e.type==="focus"?this._onFocus(e,n):this._onBlur(e,n)};monitor(e,t=!1){let n=ue(e);if(!this._platform.isBrowser||n.nodeType!==1)return be();let r=gn(n)||this._document,o=this._elementInfo.get(n);if(o)return t&&(o.checkChildren=!0),o.subject;let l={checkChildren:t,subject:new w,rootNode:r};return this._elementInfo.set(n,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=ue(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n))}focusVia(e,t,n){let r=ue(e),o=this._document.activeElement;r===o?this._getClosestElementsInfo(r).forEach(([l,h])=>this._originChanged(l,t,h)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(n))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===lt.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===lt.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?Vi:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(e,t){let n=this._elementInfo.get(t),r=$(e);!n||!n.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),n)}_onBlur(e,t){let n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,n=this._rootNodeFocusListenerCount.get(t)||0;n||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Nt),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Nt)}),this._rootNodeFocusListenerCount.set(t,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(q(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let n=this._rootNodeFocusListenerCount.get(t);n>1?this._rootNodeFocusListenerCount.set(t,n-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Nt),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Nt),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,n){this._setClasses(e,t),this._emitOrigin(n,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((n,r)=>{(r===e||n.checkChildren&&r.contains(e))&&t.push([r,n])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let o=0;o<r.length;o++)if(r[o].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),vn=(()=>{class a{_elementRef=s(M);_focusMonitor=s(je);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new b;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||a)};static \u0275dir=B({type:a,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return a})();var Lt=new WeakMap,H=(()=>{class a{_appRef;_injector=s(T);_environmentInjector=s(Pe);load(e){let t=this._appRef=this._appRef||this._injector.get(Qe),n=Lt.get(t);n||(n={loaders:new Set,refs:[]},Lt.set(t,n),t.onDestroy(()=>{Lt.get(t)?.refs.forEach(r=>r.destroy()),Lt.delete(t)})),n.loaders.has(e)||(n.loaders.add(e),n.refs.push(Vt(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Ce=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return a})();var Ua=(()=>{class a{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Bi=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=O({type:a});static \u0275inj=A({providers:[Ua]})}return a})();var Xa=(()=>{class a{_platform=s(D);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Ka(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=Ga(nr(e));if(t&&(zi(t)===-1||!this.isVisible(t)))return!1;let n=e.nodeName.toLowerCase(),r=zi(e);return e.hasAttribute("contenteditable")?r!==-1:n==="iframe"||n==="object"||this._platform.WEBKIT&&this._platform.IOS&&!er(e)?!1:n==="audio"?e.hasAttribute("controls")?r!==-1:!1:n==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return tr(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function Ga(a){try{return a.frameElement}catch{return null}}function Ka(a){return!!(a.offsetWidth||a.offsetHeight||typeof a.getClientRects=="function"&&a.getClientRects().length)}function Za(a){let i=a.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function $a(a){return Qa(a)&&a.type=="hidden"}function qa(a){return Ja(a)&&a.hasAttribute("href")}function Qa(a){return a.nodeName.toLowerCase()=="input"}function Ja(a){return a.nodeName.toLowerCase()=="a"}function Hi(a){if(!a.hasAttribute("tabindex")||a.tabIndex===void 0)return!1;let i=a.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function zi(a){if(!Hi(a))return null;let i=parseInt(a.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function er(a){let i=a.nodeName.toLowerCase(),e=i==="input"&&a.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function tr(a){return $a(a)?!1:Za(a)||qa(a)||a.hasAttribute("contenteditable")||Hi(a)}function nr(a){return a.ownerDocument&&a.ownerDocument.defaultView||window}var Dn=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,t,n,r=!1,o){this._element=i,this._checker=e,this._ngZone=t,this._document=n,this._injector=o,r||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(i),!!t}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=0;t<e.length;t++){let n=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(n)return n}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let t=e.length-1;t>=0;t--){let n=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(n)return n}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?re(i,{injector:this._injector}):setTimeout(i)}},Wi=(()=>{class a{_checker=s(Xa);_ngZone=s(v);_document=s(C);_injector=s(T);constructor(){s(H).load(Ce)}create(e,t=!1){return new Dn(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),wn=(()=>{class a{_elementRef=s(M);_focusTrapFactory=s(Wi);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){s(D).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=rt(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(t){return new(t||a)};static \u0275dir=B({type:a,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",ne],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",ne]},exportAs:["cdkTrapFocus"],features:[me]})}return a})();var xe=(function(a){return a[a.NONE=0]="NONE",a[a.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",a[a.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",a})(xe||{}),Yi="cdk-high-contrast-black-on-white",ji="cdk-high-contrast-white-on-black",yn="cdk-high-contrast-active",Ui=(()=>{class a{_platform=s(D);_hasCheckedHighContrastMode=!1;_document=s(C);_breakpointSubscription;constructor(){this._breakpointSubscription=s(fn).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return xe.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,r=(n&&n.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return xe.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return xe.BLACK_ON_WHITE}return xe.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(yn,Yi,ji),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===xe.BLACK_ON_WHITE?e.add(yn,Yi):t===xe.WHITE_ON_BLACK&&e.add(yn,ji)}}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),Cn=(()=>{class a{constructor(){s(Ui)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||a)};static \u0275mod=O({type:a});static \u0275inj=A({imports:[Bi]})}return a})();function Bt(a,...i){return i.length?i.some(e=>a[e]):a.altKey||a.shiftKey||a.ctrlKey||a.metaKey}var xn={},ke=class a{_appId=s(Et);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),xn.hasOwnProperty(i)||(xn[i]=0),`${i}${e?a._infix+"-":""}${xn[i]++}`}static \u0275fac=function(e){return new(e||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})};var Gi=" ";function ir(a,i,e){let t=Yt(a,i);e=e.trim(),!t.some(n=>n.trim()===e)&&(t.push(e),a.setAttribute(i,t.join(Gi)))}function ar(a,i,e){let t=Yt(a,i);e=e.trim();let n=t.filter(r=>r!==e);n.length?a.setAttribute(i,n.join(Gi)):a.removeAttribute(i)}function Yt(a,i){return a.getAttribute(i)?.match(/\S+/g)??[]}var Ki="cdk-describedby-message",zt="cdk-describedby-host",En=0,Zi=(()=>{class a{_platform=s(D);_document=s(C);_messageRegistry=new Map;_messagesContainer=null;_id=`${En++}`;constructor(){s(H).load(Ce),this._id=s(Et)+"-"+En++}describe(e,t,n){if(!this._canBeDescribed(e,t))return;let r=kn(t,n);typeof t!="string"?(Xi(t,this._id),this._messageRegistry.set(r,{messageElement:t,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(t,n),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,t,n){if(!t||!this._isElementNode(e))return;let r=kn(t,n);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof t=="string"){let o=this._messageRegistry.get(r);o&&o.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${zt}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(zt);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let n=this._document.createElement("div");Xi(n,this._id),n.textContent=e,t&&n.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(n),this._messageRegistry.set(kn(e,t),{messageElement:n,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<t.length;r++)t[r].remove();let n=this._document.createElement("div");n.style.visibility="hidden",n.classList.add(e),n.classList.add("cdk-visually-hidden"),this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._messagesContainer=n}_removeCdkDescribedByReferenceIds(e){let t=Yt(e,"aria-describedby").filter(n=>n.indexOf(Ki)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let n=this._messageRegistry.get(t);ir(e,"aria-describedby",n.messageElement.id),e.setAttribute(zt,this._id),n.referenceCount++}_removeMessageReference(e,t){let n=this._messageRegistry.get(t);n.referenceCount--,ar(e,"aria-describedby",n.messageElement.id),e.removeAttribute(zt)}_isElementDescribedByMessage(e,t){let n=Yt(e,"aria-describedby"),r=this._messageRegistry.get(t),o=r&&r.messageElement.id;return!!o&&n.indexOf(o)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let n=t==null?"":`${t}`.trim(),r=e.getAttribute("aria-label");return n?!r||r.trim()!==n:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function kn(a,i){return typeof a=="string"?`${i||""}/${a}`:a}function Xi(a,i){a.id||(a.id=`${Ki}-${i}-${En++}`)}var Re;function $i(){if(Re==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Re=!1,Re;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Re=!0;else{let a=Element.prototype.scrollTo;a?Re=!/\{\s*\[native code\]\s*\}/.test(a.toString()):Re=!1}}return Re}function Mn(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function I(a){return a==null?"":typeof a=="string"?a:`${a}px`}function Sn(a){return a!=null&&`${a}`!="false"}var ie=(function(a){return a[a.FADING_IN=0]="FADING_IN",a[a.VISIBLE=1]="VISIBLE",a[a.FADING_OUT=2]="FADING_OUT",a[a.HIDDEN=3]="HIDDEN",a})(ie||{}),An=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ie.HIDDEN;constructor(i,e,t,n=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=n}fadeOut(){this._renderer.fadeOutRipple(this)}},qi=Ye({passive:!0,capture:!0}),On=class{_events=new Map;addHandler(i,e,t,n){let r=this._events.get(e);if(r){let o=r.get(t);o?o.add(n):r.set(t,new Set([n]))}else this._events.set(e,new Map([[t,new Set([n])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,qi)})}removeHandler(i,e,t){let n=this._events.get(i);if(!n)return;let r=n.get(e);r&&(r.delete(t),r.size===0&&n.delete(e),n.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,qi)))}_delegateEventHandler=i=>{let e=$(i);e&&this._events.get(i.type)?.forEach((t,n)=>{(n===e||n.contains(e))&&t.forEach(r=>r.handleEvent(i))})}},dt={enterDuration:225,exitDuration:150},rr=800,Qi=Ye({passive:!0,capture:!0}),Ji=["mousedown","touchstart"],ea=["mouseup","mouseleave","touchend","touchcancel"],or=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return a})(),jt=class a{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new On;constructor(i,e,t,n,r){this._target=i,this._ngZone=e,this._platform=n,n.isBrowser&&(this._containerElement=ue(t)),r&&r.get(H).load(or)}fadeInRipple(i,e,t={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=P(P({},dt),t.animation);t.centered&&(i=n.left+n.width/2,e=n.top+n.height/2);let o=t.radius||sr(i,e,n),l=i-n.left,h=e-n.top,_=r.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${l-o}px`,u.style.top=`${h-o}px`,u.style.height=`${o*2}px`,u.style.width=`${o*2}px`,t.color!=null&&(u.style.backgroundColor=t.color),u.style.transitionDuration=`${_}ms`,this._containerElement.appendChild(u);let g=window.getComputedStyle(u),W=g.transitionProperty,X=g.transitionDuration,L=W==="none"||X==="0s"||X==="0s, 0s"||n.width===0&&n.height===0,F=new An(this,u,t,L);u.style.transform="scale3d(1, 1, 1)",F.state=ie.FADING_IN,t.persistent||(this._mostRecentTransientRipple=F);let Ee=null;return!L&&(_||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let di=()=>{Ee&&(Ee.fallbackTimer=null),clearTimeout(ci),this._finishRippleTransition(F)},an=()=>this._destroyRipple(F),ci=setTimeout(an,_+100);u.addEventListener("transitionend",di),u.addEventListener("transitioncancel",an),Ee={onTransitionEnd:di,onTransitionCancel:an,fallbackTimer:ci}}),this._activeRipples.set(F,Ee),(L||!_)&&this._finishRippleTransition(F),F}fadeOutRipple(i){if(i.state===ie.FADING_OUT||i.state===ie.HIDDEN)return;let e=i.element,t=P(P({},dt),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=ie.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=ue(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Ji.forEach(t=>{a._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ea.forEach(e=>{this._triggerElement.addEventListener(e,this,Qi)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===ie.FADING_IN?this._startFadeOutTransition(i):i.state===ie.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=ie.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=ie.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=it(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+rr;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!at(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===ie.VISIBLE||i.config.terminateOnPointerUp&&i.state===ie.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Ji.forEach(e=>a._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(ea.forEach(e=>i.removeEventListener(e,this,Qi)),this._pointerUpEventsRegistered=!1))}};function sr(a,i,e){let t=Math.max(Math.abs(a-e.left),Math.abs(a-e.right)),n=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+n*n)}var ta=new x("mat-ripple-global-options");var Ht=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,n){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return a})();var lr=new x("cdk-dir-doc",{providedIn:"root",factory:()=>s(C)}),dr=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function na(a){let i=a?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?dr.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var ge=(()=>{class a{get value(){return this.valueSignal()}valueSignal=E("ltr");change=new b;constructor(){let e=s(lr,{optional:!0});if(e){let t=e.body?e.body.dir:null,n=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(na(t||n||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var se=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=O({type:a});static \u0275inj=A({})}return a})();var ia=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=O({type:a});static \u0275inj=A({imports:[se]})}return a})();var cr={capture:!0},ur=["focus","mousedown","mouseenter","touchstart"],Rn="mat-ripple-loader-uninitialized",In="mat-ripple-loader-class-name",aa="mat-ripple-loader-centered",Wt="mat-ripple-loader-disabled",ra=(()=>{class a{_document=s(C);_animationsDisabled=_e();_globalRippleOptions=s(ta,{optional:!0});_platform=s(D);_ngZone=s(v);_injector=s(T);_eventCleanups;_hosts=new Map;constructor(){let e=s(oe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ur.map(t=>e.listen(this._document,t,this._onInteraction,cr)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Rn,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(In))&&e.setAttribute(In,t.className||""),t.centered&&e.setAttribute(aa,""),t.disabled&&e.setAttribute(Wt,"")}setDisabled(e,t){let n=this._hosts.get(e);n?(n.target.rippleDisabled=t,!t&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(e))):t?e.setAttribute(Wt,""):e.removeAttribute(Wt)}_onInteraction=e=>{let t=$(e);if(t instanceof HTMLElement){let n=t.closest(`[${Rn}="${this._globalRippleOptions?.namespace??""}"]`);n&&this._createRipple(n)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(In)),e.append(t);let n=this._globalRippleOptions,r=this._animationsDisabled?0:n?.animation?.enterDuration??dt.enterDuration,o=this._animationsDisabled?0:n?.animation?.exitDuration??dt.exitDuration,l={rippleDisabled:this._animationsDisabled||n?.disabled||e.hasAttribute(Wt),rippleConfig:{centered:e.hasAttribute(aa),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:o}}},h=new jt(l,this._ngZone,t,this._platform,this._injector),_=!l.rippleDisabled;_&&h.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:h,hasSetUpEvents:_}),e.removeAttribute(Rn)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var hr=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,mr=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Tn(a,i){let e=Array(a);for(let t=0;t<a;t++)e[t]=i(t);return e}var pr=(()=>{class a extends Z{_matDateLocale=s(mn,{optional:!0});constructor(){super();let e=s(mn,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Tn(12,n=>this._format(t,new Date(2017,n,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Tn(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Tn(7,n=>this._format(t,new Date(2017,0,n+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,n){let r=this._createDateWithOverflow(e,t,n);return r.getMonth()!=t,r}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let n=new Intl.DateTimeFormat(this.locale,wt(P({},t),{timeZone:"utc"}));return this._format(n,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let n=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(n)!=((this.getMonth(e)+t)%12+12)%12&&(n=this._createDateWithOverflow(this.getYear(n),this.getMonth(n),0)),n}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(hr.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,n,r){let o=this.clone(e);return o.setHours(t,n,r,0),o}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let n=e.trim();if(n.length===0)return null;let r=this._parseTimeString(n);if(r===null){let o=n.replace(/[^0-9:(AM|PM)]/gi,"").trim();o.length>0&&(r=this._parseTimeString(o))}return r||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,n){let r=new Date;return r.setFullYear(e,t,n),r.setHours(0,0,0,0),r}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let n=new Date;return n.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),n.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(n)}_parseTimeString(e){let t=e.toUpperCase().match(mr);if(t){let n=parseInt(t[1]),r=parseInt(t[2]),o=t[3]==null?void 0:parseInt(t[3]),l=t[4];if(n===12?n=l==="AM"?0:n:l==="PM"&&(n+=12),Pn(n,0,23)&&Pn(r,0,59)&&(o==null||Pn(o,0,59)))return this.setTime(this.today(),n,r,o||0)}return null}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac})}return a})();function Pn(a,i,e){return!isNaN(a)&&a>=i&&a<=e}var fr={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};var oa=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=O({type:a});static \u0275inj=A({providers:[_r()]})}return a})();function _r(a=fr){return[{provide:Z,useClass:pr},{provide:Ae,useValue:a}]}var br=20,He=(()=>{class a{_ngZone=s(v);_platform=s(D);_renderer=s(oe).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new w;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=br){return this._platform.isBrowser?new Ct(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let n=e>0?this._scrolled.pipe(sn(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):be()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Ze(r=>!r||n.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((n,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_scrollableContainsElement(e,t){let n=ue(t),r=e.getElementRef().nativeElement;do if(n==r)return!0;while(n=n.parentElement);return!1}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var vr=20,We=(()=>{class a{_platform=s(D);_listeners;_viewportSize=null;_change=new w;_document=s(C);constructor(){let e=s(v),t=s(oe).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=r=>this._change.next(r);this._listeners=[t.listen("window","resize",n),t.listen("window","orientationchange",n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+t,height:n,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),n=e.documentElement,r=n.getBoundingClientRect(),o=-r.top||e.body?.scrollTop||t.scrollY||n.scrollTop||0,l=-r.left||e.body?.scrollLeft||t.scrollX||n.scrollLeft||0;return{top:o,left:l}}change(e=vr){return e>0?this._change.pipe(sn(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var ct=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=O({type:a});static \u0275inj=A({})}return a})(),Vn=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=O({type:a});static \u0275inj=A({imports:[se,ct,se,ct]})}return a})();var ut=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Ie=class extends ut{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,n,r){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=n,this.bindings=r||null}},ht=class extends ut{templateRef;viewContainerRef;context;injector;constructor(i,e,t,n){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=n}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Nn=class extends ut{element;constructor(i){super(),this.element=i instanceof M?i.nativeElement:i}},Ut=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Ie)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof ht)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Nn)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Xt=class extends Ut{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,n=t.get(un,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:n,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,n=i.injector||this._defaultInjector||T.NULL,r=n.get(Pe,t.injector);e=Vt(i.component,{elementInjector:n,environmentInjector:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(n=>this.outletElement.appendChild(n)),t.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(t);n!==-1&&e.remove(n)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Ln=(()=>{class a extends Ut{_moduleRef=s(un,{optional:!0});_document=s(C);_viewContainerRef=s(Se);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new b;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,n=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(n,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||a)};static \u0275dir=B({type:a,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ve]})}return a})(),Gt=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=O({type:a});static \u0275inj=A({})}return a})();var sa=$i();function Yn(a){return new Kt(a.get(We),a.get(C))}var Kt=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=I(-this._previousScrollPosition.left),i.style.top=I(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,n=e.style,r=t.scrollBehavior||"",o=n.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),sa&&(t.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),sa&&(t.scrollBehavior=r,n.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function pa(a,i){return new Zt(a.get(He),a.get(v),a.get(We),i)}var Zt=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,n){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(Ze(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var mt=class{enable(){}disable(){}attach(){}};function Bn(a,i){return i.some(e=>{let t=a.bottom<e.top,n=a.top>e.bottom,r=a.right<e.left,o=a.left>e.right;return t||n||r||o})}function la(a,i){return i.some(e=>{let t=a.top<e.top,n=a.bottom>e.bottom,r=a.left<e.left,o=a.right>e.right;return t||n||r||o})}function _t(a,i){return new $t(a.get(He),a.get(We),a.get(v),i)}var $t=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,n){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=n}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:n}=this._viewportRuler.getViewportSize();Bn(e,[{width:t,height:n,bottom:n,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},fa=(()=>{class a{_injector=s(T);constructor(){}noop=()=>new mt;close=e=>pa(this._injector,e);block=()=>Yn(this._injector);reposition=e=>_t(this._injector,e);static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),pt=class{positionStrategy;scrollStrategy=new mt;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var qt=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var _a=(()=>{class a{_attachedOverlays=[];_document=s(C);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,n){return n.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),ga=(()=>{class a extends _a{_ngZone=s(v);_renderer=s(oe).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let n=t.length-1;n>-1;n--){let r=t[n];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(n){return(e||(e=kt(a)))(n||a)}})();static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),ba=(()=>{class a extends _a{_platform=s(D);_ngZone=s(v);_renderer=s(oe).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,n={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,n),r.listen(t,"click",this._clickListener,n),r.listen(t,"auxclick",this._clickListener,n),r.listen(t,"contextmenu",this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=$(e)};_clickListener=e=>{let t=$(e),n=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let o=r.length-1;o>-1;o--){let l=r[o],h=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,h))){if(da(l.overlayElement,t)||da(l.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>h.next(e)):h.next(e)}}};static \u0275fac=(()=>{let e;return function(n){return(e||(e=kt(a)))(n||a)}})();static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function da(a,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===a)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var va=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return a})(),ya=(()=>{class a{_platform=s(D);_containerElement;_document=s(C);_styleLoader=s(H);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Mn()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<n.length;r++)n[r].remove()}let t=this._document.createElement("div");t.classList.add(e),Mn()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(va)}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),zn=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,n){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",n)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function jn(a){return a&&a.nodeType===1}var Qt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new w;_attachments=new w;_detachments=new w;_positionStrategy;_scrollStrategy;_locationChanges=he.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new w;_outsidePointerEvents=new w;_afterNextRenderRef;constructor(i,e,t,n,r,o,l,h,_,u=!1,g,W){this._portalOutlet=i,this._host=e,this._pane=t,this._config=n,this._ngZone=r,this._keyboardDispatcher=o,this._document=l,this._location=h,this._outsideClickDispatcher=_,this._animationsDisabled=u,this._injector=g,this._renderer=W,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=re(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=P(P({},this._config),i),this._updateElementSize()}setDirection(i){this._config=wt(P({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=I(this._config.width),i.height=I(this._config.height),i.minWidth=I(this._config.minWidth),i.minHeight=I(this._config.minHeight),i.maxWidth=I(this._config.maxWidth),i.maxHeight=I(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;jn(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new zn(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let n=Be(e||[]).filter(r=>!!r);n.length&&(t?i.classList.add(...n):i.classList.remove(...n))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=re(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},ca="cdk-overlay-connected-position-bounding-box",yr=/([A-Za-z%]+)$/;function gt(a,i){return new ft(i,a.get(We),a.get(C),a.get(D),a.get(ya))}var ft=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new w;_resizeSubscription=he.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,n,r){this._viewportRuler=e,this._document=t,this._platform=n,this._overlayContainer=r,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(ca),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,n=this._containerRect,r=[],o;for(let l of this._preferredPositions){let h=this._getOriginPoint(i,n,l),_=this._getOverlayPoint(h,e,l),u=this._getOverlayFit(_,e,t,l);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,h);return}if(this._canFitWithFlexibleDimensions(u,_,t)){r.push({position:l,origin:h,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(h,l)});continue}(!o||o.overlayFit.visibleArea<u.visibleArea)&&(o={overlayFit:u,overlayPoint:_,originPoint:h,position:l,overlayRect:e})}if(r.length){let l=null,h=-1;for(let _ of r){let u=_.boundingBoxRect.width*_.boundingBoxRect.height*(_.position.weight||1);u>h&&(h=u,l=_)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Te(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(ca),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof M?this._origin.nativeElement:jn(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let n;if(t.originX=="center")n=i.left+i.width/2;else{let o=this._isRtl()?i.right:i.left,l=this._isRtl()?i.left:i.right;n=t.originX=="start"?o:l}e.left<0&&(n-=e.left);let r;return t.originY=="center"?r=i.top+i.height/2:r=t.originY=="top"?i.top:i.bottom,e.top<0&&(r-=e.top),{x:n,y:r}}_getOverlayPoint(i,e,t){let n;t.overlayX=="center"?n=-e.width/2:t.overlayX==="start"?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:i.x+n,y:i.y+r}}_getOverlayFit(i,e,t,n){let r=ha(e),{x:o,y:l}=i,h=this._getOffset(n,"x"),_=this._getOffset(n,"y");h&&(o+=h),_&&(l+=_);let u=0-o,g=o+r.width-t.width,W=0-l,X=l+r.height-t.height,L=this._subtractOverflows(r.width,u,g),F=this._subtractOverflows(r.height,W,X),Ee=L*F;return{visibleArea:Ee,isCompletelyWithinViewport:r.width*r.height===Ee,fitsInViewportVertically:F===r.height,fitsInViewportHorizontally:L==r.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let n=t.bottom-e.y,r=t.right-e.x,o=ua(this._overlayRef.getConfig().minHeight),l=ua(this._overlayRef.getConfig().minWidth),h=i.fitsInViewportVertically||o!=null&&o<=n,_=i.fitsInViewportHorizontally||l!=null&&l<=r;return h&&_}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let n=ha(e),r=this._viewportRect,o=Math.max(i.x+n.width-r.width,0),l=Math.max(i.y+n.height-r.height,0),h=Math.max(r.top-t.top-i.y,0),_=Math.max(r.left-t.left-i.x,0),u=0,g=0;return n.width<=r.width?u=_||-o:u=i.x<this._getViewportMarginStart()?r.left-t.left-i.x:0,n.height<=r.height?g=h||-l:g=i.y<this._getViewportMarginTop()?r.top-t.top-i.y:0,this._previousPushAmount={x:u,y:g},{x:i.x+u,y:i.y+g}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Dr(this._lastScrollVisibility,t)){let n=new qt(i,t);this._positionChanges.next(n)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,n=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${n}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,n=this._isRtl(),r,o,l;if(e.overlayY==="top")o=i.y,r=t.height-o+this._getViewportMarginBottom();else if(e.overlayY==="bottom")l=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-l+this._getViewportMarginTop();else{let X=Math.min(t.bottom-i.y+t.top,i.y),L=this._lastBoundingBoxSize.height;r=X*2,o=i.y-X,r>L&&!this._isInitialRender&&!this._growAfterOpen&&(o=i.y-L/2)}let h=e.overlayX==="start"&&!n||e.overlayX==="end"&&n,_=e.overlayX==="end"&&!n||e.overlayX==="start"&&n,u,g,W;if(_)W=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=i.x-this._getViewportMarginStart();else if(h)g=i.x,u=t.right-i.x-this._getViewportMarginEnd();else{let X=Math.min(t.right-i.x+t.left,i.x),L=this._lastBoundingBoxSize.width;u=X*2,g=i.x-X,u>L&&!this._isInitialRender&&!this._growAfterOpen&&(g=i.x-L/2)}return{top:o,left:g,bottom:l,right:W,width:u,height:r}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left="0",n.bottom=n.right="auto",n.maxHeight=n.maxWidth="",n.width=n.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;n.width=I(t.width),n.height=I(t.height),n.top=I(t.top)||"auto",n.bottom=I(t.bottom)||"auto",n.left=I(t.left)||"auto",n.right=I(t.right)||"auto",e.overlayX==="center"?n.alignItems="center":n.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?n.justifyContent="center":n.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(n.maxHeight=I(r)),o&&(n.maxWidth=I(o))}this._lastBoundingBoxSize=t,Te(this._boundingBox.style,n)}_resetBoundingBoxStyles(){Te(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Te(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},n=this._hasExactPosition(),r=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(n){let u=this._viewportRuler.getViewportScrollPosition();Te(t,this._getExactOverlayY(e,i,u)),Te(t,this._getExactOverlayX(e,i,u))}else t.position="static";let l="",h=this._getOffset(e,"x"),_=this._getOffset(e,"y");h&&(l+=`translateX(${h}px) `),_&&(l+=`translateY(${_}px)`),t.transform=l.trim(),o.maxHeight&&(n?t.maxHeight=I(o.maxHeight):r&&(t.maxHeight="")),o.maxWidth&&(n?t.maxWidth=I(o.maxWidth):r&&(t.maxWidth="")),Te(this._pane.style,t)}_getExactOverlayY(i,e,t){let n={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),i.overlayY==="bottom"){let o=this._document.documentElement.clientHeight;n.bottom=`${o-(r.y+this._overlayRect.height)}px`}else n.top=I(r.y);return n}_getExactOverlayX(i,e,t){let n={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let o;if(this._isRtl()?o=i.overlayX==="end"?"left":"right":o=i.overlayX==="end"?"right":"left",o==="right"){let l=this._document.documentElement.clientWidth;n.right=`${l-(r.x+this._overlayRect.width)}px`}else n.left=I(r.x);return n}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:la(i,t),isOriginOutsideView:Bn(i,t),isOverlayClipped:la(e,t),isOverlayOutsideView:Bn(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,n)=>t-Math.max(n,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Be(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof M)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function Te(a,i){for(let e in i)i.hasOwnProperty(e)&&(a[e]=i[e]);return a}function ua(a){if(typeof a!="number"&&a!=null){let[i,e]=a.split(yr);return!e||e==="px"?parseFloat(i):null}return a||null}function ha(a){return{top:Math.floor(a.top),right:Math.floor(a.right),bottom:Math.floor(a.bottom),left:Math.floor(a.left),width:Math.floor(a.width),height:Math.floor(a.height)}}function Dr(a,i){return a===i?!0:a.isOriginClipped===i.isOriginClipped&&a.isOriginOutsideView===i.isOriginOutsideView&&a.isOverlayClipped===i.isOverlayClipped&&a.isOverlayOutsideView===i.isOverlayOutsideView}var ma="cdk-global-overlay-wrapper";function Hn(a){return new Jt}var Jt=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(ma),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:n,height:r,maxWidth:o,maxHeight:l}=t,h=(n==="100%"||n==="100vw")&&(!o||o==="100%"||o==="100vw"),_=(r==="100%"||r==="100vh")&&(!l||l==="100%"||l==="100vh"),u=this._xPosition,g=this._xOffset,W=this._overlayRef.getConfig().direction==="rtl",X="",L="",F="";h?F="flex-start":u==="center"?(F="center",W?L=g:X=g):W?u==="left"||u==="end"?(F="flex-end",X=g):(u==="right"||u==="start")&&(F="flex-start",L=g):u==="left"||u==="start"?(F="flex-start",X=g):(u==="right"||u==="end")&&(F="flex-end",L=g),i.position=this._cssPosition,i.marginLeft=h?"0":X,i.marginTop=_?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=h?"0":L,e.justifyContent=F,e.alignItems=_?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(ma),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Da=(()=>{class a{_injector=s(T);constructor(){}global(){return Hn()}flexibleConnectedTo(e){return gt(this._injector,e)}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),wa=new x("OVERLAY_DEFAULT_CONFIG");function bt(a,i){a.get(H).load(va);let e=a.get(ya),t=a.get(C),n=a.get(ke),r=a.get(Qe),o=a.get(ge),l=a.get(le,null,{optional:!0})||a.get(oe).createRenderer(null,null),h=new pt(i),_=a.get(wa,null,{optional:!0})?.usePopover??!0;h.direction=h.direction||o.value,"showPopover"in t.body?h.usePopover=i?.usePopover??_:h.usePopover=!1;let u=t.createElement("div"),g=t.createElement("div");u.id=n.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),g.appendChild(u),h.usePopover&&(g.setAttribute("popover","manual"),g.classList.add("cdk-overlay-popover"));let W=h.usePopover?h.positionStrategy?.getPopoverInsertionPoint?.():null;return jn(W)?W.after(g):W?.type==="parent"?W.element.appendChild(g):e.getContainerElement().appendChild(g),new Qt(new Xt(u,r,a),g,u,h,a.get(v),a.get(ga),t,a.get(wi),a.get(ba),i?.disableAnimations??a.get(St,null,{optional:!0})==="NoopAnimations",a.get(Pe),l)}var Ca=(()=>{class a{scrollStrategies=s(fa);_positionBuilder=s(Da);_injector=s(T);constructor(){}create(e){return bt(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var Wn=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=O({type:a});static \u0275inj=A({providers:[Ca],imports:[se,Gt,Vn,Vn]})}return a})();var wr=["mat-icon-button",""],Cr=["*"],xr=new x("MAT_BUTTON_CONFIG");function xa(a){return a==null?void 0:Di(a)}var Un=(()=>{class a{_elementRef=s(M);_ngZone=s(v);_animationsDisabled=_e();_config=s(xr,{optional:!0});_focusMonitor=s(je);_cleanupClick;_renderer=s(le);_rippleLoader=s(ra);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){s(H).load(Ht);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||a)};static \u0275dir=B({type:a,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,n){t&2&&(K("disabled",n._getDisabledAttribute())("aria-disabled",n._getAriaDisabled())("tabindex",n._getTabIndex()),De(n.color?"mat-"+n.color:""),j("mat-mdc-button-disabled",n.disabled)("mat-mdc-button-disabled-interactive",n.disabledInteractive)("mat-unthemed",!n.color)("_mat-animation-noopable",n._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ne],disabled:[2,"disabled","disabled",ne],ariaDisabled:[2,"aria-disabled","ariaDisabled",ne],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ne],tabIndex:[2,"tabIndex","tabIndex",xa],_tabindex:[2,"tabindex","_tabindex",xa]}})}return a})(),en=(()=>{class a extends Un{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ve],attrs:wr,ngContentSelectors:Cr,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,n){t&1&&(ye(),pe(0,"span",0),de(1),pe(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return a})();var kr=["matButton",""],Er=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Mr=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var ka=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Xn=(()=>{class a extends Un{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Sr(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,n=this._appearance?ka.get(this._appearance):null,r=ka.get(e);n&&t.remove(...n),t.add(...r),this._appearance=e}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ve],attrs:kr,ngContentSelectors:Mr,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,n){t&1&&(ye(Er),pe(0,"span",0),de(1),U(2,"span",1),de(3,1),G(),de(4,2),pe(5,"span",2)(6,"span",3)),t&2&&j("mdc-button__ripple",!n._isFab)("mdc-fab__ripple",n._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return a})();function Sr(a){return a.hasAttribute("mat-raised-button")?"elevated":a.hasAttribute("mat-stroked-button")?"outlined":a.hasAttribute("mat-flat-button")?"filled":a.hasAttribute("mat-button")?"text":null}var Ea=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=O({type:a});static \u0275inj=A({imports:[ia,se]})}return a})();var Ar=["tooltip"],Or=20;var Rr=new x("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let a=s(T);return()=>_t(a,{scrollThrottle:Or})}}),Ir=new x("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Ma="tooltip-panel",Tr={passive:!0},Pr=8,Fr=8,Vr=24,Nr=200,Sa=(()=>{class a{_elementRef=s(M);_ngZone=s(v);_platform=s(D);_ariaDescriber=s(Zi);_focusMonitor=s(je);_dir=s(ge);_injector=s(T);_viewContainerRef=s(Se);_mediaMatcher=s(ze);_document=s(C);_renderer=s(le);_animationsDisabled=_e();_defaultOptions=s(Ir,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Lr;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Sn(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Sn(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=st(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=st(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new w;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Pr}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(q(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(t);this._detach(),this._portal=this._portal||new Ie(this._tooltipComponent,this._viewContainerRef);let r=this._tooltipInstance=n.attach(this._portal).instance;r._triggerElement=this._elementRef.nativeElement,r._mouseLeaveHideDelay=this._hideDelay,r.afterHidden().pipe(q(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),r.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let o=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&o._origin instanceof M)return this._overlayRef;this._detach()}let t=this._injector.get(He).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${Ma}`,r=gt(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return r.positionChanges.pipe(q(this._destroyed)).subscribe(o=>{this._updateCurrentPositionClass(o.connectionPair),this._tooltipInstance&&o.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=bt(this._injector,{direction:this._dir,positionStrategy:r,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(Rr)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(q(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(q(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(q(this._destroyed)).subscribe(o=>{o.preventDefault(),o.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(q(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,n=this._getOrigin(),r=this._getOverlayPosition();t.withPositions([this._addOffset(P(P({},n.main),r.main)),this._addOffset(P(P({},n.fallback),r.fallback))])}_addOffset(e){let t=Fr,n=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=n?-t:t:e.originX==="end"&&(e.offsetX=n?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"||t=="below"?n={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={originX:"end",originY:"center"});let{x:r,y:o}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:r,originY:o}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"?n={overlayX:"center",overlayY:"bottom"}:t=="below"?n={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={overlayX:"start",overlayY:"center"});let{x:r,y:o}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:r,overlayY:o}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),re(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:n,originY:r}=e,o;if(t==="center"?this._dir&&this._dir.value==="rtl"?o=n==="end"?"left":"right":o=n==="start"?"left":"right":o=t==="bottom"&&r==="top"?"above":"below",o!==this._currentPosition){let l=this._overlayRef;if(l){let h=`${this._cssClassPrefix}-${Ma}-`;l.removePanelClass(h+this._currentPosition),l.addPanelClass(h+o)}this._currentPosition=o}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],n=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let r=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??r)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),n=this._elementRef.nativeElement;t!==n&&!n.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Tr))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,n=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect="none"),(e==="on"||!t.draggable)&&(n.webkitUserDrag="none"),n.touchAction="none",n.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||re({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Bt(e):!0;static \u0275fac=function(t){return new(t||a)};static \u0275dir=B({type:a,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,n){t&2&&j("mat-mdc-tooltip-disabled",n.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return a})(),Lr=(()=>{class a{_changeDetectorRef=s(ee);_elementRef=s(M);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=_e();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new w;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Vr&&e.width>=Nr}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,n=this._showAnimation,r=this._hideAnimation;if(t.classList.remove(e?r:n),t.classList.add(e?n:r),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let o=getComputedStyle(t);(o.getPropertyValue("animation-duration")==="0s"||o.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["mat-tooltip-component"]],viewQuery:function(t,n){if(t&1&&ce(Ar,7),t&2){let r;Q(r=J())&&(n._tooltip=r.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,n){t&1&&R("mouseleave",function(o){return n._handleMouseLeave(o)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,n){if(t&1){let r=fe();U(0,"div",1,0),Rt("animationend",function(l){return V(r),N(n._handleAnimationEnd(l))}),U(2,"div",2),m(3),G()()}t&2&&(De(n.tooltipClass),j("mdc-tooltip--multiline",n._isMultiline),p(3),we(n.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return a})();var Br=["mat-calendar-body",""];function zr(a,i){return this._trackRow(i)}var Pa=(a,i)=>i.id;function Yr(a,i){if(a&1&&(U(0,"tr",0)(1,"td",3),m(2),G()()),a&2){let e=k();p(),tt("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),K("colspan",e.numCols),p(),Ne(" ",e.label," ")}}function jr(a,i){if(a&1&&(U(0,"td",3),m(1),G()),a&2){let e=k(2);tt("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),K("colspan",e._firstRowOffset),p(),Ne(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function Hr(a,i){if(a&1){let e=fe();U(0,"td",6)(1,"button",7),Rt("click",function(n){let r=V(e).$implicit,o=k(2);return N(o._cellClicked(r,n))})("focus",function(n){let r=V(e).$implicit,o=k(2);return N(o._emitActiveDateChange(r,n))}),U(2,"span",8),m(3),G(),pe(4,"span",9),G()()}if(a&2){let e=i.$implicit,t=i.$index,n=k().$index,r=k();tt("width",r._cellWidth)("padding-top",r._cellPadding)("padding-bottom",r._cellPadding),K("data-mat-row",n)("data-mat-col",t),p(),De(e.cssClasses),j("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",r._isActiveCell(n,t))("mat-calendar-body-range-start",r._isRangeStart(e.compareValue))("mat-calendar-body-range-end",r._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",r._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",r._isComparisonBridgeStart(e.compareValue,n,t))("mat-calendar-body-comparison-bridge-end",r._isComparisonBridgeEnd(e.compareValue,n,t))("mat-calendar-body-comparison-start",r._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",r._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",r._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",r._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",r._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",r._isInPreview(e.compareValue)),Ve("tabIndex",r._isActiveCell(n,t)?0:-1),K("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",r._isSelected(e.compareValue))("aria-current",r.todayValue===e.compareValue?"date":null)("aria-describedby",r._getDescribedby(e.compareValue)),p(),j("mat-calendar-body-selected",r._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",r._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",r.todayValue===e.compareValue),p(),Ne(" ",e.displayValue," ")}}function Wr(a,i){if(a&1&&(U(0,"tr",1),Je(1,jr,2,6,"td",4),At(2,Hr,5,49,"td",5,Pa),G()),a&2){let e=i.$implicit,t=i.$index,n=k();p(),et(t===0&&n._firstRowOffset?1:-1),p(),Ot(e)}}function Ur(a,i){if(a&1&&(d(0,"th",2)(1,"span",6),m(2),c(),d(3,"span",3),m(4),c()()),a&2){let e=i.$implicit;p(2),we(e.long),p(2),we(e.narrow)}}var Xr=["*"];function Gr(a,i){}function Kr(a,i){if(a&1){let e=fe();d(0,"mat-month-view",4),Pt("activeDateChange",function(n){V(e);let r=k();return Tt(r.activeDate,n)||(r.activeDate=n),N(n)}),R("_userSelection",function(n){V(e);let r=k();return N(r._dateSelected(n))})("dragStarted",function(n){V(e);let r=k();return N(r._dragStarted(n))})("dragEnded",function(n){V(e);let r=k();return N(r._dragEnded(n))}),c()}if(a&2){let e=k();It("activeDate",e.activeDate),z("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function Zr(a,i){if(a&1){let e=fe();d(0,"mat-year-view",5),Pt("activeDateChange",function(n){V(e);let r=k();return Tt(r.activeDate,n)||(r.activeDate=n),N(n)}),R("monthSelected",function(n){V(e);let r=k();return N(r._monthSelectedInYearView(n))})("selectedChange",function(n){V(e);let r=k();return N(r._goToDateInView(n,"month"))}),c()}if(a&2){let e=k();It("activeDate",e.activeDate),z("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function $r(a,i){if(a&1){let e=fe();d(0,"mat-multi-year-view",6),Pt("activeDateChange",function(n){V(e);let r=k();return Tt(r.activeDate,n)||(r.activeDate=n),N(n)}),R("yearSelected",function(n){V(e);let r=k();return N(r._yearSelectedInMultiYearView(n))})("selectedChange",function(n){V(e);let r=k();return N(r._goToDateInView(n,"year"))}),c()}if(a&2){let e=k();It("activeDate",e.activeDate),z("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function qr(a,i){}var Qr=["button"],Jr=[[["","matDatepickerToggleIcon",""]]],eo=["[matDatepickerToggleIcon]"];function to(a,i){a&1&&($e(),d(0,"svg",2),Y(1,"path",3),c())}var Ke=(()=>{class a{changes=new w;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||a)};static \u0275prov=f({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),no=0,yt=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=no++;cssClasses;constructor(i,e,t,n,r,o=i,l){this.value=i,this.displayValue=e,this.ariaLabel=t,this.enabled=n,this.compareValue=o,this.rawValue=l,this.cssClasses=r instanceof Set?Array.from(r):r}},io={passive:!1,capture:!0},tn={passive:!0,capture:!0},Aa={passive:!0},Ge=(()=>{class a{_elementRef=s(M);_ngZone=s(v);_platform=s(D);_intl=s(Ke);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new b;previewChange=new b;activeDateChange=new b;dragStarted=new b;dragEnded=new b;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=s(T);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=s(le),t=s(ke);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),s(H).load(Ht),this._ngZone.runOutsideAngular(()=>{let n=this._elementRef.nativeElement,r=[e.listen(n,"touchmove",this._touchmoveHandler,io),e.listen(n,"mouseenter",this._enterHandler,tn),e.listen(n,"focus",this._enterHandler,tn),e.listen(n,"mouseleave",this._leaveHandler,tn),e.listen(n,"blur",this._leaveHandler,tn),e.listen(n,"mousedown",this._mousedownHandler,Aa),e.listen(n,"touchstart",this._mousedownHandler,Aa)];this._platform.isBrowser&&r.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=r})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:n,numCols:r}=this;(e.rows||t)&&(this._firstRowOffset=n&&n.length&&n[0].length?r-n[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/r}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/r}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let n=e*this.numCols+t;return e&&(n-=this._firstRowOffset),n==this.activeCell}_focusActiveCell(e=!0){re(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return $n(e,this.startValue,this.endValue)}_isRangeEnd(e){return qn(e,this.startValue,this.endValue)}_isInRange(e){return Qn(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return $n(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,n){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let r=this.rows[t][n-1];if(!r){let o=this.rows[t-1];r=o&&o[o.length-1]}return r&&!this._isRangeEnd(r.compareValue)}_isComparisonBridgeEnd(e,t,n){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let r=this.rows[t][n+1];if(!r){let o=this.rows[t+1];r=o&&o[0]}return r&&!this._isRangeStart(r.compareValue)}_isComparisonEnd(e){return qn(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Qn(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return $n(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return qn(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Qn(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Oa(e),n=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),Zn(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:n?.enabled?n:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=Zn(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let n=this._getCellFromElement(t);this.dragEnded.emit({value:n?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Oa(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=Zn(e);if(t){let n=t.getAttribute("data-mat-row"),r=t.getAttribute("data-mat-col");if(n&&r)return this.rows[parseInt(n)]?.[parseInt(r)]||null}return null}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[me],attrs:Br,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,n){t&1&&(Je(0,Yr,3,6,"tr",0),At(1,Wr,4,1,"tr",1,zr,!0),U(3,"span",2),m(4),G(),U(5,"span",2),m(6),G(),U(7,"span",2),m(8),G(),U(9,"span",2),m(10),G()),t&2&&(et(n._firstRowOffset<n.labelMinRequiredCells?0:-1),p(),Ot(n.rows),p(2),Ve("id",n._startDateLabelId),p(),Ne(" ",n.startDateAccessibleName,`
`),p(),Ve("id",n._endDateLabelId),p(),Ne(" ",n.endDateAccessibleName,`
`),p(),Ve("id",n._comparisonStartDateLabelId),p(),hn(" ",n.comparisonDateAccessibleName," ",n.startDateAccessibleName,`
`),p(),Ve("id",n._comparisonEndDateLabelId),p(),hn(" ",n.comparisonDateAccessibleName," ",n.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return a})();function Kn(a){return a?.nodeName==="TD"}function Zn(a){let i;return Kn(a)?i=a:Kn(a.parentNode)?i=a.parentNode:Kn(a.parentNode?.parentNode)&&(i=a.parentNode.parentNode),i?.getAttribute("data-mat-row")!=null?i:null}function $n(a,i,e){return e!==null&&i!==e&&a<e&&a===i}function qn(a,i,e){return i!==null&&i!==e&&a>=i&&a===e}function Qn(a,i,e,t){return t&&i!==null&&e!==null&&i!==e&&a>=i&&a<=e}function Oa(a){let i=a.changedTouches[0];return document.elementFromPoint(i.clientX,i.clientY)}var ae=class{start;end;_disableStructuralEquivalency;constructor(i,e){this.start=i,this.end=e}},nn=(()=>{class a{selection;_adapter;_selectionChanged=new w;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let n=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:n})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){gi()};static \u0275prov=f({token:a,factory:a.\u0275fac})}return a})(),ao=(()=>{class a extends nn{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new a(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||a)(fi(Z))};static \u0275prov=f({token:a,factory:a.\u0275fac})}return a})();var ro={provide:nn,useFactory:()=>s(nn,{optional:!0,skipSelf:!0})||new ao(s(Z))};var Fa=new x("MAT_DATE_RANGE_SELECTION_STRATEGY");var Jn=7,oo=0,Ra=(()=>{class a{_changeDetectorRef=s(ee);_dateFormats=s(Ae,{optional:!0});_dateAdapter=s(Z,{optional:!0});_dir=s(ge,{optional:!0});_rangeStrategy=s(Fa,{optional:!0});_rerenderSubscription=he.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof ae?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new b;_userSelection=new b;dragStarted=new b;dragEnded=new b;activeDateChange=new b;_matCalendarBody;_monthLabel=E("");_weeks=E([]);_firstWeekOffset=E(0);_rangeStart=E(null);_rangeEnd=E(null);_comparisonRangeStart=E(null);_comparisonRangeEnd=E(null);_previewStart=E(null);_previewEnd=E(null);_isRange=E(!1);_todayDate=E(null);_weekdays=E([]);constructor(){s(H).load(Ce),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Me(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,n=this._getDateFromDayOfMonth(t),r,o;this._selected instanceof ae?(r=this._getDateInCurrentMonth(this._selected.start),o=this._getDateInCurrentMonth(this._selected.end)):r=o=this._getDateInCurrentMonth(this._selected),(r!==t||o!==t)&&this.selectedChange.emit(n),this._userSelection.emit({value:n,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!Bt(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Jn+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Jn),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let n=t?t.rawValue:null,r=this._rangeStrategy.createPreview(n,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(r.start)),this._previewEnd.set(this._getCellCompareValue(r.end)),this.activeDrag&&n){let o=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,n,e);o&&(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),r=this._dateAdapter.getDayOfWeekNames("long").map((o,l)=>({long:o,narrow:t[l],id:oo++}));this._weekdays.set(r.slice(e).concat(r.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),n=[[]];for(let r=0,o=this._firstWeekOffset();r<e;r++,o++){o==Jn&&(n.push([]),o=0);let l=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),r+1),h=this._shouldEnableDate(l),_=this._dateAdapter.format(l,this._dateFormats.display.dateA11yLabel),u=this.dateClass?this.dateClass(l,"month"):void 0;n[n.length-1].push(new yt(r+1,t[r],_,h,u,this._getCellCompareValue(l),l))}this._weeks.set(n)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),n=this._dateAdapter.getMonth(e),r=this._dateAdapter.getDate(e);return new Date(t,n,r).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof ae?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["mat-month-view"]],viewQuery:function(t,n){if(t&1&&ce(Ge,5),t&2){let r;Q(r=J())&&(n._matCalendarBody=r.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[me],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,n){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),At(3,Ur,5,2,"th",2,Pa),c(),d(5,"tr",3),Y(6,"th",4),c()(),d(7,"tbody",5),R("selectedValueChange",function(o){return n._dateSelected(o)})("activeDateChange",function(o){return n._updateActiveDate(o)})("previewChange",function(o){return n._previewChanged(o)})("dragStarted",function(o){return n.dragStarted.emit(o)})("dragEnded",function(o){return n._dragEnded(o)})("keyup",function(o){return n._handleCalendarBodyKeyup(o)})("keydown",function(o){return n._handleCalendarBodyKeydown(o)}),c()()),t&2&&(p(3),Ot(n._weekdays()),p(4),z("label",n._monthLabel())("rows",n._weeks())("todayValue",n._todayDate())("startValue",n._rangeStart())("endValue",n._rangeEnd())("comparisonStart",n._comparisonRangeStart())("comparisonEnd",n._comparisonRangeEnd())("previewStart",n._previewStart())("previewEnd",n._previewEnd())("isRange",n._isRange())("labelMinRequiredCells",3)("activeCell",n._dateAdapter.getDate(n.activeDate)-1)("startDateAccessibleName",n.startDateAccessibleName)("endDateAccessibleName",n.endDateAccessibleName))},dependencies:[Ge],encapsulation:2,changeDetection:0})}return a})(),te=24,ei=4,Ia=(()=>{class a{_changeDetectorRef=s(ee);_dateAdapter=s(Z,{optional:!0});_dir=s(ge,{optional:!0});_rerenderSubscription=he.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),Va(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof ae?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new b;yearSelected=new b;activeDateChange=new b;_matCalendarBody;_years=E([]);_todayYear=E(0);_selectedYear=E(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Me(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-vt(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),n=[];for(let r=0,o=[];r<te;r++)o.push(t+r),o.length==ei&&(n.push(o.map(l=>this._createCellForYear(l))),o=[]);this._years.set(n),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,n=this._dateAdapter.createDate(t,0,1),r=this._getDateFromYear(t);this.yearSelected.emit(n),this.selectedChange.emit(r)}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-ei);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,ei);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-vt(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,te-vt(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-te*10:-te);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?te*10:te);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return vt(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),n=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),n))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),n=this._dateAdapter.getYearName(t),r=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new yt(e,n,n,this._shouldEnableYear(e),r)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let n=t;this._dateAdapter.getYear(n)==e;n=this._dateAdapter.addCalendarDays(n,1))if(this.dateFilter(n))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof ae){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["mat-multi-year-view"]],viewQuery:function(t,n){if(t&1&&ce(Ge,5),t&2){let r;Q(r=J())&&(n._matCalendarBody=r.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,n){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),Y(3,"th",2),c()(),d(4,"tbody",3),R("selectedValueChange",function(o){return n._yearSelected(o)})("activeDateChange",function(o){return n._updateActiveDate(o)})("keyup",function(o){return n._handleCalendarBodyKeyup(o)})("keydown",function(o){return n._handleCalendarBodyKeydown(o)}),c()()),t&2&&(p(4),z("rows",n._years())("todayValue",n._todayYear())("startValue",n._selectedYear())("endValue",n._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",n._getActiveCell()))},dependencies:[Ge],encapsulation:2,changeDetection:0})}return a})();function Va(a,i,e,t,n){let r=a.getYear(i),o=a.getYear(e),l=Na(a,t,n);return Math.floor((r-l)/te)===Math.floor((o-l)/te)}function vt(a,i,e,t){let n=a.getYear(i);return so(n-Na(a,e,t),te)}function Na(a,i,e){let t=0;return e?t=a.getYear(e)-te+1:i&&(t=a.getYear(i)),t}function so(a,i){return(a%i+i)%i}var Ta=(()=>{class a{_changeDetectorRef=s(ee);_dateFormats=s(Ae,{optional:!0});_dateAdapter=s(Z,{optional:!0});_dir=s(ge,{optional:!0});_rerenderSubscription=he.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof ae?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new b;monthSelected=new b;activeDateChange=new b;_matCalendarBody;_months=E([]);_yearLabel=E("");_todayMonth=E(null);_selectedMonth=E(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Me(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(n);let r=this._getDateFromMonth(t);this.selectedChange.emit(r)}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(n=>this._createCellForMonth(n,e[n])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),n=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),n))}_createCellForMonth(e,t){let n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),r=this._dateAdapter.format(n,this._dateFormats.display.monthYearA11yLabel),o=this.dateClass?this.dateClass(n,"year"):void 0;return new yt(e,t.toLocaleUpperCase(),r,this._shouldEnableMonth(e),o)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let n=this._dateAdapter.createDate(t,e,1);for(let r=n;this._dateAdapter.getMonth(r)==e;r=this._dateAdapter.addCalendarDays(r,1))if(this.dateFilter(r))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let n=this._dateAdapter.getYear(this.maxDate),r=this._dateAdapter.getMonth(this.maxDate);return e>n||e===n&&t>r}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let n=this._dateAdapter.getYear(this.minDate),r=this._dateAdapter.getMonth(this.minDate);return e<n||e===n&&t<r}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof ae?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["mat-year-view"]],viewQuery:function(t,n){if(t&1&&ce(Ge,5),t&2){let r;Q(r=J())&&(n._matCalendarBody=r.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,n){t&1&&(d(0,"table",0)(1,"thead",1)(2,"tr"),Y(3,"th",2),c()(),d(4,"tbody",3),R("selectedValueChange",function(o){return n._monthSelected(o)})("activeDateChange",function(o){return n._updateActiveDate(o)})("keyup",function(o){return n._handleCalendarBodyKeyup(o)})("keydown",function(o){return n._handleCalendarBodyKeydown(o)}),c()()),t&2&&(p(4),z("label",n._yearLabel())("rows",n._months())("todayValue",n._todayMonth())("startValue",n._selectedMonth())("endValue",n._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",n._dateAdapter.getMonth(n.activeDate)))},dependencies:[Ge],encapsulation:2,changeDetection:0})}return a})(),La=(()=>{class a{_intl=s(Ke);calendar=s(Dt);_dateAdapter=s(Z,{optional:!0});_dateFormats=s(Ae,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){s(H).load(Ce);let e=s(ee);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-te))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:te))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,n=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=n.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=n.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=n.getYearName(e.activeDate),this._periodButtonDescription=n.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):Va(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-vt(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),n=t+te-1,r=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),o=this._dateAdapter.getYearName(this._dateAdapter.createDate(n,0,1));return[r,o]}_periodButtonLabelId=s(ke).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:Xr,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,n){t&1&&(ye(),d(0,"div",0)(1,"div",1)(2,"span",2),m(3),c(),d(4,"button",3),R("click",function(){return n.currentPeriodClicked()}),d(5,"span",4),m(6),c(),$e(),d(7,"svg",5),Y(8,"polygon",6),c()(),cn(),Y(9,"div",7),de(10),d(11,"button",8),R("click",function(){return n.previousClicked()}),$e(),d(12,"svg",9),Y(13,"path",10),c()(),cn(),d(14,"button",11),R("click",function(){return n.nextClicked()}),$e(),d(15,"svg",9),Y(16,"path",12),c()()()()),t&2&&(p(2),z("id",n._periodButtonLabelId),p(),we(n.periodButtonDescription),p(),K("aria-label",n.periodButtonLabel)("aria-describedby",n._periodButtonLabelId),p(2),we(n.periodButtonText),p(),j("mat-calendar-invert",n.calendar.currentView!=="month"),p(4),z("disabled",!n.previousEnabled())("matTooltip",n.prevButtonLabel),K("aria-label",n.prevButtonLabel),p(3),z("disabled",!n.nextEnabled())("matTooltip",n.nextButtonLabel),K("aria-label",n.nextButtonLabel))},dependencies:[Xn,en,Sa],encapsulation:2,changeDetection:0})}return a})(),Dt=(()=>{class a{_dateAdapter=s(Z,{optional:!0});_dateFormats=s(Ae,{optional:!0});_changeDetectorRef=s(ee);_elementRef=s(M);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof ae?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new b;yearSelected=new b;monthSelected=new b;viewChanged=new b(!0);_userSelection=new b;_userDragDrop=new b;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new w;constructor(){this._intlChanges=s(Ke).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new Ie(this.headerComponent||La),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,n=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,r=t||n||e.dateFilter;if(r&&!r.firstChange){let o=this._getCurrentViewComponent();o&&(this._elementRef.nativeElement.contains(rt())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),o._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof ae||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["mat-calendar"]],viewQuery:function(t,n){if(t&1&&ce(Ra,5)(Ta,5)(Ia,5),t&2){let r;Q(r=J())&&(n.monthView=r.first),Q(r=J())&&(n.yearView=r.first),Q(r=J())&&(n.multiYearView=r.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[Ft([ro]),me],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,n){if(t&1&&(qe(0,Gr,0,0,"ng-template",0),d(1,"div",1),Je(2,Kr,1,11,"mat-month-view",2)(3,Zr,1,6,"mat-year-view",3)(4,$r,1,6,"mat-multi-year-view",3),c()),t&2){let r;z("cdkPortalOutlet",n._calendarHeaderPortal),p(2),et((r=n.currentView)==="month"?2:r==="year"?3:r==="multi-year"?4:-1)}},dependencies:[Ln,vn,Ra,Ta,Ia],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return a})();var lo=(()=>{class a{_elementRef=s(M);_animationsDisabled=_e();_changeDetectorRef=s(ee);_globalModel=s(nn);_dateAdapter=s(Z);_ngZone=s(v);_rangeSelectionStrategy=s(Fa,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new w;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(s(H).load(Ce),this._closeButtonText=s(Ke).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=s(le);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,n=e.value,r=t instanceof ae;if(r&&this._rangeSelectionStrategy){let o=this._rangeSelectionStrategy.selectionFinished(n,t,e.event);this._model.updateSelection(o,this)}else n&&(r||!this._dateAdapter.sameDate(n,t))&&this._model.add(n);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["mat-datepicker-content"]],viewQuery:function(t,n){if(t&1&&ce(Dt,5),t&2){let r;Q(r=J())&&(n._calendar=r.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,n){t&2&&(De(n.color?"mat-"+n.color:""),j("mat-datepicker-content-touch",n.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!n._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,n){t&1&&(d(0,"div",0)(1,"mat-calendar",1),R("yearSelected",function(o){return n.datepicker._selectYear(o)})("monthSelected",function(o){return n.datepicker._selectMonth(o)})("viewChanged",function(o){return n.datepicker._viewChanged(o)})("_userSelection",function(o){return n._handleUserSelection(o)})("_userDragDrop",function(o){return n._handleUserDragDrop(o)}),c(),qe(2,qr,0,0,"ng-template",2),d(3,"button",3),R("focus",function(){return n._closeButtonFocused=!0})("blur",function(){return n._closeButtonFocused=!1})("click",function(){return n.datepicker.close()}),m(4),c()()),t&2&&(j("mat-datepicker-content-container-with-custom-header",n.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",n._actionsPortal),K("aria-modal",!0)("aria-labelledby",n._dialogLabelId??void 0),p(),De(n.datepicker.panelClass),z("id",n.datepicker.id)("startAt",n.datepicker.startAt)("startView",n.datepicker.startView)("minDate",n.datepicker._getMinDate())("maxDate",n.datepicker._getMaxDate())("dateFilter",n.datepicker._getDateFilter())("headerComponent",n.datepicker.calendarHeaderComponent)("selected",n._getSelected())("dateClass",n.datepicker.dateClass)("comparisonStart",n.comparisonStart)("comparisonEnd",n.comparisonEnd)("startDateAccessibleName",n.startDateAccessibleName)("endDateAccessibleName",n.endDateAccessibleName),p(),z("cdkPortalOutlet",n._actionsPortal),p(),j("cdk-visually-hidden",!n._closeButtonFocused),z("color",n.color||"primary"),p(),we(n._closeButtonText))},dependencies:[wn,Dt,Ln,Xn],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return a})();var co=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275dir=B({type:a,selectors:[["","matDatepickerToggleIcon",""]]})}return a})(),uo=(()=>{class a{_intl=s(Ke);_changeDetectorRef=s(ee);_stateChanges=he.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=s(new yi("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:be(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:be(),n=this.datepicker?on(this.datepicker.openedStream,this.datepicker.closedStream):be();this._stateChanges.unsubscribe(),this._stateChanges=on(this._intl.changes,e,t,n).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=y({type:a,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,n,r){if(t&1&&bi(r,co,5),t&2){let o;Q(o=J())&&(n._customIcon=o.first)}},viewQuery:function(t,n){if(t&1&&ce(Qr,5),t&2){let r;Q(r=J())&&(n._button=r.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,n){t&1&&R("click",function(o){return n._open(o)}),t&2&&(K("tabindex",null)("data-mat-calendar",n.datepicker?n.datepicker.id:null),j("mat-datepicker-toggle-active",n.datepicker&&n.datepicker.opened)("mat-accent",n.datepicker&&n.datepicker.color==="accent")("mat-warn",n.datepicker&&n.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",ne],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[me],ngContentSelectors:eo,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,n){t&1&&(ye(Jr),d(0,"button",1,0),Je(2,to,2,0,":svg:svg",2),de(3),c()),t&2&&(z("tabIndex",n.disabled?-1:n.tabIndex)("disabled",n.disabled)("disableRipple",n.disableRipple),K("aria-haspopup",n.datepicker?"dialog":null)("aria-label",n.ariaLabel||n._intl.openCalendarLabel)("aria-expanded",n.datepicker?n.datepicker.opened:null),p(2),et(n._customIcon?-1:2))},dependencies:[en],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return a})();var Ba=(()=>{class a{static \u0275fac=function(t){return new(t||a)};static \u0275mod=O({type:a});static \u0275inj=A({providers:[Ke],imports:[Ea,Wn,Cn,Gt,lo,uo,La,se,ct]})}return a})();function mo(a,i){if(a&1){let e=fe();d(0,"div",26)(1,"div",27)(2,"p")(3,"span")(4,"b"),m(5," Calendar"),c()()(),d(6,"span",28),R("click",function(){V(e);let n=k();return N(n.toggleCalendar())}),m(7,"\u2716"),c()(),d(8,"mat-calendar",29),R("selectedChange",function(n){V(e);let r=k();return N(r.onDateSelect(n))}),c()()}}var za=class a{constructor(i,e,t,n,r){this.router=i;this.platformId=e;this.predictionService=t;this.taskService=n;this.cdr=r}predictedPerformance;topSubject;averageSubject;weakSubject;aiRecommendations=[];startTracking(){if(!nt(this.platformId))return;localStorage.getItem("token")?this.router.navigate(["/add-task"]):this.router.navigate(["/login"])}ngOnInit(){if(!nt(this.platformId))return;if(!localStorage.getItem("token")){alert("Please login first"),this.router.navigate(["/login"]);return}let e=localStorage.getItem("userId");this.predictionService.getPrediction(e).subscribe(t=>{this.predictedPerformance=t.predicted_performance}),this.taskService.getSubjectPrediction().subscribe(t=>{let n=typeof t.result=="string"?JSON.parse(t.result):t.result||t;n.sort((o,l)=>l.performance-o.performance),this.topSubject=n[0],this.weakSubject=n[n.length-1];let r=Math.floor(n.length/2);this.averageSubject=n[r],setTimeout(()=>{this.cdr.detectChanges()},0)}),this.taskService.getAIRecommendations().subscribe(t=>{this.aiRecommendations=typeof t.result=="string"?JSON.parse(t.result):t.result,this.cdr.detectChanges()})}goToArticles(){this.router.navigate(["/articles"])}showCalendar=!1;toggleCalendar(){this.showCalendar=!this.showCalendar}onDateSelect(i){console.log("Selected:",i)}standards=[{name:"1st Standard",desc:"Basics Learning",image:"assets/assets1.png"},{name:"2nd Standard",desc:"Early Skills",image:"assets/assets2.png"},{name:"3rd Standard",desc:"Foundation",image:"assets/assets3.png"},{name:"4th Standard",desc:"Concept Growth",image:"assets/assets4.png"},{name:"5th Standard",desc:"Core Subjects",image:"assets/assets5.png"},{name:"6th Standard",desc:"Advanced Basics",image:"assets/assets6.png"},{name:"7th Standard",desc:"Skill Building",image:"assets/assets7.png"},{name:"8th Standard",desc:"Strong Base",image:"assets/assets8.png"},{name:"9th Standard",desc:"Concept Focus",image:"assets/assets9.png"},{name:"10th Standard",desc:"Board Prep",image:"assets/assets10.png"},{name:"11th Standard",desc:"Stream Start",image:"assets/assets11.png"},{name:"12th Standard",desc:"Career Ready",image:"assets/assets12.png"}];static \u0275fac=function(e){return new(e||a)(Fe(ki),Fe(Mt),Fe(Ei),Fe(Mi),Fe(ee))};static \u0275cmp=y({type:a,selectors:[["app-home"]],decls:99,vars:1,consts:[[1,"hero"],[1,"hero-content"],[1,"hero-buttons"],[1,"start-btn",3,"click"],[1,"explore-btn",3,"click"],[1,"hero-stats"],[1,"hero-slider"],[1,"slide-track"],["src","assets/student1.jpg"],["src","assets/student2.jpg"],["src","assets/student3.jpg"],[1,"ai-home-grid"],[1,"feature-strip"],[1,"feature-item"],[1,"feature-icon","purple"],[1,"feature-icon","blue"],[1,"feature-icon","orange"],[1,"feature-icon","green"],[1,"articles"],[1,"article-grid"],[1,"article-card"],["src","assets/article1.jpeg"],["src","assets/article2.jpg"],["src","assets/article3.png"],[1,"calendar-float",3,"click"],["class","calendar-panel",4,"ngIf"],[1,"calendar-panel"],[1,"calendar-header"],[1,"close-btn",3,"click"],[3,"selectedChange"]],template:function(e,t){e&1&&(d(0,"section",0)(1,"div",1)(2,"h1"),m(3," Track Your Study "),Y(4,"br"),d(5,"span"),m(6,"Performance Smartly"),c()(),d(7,"p"),m(8," Manage tasks, track academic progress, and improve learning efficiency using "),Y(9,"br"),m(10," the Student Performance Tracker. "),c(),d(11,"div",2)(12,"button",3),R("click",function(){return t.startTracking()}),m(13,"Start Tracking"),c(),d(14,"button",4),R("click",function(){return t.goToArticles()}),m(15,"Explore Guidance"),c()(),d(16,"div",5)(17,"div")(18,"strong"),m(19,"500+"),c(),d(20,"p"),m(21,"Students"),c()(),d(22,"div")(23,"strong"),m(24,"1200+"),c(),d(25,"p"),m(26,"Tasks"),c()(),d(27,"div")(28,"strong"),m(29,"300+"),c(),d(30,"p"),m(31,"Articles"),c()()()(),d(32,"div",6)(33,"div",7),Y(34,"img",8)(35,"img",9)(36,"img",10)(37,"img",8)(38,"img",9)(39,"img",10),c()()(),Y(40,"div",11),d(41,"div",12)(42,"div",13)(43,"div",14),m(44," \u{1F4CA} "),c(),d(45,"div")(46,"h3"),m(47,"Track Progress"),c(),d(48,"p"),m(49," Monitor your daily and weekly academic progress. "),c()()(),d(50,"div",13)(51,"div",15),m(52," \u{1F916} "),c(),d(53,"div")(54,"h3"),m(55,"AI Predictions"),c(),d(56,"p"),m(57," Get AI-powered predictions about your performance. "),c()()(),d(58,"div",13)(59,"div",16),m(60," \u{1F4A1} "),c(),d(61,"div")(62,"h3"),m(63,"Smart Recommendations"),c(),d(64,"p"),m(65," Receive personalized study tips and suggestions. "),c()()(),d(66,"div",13)(67,"div",17),m(68," \u{1F3AF} "),c(),d(69,"div")(70,"h3"),m(71,"Achieve Goals"),c(),d(72,"p"),m(73," Stay consistent and achieve your academic goals. "),c()()()(),d(74,"section",18)(75,"h2"),m(76,"Popular Guidance Articles"),c(),d(77,"div",19)(78,"div",20),Y(79,"img",21),d(80,"h3"),m(81,"Study Time Management"),c(),d(82,"p"),m(83,"Learn how to organize study schedules effectively."),c()(),d(84,"div",20),Y(85,"img",22),d(86,"h3"),m(87,"Exam Preparation Tips"),c(),d(88,"p"),m(89,"Smart strategies to prepare for exams efficiently."),c()(),d(90,"div",20),Y(91,"img",23),d(92,"h3"),m(93,"Improve Concentration"),c(),d(94,"p"),m(95,"Techniques to increase focus during study."),c()()()(),d(96,"div",24),R("click",function(){return t.toggleCalendar()}),m(97,"\u{1F4C5}"),c(),qe(98,mo,9,0,"div",25)),e&2&&(p(98),z("ngIf",t.showCalendar))},dependencies:[xi,Ci,Ba,Dt,oa],styles:[".hero[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:80px;background:#0f0033;color:#fff;min-height:90vh}.hero-content[_ngcontent-%COMP%]{width:50%}.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:56px;font-weight:700;line-height:1.2;letter-spacing:.5px}.hero[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:linear-gradient(90deg,#a855f7,#c084fc);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:20px 0;opacity:.8}.hero-buttons[_ngcontent-%COMP%]{display:flex;gap:15px;margin-top:20px}.btn-primary[_ngcontent-%COMP%]{background:#6d5dfc;color:#fff;padding:12px 25px;border:none;border-radius:8px}.btn-secondary[_ngcontent-%COMP%]{border:1px solid #6d5dfc;background:transparent;color:#fff;padding:12px 25px;border-radius:8px}.hero-stats[_ngcontent-%COMP%]{display:flex;gap:40px;margin-top:30px}.hero-images[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:160px;border-radius:12px;margin:10px}.trusted[_ngcontent-%COMP%]{text-align:center;padding:60px;background:#f8fafc}.logos[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:60px;margin-top:20px;opacity:.6}.standards[_ngcontent-%COMP%]{padding:80px 40px;background:#f8fafc}.section-title[_ngcontent-%COMP%]{font-size:30px;margin-bottom:30px}.scroll-container[_ngcontent-%COMP%]{display:flex;gap:20px;overflow-x:auto;padding-bottom:10px}.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar{height:6px}.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:10px}.standard-card[_ngcontent-%COMP%]{min-width:260px;height:120px;background:#fff;border-radius:16px;display:flex;justify-content:space-between;align-items:center;padding:20px;box-shadow:0 8px 20px #00000014;transition:.3s;cursor:pointer}.standard-card[_ngcontent-%COMP%]:hover{transform:translateY(-6px);box-shadow:0 15px 30px #00000026}.card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:18px}.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#64748b}.standard-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px;height:110px;object-fit:contain}.article-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:30px;padding:80px}.article-card[_ngcontent-%COMP%]{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 8px 20px #0000001a}.article-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:180px;object-fit:cover}.article-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding:15px}.article-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 15px 20px}.hero-slider[_ngcontent-%COMP%]{overflow:hidden;width:50%;padding:20px 0}.slide-track[_ngcontent-%COMP%]{display:flex;width:1800px;animation:_ngcontent-%COMP%_scroll 18s linear infinite}.slide-track[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:300px;height:220px;margin-right:20px;border-radius:15px;object-fit:cover}.hero-buttons[_ngcontent-%COMP%]{display:flex;gap:20px;margin-top:20px}.start-btn[_ngcontent-%COMP%]{padding:12px 28px;border-radius:30px;border:none;cursor:pointer;font-size:16px;font-weight:500;color:#fff;background:linear-gradient(135deg,#7b2ff7,#9f44d3);transition:all .3s ease;box-shadow:0 4px 15px #7b2ff766}.start-btn[_ngcontent-%COMP%]:hover{transform:translateY(-3px) scale(1.03);box-shadow:0 8px 25px #7b2ff799}.explore-btn[_ngcontent-%COMP%]{padding:12px 28px;border-radius:30px;cursor:pointer;font-size:16px;font-weight:500;background:transparent;color:#fff;border:2px solid #9f44d3;transition:all .3s ease}.explore-btn[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#7b2ff7,#9f44d3);border:none;transform:translateY(-3px)}@keyframes _ngcontent-%COMP%_scroll{0%{transform:translate(0)}to{transform:translate(-50%)}}.calendar-float[_ngcontent-%COMP%]{position:fixed;right:20px;bottom:80px;width:55px;height:55px;background:linear-gradient(135deg,#7b2ff7,#9f44d3);color:#eae6e6;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;cursor:pointer;z-index:1000}.calendar-panel[_ngcontent-%COMP%]{position:fixed;right:20px;bottom:150px;width:320px;padding:15px;background:linear-gradient(135deg,#bb84df,#3b0ca3);border-radius:15px;box-shadow:0 10px 30px #00000080;z-index:1000;animation:_ngcontent-%COMP%_slideUp .3s ease}.calendar-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:-10px;color:#fff;font-size:20px}.close-btn[_ngcontent-%COMP%]{cursor:pointer}@keyframes _ngcontent-%COMP%_slideUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}  .mat-calendar{background:transparent;color:#fff}  .mat-calendar-body-selected{background:#b48eca!important}.ai-home-grid[_ngcontent-%COMP%]{width:92%;margin:40px auto;display:grid;grid-template-columns:repeat(3,1fr);gap:24px}.ai-card[_ngcontent-%COMP%]{background:#fff;border-radius:25px;padding:25px;box-shadow:0 10px 25px #00000014}.score-circle[_ngcontent-%COMP%]{width:140px;height:140px;border-radius:50%;background:conic-gradient(#7c3aed 78%,#eee 0%);display:flex;align-items:center;justify-content:center;font-size:35px;font-weight:700;margin:20px auto;color:#111}.suggestion-item[_ngcontent-%COMP%]{background:#f8f8ff;padding:15px;border-radius:14px;margin-top:15px}.subject-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:20px;font-weight:600}.bar[_ngcontent-%COMP%]{width:100%;height:8px;background:#eee;border-radius:20px;overflow:hidden;margin-top:8px}.fill[_ngcontent-%COMP%]{height:100%}.green[_ngcontent-%COMP%]{background:#22c55e}.orange[_ngcontent-%COMP%]{background:#f59e0b}.red[_ngcontent-%COMP%]{background:#ef4444}.feature-strip[_ngcontent-%COMP%]{width:92%;margin:30px auto;background:#fff;border-radius:24px;padding:28px;display:grid;grid-template-columns:repeat(4,1fr);gap:20px;box-shadow:0 6px 20px #0000000d}.feature-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding-right:10px;border-right:1px solid #ececec}.feature-item[_ngcontent-%COMP%]:last-child{border-right:none}.feature-icon[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:18px;display:flex;align-items:center;justify-content:center;font-size:28px;color:#fff;flex-shrink:0}.purple[_ngcontent-%COMP%]{background:linear-gradient(135deg,#8b5cf6,#7c3aed)}.blue[_ngcontent-%COMP%]{background:linear-gradient(135deg,#3b82f6,#2563eb)}.orange[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f59e0b,#ea580c)}.green[_ngcontent-%COMP%]{background:linear-gradient(135deg,#22c55e,#16a34a)}.feature-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700;margin-bottom:6px;color:#111827}.feature-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:1.5;color:#6b7280}@media(max-width:1100px){.feature-strip[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media(max-width:700px){.feature-strip[_ngcontent-%COMP%]{grid-template-columns:1fr}.feature-item[_ngcontent-%COMP%]{border-right:none;border-bottom:1px solid #ececec;padding-bottom:20px}}"]})};export{za as Home};

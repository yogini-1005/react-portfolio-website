import{a as Ce,g as Fe,b as Le,c as qe,r as ae,j as P}from"./index-B2jGGjxl.js";var X={exports:{}},W={},Z={exports:{}},ee,se;function Ue(){if(se)return ee;se=1;var f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ee=f,ee}var te,le;function ke(){if(le)return te;le=1;var f=Ue();function s(){}function d(){}return d.resetWarningCache=s,te=function(){function n(g,e,O,h,c,r){if(r!==f){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}n.isRequired=n;function l(){return n}var p={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:l,element:n,elementType:n,instanceOf:l,node:n,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:d,resetWarningCache:s};return p.PropTypes=p,p},te}var ie;function Se(){return ie||(ie=1,Z.exports=ke()()),Z.exports}var G={exports:{}},N={},J={exports:{}},ue;function Ee(){return ue||(ue=1,function(f,s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=c;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var d="none",n="contents",l=/^(input|select|textarea|button|object|iframe)$/;function p(r,i){return i.getPropertyValue("overflow")!=="visible"||r.scrollWidth<=0&&r.scrollHeight<=0}function g(r){var i=r.offsetWidth<=0&&r.offsetHeight<=0;if(i&&!r.innerHTML)return!0;try{var u=window.getComputedStyle(r),y=u.getPropertyValue("display");return i?y!==n&&p(r,u):y===d}catch{return console.warn("Failed to inspect element style"),!1}}function e(r){for(var i=r,u=r.getRootNode&&r.getRootNode();i&&i!==document.body;){if(u&&i===u&&(i=u.host.parentNode),g(i))return!1;i=i.parentNode}return!0}function O(r,i){var u=r.nodeName.toLowerCase(),y=l.test(u)&&!r.disabled||u==="a"&&r.href||i;return y&&e(r)}function h(r){var i=r.getAttribute("tabindex");i===null&&(i=void 0);var u=isNaN(i);return(u||i>=0)&&O(r,!u)}function c(r){var i=[].slice.call(r.querySelectorAll("*"),0).reduce(function(u,y){return u.concat(y.shadowRoot?c(y.shadowRoot):[y])},[]);return i.filter(h)}f.exports=s.default}(J,J.exports)),J.exports}var ce;function We(){if(ce)return N;ce=1,Object.defineProperty(N,"__esModule",{value:!0}),N.resetState=g,N.log=e,N.handleBlur=O,N.handleFocus=h,N.markForFocusLater=c,N.returnFocus=r,N.popWithoutFocus=i,N.setupScopedFocus=u,N.teardownScopedFocus=y;var f=Ee(),s=d(f);function d(C){return C&&C.__esModule?C:{default:C}}var n=[],l=null,p=!1;function g(){n=[]}function e(){}function O(){p=!0}function h(){if(p){if(p=!1,!l)return;setTimeout(function(){if(!l.contains(document.activeElement)){var C=(0,s.default)(l)[0]||l;C.focus()}},0)}}function c(){n.push(document.activeElement)}function r(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,T=null;try{n.length!==0&&(T=n.pop(),T.focus({preventScroll:C}));return}catch{console.warn(["You tried to return focus to",T,"but it is not in the DOM anymore"].join(" "))}}function i(){n.length>0&&n.pop()}function u(C){l=C,window.addEventListener?(window.addEventListener("blur",O,!1),document.addEventListener("focus",h,!0)):(window.attachEvent("onBlur",O),document.attachEvent("onFocus",h))}function y(){l=null,window.addEventListener?(window.removeEventListener("blur",O),document.removeEventListener("focus",h)):(window.detachEvent("onBlur",O),document.detachEvent("onFocus",h))}return N}var Q={exports:{}},fe;function He(){return fe||(fe=1,function(f,s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=g;var d=Ee(),n=l(d);function l(e){return e&&e.__esModule?e:{default:e}}function p(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return e.activeElement.shadowRoot?p(e.activeElement.shadowRoot):e.activeElement}function g(e,O){var h=(0,n.default)(e);if(!h.length){O.preventDefault();return}var c=void 0,r=O.shiftKey,i=h[0],u=h[h.length-1],y=p();if(e===y){if(!r)return;c=u}if(u===y&&!r&&(c=i),i===y&&r&&(c=u),c){O.preventDefault(),c.focus();return}var C=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),T=C!=null&&C[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(T){var R=h.indexOf(y);if(R>-1&&(R+=r?-1:1),c=h[R],typeof c>"u"){O.preventDefault(),c=r?u:i,c.focus();return}O.preventDefault(),c.focus()}}f.exports=s.default}(Q,Q.exports)),Q.exports}var A={},ne,de;function Ie(){if(de)return ne;de=1;var f=function(){};return ne=f,ne}var D={},oe={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/var pe;function je(){return pe||(pe=1,function(f){(function(){var s=!!(typeof window<"u"&&window.document&&window.document.createElement),d={canUseDOM:s,canUseWorkers:typeof Worker<"u",canUseEventListeners:s&&!!(window.addEventListener||window.attachEvent),canUseViewport:s&&!!window.screen};f.exports?f.exports=d:window.ExecutionEnvironment=d})()}(oe)),oe.exports}var me;function re(){if(me)return D;me=1,Object.defineProperty(D,"__esModule",{value:!0}),D.canUseDOM=D.SafeNodeList=D.SafeHTMLCollection=void 0;var f=je(),s=d(f);function d(p){return p&&p.__esModule?p:{default:p}}var n=s.default,l=n.canUseDOM?window.HTMLElement:{};return D.SafeHTMLCollection=n.canUseDOM?window.HTMLCollection:{},D.SafeNodeList=n.canUseDOM?window.NodeList:{},D.canUseDOM=n.canUseDOM,D.default=l,D}var ve;function we(){if(ve)return A;ve=1,Object.defineProperty(A,"__esModule",{value:!0}),A.resetState=p,A.log=g,A.assertNodeList=e,A.setElement=O,A.validateElement=h,A.hide=c,A.show=r,A.documentNotReadyOrSSRTesting=i;var f=Ie(),s=n(f),d=re();function n(u){return u&&u.__esModule?u:{default:u}}var l=null;function p(){l&&(l.removeAttribute?l.removeAttribute("aria-hidden"):l.length!=null?l.forEach(function(u){return u.removeAttribute("aria-hidden")}):document.querySelectorAll(l).forEach(function(u){return u.removeAttribute("aria-hidden")})),l=null}function g(){}function e(u,y){if(!u||!u.length)throw new Error("react-modal: No elements were found for selector "+y+".")}function O(u){var y=u;if(typeof y=="string"&&d.canUseDOM){var C=document.querySelectorAll(y);e(C,y),y=C}return l=y||l,l}function h(u){var y=u||l;return y?Array.isArray(y)||y instanceof HTMLCollection||y instanceof NodeList?y:[y]:((0,s.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function c(u){var y=!0,C=!1,T=void 0;try{for(var R=h(u)[Symbol.iterator](),x;!(y=(x=R.next()).done);y=!0){var U=x.value;U.setAttribute("aria-hidden","true")}}catch(F){C=!0,T=F}finally{try{!y&&R.return&&R.return()}finally{if(C)throw T}}}function r(u){var y=!0,C=!1,T=void 0;try{for(var R=h(u)[Symbol.iterator](),x;!(y=(x=R.next()).done);y=!0){var U=x.value;U.removeAttribute("aria-hidden")}}catch(F){C=!0,T=F}finally{try{!y&&R.return&&R.return()}finally{if(C)throw T}}}function i(){l=null}return A}var j={},he;function Be(){if(he)return j;he=1,Object.defineProperty(j,"__esModule",{value:!0}),j.resetState=n,j.log=l;var f={},s={};function d(h,c){h.classList.remove(c)}function n(){var h=document.getElementsByTagName("html")[0];for(var c in f)d(h,f[c]);var r=document.body;for(var i in s)d(r,s[i]);f={},s={}}function l(){}var p=function(c,r){return c[r]||(c[r]=0),c[r]+=1,r},g=function(c,r){return c[r]&&(c[r]-=1),r},e=function(c,r,i){i.forEach(function(u){p(r,u),c.add(u)})},O=function(c,r,i){i.forEach(function(u){g(r,u),r[u]===0&&c.remove(u)})};return j.add=function(c,r){return e(c.classList,c.nodeName.toLowerCase()=="html"?f:s,r.split(" "))},j.remove=function(c,r){return O(c.classList,c.nodeName.toLowerCase()=="html"?f:s,r.split(" "))},j}var z={},ye;function Me(){if(ye)return z;ye=1,Object.defineProperty(z,"__esModule",{value:!0}),z.log=n,z.resetState=l;function f(p,g){if(!(p instanceof g))throw new TypeError("Cannot call a class as a function")}var s=function p(){var g=this;f(this,p),this.register=function(e){g.openInstances.indexOf(e)===-1&&(g.openInstances.push(e),g.emit("register"))},this.deregister=function(e){var O=g.openInstances.indexOf(e);O!==-1&&(g.openInstances.splice(O,1),g.emit("deregister"))},this.subscribe=function(e){g.subscribers.push(e)},this.emit=function(e){g.subscribers.forEach(function(O){return O(e,g.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},d=new s;function n(){console.log("portalOpenInstances ----------"),console.log(d.openInstances.length),d.openInstances.forEach(function(p){return console.log(p)}),console.log("end portalOpenInstances ----------")}function l(){d=new s}return z.default=d,z}var K={},be;function ze(){if(be)return K;be=1,Object.defineProperty(K,"__esModule",{value:!0}),K.resetState=g,K.log=e;var f=Me(),s=d(f);function d(c){return c&&c.__esModule?c:{default:c}}var n=void 0,l=void 0,p=[];function g(){for(var c=[n,l],r=0;r<c.length;r++){var i=c[r];i&&i.parentNode&&i.parentNode.removeChild(i)}n=l=null,p=[]}function e(){console.log("bodyTrap ----------"),console.log(p.length);for(var c=[n,l],r=0;r<c.length;r++){var i=c[r],u=i||{};console.log(u.nodeName,u.className,u.id)}console.log("edn bodyTrap ----------")}function O(){p.length!==0&&p[p.length-1].focusContent()}function h(c,r){!n&&!l&&(n=document.createElement("div"),n.setAttribute("data-react-modal-body-trap",""),n.style.position="absolute",n.style.opacity="0",n.setAttribute("tabindex","0"),n.addEventListener("focus",O),l=n.cloneNode(),l.addEventListener("focus",O)),p=r,p.length>0?(document.body.firstChild!==n&&document.body.insertBefore(n,document.body.firstChild),document.body.lastChild!==l&&document.body.appendChild(l)):(n.parentElement&&n.parentElement.removeChild(n),l.parentElement&&l.parentElement.removeChild(l))}return s.default.subscribe(h),K}var ge;function Ke(){return ge||(ge=1,function(f,s){Object.defineProperty(s,"__esModule",{value:!0});var d=Object.assign||function(a){for(var o=1;o<arguments.length;o++){var _=arguments[o];for(var t in _)Object.prototype.hasOwnProperty.call(_,t)&&(a[t]=_[t])}return a},n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},l=function(){function a(o,_){for(var t=0;t<_.length;t++){var m=_[t];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(o,m.key,m)}}return function(o,_,t){return _&&a(o.prototype,_),t&&a(o,t),o}}(),p=Ce(),g=Se(),e=B(g),O=We(),h=F(O),c=He(),r=B(c),i=we(),u=F(i),y=Be(),C=F(y),T=re(),R=B(T),x=Me(),U=B(x);ze();function F(a){if(a&&a.__esModule)return a;var o={};if(a!=null)for(var _ in a)Object.prototype.hasOwnProperty.call(a,_)&&(o[_]=a[_]);return o.default=a,o}function B(a){return a&&a.__esModule?a:{default:a}}function L(a,o){if(!(a instanceof o))throw new TypeError("Cannot call a class as a function")}function $(a,o){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o&&(typeof o=="object"||typeof o=="function")?o:a}function V(a,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof o);a.prototype=Object.create(o&&o.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(a,o):a.__proto__=o)}var k={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},H=function(o){return o.code==="Tab"||o.keyCode===9},b=function(o){return o.code==="Escape"||o.keyCode===27},v=0,S=function(a){V(o,a);function o(_){L(this,o);var t=$(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,_));return t.setOverlayRef=function(m){t.overlay=m,t.props.overlayRef&&t.props.overlayRef(m)},t.setContentRef=function(m){t.content=m,t.props.contentRef&&t.props.contentRef(m)},t.afterClose=function(){var m=t.props,w=m.appElement,E=m.ariaHideApp,M=m.htmlOpenClassName,q=m.bodyOpenClassName,I=m.parentSelector,Y=I&&I().ownerDocument||document;q&&C.remove(Y.body,q),M&&C.remove(Y.getElementsByTagName("html")[0],M),E&&v>0&&(v-=1,v===0&&u.show(w)),t.props.shouldFocusAfterRender&&(t.props.shouldReturnFocusAfterClose?(h.returnFocus(t.props.preventScroll),h.teardownScopedFocus()):h.popWithoutFocus()),t.props.onAfterClose&&t.props.onAfterClose(),U.default.deregister(t)},t.open=function(){t.beforeOpen(),t.state.afterOpen&&t.state.beforeClose?(clearTimeout(t.closeTimer),t.setState({beforeClose:!1})):(t.props.shouldFocusAfterRender&&(h.setupScopedFocus(t.node),h.markForFocusLater()),t.setState({isOpen:!0},function(){t.openAnimationFrame=requestAnimationFrame(function(){t.setState({afterOpen:!0}),t.props.isOpen&&t.props.onAfterOpen&&t.props.onAfterOpen({overlayEl:t.overlay,contentEl:t.content})})}))},t.close=function(){t.props.closeTimeoutMS>0?t.closeWithTimeout():t.closeWithoutTimeout()},t.focusContent=function(){return t.content&&!t.contentHasFocus()&&t.content.focus({preventScroll:!0})},t.closeWithTimeout=function(){var m=Date.now()+t.props.closeTimeoutMS;t.setState({beforeClose:!0,closesAt:m},function(){t.closeTimer=setTimeout(t.closeWithoutTimeout,t.state.closesAt-Date.now())})},t.closeWithoutTimeout=function(){t.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},t.afterClose)},t.handleKeyDown=function(m){H(m)&&(0,r.default)(t.content,m),t.props.shouldCloseOnEsc&&b(m)&&(m.stopPropagation(),t.requestClose(m))},t.handleOverlayOnClick=function(m){t.shouldClose===null&&(t.shouldClose=!0),t.shouldClose&&t.props.shouldCloseOnOverlayClick&&(t.ownerHandlesClose()?t.requestClose(m):t.focusContent()),t.shouldClose=null},t.handleContentOnMouseUp=function(){t.shouldClose=!1},t.handleOverlayOnMouseDown=function(m){!t.props.shouldCloseOnOverlayClick&&m.target==t.overlay&&m.preventDefault()},t.handleContentOnClick=function(){t.shouldClose=!1},t.handleContentOnMouseDown=function(){t.shouldClose=!1},t.requestClose=function(m){return t.ownerHandlesClose()&&t.props.onRequestClose(m)},t.ownerHandlesClose=function(){return t.props.onRequestClose},t.shouldBeClosed=function(){return!t.state.isOpen&&!t.state.beforeClose},t.contentHasFocus=function(){return document.activeElement===t.content||t.content.contains(document.activeElement)},t.buildClassName=function(m,w){var E=(typeof w>"u"?"undefined":n(w))==="object"?w:{base:k[m],afterOpen:k[m]+"--after-open",beforeClose:k[m]+"--before-close"},M=E.base;return t.state.afterOpen&&(M=M+" "+E.afterOpen),t.state.beforeClose&&(M=M+" "+E.beforeClose),typeof w=="string"&&w?M+" "+w:M},t.attributesFromObject=function(m,w){return Object.keys(w).reduce(function(E,M){return E[m+"-"+M]=w[M],E},{})},t.state={afterOpen:!1,beforeClose:!1},t.shouldClose=null,t.moveFromContentToOverlay=null,t}return l(o,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(t,m){this.props.isOpen&&!t.isOpen?this.open():!this.props.isOpen&&t.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!m.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var t=this.props,m=t.appElement,w=t.ariaHideApp,E=t.htmlOpenClassName,M=t.bodyOpenClassName,q=t.parentSelector,I=q&&q().ownerDocument||document;M&&C.add(I.body,M),E&&C.add(I.getElementsByTagName("html")[0],E),w&&(v+=1,u.hide(m)),U.default.register(this)}},{key:"render",value:function(){var t=this.props,m=t.id,w=t.className,E=t.overlayClassName,M=t.defaultStyles,q=t.children,I=w?{}:M.content,Y=E?{}:M.overlay;if(this.shouldBeClosed())return null;var Ae={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:d({},Y,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},xe=d({id:m,ref:this.setContentRef,style:d({},I,this.props.style.content),className:this.buildClassName("content",w),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",d({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),De=this.props.contentElement(xe,q);return this.props.overlayElement(Ae,De)}}]),o}(p.Component);S.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},S.propTypes={isOpen:e.default.bool.isRequired,defaultStyles:e.default.shape({content:e.default.object,overlay:e.default.object}),style:e.default.shape({content:e.default.object,overlay:e.default.object}),className:e.default.oneOfType([e.default.string,e.default.object]),overlayClassName:e.default.oneOfType([e.default.string,e.default.object]),parentSelector:e.default.func,bodyOpenClassName:e.default.string,htmlOpenClassName:e.default.string,ariaHideApp:e.default.bool,appElement:e.default.oneOfType([e.default.instanceOf(R.default),e.default.instanceOf(T.SafeHTMLCollection),e.default.instanceOf(T.SafeNodeList),e.default.arrayOf(e.default.instanceOf(R.default))]),onAfterOpen:e.default.func,onAfterClose:e.default.func,onRequestClose:e.default.func,closeTimeoutMS:e.default.number,shouldFocusAfterRender:e.default.bool,shouldCloseOnOverlayClick:e.default.bool,shouldReturnFocusAfterClose:e.default.bool,preventScroll:e.default.bool,role:e.default.string,contentLabel:e.default.string,aria:e.default.object,data:e.default.object,children:e.default.node,shouldCloseOnEsc:e.default.bool,overlayRef:e.default.func,contentRef:e.default.func,id:e.default.string,overlayElement:e.default.func,contentElement:e.default.func,testId:e.default.string},s.default=S,f.exports=s.default}(G,G.exports)),G.exports}function Te(){var f=this.constructor.getDerivedStateFromProps(this.props,this.state);f!=null&&this.setState(f)}function Re(f){function s(d){var n=this.constructor.getDerivedStateFromProps(f,d);return n??null}this.setState(s.bind(this))}function Pe(f,s){try{var d=this.props,n=this.state;this.props=f,this.state=s,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(d,n)}finally{this.props=d,this.state=n}}Te.__suppressDeprecationWarning=!0;Re.__suppressDeprecationWarning=!0;Pe.__suppressDeprecationWarning=!0;function $e(f){var s=f.prototype;if(!s||!s.isReactComponent)throw new Error("Can only polyfill class components");if(typeof f.getDerivedStateFromProps!="function"&&typeof s.getSnapshotBeforeUpdate!="function")return f;var d=null,n=null,l=null;if(typeof s.componentWillMount=="function"?d="componentWillMount":typeof s.UNSAFE_componentWillMount=="function"&&(d="UNSAFE_componentWillMount"),typeof s.componentWillReceiveProps=="function"?n="componentWillReceiveProps":typeof s.UNSAFE_componentWillReceiveProps=="function"&&(n="UNSAFE_componentWillReceiveProps"),typeof s.componentWillUpdate=="function"?l="componentWillUpdate":typeof s.UNSAFE_componentWillUpdate=="function"&&(l="UNSAFE_componentWillUpdate"),d!==null||n!==null||l!==null){var p=f.displayName||f.name,g=typeof f.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+p+" uses "+g+" but also contains the following legacy lifecycles:"+(d!==null?`
  `+d:"")+(n!==null?`
  `+n:"")+(l!==null?`
  `+l:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof f.getDerivedStateFromProps=="function"&&(s.componentWillMount=Te,s.componentWillReceiveProps=Re),typeof s.getSnapshotBeforeUpdate=="function"){if(typeof s.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");s.componentWillUpdate=Pe;var e=s.componentDidUpdate;s.componentDidUpdate=function(h,c,r){var i=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:r;e.call(this,h,c,i)}}return f}const Ve=Object.freeze(Object.defineProperty({__proto__:null,polyfill:$e},Symbol.toStringTag,{value:"Module"})),Ye=Fe(Ve);var Oe;function Xe(){if(Oe)return W;Oe=1,Object.defineProperty(W,"__esModule",{value:!0}),W.bodyOpenClassName=W.portalClassName=void 0;var f=Object.assign||function(b){for(var v=1;v<arguments.length;v++){var S=arguments[v];for(var a in S)Object.prototype.hasOwnProperty.call(S,a)&&(b[a]=S[a])}return b},s=function(){function b(v,S){for(var a=0;a<S.length;a++){var o=S[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(v,o.key,o)}}return function(v,S,a){return S&&b(v.prototype,S),a&&b(v,a),v}}(),d=Ce(),n=T(d),l=Le(),p=T(l),g=Se(),e=T(g),O=Ke(),h=T(O),c=we(),r=C(c),i=re(),u=T(i),y=Ye;function C(b){if(b&&b.__esModule)return b;var v={};if(b!=null)for(var S in b)Object.prototype.hasOwnProperty.call(b,S)&&(v[S]=b[S]);return v.default=b,v}function T(b){return b&&b.__esModule?b:{default:b}}function R(b,v){if(!(b instanceof v))throw new TypeError("Cannot call a class as a function")}function x(b,v){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return v&&(typeof v=="object"||typeof v=="function")?v:b}function U(b,v){if(typeof v!="function"&&v!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof v);b.prototype=Object.create(v&&v.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}}),v&&(Object.setPrototypeOf?Object.setPrototypeOf(b,v):b.__proto__=v)}var F=W.portalClassName="ReactModalPortal",B=W.bodyOpenClassName="ReactModal__Body--open",L=i.canUseDOM&&p.default.createPortal!==void 0,$=function(v){return document.createElement(v)},V=function(){return L?p.default.createPortal:p.default.unstable_renderSubtreeIntoContainer};function k(b){return b()}var H=function(b){U(v,b);function v(){var S,a,o,_;R(this,v);for(var t=arguments.length,m=Array(t),w=0;w<t;w++)m[w]=arguments[w];return _=(a=(o=x(this,(S=v.__proto__||Object.getPrototypeOf(v)).call.apply(S,[this].concat(m))),o),o.removePortal=function(){!L&&p.default.unmountComponentAtNode(o.node);var E=k(o.props.parentSelector);E&&E.contains(o.node)?E.removeChild(o.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},o.portalRef=function(E){o.portal=E},o.renderPortal=function(E){var M=V(),q=M(o,n.default.createElement(h.default,f({defaultStyles:v.defaultStyles},E)),o.node);o.portalRef(q)},a),x(o,_)}return s(v,[{key:"componentDidMount",value:function(){if(i.canUseDOM){L||(this.node=$("div")),this.node.className=this.props.portalClassName;var a=k(this.props.parentSelector);a.appendChild(this.node),!L&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var o=k(a.parentSelector),_=k(this.props.parentSelector);return{prevParent:o,nextParent:_}}},{key:"componentDidUpdate",value:function(a,o,_){if(i.canUseDOM){var t=this.props,m=t.isOpen,w=t.portalClassName;a.portalClassName!==w&&(this.node.className=w);var E=_.prevParent,M=_.nextParent;M!==E&&(E.removeChild(this.node),M.appendChild(this.node)),!(!a.isOpen&&!m)&&!L&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!i.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,o=Date.now(),_=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||o+this.props.closeTimeoutMS);_?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,_-o)):this.removePortal()}}},{key:"render",value:function(){if(!i.canUseDOM||!L)return null;!this.node&&L&&(this.node=$("div"));var a=V();return a(n.default.createElement(h.default,f({ref:this.portalRef,defaultStyles:v.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){r.setElement(a)}}]),v}(d.Component);return H.propTypes={isOpen:e.default.bool.isRequired,style:e.default.shape({content:e.default.object,overlay:e.default.object}),portalClassName:e.default.string,bodyOpenClassName:e.default.string,htmlOpenClassName:e.default.string,className:e.default.oneOfType([e.default.string,e.default.shape({base:e.default.string.isRequired,afterOpen:e.default.string.isRequired,beforeClose:e.default.string.isRequired})]),overlayClassName:e.default.oneOfType([e.default.string,e.default.shape({base:e.default.string.isRequired,afterOpen:e.default.string.isRequired,beforeClose:e.default.string.isRequired})]),appElement:e.default.oneOfType([e.default.instanceOf(u.default),e.default.instanceOf(i.SafeHTMLCollection),e.default.instanceOf(i.SafeNodeList),e.default.arrayOf(e.default.instanceOf(u.default))]),onAfterOpen:e.default.func,onRequestClose:e.default.func,closeTimeoutMS:e.default.number,ariaHideApp:e.default.bool,shouldFocusAfterRender:e.default.bool,shouldCloseOnOverlayClick:e.default.bool,shouldReturnFocusAfterClose:e.default.bool,preventScroll:e.default.bool,parentSelector:e.default.func,aria:e.default.object,data:e.default.object,role:e.default.string,contentLabel:e.default.string,shouldCloseOnEsc:e.default.bool,overlayRef:e.default.func,contentRef:e.default.func,id:e.default.string,overlayElement:e.default.func,contentElement:e.default.func},H.defaultProps={isOpen:!1,portalClassName:F,bodyOpenClassName:B,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(v,S){return n.default.createElement("div",v,S)},contentElement:function(v,S){return n.default.createElement("div",v,S)}},H.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,y.polyfill)(H),W.default=H,W}var _e;function Ge(){return _e||(_e=1,function(f,s){Object.defineProperty(s,"__esModule",{value:!0});var d=Xe(),n=l(d);function l(p){return p&&p.__esModule?p:{default:p}}s.default=n.default,f.exports=s.default}(X,X.exports)),X.exports}var Je=Ge();const Ne=qe(Je),Qe="/react-portfolio-website/assets/amazon-CtvWUX9w.png",Ze="/react-portfolio-website/assets/beauty-products-BapHR3XS.png",et="/react-portfolio-website/assets/household-rX0nYbrc.png",tt="/react-portfolio-website/assets/portfolio-BTK-x77a.png";Ne.setAppElement("#root");const nt=[{name:"Amazon Clone Website",image:Qe,description:"A static Amazon Clone built using HTML and CSS, replicating the UI of Amazon's homepage.The project includes a responsive navbar, product sections, banner sliders, and a footer. This clone focuses on layout design and styling to closely match Amazon's look and feel.",link:"https://github.com/yogini1005"},{name:"Beauty Products Website",image:Ze,description:"A Java full-stack website for browsing skincare products with a classic UI and cash-on-delivery option. The platform allows users to explore various beauty products, add them to their cart, and place orders. Features include product search, filtering, and a simple checkout process.",link:"https://github.com/yogini1005"},{name:"Portfolio Website Generator",image:tt,description:"A simple portfolio with theme customization and file download options. Users can choose a theme, view skills and projects.",link:"https://github.com/yogini1005"},{name:"Household Services Provider Website",image:et,description:"A web platform connecting users with service providers like electricians, plumbers, and maids. Users can register, browse service providers, book appointments, and track their requests. Service providers can manage bookings and update their availability in real-time.",link:"#"}],rt=()=>{const[f,s]=ae.useState(!1),[d,n]=ae.useState(null),l=g=>{n(g),s(!0)},p=()=>{s(!1)};return P.jsxs("section",{className:"projects",children:[P.jsx("h1",{children:"Projects"}),P.jsx("div",{className:"projects-grid",children:nt.map((g,e)=>P.jsxs("div",{className:"project-card",children:[P.jsx("img",{loading:"lazy",src:g.image,alt:g.name}),P.jsx("h3",{children:g.name}),P.jsx("button",{onClick:()=>l(g),children:"View Project"})]},e))}),P.jsx(Ne,{isOpen:f,onRequestClose:p,contentLabel:"Project Details",className:"modal-content",overlayClassName:"modal-overlay",children:d&&P.jsxs("div",{className:"modal-body",children:[P.jsx("h2",{children:d.name}),P.jsx("img",{loading:"lazy",src:d.image,alt:d.name}),P.jsx("p",{children:d.description}),P.jsxs("div",{className:"buttons",children:[d.link!=="#"?P.jsx("a",{href:d.link,target:"_blank",rel:"noopener noreferrer",children:P.jsx("button",{className:"view-btn",children:"Visit Project"})}):P.jsx("button",{className:"view-btn",disabled:!0,style:{backgroundColor:"#ccc",cursor:"not-allowed"},children:"Coming Soon"}),P.jsx("button",{className:"close-btn",onClick:p,children:"Close"})]})]})})]})};export{rt as default};

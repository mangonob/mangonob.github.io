import{s as p,ag as c}from"./App-Dsb7JyUI.js";import{R as d}from"./index-iRfHkg0E.js";var m=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,g=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,f="".concat(m," ").concat(g).split(/[\s\n]+/),h="aria-",C="data-";function l(e,n){return e.indexOf(n)===0}function x(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o;n===!1?o={aria:!0,data:!0,attr:!0}:n===!0?o={aria:!0}:o=p({},n);var a={};return Object.keys(e).forEach(function(t){(o.aria&&(t==="role"||l(t,h))||o.data&&l(t,C)||o.attr&&f.includes(t))&&(a[t]=e[t])}),a}const D=e=>{const[,,,,n]=c();return n?`${e}-css-var`:""},v=d.createContext(void 0),r=100,S=10,P=r*S,u={Modal:r,Drawer:r,Popover:r,Popconfirm:r,Tooltip:r,Tour:r},E={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function T(e){return e in u}function O(e,n){const[,o]=c(),a=d.useContext(v),t=T(e);let i;if(n!==void 0)i=[n,n];else{let s=a??0;t?s+=(a?0:o.zIndexPopupBase)+u[e]:s+=E[e],i=[a===void 0?n:s,s]}return i}export{P as C,O as a,x as p,D as u,v as z};

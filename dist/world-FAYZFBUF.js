import{b as to,c as ze,d as no,e as Id}from"./chunk-KF6YN772.js";var Ef=0,Ch=1,Af=2;var Pa=1,Rf=2,yr=3,Fn=0,Jt=1,Mn=2,oi=0,Mr=1,Ph=2,Ih=3,Lh=4,Cf=5;var ys=100,Pf=101,If=102,Lf=103,Df=104,Nf=200,Ff=201,Uf=202,Of=203,Dh=204,Nh=205,Bf=206,kf=207,zf=208,Gf=209,Hf=210,Vf=211,Wf=212,qf=213,Xf=214,zo=0,Go=1,Ho=2,sr=3,Vo=4,Wo=5,qo=6,Xo=7,xc=0,jf=1,Yf=2,qn=0,Fh=1,Uh=2,Oh=3,Bh=4,kh=5,zh=6,Ia=7,dh="attached",Kf="detached",Gh=300,Ji=301,Ms=302,_c=303,vc=304,Ss=306,Gi=1e3,Dn=1001,rr=1002,Gt=1003,yc=1004;var Ts=1005;var Dt=1006,Sr=1007;var Xn=1008;var Sn=1009,Hh=1010,Vh=1011,Tr=1012,Mc=1013,jn=1014,Cn=1015,Pn=1016,Sc=1017,Tc=1018,wr=1020,Wh=35902,qh=35899,Xh=1021,jh=1022,pn=1023,ti=1026,Zi=1027,wc=1028,Ec=1029,$i=1030,Ac=1031;var Rc=1033,La=33776,Da=33777,Na=33778,Fa=33779,Cc=35840,Pc=35841,Ic=35842,Lc=35843,Dc=36196,Nc=37492,Fc=37496,Uc=37488,Oc=37489,Ua=37490,Bc=37491,kc=37808,zc=37809,Gc=37810,Hc=37811,Vc=37812,Wc=37813,qc=37814,Xc=37815,jc=37816,Yc=37817,Kc=37818,Jc=37819,Zc=37820,$c=37821,Qc=36492,el=36494,tl=36495,nl=36283,il=36284,Oa=36285,sl=36286;var ls=2300,hs=2301,Oo=2302,fh=2303,ph=2400,mh=2401,gh=2402,Jf=2500;var Yh=0,Ba=1,Er=2,Zf=3200;var ka=0,$f=1,wi="",Pt="srgb",Yt="srgb-linear",Qr="linear",bt="srgb";var Bo=7680;var Qf=519,ep=512,tp=513,np=514,rl=515,ip=516,sp=517,al=518,rp=519,Kh=35044,Jh=35048;var Zh="300 es",Vn=2e3,ar=2001;function $m(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Qm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ap(){let s=or("canvas");return s.style.display="block",s}var Ld={},cr=null;function ea(...s){let e="THREE."+s.shift();cr?cr("log",e,...s):console.log(e,...s)}function op(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Oe(...s){s=op(s);let e="THREE."+s.shift();if(cr)cr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function He(...s){s=op(s);let e="THREE."+s.shift();if(cr)cr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function cs(...s){let e=s.join(" ");e in Ld||(Ld[e]=!0,Oe(...s))}function cp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var lp={[zo]:Go,[Ho]:qo,[Vo]:Xo,[sr]:Wo,[Go]:zo,[qo]:Ho,[Xo]:Vo,[Wo]:sr},ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dd=1234567,nr=Math.PI/180,us=180/Math.PI;function Nn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[s&255]+rn[s>>8&255]+rn[s>>16&255]+rn[s>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function nt(s,e,t){return Math.max(e,Math.min(t,s))}function $h(s,e){return(s%e+e)%e}function eg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function tg(s,e,t){return s!==e?(t-s)/(e-s):0}function Jr(s,e,t){return(1-t)*s+t*e}function ng(s,e,t,n){return Jr(s,e,1-Math.exp(-t*n))}function ig(s,e=1){return e-Math.abs($h(s,e*2)-e)}function sg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function rg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ag(s,e){return s+Math.floor(Math.random()*(e-s+1))}function og(s,e){return s+Math.random()*(e-s)}function cg(s){return s*(.5-Math.random())}function lg(s){s!==void 0&&(Dd=s);let e=Dd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hg(s){return s*nr}function ug(s){return s*us}function dg(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function fg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function pg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function mg(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*d,c*u,o*l);break;case"YZY":s.set(c*u,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*u,o*h,o*l);break;case"XZX":s.set(o*h,c*p,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*p,o*l);break;case"ZYZ":s.set(c*p,c*f,o*h,o*l);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ws={DEG2RAD:nr,RAD2DEG:us,generateUUID:Nn,clamp:nt,euclideanModulo:$h,mapLinear:eg,inverseLerp:tg,lerp:Jr,damp:ng,pingpong:ig,smoothstep:sg,smootherstep:rg,randInt:ag,randFloat:og,randFloatSpread:cg,seededRandom:lg,degToRad:hg,radToDeg:ug,isPowerOfTwo:dg,ceilPowerOfTwo:fg,floorPowerOfTwo:pg,setQuaternionFromProperEuler:mg,normalize:xt,denormalize:Hn},su=class su{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};su.prototype.isVector2=!0;var me=su,Nt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],p=r[a+2],b=r[a+3];if(d!==b||c!==u||l!==f||h!==p){let g=c*u+l*f+h*p+d*b;g<0&&(u=-u,f=-f,p=-p,b=-b,g=-g);let m=1-o;if(g<.9995){let S=Math.acos(g),w=Math.sin(S);m=Math.sin(m*S)/w,o=Math.sin(o*S)/w,c=c*m+u*o,l=l*m+f*o,h=h*m+p*o,d=d*m+b*o}else{c=c*m+u*o,l=l*m+f*o,h=h*m+p*o,d=d*m+b*o;let S=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=S,l*=S,h*=S,d*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*d+c*f-l*u,e[t+1]=c*p+h*u+l*d-o*f,e[t+2]=l*p+h*f+o*u-c*d,e[t+3]=h*p-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),u=c(n/2),f=c(i/2),p=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d+u*f*p;break;case"YZX":this._x=u*h*d+l*f*p,this._y=l*f*d+u*h*p,this._z=l*h*p-u*f*d,this._w=l*h*d-u*f*p;break;case"XZY":this._x=u*h*d-l*f*p,this._y=l*f*d-u*h*p,this._z=l*h*p+u*f*d,this._w=l*h*d+u*f*p;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ru=class ru{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ol.copy(this).projectOnVector(e),this.sub(Ol)}reflect(e){return this.sub(Ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ru.prototype.isVector3=!0;var D=ru,Ol=new D,Nd=new Nt,au=class au{constructor(e,t,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],b=i[0],g=i[3],m=i[6],S=i[1],w=i[4],v=i[7],y=i[2],T=i[5],C=i[8];return r[0]=a*b+o*S+c*y,r[3]=a*g+o*w+c*T,r[6]=a*m+o*v+c*C,r[1]=l*b+h*S+d*y,r[4]=l*g+h*w+d*T,r[7]=l*m+h*v+d*C,r[2]=u*b+f*S+p*y,r[5]=u*g+f*w+p*T,r[8]=u*m+f*v+p*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,p=t*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return e[0]=d*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=u*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bl.makeScale(e,t)),this}rotate(e){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bl.makeRotation(-e)),this}translate(e,t){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};au.prototype.isMatrix3=!0;var Ye=au,Bl=new Ye,Fd=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ud=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gg(){let s={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===bt&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wi?Qr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Yt]:{primaries:e,whitePoint:n,transfer:Qr,toXYZ:Fd,fromXYZ:Ud,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:Fd,fromXYZ:Ud,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),s}var tt=gg();function xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ir(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Bs,jo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bs===void 0&&(Bs=or("canvas")),Bs.width=e.width,Bs.height=e.height;let i=Bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Bs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=or("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bg=0,lr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(kl(i[a].image)):r.push(kl(i[a]))}else r=kl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function kl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var xg=0,zl=new D,Kt=class s extends ni{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Dn,i=Dn,r=Dt,a=Xn,o=pn,c=Sn,l=s.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=Nn(),this.name="",this.source=new lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zl).x}get height(){return this.source.getSize(zl).y}get depth(){return this.source.getSize(zl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gi:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gi:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Gh;Kt.DEFAULT_ANISOTROPY=1;var ou=class ou{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],p=c[9],b=c[2],g=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-b)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+b)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,v=(f+1)/2,y=(m+1)/2,T=(h+u)/4,C=(d+b)/4,x=(p+g)/4;return w>v&&w>y?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=T/n,r=C/n):v>y?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=x/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=C/r,i=x/r),this.set(n,i,r,t),this}let S=Math.sqrt((g-p)*(g-p)+(d-b)*(d-b)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(g-p)/S,this.y=(d-b)/S,this.z=(u-h)/S,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ou.prototype.isVector4=!0;var _t=ou,Yo=class extends ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new Kt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new lr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Yo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ta=class extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ko=class extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bc=class bc{constructor(e,t,n,i,r,a,o,c,l,h,d,u,f,p,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,d,u,f,p,b,g)}set(e,t,n,i,r,a,o,c,l,h,d,u,f,p,b,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),a=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,p=o*h,b=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+p*l,t[5]=u-b*l,t[9]=-o*c,t[2]=b-u*l,t[6]=p+f*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,p=l*h,b=l*d;t[0]=u+b*o,t[4]=p*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=b+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,p=l*h,b=l*d;t[0]=u-b*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=b-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*d,p=o*h,b=o*d;t[0]=c*h,t[4]=p*l-f,t[8]=u*l+b,t[1]=c*d,t[5]=b*l+u,t[9]=f*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*l,p=o*c,b=o*l;t[0]=c*h,t[4]=b-u*d,t[8]=p*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+p,t[10]=u-b*d}else if(e.order==="XZY"){let u=a*c,f=a*l,p=o*c,b=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+b,t[5]=a*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*h,t[10]=b*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_g,e,vg)}lookAt(e,t,n){let i=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Fi.crossVectors(n,En),Fi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Fi.crossVectors(n,En)),Fi.normalize(),io.crossVectors(En,Fi),i[0]=Fi.x,i[4]=io.x,i[8]=En.x,i[1]=Fi.y,i[5]=io.y,i[9]=En.y,i[2]=Fi.z,i[6]=io.z,i[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],b=n[6],g=n[10],m=n[14],S=n[3],w=n[7],v=n[11],y=n[15],T=i[0],C=i[4],x=i[8],A=i[12],N=i[1],F=i[5],H=i[9],V=i[13],O=i[2],z=i[6],J=i[10],Y=i[14],he=i[3],$=i[7],ae=i[11],se=i[15];return r[0]=a*T+o*N+c*O+l*he,r[4]=a*C+o*F+c*z+l*$,r[8]=a*x+o*H+c*J+l*ae,r[12]=a*A+o*V+c*Y+l*se,r[1]=h*T+d*N+u*O+f*he,r[5]=h*C+d*F+u*z+f*$,r[9]=h*x+d*H+u*J+f*ae,r[13]=h*A+d*V+u*Y+f*se,r[2]=p*T+b*N+g*O+m*he,r[6]=p*C+b*F+g*z+m*$,r[10]=p*x+b*H+g*J+m*ae,r[14]=p*A+b*V+g*Y+m*se,r[3]=S*T+w*N+v*O+y*he,r[7]=S*C+w*F+v*z+y*$,r[11]=S*x+w*H+v*J+y*ae,r[15]=S*A+w*V+v*Y+y*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],b=e[7],g=e[11],m=e[15],S=c*f-l*u,w=o*f-l*d,v=o*u-c*d,y=a*f-l*h,T=a*u-c*h,C=a*d-o*h;return t*(b*S-g*w+m*v)-n*(p*S-g*y+m*T)+i*(p*w-b*y+m*C)-r*(p*v-b*T+g*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],b=e[13],g=e[14],m=e[15],S=t*o-n*a,w=t*c-i*a,v=t*l-r*a,y=n*c-i*o,T=n*l-r*o,C=i*l-r*c,x=h*b-d*p,A=h*g-u*p,N=h*m-f*p,F=d*g-u*b,H=d*m-f*b,V=u*m-f*g,O=S*V-w*H+v*F+y*N-T*A+C*x;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/O;return e[0]=(o*V-c*H+l*F)*z,e[1]=(i*H-n*V-r*F)*z,e[2]=(b*C-g*T+m*y)*z,e[3]=(u*T-d*C-f*y)*z,e[4]=(c*N-a*V-l*A)*z,e[5]=(t*V-i*N+r*A)*z,e[6]=(g*v-p*C-m*w)*z,e[7]=(h*C-u*v+f*w)*z,e[8]=(a*H-o*N+l*x)*z,e[9]=(n*N-t*H-r*x)*z,e[10]=(p*T-b*v+m*S)*z,e[11]=(d*v-h*T-f*S)*z,e[12]=(o*A-a*F-c*x)*z,e[13]=(t*F-n*A+i*x)*z,e[14]=(b*w-p*y-g*S)*z,e[15]=(h*y-d*w+u*S)*z,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,p=r*d,b=a*h,g=a*d,m=o*d,S=c*l,w=c*h,v=c*d,y=n.x,T=n.y,C=n.z;return i[0]=(1-(b+m))*y,i[1]=(f+v)*y,i[2]=(p-w)*y,i[3]=0,i[4]=(f-v)*T,i[5]=(1-(u+m))*T,i[6]=(g+S)*T,i[7]=0,i[8]=(p+w)*C,i[9]=(g-S)*C,i[10]=(1-(u+b))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ks.set(i[0],i[1],i[2]).length(),o=ks.set(i[4],i[5],i[6]).length(),c=ks.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Bn.copy(this);let l=1/a,h=1/o,d=1/c;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,t.setFromRotationMatrix(Bn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=Vn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),p,b;if(c)p=r/(a-r),b=a*r/(a-r);else if(o===Vn)p=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===ar)p=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Vn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i),p,b;if(c)p=1/(a-r),b=a/(a-r);else if(o===Vn)p=-2/(a-r),b=-(a+r)/(a-r);else if(o===ar)p=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};bc.prototype.isMatrix4=!0;var Xe=bc,ks=new D,Bn=new Xe,_g=new D(0,0,0),vg=new D(1,1,1),Fi=new D,io=new D,En=new D,Od=new Xe,Bd=new Nt,xn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Od,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var hr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yg=0,kd=new D,zs=new Nt,di=new Xe,so=new D,Br=new D,Mg=new D,Sg=new Nt,zd=new D(1,0,0),Gd=new D(0,1,0),Hd=new D(0,0,1),Vd={type:"added"},Tg={type:"removed"},Gs={type:"childadded",child:null},Gl={type:"childremoved",child:null},vt=class s extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new xn,n=new Nt,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ye}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(zd,e)}rotateY(e){return this.rotateOnAxis(Gd,e)}rotateZ(e){return this.rotateOnAxis(Hd,e)}translateOnAxis(e,t){return kd.copy(e).applyQuaternion(this.quaternion),this.position.add(kd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zd,e)}translateY(e){return this.translateOnAxis(Gd,e)}translateZ(e){return this.translateOnAxis(Hd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?so.copy(e):so.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Br,so,this.up):di.lookAt(so,Br,this.up),this.quaternion.setFromRotationMatrix(di),i&&(di.extractRotation(i.matrixWorld),zs.setFromRotationMatrix(di),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vd),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tg),Gl.child=e,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vd),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,Mg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,Sg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vt.DEFAULT_UP=new D(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rt=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},wg={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),m=this._getHandJoint(l,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&u>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Hl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=$h(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Hl(a,r,e+1/3),this.g=Hl(a,r,e),this.b=Hl(a,r,e-1/3)}return tt.colorSpaceToWorking(this,i),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=hp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return tt.workingToColorSpace(an.copy(this),e),Math.round(nt(an.r*255,0,255))*65536+Math.round(nt(an.g*255,0,255))*256+Math.round(nt(an.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(an.copy(this),t);let n=an.r,i=an.g,r=an.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Pt){tt.workingToColorSpace(an.copy(this),e);let t=an.r,n=an.g,i=an.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(ro);let n=Jr(Ui.h,ro.h,t),i=Jr(Ui.s,ro.s,t),r=Jr(Ui.l,ro.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Ie;Ie.NAMES=hp;var ds=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},kn=new D,fi=new D,Vl=new D,pi=new D,Hs=new D,Vs=new D,Wd=new D,Wl=new D,ql=new D,Xl=new D,jl=new _t,Yl=new _t,Kl=new _t,$n=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),kn.subVectors(e,t),i.cross(kn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){kn.subVectors(i,t),fi.subVectors(n,t),Vl.subVectors(e,t);let a=kn.dot(kn),o=kn.dot(fi),c=kn.dot(Vl),l=fi.dot(fi),h=fi.dot(Vl),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,p=(a*h-o*c)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pi.x),c.addScaledVector(a,pi.y),c.addScaledVector(o,pi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return jl.setScalar(0),Yl.setScalar(0),Kl.setScalar(0),jl.fromBufferAttribute(e,t),Yl.fromBufferAttribute(e,n),Kl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(jl,r.x),a.addScaledVector(Yl,r.y),a.addScaledVector(Kl,r.z),a}static isFrontFacing(e,t,n,i){return kn.subVectors(n,t),fi.subVectors(e,t),kn.cross(fi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),kn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Hs.subVectors(i,n),Vs.subVectors(r,n),Wl.subVectors(e,n);let c=Hs.dot(Wl),l=Vs.dot(Wl);if(c<=0&&l<=0)return t.copy(n);ql.subVectors(e,i);let h=Hs.dot(ql),d=Vs.dot(ql);if(h>=0&&d<=h)return t.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Hs,a);Xl.subVectors(e,r);let f=Hs.dot(Xl),p=Vs.dot(Xl);if(p>=0&&f<=p)return t.copy(r);let b=f*l-c*p;if(b<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(Vs,o);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Wd.subVectors(r,i),o=(d-h)/(d-h+(f-p)),t.copy(i).addScaledVector(Wd,o);let m=1/(g+b+u);return a=b*m,o=u*m,t.copy(n).addScaledVector(Hs,a).addScaledVector(Vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},en=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),oo.subVectors(this.max,kr),Ws.subVectors(e.a,kr),qs.subVectors(e.b,kr),Xs.subVectors(e.c,kr),Oi.subVectors(qs,Ws),Bi.subVectors(Xs,qs),ss.subVectors(Ws,Xs);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-ss.z,ss.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,ss.z,0,-ss.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-ss.y,ss.x,0];return!Jl(t,Ws,qs,Xs,oo)||(t=[1,0,0,0,1,0,0,0,1],!Jl(t,Ws,qs,Xs,oo))?!1:(co.crossVectors(Oi,Bi),t=[co.x,co.y,co.z],Jl(t,Ws,qs,Xs,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mi=[new D,new D,new D,new D,new D,new D,new D,new D],zn=new D,ao=new en,Ws=new D,qs=new D,Xs=new D,Oi=new D,Bi=new D,ss=new D,kr=new D,oo=new D,co=new D,rs=new D;function Jl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){rs.fromArray(s,r);let o=i.x*Math.abs(rs.x)+i.y*Math.abs(rs.y)+i.z*Math.abs(rs.z),c=e.dot(rs),l=t.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Wt=new D,lo=new me,Eg=0,zt=class extends ni{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kh,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lo.fromBufferAttribute(this,t),lo.applyMatrix3(e),this.setXY(t,lo.x,lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var na=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ia=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Lt=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ag=new en,zr=new D,Zl=new D,_n=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ag.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);let t=zr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(zr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(Zl)),this.expandByPoint(zr.copy(e.center).sub(Zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Rg=0,Ln=new Xe,$l=new vt,js=new D,An=new en,Gr=new en,Qt=new D,Ct=class s extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($m(e)?ia:na)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return $l.lookAt(e),$l.updateMatrix(),this.applyMatrix4($l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(An.min,Gr.min),An.expandByPoint(Qt),Qt.addVectors(An.max,Gr.max),An.expandByPoint(Qt)):(An.expandByPoint(Gr.min),An.expandByPoint(Gr.max))}An.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Qt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Qt.fromBufferAttribute(o,l),c&&(js.fromBufferAttribute(e,l),Qt.add(js)),i=Math.max(i,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new D,c[x]=new D;let l=new D,h=new D,d=new D,u=new me,f=new me,p=new me,b=new D,g=new D;function m(x,A,N){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,N),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,A),p.fromBufferAttribute(r,N),h.sub(l),d.sub(l),f.sub(u),p.sub(u);let F=1/(f.x*p.y-p.x*f.y);isFinite(F)&&(b.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(F),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(F),o[x].add(b),o[A].add(b),o[N].add(b),c[x].add(g),c[A].add(g),c[N].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,A=S.length;x<A;++x){let N=S[x],F=N.start,H=N.count;for(let V=F,O=F+H;V<O;V+=3)m(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let w=new D,v=new D,y=new D,T=new D;function C(x){y.fromBufferAttribute(i,x),T.copy(y);let A=o[x];w.copy(A),w.sub(y.multiplyScalar(y.dot(A))).normalize(),v.crossVectors(T,A);let F=v.dot(c[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,F)}for(let x=0,A=S.length;x<A;++x){let N=S[x],F=N.start,H=N.count;for(let V=F,O=F+H;V<O;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,d=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),b=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,p=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let m=0;m<h;m++)u[p++]=l[f++]}return new zt(u,h,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},fs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kh,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},dn=new D,Hi=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),i=xt(i,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ea("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ea("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ql=new D,Cg=new D,Pg=new Ye,Gn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ql.subVectors(n,t).cross(Cg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Ql),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pg.getNormalMatrix(e),i=this.coplanarPoint(Ql).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ig=0,on=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=Mr,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=Nh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Gn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},dr=class extends on{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ys,Hr=new D,Ks=new D,Js=new D,Zs=new me,Vr=new me,up=new Xe,ho=new D,Wr=new D,uo=new D,qd=new me,eh=new me,Xd=new me,sa=class extends vt{constructor(e=new dr){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new Ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fs(t,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new Hi(n,3,0,!1)),Ys.setAttribute("uv",new Hi(n,2,3,!1))}this.geometry=Ys,this.material=e,this.center=new me(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),up.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-Js.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;fo(ho.set(-.5,-.5,0),Js,a,Ks,i,r),fo(Wr.set(.5,-.5,0),Js,a,Ks,i,r),fo(uo.set(.5,.5,0),Js,a,Ks,i,r),qd.set(0,0),eh.set(1,0),Xd.set(1,1);let o=e.ray.intersectTriangle(ho,Wr,uo,!1,Hr);if(o===null&&(fo(Wr.set(-.5,.5,0),Js,a,Ks,i,r),eh.set(0,1),o=e.ray.intersectTriangle(ho,uo,Wr,!1,Hr),o===null))return;let c=e.ray.origin.distanceTo(Hr);c<e.near||c>e.far||t.push({distance:c,point:Hr.clone(),uv:$n.getInterpolation(Hr,ho,Wr,uo,qd,eh,Xd,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function fo(s,e,t,n,i,r){Zs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Vr.x=r*Zs.x-i*Zs.y,Vr.y=i*Zs.x+r*Zs.y):Vr.copy(Zs),s.copy(e),s.x+=Vr.x,s.y+=Vr.y,s.applyMatrix4(up)}var gi=new D,th=new D,po=new D,mo=new D,Vi=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){th.copy(e).add(t).multiplyScalar(.5),po.copy(t).sub(e).normalize(),mo.copy(this.origin).sub(th);let r=e.distanceTo(t)*.5,a=-this.direction.dot(po),o=mo.dot(this.direction),c=-mo.dot(po),l=mo.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*c-o,u=a*o-c,p=r*h,d>=0)if(u>=-p)if(u<=p){let b=1/h;d*=b,u*=b,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=p?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(th).addScaledVector(po,u),f}intersectSphere(e,t){if(e.radius<0)return null;gi.subVectors(e.center,this.origin);let n=gi.dot(this.direction),i=gi.dot(gi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,p=t.x-a.x,b=t.y-a.y,g=t.z-a.z,m=n.x-a.x,S=n.y-a.y,w=n.z-a.z,v=Math.abs(c),y=Math.abs(l),T=Math.abs(h),C,x,A,N,F,H,V,O,z,J,Y,he;if(v>=y&&v>=T?(A=c,H=d,z=p,he=m,c>=0?(C=l,x=h,N=u,F=f,V=b,O=g,J=S,Y=w):(C=h,x=l,N=f,F=u,V=g,O=b,J=w,Y=S)):y>=T?(A=l,H=u,z=b,he=S,l>=0?(C=h,x=c,N=f,F=d,V=g,O=p,J=w,Y=m):(C=c,x=h,N=d,F=f,V=p,O=g,J=m,Y=w)):(A=h,H=f,z=g,he=w,h>=0?(C=c,x=l,N=d,F=u,V=p,O=b,J=m,Y=S):(C=l,x=c,N=u,F=d,V=b,O=p,J=S,Y=m)),A===0)return null;let $=C/A,ae=x/A,se=1/A,Pe=N-$*H,Ae=F-ae*H,at=V-$*z,Ze=O-ae*z,ct=J-$*he,Z=Y-ae*he,oe=ct*Ze-Z*at,ye=Pe*Z-Ae*ct,Ge=at*Ae-Ze*Pe;if(i){if(oe<0||ye<0||Ge<0)return null}else if((oe<0||ye<0||Ge<0)&&(oe>0||ye>0||Ge>0))return null;let we=oe+ye+Ge;if(we===0)return null;let We=se*(oe*H+ye*z+Ge*he);return(we>0?We<0:We>0)?null:this.at(We/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},jd=new Xe,as=new Vi,go=new _n,Yd=new D,bo=new D,xo=new D,_o=new D,nh=new D,vo=new D,Kd=new D,yo=new D,it=class extends vt{constructor(e=new Ct,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){vo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(nh.fromBufferAttribute(d,e),a?vo.addScaledVector(nh,h):vo.addScaledVector(nh.sub(t),h))}t.add(vo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(go.containsPoint(as.origin)===!1&&(as.intersectSphere(go,Yd)===null||as.origin.distanceToSquared(Yd)>(e.far-e.near)**2))&&(jd.copy(r).invert(),as.copy(e.ray).applyMatrix4(jd),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,b=u.length;p<b;p++){let g=u[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=S,y=w;v<y;v+=3){let T=o.getX(v),C=o.getX(v+1),x=o.getX(v+2);i=Mo(this,m,e,n,l,h,d,T,C,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=p,m=b;g<m;g+=3){let S=o.getX(g),w=o.getX(g+1),v=o.getX(g+2);i=Mo(this,a,e,n,l,h,d,S,w,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,b=u.length;p<b;p++){let g=u[p],m=a[g.materialIndex],S=Math.max(g.start,f.start),w=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=S,y=w;v<y;v+=3){let T=v,C=v+1,x=v+2;i=Mo(this,m,e,n,l,h,d,T,C,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let g=p,m=b;g<m;g+=3){let S=g,w=g+1,v=g+2;i=Mo(this,a,e,n,l,h,d,S,w,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Lg(s,e,t,n,i,r,a,o){let c;if(e.side===Jt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Fn,o),c===null)return null;yo.copy(o),yo.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(yo);return l<t.near||l>t.far?null:{distance:l,point:yo.clone(),object:s}}function Mo(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,bo),s.getVertexPosition(c,xo),s.getVertexPosition(l,_o);let h=Lg(s,e,t,n,bo,xo,_o,Kd);if(h){let d=new D;$n.getBarycoord(Kd,bo,xo,_o,d),i&&(h.uv=$n.getInterpolatedAttribute(i,o,c,l,d,new me)),r&&(h.uv1=$n.getInterpolatedAttribute(r,o,c,l,d,new me)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,c,l,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new D,materialIndex:0};$n.getNormal(bo,xo,_o,u.normal),h.face=u,h.barycoord=d}return h}var qr=new _t,Jd=new _t,Zd=new _t,Dg=new _t,$d=new Xe,So=new D,ih=new _n,Qd=new Xe,sh=new Vi,ra=class extends it{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dh,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new en),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,So),this.boundingBox.expandByPoint(So)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,So),this.boundingSphere.expandByPoint(So)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ih.copy(this.boundingSphere),ih.applyMatrix4(i),e.ray.intersectsSphere(ih)!==!1&&(Qd.copy(i).invert(),sh.copy(e.ray).applyMatrix4(Qd),!(this.boundingBox!==null&&sh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Oe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Jd.fromBufferAttribute(i.attributes.skinIndex,e),Zd.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(qr.copy(t),t.set(0,0,0,0)):(qr.set(...t,1),t.set(0,0,0)),qr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Zd.getComponent(r);if(a!==0){let o=Jd.getComponent(r);$d.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Dg.copy(qr).applyMatrix4($d),a)}}return t.isVector4&&(t.w=qr.w),t.applyMatrix4(this.bindMatrixInverse)}},fr=class extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Wi=class extends Kt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Gt,h=Gt,d,u){super(null,a,o,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ef=new Xe,Ng=new Xe,aa=class s{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Ng;ef.multiplyMatrices(o,t[r]),ef.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Wi(t,e,e,pn,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Oe("Skeleton: No bone found with UUID:",r),a=new fr),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},_i=class extends zt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$s=new Xe,tf=new Xe,To=[],nf=new en,Fg=new Xe,Xr=new it,jr=new _n,ps=class extends it{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _i(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Fg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new en),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),nf.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(nf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),jr.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jr.copy(this.boundingSphere),jr.applyMatrix4(n),e.ray.intersectsSphere(jr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,$s),tf.multiplyMatrices(n,$s),Xr.matrixWorld=tf,Xr.raycast(e,To);for(let a=0,o=To.length;a<o;a++){let c=To[a];c.instanceId=r,c.object=this,t.push(c)}To.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _i(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wi(new Float32Array(i*this.count),i,this.count,wc,Cn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},os=new _n,Ug=new me(.5,.5),wo=new D,pr=class{constructor(e=new Gn,t=new Gn,n=new Gn,i=new Gn,r=new Gn,a=new Gn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],b=r[9],g=r[10],m=r[11],S=r[12],w=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-a,f-h,m-p,y-S).normalize(),i[1].setComponents(l+a,f+h,m+p,y+S).normalize(),i[2].setComponents(l+o,f+d,m+b,y+w).normalize(),i[3].setComponents(l-o,f-d,m-b,y-w).normalize(),n)i[4].setComponents(c,u,g,v).normalize(),i[5].setComponents(l-c,f-u,m-g,y-v).normalize();else if(i[4].setComponents(l-c,f-u,m-g,y-v).normalize(),t===Vn)i[5].setComponents(l+c,f+u,m+g,y+v).normalize();else if(t===ar)i[5].setComponents(c,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);let t=Ug.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(wo.x=i.normal.x>0?e.max.x:e.min.x,wo.y=i.normal.y>0?e.max.y:e.min.y,wo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qi=class extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jo=new D,Zo=new D,sf=new Xe,Yr=new Vi,Eo=new _n,rh=new D,rf=new D,ms=class extends vt{constructor(e=new Ct,t=new qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Jo.fromBufferAttribute(t,i-1),Zo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Jo.distanceTo(Zo);e.setAttribute("lineDistance",new Lt(n,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(i),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;sf.copy(i).invert(),Yr.copy(e.ray).applyMatrix4(sf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let b=f,g=p-1;b<g;b+=l){let m=h.getX(b),S=h.getX(b+1),w=Ao(this,e,Yr,c,m,S,b);w&&t.push(w)}if(this.isLineLoop){let b=h.getX(p-1),g=h.getX(f),m=Ao(this,e,Yr,c,b,g,p-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let b=f,g=p-1;b<g;b+=l){let m=Ao(this,e,Yr,c,b,b+1,b);m&&t.push(m)}if(this.isLineLoop){let b=Ao(this,e,Yr,c,p-1,f,p-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ao(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Jo.fromBufferAttribute(o,i),Zo.fromBufferAttribute(o,r),t.distanceSqToSegment(Jo,Zo,rh,rf)>n)return;rh.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(rh);if(!(l<e.near||l>e.far))return{distance:l,point:rf.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var af=new D,of=new D,gs=class extends ms{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)af.fromBufferAttribute(t,i),of.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+af.distanceTo(of);e.setAttribute("lineDistance",new Lt(n,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},oa=class extends ms{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},mr=class extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cf=new Xe,bh=new Vi,Ro=new _n,Co=new D,bs=class extends vt{constructor(e=new Ct,t=new mr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(i),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;cf.copy(i).invert(),bh.copy(e.ray).applyMatrix4(cf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=u,b=f;p<b;p++){let g=l.getX(p);Co.fromBufferAttribute(d,g),lf(Co,g,c,i,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,b=f;p<b;p++)Co.fromBufferAttribute(d,p),lf(Co,p,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lf(s,e,t,n,i,r,a){let o=bh.distanceSqToPoint(s);if(o<t){let c=new D;bh.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ca=class extends Kt{constructor(e=[],t=Ji,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gr=class extends Kt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xi=class extends Kt{constructor(e,t,n=jn,i,r,a,o=Gt,c=Gt,l,h=ti,d=1){if(h!==ti&&h!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},$o=class extends Xi{constructor(e,t=jn,n=Ji,i,r,a=Gt,o=Gt,c,l=ti){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},la=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ii=class s extends Ct{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(d,2));function p(b,g,m,S,w,v,y,T,C,x,A){let N=v/C,F=y/x,H=v/2,V=y/2,O=T/2,z=C+1,J=x+1,Y=0,he=0,$=new D;for(let ae=0;ae<J;ae++){let se=ae*F-V;for(let Pe=0;Pe<z;Pe++){let Ae=Pe*N-H;$[b]=Ae*S,$[g]=se*w,$[m]=O,l.push($.x,$.y,$.z),$[b]=0,$[g]=0,$[m]=T>0?1:-1,h.push($.x,$.y,$.z),d.push(Pe/C),d.push(1-ae/x),Y+=1}}for(let ae=0;ae<x;ae++)for(let se=0;se<C;se++){let Pe=u+se+z*ae,Ae=u+se+z*(ae+1),at=u+(se+1)+z*(ae+1),Ze=u+(se+1)+z*ae;c.push(Pe,Ae,Ze),c.push(Ae,at,Ze),he+=6}o.addGroup(f,he,A),f+=he,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Po=new D,Io=new D,ah=new D,Lo=new $n,ha=class extends Ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(nr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<c;p+=3){a?(l[0]=a.getX(p),l[1]=a.getX(p+1),l[2]=a.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);let{a:b,b:g,c:m}=Lo;if(b.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),Lo.getNormal(ah),d[0]=`${Math.round(b.x*i)},${Math.round(b.y*i)},${Math.round(b.z*i)}`,d[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let S=0;S<3;S++){let w=(S+1)%3,v=d[S],y=d[w],T=Lo[h[S]],C=Lo[h[w]],x=`${v}_${y}`,A=`${y}_${v}`;A in u&&u[A]?(ah.dot(u[A].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(C.x,C.y,C.z)),u[A]=null):x in u||(u[x]={index0:l[S],index1:l[w],normal:ah.clone()})}}for(let p in u)if(u[p]){let{index0:b,index1:g}=u[p];Po.fromBufferAttribute(o,b),Io.fromBufferAttribute(o,g),f.push(Po.x,Po.y,Po.z),f.push(Io.x,Io.y,Io.z)}this.setAttribute("position",new Lt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new me:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,i=[],r=[],a=[],o=new D,c=new Xe;for(let f=0;f<=e;f++){let p=f/e;i[f]=this.getTangentAt(p,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(nt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(nt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},br=class extends Rn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new me){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qo=class extends br{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Qh(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var hf=new D,uf=new D,oh=new Qh,ch=new Qh,lh=new Qh,ec=class extends Rn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(uf.subVectors(i[0],i[1]).add(i[0]),l=uf);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(hf.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=hf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(d),f),b=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);b<1e-4&&(b=1),p<1e-4&&(p=b),g<1e-4&&(g=b),oh.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,p,b,g),ch.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,p,b,g),lh.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,p,b,g)}else this.curveType==="catmullrom"&&(oh.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),ch.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),lh.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(oh.calc(c),ch.calc(c),lh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function df(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function Og(s,e){let t=1-s;return t*t*e}function Bg(s,e){return 2*(1-s)*s*e}function kg(s,e){return s*s*e}function Zr(s,e,t,n){return Og(s,e)+Bg(s,t)+kg(s,n)}function zg(s,e){let t=1-s;return t*t*t*e}function Gg(s,e){let t=1-s;return 3*t*t*s*e}function Hg(s,e){return 3*(1-s)*s*s*e}function Vg(s,e){return s*s*s*e}function $r(s,e,t,n,i){return zg(s,e)+Gg(s,t)+Hg(s,n)+Vg(s,i)}var ua=class extends Rn{constructor(e=new me,t=new me,n=new me,i=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new me){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($r(e,i.x,r.x,a.x,o.x),$r(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tc=class extends Rn{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($r(e,i.x,r.x,a.x,o.x),$r(e,i.y,r.y,a.y,o.y),$r(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},da=class extends Rn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nc=class extends Rn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends Rn{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Zr(e,i.x,r.x,a.x),Zr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ic=class extends Rn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Zr(e,i.x,r.x,a.x),Zr(e,i.y,r.y,a.y),Zr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends Rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(df(o,c.x,l.x,h.x,d.x),df(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new me().fromArray(i))}return this}},xh=Object.freeze({__proto__:null,ArcCurve:Qo,CatmullRomCurve3:ec,CubicBezierCurve:ua,CubicBezierCurve3:tc,EllipseCurve:br,LineCurve:da,LineCurve3:nc,QuadraticBezierCurve:fa,QuadraticBezierCurve3:ic,SplineCurve:pa}),sc=class extends Rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new xh[i.type]().fromJSON(i))}return this}},ma=class extends sc{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new da(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new fa(this.currentPoint.clone(),new me(e,t),new me(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new ua(this.currentPoint.clone(),new me(e,t),new me(n,i),new me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new pa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){let l=new br(e,t,n,i,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xs=class extends ma{constructor(e){super(e),this.uuid=Nn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ma().fromJSON(i))}return this}};function Wg(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=dp(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Kg(s,e,r,t)),s.length>80*t){o=s[0],c=s[1];let h=o,d=c;for(let u=t;u<i;u+=t){let f=s[u],p=s[u+1];f<o&&(o=f),p<c&&(c=p),f>h&&(h=f),p>d&&(d=p)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return ga(r,a,t,o,c,l,0),a}function dp(s,e,t,n,i){let r;if(i===a0(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=ff(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=ff(a/n|0,s[a],s[a+1],r);return r&&xr(r,r.next)&&(xa(r),r=r.next),r}function _s(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(xr(t,t.next)||It(t.prev,t,t.next)===0)){if(xa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ga(s,e,t,n,i,r,a){if(!s)return;!a&&r&&e0(s,n,i,r);let o=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?Xg(s,n,i,r):qg(s)){e.push(c.i,s.i,l.i),xa(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=jg(_s(s),e),ga(s,e,t,n,i,r,2)):a===2&&Yg(s,e,t,n,i,r):ga(_s(s),e,t,n,i,r,1);break}}}function qg(s){let e=s.prev,t=s,n=s.next;if(It(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(i,r,a),d=Math.min(o,c,l),u=Math.max(i,r,a),f=Math.max(o,c,l),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Kr(i,o,r,c,a,l,p.x,p.y)&&It(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Xg(s,e,t,n){let i=s.prev,r=s,a=s.next;if(It(i,r,a)>=0)return!1;let o=i.x,c=r.x,l=a.x,h=i.y,d=r.y,u=a.y,f=Math.min(o,c,l),p=Math.min(h,d,u),b=Math.max(o,c,l),g=Math.max(h,d,u),m=_h(f,p,e,t,n),S=_h(b,g,e,t,n),w=s.prevZ,v=s.nextZ;for(;w&&w.z>=m&&v&&v.z<=S;){if(w.x>=f&&w.x<=b&&w.y>=p&&w.y<=g&&w!==i&&w!==a&&Kr(o,h,c,d,l,u,w.x,w.y)&&It(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=b&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&Kr(o,h,c,d,l,u,v.x,v.y)&&It(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=b&&w.y>=p&&w.y<=g&&w!==i&&w!==a&&Kr(o,h,c,d,l,u,w.x,w.y)&&It(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=b&&v.y>=p&&v.y<=g&&v!==i&&v!==a&&Kr(o,h,c,d,l,u,v.x,v.y)&&It(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function jg(s,e){let t=s;do{let n=t.prev,i=t.next.next;!xr(n,i)&&pp(n,t,t.next,i)&&ba(n,i)&&ba(i,n)&&(e.push(n.i,t.i,i.i),xa(t),xa(t.next),t=s=i),t=t.next}while(t!==s);return _s(t)}function Yg(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&i0(a,o)){let c=mp(a,o);a=_s(a,a.next),c=_s(c,c.next),ga(a,e,t,n,i,r,0),ga(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Kg(s,e,t,n){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=dp(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(n0(l))}i.sort(Jg);for(let r=0;r<i.length;r++)t=Zg(i[r],t);return t}function Jg(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Zg(s,e){let t=$g(s,e);if(!t)return e;let n=mp(t,s);return _s(n,n.next),_s(t,t.next)}function $g(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;if(xr(s,t))return t;do{if(xr(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&fp(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){let d=Math.abs(i-t.y)/(n-t.x);ba(t,s)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&Qg(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function Qg(s,e){return It(s.prev,s,e.prev)<0&&It(e.next,s,s.next)<0}function e0(s,e,t,n){let i=s;do i.z===0&&(i.z=_h(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,t0(i)}function t0(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function _h(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function n0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function fp(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Kr(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&fp(s,e,t,n,i,r,a,o)}function i0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!s0(s,e)&&(ba(s,e)&&ba(e,s)&&r0(s,e)&&(It(s.prev,s,e.prev)||It(s,e.prev,e))||xr(s,e)&&It(s.prev,s,s.next)>0&&It(e.prev,e,e.next)>0)}function It(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function xr(s,e){return s.x===e.x&&s.y===e.y}function pp(s,e,t,n){let i=No(It(s,e,t)),r=No(It(s,e,n)),a=No(It(t,n,s)),o=No(It(t,n,e));return!!(i!==r&&a!==o||i===0&&Do(s,t,e)||r===0&&Do(s,n,e)||a===0&&Do(t,s,n)||o===0&&Do(t,e,n))}function Do(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function No(s){return s>0?1:s<0?-1:0}function s0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&pp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ba(s,e){return It(s.prev,s,s.next)<0?It(s,e,s.next)>=0&&It(s,s.prev,e)>=0:It(s,e,s.prev)<0||It(s,s.next,e)<0}function r0(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function mp(s,e){let t=vh(s.i,s.x,s.y),n=vh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ff(s,e,t,n){let i=vh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function xa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function vh(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function a0(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var yh=class{static triangulate(e,t,n=2){return Wg(e,t,n)}},Qn=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];pf(e),mf(n,e);let a=e.length;t.forEach(pf);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,mf(n,t[c]);let o=yh.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function pf(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function mf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var _a=class s extends Ct{constructor(e=new xs([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Lt(i,3)),this.setAttribute("uv",new Lt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:o0,w,v=!1,y,T,C,x;if(m){w=m.getSpacedPoints(h),v=!0,u=!1;let re=m.isCatmullRomCurve3?m.closed:!1;y=m.computeFrenetFrames(h,re),T=new D,C=new D,x=new D}u||(g=0,f=0,p=0,b=0);let A=o.extractPoints(l),N=A.shape,F=A.holes;if(!Qn.isClockWise(N)){N=N.reverse();for(let re=0,ue=F.length;re<ue;re++){let de=F[re];Qn.isClockWise(de)&&(F[re]=de.reverse())}}function V(re){let de=10000000000000001e-36,fe=re[0];for(let xe=1;xe<=re.length;xe++){let ke=xe%re.length,Be=re[ke],qe=Be.x-fe.x,je=Be.y-fe.y,U=qe*qe+je*je,dt=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(fe.x),Math.abs(fe.y)),$e=de*dt*dt;if(U<=$e){re.splice(ke,1),xe--;continue}fe=Be}}V(N),F.forEach(V);let O=F.length,z=N;for(let re=0;re<O;re++){let ue=F[re];N=N.concat(ue)}function J(re,ue,de){return ue||He("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(ue,de)}let Y=N.length;function he(re,ue,de){let fe,xe,ke,Be=re.x-ue.x,qe=re.y-ue.y,je=de.x-re.x,U=de.y-re.y,dt=Be*Be+qe*qe,$e=Be*U-qe*je;if(Math.abs($e)>Number.EPSILON){let R=Math.sqrt(dt),_=Math.sqrt(je*je+U*U),k=ue.x-qe/R,j=ue.y+Be/R,Q=de.x-U/_,ge=de.y+je/_,be=((Q-k)*U-(ge-j)*je)/(Be*U-qe*je);fe=k+Be*be-re.x,xe=j+qe*be-re.y;let ee=fe*fe+xe*xe;if(ee<=2)return new me(fe,xe);ke=Math.sqrt(ee/2)}else{let R=!1;Be>Number.EPSILON?je>Number.EPSILON&&(R=!0):Be<-Number.EPSILON?je<-Number.EPSILON&&(R=!0):Math.sign(qe)===Math.sign(U)&&(R=!0),R?(fe=-qe,xe=Be,ke=Math.sqrt(dt)):(fe=Be,xe=qe,ke=Math.sqrt(dt/2))}return new me(fe/ke,xe/ke)}let $=[];for(let re=0,ue=z.length,de=ue-1,fe=re+1;re<ue;re++,de++,fe++)de===ue&&(de=0),fe===ue&&(fe=0),$[re]=he(z[re],z[de],z[fe]);let ae=[],se,Pe=$.concat();for(let re=0,ue=O;re<ue;re++){let de=F[re];se=[];for(let fe=0,xe=de.length,ke=xe-1,Be=fe+1;fe<xe;fe++,ke++,Be++)ke===xe&&(ke=0),Be===xe&&(Be=0),se[fe]=he(de[fe],de[ke],de[Be]);ae.push(se),Pe=Pe.concat(se)}let Ae;if(g===0)Ae=Qn.triangulateShape(z,F);else{let re=[],ue=[];for(let de=0;de<g;de++){let fe=de/g,xe=f*Math.cos(fe*Math.PI/2),ke=p*Math.sin(fe*Math.PI/2)+b;for(let Be=0,qe=z.length;Be<qe;Be++){let je=J(z[Be],$[Be],ke);ye(je.x,je.y,-xe),fe===0&&re.push(je)}for(let Be=0,qe=O;Be<qe;Be++){let je=F[Be];se=ae[Be];let U=[];for(let dt=0,$e=je.length;dt<$e;dt++){let R=J(je[dt],se[dt],ke);ye(R.x,R.y,-xe),fe===0&&U.push(R)}fe===0&&ue.push(U)}}Ae=Qn.triangulateShape(re,ue)}let at=Ae.length,Ze=p+b;for(let re=0;re<Y;re++){let ue=u?J(N[re],Pe[re],Ze):N[re];v?(C.copy(y.normals[0]).multiplyScalar(ue.x),T.copy(y.binormals[0]).multiplyScalar(ue.y),x.copy(w[0]).add(C).add(T),ye(x.x,x.y,x.z)):ye(ue.x,ue.y,0)}for(let re=1;re<=h;re++)for(let ue=0;ue<Y;ue++){let de=u?J(N[ue],Pe[ue],Ze):N[ue];v?(C.copy(y.normals[re]).multiplyScalar(de.x),T.copy(y.binormals[re]).multiplyScalar(de.y),x.copy(w[re]).add(C).add(T),ye(x.x,x.y,x.z)):ye(de.x,de.y,d/h*re)}for(let re=g-1;re>=0;re--){let ue=re/g,de=f*Math.cos(ue*Math.PI/2),fe=p*Math.sin(ue*Math.PI/2)+b;for(let xe=0,ke=z.length;xe<ke;xe++){let Be=J(z[xe],$[xe],fe);ye(Be.x,Be.y,d+de)}for(let xe=0,ke=F.length;xe<ke;xe++){let Be=F[xe];se=ae[xe];for(let qe=0,je=Be.length;qe<je;qe++){let U=J(Be[qe],se[qe],fe);v?ye(U.x,U.y+w[h-1].y,w[h-1].x+de):ye(U.x,U.y,d+de)}}}ct(),Z();function ct(){let re=i.length/3;if(u){let ue=0,de=Y*ue;for(let fe=0;fe<at;fe++){let xe=Ae[fe];Ge(xe[2]+de,xe[1]+de,xe[0]+de)}ue=h+g*2,de=Y*ue;for(let fe=0;fe<at;fe++){let xe=Ae[fe];Ge(xe[0]+de,xe[1]+de,xe[2]+de)}}else{for(let ue=0;ue<at;ue++){let de=Ae[ue];Ge(de[2],de[1],de[0])}for(let ue=0;ue<at;ue++){let de=Ae[ue];Ge(de[0]+Y*h,de[1]+Y*h,de[2]+Y*h)}}n.addGroup(re,i.length/3-re,0)}function Z(){let re=i.length/3,ue=0;oe(z,ue),ue+=z.length;for(let de=0,fe=F.length;de<fe;de++){let xe=F[de];oe(xe,ue),ue+=xe.length}n.addGroup(re,i.length/3-re,1)}function oe(re,ue){let de=re.length;for(;--de>=0;){let fe=de,xe=de-1;xe<0&&(xe=re.length-1);for(let ke=0,Be=h+g*2;ke<Be;ke++){let qe=Y*ke,je=Y*(ke+1),U=ue+fe+qe,dt=ue+xe+qe,$e=ue+xe+je,R=ue+fe+je;we(U,dt,$e,R)}}}function ye(re,ue,de){c.push(re),c.push(ue),c.push(de)}function Ge(re,ue,de){We(re),We(ue),We(de);let fe=i.length/3,xe=S.generateTopUV(n,i,fe-3,fe-2,fe-1);pt(xe[0]),pt(xe[1]),pt(xe[2])}function we(re,ue,de,fe){We(re),We(ue),We(fe),We(ue),We(de),We(fe);let xe=i.length/3,ke=S.generateSideWallUV(n,i,xe-6,xe-3,xe-2,xe-1);pt(ke[0]),pt(ke[1]),pt(ke[3]),pt(ke[1]),pt(ke[2]),pt(ke[3])}function We(re){i.push(c[re*3+0]),i.push(c[re*3+1]),i.push(c[re*3+2])}function pt(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return c0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new xh[i.type]().fromJSON(i)),new s(n,e.options)}},o0={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new me(r,a),new me(o,c),new me(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[i*3],f=e[i*3+1],p=e[i*3+2],b=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new me(a,1-c),new me(l,1-d),new me(u,1-p),new me(b,1-m)]:[new me(o,1-c),new me(h,1-d),new me(f,1-p),new me(g,1-m)]}};function c0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Wn=class s extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,u=t/c,f=[],p=[],b=[],g=[];for(let m=0;m<h;m++){let S=m*u-a;for(let w=0;w<l;w++){let v=w*d-r;p.push(v,-S,0),b.push(0,0,1),g.push(w/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){let w=S+l*m,v=S+l*(m+1),y=S+1+l*(m+1),T=S+1+l*m;f.push(w,v,T),f.push(v,y,T)}this.setIndex(f),this.setAttribute("position",new Lt(p,3)),this.setAttribute("normal",new Lt(b,3)),this.setAttribute("uv",new Lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var va=class s extends Ct{constructor(e=new xs([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Lt(i,3)),this.setAttribute("normal",new Lt(r,3)),this.setAttribute("uv",new Lt(a,2));function l(h){let d=i.length/3,u=h.extractPoints(t),f=u.shape,p=u.holes;Qn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){let S=p[g];Qn.isClockWise(S)===!0&&(p[g]=S.reverse())}let b=Qn.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){let S=p[g];f=f.concat(S)}for(let g=0,m=f.length;g<m;g++){let S=f[g];i.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let g=0,m=b.length;g<m;g++){let S=b[g],w=S[0]+d,v=S[1]+d,y=S[2]+d;n.push(w,v,y),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return l0(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function l0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}function Es(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(gf(i))i.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(gf(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function ln(s){let e={};for(let t=0;t<s.length;t++){let n=Es(s[t]);for(let i in n)e[i]=n[i]}return e}function gf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function h0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function eu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var gp={clone:Es,merge:ln},u0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=u0,this.fragmentShader=d0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=h0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(i.value);break;case"v2":this.uniforms[n].value=new me().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},rc=class extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tn=class extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vn=class extends tn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ya=class extends on{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=xc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ac=class extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oc=class extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function zi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ko(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function f0(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function bf(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function p0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var si=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},cc=class extends si{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ph,endingEnd:ph}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case mh:r=e,o=2*t-n;break;case gh:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case mh:a=e,c=2*n-t;break;case gh:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),b=p*p,g=b*p,m=-u*g+2*u*b-u*p,S=(1+u)*g+(-1.5-2*u)*b+(-.5+u)*p+1,w=(-1-f)*g+(1.5+f)*b+.5*p,v=f*g-f*b;for(let y=0;y!==o;++y)r[y]=m*a[h+y]+S*a[l+y]+w*a[c+y]+v*a[d+y];return r}},lc=class extends si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},hc=class extends si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},uc=class extends si{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-t)/(i-t),b=1-p;for(let g=0;g!==o;++g)r[g]=a[l+g]*b+a[c+g]*p;return r}let u=o*2,f=e-1;for(let p=0;p!==o;++p){let b=a[l+p],g=a[c+p],m=f*u+p*2,S=d[m],w=d[m+1],v=e*u+p*2,y=h[v],T=h[v+1],C=g0(n,t,S,y,i);r[p]=bp(C,b,w,T,g)}return r}};function bp(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function m0(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function g0(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=bp(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let c=m0(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zi(t,this.TimeBufferType),this.values=zi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zi(e.times,Array),values:zi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),ko(e.settings)&&(n.settings={inTangents:zi(e.settings.inTangents,Array),outTangents:zi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new uc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ls:t=this.InterpolantFactoryMethodDiscrete;break;case hs:t=this.InterpolantFactoryMethodLinear;break;case Oo:t=this.InterpolantFactoryMethodSmooth;break;case fh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ls;case this.InterpolantFactoryMethodLinear:return hs;case this.InterpolantFactoryMethodSmooth:return Oo;case this.InterpolantFactoryMethodBezier:return fh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;ko(this.settings)&&(xf(this.settings.inTangents,e),xf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){He("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){He("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Qm(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){He("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Oo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let b=t[d+p];if(b!==t[u+p]||b!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,ko(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function xf(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=hs;var vi=class extends yn{constructor(e,t,n){super(e,t,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=ls;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};Ma.prototype.ValueTypeName="color";var yi=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};yi.prototype.ValueTypeName="number";var dc=class extends si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Nt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Mi=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new dc(this.times,this.values,this.getValueSize(),e)}};Mi.prototype.ValueTypeName="quaternion";Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends yn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=ls;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};ji.prototype.ValueTypeName="vector";var Sa=class{constructor(e="",t=-1,n=[],i=Jf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Nn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(x0(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=f0(c);c=bf(c,1,h),l=bf(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new yi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let d=h[1],u=i[d];u||(i[d]=u=[]),u.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function b0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yi;case"vector":case"vector2":case"vector3":case"vector4":return ji;case"color":return Ma;case"quaternion":return Mi;case"bool":case"boolean":return vi;case"string":return Si}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function x0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=b0(s.type);if(s.times===void 0){let n=[],i=[];p0(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),ko(s.settings)&&(t.settings={inTangents:zi(s.settings.inTangents,Float32Array),outTangents:zi(s.settings.outTangents,Float32Array)}),t}var ei={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(_f(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!_f(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function _f(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var fc=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xp=new fc,ri=class{constructor(e){this.manager=e!==void 0?e:xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ri.DEFAULT_MATERIAL_NAME="__DEFAULT";var bi={},Mh=class extends Error{constructor(e,t){super(e),this.response=t}},_r=class extends ri{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ei.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:i});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=bi[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,b=0,g=new ReadableStream({start(m){S();function S(){d.read().then(({done:w,value:v})=>{if(w)m.close();else{b+=v.byteLength;let y=new ProgressEvent("progress",{lengthComputable:p,loaded:b,total:f});for(let T=0,C=h.length;T<C;T++){let x=h[T];x.onProgress&&x.onProgress(y)}m.enqueue(v),S()}},w=>{m.error(w)})}}});return new Response(g)}else throw new Mh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{ei.add(`file:${e}`,l);let h=bi[e];delete bi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=bi[e];if(h===void 0)throw this.manager.itemError(e),l;delete bi[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Qs=new WeakMap,pc=class extends ri{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ei.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Qs.get(a);d===void 0&&(d=[],Qs.set(a,d)),d.push({onLoad:t,onError:i})}return a}let o=or("img");function c(){h(),t&&t(this);let d=Qs.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Qs.delete(this),r.manager.itemEnd(e)}function l(d){h(),i&&i(d),ei.remove(`image:${e}`);let u=Qs.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}Qs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ei.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Ta=class extends ri{constructor(e){super(e)}load(e,t,n,i){let r=new Kt,a=new pc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},vs=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},wa=class extends vs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hh=new Xe,vf=new D,yf=new D,vr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pr,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;vf.setFromMatrixPosition(e.matrixWorld),t.position.copy(vf),yf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(hh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===ar||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fo=new D,Uo=new Nt,Zn=new D,Ea=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fo,Uo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Uo,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Fo,Uo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fo,Uo,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new D,Mf=new me,Sf=new me,qt=class extends Ea{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,Mf,Sf),t.subVectors(Sf,Mf)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Sh=class extends vr{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=us*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Aa=class extends vs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Sh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Th=class extends vr{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}},ai=class extends vs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Th}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Yi=class extends Ea{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wh=class extends vr{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ki=class extends vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new wh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ti=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var uh=new WeakMap,Ra=class extends ri{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Oe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Oe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ei.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{uh.has(a)===!0?(i&&i(uh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ei.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),uh.set(c,l),ei.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ei.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var er=-90,tr=1,mc=class extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new qt(er,tr,e,t);i.layers=this.layers,this.add(i);let r=new qt(er,tr,e,t);r.layers=this.layers,this.add(r);let a=new qt(er,tr,e,t);a.layers=this.layers,this.add(a);let o=new qt(er,tr,e,t);o.layers=this.layers,this.add(o);let c=new qt(er,tr,e,t);c.layers=this.layers,this.add(c);let l=new qt(er,tr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},gc=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var tu="\\[\\]\\.:\\/",_0=new RegExp("["+tu+"]","g"),nu="[^"+tu+"]",v0="[^"+tu.replace("\\.","")+"]",y0=/((?:WC+[\/:])*)/.source.replace("WC",nu),M0=/(WCOD+)?/.source.replace("WCOD",v0),S0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),T0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),w0=new RegExp("^"+y0+M0+S0+T0+"$"),E0=["material","materials","bones","map"],Eh=class{constructor(e,t,n){let i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_0,"")}static parseTrackName(e){let t=w0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);E0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;He("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=Eh;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mM=new Float32Array(1);var Tf=new Xe,Ca=class{constructor(e,t,n=0,i=1/0){this.ray=new Vi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):He("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tf),this}intersectObject(e,t=!0,n=[]){return Ah(e,this,n,t),n.sort(wf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Ah(e[i],this,n,t);return n.sort(wf),n}};function wf(s,e){return s.distance-e.distance}function Ah(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Ah(r[a],e,t,!0)}}var cu=class cu{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};cu.prototype.isMatrix2=!0;var Rh=cu;function iu(s,e,t,n){let i=A0(n);switch(t){case Xh:return s*e;case wc:return s*e/i.components*i.byteLength;case Ec:return s*e/i.components*i.byteLength;case $i:return s*e*2/i.components*i.byteLength;case Ac:return s*e*2/i.components*i.byteLength;case jh:return s*e*3/i.components*i.byteLength;case pn:return s*e*4/i.components*i.byteLength;case Rc:return s*e*4/i.components*i.byteLength;case La:case Da:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Na:case Fa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Lc:return Math.max(s,16)*Math.max(e,8)/4;case Cc:case Ic:return Math.max(s,8)*Math.max(e,8)/2;case Dc:case Nc:case Uc:case Oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fc:case Ua:case Bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Wc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case qc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case $c:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Qc:case el:case tl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case nl:case il:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Oa:case sl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function A0(s){switch(s){case Sn:case Hh:return{byteLength:1,components:1};case Tr:case Vh:case Pn:return{byteLength:2,components:1};case Sc:case Tc:return{byteLength:2,components:4};case jn:case Mc:case Cn:return{byteLength:4,components:1};case Wh:case qh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function zp(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function C0(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],b=d[f];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++u,d[u]=b)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let b=d[f];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,L0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,k0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,V0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,W0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Q0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ab="gl_FragColor = linearToOutputTexel( gl_FragColor );",ob=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_b=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Mb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ab=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ib=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ob=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$b=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ax=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_x=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ix=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ox=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$x=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:P0,alphahash_pars_fragment:I0,alphamap_fragment:L0,alphamap_pars_fragment:D0,alphatest_fragment:N0,alphatest_pars_fragment:F0,aomap_fragment:U0,aomap_pars_fragment:O0,batching_pars_vertex:B0,batching_vertex:k0,begin_vertex:z0,beginnormal_vertex:G0,bsdfs:H0,iridescence_fragment:V0,bumpmap_pars_fragment:W0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:X0,clipping_planes_pars_vertex:j0,clipping_planes_vertex:Y0,color_fragment:K0,color_pars_fragment:J0,color_pars_vertex:Z0,color_vertex:$0,common:Q0,cube_uv_reflection_fragment:eb,defaultnormal_vertex:tb,displacementmap_pars_vertex:nb,displacementmap_vertex:ib,emissivemap_fragment:sb,emissivemap_pars_fragment:rb,colorspace_fragment:ab,colorspace_pars_fragment:ob,envmap_fragment:cb,envmap_common_pars_fragment:lb,envmap_pars_fragment:hb,envmap_pars_vertex:ub,envmap_physical_pars_fragment:Mb,envmap_vertex:db,fog_vertex:fb,fog_pars_vertex:pb,fog_fragment:mb,fog_pars_fragment:gb,gradientmap_pars_fragment:bb,lightmap_pars_fragment:xb,lights_lambert_fragment:_b,lights_lambert_pars_fragment:vb,lights_pars_begin:yb,lights_toon_fragment:Sb,lights_toon_pars_fragment:Tb,lights_phong_fragment:wb,lights_phong_pars_fragment:Eb,lights_physical_fragment:Ab,lights_physical_pars_fragment:Rb,lights_fragment_begin:Cb,lights_fragment_maps:Pb,lights_fragment_end:Ib,lightprobes_pars_fragment:Lb,logdepthbuf_fragment:Db,logdepthbuf_pars_fragment:Nb,logdepthbuf_pars_vertex:Fb,logdepthbuf_vertex:Ub,map_fragment:Ob,map_pars_fragment:Bb,map_particle_fragment:kb,map_particle_pars_fragment:zb,metalnessmap_fragment:Gb,metalnessmap_pars_fragment:Hb,morphinstance_vertex:Vb,morphcolor_vertex:Wb,morphnormal_vertex:qb,morphtarget_pars_vertex:Xb,morphtarget_vertex:jb,normal_fragment_begin:Yb,normal_fragment_maps:Kb,normal_pars_fragment:Jb,normal_pars_vertex:Zb,normal_vertex:$b,normalmap_pars_fragment:Qb,clearcoat_normal_fragment_begin:ex,clearcoat_normal_fragment_maps:tx,clearcoat_pars_fragment:nx,iridescence_pars_fragment:ix,opaque_fragment:sx,packing:rx,premultiplied_alpha_fragment:ax,project_vertex:ox,dithering_fragment:cx,dithering_pars_fragment:lx,roughnessmap_fragment:hx,roughnessmap_pars_fragment:ux,shadowmap_pars_fragment:dx,shadowmap_pars_vertex:fx,shadowmap_vertex:px,shadowmask_pars_fragment:mx,skinbase_vertex:gx,skinning_pars_vertex:bx,skinning_vertex:xx,skinnormal_vertex:_x,specularmap_fragment:vx,specularmap_pars_fragment:yx,tonemapping_fragment:Mx,tonemapping_pars_fragment:Sx,transmission_fragment:Tx,transmission_pars_fragment:wx,uv_pars_fragment:Ex,uv_pars_vertex:Ax,uv_vertex:Rx,worldpos_vertex:Cx,background_vert:Px,background_frag:Ix,backgroundCube_vert:Lx,backgroundCube_frag:Dx,cube_vert:Nx,cube_frag:Fx,depth_vert:Ux,depth_frag:Ox,distance_vert:Bx,distance_frag:kx,equirect_vert:zx,equirect_frag:Gx,linedashed_vert:Hx,linedashed_frag:Vx,meshbasic_vert:Wx,meshbasic_frag:qx,meshlambert_vert:Xx,meshlambert_frag:jx,meshmatcap_vert:Yx,meshmatcap_frag:Kx,meshnormal_vert:Jx,meshnormal_frag:Zx,meshphong_vert:$x,meshphong_frag:Qx,meshphysical_vert:e_,meshphysical_frag:t_,meshtoon_vert:n_,meshtoon_frag:i_,points_vert:s_,points_frag:r_,shadow_vert:a_,shadow_frag:o_,sprite_vert:c_,sprite_frag:l_},Me={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},li={basic:{uniforms:ln([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:ln([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:ln([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:ln([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:ln([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ie(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:ln([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:ln([Me.points,Me.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:ln([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:ln([Me.common,Me.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:ln([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:ln([Me.sprite,Me.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:ln([Me.common,Me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:ln([Me.lights,Me.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};li.physical={uniforms:ln([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var ol={r:0,b:0,g:0},h_=new Xe,Gp=new Ye;Gp.set(-1,0,0,0,1,0,0,0,1);function u_(s,e,t,n,i,r){let a=new Ie(0),o=i===!0?0:1,c,l,h=null,d=0,u=null;function f(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let v=S.backgroundBlurriness>0;w=e.get(w,v)}return w}function p(S){let w=!1,v=f(S);v===null?g(a,o):v&&v.isColor&&(g(v,1),w=!0);let y=s.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(S,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===Ss)?(l===void 0&&(l=new it(new ii(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Es(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(h_.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Gp),l.material.toneMapped=tt.getTransfer(v.colorSpace)!==bt,(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new it(new Wn(2,2),new cn({name:"BackgroundMaterial",uniforms:Es(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=tt.getTransfer(v.colorSpace)!==bt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,w){S.getRGB(ol,eu(s)),t.buffers.color.setClear(ol.r,ol.g,ol.b,w,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:p,addToRenderList:b,dispose:m}}function d_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(F,H,V,O,z){let J=!1,Y=d(F,O,V,H);r!==Y&&(r=Y,l(r.object)),J=f(F,O,V,z),J&&p(F,O,V,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(F,H,V,O),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return s.createVertexArray()}function l(F){return s.bindVertexArray(F)}function h(F){return s.deleteVertexArray(F)}function d(F,H,V,O){let z=O.wireframe===!0,J=n[H.id];J===void 0&&(J={},n[H.id]=J);let Y=F.isInstancedMesh===!0?F.id:0,he=J[Y];he===void 0&&(he={},J[Y]=he);let $=he[V.id];$===void 0&&($={},he[V.id]=$);let ae=$[z];return ae===void 0&&(ae=u(c()),$[z]=ae),ae}function u(F){let H=[],V=[],O=[];for(let z=0;z<t;z++)H[z]=0,V[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:V,attributeDivisors:O,object:F,attributes:{},index:null}}function f(F,H,V,O){let z=r.attributes,J=H.attributes,Y=0,he=V.getAttributes();for(let $ in he)if(he[$].location>=0){let se=z[$],Pe=J[$];if(Pe===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(Pe=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(Pe=F.instanceColor)),se===void 0||se.attribute!==Pe||Pe&&se.data!==Pe.data)return!0;Y++}return r.attributesNum!==Y||r.index!==O}function p(F,H,V,O){let z={},J=H.attributes,Y=0,he=V.getAttributes();for(let $ in he)if(he[$].location>=0){let se=J[$];se===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(se=F.instanceColor));let Pe={};Pe.attribute=se,se&&se.data&&(Pe.data=se.data),z[$]=Pe,Y++}r.attributes=z,r.attributesNum=Y,r.index=O}function b(){let F=r.newAttributes;for(let H=0,V=F.length;H<V;H++)F[H]=0}function g(F){m(F,0)}function m(F,H){let V=r.newAttributes,O=r.enabledAttributes,z=r.attributeDivisors;V[F]=1,O[F]===0&&(s.enableVertexAttribArray(F),O[F]=1),z[F]!==H&&(s.vertexAttribDivisor(F,H),z[F]=H)}function S(){let F=r.newAttributes,H=r.enabledAttributes;for(let V=0,O=H.length;V<O;V++)H[V]!==F[V]&&(s.disableVertexAttribArray(V),H[V]=0)}function w(F,H,V,O,z,J,Y){Y===!0?s.vertexAttribIPointer(F,H,V,z,J):s.vertexAttribPointer(F,H,V,O,z,J)}function v(F,H,V,O){b();let z=O.attributes,J=V.getAttributes(),Y=H.defaultAttributeValues;for(let he in J){let $=J[he];if($.location>=0){let ae=z[he];if(ae===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor)),ae!==void 0){let se=ae.normalized,Pe=ae.itemSize,Ae=e.get(ae);if(Ae===void 0)continue;let at=Ae.buffer,Ze=Ae.type,ct=Ae.bytesPerElement,Z=Ze===s.INT||Ze===s.UNSIGNED_INT||ae.gpuType===Mc;if(ae.isInterleavedBufferAttribute){let oe=ae.data,ye=oe.stride,Ge=ae.offset;if(oe.isInstancedInterleavedBuffer){for(let we=0;we<$.locationSize;we++)m($.location+we,oe.meshPerAttribute);F.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let we=0;we<$.locationSize;we++)g($.location+we);s.bindBuffer(s.ARRAY_BUFFER,at);for(let we=0;we<$.locationSize;we++)w($.location+we,Pe/$.locationSize,Ze,se,ye*ct,(Ge+Pe/$.locationSize*we)*ct,Z)}else{if(ae.isInstancedBufferAttribute){for(let oe=0;oe<$.locationSize;oe++)m($.location+oe,ae.meshPerAttribute);F.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let oe=0;oe<$.locationSize;oe++)g($.location+oe);s.bindBuffer(s.ARRAY_BUFFER,at);for(let oe=0;oe<$.locationSize;oe++)w($.location+oe,Pe/$.locationSize,Ze,se,Pe*ct,Pe/$.locationSize*oe*ct,Z)}}else if(Y!==void 0){let se=Y[he];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv($.location,se);break;case 3:s.vertexAttrib3fv($.location,se);break;case 4:s.vertexAttrib4fv($.location,se);break;default:s.vertexAttrib1fv($.location,se)}}}}S()}function y(){A();for(let F in n){let H=n[F];for(let V in H){let O=H[V];for(let z in O){let J=O[z];for(let Y in J)h(J[Y].object),delete J[Y];delete O[z]}}delete n[F]}}function T(F){if(n[F.id]===void 0)return;let H=n[F.id];for(let V in H){let O=H[V];for(let z in O){let J=O[z];for(let Y in J)h(J[Y].object),delete J[Y];delete O[z]}}delete n[F.id]}function C(F){for(let H in n){let V=n[H];for(let O in V){let z=V[O];if(z[F.id]===void 0)continue;let J=z[F.id];for(let Y in J)h(J[Y].object),delete J[Y];delete z[F.id]}}}function x(F){for(let H in n){let V=n[H],O=F.isInstancedMesh===!0?F.id:0,z=V[O];if(z!==void 0){for(let J in z){let Y=z[J];for(let he in Y)h(Y[he].object),delete Y[he];delete z[J]}delete V[O],Object.keys(V).length===0&&delete n[H]}}}function A(){N(),a=!0,r!==i&&(r=i,l(r.object))}function N(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:N,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:g,disableUnusedAttributes:S}}function f_(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function p_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==pn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Sn&&C!==Cn&&!x&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Oe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:v,maxSamples:y,samples:T}}function m_(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Gn,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?h(null):l();else{let S=r?0:n,w=S*4,v=m.clippingState||null;c.value=v,v=h(p,u,w,f);for(let y=0;y!==w;++y)v[y]=t[y];m.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,p){let b=d!==null?d.length:0,g=null;if(b!==0){if(g=c.value,p!==!0||g===null){let m=f+b*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,v=f;w!==b;++w,v+=4)a.copy(d[w]).applyMatrix4(S,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var Rr=4,g_=6,b_=20,x_=256,za=new Yi,_p=new Ie,lu=null,hu=0,uu=0,du=!1,__=new D,As=new D,Pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=__}=r;lu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lu,hu,uu),this._renderer.xr.enabled=du,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Pn,format:pn,colorSpace:Yt,depthBuffer:!1},i=vp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=v_(r)),this._blurMaterial=M_(r,e,t),this._ggxMaterial=y_(r,e,t)}return i}_compileMaterial(e){let t=new it(new Ct,e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,n,i,r){let c=new qt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(_p),d.toneMapping=qn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new it(new ii,new fn({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,m=!1,S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,m=!0):(g.color.copy(_p),m=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):v===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let y=this._cubeSize;Ar(i,v*y,w>2?y:0,y,y),d.setRenderTarget(i),m&&d.render(b,c),d.render(e,c)}d.toneMapping=f,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ji||e.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yp());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Ar(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,za)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:p}=this,b=this._sizeLods[n],g=3*b*(n>p-Rr?n-p+Rr:0),m=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,Ar(r,g,m,3*b,2*b),i.setRenderTarget(r),i.render(o,za),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,Ar(e,g,m,3*b,2*b),i.setRenderTarget(e),i.render(o,za)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-Rr?i-this._lodMax+Rr:0),u=4*(this._cubeSize-h);Ar(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(c,za)}};function v_(s){let e=[],t=[],n=s,i=s-Rr+1+g_;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,p=new Float32Array(f*u*d),b=new Float32Array(f*u*d);for(let m=0;m<d;m++){let S=m%3*2/3-1,w=m>2?0:-1,v=[S,w,0,S+2/3,w,0,S+2/3,w+1,0,S,w,0,S+2/3,w+1,0,S,w+1,0];p.set(v,f*u*m);for(let y=0;y<u;y++){let T=h[y*2]*2-1,C=h[y*2+1]*2-1;m===0?As.set(1,C,T):m===1?As.set(-T,1,-C):m===2?As.set(-T,C,1):m===3?As.set(-1,C,-T):m===4?As.set(-T,-1,C):As.set(T,C,-1),As.toArray(b,(m*u+y)*f)}}let g=new Ct;g.setAttribute("position",new zt(p,f)),g.setAttribute("outputDirection",new zt(b,f)),t.push(new it(g,null)),n>Rr&&n--}return{lodMeshes:t,sizeLods:e}}function vp(s,e,t){let n=new bn(s,e,t);return n.texture.mapping=Ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function y_(s,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:x_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ul(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function M_(s,e,t){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:b_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ul(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function yp(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Mp(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ul(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ll=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ca(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ii(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:oi});r.uniforms.tEquirect.value=t;let a=new it(i,r),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Dt),new mc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};function S_(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===_c||f===vc)if(e.has(u)){let p=e.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let b=new ll(p.height);return b.fromEquirectangularTexture(s,u),e.set(u,b),u.addEventListener("dispose",l),o(b.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===_c||f===vc,b=f===Ji||f===Ms;if(p||b){let g=t.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Pr(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{let S=u.image;return p&&S&&S.height>0||b&&S&&c(S)?(n===null&&(n=new Pr(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===_c?u.mapping=Ji:f===vc&&(u.mapping=Ms),u}function c(u){let f=0,p=6;for(let b=0;b<p;b++)u[b]!==void 0&&f++;return f===p}function l(u){let f=u.target;f.removeEventListener("dispose",l);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function T_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&cs("WebGLRenderer: "+n+" extension not supported."),i}}}function w_(s,e,t,n){let i={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete i[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)e.update(u[f],s.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,p=d.attributes.position,b=0;if(p===void 0)return;if(f!==null){let S=f.array;b=f.version;for(let w=0,v=S.length;w<v;w+=3){let y=S[w+0],T=S[w+1],C=S[w+2];u.push(y,T,T,C,C,y)}}else{let S=p.array;b=p.version;for(let w=0,v=S.length/3-1;w<v;w+=3){let y=w+0,T=w+1,C=w+2;u.push(y,T,T,C,C,y)}}let g=new(p.count>=65535?ia:na)(u,1);g.version=b;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function E_(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let b=0;for(let g=0;g<f;g++)b+=u[g];t.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function A_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function R_(s,e,t){let n=new WeakMap,i=new _t;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let A=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),b===!0&&(w=3);let v=o.attributes.position.count*w,y=1;v>e.maxTextureSize&&(y=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*y*4*d),C=new ta(T,v,y,d);C.type=Cn,C.needsUpdate=!0;let x=w*4;for(let N=0;N<d;N++){let F=g[N],H=m[N],V=S[N],O=v*y*4*N;for(let z=0;z<F.count;z++){let J=z*x;f===!0&&(i.fromBufferAttribute(F,z),T[O+J+0]=i.x,T[O+J+1]=i.y,T[O+J+2]=i.z,T[O+J+3]=0),p===!0&&(i.fromBufferAttribute(H,z),T[O+J+4]=i.x,T[O+J+5]=i.y,T[O+J+6]=i.z,T[O+J+7]=0),b===!0&&(i.fromBufferAttribute(V,z),T[O+J+8]=i.x,T[O+J+9]=i.y,T[O+J+10]=i.z,T[O+J+11]=V.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new me(v,y)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let p=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function C_(s,e,t,n,i){let r=new WeakMap;function a(l){let h=i.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var P_={[Fh]:"LINEAR_TONE_MAPPING",[Uh]:"REINHARD_TONE_MAPPING",[Oh]:"CINEON_TONE_MAPPING",[Bh]:"ACES_FILMIC_TONE_MAPPING",[zh]:"AGX_TONE_MAPPING",[Ia]:"NEUTRAL_TONE_MAPPING",[kh]:"CUSTOM_TONE_MAPPING"};function I_(s,e,t,n,i,r){let a=new bn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Ct;l.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Lt([0,2,0,0,2,0],2));let h=new rc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new it(l,h),u=new Yi(-1,1,1,-1,0,1),f=null,p=null,b=!1,g,m=null,S=[],w=!1;this.setSize=function(v,y){a.setSize(v,y),o!==null&&o.setSize(v,y),c!==null&&c.setSize(v,y);for(let T=0;T<S.length;T++){let C=S[T];C.setSize&&C.setSize(v,y)}},this.setEffects=function(v){S=v,w=S.length>0&&S[0].isRenderPass===!0;let y=a.width,T=a.height;S.length>0&&o===null&&(o=new bn(y,T,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),c=new bn(y,T,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let x=S[C];x.setSize&&x.setSize(y,T)}},this.begin=function(v,y){if(b||v.toneMapping===qn&&S.length===0)return!1;if(m=y,y!==null){let T=y.width,C=y.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return w===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=qn,!0},this.hasRenderPass=function(){return w},this.end=function(v,y){v.toneMapping=g,b=!0;let T=a,C=o;for(let x=0;x<S.length;x++){let A=S[x];A.enabled!==!1&&(A.render(v,C,T,y),A.needsSwap!==!1&&(T=C,C=C===o?c:o))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},tt.getTransfer(f)===bt&&(h.defines.SRGB_TRANSFER="");let x=P_[p];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(m),v.render(d,u),m=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Hp=new Kt,mu=new Xi(1,1),Vp=new ta,Wp=new Ko,qp=new ca,Sp=[],Tp=[],wp=new Float32Array(16),Ep=new Float32Array(9),Ap=new Float32Array(4);function Ir(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Sp[i];if(r===void 0&&(r=new Float32Array(i),Sp[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Zt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function $t(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function dl(s,e){let t=Tp[e];t===void 0&&(t=new Int32Array(e),Tp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function L_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function D_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2fv(this.addr,e),$t(t,e)}}function N_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;s.uniform3fv(this.addr,e),$t(t,e)}}function F_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4fv(this.addr,e),$t(t,e)}}function U_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;Ap.set(n),s.uniformMatrix2fv(this.addr,!1,Ap),$t(t,n)}}function O_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;Ep.set(n),s.uniformMatrix3fv(this.addr,!1,Ep),$t(t,n)}}function B_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,n))return;wp.set(n),s.uniformMatrix4fv(this.addr,!1,wp),$t(t,n)}}function k_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function z_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2iv(this.addr,e),$t(t,e)}}function G_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;s.uniform3iv(this.addr,e),$t(t,e)}}function H_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4iv(this.addr,e),$t(t,e)}}function V_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function W_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2uiv(this.addr,e),$t(t,e)}}function q_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;s.uniform3uiv(this.addr,e),$t(t,e)}}function X_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4uiv(this.addr,e),$t(t,e)}}function j_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(mu.compareFunction=t.isReversedDepthBuffer()?al:rl,r=mu):r=Hp,t.setTexture2D(e||r,i)}function Y_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wp,i)}function K_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qp,i)}function J_(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vp,i)}function Z_(s){switch(s){case 5126:return L_;case 35664:return D_;case 35665:return N_;case 35666:return F_;case 35674:return U_;case 35675:return O_;case 35676:return B_;case 5124:case 35670:return k_;case 35667:case 35671:return z_;case 35668:case 35672:return G_;case 35669:case 35673:return H_;case 5125:return V_;case 36294:return W_;case 36295:return q_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return J_}}function $_(s,e){s.uniform1fv(this.addr,e)}function Q_(s,e){let t=Ir(e,this.size,2);s.uniform2fv(this.addr,t)}function ev(s,e){let t=Ir(e,this.size,3);s.uniform3fv(this.addr,t)}function tv(s,e){let t=Ir(e,this.size,4);s.uniform4fv(this.addr,t)}function nv(s,e){let t=Ir(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function iv(s,e){let t=Ir(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function sv(s,e){let t=Ir(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function rv(s,e){s.uniform1iv(this.addr,e)}function av(s,e){s.uniform2iv(this.addr,e)}function ov(s,e){s.uniform3iv(this.addr,e)}function cv(s,e){s.uniform4iv(this.addr,e)}function lv(s,e){s.uniform1uiv(this.addr,e)}function hv(s,e){s.uniform2uiv(this.addr,e)}function uv(s,e){s.uniform3uiv(this.addr,e)}function dv(s,e){s.uniform4uiv(this.addr,e)}function fv(s,e,t){let n=this.cache,i=e.length,r=dl(t,i);Zt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=mu:a=Hp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function pv(s,e,t){let n=this.cache,i=e.length,r=dl(t,i);Zt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Wp,r[a])}function mv(s,e,t){let n=this.cache,i=e.length,r=dl(t,i);Zt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||qp,r[a])}function gv(s,e,t){let n=this.cache,i=e.length,r=dl(t,i);Zt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Vp,r[a])}function bv(s){switch(s){case 5126:return $_;case 35664:return Q_;case 35665:return ev;case 35666:return tv;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return av;case 35668:case 35672:return ov;case 35669:case 35673:return cv;case 5125:return lv;case 36294:return hv;case 36295:return uv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}var gu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Z_(t.type)}},bu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bv(t.type)}},xu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},fu=/(\w+)(\])?(\[|\.)?/g;function Rp(s,e){s.seq.push(e),s.map[e.id]=e}function xv(s,e,t){let n=s.name,i=n.length;for(fu.lastIndex=0;;){let r=fu.exec(n),a=fu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Rp(t,l===void 0?new gu(o,s,e):new bu(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new xu(o),Rp(t,d)),t=d}}}var Cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);xv(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Cp(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var _v=37297,vv=0;function yv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Pp=new Ye;function Mv(s){tt._getMatrix(Pp,tt.workingColorSpace,s);let e=`mat3( ${Pp.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(s)){case Qr:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ip(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+yv(s.getShaderSource(e),o)}else return r}function Sv(s,e){let t=Mv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Tv={[Fh]:"Linear",[Uh]:"Reinhard",[Oh]:"Cineon",[Bh]:"ACESFilmic",[zh]:"AgX",[Ia]:"Neutral",[kh]:"Custom"};function wv(s,e){let t=Tv[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var cl=new D;function Ev(){tt.getLuminanceCoefficients(cl);let s=cl.x.toFixed(4),e=cl.y.toFixed(4),t=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Av(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function Rv(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ha(s){return s!==""}function Lp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function _u(s){return s.replace(Pv,Lv)}var Iv=new Map;function Lv(s,e){let t=et[e];if(t===void 0){let n=Iv.get(e);if(n!==void 0)t=et[n],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _u(t)}var Dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Np(s){return s.replace(Dv,Nv)}function Nv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Fv={[Pa]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function Uv(s){return Fv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ov={[Ji]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE_UV"};function Bv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Ov[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var kv={[Ms]:"ENVMAP_MODE_REFRACTION"};function zv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":kv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Gv={[xc]:"ENVMAP_BLENDING_MULTIPLY",[jf]:"ENVMAP_BLENDING_MIX",[Yf]:"ENVMAP_BLENDING_ADD"};function Hv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Gv[s.combine]||"ENVMAP_BLENDING_NONE"}function Vv(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Wv(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Uv(t),l=Bv(t),h=zv(t),d=Hv(t),u=Vv(t),f=Av(t),p=Rv(r),b=i.createProgram(),g,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ha).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ha).join(`
`),m.length>0&&(m+=`
`)):(g=[Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),m=[Fp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?et.tonemapping_pars_fragment:"",t.toneMapping!==qn?wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Sv("linearToOutputTexel",t.outputColorSpace),Ev(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ha).join(`
`)),a=_u(a),a=Lp(a,t),a=Dp(a,t),o=_u(o),o=Lp(o,t),o=Dp(o,t),a=Np(a),o=Np(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=S+g+a,v=S+m+o,y=Cp(i,i.VERTEX_SHADER,w),T=Cp(i,i.FRAGMENT_SHADER,v);i.attachShader(b,y),i.attachShader(b,T),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function C(F){if(s.debug.checkShaderErrors){let H=i.getProgramInfoLog(b)||"",V=i.getShaderInfoLog(y)||"",O=i.getShaderInfoLog(T)||"",z=H.trim(),J=V.trim(),Y=O.trim(),he=!0,$=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,y,T);else{let ae=Ip(i,y,"vertex"),se=Ip(i,T,"fragment");He("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+z+`
`+ae+`
`+se)}else z!==""?Oe("WebGLProgram: Program Info Log:",z):(J===""||Y==="")&&($=!1);$&&(F.diagnostics={runnable:he,programLog:z,vertexShader:{log:J,prefix:g},fragmentShader:{log:Y,prefix:m}})}i.deleteShader(y),i.deleteShader(T),x=new Cr(i,b),A=Cv(i,b)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(b,_v)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vv++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=y,this.fragmentShader=T,this}var qv=0,vu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yu(e),t.set(e,n)),n}},yu=class{constructor(e){this.id=qv++,this.code=e,this.usedTimes=0}};function Xv(s){return s===$i||s===Ua||s===Oa}function jv(s,e,t,n,i,r){let a=new hr,o=new vu,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function b(x,A,N,F,H,V){let O=F.fog,z=H.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?F.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,he=e.get(x.envMap||J,Y),$=he&&he.mapping===Ss?he.image.height:null,ae=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Oe("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let se=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Pe=se!==void 0?se.length:0,Ae=0;z.morphAttributes.position!==void 0&&(Ae=1),z.morphAttributes.normal!==void 0&&(Ae=2),z.morphAttributes.color!==void 0&&(Ae=3);let at,Ze,ct,Z;if(ae){let lt=li[ae];at=lt.vertexShader,Ze=lt.fragmentShader}else{at=x.vertexShader,Ze=x.fragmentShader;let lt=o.getVertexShaderStage(x),st=o.getFragmentShaderStage(x);o.update(x,lt,st),ct=lt.id,Z=st.id}let oe=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Ge=H.isInstancedMesh===!0,we=H.isBatchedMesh===!0,We=!!x.map,pt=!!x.matcap,re=!!he,ue=!!x.aoMap,de=!!x.lightMap,fe=!!x.bumpMap&&x.wireframe===!1,xe=!!x.normalMap,ke=!!x.displacementMap,Be=!!x.emissiveMap,qe=!!x.metalnessMap,je=!!x.roughnessMap,U=x.anisotropy>0,dt=x.clearcoat>0,$e=x.dispersion>0,R=x.retroreflectivity>0,_=x.iridescence>0,k=x.sheen>0,j=x.transmission>0,Q=U&&!!x.anisotropyMap,ge=dt&&!!x.clearcoatMap,be=dt&&!!x.clearcoatNormalMap,ee=dt&&!!x.clearcoatRoughnessMap,ce=_&&!!x.iridescenceMap,_e=_&&!!x.iridescenceThicknessMap,Fe=k&&!!x.sheenColorMap,I=k&&!!x.sheenRoughnessMap,L=!!x.specularMap,P=!!x.specularColorMap,ie=!!x.specularIntensityMap,te=j&&!!x.transmissionMap,E=j&&!!x.thicknessMap,W=!!x.gradientMap,G=!!x.alphaMap,le=x.alphaTest>0,pe=!!x.alphaHash,ne=!!x.extensions,ve=qn;x.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ve=s.toneMapping);let Ee={shaderID:ae,shaderType:x.type,shaderName:x.name,vertexShader:at,fragmentShader:Ze,defines:x.defines,customVertexShaderID:ct,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:we,batchingColor:we&&H._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&H.instanceColor!==null,instancingMorph:Ge&&H.morphTexture!==null,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:We,matcap:pt,envMap:re,envMapMode:re&&he.mapping,envMapCubeUVHeight:$,aoMap:ue,lightMap:de,bumpMap:fe,normalMap:xe,displacementMap:ke,emissiveMap:Be,normalMapObjectSpace:xe&&x.normalMapType===$f,normalMapTangentSpace:xe&&x.normalMapType===ka,packedNormalMap:xe&&x.normalMapType===ka&&Xv(x.normalMap.format),metalnessMap:qe,roughnessMap:je,anisotropy:U,anisotropyMap:Q,clearcoat:dt,clearcoatMap:ge,clearcoatNormalMap:be,clearcoatRoughnessMap:ee,dispersion:$e,retroreflection:R,iridescence:_,iridescenceMap:ce,iridescenceThicknessMap:_e,sheen:k,sheenColorMap:Fe,sheenRoughnessMap:I,specularMap:L,specularColorMap:P,specularIntensityMap:ie,transmission:j,transmissionMap:te,thicknessMap:E,gradientMap:W,opaque:x.transparent===!1&&x.blending===Mr&&x.alphaToCoverage===!1,alphaMap:G,alphaTest:le,alphaHash:pe,combine:x.combine,mapUv:We&&p(x.map.channel),aoMapUv:ue&&p(x.aoMap.channel),lightMapUv:de&&p(x.lightMap.channel),bumpMapUv:fe&&p(x.bumpMap.channel),normalMapUv:xe&&p(x.normalMap.channel),displacementMapUv:ke&&p(x.displacementMap.channel),emissiveMapUv:Be&&p(x.emissiveMap.channel),metalnessMapUv:qe&&p(x.metalnessMap.channel),roughnessMapUv:je&&p(x.roughnessMap.channel),anisotropyMapUv:Q&&p(x.anisotropyMap.channel),clearcoatMapUv:ge&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:be&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:I&&p(x.sheenRoughnessMap.channel),specularMapUv:L&&p(x.specularMap.channel),specularColorMapUv:P&&p(x.specularColorMap.channel),specularIntensityMapUv:ie&&p(x.specularIntensityMap.channel),transmissionMapUv:te&&p(x.transmissionMap.channel),thicknessMapUv:E&&p(x.thicknessMap.channel),alphaMapUv:G&&p(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xe||U),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!z.attributes.uv&&(We||G),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&xe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ae,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:We&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===bt,decodeVideoTextureEmissive:Be&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mn,flipSided:x.side===Jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function g(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)A.push(N),A.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(m(A,x),S(A,x),A.push(s.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function m(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function S(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){let A=f[x.type],N;if(A){let F=li[A];N=gp.clone(F.uniforms)}else N=x.uniforms;return N}function v(x,A){let N=h.get(A);return N!==void 0?++N.usedTimes:(N=new Wv(s,A,x,i),l.push(N),h.set(A,N)),N}function y(x){if(--x.usedTimes===0){let A=l.indexOf(x);l[A]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function C(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:w,acquireProgram:v,releaseProgram:y,releaseShaderCache:T,programs:l,dispose:C}}function Yv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Kv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Up(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Op(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,b,g,m){let S=s[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:b,renderOrder:u.renderOrder,z:g,group:m},s[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=p,S.materialVariant=a(u),S.groupOrder=b,S.renderOrder=u.renderOrder,S.z=g,S.group=m),e++,S}function c(u,f,p,b,g,m,S){S.reversedDepth===!0&&(g=-g);let w=o(u,f,p,b,g,m);p.transmission>0?n.push(w):p.transparent===!0?i.push(w):t.push(w)}function l(u,f,p,b,g,m){let S=o(u,f,p,b,g,m);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):t.unshift(S)}function h(u,f){t.length>1&&t.sort(u||Kv),n.length>1&&n.sort(f||Up),i.length>1&&i.sort(f||Up)}function d(){for(let u=e,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:h}}function Jv(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Op,s.set(n,[a])):i>=r.length?(a=new Op,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Zv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function $v(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Qv=0;function ey(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ty(s){let e=new Zv,t=$v(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let i=new D,r=new Xe,a=new Xe;function o(l){let h=0,d=0,u=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let f=0,p=0,b=0,g=0,m=0,S=0,w=0,v=0,y=0,T=0,C=0,x=0,A=0,N=0;l.sort(ey);for(let H=0,V=l.length;H<V;H++){let O=l[H],z=O.color,J=O.intensity,Y=O.distance,he=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===$i?he=O.shadow.map.texture:he=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=z.r*J,d+=z.g*J,u+=z.b*J;else if(O.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(O.sh.coefficients[$],J);N++}else if(O.isSunLight){let $=e.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ae=O.shadow,se=t.get(O);se.shadowIntensity=ae.intensity,se.shadowBias=ae.bias,se.shadowNormalBias=ae.normalBias,se.shadowRadius=ae.radius,se.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),n.sunShadow[p]=se,n.sunShadowMap[p]=he;let Pe=ae.getViewportCount();for(let Ae=0;Ae<Pe;Ae++)n.sunShadowMatrix[b+Ae]=ae.getMatrix(Ae),n.sunShadowCascade[b+Ae]=ae._cascadeData[Ae];b+=Pe,p++}n.sun[f]=$,f++}else if(O.isDirectionalLight){let $=e.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ae=O.shadow,se=t.get(O);se.shadowIntensity=ae.intensity,se.shadowBias=ae.bias,se.shadowNormalBias=ae.normalBias,se.shadowRadius=ae.radius,se.shadowMapSize=ae.mapSize,n.directionalShadow[g]=se,n.directionalShadowMap[g]=he,n.directionalShadowMatrix[g]=O.shadow.matrix,y++}n.directional[g]=$,g++}else if(O.isSpotLight){let $=e.get(O);$.position.setFromMatrixPosition(O.matrixWorld),$.color.copy(z).multiplyScalar(J),$.distance=Y,$.coneCos=Math.cos(O.angle),$.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),$.decay=O.decay,n.spot[S]=$;let ae=O.shadow;if(O.map&&(n.spotLightMap[x]=O.map,x++,ae.updateMatrices(O),O.castShadow&&A++),n.spotLightMatrix[S]=ae.matrix,O.castShadow){let se=t.get(O);se.shadowIntensity=ae.intensity,se.shadowBias=ae.bias,se.shadowNormalBias=ae.normalBias,se.shadowRadius=ae.radius,se.shadowMapSize=ae.mapSize,n.spotShadow[S]=se,n.spotShadowMap[S]=he,C++}S++}else if(O.isRectAreaLight){let $=e.get(O);$.color.copy(z).multiplyScalar(J),$.halfWidth.set(O.width*.5,0,0),$.halfHeight.set(0,O.height*.5,0),n.rectArea[w]=$,w++}else if(O.isPointLight){let $=e.get(O);if($.color.copy(O.color).multiplyScalar(O.intensity),$.distance=O.distance,$.decay=O.decay,O.castShadow){let ae=O.shadow,se=t.get(O);se.shadowIntensity=ae.intensity,se.shadowBias=ae.bias,se.shadowNormalBias=ae.normalBias,se.shadowRadius=ae.radius,se.shadowMapSize=ae.mapSize,se.shadowCameraNear=ae.camera.near,se.shadowCameraFar=ae.camera.far,n.pointShadow[m]=se,n.pointShadowMap[m]=he,n.pointShadowMatrix[m]=O.shadow.matrix,T++}n.point[m]=$,m++}else if(O.isHemisphereLight){let $=e.get(O);$.skyColor.copy(O.color).multiplyScalar(J),$.groundColor.copy(O.groundColor).multiplyScalar(J),n.hemi[v]=$,v++}}w>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let F=n.hash;(F.sunLength!==f||F.directionalLength!==g||F.pointLength!==m||F.spotLength!==S||F.rectAreaLength!==w||F.hemiLength!==v||F.numSunShadows!==p||F.numDirectionalShadows!==y||F.numPointShadows!==T||F.numSpotShadows!==C||F.numSpotMaps!==x||F.numLightProbes!==N)&&(n.sun.length=f,n.directional.length=g,n.spot.length=S,n.rectArea.length=w,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-A,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=N,F.sunLength=f,F.directionalLength=g,F.pointLength=m,F.spotLength=S,F.rectAreaLength=w,F.hemiLength=v,F.numSunShadows=p,F.numDirectionalShadows=y,F.numPointShadows=T,F.numSpotShadows=C,F.numSpotMaps=x,F.numLightProbes=N,n.version=Qv++)}function c(l,h){let d=0,u=0,f=0,p=0,b=0,g=0,m=h.matrixWorldInverse;for(let S=0,w=l.length;S<w;S++){let v=l[S];if(v.isSunLight){let y=n.sun[d];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),d++}else if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(v.isSpotLight){let y=n.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let y=n.rectArea[b];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),b++}else if(v.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Bp(s){let e=new ty(s),t=[],n=[],i=[];function r(u){d.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function c(u){i.push(u)}function l(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function ny(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Bp(s),e.set(i,[o])):r>=a.length?(o=new Bp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ry=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],ay=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],kp=new Xe,Ga=new D,pu=new D;function oy(s,e,t){let n=new pr,i=new me,r=new me,a=new _t,o=new ac,c=new oc,l={},h=t.maxTextureSize,d={[Fn]:Jt,[Jt]:Fn,[Mn]:Mn},u=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:iy,fragmentShader:sy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ct;p.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new it(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pa;let m=this.type;this.render=function(T,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Rf&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pa);let A=s.getRenderTarget(),N=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),H=s.state;H.setBlending(oi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let V=m!==this.type;V&&C.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(z=>z.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,z=T.length;O<z;O++){let J=T[O],Y=J.shadow;if(Y===void 0){Oe("WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let he=Y.getFrameExtents();i.multiply(he),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/he.x),i.x=r.x*he.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/he.y),i.y=r.y*he.y,Y.mapSize.y=r.y));let $=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=$,Y.map===null||V===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===yr){if(J.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new bn(i.x,i.y,{format:$i,type:Pn,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),Y.map.texture.name=J.name+".shadowMap",Y.map.depthTexture=new Xi(i.x,i.y,Cn),Y.map.depthTexture.name=J.name+".shadowMapDepth",Y.map.depthTexture.format=ti,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Gt,Y.map.depthTexture.magFilter=Gt}else J.isPointLight?(Y.map=new ll(i.x),Y.map.depthTexture=new $o(i.x,jn)):(Y.map=new bn(i.x,i.y),Y.map.depthTexture=new Xi(i.x,i.y,jn)),Y.map.depthTexture.name=J.name+".shadowMap",Y.map.depthTexture.format=ti,this.type===Pa?(Y.map.depthTexture.compareFunction=$?al:rl,Y.map.depthTexture.minFilter=Dt,Y.map.depthTexture.magFilter=Dt):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Gt,Y.map.depthTexture.magFilter=Gt);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==i.x||Y.map.height!==i.y)&&Y.map.setSize(i.x,i.y);let ae=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();J.isPointLight!==!0&&Y.updateMatrices(J,x);for(let se=0;se<ae;se++){let Pe=Y.getCamera(se);if(J.isPointLight){let Ae=Y.camera,at=Y.matrix,Ze=J.distance||Ae.far;Ze!==Ae.far&&(Ae.far=Ze,Ae.updateProjectionMatrix()),Ga.setFromMatrixPosition(J.matrixWorld),Ae.position.copy(Ga),pu.copy(Ae.position),pu.add(ry[se]),Ae.up.copy(ay[se]),Ae.lookAt(pu),Ae.updateMatrixWorld(),at.makeTranslation(-Ga.x,-Ga.y,-Ga.z),kp.multiplyMatrices(Ae.projectionMatrix,Ae.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(kp,Ae.coordinateSystem,Ae.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,se),s.clear();else{se===0&&(s.setRenderTarget(Y.map),s.clear());let Ae=Y.getViewport(se);a.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),H.viewport(a)}n=Y.getFrustum(se),v(C,x,Pe,J,this.type)}Y.isPointLightShadow!==!0&&this.type===yr&&S(Y,x),Y.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(A,N,F)};function S(T,C){let x=e.update(b);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new bn(i.x,i.y,{format:$i,type:Pn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,x,u,b,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,x,f,b,null)}function w(T,C,x,A){let N=null,F=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)N=F;else if(N=x.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let H=N.uuid,V=C.uuid,O=l[H];O===void 0&&(O={},l[H]=O);let z=O[V];z===void 0&&(z=N.clone(),O[V]=z,C.addEventListener("dispose",y)),N=z}if(N.visible=C.visible,N.wireframe=C.wireframe,A===yr?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:d[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let H=s.properties.get(N);H.light=x}return N}function v(T,C,x,A,N){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===yr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let V=e.update(T),O=T.material;if(Array.isArray(O)){let z=V.groups;for(let J=0,Y=z.length;J<Y;J++){let he=z[J],$=O[he.materialIndex];if($&&$.visible){let ae=w(T,$,A,N);T.onBeforeShadow(s,T,C,x,V,ae,he),s.renderBufferDirect(x,null,V,ae,T,he),T.onAfterShadow(s,T,C,x,V,ae,he)}}}else if(O.visible){let z=w(T,O,A,N);T.onBeforeShadow(s,T,C,x,V,z,null),s.renderBufferDirect(x,null,V,z,T,null),T.onAfterShadow(s,T,C,x,V,z,null)}}let H=T.children;for(let V=0,O=H.length;V<O;V++)v(H[V],C,x,A,N)}function y(T){T.target.removeEventListener("dispose",y);for(let x in l){let A=l[x],N=T.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function cy(s,e){function t(){let E=!1,W=new _t,G=null,le=new _t(0,0,0,0);return{setMask:function(pe){G!==pe&&!E&&(s.colorMask(pe,pe,pe,pe),G=pe)},setLocked:function(pe){E=pe},setClear:function(pe,ne,ve,Ee,lt){lt===!0&&(pe*=Ee,ne*=Ee,ve*=Ee),W.set(pe,ne,ve,Ee),le.equals(W)===!1&&(s.clearColor(pe,ne,ve,Ee),le.copy(W))},reset:function(){E=!1,G=null,le.set(-1,0,0,0)}}}function n(){let E=!1,W=!1,G=null,le=null,pe=null;return{setReversed:function(ne){if(W!==ne){let ve=e.get("EXT_clip_control");ne?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),W=ne;let Ee=pe;pe=null,this.setClear(Ee)}},getReversed:function(){return W},setTest:function(ne){ne?oe(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(ne){G!==ne&&!E&&(s.depthMask(ne),G=ne)},setFunc:function(ne){if(W&&(ne=lp[ne]),le!==ne){switch(ne){case zo:s.depthFunc(s.NEVER);break;case Go:s.depthFunc(s.ALWAYS);break;case Ho:s.depthFunc(s.LESS);break;case sr:s.depthFunc(s.LEQUAL);break;case Vo:s.depthFunc(s.EQUAL);break;case Wo:s.depthFunc(s.GEQUAL);break;case qo:s.depthFunc(s.GREATER);break;case Xo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=ne}},setLocked:function(ne){E=ne},setClear:function(ne){pe!==ne&&(pe=ne,W&&(ne=1-ne),s.clearDepth(ne))},reset:function(){E=!1,G=null,le=null,pe=null,W=!1}}}function i(){let E=!1,W=null,G=null,le=null,pe=null,ne=null,ve=null,Ee=null,lt=null;return{setTest:function(st){E||(st?oe(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(st){W!==st&&!E&&(s.stencilMask(st),W=st)},setFunc:function(st,Et,nn){(G!==st||le!==Et||pe!==nn)&&(s.stencilFunc(st,Et,nn),G=st,le=Et,pe=nn)},setOp:function(st,Et,nn){(ne!==st||ve!==Et||Ee!==nn)&&(s.stencilOp(st,Et,nn),ne=st,ve=Et,Ee=nn)},setLocked:function(st){E=st},setClear:function(st){lt!==st&&(s.clearStencil(st),lt=st)},reset:function(){E=!1,W=null,G=null,le=null,pe=null,ne=null,ve=null,Ee=null,lt=null}}}let r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],b=null,g=!1,m=null,S=null,w=null,v=null,y=null,T=null,C=null,x=new Ie(0,0,0),A=0,N=!1,F=null,H=null,V=null,O=null,z=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,he=0,$=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=he>=1):$.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=he>=2);let ae=null,se={},Pe=s.getParameter(s.SCISSOR_BOX),Ae=s.getParameter(s.VIEWPORT),at=new _t().fromArray(Pe),Ze=new _t().fromArray(Ae);function ct(E,W,G,le){let pe=new Uint8Array(4),ne=s.createTexture();s.bindTexture(E,ne),s.texParameteri(E,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(E,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ve=0;ve<G;ve++)E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY?s.texImage3D(W,0,s.RGBA,1,1,le,0,s.RGBA,s.UNSIGNED_BYTE,pe):s.texImage2D(W+ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pe);return ne}let Z={};Z[s.TEXTURE_2D]=ct(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(s.DEPTH_TEST),a.setFunc(sr),fe(!1),xe(Ch),oe(s.CULL_FACE),ue(oi);function oe(E){h[E]!==!0&&(s.enable(E),h[E]=!0)}function ye(E){h[E]!==!1&&(s.disable(E),h[E]=!1)}function Ge(E,W){return u[E]!==W?(s.bindFramebuffer(E,W),u[E]=W,E===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=W),E===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=W),!0):!1}function we(E,W){let G=p,le=!1;if(E){G=f.get(W),G===void 0&&(G=[],f.set(W,G));let pe=E.textures;if(G.length!==pe.length||G[0]!==s.COLOR_ATTACHMENT0){for(let ne=0,ve=pe.length;ne<ve;ne++)G[ne]=s.COLOR_ATTACHMENT0+ne;G.length=pe.length,le=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,le=!0);le&&s.drawBuffers(G)}function We(E){return b!==E?(s.useProgram(E),b=E,!0):!1}let pt={[ys]:s.FUNC_ADD,[Pf]:s.FUNC_SUBTRACT,[If]:s.FUNC_REVERSE_SUBTRACT};pt[Lf]=s.MIN,pt[Df]=s.MAX;let re={[Nf]:s.ZERO,[Ff]:s.ONE,[Uf]:s.SRC_COLOR,[Dh]:s.SRC_ALPHA,[Hf]:s.SRC_ALPHA_SATURATE,[zf]:s.DST_COLOR,[Bf]:s.DST_ALPHA,[Of]:s.ONE_MINUS_SRC_COLOR,[Nh]:s.ONE_MINUS_SRC_ALPHA,[Gf]:s.ONE_MINUS_DST_COLOR,[kf]:s.ONE_MINUS_DST_ALPHA,[Vf]:s.CONSTANT_COLOR,[Wf]:s.ONE_MINUS_CONSTANT_COLOR,[qf]:s.CONSTANT_ALPHA,[Xf]:s.ONE_MINUS_CONSTANT_ALPHA};function ue(E,W,G,le,pe,ne,ve,Ee,lt,st){if(E===oi){g===!0&&(ye(s.BLEND),g=!1);return}if(g===!1&&(oe(s.BLEND),g=!0),E!==Cf){if(E!==m||st!==N){if((S!==ys||y!==ys)&&(s.blendEquation(s.FUNC_ADD),S=ys,y=ys),st)switch(E){case Mr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ph:s.blendFunc(s.ONE,s.ONE);break;case Ih:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:He("WebGLState: Invalid blending: ",E);break}else switch(E){case Mr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ph:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ih:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lh:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",E);break}w=null,v=null,T=null,C=null,x.set(0,0,0),A=0,m=E,N=st}return}pe=pe||W,ne=ne||G,ve=ve||le,(W!==S||pe!==y)&&(s.blendEquationSeparate(pt[W],pt[pe]),S=W,y=pe),(G!==w||le!==v||ne!==T||ve!==C)&&(s.blendFuncSeparate(re[G],re[le],re[ne],re[ve]),w=G,v=le,T=ne,C=ve),(Ee.equals(x)===!1||lt!==A)&&(s.blendColor(Ee.r,Ee.g,Ee.b,lt),x.copy(Ee),A=lt),m=E,N=!1}function de(E,W){E.side===Mn?ye(s.CULL_FACE):oe(s.CULL_FACE);let G=E.side===Jt;W&&(G=!G),fe(G),E.blending===Mr&&E.transparent===!1?ue(oi):ue(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),a.setFunc(E.depthFunc),a.setTest(E.depthTest),a.setMask(E.depthWrite),r.setMask(E.colorWrite);let le=E.stencilWrite;o.setTest(le),le&&(o.setMask(E.stencilWriteMask),o.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),o.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Be(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function fe(E){F!==E&&(E?s.frontFace(s.CW):s.frontFace(s.CCW),F=E)}function xe(E){E!==Ef?(oe(s.CULL_FACE),E!==H&&(E===Ch?s.cullFace(s.BACK):E===Af?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),H=E}function ke(E){E!==V&&(Y&&s.lineWidth(E),V=E)}function Be(E,W,G){E?(oe(s.POLYGON_OFFSET_FILL),(O!==W||z!==G)&&(O=W,z=G,a.getReversed()&&(W=-W),s.polygonOffset(W,G))):ye(s.POLYGON_OFFSET_FILL)}function qe(E){E?oe(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function je(E){E===void 0&&(E=s.TEXTURE0+J-1),ae!==E&&(s.activeTexture(E),ae=E)}function U(E,W,G){G===void 0&&(ae===null?G=s.TEXTURE0+J-1:G=ae);let le=se[G];le===void 0&&(le={type:void 0,texture:void 0},se[G]=le),(le.type!==E||le.texture!==W)&&(ae!==G&&(s.activeTexture(G),ae=G),s.bindTexture(E,W||Z[E]),le.type=E,le.texture=W)}function dt(){let E=se[ae];E!==void 0&&E.type!==void 0&&(s.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function $e(){try{s.compressedTexImage2D(...arguments)}catch(E){He("WebGLState:",E)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(E){He("WebGLState:",E)}}function _(){try{s.texSubImage2D(...arguments)}catch(E){He("WebGLState:",E)}}function k(){try{s.texSubImage3D(...arguments)}catch(E){He("WebGLState:",E)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(E){He("WebGLState:",E)}}function Q(){try{s.compressedTexSubImage3D(...arguments)}catch(E){He("WebGLState:",E)}}function ge(){try{s.texStorage2D(...arguments)}catch(E){He("WebGLState:",E)}}function be(){try{s.texStorage3D(...arguments)}catch(E){He("WebGLState:",E)}}function ee(){try{s.texImage2D(...arguments)}catch(E){He("WebGLState:",E)}}function ce(){try{s.texImage3D(...arguments)}catch(E){He("WebGLState:",E)}}function _e(E){return d[E]!==void 0?d[E]:s.getParameter(E)}function Fe(E,W){d[E]!==W&&(s.pixelStorei(E,W),d[E]=W)}function I(E){at.equals(E)===!1&&(s.scissor(E.x,E.y,E.z,E.w),at.copy(E))}function L(E){Ze.equals(E)===!1&&(s.viewport(E.x,E.y,E.z,E.w),Ze.copy(E))}function P(E,W){let G=l.get(W);G===void 0&&(G=new WeakMap,l.set(W,G));let le=G.get(E);le===void 0&&(le=s.getUniformBlockIndex(W,E.name),G.set(E,le))}function ie(E,W){let le=l.get(W).get(E);c.get(W)!==le&&(s.uniformBlockBinding(W,le,E.__bindingPointIndex),c.set(W,le))}function te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},ae=null,se={},u={},f=new WeakMap,p=[],b=null,g=!1,m=null,S=null,w=null,v=null,y=null,T=null,C=null,x=new Ie(0,0,0),A=0,N=!1,F=null,H=null,V=null,O=null,z=null,at.set(0,0,s.canvas.width,s.canvas.height),Ze.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:ye,bindFramebuffer:Ge,drawBuffers:we,useProgram:We,setBlending:ue,setMaterial:de,setFlipSided:fe,setCullFace:xe,setLineWidth:ke,setPolygonOffset:Be,setScissorTest:qe,activeTexture:je,bindTexture:U,unbindTexture:dt,compressedTexImage2D:$e,compressedTexImage3D:R,texImage2D:ee,texImage3D:ce,pixelStorei:Fe,getParameter:_e,updateUBOMapping:P,uniformBlockBinding:ie,texStorage2D:ge,texStorage3D:be,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:j,compressedTexSubImage3D:Q,scissor:I,viewport:L,reset:te}}function ly(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new me,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(R,_){return p?new OffscreenCanvas(R,_):or("canvas")}function g(R,_,k){let j=1,Q=$e(R);if((Q.width>k||Q.height>k)&&(j=k/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ge=Math.floor(j*Q.width),be=Math.floor(j*Q.height);u===void 0&&(u=b(ge,be));let ee=_?b(ge,be):u;return ee.width=ge,ee.height=be,ee.getContext("2d").drawImage(R,0,0,ge,be),Oe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ge+"x"+be+")."),ee}else return"data"in R&&Oe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function S(R){s.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(R,_,k,j,Q,ge=!1){if(R!==null){if(s[R]!==void 0)return s[R];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let be;j&&(be=e.get("EXT_texture_norm16"),be||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=_;if(_===s.RED&&(k===s.FLOAT&&(ee=s.R32F),k===s.HALF_FLOAT&&(ee=s.R16F),k===s.UNSIGNED_BYTE&&(ee=s.R8),k===s.UNSIGNED_SHORT&&be&&(ee=be.R16_EXT),k===s.SHORT&&be&&(ee=be.R16_SNORM_EXT)),_===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(ee=s.R8UI),k===s.UNSIGNED_SHORT&&(ee=s.R16UI),k===s.UNSIGNED_INT&&(ee=s.R32UI),k===s.BYTE&&(ee=s.R8I),k===s.SHORT&&(ee=s.R16I),k===s.INT&&(ee=s.R32I)),_===s.RG&&(k===s.FLOAT&&(ee=s.RG32F),k===s.HALF_FLOAT&&(ee=s.RG16F),k===s.UNSIGNED_BYTE&&(ee=s.RG8),k===s.UNSIGNED_SHORT&&be&&(ee=be.RG16_EXT),k===s.SHORT&&be&&(ee=be.RG16_SNORM_EXT)),_===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(ee=s.RG8UI),k===s.UNSIGNED_SHORT&&(ee=s.RG16UI),k===s.UNSIGNED_INT&&(ee=s.RG32UI),k===s.BYTE&&(ee=s.RG8I),k===s.SHORT&&(ee=s.RG16I),k===s.INT&&(ee=s.RG32I)),_===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(ee=s.RGB8UI),k===s.UNSIGNED_SHORT&&(ee=s.RGB16UI),k===s.UNSIGNED_INT&&(ee=s.RGB32UI),k===s.BYTE&&(ee=s.RGB8I),k===s.SHORT&&(ee=s.RGB16I),k===s.INT&&(ee=s.RGB32I)),_===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(ee=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(ee=s.RGBA16UI),k===s.UNSIGNED_INT&&(ee=s.RGBA32UI),k===s.BYTE&&(ee=s.RGBA8I),k===s.SHORT&&(ee=s.RGBA16I),k===s.INT&&(ee=s.RGBA32I)),_===s.RGB&&(k===s.UNSIGNED_SHORT&&be&&(ee=be.RGB16_EXT),k===s.SHORT&&be&&(ee=be.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(ee=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(ee=s.R11F_G11F_B10F)),_===s.RGBA){let ce=ge?Qr:tt.getTransfer(Q);k===s.FLOAT&&(ee=s.RGBA32F),k===s.HALF_FLOAT&&(ee=s.RGBA16F),k===s.UNSIGNED_BYTE&&(ee=ce===bt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&be&&(ee=be.RGBA16_EXT),k===s.SHORT&&be&&(ee=be.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(ee=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(ee=s.RGB5_A1)}return(ee===s.R16F||ee===s.R32F||ee===s.RG16F||ee===s.RG32F||ee===s.RGBA16F||ee===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(R,_){let k;return R?_===null||_===jn||_===wr?k=s.DEPTH24_STENCIL8:_===Cn?k=s.DEPTH32F_STENCIL8:_===Tr&&(k=s.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===jn||_===wr?k=s.DEPTH_COMPONENT24:_===Cn?k=s.DEPTH_COMPONENT32F:_===Tr&&(k=s.DEPTH_COMPONENT16),k}function T(R,_){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gt&&R.minFilter!==Dt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function C(R){let _=R.target;_.removeEventListener("dispose",C),A(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(R){let _=R.target;_.removeEventListener("dispose",x),F(_)}function A(R){let _=n.get(R);if(_.__webglInit===void 0)return;let k=R.source,j=f.get(k);if(j){let Q=j[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(R),Object.keys(j).length===0&&f.delete(k)}n.remove(R)}function N(R){let _=n.get(R);s.deleteTexture(_.__webglTexture);let k=R.source,j=f.get(k);delete j[_.__cacheKey],a.memory.textures--}function F(R){let _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let Q=0;Q<_.__webglFramebuffer[j].length;Q++)s.deleteFramebuffer(_.__webglFramebuffer[j][Q]);else s.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)s.deleteFramebuffer(_.__webglFramebuffer[j]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let k=R.textures;for(let j=0,Q=k.length;j<Q;j++){let ge=n.get(k[j]);ge.__webglTexture&&(s.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(k[j])}n.remove(R)}let H=0;function V(){H=0}function O(){return H}function z(R){H=R}function J(){let R=H;return R>=i.maxTextures&&Oe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,R}function Y(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function he(R,_){let k=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let j=R.image;if(j===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(k,R,_);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+_)}function $(R,_){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ye(k,R,_);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+_)}function ae(R,_){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){ye(k,R,_);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+_)}function se(R,_){let k=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&k.__version!==R.version){Ge(k,R,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+_)}let Pe={[Gi]:s.REPEAT,[Dn]:s.CLAMP_TO_EDGE,[rr]:s.MIRRORED_REPEAT},Ae={[Gt]:s.NEAREST,[yc]:s.NEAREST_MIPMAP_NEAREST,[Ts]:s.NEAREST_MIPMAP_LINEAR,[Dt]:s.LINEAR,[Sr]:s.LINEAR_MIPMAP_NEAREST,[Xn]:s.LINEAR_MIPMAP_LINEAR},at={[ep]:s.NEVER,[rp]:s.ALWAYS,[tp]:s.LESS,[rl]:s.LEQUAL,[np]:s.EQUAL,[al]:s.GEQUAL,[ip]:s.GREATER,[sp]:s.NOTEQUAL};function Ze(R,_){if(_.type===Cn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Dt||_.magFilter===Sr||_.magFilter===Ts||_.magFilter===Xn||_.minFilter===Dt||_.minFilter===Sr||_.minFilter===Ts||_.minFilter===Xn)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Pe[_.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Pe[_.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Pe[_.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Ae[_.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Ae[_.minFilter]),_.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,at[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Gt||_.minFilter!==Ts&&_.minFilter!==Xn||_.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ct(R,_){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",C));let j=_.source,Q=f.get(j);Q===void 0&&(Q={},f.set(j,Q));let ge=Y(_);if(ge!==R.__cacheKey){Q[ge]===void 0&&(Q[ge]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[ge].usedTimes++;let be=Q[R.__cacheKey];be!==void 0&&(Q[R.__cacheKey].usedTimes--,be.usedTimes===0&&N(_)),R.__cacheKey=ge,R.__webglTexture=Q[ge].texture}return k}function Z(R,_,k){return Math.floor(Math.floor(R/k)/_)}function oe(R,_,k,j){let ge=R.updateRanges;if(ge.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,k,j,_.data);else{ge.sort((Fe,I)=>Fe.start-I.start);let be=0;for(let Fe=1;Fe<ge.length;Fe++){let I=ge[be],L=ge[Fe],P=I.start+I.count,ie=Z(L.start,_.width,4),te=Z(I.start,_.width,4);L.start<=P+1&&ie===te&&Z(L.start+L.count-1,_.width,4)===ie?I.count=Math.max(I.count,L.start+L.count-I.start):(++be,ge[be]=L)}ge.length=be+1;let ee=t.getParameter(s.UNPACK_ROW_LENGTH),ce=t.getParameter(s.UNPACK_SKIP_PIXELS),_e=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Fe=0,I=ge.length;Fe<I;Fe++){let L=ge[Fe],P=Math.floor(L.start/4),ie=Math.ceil(L.count/4),te=P%_.width,E=Math.floor(P/_.width),W=ie,G=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,te),t.pixelStorei(s.UNPACK_SKIP_ROWS,E),t.texSubImage2D(s.TEXTURE_2D,0,te,E,W,G,k,j,_.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ee),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(s.UNPACK_SKIP_ROWS,_e)}}function ye(R,_,k){let j=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=s.TEXTURE_3D);let Q=ct(R,_),ge=_.source;t.bindTexture(j,R.__webglTexture,s.TEXTURE0+k);let be=n.get(ge);if(ge.version!==be.__version||Q===!0){if(t.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let G=tt.getPrimaries(tt.workingColorSpace),le=_.colorSpace===wi?null:tt.getPrimaries(_.colorSpace),pe=_.colorSpace===wi||G===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment);let ce=g(_.image,!1,i.maxTextureSize);ce=dt(_,ce);let _e=r.convert(_.format,_.colorSpace),Fe=r.convert(_.type),I=v(_.internalFormat,_e,Fe,_.normalized,_.colorSpace,_.isVideoTexture);Ze(j,_);let L,P=_.mipmaps,ie=_.isVideoTexture!==!0,te=be.__version===void 0||Q===!0,E=ge.dataReady,W=T(_,ce);if(_.isDepthTexture)I=y(_.format===Zi,_.type),te&&(ie?t.texStorage2D(s.TEXTURE_2D,1,I,ce.width,ce.height):t.texImage2D(s.TEXTURE_2D,0,I,ce.width,ce.height,0,_e,Fe,null));else if(_.isDataTexture)if(P.length>0){ie&&te&&t.texStorage2D(s.TEXTURE_2D,W,I,P[0].width,P[0].height);for(let G=0,le=P.length;G<le;G++)L=P[G],ie?E&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,L.width,L.height,_e,Fe,L.data):t.texImage2D(s.TEXTURE_2D,G,I,L.width,L.height,0,_e,Fe,L.data);_.generateMipmaps=!1}else ie?(te&&t.texStorage2D(s.TEXTURE_2D,W,I,ce.width,ce.height),E&&oe(_,ce,_e,Fe)):t.texImage2D(s.TEXTURE_2D,0,I,ce.width,ce.height,0,_e,Fe,ce.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ie&&te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,W,I,P[0].width,P[0].height,ce.depth);for(let G=0,le=P.length;G<le;G++)if(L=P[G],_.format!==pn)if(_e!==null)if(ie){if(E)if(_.layerUpdates.size>0){let pe=iu(L.width,L.height,_.format,_.type);for(let ne of _.layerUpdates){let ve=L.data.subarray(ne*pe/L.data.BYTES_PER_ELEMENT,(ne+1)*pe/L.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,ne,L.width,L.height,1,_e,ve)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,L.width,L.height,ce.depth,_e,L.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,I,L.width,L.height,ce.depth,0,L.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?E&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,L.width,L.height,ce.depth,_e,Fe,L.data):t.texImage3D(s.TEXTURE_2D_ARRAY,G,I,L.width,L.height,ce.depth,0,_e,Fe,L.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ie&&te&&t.texStorage2D(s.TEXTURE_2D,W,I,P[0].width,P[0].height);for(let G=0,le=P.length;G<le;G++)L=P[G],_.format!==pn?_e!==null?ie?E&&t.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,L.width,L.height,_e,L.data):t.compressedTexImage2D(s.TEXTURE_2D,G,I,L.width,L.height,0,L.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?E&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,L.width,L.height,_e,Fe,L.data):t.texImage2D(s.TEXTURE_2D,G,I,L.width,L.height,0,_e,Fe,L.data)}else if(_.isDataArrayTexture)if(ie){if(te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,W,I,ce.width,ce.height,ce.depth),E)if(_.layerUpdates.size>0){let G=iu(ce.width,ce.height,_.format,_.type);for(let le of _.layerUpdates){let pe=ce.data.subarray(le*G/ce.data.BYTES_PER_ELEMENT,(le+1)*G/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,le,ce.width,ce.height,1,_e,Fe,pe)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,_e,Fe,ce.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,I,ce.width,ce.height,ce.depth,0,_e,Fe,ce.data);else if(_.isData3DTexture)ie?(te&&t.texStorage3D(s.TEXTURE_3D,W,I,ce.width,ce.height,ce.depth),E&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,_e,Fe,ce.data)):t.texImage3D(s.TEXTURE_3D,0,I,ce.width,ce.height,ce.depth,0,_e,Fe,ce.data);else if(_.isFramebufferTexture){if(te)if(ie)t.texStorage2D(s.TEXTURE_2D,W,I,ce.width,ce.height);else{let G=ce.width,le=ce.height;for(let pe=0;pe<W;pe++)t.texImage2D(s.TEXTURE_2D,pe,I,G,le,0,_e,Fe,null),G>>=1,le>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in s){let G=s.canvas;if(G.hasAttribute("layoutsubtree")||G.setAttribute("layoutsubtree","true"),ce.parentNode!==G){G.appendChild(ce),d.add(_),G.onpaint=le=>{let pe=le.changedElements;for(let ne of d)pe.includes(ne.image)&&(ne.needsUpdate=!0)},G.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ce);else{let pe=s.RGBA,ne=s.RGBA,ve=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,pe,ne,ve,ce)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(P.length>0){if(ie&&te){let G=$e(P[0]);t.texStorage2D(s.TEXTURE_2D,W,I,G.width,G.height)}for(let G=0,le=P.length;G<le;G++)L=P[G],ie?E&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,_e,Fe,L):t.texImage2D(s.TEXTURE_2D,G,I,_e,Fe,L);_.generateMipmaps=!1}else if(ie){if(te){let G=$e(ce);t.texStorage2D(s.TEXTURE_2D,W,I,G.width,G.height)}E&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,_e,Fe,ce)}else t.texImage2D(s.TEXTURE_2D,0,I,_e,Fe,ce);m(_)&&S(j),be.__version=ge.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ge(R,_,k){if(_.image.length!==6)return;let j=ct(R,_),Q=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+k);let ge=n.get(Q);if(Q.version!==ge.__version||j===!0){t.activeTexture(s.TEXTURE0+k);let be=tt.getPrimaries(tt.workingColorSpace),ee=_.colorSpace===wi?null:tt.getPrimaries(_.colorSpace),ce=_.colorSpace===wi||be===ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let _e=_.isCompressedTexture||_.image[0].isCompressedTexture,Fe=_.image[0]&&_.image[0].isDataTexture,I=[];for(let ne=0;ne<6;ne++)!_e&&!Fe?I[ne]=g(_.image[ne],!0,i.maxCubemapSize):I[ne]=Fe?_.image[ne].image:_.image[ne],I[ne]=dt(_,I[ne]);let L=I[0],P=r.convert(_.format,_.colorSpace),ie=r.convert(_.type),te=v(_.internalFormat,P,ie,_.normalized,_.colorSpace),E=_.isVideoTexture!==!0,W=ge.__version===void 0||j===!0,G=Q.dataReady,le=T(_,L);Ze(s.TEXTURE_CUBE_MAP,_);let pe;if(_e){E&&W&&t.texStorage2D(s.TEXTURE_CUBE_MAP,le,te,L.width,L.height);for(let ne=0;ne<6;ne++){pe=I[ne].mipmaps;for(let ve=0;ve<pe.length;ve++){let Ee=pe[ve];_.format!==pn?P!==null?E?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,Ee.width,Ee.height,P,Ee.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,te,Ee.width,Ee.height,0,Ee.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):E?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,Ee.width,Ee.height,P,ie,Ee.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,te,Ee.width,Ee.height,0,P,ie,Ee.data)}}}else{if(pe=_.mipmaps,E&&W){pe.length>0&&le++;let ne=$e(I[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,le,te,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Fe){E?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,I[ne].width,I[ne].height,P,ie,I[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,te,I[ne].width,I[ne].height,0,P,ie,I[ne].data);for(let ve=0;ve<pe.length;ve++){let lt=pe[ve].image[ne].image;E?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,lt.width,lt.height,P,ie,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,te,lt.width,lt.height,0,P,ie,lt.data)}}else{E?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,P,ie,I[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,te,P,ie,I[ne]);for(let ve=0;ve<pe.length;ve++){let Ee=pe[ve];E?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,P,ie,Ee.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,te,P,ie,Ee.image[ne])}}}m(_)&&S(s.TEXTURE_CUBE_MAP),ge.__version=Q.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function we(R,_,k,j,Q,ge){let be=r.convert(k.format,k.colorSpace),ee=r.convert(k.type),ce=v(k.internalFormat,be,ee,k.normalized,k.colorSpace),_e=n.get(_),Fe=n.get(k);if(Fe.__renderTarget=_,!_e.__hasExternalTextures){let I=Math.max(1,_.width>>ge),L=Math.max(1,_.height>>ge);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,ge,ce,I,L,_.depth,0,be,ee,null):t.texImage2D(Q,ge,ce,I,L,0,be,ee,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),je(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Q,Fe.__webglTexture,0,qe(_)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Q,Fe.__webglTexture,ge),t.bindFramebuffer(s.FRAMEBUFFER,null)}function We(R,_,k){if(s.bindRenderbuffer(s.RENDERBUFFER,R),_.depthBuffer){let j=_.depthTexture,Q=j&&j.isDepthTexture?j.type:null,ge=y(_.stencilBuffer,Q),be=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;je(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(_),ge,_.width,_.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(_),ge,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ge,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,R)}else{let j=_.textures;for(let Q=0;Q<j.length;Q++){let ge=j[Q],be=r.convert(ge.format,ge.colorSpace),ee=r.convert(ge.type),ce=v(ge.internalFormat,be,ee,ge.normalized,ge.colorSpace);je(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe(_),ce,_.width,_.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe(_),ce,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ce,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(R,_,k){let j=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Ze(s.TEXTURE_CUBE_MAP,_.depthTexture);let _e=r.convert(_.depthTexture.format),Fe=r.convert(_.depthTexture.type),I;_.depthTexture.format===ti?I=s.DEPTH_COMPONENT24:_.depthTexture.format===Zi&&(I=s.DEPTH24_STENCIL8);for(let L=0;L<6;L++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,I,_.width,_.height,0,_e,Fe,null)}}else he(_.depthTexture,0);let ge=Q.__webglTexture,be=qe(_),ee=j?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,ce=_.depthTexture.format===Zi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===ti)je(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,ee,ge,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,ce,ee,ge,0);else if(_.depthTexture.format===Zi)je(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,ee,ge,0,be):s.framebufferTexture2D(s.FRAMEBUFFER,ce,ee,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function re(R){let _=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let j=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=j}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let j=0;j<6;j++)pt(_.__webglFramebuffer[j],R,j);else{let j=R.texture.mipmaps;j&&j.length>0?pt(_.__webglFramebuffer[0],R,0):pt(_.__webglFramebuffer,R,0)}else if(k){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=s.createRenderbuffer(),We(_.__webglDepthbuffer[j],R,!1);else{let Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=_.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ge)}}else{let j=R.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),We(_.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,ge)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(R,_,k){let j=n.get(R);_!==void 0&&we(j.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&re(R)}function de(R){let _=R.texture,k=n.get(R),j=n.get(_);R.addEventListener("dispose",x);let Q=R.textures,ge=R.isWebGLCubeRenderTarget===!0,be=Q.length>1;if(be||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=_.version,a.memory.textures++),ge){k.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[ee]=[];for(let ce=0;ce<_.mipmaps.length;ce++)k.__webglFramebuffer[ee][ce]=s.createFramebuffer()}else k.__webglFramebuffer[ee]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)k.__webglFramebuffer[ee]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(be)for(let ee=0,ce=Q.length;ee<ce;ee++){let _e=n.get(Q[ee]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&je(R)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){let ce=Q[ee];k.__webglColorRenderbuffer[ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ee]);let _e=r.convert(ce.format,ce.colorSpace),Fe=r.convert(ce.type),I=v(ce.internalFormat,_e,Fe,ce.normalized,ce.colorSpace,R.isXRRenderTarget===!0),L=qe(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,L,I,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ee,s.RENDERBUFFER,k.__webglColorRenderbuffer[ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),We(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ge){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),Ze(s.TEXTURE_CUBE_MAP,_);for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let ce=0;ce<_.mipmaps.length;ce++)we(k.__webglFramebuffer[ee][ce],R,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce);else we(k.__webglFramebuffer[ee],R,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(_)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ee=0,ce=Q.length;ee<ce;ee++){let _e=Q[ee],Fe=n.get(_e),I=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(I=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(I,Fe.__webglTexture),Ze(I,_e),we(k.__webglFramebuffer,R,_e,s.COLOR_ATTACHMENT0+ee,I,0),m(_e)&&S(I)}t.unbindTexture()}else{let ee=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ee,j.__webglTexture),Ze(ee,_),_.mipmaps&&_.mipmaps.length>0)for(let ce=0;ce<_.mipmaps.length;ce++)we(k.__webglFramebuffer[ce],R,_,s.COLOR_ATTACHMENT0,ee,ce);else we(k.__webglFramebuffer,R,_,s.COLOR_ATTACHMENT0,ee,0);m(_)&&S(ee),t.unbindTexture()}R.depthBuffer&&re(R)}function fe(R){let _=R.textures;for(let k=0,j=_.length;k<j;k++){let Q=_[k];if(m(Q)){let ge=w(R),be=n.get(Q).__webglTexture;t.bindTexture(ge,be),S(ge),t.unbindTexture()}}}let xe=[],ke=[];function Be(R){if(R.samples>0){if(je(R)===!1){let _=R.textures,k=R.width,j=R.height,Q=s.COLOR_BUFFER_BIT,ge=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(R),ee=_.length>1;if(ee)for(let _e=0;_e<_.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let ce=R.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ee){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);let Fe=n.get(_[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Fe,0)}s.blitFramebuffer(0,0,k,j,0,0,k,j,Q,s.NEAREST),c===!0&&(xe.length=0,ke.length=0,xe.push(s.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(xe.push(ge),ke.push(ge),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ke)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ee)for(let _e=0;_e<_.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);let Fe=n.get(_[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,Fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let _=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function qe(R){return Math.min(i.maxSamples,R.samples)}function je(R){let _=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(R){let _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function dt(R,_){let k=R.colorSpace,j=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Yt&&k!==wi&&(tt.getTransfer(k)===bt?(j!==pn||Q!==Sn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",k)),_}function $e(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=V,this.getTextureUnits=O,this.setTextureUnits=z,this.setTexture2D=he,this.setTexture2DArray=$,this.setTexture3D=ae,this.setTextureCube=se,this.rebindTextures=ue,this.setupRenderTarget=de,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=we,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function hy(s,e){function t(n,i=wi){let r,a=tt.getTransfer(i);if(n===Sn)return s.UNSIGNED_BYTE;if(n===Sc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Tc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Wh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hh)return s.BYTE;if(n===Vh)return s.SHORT;if(n===Tr)return s.UNSIGNED_SHORT;if(n===Mc)return s.INT;if(n===jn)return s.UNSIGNED_INT;if(n===Cn)return s.FLOAT;if(n===Pn)return s.HALF_FLOAT;if(n===Xh)return s.ALPHA;if(n===jh)return s.RGB;if(n===pn)return s.RGBA;if(n===ti)return s.DEPTH_COMPONENT;if(n===Zi)return s.DEPTH_STENCIL;if(n===wc)return s.RED;if(n===Ec)return s.RED_INTEGER;if(n===$i)return s.RG;if(n===Ac)return s.RG_INTEGER;if(n===Rc)return s.RGBA_INTEGER;if(n===La||n===Da||n===Na||n===Fa)if(a===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===La)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===La)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cc||n===Pc||n===Ic||n===Lc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dc||n===Nc||n===Fc||n===Uc||n===Oc||n===Ua||n===Bc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dc||n===Nc)return a===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uc)return r.COMPRESSED_R11_EAC;if(n===Oc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ua)return r.COMPRESSED_RG11_EAC;if(n===Bc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===kc||n===zc||n===Gc||n===Hc||n===Vc||n===Wc||n===qc||n===Xc||n===jc||n===Yc||n===Kc||n===Jc||n===Zc||n===$c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qc||n===el||n===tl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qc)return a===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nl||n===il||n===Oa||n===sl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===nl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new la(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new cn({vertexShader:uy,fragmentShader:dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Su=class extends ni{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,p=null,b=typeof XRWebGLBinding<"u",g=new Mu,m={},S=t.getContextAttributes(),w=null,v=null,y=[],T=[],C=new me,x=null,A=null,N=new qt;N.viewport=new _t;let F=new qt;F.viewport=new _t;let H=[N,F],V=new gc,O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=y[Z];return oe===void 0&&(oe=new ur,y[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=y[Z];return oe===void 0&&(oe=new ur,y[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=y[Z];return oe===void 0&&(oe=new ur,y[Z]=oe),oe.getHandSpace()};function J(Z){let oe=T.indexOf(Z.inputSource);if(oe===-1)return;let ye=y[oe];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,l||a),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){i.removeEventListener("select",J),i.removeEventListener("selectstart",J),i.removeEventListener("selectend",J),i.removeEventListener("squeeze",J),i.removeEventListener("squeezestart",J),i.removeEventListener("squeezeend",J),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",he);for(let Z=0;Z<y.length;Z++){let oe=T[Z];oe!==null&&(T[Z]=null,y[Z].disconnect(oe))}O=null,z=null,g.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(w),f=null,u=null,d=null,i=null,v=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),A!==null){let Z=A.camera;Z.fov=A.fov,Z.zoom=A.zoom,Z.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",J),i.addEventListener("selectstart",J),i.addEventListener("selectend",J),i.addEventListener("squeeze",J),i.addEventListener("squeezestart",J),i.addEventListener("squeezeend",J),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ge=null,we=null;S.depth&&(we=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=S.stencil?Zi:ti,Ge=S.stencil?wr:jn);let We={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(We),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new bn(u.textureWidth,u.textureHeight,{format:pn,type:Sn,depthTexture:new Xi(u.textureWidth,u.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new bn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ct.setContext(i),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function he(Z){for(let oe=0;oe<Z.removed.length;oe++){let ye=Z.removed[oe],Ge=T.indexOf(ye);Ge>=0&&(T[Ge]=null,y[Ge].disconnect(ye))}for(let oe=0;oe<Z.added.length;oe++){let ye=Z.added[oe],Ge=T.indexOf(ye);if(Ge===-1){for(let We=0;We<y.length;We++)if(We>=T.length){T.push(ye),Ge=We;break}else if(T[We]===null){T[We]=ye,Ge=We;break}if(Ge===-1)break}let we=y[Ge];we&&we.connect(ye)}}let $=new D,ae=new D;function se(Z,oe,ye){$.setFromMatrixPosition(oe.matrixWorld),ae.setFromMatrixPosition(ye.matrixWorld);let Ge=$.distanceTo(ae),we=oe.projectionMatrix.elements,We=ye.projectionMatrix.elements,pt=we[14]/(we[10]-1),re=we[14]/(we[10]+1),ue=(we[9]+1)/we[5],de=(we[9]-1)/we[5],fe=(we[8]-1)/we[0],xe=(We[8]+1)/We[0],ke=pt*fe,Be=pt*xe,qe=Ge/(-fe+xe),je=qe*-fe;if(oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(je),Z.translateZ(qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),we[10]===-1)Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let U=pt+qe,dt=re+qe,$e=ke-je,R=Be+(Ge-je),_=ue*re/dt*U,k=de*re/dt*U;Z.projectionMatrix.makePerspective($e,R,_,k,U,dt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Pe(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let oe=Z.near,ye=Z.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),V.near=F.near=N.near=oe,V.far=F.far=N.far=ye,(O!==V.near||z!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),O=V.near,z=V.far),V.layers.mask=Z.layers.mask|6,N.layers.mask=V.layers.mask&-5,F.layers.mask=V.layers.mask&-3;let Ge=Z.parent,we=V.cameras;Pe(V,Ge);for(let We=0;We<we.length;We++)Pe(we[We],Ge);we.length===2?se(V,N,F):V.projectionMatrix.copy(N.projectionMatrix),A===null&&Z.isPerspectiveCamera&&(A={camera:Z,fov:Z.fov,zoom:Z.zoom}),Ae(Z,V,Ge)};function Ae(Z,oe,ye){ye===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=us*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(Z){return m[Z]};let at=null;function Ze(Z,oe){if(h=oe.getViewerPose(l||a),p=oe,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ge=!1;ye.length!==V.cameras.length&&(V.cameras.length=0,Ge=!0);for(let re=0;re<ye.length;re++){let ue=ye[re],de=null;if(f!==null)de=f.getViewport(ue);else{let xe=d.getViewSubImage(u,ue);de=xe.viewport,re===0&&(e.setRenderTargetTextures(v,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(v))}let fe=H[re];fe===void 0&&(fe=new qt,fe.layers.enable(re),fe.viewport=new _t,H[re]=fe),fe.matrix.fromArray(ue.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(ue.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(de.x,de.y,de.width,de.height),re===0&&(V.matrix.copy(fe.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ge===!0&&V.cameras.push(fe)}let we=i.enabledFeatures;if(we&&we.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){d=n.getBinding();let re=d.getDepthInformation(ye[0]);re&&re.isValid&&re.texture&&g.init(re,i.renderState)}if(we&&we.includes("camera-access")&&b){e.state.unbindTexture(),d=n.getBinding();for(let re=0;re<ye.length;re++){let ue=ye[re].camera;if(ue){let de=m[ue];de||(de=new la,m[ue]=de);let fe=d.getCameraImage(ue);de.sourceTexture=fe}}}}for(let ye=0;ye<y.length;ye++){let Ge=T[ye],we=y[ye];Ge!==null&&we!==void 0&&we.update(Ge,oe,l||a)}at&&at(Z,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),p=null}let ct=new zp;ct.setAnimationLoop(Ze),this.setAnimationLoop=function(Z){at=Z},this.dispose=function(){}}},fy=new Xe,Xp=new Ye;Xp.set(-1,0,0,0,1,0,0,0,1);function py(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,eu(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,S,w,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),b(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,S,w):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Jt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Jt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let S=e.get(m),w=S.envMap,v=S.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(fy.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Xp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,S,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*S,g.scale.value=w*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,S){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Jt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){let S=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function my(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let T=y.program;n.uniformBlockBinding(v,T)}function l(v,y){let T=i[v.id];T===void 0&&(g(v),T=h(v),i[v.id]=T,v.addEventListener("dispose",S));let C=y.program;n.updateUBOMapping(v,C);let x=e.render.frame;r[v.id]!==x&&(u(v),r[v.id]=x)}function h(v){let y=d();v.__bindingPointIndex=y;let T=s.createBuffer(),C=v.__size,x=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,C,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,T),T}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let y=i[v.id],T=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let x=0,A=T.length;x<A;x++){let N=T[x];if(Array.isArray(N))for(let F=0,H=N.length;F<H;F++)f(N[F],x,F,C);else f(N,x,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,y,T,C){if(b(v,y,T,C)===!0){let x=v.__offset,A=v.value;if(Array.isArray(A)){let N=0;for(let F=0;F<A.length;F++){let H=A[F],V=m(H);p(H,v.__data,N),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(N+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(A,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,v.__data)}}function p(v,y,T){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,T)}function b(v,y,T,C){let x=v.value,A=y+"_"+T;if(C[A]===void 0)return typeof x=="number"||typeof x=="boolean"?C[A]=x:ArrayBuffer.isView(x)?C[A]=x.slice():C[A]=x.clone(),!0;{let N=C[A];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return C[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(N.equals(x)===!1)return N.copy(x),!0}}return!1}function g(v){let y=v.uniforms,T=0,C=16;for(let A=0,N=y.length;A<N;A++){let F=Array.isArray(y[A])?y[A]:[y[A]];for(let H=0,V=F.length;H<V;H++){let O=F[H],z=Array.isArray(O.value)?O.value:[O.value];for(let J=0,Y=z.length;J<Y;J++){let he=z[J],$=m(he),ae=T%C,se=ae%$.boundary,Pe=ae+se;T+=se,Pe!==0&&C-Pe<$.storage&&(T+=C-Pe),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=$.storage}}}let x=T%C;return x>0&&(T+=C-x),v.__size=T,v.__cache={},this}function m(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",v),y}function S(v){let y=v.target;y.removeEventListener("dispose",S);let T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function w(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:w}}var gy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;function by(){return ci===null&&(ci=new Wi(gy,16,16,$i,Pn),ci.name="DFG_LUT",ci.minFilter=Dt,ci.magFilter=Dt,ci.wrapS=Dn,ci.wrapT=Dn,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var hl=class{constructor(e={}){let{canvas:t=ap(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Sn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let b=f,g=new Set([Rc,Ac,Ec]),m=new Set([Sn,jn,Tr,wr,Sc,Tc]),S=new Uint32Array(4),w=new Int32Array(4),v=new D,y=null,T=null,C=[],x=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,F=!1,H=null,V=null,O=null,z=null;this._outputColorSpace=Pt;let J=0,Y=0,he=null,$=-1,ae=null,se=new _t,Pe=new _t,Ae=null,at=new Ie(0),Ze=0,ct=t.width,Z=t.height,oe=1,ye=null,Ge=null,we=new _t(0,0,ct,Z),We=new _t(0,0,ct,Z),pt=!1,re=new pr,ue=!1,de=!1,fe=new Xe,xe=new D,ke=new _t,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function je(){return he===null?oe:1}let U=n;function dt(M,B){return t.getContext(M,B)}let $e,R,_,k,j,Q,ge,be,ee,ce,_e,Fe,I,L,P,ie,te,E,W,G,le,pe,ne;try{let M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Et,!1),U===null){let B="webgl2";if(U=dt(B,M),U===null)throw dt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ve()}catch(M){throw t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),He("WebGLRenderer: "+M.message),M}function ve(){$e=new T_(U),$e.init(),le=new hy(U,$e),R=new p_(U,$e,e,le),_=new cy(U,$e),R.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),V=U.createFramebuffer(),O=U.createFramebuffer(),z=U.createFramebuffer(),k=new A_(U),j=new Yv,Q=new ly(U,$e,_,j,R,le,k),ge=new S_(N),be=new C0(U),pe=new d_(U,be),ee=new w_(U,be,k,pe),ce=new C_(U,ee,be,pe,k),E=new R_(U,R,Q),P=new m_(j),_e=new jv(N,ge,$e,R,pe,P),Fe=new py(N,j),I=new Jv,L=new ny($e),te=new u_(N,ge,_,ce,p,c),ie=new oy(N,ce,R),ne=new my(U,k,R,_),W=new f_(U,$e,k),G=new E_(U,$e,k),k.programs=_e.programs,N.capabilities=R,N.extensions=$e,N.properties=j,N.renderLists=I,N.shadowMap=ie,N.state=_,N.info=k}b!==Sn&&(A=new I_(b,t.width,t.height,o,i,r));let Ee=new Su(N,U);this.xr=Ee,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=$e.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=$e.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(M){M!==void 0&&(oe=M,this.setSize(ct,Z,!1))},this.getSize=function(M){return M.set(ct,Z)},this.setSize=function(M,B,K=!0){if(Ee.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=M,Z=B,t.width=Math.floor(M*oe),t.height=Math.floor(B*oe),K===!0&&(t.style.width=M+"px",t.style.height=B+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(ct*oe,Z*oe).floor()},this.setDrawingBufferSize=function(M,B,K){ct=M,Z=B,oe=K,t.width=Math.floor(M*K),t.height=Math.floor(B*K),this.setViewport(0,0,M,B)},this.setEffects=function(M){if(b===Sn){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let B=0;B<M.length;B++)if(M[B].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(se)},this.getViewport=function(M){return M.copy(we)},this.setViewport=function(M,B,K,q){M.isVector4?we.set(M.x,M.y,M.z,M.w):we.set(M,B,K,q),_.viewport(se.copy(we).multiplyScalar(oe).round())},this.getScissor=function(M){return M.copy(We)},this.setScissor=function(M,B,K,q){M.isVector4?We.set(M.x,M.y,M.z,M.w):We.set(M,B,K,q),_.scissor(Pe.copy(We).multiplyScalar(oe).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(M){_.setScissorTest(pt=M)},this.setOpaqueSort=function(M){ye=M},this.setTransparentSort=function(M){Ge=M},this.getClearColor=function(M){return M.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,K=!0){let q=0;if(M){let X=!1;if(he!==null){let Te=he.texture.format;X=g.has(Te)}if(X){let Te=he.texture.type,Ce=m.has(Te),Se=te.getClearColor(),De=te.getClearAlpha(),Ue=Se.r,Qe=Se.g,ot=Se.b;Ce?(S[0]=Ue,S[1]=Qe,S[2]=ot,S[3]=De,U.clearBufferuiv(U.COLOR,0,S)):(w[0]=Ue,w[1]=Qe,w[2]=ot,w[3]=De,U.clearBufferiv(U.COLOR,0,w))}else q|=U.COLOR_BUFFER_BIT}B&&(q|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),H=M},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),te.dispose(),I.dispose(),L.dispose(),j.dispose(),ge.dispose(),ce.dispose(),pe.dispose(),ne.dispose(),_e.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Md),Ee.removeEventListener("sessionend",Sd),is.stop()};function lt(M){M.preventDefault(),ea("WebGLRenderer: Context Lost."),F=!0}function st(){ea("WebGLRenderer: Context Restored."),F=!1;let M=k.autoReset,B=ie.enabled,K=ie.autoUpdate,q=ie.needsUpdate,X=ie.type;ve(),k.autoReset=M,ie.enabled=B,ie.autoUpdate=K,ie.needsUpdate=q,ie.type=X}function Et(M){He("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function nn(M){let B=M.target;B.removeEventListener("dispose",nn),Ns(B)}function Ns(M){Fs(M),j.remove(M)}function Fs(M){let B=j.get(M).programs;B!==void 0&&(B.forEach(function(K){_e.releaseProgram(K)}),M.isShaderMaterial&&_e.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,K,q,X,Te){B===null&&(B=Be);let Ce=X.isMesh&&X.matrixWorld.determinantAffine()<0,Se=Km(M,B,K,q,X);_.setMaterial(q,Ce);let De=K.index,Ue=1;if(q.wireframe===!0){if(De=ee.getWireframeAttribute(K),De===void 0)return;Ue=2}let Qe=K.drawRange,ot=K.attributes.position,Ne=Qe.start*Ue,gt=(Qe.start+Qe.count)*Ue;Te!==null&&(Ne=Math.max(Ne,Te.start*Ue),gt=Math.min(gt,(Te.start+Te.count)*Ue)),De!==null?(Ne=Math.max(Ne,0),gt=Math.min(gt,De.count)):ot!=null&&(Ne=Math.max(Ne,0),gt=Math.min(gt,ot.count));let Vt=gt-Ne;if(Vt<0||Vt===1/0)return;pe.setup(X,q,Se,K,De);let At,Mt=W;if(De!==null&&(At=be.get(De),Mt=G,Mt.setIndex(At)),X.isMesh)q.wireframe===!0?(_.setLineWidth(q.wireframeLinewidth*je()),Mt.setMode(U.LINES)):Mt.setMode(U.TRIANGLES);else if(X.isLine){let sn=q.linewidth;sn===void 0&&(sn=1),_.setLineWidth(sn*je()),X.isLineSegments?Mt.setMode(U.LINES):X.isLineLoop?Mt.setMode(U.LINE_LOOP):Mt.setMode(U.LINE_STRIP)}else X.isPoints?Mt.setMode(U.POINTS):X.isSprite&&Mt.setMode(U.TRIANGLES);if(X.isBatchedMesh)if($e.get("WEBGL_multi_draw"))Mt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let sn=X._multiDrawStarts,Re=X._multiDrawCounts,un=X._multiDrawCount,ut=De?be.get(De).bytesPerElement:1,In=j.get(q).currentProgram.getUniforms();for(let Jn=0;Jn<un;Jn++)In.setValue(U,"_gl_DrawID",Jn),Mt.render(sn[Jn]/ut,Re[Jn])}else if(X.isInstancedMesh)Mt.renderInstances(Ne,Vt,X.count);else if(K.isInstancedBufferGeometry){let sn=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Re=Math.min(K.instanceCount,sn);Mt.renderInstances(Ne,Vt,Re)}else Mt.render(Ne,Vt)};function ns(M,B,K,q){H!==null&&M.isNodeMaterial&&H.setObject(q,M),ue===!0&&P.setState(M,K,!1),M.transparent===!0&&M.side===Mn&&M.forceSinglePass===!1?(M.side=Jt,M.needsUpdate=!0,eo(M,B,q),M.side=Fn,M.needsUpdate=!0,eo(M,B,q),M.side=Mn):eo(M,B,q)}this.compile=function(M,B,K=null){K===null&&(K=M),H!==null&&H.renderStart(M,B,K),T=L.get(K),T.init(B),x.push(T),K.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),M!==K&&M.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),H!==null&&H.updateLights(T.state.lightsArray),de=this.localClippingEnabled,ue=P.init(this.clippingPlanes,de),ue===!0&&P.setGlobalState(this.clippingPlanes,B),H!==null&&ie.render(T.state.shadowsArray,K,B);let q=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let Te=X.material;if(Te)if(Array.isArray(Te))for(let Ce=0;Ce<Te.length;Ce++){let Se=Te[Ce];ns(Se,K,B,X),q.add(Se)}else ns(Te,K,B,X),q.add(Te)}),T=x.pop(),H!==null&&H.renderEnd(),q},this.compileAsync=function(M,B,K=null){let q=this.compile(M,B,K);return new Promise(X=>{function Te(){if(q.forEach(function(Ce){let De=j.get(Ce).currentProgram;(De===void 0||De.isReady())&&q.delete(Ce)}),q.size===0){X(M);return}setTimeout(Te,10)}$e.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Fl=null;function jm(M){Fl&&Fl(M)}function Md(){is.stop()}function Sd(){is.start()}let is=new zp;is.setAnimationLoop(jm),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(M){Fl=M,Ee.setAnimationLoop(M),M===null?is.stop():is.start()},Ee.addEventListener("sessionstart",Md),Ee.addEventListener("sessionend",Sd),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;H!==null&&H.renderStart(M,B);let K=Ee.enabled===!0&&Ee.isPresenting===!0,q=A!==null&&(he===null||K)&&A.begin(N,he);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(B),B=Ee.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,B,he),T=L.get(M,x.length),T.init(B),T.state.textureUnits=Q.getTextureUnits(),x.push(T),fe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),re.setFromProjectionMatrix(fe,Vn,B.reversedDepth),de=this.localClippingEnabled,ue=P.init(this.clippingPlanes,de),y=I.get(M,C.length),y.init(),C.push(y),Ee.enabled===!0&&Ee.isPresenting===!0){let Ce=N.xr.getDepthSensingMesh();Ce!==null&&Ul(Ce,B,-1/0,N.sortObjects)}Ul(M,B,0,N.sortObjects),y.finish(),H!==null&&H.updateLights(T.state.lightsArray),N.sortObjects===!0&&y.sort(ye,Ge),qe=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,qe&&te.addToRenderList(y,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ue===!0&&P.beginShadows();let X=T.state.shadowsArray;if(ie.render(X,M,B),ue===!0&&P.endShadows(),(q&&A.hasRenderPass())===!1){let Ce=y.opaque,Se=y.transmissive;if(T.setupLights(),B.isArrayCamera){let De=B.cameras;if(Se.length>0)for(let Ue=0,Qe=De.length;Ue<Qe;Ue++){let ot=De[Ue];wd(Ce,Se,M,ot)}qe&&te.render(M);for(let Ue=0,Qe=De.length;Ue<Qe;Ue++){let ot=De[Ue];Td(y,M,ot,ot.viewport)}}else Se.length>0&&wd(Ce,Se,M,B),qe&&te.render(M),Td(y,M,B)}he!==null&&Y===0&&(Q.updateMultisampleRenderTarget(he),Q.updateRenderTargetMipmap(he)),q&&A.end(N),M.isScene===!0&&M.onAfterRender(N,M,B),pe.resetDefaultState(),$=-1,ae=null,x.pop(),x.length>0?(T=x[x.length-1],Q.setTextureUnits(T.state.textureUnits),ue===!0&&P.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?y=C[C.length-1]:y=null,H!==null&&H.renderEnd()};function Ul(M,B,K,q){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(re)){q&&ke.setFromMatrixPosition(M.matrixWorld).applyMatrix4(fe);let Ce=ce.update(M),Se=M.material;Se.visible&&y.push(M,Ce,Se,K,ke.z,null,B)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(re))){let Ce=ce.update(M),Se=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ke.copy(M.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ke.copy(Ce.boundingSphere.center)),ke.applyMatrix4(M.matrixWorld).applyMatrix4(fe)),Array.isArray(Se)){let De=Ce.groups;for(let Ue=0,Qe=De.length;Ue<Qe;Ue++){let ot=De[Ue],Ne=Se[ot.materialIndex];Ne&&Ne.visible&&y.push(M,Ce,Ne,K,ke.z,ot,B)}}else Se.visible&&y.push(M,Ce,Se,K,ke.z,null,B)}}let Te=M.children;for(let Ce=0,Se=Te.length;Ce<Se;Ce++)Ul(Te[Ce],B,K,q)}function Td(M,B,K,q){let{opaque:X,transmissive:Te,transparent:Ce}=M;T.setupLightsView(K),ue===!0&&P.setGlobalState(N.clippingPlanes,K),q&&_.viewport(se.copy(q)),X.length>0&&Qa(X,B,K),Te.length>0&&Qa(Te,B,K),Ce.length>0&&Qa(Ce,B,K),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function wd(M,B,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){let Ne=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new bn(1,1,{generateMipmaps:!0,type:Ne?Pn:Sn,minFilter:Xn,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let Te=T.state.transmissionRenderTarget[q.id],Ce=q.viewport||se;Te.setSize(Ce.z*N.transmissionResolutionScale,Ce.w*N.transmissionResolutionScale);let Se=N.getRenderTarget(),De=N.getActiveCubeFace(),Ue=N.getActiveMipmapLevel();N.setRenderTarget(Te),N.getClearColor(at),Ze=N.getClearAlpha(),Ze<1&&N.setClearColor(16777215,.5),N.clear(),qe&&te.render(K);let Qe=N.toneMapping;N.toneMapping=qn;let ot=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),ue===!0&&P.setGlobalState(N.clippingPlanes,q),Qa(M,K,q),Q.updateMultisampleRenderTarget(Te),Q.updateRenderTargetMipmap(Te),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let gt=0,Vt=B.length;gt<Vt;gt++){let At=B[gt],{object:Mt,geometry:sn,material:Re,group:un}=At;if(Re.side===Mn&&Mt.layers.test(q.layers)){let ut=Re.side;Re.side=Jt,Re.needsUpdate=!0,Ed(Mt,K,q,sn,Re,un),Re.side=ut,Re.needsUpdate=!0,Ne=!0}}Ne===!0&&(Q.updateMultisampleRenderTarget(Te),Q.updateRenderTargetMipmap(Te))}N.setRenderTarget(Se,De,Ue),N.setClearColor(at,Ze),ot!==void 0&&(q.viewport=ot),N.toneMapping=Qe}function Qa(M,B,K){let q=B.isScene===!0?B.overrideMaterial:null;for(let X=0,Te=M.length;X<Te;X++){let Ce=M[X],{object:Se,geometry:De,group:Ue}=Ce,Qe=Ce.material;Qe.allowOverride===!0&&q!==null&&(Qe=q),Se.layers.test(K.layers)&&Ed(Se,B,K,De,Qe,Ue)}}function Ed(M,B,K,q,X,Te){H!==null&&X.isNodeMaterial&&H.setObject(M,X),M.onBeforeRender(N,B,K,q,X,Te),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(N,B,K,q,M,Te),X.transparent===!0&&X.side===Mn&&X.forceSinglePass===!1?(X.side=Jt,X.needsUpdate=!0,N.renderBufferDirect(K,B,q,X,M,Te),X.side=Fn,X.needsUpdate=!0,N.renderBufferDirect(K,B,q,X,M,Te),X.side=Mn):N.renderBufferDirect(K,B,q,X,M,Te),M.onAfterRender(N,B,K,q,X,Te)}function eo(M,B,K){B.isScene!==!0&&(B=Be);let q=j.get(M),X=T.state.lights,Te=T.state.shadowsArray,Ce=X.state.version,Se=_e.getParameters(M,X.state,Te,B,K,T.state.lightProbeGridArray),De=_e.getProgramCacheKey(Se),Ue=q.programs;q.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,q.fog=B.fog;let Qe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;q.envMap=ge.get(M.envMap||q.environment,Qe),q.envMapRotation=q.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",nn),Ue=new Map,q.programs=Ue);let ot=Ue.get(De);if(ot!==void 0){if(q.currentProgram===ot&&q.lightsStateVersion===Ce)return Rd(M,Se),ot}else Se.uniforms=_e.getUniforms(M),H!==null&&M.isNodeMaterial&&H.build(M,K,Se),M.onBeforeCompile(Se,N),ot=_e.acquireProgram(Se,De),Ue.set(De,ot),q.uniforms=Se.uniforms;let Ne=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ne.clippingPlanes=P.uniform),Rd(M,Se),q.needsLights=Zm(M),q.lightsStateVersion=Ce,q.needsLights&&(Ne.ambientLightColor.value=X.state.ambient,Ne.lightProbe.value=X.state.probe,Ne.sunLights.value=X.state.sun,Ne.sunLightShadows.value=X.state.sunShadow,Ne.directionalLights.value=X.state.directional,Ne.directionalLightShadows.value=X.state.directionalShadow,Ne.spotLights.value=X.state.spot,Ne.spotLightShadows.value=X.state.spotShadow,Ne.rectAreaLights.value=X.state.rectArea,Ne.ltc_1.value=X.state.rectAreaLTC1,Ne.ltc_2.value=X.state.rectAreaLTC2,Ne.pointLights.value=X.state.point,Ne.pointLightShadows.value=X.state.pointShadow,Ne.hemisphereLights.value=X.state.hemi,Ne.sunShadowMatrix.value=X.state.sunShadowMatrix,Ne.sunShadowCascade.value=X.state.sunShadowCascade,Ne.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ne.spotLightMatrix.value=X.state.spotLightMatrix,Ne.spotLightMap.value=X.state.spotLightMap,Ne.pointShadowMatrix.value=X.state.pointShadowMatrix),q.lightProbeGrid=T.state.lightProbeGridArray.length>0,q.currentProgram=ot,q.uniformsList=null,ot}function Ad(M){if(M.uniformsList===null){let B=M.currentProgram.getUniforms();M.uniformsList=Cr.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function Rd(M,B){let K=j.get(M);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function Ym(M,B){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(B.matrixWorld);for(let K=0,q=M.length;K<q;K++){let X=M[K];if(X.texture!==null&&X.boundingBox.containsPoint(v))return X}return null}function Km(M,B,K,q,X){B.isScene!==!0&&(B=Be),Q.resetTextureUnits();let Te=B.fog,Ce=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?B.environment:null,Se=he===null?N.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:tt.workingColorSpace,De=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ue=ge.get(q.envMap||Ce,De),Qe=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ot=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ne=!!K.morphAttributes.position,gt=!!K.morphAttributes.normal,Vt=!!K.morphAttributes.color,At=qn;q.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(At=N.toneMapping);let Mt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,sn=Mt!==void 0?Mt.length:0,Re=j.get(q),un=T.state.lights;if(ue===!0&&(de===!0||M!==ae)){let wt=M===ae&&q.id===$;P.setState(q,M,wt)}let ut=!1;q.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==un.state.version||Re.outputColorSpace!==Se||X.isBatchedMesh&&Re.batching===!1||!X.isBatchedMesh&&Re.batching===!0||X.isBatchedMesh&&Re.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Re.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Re.instancing===!1||!X.isInstancedMesh&&Re.instancing===!0||X.isSkinnedMesh&&Re.skinning===!1||!X.isSkinnedMesh&&Re.skinning===!0||X.isInstancedMesh&&Re.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Re.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Re.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Re.instancingMorph===!1&&X.morphTexture!==null||Re.envMap!==Ue||q.fog===!0&&Re.fog!==Te||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==P.numPlanes||Re.numIntersection!==P.numIntersection)||Re.vertexAlphas!==Qe||Re.vertexTangents!==ot||Re.morphTargets!==Ne||Re.morphNormals!==gt||Re.morphColors!==Vt||Re.toneMapping!==At||Re.morphTargetsCount!==sn||!!Re.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Re.__version=q.version);let In=Re.currentProgram;ut===!0&&(In=eo(q,B,X),H&&q.isNodeMaterial&&H.onUpdateProgram(q,In,Re));let Jn=!1,Li=!1,Us=!1,yt=In.getUniforms(),kt=Re.uniforms;if(_.useProgram(In.program)&&(Jn=!0,Li=!0,Us=!0),q.id!==$&&($=q.id,Li=!0),Re.needsLights){let wt=Ym(T.state.lightProbeGridArray,X);Re.lightProbeGrid!==wt&&(Re.lightProbeGrid=wt,Li=!0)}if(Jn||ae!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),yt.setValue(U,"projectionMatrix",M.projectionMatrix),yt.setValue(U,"viewMatrix",M.matrixWorldInverse);let Ni=yt.map.cameraPosition;Ni!==void 0&&Ni.setValue(U,xe.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&yt.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&yt.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),ae!==M&&(ae=M,Li=!0,Us=!0)}if(Re.needsLights&&(un.state.sunShadowMap.length>0&&yt.setValue(U,"sunShadowMap",un.state.sunShadowMap,Q),un.state.directionalShadowMap.length>0&&yt.setValue(U,"directionalShadowMap",un.state.directionalShadowMap,Q),un.state.spotShadowMap.length>0&&yt.setValue(U,"spotShadowMap",un.state.spotShadowMap,Q),un.state.pointShadowMap.length>0&&yt.setValue(U,"pointShadowMap",un.state.pointShadowMap,Q)),X.isSkinnedMesh){yt.setOptional(U,X,"bindMatrix"),yt.setOptional(U,X,"bindMatrixInverse");let wt=X.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),yt.setValue(U,"boneTexture",wt.boneTexture,Q))}X.isBatchedMesh&&(yt.setOptional(U,X,"batchingTexture"),yt.setValue(U,"batchingTexture",X._matricesTexture,Q),yt.setOptional(U,X,"batchingIdTexture"),yt.setValue(U,"batchingIdTexture",X._indirectTexture,Q),yt.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&yt.setValue(U,"batchingColorTexture",X._colorsTexture,Q));let Di=K.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&E.update(X,K,In),(Li||Re.receiveShadow!==X.receiveShadow)&&(Re.receiveShadow=X.receiveShadow,yt.setValue(U,"receiveShadow",X.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&B.environment!==null&&(kt.envMapIntensity.value=B.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=by()),Li){if(yt.setValue(U,"toneMappingExposure",N.toneMappingExposure),Re.needsLights&&Jm(kt,Us),Te&&q.fog===!0&&Fe.refreshFogUniforms(kt,Te),Fe.refreshMaterialUniforms(kt,q,oe,Z,T.state.transmissionRenderTarget[M.id]),Re.needsLights&&Re.lightProbeGrid){let wt=Re.lightProbeGrid;kt.probesSH.value=wt.texture,kt.probesMin.value.copy(wt.boundingBox.min),kt.probesMax.value.copy(wt.boundingBox.max),kt.probesResolution.value.copy(wt.resolution)}Cr.upload(U,Ad(Re),kt,Q)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Cr.upload(U,Ad(Re),kt,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&yt.setValue(U,"center",X.center),yt.setValue(U,"modelViewMatrix",X.modelViewMatrix),yt.setValue(U,"normalMatrix",X.normalMatrix),yt.setValue(U,"modelMatrix",X.matrixWorld),q.uniformsGroups!==void 0){let wt=q.uniformsGroups;for(let Ni=0,Os=wt.length;Ni<Os;Ni++){let Pd=wt[Ni];ne.update(Pd,In),ne.bind(Pd,In)}}return In}function Jm(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.sunLights.needsUpdate=B,M.sunLightShadows.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function Zm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(M,B,K){let q=j.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),j.get(M.texture).__webglTexture=B,j.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){let K=j.get(M);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,K=0){he=M,J=B,Y=K;let q=null,X=!1,Te=!1;if(M){let Se=j.get(M);if(Se.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(U.FRAMEBUFFER,Se.__webglFramebuffer),se.copy(M.viewport),Pe.copy(M.scissor),Ae=M.scissorTest,_.viewport(se),_.scissor(Pe),_.setScissorTest(Ae),$=-1;return}else if(Se.__webglFramebuffer===void 0)Q.setupRenderTarget(M);else if(Se.__hasExternalTextures)Q.rebindTextures(M,j.get(M.texture).__webglTexture,j.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Qe=M.depthTexture;if(Se.__boundDepthTexture!==Qe){if(Qe!==null&&j.has(Qe)&&(M.width!==Qe.image.width||M.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(M)}}let De=M.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Te=!0);let Ue=j.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ue[B])?q=Ue[B][K]:q=Ue[B],X=!0):M.samples>0&&Q.useMultisampledRTT(M)===!1?q=j.get(M).__webglMultisampledFramebuffer:Array.isArray(Ue)?q=Ue[K]:q=Ue,se.copy(M.viewport),Pe.copy(M.scissor),Ae=M.scissorTest}else se.copy(we).multiplyScalar(oe).floor(),Pe.copy(We).multiplyScalar(oe).floor(),Ae=pt;if(K!==0&&(q=V),_.bindFramebuffer(U.FRAMEBUFFER,q)&&_.drawBuffers(M,q),_.viewport(se),_.scissor(Pe),_.setScissorTest(Ae),X){let Se=j.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Se.__webglTexture,K)}else if(Te){let Se=B;for(let De=0;De<M.textures.length;De++){let Ue=j.get(M.textures[De]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+De,Ue.__webglTexture,K,Se)}}else if(M!==null&&K!==0){let Se=j.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Se.__webglTexture,K)}$=-1};function Cd(M){let B=j.get(M);return(B.__readFormat!==M.format||B.__readType!==M.type)&&(B.__readFormat=M.format,B.__readType=M.type,B.__formatReadable=R.textureFormatReadable(M.format),B.__typeReadable=R.textureTypeReadable(M.type)),B}this.readRenderTargetPixels=function(M,B,K,q,X,Te,Ce,Se=0){if(!(M&&M.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=j.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){_.bindFramebuffer(U.FRAMEBUFFER,De);try{let Ue=M.textures[Se],Qe=Ue.format,ot=Ue.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Se);let Ne=Cd(Ue);if(Ne.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-q&&K>=0&&K<=M.height-X&&U.readPixels(B,K,q,X,le.convert(Qe),le.convert(ot),Te)}finally{let Ue=he!==null?j.get(he).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(M,B,K,q,X,Te,Ce,Se=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=j.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(B>=0&&B<=M.width-q&&K>=0&&K<=M.height-X){_.bindFramebuffer(U.FRAMEBUFFER,De);let Ue=M.textures[Se],Qe=Ue.format,ot=Ue.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Se);let Ne=Cd(Ue);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,gt),U.bufferData(U.PIXEL_PACK_BUFFER,Te.byteLength,U.STREAM_READ),U.readPixels(B,K,q,X,le.convert(Qe),le.convert(ot),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Vt=he!==null?j.get(he).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Vt);let At=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await cp(U,At,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,gt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Te),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(gt),U.deleteSync(At),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,K=0){let q=Math.pow(2,-K),X=Math.floor(M.image.width*q),Te=Math.floor(M.image.height*q),Ce=B!==null?B.x:0,Se=B!==null?B.y:0;Q.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Ce,Se,X,Te),_.unbindTexture()},this.copyTextureToTexture=function(M,B,K=null,q=null,X=0,Te=0){let Ce,Se,De,Ue,Qe,ot,Ne,gt,Vt,At=M.isCompressedTexture?M.mipmaps[Te]:M.image;if(K!==null)Ce=K.max.x-K.min.x,Se=K.max.y-K.min.y,De=K.isBox3?K.max.z-K.min.z:1,Ue=K.min.x,Qe=K.min.y,ot=K.isBox3?K.min.z:0;else{let kt=Math.pow(2,-X);Ce=Math.floor(At.width*kt),Se=Math.floor(At.height*kt),M.isDataArrayTexture?De=At.depth:M.isData3DTexture?De=Math.floor(At.depth*kt):De=1,Ue=0,Qe=0,ot=0}q!==null?(Ne=q.x,gt=q.y,Vt=q.z):(Ne=0,gt=0,Vt=0);let Mt=le.convert(B.format),sn=le.convert(B.type),Re;B.isData3DTexture?(Q.setTexture3D(B,0),Re=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Q.setTexture2DArray(B,0),Re=U.TEXTURE_2D_ARRAY):(Q.setTexture2D(B,0),Re=U.TEXTURE_2D),_.activeTexture(U.TEXTURE0),_.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),_.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),_.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let un=_.getParameter(U.UNPACK_ROW_LENGTH),ut=_.getParameter(U.UNPACK_IMAGE_HEIGHT),In=_.getParameter(U.UNPACK_SKIP_PIXELS),Jn=_.getParameter(U.UNPACK_SKIP_ROWS),Li=_.getParameter(U.UNPACK_SKIP_IMAGES);_.pixelStorei(U.UNPACK_ROW_LENGTH,At.width),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,At.height),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),_.pixelStorei(U.UNPACK_SKIP_ROWS,Qe),_.pixelStorei(U.UNPACK_SKIP_IMAGES,ot);let Us=M.isDataArrayTexture||M.isData3DTexture,yt=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){let kt=j.get(M),Di=j.get(B),wt=j.get(kt.__renderTarget),Ni=j.get(Di.__renderTarget);_.bindFramebuffer(U.READ_FRAMEBUFFER,wt.__webglFramebuffer),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Os=0;Os<De;Os++)Us&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,j.get(M).__webglTexture,X,ot+Os),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,j.get(B).__webglTexture,Te,Vt+Os)),U.blitFramebuffer(Ue,Qe,Ce,Se,Ne,gt,Ce,Se,U.DEPTH_BUFFER_BIT,U.NEAREST);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||j.has(M)){let kt=j.get(M),Di=j.get(B);_.bindFramebuffer(U.READ_FRAMEBUFFER,O),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let wt=0;wt<De;wt++)Us?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.__webglTexture,X,ot+wt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,kt.__webglTexture,X),yt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Di.__webglTexture,Te,Vt+wt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Di.__webglTexture,Te),X!==0?U.blitFramebuffer(Ue,Qe,Ce,Se,Ne,gt,Ce,Se,U.COLOR_BUFFER_BIT,U.NEAREST):yt?U.copyTexSubImage3D(Re,Te,Ne,gt,Vt+wt,Ue,Qe,Ce,Se):U.copyTexSubImage2D(Re,Te,Ne,gt,Ue,Qe,Ce,Se);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else yt?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Re,Te,Ne,gt,Vt,Ce,Se,De,Mt,sn,At.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Re,Te,Ne,gt,Vt,Ce,Se,De,Mt,At.data):U.texSubImage3D(Re,Te,Ne,gt,Vt,Ce,Se,De,Mt,sn,At):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Te,Ne,gt,Ce,Se,Mt,sn,At.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Te,Ne,gt,At.width,At.height,Mt,At.data):U.texSubImage2D(U.TEXTURE_2D,Te,Ne,gt,Ce,Se,Mt,sn,At);_.pixelStorei(U.UNPACK_ROW_LENGTH,un),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut),_.pixelStorei(U.UNPACK_SKIP_PIXELS,In),_.pixelStorei(U.UNPACK_SKIP_ROWS,Jn),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Li),Te===0&&B.generateMipmaps&&U.generateMipmap(Re),_.unbindTexture()},this.initRenderTarget=function(M){j.get(M).__webglFramebuffer===void 0&&Q.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Q.setTextureCube(M,0):M.isData3DTexture?Q.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Q.setTexture2DArray(M,0):Q.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){J=0,Y=0,he=null,_.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var pl=class extends ds{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new ii;e.deleteAttribute("uv");let t=new tn({side:Jt}),n=new tn,i=new ai(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new it(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ps(e,n,6),o=new vt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new it(e,Lr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new it(e,Lr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new it(e,Lr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new it(e,Lr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new it(e,Lr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new it(e,Lr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Lr(s){return new ya({color:0,emissive:16777215,emissiveIntensity:s})}function Tu(s,e){if(e===Yh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Er||e===Ba){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Er)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function jp(s){let e=new Map,t=new Map,n=s.clone();return Yp(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Yp(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Yp(s.children[n],e.children[n],t)}var ml=class extends ri{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Iu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new gl(t,rt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new gl(t,rt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wu(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ti.extractUrlBase(e);a=Ti.resolveURL(l,this.path)}else a=Ti.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new _r(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Qp){try{a[rt.KHR_BINARY_GLTF]=new qu(e)}catch(d){i&&i(d);return}r=JSON.parse(a[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new $u(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case rt.KHR_MATERIALS_UNLIT:a[d]=new Cu;break;case rt.KHR_DRACO_MESH_COMPRESSION:a[d]=new Xu(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:a[d]=new ju;break;case rt.KHR_MESH_QUANTIZATION:a[d]=new Yu;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function xy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Ht(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ru=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ie(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Yt);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ki(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ai(h),l.distance=d;break;case"spot":l=new Aa(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),hi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Cu=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return fn}extendParams(e,t,n){let i=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Yt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Pt))}return Promise.all(i)}},Pu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Iu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(r,r)}return Promise.all(i)}},Lu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Du=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Nu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Yt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Pt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Fu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Uu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(r[0],r[1],r[2],Yt),Promise.all(i)}},Ou=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Bu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(r[0],r[1],r[2],Yt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Pt)),Promise.all(i)}},ku=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},zu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ht(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Ht(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Gu=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Hu=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Vu=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},gl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}},Wu=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Un.TRIANGLES&&l.mode!==Un.TRIANGLE_STRIP&&l.mode!==Un.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(let p of d){let b=new Xe,g=new D,m=new Nt,S=new D(1,1,1),w=new ps(p.geometry,p.material,u);for(let y=0;y<u;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,y),c.SCALE&&S.fromBufferAttribute(c.SCALE,y),w.setMatrixAt(y,b.compose(g,m,S));let v=null;for(let y in c)if(y==="_COLOR_0"){let T=c[y];w.instanceColor=new _i(T.array,T.itemSize,T.normalized)}else if(y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"){if(v===null){let C=w.geometry;v=new Ct,v.name=C.name;for(let x in C.attributes)v.setAttribute(x,C.attributes[x]);for(let x in C.morphAttributes)v.morphAttributes[x]=C.morphAttributes[x];C.index!==null&&v.setIndex(C.index),v.morphTargetsRelative=C.morphTargetsRelative;for(let x of C.groups)v.addGroup(x.start,x.count,x.materialIndex);C.boundingBox!==null&&(v.boundingBox=C.boundingBox.clone()),C.boundingSphere!==null&&(v.boundingSphere=C.boundingSphere.clone()),v.drawRange.start=C.drawRange.start,v.drawRange.count=C.drawRange.count,v.userData=Object.assign({},C.userData),w.geometry=v}let T=c[y];v.setAttribute(y,new _i(T.array,T.itemSize,T.normalized))}vt.prototype.copy.call(w,p),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Qp="glTF",Va=12,Kp={JSON:1313821514,BIN:5130562},qu=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Va),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Va,r=new DataView(e,Va),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Kp.JSON){let l=new Uint8Array(e,Va+a,o);this.content=n.decode(l)}else if(c===Kp.BIN){let l=Va+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Xu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let d=Ju[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=Ju[h]||h.toLowerCase();if(a[h]!==void 0){let u=n.accessors[e.attributes[h]],f=Dr[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){i.decodeDracoFile(h,function(f){for(let p in f.attributes){let b=f.attributes[p],g=c[p];g!==void 0&&(b.normalized=g)}d(f)},o,l,Yt,u)})})}},ju=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Yu=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},bl=class extends si{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,p=e*l,b=p-l,g=-2*f+3*u,m=f-u,S=1-g,w=m-u+d;for(let v=0;v!==o;v++){let y=a[b+v+o],T=a[b+v+c]*h,C=a[p+v+o],x=a[p+v]*h;r[v]=S*y+w*T+g*C+m*x}return r}},_y=new Nt,Ku=class extends bl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return _y.fromArray(r).normalize().toArray(r),r}},Un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jp={9728:Gt,9729:Dt,9984:yc,9985:Sr,9986:Ts,9987:Xn},Zp={33071:Dn,33648:rr,10497:Gi},wu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ju={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vy={CUBICSPLINE:void 0,LINEAR:hs,STEP:ls},Eu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new tn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),s.DefaultMaterial}function Rs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function My(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;a.push(u)}if(i){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],u=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function Sy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ty(s){let e,t=s.extensions&&s.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Au(t.attributes):e=s.indices+":"+Au(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Au(s.targets[n]);return e}function Au(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Zu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Ey=new Xe,$u=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Ta(this.options.manager):this.textureLoader=new Ra(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _r(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Rs(r,o,i),hi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Ti.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=wu[i.type],o=Dr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new zt(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=wu[i.type],l=Dr[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,b,g;if(f&&f!==d){let m=Math.floor(u/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count,w=t.cache.get(S);w||(b=new l(o,m*f,i.count*f/h),w=new fs(b,f/h),t.cache.add(S,w)),g=new Hi(w,c,u%f/h,p)}else o===null?b=new l(i.count*c):b=new l(o,u,i.count*c),g=new zt(b,c,p);if(i.sparse!==void 0){let m=wu.SCALAR,S=Dr[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,y=new S(a[1],w,i.sparse.count*m),T=new l(a[2],v,i.sparse.count*c);o!==null&&(g=new zt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,x=y.length;C<x;C++){let A=y[C];if(g.setX(A,T[C*c]),c>=2&&g.setY(A,T[C*c+1]),c>=3&&g.setZ(A,T[C*c+2]),c>=4&&g.setW(A,T[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=Jp[u.magFilter]||Dt,h.minFilter=Jp[u.minFilter]||Xn,h.wrapS=Zp[u.wrapS]||Gi,h.wrapT=Zp[u.wrapT]||Gi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Gt&&h.minFilter!==Dt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let u=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(d){return new Promise(function(u,f){let p=u;t.isImageBitmapLoader===!0&&(p=function(b){let g=new Kt(b);g.needsUpdate=!0,u(g)}),t.load(Ti.resolveURL(d,r.path),p,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),hi(d,a),d.userData.mimeType=a.mimeType||wy(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new mr,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new qi,on.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return tn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[rt.KHR_MATERIALS_UNLIT]){let d=i[rt.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Yt),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,Pt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Mn);let h=r.alphaMode||Eu.OPAQUE;if(h===Eu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Eu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==fn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new me(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==fn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==fn){let d=r.emissiveFactor;o.emissive=new Ie().setRGB(d[0],d[1],d[2],Yt)}return r.emissiveTexture!==void 0&&a!==fn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Pt)),Promise.all(l).then(function(){let d=new a(o);return r.name&&(d.name=r.name),hi(d,r),t.associations.set(d,{materials:e}),r.extensions&&Rs(i,d,r),d})}createUniqueName(e){let t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return $p(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Ty(l),d=i[h];if(d)a.push(d.promise);else{let u;l.extensions&&l.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=$p(new Ct,l,t),l.mode===Un.TRIANGLE_STRIP?u=u.then(f=>Tu(f,Ba)):l.mode===Un.TRIANGLE_FAN&&(u=u.then(f=>Tu(f,Er))),i[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?yy(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,p=h.length;f<p;f++){let b=h[f],g=a[f],m,S=l[f];if(g.mode===Un.TRIANGLES||g.mode===Un.TRIANGLE_STRIP||g.mode===Un.TRIANGLE_FAN||g.mode===void 0){let w=r.isSkinnedMesh===!0,v=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");w&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=w&&v?new ra(b,S):new it(b,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Un.LINES)m=new gs(b,S);else if(g.mode===Un.LINE_STRIP)m=new ms(b,S);else if(g.mode===Un.LINE_LOOP)m=new oa(b,S);else if(g.mode===Un.POINTS)m=new bs(b,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Sy(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),hi(m,r),g.extensions&&Rs(i,m,g),t.assignFinalMaterial(m),d.push(m)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Rs(i,d[0],r),d[0];let u=new Rt;r.extensions&&Rs(i,u,r),t.associations.set(u,{meshes:e});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);return u})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new qt(ws.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Yi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let d=a[l];if(d){o.push(d);let u=new Xe;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new aa(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,u=i.channels.length;d<u;d++){let f=i.channels[d],p=i.samplers[f.sampler],b=f.target,g=b.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,S=i.parameters!==void 0?i.parameters[p.output]:p.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",S)),l.push(p),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],p=d[2],b=d[3],g=d[4],m=[];for(let w=0,v=u.length;w<v;w++){let y=u[w],T=f[w],C=p[w],x=b[w],A=g[w];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let N=n._createAnimationTracks(y,T,C,x,A);if(N)for(let F=0;F<N.length;F++)m.push(N[F])}let S=new Sa(r,void 0,m);return hi(S,i),S})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,Ey)});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,p=d[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new fr:l.length>1?h=new Rt:l.length===1?h=l[0]:h=new vt,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),hi(h,r),r.extensions&&Rs(n,h,r),r.matrix!==void 0){let d=new Xe;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Rt;n.name&&(r.name=i.createUniqueName(n.name)),hi(r,n),n.extensions&&Rs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++){let u=c[h];u.parent!==null?r.add(jp(u)):r.add(u)}let l=h=>{let d=new Map;for(let[u,f]of i.associations)(u instanceof on||u instanceof Kt)&&d.set(u,f);return h.traverse(u=>{let f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Qi[r.path]===Qi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Qi[r.path]){case Qi.weights:h=yi;break;case Qi.rotation:h=Mi;break;case Qi.translation:case Qi.scale:h=ji;break;default:switch(n.itemSize){case 1:h=yi;break;case 2:case 3:default:h=ji;break}break}let d=i.interpolation!==void 0?vy[i.interpolation]:hs,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){let b=new h(c[f]+"."+Qi[r.path],t.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Zu(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Mi?Ku:bl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ay(s,e,t){let n=e.attributes,i=new en;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){let h=Zu(Dr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,c=new D;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],f=u.min,p=u.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),u.normalized){let b=Zu(Dr[u.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new _n;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function $p(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=Ju[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return tt.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),hi(s,e),Ay(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?My(s,e.targets,t):s})}var em=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var S=new Uint8Array(m.length),w=0;w<m.length;++w){var v=m.charCodeAt(w);S[w]=v>96?v-97:v>64?v-39:v+4}for(var y=0,w=0;w<m.length;++w)S[y++]=S[w]<60?n[S[w]]:(S[w]-60)*64+S[++w];return S.buffer.slice(0,y)}function c(m,S,w,v,y,T,C){var x=m.exports.sbrk,A=v+3&-4,N=x(A*y),F=x(T.length),H=new Uint8Array(m.exports.memory.buffer);H.set(T,F);var V=S(N,v,y,F,T.length);if(V==0&&C&&C(N,A,y),w.set(H.subarray(N,N+v*y)),x(N-x(0)),V!=0)throw new Error("Malformed buffer data: "+V)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function f(m){var S={object:new Worker(m),pending:0,requests:{}};return S.object.onmessage=function(w){var v=w.data;S.pending-=v.count,S.requests[v.id][v.action](v.value),delete S.requests[v.id]},S}function p(m){for(var S="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),w=new Blob([S],{type:"text/javascript"}),v=URL.createObjectURL(w),y=d.length;y<m;++y)d[y]=f(v);for(var y=m;y<d.length;++y)d[y].object.postMessage({});d.length=m,URL.revokeObjectURL(v)}function b(m,S,w,v,y){for(var T=d[0],C=1;C<d.length;++C)d[C].pending<T.pending&&(T=d[C]);return new Promise(function(x,A){var N=new Uint8Array(w),F=++u;T.pending+=m,T.requests[F]={resolve:x,reject:A},T.object.postMessage({id:F,count:m,size:S,source:N,mode:v,filter:y},[N.buffer])})}function g(m){var S=m.data;self.ready.then(function(w){if(!S.id)return self.close();try{var v=new Uint8Array(S.count*S.size);c(w,w.exports[S.mode],v,S.count,S.size,S.source,w.exports[S.filter]),self.postMessage({id:S.id,count:S.count,action:"resolve",value:v},[v.buffer])}catch(y){self.postMessage({id:S.id,count:S.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(m){p(m)},decodeVertexBuffer:function(m,S,w,v,y){c(r,r.exports.meshopt_decodeVertexBuffer,m,S,w,v,r.exports[l[y]])},decodeIndexBuffer:function(m,S,w,v){c(r,r.exports.meshopt_decodeIndexBuffer,m,S,w,v)},decodeIndexSequence:function(m,S,w,v){c(r,r.exports.meshopt_decodeIndexSequence,m,S,w,v)},decodeGltfBuffer:function(m,S,w,v,y,T){c(r,r.exports[h[y]],m,S,w,v,r.exports[l[T]])},decodeGltfBufferAsync:function(m,S,w,v,y){return d.length>0?b(m,S,w,h[v],l[y]):a.then(function(){var T=new Uint8Array(m*S);return c(r,r.exports[h[v]],T,m,S,w,r.exports[l[y]]),T})}}})();var mn={hero_upright:{tilt:12,turn:20,scale:1.25,cordSwing:.42,cordLay:Math.PI/2},inside_upright:{tilt:12,turn:20,scale:.89,cordSwing:.42,cordLay:Math.PI/2,gap:3.5,pop:{ms:380,side:26,clear:8,face:.6,cordUp:34},fan:{silica_sachet:54,scent_beads:54,carbon_sachet:104}}},Ya=.85,im=14.5,rd=["silica_sachet","carbon_sachet","scent_beads"],es=["shell_bottom","carbon_sachet","silica_sachet","scent_beads","shell_top","pull_cord"],Wa=new Set(["shell_bottom","shell_top"]),Nr=new Set(["carbon_sachet","silica_sachet","scent_beads"]),Ry=new Ie(2311935),Cy=new Ie(1382172),ja=.006,Py=.38,Iy=.55,Ly=.28,Dy=.37,Ny=.72,xl=.012,Cs=(s,e=0,t=1)=>Math.min(t,Math.max(e,s)),Fy=s=>s>=1?1:1-Math.exp(-5*s)*(Math.cos(6.5*s)+.77*Math.sin(6.5*s)),Uy=s=>s>=1?1:1-Math.exp(-7*s)*(1+7*s),Qu=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,qa=s=>{let e=Cs(s);return e*e*(3-2*e)},Xa=(s,e,t,n=8)=>s+(e-s)*(1-Math.pow(.001,t*n/8)),ed=(s,e)=>e<=0?0:s<=e-ja?s:s>=e+ja?e:e-(e+ja-s)**2/(4*ja),Ft,nd,id,sm,rm,am,sd,om,cm,lm,vl=class extends Rt{constructor({size:t=1.3,order:n=0}={}){super();to(this,Ft);this.name="ProductSlot",this.size=t,this.order=n,this.turn=new Rt,this.holder=new Rt,this.add(this.turn),this.turn.add(this.holder),this.parts=[],this.wires=[],this.slotMats=[],this.height=0,this.ready=!1,this.sizeId=null,this.scenes={},this.edgeGeo={},this.state={explode:0,wire:0,ghost:0,highlight:0,selected:-1},this.cur={highlight:0,sel:es.map(()=>0),lit:es.map(()=>0),see:0},this.cord={swing:0,lay:0},this.viewer=new D(0,0,10),this.drag={yaw:0,pitch:0,tYaw:0,tPitch:0,held:!1},this.colorT=1,this.colorMs=300;let i=no.sizes.M.parts.shell_bottom;this.k=t/(i.max[0]-i.min[0])}async load(t="M"){return ze(this,Ft,id).call(this,t,await ze(this,Ft,nd).call(this,t)),this.ready=!0,this.apply(),this}async useSize(t){let n=await ze(this,Ft,nd).call(this,t);return t!==this.sizeId&&(ze(this,Ft,id).call(this,t,n),this.apply()),this}prepareWires(){let t=this.parts.filter(a=>!Nr.has(a.name)),n=this.sizeId,i=a=>window.requestIdleCallback?requestIdleCallback(a,{timeout:3e3}):setTimeout(a,400),r=()=>{let a=t.shift();!a||n!==this.sizeId||(ze(this,Ft,sd).call(this,a),i(r))};i(r)}setExplode(t){this.state.explode=t}setWire(t){this.state.wire=t,t>0&&ze(this,Ft,om).call(this)}setGhost(t){this.state.ghost=t}setHighlight(t){this.state.highlight=t}selectLayer(t){if(t===this.state.selected)return;let n=this.state.selected,i=performance.now();this.state.selected=t,this.parts.forEach((r,a)=>{let o=a===t?1:0;o&&(r.pop.sideTo=mn.inside_upright.pop.side),r.pop.to!==o&&Object.assign(r.pop,{from:r.pop.p,to:o,start:i+(o&&n>=0?90:0)})})}setOut(t=[],n=120){this.state.selected=-1;let i=performance.now(),r=0;this.parts.forEach(a=>{let o=t.includes(a.name)?1:0;o&&(a.pop.sideTo=mn.inside_upright.fan[a.name]??mn.inside_upright.pop.side),a.pop.to!==o&&Object.assign(a.pop,{from:a.pop.p,to:o,start:i+n*r++})})}blink(t){let n=this.parts[es.indexOf(t)];n&&(n.blinkAt=performance.now())}fillsIn(){return this.parts.filter(t=>rd.includes(t.name)&&t.pop.p<.25&&t.pop.to===0).length}setFocus(t){this.state.focus=t&&t.length?t:null}setCord(t,n){this.cord.swing=t,this.cord.lay=n}dragBy(t,n){let i=this.drag;i.held=!0,i.tYaw+=t*.008,i.tPitch=Cs(i.tPitch+n*.004,-.5,.5)}releaseDrag(){let t=this.drag;t.held=!1,t.tYaw=0,t.tPitch=0}setColors(t,n=300){for(let i of this.slotMats){let r=t[i.slot];r&&(i.from.copy(i.m.color),i.to.set(r))}if(n<=0){for(let i of this.slotMats)i.m.color.copy(i.to);this.colorT=1;return}this.colorMs=n,this.colorT=0}partPoint(t,n=[0,0,0],i=new D){let r=this.parts[t];return r?(r.marker.position.set(r.centre.x+n[0]*r.half.x,r.centre.y+n[1]*r.half.y,r.centre.z+n[2]*r.half.z),r.marker.updateWorldMatrix(!0,!1),i.setFromMatrixPosition(r.marker.matrixWorld)):i}layerCentre(t,n=new D){return this.partPoint(t,[0,0,0],n)}halfAt(t){let n=this.halfTable;if(!n)return this.height/2;let i=Math.abs(Math.atan2(Math.sin(t),Math.cos(t)));i>Math.PI/2&&(i=Math.PI-i);let r=i/(Math.PI/2)*(n.length-1),a=Math.min(n.length-2,Math.floor(r));return n[a]+(n[a+1]-n[a])*(r-a)}body(t=new Xe){return this.updateWorldMatrix(!0,!0),t.copy(this.turn.matrixWorld).multiply(new Xe().makeTranslation(0,this.height/2,0))}corners(t,n=null){this.updateWorldMatrix(!0,!0);let i=new D;for(let r of this.parts)if(!(n==="shell"&&!Wa.has(r.name))){r.inner.updateWorldMatrix(!0,!1);for(let a=0;a<8;a++)i.set(r.centre.x+(a&1?1:-1)*r.half.x,r.centre.y+(a&2?1:-1)*r.half.y,r.centre.z+(a&4?1:-1)*r.half.z).applyMatrix4(r.inner.matrixWorld),t(i)}}rackCopy(t,n){let i=this.holder.clone(!0);return i.children.slice().forEach(r=>{let a=r.name.replace("part_","");if(Nr.has(a)){i.remove(r);return}r.position.set(0,0,0),r.quaternion.identity(),a==="pull_cord"?r.children[0].rotation.set(n,0,-t,"ZXY"):r.children[0].rotation.set(0,0,0)}),i.traverse(r=>{r.visible=!r.isLineSegments}),i}layerExplode(t,n=this.state.explode){let i=this.parts[t];return i?i.lift?ed(Qu(Cs(n))*this.rise,i.lift)/i.lift:Cs(n):0}pick(t){let n=-1,i=1/0;return this.updateWorldMatrix(!0,!0),this.parts.forEach((r,a)=>{if(r.mat.opacity<=.45)return;let o=r.mesh.geometry;if(o.boundingBox||o.computeBoundingBox(),!t.ray.intersectsBox(Oy.copy(o.boundingBox).applyMatrix4(r.mesh.matrixWorld)))return;let c=t.intersectObject(r.mesh,!1)[0];c&&c.distance<i&&(i=c.distance,n=a)}),n}update(t,n=!1){let i=!1,r=this.drag,a=r.held?1-Math.pow(.001,t*3):1-Math.pow(.001,t*.9);if(r.yaw+=(r.tYaw-r.yaw)*(n?1:a),r.pitch+=(r.tPitch-r.pitch)*(n?1:a),(Math.abs(r.tYaw-r.yaw)>1e-4||Math.abs(r.tPitch-r.pitch)>1e-4)&&(i=!0),this.turn.rotation.y=r.yaw,this.turn.rotation.x=r.pitch,this.colorT<1){this.colorT=n?1:Math.min(1,this.colorT+Math.max(t,.001)*1e3/Math.max(1,this.colorMs));let p=Qu(this.colorT);for(let b of this.slotMats)b.m.color.copy(b.from).lerp(b.to,p);i=!0}let o=mn.inside_upright.pop.ms,c=performance.now();for(let p of this.parts){let b=p.pop;if(b.p===b.to)continue;let g=n?1:Cs((c-b.start)/o);b.p=g>=1?b.to:b.to?b.from+(1-b.from)*Fy(g):b.from*(1-Uy(g)),i=!0}for(let p of this.parts){let b=p.pop;if(Math.abs(b.sideTo-b.side)>.05?(b.side=n||b.p<.02?b.sideTo:Xa(b.side,b.sideTo,t,10),i=!0):b.side=b.sideTo,p.blinkAt){let g=(c-p.blinkAt)/420;g>=1||n?(p.blink=0,p.blinkAt=0):p.blink=Math.sin(Math.PI*g),i=!0}}let l=this.cur,h=this.state;Number.isFinite(h.highlight)||(h.highlight=0),Number.isFinite(l.highlight)||(l.highlight=h.highlight);let d=n?h.highlight:Xa(l.highlight,h.highlight,t,6);Math.abs(d-l.highlight)>1e-4&&(i=!0),l.highlight=d;let u=h.focus&&h.focus.some(p=>Nr.has(p))?1:0,f=n?u:Xa(l.see,u,t,6);Math.abs(f-l.see)>1e-4&&(i=!0),l.see=Math.abs(f-u)<.002?u:f;for(let p=0;p<this.parts.length;p++){let b=h.focus&&h.focus.includes(es[p])?1:0,g=n?b:Xa(l.lit[p],b,t,6);Math.abs(g-l.lit[p])>1e-4&&(i=!0),l.lit[p]=Math.abs(g-b)<.002?b:g;let m=h.focus?b?0:-1:h.selected<0?0:p===h.selected?1:-1,S=n?m:Xa(l.sel[p],m,t,7);Math.abs(S-l.sel[p])>1e-4&&(i=!0),l.sel[p]=S}return this.apply(),i}apply(){if(!this.ready)return;let t=this.state,n=this.cur;for(let i=0;i<this.parts.length;i++){let r=this.parts[i],a=n.sel[i];ze(this,Ft,cm).call(this,r,t.explode,r.group.position),r.pop.p>0?ze(this,Ft,lm).call(this,r,r.pop.p,r.group.position):r.group.quaternion.identity(),r.name==="pull_cord"&&r.pivot.rotation.set(this.cord.lay,0,-this.cord.swing,"ZXY");let o=Math.max(0,-a),c=Math.max(n.highlight*.35,n.lit[i]*.2);for(let{m:l,base:h,baseI:d}of r.mats)l.emissive.copy(h).lerp(Ry,Math.min(1,c)),l.emissiveIntensity=d*(1-c)+c,l.opacity=(1-o*Py)*(1-t.wire*.72)*(Wa.has(r.name)?1-Math.max(t.ghost,n.see)*Ny:1)*(1-r.blink),l.depthWrite=l.opacity>.5,l.visible=l.opacity>.01;r.mesh.visible=r.mat.opacity>.01,r.mesh.renderOrder=n.sel.some(l=>l<-.001)?this.order+(a>0?.3:-.1-r.lift*2):this.order+(Nr.has(r.name)?-.2:0)}for(let i of this.wires)i.material.opacity=t.wire*.5,i.visible=t.wire>.01}};Ft=new WeakSet,nd=function(t){return this.scenes[t]||(this.scenes[t]=new ml().setMeshoptDecoder(em).loadAsync(no.sizes[t].url).then(n=>n.scene),this.scenes[t].catch(()=>{delete this.scenes[t]})),this.scenes[t]},id=function(t,n){let i=no.sizes[t].parts,r=this.k,a=i.shell_bottom,o=i.shell_top,c=a.min[0],l=a.max[0],h=a.max[2]-a.min[2],d=o.max[1]-a.min[1];this.sizeId=t,this.height=d*r,this.semi=new D((l-c)*r/2,d*r/2,h*r/2),this.plan={heelR:this.semi.z,toeR:this.semi.z*.79},this.holder.scale.setScalar(r),this.holder.position.set(-(c+l)/2*r,0,0),n.updateMatrixWorld(!0),this.wires.forEach(u=>u.parent?.remove(u)),this.wires=[],es.forEach((u,f)=>{let p=n.getObjectByName(u);if(p&&!p.isMesh&&p.traverse(S=>{S.isMesh&&(p=S)}),!p?.isMesh)throw new Error(`model has no part ${u}`);let b=this.parts[f]||(this.parts[f]=ze(this,Ft,sm).call(this,u,p)),g=i[u],m=new it(p.geometry,b.mat);p.matrixWorld.decompose(m.position,m.quaternion,m.scale),m.renderOrder=this.order+(Nr.has(u)?-.2:0),b.mesh&&b.inner.remove(b.mesh),b.inner.add(m),b.mesh=m,b.centre.set((g.min[0]+g.max[0])/2,(g.min[1]+g.max[1])/2,(g.min[2]+g.max[2])/2),b.half.set((g.max[0]-g.min[0])/2,(g.max[1]-g.min[1])/2,(g.max[2]-g.min[2])/2),b.marker.position.copy(b.centre),u==="pull_cord"&&(b.pivot.position.set(g.min[0]+.001,b.centre.y,0),b.inner.position.copy(b.pivot.position).negate())}),ze(this,Ft,rm).call(this,i),ze(this,Ft,am).call(this)},sm=function(t,n){let i=new Rt,r=new Rt,a=new Rt,o=new vt;i.name=`part_${t}`,r.rotation.order="ZXY",i.add(r),r.add(a),a.add(o),this.holder.add(i);let c=n.material.clone();c.transparent=!0,c.name=t;let l=[{m:c,base:c.emissive.clone(),baseI:c.emissiveIntensity??1}];return Wa.has(t)&&this.slotMats.push({m:c,slot:"shell",from:c.color.clone(),to:c.color.clone()}),Wa.has(t)&&(c.roughness=Iy,c.metalness=0,c.onBeforeCompile=h=>{h.fragmentShader=h.fragmentShader.replace("vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;",`vec3 outgoingLight = (totalDiffuse + totalSpecular) * ${Ly.toFixed(3)} + diffuseColor.rgb * ${Dy.toFixed(3)} + totalEmissiveRadiance;
        float toe = min(outgoingLight.r, min(outgoingLight.g, outgoingLight.b)); outgoingLight += toe < 0.04 ? 0.4 * sqrt(max(toe, 0.0)) - toe : 0.04;`)}),{name:t,group:i,pivot:r,inner:a,marker:o,mat:c,mats:l,mesh:null,centre:new D,half:new D,lift:0,out:0,clear:0,blink:0,blinkAt:0,pop:{p:0,from:0,to:0,start:0,side:mn.inside_upright.pop.side,sideTo:mn.inside_upright.pop.side}}},rm=function(t){let n=mn.inside_upright,i=.001,r=n.gap*i,a=g=>this.parts[es.indexOf(g)],o=g=>t[g].min[1],c=g=>t[g].max[1],l=a("shell_bottom"),h=a("carbon_sachet"),d=a("silica_sachet"),u=a("scent_beads"),f=a("shell_top"),p=a("pull_cord");l.lift=0,h.lift=o("shell_top")+r-o("carbon_sachet"),d.lift=c("carbon_sachet")+h.lift+r-o("silica_sachet"),u.lift=c("silica_sachet")+d.lift-c("scent_beads"),f.lift=c("silica_sachet")+d.lift+r-o("shell_top"),p.lift=f.lift/2,this.rise=f.lift+xl+ja;let b=c("shell_top")+f.lift;for(let g of this.parts)g.out=b-(o(g.name)+g.lift)+n.pop.clear*i,g.clear=g===f||g===p?0:g.half.z+f.half.z+.002},am=function(){let t=[],n=new D,i=-this.holder.position.x,r=this.height/2;for(let a of this.parts){if(!Wa.has(a.name))continue;a.mesh.updateMatrix();let o=a.mesh.geometry.attributes.position,c=Math.max(1,Math.floor(o.count/1500));for(let l=0;l<o.count;l+=c)n.fromBufferAttribute(o,l).applyMatrix4(a.mesh.matrix).multiplyScalar(this.k),t.push(n.x-i,n.y-r)}this.halfTable=Array.from({length:33},(a,o)=>{let c=o/32*Math.PI/2,l=Math.cos(c),h=Math.sin(c),d=0;for(let u=0;u<t.length;u+=2)d=Math.max(d,Math.abs(t[u]*h+t[u+1]*l),Math.abs(-t[u]*h+t[u+1]*l));return d})},sd=function(t){if(t.wire?.parent===t.inner&&t.wireFor===this.sizeId)return;let n=`${this.sizeId}:${t.name}`,i=this.edgeGeo[n]||(this.edgeGeo[n]=new ha(t.mesh.geometry,32));t.wire?t.wire.geometry=i:(t.wire=new gs(i,new qi({color:Cy,transparent:!0,opacity:0})),t.wire.renderOrder=this.order),t.wire.position.copy(t.mesh.position),t.wire.quaternion.copy(t.mesh.quaternion),t.wire.scale.copy(t.mesh.scale),t.inner.add(t.wire),t.wireFor=this.sizeId,this.wires.includes(t.wire)||this.wires.push(t.wire)},om=function(){for(let t of this.parts)Nr.has(t.name)||ze(this,Ft,sd).call(this,t)},cm=function(t,n,i){let r=Qu(Cs(n))*this.rise;return t.name==="pull_cord"?i.set(xl*qa(r/xl),ed(Math.max(0,r-xl),t.lift),0):i.set(0,ed(r,t.lift),0)},lm=function(t,n,i){let r=mn.inside_upright.pop,a=t.pop.side*.001,o=Math.max(0,n-1),c=t.clear||a;tm.copy(this.quaternion).invert(),_l.copy(this.viewer).sub(this.position).applyQuaternion(tm).normalize();let l=t.out/Math.max(.3,_l.y)*(qa((n-.3)/.45)+o*.6),h=(1-(1-Cs(n/.42))**3)*c+(a-c)*qa((n-.75)/.25)+a*o*.6;i.addScaledVector(_l,l),i.z-=h,t.name==="pull_cord"&&(i.x-=mn.inside_upright.pop.cordUp*.001*qa(n)),nm.setFromUnitVectors(zy,_l),td.identity().slerp(nm,r.face*qa((n-.5)/.5)),t.group.quaternion.copy(td),i.add(By.copy(t.centre).sub(ky.copy(t.centre).applyQuaternion(td)))};var Oy=new en,pw=new D,By=new D,ky=new D,_l=new D,zy=new D(0,1,0),tm=new Nt,nm=new Nt,td=new Nt;var hm=(s,e=0,t=1)=>Math.min(t,Math.max(e,s)),yl=(s,e,t)=>{let n=hm((t-s)/(e-s));return n*n*(3-2*n)},Ei={length:1.9,soleH:.14,upperColor:14605526,liningColor:12170411,soleColor:13355201,insoleColor:12565684},hn={inner:1,product:2,inside:2.5,outer:3,front:4},Sl=Ei.length,Gy=-Sl*.5,Ps=Ei.soleH,ad=Sl/7.45,Fr=s=>Gy+s*Sl,Ai=s=>{let e=s<.17?Math.sqrt(Math.max(0,1-((.17-s)/.17)**2)):1,t=s>.83?Math.sqrt(Math.max(0,1-((s-.83)/.17)**2)):1;return(1.18-.2*Math.exp(-(((s-.58)/.13)**2))-.1*yl(.6,.86,s))*Math.max(1e-4,Math.min(e,t))*ad},um=s=>{let e=Math.sqrt(hm(s/.07,.04,1));return(.58+1.05*yl(.02,.48,s)+.62*yl(.5,.82,s)-.18*yl(.9,1,s))*e*ad},Tl=s=>s>.42&&s<.97?.76*Math.pow(Math.sin(Math.PI*(s-.42)/.55),.6)*ad:0,Ml=(s,e,t)=>t.set(Fr(s),Ps+um(s)*Math.pow(Math.sin(e),.72),Ai(s)*.97*Math.cos(e)*(1+.07*Math.sin(e))),dm=(s,e)=>{let t=Tl(s),n=Ai(s)||1e-6;return t>0&&Math.abs(n*Math.cos(e))<t&&Math.sin(e)>.5},fm={sx:Fr,hw:Ai,H:um,opening:Tl,upperPt:Ml,inOpening:dm,SOLE_H:Ps,L:Sl};function pm(s=150,e=90){let t=[],n=new D;for(let r=0;r<=s;r++){let a=.012+r/s*.976;for(let l=0;l<=e;l++){let h=l/e*Math.PI;dm(a,h)||(Ml(a,h,n),t.push(n.x,n.y,n.z))}let o=Tl(a),c=Ai(a)||1e-6;if(o>0&&o<c)for(let l of[1,-1])Ml(a,Math.acos(l*Math.min(1,o/c)),n),t.push(n.x,n.y,n.z)}let i=new Float32Array(t);t.length=0;for(let r=0;r<=80;r++){let a=r/80,o=Ai(a)*1.04*.82;for(let c=0;c<=16;c++)t.push(Fr(a)*.9,Ps+.01,-o+2*o*c/16)}return{upper:i,footbed:new Float32Array(t)}}function od(){let s=new Rt;s.name="shoe";let e=new xs,t=90;for(let y=0;y<=t;y++){let T=y/t;y?e.lineTo(Fr(T),Ai(T)*1.04):e.moveTo(Fr(T),Ai(T)*1.04)}for(let y=t;y>=0;y--){let T=y/t;e.lineTo(Fr(T),-Ai(T)*1.04)}let n=new _a(e,{depth:Ps-.03,bevelEnabled:!0,bevelThickness:.015,bevelSize:.015,bevelSegments:2,curveSegments:8});n.rotateX(Math.PI/2),n.translate(0,Ps-.015,0);let i=new tn({color:Ei.soleColor,roughness:.85,transparent:!0}),r=new it(n,i);r.renderOrder=hn.inner,s.add(r);let a=64,o=36,c=[],l=[],h=[],d=new D;for(let y=0;y<=a;y++){let T=.012+y/a*.976,C=Tl(T),x=Ai(T)||1e-6;for(let A=0;A<=o;A++){let N=A/o*Math.PI,F=0;C>0&&Math.abs(x*Math.cos(N))<C&&Math.sin(N)>.5&&(F=Math.cos(N)>=0?1:-1,N=Math.acos(F*Math.min(1,C/x))),Ml(T,N,d),c.push(d.x,d.y,d.z),h.push(F)}}let u=(y,T)=>y*(o+1)+T;for(let y=0;y<a;y++)for(let T=0;T<o;T++){let C=[h[u(y,T)],h[u(y+1,T)],h[u(y,T+1)],h[u(y+1,T+1)]];C.includes(1)&&C.includes(-1)||l.push(u(y,T),u(y+1,T),u(y,T+1),u(y+1,T),u(y+1,T+1),u(y,T+1))}let f=new Ct;f.setAttribute("position",new Lt(c,3)),f.setIndex(l),f.computeVertexNormals();let p=new tn({color:Ei.upperColor,roughness:.82,transparent:!0,side:Fn}),b=new tn({color:Ei.liningColor,roughness:.9,transparent:!0,side:Jt}),g=new it(f,p),m=new it(f,b);g.renderOrder=hn.outer,m.renderOrder=hn.inner,s.add(g,m);let S=new va(e,8);S.rotateX(-Math.PI/2),S.scale(.9,1,.82),S.translate(0,Ps+.01,0);let w=new tn({color:Ei.insoleColor,roughness:.95,transparent:!0}),v=new it(S,w);return v.renderOrder=hn.inner,s.add(v),s.userData.mats=[i,p,w,b],s.userData.setOpacity=(y,T=y)=>{p.opacity=y,p.depthWrite=y>.02;for(let C of[i,w,b])C.opacity=T,C.depthWrite=T>.6;s.visible=Math.max(y,T)>.01},s.userData.seat=new D(.12,Ps+.02,0),s}var Hy=`
attribute float aSize;
attribute vec4 aColor;
attribute vec4 aShape;   // x kind (0 dot, 1 sparkle, 2 ring, 3 streak), y rotation, z aspect, w hardness
uniform float uScale;
uniform vec2 uMin;      // smallest on-screen size in device px: dots, sparkles
varying vec4 vColor;
varying vec4 vShape;
void main() {
  vColor = aColor; vShape = aShape;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(aSize * uScale / -mv.z, aShape.x > 0.5 && aShape.x < 1.5 ? uMin.y : uMin.x, 192.0);
}`,Vy=`
varying vec4 vColor;
varying vec4 vShape;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  p.y = -p.y;
  float c = cos(vShape.y), s = sin(vShape.y);
  p = vec2(c * p.x + s * p.y, -s * p.x + c * p.y);
  float k = vShape.x, hard = vShape.w, a;
  if (k < 0.5) {                 // soft round mote
    float r = length(p);
    a = 1.0 - smoothstep(hard, 1.0, r);
  } else if (k < 1.5) {          // four-point sparkle with a small bright core
    vec2 q = abs(p);
    float d = sqrt(q.x) + sqrt(q.y);
    float aa = max(fwidth(d), 0.02) * 1.2;
    a = 1.0 - smoothstep(1.0 - aa, 1.0, d);
    a = max(a, 1.0 - smoothstep(0.0, 0.3, length(p)));
  } else if (k < 2.5) {          // thin ring
    float r = length(p), w = mix(0.08, 0.3, hard), aa = max(fwidth(r), 0.01) * 1.2;
    a = smoothstep(1.0 - w - aa, 1.0 - w, r) * (1.0 - smoothstep(1.0 - aa, 1.0, r));
  } else {                       // streak: a soft ellipse along x, aspect z
    float r = length(vec2(p.x, p.y * max(1.0, vShape.z)));
    a = 1.0 - smoothstep(hard, 1.0, r);
  }
  a *= vColor.a;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor.rgb, a);
}`,Wy=`
uniform vec3 uColor;
uniform float uAlpha;
uniform float uWidth;
varying vec2 vUv;
void main() {
  float r = length(vUv * 2.0 - 1.0), aa = max(fwidth(r), 0.002) * 1.5;
  float a = smoothstep(1.0 - uWidth - aa, 1.0 - uWidth, r) * (1.0 - smoothstep(1.0 - aa, 1.0, r));
  a *= uAlpha;
  if (a < 0.004) discard;
  gl_FragColor = vec4(uColor, a);
}`,qy=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;var Xy={dot:0,spark:1,ring:2,streak:3},wl=new Ie;function mm(s,e){return typeof s=="number"?(e[0]=(s>>16&255)/255,e[1]=(s>>8&255)/255,e[2]=(s&255)/255,e):(wl.set(s).convertLinearToSRGB(),e[0]=wl.r,e[1]=wl.g,e[2]=wl.b,e)}var ts=[0,0,0],El=class{constructor(e,t){this.n=e,this.count=0;let n=this.g=new Ct,i=(r,a,o)=>{let c=new zt(a,o);return c.setUsage(Jh),n.setAttribute(r,c),c};this.pos=i("position",new Float32Array(e*3),3),this.size=i("aSize",new Float32Array(e),1),this.col=i("aColor",new Float32Array(e*4),4),this.shape=i("aShape",new Float32Array(e*4),4),n.setDrawRange(0,0),this.mat=new cn({uniforms:{uScale:{value:400},uMin:{value:new me(2.5,5)}},vertexShader:Hy,fragmentShader:Vy,transparent:!0,depthWrite:!1,depthTest:!0}),this.obj=new bs(n,this.mat),this.obj.frustumCulled=!1,this.obj.renderOrder=t,this.obj.visible=!1}push(e,t,n,i,r,a,o,c,l,h){if(this.count>=this.n||a<=.004||i<=0)return;let d=this.count++;this.pos.array[d*3]=e,this.pos.array[d*3+1]=t,this.pos.array[d*3+2]=n,this.size.array[d]=i,mm(r,ts),this.col.array[d*4]=ts[0],this.col.array[d*4+1]=ts[1],this.col.array[d*4+2]=ts[2],this.col.array[d*4+3]=Math.min(1,a),this.shape.array[d*4]=o,this.shape.array[d*4+1]=c,this.shape.array[d*4+2]=l,this.shape.array[d*4+3]=h}flush(){if(this.g.setDrawRange(0,this.count),this.obj.visible=this.count>0,!!this.count)for(let e of[this.pos,this.size,this.col,this.shape])e.clearUpdateRanges(),e.addUpdateRange(0,this.count*e.itemSize),e.needsUpdate=!0}},Al=class{constructor(e,{capacity:t=160,rings:n=4}={}){this.back=new El(t,hn.inside),this.front=new El(t,hn.front),e.add(this.back.obj),e.add(this.front.obj);let i=new Wn(1,1);this.rings=Array.from({length:n},()=>{let r=new cn({uniforms:{uColor:{value:new Ie},uAlpha:{value:0},uWidth:{value:.1}},vertexShader:qy,fragmentShader:Wy,transparent:!0,depthWrite:!1,side:Mn}),a=new it(i,r);return a.renderOrder=hn.front,a.visible=!1,a.frustumCulled=!1,e.add(a),a}),this.ringUsed=0}setScale(e,t=1){for(let n of[this.back,this.front])n.mat.uniforms.uScale.value=e,n.mat.uniforms.uMin.value.set(2.5*t,5*t)}begin(){this.back.count=0,this.front.count=0,this.ringUsed=0}add(e,t,n,i){(i.layer==="back"?this.back:this.front).push(e,t,n,i.size,i.color,i.alpha,Xy[i.kind||"dot"],i.rot||0,i.aspect||1,i.hard??.35)}ring(e,t,n,i,{color:r=2311935,alpha:a=1,width:o=.08,tilt:c=-Math.PI/2,rz:l=i,layer:h="front"}={}){if(this.ringUsed>=this.rings.length||a<=.004||i<=0)return;let d=this.rings[this.ringUsed++];d.position.set(e,t,n),d.rotation.set(c,0,0),d.scale.set(i*2,l*2,1),d.renderOrder=h==="back"?hn.inside:hn.front,mm(r,ts),d.material.uniforms.uColor.value.setRGB(ts[0],ts[1],ts[2],Yt),d.material.uniforms.uAlpha.value=Math.min(1,a),d.material.uniforms.uWidth.value=o,d.visible=!0}end(){this.back.flush(),this.front.flush();for(let e=this.ringUsed;e<this.rings.length;e++)this.rings[e].visible=!1}warm(){this.begin();for(let e of["dot","spark","ring","streak"])this.add(0,.5,0,{layer:"back",kind:e,size:.05,color:2311935,alpha:.5}),this.add(0,.5,0,{layer:"front",kind:e,size:.05,color:2311935,alpha:.5});for(let e=0;e<this.rings.length;e++)this.ring(0,.5,0,.2,{alpha:.5});this.end()}clear(){this.begin(),this.end()}};var ui=(s,e=0,t=1)=>Math.min(t,Math.max(e,s)),Je=(s,e,t)=>s+(e-s)*t,cd=Math.PI*2,Ve={lin:s=>s,sm:s=>s*s*(3-2*s),in:s=>s*s*s,in2:s=>s*s,out:s=>1-(1-s)**3,out2:s=>1-(1-s)**2,io:s=>s<.5?4*s*s*s:1-(-2*s+2)**3/2,sine:s=>.5-.5*Math.cos(Math.PI*s)};function Ke(s,e){if(e<=s[0][0])return s[0][1];for(let t=1;t<s.length;t++){let n=s[t];if(e<=n[0]){let i=s[t-1],r=n[0]>i[0]?(e-i[0])/(n[0]-i[0]):1;return Je(i[1],n[1],Ve[n[2]||"sm"](r))}}return s[s.length-1][1]}function jy(s,e){let t=s.length;if(e<=s[0][0])return s[0][1];if(e>=s[t-1][0])return s[t-1][1];let n=[],i=new Array(t).fill(0);for(let p=0;p<t-1;p++)n.push((s[p+1][1]-s[p][1])/(s[p+1][0]-s[p][0]));for(let p=1;p<t-1;p++)i[p]=n[p-1]*n[p]<=0?0:(n[p-1]+n[p])/2;for(let p=0;p<t-1;p++){if(n[p]===0){i[p]=0,i[p+1]=0;continue}let b=i[p]/n[p],g=i[p+1]/n[p],m=b*b+g*g;if(m>9){let S=3/Math.sqrt(m);i[p]=S*b*n[p],i[p+1]=S*g*n[p]}}let r=0;for(;e>s[r+1][0];)r++;let[a,o]=s[r],[c,l]=s[r+1],h=c-a,d=(e-a)/h,u=d*d,f=u*d;return(2*f-3*u+1)*o+(f-2*u+d)*h*i[r]+(-2*f+3*u)*l+(f-u)*h*i[r+1]}var Tt=(s,e,t)=>ui((s-e)/(t-e)),Yy=s=>s-Math.floor(s),Is=(s,e)=>Yy(Math.sin(s*127.1+e*311.7+.5)*43758.5453),ht=(s,e,t,n)=>Je(t,n,Is(s,e));function gm(s,e,t){let n=(r,a)=>r>>a&255,i=r=>Math.round(n(s,r)+(n(e,r)-n(s,r))*ui(t));return i(16)<<16|i(8)<<8|i(0)}var Ut={cobalt:2311935,cobaltLight:8361215,cobaltPale:11122687,tan:14201996,tanLight:15390396},ld=["cx","cy","cz","pitch","roll","spin","sqx","sqy","sqz","vis","cs","cl","hl","aY","aSq","aTilt","aRel","aTint","bY","bSq","bTilt","bRel","bTint","glow"],Cl=["cx","cy","cz","pitch","roll","spin","sqx","sqy","sqz","vis","cs","cl"],mt={hang:1.25,relaxed:.5,droop:.34,flat:Math.PI/2},Yn=.72,Ur=[.37,.6],Ri=.15,ym=.95,bm=.5/ym,xm=.4/ym,Ky=(s,e)=>[-.72+s*Math.cos(.1)+e*Math.sin(.1),-.95-s*Math.sin(.1)+e*Math.cos(.1)],Ci=fm,Jy=s=>(s+Ci.L/2)/Ci.L,Mm=()=>({x:0,y:0,z:0,set(s,e,t){return this.x=s,this.y=e,this.z=t,this}}),Ka=(s,e,t=Mm())=>(Ci.upperPt(s,e,t),t),_m=Mm(),Rl=(()=>{let s=[];for(let e=0;e<22;e++){let t=.44+e/21*.51,n=Ci.opening(t),i=Ci.hw(t);if(n>0&&n<i)for(let r of[1,-1]){let a=Math.acos(r*n/i),o=Ka(t,a),c=Ka(t,a-r*.01),l=Math.hypot(c.x-o.x,c.y-o.y,c.z-o.z)/.01;s.push({s:t,th0:a,sg:r,x:o.x,dth:.1/Math.max(l,.001)})}}return s})(),vm=(()=>{let s=[];for(let e=0;e<=120;e++){let t=-.2+e*.01,n=ui(Jy(t),.012,.988),i=Ci.opening(n),r=Ci.hw(n);s.push(i>0&&i<r?Ka(n,Math.acos(i/r)).y:Ci.SOLE_H+Ci.H(n))}return s})(),Zy=s=>{let e=ui((s+.2)/.01,0,120),t=Math.min(119,Math.floor(e));return Je(vm[t],vm[t+1],e-t)};function hd(s=.0697,e=.148,t=null,n=.348,i={cx:.308,cy:.9}){let r={cx:.32,cy:.72+s,cz:0,cs:0,cl:0},a={cx:.1,cy:Ri+s,cz:0,cs:mt.droop-mt.hang,cl:mt.flat},o={...r,pitch:0,roll:0,spin:0,sqx:1,sqy:1,sqz:1,vis:1,hl:0,aY:0,aSq:1,aTilt:0,aRel:1,aTint:0,bY:0,bSq:1,bTilt:0,bRel:1,bTint:0,glow:0},c=t||(I=>Math.abs(Math.sin(I))*n+Math.abs(Math.cos(I))*s),l=(I,L=.008)=>Ri+L+c(I),h=(I,L)=>{I.sqy=L,I.sqx=I.sqz=1/Math.sqrt(L)},d=(I,L,P,ie,te)=>{for(let E of["cx","cy","cz","cs","cl"])P[E]=Ke([[0,L[E]],[ie,te[E]]],I);for(let E of["pitch","roll","spin"])P[E]=Ke([[0,L[E]],[ie,0]],I);for(let E of["sqx","sqy","sqz","vis"])P[E]=Ke([[0,L[E]],[ie,1]],I)},u=(I,L,P,ie,te=.07)=>{for(let E of ie)P[E]=Ke([[0,L[E]],[te,o[E]]],I)};function f(I,L,P,ie,te){let E=ui((P-(Zy(L)-.03))/.06),W=te.alpha;E<1&&(te.layer="back",te.alpha=E>0?W*(1-E)/Math.max(1e-4,1-W*E):W,I.add(L,P,ie,te)),E>0&&(te.layer="front",te.alpha=W*E,I.add(L,P,ie,te)),te.alpha=W}let p=.45,b=Math.cos(Yn),g=Math.sin(Yn),m={cx:Ur[0]+(l(Yn)-Ur[1])*b/g,cy:l(Yn)},w=(Math.min(.68,1.19-2*n*g-s*b)+n*g-m.cy)/g,v={cx:m.cx+w*b,cy:m.cy+w*g},y=a.cx-n,T=m.cx-n*b;function C(I,L){if(I<p){let P=I/p,ie=Yn*Ve.sm(P),te=Je(y,T,Ve.sm(P));L.roll=ie,L.cx=te+n*Math.cos(ie),L.cy=Math.max(l(ie),a.cy)}else{let P=w*(I-p)/(1-p);L.roll=Yn,L.cx=m.cx+P*b,L.cy=m.cy+P*g}return L}let x=(I,L)=>Math.max(1,Math.round(L*(I.k||1)));function A(I,L,P){d(I,L,P,.07,r),P.bY=Ke([[0,L.bY],[.12,.1,"out"],[.23,0,"in2"]],I),P.bTilt=Ke([[0,L.bTilt],[.12,-.12,"out"],[.23,-.09],[.28,0,"in2"]],I),P.bSq=Ke([[0,L.bSq],[.07,1.025,"out"],[.2,1],[.28,1],[.31,.955,"out"],[.37,1.015],[.45,1]],I),P.aY=Ke([[0,L.aY],[.1,0],[.22,.06,"out"],[.33,0,"in2"]],I),P.aTilt=Ke([[0,L.aTilt],[.1,0],[.22,-.07,"out"],[.33,-.05],[.38,0,"in2"]],I),P.aSq=Ke([[0,L.aSq],[.1,1],[.17,1.02,"out"],[.3,1],[.38,1],[.41,.96,"out"],[.47,1.012],[.55,1]],I),P.aRel=Ke([[0,L.aRel],[.07,1]],I),P.bRel=1,P.aTint=Ke([[0,L.aTint],[.4,L.aTint],[.9,1]],I),P.bTint=0,P.glow=Ke([[0,L.glow],[.07,0]],I),P.hl=Ke([[0,L.hl],[.07,0]],I)}function N(I,L,P){let te=(E,W,G,le,pe,ne,ve,Ee,lt,st)=>{let Et=(I-W)/(G/1500);if(Et<=0||Et>=1)return;let nn=le+ve*Et+.02*Math.sin(Et*cd*.8*G/1e3+E),Ns=pe+lt*Ve.out2(Et),Fs=ne+Ee*Et,ns={kind:"dot",size:Je(.04,.055,Et),color:gm(Ut.tan,Ut.tanLight,Et),alpha:.5*(Et<.2?Et/.2:1-Ve.in2(Tt(Et,.2,1))),hard:.15};st?f(P,nn,Ns,Fs,ns):P.add(nn,Ns,Fs,ns)};for(let E=0;E<5;E++){let[W,G]=Ky(.04+E*.12+ht(E,1,-.02,.02),ht(E,2,-.06,.06));te(E,.29+E*.02,ht(E,3,750,900),W,.58,G,.04,0,ht(E,4,.28,.36),!1)}for(let E=0;E<6;E++){let W=E<3,G=W?ht(E,5,.74,.84):ht(E,6,-.13,-.07);te(E+5,.39+E*.016,ht(E,7,700,800),G,W?.67:.54,ht(E,8,-.04,.04),W?.06:-.06,.05,ht(E,9,.26,.34),!0)}}let F=.1,H=.3,V=.36,O=.56,z=.8,J=.9,Y=V+(O-V)*Math.sqrt(ui(1-(.62+n*g-m.cy)/g/w));function he(I,L,P){if(P.pitch=Ke([[0,L.pitch],[F,0]],I),P.spin=Ke([[0,L.spin],[F,0]],I),P.vis=1,P.cz=Ke([[0,L.cz],[F,0]],I),I<F){let W=Ve.io(I/F);P.cx=Je(L.cx,r.cx+.02,W),P.cy=Je(L.cy,r.cy-.03,W),P.roll=Je(L.roll,-.04,W)}else if(I<H){let W=Tt(I,F,H),G=Ve.out(W);P.cx=Je(r.cx+.02,v.cx,G),P.cy=Je(r.cy-.03,v.cy,G),P.roll=Je(-.04,Yn,Ve.io(W))}else I<V?(P.cx=v.cx,P.cy=v.cy,P.roll=Yn):I<O?C(1-(1-p)*Ve.in2(Tt(I,V,O)),P):I<z?C(p*(1-Ve.out(Tt(I,O,z))),P):(P.cx=a.cx,P.roll=0);let ie=Ke([[0,L.sqy],[F,.9,"io"],[.15,1.06,"out"],[.22,1],[z,1],[.84,.95,"out"],[J,1.02],[1,1]],I);I<z?h(P,I<.24?ie:1):(P.sqy=ie,P.sqx=Ke([[z,1],[.84,1.02,"out"],[J,.995],[1,1]],I),P.sqz=1),P.aSq=Ke([[0,L.aSq],[.07,1],[O,1],[.6,.99,"out"],[z,1],[.84,.985,"out"],[J,1.004],[1,1]],I),I>=z&&(P.cy=Ri*P.aSq+s*P.sqy);let te=0,E=-mt.hang;P.cs=Ke([[0,L.cs],[F,te+.1],[.2,te+.3],[H,te-.15],[V,te-.3],[O,E+.1],[z,a.cs-.2],[J,a.cs+.1],[1,a.cs]],I),P.cl=Ke([[0,L.cl],[O,0],[z,mt.flat*.8],[J,mt.flat*1.06],[1,mt.flat]],I),u(I,L,P,["aY","aTilt","bY","bSq","bTilt"]),P.aRel=Ke([[0,L.aRel],[.07,1],[.5,1],[.62,bm]],I),P.bRel=1,P.bTint=0,P.aTint=1,P.glow=Ke([[0,L.glow],[.07,0],[.86,0],[.98,.25,"out"]],I),P.hl=Ke([[0,L.hl],[.07,0],[.86,0],[.98,.1,"out"]],I)}function $(I,L){if(L<=0||L>=470)return;let P=(I.k||1)<1,ie=Ur[0];for(let te=0;te<Rl.length;te++){if(P&&te%4===3)continue;let E=Rl[te],W=E.sg<0;if(W&&Math.abs(E.x-ie)<=.35)continue;let G=(L-150*Math.min(1,Math.abs(E.x-ie)/.5))/300;if(G<=0||G>=1)continue;let le=Ka(E.s,W?E.th0:E.th0-E.sg*E.dth*Ve.out(G),_m),pe=le.y-.3,ne=le.z,ve=(Math.hypot(pe,ne)||1)/(.002*E.sg),Ee=G<.22?Ve.sm(G/.22):1-Ve.in2((G-.22)/.78);I.add(le.x,le.y+pe/ve,le.z+ne/ve,{kind:"dot",size:.022,color:Ut.cobalt,alpha:.6*Ee,hard:.55,layer:W?"back":"front"})}}function ae(I,L,P){for(let te=0;te<6;te++){let E=((P-L)*1700-ht(te,70,0,40))/350;if(E<=0||E>=1)continue;let W=Rl[Math.floor(Is(te,71)*Rl.length)],G=Ka(W.s,W.th0,_m),le=Ve.out(E),pe=Math.sign(G.z)||1;I.add(G.x,G.y+ht(te,72,.15,.25)*le,G.z+pe*.1*le,{kind:"spark",size:Je(.06,.035,E),color:te%2?Ut.cobaltLight:Ut.cobalt,alpha:Math.min(1,E/.15)*(1-Ve.in2(E)),rot:.5*E+Is(te,73)})}}function se(I,L,P,ie=n+.07,te=n+.37){L<=0||L>=1||I.ring(a.cx,Ri+.006,0,Je(ie,te,Ve.out(L)),{rz:Je(e+.02,e+.05,Ve.out(L)),color:Ut.cobalt,alpha:P*(1-Ve.out(L)),width:.045,layer:"back"})}function Pe(I,L,P){$(P,(I-Y)*1700),ae(P,Y,I),se(P,(I-z-.04)*1700/450,.4,n+.07,n+.37);let te=x(P,12);for(let E=0;E<te;E++){let W=Je(.88,.94,E/Math.max(1,te-1)),G=ht(E,80,600,750),le=(I-W)*1700/G;if(le<=0||le>=1)continue;let pe=E%3!==2,ne=ht(E,81,0,.3),ve=ht(E,82,.08,.36),Ee=ht(E,83,-.06,.06),lt=Je(ne,ve,Ve.sm(Tt(le,0,.4)))+.025*Math.sin(le*6.5+E),st=Je(Ri+2*s+.03,ht(E,84,.82,.98),Ve.out2(le));f(P,lt,st,ui(Ee,-.06,.06),{kind:pe?"spark":"dot",size:pe?.08*(.6+.4*Math.sin(Math.PI*le)):.03,color:pe?Ut.cobalt:Ut.cobaltLight,alpha:Math.min(1,le*8)*(1-Ve.in2(Tt(le,.55,1))),hard:.5,rot:.5*le})}}function Ae(I,L,P){d(I,L,P,.08,a),P.aRel=Ke([[0,L.aRel],[.12,xm]],I),P.aTint=Ke([[0,L.aTint],[.1,1],[.22,1],[1,-.4,"io"]],I),P.glow=Ke([[0,L.glow],[.15,.35,"out"]],I),P.hl=Ke([[0,L.hl],[.15,.2,"out"]],I),u(I,L,P,["aY","aSq","aTilt","bY","bSq","bTilt"]),P.bTint=0}function at(I,L,P,ie,te=.6,E=!0){if(P<=0)return;let W=Is(L,ie)<.5,G=W?ht(L,ie+1,-.72,-.36):ht(L,ie+1,.54,.78),le=W?ht(L,ie+2,.17,.26):ht(L,ie+2,.18,.36),pe=ht(L,ie+3,-1,1)*(W?.15:.16),ne=W?[a.cx-n*.95,Ri+2*s+.01]:[a.cx+n*.95,Ri+2*s+.02];if(P<1){let ve=Ve.in2(P),Ee=(Ns,Fs,ns)=>(1-ve)*(1-ve)*Ns+2*(1-ve)*ve*ns+ve*ve*Fs,lt=Ee(G,ne[0],(G+ne[0])/2),st=Ee(le,ne[1],Math.max(le,ne[1])+.05),Et=Ee(pe,.4*pe,.7*pe),nn=Tt(P,.6,1);I.add(lt,st,Et,{layer:"back",kind:"dot",size:(E?ht(L,ie+4,.055,.07):.05)*(1-.75*nn),color:gm(Ut.tan,Ut.cobaltLight,nn),alpha:te*Math.min(1,P*6),hard:.2})}else{let ve=(P-1)*7;if(ve>=1)return;I.add(ne[0],ne[1],.4*pe,{layer:"back",kind:"dot",size:.02,color:Ut.cobalt,alpha:.8*(1-ve),hard:.6})}}function Ze(I,L,P,ie,te=1,E=L%3===0){if(P<=0||P>=1)return;let W=ht(L,ie,0,.32),G=ht(L,ie+1,.08,.36),le=ht(L,ie+2,-.06,.06),pe=Je(W,G,Ve.sm(Tt(P,0,.35)))+.025*Math.sin(P*8.6+L),ne=Je(Ri+2*s+.03,Ri+2*s+.03+ht(L,ie+3,.45,.6),Ve.out2(P)),ve=ui(le*(1-.5*P),-.06,.06);f(I,pe,ne,ve,{kind:E?"spark":"dot",size:E?.07*(.6+.4*Math.sin(Math.PI*P)):ht(L,ie+4,.03,.035),color:E?Ut.cobalt:Ut.cobaltLight,alpha:te*Math.min(1,P*10)*(1-Ve.in2(Tt(P,.6,1))),hard:.5,rot:.26*Math.sin(P*9+L)})}function ct(I,L,P){se(P,(I-.22)*2800/900,.3,n+.05,n+.39),se(P,(I-.48)*2800/900,.22,n+.05,n+.39);let te=x(P,18);for(let W=0;W<te;W++){let G=Je(.04,.3,W/Math.max(1,te-1));at(P,W,(I-G)*2800/ht(W,20,850,950),21)}let E=x(P,17);for(let W=0;W<E;W++){let G=Je(.3,.8,W/Math.max(1,E-1));Ze(P,W,(I-G)*2800/ht(W,30,1200,1500),31,1,W%3===0&&W<15)}for(let[W,G]of[[.6,.18],[.72,.32]]){let le=(I-W)*2800/900;le<=0||le>=1||P.add(G,.6+.25*Ve.out2(le),.02,{kind:"dot",size:Je(.22,.5,le),color:Ut.cobaltPale,alpha:.1*Math.sin(Math.PI*le),hard:0})}}let Z=[.5],oe=[0],ye=()=>{let I=Z.length-1;Z.push(Z[I]+1.8+1.6*Is(I,90)),oe.push(oe[I]+(Is(I,91)<.7?1:0))};function Ge(I,L,P,ie=1){let te=ie*.5*(Math.sin(cd*I/5.3)+Math.sin(cd*I/8.9));if(L.glow=.35+.05*te,L.hl=.2+.03*te,L.aTint=-1+.6*Math.exp(-I/4.5),!P||ie<=.004)return!0;for(;Z[Z.length-1]<I+.01;)ye();let E=0,W=Z.length-1;for(;E<W;){let G=E+W>>1;I-Z[G]>2.2?E=G+1:W=G}for(let G=E;G<Z.length;G++){let le=I-Z[G];if(le<-.01)break;Is(G,91)<.7?Ze(P,G,le/2,92,.75*ie,(oe[G]+1)%3===0):at(P,G,le/1.4,93,.45*ie,!1)}return!0}let we=.1,We=.17,pt=.22,re=.31,ue=.34,de=.6,fe=.86;function xe(I,L,P){if(P.pitch=Ke([[0,L.pitch],[.08,0]],I),P.spin=Ke([[0,L.spin],[.08,0]],I),P.vis=1,P.cz=Ke([[0,L.cz],[.08,0]],I),P.aSq=Ke([[0,L.aSq],[.07,1],[re,1],[ue,1.012,"out"],[.42,.992],[.5,1]],I),I<de){let E=Ke([[0,0],[we,0],[We,.09,"out"],[pt,.05],[re,.2,"out"],[ue,.17],[de,1,"out2"]],I);if(C(E,P),I<.08){let W=Ve.sm(I/.08);P.cx=Je(L.cx,P.cx,W),P.cy=Je(L.cy,P.cy,W),P.roll=Je(L.roll,P.roll,W)}}else{let E=Tt(I,de,fe);P.cx=Je(v.cx,r.cx,Ve.sm(E)),P.cy=jy([[de,v.cy],[.7,v.cy+.03],[fe,r.cy-.012],[1,r.cy]],I),P.roll=Ke([[de,Yn],[.76,-.16,"io"],[fe,.06],[1,0]],I)}I<fe?(P.sqy=1,P.sqx=1,P.sqz=1):h(P,Ke([[fe,1],[.91,.96,"out"],[.96,1.012],[1,1]],I));let ie=-mt.hang,te=-mt.hang-1.2;P.cs=Ke([[0,L.cs],[we,te],[re,te+.5],[ue+.06,ie],[de,ie],[.74,.35],[fe,-.12],[1,0]],I),P.cl=Ke([[0,L.cl],[we*.8,0]],I),u(I,L,P,["aY","aTilt","bY","bSq","bTilt"]),P.bRel=1,P.bTint=0,P.aRel=Ke([[0,L.aRel],[.42,L.aRel],[.58,1]],I),P.glow=Ke([[0,L.glow],[.1,Math.min(L.glow,.25)],[re,Math.min(L.glow,.2)],[.56,0]],I),P.hl=Ke([[0,L.hl],[.1,Math.min(L.hl,.1)],[.6,0]],I),P.aTint=L.aTint}let ke={...o},Be=[[.84,-.8,.31,.1],[.89,.84,.64,.12]];function qe(I,L,P){let te=x(P,13),E=0;I>ue&&(xe(Math.min(I,de),L,ke),E=Math.max(0,ke.cy-.37));for(let W=0;W<te;W++){let G=Je(ue+.02,ue+.14,W/Math.max(1,te-1)),le=ht(W,60,450,650),pe=(I-G)*1600/le;if(pe<=0||pe>=1)continue;let ne=W%4===3,ve=ht(W,61,.25,.55),Ee=ht(W,62,.56,.6),lt=Ve.out(pe),st=ht(W,63,.35,.75)*E;P.add(ve+ht(W,64,-.12,.12)*lt,Ee+st*lt,ht(W,65,-.09,.09),{kind:ne?"spark":"dot",size:ne?.06:.03,color:ne?Ut.cobalt:Ut.cobaltLight,alpha:.8*(1-pe),hard:.5,rot:.4*pe})}if(L.aTint<0)for(let[W,G,le,pe]of Be){let ne=(I-W)*1600/300;ne<=0||ne>=1||P.add(G,le,pe,{kind:"spark",size:.09*Math.sin(Math.PI*ne),color:Ut.cobalt,alpha:1,rot:.44*ne})}}let je=[{id:"finish",ms:1500,needs:"hover",ends:"hover",pose:A,fx:N,tail:.06},{id:"place",ms:1700,needs:"hover",ends:"inside",pose:he,fx:Pe,tail:.45},{id:"work",ms:2800,needs:"inside",ends:"inside",pose:Ae,fx:ct,tail:.6},{id:"remove",ms:1600,needs:"inside",ends:"hover",pose:xe,fx:qe,tail:.12}];function U(I,L){let P={...L,pitch:0,roll:0,spin:0,sqx:1,sqy:1,sqz:1,vis:1,aY:0,bY:0,aSq:1,bSq:1,aTilt:0,bTilt:0};return je[I].needs==="inside"?Object.assign(P,a,I===3?{aRel:xm,glow:.25,hl:.1,aTint:Math.min(L.aTint,-.4)}:{aRel:bm,glow:.25,hl:.1,aTint:1}):Object.assign(P,r,{aRel:1,glow:0,hl:0},I===1?{aTint:1}:{}),P}function dt(I,L){let P=je[I].needs==="inside"?a:r,ie=te=>Math.abs(Math.atan2(Math.sin(te),Math.cos(te)));return Math.hypot(L.cx-P.cx,L.cy-P.cy,L.cz-P.cz)<.2&&ie(L.pitch)<.3&&Math.abs(L.roll)<.3&&ie(L.spin)<.3&&L.vis>.99&&L.cy<.62==P.cy<.62}function $e(I,L,P,ie){return Object.assign(ie,P),je[I].pose(ui(L),P,ie),ie}function R(I,L,P=!1){let ie={P:{...I},mode:"hold",t:0,from:null,up:P};return L&&L.step===1&&L.t>0&&L.t<z?Object.assign(ie,{mode:"rewind",t:L.t,from:L.from}):L&&L.step===3&&L.t>=ue?Object.assign(ie,{mode:"finish",t:L.t,from:L.from}):I.cy<.62&&(ie.mode="climb"),ie}let _=i,k={roll:0,cx:0,cy:0};function j(I,L,P){let ie=I.P,te=Ve.sm(Tt(L,0,.1)),E=.62;for(let W of["sqx","sqy","sqz","vis"])P[W]=Je(ie[W],1,Ve.sm(Tt(L,0,.06)));if(P.spin=Je(ie.spin,0,Ve.sm(Tt(L,0,.06))),P.pitch=Je(ie.pitch,0,Ve.sm(Tt(L,0,.06))),P.cz=Je(ie.cz,0,te),L<E)C(Ve.sm(Tt(L,0,E)),k),P.cx=Je(ie.cx,k.cx,te),P.cy=Je(ie.cy,k.cy,te),P.roll=Je(ie.roll,k.roll,te);else{let W=I.up?_:r,G=Ve.sm(Tt(L,E,1));P.cx=Je(v.cx,W.cx,G),P.cy=Je(v.cy,W.cy,G),P.roll=Je(Yn,0,Ve.io(Tt(L,E,1)))}return P.cs=Ke([[0,ie.cs],[.1,-mt.hang-.8],[.3,-mt.hang],[E,-mt.hang],[1,0]],L),P.cl=Ke([[0,ie.cl],[.08,0]],L),P}let Q={...o};function ge(I,L,P){let ie=Ve.sm(ui(L));for(let te of ld)P[te]=Je(I.P[te],o[te],ie);P.aTint=I.P.aTint,P.bTint=I.P.bTint,P.glow=Je(I.P.glow,0,Ve.sm(Tt(L,0,.3))),P.hl=Je(I.P.hl,0,Ve.sm(Tt(L,0,.4)));for(let te of["aY","aSq","aTilt","bY","bSq","bTilt"])P[te]=Je(I.P[te],o[te],Ve.sm(Tt(L,0,.3)));if(I.mode==="rewind"||I.mode==="finish"){let te=Ve.sm(Tt(L,0,.75));I.mode==="rewind"?he(I.t*(1-te),I.from,Q):xe(I.t+(1-I.t)*te,I.from,Q),Cl.forEach(E=>{P[E]=Q[E]}),P.aRel=Q.aRel}else I.mode==="climb"&&(L<1&&j(I,L,P),P.aRel=Je(I.P.aRel,1,Ve.sm(Tt(L,.5,.8))));return P.fxAlpha=1-Ve.sm(Tt(L,0,.4)),P}let be={down:[.3,.38,.46,.54,.62].map((I,L)=>[Ur[0]+L*.09*b,Ur[1]+L*.09*g,I]).concat([[v.cx-.06,v.cy+.01,.74],[v.cx-.2,v.cy-.02,.86]])};be.up=be.down;function ee(I,L,P){if(!I||I.mode!=="climb")return;let ie=Tt(L,1,1.833);for(let[te,E,W]of I.up?be.up:be.down){let G=Tt(L,W,W+.04);G<=0||ie>=1||P.add(te,E+.08*ie,.02,{kind:"dot",size:.03,color:Ut.cobaltLight,alpha:.55*G*(1-ie),hard:.45})}}let ce=(I,L)=>!I||I.mode==="hold"?1:I.jump?Ve.sm(Tt(L,.6,1)):I.mode==="climb"?L>=1?1:0:Ve.sm(Tt(L,.75,1));function _e(I,L,P,ie=1){if(I===0)for(let[te,E,W]of[[.8,.78,.04],[.86,.88,.05],[-.12,.66,.03],[-.42,.78,-.98]])P.add(te,E,W,{kind:"dot",size:.045,color:Ut.tan,alpha:.45*ie,hard:.15});if(I===1)for(let[te,E]of[[.14,.64],[.3,.76],[.22,.88]])P.add(te,E,.02,{kind:"spark",size:.07,color:Ut.cobalt,alpha:.95});if(I===2){for(let[te,E]of[[.1,.72],[.34,.8],[.18,.96]])P.add(te,E,.02,{kind:"dot",size:.032,color:Ut.cobaltLight,alpha:.9,hard:.5});for(let[te,E]of[[.26,.66],[.06,.86]])P.add(te,E,.02,{kind:"spark",size:.065,color:Ut.cobalt,alpha:.95})}if(I===3&&L.aTint<0)for(let[te,E,W]of[[-.8,.31,.1],[.84,.64,.12]])P.add(te,E,W,{kind:"spark",size:.08,color:Ut.cobalt,alpha:1})}function Fe(I,L,P){return $e(I,1,L,P),I===2&&(P.aTint=-.8),P}return{HOVER:r,SEAT:a,CLEAR:v,THROAT:Ur,TILT:Yn,T_CROSS:Y,thread:C,REST:o,steps:je,startOf:U,canBlend:dt,evalStep:$e,loop:Ge,still:_e,stillState:Fe,freeze:R,exit:ge,exitFx:ee,gate:ce,upPose:i,hh:s}}var $y="assets/env/room.bin",Qy=64,Ot=(s,e=0,t=1)=>Math.min(t,Math.max(e,s)),Bt=(s,e,t)=>s+(e-s)*t,Kn=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,ft={x:.1,y:.15,z:0,scale:.1098*1.9/.3/1.3},Or={x:.32,y:.72,z:0},On=.55,jt=-3.2,dd=.95,Sm=.3,eM=250,tM=150,Tm=10,nM=8,iM=.8,sM=.25,wm=new Set(["shoeY","shoeZ","shoeTilt","pairY","pairZ","rack","unit"]),rM=new Set(["shoeA","pair"]),Pi={yaw:.34,pitch:.2,px:0,py:.3,pz:.5,scale:1.5},Em=ws.degToRad,Fm=s=>({yaw:0,pitch:-Em(s.tilt+im),roll:-Math.PI/2,face:Math.PI/2+Em(s.turn),scale:s.scale,cordS:s.cordSwing,cordL:s.cordLay}),Um={...Fm(mn.hero_upright),px:0,py:.05,pz:0},Xt={...Fm(mn.inside_upright),px:0,py:.05,pz:.4},wn={yaw:.45,pitch:.4,px:-.06,py:.05,pz:.4,scale:1.25},Ii={yaw:.35,pitch:.2,px:-1.1,py:.12,pz:.3,scale:1.15},gn={explorer:{...Um,explode:0,wire:0,shoeY:jt,shoeA:0,pair:0,rack:0,unit:1,floor:1,shoeZ:0,pairY:jt,pairZ:0,shoeTilt:0,pres:0,fitK:1,fitX:0,fitY:0,ghost:0},what:{...Pi,explode:0,wire:0,shoeY:jt,shoeA:0,pair:0,rack:0,unit:1,floor:0,shoeZ:0,pairY:jt,pairZ:0,shoeTilt:0,pres:0,fitK:1,fitX:0,fitY:0,ghost:1,cordS:mt.relaxed,cordL:0},how:{yaw:0,pitch:0,px:Or.x,py:Or.y,pz:0,scale:ft.scale,explode:0,wire:0,shoeY:0,shoeA:dd,pair:1,rack:0,unit:1,floor:0,shoeZ:0,pairY:0,pairZ:0,shoeTilt:0,pres:1,fitK:1,fitX:0,fitY:0,ghost:0,cordS:mt.hang,cordL:0},inside:{...Xt,explode:1,wire:0,shoeY:2.4,shoeA:0,pair:0,rack:0,unit:1,floor:0,shoeZ:-.7,pairY:2.4,pairZ:-.7,shoeTilt:.05,pres:0,fitK:1,fitX:0,fitY:0,ghost:0},customize:{...wn,explode:0,wire:0,shoeY:jt,shoeA:0,pair:0,rack:0,unit:1,floor:0,shoeZ:0,pairY:jt,pairZ:0,shoeTilt:0,pres:0,fitK:1,fitX:0,fitY:0,ghost:0,cordS:mt.relaxed,cordL:0},bulk:{yaw:0,pitch:0,px:ft.x*On,py:ft.y*On,pz:0,scale:ft.scale*On,explode:0,wire:0,shoeY:0,shoeA:.62,pair:0,rack:1,unit:On,floor:0,shoeZ:0,pairY:0,pairZ:0,shoeTilt:0,pres:1,fitK:1,fitX:0,fitY:0,ghost:0,cordS:mt.droop,cordL:mt.flat},why:{...Ii,explode:0,wire:0,shoeY:jt,shoeA:0,pair:0,rack:0,unit:1,floor:0,shoeZ:0,pairY:jt,pairZ:0,shoeTilt:0,pres:0,fitK:1,fitX:0,fitY:0,ghost:0,cordS:mt.relaxed,cordL:0},story:{...Ii,yaw:1.15,pitch:.12,explode:0,wire:0,shoeY:jt,shoeA:0,pair:0,rack:0,unit:1,floor:0,shoeZ:0,pairY:jt,pairZ:0,shoeTilt:0,pres:0,fitK:1,fitX:0,fitY:0,ghost:0,cordS:mt.relaxed,cordL:0},faq:{...Ii,yaw:.72,pitch:.34,explode:0,wire:0,shoeY:jt,shoeA:0,pair:0,rack:0,unit:1,floor:0,shoeZ:0,pairY:jt,pairZ:0,shoeTilt:0,pres:0,fitK:1,fitX:0,fitY:0,ghost:0,cordS:mt.relaxed,cordL:0},close:{yaw:.3,pitch:.42,px:-.04,py:.2,pz:0,scale:.95,explode:0,wire:0,shoeY:jt,shoeA:0,pair:0,rack:0,unit:1,floor:0,shoeZ:0,pairY:jt,pairZ:0,shoeTilt:0,pres:0,fitK:1,fitX:0,fitY:0,ghost:0,cordS:mt.droop,cordL:mt.flat}};for(let s of Object.values(gn))s.roll??(s.roll=0),s.face??(s.face=0),s.vk=1,s.vx=0,s.vy=0;var Rw=Object.keys(gn),Om=Object.keys(gn.explorer),aM={"what>how":[0,.3],"how>inside":[.3,.7],"inside>customize":[.45,1],"customize>bulk":[0,.38],"bulk>why":[.5,1]},fd={"explorer>what":{floor:[[0,1],[.4,0]],scale:[[0,Um.scale],[.7,Pi.scale*Ya],[1,Pi.scale]]},"what>how":{shoeY:[[0,jt],[.3,-2.6],[.87,0,"out"]],pairY:[[0,jt],[.34,-2.6],[.9,0,"out"]],shoeA:[[.35,0],[.55,dd]],pair:[[.4,0],[.6,1]],pres:[[.35,0],[.47,1]],py:[[0,Pi.py],[.45,.835],[1,Or.y]],scale:[[0,Pi.scale],[.7,ft.scale]],px:[[0,Pi.px],[.8,Or.x]],yaw:[[0,Pi.yaw],[.6,0]],pitch:[[0,Pi.pitch],[.6,0]],pz:[[0,Pi.pz],[.7,0]],ghost:[[0,1],[.25,0]]},"how>inside":{pairZ:[[.24,0],[.35,-.7,"io"]],pairY:[[.26,0],[.58,2.4,"in"]],pair:[[.42,1],[.56,0]],shoeZ:[[.26,0],[.37,-.7,"io"]],shoeY:[[.28,0],[.6,2.4,"in"]],shoeTilt:[[.3,0],[.5,.05]],shoeA:[[.44,dd],[.6,0]],pres:[[.5,1],[.6,0]],pitch:[[.3,0],[.7,Xt.pitch]],yaw:[[.3,0],[.7,Xt.yaw]],px:[[.3,Or.x],[.7,Xt.px]],py:[[.3,Or.y],[.7,Xt.py]],pz:[[.3,0],[.7,Xt.pz]],roll:[[.3,0],[.7,Xt.roll]],face:[[.3,0],[.7,Xt.face]],scale:[[.3,ft.scale],[.45,ft.scale*Ya],[.7,Xt.scale]],cordL:[[.3,0],[.7,Xt.cordL]],explode:[[.68,0],[1,1]]},"inside>customize":{explode:[[0,1],[.55,0]],pitch:[[.45,Xt.pitch],[1,wn.pitch]],yaw:[[.45,Xt.yaw],[1,wn.yaw]],px:[[.45,Xt.px],[1,wn.px]],py:[[.45,Xt.py],[1,wn.py]],pz:[[.45,Xt.pz],[1,wn.pz]],roll:[[.45,Xt.roll],[1,0]],face:[[.45,Xt.face],[1,0]],scale:[[.45,Xt.scale],[.85,wn.scale*Ya],[1,wn.scale]]},"customize>bulk":{shoeY:[[.05,jt],[.35,0]],shoeA:[[.42,0],[.62,.62]],pres:[[.08,0],[.38,1]],py:[[0,wn.py],[.4,ft.y],[.5,ft.y],[1,ft.y*On]],px:[[0,wn.px],[.4,ft.x],[.5,ft.x],[1,ft.x*On]],pz:[[0,wn.pz],[.4,0]],scale:[[0,wn.scale],[.4,ft.scale],[.5,ft.scale],[1,ft.scale*On]],pitch:[[0,wn.pitch],[.4,0]],yaw:[[0,wn.yaw],[.4,0]],cordS:[[.05,mt.relaxed],[.38,mt.droop]],cordL:[[.05,0],[.38,mt.flat]],rack:[[.5,0],[1,1]],unit:[[.5,1],[1,On]]},"bulk>why":{rack:[[0,1],[.5,0]],unit:[[0,On],[.5,1]],shoeA:[[.15,.62],[.45,0]],shoeY:[[.5,0],[.9,jt]],pres:[[.5,1],[.8,0]],px:[[0,ft.x*On],[.5,ft.x],[1,Ii.px]],py:[[0,ft.y*On],[.5,ft.y],[1,Ii.py]],pz:[[.5,0],[1,Ii.pz]],scale:[[0,ft.scale*On],[.5,ft.scale],[1,Ii.scale]],yaw:[[.5,0],[1,Ii.yaw]],pitch:[[.5,0],[1,Ii.pitch]],cordS:[[.5,mt.droop],[.8,mt.relaxed]],cordL:[[.5,mt.flat],[.8,0]]}},oM=(()=>{let s={};for(let e of["pitch","yaw","px","py","pz","roll","face","cordL"])s[e]=[[.3,fd["how>inside"][e][0][1]],[.88,Xt[e]]];return s})(),Am={"how>inside":{...oM,scale:[[.3,ft.scale],[.42,ft.scale*Ya],[.88,Xt.scale]],explode:[[.8,0],[1,1]]}};function Ja(s,e,t,n={},i=!1){let r=gn[s]||gn.explorer,a=gn[e]||r,o=`${s}>${e}`,c=i&&Am[o]?{...fd[o],...Am[o]}:fd[o]||{},l=Kn(t);for(let u of Om)n[u]=c[u]?Ke(c[u],t):Bt(r[u],a[u],l);let h=aM[`${s}>${e}`],d=h?Ve.sm(Ot((t-h[0])/(h[1]-h[0]))):l;for(let u of["fitK","fitX","fitY"])n[u]=Bt(r[u],a[u],d);return n}var Pl={pos:new D(0,1.45,4.9),tgt:new D(0,.18,0)},ud={base:new Ie(Ei.insoleColor),warm:new Ie(13281667),cool:new Ie(12175084)},Tn=new en,cM=new D(1,0,0),lM=new Nt,Za=new D,Rm=new Ca,hM=new me,$a=new Nt,Cm=new Nt,Pm=new Nt,uM=new xn,dM=new xn,Ls=new D,Il=new D,fM=new D,pM=new D,Le,pd,md,Bm,km,gd,bd,Ds,xd,Ll,zm,_d,vd,Dl,Gm,Hm,yd,Vm,Wm,Nl,qm,Xm,Im=class{constructor(e,{reduced:t=()=>!1,narrow:n=()=>!1,quality:i=null,onSlow:r=null}={}){to(this,Le);this.host=e,this.reduced=t,this.isNarrow=n,this.q=i||{dprCap:1.5,maxPx:32e5,aa:!0,rack:8,loopIdle:Tm,warm:["bulk","how","inside"]},this.onSlow=r,this.samples=[],this.streak=0,this.lastRaw=0;let a=this.renderer=new hl({antialias:this.q.aa&&(devicePixelRatio||1)<1.5,alpha:!0,powerPreference:"high-performance"});a.debug.checkShaderErrors=!1,a.setClearColor(0,0),a.outputColorSpace=Pt,a.toneMapping=Ia,a.toneMappingExposure=1,a.domElement.className="world__gl",a.domElement.setAttribute("aria-hidden","true"),e.appendChild(a.domElement);let o=this.scene=new ds;a.domElement.addEventListener("webglcontextlost",p=>p.preventDefault()),a.domElement.addEventListener("webglcontextrestored",()=>{ze(this,Le,pd).call(this)}),o.environmentIntensity=.85,o.add(new wa(16777215,14999509,.4));let c=new Ki(16777215,1.35);c.position.set(2.5,6,4.5),o.add(c);let l=new Ki(16777215,2.4);l.position.set(-3.5,3,-5),o.add(l),this.kicker=new ai(16777215,0,3.2,1.6),o.add(this.kicker),this.glow=new ai(13622527,0,.9,1.6),o.add(this.glow),this.camera=new qt(30,1,.1,60);let h=new Wn(5.2,5.2),d=()=>{let p=new it(h,new fn({transparent:!0,depthWrite:!1,opacity:0}));return p.rotation.x=-Math.PI/2,o.add(p),p};this.floors=[d(),d()],this.floorTween=null,this.textures={},this.venue=null;let u=Nm("rgba(30,27,22,0.62)","rgba(30,27,22,0.22)",.55);this.shadow=new it(new Wn(1.75,.95),new fn({map:u,transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.003,o.add(this.shadow),this.seatShadow=new it(new Wn(1,.56),new fn({map:u,transparent:!0,depthWrite:!1,opacity:0})),this.seatShadow.rotation.x=-Math.PI/2,this.seatShadow.renderOrder=hn.inner+.5,this.seatShadow.visible=!1,o.add(this.seatShadow),this.slot=new vl({size:1.3,order:hn.product}),o.add(this.slot),this.shoe=od(),this.shoe.position.y=jt,this.shoe.userData.setOpacity(0),o.add(this.shoe),this.shoe2=od(),this.shoe2.position.set(-.72,jt,-.95),this.shoe2.rotation.y=.1,this.shoe2.userData.setOpacity(0),o.add(this.shoe2),this.halo=new sa(new dr({map:Nm("rgba(35,70,255,0.55)","rgba(35,70,255,0.15)",.42),transparent:!0,depthWrite:!1,opacity:0})),this.halo.scale.set(1.15,.62,1),this.halo.renderOrder=hn.inside,this.halo.visible=!1,o.add(this.halo),this.fx=new Al(o),this.rack=new Rt,o.add(this.rack),this.units=[],this.wider={},this.pan=0,this.S={...gn.explorer},this.travel={from:"explorer",to:"explorer",u:0},this.st3=hd(),this.s3=ze(this,Le,Ds).call(this),this._P3={...this.st3.REST,fxAlpha:1},this._loopP={...this.st3.REST},this.emit={A:1,k:1,add:(p,b,g,m)=>{m.alpha*=this.emit.A,this.fx.add(p,ze(this,Le,Dl).call(this,b),g,m)},ring:(p,b,g,m,S={})=>{S.alpha=(S.alpha??1)*this.emit.A,this.fx.ring(p,ze(this,Le,Dl).call(this,b),g,m,S)}},this.onStep=null,this.jump=null,this.frameCbs=[],this.housing={to:0,k:0},this.visible=!0,this.running=!1,this.last=0,this.clock=0,this.live=!1,this.lastInput=0,this.loopIdle=this.q.loopIdle??Tm,this.loopCalm=nM;let f=()=>{this.lastInput=performance.now(),this.s3.loop&&!this.running&&this.kick()};for(let p of["pointermove","pointerdown","keydown","wheel","touchstart"])addEventListener(p,f,{passive:!0,capture:!0});new IntersectionObserver(([p])=>{this.visible=p.isIntersecting,this.kick()},{threshold:0}).observe(e),document.addEventListener("visibilitychange",()=>this.kick()),new ResizeObserver(()=>this.resize()).observe(e),this.resize()}bakeEnvironment(e=Qy,t=!0){let n=new Pr(this.renderer),i=n.fromScene(new pl,.04,.1,100,{size:e});if(n.dispose(),!t)return i;let r=new Uint16Array(i.width*i.height*4);return this.renderer.readRenderTargetPixels(i,0,0,i.width,i.height,r),i.dispose(),{w:i.width,h:i.height,px:r}}async load(){let e=()=>new Promise(n=>setTimeout(n,0)),t=this.slot.load("M");t.catch(()=>{}),await Promise.all([t,ze(this,Le,pd).call(this)]),ze(this,Le,md).call(this),await e(),ze(this,Le,km).call(this),await e(),await ze(this,Le,Bm).call(this),this.onStep&&this.onStep(-1,0,!0),this.live=!0,this.applyState(),this.kick()}async setModel(e){await this.slot.useSize(e);let t=this.s3,n=this.travel.from==="how"&&this.travel.to==="how",i=n&&t.touched?t.tl?.step??(t.loop?2:-1):-1;t.touched&&i<0&&this.onStep&&this.onStep(-1,0,!0),ze(this,Le,md).call(this),ze(this,Le,gd).call(this),i>=0&&this.playStep(i),this.applyState(),this.kick()}resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.W=e,this.H=t,this.renderer.setPixelRatio(Math.max(.75,Math.min(devicePixelRatio||1,this.q.dprCap,Math.sqrt(this.q.maxPx/(e*t))))),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.narrow=this.isNarrow(),this.fit=e/t<1?Math.pow(1/(e/t),.75):t<420?.76:1,this.camera.updateProjectionMatrix(),this.fxScale=t*this.renderer.getPixelRatio()/(2*Math.tan(ws.degToRad(this.camera.fov/2))),this.fx.setScale(this.fxScale,this.renderer.getPixelRatio()),this.viewNow="",this.applyState(),this.kick()}texture(e){if(!this.textures[e]){let t=new gr(Id(e));t.colorSpace=Pt,t.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.textures[e]=t}return this.textures[e]}setVenue(e,{animate:t=!0}={}){if(e===this.venue)return;let[n,i]=this.floors;i.material.map=this.texture(e),i.material.needsUpdate=!0,this.floorTween={start:performance.now(),ms:!t||this.reduced()?0:420},this.floors=[i,n],this.venue=e,this.kick()}setTravel(e,t,n,i=n){let r=this.travel;if(r.from===e&&r.to===t&&Math.abs(r.u-n)<1e-4)return;r.from=e,r.to=t,r.u=n,r.uLeave=this.reduced()?n:i,this.jump=null,ze(this,Le,zm).call(this);let a=this.s3.frozen&&this.s3.frozen.leaving?i:n;this.reduced()?(Ja(e,t,n<.5?0:1,this.S,this.narrow),this.renderer.domElement.style.opacity=n>0&&n<1?String(1-.9*Math.sin(Math.PI*n)):""):(Ja(e,t,a,this.S,this.narrow),this.renderer.domElement.style.opacity=""),this.applyState(),this.kick()}restState(e){return{...gn[e]}}jumpTo(e,t=300){if(!gn[e])return;let n=this.s3,i=this.travel,r=i.from==="how"||i.to==="how";if(e==="how")n.frozen&&(n.jumpExit=!1,ze(this,Le,vd).call(this));else if(r&&(n.touched||n.frozen)){let c=n.frozen?n.exitE:0;n.frozen||ze(this,Le,_d).call(this,!1),n.jumpExit=!0,n.jumpE0=c,n.frozen.jump=!0}n.atRest=e==="how",this.travel={from:e,to:e,u:0};let a={...this.S},o=gn[e];this.jump={start:performance.now(),ms:this.reduced()?0:t,from:a,to:o,shoes:Math.max(a.shoeA,a.pair,o.shoeA,o.pair)>.01&&[...wm].some(c=>Math.abs(a[c]-o[c])>.001)},this.renderer.domElement.style.opacity="",this.kick()}playStep(e){let t=this.s3,n=this.st3;if(t.touched=!0,t.frozen){t.pending=e;return}let i=performance.now();if(!this.reduced()){if(t.tl&&(t.tl.held||i-t.tl.start>=t.tl.pre)){let o=t.tl,c=o.t;t.fades.push({start:i,draw:l=>n.steps[o.step].fx(c,o.from,l)})}if(t.tail){let o=t.tail,c=(i-o.start)/o.ms;c<o.until&&t.fades.push({start:i,draw:l=>n.steps[o.step].fx(c,o.from,l)})}if(t.loop){let o=(i-t.loop.start)/1e3,c={...t.P},l=t.loop.amp;t.fades.push({start:i,draw:h=>n.loop(o,c,h,l)})}}t.pending=-1,t.loop=null,t.tail=null,t.still=null;let r=n.canBlend(e,t.P),a=r?{...t.P}:n.startOf(e,t.P);for(let o of["pitch","roll","spin"])a[o]=Math.atan2(Math.sin(a[o]),Math.cos(a[o]));if(this.reduced()){n.stillState(e,a,t.P),t.tl=null,t.still={i:e,start:i},this.onStep&&this.onStep(e,1,!0),this.applyState(),this.kick();return}t.tl={step:e,start:performance.now(),pre:r?0:eM,ms:n.steps[e].ms,t:0,from:a,before:{...t.P}},this.kick()}selectLayer(e){this.slot.selectLayer(e),this.kick()}setOut(e,t){this.slot.setOut(e,t),this.kick()}setLoaded(e){this.housing.to=e?1:0,this.kick()}blinkPart(e){this.slot.blink(e),this.kick()}setFocus(e){this.slot.setFocus(e),this.kick()}pickLayer(e,t){return this.slot.ready?(Rm.setFromCamera(hM.set(e/this.W*2-1,-(t/this.H)*2+1),this.camera),this.slot.pick(Rm)):-1}setColors(e,t){this.slot.setColors(e,t),this.kick()}dragBy(e,t){this.slot.dragBy(e,t),this.kick()}releaseDrag(){this.slot.releaseDrag(),this.kick()}project(e,t={}){let n=pM.copy(e).project(this.camera);return t.x=(n.x*.5+.5)*this.W,t.y=(-n.y*.5+.5)*this.H,t.front=n.z<1,t}partDot(e,t){return this.project(this.slot.partPoint(es.indexOf(e),t))}onFrame(e){this.frameCbs.push(e)}applyState(){let e=this.S,t=this.slot,n=this.s3,i=this.st3,r=n.frozen?i.exit(n.frozen,n.exitE,this._P3):n.P;n.frozen||(this._P3.fxAlpha=1);let a=n.frozen?i.gate(n.frozen,n.exitE):1,o=Ot(e.pres),c=this.narrow?Bt(.55,1,o):1,l=this.narrow?Bt(.85,1,o):1,h=Math.max(.001,e.scale*e.fitK*l),d=t.height||.26;$a.setFromEuler(uM.set(e.pitch,e.yaw,e.roll,"YXZ")).multiply(lM.setFromAxisAngle(cM,e.face)),Ls.set(0,h*d/2,0).applyQuaternion($a),Ls.x+=(e.px+e.fitX)*c,Ls.y+=e.py+e.fitY,Ls.z+=e.pz;let u=i.HOVER,f=r.cx+a*(Ls.x-u.cx),p=ze(this,Le,Dl).call(this,r.cy+a*(Ls.y-u.cy)),b=r.cz+a*(Ls.z-u.cz),g=h;a<1&&(Pm.identity().slerp($a,a),$a.copy(Pm),g=Bt(ft.scale,h,a)),Cm.setFromEuler(dM.set(r.pitch,r.spin,r.roll,"ZXY")),t.quaternion.copy($a).multiply(Cm);let m=g*r.vis;t.scale.set(Math.max(.001,m*r.sqx),Math.max(.001,m*r.sqy),Math.max(.001,m*r.sqz)),Il.set(0,m*r.sqy*d/2,0).applyQuaternion(t.quaternion),t.position.set(f-Il.x,p-Il.y,b-Il.z);let S=this.housing.k,w=Ot(e.explode);t.setExplode(e.explode*(1-Kn(Ot(S/.6)))),t.setWire(e.wire),t.setGhost(Math.max(e.ghost,w*Kn(Ot((S-.6)/.4)))),t.setCord(e.cordS+r.cs,e.cordL+r.cl);let v=1/Math.sqrt(r.aSq),y=1/Math.sqrt(r.bSq);this.shoe.scale.set(e.unit*v,e.unit*r.aSq,e.unit*v),this.shoe.userData.setOpacity(e.shoeA*r.aRel,e.shoeA),Lm(this.shoe,r.aTilt+e.shoeTilt,e.unit*v,0,e.shoeY+r.aY,e.shoeZ,0),this.shoe2.scale.set(y,r.bSq,y),this.shoe2.userData.setOpacity(e.shoeA*e.pair*.9*r.bRel,e.shoeA*e.pair*.9),Lm(this.shoe2,r.bTilt,y,-.72,e.pairY+r.bY,-.95+e.pairZ,.1),Dm(this.shoe,r.aTint),Dm(this.shoe2,r.bTint);let T=e.pair;this.glow.position.set(f,p+.12,b),this.glow.intensity=2.6*r.glow*T,this.kicker.position.set(f-.95*h,p+.42*h,b+1.05*h),this.kicker.intensity=3.4*h*h*(1-.9*o),t.setHighlight(r.hl/.35*T);let C=.5*r.glow*T*r.vis;this.halo.material.opacity=C,this.halo.visible=C>.004,this.halo.position.set(f,p,b+.02),this.halo.renderOrder=p<.62?hn.inside:hn.front;let x=Kn(Ot(e.rack));for(let A of this.units)A.visible=x>.01,A.position.copy(A.userData.base).multiplyScalar(x*e.unit),A.userData.board?A.scale.set(Math.max(.001,x*e.unit),e.unit,e.unit):A.scale.setScalar(Math.max(.001,x*e.unit));this.heroWeight=e.floor,ze(this,Le,yd).call(this)}setPan(e){let t=Math.round(e*2)/2;t!==this.pan&&(this.pan=t,this.kick())}setQuality(e){this.q={...e,aa:this.q.aa},this.loopIdle=e.loopIdle??this.loopIdle,this.samples.length=0,this.resize()}dispose(){this.running=!1,this.visible=!1,this.frameCbs.length=0;try{this.renderer.dispose(),this.renderer.forceContextLoss()}catch{}this.renderer.domElement.remove()}kick(){this.running||!this.live||!this.visible||document.hidden||(this.running=!0,this.streak=0,this.last=performance.now(),requestAnimationFrame(e=>this.frame(e)))}frame(e){try{ze(this,Le,Wm).call(this,e)}catch(t){throw this.running=!1,t}}fitStage(e,t,{center:n=!1,grow:i=1}={}){let r=gn[e];if(r.fitK=1,r.fitX=0,r.fitY=0,!t||!this.slot.ready)return;let a=this.S,o=this.s3,c=ws.degToRad(this.camera.fov/2),l=this.slot.turn,h=l.rotation.x,d=l.rotation.y;this.s3=ze(this,Le,Ds).call(this),ze(this,Le,Nl).call(this),l.rotation.set(0,0,0);let u=this.housing.k,f=this.slot.parts.map(p=>({...p.pop}));if(e==="inside"){this.housing.k=0;for(let p of this.slot.parts)rd.includes(p.name)&&(p.pop.p=1,p.pop.side=mn.inside_upright.fan[p.name])}for(let p=0;p<16;p++){this.S={...r,wire:0},this.applyState(),this.slot.apply();let b=ze(this,Le,Xm).call(this),g=Math.min((t.right-t.left)/(b.x1-b.x0),(t.bottom-t.top)/(b.y1-b.y0));if(g<.995||g>1.005&&r.fitK<i){r.fitK=Math.min(Math.max(i,1),r.fitK*g);continue}let m=(y,T)=>(y+T)/2,S=n?m(t.left,t.right)-m(b.x0,b.x1):b.x0<t.left?t.left-b.x0:b.x1>t.right?t.right-b.x1:0,w=n?m(t.top,t.bottom)-m(b.y0,b.y1):b.y0<t.top?t.top-b.y0:b.y1>t.bottom?t.bottom-b.y1:0;if(Math.abs(S)<.5&&Math.abs(w)<.5)break;let v=this.H/(2*Math.tan(c)*this.camera.position.distanceTo(this.slot.position));r.fitX+=S/v,r.fitY-=w/v}this.housing.k=u,this.slot.parts.forEach((p,b)=>Object.assign(p.pop,f[b])),this.S=a,this.s3=o,l.rotation.set(h,d,0)}frameStage(e,t,{grow:n=5,shrinkOnly:i=!1,balance:r=0}={}){let a=gn[e];if(a.vk=1,a.vx=0,a.vy=0,delete this.wider[e],!t||!this.slot.ready)return;let o=this.S,c=this.s3,l=this.slot,h=l.turn,d=h.rotation.x,u=h.rotation.y,f=this.st3,p=1e9,b=-1e9,g=1e9,m=-1e9,S=x=>{let A=this.project(x);p=Math.min(p,A.x),b=Math.max(b,A.x),g=Math.min(g,A.y),m=Math.max(m,A.y)},w=()=>{this.applyState(),l.apply(),l.corners(S)},v=this.housing.k;if(this.housing.k=0,this.s3=ze(this,Le,Ds).call(this),this.S={...a,wire:0},ze(this,Le,Nl).call(this),h.rotation.set(0,0,0),w(),e==="how")for(let x of[this.shoe,this.shoe2]){Tn.setFromObject(x);for(let A=0;A<8;A++)S(Za.set(A&1?Tn.max.x:Tn.min.x,A&2?Tn.max.y:Tn.min.y,A&4?Tn.max.z:Tn.min.z))}let y={x0:p,x1:b,y0:g,y1:m};if(e==="how")for(let x=0;x<f.steps.length;x++){let A=f.startOf(x,f.REST);for(let N=0;N<=1.001;N+=.1)f.evalStep(x,N,A,this.s3.P),w()}if(e==="bulk"&&this.units.length){this.rack.updateMatrixWorld(!0),Tn.setFromObject(this.rack);for(let x=0;x<8;x++)S(Za.set(x&1?Tn.max.x:Tn.min.x,x&2?Tn.max.y:Tn.min.y,x&4?Tn.max.z:Tn.min.z))}let T=()=>{let x=Ot(Math.min((t.right-t.left)/(b-p),(t.bottom-t.top)/(m-g)),.3,i?1:n),A=this.W/2,N=this.H/2;if(!i&&r>0){let V=Bt((p+b)/2,(y.x0+y.x1)/2,r),O=Bt((g+m)/2,(y.y0+y.y1)/2,r),z=(t.left+t.right)/2,J=(t.top+t.bottom)/2,Y=($,ae,se,Pe,Ae,at)=>Math.min(Pe<se?(at-$)/(se-Pe):1/0,Ae>se?(ae-at)/(Ae-se):1/0),he=Ot(Math.min(Y(t.left,t.right,V,p,b,z),Y(t.top,t.bottom,O,g,m,J)),.3,n);return{k:he,x:z-(A+he*(V-A)),y:J-(N+he*(O-N))}}if(!i)return{k:x,x:(t.left+t.right)/2-(A+x*((p+b)/2-A)),y:(t.top+t.bottom)/2-(N+x*((g+m)/2-N))};let F=(V,O,z,J)=>V<z?z-V:O>J?J-O:0,H=(V,O)=>O+x*(V-O);return{k:x,x:F(H(p,A),H(b,A),t.left,t.right),y:F(H(g,N),H(m,N),t.top,t.bottom)}},C=T();if(a.vk=C.k,a.vx=C.x,a.vy=C.y,e==="inside")for(let x of l.parts){let A=x.pop.side;for(let N of[mn.inside_upright.pop.side,mn.inside_upright.fan[x.name]])if(N!=null){x.pop.side=N;for(let F of[.5,.8,1,1.09])x.pop.p=F,l.apply(),l.corners(S)}x.pop.p=0,x.pop.side=A,l.apply()}if(e==="customize")for(let x=0;x<8;x++)h.rotation.y=x/8*Math.PI*2,l.apply(),l.corners(S);(e==="inside"||e==="customize")&&(this.wider[e]=T()),this.housing.k=v,this.S=o,this.s3=c,h.rotation.set(d,u,0),this.viewNow=""}fitsChanged(){let e=this.travel,t=Ja(e.from,e.to,this.reduced()?e.u<.5?0:1:e.u,{},this.narrow);if(!this.jump)for(let n of["fitK","fitX","fitY","vk","vx","vy"])this.S[n]=t[n];this.applyState(),this.slot.apply(),this.kick()}capture(){return this.renderer.render(this.scene,this.camera),this.renderer.domElement.toDataURL("image/webp",.9)}scrub(e,t,n=null){let i=this.s3,r=this.st3;i.frozen=null,i.loop=null,i.touched=!0;let a=n||r.startOf(e,r.REST);r.evalStep(e,t,a,i.P),i.tl={step:e,start:performance.now(),pre:0,ms:r.steps[e].ms,t,from:a,before:{...i.P},held:!0},this.applyState(),this.kick()}jumpProbe(e,t){return(!this.jump||this.jump.stage!==e)&&(this.jumpTo(e,1e9),this.jump.stage=e),ze(this,Le,bd).call(this,t),this.applyState(),this.wallProbe()}labRest(e){this.jump=null,this.s3=ze(this,Le,Ds).call(this),this.s3.atRest=e==="how",Object.assign(this.S,gn[e]),this.travel={from:e,to:e,u:0},this.applyState(),this.kick()}wallProbe(){this._samples||(this._samples=pm()),this.slot.apply(),this.scene.updateMatrixWorld(!0);let e=this.slot,t=e.body(new Xe),n=t.clone().invert(),{semi:i,plan:r}=e,a=new D().setFromMatrixPosition(t),o=new D,c=new D,l=Math.hypot(t.elements[0],t.elements[1],t.elements[2]),h=-i.x+r.toeR,d=i.x-r.heelR-h,u=r.toeR,f=r.heelR,p=(u-f)/d,b=Math.sqrt(1-p*p),g=(x,A)=>{let N=Math.abs(A),F=x-h,H=-p*N+b*F;return H<0?Math.hypot(N,F)-u:H>b*d?Math.hypot(N,F-d)-f:b*N+p*F-u},m={depth:0};for(let[x,A]of[[this.shoe,"A"],[this.shoe2,"B"]]){let N=x.userData.mats[1].opacity;if(!(!x.visible||N<.02))for(let[F,H]of[[this._samples.upper,"upper"],[this._samples.footbed,"footbed"]])for(let V=0;V<F.length;V+=3){o.set(F[V],F[V+1],F[V+2]).applyMatrix4(x.matrixWorld),c.copy(o).applyMatrix4(n);let O=i.y-Math.abs(c.y);if(O<=0)continue;let z=-g(c.x,c.z);if(z<=0)continue;let J=Math.min(O,z)*l;J>m.depth&&(m={depth:J,shoe:A,part:H,opacity:+N.toFixed(2),at:[o.x,o.y,o.z].map(Y=>+Y.toFixed(3))})}}let S=9,w=-9,v=new D;e.corners(x=>{S=Math.min(S,x.y),x.y>w&&(w=x.y,v.copy(x))},"shell"),m.lowest=this.shoe.visible&&this.shoe.userData.mats[1].opacity>.02&&Math.abs(this.S.shoeY)<.05?S:9;let y=this.renderer.domElement.getBoundingClientRect(),T=document.querySelector(".nav"),C=this.project(v);return m.topClear=y.top+C.y-Math.max(y.top,T?T.getBoundingClientRect().bottom:0),m.scale=this.slot.scale.y,m.centre=[a.x,a.y,a.z],m.topY=w,m}};Le=new WeakSet,pd=async function(){try{if(!this._env){let i=await fetch($y);if(!i.ok)throw new Error(`environment ${i.status}`);this._env=await new Response(i.body.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}let[e,t]=new Uint32Array(this._env,0,2),n=new Wi(new Uint16Array(this._env,8,e*t*4),e,t,pn,Pn);n.mapping=Ss,n.magFilter=n.minFilter=Dt,n.generateMipmaps=!1,n.colorSpace=Yt,n.needsUpdate=!0,this.scene.environment?.dispose?.(),this.scene.environment=n}catch(e){console.warn("baked environment unavailable, making it here.",e);let t=this.bakeEnvironment(256,!1);this.scene.environment=t.texture}this.kick()},md=function(){let e=Ja("what","how",.7,{}),t=new Nt().setFromEuler(new xn(e.pitch,e.yaw,0,"YXZ")),n=new D(0,e.scale*this.slot.height/2,0).applyQuaternion(t).add(new D(e.px,e.py,e.pz));this.st3=hd(this.slot.height*ft.scale/2,this.slot.semi.z*ft.scale,i=>this.slot.halfAt(i)*ft.scale,this.slot.semi.x*ft.scale,{cx:n.x,cy:n.y}),this.s3=ze(this,Le,Ds).call(this),this._P3={...this.st3.REST,fxAlpha:1},this._loopP={...this.st3.REST}},Bm=async function(){let e=()=>new Promise(n=>setTimeout(n,0));Object.assign(this.S,gn.bulk,{explode:.5,pair:1}),this.applyState(),this.slot.apply(),this.shoe2.userData.setOpacity(.5),this.floors.forEach(n=>{n.visible=!0,n.material.map=n.material.map||this.texture("bowling")}),this.fx.warm(),this.halo.visible=!0,this.halo.material.opacity=.2;try{this.renderer.compileAsync?await this.renderer.compileAsync(this.scene,this.camera):this.renderer.compile(this.scene,this.camera)}catch{}for(let n of this.q.warm)await e(),Object.assign(this.S,gn[n],n==="how"?{pair:1}:{}),this.applyState(),n==="how"&&(this.glow.intensity=.9,this.shoe.userData.setOpacity(.5,.95),this.fx.warm(),this.halo.visible=!0,this.halo.material.opacity=.15),this.slot.update(.016,!1),this.renderer.render(this.scene,this.camera);this.glow.intensity=0,this.fx.clear();let t=this.travel;Ja(t.from,t.to,this.reduced()?t.u<.5?0:1:t.u,this.S,this.narrow),this.applyState()},km=function(){let e=[];for(let r of[1,0,-1])for(let a of[-1,0,1])(a||r)&&(this.q.rack>=8||Math.abs(a)+Math.abs(r)===1)&&e.push([a,r]);let i=new tn({color:13881287,roughness:.9});for(let r of[1,0,-1]){let a=new it(new ii(6.749999999999999,.05,1.3),i);a.userData.base=new D(0,r*1.05-.03,0),a.userData.board=!0,a.visible=!1,this.rack.add(a),this.units.push(a)}for(let[r,a]of e){let o=new Rt,c=this.shoe.clone();c.visible=!0,c.position.set(0,0,0),c.rotation.set(0,0,0),c.scale.set(1,1,1),o.add(c);let l=new Rt;l.position.set(ft.x,ft.y,0),l.scale.setScalar(ft.scale),o.add(l),o.userData.prod=l,o.userData.base=new D(r*2.15,a*1.05,0),o.visible=!1,this.rack.add(o),this.units.push(o)}ze(this,Le,gd).call(this)},gd=function(){for(let e of this.units)e.userData.prod&&(e.userData.prod.clear(),e.userData.prod.add(this.slot.rackCopy(mt.droop,mt.flat)))},bd=function(e){let t=this.jump,n=this.s3,i=t.shoes&&Math.max(t.from.shoeA,t.from.pair)>.01?.2:0,r=t.shoes&&Math.max(t.to.shoeA,t.to.pair)>.01?.8:1,a=Kn(Ot((e-i)/(r-i))),o=Math.max(t.to.shoeA,t.to.pair)>.01?r-.15:i;for(let c of Om)c==="pres"?this.S[c]=Bt(t.from[c],t.to[c],Kn(Ot((e-o)/.15))):t.shoes&&wm.has(c)?this.S[c]=Bt(t.from[c],t.to[c],Kn(Ot((e-.2)/.6))):t.shoes&&rM.has(c)?this.S[c]=e<.5?Bt(t.from[c],0,Kn(Ot(e/.2))):Bt(0,t.to[c],Kn(Ot((e-.8)/.2))):c==="scale"||c==="fitK"?this.S[c]=Bt(t.from[c],t.to[c],t.to[c]>t.from[c]?a*a*a:1-(1-a)**3):c==="py"?this.S[c]=Bt(t.from[c],t.to[c],t.to[c]<t.from[c]?1-(1-a)**2:a*a):this.S[c]=Bt(t.from[c],t.to[c],a);if(n.jumpExit){let c=n.jumpE0||0;n.exitE=c+(1-c)*Ot(e/.6),n.exitRaw=c+(1-c)*(e/.6)}},Ds=function(){return{P:{...this.st3.REST},tl:null,tail:null,loop:null,still:null,fades:[],frozen:null,frozenAt:0,exitE:0,exitRaw:0,jumpExit:!1,touched:!1,pending:-1,atRest:!1}},xd=function(){this.s3=ze(this,Le,Ds).call(this),this.onStep&&this.onStep(-1,0,!0)},Ll=function(e,t=!1){let n=this.travel,i=n.from==="how"&&n.to!=="how",r=n.to==="how"&&n.from!=="how";if(!i&&!r)return 0;if(this.reduced())return(i?e>=.5:e<.5)?1:0;let a=i?e/Sm:(1-e)/Sm;return t?Math.max(0,a):Ot(a)},zm=function(){let e=this.s3,t=this.travel;if(!(t.from==="how"||t.to==="how")||t.from==="how"&&t.to!=="how"&&t.u>=1||t.to==="how"&&t.from!=="how"&&t.u<=0){e.touched?ze(this,Le,xd).call(this):e.frozen&&(e.frozen=null,e.exitE=0),this.s3.atRest=!1;return}if(ze(this,Le,Ll).call(this,t.u)>0){e.frozen||(ze(this,Le,_d).call(this,t.to==="how"),e.frozen.leaving=e.atRest),e.atRest=!1;let r=e.frozen.leaving?t.uLeave??t.u:t.u;e.exitE=ze(this,Le,Ll).call(this,r),e.exitRaw=ze(this,Le,Ll).call(this,r,!0)}else e.atRest=!0,e.frozen&&ze(this,Le,vd).call(this)},_d=function(e=!1){let t=this.s3,n=performance.now();t.tl&&!t.tl.held&&n-t.tl.start<t.tl.pre&&(t.tl.start=n-t.tl.pre,Object.assign(t.P,t.tl.from),t.tl.t=0),t.frozen=this.st3.freeze(t.P,t.tl,e),t.frozenAt=n,t.exitE=0,t.exitRaw=0},vd=function(){let e=this.s3,t=performance.now()-e.frozenAt;if(e.tl&&(e.tl.start+=t),e.loop&&(e.loop.start+=t),e.tail&&(e.tail.start+=t),e.frozen=null,e.exitE=0,e.jumpExit=!1,e.pending>=0){let n=e.pending;e.pending=-1,this.playStep(n)}this.kick()},Dl=function(e){let t=this.st3.HOVER.cy;return this.narrow&&e>t?t+(e-t)*sM:e},Gm=function(e,t){let n=this.s3.P,i=e.before,r=e.from,a=.4,o=this.st3.HOVER,c=i.cy>.62,l=r.cy>.62;for(let h of ld)n[h]=Bt(i[h],r[h],Ve.sm(t));if(n.aTint=l&&t<1?i.aTint:r.aTint,t<a){let h=t/a;for(let d of Cl)n[d]=i[d];n.vis=i.vis*(1-Ve.in2(h)),c&&(n.spin=i.spin+.35*h,n.cy=i.cy+.02*h)}else{let h=(t-a)/(1-a);for(let d of Cl)n[d]=r[d];n.vis=l&&Math.abs(r.cy-o.cy)<.01?Ve.out2(h)+.04*Math.sin(Math.PI*h):Ve.out2(h)}},Hm=function(e){let t=this.s3,n=this.st3,i=this.fx;i.begin();let r=this.S.pair*(t.frozen?this._P3.fxAlpha??1:1);if(this.emit.k=this.narrow?.7:1,r>.01)if(this.emit.A=r,this.reduced())t.still&&n.still(t.still.i,t.P,this.emit,t.still.i===0?1-Ot((e-t.still.start-800)/250):1);else{if(t.tl&&(t.tl.held||e-t.tl.start>=t.tl.pre)&&n.steps[t.tl.step].fx(t.tl.t,t.tl.from,this.emit),t.tail){let a=((t.frozen?t.frozenAt:e)-t.tail.start)/t.tail.ms;a<t.tail.until?n.steps[t.tail.step].fx(a,t.tail.from,this.emit):t.tail=null}t.loop&&(Object.assign(this._loopP,t.P),n.loop(((t.frozen?t.frozenAt:e)-t.loop.start)/1e3,this._loopP,this.emit,t.loop.amp))}for(let a=t.fades.length-1;a>=0;a--){let o=1-(e-t.fades[a].start)/tM;if(o<=0){t.fades.splice(a,1);continue}this.emit.A=o*this.S.pair,t.fades[a].draw(this.emit)}t.frozen&&!this.reduced()&&(this.emit.A=1,n.exitFx(t.frozen,t.exitRaw,this.emit)),i.end()},yd=function(){let e=this.S,t=this.camera,n=this.slot,i=Math.min(1,Math.max(...n.parts.map(u=>u.pop.p),0)),r=Math.min(1,Math.abs(Math.sin(n.drag.yaw))*1.8),a=i>0?this.wider.inside:r>0?this.wider.customize:null,o=a?i>0?Kn(i):r:0,c=Bt(e.vk,a?.k??e.vk,o),l=Bt(e.vx,a?.x??e.vx,o),h=Bt(e.vy,a?.y??e.vy,o)+this.pan,d=`${c.toFixed(4)},${l.toFixed(2)},${h.toFixed(2)}`;d!==this.viewNow&&(this.viewNow=d,t.zoom=c,Math.abs(l)>.01||Math.abs(h)>.01?t.setViewOffset(this.W,this.H,-l,-h,this.W,this.H):t.clearViewOffset(),t.updateProjectionMatrix(),this.fx.setScale(this.fxScale*c,this.renderer.getPixelRatio()))},Vm=function(e){if(!this.onSlow||e>400||(this.samples.push(e),this.samples.length<60))return;let t=this.samples.sort((r,a)=>r-a),n=t[30],i=t.filter(r=>r>33).length/t.length;this.samples=[],(n>22||i>.2)&&this.onSlow({median:n,slowShare:i})},Wm=function(e){if(!this.visible||document.hidden){this.running=!1;return}++this.streak>3&&ze(this,Le,Vm).call(this,e-this.last);let t=Math.min(.05,Math.max(5e-4,(e-this.last)/1e3));this.last=e,this.clock+=t;let n=!1,i=!1,r=this.s3,a=this.st3;if(this.jump){let u=this.jump,f=u.ms?Math.min(1,(e-u.start)/u.ms):1;ze(this,Le,bd).call(this,f),f>=1&&(this.jump=null,r.jumpExit&&ze(this,Le,xd).call(this)),n=!0,i=!0}let o=this.s3;if(this.reduced()&&o.tl&&!o.tl.held&&!o.frozen){let u=o.tl.step;a.stillState(u,o.tl.from,o.P),o.tl=null,o.tail=null,o.loop=null,o.still={i:u,start:e},this.onStep&&this.onStep(u,1,!0),i=!0}if(o.tail&&!o.frozen&&(e-o.tail.start)/o.tail.ms>=o.tail.until&&(o.tail=null),o.tl&&!o.frozen&&!o.tl.held){let u=o.tl,f=Math.max(0,e-u.start);u.pre>0&&f<u.pre?(ze(this,Le,Gm).call(this,u,f/u.pre),u.t=0):(u.t=Math.min(1,(f-u.pre)/u.ms),a.evalStep(u.step,u.t,u.from,o.P));let p=Math.min(1,f/(u.pre+u.ms));this.onStep&&this.onStep(u.step,p,p>=1),p>=1&&(o.tl=null,o.tail={step:u.step,from:u.from,start:u.start+u.pre,ms:u.ms,until:1+(a.steps[u.step].tail||0)},a.steps[u.step].id==="work"&&(o.loop={start:e,amp:1})),n=!0,i=!0}if(o.loop&&!o.frozen&&!this.reduced()){let u=o.loop,f=Math.max(0,e-u.start)/1e3,p=(e-Math.max(this.lastInput,u.start))/1e3,b=1-Ot((p-this.loopIdle)/this.loopCalm);u.amp=b<u.amp?b:Math.min(b,u.amp+t/iM),a.loop(f,o.P,null,u.amp),i=!0,u.amp>0&&(n=!0)}if((o.tail&&!o.frozen||o.fades.length||o.still&&o.still.i===0&&e-o.still.start<1100)&&(n=!0),this.housing.k!==this.housing.to){let u=this.housing,f=this.reduced()?1:t/.85;u.k=u.to>u.k?Math.min(u.to,u.k+f):Math.max(u.to,u.k-f),n=!0,i=!0}i&&this.applyState(),n=this.slot.update(t,this.reduced())||n,ze(this,Le,yd).call(this),this.slot.drag.held&&this.applyState(),ze(this,Le,Hm).call(this,e);let[c,l]=this.floors,h=1,d=0;if(this.floorTween){let u=this.floorTween,f=u.ms?Math.min(1,(e-u.start)/u.ms):1,p=Kn(f);h=p,d=1-p,f>=1&&(this.floorTween=null),n=!0}c.material.opacity=h*this.heroWeight,l.material.opacity=d*this.heroWeight,c.visible=c.material.opacity>.004,l.visible=l.material.opacity>.004,ze(this,Le,Nl).call(this),ze(this,Le,qm).call(this),this.renderer.render(this.scene,this.camera);for(let u of this.frameCbs)u(this);n?requestAnimationFrame(u=>this.frame(u)):this.running=!1},Nl=function(){let e=fM.copy(Pl.pos).sub(Pl.tgt).multiplyScalar(this.fit);this.camera.position.copy(Pl.tgt).add(e),this.camera.lookAt(Pl.tgt),this.camera.updateMatrixWorld(),this.slot.viewer.copy(this.camera.position)},qm=function(){let e=this.S,t=this.shadow,n=this.slot;if(!n.ready)return;let i=n.position.y,r=n.semi.x/.65,a=e.scale*e.fitK,o=Ot(Math.abs(e.roll)/(Math.PI/2));if(o>.01){let u=1e9;n.corners(b=>{u=Math.min(u,b.y)});let f=this.camera.position,p=f.y/Math.max(.01,f.y-u+.02);Za.set(n.position.x,u,n.position.z),t.position.x=Bt(n.position.x,f.x+(Za.x-f.x)*p,o),t.position.z=Bt(n.position.z,f.z+(Za.z-f.z)*p,o)}else t.position.x=n.position.x,t.position.z=n.position.z;let c=Math.max(.3,a*r)*(1+i*.5);t.scale.setScalar(Bt(c,Math.max(.3,a*r)*.34,o)),t.material.opacity=Bt(Ot(1-i*1.6),.55,o)*(1-e.shoeA)*(1-e.wire*.8)*(.5+.5*e.floor)*(1-Ot(e.explode*4)),t.visible=t.material.opacity>.02;let l=this.seatShadow,h=n.position.y-(.15*e.unit+e.shoeY),d=Ot(1-Math.abs(h)/.12)*Ot(e.shoeA/.5);l.material.opacity=.9*d,l.visible=d>.02,l.visible&&(l.position.set(n.position.x,.15*e.unit+e.shoeY+.006,n.position.z),l.scale.setScalar(n.semi.x*2.5*n.scale.x))},Xm=function(){let e=1e9,t=-1e9,n=1e9,i=-1e9;return this.slot.corners(r=>{let a=this.project(r);e=Math.min(e,a.x),t=Math.max(t,a.x),n=Math.min(n,a.y),i=Math.max(i,a.y)}),{x0:e,x1:t,y0:n,y1:i}};function Lm(s,e,t,n,i,r,a){let o=(e>=0?-.5:.5)*Ei.length*t,c=o*(1-Math.cos(e)),l=-o*Math.sin(e);s.rotation.set(0,a,e),s.position.set(n+c*Math.cos(a),i+l,r-c*Math.sin(a))}function Dm(s,e){let t=s.userData.mats[2];t.color.copy(ud.base),e>0?t.color.lerp(ud.warm,Math.min(1,e)):e<0&&t.color.lerp(ud.cool,Math.min(1,-e))}function Nm(s,e,t){let n=document.createElement("canvas");n.width=n.height=256;let i=n.getContext("2d"),r=i.createRadialGradient(128,128,8,128,128,128);r.addColorStop(0,s),r.addColorStop(t,e),r.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=r,i.fillRect(0,0,256,256);let a=new gr(n);return a.colorSpace=Pt,a}export{Rw as STAGE_ORDER,gn as STATES,Im as World,Ja as evalState};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

import{A as e,G as t,L as n,T as r,V as i,W as a,X as o,jt as s,k as c,y as l}from"./TriangleTechniqueConfiguration-CwCNevYX.js";import{m as u}from"./SceneLighting-Ybly2ab5.js";import{E as d,O as f,T as p,i as m,k as h,y as g}from"./oitResolution.glsl-D6cDYJeb.js";import{t as _}from"./ShaderBuilder-DXrQOTOa.js";import{i as v}from"./Emissions.glsl-hmB5q3-z.js";import{o as y}from"./BooleanBindUniform-DkADJgfT.js";import{n as b,t as x}from"./VertexColor.glsl-LZszJGfL.js";import{G as S,I as C,J as w,K as T,N as E,X as D,Y as O,Z as k,at as A,f as j,g as M,h as N,i as P,m as F,n as ee,t as I}from"./SnowCover.glsl-BR3E2jvF.js";import{n as L,r as R}from"./MainLighting.glsl-DLUh2Fzz.js";import{n as z,t as B}from"./ReadShadowMap.glsl-CaMSeCRR.js";function V(V){let H=new _,{attributes:U,vertex:W,fragment:G,varyings:K}=H,{output:q,offsetBackfaces:J,pbrMode:Y,snowCover:X,spherical:Z}=V,Q=Y===1||Y===2;if(e(W,V),U.add(`position`,`vec3`),W.inputs.add(`position`,()=>`position`),K.add(`vpos`,`vec3`,{invariant:!0}),H.include(n,V),H.include(O,V),H.include(y,V),H.include(ee,V),!g(q))return H.include(S,V),H;H.include(P,V),c(H.vertex,V),H.include(A,V),H.include(b),J&&H.include(k),K.add(`vNormalWorld`,`vec3`),K.add(`localvpos`,`vec3`,{invariant:!0}),H.include(v,V),H.include(w,V),H.include(D,V),H.include(x,V),W.include(t),W.include(a),W.uniforms.add(new i(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),K.add(`vcolorExt`,`vec4`),H.include(V.instancedDoublePrecision?B:z,V),W.include(r),W.main.add(h`
    forwardVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${h.int(s.ignore)} && vcolorExt.a < alphaCutoff;
    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardTextureCoordinates();
    forwardColorUV();
    forwardEmissiveUV();
    forwardLinearDepthToReadShadowMap();
    gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${f(J,`offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);`,`basePosition;`)}
  `);let{hasColorTexture:$,hasColorTextureTransform:te}=V;return G.include(M,V),G.include(C,V),H.include(T,V),G.include(o,V),H.include(l,V),c(G,V),R(G),N(G),F(G),G.uniforms.add(W.uniforms.get(`localOrigin`),W.uniforms.get(`view`),new m(`ambient`,e=>e.ambient),new m(`diffuse`,e=>e.diffuse),new d(`opacity`,e=>e.opacity),new d(`layerOpacity`,e=>e.layerOpacity)),$&&G.uniforms.add(new p(`tex`,e=>e.texture)),H.include(j,V),G.include(E,V),G.include(u),G.include(I,V),L(G),G.main.add(h`
      discardBySlice(vpos);
      vec4 texColor = ${$?`texture(tex, ${te?`colorUV`:`vuv0`})`:` vec4(1.0)`};
      ${f($,`${f(V.textureAlphaPremultiplied,`texColor.rgb /= texColor.a;`)}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${V.hasVertexColors?h`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:h`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${Z?`normalize(vpos + localOrigin)`:`vec3(0.0, 0.0, 1.0)`};

      ${f(X,`vec3 faceNormal = screenDerivativeNormal(vpos);
         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);
         albedo = mix(albedo, vec3(1), snow);`)}

      ${h`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${Q?h`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${f(X,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:h`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${f(X,`, 1.0`)});`),H}var H=Object.freeze(Object.defineProperty({__proto__:null,build:V},Symbol.toStringTag,{value:`Module`}));export{H as n,V as t};
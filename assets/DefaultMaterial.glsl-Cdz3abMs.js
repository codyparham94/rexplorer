import{A as e,E as t,G as n,L as r,V as i,W as ee,X as te,jt as a,k as o,y as s}from"./TriangleTechniqueConfiguration-CwCNevYX.js";import{m as c}from"./SceneLighting-Ybly2ab5.js";import{E as l,O as u,T as d,i as f,k as p,y as ne}from"./oitResolution.glsl-D6cDYJeb.js";import{t as re}from"./ShaderBuilder-DXrQOTOa.js";import{i as ie}from"./Emissions.glsl-hmB5q3-z.js";import{o as ae}from"./BooleanBindUniform-DkADJgfT.js";import{n as oe,t as m}from"./VertexColor.glsl-LZszJGfL.js";import{G as h,I as g,J as _,K as v,N as y,W as b,X as x,Y as S,Z as C,a as w,at as T,f as E,g as D,h as O,i as k,it as A,m as j,n as M,o as N,p as P,r as F,t as I}from"./SnowCover.glsl-BR3E2jvF.js";import{n as se}from"./MainLighting.glsl-DLUh2Fzz.js";import{n as L,t as R}from"./ReadShadowMap.glsl-CaMSeCRR.js";function z(z){let B=new re,{attributes:V,vertex:H,fragment:U,varyings:W}=B,{output:G,normalType:K,offsetBackfaces:q,spherical:ce,snowCover:J,pbrMode:Y,textureAlphaPremultiplied:le,instancedDoublePrecision:ue,hasVertexColors:X,hasVertexTangents:Z,hasColorTexture:Q,hasNormalTexture:de,hasNormalTextureTransform:fe,hasColorTextureTransform:pe}=z;if(e(H,z),V.add(`position`,`vec3`),H.inputs.add(`position`,()=>`position`),W.add(`vpos`,`vec3`,{invariant:!0}),B.include(r,z),B.include(S,z),B.include(ae,z),B.include(M,z),!ne(G))return B.include(h,z),B;B.include(w,z),B.include(k,z),B.include(F,z),B.include(N,z),o(H,z),B.include(T,z),B.include(oe);let $=K===0||K===1;return $&&q&&B.include(C),B.include(b,z),B.include(A,z),B.include(x,z),W.add(`vPositionLocal`,`vec3`),B.include(ie,z),B.include(_,z),B.include(m,z),H.uniforms.add(new i(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),W.add(`vcolorExt`,`vec4`),H.include(n),H.include(ee),B.include(ue?R:L,z),H.main.add(p`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${u($,`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`)}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${u(Z,`vTangent = dpTransformVertexTangent(tangent);`)}
    gl_Position = transformPosition(proj, view, vpos);
    ${u($&&q,`gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);`)}

    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${p.int(a.ignore)} && vcolorExt.a < ${p.float(t)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),U.include(D,z),U.include(g,z),B.include(v,z),U.include(te,z),B.include(s,z),o(U,z),U.uniforms.add(H.uniforms.get(`localOrigin`),new f(`ambient`,e=>e.ambient),new f(`diffuse`,e=>e.diffuse),new l(`opacity`,e=>e.opacity),new l(`layerOpacity`,e=>e.layerOpacity)),Q&&U.uniforms.add(new d(`tex`,e=>e.texture)),B.include(E,z),U.include(y,z),U.include(c),B.include(P,z),U.include(I,z),O(U),j(U),se(U),U.main.add(p`
    discardBySlice(vpos);
    ${Q?p`
            vec4 texColor = texture(tex, ${pe?`colorUV`:`vuv0`});
            ${u(le,`texColor.rgb /= texColor.a;`)}
            discardOrAdjustAlpha(texColor);`:p`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${K===2?p`vec3 normal = screenDerivativeNormal(vPositionLocal);`:p`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${u(X,`vColor.rgb *`)} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${u(X,`vColor.a * `)} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${de?`mat3 tangentSpace = computeTangentSpace(${Z?`normal`:`normal, vpos, vuv0`});\n           vec3 shadingNormal = computeTextureNormal(tangentSpace, ${fe?`normalUV`:`vuv0`});`:`vec3 shadingNormal = normal;`}
    vec3 normalGround = ${ce?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

    ${u(J,p`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${Y===1||Y===2?p`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${u(J,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:p`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${u(J,`, snow`)});
  `),B}var B=Object.freeze(Object.defineProperty({__proto__:null,build:z},Symbol.toStringTag,{value:`Module`}));export{z as n,B as t};
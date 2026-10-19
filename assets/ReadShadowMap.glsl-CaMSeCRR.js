import{c as e}from"./vec3f64-DIOQknMY.js";import{C as t,F as n}from"./TriangleTechniqueConfiguration-CwCNevYX.js";import{O as r,k as i,y as a}from"./oitResolution.glsl-D6cDYJeb.js";import{t as o}from"./NoParameters-XZJ-8n06.js";import{d as s}from"./VertexColor.glsl-LZszJGfL.js";import{c,d as l,l as u,s as d}from"./SnowCover.glsl-BR3E2jvF.js";function f(e,t){let n=a(t.output)&&t.receiveShadows;n&&s(e,!0),e.vertex.code.add(i`
    void forwardLinearDepthToReadShadowMap() { ${r(n,`forwardLinearDepth(gl_Position.w);`)} }
  `)}var p=class extends o{constructor(){super(...arguments),this.origin=e()}};function m(e,t){t.receiveShadows&&e.fragment.include(u),g(e,t)}function h(e,t){t.receiveShadows&&e.fragment.include(l),g(e,t)}function g(e,t){e.fragment.uniforms.add(new n(`lightingGlobalFactor`,e=>e.lighting.globalFactor));let{hasShadowHighlights:a,receiveShadows:o,spherical:s}=t;e.include(f,t),o&&_(e.fragment,a),e.fragment.code.add(i`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${o?`max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))`:r(s,`lightingGlobalFactor * (1.0 - additionalAmbientScale)`,`0.0`)};
    }
  `)}function _(e,t){y(e,t),v(e)}function v(e){e.code.add(i`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap, 0));
return readShadowMaps(uvzShadow);
}`)}function y(e,n){e.include(c),e.uniforms.add(b()),n&&e.uniforms.add(new t(`shadowHighlight`,({shadowHighlight:e})=>e?.getTexture())),e.code.add(i`
    float readShadowMaps(const in vec3 uvzShadow) {
      if (uvzShadow.z < 0.0) {
        return 0.0;
      }

      float shadow1 = readShadowMapUVZ(uvzShadow, shadowMap);
      ${r(n,`float shadow2 = texelFetch(shadowHighlight, ivec2(gl_FragCoord.xy), 0).r;
         return shadow1 > shadow2 ? shadow1 : shadow2;`,`return shadow1;`)}
    }
  `)}function b(){return new d(`shadowMap`,({shadowMap:e})=>e.getOutput(5)??e.getOutput(7))}export{p as i,h as n,y as r,m as t};
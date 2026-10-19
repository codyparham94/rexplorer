import{t as e}from"./mat4f64-E_FXCKxO.js";import{C as t,S as n}from"./mat4-BL30OFHW.js";import{P as r}from"./TriangleTechniqueConfiguration-CwCNevYX.js";import{k as i}from"./oitResolution.glsl-D6cDYJeb.js";import{c as a,l as o}from"./BooleanBindUniform-DkADJgfT.js";import{l as s}from"./SnowCover.glsl-BR3E2jvF.js";function c(e){e.fragment.include(s),l(e)}function l(e){e.fragment.include(o),e.include(a),e.fragment.uniforms.add(new r(`inverseViewMatrix`,({camera:e})=>n(u,t(u,e.viewMatrix,e.center)))).code.add(i`vec3 calculateUVZShadowAndPixelPosFromDepth(
in vec2 _uv,
ivec2 shadowMapSize,
in sampler2D _depthMap,
out vec4 currentPixelPos
) {
float depth = depthFromTexture(_depthMap, _uv);
if (depth >= 1.0 || depth <= 0.0) {
return invalidShadowmapUVZ;
}
float currentPixelDepth = linearizeDepth(depth);
currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;
float linearDepth = -currentPixelDepth;
return calculateUVZShadow(worldSpacePos.xyz, linearDepth, shadowMapSize);
}
vec3 calculateUVZShadowFromDepth(
in vec2 _uv,
ivec2 shadowMapSize,
in sampler2D _depthMap
) {
vec4 currentPixelPos;
return calculateUVZShadowAndPixelPosFromDepth(_uv, shadowMapSize, _depthMap, currentPixelPos);
}`)}var u=e();export{c as t};
import{I as e}from"./TriangleTechniqueConfiguration-CwCNevYX.js";import{E as t,k as n}from"./oitResolution.glsl-D6cDYJeb.js";import{t as r}from"./NoParameters-XZJ-8n06.js";import{t as i}from"./SphereIntersect.glsl-BCR3ZYuf.js";var a=class extends r{constructor(){super(...arguments),this.atmosphereC=1}};function o(r){r.include(i),r.uniforms.add(new t(`atmosphereC`,e=>e.atmosphereC),new e(`cameraPosition`,e=>e.camera.eye)).code.add(n`float getDistanceFalloff(float dist, vec3 rayDir, float weight) {
if(dist == -1.0){
dist = 0.055 * sphereIntersect(cameraPosition, rayDir, atmosphereC).y;
}
return (1.0 - exp(-dist * weight));
}`)}export{o as n,a as t};
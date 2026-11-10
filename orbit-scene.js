function renderOrbit(scene, hero) {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl', {alpha: true, antialias: false, premultipliedAlpha: false});
  if (!gl) return;

  const vertexSource = `
    attribute vec2 position;
    void main() { gl_Position = vec4(position, 0.0, 1.0); }
  `;
  const fragmentSource = `
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 pointer;
    uniform float time;
    uniform float scrollPhase;

    float hash(vec3 p) {
      p = fract(p * 0.3183099 + vec3(.17, .29, .47));
      p *= 17.0;
      return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
    }
    float noise(vec3 p) {
      vec3 i = floor(p), f = fract(p);
      f = f*f*(3.0-2.0*f);
      return mix(
        mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
        mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);
    }
    float terrain(vec3 p) {
      float value = 0.0, weight = .5;
      for (int i = 0; i < 5; i++) {
        value += weight * noise(p);
        p = p * 2.08 + vec3(.74, 1.17, 2.38);
        weight *= .5;
      }
      return value;
    }
    void main() {
      vec2 uv = gl_FragCoord.xy / resolution;
      float aspect = resolution.x / resolution.y;
      vec2 center = vec2(mix(.80, .71, smoothstep(.7, 1.6, aspect)), .46);
      center += pointer * vec2(.035, .025) + vec2(scrollPhase * .035, 0.0);
      vec2 p = (uv - center) * vec2(aspect, 1.0) / .71;
      float radius = length(p);
      vec3 color = vec3(.012, .016, .025);
      vec2 starCell = floor(gl_FragCoord.xy / 4.0);
      float star = step(.998, hash(vec3(starCell, 4.0)));
      color += vec3(.42,.51,.67) * star * (1.0 - smoothstep(.01,.36,length(fract(gl_FragCoord.xy / 4.0)-.5)));
      color += vec3(.034,.065,.13) * exp(-3.6*abs(radius-.96)) * .55;
      if (radius < 1.0) {
        vec3 n = vec3(p, sqrt(max(0.0, 1.0-dot(p,p))));
        float angle = .38 + time * .12 + scrollPhase * .36;
        vec3 q = vec3(n.x*cos(angle)+n.z*sin(angle),n.y,n.z*cos(angle)-n.x*sin(angle));
        float plates = terrain(q * 4.4 + terrain(q * 2.7) * 2.8);
        float details = terrain(q * 36.0);
        float mineral = clamp(plates * .82 + details * .24,0.0,1.0);
        vec3 rock = mix(vec3(.031,.065,.119), vec3(.22,.39,.58), smoothstep(.28,.66,mineral));
        float ridge = pow(1.0 - abs(2.0 * terrain(q * 9.0) - 1.0), 9.0);
        rock += ridge * vec3(.09,.15,.23) + (details-.5)*.12;
        float light = max(0.0,dot(n, normalize(vec3(-.83,.55,.25))));
        vec3 rim = vec3(.39,.66,.92) * pow(1.0 - n.z,4.0) * light;
        color = rock * (.14 + 1.35 * pow(light, .75)) + rim;
        color += vec3(.035,.09,.18) * pow(1.0-n.z, 2.0) * light;
      }
      color += vec3(.014,.018,.024)*(hash(vec3(gl_FragCoord.xy,1.0))-.45);
      gl_FragColor = vec4(color, 1.0);
    }
  `;
  function compile(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : null;
  }
  const vertex = compile(gl.VERTEX_SHADER, vertexSource);
  const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertex || !fragment) return;
  const program = gl.createProgram();
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
  gl.useProgram(program);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'position');
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const resolution = gl.getUniformLocation(program, 'resolution');
  const pointer = gl.getUniformLocation(program, 'pointer');
  const time = gl.getUniformLocation(program, 'time');
  const scrollPhase = gl.getUniformLocation(program, 'scrollPhase');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let x = 0, y = 0, frame = 0, start = 0;

  function draw(now) {
    frame = 0;
    if (!scene.isConnected || gl.isContextLost()) return;
    const width = Math.min(scene.clientWidth, 1200);
    const height = Math.round(width * scene.clientHeight / Math.max(1, scene.clientWidth));
    if (!width || !height) return;
    if (width !== canvas.width || height !== canvas.height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    }
    const reduced = reducedMotion.matches;
    gl.uniform2f(resolution, width, height);
    gl.uniform2f(pointer, reduced ? 0 : x, reduced ? 0 : y);
    gl.uniform1f(time, reduced ? 0 : Math.min((now - start) / 1000, 3.2));
    gl.uniform1f(scrollPhase, reduced ? 0 : Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / height)));
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    scene.classList.add('orbit-scene-ready');
    if (!reduced && now - start < 3200) requestDraw();
  }

  function requestDraw() {
    if (!frame) frame = requestAnimationFrame(draw);
  }

  scene.append(canvas);
  start = performance.now();
  hero.addEventListener('pointermove', event => {
    if (reducedMotion.matches) return;
    const bounds = hero.getBoundingClientRect();
    x = (event.clientX - bounds.left) / bounds.width - .5;
    y = .5 - (event.clientY - bounds.top) / bounds.height;
    requestDraw();
  });
  const observer = new ResizeObserver(requestDraw);
  observer.observe(scene);
  const navigationObserver = new MutationObserver(() => {
    if (scene.isConnected) return;
    observer.disconnect();
    navigationObserver.disconnect();
    removeEventListener('scroll', requestDraw);
    reducedMotion.removeEventListener('change', requestDraw);
    gl.getExtension('WEBGL_lose_context')?.loseContext();
  });
  navigationObserver.observe(document.getElementById('main'), {childList: true, subtree: true});
  addEventListener('scroll', requestDraw, {passive: true});
  reducedMotion.addEventListener('change', requestDraw);
  requestDraw();
}

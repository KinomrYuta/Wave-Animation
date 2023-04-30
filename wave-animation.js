const waveParams = {
  width: 900,
  height: 300,
  waveWidth: 500,
  waveHeight: 50,
  waveLength: 1200,
  waveAmplitude: 25,
  waveColor: '#3168dd',
  waveDuration: 4
};

function updateWave() {
  const waveContainer = document.querySelector('.wave-container');
  const containerWidth = waveContainer.clientWidth;
  const containerHeight = waveContainer.clientHeight;

  // Set new width and height values
  waveParams.width = containerWidth;
  waveParams.height = containerHeight;

  // css
  document.documentElement.style.setProperty('--wave-roop-length', `${waveParams.waveWidth * -2}px`);
  
  // Set new viewBox and dimension values for all waveSVGs
  const waveSvgs = document.querySelectorAll('.wave-svg');
  waveSvgs.forEach(svg => {
    const waveHeight = svg.dataset.waveheight;
    const waveColor = svg.dataset.wavecolor;
    const wavePath = svg.querySelector('.wave-path');
    waveParams.waveHeight = waveHeight;
    waveParams.waveColor = waveColor;
    svg.setAttribute('viewBox', `0 0 ${waveParams.width} ${waveParams.height}`);
    svg.setAttribute('width', waveParams.width);
    svg.setAttribute('height', waveParams.height);
    wavePath.setAttribute('fill', waveColor);
  });

// Update path attributes for all wavePaths
  const wavePaths = document.querySelectorAll('.wave-path');
  wavePaths.forEach(path => {
    const waveHeight = path.closest('.wave-svg').dataset.waveheight;
    path.setAttribute('d', `M 0,${waveParams.height} v -${waveHeight},0 q ${waveParams.waveWidth / 2},-${waveParams.waveAmplitude} ${waveParams.waveWidth},0 t ${waveParams.waveWidth},0 q ${waveParams.waveWidth / 2},-${waveParams.waveAmplitude} ${waveParams.waveWidth},0 v 0,${waveHeight} Z`);
  });
}

// Call updateWave() whenever the window is resized
window.addEventListener('resize', updateWave);

// Call updateWave() on load
updateWave();

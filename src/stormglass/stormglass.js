// //////// STORMGLASS //////// //
const stormglassLoaderContainer = document.querySelector('pp-stormglass-loader-container')

async function displayStormglassData(data) {
  const stormglassContainer = document.querySelector('pp-stormglass')
  const spotName = document.querySelector('.header-spot')
  const waterTemporary = document.querySelector('.watertemp-value')
  const windDirection = document.querySelector('.winddir-icon')
  const windSpeed = document.querySelector('.windspeed-value')
  const waveHeight = document.querySelector('.waveheight-value')
  const wavePeriod = document.querySelector('.waveperiod-value')
  const wavedir = document.querySelector('.wavedir-icon')

  console.log(waveHeight)

  spotName.innerHTML = 'La Sauzaie'
  waterTemporary.innerHTML = `${Math.round(data.waterTemperature.meto || data.waterTemperature.noaa || data.waterTemperature.sg)}°`
  windDirection.style.transform = `rotate(${data.windDirection.icon || data.windDirection.noaa || data.windDirection.sg}deg)`
  windSpeed.innerHTML = `${data.windSpeed.icon || data.windSpeed.noaa || data.windSpeed.sg}<span class="pp-stormglass-unit">m/s</span>`
  waveHeight.innerHTML = `${data.waveHeight.noaa}<span class="pp-stormglass-unit">m</span>`
  wavePeriod.innerHTML = `${Math.round(data.wavePeriod.icon || data.wavePeriod.noaa)}<span class="pp-stormglass-unit">s</span>`
  wavedir.style.transform = `rotate(${data.waveDirection.icon || data.waveDirection.noaa || data.waveDirection.meteo}deg)`
  stormglassLoaderContainer.style.display = 'none'
  stormglassContainer.style.display = 'flex'
}

async function getStormglassData() {
  const response = {
    time: '2021-05-04T00:00:00+00:00',
    waterTemperature: {
      noaa: 7.86,
      sg: 7.86
    },
    waveDirection: {
      noaa: 272.01,
      sg: 272.01
    },
    waveHeight: {
      noaa: 1.33,
      sg: 1.33
    },
    wavePeriod: {
      noaa: 12.57,
      sg: 12.57
    },
    windDirection: {
      noaa: 21.8,
      sg: 21.8
    },
    windSpeed: {
      noaa: 4.17,
      sg: 4.17
    }
  }
  return displayStormglassData(response)
}

export default getStormglassData

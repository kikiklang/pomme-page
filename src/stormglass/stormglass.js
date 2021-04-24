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

  spotName.innerHTML = 'La Sauzaie'
  waterTemporary.innerHTML = `${Math.round(data.waterTemperature.meto || data.waterTemperature.noaa || data.waterTemperature.sg)}°`
  windDirection.style.transform = `rotate(${data.windDirection.icon || data.windDirection.noaa || data.windDirection.sg}deg)`
  windSpeed.innerHTML = `${data.windSpeed.icon || data.windSpeed.noaa || data.windSpeed.sg}<span class="pp-stormglass-unit">m/s</span>`
  waveHeight.innerHTML = `${data.waveHeight.icon || data.waveHeight.dwd}<span class="pp-stormglass-unit">m</span>`
  wavePeriod.innerHTML = `${Math.round(data.wavePeriod.icon || data.wavePeriod.noaa)}<span class="pp-stormglass-unit">s</span>`
  wavedir.style.transform = `rotate(${data.waveDirection.icon || data.waveDirection.noaa || data.waveDirection.meteo}deg)`
  stormglassLoaderContainer.style.display = 'none'
  stormglassContainer.style.display = 'flex'
}

async function getStormglassData() {
  const currentISODate = new Date().toISOString().slice(0, 13)
  const response = {
    hours: [{
      time: '2021-04-24T00:00:00+00:00',
      waterTemperature: {
        meto: 12.73,
        noaa: 10.97,
        sg: 12.73
      },
      waveDirection: {
        icon: 94.26,
        meteo: 156.34,
        noaa: 66.48,
        sg: 156.34
      },
      waveHeight: {
        icon: 0.72,
        meteo: 0.99,
        noaa: 0.98,
        sg: 0.99
      },
      wavePeriod: {
        icon: 4.84,
        meteo: 3.72,
        noaa: 3.94,
        sg: 3.72
      },
      windDirection: {
        icon: 89.95,
        noaa: 82.8,
        sg: 89.95
      },
      windSpeed: {
        icon: 6.87,
        noaa: 6.7,
        sg: 6.87
      }
    }, {
      time: '2021-04-24T01:00:00+00:00',
      waterTemperature: {
        meto: 12.72,
        noaa: 10.66,
        sg: 12.72
      },
      waveDirection: {
        icon: 122,
        meteo: 159.61,
        noaa: 67.92,
        sg: 159.61
      },
      waveHeight: {
        icon: 0.68,
        meteo: 0.99,
        noaa: 0.97,
        sg: 0.99
      },
      wavePeriod: {
        icon: 5.7,
        meteo: 3.75,
        noaa: 3.92,
        sg: 3.75
      },
      windDirection: {
        icon: 91.04,
        noaa: 82.52,
        sg: 91.04
      },
      windSpeed: {
        icon: 6.32,
        noaa: 6.51,
        sg: 6.32
      }
    }, {
      time: '2021-04-24T02:00:00+00:00',
      waterTemperature: {
        meto: 12.72,
        noaa: 10.34,
        sg: 12.72
      },
      waveDirection: {
        icon: 149.75,
        meteo: 162.88,
        noaa: 69.37,
        sg: 162.88
      },
      waveHeight: {
        icon: 0.64,
        meteo: 0.99,
        noaa: 0.95,
        sg: 0.99
      },
      wavePeriod: {
        icon: 6.57,
        meteo: 3.78,
        noaa: 3.91,
        sg: 3.78
      },
      windDirection: {
        icon: 92.14,
        noaa: 82.25,
        sg: 92.14
      },
      windSpeed: {
        icon: 5.77,
        noaa: 6.31,
        sg: 5.77
      }
    }, {
      time: '2021-04-24T03:00:00+00:00',
      waterTemperature: {
        meto: 12.71,
        noaa: 10.03,
        sg: 12.71
      },
      waveDirection: {
        icon: 177.49,
        meteo: 166.15,
        noaa: 70.81,
        sg: 166.15
      },
      waveHeight: {
        icon: 0.6,
        meteo: 0.99,
        noaa: 0.94,
        sg: 0.99
      },
      wavePeriod: {
        icon: 7.43,
        meteo: 3.81,
        noaa: 3.89,
        sg: 3.81
      },
      windDirection: {
        icon: 93.23,
        noaa: 81.97,
        sg: 93.23
      },
      windSpeed: {
        icon: 5.22,
        noaa: 6.12,
        sg: 5.22
      }
    }, {
      time: '2021-04-24T04:00:00+00:00',
      waterTemperature: {
        meto: 12.7,
        noaa: 10,
        sg: 12.7
      },
      waveDirection: {
        icon: 191.52,
        meteo: 179.52,
        noaa: 70.41,
        sg: 179.52
      },
      waveHeight: {
        icon: 0.64,
        meteo: 0.99,
        noaa: 0.94,
        sg: 0.99
      },
      wavePeriod: {
        icon: 8.06,
        meteo: 3.87,
        noaa: 3.86,
        sg: 3.87
      },
      windDirection: {
        icon: 93.49,
        noaa: 82.5,
        sg: 93.49
      },
      windSpeed: {
        icon: 5.45,
        noaa: 5.85,
        sg: 5.45
      }
    }, {
      time: '2021-04-24T05:00:00+00:00',
      waterTemperature: {
        meto: 12.68,
        noaa: 9.96,
        sg: 12.68
      },
      waveDirection: {
        icon: 205.54,
        meteo: 192.89,
        noaa: 70.02,
        sg: 192.89
      },
      waveHeight: {
        icon: 0.69,
        meteo: 0.98,
        noaa: 0.93,
        sg: 0.98
      },
      wavePeriod: {
        icon: 8.68,
        meteo: 3.92,
        noaa: 3.84,
        sg: 3.92
      },
      windDirection: {
        icon: 93.76,
        noaa: 83.04,
        sg: 93.76
      },
      windSpeed: {
        icon: 5.69,
        noaa: 5.57,
        sg: 5.69
      }
    }, {
      time: '2021-04-24T06:00:00+00:00',
      waterTemperature: {
        meto: 12.67,
        noaa: 9.92,
        sg: 12.67
      },
      waveDirection: {
        icon: 219.57,
        meteo: 206.26,
        noaa: 69.62,
        sg: 206.26
      },
      waveHeight: {
        icon: 0.73,
        meteo: 0.98,
        noaa: 0.93,
        sg: 0.98
      },
      wavePeriod: {
        icon: 9.31,
        meteo: 3.98,
        noaa: 3.81,
        sg: 3.98
      },
      windDirection: {
        icon: 94.02,
        noaa: 83.57,
        sg: 94.02
      },
      windSpeed: {
        icon: 5.92,
        noaa: 5.3,
        sg: 5.92
      }
    }, {
      time: '2021-04-24T07:00:00+00:00',
      waterTemperature: {
        meto: 12.68,
        noaa: 11.5,
        sg: 12.68
      },
      waveDirection: {
        icon: 224.4,
        meteo: 218.14,
        noaa: 128.2,
        sg: 218.14
      },
      waveHeight: {
        icon: 0.79,
        meteo: 0.99,
        noaa: 0.95,
        sg: 0.99
      },
      wavePeriod: {
        icon: 9.9,
        meteo: 4.16,
        noaa: 7.92,
        sg: 4.16
      },
      windDirection: {
        icon: 96.16,
        noaa: 86.32,
        sg: 96.16
      },
      windSpeed: {
        icon: 5.83,
        noaa: 5.36,
        sg: 5.83
      }
    }, {
      time: '2021-04-24T08:00:00+00:00',
      waterTemperature: {
        meto: 12.7,
        noaa: 13.07,
        sg: 12.7
      },
      waveDirection: {
        icon: 229.23,
        meteo: 230.01,
        noaa: 186.79,
        sg: 230.01
      },
      waveHeight: {
        icon: 0.85,
        meteo: 1,
        noaa: 0.98,
        sg: 1
      },
      wavePeriod: {
        icon: 10.48,
        meteo: 4.35,
        noaa: 12.02,
        sg: 4.35
      },
      windDirection: {
        icon: 98.3,
        noaa: 89.06,
        sg: 98.3
      },
      windSpeed: {
        icon: 5.73,
        noaa: 5.42,
        sg: 5.73
      }
    }, {
      time: '2021-04-24T09:00:00+00:00',
      waterTemperature: {
        meto: 12.74,
        noaa: 14.65,
        sg: 12.74
      },
      waveDirection: {
        icon: 234.06,
        meteo: 241.89,
        noaa: 245.37,
        sg: 241.89
      },
      waveHeight: {
        icon: 0.91,
        meteo: 1.01,
        noaa: 1,
        sg: 1.01
      },
      wavePeriod: {
        icon: 11.07,
        meteo: 4.53,
        noaa: 16.13,
        sg: 4.53
      },
      windDirection: {
        icon: 100.44,
        noaa: 91.81,
        sg: 100.44
      },
      windSpeed: {
        icon: 5.64,
        noaa: 5.48,
        sg: 5.64
      }
    }, {
      time: '2021-04-24T10:00:00+00:00',
      waterTemperature: {
        meto: 12.8,
        noaa: 15.72,
        sg: 12.8
      },
      waveDirection: {
        icon: 237.52,
        meteo: 245.34,
        noaa: 246.37,
        sg: 245.34
      },
      waveHeight: {
        icon: 0.95,
        meteo: 1.06,
        noaa: 0.99,
        sg: 1.06
      },
      wavePeriod: {
        icon: 11.71,
        meteo: 5.07,
        noaa: 15.71,
        sg: 5.07
      },
      windDirection: {
        icon: 104.32,
        noaa: 92.12,
        sg: 104.32
      },
      windSpeed: {
        icon: 5.15,
        noaa: 5.55,
        sg: 5.15
      }
    }, {
      time: '2021-04-24T11:00:00+00:00',
      waterTemperature: {
        meto: 12.87,
        noaa: 16.79,
        sg: 12.87
      },
      waveDirection: {
        icon: 240.99,
        meteo: 248.8,
        noaa: 247.37,
        sg: 248.8
      },
      waveHeight: {
        icon: 1,
        meteo: 1.12,
        noaa: 0.97,
        sg: 1.12
      },
      wavePeriod: {
        icon: 12.36,
        meteo: 5.6,
        noaa: 15.28,
        sg: 5.6
      },
      windDirection: {
        icon: 108.19,
        noaa: 92.44,
        sg: 108.19
      },
      windSpeed: {
        icon: 4.67,
        noaa: 5.62,
        sg: 4.67
      }
    }, {
      time: '2021-04-24T12:00:00+00:00',
      waterTemperature: {
        meto: 12.94,
        noaa: 17.86,
        sg: 12.94
      },
      waveDirection: {
        icon: 244.45,
        meteo: 252.25,
        noaa: 248.37,
        sg: 252.25
      },
      waveHeight: {
        icon: 1.04,
        meteo: 1.17,
        noaa: 0.96,
        sg: 1.17
      },
      wavePeriod: {
        icon: 13,
        meteo: 6.14,
        noaa: 14.86,
        sg: 6.14
      },
      windDirection: {
        icon: 112.07,
        noaa: 92.75,
        sg: 112.07
      },
      windSpeed: {
        icon: 4.18,
        noaa: 5.69,
        sg: 4.18
      }
    }, {
      time: '2021-04-24T13:00:00+00:00',
      waterTemperature: {
        meto: 13.01,
        noaa: 17.79,
        sg: 13.01
      },
      waveDirection: {
        icon: 246.35,
        meteo: 253.11,
        noaa: 248.82,
        sg: 253.11
      },
      waveHeight: {
        icon: 1.09,
        meteo: 1.26,
        noaa: 0.98,
        sg: 1.26
      },
      wavePeriod: {
        icon: 13.42,
        meteo: 6.97,
        noaa: 14.52,
        sg: 6.97
      },
      windDirection: {
        icon: 146.56,
        noaa: 91.6,
        sg: 146.56
      },
      windSpeed: {
        icon: 3.02,
        noaa: 5.67,
        sg: 3.02
      }
    }, {
      time: '2021-04-24T14:00:00+00:00',
      waterTemperature: {
        meto: 13.06,
        noaa: 17.72,
        sg: 13.06
      },
      waveDirection: {
        icon: 248.24,
        meteo: 253.97,
        noaa: 249.28,
        sg: 253.97
      },
      waveHeight: {
        icon: 1.13,
        meteo: 1.35,
        noaa: 1.01,
        sg: 1.35
      },
      wavePeriod: {
        icon: 13.85,
        meteo: 7.8,
        noaa: 14.19,
        sg: 7.8
      },
      windDirection: {
        icon: 181.06,
        noaa: 90.46,
        sg: 181.06
      },
      windSpeed: {
        icon: 1.85,
        noaa: 5.64,
        sg: 1.85
      }
    }, {
      time: '2021-04-24T15:00:00+00:00',
      waterTemperature: {
        meto: 13.1,
        noaa: 17.65,
        sg: 13.1
      },
      waveDirection: {
        icon: 250.14,
        meteo: 254.83,
        noaa: 249.73,
        sg: 254.83
      },
      waveHeight: {
        icon: 1.18,
        meteo: 1.44,
        noaa: 1.03,
        sg: 1.44
      },
      wavePeriod: {
        icon: 14.27,
        meteo: 8.63,
        noaa: 13.85,
        sg: 8.63
      },
      windDirection: {
        icon: 215.55,
        noaa: 89.31,
        sg: 215.55
      },
      windSpeed: {
        icon: 0.69,
        noaa: 5.62,
        sg: 0.69
      }
    }, {
      time: '2021-04-24T16:00:00+00:00',
      waterTemperature: {
        meto: 13.12,
        noaa: 16.81,
        sg: 13.12
      },
      waveDirection: {
        icon: 250.52,
        meteo: 254.96,
        noaa: 249.67,
        sg: 254.96
      },
      waveHeight: {
        icon: 1.2,
        meteo: 1.52,
        noaa: 1.06,
        sg: 1.52
      },
      wavePeriod: {
        icon: 14.27,
        meteo: 9.07,
        noaa: 13.63,
        sg: 9.07
      },
      windDirection: {
        icon: 168.2,
        noaa: 80.75,
        sg: 168.2
      },
      windSpeed: {
        icon: 2.3,
        noaa: 5.92,
        sg: 2.3
      }
    }, {
      time: '2021-04-24T17:00:00+00:00',
      waterTemperature: {
        meto: 13.11,
        noaa: 15.96,
        sg: 13.11
      },
      waveDirection: {
        icon: 250.9,
        meteo: 255.09,
        noaa: 249.62,
        sg: 255.09
      },
      waveHeight: {
        icon: 1.22,
        meteo: 1.59,
        noaa: 1.09,
        sg: 1.59
      },
      wavePeriod: {
        icon: 14.26,
        meteo: 9.51,
        noaa: 13.42,
        sg: 9.51
      },
      windDirection: {
        icon: 120.86,
        noaa: 72.19,
        sg: 120.86
      },
      windSpeed: {
        icon: 3.9,
        noaa: 6.22,
        sg: 3.9
      }
    }, {
      time: '2021-04-24T18:00:00+00:00',
      waterTemperature: {
        meto: 13.08,
        noaa: 15.12,
        sg: 13.08
      },
      waveDirection: {
        icon: 251.28,
        meteo: 255.22,
        noaa: 249.56,
        sg: 255.22
      },
      waveHeight: {
        icon: 1.24,
        meteo: 1.67,
        noaa: 1.12,
        sg: 1.67
      },
      wavePeriod: {
        icon: 14.26,
        meteo: 9.95,
        noaa: 13.2,
        sg: 9.95
      },
      windDirection: {
        icon: 73.51,
        noaa: 63.63,
        sg: 73.51
      },
      windSpeed: {
        icon: 5.51,
        noaa: 6.52,
        sg: 5.51
      }
    }, {
      time: '2021-04-24T19:00:00+00:00',
      waterTemperature: {
        meto: 13.04,
        noaa: 14.19,
        sg: 13.04
      },
      waveDirection: {
        icon: 251.31,
        meteo: 255.65,
        noaa: 249.91,
        sg: 255.65
      },
      waveHeight: {
        icon: 1.28,
        meteo: 1.71,
        noaa: 1.14,
        sg: 1.71
      },
      wavePeriod: {
        icon: 13.7,
        meteo: 9.28,
        noaa: 13.03,
        sg: 9.28
      },
      windDirection: {
        icon: 71.98,
        noaa: 64.61,
        sg: 71.98
      },
      windSpeed: {
        icon: 6.1,
        noaa: 6.42,
        sg: 6.1
      }
    }, {
      time: '2021-04-24T20:00:00+00:00',
      waterTemperature: {
        meto: 13.01,
        noaa: 13.25,
        sg: 13.01
      },
      waveDirection: {
        icon: 251.35,
        meteo: 256.08,
        noaa: 250.27,
        sg: 256.08
      },
      waveHeight: {
        icon: 1.31,
        meteo: 1.76,
        noaa: 1.17,
        sg: 1.76
      },
      wavePeriod: {
        icon: 13.15,
        meteo: 8.62,
        noaa: 12.86,
        sg: 8.62
      },
      windDirection: {
        icon: 70.46,
        noaa: 65.59,
        sg: 70.46
      },
      windSpeed: {
        icon: 6.68,
        noaa: 6.31,
        sg: 6.68
      }
    }, {
      time: '2021-04-24T21:00:00+00:00',
      waterTemperature: {
        meto: 12.99,
        noaa: 12.32,
        sg: 12.99
      },
      waveDirection: {
        icon: 251.38,
        meteo: 256.51,
        noaa: 250.62,
        sg: 256.51
      },
      waveHeight: {
        icon: 1.35,
        meteo: 1.8,
        noaa: 1.19,
        sg: 1.8
      },
      wavePeriod: {
        icon: 12.59,
        meteo: 7.95,
        noaa: 12.69,
        sg: 7.95
      },
      windDirection: {
        icon: 68.93,
        noaa: 66.57,
        sg: 68.93
      },
      windSpeed: {
        icon: 7.27,
        noaa: 6.21,
        sg: 7.27
      }
    }, {
      time: '2021-04-24T22:00:00+00:00',
      waterTemperature: {
        meto: 12.98,
        noaa: 12.03,
        sg: 12.98
      },
      waveDirection: {
        icon: 251.12,
        meteo: 256.8,
        noaa: 250.21,
        sg: 256.8
      },
      waveHeight: {
        icon: 1.38,
        meteo: 1.81,
        noaa: 1.19,
        sg: 1.81
      },
      wavePeriod: {
        icon: 12.04,
        meteo: 7.56,
        noaa: 12.62,
        sg: 7.56
      },
      windDirection: {
        icon: 71.05,
        noaa: 67.92,
        sg: 71.05
      },
      windSpeed: {
        icon: 7.52,
        noaa: 6.25,
        sg: 7.52
      }
    }, {
      time: '2021-04-24T23:00:00+00:00',
      waterTemperature: {
        meto: 12.96,
        noaa: 11.74,
        sg: 12.96
      },
      waveDirection: {
        icon: 250.85,
        meteo: 257.08,
        noaa: 249.81,
        sg: 257.08
      },
      waveHeight: {
        icon: 1.41,
        meteo: 1.82,
        noaa: 1.2,
        sg: 1.82
      },
      wavePeriod: {
        icon: 11.48,
        meteo: 7.16,
        noaa: 12.55,
        sg: 7.16
      },
      windDirection: {
        icon: 73.18,
        noaa: 69.27,
        sg: 73.18
      },
      windSpeed: {
        icon: 7.77,
        noaa: 6.29,
        sg: 7.77
      }
    }, {
      time: '2021-04-25T00:00:00+00:00',
      waterTemperature: {
        meto: 12.96,
        noaa: 11.45,
        sg: 12.96
      },
      waveDirection: {
        icon: 250.59,
        meteo: 257.37,
        noaa: 249.4,
        sg: 257.37
      },
      waveHeight: {
        icon: 1.44,
        meteo: 1.83,
        noaa: 1.2,
        sg: 1.83
      },
      wavePeriod: {
        icon: 10.93,
        meteo: 6.77,
        noaa: 12.48,
        sg: 6.77
      },
      windDirection: {
        icon: 75.3,
        noaa: 70.62,
        sg: 75.3
      },
      windSpeed: {
        icon: 8.02,
        noaa: 6.33,
        sg: 8.02
      }
    }, {
      time: '2021-04-25T01:00:00+00:00',
      waterTemperature: {
        meto: 12.96,
        noaa: 11.05,
        sg: 12.96
      },
      waveDirection: {
        icon: 250.97,
        meteo: 256.86,
        noaa: 249.14,
        sg: 256.86
      },
      waveHeight: {
        icon: 1.41,
        meteo: 1.82,
        noaa: 1.22,
        sg: 1.82
      },
      wavePeriod: {
        icon: 10.97,
        meteo: 6.6,
        noaa: 12.43,
        sg: 6.6
      },
      windDirection: {
        icon: 73.91,
        noaa: 70.06,
        sg: 73.91
      },
      windSpeed: {
        icon: 7.67,
        noaa: 6.19,
        sg: 7.67
      }
    }, {
      time: '2021-04-25T02:00:00+00:00',
      waterTemperature: {
        meto: 12.96,
        noaa: 10.65,
        sg: 12.96
      },
      waveDirection: {
        icon: 251.35,
        meteo: 256.34,
        noaa: 248.88,
        sg: 256.34
      },
      waveHeight: {
        icon: 1.37,
        meteo: 1.8,
        noaa: 1.23,
        sg: 1.8
      },
      wavePeriod: {
        icon: 11,
        meteo: 6.43,
        noaa: 12.37,
        sg: 6.43
      },
      windDirection: {
        icon: 72.52,
        noaa: 69.5,
        sg: 72.52
      },
      windSpeed: {
        icon: 7.33,
        noaa: 6.04,
        sg: 7.33
      }
    }, {
      time: '2021-04-25T03:00:00+00:00',
      waterTemperature: {
        meto: 12.95,
        noaa: 10.25,
        sg: 12.95
      },
      waveDirection: {
        icon: 251.73,
        meteo: 255.83,
        noaa: 248.62,
        sg: 255.83
      },
      waveHeight: {
        icon: 1.34,
        meteo: 1.79,
        noaa: 1.25,
        sg: 1.79
      },
      wavePeriod: {
        icon: 11.04,
        meteo: 6.26,
        noaa: 12.32,
        sg: 6.26
      },
      windDirection: {
        icon: 71.13,
        noaa: 68.94,
        sg: 71.13
      },
      windSpeed: {
        icon: 6.98,
        noaa: 5.9,
        sg: 6.98
      }
    }, {
      time: '2021-04-25T04:00:00+00:00',
      waterTemperature: {
        meto: 12.95,
        noaa: 10.27,
        sg: 12.95
      },
      waveDirection: {
        icon: 251.75,
        meteo: 255.63,
        noaa: 249.87,
        sg: 255.63
      },
      waveHeight: {
        icon: 1.29,
        meteo: 1.76,
        noaa: 1.24,
        sg: 1.76
      },
      wavePeriod: {
        icon: 11.27,
        meteo: 6.24,
        noaa: 12.19,
        sg: 6.24
      },
      windDirection: {
        icon: 75.89,
        noaa: 68.07,
        sg: 75.89
      },
      windSpeed: {
        icon: 6.5,
        noaa: 5.92,
        sg: 6.5
      }
    }, {
      time: '2021-04-25T05:00:00+00:00',
      waterTemperature: {
        meto: 12.95,
        noaa: 10.28,
        sg: 12.95
      },
      waveDirection: {
        icon: 251.76,
        meteo: 255.44,
        noaa: 251.11,
        sg: 255.44
      },
      waveHeight: {
        icon: 1.24,
        meteo: 1.72,
        noaa: 1.23,
        sg: 1.72
      },
      wavePeriod: {
        icon: 11.5,
        meteo: 6.23,
        noaa: 12.07,
        sg: 6.23
      },
      windDirection: {
        icon: 80.66,
        noaa: 67.19,
        sg: 80.66
      },
      windSpeed: {
        icon: 6.02,
        noaa: 5.94,
        sg: 6.02
      }
    }, {
      time: '2021-04-25T06:00:00+00:00',
      waterTemperature: {
        meto: 12.95,
        noaa: 10.29,
        sg: 12.95
      },
      waveDirection: {
        icon: 251.78,
        meteo: 255.24,
        noaa: 252.36,
        sg: 255.24
      },
      waveHeight: {
        icon: 1.19,
        meteo: 1.69,
        noaa: 1.22,
        sg: 1.69
      },
      wavePeriod: {
        icon: 11.73,
        meteo: 6.21,
        noaa: 11.94,
        sg: 6.21
      },
      windDirection: {
        icon: 85.42,
        noaa: 66.32,
        sg: 85.42
      },
      windSpeed: {
        icon: 5.54,
        noaa: 5.96,
        sg: 5.54
      }
    }, {
      time: '2021-04-25T07:00:00+00:00',
      waterTemperature: {
        meto: 12.95,
        noaa: 11.89,
        sg: 12.95
      },
      waveDirection: {
        icon: 251.89,
        meteo: 255.64,
        noaa: 251.67,
        sg: 255.64
      },
      waveHeight: {
        icon: 1.17,
        meteo: 1.66,
        noaa: 1.19,
        sg: 1.66
      },
      wavePeriod: {
        icon: 11.55,
        meteo: 6.2,
        noaa: 12.47,
        sg: 6.2
      },
      windDirection: {
        icon: 84.4,
        noaa: 74.26,
        sg: 84.4
      },
      windSpeed: {
        icon: 5.7,
        noaa: 6.1,
        sg: 5.7
      }
    }, {
      time: '2021-04-25T08:00:00+00:00',
      waterTemperature: {
        meto: 12.95,
        noaa: 13.48,
        sg: 12.95
      },
      waveDirection: {
        icon: 251.99,
        meteo: 256.03,
        noaa: 250.97,
        sg: 256.03
      },
      waveHeight: {
        icon: 1.14,
        meteo: 1.62,
        noaa: 1.17,
        sg: 1.62
      },
      wavePeriod: {
        icon: 11.36,
        meteo: 6.2,
        noaa: 13,
        sg: 6.2
      },
      windDirection: {
        icon: 83.37,
        noaa: 82.2,
        sg: 83.37
      },
      windSpeed: {
        icon: 5.85,
        noaa: 6.25,
        sg: 5.85
      }
    }, {
      time: '2021-04-25T09:00:00+00:00',
      waterTemperature: {
        meto: 12.95,
        noaa: 15.08,
        sg: 12.95
      },
      waveDirection: {
        icon: 252.1,
        meteo: 256.43,
        noaa: 250.28,
        sg: 256.43
      },
      waveHeight: {
        icon: 1.12,
        meteo: 1.59,
        noaa: 1.14,
        sg: 1.59
      },
      wavePeriod: {
        icon: 11.18,
        meteo: 6.19,
        noaa: 13.53,
        sg: 6.19
      },
      windDirection: {
        icon: 82.35,
        noaa: 90.14,
        sg: 82.35
      },
      windSpeed: {
        icon: 6.01,
        noaa: 6.39,
        sg: 6.01
      }
    }, {
      time: '2021-04-25T10:00:00+00:00',
      waterTemperature: {
        meto: 12.95,
        noaa: 15.77,
        sg: 12.95
      },
      waveDirection: {
        icon: 252.27,
        meteo: 256.78,
        noaa: 251.02,
        sg: 256.78
      },
      waveHeight: {
        icon: 1.08,
        meteo: 1.55,
        noaa: 1.11,
        sg: 1.55
      },
      wavePeriod: {
        icon: 11.33,
        meteo: 6.3,
        noaa: 13.37,
        sg: 6.3
      },
      windDirection: {
        icon: 84.71,
        noaa: 86.56,
        sg: 84.71
      },
      windSpeed: {
        icon: 5.22,
        noaa: 6.7,
        sg: 5.22
      }
    }, {
      time: '2021-04-25T11:00:00+00:00',
      waterTemperature: {
        meto: 12.94,
        noaa: 16.46,
        sg: 12.94
      },
      waveDirection: {
        icon: 252.43,
        meteo: 257.13,
        noaa: 251.77,
        sg: 257.13
      },
      waveHeight: {
        icon: 1.03,
        meteo: 1.51,
        noaa: 1.07,
        sg: 1.51
      },
      wavePeriod: {
        icon: 11.49,
        meteo: 6.41,
        noaa: 13.21,
        sg: 6.41
      },
      windDirection: {
        icon: 87.06,
        noaa: 82.99,
        sg: 87.06
      },
      windSpeed: {
        icon: 4.42,
        noaa: 7.02,
        sg: 4.42
      }
    }, {
      time: '2021-04-25T12:00:00+00:00',
      waterTemperature: {
        meto: 12.94,
        noaa: 17.15,
        sg: 12.94
      },
      waveDirection: {
        icon: 252.6,
        meteo: 257.48,
        noaa: 252.51,
        sg: 257.48
      },
      waveHeight: {
        icon: 0.99,
        meteo: 1.47,
        noaa: 1.04,
        sg: 1.47
      },
      wavePeriod: {
        icon: 11.64,
        meteo: 6.52,
        noaa: 13.05,
        sg: 6.52
      },
      windDirection: {
        icon: 89.42,
        noaa: 79.41,
        sg: 89.42
      },
      windSpeed: {
        icon: 3.63,
        noaa: 7.33,
        sg: 3.63
      }
    }, {
      time: '2021-04-25T13:00:00+00:00',
      waterTemperature: {
        meto: 12.94,
        noaa: 17.01,
        sg: 12.94
      },
      waveDirection: {
        icon: 252.86,
        meteo: 258.22,
        noaa: 252.57,
        sg: 258.22
      },
      waveHeight: {
        icon: 0.98,
        meteo: 1.45,
        noaa: 1.01,
        sg: 1.45
      },
      wavePeriod: {
        icon: 11.81,
        meteo: 6.28,
        noaa: 12.83,
        sg: 6.28
      },
      windDirection: {
        icon: 95.81,
        noaa: 87.26,
        sg: 95.81
      },
      windSpeed: {
        icon: 2.58,
        noaa: 6.35,
        sg: 2.58
      }
    }, {
      time: '2021-04-25T14:00:00+00:00',
      waterTemperature: {
        meto: 12.94,
        noaa: 16.87,
        sg: 12.94
      },
      waveDirection: {
        icon: 253.11,
        meteo: 258.95,
        noaa: 252.63,
        sg: 258.95
      },
      waveHeight: {
        icon: 0.96,
        meteo: 1.43,
        noaa: 0.98,
        sg: 1.43
      },
      wavePeriod: {
        icon: 11.99,
        meteo: 6.04,
        noaa: 12.61,
        sg: 6.04
      },
      windDirection: {
        icon: 102.19,
        noaa: 95.1,
        sg: 102.19
      },
      windSpeed: {
        icon: 1.53,
        noaa: 5.37,
        sg: 1.53
      }
    }, {
      time: '2021-04-25T15:00:00+00:00',
      waterTemperature: {
        meto: 12.94,
        noaa: 16.73,
        sg: 12.94
      },
      waveDirection: {
        icon: 253.37,
        meteo: 259.69,
        noaa: 252.69,
        sg: 259.69
      },
      waveHeight: {
        icon: 0.95,
        meteo: 1.41,
        noaa: 0.95,
        sg: 1.41
      },
      wavePeriod: {
        icon: 12.16,
        meteo: 5.8,
        noaa: 12.39,
        sg: 5.8
      },
      windDirection: {
        icon: 108.58,
        noaa: 102.95,
        sg: 108.58
      },
      windSpeed: {
        icon: 0.48,
        noaa: 4.39,
        sg: 0.48
      }
    }, {
      time: '2021-04-25T16:00:00+00:00',
      waterTemperature: {
        meto: 12.94,
        noaa: 16.22,
        sg: 12.94
      },
      waveDirection: {
        icon: 253.64,
        meteo: 261.75,
        noaa: 253.38,
        sg: 261.75
      },
      waveHeight: {
        icon: 0.89,
        meteo: 1.4,
        noaa: 0.92,
        sg: 1.4
      },
      wavePeriod: {
        icon: 12.12,
        meteo: 5.56,
        noaa: 12.21,
        sg: 5.56
      },
      windDirection: {
        icon: 156.47,
        noaa: 104.08,
        sg: 156.47
      },
      windSpeed: {
        icon: 1.05,
        noaa: 3.89,
        sg: 1.05
      }
    }, {
      time: '2021-04-25T17:00:00+00:00',
      waterTemperature: {
        meto: 12.94,
        noaa: 15.7,
        sg: 12.94
      },
      waveDirection: {
        icon: 253.9,
        meteo: 263.82,
        noaa: 254.07,
        sg: 263.82
      },
      waveHeight: {
        icon: 0.84,
        meteo: 1.4,
        noaa: 0.9,
        sg: 1.4
      },
      wavePeriod: {
        icon: 12.09,
        meteo: 5.32,
        noaa: 12.04,
        sg: 5.32
      },
      windDirection: {
        icon: 204.37,
        noaa: 105.22,
        sg: 204.37
      },
      windSpeed: {
        icon: 1.63,
        noaa: 3.38,
        sg: 1.63
      }
    }, {
      time: '2021-04-25T18:00:00+00:00',
      waterTemperature: {
        meto: 12.94,
        noaa: 15.18,
        sg: 12.94
      },
      waveDirection: {
        icon: 254.17,
        meteo: 265.88,
        noaa: 254.76,
        sg: 265.88
      },
      waveHeight: {
        icon: 0.78,
        meteo: 1.39,
        noaa: 0.87,
        sg: 1.39
      },
      wavePeriod: {
        icon: 12.05,
        meteo: 5.08,
        noaa: 11.86,
        sg: 5.08
      },
      windDirection: {
        icon: 252.26,
        noaa: 106.35,
        sg: 252.26
      },
      windSpeed: {
        icon: 2.2,
        noaa: 2.88,
        sg: 2.2
      }
    }, {
      time: '2021-04-25T19:00:00+00:00',
      waterTemperature: {
        meto: 12.93,
        noaa: 14.74,
        sg: 12.93
      },
      waveDirection: {
        icon: 254.31,
        meteo: 269.39,
        noaa: 255.05,
        sg: 269.39
      },
      waveHeight: {
        icon: 0.75,
        meteo: 1.38,
        noaa: 0.9,
        sg: 1.38
      },
      wavePeriod: {
        icon: 11.97,
        meteo: 4.96,
        noaa: 11.74,
        sg: 4.96
      },
      windDirection: {
        icon: 233.1,
        noaa: 89.11,
        sg: 233.1
      },
      windSpeed: {
        icon: 2.06,
        noaa: 2.96,
        sg: 2.06
      }
    }, {
      time: '2021-04-25T20:00:00+00:00',
      waterTemperature: {
        meto: 12.93,
        noaa: 14.3,
        sg: 12.93
      },
      waveDirection: {
        icon: 254.45,
        meteo: 272.91,
        noaa: 255.35,
        sg: 272.91
      },
      waveHeight: {
        icon: 0.73,
        meteo: 1.36,
        noaa: 0.94,
        sg: 1.36
      },
      wavePeriod: {
        icon: 11.9,
        meteo: 4.83,
        noaa: 11.63,
        sg: 4.83
      },
      windDirection: {
        icon: 213.95,
        noaa: 71.88,
        sg: 213.95
      },
      windSpeed: {
        icon: 1.91,
        noaa: 3.04,
        sg: 1.91
      }
    }, {
      time: '2021-04-25T21:00:00+00:00',
      waterTemperature: {
        meto: 12.93,
        noaa: 13.86,
        sg: 12.93
      },
      waveDirection: {
        icon: 254.59,
        meteo: 276.42,
        noaa: 255.64,
        sg: 276.42
      },
      waveHeight: {
        icon: 0.7,
        meteo: 1.35,
        noaa: 0.97,
        sg: 1.35
      },
      wavePeriod: {
        icon: 11.82,
        meteo: 4.71,
        noaa: 11.51,
        sg: 4.71
      },
      windDirection: {
        icon: 194.79,
        noaa: 54.64,
        sg: 194.79
      },
      windSpeed: {
        icon: 1.77,
        noaa: 3.12,
        sg: 1.77
      }
    }, {
      time: '2021-04-25T22:00:00+00:00',
      waterTemperature: {
        meto: 12.93,
        noaa: 13.52,
        sg: 12.93
      },
      waveDirection: {
        icon: 253.84,
        meteo: 279.73,
        noaa: 282,
        sg: 279.73
      },
      waveHeight: {
        icon: 0.68,
        meteo: 1.32,
        noaa: 0.99,
        sg: 1.32
      },
      wavePeriod: {
        icon: 11.53,
        meteo: 4.63,
        noaa: 9.73,
        sg: 4.63
      },
      windDirection: {
        icon: 180.56,
        noaa: 61.84,
        sg: 180.56
      },
      windSpeed: {
        icon: 2.16,
        noaa: 2.96,
        sg: 2.16
      }
    }, {
      time: '2021-04-25T23:00:00+00:00',
      waterTemperature: {
        meto: 12.93,
        noaa: 13.19,
        sg: 12.93
      },
      waveDirection: {
        icon: 253.08,
        meteo: 283.04,
        noaa: 308.37,
        sg: 283.04
      },
      waveHeight: {
        icon: 0.67,
        meteo: 1.29,
        noaa: 1,
        sg: 1.29
      },
      wavePeriod: {
        icon: 11.24,
        meteo: 4.54,
        noaa: 7.96,
        sg: 4.54
      },
      windDirection: {
        icon: 166.33,
        noaa: 69.04,
        sg: 166.33
      },
      windSpeed: {
        icon: 2.56,
        noaa: 2.8,
        sg: 2.56
      }
    }, {
      time: '2021-04-26T00:00:00+00:00',
      waterTemperature: {
        meto: 12.93,
        noaa: 12.86,
        sg: 12.93
      },
      waveDirection: {
        icon: 252.33,
        meteo: 286.35,
        noaa: 334.73,
        sg: 286.35
      },
      waveHeight: {
        icon: 0.65,
        meteo: 1.26,
        noaa: 1.02,
        sg: 1.26
      },
      wavePeriod: {
        icon: 10.95,
        meteo: 4.46,
        noaa: 6.18,
        sg: 4.46
      },
      windDirection: {
        icon: 152.1,
        noaa: 76.24,
        sg: 152.1
      },
      windSpeed: {
        icon: 2.95,
        noaa: 2.64,
        sg: 2.95
      }
    }, {
      time: '2021-04-26T01:00:00+00:00',
      waterTemperature: {
        meto: 12.93,
        noaa: 12.72,
        sg: 12.93
      },
      waveDirection: {
        icon: 252.74,
        meteo: 288.48,
        noaa: 333.63,
        sg: 288.48
      },
      waveHeight: {
        icon: 0.62,
        meteo: 1.22,
        noaa: 1,
        sg: 1.22
      },
      wavePeriod: {
        icon: 10.92,
        meteo: 4.39,
        noaa: 6.15,
        sg: 4.39
      },
      windDirection: {
        icon: 123.96,
        noaa: 96.54,
        sg: 123.96
      },
      windSpeed: {
        icon: 3.17,
        noaa: 2.69,
        sg: 3.17
      }
    }, {
      time: '2021-04-26T02:00:00+00:00',
      waterTemperature: {
        meto: 12.92,
        noaa: 12.57,
        sg: 12.92
      },
      waveDirection: {
        icon: 253.15,
        meteo: 290.6,
        noaa: 332.54,
        sg: 290.6
      },
      waveHeight: {
        icon: 0.6,
        meteo: 1.19,
        noaa: 0.97,
        sg: 1.19
      },
      wavePeriod: {
        icon: 10.9,
        meteo: 4.33,
        noaa: 6.11,
        sg: 4.33
      },
      windDirection: {
        icon: 95.83,
        noaa: 116.84,
        sg: 95.83
      },
      windSpeed: {
        icon: 3.39,
        noaa: 2.73,
        sg: 3.39
      }
    }, {
      time: '2021-04-26T03:00:00+00:00',
      waterTemperature: {
        meto: 12.92,
        noaa: 12.43,
        sg: 12.92
      },
      waveDirection: {
        icon: 253.56,
        meteo: 292.73,
        noaa: 331.44,
        sg: 292.73
      },
      waveHeight: {
        icon: 0.57,
        meteo: 1.15,
        noaa: 0.95,
        sg: 1.15
      },
      wavePeriod: {
        icon: 10.87,
        meteo: 4.26,
        noaa: 6.08,
        sg: 4.26
      },
      windDirection: {
        icon: 67.69,
        noaa: 137.14,
        sg: 67.69
      },
      windSpeed: {
        icon: 3.61,
        noaa: 2.78,
        sg: 3.61
      }
    }, {
      time: '2021-04-26T04:00:00+00:00',
      waterTemperature: {
        meto: 12.92,
        noaa: 12.34,
        sg: 12.92
      },
      waveDirection: {
        icon: 253.92,
        meteo: 298.13,
        noaa: 356.97,
        sg: 298.13
      },
      waveHeight: {
        icon: 0.56,
        meteo: 1.12,
        noaa: 0.95,
        sg: 1.12
      },
      wavePeriod: {
        icon: 10.5,
        meteo: 4.18,
        noaa: 5.35,
        sg: 4.18
      },
      windDirection: {
        icon: 68.03,
        noaa: 136.95,
        sg: 68.03
      },
      windSpeed: {
        icon: 3.76,
        noaa: 2.37,
        sg: 3.76
      }
    }, {
      time: '2021-04-26T05:00:00+00:00',
      waterTemperature: {
        meto: 12.92,
        noaa: 12.25,
        sg: 12.92
      },
      waveDirection: {
        icon: 254.29,
        meteo: 303.53,
        noaa: 22.49,
        sg: 303.53
      },
      waveHeight: {
        icon: 0.55,
        meteo: 1.08,
        noaa: 0.95,
        sg: 1.08
      },
      wavePeriod: {
        icon: 10.13,
        meteo: 4.1,
        noaa: 4.61,
        sg: 4.1
      },
      windDirection: {
        icon: 68.36,
        noaa: 136.76,
        sg: 68.36
      },
      windSpeed: {
        icon: 3.91,
        noaa: 1.95,
        sg: 3.91
      }
    }, {
      time: '2021-04-26T06:00:00+00:00',
      waterTemperature: {
        meto: 12.92,
        noaa: 12.16,
        sg: 12.92
      },
      waveDirection: {
        icon: 254.65,
        meteo: 308.93,
        noaa: 48.02,
        sg: 308.93
      },
      waveHeight: {
        icon: 0.54,
        meteo: 1.05,
        noaa: 0.95,
        sg: 1.05
      },
      wavePeriod: {
        icon: 9.76,
        meteo: 4.02,
        noaa: 3.88,
        sg: 4.02
      },
      windDirection: {
        icon: 68.7,
        noaa: 136.57,
        sg: 68.7
      },
      windSpeed: {
        icon: 4.06,
        noaa: 1.54,
        sg: 4.06
      }
    }, {
      time: '2021-04-26T07:00:00+00:00',
      waterTemperature: {
        meto: 12.92,
        noaa: 12.69,
        sg: 12.92
      },
      waveDirection: {
        icon: 254.49,
        meteo: 313.62,
        noaa: 48.49,
        sg: 313.62
      },
      waveHeight: {
        icon: 0.54,
        meteo: 1.02,
        noaa: 0.96,
        sg: 1.02
      },
      wavePeriod: {
        icon: 9.27,
        meteo: 3.95,
        noaa: 3.91,
        sg: 3.95
      },
      windDirection: {
        icon: 78.53,
        noaa: 127.89,
        sg: 78.53
      },
      windSpeed: {
        icon: 3.85,
        noaa: 1.54,
        sg: 3.85
      }
    }, {
      time: '2021-04-26T08:00:00+00:00',
      waterTemperature: {
        meto: 12.92,
        noaa: 13.22,
        sg: 12.92
      },
      waveDirection: {
        icon: 254.32,
        meteo: 318.3,
        noaa: 48.97,
        sg: 318.3
      },
      waveHeight: {
        icon: 0.53,
        meteo: 0.99,
        noaa: 0.97,
        sg: 0.99
      },
      wavePeriod: {
        icon: 8.79,
        meteo: 3.89,
        noaa: 3.94,
        sg: 3.89
      },
      windDirection: {
        icon: 88.36,
        noaa: 119.21,
        sg: 88.36
      },
      windSpeed: {
        icon: 3.65,
        noaa: 1.55,
        sg: 3.65
      }
    }, {
      time: '2021-04-26T09:00:00+00:00',
      waterTemperature: {
        meto: 12.92,
        noaa: 13.75,
        sg: 12.92
      },
      waveDirection: {
        icon: 254.16,
        meteo: 322.99,
        noaa: 49.44,
        sg: 322.99
      },
      waveHeight: {
        icon: 0.53,
        meteo: 0.96,
        noaa: 0.98,
        sg: 0.96
      },
      wavePeriod: {
        icon: 8.3,
        meteo: 3.82,
        noaa: 3.97,
        sg: 3.82
      },
      windDirection: {
        icon: 98.19,
        noaa: 110.53,
        sg: 98.19
      },
      windSpeed: {
        icon: 3.44,
        noaa: 1.55,
        sg: 3.44
      }
    }, {
      time: '2021-04-26T10:00:00+00:00',
      waterTemperature: {
        meto: 12.91,
        noaa: 14.04,
        sg: 12.91
      },
      waveDirection: {
        icon: 254.31,
        meteo: 320.16,
        noaa: 50.3,
        sg: 320.16
      },
      waveHeight: {
        icon: 0.5,
        meteo: 0.92,
        noaa: 0.96,
        sg: 0.92
      },
      wavePeriod: {
        icon: 8.57,
        meteo: 3.79,
        noaa: 3.97,
        sg: 3.79
      },
      windDirection: {
        icon: 118.95,
        noaa: 73.05,
        sg: 118.95
      },
      windSpeed: {
        icon: 2.6,
        noaa: 1.78,
        sg: 2.6
      }
    }, {
      time: '2021-04-26T11:00:00+00:00',
      waterTemperature: {
        meto: 12.91,
        noaa: 14.33,
        sg: 12.91
      },
      waveDirection: {
        icon: 254.45,
        meteo: 317.33,
        noaa: 51.16,
        sg: 317.33
      },
      waveHeight: {
        icon: 0.47,
        meteo: 0.89,
        noaa: 0.95,
        sg: 0.89
      },
      wavePeriod: {
        icon: 8.84,
        meteo: 3.75,
        noaa: 3.96,
        sg: 3.75
      },
      windDirection: {
        icon: 139.72,
        noaa: 35.57,
        sg: 139.72
      },
      windSpeed: {
        icon: 1.77,
        noaa: 2.01,
        sg: 1.77
      }
    }, {
      time: '2021-04-26T12:00:00+00:00',
      waterTemperature: {
        meto: 12.91,
        noaa: 14.63,
        sg: 12.91
      },
      waveDirection: {
        icon: 254.6,
        meteo: 314.5,
        noaa: 52.02,
        sg: 314.5
      },
      waveHeight: {
        icon: 0.44,
        meteo: 0.85,
        noaa: 0.93,
        sg: 0.85
      },
      wavePeriod: {
        icon: 9.11,
        meteo: 3.72,
        noaa: 3.96,
        sg: 3.72
      },
      windDirection: {
        icon: 160.48,
        noaa: 358.09,
        sg: 160.48
      },
      windSpeed: {
        icon: 0.93,
        noaa: 2.24,
        sg: 0.93
      }
    }, {
      time: '2021-04-26T13:00:00+00:00',
      waterTemperature: {
        meto: 12.91,
        noaa: 15.73,
        sg: 12.91
      },
      waveDirection: {
        icon: 254.73,
        meteo: 326.1,
        noaa: 50.87,
        sg: 326.1
      },
      waveHeight: {
        icon: 0.42,
        meteo: 0.84,
        noaa: 0.93,
        sg: 0.84
      },
      wavePeriod: {
        icon: 9.19,
        meteo: 3.64,
        noaa: 3.99,
        sg: 3.64
      },
      windDirection: {
        icon: 200.56,
        noaa: 354.44,
        sg: 200.56
      },
      windSpeed: {
        icon: 1.39,
        noaa: 2.27,
        sg: 1.39
      }
    }, {
      time: '2021-04-26T14:00:00+00:00',
      waterTemperature: {
        meto: 12.91,
        noaa: 16.84,
        sg: 12.91
      },
      waveDirection: {
        icon: 254.86,
        meteo: 337.69,
        noaa: 49.73,
        sg: 337.69
      },
      waveHeight: {
        icon: 0.4,
        meteo: 0.83,
        noaa: 0.93,
        sg: 0.83
      },
      wavePeriod: {
        icon: 9.28,
        meteo: 3.57,
        noaa: 4.02,
        sg: 3.57
      },
      windDirection: {
        icon: 240.64,
        noaa: 350.78,
        sg: 240.64
      },
      windSpeed: {
        icon: 1.84,
        noaa: 2.29,
        sg: 1.84
      }
    }, {
      time: '2021-04-26T15:00:00+00:00',
      waterTemperature: {
        meto: 12.91,
        noaa: 17.95,
        sg: 12.91
      },
      waveDirection: {
        icon: 254.99,
        meteo: 349.29,
        noaa: 48.58,
        sg: 349.29
      },
      waveHeight: {
        icon: 0.38,
        meteo: 0.82,
        noaa: 0.93,
        sg: 0.82
      },
      wavePeriod: {
        icon: 9.36,
        meteo: 3.49,
        noaa: 4.05,
        sg: 3.49
      },
      windDirection: {
        icon: 280.72,
        noaa: 347.13,
        sg: 280.72
      },
      windSpeed: {
        icon: 2.3,
        noaa: 2.32,
        sg: 2.3
      }
    }, {
      time: '2021-04-26T16:00:00+00:00',
      waterTemperature: {
        meto: 12.91,
        noaa: 16.9,
        sg: 12.91
      },
      waveDirection: {
        icon: 255.1,
        meteo: 356.81,
        noaa: 47.17,
        sg: 356.81
      },
      waveHeight: {
        icon: 0.37,
        meteo: 0.83,
        noaa: 0.88,
        sg: 0.83
      },
      wavePeriod: {
        icon: 9.34,
        meteo: 3.44,
        noaa: 3.97,
        sg: 3.44
      },
      windDirection: {
        icon: 285.28,
        noaa: 359.67,
        sg: 285.28
      },
      windSpeed: {
        icon: 2.36,
        noaa: 2.89,
        sg: 2.36
      }
    }, {
      time: '2021-04-26T17:00:00+00:00',
      waterTemperature: {
        meto: 12.91,
        noaa: 15.86,
        sg: 12.91
      },
      waveDirection: {
        icon: 255.2,
        meteo: 4.32,
        noaa: 45.77,
        sg: 4.32
      },
      waveHeight: {
        icon: 0.35,
        meteo: 0.83,
        noaa: 0.84,
        sg: 0.83
      },
      wavePeriod: {
        icon: 9.33,
        meteo: 3.39,
        noaa: 3.9,
        sg: 3.39
      },
      windDirection: {
        icon: 289.83,
        noaa: 12.22,
        sg: 289.83
      },
      windSpeed: {
        icon: 2.41,
        noaa: 3.47,
        sg: 2.41
      }
    }, {
      time: '2021-04-26T18:00:00+00:00',
      waterTemperature: {
        meto: 12.9,
        noaa: 14.81,
        sg: 12.9
      },
      waveDirection: {
        icon: 255.31,
        meteo: 11.84,
        noaa: 44.36,
        sg: 11.84
      },
      waveHeight: {
        icon: 0.34,
        meteo: 0.84,
        noaa: 0.79,
        sg: 0.84
      },
      wavePeriod: {
        icon: 9.31,
        meteo: 3.34,
        noaa: 3.82,
        sg: 3.34
      },
      windDirection: {
        icon: 294.39,
        noaa: 24.76,
        sg: 294.39
      },
      windSpeed: {
        icon: 2.47,
        noaa: 4.04,
        sg: 2.47
      }
    }, {
      time: '2021-04-26T19:00:00+00:00',
      waterTemperature: {
        meto: 12.9,
        noaa: 13.65,
        sg: 12.9
      },
      waveDirection: {
        icon: 255.75,
        meteo: 15.51,
        noaa: 40.18,
        sg: 15.51
      },
      waveHeight: {
        icon: 0.33,
        meteo: 0.85,
        noaa: 0.79,
        sg: 0.85
      },
      wavePeriod: {
        icon: 9.18,
        meteo: 3.32,
        noaa: 3.78,
        sg: 3.32
      },
      windDirection: {
        icon: 301.75,
        noaa: 31.72,
        sg: 301.75
      },
      windSpeed: {
        icon: 2.23,
        noaa: 3.75,
        sg: 2.23
      }
    }, {
      time: '2021-04-26T20:00:00+00:00',
      waterTemperature: {
        meto: 12.9,
        noaa: 12.5,
        sg: 12.9
      },
      waveDirection: {
        icon: 256.18,
        meteo: 19.17,
        noaa: 36,
        sg: 19.17
      },
      waveHeight: {
        icon: 0.32,
        meteo: 0.85,
        noaa: 0.78,
        sg: 0.85
      },
      wavePeriod: {
        icon: 9.05,
        meteo: 3.29,
        noaa: 3.73,
        sg: 3.29
      },
      windDirection: {
        icon: 309.1,
        noaa: 38.68,
        sg: 309.1
      },
      windSpeed: {
        icon: 2,
        noaa: 3.46,
        sg: 2
      }
    }, {
      time: '2021-04-26T21:00:00+00:00',
      waterTemperature: {
        meto: 12.9,
        noaa: 11.34,
        sg: 12.9
      },
      waveDirection: {
        icon: 256.62,
        meteo: 22.84,
        noaa: 31.82,
        sg: 22.84
      },
      waveHeight: {
        icon: 0.31,
        meteo: 0.86,
        noaa: 0.78,
        sg: 0.86
      },
      wavePeriod: {
        icon: 8.92,
        meteo: 3.27,
        noaa: 3.69,
        sg: 3.27
      },
      windDirection: {
        icon: 316.46,
        noaa: 45.64,
        sg: 316.46
      },
      windSpeed: {
        icon: 1.76,
        noaa: 3.17,
        sg: 1.76
      }
    }, {
      time: '2021-04-26T22:00:00+00:00',
      waterTemperature: {
        meto: 12.9,
        noaa: 10.98,
        sg: 12.9
      },
      waveDirection: {
        icon: 257.24,
        meteo: 23.34,
        noaa: 27.17,
        sg: 23.34
      },
      waveHeight: {
        icon: 0.3,
        meteo: 0.84,
        noaa: 0.85,
        sg: 0.84
      },
      wavePeriod: {
        icon: 8.78,
        meteo: 3.25,
        noaa: 3.8,
        sg: 3.25
      },
      windDirection: {
        icon: 324.43,
        noaa: 46.04,
        sg: 324.43
      },
      windSpeed: {
        icon: 1.81,
        noaa: 3.02,
        sg: 1.81
      }
    }, {
      time: '2021-04-26T23:00:00+00:00',
      waterTemperature: {
        meto: 12.9,
        noaa: 10.61,
        sg: 12.9
      },
      waveDirection: {
        icon: 257.85,
        meteo: 23.83,
        noaa: 22.53,
        sg: 23.83
      },
      waveHeight: {
        icon: 0.3,
        meteo: 0.83,
        noaa: 0.91,
        sg: 0.83
      },
      wavePeriod: {
        icon: 8.65,
        meteo: 3.23,
        noaa: 3.9,
        sg: 3.23
      },
      windDirection: {
        icon: 332.39,
        noaa: 46.44,
        sg: 332.39
      },
      windSpeed: {
        icon: 1.86,
        noaa: 2.88,
        sg: 1.86
      }
    }, {
      time: '2021-04-27T00:00:00+00:00',
      waterTemperature: {
        meto: 12.9,
        noaa: 10.25,
        sg: 12.9
      },
      waveDirection: {
        icon: 258.47,
        meteo: 24.33,
        noaa: 17.88,
        sg: 24.33
      },
      waveHeight: {
        icon: 0.29,
        meteo: 0.81,
        noaa: 0.98,
        sg: 0.81
      },
      wavePeriod: {
        icon: 8.51,
        meteo: 3.21,
        noaa: 4.01,
        sg: 3.21
      },
      windDirection: {
        icon: 340.36,
        noaa: 46.84,
        sg: 340.36
      },
      windSpeed: {
        icon: 1.91,
        noaa: 2.73,
        sg: 1.91
      }
    }, {
      time: '2021-04-27T01:00:00+00:00',
      waterTemperature: {
        meto: 12.89,
        noaa: 10.15,
        sg: 12.89
      },
      waveDirection: {
        icon: 259.61,
        meteo: 22.89,
        noaa: 17.44,
        sg: 22.89
      },
      waveHeight: {
        icon: 0.29,
        meteo: 0.79,
        noaa: 0.97,
        sg: 0.79
      },
      wavePeriod: {
        icon: 8.31,
        meteo: 3.17,
        noaa: 4.04,
        sg: 3.17
      },
      windDirection: {
        icon: 337.88,
        noaa: 41.84,
        sg: 337.88
      },
      windSpeed: {
        icon: 2.36,
        noaa: 2.65,
        sg: 2.36
      }
    }, {
      time: '2021-04-27T02:00:00+00:00',
      waterTemperature: {
        meto: 12.89,
        noaa: 10.05,
        sg: 12.89
      },
      waveDirection: {
        icon: 260.75,
        meteo: 21.45,
        noaa: 16.99,
        sg: 21.45
      },
      waveHeight: {
        icon: 0.28,
        meteo: 0.77,
        noaa: 0.97,
        sg: 0.77
      },
      wavePeriod: {
        icon: 8.11,
        meteo: 3.14,
        noaa: 4.06,
        sg: 3.14
      },
      windDirection: {
        icon: 335.41,
        noaa: 36.83,
        sg: 335.41
      },
      windSpeed: {
        icon: 2.8,
        noaa: 2.56,
        sg: 2.8
      }
    }, {
      time: '2021-04-27T03:00:00+00:00',
      waterTemperature: {
        meto: 12.89,
        noaa: 9.95,
        sg: 12.89
      },
      waveDirection: {
        icon: 261.89,
        meteo: 20.01,
        noaa: 16.55,
        sg: 20.01
      },
      waveHeight: {
        icon: 0.28,
        meteo: 0.75,
        noaa: 0.96,
        sg: 0.75
      },
      wavePeriod: {
        icon: 7.91,
        meteo: 3.1,
        noaa: 4.09,
        sg: 3.1
      },
      windDirection: {
        icon: 332.93,
        noaa: 31.83,
        sg: 332.93
      },
      windSpeed: {
        icon: 3.25,
        noaa: 2.48,
        sg: 3.25
      }
    }, {
      time: '2021-04-27T04:00:00+00:00',
      waterTemperature: {
        meto: 12.89,
        noaa: 10.29,
        sg: 12.89
      },
      waveDirection: {
        icon: 273.3,
        meteo: 18.84,
        noaa: 15.97,
        sg: 18.84
      },
      waveHeight: {
        icon: 0.32,
        meteo: 0.75,
        noaa: 0.94,
        sg: 0.75
      },
      wavePeriod: {
        icon: 6.87,
        meteo: 3.08,
        noaa: 4.06,
        sg: 3.08
      },
      windDirection: {
        icon: 335.26,
        noaa: 31.69,
        sg: 335.26
      },
      windSpeed: {
        icon: 3.97,
        noaa: 2.57,
        sg: 3.97
      }
    }, {
      time: '2021-04-27T05:00:00+00:00',
      waterTemperature: {
        meto: 12.89,
        noaa: 10.64,
        sg: 12.89
      },
      waveDirection: {
        icon: 284.7,
        meteo: 17.68,
        noaa: 15.4,
        sg: 17.68
      },
      waveHeight: {
        icon: 0.35,
        meteo: 0.75,
        noaa: 0.93,
        sg: 0.75
      },
      wavePeriod: {
        icon: 5.82,
        meteo: 3.06,
        noaa: 4.04,
        sg: 3.06
      },
      windDirection: {
        icon: 337.59,
        noaa: 31.56,
        sg: 337.59
      },
      windSpeed: {
        icon: 4.69,
        noaa: 2.66,
        sg: 4.69
      }
    }, {
      time: '2021-04-27T06:00:00+00:00',
      waterTemperature: {
        meto: 12.89,
        noaa: 10.98,
        sg: 12.89
      },
      waveDirection: {
        icon: 296.11,
        meteo: 16.51,
        noaa: 14.82,
        sg: 16.51
      },
      waveHeight: {
        icon: 0.39,
        meteo: 0.75,
        noaa: 0.91,
        sg: 0.75
      },
      wavePeriod: {
        icon: 4.78,
        meteo: 3.04,
        noaa: 4.01,
        sg: 3.04
      },
      windDirection: {
        icon: 339.92,
        noaa: 31.42,
        sg: 339.92
      },
      windSpeed: {
        icon: 5.41,
        noaa: 2.75,
        sg: 5.41
      }
    }, {
      time: '2021-04-27T07:00:00+00:00',
      waterTemperature: {
        meto: 12.89,
        noaa: 12.69,
        sg: 12.89
      },
      waveDirection: {
        icon: 302.82,
        meteo: 12.22,
        noaa: 16.71,
        sg: 12.22
      },
      waveHeight: {
        icon: 0.44,
        meteo: 0.71,
        noaa: 0.88,
        sg: 0.71
      },
      wavePeriod: {
        icon: 4.52,
        meteo: 3.03,
        noaa: 3.96,
        sg: 3.03
      },
      windDirection: {
        icon: 340.73,
        noaa: 35.22,
        sg: 340.73
      },
      windSpeed: {
        icon: 5.67,
        noaa: 2.77,
        sg: 5.67
      }
    }, {
      time: '2021-04-27T08:00:00+00:00',
      waterTemperature: {
        meto: 12.89,
        noaa: 14.4,
        sg: 12.89
      },
      waveDirection: {
        icon: 309.52,
        meteo: 7.94,
        noaa: 18.6,
        sg: 7.94
      },
      waveHeight: {
        icon: 0.49,
        meteo: 0.68,
        noaa: 0.86,
        sg: 0.68
      },
      wavePeriod: {
        icon: 4.25,
        meteo: 3.01,
        noaa: 3.92,
        sg: 3.01
      },
      windDirection: {
        icon: 341.54,
        noaa: 39.02,
        sg: 341.54
      },
      windSpeed: {
        icon: 5.94,
        noaa: 2.8,
        sg: 5.94
      }
    }, {
      time: '2021-04-27T09:00:00+00:00',
      waterTemperature: {
        meto: 12.88,
        noaa: 16.11,
        sg: 12.88
      },
      waveDirection: {
        icon: 316.23,
        meteo: 3.65,
        noaa: 20.49,
        sg: 3.65
      },
      waveHeight: {
        icon: 0.54,
        meteo: 0.64,
        noaa: 0.83,
        sg: 0.64
      },
      wavePeriod: {
        icon: 3.99,
        meteo: 3,
        noaa: 3.87,
        sg: 3
      },
      windDirection: {
        icon: 342.35,
        noaa: 42.82,
        sg: 342.35
      },
      windSpeed: {
        icon: 6.2,
        noaa: 2.82,
        sg: 6.2
      }
    }, {
      time: '2021-04-27T10:00:00+00:00',
      waterTemperature: {
        meto: 12.88,
        noaa: 16.89,
        sg: 12.88
      },
      waveDirection: {
        icon: 318.06,
        meteo: 356.76,
        noaa: 22.8,
        sg: 356.76
      },
      waveHeight: {
        icon: 0.6,
        meteo: 0.6,
        noaa: 0.79,
        sg: 0.6
      },
      wavePeriod: {
        icon: 3.95,
        meteo: 3,
        noaa: 3.81,
        sg: 3
      },
      windDirection: {
        icon: 339.05,
        noaa: 5.08,
        sg: 339.05
      },
      windSpeed: {
        icon: 6.64,
        noaa: 2.4,
        sg: 6.64
      }
    }, {
      time: '2021-04-27T11:00:00+00:00',
      waterTemperature: {
        meto: 12.88,
        noaa: 17.68,
        sg: 12.88
      },
      waveDirection: {
        icon: 319.89,
        meteo: 349.87,
        noaa: 25.11,
        sg: 349.87
      },
      waveHeight: {
        icon: 0.65,
        meteo: 0.55,
        noaa: 0.75,
        sg: 0.55
      },
      wavePeriod: {
        icon: 3.91,
        meteo: 2.99,
        noaa: 3.76,
        sg: 2.99
      },
      windDirection: {
        icon: 335.75,
        noaa: 327.33,
        sg: 335.75
      },
      windSpeed: {
        icon: 7.07,
        noaa: 1.99,
        sg: 7.07
      }
    }, {
      time: '2021-04-27T12:00:00+00:00',
      waterTemperature: {
        meto: 12.88,
        noaa: 18.47,
        sg: 12.88
      },
      waveDirection: {
        icon: 321.72,
        meteo: 342.98,
        noaa: 27.42,
        sg: 342.98
      },
      waveHeight: {
        icon: 0.71,
        meteo: 0.51,
        noaa: 0.71,
        sg: 0.51
      },
      wavePeriod: {
        icon: 3.87,
        meteo: 2.99,
        noaa: 3.7,
        sg: 2.99
      },
      windDirection: {
        icon: 332.45,
        noaa: 289.59,
        sg: 332.45
      },
      windSpeed: {
        icon: 7.51,
        noaa: 1.57,
        sg: 7.51
      }
    }, {
      time: '2021-04-27T13:00:00+00:00',
      waterTemperature: {
        meto: 12.88,
        noaa: 17.69,
        sg: 12.88
      },
      waveDirection: {
        icon: 318.3,
        meteo: 336.17,
        noaa: 30.74,
        sg: 336.17
      },
      waveHeight: {
        icon: 0.77,
        meteo: 0.5,
        noaa: 0.66,
        sg: 0.5
      },
      wavePeriod: {
        icon: 3.88,
        meteo: 2.92,
        noaa: 3.61,
        sg: 2.92
      },
      windDirection: {
        icon: 324.45,
        noaa: 313.92,
        sg: 324.45
      },
      windSpeed: {
        icon: 7.98,
        noaa: 1.63,
        sg: 7.98
      }
    }, {
      time: '2021-04-27T14:00:00+00:00',
      waterTemperature: {
        meto: 12.88,
        noaa: 16.91,
        sg: 12.88
      },
      waveDirection: {
        icon: 314.87,
        meteo: 329.37,
        noaa: 34.07,
        sg: 329.37
      },
      waveHeight: {
        icon: 0.82,
        meteo: 0.49,
        noaa: 0.62,
        sg: 0.49
      },
      wavePeriod: {
        icon: 3.9,
        meteo: 2.86,
        noaa: 3.53,
        sg: 2.86
      },
      windDirection: {
        icon: 316.45,
        noaa: 338.24,
        sg: 316.45
      },
      windSpeed: {
        icon: 8.44,
        noaa: 1.68,
        sg: 8.44
      }
    }, {
      time: '2021-04-27T15:00:00+00:00',
      waterTemperature: {
        meto: 12.88,
        noaa: 16.14,
        sg: 12.88
      },
      waveDirection: {
        icon: 311.45,
        meteo: 322.56,
        noaa: 37.39,
        sg: 322.56
      },
      waveHeight: {
        icon: 0.88,
        meteo: 0.48,
        noaa: 0.57,
        sg: 0.48
      },
      wavePeriod: {
        icon: 3.91,
        meteo: 2.79,
        noaa: 3.44,
        sg: 2.79
      },
      windDirection: {
        icon: 308.45,
        noaa: 2.57,
        sg: 308.45
      },
      windSpeed: {
        icon: 8.91,
        noaa: 1.74,
        sg: 8.91
      }
    }, {
      time: '2021-04-27T16:00:00+00:00',
      waterTemperature: {
        meto: 12.87,
        noaa: 15.92,
        sg: 12.87
      },
      waveDirection: {
        icon: 307.96,
        meteo: 321.54,
        noaa: 37.63,
        sg: 321.54
      },
      waveHeight: {
        icon: 0.96,
        meteo: 0.52,
        noaa: 0.58,
        sg: 0.52
      },
      wavePeriod: {
        icon: 3.95,
        meteo: 2.81,
        noaa: 3.42,
        sg: 2.81
      },
      windDirection: {
        icon: 306.5,
        noaa: 11.75,
        sg: 306.5
      },
      windSpeed: {
        icon: 9.34,
        noaa: 1.96,
        sg: 9.34
      }
    }, {
      time: '2021-04-27T17:00:00+00:00',
      waterTemperature: {
        meto: 12.87,
        noaa: 15.7,
        sg: 12.87
      },
      waveDirection: {
        icon: 304.48,
        meteo: 320.53,
        noaa: 37.87,
        sg: 320.53
      },
      waveHeight: {
        icon: 1.05,
        meteo: 0.56,
        noaa: 0.6,
        sg: 0.56
      },
      wavePeriod: {
        icon: 4,
        meteo: 2.82,
        noaa: 3.4,
        sg: 2.82
      },
      windDirection: {
        icon: 304.55,
        noaa: 20.94,
        sg: 304.55
      },
      windSpeed: {
        icon: 9.76,
        noaa: 2.18,
        sg: 9.76
      }
    }, {
      time: '2021-04-27T18:00:00+00:00',
      waterTemperature: {
        meto: 12.87,
        noaa: 15.48,
        sg: 12.87
      },
      waveDirection: {
        icon: 300.99,
        meteo: 319.51,
        noaa: 38.11,
        sg: 319.51
      },
      waveHeight: {
        icon: 1.13,
        meteo: 0.6,
        noaa: 0.61,
        sg: 0.6
      },
      wavePeriod: {
        icon: 4.04,
        meteo: 2.84,
        noaa: 3.38,
        sg: 2.84
      },
      windDirection: {
        icon: 302.6,
        noaa: 30.12,
        sg: 302.6
      },
      windSpeed: {
        icon: 10.19,
        noaa: 2.4,
        sg: 10.19
      }
    }, {
      time: '2021-04-27T19:00:00+00:00',
      waterTemperature: {
        meto: 12.87,
        noaa: 14.17,
        sg: 12.87
      },
      waveDirection: {
        icon: 300.05,
        meteo: 320.18,
        noaa: 33.62,
        sg: 320.18
      },
      waveHeight: {
        icon: 0.98,
        meteo: 0.61,
        noaa: 0.62,
        sg: 0.61
      },
      wavePeriod: {
        icon: 4.15,
        meteo: 2.85,
        noaa: 3.37,
        sg: 2.85
      },
      windDirection: {
        icon: 315.03,
        noaa: 29.23,
        sg: 315.03
      },
      windSpeed: {
        icon: 8.43,
        noaa: 2.74,
        sg: 8.43
      }
    }, {
      time: '2021-04-27T20:00:00+00:00',
      waterTemperature: {
        meto: 12.87,
        noaa: 12.86,
        sg: 12.87
      },
      waveDirection: {
        icon: 299.1,
        meteo: 320.85,
        noaa: 29.13,
        sg: 320.85
      },
      waveHeight: {
        icon: 0.82,
        meteo: 0.61,
        noaa: 0.64,
        sg: 0.61
      },
      wavePeriod: {
        icon: 4.27,
        meteo: 2.86,
        noaa: 3.36,
        sg: 2.86
      },
      windDirection: {
        icon: 327.45,
        noaa: 28.34,
        sg: 327.45
      },
      windSpeed: {
        icon: 6.67,
        noaa: 3.09,
        sg: 6.67
      }
    }, {
      time: '2021-04-27T21:00:00+00:00',
      waterTemperature: {
        meto: 12.87,
        noaa: 11.55,
        sg: 12.87
      },
      waveDirection: {
        icon: 298.16,
        meteo: 321.52,
        noaa: 24.64,
        sg: 321.52
      },
      waveHeight: {
        icon: 0.67,
        meteo: 0.62,
        noaa: 0.65,
        sg: 0.62
      },
      wavePeriod: {
        icon: 4.38,
        meteo: 2.87,
        noaa: 3.35,
        sg: 2.87
      },
      windDirection: {
        icon: 339.88,
        noaa: 27.45,
        sg: 339.88
      },
      windSpeed: {
        icon: 4.91,
        noaa: 3.43,
        sg: 4.91
      }
    }, {
      time: '2021-04-27T22:00:00+00:00',
      waterTemperature: {
        meto: 12.87,
        noaa: 10.98,
        sg: 12.87
      },
      waveDirection: {
        icon: 296.61,
        meteo: 323.03,
        noaa: 25.5,
        sg: 323.03
      },
      waveHeight: {
        icon: 0.61,
        meteo: 0.61,
        noaa: 0.65,
        sg: 0.61
      },
      wavePeriod: {
        icon: 4.6,
        meteo: 2.88,
        noaa: 3.38,
        sg: 2.88
      },
      windDirection: {
        icon: 356.65,
        noaa: 30.36,
        sg: 356.65
      },
      windSpeed: {
        icon: 4.5,
        noaa: 3.51,
        sg: 4.5
      }
    }, {
      time: '2021-04-27T23:00:00+00:00',
      waterTemperature: {
        meto: 12.87,
        noaa: 10.42,
        sg: 12.87
      },
      waveDirection: {
        icon: 295.07,
        meteo: 324.53,
        noaa: 26.36,
        sg: 324.53
      },
      waveHeight: {
        icon: 0.54,
        meteo: 0.6,
        noaa: 0.66,
        sg: 0.6
      },
      wavePeriod: {
        icon: 4.81,
        meteo: 2.88,
        noaa: 3.41,
        sg: 2.88
      },
      windDirection: {
        icon: 13.42,
        noaa: 33.26,
        sg: 13.42
      },
      windSpeed: {
        icon: 4.08,
        noaa: 3.6,
        sg: 4.08
      }
    }, {
      time: '2021-04-28T00:00:00+00:00',
      waterTemperature: {
        meto: 12.86,
        noaa: 9.85,
        sg: 12.86
      },
      waveDirection: {
        icon: 293.52,
        meteo: 326.04,
        noaa: 27.22,
        sg: 326.04
      },
      waveHeight: {
        icon: 0.48,
        meteo: 0.59,
        noaa: 0.66,
        sg: 0.59
      },
      wavePeriod: {
        icon: 5.03,
        meteo: 2.89,
        noaa: 3.44,
        sg: 2.89
      },
      windDirection: {
        icon: 30.19,
        noaa: 36.17,
        sg: 30.19
      },
      windSpeed: {
        icon: 3.67,
        noaa: 3.68,
        sg: 3.67
      }
    }, {
      time: '2021-04-28T01:00:00+00:00',
      waterTemperature: {
        meto: 12.86,
        noaa: 9.62,
        sg: 12.86
      },
      waveDirection: {
        icon: 291.39,
        meteo: 323.87,
        noaa: 25.44,
        sg: 323.87
      },
      waveHeight: {
        icon: 0.45,
        meteo: 0.55,
        noaa: 0.66,
        sg: 0.55
      },
      wavePeriod: {
        icon: 5.29,
        meteo: 2.94,
        noaa: 3.43,
        sg: 2.94
      },
      windDirection: {
        icon: 33.16,
        noaa: 41.21,
        sg: 33.16
      },
      windSpeed: {
        icon: 2.92,
        noaa: 3.52,
        sg: 2.92
      }
    }, {
      time: '2021-04-28T02:00:00+00:00',
      waterTemperature: {
        meto: 12.86,
        noaa: 9.39,
        sg: 12.86
      },
      waveDirection: {
        icon: 289.26,
        meteo: 321.71,
        noaa: 23.65,
        sg: 321.71
      },
      waveHeight: {
        icon: 0.43,
        meteo: 0.52,
        noaa: 0.66,
        sg: 0.52
      },
      wavePeriod: {
        icon: 5.55,
        meteo: 2.98,
        noaa: 3.43,
        sg: 2.98
      },
      windDirection: {
        icon: 36.14,
        noaa: 46.26,
        sg: 36.14
      },
      windSpeed: {
        icon: 2.17,
        noaa: 3.35,
        sg: 2.17
      }
    }, {
      time: '2021-04-28T03:00:00+00:00',
      waterTemperature: {
        meto: 12.86,
        noaa: 9.16,
        sg: 12.86
      },
      waveDirection: {
        icon: 287.13,
        meteo: 319.54,
        noaa: 21.87,
        sg: 319.54
      },
      waveHeight: {
        icon: 0.4,
        meteo: 0.48,
        noaa: 0.66,
        sg: 0.48
      },
      wavePeriod: {
        icon: 5.81,
        meteo: 3.03,
        noaa: 3.42,
        sg: 3.03
      },
      windDirection: {
        icon: 39.11,
        noaa: 51.3,
        sg: 39.11
      },
      windSpeed: {
        icon: 1.42,
        noaa: 3.19,
        sg: 1.42
      }
    }, {
      time: '2021-04-28T04:00:00+00:00',
      waterTemperature: {
        meto: 12.86,
        noaa: 9.44,
        sg: 12.86
      },
      waveDirection: {
        icon: 285.68,
        meteo: 314.55,
        noaa: 24.55,
        sg: 314.55
      },
      waveHeight: {
        icon: 0.38,
        meteo: 0.46,
        noaa: 0.65,
        sg: 0.46
      },
      wavePeriod: {
        icon: 6.04,
        meteo: 3.2,
        noaa: 3.38,
        sg: 3.2
      },
      windDirection: {
        icon: 53.82,
        noaa: 45.06,
        sg: 53.82
      },
      windSpeed: {
        icon: 1.65,
        noaa: 3.16,
        sg: 1.65
      }
    }, {
      time: '2021-04-28T05:00:00+00:00',
      waterTemperature: {
        meto: 12.86,
        noaa: 9.73,
        sg: 12.86
      },
      waveDirection: {
        icon: 284.23,
        meteo: 309.55,
        noaa: 27.23,
        sg: 309.55
      },
      waveHeight: {
        icon: 0.37,
        meteo: 0.43,
        noaa: 0.64,
        sg: 0.43
      },
      wavePeriod: {
        icon: 6.28,
        meteo: 3.37,
        noaa: 3.35,
        sg: 3.37
      },
      windDirection: {
        icon: 68.53,
        noaa: 38.83,
        sg: 68.53
      },
      windSpeed: {
        icon: 1.88,
        noaa: 3.12,
        sg: 1.88
      }
    }, {
      time: '2021-04-28T06:00:00+00:00',
      waterTemperature: {
        meto: 12.86,
        noaa: 10.01,
        sg: 12.86
      },
      waveDirection: {
        icon: 282.78,
        meteo: 304.56,
        noaa: 29.91,
        sg: 304.56
      },
      waveHeight: {
        icon: 0.35,
        meteo: 0.41,
        noaa: 0.63,
        sg: 0.41
      },
      wavePeriod: {
        icon: 6.51,
        meteo: 3.54,
        noaa: 3.31,
        sg: 3.54
      },
      windDirection: {
        icon: 83.24,
        noaa: 32.59,
        sg: 83.24
      },
      windSpeed: {
        icon: 2.11,
        noaa: 3.09,
        sg: 2.11
      }
    }, {
      time: '2021-04-28T07:00:00+00:00',
      waterTemperature: {
        meto: 12.86,
        noaa: 11.83,
        sg: 12.86
      },
      waveDirection: {
        meteo: 303.62,
        noaa: 8.43,
        sg: 303.62
      },
      waveHeight: {
        meteo: 0.43,
        noaa: 0.62,
        sg: 0.43
      },
      wavePeriod: {
        meteo: 3.35,
        noaa: 4.04,
        sg: 3.35
      },
      windDirection: {
        noaa: 30.09,
        sg: 30.09
      },
      windSpeed: {
        noaa: 2.78,
        sg: 2.78
      }
    }, {
      time: '2021-04-28T08:00:00+00:00',
      waterTemperature: {
        meto: 12.85,
        noaa: 13.66,
        sg: 12.85
      },
      waveDirection: {
        meteo: 302.68,
        noaa: 346.96,
        sg: 302.68
      },
      waveHeight: {
        meteo: 0.44,
        noaa: 0.61,
        sg: 0.44
      },
      wavePeriod: {
        meteo: 3.17,
        noaa: 4.76,
        sg: 3.17
      },
      windDirection: {
        noaa: 27.6,
        sg: 27.6
      },
      windSpeed: {
        noaa: 2.48,
        sg: 2.48
      }
    }, {
      time: '2021-04-28T09:00:00+00:00',
      waterTemperature: {
        meto: 12.85,
        noaa: 15.48,
        sg: 12.85
      },
      waveDirection: {
        meteo: 301.74,
        noaa: 325.48,
        sg: 301.74
      },
      waveHeight: {
        meteo: 0.46,
        noaa: 0.6,
        sg: 0.46
      },
      wavePeriod: {
        meteo: 2.98,
        noaa: 5.49,
        sg: 2.98
      },
      windDirection: {
        noaa: 25.1,
        sg: 25.1
      },
      windSpeed: {
        noaa: 2.17,
        sg: 2.17
      }
    }, {
      time: '2021-04-28T10:00:00+00:00',
      waterTemperature: {
        meto: 12.85,
        noaa: 16.41,
        sg: 12.85
      },
      waveDirection: {
        meteo: 302.04,
        noaa: 305.52,
        sg: 302.04
      },
      waveHeight: {
        meteo: 0.53,
        noaa: 0.56,
        sg: 0.53
      },
      wavePeriod: {
        meteo: 2.98,
        noaa: 7.78,
        sg: 2.98
      },
      windDirection: {
        noaa: 349.67,
        sg: 349.67
      },
      windSpeed: {
        noaa: 2.45,
        sg: 2.45
      }
    }, {
      time: '2021-04-28T11:00:00+00:00',
      waterTemperature: {
        meto: 12.85,
        noaa: 17.33,
        sg: 12.85
      },
      waveDirection: {
        meteo: 302.33,
        noaa: 285.55,
        sg: 302.33
      },
      waveHeight: {
        meteo: 0.6,
        noaa: 0.53,
        sg: 0.6
      },
      wavePeriod: {
        meteo: 2.98,
        noaa: 10.06,
        sg: 2.98
      },
      windDirection: {
        noaa: 314.24,
        sg: 314.24
      },
      windSpeed: {
        noaa: 2.72,
        sg: 2.72
      }
    }, {
      time: '2021-04-28T12:00:00+00:00',
      waterTemperature: {
        meto: 12.85,
        noaa: 18.26,
        sg: 12.85
      },
      waveDirection: {
        meteo: 302.63,
        noaa: 265.59,
        sg: 302.63
      },
      waveHeight: {
        meteo: 0.67,
        noaa: 0.49,
        sg: 0.67
      },
      wavePeriod: {
        meteo: 2.98,
        noaa: 12.35,
        sg: 2.98
      },
      windDirection: {
        noaa: 278.81,
        sg: 278.81
      },
      windSpeed: {
        noaa: 3,
        sg: 3
      }
    }, {
      time: '2021-04-28T13:00:00+00:00',
      waterTemperature: {
        meto: 12.85,
        noaa: 17.82,
        sg: 12.85
      },
      waveDirection: {
        meteo: 301.74,
        noaa: 266.07,
        sg: 301.74
      },
      waveHeight: {
        meteo: 0.73,
        noaa: 0.48,
        sg: 0.73
      },
      wavePeriod: {
        meteo: 3.07,
        noaa: 12.27,
        sg: 3.07
      },
      windDirection: {
        noaa: 284.17,
        sg: 284.17
      },
      windSpeed: {
        noaa: 3.68,
        sg: 3.68
      }
    }, {
      time: '2021-04-28T14:00:00+00:00',
      waterTemperature: {
        meto: 12.85,
        noaa: 17.37,
        sg: 12.85
      },
      waveDirection: {
        meteo: 300.85,
        noaa: 266.56,
        sg: 300.85
      },
      waveHeight: {
        meteo: 0.79,
        noaa: 0.46,
        sg: 0.79
      },
      wavePeriod: {
        meteo: 3.16,
        noaa: 12.2,
        sg: 3.16
      },
      windDirection: {
        noaa: 289.53,
        sg: 289.53
      },
      windSpeed: {
        noaa: 4.36,
        sg: 4.36
      }
    }, {
      time: '2021-04-28T15:00:00+00:00',
      waterTemperature: {
        meto: 12.84,
        noaa: 16.93,
        sg: 12.84
      },
      waveDirection: {
        meteo: 299.96,
        noaa: 267.04,
        sg: 299.96
      },
      waveHeight: {
        meteo: 0.85,
        noaa: 0.45,
        sg: 0.85
      },
      wavePeriod: {
        meteo: 3.25,
        noaa: 12.12,
        sg: 3.25
      },
      windDirection: {
        noaa: 294.89,
        sg: 294.89
      },
      windSpeed: {
        noaa: 5.04,
        sg: 5.04
      }
    }, {
      time: '2021-04-28T16:00:00+00:00',
      waterTemperature: {
        meto: 12.84,
        noaa: 15.67,
        sg: 12.84
      },
      waveDirection: {
        meteo: 299.46,
        noaa: 267.07,
        sg: 299.46
      },
      waveHeight: {
        meteo: 0.88,
        noaa: 0.48,
        sg: 0.88
      },
      wavePeriod: {
        meteo: 3.32,
        noaa: 12.05,
        sg: 3.32
      },
      windDirection: {
        noaa: 299.4,
        sg: 299.4
      },
      windSpeed: {
        noaa: 5.11,
        sg: 5.11
      }
    }, {
      time: '2021-04-28T17:00:00+00:00',
      waterTemperature: {
        meto: 12.84,
        noaa: 14.41,
        sg: 12.84
      },
      waveDirection: {
        meteo: 298.95,
        noaa: 267.1,
        sg: 298.95
      },
      waveHeight: {
        meteo: 0.91,
        noaa: 0.5,
        sg: 0.91
      },
      wavePeriod: {
        meteo: 3.38,
        noaa: 11.98,
        sg: 3.38
      },
      windDirection: {
        noaa: 303.91,
        sg: 303.91
      },
      windSpeed: {
        noaa: 5.17,
        sg: 5.17
      }
    }, {
      time: '2021-04-28T18:00:00+00:00',
      waterTemperature: {
        meto: 12.84,
        noaa: 13.15,
        sg: 12.84
      },
      waveDirection: {
        meteo: 298.45,
        noaa: 267.13,
        sg: 298.45
      },
      waveHeight: {
        meteo: 0.94,
        noaa: 0.53,
        sg: 0.94
      },
      wavePeriod: {
        meteo: 3.45,
        noaa: 11.91,
        sg: 3.45
      },
      windDirection: {
        noaa: 308.42,
        sg: 308.42
      },
      windSpeed: {
        noaa: 5.24,
        sg: 5.24
      }
    }, {
      time: '2021-04-28T19:00:00+00:00',
      waterTemperature: {
        meto: 12.84,
        noaa: 12.12,
        sg: 12.84
      },
      waveDirection: {
        meteo: 297.78,
        noaa: 267.22,
        sg: 297.78
      },
      waveHeight: {
        meteo: 0.93,
        noaa: 0.54,
        sg: 0.93
      },
      wavePeriod: {
        meteo: 3.53,
        noaa: 11.84,
        sg: 3.53
      },
      windDirection: {
        noaa: 315.46,
        sg: 315.46
      },
      windSpeed: {
        noaa: 4.93,
        sg: 4.93
      }
    }, {
      time: '2021-04-28T20:00:00+00:00',
      waterTemperature: {
        meto: 12.84,
        noaa: 11.09,
        sg: 12.84
      },
      waveDirection: {
        meteo: 297.12,
        noaa: 267.32,
        sg: 297.12
      },
      waveHeight: {
        meteo: 0.92,
        noaa: 0.55,
        sg: 0.92
      },
      wavePeriod: {
        meteo: 3.61,
        noaa: 11.77,
        sg: 3.61
      },
      windDirection: {
        noaa: 322.5,
        sg: 322.5
      },
      windSpeed: {
        noaa: 4.62,
        sg: 4.62
      }
    }, {
      time: '2021-04-28T21:00:00+00:00',
      waterTemperature: {
        meto: 12.84,
        noaa: 10.07,
        sg: 12.84
      },
      waveDirection: {
        meteo: 296.45,
        noaa: 267.41,
        sg: 296.45
      },
      waveHeight: {
        meteo: 0.91,
        noaa: 0.56,
        sg: 0.91
      },
      wavePeriod: {
        meteo: 3.69,
        noaa: 11.7,
        sg: 3.69
      },
      windDirection: {
        noaa: 329.54,
        sg: 329.54
      },
      windSpeed: {
        noaa: 4.31,
        sg: 4.31
      }
    }, {
      time: '2021-04-28T22:00:00+00:00',
      waterTemperature: {
        meto: 12.84,
        noaa: 9.64,
        sg: 12.84
      },
      waveDirection: {
        meteo: 296.08,
        noaa: 267.42,
        sg: 296.08
      },
      waveHeight: {
        meteo: 0.88,
        noaa: 0.57,
        sg: 0.88
      },
      wavePeriod: {
        meteo: 3.76,
        noaa: 11.65,
        sg: 3.76
      },
      windDirection: {
        noaa: 343.98,
        sg: 343.98
      },
      windSpeed: {
        noaa: 4.02,
        sg: 4.02
      }
    }, {
      time: '2021-04-28T23:00:00+00:00',
      waterTemperature: {
        meto: 12.83,
        noaa: 9.21,
        sg: 12.83
      },
      waveDirection: {
        meteo: 295.71,
        noaa: 267.44,
        sg: 295.71
      },
      waveHeight: {
        meteo: 0.85,
        noaa: 0.59,
        sg: 0.85
      },
      wavePeriod: {
        meteo: 3.82,
        noaa: 11.61,
        sg: 3.82
      },
      windDirection: {
        noaa: 358.42,
        sg: 358.42
      },
      windSpeed: {
        noaa: 3.74,
        sg: 3.74
      }
    }, {
      time: '2021-04-29T00:00:00+00:00',
      waterTemperature: {
        meto: 12.83,
        noaa: 8.78,
        sg: 12.83
      },
      waveDirection: {
        meteo: 295.34,
        noaa: 267.45,
        sg: 295.34
      },
      waveHeight: {
        meteo: 0.82,
        noaa: 0.6,
        sg: 0.82
      },
      wavePeriod: {
        meteo: 3.89,
        noaa: 11.56,
        sg: 3.89
      },
      windDirection: {
        noaa: 12.86,
        sg: 12.86
      },
      windSpeed: {
        noaa: 3.45,
        sg: 3.45
      }
    }, {
      time: '2021-04-29T01:00:00+00:00',
      waterTemperature: {
        meto: 12.81,
        noaa: 8.53,
        sg: 12.81
      },
      waveDirection: {
        meteo: 295.49,
        noaa: 267.94,
        sg: 295.49
      },
      waveHeight: {
        meteo: 0.79,
        noaa: 0.6,
        sg: 0.79
      },
      wavePeriod: {
        meteo: 3.87,
        noaa: 11.41,
        sg: 3.87
      },
      windDirection: {
        noaa: 12.69,
        sg: 12.69
      },
      windSpeed: {
        noaa: 3.24,
        sg: 3.24
      }
    }, {
      time: '2021-04-29T02:00:00+00:00',
      waterTemperature: {
        meto: 12.77,
        noaa: 8.28,
        sg: 12.77
      },
      waveDirection: {
        meteo: 295.65,
        noaa: 268.44,
        sg: 295.65
      },
      waveHeight: {
        meteo: 0.76,
        noaa: 0.6,
        sg: 0.76
      },
      wavePeriod: {
        meteo: 3.85,
        noaa: 11.26,
        sg: 3.85
      },
      windDirection: {
        noaa: 12.53,
        sg: 12.53
      },
      windSpeed: {
        noaa: 3.03,
        sg: 3.03
      }
    }, {
      time: '2021-04-29T03:00:00+00:00',
      waterTemperature: {
        meto: 12.74,
        noaa: 8.03,
        sg: 12.74
      },
      waveDirection: {
        meteo: 295.8,
        noaa: 268.93,
        sg: 295.8
      },
      waveHeight: {
        meteo: 0.73,
        noaa: 0.6,
        sg: 0.73
      },
      wavePeriod: {
        meteo: 3.83,
        noaa: 11.11,
        sg: 3.83
      },
      windDirection: {
        noaa: 12.36,
        sg: 12.36
      },
      windSpeed: {
        noaa: 2.82,
        sg: 2.82
      }
    }, {
      time: '2021-04-29T04:00:00+00:00',
      waterTemperature: {
        meto: 12.71,
        noaa: 8.42,
        sg: 12.71
      },
      waveDirection: {
        meteo: 297.28,
        noaa: 268.91,
        sg: 297.28
      },
      waveHeight: {
        meteo: 0.72,
        noaa: 0.58,
        sg: 0.72
      },
      wavePeriod: {
        meteo: 3.78,
        noaa: 11.06,
        sg: 3.78
      },
      windDirection: {
        noaa: 10.74,
        sg: 10.74
      },
      windSpeed: {
        noaa: 2.84,
        sg: 2.84
      }
    }, {
      time: '2021-04-29T05:00:00+00:00',
      waterTemperature: {
        meto: 12.69,
        noaa: 8.81,
        sg: 12.69
      },
      waveDirection: {
        meteo: 298.77,
        noaa: 268.89,
        sg: 298.77
      },
      waveHeight: {
        meteo: 0.7,
        noaa: 0.57,
        sg: 0.7
      },
      wavePeriod: {
        meteo: 3.73,
        noaa: 11.01,
        sg: 3.73
      },
      windDirection: {
        noaa: 9.12,
        sg: 9.12
      },
      windSpeed: {
        noaa: 2.85,
        sg: 2.85
      }
    }, {
      time: '2021-04-29T06:00:00+00:00',
      waterTemperature: {
        meto: 12.67,
        noaa: 9.2,
        sg: 12.67
      },
      waveDirection: {
        meteo: 300.25,
        noaa: 268.87,
        sg: 300.25
      },
      waveHeight: {
        meteo: 0.69,
        noaa: 0.55,
        sg: 0.69
      },
      wavePeriod: {
        meteo: 3.68,
        noaa: 10.96,
        sg: 3.68
      },
      windDirection: {
        noaa: 7.5,
        sg: 7.5
      },
      windSpeed: {
        noaa: 2.87,
        sg: 2.87
      }
    }, {
      time: '2021-04-29T07:00:00+00:00',
      waterTemperature: {
        meto: 12.66,
        noaa: 10.97,
        sg: 12.66
      },
      waveDirection: {
        meteo: 300.51,
        noaa: 268.73,
        sg: 300.51
      },
      waveHeight: {
        meteo: 0.67,
        noaa: 0.52,
        sg: 0.67
      },
      wavePeriod: {
        meteo: 3.69,
        noaa: 10.9,
        sg: 3.69
      },
      windDirection: {
        noaa: 7.07,
        sg: 7.07
      },
      windSpeed: {
        noaa: 2.8,
        sg: 2.8
      }
    }, {
      time: '2021-04-29T08:00:00+00:00',
      waterTemperature: {
        meto: 12.68,
        noaa: 12.74,
        sg: 12.68
      },
      waveDirection: {
        meteo: 300.76,
        noaa: 268.58,
        sg: 300.76
      },
      waveHeight: {
        meteo: 0.66,
        noaa: 0.5,
        sg: 0.66
      },
      wavePeriod: {
        meteo: 3.7,
        noaa: 10.84,
        sg: 3.7
      },
      windDirection: {
        noaa: 6.65,
        sg: 6.65
      },
      windSpeed: {
        noaa: 2.72,
        sg: 2.72
      }
    }, {
      time: '2021-04-29T09:00:00+00:00',
      waterTemperature: {
        meto: 12.73,
        noaa: 14.51,
        sg: 12.73
      },
      waveDirection: {
        meteo: 301.02,
        noaa: 268.44,
        sg: 301.02
      },
      waveHeight: {
        meteo: 0.64,
        noaa: 0.47,
        sg: 0.64
      },
      wavePeriod: {
        meteo: 3.71,
        noaa: 10.78,
        sg: 3.71
      },
      windDirection: {
        noaa: 6.22,
        sg: 6.22
      },
      windSpeed: {
        noaa: 2.65,
        sg: 2.65
      }
    }, {
      time: '2021-04-29T10:00:00+00:00',
      waterTemperature: {
        meto: 12.8,
        noaa: 15.39,
        sg: 12.8
      },
      waveDirection: {
        meteo: 300.07,
        noaa: 269.07,
        sg: 300.07
      },
      waveHeight: {
        meteo: 0.61,
        noaa: 0.43,
        sg: 0.61
      },
      wavePeriod: {
        meteo: 3.81,
        noaa: 10.67,
        sg: 3.81
      },
      windDirection: {
        noaa: 350.85,
        sg: 350.85
      },
      windSpeed: {
        noaa: 2.67,
        sg: 2.67
      }
    }, {
      time: '2021-04-29T11:00:00+00:00',
      waterTemperature: {
        meto: 12.89,
        noaa: 16.27,
        sg: 12.89
      },
      waveDirection: {
        meteo: 299.11,
        noaa: 269.7,
        sg: 299.11
      },
      waveHeight: {
        meteo: 0.59,
        noaa: 0.39,
        sg: 0.59
      },
      wavePeriod: {
        meteo: 3.92,
        noaa: 10.56,
        sg: 3.92
      },
      windDirection: {
        noaa: 335.47,
        sg: 335.47
      },
      windSpeed: {
        noaa: 2.69,
        sg: 2.69
      }
    }, {
      time: '2021-04-29T12:00:00+00:00',
      waterTemperature: {
        meto: 13,
        noaa: 17.15,
        sg: 13
      },
      waveDirection: {
        meteo: 298.16,
        noaa: 270.33,
        sg: 298.16
      },
      waveHeight: {
        meteo: 0.56,
        noaa: 0.35,
        sg: 0.56
      },
      wavePeriod: {
        meteo: 4.02,
        noaa: 10.45,
        sg: 4.02
      },
      windDirection: {
        noaa: 320.1,
        sg: 320.1
      },
      windSpeed: {
        noaa: 2.71,
        sg: 2.71
      }
    }, {
      time: '2021-04-29T13:00:00+00:00',
      waterTemperature: {
        meto: 13.1,
        noaa: 16.89,
        sg: 13.1
      },
      waveDirection: {
        meteo: 297.51,
        noaa: 270.26,
        sg: 297.51
      },
      waveHeight: {
        meteo: 0.54,
        noaa: 0.35,
        sg: 0.54
      },
      wavePeriod: {
        meteo: 3.82,
        noaa: 10.41,
        sg: 3.82
      },
      windDirection: {
        noaa: 324.35,
        sg: 324.35
      },
      windSpeed: {
        noaa: 3.12,
        sg: 3.12
      }
    }, {
      time: '2021-04-29T14:00:00+00:00',
      waterTemperature: {
        meto: 13.19,
        noaa: 16.63,
        sg: 13.19
      },
      waveDirection: {
        meteo: 296.87,
        noaa: 270.19,
        sg: 296.87
      },
      waveHeight: {
        meteo: 0.53,
        noaa: 0.35,
        sg: 0.53
      },
      wavePeriod: {
        meteo: 3.61,
        noaa: 10.37,
        sg: 3.61
      },
      windDirection: {
        noaa: 328.61,
        sg: 328.61
      },
      windSpeed: {
        noaa: 3.52,
        sg: 3.52
      }
    }, {
      time: '2021-04-29T15:00:00+00:00',
      waterTemperature: {
        meto: 13.25,
        noaa: 16.36,
        sg: 13.25
      },
      waveDirection: {
        meteo: 296.22,
        noaa: 270.12,
        sg: 296.22
      },
      waveHeight: {
        meteo: 0.51,
        noaa: 0.35,
        sg: 0.51
      },
      wavePeriod: {
        meteo: 3.41,
        noaa: 10.33,
        sg: 3.41
      },
      windDirection: {
        noaa: 332.86,
        sg: 332.86
      },
      windSpeed: {
        noaa: 3.93,
        sg: 3.93
      }
    }, {
      time: '2021-04-29T16:00:00+00:00',
      waterTemperature: {
        meto: 13.29,
        noaa: 15.18,
        sg: 13.29
      },
      waveDirection: {
        meteo: 297.78,
        noaa: 270.06,
        sg: 297.78
      },
      waveHeight: {
        meteo: 0.51,
        noaa: 0.38,
        sg: 0.51
      },
      wavePeriod: {
        meteo: 3.32,
        noaa: 10.3,
        sg: 3.32
      },
      windDirection: {
        noaa: 345.95,
        sg: 345.95
      },
      windSpeed: {
        noaa: 4.82,
        sg: 4.82
      }
    }, {
      time: '2021-04-29T17:00:00+00:00',
      waterTemperature: {
        meto: 13.29,
        noaa: 14,
        sg: 13.29
      },
      waveDirection: {
        meteo: 299.33,
        noaa: 270,
        sg: 299.33
      },
      waveHeight: {
        meteo: 0.5,
        noaa: 0.42,
        sg: 0.5
      },
      wavePeriod: {
        meteo: 3.23,
        noaa: 10.26,
        sg: 3.23
      },
      windDirection: {
        noaa: 359.05,
        sg: 359.05
      },
      windSpeed: {
        noaa: 5.7,
        sg: 5.7
      }
    }, {
      time: '2021-04-29T18:00:00+00:00',
      waterTemperature: {
        meto: 13.25,
        noaa: 12.82,
        sg: 13.25
      },
      waveDirection: {
        meteo: 300.89,
        noaa: 269.94,
        sg: 300.89
      },
      waveHeight: {
        meteo: 0.5,
        noaa: 0.45,
        sg: 0.5
      },
      wavePeriod: {
        meteo: 3.14,
        noaa: 10.23,
        sg: 3.14
      },
      windDirection: {
        noaa: 12.14,
        sg: 12.14
      },
      windSpeed: {
        noaa: 6.59,
        sg: 6.59
      }
    }, {
      time: '2021-04-29T19:00:00+00:00',
      waterTemperature: {
        meto: 13.18,
        noaa: 11.89,
        sg: 13.18
      },
      waveDirection: {
        meteo: 300.57,
        noaa: 269.86,
        sg: 300.57
      },
      waveHeight: {
        meteo: 0.5,
        noaa: 0.45,
        sg: 0.5
      },
      wavePeriod: {
        meteo: 3.12,
        noaa: 10.18,
        sg: 3.12
      },
      windDirection: {
        noaa: 16.6,
        sg: 16.6
      },
      windSpeed: {
        noaa: 6.65,
        sg: 6.65
      }
    }, {
      time: '2021-04-29T20:00:00+00:00',
      waterTemperature: {
        meto: 13.09,
        noaa: 10.95,
        sg: 13.09
      },
      waveDirection: {
        meteo: 300.24,
        noaa: 269.79,
        sg: 300.24
      },
      waveHeight: {
        meteo: 0.49,
        noaa: 0.44,
        sg: 0.49
      },
      wavePeriod: {
        meteo: 3.09,
        noaa: 10.14,
        sg: 3.09
      },
      windDirection: {
        noaa: 21.06,
        sg: 21.06
      },
      windSpeed: {
        noaa: 6.72,
        sg: 6.72
      }
    }, {
      time: '2021-04-29T21:00:00+00:00',
      waterTemperature: {
        meto: 13.02,
        noaa: 10.02,
        sg: 13.02
      },
      waveDirection: {
        meteo: 299.92,
        noaa: 269.71,
        sg: 299.92
      },
      waveHeight: {
        meteo: 0.49,
        noaa: 0.44,
        sg: 0.49
      },
      wavePeriod: {
        meteo: 3.07,
        noaa: 10.09,
        sg: 3.07
      },
      windDirection: {
        noaa: 25.52,
        sg: 25.52
      },
      windSpeed: {
        noaa: 6.78,
        sg: 6.78
      }
    }, {
      time: '2021-04-29T22:00:00+00:00',
      waterTemperature: {
        meto: 12.97,
        noaa: 9.64,
        sg: 12.97
      },
      waveDirection: {
        meteo: 298.41,
        noaa: 270.57,
        sg: 298.41
      },
      waveHeight: {
        meteo: 0.48,
        noaa: 0.42,
        sg: 0.48
      },
      wavePeriod: {
        meteo: 3.08,
        noaa: 10,
        sg: 3.08
      },
      windDirection: {
        noaa: 30.98,
        sg: 30.98
      },
      windSpeed: {
        noaa: 6.96,
        sg: 6.96
      }
    }, {
      time: '2021-04-29T23:00:00+00:00',
      waterTemperature: {
        meto: 12.94,
        noaa: 9.26,
        sg: 12.94
      },
      waveDirection: {
        meteo: 296.89,
        noaa: 271.42,
        sg: 296.89
      },
      waveHeight: {
        meteo: 0.46,
        noaa: 0.39,
        sg: 0.46
      },
      wavePeriod: {
        meteo: 3.09,
        noaa: 9.9,
        sg: 3.09
      },
      windDirection: {
        noaa: 36.44,
        sg: 36.44
      },
      windSpeed: {
        noaa: 7.14,
        sg: 7.14
      }
    }, {
      time: '2021-04-30T00:00:00+00:00',
      waterTemperature: {
        meto: 12.95,
        noaa: 8.87,
        sg: 12.95
      },
      waveDirection: {
        meteo: 295.38,
        noaa: 272.28,
        sg: 295.38
      },
      waveHeight: {
        meteo: 0.45,
        noaa: 0.37,
        sg: 0.45
      },
      wavePeriod: {
        meteo: 3.1,
        noaa: 9.81,
        sg: 3.1
      },
      windDirection: {
        noaa: 41.9,
        sg: 41.9
      },
      windSpeed: {
        noaa: 7.32,
        sg: 7.32
      }
    }, {
      time: '2021-04-30T01:00:00+00:00',
      waterTemperature: {
        meto: 12.96,
        noaa: 8.57,
        sg: 12.96
      },
      waveDirection: {
        meteo: 293.76,
        noaa: 272.3,
        sg: 293.76
      },
      waveHeight: {
        meteo: 0.45,
        noaa: 0.36,
        sg: 0.45
      },
      wavePeriod: {
        meteo: 3.05,
        noaa: 9.76,
        sg: 3.05
      },
      windDirection: {
        noaa: 44.95,
        sg: 44.95
      },
      windSpeed: {
        noaa: 7.25,
        sg: 7.25
      }
    }, {
      time: '2021-04-30T02:00:00+00:00',
      waterTemperature: {
        meto: 12.97,
        noaa: 8.26,
        sg: 12.97
      },
      waveDirection: {
        meteo: 292.14,
        noaa: 272.32,
        sg: 292.14
      },
      waveHeight: {
        meteo: 0.44,
        noaa: 0.34,
        sg: 0.44
      },
      wavePeriod: {
        meteo: 3.01,
        noaa: 9.71,
        sg: 3.01
      },
      windDirection: {
        noaa: 48.01,
        sg: 48.01
      },
      windSpeed: {
        noaa: 7.18,
        sg: 7.18
      }
    }, {
      time: '2021-04-30T03:00:00+00:00',
      waterTemperature: {
        meto: 12.99,
        noaa: 7.95,
        sg: 12.99
      },
      waveDirection: {
        meteo: 290.52,
        noaa: 272.34,
        sg: 290.52
      },
      waveHeight: {
        meteo: 0.44,
        noaa: 0.33,
        sg: 0.44
      },
      wavePeriod: {
        meteo: 2.96,
        noaa: 9.66,
        sg: 2.96
      },
      windDirection: {
        noaa: 51.06,
        sg: 51.06
      },
      windSpeed: {
        noaa: 7.11,
        sg: 7.11
      }
    }, {
      time: '2021-04-30T04:00:00+00:00',
      waterTemperature: {
        meto: 13,
        noaa: 8.13,
        sg: 13
      },
      waveDirection: {
        meteo: 289,
        noaa: 272.31,
        sg: 289
      },
      waveHeight: {
        meteo: 0.45,
        noaa: 0.32,
        sg: 0.45
      },
      wavePeriod: {
        meteo: 2.92,
        noaa: 9.65,
        sg: 2.92
      },
      windDirection: {
        noaa: 54.27,
        sg: 54.27
      },
      windSpeed: {
        noaa: 7.23,
        sg: 7.23
      }
    }, {
      time: '2021-04-30T05:00:00+00:00',
      waterTemperature: {
        meto: 13.01,
        noaa: 8.31,
        sg: 13.01
      },
      waveDirection: {
        meteo: 287.48,
        noaa: 272.29,
        sg: 287.48
      },
      waveHeight: {
        meteo: 0.47,
        noaa: 0.32,
        sg: 0.47
      },
      wavePeriod: {
        meteo: 2.89,
        noaa: 9.63,
        sg: 2.89
      },
      windDirection: {
        noaa: 57.48,
        sg: 57.48
      },
      windSpeed: {
        noaa: 7.34,
        sg: 7.34
      }
    }, {
      time: '2021-04-30T06:00:00+00:00',
      waterTemperature: {
        meto: 13.03,
        noaa: 8.49,
        sg: 13.03
      },
      waveDirection: {
        meteo: 285.96,
        noaa: 272.26,
        sg: 285.96
      },
      waveHeight: {
        meteo: 0.48,
        noaa: 0.31,
        sg: 0.48
      },
      wavePeriod: {
        meteo: 2.85,
        noaa: 9.62,
        sg: 2.85
      },
      windDirection: {
        noaa: 60.69,
        sg: 60.69
      },
      windSpeed: {
        noaa: 7.46,
        sg: 7.46
      }
    }, {
      time: '2021-04-30T07:00:00+00:00',
      waterTemperature: {
        meto: 13.04,
        noaa: 9.4,
        sg: 13.04
      },
      waveDirection: {
        meteo: 285.84,
        noaa: 272.25,
        sg: 285.84
      },
      waveHeight: {
        meteo: 0.49,
        noaa: 0.3,
        sg: 0.49
      },
      wavePeriod: {
        meteo: 2.87,
        noaa: 9.64,
        sg: 2.87
      },
      windDirection: {
        noaa: 63.75,
        sg: 63.75
      },
      windSpeed: {
        noaa: 7.61,
        sg: 7.61
      }
    }, {
      time: '2021-04-30T08:00:00+00:00',
      waterTemperature: {
        meto: 13.05,
        noaa: 10.3,
        sg: 13.05
      },
      waveDirection: {
        meteo: 285.73,
        noaa: 272.23,
        sg: 285.73
      },
      waveHeight: {
        meteo: 0.49,
        noaa: 0.3,
        sg: 0.49
      },
      wavePeriod: {
        meteo: 2.88,
        noaa: 9.66,
        sg: 2.88
      },
      windDirection: {
        noaa: 66.81,
        sg: 66.81
      },
      windSpeed: {
        noaa: 7.76,
        sg: 7.76
      }
    }, {
      time: '2021-04-30T09:00:00+00:00',
      waterTemperature: {
        meto: 13.06,
        noaa: 11.21,
        sg: 13.06
      },
      waveDirection: {
        meteo: 285.61,
        noaa: 272.22,
        sg: 285.61
      },
      waveHeight: {
        meteo: 0.5,
        noaa: 0.29,
        sg: 0.5
      },
      wavePeriod: {
        meteo: 2.9,
        noaa: 9.68,
        sg: 2.9
      },
      windDirection: {
        noaa: 69.87,
        sg: 69.87
      },
      windSpeed: {
        noaa: 7.91,
        sg: 7.91
      }
    }, {
      time: '2021-04-30T10:00:00+00:00',
      waterTemperature: {
        meto: 13.08,
        noaa: 12.02,
        sg: 13.08
      },
      waveDirection: {
        meteo: 286.16,
        noaa: 271.96,
        sg: 286.16
      },
      waveHeight: {
        meteo: 0.49,
        noaa: 0.28,
        sg: 0.49
      },
      wavePeriod: {
        meteo: 2.93,
        noaa: 9.79,
        sg: 2.93
      },
      windDirection: {
        noaa: 68.61,
        sg: 68.61
      },
      windSpeed: {
        noaa: 8,
        sg: 8
      }
    }, {
      time: '2021-04-30T11:00:00+00:00',
      waterTemperature: {
        meto: 13.09,
        noaa: 12.84,
        sg: 13.09
      },
      waveDirection: {
        meteo: 286.71,
        noaa: 271.71,
        sg: 286.71
      },
      waveHeight: {
        meteo: 0.49,
        noaa: 0.28,
        sg: 0.49
      },
      wavePeriod: {
        meteo: 2.96,
        noaa: 9.89,
        sg: 2.96
      },
      windDirection: {
        noaa: 67.36,
        sg: 67.36
      },
      windSpeed: {
        noaa: 8.1,
        sg: 8.1
      }
    }, {
      time: '2021-04-30T12:00:00+00:00',
      waterTemperature: {
        meto: 13.1,
        noaa: 13.65,
        sg: 13.1
      },
      waveDirection: {
        meteo: 287.26,
        noaa: 271.45,
        sg: 287.26
      },
      waveHeight: {
        meteo: 0.48,
        noaa: 0.27,
        sg: 0.48
      },
      wavePeriod: {
        meteo: 2.99,
        noaa: 10,
        sg: 2.99
      },
      windDirection: {
        noaa: 66.1,
        sg: 66.1
      },
      windSpeed: {
        noaa: 8.19,
        sg: 8.19
      }
    }, {
      time: '2021-04-30T13:00:00+00:00',
      waterTemperature: {
        meto: 13.11,
        noaa: 13.78,
        sg: 13.11
      },
      waveDirection: {
        meteo: 288.22,
        noaa: 271.94,
        sg: 288.22
      },
      waveHeight: {
        meteo: 0.48,
        noaa: 0.27,
        sg: 0.48
      },
      wavePeriod: {
        meteo: 3,
        noaa: 9.91,
        sg: 3
      },
      windDirection: {
        noaa: 69.89,
        sg: 69.89
      },
      windSpeed: {
        noaa: 7.67,
        sg: 7.67
      }
    }, {
      time: '2021-04-30T14:00:00+00:00',
      waterTemperature: {
        meto: 13.13,
        noaa: 13.92,
        sg: 13.13
      },
      waveDirection: {
        meteo: 289.17,
        noaa: 272.42,
        sg: 289.17
      },
      waveHeight: {
        meteo: 0.48,
        noaa: 0.27,
        sg: 0.48
      },
      wavePeriod: {
        meteo: 3.02,
        noaa: 9.82,
        sg: 3.02
      },
      windDirection: {
        noaa: 73.68,
        sg: 73.68
      },
      windSpeed: {
        noaa: 7.15,
        sg: 7.15
      }
    }, {
      time: '2021-04-30T15:00:00+00:00',
      waterTemperature: {
        meto: 13.14,
        noaa: 14.05,
        sg: 13.14
      },
      waveDirection: {
        meteo: 290.13,
        noaa: 272.91,
        sg: 290.13
      },
      waveHeight: {
        meteo: 0.48,
        noaa: 0.27,
        sg: 0.48
      },
      wavePeriod: {
        meteo: 3.03,
        noaa: 9.73,
        sg: 3.03
      },
      windDirection: {
        noaa: 77.47,
        sg: 77.47
      },
      windSpeed: {
        noaa: 6.63,
        sg: 6.63
      }
    }, {
      time: '2021-04-30T16:00:00+00:00',
      waterTemperature: {
        meto: 13.15,
        noaa: 13.18,
        sg: 13.15
      },
      waveDirection: {
        meteo: 291.33,
        noaa: 272.99,
        sg: 291.33
      },
      waveHeight: {
        meteo: 0.5,
        noaa: 0.27,
        sg: 0.5
      },
      wavePeriod: {
        meteo: 3.05,
        noaa: 9.68,
        sg: 3.05
      },
      windDirection: {
        noaa: 74.64,
        sg: 74.64
      },
      windSpeed: {
        noaa: 6.42,
        sg: 6.42
      }
    }, {
      time: '2021-04-30T17:00:00+00:00',
      waterTemperature: {
        meto: 13.16,
        noaa: 12.32,
        sg: 13.16
      },
      waveDirection: {
        meteo: 292.53,
        noaa: 273.07,
        sg: 292.53
      },
      waveHeight: {
        meteo: 0.51,
        noaa: 0.27,
        sg: 0.51
      },
      wavePeriod: {
        meteo: 3.06,
        noaa: 9.64,
        sg: 3.06
      },
      windDirection: {
        noaa: 71.81,
        sg: 71.81
      },
      windSpeed: {
        noaa: 6.22,
        sg: 6.22
      }
    }, {
      time: '2021-04-30T18:00:00+00:00',
      waterTemperature: {
        meto: 13.18,
        noaa: 11.45,
        sg: 13.18
      },
      waveDirection: {
        meteo: 293.73,
        noaa: 273.15,
        sg: 293.73
      },
      waveHeight: {
        meteo: 0.53,
        noaa: 0.27,
        sg: 0.53
      },
      wavePeriod: {
        meteo: 3.08,
        noaa: 9.59,
        sg: 3.08
      },
      windDirection: {
        noaa: 68.98,
        sg: 68.98
      },
      windSpeed: {
        noaa: 6.01,
        sg: 6.01
      }
    }, {
      time: '2021-04-30T19:00:00+00:00',
      waterTemperature: {
        meto: 13.19,
        noaa: 11.35,
        sg: 13.19
      },
      waveDirection: {
        meteo: 294.09,
        noaa: 273.07,
        sg: 294.09
      },
      waveHeight: {
        meteo: 0.53,
        noaa: 0.27,
        sg: 0.53
      },
      wavePeriod: {
        meteo: 3.22,
        noaa: 9.56,
        sg: 3.22
      },
      windDirection: {
        noaa: 69.36,
        sg: 69.36
      },
      windSpeed: {
        noaa: 5.55,
        sg: 5.55
      }
    }, {
      time: '2021-04-30T20:00:00+00:00',
      waterTemperature: {
        meto: 13.2,
        noaa: 11.26,
        sg: 13.2
      },
      waveDirection: {
        meteo: 294.46,
        noaa: 272.98,
        sg: 294.46
      },
      waveHeight: {
        meteo: 0.54,
        noaa: 0.26,
        sg: 0.54
      },
      wavePeriod: {
        meteo: 3.36,
        noaa: 9.52,
        sg: 3.36
      },
      windDirection: {
        noaa: 69.73,
        sg: 69.73
      },
      windSpeed: {
        noaa: 5.1,
        sg: 5.1
      }
    }, {
      time: '2021-04-30T21:00:00+00:00',
      waterTemperature: {
        meto: 13.22,
        noaa: 11.16,
        sg: 13.22
      },
      waveDirection: {
        meteo: 294.82,
        noaa: 272.9,
        sg: 294.82
      },
      waveHeight: {
        meteo: 0.54,
        noaa: 0.26,
        sg: 0.54
      },
      wavePeriod: {
        meteo: 3.5,
        noaa: 9.49,
        sg: 3.5
      },
      windDirection: {
        noaa: 70.11,
        sg: 70.11
      },
      windSpeed: {
        noaa: 4.64,
        sg: 4.64
      }
    }, {
      time: '2021-04-30T22:00:00+00:00',
      waterTemperature: {
        meto: 13.23,
        noaa: 10.96,
        sg: 13.23
      },
      waveDirection: {
        meteo: 294.66,
        noaa: 272.78,
        sg: 294.66
      },
      waveHeight: {
        meteo: 0.53,
        noaa: 0.26,
        sg: 0.53
      },
      wavePeriod: {
        meteo: 3.68,
        noaa: 9.47,
        sg: 3.68
      },
      windDirection: {
        noaa: 75.42,
        sg: 75.42
      },
      windSpeed: {
        noaa: 3.98,
        sg: 3.98
      }
    }, {
      time: '2021-04-30T23:00:00+00:00',
      waterTemperature: {
        meto: 13.24,
        noaa: 10.75,
        sg: 13.24
      },
      waveDirection: {
        meteo: 294.49,
        noaa: 272.65,
        sg: 294.49
      },
      waveHeight: {
        meteo: 0.53,
        noaa: 0.25,
        sg: 0.53
      },
      wavePeriod: {
        meteo: 3.85,
        noaa: 9.44,
        sg: 3.85
      },
      windDirection: {
        noaa: 80.72,
        sg: 80.72
      },
      windSpeed: {
        noaa: 3.31,
        sg: 3.31
      }
    }, {
      time: '2021-05-01T00:00:00+00:00',
      waterTemperature: {
        meto: 13.25,
        noaa: 10.55,
        sg: 13.25
      },
      waveDirection: {
        meteo: 294.33,
        noaa: 272.53,
        sg: 294.33
      },
      waveHeight: {
        meteo: 0.52,
        noaa: 0.25,
        sg: 0.52
      },
      wavePeriod: {
        meteo: 4.03,
        noaa: 9.42,
        sg: 4.03
      },
      windDirection: {
        noaa: 86.03,
        sg: 86.03
      },
      windSpeed: {
        noaa: 2.65,
        sg: 2.65
      }
    }, {
      time: '2021-05-01T01:00:00+00:00',
      waterTemperature: {
        meto: 13.27,
        noaa: 11.13,
        sg: 13.27
      },
      waveDirection: {
        noaa: 273.77,
        sg: 273.77
      },
      waveHeight: {
        noaa: 0.26,
        sg: 0.26
      },
      wavePeriod: {
        noaa: 9.39,
        sg: 9.39
      },
      windDirection: {
        noaa: 94.37,
        sg: 94.37
      },
      windSpeed: {
        noaa: 2.78,
        sg: 2.78
      }
    }, {
      time: '2021-05-01T02:00:00+00:00',
      waterTemperature: {
        meto: 13.28,
        noaa: 11.7,
        sg: 13.28
      },
      waveDirection: {
        noaa: 275.01,
        sg: 275.01
      },
      waveHeight: {
        noaa: 0.27,
        sg: 0.27
      },
      wavePeriod: {
        noaa: 9.36,
        sg: 9.36
      },
      windDirection: {
        noaa: 102.72,
        sg: 102.72
      },
      windSpeed: {
        noaa: 2.9,
        sg: 2.9
      }
    }, {
      time: '2021-05-01T03:00:00+00:00',
      waterTemperature: {
        meto: 13.29,
        noaa: 12.28,
        sg: 13.29
      },
      waveDirection: {
        noaa: 276.25,
        sg: 276.25
      },
      waveHeight: {
        noaa: 0.28,
        sg: 0.28
      },
      wavePeriod: {
        noaa: 9.33,
        sg: 9.33
      },
      windDirection: {
        noaa: 111.06,
        sg: 111.06
      },
      windSpeed: {
        noaa: 3.03,
        sg: 3.03
      }
    }, {
      time: '2021-05-01T04:00:00+00:00',
      waterTemperature: {
        meto: 13.3,
        noaa: 12.86,
        sg: 13.3
      },
      waveDirection: {
        noaa: 271.64,
        sg: 271.64
      },
      waveHeight: {
        noaa: 0.31,
        sg: 0.31
      },
      wavePeriod: {
        noaa: 11.1,
        sg: 11.1
      },
      windDirection: {
        noaa: 119.41,
        sg: 119.41
      },
      windSpeed: {
        noaa: 3.16,
        sg: 3.16
      }
    }, {
      time: '2021-05-01T05:00:00+00:00',
      waterTemperature: {
        meto: 13.32,
        noaa: 13.44,
        sg: 13.32
      },
      waveDirection: {
        noaa: 267.03,
        sg: 267.03
      },
      waveHeight: {
        noaa: 0.35,
        sg: 0.35
      },
      wavePeriod: {
        noaa: 12.87,
        sg: 12.87
      },
      windDirection: {
        noaa: 127.75,
        sg: 127.75
      },
      windSpeed: {
        noaa: 3.29,
        sg: 3.29
      }
    }, {
      time: '2021-05-01T06:00:00+00:00',
      waterTemperature: {
        meto: 13.33,
        noaa: 14.01,
        sg: 13.33
      },
      waveDirection: {
        noaa: 262.42,
        sg: 262.42
      },
      waveHeight: {
        noaa: 0.38,
        sg: 0.38
      },
      wavePeriod: {
        noaa: 14.64,
        sg: 14.64
      },
      windDirection: {
        noaa: 136.09,
        sg: 136.09
      },
      windSpeed: {
        noaa: 3.42,
        sg: 3.42
      }
    }, {
      time: '2021-05-01T07:00:00+00:00',
      waterTemperature: {
        meto: 13.34,
        noaa: 14.59,
        sg: 13.34
      },
      waveDirection: {
        noaa: 261.82,
        sg: 261.82
      },
      waveHeight: {
        noaa: 0.44,
        sg: 0.44
      },
      wavePeriod: {
        noaa: 14.56,
        sg: 14.56
      },
      windDirection: {
        noaa: 144.44,
        sg: 144.44
      },
      windSpeed: {
        noaa: 3.54,
        sg: 3.54
      }
    }, {
      time: '2021-05-01T08:00:00+00:00',
      waterTemperature: {
        meto: 13.35,
        noaa: 15.17,
        sg: 13.35
      },
      waveDirection: {
        noaa: 261.21,
        sg: 261.21
      },
      waveHeight: {
        noaa: 0.51,
        sg: 0.51
      },
      wavePeriod: {
        noaa: 14.47,
        sg: 14.47
      },
      windDirection: {
        noaa: 152.78,
        sg: 152.78
      },
      windSpeed: {
        noaa: 3.67,
        sg: 3.67
      }
    }, {
      time: '2021-05-01T09:00:00+00:00',
      waterTemperature: {
        meto: 13.37,
        noaa: 15.75,
        sg: 13.37
      },
      waveDirection: {
        noaa: 260.61,
        sg: 260.61
      },
      waveHeight: {
        noaa: 0.57,
        sg: 0.57
      },
      wavePeriod: {
        noaa: 14.39,
        sg: 14.39
      },
      windDirection: {
        noaa: 161.13,
        sg: 161.13
      },
      windSpeed: {
        noaa: 3.8,
        sg: 3.8
      }
    }, {
      time: '2021-05-01T10:00:00+00:00',
      waterTemperature: {
        meto: 13.38,
        noaa: 16.32,
        sg: 13.38
      },
      waveDirection: {
        noaa: 255.86,
        sg: 255.86
      },
      waveHeight: {
        noaa: 0.66,
        sg: 0.66
      },
      wavePeriod: {
        noaa: 10.92,
        sg: 10.92
      },
      windDirection: {
        noaa: 169.47,
        sg: 169.47
      },
      windSpeed: {
        noaa: 3.92,
        sg: 3.92
      }
    }, {
      time: '2021-05-01T11:00:00+00:00',
      waterTemperature: {
        meto: 13.39,
        noaa: 16.9,
        sg: 13.39
      },
      waveDirection: {
        noaa: 251.12,
        sg: 251.12
      },
      waveHeight: {
        noaa: 0.75,
        sg: 0.75
      },
      wavePeriod: {
        noaa: 7.45,
        sg: 7.45
      },
      windDirection: {
        noaa: 177.82,
        sg: 177.82
      },
      windSpeed: {
        noaa: 4.05,
        sg: 4.05
      }
    }, {
      time: '2021-05-01T12:00:00+00:00',
      waterTemperature: {
        meto: 13.41,
        noaa: 17.48,
        sg: 13.41
      },
      waveDirection: {
        noaa: 246.37,
        sg: 246.37
      },
      waveHeight: {
        noaa: 0.84,
        sg: 0.84
      },
      wavePeriod: {
        noaa: 3.98,
        sg: 3.98
      },
      windDirection: {
        noaa: 186.16,
        sg: 186.16
      },
      windSpeed: {
        noaa: 4.18,
        sg: 4.18
      }
    }, {
      time: '2021-05-01T13:00:00+00:00',
      waterTemperature: {
        meto: 13.42,
        noaa: 17.32,
        sg: 13.42
      },
      waveDirection: {
        noaa: 250.24,
        sg: 250.24
      },
      waveHeight: {
        noaa: 0.95,
        sg: 0.95
      },
      wavePeriod: {
        noaa: 4.26,
        sg: 4.26
      },
      windDirection: {
        noaa: 181.13,
        sg: 181.13
      },
      windSpeed: {
        noaa: 4.25,
        sg: 4.25
      }
    }, {
      time: '2021-05-01T14:00:00+00:00',
      waterTemperature: {
        meto: 13.43,
        noaa: 17.16,
        sg: 13.43
      },
      waveDirection: {
        noaa: 254.12,
        sg: 254.12
      },
      waveHeight: {
        noaa: 1.06,
        sg: 1.06
      },
      wavePeriod: {
        noaa: 4.55,
        sg: 4.55
      },
      windDirection: {
        noaa: 176.11,
        sg: 176.11
      },
      windSpeed: {
        noaa: 4.32,
        sg: 4.32
      }
    }, {
      time: '2021-05-01T15:00:00+00:00',
      waterTemperature: {
        meto: 13.44,
        noaa: 17,
        sg: 13.44
      },
      waveDirection: {
        noaa: 257.99,
        sg: 257.99
      },
      waveHeight: {
        noaa: 1.17,
        sg: 1.17
      },
      wavePeriod: {
        noaa: 4.83,
        sg: 4.83
      },
      windDirection: {
        noaa: 171.08,
        sg: 171.08
      },
      windSpeed: {
        noaa: 4.39,
        sg: 4.39
      }
    }, {
      time: '2021-05-01T16:00:00+00:00',
      waterTemperature: {
        meto: 13.46,
        noaa: 16.84,
        sg: 13.46
      },
      waveDirection: {
        noaa: 261.34,
        sg: 261.34
      },
      waveHeight: {
        noaa: 1.26,
        sg: 1.26
      },
      wavePeriod: {
        noaa: 5.19,
        sg: 5.19
      },
      windDirection: {
        noaa: 166.06,
        sg: 166.06
      },
      windSpeed: {
        noaa: 4.47,
        sg: 4.47
      }
    }, {
      time: '2021-05-01T17:00:00+00:00',
      waterTemperature: {
        meto: 13.47,
        noaa: 16.67,
        sg: 13.47
      },
      waveDirection: {
        noaa: 264.69,
        sg: 264.69
      },
      waveHeight: {
        noaa: 1.36,
        sg: 1.36
      },
      wavePeriod: {
        noaa: 5.55,
        sg: 5.55
      },
      windDirection: {
        noaa: 161.03,
        sg: 161.03
      },
      windSpeed: {
        noaa: 4.54,
        sg: 4.54
      }
    }, {
      time: '2021-05-01T18:00:00+00:00',
      waterTemperature: {
        meto: 13.48,
        noaa: 16.51,
        sg: 13.48
      },
      waveDirection: {
        noaa: 268.04,
        sg: 268.04
      },
      waveHeight: {
        noaa: 1.45,
        sg: 1.45
      },
      wavePeriod: {
        noaa: 5.91,
        sg: 5.91
      },
      windDirection: {
        noaa: 156,
        sg: 156
      },
      windSpeed: {
        noaa: 4.61,
        sg: 4.61
      }
    }, {
      time: '2021-05-01T19:00:00+00:00',
      waterTemperature: {
        meto: 13.49,
        noaa: 16.35,
        sg: 13.49
      },
      waveDirection: {
        noaa: 270.35,
        sg: 270.35
      },
      waveHeight: {
        noaa: 1.54,
        sg: 1.54
      },
      wavePeriod: {
        noaa: 6.54,
        sg: 6.54
      },
      windDirection: {
        noaa: 150.98,
        sg: 150.98
      },
      windSpeed: {
        noaa: 4.68,
        sg: 4.68
      }
    }, {
      time: '2021-05-01T20:00:00+00:00',
      waterTemperature: {
        meto: 13.51,
        noaa: 16.19,
        sg: 13.51
      },
      waveDirection: {
        noaa: 272.66,
        sg: 272.66
      },
      waveHeight: {
        noaa: 1.62,
        sg: 1.62
      },
      wavePeriod: {
        noaa: 7.17,
        sg: 7.17
      },
      windDirection: {
        noaa: 145.95,
        sg: 145.95
      },
      windSpeed: {
        noaa: 4.75,
        sg: 4.75
      }
    }, {
      time: '2021-05-01T21:00:00+00:00',
      waterTemperature: {
        meto: 13.52,
        noaa: 16.03,
        sg: 13.52
      },
      waveDirection: {
        noaa: 274.97,
        sg: 274.97
      },
      waveHeight: {
        noaa: 1.71,
        sg: 1.71
      },
      wavePeriod: {
        noaa: 7.8,
        sg: 7.8
      },
      windDirection: {
        noaa: 140.93,
        sg: 140.93
      },
      windSpeed: {
        noaa: 4.83,
        sg: 4.83
      }
    }, {
      time: '2021-05-01T22:00:00+00:00',
      waterTemperature: {
        meto: 13.53,
        noaa: 15.87,
        sg: 13.53
      },
      waveDirection: {
        noaa: 274.64,
        sg: 274.64
      },
      waveHeight: {
        noaa: 1.76,
        sg: 1.76
      },
      wavePeriod: {
        noaa: 8.76,
        sg: 8.76
      },
      windDirection: {
        noaa: 135.9,
        sg: 135.9
      },
      windSpeed: {
        noaa: 4.9,
        sg: 4.9
      }
    }, {
      time: '2021-05-01T23:00:00+00:00',
      waterTemperature: {
        meto: 13.54,
        noaa: 15.71,
        sg: 13.54
      },
      waveDirection: {
        noaa: 274.31,
        sg: 274.31
      },
      waveHeight: {
        noaa: 1.81,
        sg: 1.81
      },
      wavePeriod: {
        noaa: 9.71,
        sg: 9.71
      },
      windDirection: {
        noaa: 130.88,
        sg: 130.88
      },
      windSpeed: {
        noaa: 4.97,
        sg: 4.97
      }
    }, {
      time: '2021-05-02T00:00:00+00:00',
      waterTemperature: {
        meto: 13.56,
        noaa: 15.55,
        sg: 13.56
      },
      waveDirection: {
        noaa: 273.98,
        sg: 273.98
      },
      waveHeight: {
        noaa: 1.86,
        sg: 1.86
      },
      wavePeriod: {
        noaa: 10.67,
        sg: 10.67
      },
      windDirection: {
        noaa: 125.85,
        sg: 125.85
      },
      windSpeed: {
        noaa: 5.04,
        sg: 5.04
      }
    }, {
      time: '2021-05-02T01:00:00+00:00',
      waterTemperature: {
        meto: 13.57,
        noaa: 15.72,
        sg: 13.57
      },
      waveDirection: {
        noaa: 273.68,
        sg: 273.68
      },
      waveHeight: {
        noaa: 1.83,
        sg: 1.83
      },
      wavePeriod: {
        noaa: 10.72,
        sg: 10.72
      },
      windDirection: {
        noaa: 134.5,
        sg: 134.5
      },
      windSpeed: {
        noaa: 5.16,
        sg: 5.16
      }
    }, {
      time: '2021-05-02T02:00:00+00:00',
      waterTemperature: {
        meto: 13.58,
        noaa: 15.9,
        sg: 13.58
      },
      waveDirection: {
        noaa: 273.37,
        sg: 273.37
      },
      waveHeight: {
        noaa: 1.79,
        sg: 1.79
      },
      wavePeriod: {
        noaa: 10.76,
        sg: 10.76
      },
      windDirection: {
        noaa: 143.15,
        sg: 143.15
      },
      windSpeed: {
        noaa: 5.28,
        sg: 5.28
      }
    }, {
      time: '2021-05-02T03:00:00+00:00',
      waterTemperature: {
        meto: 13.6,
        noaa: 16.07,
        sg: 13.6
      },
      waveDirection: {
        noaa: 273.07,
        sg: 273.07
      },
      waveHeight: {
        noaa: 1.76,
        sg: 1.76
      },
      wavePeriod: {
        noaa: 10.81,
        sg: 10.81
      },
      windDirection: {
        noaa: 151.8,
        sg: 151.8
      },
      windSpeed: {
        noaa: 5.4,
        sg: 5.4
      }
    }, {
      time: '2021-05-02T04:00:00+00:00',
      waterTemperature: {
        meto: 13.61,
        noaa: 16.24,
        sg: 13.61
      },
      waveDirection: {
        noaa: 271.59,
        sg: 271.59
      },
      waveHeight: {
        noaa: 1.73,
        sg: 1.73
      },
      wavePeriod: {
        noaa: 12.05,
        sg: 12.05
      },
      windDirection: {
        noaa: 160.45,
        sg: 160.45
      },
      windSpeed: {
        noaa: 5.52,
        sg: 5.52
      }
    }, {
      time: '2021-05-02T05:00:00+00:00',
      waterTemperature: {
        meto: 13.62,
        noaa: 16.42,
        sg: 13.62
      },
      waveDirection: {
        noaa: 270.12,
        sg: 270.12
      },
      waveHeight: {
        noaa: 1.7,
        sg: 1.7
      },
      wavePeriod: {
        noaa: 13.3,
        sg: 13.3
      },
      windDirection: {
        noaa: 169.1,
        sg: 169.1
      },
      windSpeed: {
        noaa: 5.64,
        sg: 5.64
      }
    }, {
      time: '2021-05-02T06:00:00+00:00',
      waterTemperature: {
        meto: 13.63,
        noaa: 16.59,
        sg: 13.63
      },
      waveDirection: {
        noaa: 268.64,
        sg: 268.64
      },
      waveHeight: {
        noaa: 1.67,
        sg: 1.67
      },
      wavePeriod: {
        noaa: 14.54,
        sg: 14.54
      },
      windDirection: {
        noaa: 177.76,
        sg: 177.76
      },
      windSpeed: {
        noaa: 5.77,
        sg: 5.77
      }
    }, {
      time: '2021-05-02T07:00:00+00:00',
      waterTemperature: {
        meto: 13.65,
        noaa: 16.76,
        sg: 13.65
      },
      waveDirection: {
        noaa: 268.38,
        sg: 268.38
      },
      waveHeight: {
        noaa: 1.68,
        sg: 1.68
      },
      wavePeriod: {
        noaa: 14.47,
        sg: 14.47
      },
      windDirection: {
        noaa: 186.41,
        sg: 186.41
      },
      windSpeed: {
        noaa: 5.89,
        sg: 5.89
      }
    }, {
      time: '2021-05-02T08:00:00+00:00',
      waterTemperature: {
        meto: 13.66,
        noaa: 16.94,
        sg: 13.66
      },
      waveDirection: {
        noaa: 268.11,
        sg: 268.11
      },
      waveHeight: {
        noaa: 1.68,
        sg: 1.68
      },
      wavePeriod: {
        noaa: 14.41,
        sg: 14.41
      },
      windDirection: {
        noaa: 195.06,
        sg: 195.06
      },
      windSpeed: {
        noaa: 6.01,
        sg: 6.01
      }
    }, {
      time: '2021-05-02T09:00:00+00:00',
      waterTemperature: {
        meto: 13.67,
        noaa: 17.11,
        sg: 13.67
      },
      waveDirection: {
        noaa: 267.85,
        sg: 267.85
      },
      waveHeight: {
        noaa: 1.69,
        sg: 1.69
      },
      wavePeriod: {
        noaa: 14.34,
        sg: 14.34
      },
      windDirection: {
        noaa: 203.71,
        sg: 203.71
      },
      windSpeed: {
        noaa: 6.13,
        sg: 6.13
      }
    }, {
      time: '2021-05-02T10:00:00+00:00',
      waterTemperature: {
        meto: 13.68,
        noaa: 17.29,
        sg: 13.68
      },
      waveDirection: {
        noaa: 267.65,
        sg: 267.65
      },
      waveHeight: {
        noaa: 1.7,
        sg: 1.7
      },
      wavePeriod: {
        noaa: 14.27,
        sg: 14.27
      },
      windDirection: {
        noaa: 212.36,
        sg: 212.36
      },
      windSpeed: {
        noaa: 6.25,
        sg: 6.25
      }
    }, {
      time: '2021-05-02T11:00:00+00:00',
      waterTemperature: {
        meto: 13.7,
        noaa: 17.46,
        sg: 13.7
      },
      waveDirection: {
        noaa: 267.44,
        sg: 267.44
      },
      waveHeight: {
        noaa: 1.72,
        sg: 1.72
      },
      wavePeriod: {
        noaa: 14.2,
        sg: 14.2
      },
      windDirection: {
        noaa: 221.01,
        sg: 221.01
      },
      windSpeed: {
        noaa: 6.37,
        sg: 6.37
      }
    }, {
      time: '2021-05-02T12:00:00+00:00',
      waterTemperature: {
        meto: 13.71,
        noaa: 17.63,
        sg: 13.71
      },
      waveDirection: {
        noaa: 267.24,
        sg: 267.24
      },
      waveHeight: {
        noaa: 1.73,
        sg: 1.73
      },
      wavePeriod: {
        noaa: 14.13,
        sg: 14.13
      },
      windDirection: {
        noaa: 229.66,
        sg: 229.66
      },
      windSpeed: {
        noaa: 6.49,
        sg: 6.49
      }
    }, {
      time: '2021-05-02T13:00:00+00:00',
      waterTemperature: {
        meto: 13.72,
        noaa: 17.21,
        sg: 13.72
      },
      waveDirection: {
        noaa: 267.93,
        sg: 267.93
      },
      waveHeight: {
        noaa: 1.69,
        sg: 1.69
      },
      wavePeriod: {
        noaa: 14,
        sg: 14
      },
      windDirection: {
        noaa: 229.1,
        sg: 229.1
      },
      windSpeed: {
        noaa: 6.43,
        sg: 6.43
      }
    }, {
      time: '2021-05-02T14:00:00+00:00',
      waterTemperature: {
        meto: 13.73,
        noaa: 16.79,
        sg: 13.73
      },
      waveDirection: {
        noaa: 268.63,
        sg: 268.63
      },
      waveHeight: {
        noaa: 1.65,
        sg: 1.65
      },
      wavePeriod: {
        noaa: 13.86,
        sg: 13.86
      },
      windDirection: {
        noaa: 228.54,
        sg: 228.54
      },
      windSpeed: {
        noaa: 6.37,
        sg: 6.37
      }
    }, {
      time: '2021-05-02T15:00:00+00:00',
      waterTemperature: {
        meto: 13.75,
        noaa: 16.36,
        sg: 13.75
      },
      waveDirection: {
        noaa: 269.32,
        sg: 269.32
      },
      waveHeight: {
        noaa: 1.61,
        sg: 1.61
      },
      wavePeriod: {
        noaa: 13.73,
        sg: 13.73
      },
      windDirection: {
        noaa: 227.98,
        sg: 227.98
      },
      windSpeed: {
        noaa: 6.31,
        sg: 6.31
      }
    }, {
      time: '2021-05-02T16:00:00+00:00',
      waterTemperature: {
        meto: 13.76,
        noaa: 15.94,
        sg: 13.76
      },
      waveDirection: {
        noaa: 269.22,
        sg: 269.22
      },
      waveHeight: {
        noaa: 1.57,
        sg: 1.57
      },
      wavePeriod: {
        noaa: 13.68,
        sg: 13.68
      },
      windDirection: {
        noaa: 227.42,
        sg: 227.42
      },
      windSpeed: {
        noaa: 6.25,
        sg: 6.25
      }
    }, {
      time: '2021-05-02T17:00:00+00:00',
      waterTemperature: {
        meto: 13.77,
        noaa: 15.51,
        sg: 13.77
      },
      waveDirection: {
        noaa: 269.11,
        sg: 269.11
      },
      waveHeight: {
        noaa: 1.54,
        sg: 1.54
      },
      wavePeriod: {
        noaa: 13.63,
        sg: 13.63
      },
      windDirection: {
        noaa: 226.86,
        sg: 226.86
      },
      windSpeed: {
        noaa: 6.19,
        sg: 6.19
      }
    }, {
      time: '2021-05-02T18:00:00+00:00',
      waterTemperature: {
        meto: 13.79,
        noaa: 15.09,
        sg: 13.79
      },
      waveDirection: {
        noaa: 269.01,
        sg: 269.01
      },
      waveHeight: {
        noaa: 1.5,
        sg: 1.5
      },
      wavePeriod: {
        noaa: 13.58,
        sg: 13.58
      },
      windDirection: {
        noaa: 226.3,
        sg: 226.3
      },
      windSpeed: {
        noaa: 6.13,
        sg: 6.13
      }
    }, {
      time: '2021-05-02T19:00:00+00:00',
      waterTemperature: {
        meto: 13.8,
        noaa: 14.67,
        sg: 13.8
      },
      waveDirection: {
        noaa: 268.92,
        sg: 268.92
      },
      waveHeight: {
        noaa: 1.48,
        sg: 1.48
      },
      wavePeriod: {
        noaa: 13.56,
        sg: 13.56
      },
      windDirection: {
        noaa: 225.73,
        sg: 225.73
      },
      windSpeed: {
        noaa: 6.07,
        sg: 6.07
      }
    }, {
      time: '2021-05-02T20:00:00+00:00',
      waterTemperature: {
        meto: 13.81,
        noaa: 14.24,
        sg: 13.81
      },
      waveDirection: {
        noaa: 268.84,
        sg: 268.84
      },
      waveHeight: {
        noaa: 1.45,
        sg: 1.45
      },
      wavePeriod: {
        noaa: 13.53,
        sg: 13.53
      },
      windDirection: {
        noaa: 225.17,
        sg: 225.17
      },
      windSpeed: {
        noaa: 6.01,
        sg: 6.01
      }
    }, {
      time: '2021-05-02T21:00:00+00:00',
      waterTemperature: {
        meto: 13.82,
        noaa: 13.82,
        sg: 13.82
      },
      waveDirection: {
        noaa: 268.75,
        sg: 268.75
      },
      waveHeight: {
        noaa: 1.43,
        sg: 1.43
      },
      wavePeriod: {
        noaa: 13.51,
        sg: 13.51
      },
      windDirection: {
        noaa: 224.61,
        sg: 224.61
      },
      windSpeed: {
        noaa: 5.95,
        sg: 5.95
      }
    }, {
      time: '2021-05-02T22:00:00+00:00',
      waterTemperature: {
        meto: 13.84,
        noaa: 13.4,
        sg: 13.84
      },
      waveDirection: {
        noaa: 268.71,
        sg: 268.71
      },
      waveHeight: {
        noaa: 1.42,
        sg: 1.42
      },
      wavePeriod: {
        noaa: 13.49,
        sg: 13.49
      },
      windDirection: {
        noaa: 224.05,
        sg: 224.05
      },
      windSpeed: {
        noaa: 5.89,
        sg: 5.89
      }
    }, {
      time: '2021-05-02T23:00:00+00:00',
      waterTemperature: {
        meto: 13.85,
        noaa: 12.97,
        sg: 13.85
      },
      waveDirection: {
        noaa: 268.68,
        sg: 268.68
      },
      waveHeight: {
        noaa: 1.41,
        sg: 1.41
      },
      wavePeriod: {
        noaa: 13.47,
        sg: 13.47
      },
      windDirection: {
        noaa: 223.49,
        sg: 223.49
      },
      windSpeed: {
        noaa: 5.83,
        sg: 5.83
      }
    }, {
      time: '2021-05-03T00:00:00+00:00',
      waterTemperature: {
        meto: 13.86,
        noaa: 12.55,
        sg: 13.86
      },
      waveDirection: {
        noaa: 268.64,
        sg: 268.64
      },
      waveHeight: {
        noaa: 1.4,
        sg: 1.4
      },
      wavePeriod: {
        noaa: 13.45,
        sg: 13.45
      },
      windDirection: {
        noaa: 222.93,
        sg: 222.93
      },
      windSpeed: {
        noaa: 5.77,
        sg: 5.77
      }
    }, {
      time: '2021-05-03T01:00:00+00:00',
      waterTemperature: {
        meto: 13.84,
        noaa: 12.66,
        sg: 13.84
      },
      waveDirection: {
        noaa: 268.65,
        sg: 268.65
      },
      waveHeight: {
        noaa: 1.4,
        sg: 1.4
      },
      wavePeriod: {
        noaa: 13.45,
        sg: 13.45
      },
      windDirection: {
        noaa: 226.52,
        sg: 226.52
      },
      windSpeed: {
        noaa: 6.16,
        sg: 6.16
      }
    }, {
      time: '2021-05-03T02:00:00+00:00',
      waterTemperature: {
        meto: 13.83,
        noaa: 12.77,
        sg: 13.83
      },
      waveDirection: {
        noaa: 268.66,
        sg: 268.66
      },
      waveHeight: {
        noaa: 1.39,
        sg: 1.39
      },
      wavePeriod: {
        noaa: 13.44,
        sg: 13.44
      },
      windDirection: {
        noaa: 230.1,
        sg: 230.1
      },
      windSpeed: {
        noaa: 6.55,
        sg: 6.55
      }
    }, {
      time: '2021-05-03T03:00:00+00:00',
      waterTemperature: {
        meto: 13.81,
        noaa: 12.88,
        sg: 13.81
      },
      waveDirection: {
        noaa: 268.67,
        sg: 268.67
      },
      waveHeight: {
        noaa: 1.39,
        sg: 1.39
      },
      wavePeriod: {
        noaa: 13.44,
        sg: 13.44
      },
      windDirection: {
        noaa: 233.69,
        sg: 233.69
      },
      windSpeed: {
        noaa: 6.93,
        sg: 6.93
      }
    }, {
      time: '2021-05-03T04:00:00+00:00',
      waterTemperature: {
        meto: 13.8,
        noaa: 12.99,
        sg: 13.8
      },
      waveDirection: {
        noaa: 268.74,
        sg: 268.74
      },
      waveHeight: {
        noaa: 1.39,
        sg: 1.39
      },
      wavePeriod: {
        noaa: 13.45,
        sg: 13.45
      },
      windDirection: {
        noaa: 237.28,
        sg: 237.28
      },
      windSpeed: {
        noaa: 7.32,
        sg: 7.32
      }
    }, {
      time: '2021-05-03T05:00:00+00:00',
      waterTemperature: {
        meto: 13.79,
        noaa: 13.1,
        sg: 13.79
      },
      waveDirection: {
        noaa: 268.8,
        sg: 268.8
      },
      waveHeight: {
        noaa: 1.38,
        sg: 1.38
      },
      wavePeriod: {
        noaa: 13.47,
        sg: 13.47
      },
      windDirection: {
        noaa: 240.86,
        sg: 240.86
      },
      windSpeed: {
        noaa: 7.71,
        sg: 7.71
      }
    }, {
      time: '2021-05-03T06:00:00+00:00',
      waterTemperature: {
        meto: 13.78,
        noaa: 13.21,
        sg: 13.78
      },
      waveDirection: {
        noaa: 268.87,
        sg: 268.87
      },
      waveHeight: {
        noaa: 1.38,
        sg: 1.38
      },
      wavePeriod: {
        noaa: 13.48,
        sg: 13.48
      },
      windDirection: {
        noaa: 244.45,
        sg: 244.45
      },
      windSpeed: {
        noaa: 8.1,
        sg: 8.1
      }
    }, {
      time: '2021-05-03T07:00:00+00:00',
      waterTemperature: {
        meto: 13.78,
        noaa: 13.33,
        sg: 13.78
      },
      waveDirection: {
        noaa: 269,
        sg: 269
      },
      waveHeight: {
        noaa: 1.37,
        sg: 1.37
      },
      wavePeriod: {
        noaa: 13.5,
        sg: 13.5
      },
      windDirection: {
        noaa: 248.04,
        sg: 248.04
      },
      windSpeed: {
        noaa: 8.49,
        sg: 8.49
      }
    }, {
      time: '2021-05-03T08:00:00+00:00',
      waterTemperature: {
        meto: 13.8,
        noaa: 13.44,
        sg: 13.8
      },
      waveDirection: {
        noaa: 269.13,
        sg: 269.13
      },
      waveHeight: {
        noaa: 1.37,
        sg: 1.37
      },
      wavePeriod: {
        noaa: 13.53,
        sg: 13.53
      },
      windDirection: {
        noaa: 251.62,
        sg: 251.62
      },
      windSpeed: {
        noaa: 8.88,
        sg: 8.88
      }
    }, {
      time: '2021-05-03T09:00:00+00:00',
      waterTemperature: {
        meto: 13.85,
        noaa: 13.55,
        sg: 13.85
      },
      waveDirection: {
        noaa: 269.26,
        sg: 269.26
      },
      waveHeight: {
        noaa: 1.36,
        sg: 1.36
      },
      wavePeriod: {
        noaa: 13.55,
        sg: 13.55
      },
      windDirection: {
        noaa: 255.21,
        sg: 255.21
      },
      windSpeed: {
        noaa: 9.27,
        sg: 9.27
      }
    }, {
      time: '2021-05-03T10:00:00+00:00',
      waterTemperature: {
        meto: 13.91,
        noaa: 13.66,
        sg: 13.91
      },
      waveDirection: {
        noaa: 269.37,
        sg: 269.37
      },
      waveHeight: {
        noaa: 1.37,
        sg: 1.37
      },
      wavePeriod: {
        noaa: 13.54,
        sg: 13.54
      },
      windDirection: {
        noaa: 258.8,
        sg: 258.8
      },
      windSpeed: {
        noaa: 9.65,
        sg: 9.65
      }
    }, {
      time: '2021-05-03T11:00:00+00:00',
      waterTemperature: {
        meto: 13.98,
        noaa: 13.77,
        sg: 13.98
      },
      waveDirection: {
        noaa: 269.48,
        sg: 269.48
      },
      waveHeight: {
        noaa: 1.37,
        sg: 1.37
      },
      wavePeriod: {
        noaa: 13.54,
        sg: 13.54
      },
      windDirection: {
        noaa: 262.38,
        sg: 262.38
      },
      windSpeed: {
        noaa: 10.04,
        sg: 10.04
      }
    }, {
      time: '2021-05-03T12:00:00+00:00',
      waterTemperature: {
        meto: 14.03,
        noaa: 13.88,
        sg: 14.03
      },
      waveDirection: {
        noaa: 269.59,
        sg: 269.59
      },
      waveHeight: {
        noaa: 1.38,
        sg: 1.38
      },
      wavePeriod: {
        noaa: 13.53,
        sg: 13.53
      },
      windDirection: {
        noaa: 265.97,
        sg: 265.97
      },
      windSpeed: {
        noaa: 10.43,
        sg: 10.43
      }
    }, {
      time: '2021-05-03T13:00:00+00:00',
      waterTemperature: {
        meto: 14.08,
        noaa: 13.38,
        sg: 14.08
      },
      waveDirection: {
        noaa: 269.65,
        sg: 269.65
      },
      waveHeight: {
        noaa: 1.38,
        sg: 1.38
      },
      wavePeriod: {
        noaa: 13.49,
        sg: 13.49
      },
      windDirection: {
        noaa: 275.62,
        sg: 275.62
      },
      windSpeed: {
        noaa: 9.91,
        sg: 9.91
      }
    }, {
      time: '2021-05-03T14:00:00+00:00',
      waterTemperature: {
        meto: 14.1,
        noaa: 12.88,
        sg: 14.1
      },
      waveDirection: {
        noaa: 269.72,
        sg: 269.72
      },
      waveHeight: {
        noaa: 1.37,
        sg: 1.37
      },
      wavePeriod: {
        noaa: 13.45,
        sg: 13.45
      },
      windDirection: {
        noaa: 285.28,
        sg: 285.28
      },
      windSpeed: {
        noaa: 9.39,
        sg: 9.39
      }
    }, {
      time: '2021-05-03T15:00:00+00:00',
      waterTemperature: {
        meto: 14.09,
        noaa: 12.38,
        sg: 14.09
      },
      waveDirection: {
        noaa: 269.78,
        sg: 269.78
      },
      waveHeight: {
        noaa: 1.37,
        sg: 1.37
      },
      wavePeriod: {
        noaa: 13.41,
        sg: 13.41
      },
      windDirection: {
        noaa: 294.93,
        sg: 294.93
      },
      windSpeed: {
        noaa: 8.87,
        sg: 8.87
      }
    }, {
      time: '2021-05-03T16:00:00+00:00',
      waterTemperature: {
        meto: 14.07,
        noaa: 11.87,
        sg: 14.07
      },
      waveDirection: {
        noaa: 269.8,
        sg: 269.8
      },
      waveHeight: {
        noaa: 1.38,
        sg: 1.38
      },
      wavePeriod: {
        noaa: 13.35,
        sg: 13.35
      },
      windDirection: {
        noaa: 304.58,
        sg: 304.58
      },
      windSpeed: {
        noaa: 8.34,
        sg: 8.34
      }
    }, {
      time: '2021-05-03T17:00:00+00:00',
      waterTemperature: {
        meto: 14.05,
        noaa: 11.37,
        sg: 14.05
      },
      waveDirection: {
        noaa: 269.82,
        sg: 269.82
      },
      waveHeight: {
        noaa: 1.39,
        sg: 1.39
      },
      wavePeriod: {
        noaa: 13.28,
        sg: 13.28
      },
      windDirection: {
        noaa: 314.23,
        sg: 314.23
      },
      windSpeed: {
        noaa: 7.82,
        sg: 7.82
      }
    }, {
      time: '2021-05-03T18:00:00+00:00',
      waterTemperature: {
        meto: 14.01,
        noaa: 10.87,
        sg: 14.01
      },
      waveDirection: {
        noaa: 269.84,
        sg: 269.84
      },
      waveHeight: {
        noaa: 1.4,
        sg: 1.4
      },
      wavePeriod: {
        noaa: 13.22,
        sg: 13.22
      },
      windDirection: {
        noaa: 323.88,
        sg: 323.88
      },
      windSpeed: {
        noaa: 7.3,
        sg: 7.3
      }
    }, {
      time: '2021-05-03T19:00:00+00:00',
      waterTemperature: {
        meto: 13.98,
        noaa: 10.37,
        sg: 13.98
      },
      waveDirection: {
        noaa: 270.51,
        sg: 270.51
      },
      waveHeight: {
        noaa: 1.4,
        sg: 1.4
      },
      wavePeriod: {
        noaa: 13.08,
        sg: 13.08
      },
      windDirection: {
        noaa: 333.54,
        sg: 333.54
      },
      windSpeed: {
        noaa: 6.78,
        sg: 6.78
      }
    }, {
      time: '2021-05-03T20:00:00+00:00',
      waterTemperature: {
        meto: 13.96,
        noaa: 9.87,
        sg: 13.96
      },
      waveDirection: {
        noaa: 271.17,
        sg: 271.17
      },
      waveHeight: {
        noaa: 1.4,
        sg: 1.4
      },
      wavePeriod: {
        noaa: 12.95,
        sg: 12.95
      },
      windDirection: {
        noaa: 343.19,
        sg: 343.19
      },
      windSpeed: {
        noaa: 6.26,
        sg: 6.26
      }
    }, {
      time: '2021-05-03T21:00:00+00:00',
      waterTemperature: {
        meto: 13.94,
        noaa: 9.37,
        sg: 13.94
      },
      waveDirection: {
        noaa: 271.84,
        sg: 271.84
      },
      waveHeight: {
        noaa: 1.4,
        sg: 1.4
      },
      wavePeriod: {
        noaa: 12.81,
        sg: 12.81
      },
      windDirection: {
        noaa: 352.84,
        sg: 352.84
      },
      windSpeed: {
        noaa: 5.74,
        sg: 5.74
      }
    }, {
      time: '2021-05-03T22:00:00+00:00',
      waterTemperature: {
        meto: 13.92,
        noaa: 8.87,
        sg: 13.92
      },
      waveDirection: {
        noaa: 271.9,
        sg: 271.9
      },
      waveHeight: {
        noaa: 1.38,
        sg: 1.38
      },
      wavePeriod: {
        noaa: 12.73,
        sg: 12.73
      },
      windDirection: {
        noaa: 2.5,
        sg: 2.5
      },
      windSpeed: {
        noaa: 5.21,
        sg: 5.21
      }
    }, {
      time: '2021-05-03T23:00:00+00:00',
      waterTemperature: {
        meto: 13.9,
        noaa: 8.36,
        sg: 13.9
      },
      waveDirection: {
        noaa: 271.95,
        sg: 271.95
      },
      waveHeight: {
        noaa: 1.35,
        sg: 1.35
      },
      wavePeriod: {
        noaa: 12.65,
        sg: 12.65
      },
      windDirection: {
        noaa: 12.15,
        sg: 12.15
      },
      windSpeed: {
        noaa: 4.69,
        sg: 4.69
      }
    }, {
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
    }]
  }
  const currentSurfData = await response.hours.find(h => h.time.includes(currentISODate))
  return displayStormglassData(currentSurfData)
}

export default getStormglassData

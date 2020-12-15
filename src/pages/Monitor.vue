<template>
  <q-page class="q-pa-md">
    <q-toolbar class="q-py-md">
      <div class="font-36 text-white">Monitor - Acceleration</div>
      <q-space></q-space>
      <q-select
        dense=""
        dark=""
        style="width:100px"
        :options="['B1-M01']"
        v-model="monitorSelected"
      ></q-select>
      <div style="width:20px"></div>
      <q-select
        dense=""
        dark=""
        style="width:150px"
        :options="['Accelerator #1']"
        v-model="sensorSelected"
      ></q-select>
    </q-toolbar>
    <q-separator color="white"></q-separator>

    <div class="row q-pt-lg">
      <div class="" style="width:350px">
        <div class="q-pa-md ">
          <div>
            <q-img src="../../public/images/bridge1.png"></q-img>
          </div>

          <div class=" q-pt-md ">
            <div class="flex  bg-grey-5 q-pa-sm">
              <div style="width:40%">Date</div>
              <div style="width:20%" align="center">Acc-x</div>
              <div style="width:20%" align="center">Acc-y</div>
              <div style="width:20%" align="center">Acc-z</div>
            </div>

            <div
              class="flex   q-pa-sm"
              v-for="(item, index) in sensorData"
              :key="index"
              :class="index % 2 == 0 ? 'bg-grey-2' : 'bg-grey-4'"
            >
              <div style="width:40%">25/11/2563</div>
              <div style="width:20%" align="center">2.83</div>
              <div style="width:20%" align="center">2.54</div>
              <div style="width:20%" align="center">0.64</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col ">
        <div class="q-pa-md ">
          <div id="container1"></div>
        </div>
        <div class="q-px-md">
          <div class="row justify-between">
            <div
              class="bg-white font-16 q-py-xs "
              style="width:200px;border-radius:10px"
              align="center"
            >
              25/12/2560 6:00
              <br />
              25/12/2560 6:00
            </div>
            <div>
              <div
                class="bg-white font-18 full-height row items-center justify-center "
                style="width:80px;border-radius:10px"
                align="center"
              >
                Acc- X
              </div>
            </div>
            <div>
              <div
                class="bg-white font-18 full-height row items-center justify-center "
                style="width:80px;border-radius:10px"
                align="center"
              >
                Acc- X
              </div>
            </div>
            <div>
              <div
                class="bg-white font-18 full-height row items-center justify-center "
                style="width:80px;border-radius:10px"
                align="center"
              >
                Acc- Z
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      monitorSelected: "B1-M01",
      sensorSelected: "Accelerator #1",
      sensorData: [
        {
          date: "25/11/2563",
          accx: 2.83,
          accy: 2.54,
          accz: 0.64
        },
        {
          date: "26/11/2563",
          accx: 2.93,
          accy: 2.14,
          accz: 0.94
        },
        {
          date: "25/11/2563",
          accx: 2.83,
          accy: 2.54,
          accz: 0.64
        },
        {
          date: "26/11/2563",
          accx: 2.93,
          accy: 2.14,
          accz: 0.94
        },
        {
          date: "26/11/2563",
          accx: 2.93,
          accy: 2.14,
          accz: 0.94
        },
        {
          date: "26/11/2563",
          accx: 2.93,
          accy: 2.14,
          accz: 0.94
        }
      ]
    };
  },
  methods: {
    renderAccelerator() {
      Highcharts.chart("container1", {
        chart: {
          height: "78%",
          type: "spline",
          animation: Highcharts.svg, // don't animate in old IE
          marginRight: 10,
          events: {
            load: function() {
              // set up the updating of the chart each second
              var series = this.series[0];
              setInterval(function() {
                var x = new Date().getTime(), // current time
                  y = Math.random();
                series.addPoint([x, y], true, true);
              }, 1000);
            }
          }
        },

        time: {
          useUTC: false
        },

        title: {
          text: "Live random data"
        },

        accessibility: {
          announceNewData: {
            enabled: true,
            minAnnounceInterval: 15000,
            announcementFormatter: function(allSeries, newSeries, newPoint) {
              if (newPoint) {
                return "New point added. Value: " + newPoint.y;
              }
              return false;
            }
          }
        },

        xAxis: {
          type: "datetime",
          tickPixelInterval: 150
        },

        yAxis: {
          title: {
            text: "Value"
          },
          plotLines: [
            {
              value: 0,
              width: 1,
              color: "#808080"
            }
          ]
        },

        tooltip: {
          headerFormat: "<b>{series.name}</b><br/>",
          pointFormat: "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}"
        },

        legend: {
          enabled: false
        },

        exporting: {
          enabled: false
        },

        series: [
          {
            name: "Random data",
            data: (function() {
              // generate an array of random data
              var data = [],
                time = new Date().getTime(),
                i;

              for (i = -19; i <= 0; i += 1) {
                data.push({
                  x: time + i * 1000,
                  y: Math.random()
                });
              }
              return data;
            })()
          }
        ]
      });
    }
  },
  mounted() {
    this.renderAccelerator();
  }
};
</script>

<style lang="scss" scoped></style>

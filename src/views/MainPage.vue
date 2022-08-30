<template>
  <div :class="getClasses">
    <div class="main-page__content">
      <LabelStyled :text="getTemp"
                   :fontSize="64"
                   :fontWeight="400"
                   :fontLineHeight="100"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useWeatherCurrentStore from '@/store/weather/current/store';
import {computed} from 'vue';
import LabelStyled from '@/app_core/unit/components_styled/LabelStyled.vue';


const currentWeatherModule = useWeatherCurrentStore();

const getTemp = computed(() => Math.floor(currentWeatherModule.getCurrentWeatherData?.main.temp ?? 0));

const getHour = computed(() => {
  return new Date().getHours();
});

const getClasses = computed(() => {
  return [
      'main-page',
      `main-page__g${getHour.value}`,
  ]
})

</script>

<style lang="scss">
.main-page {
  width: 100%;
  height: 100%;
  transition: all 1s ease;

  &__g0{
    background: #012459;
    background: -moz-linear-gradient(top,  #012459 0%, #001322 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#012459), color-stop(100%,#001322));
    background: -webkit-linear-gradient(top,  #012459 0%,#001322 100%);
    background: -o-linear-gradient(top,  #012459 0%,#001322 100%);
    background: -ms-linear-gradient(top,  #012459 0%,#001322 100%);
    background: linear-gradient(to bottom,  #012459 0%,#001322 100%);

  }
  .g1{
    background: #003972;
    background: -moz-linear-gradient(top,  #003972 0%, #001322 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#003972), color-stop(100%,#001322));
    background: -webkit-linear-gradient(top,  #003972 0%,#001322 100%);
    background: -o-linear-gradient(top,  #003972 0%,#001322 100%);
    background: -ms-linear-gradient(top,  #003972 0%,#001322 100%);
    background: linear-gradient(to bottom,  #003972 0%,#001322 100%);
  }
  &__g2{
    background: #003972;
    background: -moz-linear-gradient(top,  #003972 0%, #001322 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#003972), color-stop(100%,#001322));
    background: -webkit-linear-gradient(top,  #003972 0%,#001322 100%);
    background: -o-linear-gradient(top,  #003972 0%,#001322 100%);
    background: -ms-linear-gradient(top,  #003972 0%,#001322 100%);
    background: linear-gradient(to bottom,  #003972 0%,#001322 100%);
  }
  &__g3{
    background: #004372;
    background: -moz-linear-gradient(top,  #004372 0%, #00182b 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#004372), color-stop(100%,#00182b));
    background: -webkit-linear-gradient(top,  #004372 0%,#00182b 100%);
    background: -o-linear-gradient(top,  #004372 0%,#00182b 100%);
    background: -ms-linear-gradient(top,  #004372 0%,#00182b 100%);
    background: linear-gradient(to bottom,  #004372 0%,#00182b 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#004372', endColorstr='#00182b',GradientType=0 );

  }
  &__g4{
    background: #004372;
    background: -moz-linear-gradient(top,  #004372 0%, #011d34 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#004372), color-stop(100%,#011d34));
    background: -webkit-linear-gradient(top,  #004372 0%,#011d34 100%);
    background: -o-linear-gradient(top,  #004372 0%,#011d34 100%);
    background: -ms-linear-gradient(top,  #004372 0%,#011d34 100%);
    background: linear-gradient(to bottom,  #004372 0%,#011d34 100%);

  }
  &__g5{
    background: #016792;
    background: -moz-linear-gradient(top,  #016792 0%, #00182b 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#016792), color-stop(100%,#00182b));
    background: -webkit-linear-gradient(top,  #016792 0%,#00182b 100%);
    background: -o-linear-gradient(top,  #016792 0%,#00182b 100%);
    background: -ms-linear-gradient(top,  #016792 0%,#00182b 100%);
    background: linear-gradient(to bottom,  #016792 0%,#00182b 100%);

  }
  &__g6{
    background: #07729f;
    background: -moz-linear-gradient(top,  #07729f 0%, #042c47 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#07729f), color-stop(100%,#042c47));
    background: -webkit-linear-gradient(top,  #07729f 0%,#042c47 100%);
    background: -o-linear-gradient(top,  #07729f 0%,#042c47 100%);
    background: -ms-linear-gradient(top,  #07729f 0%,#042c47 100%);
    background: linear-gradient(to bottom,  #07729f 0%,#042c47 100%);

  }
  &__g7{
    background: #12a1c0;
    background: -moz-linear-gradient(top,  #12a1c0 0%, #07506e 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#12a1c0), color-stop(100%,#07506e));
    background: -webkit-linear-gradient(top,  #12a1c0 0%,#07506e 100%);
    background: -o-linear-gradient(top,  #12a1c0 0%,#07506e 100%);
    background: -ms-linear-gradient(top,  #12a1c0 0%,#07506e 100%);
    background: linear-gradient(to bottom,  #12a1c0 0%,#07506e 100%);

  }
  &__g8{
    background: #74d4cc;
    background: -moz-linear-gradient(top,  #74d4cc 0%, #1386a6 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#74d4cc), color-stop(100%,#1386a6));
    background: -webkit-linear-gradient(top,  #74d4cc 0%,#1386a6 100%);
    background: -o-linear-gradient(top,  #74d4cc 0%,#1386a6 100%);
    background: -ms-linear-gradient(top,  #74d4cc 0%,#1386a6 100%);
    background: linear-gradient(to bottom,  #74d4cc 0%,#1386a6 100%);

  }
  &__g9{
    background: #efeebc;
    background: -moz-linear-gradient(top,  #efeebc 0%, #61d0cf 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#efeebc), color-stop(100%,#61d0cf));
    background: -webkit-linear-gradient(top,  #efeebc 0%,#61d0cf 100%);
    background: -o-linear-gradient(top,  #efeebc 0%,#61d0cf 100%);
    background: -ms-linear-gradient(top,  #efeebc 0%,#61d0cf 100%);
    background: linear-gradient(to bottom,  #efeebc 0%,#61d0cf 100%);

  }
  &__g10{
    background: #fee154;
    background: -moz-linear-gradient(top,  #fee154 0%, #a3dec6 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fee154), color-stop(100%,#a3dec6));
    background: -webkit-linear-gradient(top,  #fee154 0%,#a3dec6 100%);
    background: -o-linear-gradient(top,  #fee154 0%,#a3dec6 100%);
    background: -ms-linear-gradient(top,  #fee154 0%,#a3dec6 100%);
    background: linear-gradient(to bottom,  #fee154 0%,#a3dec6 100%);

  }
  &__g11{
    background: #fdc352;
    background: -moz-linear-gradient(top,  #fdc352 0%, #e8ed92 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fdc352), color-stop(100%,#e8ed92));
    background: -webkit-linear-gradient(top,  #fdc352 0%,#e8ed92 100%);
    background: -o-linear-gradient(top,  #fdc352 0%,#e8ed92 100%);
    background: -ms-linear-gradient(top,  #fdc352 0%,#e8ed92 100%);
    background: linear-gradient(to bottom,  #fdc352 0%,#e8ed92 100%);

  }
  &__g12{
    background: #ffac6f;
    background: -moz-linear-gradient(top,  #ffac6f 0%, #ffe467 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffac6f), color-stop(100%,#ffe467));
    background: -webkit-linear-gradient(top,  #ffac6f 0%,#ffe467 100%);
    background: -o-linear-gradient(top,  #ffac6f 0%,#ffe467 100%);
    background: -ms-linear-gradient(top,  #ffac6f 0%,#ffe467 100%);
    background: linear-gradient(to bottom,  #ffac6f 0%,#ffe467 100%);

  }
  &__g13{
    background: #fda65a;
    background: -moz-linear-gradient(top,  #fda65a 0%, #ffe467 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fda65a), color-stop(100%,#ffe467));
    background: -webkit-linear-gradient(top,  #fda65a 0%,#ffe467 100%);
    background: -o-linear-gradient(top,  #fda65a 0%,#ffe467 100%);
    background: -ms-linear-gradient(top,  #fda65a 0%,#ffe467 100%);
    background: linear-gradient(to bottom,  #fda65a 0%,#ffe467 100%);

  }
  &__g14{
    background: #fd9e58;
    background: -moz-linear-gradient(top,  #fd9e58 0%, #ffe467 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fd9e58), color-stop(100%,#ffe467));
    background: -webkit-linear-gradient(top,  #fd9e58 0%,#ffe467 100%);
    background: -o-linear-gradient(top,  #fd9e58 0%,#ffe467 100%);
    background: -ms-linear-gradient(top,  #fd9e58 0%,#ffe467 100%);
    background: linear-gradient(to bottom,  #fd9e58 0%,#ffe467 100%);

  }
  &__g15{
    background: #f18448;
    background: -moz-linear-gradient(top,  #f18448 0%, #ffd364 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f18448), color-stop(100%,#ffd364));
    background: -webkit-linear-gradient(top,  #f18448 0%,#ffd364 100%);
    background: -o-linear-gradient(top,  #f18448 0%,#ffd364 100%);
    background: -ms-linear-gradient(top,  #f18448 0%,#ffd364 100%);
    background: linear-gradient(to bottom,  #f18448 0%,#ffd364 100%);

  }
  &__g16{
    background: #f06b7e;
    background: -moz-linear-gradient(top,  #f06b7e 0%, #f9a856 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f06b7e), color-stop(100%,#f9a856));
    background: -webkit-linear-gradient(top,  #f06b7e 0%,#f9a856 100%);
    background: -o-linear-gradient(top,  #f06b7e 0%,#f9a856 100%);
    background: -ms-linear-gradient(top,  #f06b7e 0%,#f9a856 100%);
    background: linear-gradient(to bottom,  #f06b7e 0%,#f9a856 100%);

  }
  &__g17{
    background: #ca5a92;
    background: -moz-linear-gradient(top,  #ca5a92 0%, #f4896b 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ca5a92), color-stop(100%,#f4896b));
    background: -webkit-linear-gradient(top,  #ca5a92 0%,#f4896b 100%);
    background: -o-linear-gradient(top,  #ca5a92 0%,#f4896b 100%);
    background: -ms-linear-gradient(top,  #ca5a92 0%,#f4896b 100%);
    background: linear-gradient(to bottom,  #ca5a92 0%,#f4896b 100%);

  }
  &__g18{
    background: #5b2c83;
    background: -moz-linear-gradient(top,  #5b2c83 0%, #d1628b 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#5b2c83), color-stop(100%,#d1628b));
    background: -webkit-linear-gradient(top,  #5b2c83 0%,#d1628b 100%);
    background: -o-linear-gradient(top,  #5b2c83 0%,#d1628b 100%);
    background: -ms-linear-gradient(top,  #5b2c83 0%,#d1628b 100%);
    background: linear-gradient(to bottom,  #5b2c83 0%,#d1628b 100%);

  }
  &__g19{
    background: #371a79;
    background: -moz-linear-gradient(top,  #371a79 0%, #713684 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#371a79), color-stop(100%,#713684));
    background: -webkit-linear-gradient(top,  #371a79 0%,#713684 100%);
    background: -o-linear-gradient(top,  #371a79 0%,#713684 100%);
    background: -ms-linear-gradient(top,  #371a79 0%,#713684 100%);
    background: linear-gradient(to bottom,  #371a79 0%,#713684 100%);

  }
  &__g20{
    background: #28166b;
    background: -moz-linear-gradient(top,  #28166b 0%, #45217c 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#28166b), color-stop(100%,#45217c));
    background: -webkit-linear-gradient(top,  #28166b 0%,#45217c 100%);
    background: -o-linear-gradient(top,  #28166b 0%,#45217c 100%);
    background: -ms-linear-gradient(top,  #28166b 0%,#45217c 100%);
    background: linear-gradient(to bottom,  #28166b 0%,#45217c 100%);

  }
  &__g21{
    background: #192861;
    background: -moz-linear-gradient(top,  #192861 0%, #372074 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#192861), color-stop(100%,#372074));
    background: -webkit-linear-gradient(top,  #192861 0%,#372074 100%);
    background: -o-linear-gradient(top,  #192861 0%,#372074 100%);
    background: -ms-linear-gradient(top,  #192861 0%,#372074 100%);
    background: linear-gradient(to bottom,  #192861 0%,#372074 100%);

  }
  &__g22{
    background: #040b3c;
    background: -moz-linear-gradient(top,  #040b3c 0%, #233072 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#040b3c), color-stop(100%,#233072));
    background: -webkit-linear-gradient(top,  #040b3c 0%,#233072 100%);
    background: -o-linear-gradient(top,  #040b3c 0%,#233072 100%);
    background: -ms-linear-gradient(top,  #040b3c 0%,#233072 100%);
    background: linear-gradient(to bottom,  #040b3c 0%,#233072 100%);

  }
  &__g23{
    background: #040b3c;
    background: -moz-linear-gradient(top,  #040b3c 0%, #012459 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#040b3c), color-stop(100%,#012459));
    background: -webkit-linear-gradient(top,  #040b3c 0%,#012459 100%);
    background: -o-linear-gradient(top,  #040b3c 0%,#012459 100%);
    background: -ms-linear-gradient(top,  #040b3c 0%,#012459 100%);
    background: linear-gradient(to bottom,  #040b3c 0%,#012459 100%);

  }
}
</style>

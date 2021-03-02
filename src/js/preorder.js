const app = new Vue({
  el: '#app',
  data: {
    selected: {
      bridge: {
        name: 'Бридж',
        nameVal: "",
        img: "",
        price: 0
      },
      dots: {
        name: 'Маркеры',
        nameVal: "",
        img: "",
        price: 0
      },
      fretboard: {
        name: 'Гриф',
        nameVal: "",
        img: "",
        price: 0
      },
      pickups: {
        name: 'Звукосниматели',
        nameVal: "",
        img: "",
        price: 0
      },
      pickgard: {
        name: 'Пикгард',
        nameVal: "",
        img: "",
        price: 0
      },
      top: {
        name: 'Топ',
        nameVal: "",
        img: "",
        price: 0
      },
      body: {
        name: 'Цвет корпуса',
        nameVal: "",
        img: "",
        price: 0
      }
    },
    totalPrice: "",
    readyToOrder: false,
    readyToOrderClass: '',
    dollarCourse: 80,

    electronic: {},
    bridges: [
      {
        nameVal: 'Tremolo Gotoh 510T',
        price: 500,
        img: 'img/preorder/s-model/bridge/tremolo-510.png'
      },
      {
        nameVal: 'Hardtail Hipshot',
        price: 600,
        img: 'img/preorder/s-model/bridge/hardtail-hipshot.png'
      },
      {
        nameVal: 'FR Non-Fine Tuner Tremolo',
        price: 700,
        img: 'img/preorder/s-model/bridge/tremolo-fr-non-fine-tuner.png'
      }
    ],
    dots: [
      {
        nameVal: 'Белый',
        price: 10,
        img: 'img/preorder/s-model/dots/6mm-white.png'
      },
      {
        nameVal: 'Черный',
        price: 10,
        img: 'img/preorder/s-model/dots/6mm-black.png'
      }
    ],
    fretboards: [
      {
        nameVal: 'Без накладки материал грифа клен',
        price: 100,
        img: 'img/preorder/s-model/fretboard/maple.png'
      },
      {
        nameVal: 'Без накладки, материал грифа термостабилизированный клен',
        price: 200,
        img: 'img/preorder/s-model/fretboard/termo-clen.png'
      },
      {
        nameVal: 'Накладка палисандр, материал грифа термостабилизорованный клен',
        price: 300,
        img: 'img/preorder/s-model/fretboard/palisandr.png'
      }
    ],
    pickups: {
      withPickgard: [
        {
          nameVal: 'HH',
          price: 500,
          img: 'img/preorder/s-model/pickups-pickgard/hh.png'
        },
        {
          nameVal: 'HSS',
          price: 600,
          img: 'img/preorder/s-model/pickups-pickgard/hss.png'
        },
        {
          nameVal: 'HSH',
          price: 700,
          img: 'img/preorder/s-model/pickups-pickgard/hsh.png'
        }
      ],
      noPickgard: [
        {
          nameVal: 'HH',
          price: 500,
          img: 'img/preorder/s-model/pickups/hh.png'
        },
        {
          nameVal: 'HSS',
          price: 600,
          img: 'img/preorder/s-model/pickups/hss.png'
        },
        {
          nameVal: 'HSH',
          price: 700,
          img: 'img/preorder/s-model/pickups/hsh.png'
        }
      ]
    },
    pickgards: [
      {
        nameVal: 'Без пикгарда',
        price: 0,
        img: ''
      },
      {
        nameVal: 'Белый перламутр',
        price: 10,
        img: 'img/preorder/s-model/pickgard/white-pearl.png'
      },
      {
        nameVal: 'Белый',
        price: 20,
        img: 'img/preorder/s-model/pickgard/white.png'
      },
      {
        nameVal: 'Черный',
        price: 30,
        img: 'img/preorder/s-model/pickgard/black.png'
      }
    ],
    tops: [
      {
        nameVal: 'Без топа',
        price: 0,
        img: ''
      },
      {
        nameVal: 'Клен пламенный',
        price: 200,
        img: 'img/preorder/s-model/top/top.png'
      }
    ],
    bodies: {
      mate: [
        {
          nameVal: 'Матовый черный',
          price: 100,
          img: 'img/preorder/s-model/body/mate-black.png',
          roundImg: 'img/preorder/colors/mate-black.png'
        },
        {
          nameVal: 'Матовый голубой',
          price: 100,
          img: 'img/preorder/s-model/body/mate-blue.png',
          roundImg: 'img/preorder/colors/mate-blue.png'
        },
        {
          nameVal: 'Матовый кремовый',
          price: 100,
          img: 'img/preorder/s-model/body/mate-cream.png',
          roundImg: 'img/preorder/colors/mate-cream.png'
        },
        {
          nameVal: 'Матовый розовый',
          price: 100,
          img: 'img/preorder/s-model/body/mate-pink.png',
          roundImg: 'img/preorder/colors/mate-pink.png'
        },
      ],
      perl: [
        {
          nameVal: 'Перламутр черный',
          price: 200,
          img: 'img/preorder/s-model/body/perl-black.png',
          roundImg: 'img/preorder/colors/perl-black.png'
        }
      ]
    },
  },

  methods: {
    setBridge() {
      let obj = _.find(this.bridges, {'nameVal': this.selected.bridge.nameVal})
      this.selected.bridge.img = obj.img;
      this.selected.bridge.price = obj.price;
    },
    setDots() {
      let obj = _.find(this.dots, {'nameVal': this.selected.dots.nameVal})
      this.selected.dots.img = obj.img;
      this.selected.dots.price = obj.price;
    },
    setFretboard() {
      let obj = _.find(this.fretboards, {'nameVal': this.selected.fretboard.nameVal})
      this.selected.fretboard.img = obj.img;
      this.selected.fretboard.price = obj.price;
    },
    setPickups() {
      // если пикгарда нету то устанавливаем звукосниматели без пикгарда
      if (this.selected.pickgard.nameVal == "Без пикгарда") {
        let obj = _.find(this.pickups.noPickgard, {'nameVal': this.selected.pickups.nameVal})
        this.selected.pickups.img = obj.img;
        this.selected.pickups.price = obj.price;
      } else {
        // иначе устанавливаем звукосниматели с пикгардом
        let obj = _.find(this.pickups.withPickgard, {'nameVal': this.selected.pickups.nameVal})
        this.selected.pickups.img = obj.img;
        this.selected.pickups.price = obj.price;
      }
    },
    setPickgard() {
      let obj = _.find(this.pickgards, {'nameVal': this.selected.pickgard.nameVal})
      this.selected.pickgard.img = obj.img;
      this.selected.pickgard.price = obj.price;
      // при изменениее пикгарда изменяем звукосниматели
      this.setPickups();
    },
    setTop() {
      let obj = _.find(this.tops, {'nameVal': this.selected.top.nameVal})
      this.selected.top.img = obj.img;
      this.selected.top.price = obj.price;

      if (this.selected.top.nameVal != "Без топа") {
        this.selected.body.nameVal = "Без покраски";
        this.selected.body.price = 0;
      } else {
        this.selected.body.nameVal = this.bodies.mate[0].nameVal;
        this.selected.body.price = this.bodies.mate[0].price;
        this.selected.body.img = this.bodies.mate[0].img;
      }
    },
    setBodyMate() {
      let obj = _.find(this.bodies.mate, {'nameVal': this.selected.body.nameVal})
      this.selected.body.img = obj.img;
      this.selected.body.price = obj.price;
    },
    setBodyPerl() {
      let obj = _.find(this.bodies.perl, {'nameVal': this.selected.body.nameVal})
      this.selected.body.img = obj.img;
      this.selected.body.price = obj.price;
    },

    changeOrderReady() {
      this.readyToOrder = !this.readyToOrder;
      this.readyToOrderClass = this.readyToOrder ? "order-ready" : "order-ready-no";
    }
  },

  watch: {

    selected: {
      // отслеживаем изменения выбранных опций и считаем цену
      handler: function () {
        let prices = _.map(this.selected, 'price');

        let totalPrice = _.reduce(prices, (acc, item) => {
          return acc + item;
        }, 0);

        // если версия сайта русская то умножаем на курс доллара и форматируем цену
        this.totalPrice = (totalPrice * this.dollarCourse).toLocaleString('ru-RU');
      },
      deep: true
    }
  }

});

const setDefaultBridge = () => {
  app.selected.bridge.nameVal = app.bridges[0].nameVal;
  app.selected.bridge.price = app.bridges[0].price;
  app.selected.bridge.img = app.bridges[0].img;
};

const setDefaultDots = () => {
  app.selected.dots.nameVal = app.dots[0].nameVal;
  app.selected.dots.price = app.dots[0].price;
  app.selected.dots.img = app.dots[0].img;
};

const setDefaultFretboard = () => {
  app.selected.fretboard.nameVal = app.fretboards[0].nameVal;
  app.selected.fretboard.price = app.fretboards[0].price;
  app.selected.fretboard.img = app.fretboards[0].img;
};

const setDefaultPickups = () => {
  app.selected.pickups.nameVal = app.pickups.noPickgard[0].nameVal;
  app.selected.pickups.price = app.pickups.noPickgard[0].price;
  app.selected.pickups.img = app.pickups.noPickgard[0].img;
};

const setDefaultPickgard= () => {
  app.selected.pickgard.nameVal = app.pickgards[0].nameVal;
  app.selected.pickgard.price = app.pickgards[0].price;
  app.selected.pickgard.img = app.pickgards[0].img;
};

const setDefaultTop = () => {
  app.selected.top.nameVal = app.tops[0].nameVal;
  app.selected.top.price = app.tops[0].price;
  app.selected.top.img = app.tops[0].img;
};

const setDefaultBody = () => {
  app.selected.body.nameVal = app.bodies.mate[0].nameVal;
  app.selected.body.price = app.bodies.mate[0].price;
  app.selected.body.img = app.bodies.mate[0].img;
};



setDefaultBridge();
setDefaultDots();
setDefaultFretboard();
setDefaultPickups();
setDefaultPickgard();
setDefaultTop();
setDefaultBody();
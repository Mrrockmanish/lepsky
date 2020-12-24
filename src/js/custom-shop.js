$(document).ready(function () {

  // отключаем вариант
  const disable = (elementSelector) => {
    $(elementSelector).closest('label').addClass('disabled');
    $(elementSelector).attr('disabled', true);
    $(elementSelector).prop('checked', false);
  };

  // включаем вариант
  const enable = (elementSelector) => {
    $(elementSelector).closest('label').removeClass('disabled');
    $(elementSelector).attr('disabled', false);
  };

  // выбираем вариант
  const select = (elementSelector) => {
    $(elementSelector).prop('checked', true);
  };



  // зависимости выбранных вариантов
  const dependence = () => {
    const item = '.custom-item';

    enable(`.check`);

    // 1. Если выбрал жареный клен то сквозной гриф не доступен. Соответственно если выбран сквозной гриф то жаренный клен не доступен)

    if ($(item).find(`[name="bracing"]:checked`).val() === 'Сквозной') {
      disable(`${item} [value="Клен жареный"]`)
    }

    if ($(item).find(`[name="material"]:checked`).val() === 'Клен жареный') {
      disable(`${item} [value="Сквозной"]`);
    }

    // 2. Накладка. Если выбран материал грифа клен\жареный клен, то пункт “без накладки активен” в остальных случаях не активен

    if ($(item).find(`[name="material"]:checked`).val() === 'Клен жареный' ||
      $(item).find(`[name="material"]:checked`).val() === 'Клен цельный') {
      enable(`${item} [value="Без накладки"]`)
    } else {
      disable(`${item} [value="Без накладки"]`)
    }
    // Мензура. Если выбрана мультимензура  фикс бридж

    if ($(item).find(`[name="beaker"]:checked`).val() === 'Мультимензура 25,5 - 26,5') {
      disable(`${item} [value="Floyd Rose Gotoh 1996t"]`);
      disable(`${item} [value="Original Floyd Rose"]`);
      disable(`${item} [value="Tremolo Gotoh 510TS"]`);
      disable(`${item} [value="Tremolo Gotoh 510TS подвешенное"]`);
    }

    // Радиус накладки. Если выбран 12” то доступны все бриджи. Если выбрал 16” то OFR не доступен. Если выбран Мультирадиус, (OFR не доступен)

    if ($(item).find(`[name="radius"]:checked`).val() === '16' ||
      $(item).find(`[name="radius"]:checked`).val() === 'Мультирадиус 25,5 - 26,5') {
      disable(`${item} [value="Original Floyd Rose"]`)
    }


    // 4. Окантовка. Если выбран пластик, то маркеры боковой разметки (перл, клен, эбен не активны)

    if ($(item).find(`[name="neckBanding"]:checked`).val() === 'Пластиковая накладка') {
      disable(`${item} [value="Блоки перламутр"]`);
      disable(`${item} [value="Блоки клен"]`);
      disable(`${item} [value="Блоки эбен"]`);
    }

    // Покрытие. Если топ не выбран, то “Глянец топ” не доступен

    if ($(item).find(`[name="topMaterial"]:checked`).val() === 'Без топа') {
      disable(`${item} [value="Глянец топ"]`);
      disable(`${item} [value="Тонкое матовое (задняя сторона)"]`);
    }

    // Тип бриджа. Если выбрал Floyd Rose, то порожек Top Lock
    if ($(item).find(`[name="bridge"]:checked`).val() === 'Original Floyd Rose') {
      select(`${item} [value="Top Lock"]`);
    }


    if ($(item).find(`[name="topMaterial"]:checked`).val() === 'Клен простой книжка 4А' ||
      $(item).find(`[name="topMaterial"]:checked`).val() === 'Клен пламенный книжка 5А' ||
      $(item).find(`[name="topMaterial"]:checked`).val() === 'Клен облачко книжка 5А' ||
      $(item).find(`[name="topMaterial"]:checked`).val() === 'Клен пламенный цельный 4А' ||
      $(item).find(`[name="topMaterial"]:checked`).val() === 'Клен облачко цельный 4А') {
      enable(`${item} [value="Натуральный кант"]`);
    } else {
      disable(`${item} [value="Натуральный кант"]`);
    }

    // Если выбраны HSH HSS SSS то переключатель на 5 позиций
    // Если выбран HS то переключатель на 4 позиции
    // Если выбран НН то 3 или 5 позиций

    // if ($(item).find(`[name="pickup-type"]:checked`).val() === 'HSH' ||
    //   $(item).find(`[name="pickup-type"]:checked`).val() === 'HSS' ||
    //   $(item).find(`[name="pickup-type"]:checked`).val() === 'SSS') {
    //   select(`${item} [value="Top Lock"]`);
    // }

  };

  // отображаем выбранные варианты на странице
  const displayProps = (propsArr) => {
    $('.custom-calc-panel__props').html('');
    propsArr.forEach(({propName, propVal, propId}) => {
      $('.custom-calc-panel__props').append(`
        <div class="w-full sm:w-1/2 lg:w-1/3 xxl:w-full px-4 mt-4">
            ${propName}: ${propVal}
        </div>
      `);
    });
  };

  const pickups = {
    'ARB': {
      'HH': 0,
      'HSS': 96,
      'SSS': 49,
      'HSH': 78,
      'HS': 22,
      'individual': 0
    },
    'Fokin': {
      'HH': 0,
      'HSS': 23,
      'SSS': 2,
      'HSH': 37,
      'HS': 14,
      'individual': 0
    },
    'Seymour Duncan': {
      'HH': 73,
      'HSS': 101,
      'SSS': 70,
      'HSH': 132,
      'HS': 42,
      'individual': 0
    },
    'Dimarzio': {
      'HH': 73,
      'HSS': 101,
      'SSS': 70,
      'HSH': 132,
      'HS': 42,
      'individual': 0
    },
    'Bare Knuckle': {
      'HH': 103,
      'HSS': 133,
      'SSS': 86,
      'HSH': 180,
      'HS': 69,
      'individual': 0
    }
  };


  // считаем стоимость звукоснимателей
  const calcPickups = () => {
    const item = '.custom-item';
    let  pickupsSum = 0;

    const brand = $(item).find(`[name="pickup-brand"]:checked`).val();
    const type = $(item).find(`[name="pickup-type"]:checked`).val();

    if (brand && type) {
      pickupsSum = pickups[brand][type];
    }

    return pickupsSum;
  };


  // считаем окончательную цену
  const makePrice = (propsArr) => {

    const basePrice = 1000;
    const dollarCourse = 75;

    const addPickupsPrice = calcPickups();

    // фильтруем убирая конфигурацию звукоснимателей и бренды
    const filtered = propsArr.filter(({propId}) => propId !== 'pickup-brand' && propId !== 'pickup-type');

    const calcFiltered = filtered.reduce((acc, {price}) => {
      return acc + price;
    }, basePrice + addPickupsPrice);

    const totalPrice = calcFiltered * dollarCourse;

    // отображаем цену на странице
    $('.custom-calc-panel').find('.total-price').text(totalPrice);
  };

  // главная функция
  const customShop = () => {
    const items = [];

    // запускаем зависимости
    dependence();

    // получаем объект выбранных вариантов
    $('[data-item]').each(function () {
      const item = {
        propId: $(this).data('item'),
        propName: (() => $(this).find('.custom-item__caption').text())(),
        propVal: (() => $(this).find('.check:checked').val() ? $(this).find('.check:checked').val().toLowerCase() : '-')(),
        price: (() => $(this).find('.check:checked').data('price') ? $(this).find('.check:checked').data('price') : 0)()
      };
      items.push(item);
    });

    // отображаем цену на странице
    makePrice(items);

    // считаем и отображаем на странице
    displayProps(items);
  };

  customShop();

  $('[data-item]').on('change', '.check', customShop);


});
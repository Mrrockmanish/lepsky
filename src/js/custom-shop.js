$(document).ready(function () {
  // базовая цена
  const basePrice = 1000;
  // курс доллара
  const dollarCourse = 1;

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
    let bracing = $('[name="bracing"]:checked').val(); // тип крепления
    let material = $('[name="material"]:checked').val(); // материал грифа
    let beaker = $('[name="beaker"]:checked').val(); // мензура
    let radius = $('[name="radius"]:checked').val(); // радиус накладки
    let neckBanding = $('[name="neckBanding"]:checked').val(); // окантовка грифа
    let topMaterial = $('[name="topMaterial"]:checked').val(); // материал топа
    let bridgeType = $('[name="bridge-type"]:checked').val(); // тип бриджа
    let pickupType = $('[name="pickup-type"]:checked').val(); // конфигурация звукоснимателей
    let pickgard = $('[name="pickgard"]:checked').val(); // пикгард

    enable(`.check`);

    // Если выбрал жареный клен то сквозной гриф не доступен.
    if (material === 'Клен термостабилизированный (Roasted)') {
      disable('[data-item="bracing"] [value="Сквозной"]');
    }
    // Соответственно если выбран сквозной гриф то жаренный клен не доступен)
    if (bracing === 'Сквозной') {
      disable('[data-item="material"] [value="Клен термостабилизированный (Roasted)"]');
    }

    // Накладка. Если выбран материал грифа клен\жареный клен, то пункт “без накладки активен” в остальных случаях не активен
    if (material === 'Клен термостабилизированный (Roasted)') {
      enable('[data-item="facingMaterial"] [value="Без накладки"]');
    } else {
      disable('[data-item="facingMaterial"] [value="Без накладки"]');
    }


    // Мензура. Если выбрана мультимензура  фикс бридж
    if (beaker === 'Мультимензура 25,5" - 27"') {
      disable('[data-item="bridge-type"] [value="Tremolo 1996T"]');
      disable('[data-item="bridge-type"] [value="Original Floyd Rose"]');
      disable('[data-item="bridge-type"] [value="Tremolo Gotoh 510TS на корпусе"]');
      disable('[data-item="bridge-type"] [value="Tremolo Gotoh 510TS (recessed)"]');
    }

    // Радиус накладки. Если выбран 12” то доступны все бриджи. Если выбрал 16” то OFR не доступен. Если выбран Мультирадиус, (OFR не доступен)
    if (radius === '16"' || radius === 'Мультирадиус 12" - 16"') {
      disable('[data-item="bridge-type"] [value="Original Floyd Rose"]')
      disable('[data-item="bridge-type"] [value="Tremolo 1996T"]')
    }
    // Non-Fine Tuner Tremolo System доступен только у радиуса 16
    if (radius === '12"' || radius === 'Мультирадиус 12" - 16"') {
      disable('[data-item="bridge-type"] [value="Non-Fine Tuner Tremolo System"]')
    }

    // 4. Окантовка. Если выбран пластик, то маркеры боковой разметки (перл, клен, эбен не активны)
    if (neckBanding === 'Пластик по накладке') {
      disable('[data-item="sideMarkers"] [value="Блоки перламутр"]');
      disable('[data-item="sideMarkers"] [value="Блоки клен"]');
      disable('[data-item="sideMarkers"] [value="Блоки эбен"]');
    }

    // Покрытие. Если топ не выбран, то “Глянец топ” не доступен
    if (topMaterial === 'Без топа' || topMaterial === 'Карвдека без топа') {
      disable('[data-item="cover"] [value="Топ глянец /корпус тонкое матовое"]');
    }

    // Тип бриджа. Если выбрал Floyd Rose, то порожек Locking nut
    if (bridgeType === 'Original Floyd Rose' || bridgeType === 'Tremolo 1996T') {
      select('[data-item="nut"] [value="Locking nut"]');
    }

    // Натуральный кант доступен если выбран материал топа - Клен (любой)


    if (topMaterial === 'Клен простой' ||
      topMaterial === 'Клен пламенный книжка 4А' ||
      topMaterial === 'Клен пламенный книжка 5А' ||
      topMaterial === 'Клен облачко книжка 4А' ||
      topMaterial === 'Клен облачко книжка 5А' ||
      topMaterial === 'Клен пламенный цельный 4А' ||
      topMaterial === 'Клен облачко цельный 4А' ||

      topMaterial === 'Карвтоп клен простой книжка' ||
      topMaterial === 'Карвтоп клен пламенный книжка 4А' ||
      topMaterial === 'Карвтоп клен пламенный книжка 5А' ||
      topMaterial === 'Карвтоп клен облачко книжка 4А') {
      enable('[data-item="edging"] [value="Натуральный кант"]');
    } else {
      disable('[data-item="edging"] [value="Натуральный кант"]');
    }

    // Если выбраны HSH HSS SSS то переключатель на 5 позиций
    // Если выбран HS то переключатель на 3 позиции
    // Если выбран НН все активны

    if (pickupType === 'HSH' || pickupType === 'HSS' || pickupType === 'SSS') {
      disable('[data-item="electronics"] [value="1 громкость,1тон, переключатель 3 позиции"]');
      disable('[data-item="electronics"] [value="1 громкость пуш-пулл отсечки, 1 тон, переключатель 3 позиции"]');
    }
    if (pickupType === 'HS') {

      disable('[data-item="electronics"] [value="1 громкость,1 тон, переключатель 5 позиций"]');
      disable('[data-item="electronics"] [value="1 громкость, переключатель 5 позиций с отсечками"]');
    }

    // если выбран пикгард то скрываем крышки электроники

    if (pickgard === 'Нет') {
      enable('[data-item="lid"] [value="Пластик"]');
      enable('[data-item="lid"] [value="Дерево"]');
    } else {
      disable('[data-item="lid"] [value="Пластик"]');
      disable('[data-item="lid"] [value="Дерево"]');
    }

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

    const brand = $(`[name="pickup-brand"]:checked`).val();
    const type = $(`[name="pickup-type"]:checked`).val();

    if (brand && type) {
      pickupsSum = pickups[brand][type];
    }

    return pickupsSum;
  };

  // считаем добавочные цены
  const additionalPrice = () => {
    // добавочная цена крышки электроники
    let lid = 0;

    // если крышка электроники дерево и покрытие глянец, то добавляем стоимость
    if ( $('.custom-item[data-item="lid"]').find('[value="Дерево"]').prop('checked') &&
      $('.custom-item[data-item="cover"]').find('[value="Глянец"]').prop('checked') ) {
      lid = 50;
    } else  lid = 0;

    return lid;
  };


  // считаем окончательную цену
  const makePrice = (propsArr) => {

    // цена звукоснимателей
    const addPickupsPrice = calcPickups();
    // дополнительная стоимость с учетом зависимостей
    const additional = additionalPrice();


    // фильтруем убирая конфигурацию звукоснимателей и бренды
    const filtered = propsArr.filter(({propId}) => propId !== 'pickup-brand' && propId !== 'pickup-type');

    const calcFiltered = filtered.reduce((acc, {price}) => {
      return acc + price;
    }, basePrice);

    // получаем окончательную стоимость
    const totalPrice = (calcFiltered + addPickupsPrice + additional) * dollarCourse;

    // отображаем цену на странице
    $('.custom-calc-panel').find('.total-price').text(totalPrice.toLocaleString('ru-RU'));
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
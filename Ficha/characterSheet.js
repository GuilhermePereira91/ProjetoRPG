const data = {
  name: 'TheNewSolaidor',
  player: 'Gabriel',
  occupation: 'Espadachin',
  age: 22,
  sex: 'male',
  Altura: '1,70cm',
  Peso: '65Kg',
  Classe: 'Teste',

  life: {
    current: 12,
    max: 12,
  },
  Mana: {
    current: 20,
    max: 20,
  },

  weapons: [
    {
      name: 'Katana',
      type: 'Espada',
      damage: '2d6',
      numCurrent: 1,
      numMax: 1,
      attack: 1,
      reach: 'Perto',
      defect: '',
      area: '',
    },
  ],
  attributes: [
    {
      type: 'Força',
      amount: 7,
    },
    {
      type: 'Destreza',
      amount: 7,
    },
    {
      type: 'Inteligência',
      amount: 7,
    },
    {
      type: 'Constituição',
      amount: 7,
    },
    {
      type: 'Poder',
      amount: 7,
    },
    {
      type: 'Aparência',
      amount: 7,
    },
    {
      type: 'Bloqueio',
      amount: 7,
    },
    {
      type: 'Esquiva',
      amount: 7,
    },
    {
      type: 'Brigar',
      amount: 7,
    },
    {
      type: 'Atirar',
      amount: 7,
    },
    {
      type: 'Arremessar',
      amount: 7,
    },
    {
      type: 'Ataque Mágico',
      amount: 7,
    },
    {
      type: 'Sorte',
      amount: 7,
    },
  ],



  expertise: [
    {
      type: 'Advinhação',
      amount: 7,
    },
    {
      type: 'Arqueologia',
      amount: 7,
    },
    {
      type: 'Arte',
      amount: 7,
    },
    {
      type: 'Artes Marciais',
      amount: 7,
    },
    {
      type: 'Astronomia',
      amount: 7,
    },
    {
      type: 'Barganha',
      amount: 7,
    },
    {
      type: 'Biologia',
      amount: 7,
    },
    {
      type: 'Cavalgar',
      amount: 7,
    },
    {
      type: 'Chaveiro',
      amount: 7,
    },
    {
      type: 'Computação',
      amount: 7,
    },
    {
      type: 'Dirigir',
      amount: 7,
    },
    {
      type: 'Disfarce',
      amount: 7,
    },
    {
      type: 'Encontrar',
      amount: 7,
    },
    {
      type: 'Escalar',
      amount: 7,
    },
    {
      type: 'Esconder',
      amount: 7,
    },
    {
      type: 'Escutar',
      amount: 7,
    },
    {
      type: 'Física',
      amount: 7,
    },
    {
      type: 'Furtividade',
      amount: 7,
    },
    {
      type: 'História',
      amount: 7,
    },
    {
      type: 'Lábia',
      amount: 7,
    },
    {
      type: 'Medicina',
      amount: 7,
    },
    {
      type: 'Ocultar',
      amount: 7,
    },
    {
      type: 'Persuadir',
      amount: 7,
    },
    {
      type: 'Pesquisar',
      amount: 7,
    },
    {
      type: 'Primeiros Socorros',
      amount: 7,
    },
    {
      type: 'Psicologia',
      amount: 7,
    },
    {
      type: 'Pular',
      amount: 7,
    },
    {
      type: 'Rastrear',
      amount: 7,
    },
    {
      type: 'Reparo Mecânico',
      amount: 7,
    },
    
  ],
}

data.weapons.map((weapon, index) => {
  addWeaponToTable(weapon, index)
})

data.attributes.map((attribute, index) => {
  addAttribute(attribute, index)
})

data.expertise.map((expertise, index) => {
  addExpertise(expertise, index)
})

$('#name').val(data.name)
$('#player').val(data.player)
$('#occupation').val(data.occupation)
$('#age').val(data.age)
$('#sex').val(data.sex)
$('#Altura').val(data.Altura)
$('#Peso').val(data.Peso)
$('#Classe').val(data.Classe)

$('.lifeBar').css('width', `${calculateBar(data.life.current, data.life.max)}%`)
$('#lifeCount').text(`${data.life.current}/${data.life.max}`)
$('#lifeCurrent').val(data.life.current)
$('#lifeMax').val(data.life.max)

$('.ManaBar').css(
  'width',
  `${calculateBar(data.Mana.current, data.Mana.max)}%`
)
$('#ManaCount').text(`${data.Mana.current}/${data.Mana.max}`)
$('#ManaCurrent').val(data.Mana.current)
$('#ManaMax').val(data.Mana.max)

const diceModal = $('#diceAttributes')
const lifeModal = $('#lifeModal')
const ManaModal = $('#ManaModal')
const expertiseModal = $('#ExpertiseModal')

$(window).click(function (event) {
  if (event.target.id == 'diceAttributes') {
    diceModal.css('display', 'none')
    $('#diceNumber').text('')
    $('#diceType').text('')

    $('.modalDice').css('transform', 'rotate(0deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
  } else if (event.target.id == 'lifeModal') {
    lifeModal.css('display', 'none')
  } else if (event.target.id == 'ManaModal') {
    ManaModal.css('display', 'none')
  } else if (event.target.id == 'addWeaponModal') {
    closeModal('#addWeaponModal')
  }
})

function rollAtribute(atribute, amount) {
  console.log(this)

  diceModal.css('display', 'block')

  setTimeout(() => {
    $('.modalDice').css('transform', 'rotate(360deg)')
    $('.modalDice').css('-webkit-transform', 'rotate(360deg)')
  }, 1000)

  setTimeout(() => {
    const diceNumber = rollDice('1d20')
    const diceType = calcDice(amount, diceNumber)
    $('#diceNumber').text(diceNumber)
    $('#diceType').text(diceType)

    setTimeout(() => {
      diceModal.css('display', 'none')
      $('#diceNumber').text('')
      $('#diceType').text('')

      $('.modalDice').css('transform', 'rotate(0deg)')
      $('.modalDice').css('-webkit-transform', 'rotate(0deg)')
    }, 20000)
  }, 2000)
}

$('.lifeBar').click(function () {
  console.log(this)
  lifeModal.css('display', 'block')
})

$('.ManaBar').click(function () {
  console.log(this)
  ManaModal.css('display', 'block')
})

$('#addWeapon').click(function () {
  openModal('#addWeaponModal')
})

$('#lesion').change(function () {
  if (this.checked) {
    console.log('Modo lesionamento grave ativado!')
  } else {
    console.log('Modo lesionamento grave desativado!')
  }
})

$('#dying').change(function () {
  if (this.checked) {
    console.log('Modo morrendo ativado!')
  } else {
    console.log('Modo morrendo desativado!')
  }
})

$('#addWeaponForm').submit(function (event) {
  var weaponType = ''

  if ($('#weaponType').val() == 'fire') {
    weaponType = 'Fogo'
  } else if ($('#weaponType').val() == 'arch') {
    weaponType = 'Arco'
  } else if ($('#weaponType').val() == 'fight') {
    weaponType = 'Briga'
  } else if ($('#weaponType').val() == 'magic') {
    weaponType = 'Magias'
  }

  const weapon = {
    name: $('#weaponName').val(),
    type: weaponType,
    damage: $('#weapondamage').val(),
    numCurrent: $('#weaponNumCurrent').val(),
    numMax: $('#weaponNumMax').val(),
    attack: $('#weaponAttack').val(),
    reach: $('#weaponReach').val(),
    defect: $('#weaponDefect').val(),
    area: $('#weaponArea').val(),
  }

  data.weapons.push(weapon)
  const id = data.weapons.length - 1
  addWeaponToTable(weapon, id)

  closeModal('#addWeaponModal')
  event.preventDefault()
})

$('#changeLife').submit(function (event) {
  let current = Number($('#lifeCurrent').val())
  const max = Number($('#lifeMax').val())

  if (current > max) {
    alert('A vida atual não pode ser maior que a maxima!')
    current = max
  }

  data.life.current = current
  data.life.max = max
  $('.lifeBar').css('width', `${calculateBar(current, max)}%`)
  $('#lifeCount').text(`${current}/${max}`)

  closeModal('#lifeModal')
  event.preventDefault()
})

$('#changeMana').submit(function (event) {
  let current = Number($('#ManaCurrent').val())
  const max = Number($('#ManaMax').val())

  if (current > max) {
    alert('O dinheiro atual não pode ser maior que o máximo!')
    current = max
  }

  data.Mana.current = current
  data.Mana.max = max
  $('.ManaBar').css('width', `${calculateBar(current, max)}%`)
  $('#ManaCount').text(`${current}/${max}`)

  closeModal('#ManaModal')
  event.preventDefault()
})

function calculateBar(current, max) {
  if (current > max) {
    return 100
  } else if (current < 0) {
    return 0
  } else {
    const value = (100 / max) * current
    const string = value.toString().split('.')[0]
    const percentage = Number(string)
    return percentage
  }
}

function calcDice(ability, dice) {
  
  const table = [
    { normal: 20 },
    { normal: 19, good: 20 },
    { normal: 18, good: 20 },
    { normal: 17, good: 19 },
    { normal: 16, good: 19, extreme: 20 },
    { normal: 15, good: 18, extreme: 20 },
    { normal: 14, good: 18, extreme: 20 },
    { normal: 13, good: 17, extreme: 20 },
    { normal: 12, good: 17, extreme: 20 },
    { normal: 11, good: 16, extreme: 20 },
    { normal: 10, good: 16, extreme: 19 },
    { normal: 9, good: 16, extreme: 19 },
    { normal: 8, good: 15, extreme: 19 },
    { normal: 7, good: 14, extreme: 19 },
    { normal: 6, good: 14, extreme: 18 },
    { normal: 5, good: 13, extreme: 18 },
    { normal: 4, good: 13, extreme: 18 },
    { normal: 3, good: 12, extreme: 18 },
    { normal: 2, good: 12, extreme: 18 },
    { normal: 1, good: 11, extreme: 17 },
  ]

  const type = table[ability - 1]

  if (type.extreme) {
    if (dice >= type.extreme) return 'Extremo'
    if (dice >= type.good) return 'Sucesso Bom'
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Fracasso'
  } else if (type.good) {
    if (dice >= type.good) return 'Sucesso Bom'
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Fracasso'
  } else if (type.normal) {
    if (dice >= type.normal) return 'Sucesso Normal'
    if (dice <= type.normal) return 'Fracasso'
  }
}

function rollDice(dice) {
  let [count, max] = dice.split('d')

  if (Number(count) && Number(max)) {
    count = Number(count)
    max = Number(max)

    let total = 0

    for (let i = 0; i < count; i++) {
      total += Math.floor(Math.random() * max + 1)
    }

    return total
  } else {
    return null
  }
}

function openModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'block')
}

function closeModal(modal) {
  const Modal = $(modal)
  Modal.css('display', 'none')
}

function addWeaponToTable(weapon, id) {
  const newWeapon = $(`<tr id="weapon_${id}">
        <td>
            <button onclick="deleteWeapon(${id})">
                <i class="fa fa-trash-o trashcan"></i>
            </button>
            ${weapon.name}
        </td>
        <td>${weapon.type}</td>
        <td>${weapon.damage}</td>
        <td>${weapon.numCurrent}</td>
        <td>${weapon.numMax}</td>
        <td>${weapon.attack}</td>
        <td>${weapon.reach}</td>
        <td>${weapon.defect}</td>
        <td>${weapon.area}</td>
    </tr>`)
  $('table#weapons').append(newWeapon)
}

function addAttribute(attribute, id) {
  const newAttribute = $(`<div class="attribute" id="attribute_${id}">
    <a onclick="rollAtribute('${attribute.type}', ${attribute.amount})">
      <img class="attributeDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${attribute.type}</h3>
    <input type="text" name="appearance" value="${attribute.amount}" id="attribute_input_${id}" disabled>
  </div>`)
  $('#attributesList').append(newAttribute)
}

function addExpertise(expertise, id) {
  const newExpertise = $(`<div class="expertise" id="expertise_${id}">
    <a onclick="rollAtribute('${expertise.type}', ${expertise.amount})">
      <img class="attributeDice" src="./img/dado.png" alt="Dado">
    </a>
    <h3>${expertise.type}</h3>
    <input type="text" name="appearance" value="${expertise.amount}" id="expertise_input_${id}" disabled>
  </div>`)
  $('#expertiseList').append(newExpertise)
}

function deleteWeapon(id) {
  $(`tr#${id}`).remove()
}

console.log('myscript window.location.href', window.location.href)

var elemDiv = document.createElement('div')
elemDiv.style.cssText =
  'position:absolute;width: 30px; height: 30px;background: gold;display: none;'
elemDiv.classList.add('popup111')
document.body.appendChild(elemDiv)

// const waitSelectEnd = () => {
//   // console.log(document.getSelection().toString())
// }

// document.addEventListener('selectionchange', waitSelectEnd)

document.body.addEventListener('mouseup', function (ev) {
  var selection

  if (window.getSelection) {
    selection = window.getSelection()
    showPopup(ev, selection.toString())
  } else if (document.selection) {
    selection = document.selection.createRange()
    showPopup(ev, selection.toString())
  }

  selection.toString() !== '' &&
    console.log(
      '"' +
        selection.toString() +
        '" was selected at ' +
        ev.pageX +
        '/' +
        ev.pageY
    )
})

const elemen = (sel, par) => (par || document).querySelector(sel)

const elArea = elemen('document')
const elemPopup = elemen('.popup111')

const showPopup = (ev, text) => {
  console.log('text', text)

  text = text.replace(/\s/g, '')

  if (text.length > 0) {
    Object.assign(elemPopup.style, {
      left: `${ev.clientX + window.scrollX - 40}px`,
      top: `${ev.clientY + window.scrollY}px`,
      display: `block`,
    })

    elemPopup.textContent = text.length
    elemPopup.addEventListener('mousemove', hidePopup)
    //console.log(elemPopup)
  }
}

const hidePopup = () => {
  console.log('hidePopup')
  elemPopup.style.display = 'none'
}

// function CheckError(response) {
//   if (response.status >= 200 && response.status <= 299) {
//     return response.json()
//   } else {
//     throw Error(response.statusText)
//   }
// }

const isSiteFrozen = (siteID) => {
  fetch(
    // `https://api.beget.com/api/site/isSiteFrozen?login=j15805sj&passwd=719082oOAPI&input_format=json&output_format=json&input_data={"site_id":${siteID}}`,
    // `https://api.beget.com/api/site/isSiteFrozen?login=j15805sj&passwd=719082oOAPI&input_format=json&output_format=json&input_data={"site_id":2519625}`,
    'https://api.beget.com/api/site/isSiteFrozen?login=j15805sj&passwd=719082oOAPI&input_format=json&output_format=json&input_data={"site_id":2519625}',
    {
      method: 'POST',
      //  mode: 'no-cors',
    }
  )
    .then(CheckError)
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)))
}

if (window.location.href == 'http://inmyway.org/create?new=news')
  console.log('isSiteFrozen(2519625)', isSiteFrozen(2519625))

// window.open(
//   'https://api.beget.com/api/site/unfreeze?login=j15805sj&passwd=719082oOAPI&input_format=json&output_format=json&input_data={%22id%22:2519625}',
//   '_blank'
// )

var showInfo = function () {
  console.log('Show Info is invoked', window.getSelection().toString())

  let s = window.getSelection().toString()

  const conditionsObj = {
    's-map': ['навир', 's-map'],
    myway: ['й сайт', 'myway'],
    kti: ['kti'],
  }

  const map = {
    'http://1001file.ru/': ['1file'],
    'https://10pix.ru/wp-admin/post-new.php': ['pix'],
    'https://www.1shilling.ru/wp-admin/post-new.php': ['lling'],
    'http://www.35net.ru/redaktornew/news.php?act=add': ['35net'],
    'https://www.alibabaru.com/wp-admin/post-new.php': ['baru'],
    'http://alive-internet.pp.ua/news/wp-admin/post-new.php': ['ernet'],
    'http://avto-nomer.pp.ua/wp-admin/post-new.php': ['omer'],
    'http://avtofocus.pp.ua/wp-admin/post-new.php': ['ocus'],
    'http://beltaplus.ru/wp-admin/post-new.php': ['aplus', 'балке'],
    'http://www.chess-blog.ru/': ['s-blog'],
    'http://blog-bridge.ru/wp-admin/post-new.php': ['ridge'],
    'http://everonit.ru/wp-admin/post-new.php': ['onit'],
    'http://f64.space/wp-admin/post-new.php': ['f64'],
    'https://freyya.ru/wp-admin/post-new.php': ['eyya', 'ея&q...'],
    'http://godsempires.com/wp-admin/post-new.php': ['pires'],
    'http://hakoda.ru/wp-admin/post-new.php': ['koda'],
    'http://hardwarezone.info/wp-admin/post-new.php': ['ezone', 'жур...'],
    'http://imgex.com/wp-admin/post-new.php': ['mgex'],
    'http://joomladom.com/wp-admin/post-new.php': ['adom'],
    'http://inmyway.org/create?new=news': ['In m...', 'yway'],
    'http://www.kaleidoskop-stv.ru/wp-admin/post-new.php': ['stv'],
    'http://komanda-ua.com/wp-admin/post-new.php': ['da-ua'],
    'https://koronavirus-map.ru/wp-admin/post-new.php': ['s-map', 'авир'],
    'http://www.kti.com.ua/create_page': ['kti'],
    'http://ladys-club.com/wp-admin/post-new.php': ['s-club'],
    'http://ladykatrin.ru/wp-admin/post-new.php': ['atrin'],
    'https://www.blogger.com/u/1/blog/posts/4328626047945174851': ['piski'],
    'http://miamur.com/wp-admin/post-new.php': ['iamur'],
    'http://www.mos-gm.ru/news/wp-admin/post-new.php': ['os-gm'],
    'http://www.muslimka.ru/wp-admin/post-new.php': ['imka'],
    'https://photosp.ru/news/wp-admin/post-new.php': ['tosp'],
    'http://prirodnoe-lechenie.ru/wp-admin/post-new.php': ['henie'],
    'http://pspgamez.net/wp-admin/post-new.php': ['gamez'],
    'http://rabotawork.ru/wp-admin/post-new.php': ['tawork'],
    'https://raft-game.ru/wp-admin/post-new.php': ['t-game'],
    'http://reporter.zp.ua/wp-admin/post-new.php': ['orter'],
    'http://reost.ru/wp-admin/post-new.php': ['eost'],
    'http://rusdigi.org/wp-admin/post-new.php': ['sdigi'],
    'http://rusreestr.su/wp-admin/post-new.php': ['eestr'],
    'http://sms-style.ru/wp-admin/post-new.php': ['s-style'],
    'http://stmassage.ru/wp-admin/post-new.php': ['ssage'],
    'https://stopvalgus.ru/wp-admin/post-new.php': ['algus'],
    'http://studio-rgb.ru/wp-admin/post-new.php': ['o-rgb'],
    'https://surgery.forum2x2.ru/': ['rum2x2'],
    'http://surgeryzone.net/wp-admin/post-new.php': ['yzone'],
    'https://sustavlechit.ru/wp-admin/post-new.php': ['echit'],
    'http://www.techweek.ru/wp-admin/post-new.php': ['hweek'],
    'http://tehno-video.ru/wp-login.php?redirect_to=http%3A%2F%2Ftehno-video.ru%2Fwp-admin%2Fpost-new.php&reauth=1':
      ['o-video'],
    'http://topagame.ru/wp-admin/post-new.php': ['agame'],
    'https://ukraine-chess.ukraine7.com/forum': ['ukraine7'],
    'https://video-repair.info/wp-admin/post-new.php': ['epair'],
  }

  // function getKeyByValue(object, value) {
  //   return Object.keys(object).find((key) =>
  //     object[key].some((element) => element.includes(value))
  //   )
  // }

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) =>
      object[key].some((element) => value.toLowerCase().includes(element))
    )
  }

  console.log(getKeyByValue(conditionsObj, s))

  window.open(getKeyByValue(map, s), '_blank')

  //   case s.includes('1file'):
  //   url = 'http://1001file.ru/'
  //   break
  //     case s.includes('10pix'):
  //   url = 'https://10pix.ru/wp-admin/post-new.php'
  //   break
  //     	    case s.includes('lling'):
  //   url = 'https://www.1shilling.ru/wp-admin/post-new.php'
  //   break
  //             case s.includes('35net'):
  //   url = 'http://www.35net.ru/'
  //   break

  // case s.includes('abaru'):
  //   url = 'https://www.alibabaru.com/wp-admin/post-new.php'
  //   break
  //           	    case s.includes('ernet'):
  //   url = 'http://alive-internet.pp.ua/news/wp-admin/post-new.php'
  //   break
  //     	    case s.includes('nomer'):
  //   url = 'http://avto-nomer.pp.ua/wp-admin/post-new.php'
  //   break
  //           	    case s.includes('focus'):
  //   url = 'http://avtofocus.pp.ua/wp-admin/post-new.php'
  //   break
  //             case s.includes('aplus'):
  //   url = 'http://beltaplus.ru/wp-admin/post-new.php'
  //   break
  //       case s.includes('-blog'):
  //   url = 'http://www.chess-blog.ru/'
  //   break
  //       case s.includes('ridge'):
  //   url = 'http://blog-bridge.ru/wp-admin/post-new.php'
  //   break
  //             case s.includes('ronit'):
  //   url = 'http://everonit.ru/wp-admin/post-new.php'
  //   break
  //             case s.includes('f64'):
  //   url = 'http://f64.space/wp-admin/post-new.php'
  //   break
  //       case s.includes('reyya'):
  //   url = 'https://freyya.ru/wp-admin/post-new.php'
  //   break
  //       case s.includes('pires'):
  //   url = 'http://godsempires.com/wp-admin/post-new.php'
  //   break
  //             case s.includes('ezone'):
  //   url = 'http://hardwarezone.info/wp-admin/post-new.php'
  //   break
  //       case s.includes('imgex'):
  //   url = 'http://imgex.com/wp-admin/post-new.php'
  //   break
  // case s.includes('myway'):
  //   url = 'http://inmyway.org/'
  //   break
  // case s.includes('ladom'):
  //   url = 'http://joomladom.com/wp-admin/post-new.php'
  //   break
  //       case s.includes('p-stv'):
  //   url = 'http://www.kaleidoskop-stv.ru/wp-admin/post-new.php'
  //   break
  //       case s.includes('da-ua'):
  //   url = 'http://komanda-ua.com/wp-admin/post-new.php'
  //   break
  //       case s.includes('s-map'):
  //   url = 'https://koronavirus-map.ru/wp-admin/post-new.php'
  //   break
  // case s.includes('навир'):
  //   url = 'https://koronavirus-map.ru/wp-admin/post-new.php'
  //   break
  // case s.includes('kti'):
  //   url = 'http://www.kti.com.ua/admin'
  //   break
  //                   case s.includes('-club'):
  //   url = 'http://ladys-club.com/wp-admin/post-new.php'
  //   break
  //                   case s.includes('atrin'):
  //   url = 'http://ladykatrin.ru/wp-admin/post-new.php'
  //   break
  //             case s.includes('piski'):
  //   url = 'http://www.medzapiski.ru/'
  //   break
  //                   case s.includes('iamur'):
  //   url = 'http://miamur.com/wp-admin/post-new.php'
  //   break
  //             case s.includes('iamur'):
  //   url = 'http://miamur.com/wp-admin/post-new.php'
  //   break
  //                   case s.includes('mos-gm'):
  //   url = 'http://www.mos-gm.ru/news/wp-admin/post-new.php'
  //   break
  //       case s.includes('limka'):
  //   url = 'http://www.muslimka.ru/wp-admin/post-new.php'
  //   break
  //       case s.includes('otosp'):
  //   url = 'https://photosp.ru/news/wp-admin/post-new.php'
  //   break
  //             case s.includes('henie'):
  //   url = 'http://prirodnoe-lechenie.ru/wp-admin/post-new.php'
  //   break
  //                 case s.includes('ssage'):
  //   url = 'http://pspgamez.net/wp-admin/post-new.php'
  //   break
  //       case s.includes('awork'):
  //   url = 'http://rabotawork.ru/wp-admin/post-new.php'
  //   break
  //       case s.includes('-game'):
  //   url = 'https://raft-game.ru/wp-admin/post-new.php'
  //   break
  //       case s.includes('orter'):
  //   url = 'http://reporter.zp.ua/wp-admin/post-new.php'
  //   break
  //             case s.includes('reost'):
  //   url = 'http://reost.ru/wp-admin/post-new.php'
  //   break
  //       case s.includes('sdigi'):
  //   url = 'http://rusdigi.org/wp-admin/post-new.php'
  //   break
  //             case s.includes('eestr'):
  //   url = 'http://rusreestr.su/wp-admin/post-new.php'
  //   break
  //             case s.includes('style'):
  //   url = 'http://sms-style.ru/wp-admin/post-new.php'
  //   break
  //           case s.includes('ssage'):
  //   url = 'http://stmassage.ru/wp-admin/post-new.php'
  //   break
  //     case s.includes('algus'):
  //   url = 'https://stopvalgus.ru/wp-admin/post-new.php'
  //   break
  //           case s.includes('o-rgb'):
  //   url = 'http://studio-rgb.ru/wp-admin/post-new.php'
  //   break
  //                   case s.includes('um2x2'):
  //   url = 'https://surgery.forum2x2.ru/'
  //   break
  //             case s.includes('yzone'):
  //   url = 'http://surgeryzone.net/wp-admin/post-new.php'
  //   break
  //    case s.includes('echit'):
  //   url = 'https://sustavlechit.ru/wp-admin/post-new.php'
  //   break
  //          case s.includes('hweek'):
  //   url = 'http://www.techweek.ru/wp-admin/post-new.php'
  //   break
  //                   case s.includes('video'):
  //   url = 'http://tehno-video.ru/wp-admin/post-new.php'
  //   break
  // case s.includes('agame'):
  //   url = 'http://topagame.ru/wp-admin/post-new.php'
  //   break
  //       case s.includes('aine7'):
  //   url = 'https://ukraine-chess.ukraine7.com/forum'
  //   break
  //       case s.includes('epair'):
  //   url = 'https://video-repair.info/wp-admin/post-new.php'
  //   break

  // default:
  //   console.log('default', s, s.includes('ронавир'))
  //   break
}

const freezeInMyWay = () => {
  console.log('freezeInMyWay')
  window.open(
    'https://api.beget.com/api/site/freeze?login=j15805sj&passwd=719082oOAPI&input_format=json&output_format=json&input_data={%22id%22:2519625,%20%22excludedPaths%22:%20[%22tmp%22,%20%22cache%22,%22public/themes/modern/css%22]}',
    '_blank'
  )
}

const unFreezeInMyWay = () => {
  console.log('unFreezeInMyWay')
  window.open(
    'https://api.beget.com/api/site/unfreeze?login=j15805sj&passwd=719082oOAPI&input_format=json&output_format=json&input_data={%22id%22:2519625}',
    '_blank'
  )
}

//BUG Uncaught TypeError: Cannot read properties of null (reading 'addEventListener') at myscript.js:295:3
// const inMyWayTitle = document
//   .querySelector('.title-input')
//   .addEventListener('focus', unFreezeInMyWay)

// const inMyWayTitleSend = document
//   .querySelectorAll('.button-orange')[1]
//   .addEventListener('click', freezeInMyWay)

// var showAnotherInfo = function () {
//   console.log('Show Another Info')
// }

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(
    sender.tab
      ? 'from a content script:' + sender.tab.url
      : 'from the extension',
    request
  )
  if (request.functiontoInvoke == 'showInfo') {
    showInfo()
  }
  if (request.functiontoInvoke == 'showAnotherInfo') {
    showAnotherInfo()
  }
  sendResponse(window.getSelection().toString())
})

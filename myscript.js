console.log('myscript', document.body.className)

var showInfo = function () {
  console.log('Show Info is invoked', window.getSelection().toString())

  let s = window.getSelection().toString()

  let url = 'http://www.' + s + '/wp-admin/post-new.php'

  switch (true) {
    case s.includes('ронавир'):
      url = 'https://koronavirus-map.ru/wp-admin/post-new.php'
      break
    case s.includes('kti'):
      url = 'http://www.kti.com.ua/admin'
      break
    case s.includes('opagame'):
      url = 'http://topagame.ru/wp-admin/post-new.php'
      break
    default:
      console.log('default', s, s.includes('ронавир'))
      break
  }

  // const objLit = (s) => {
  //   const cases = {
  //     [`${s.includes('a')}`]: 'https://a.com/wp-admin/post-new.php',
  //     [`${s.includes('b')}`]: 'https://b.com/wp-admin/post-new.php',
  //   }

  //   let url = cases[s]
  //   return url
  // }

  // console.log('Object literal', objLit(s))

  //   let s = "expression"

  //   switch (s) {
  //     case 'press': if (s.includes('press')) { console.log('press') } break
  //     default: console.log('default', s, s.includes('press'))
  //     break
  // }

  window.open(url, '_blank')
}

// const urlSwitch = (s) => ({
//   s.includes('ронавир'): "Border Collies are good boys and girls.",
//   "pitbull": "Pit Bulls are good boys and girls.",
//   "german": "German Shepherds are good boys and girls."
// })[s]

var showAnotherInfo = function () {
  console.log('Show Another Info')
}

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
  sendResponse('goodbye')
})

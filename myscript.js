console.log('myscript', document.body.className)

var showInfo = function () {
  console.log('Show Info is invoked', window.getSelection().toString())

  let urlNew =
    'http://www.' + window.getSelection().toString() + '/wp-admin/post-new.php'

  //   chrome.tabs.create({
  //     url: urlNew,
  //   })
  window.open(urlNew, '_blank')
}

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

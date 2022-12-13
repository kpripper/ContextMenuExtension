// let contextMenuItem = {
// "id": "workTime",
// "title": "WorkTime",
// //"contexts": ["page", "selection"],
// "contexts": ["all"]
// };

//chrome.contextMenus.create(contextMenuItem);

// chrome.contextMenus.create({
//   id: 'myMenId',
//   title: 'myMenu',
//   //"contexts": ["page", "selection"],
//   contexts: ['all'],
// })

// chrome.contextMenus.onClicked.addListener((clickData) => {
//   let urlNew =
//     'http://www.' + clickData.selectionText + '/wp-admin/post-new.php'

//   chrome.tabs.create({
//     url: urlNew,
//   })

//   console.log(`myMenu clicked ${urlNew}`)
//   console.log(globalThis)

//   async function getCurrentTab() {
//     let queryOptions = { active: true, lastFocusedWindow: true }
//     // `tab` will either be a `tabs.Tab` instance or `undefined`.
//     let [tab] = await chrome.tabs.query(queryOptions)
//     return tab.id
//   }

//   console.log('getCurrentTab', getCurrentTab())

//   // chrome.scripting.executeScript({
//   //   target: { tabId: getCurrentTab() },
//   //   func: windowTest,
//   // })
// })

//NOTE re-inject contest scripts after reextension reinstall
// chrome.runtime.onInstalled.addListener(async () => {
//   for (const cs of chrome.runtime.getManifest().content_scripts) {
//     for (const tab of await chrome.tabs.query({ url: cs.matches })) {
//       chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         files: cs.js,
//       })
//     }
//   }
// })

function genericOnClick(info, tab) {
  console.log('item ' + info.menuItemId + ' was clicked')
  console.log('info: ' + JSON.stringify(info))
  console.log('tab: ' + JSON.stringify(tab))

  //Add all you functional Logic here
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    async function (tabs) {
      console.log('tabs: ', tabs)
      const response = await chrome.tabs.sendMessage(tabs[0].id, {
        greeting: 'hello',
        functiontoInvoke: 'showInfo',
      })
      console.log('response', response)
    }
  )
}

chrome.contextMenus.create({
  id: 'myMenId',
  title: 'myMenu',
  contexts: ['all'],
})

chrome.contextMenus.onClicked.addListener(genericOnClick)

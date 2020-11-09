browser.browserAction.onClicked.addListener(() => {
  console.log('Opening Serenite!')
  browser.tabs.create({ active: true })
})

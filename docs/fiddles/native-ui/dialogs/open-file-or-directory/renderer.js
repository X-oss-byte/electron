const selectDirBtn = document.getElementById('select-directory')

selectDirBtn.addEventListener('click', async () => {
  const path = await window.openFileDialog()
  document.getElementById('selected-file').innerHTML = `You selected: ${path}`
})

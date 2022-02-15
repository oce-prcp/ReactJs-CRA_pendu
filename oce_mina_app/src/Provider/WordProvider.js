export class WordProvider {
  word
  constructor() {
    this.word = this.getword()
  }

  save() {
    localStorage.setItem('word', JSON.stringify(this.word))
  }

  load() {
    let datas = localStorage.getItem('word')
    if (datas === null) datas = '[]'
    datas = JSON.parse(datas)
    this.word = datas
  }

  getword() {
    this.load()
    return this.word
  }

  add(words) {
    const id = Date.now()
    let tmp = { ...words }
    tmp.id = id
    this.word.push(tmp)
    this.save()
  }

  update(words) {
    const { id } = words
    let indice = -1
    for (let i = 0; i < this.word.length; i++)
      if (this.word[i].id === Number(id)) indice = i

    if (indice === -1) return false
    this.word[indice] = words
    this.save()
    return true
  }

  remove(words) {
    let indice = -1
    for (let i = 0; i < this.word.length; i++)
      if (this.word[i].id === Number(words.id)) indice = i

    if (indice === -1) return false

    this.word.splice(indice, 1)
    this.save()
    return true
  }

  getwordsById(id) {
    let res = this.word.filter(words => words.id === Number(id))
    return res.length === 0 ? false : res[0]
  }
}

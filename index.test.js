import * as my from './index'

describe('the fruit compiler', () => {
  const fruits1 = {apple: 2, orange: 3, avacado: NaN, lime: 7}
  const fruits2 = {apple: {fiji: 3, red: 1}, orange: 5, avacado: 4, lemon: 6}
  const fruits3 = {apple: 6}

  it('returns one cleaned object from a single object', () => {
    const expected = {apple: 2, orange: 3, avacado: 0, lime: 7}
    const cleaned = my.compileFruits([fruits1])
    expect(cleaned).toEqual(expected)
  })

  it('returns one cleaned object from a single object with nested object(s)', () => {
    const expected = {apple: 4, orange: 5, avacado: 4, lemon: 6}
    const cleaned = my.compileFruits([fruits2])
    expect(cleaned).toEqual(expected)
  })

  it('returns one cleaned object from two objects', () => {
    const expected = {apple: 6, orange: 8, avacado: 4, lime: 7, lemon: 6}
    const cleaned = my.compileFruits([fruits1, fruits2])
    expect(cleaned).toEqual(expected)
  })

  it('returns one cleaned object from n objects', () => {
    const expected = {apple: 12, orange: 8, avacado: 4, lime: 7, lemon: 6}
    const cleaned = my.compileFruits([fruits1, fruits2, fruits3])
    expect(cleaned).toEqual(expected)
  })
})

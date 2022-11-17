import { getHTML, render } from '@innet/dom/test'

import { Markdown } from '.'

describe('Markdown', () => {
  it('should return empty content', function () {
    const test = render(<Markdown text='' />)

    expect(getHTML(test)).toBe('')
  })
  describe('paragraph', () => {
    it('should return paragraph', function () {
      expect(getHTML(render(
        <Markdown text='Test' />,
      ))).toBe(
        '<p>Test</p>',
      )
    })
    it('should return a space instead of next line', function () {
      expect(getHTML(render(
        <Markdown text={'Test1\nTest2'} />,
      ))).toBe(
        '<p>Test1\nTest2</p>',
      )
    })
    it('should return a couple of paragraphs with next line twice', function () {
      expect(getHTML(render(
        <Markdown text={'Test1\n\nTest2\n\nTest3'} />,
      ))).toBe(
        '<p>Test1</p><p>Test2</p><p>Test3</p>',
      )
    })
    it('should trim text of paragraph', function () {
      expect(getHTML(render(
        <Markdown text={'  Test1  \n\n  Test2  '} />,
      ))).toBe(
        '<p>Test1</p><p>Test2</p>',
      )
    })
  })
  describe('link', () => {
    it('should return a link', function () {
      expect(getHTML(render(
        <Markdown text='[Test](/test)' />,
      ))).toBe(
        '<p><a href="/test">Test</a></p>',
      )
    })
  })
})

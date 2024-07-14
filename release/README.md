# &nbsp; @cantinc/ui

&nbsp;

[![NPM](https://img.shields.io/npm/v/@cantinc/ui.svg)](https://www.npmjs.com/package/@cantinc/ui)
[![downloads](https://img.shields.io/npm/dm/@cantinc/ui.svg)](https://www.npmtrends.com/@cantinc/ui)
[![changelog](https://img.shields.io/badge/Changelog-⋮-brightgreen)](https://changelogs.xyz/@cantinc/ui)
[![license](https://img.shields.io/npm/l/@cantinc/ui)](https://github.com/cantinc/ui/blob/main/LICENSE)

## Abstract
**CANT inc. UI** based on [innet](https://www.npmjs.com/package/innet).

This is a library of UI components you can use with [@innet/dom](https://www.npmjs.com/package/@innet/dom) application.

[![stars](https://img.shields.io/github/stars/d8corp/innet--jsx?style=social)](https://github.com/d8corp/innet--jsx/stargazers)
[![watchers](https://img.shields.io/github/watchers/d8corp/innet--jsx?style=social)](https://github.com/d8corp/innet--jsx/watchers)

## Usage

### Start application

Create a new project with the next command in terminal console:

```bash
npx innetjs init my-app -t fe
```

*change `my-app` if you want to call it another way*

Go into my-app and run:

```bash
npm start
```

Go to [localhost:3000](http://localhost:3000) in your browser, and you can see default application.

### Install

Stop the server and install `@cantinc/ui`

```bash
npm i @cantinc/ui
```

Then start again.

In the docs, you can find examples of components, you can copy any example and put into `src/index.tsx` file of your project (*clear `src` folder before*).


### Styles

A big part of the library components has a `class` prop.

Provide the `class` as a string to add one.

```tsx
import innet from 'innet'
import dom from '@innet/dom'

import { Button } from '@cantinc/ui'

innet(
  <Button class='test'>
    Click me
  </Button>,
  dom,
)
```

Or provide an object of classes.

Keys are elements of a component or different states.

```tsx
import innet from 'innet'
import dom from '@innet/dom'

import { Checkbox } from '@cantinc/ui'

innet(
  <Checkbox
    class={{
      root: 'test-root',
      disabled: 'test-disabled',
      icon: 'test-icon',
    }}
  />,
  dom,
)
```

Values can be an array, string, or a function which returns them.

More information here [html-classes](https://www.npmjs.com/package/html-classes).

```tsx
import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Button } from '@cantinc/ui'

const state = new State('foo')

innet(
  <>
    <Button
      onclick={() => { state.value = 'bar' }}
      class={{
        root: [
          'test1-root',
          'test2-root',
          ['test3-root'],
          () => `${state.value}-root`,
        ],
        content: () => ['test-content', `${state.value}-content`],
      }}>
      Click me
    </Button>
    <Button class={() => state.value} />
  </>,
  dom,
)
```

You can use `style` prop to add inline styles.

```tsx
import innet from 'innet'
import dom from '@innet/dom'
import { State } from 'watch-state'

import { Button } from '@cantinc/ui'

const color = new State('red')

const handleClick = () => {
  color.value = 'blue'
}

innet(
  <>
    <Button
      style={{
        background: () => color.value,
      }}
      onclick={handleClick}>
      Click me
    </Button>
  </>,
  dom,
)
```

## Issues
If you find a bug or have a suggestion, please file an issue on [GitHub](https://github.com/cantinc/ui/issues).

[![issues](https://img.shields.io/github/issues-raw/cantinc/ui)](https://github.com/cantinc/ui/issues)

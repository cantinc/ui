# @cantinc/ui

**CANT inc. UI** based on [innet](https://www.npmjs.com/package/innet).

This is a library of UI components you can use with [@innet/dom](https://www.npmjs.com/package/@innet/dom) application.

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

### Usage of components

Stop the server and install `@cantinc/ui`

```bash
npm i @cantinc/ui
```

Then start again.

In the docs, you can find examples of components, you can copy any example and put into `src/index.tsx` file of your project (*clear `src` folder before*).


### Style

Any component has `class` prop.

Provide a `class` to add one.

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

import { Button } from '@cantinc/ui'

innet(
  <Button
    class={{
      root: 'test-root',
      content: 'test-content',
      primary: 'test-primary',
    }}>
    Click me
  </Button>,
  dom,
)
```

Values can be an array, string, or a function returns them.

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

const state = new State('display:none')

innet(
  <>
    <Button
      onclick={() => { state.value = '' }}
      style='background:red'>
      Click me
    </Button>
    <Button style={() => state.value} />
  </>,
  dom,
)
```

# Modals

Use this component to show modal windows

```typescript
import { Modals, Modal } from '@cantinc/ui'
```

## Usage

Add `Modals` into a place you want to put modal HTML elements.

```tsx
function App () {
  return (
    <>
      <div id='root'>...</div>
      <Modals>
        ...
      </Modals>
    </>
  )
}
```

*Note: put it inside an element without parents that have css property of `transform`.*

You can use `Portal` to add modals anywhere.

```tsx
function Global () {
  return (
    <Portal parent={document.body}>
      <!-- Other stuff -->
      <Modals>
        ...
      </Modals>
    </Portal>
  )
}
```

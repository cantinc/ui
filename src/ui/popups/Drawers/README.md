# Drawers

Use this component to show aside popup.

```typescript
import { Drawers, Drawer } from '@cantinc/ui'
```

## Usage

Add `Drawers` into a place you want to put modal HTML elements.

```tsx
function App () {
  return (
    <>
      <div id='root'>...</div>
      <Drawers>
        ...
      </Drawers>
    </>
  )
}
```

*Note: put it inside an element without parents that have css property of `transform`.*

You can use `portal` to add modals anywhere.

```tsx
function Global () {
  return (
    <portal parent={document.body}>
      <!-- Other stuff -->
      <Drawers>
        ...
      </Drawers>
    </portal>
  )
}
```

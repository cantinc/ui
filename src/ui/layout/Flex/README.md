# Flex

The `Flex` component is designed to control the positioning of elements within a container.
It implements a one-dimensional layout model that provides powerful space distribution and alignment capabilities
for items in an interface.

```typescript
import { Flex } from '@cantinc/ui'
```

## Related Components

These components use or depend on the `Flex` component:

[Input](/ui/interaction/input) |
[Card](/ui/cards/card) |
[Button](/ui/buttons/button) |
[Dots](/ui/interaction/dots) |
[Slides](/ui/interaction/slides)

### FlexProps

| Name       | Description                                                      | Type                                                                                      | Default      |
|------------|------------------------------------------------------------------|-------------------------------------------------------------------------------------------|--------------|
| `element`  | Defines the HTML element (e.g., div, label or button)            | `string`                                                                                  | `div`        |
| `children` | The child elements to be rendered inside the Flex container.     | `JSX.Element`                                                                             | -            |
| `vertical` | Sets the flex direction to vertical (column layout).             | `boolean`                                                                                 | `false`      |
| `align`    | Sets the alignment of items along the cross axis.                | `FlexAlign`                                                                               | `flex-start` |
| `justify`  | Sets the justification of items along the main axis.             | `FlexJustify`                                                                             | `flex-start` |
| `gap`      | Sets the gap between child elements in pixels.                   | `number` `[number, number]`                                                               | `0`          |
| `padding`  | Sets the padding inside the container in pixels.                 | `number` `[number, number]` `[number, number, number]` `[number, number, number, number]` | `0`          |
| `flex`     | Sets whether the element should stretch to fill available space. | `number` `boolean`                                                                        | `false`      |
| `wrap`     | Enables line wrapping for flex items.                            | `boolean`                                                                                 | `false`      |
| `inline`   | Displays the Flex container as an inline element.                | `boolean`                                                                                 | `false`      |
| `reverse`  | Reverses the direction of the flex items.                        | `boolean`                                                                                 | `false`      |


# ui-widget

## Usage

Use it as a full plugin:

``` javascript
import Vue from 'vue'
import VueWidget from './path/to/ui-widget'

Vue.use(VueWidget)
```

Or use individual components:

``` javascript
import Vue from 'vue'
import { UiButton } from './path/to/ui-widget/src/vue/components'

Vue.use(UiButton)
```

Alternativelly you can reference the script and the stylesheet in your HTML:
``` html
<script src="./path/to/ui-widget/dist/vue-widget.min.js"></script>
```

## Theming

Add the default theme:
``` html
<style>
  @import url("./path/to/ui-widget/dist/vue-widget-default.css");
</style>
```

If you have scss enable in your projet, you can customize the theme by overriding default variables:
``` html
<style lang="scss">
  @import "./path/to/your_theme.scss";
</style>
```

Override variables, and include the ui-widget scss file.

``` scss
$ui-theme-text-dark: blue;
$ui-theme-text-light: white;
$ui-theme-text-light-2: red;

@import './path/to/ui-widget/src/vue/themes/default/default';
```
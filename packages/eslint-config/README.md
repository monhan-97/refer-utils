# eslint-config


Usage

```sh
npm install @refer-utils/eslint-config -D
```

Create `eslint.config.js`:

```js
import { base } from '@refer-utils/eslint-config';

const eslintConfig = [...base];

export default eslintConfig;
```

If you're using `React`,like this

```js
import { base,react } from '@refer-utils/eslint-config';

const eslintConfig = [...base,...react];

export default eslintConfig;
```
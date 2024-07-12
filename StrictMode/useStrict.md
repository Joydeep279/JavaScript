# 'use strict'

In ES5 the new feature added to JS started modifing the existing feature.

To not break the existing code these feature we turned off be default.

To turn on these feature the 'use strict' statement is used.

**Example**

```javascript
"use strict";

// strict mode got activated.
```

It is recommented to use at the top.

```javascript
"use strict";
alert("hello");
// the alert statement will not work in strict mode.
```

**strict mode can also be used in function**

```javascript
function test(params) {
  "use strict";
}
```

> **Note:** Once strict mode get activated where is no way going back.

> **Imp Note:** To activate the strict mode it should be declare at the very begining of the code.Not in the between nor at the end.

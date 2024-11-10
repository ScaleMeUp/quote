# EditorJS List
- Added border color options

**Install**
`yarn add https://github.com/ScaleMeUp/quote`

**Usage**
```js

import Quote from '@scalemeup/editor-js-quote';

new EditorJS({
    tools: {
        quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
                defaultBorderColor: '#ff9d00',
                borderColors: [
                    {
                        color: '#ff9d00',
                        name: 'Orange'
                    },
                    {
                        color: '#00ff00',
                        name: 'Green'
                    },
                    {
                        color: '#0000ff',
                        name: 'Blue'
                    }
                ],
            }
        },
    },
})
```
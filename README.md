exp-traceur
===

Expansive plugin for Javascript ES6 files using Traceur to compile into ES5 Javascript.

Provides the 'traceur' service.

### To install:

    pak install exp-traceur

### To configure in expansive.json:

* enable &mdash; Enable the traceur service.
* mappings &mdash; Extensions to process. Defaults to { '6': 'js' }. This processes files with a '.js.6' extension.
* options &mdash; Traceur options. Defaults to '-experimental'.

```
{
    services: {
        'traceur': {
            enable: true,
            options: '-experimental'
        }
    }
}

```

### Get Pak from

[https://embedthis.com/pak/](https://embedthis.com/pak/)

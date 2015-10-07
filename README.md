exp-traceur
===

Expansive plugin for Javascript ES6 files using Traceur to compile into ES5 Javascript.

Provides the 'compile-6' service.

### To install:

    pak install exp-traceur

### To configure in expansive.json:

* compile-6.enable &mdash; Enable the compile-65 service to process .js.6 files.
* compile-6.options &mdash; Traceur options.

```
{
    services: {
        'compile-6': {
            enable: true,
            options: '-experimental'
        }
    }
}

```

### Get Pak from

[https://embedthis.com/pak/](https://embedthis.com/pak/)

Expansive.load({
    services: {
        name:    'traceur',
        options: '-experimental',

        transforms: {
            mappings: {
                '6': 'js'
            },

            init: function(transform) {
                transform.traceur = Cmd.locate('traceur')
                if (!transform.traceur) {
                    fatal('Cannot find traceur')
                }
            },

            render: function(contents, meta) {
                let file = meta.source
                let path = file.dirname.join('.expansive')
                let input = path.joinExt('.in.js', true)
                let output = path.joinExt('.out.js', true)
                let results
                try {
                    vtrace('Save', file + ' -> ' + input)
                    input.write(contents)
                    let command = traceur + ' --out ' + output + ' ' + options + ' ' + input
                    vtrace('Run', command)
                    Cmd.run(command)
                    results = output.readString()
                }
                finally {
                    input.remove()
                    output.remove()
                }
                return results
            }
        }
    }
})

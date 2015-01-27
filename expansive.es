Expansive.load({
    transforms: {
        name:   'compile-6',
        input:  '6',
        output: 'js',
        options: '-experimental',
        script: `
            function transform(contents, meta, service) {
                let traceur = Cmd.locate('traceur')

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
        `
    }
})

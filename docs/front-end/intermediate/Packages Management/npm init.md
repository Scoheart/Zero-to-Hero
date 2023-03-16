# npm init

```shell
npm init <package-spec> (same as `npx <package-spec>`)
npm init <@scope> (same as `npx <@scope>/create`)
aliases: create, innit
```

## npm init

- `npm init foo` -> `npm exec create-foo`
- `npm init @usr` -> `npm exec @usr/create`
- `npm init @usr/foo` -> `npm exec @usr/create-foo`
- `npm init @usr@2.0.0` -> `npm exec @usr/create@2.0.0`
- `npm init @usr/foo@2.0.0` -> `npm exec @usr/create-foo@2.0.0`

npm init
searching "create-packageName"
npm exec create-packageName
create-packageName     <-- package.json "bin"

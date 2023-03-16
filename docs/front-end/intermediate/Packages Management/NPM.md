## npm workspaces
### Defining workspaces
```json
{
	"workspaces": ["./packages/*"]
}
```

### new a workspace
```bash
npm init -w ./packages/<workspace> -y
```

### link all workspace
```bash
npm install
```

### Adding dependencies
```bash
npm install -w <dest-workspace> axios
```
~~`npm install -w <dest-workspace> <src-workspace>`



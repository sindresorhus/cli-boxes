# cli-boxes

> Boxes for use in the terminal

## Install

```
$ npm install cli-boxes
```

## Usage

```js
import cliBoxes from 'cli-boxes';

console.log(cliBoxes.single);
/*
{
	topLeft: '┌',
	top: '─',
	topRight: '┐',
	right: '│',
	bottomRight: '┘',
	bottom: '─',
	bottomLeft: '└',
	left: '│'
}
*/
```

## API

### cliBoxes

#### `single`

```
┌────┐
│    │
└────┘
```

#### `double`

```
╔════╗
║    ║
╚════╝
```

#### `round`

```
╭────╮
│    │
╰────╯
```

#### `bold`

```
┏━━━━┓
┃    ┃
┗━━━━┛
```

#### `singleDouble`

```
╓────╖
║    ║
╙────╜
```

#### `doubleSingle`

```
╒════╕
│    │
╘════╛
```

#### `classic`

```
+----+
|    |
+----+
```

#### `arrow`

```
↘↓↓↓↓↙
→    ←
↗↑↑↑↑↖
```

## Related

- [boxen](https://github.com/sindresorhus/boxen) - Create boxes in the terminal

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-cli-boxes?utm_source=npm-cli-boxes&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>

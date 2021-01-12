declare namespace cliBoxes {
	/**
	Style of the classic box border.
	*/
	interface BoxStyle {
		readonly topLeft: string;
		readonly topRight: string;
		readonly bottomLeft: string;
		readonly bottomRight: string;
		readonly horizontal: string;
		readonly vertical: string;
	}

	/**
	Style of the horizontal box border. With custom left and right characters.
	*/
	interface BoxStyleHorizontal {
		readonly topLeft: string;
		readonly topRight: string;
		readonly bottomLeft: string;
		readonly bottomRight: string;
		readonly horizontalTop: string;
		readonly horizontalBottom: string;
		readonly vertical: string;
	}

	/**
	Style of the vertical box border. With custom top and bottom characters.
	*/
	interface BoxStyleVertical {
		readonly topLeft: string;
		readonly topRight: string;
		readonly bottomLeft: string;
		readonly bottomRight: string;
		readonly horizontal: string;
		readonly verticalLeft: string;
		readonly verticalRight: string;
	}

	/**
	Style of the vertical box border. With custom characters for both sides of horizontal and vertical.
	*/
	interface BoxStyleAll {
		readonly topLeft: string;
		readonly topRight: string;
		readonly bottomLeft: string;
		readonly bottomRight: string;
		readonly horizontalTop: string;
		readonly horizontalBottom: string;
		readonly verticalLeft: string;
		readonly verticalRight: string;
	}

	/**
	All box styles.
	*/
	interface Boxes {
		/**
		@example
		```
		┌────┐
		│    │
		└────┘
		```
		*/
		readonly single: BoxStyle;

		/**
		@example
		```
		╔════╗
		║    ║
		╚════╝
		```
		*/
		readonly double: BoxStyle;

		/**
		@example
		```
		╭────╮
		│    │
		╰────╯
		```
		*/
		readonly round: BoxStyle;

		/**
		@example
		```
		┏━━━━┓
		┃    ┃
		┗━━━━┛
		```
		*/
		readonly bold: BoxStyle;

		/**
		@example
		```
		╓────╖
		║    ║
		╙────╜
		```
		*/
		readonly singleDouble: BoxStyle;

		/**
		@example
		```
		╒════╕
		│    │
		╘════╛
		```
		*/
		readonly doubleSingle: BoxStyle;

		/**
		@example
		```
		+----+
		|    |
		+----+
		```
		*/
		readonly classic: BoxStyle;

		/**
		@example
		```
		↘↓↓↓↓↙
		→    ←
		↗↑↑↑↑↖
		```
		*/
		readonly arrow: BoxStyleAll;
	}
}

/**
Boxes for use in the terminal.

@example
```
import cliBoxes = require('cli-boxes');

console.log(cliBoxes.single);
// {
// 	topLeft: '┌',
// 	topRight: '┐',
// 	bottomRight: '┘',
// 	bottomLeft: '└',
// 	vertical: '│',
// 	horizontal: '─'
// }
```
*/
declare const cliBoxes: cliBoxes.Boxes & {
	// TODO: Remove this for the next major release
	default: typeof cliBoxes;
};

export = cliBoxes;

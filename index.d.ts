/**
 * Style of the box border.
 */
export interface BoxStyle {
	readonly topLeft: string;
	readonly topRight: string;
	readonly bottomLeft: string;
	readonly bottomRight: string;
	readonly horizontal: string;
	readonly vertical: string;
}

/**
 * All box styles.
 */
export interface Boxes {
	/**
	 * @example
	 *
	 * ┌────┐
	 * │    │
	 * └────┘
	 */
	readonly single: BoxStyle;

	/**
	 * @example
	 *
	 * ╔════╗
	 * ║    ║
	 * ╚════╝
	 */
	readonly double: BoxStyle;

	/**
	 * @example
	 *
	 * ╭────╮
	 * │    │
	 * ╰────╯
	 */
	readonly round: BoxStyle;

	/**
	 * @example
	 *
	 * ╓────╖
	 * ║    ║
	 * ╙────╜
	 */
	readonly singleDouble: BoxStyle;

	/**
	 * @example
	 *
	 * ╒════╕
	 * │    │
	 * ╘════╛
	 */
	readonly doubleSingle: BoxStyle;

	/**
	 * @example
	 *
	 * +----+
	 * |    |
	 * +----+
	 */
	readonly classic: BoxStyle;
}

/**
 * Boxes for use in the terminal.
 */
declare const cliBoxes: Boxes;

export default cliBoxes;

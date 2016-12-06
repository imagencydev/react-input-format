/**
 * Thousand separator formatter
 */
export default class {

    /**
     * Constructor
     *
     * @param props
     */
    constructor (props) {
        this.props = props;
    }

    /**
     * Format string
     *
     * @param input
     * @returns {string}
     */
    format (input = '') {
        let parts = input.split('.');
        parts[0] = parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');

        return parts.join('.');
    }

    /**
     * Deformat formatted text back to computer readable
     *
     * @param input
     * @returns {string}
     */
    deFormat (input = '') {
        const format = /(^([0-9]|,)+(\.?[0-9]{0,2})?)/g,
            parts = input.match(format);

        return (parts && parts.join('') || '').replace(/,/g, '');
    }
}
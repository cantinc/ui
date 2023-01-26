import '../utils/date/getLocaleDateFormat/index.es6.js';
import '../utils/date/getLocaleDateFormatPlaceholder/index.es6.js';
import { getLocaleDateFormat } from '../utils/date/getLocaleDateFormat/getLocaleDateFormat.es6.js';
import { getLocaleDateFormatPlaceholder } from '../utils/date/getLocaleDateFormatPlaceholder/getLocaleDateFormatPlaceholder.es6.js';

const localeDateFormat = getLocaleDateFormat();
const locale = navigator.language;
const localeDateFormatPlaceholder = getLocaleDateFormatPlaceholder(localeDateFormat, locale);

export { locale, localeDateFormat, localeDateFormatPlaceholder };

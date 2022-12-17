
import { name, shortName, days } from '@maglifter/december';
import { christmas, newYear } from '@maglifter/december/constants/holidays';
import { getDaysToChristmas } from '@maglifter/december/utils/getDaysToChristmas';
import { getDaysToNewYear } from '@maglifter/december/utils/getDaysToNewYear';
import setTextToElem from '../helpers/setTextToElem';

setTextToElem('december-name', `${name} (${shortName})`);

setTextToElem('december-total-days', days);

setTextToElem('december-holidays', [christmas.toLocaleDateString(), newYear.toLocaleDateString()].join(', '));

setTextToElem('december-christmas-days', getDaysToChristmas());

setTextToElem('december-new-year-days', getDaysToNewYear());


import setTextToElem from '../helpers/setTextToElem';
import { getTotalDaysCount } from '../../main';

const now = new Date();

setTextToElem('year', now.getFullYear());
setTextToElem('total-days', getTotalDaysCount(now));

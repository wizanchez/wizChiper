/* eslint-disable import/prefer-default-export */
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

export const wizDateConvertFormatUTC = (created_utc: number) => moment.utc(new Date(created_utc * 1000), 'YYYYMMDD').fromNow();

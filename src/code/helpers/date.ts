import i18n from '../../i18n';

const { t } = i18n.global;

const daysNames = [
  t('sunday'),
  t('monday'),
  t('tuesday'),
  t('wednesday'),
  t('thursday'),
  t('friday'),
  t('saturday'),
];

const monthsNames = [
  t('january'),
  t('february'),
  t('march'),
  t('april'),
  t('may'),
  t('june'),
  t('july'),
  t('august'),
  t('september'),
  t('october'),
  t('november'),
  t('december'),
];

export class getDate {
  static date: Date = new Date();

  static currentDay(): string {
    const dayNumber: number = this.date.getDay();

    return daysNames[dayNumber];
  }

  static fullDate(): string {
    const day = this.date.getDate();
    const monthName = monthsNames[this.date.getMonth()].slice(0, 3);
    const year = this.date.getFullYear();

    return `${day} ${monthName} ${year}`;
  }
}

export default {
  getDate,
};

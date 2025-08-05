"use client";

import { format } from 'date-fns';
import { ClientOnly } from './client-only';

type FormattedDateProps = {
    dateString: string;
    formatString: string;
};

export function FormattedDate({ dateString, formatString }: FormattedDateProps) {
  const date = new Date(dateString);
  return (
    <ClientOnly>
      <time dateTime={dateString}>
        {format(date, formatString)}
      </time>
    </ClientOnly>
  );
}

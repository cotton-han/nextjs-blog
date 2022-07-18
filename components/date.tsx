import { format, parseISO } from 'date-fns'; // 이건 조금 무거운 듯. 하지만 많이 사용됨

export default function Date(props: { dateString: string }) {
  const { dateString } = props;

  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

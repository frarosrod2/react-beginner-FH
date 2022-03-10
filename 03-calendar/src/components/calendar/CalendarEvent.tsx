export const CalendarEvent = ({ event }: any) => {
  const { title, user } = event;

  return (
    <div>
      <span>{title}</span>
      <span>{user?.name || ''}</span>
    </div>
  );
};
